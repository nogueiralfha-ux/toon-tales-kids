import { createClient } from '@supabase/supabase-js';
import * as sdk from 'microsoft-cognitiveservices-speech-sdk';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import * as dotenv from 'dotenv';
import fs from 'fs';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegStatic from 'ffmpeg-static';
import { promisify } from 'util';

// @ts-ignore
ffmpeg.setFfmpegPath(ffmpegStatic);
dotenv.config();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const r2Client = new S3Client({
  region: 'auto',
  endpoint: process.env.CLOUDFLARE_R2_ENDPOINT!,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY!,
    secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_KEY!,
  },
});

function cleanText(text: string): string {
  return text
    .replace(/[<>]/g, '')
    .replace(/&/g, ' e ')
    .replace(/"/g, "'")
    .replace(/\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const voiceConfig: Record<string, { voice: string; style: string; rate?: string; pitch?: string }> = {
  'NARRADOR': { voice: 'pt-BR-AntonioNeural', style: 'newscast-casual', rate: '+0%', pitch: '+5Hz' },
  'DEUS': { voice: 'pt-BR-DonatoNeural', style: 'narration-professional', rate: '-10%', pitch: '-10Hz' },
  'ADAO': { voice: 'pt-BR-AntonioNeural', style: 'gentle', rate: '+0%' },
  'EVA': { voice: 'pt-BR-GiovannaNeural', style: 'cheerful', rate: '+5%' },
  'CRIANCA': { voice: 'pt-BR-YaraNeural', style: 'cheerful', rate: '+0%' },
  'NOE': { voice: 'pt-BR-AntonioNeural', style: 'serious', rate: '-5%' },
  'SARA': { voice: 'pt-BR-FranciscaNeural', style: 'cheerful', rate: '+0%' },
  'ANJO': { voice: 'pt-BR-FranciscaNeural', style: 'gentle', rate: '-5%', pitch: '+5Hz' },
};

async function generateSceneAudio(dialogue: string, characterName: string): Promise<Buffer | null> {
  const cleanDialogue = cleanText(dialogue);
  const config = voiceConfig[characterName.toUpperCase()] || voiceConfig['NARRADOR'];

  const speechConfig = sdk.SpeechConfig.fromSubscription(
    process.env.AZURE_SPEECH_KEY!,
    process.env.AZURE_SPEECH_REGION!
  );
  speechConfig.speechSynthesisVoiceName = config.voice;
  speechConfig.speechSynthesisOutputFormat = sdk.SpeechSynthesisOutputFormat.Audio48Khz192KBitRateMonoMp3;

  const ssml = `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="https://www.w3.org/2001/mstts" xml:lang="pt-BR">
  <voice name="${config.voice}">
    <mstts:express-as style="${config.style}" styledegree="2">
      <prosody rate="${config.rate || '0%'}" pitch="${config.pitch || 'default'}">
        ${cleanDialogue}
      </prosody>
    </mstts:express-as>
  </voice>
</speak>`;

  return new Promise((resolve) => {
    const synthesizer = new sdk.SpeechSynthesizer(speechConfig);
    synthesizer.speakSsmlAsync(
      ssml,
      (result) => {
        synthesizer.close();
        if (result && result.audioData) resolve(Buffer.from(result.audioData));
        else resolve(null);
      },
      (error) => {
        synthesizer.close();
        resolve(null);
      }
    );
  });
}

async function uploadToR2(buffer: Buffer, filePath: string, contentType: string): Promise<string> {
  const command = new PutObjectCommand({
    Bucket: process.env.CLOUDFLARE_R2_BUCKET_NAME,
    Key: filePath,
    Body: buffer,
    ContentType: contentType,
  });
  await r2Client.send(command);
  return `${process.env.CLOUDFLARE_R2_PUBLIC_URL}/${filePath}`;
}

async function buildFinalEpisode(
  tempVoiceFiles: string[],
  outputFile: string,
  bgmPath: string,
  introPath: string,
  transitionVoicePath: string,
  transitionSfxPath: string,
  outroPath: string
): Promise<void> {
  return new Promise(async (resolve, reject) => {
    try {
      const listVoiceFile = `concat_list_${Date.now()}.txt`;
      const listVoiceContent = tempVoiceFiles.map(f => `file '${f.replace(/'/g, "'\\''")}'`).join('\n');
      fs.writeFileSync(listVoiceFile, listVoiceContent);

      const tempVoicePath = `temp_voice_${Date.now()}.mp3`;
      const tempMixedPath = `temp_mixed_${Date.now()}.mp3`;

      console.log('      🔗 Concatenando falas...');
      await new Promise((res, rej) => {
        ffmpeg()
          .input(listVoiceFile)
          .inputOptions(['-f', 'concat', '-safe', '0'])
          .outputOptions('-c', 'copy')
          .save(tempVoicePath)
          .on('end', res)
          .on('error', rej);
      });

      console.log('      🎵 Mixando com música de fundo...');
      await new Promise((res, rej) => {
        ffmpeg()
          .input(tempVoicePath)
          .input(bgmPath)
          .inputOptions(['-stream_loop', '-1'])
          .complexFilter([
            '[1:a]volume=0.10[bg]',
            '[0:a][bg]amix=inputs=2:duration=first:dropout_transition=2[a]'
          ])
          .outputOptions(['-map', '[a]', '-c:a', 'libmp3lame', '-q:a', '2'])
          .save(tempMixedPath)
          .on('end', res)
          .on('error', rej);
      });

      console.log('      🎬 Adicionando Abertura e Encerramento...');
      await new Promise((res, rej) => {
        ffmpeg()
          .input(introPath)
          .input(transitionVoicePath)
          .input(transitionSfxPath)
          .input(tempMixedPath)
          .input(outroPath)
          .complexFilter(['[0:a][1:a][2:a][3:a][4:a]concat=n=5:v=0:a=1[out]'])
          .outputOptions(['-map', '[out]', '-c:a', 'libmp3lame', '-ar', '44100', '-ac', '2', '-q:a', '2'])
          .save(outputFile)
          .on('end', res)
          .on('error', rej);
      });

      fs.unlinkSync(listVoiceFile);
      fs.unlinkSync(tempVoicePath);
      fs.unlinkSync(tempMixedPath);
      resolve();
    } catch (err) {
      reject(err);
    }
  });
}

async function processAllEpisodes() {
  console.log('\n🎬 ============================================');
  console.log(' INICIANDO GERAÇÃO CINEMÁTICA DE TODOS OS EPISÓDIOS');
  console.log('============================================\n');

  // ASSETS FIXOS
  const introPath = 'C:\\Users\\lucia\\.gemini\\antigravity\\brain\\d007f9ff-aa76-44c3-b0d3-7010fe7fb3f3\\.user_uploaded\\uploaded_media_1789059462663.mp3'; // Nova abertura 10s
  const transitionSfxPath = 'C:\\Users\\lucia\\.gemini\\antigravity\\brain\\d007f9ff-aa76-44c3-b0d3-7010fe7fb3f3\\.user_uploaded\\uploaded_media_1789057626719.mp3'; // Efeito magico
  const bgmPath = 'C:\\Users\\lucia\\.gemini\\antigravity\\brain\\d007f9ff-aa76-44c3-b0d3-7010fe7fb3f3\\.user_uploaded\\uploaded_media_1789051021383.mp3';
  const outroPath = 'C:\\Users\\lucia\\.gemini\\antigravity\\brain\\d007f9ff-aa76-44c3-b0d3-7010fe7fb3f3\\.user_uploaded\\uploaded_media_4_1789054021541.mp3';

  // Buscar todos os episódios que ainda não têm áudio ou que queremos forçar (vamos pegar todos por enquanto)
  const { data: episodes, error } = await supabase
    .from('episodes')
    .select('*, seasons(season_number)');

  if (error || !episodes) {
    console.error('❌ Erro ao buscar episódios:', error);
    return;
  }

  // Filtrar apenas o Episódio 3 por enquanto para teste, ou todos se preferir.
  // Como o usuário quer gerar o 3, e nós já fizemos 1 e 2 localmente.
  // Vou rodar TODOS os que faltam! 
  
  for (const episode of episodes) {
    // PULAR Episódio 1 e 2 porque os roteiros locais são muito superiores aos do DB no momento!
    if (episode.title.includes('Criação') || episode.title.includes('Adão e Eva')) {
       console.log(`\n⏭️ Pulando: ${episode.title} (Já gerados via script local super-rico)`);
       continue;
    }

    console.log(`\n================================`);
    console.log(`🎬 Processando: ${episode.title}`);
    console.log(`================================`);

    const { data: scenes } = await supabase
      .from('scenes')
      .select('*')
      .eq('episode_id', episode.id)
      .order('scene_number', { ascending: true });

    if (!scenes || scenes.length === 0) {
      console.log(`   ⚠️ Nenhuma cena encontrada. Pulando.`);
      continue;
    }

    // 1. Voz de transição personalizada para o episódio
    const transitionVoicePath = `transition_${episode.id}.mp3`;
    const transitionText = `Olá meus amiguinhos! Vamos juntos descobrir a história de ${episode.title}!`;
    console.log(`   🎙️ Gerando transição: "${transitionText}"`);
    const transBuffer = await generateSceneAudio(transitionText, 'NARRADOR');
    if (transBuffer) fs.writeFileSync(transitionVoicePath, transBuffer);

    // 2. Gerar cenas
    const tempFiles: string[] = [];
    for (const scene of scenes) {
      console.log(`      [${scene.character_name}]: "${scene.dialogue.substring(0, 30)}..."`);
      const audioBuffer = await generateSceneAudio(scene.dialogue, scene.character_name);
      if (audioBuffer) {
        const tempFile = `scene_${scene.id}.mp3`;
        fs.writeFileSync(tempFile, audioBuffer);
        tempFiles.push(tempFile);
      }
      await new Promise(r => setTimeout(r, 600));
    }

    if (tempFiles.length > 0) {
      const finalOutputFile = `final_${episode.id}.mp3`;
      
      console.log(`   🛠️ Construindo Superprodução Cinematográfica...`);
      await buildFinalEpisode(
        tempFiles, finalOutputFile, bgmPath, introPath, transitionVoicePath, transitionSfxPath, outroPath
      );

      console.log(`   ☁️ Fazendo upload para a Nuvem R2...`);
      const finalBuffer = fs.readFileSync(finalOutputFile);
      const sNumber = episode.seasons?.season_number || 1;
      const eNumber = String(episode.episode_number).padStart(2, '0');
      const fileName = `season${sNumber}/episode${eNumber}/episode${eNumber}-completo.mp3`;
      
      const audioUrl = await uploadToR2(finalBuffer, fileName, 'audio/mpeg');

      console.log(`   💾 Atualizando Supabase...`);
      await supabase.from('episodes').update({ audio_url: audioUrl }).eq('id', episode.id);

      console.log(`   ✅ SUCESSO! URL: ${audioUrl}`);

      // Limpar
      tempFiles.forEach(f => fs.unlinkSync(f));
      fs.unlinkSync(finalOutputFile);
      if (fs.existsSync(transitionVoicePath)) fs.unlinkSync(transitionVoicePath);
    }
  }

  console.log('\n🎉 ============================================');
  console.log('🎉 TODA A FÁBRICA FINALIZOU O PROCESSO!');
  console.log('🎉 ============================================\n');
}

processAllEpisodes().catch(console.error);
