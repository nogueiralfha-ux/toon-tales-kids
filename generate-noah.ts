import { createClient } from '@supabase/supabase-js';
import * as sdk from 'microsoft-cognitiveservices-speech-sdk';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import * as dotenv from 'dotenv';
import fs from 'fs';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegStatic from 'ffmpeg-static';

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
  return text.replace(/[<>]/g, '').replace(/&/g, ' e ').replace(/"/g, "'").replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
}

const voiceConfig: Record<string, { voice: string; style: string; rate?: string; pitch?: string }> = {
  'NARRADOR': { voice: 'pt-BR-AntonioNeural', style: 'newscast-casual', rate: '+0%', pitch: '+5Hz' },
  'DEUS': { voice: 'pt-BR-DonatoNeural', style: 'narration-professional', rate: '-10%', pitch: '-10Hz' },
  'NOE': { voice: 'pt-BR-AntonioNeural', style: 'serious', rate: '-5%' }
};

async function generateSceneAudio(dialogue: string, characterName: string): Promise<Buffer | null> {
  const cleanDialogue = cleanText(dialogue);
  const config = voiceConfig[characterName.toUpperCase()] || voiceConfig['NARRADOR'];

  const speechConfig = sdk.SpeechConfig.fromSubscription(process.env.AZURE_SPEECH_KEY!, process.env.AZURE_SPEECH_REGION!);
  speechConfig.speechSynthesisVoiceName = config.voice;
  speechConfig.speechSynthesisOutputFormat = sdk.SpeechSynthesisOutputFormat.Audio48Khz192KBitRateMonoMp3;

  const ssml = `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="https://www.w3.org/2001/mstts" xml:lang="pt-BR">
  <voice name="${config.voice}">
    <mstts:express-as style="${config.style}" styledegree="2">
      <prosody rate="${config.rate || '0%'}" pitch="${config.pitch || 'default'}">${cleanDialogue}</prosody>
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
    Key: filePath, Body: buffer, ContentType: contentType,
  });
  await r2Client.send(command);
  return `${process.env.CLOUDFLARE_R2_PUBLIC_URL}/${filePath}`;
}

async function mixSfxWithVoice(voicePath: string, sfxPath: string, outPath: string, sfxVolume: string = "0.2"): Promise<void> {
  return new Promise((resolve, reject) => {
    ffmpeg()
      .input(voicePath)
      .input(sfxPath)
      .inputOptions(['-stream_loop', '-1']) // Loop SFX Se for mais curto
      .complexFilter([
        `[1:a]volume=${sfxVolume}[sfx]`,
        `[0:a][sfx]amix=inputs=2:duration=first:dropout_transition=2[a]`
      ])
      .outputOptions(['-map', '[a]', '-c:a', 'libmp3lame', '-q:a', '2'])
      .save(outPath)
      .on('end', () => resolve())
      .on('error', (err) => reject(err));
  });
}

async function buildFinalNoah(tempVoiceFiles: string[], outputFile: string): Promise<void> {
  const bgmPath = 'C:\\Users\\lucia\\.gemini\\antigravity\\brain\\d007f9ff-aa76-44c3-b0d3-7010fe7fb3f3\\.user_uploaded\\uploaded_media_1789051021383.mp3';
  const introPath = 'C:\\Users\\lucia\\.gemini\\antigravity\\brain\\d007f9ff-aa76-44c3-b0d3-7010fe7fb3f3\\.user_uploaded\\uploaded_media_1789059462663.mp3';
  const transitionSfxPath = 'C:\\Users\\lucia\\.gemini\\antigravity\\brain\\d007f9ff-aa76-44c3-b0d3-7010fe7fb3f3\\.user_uploaded\\uploaded_media_1789057626719.mp3';
  const outroPath = 'C:\\Users\\lucia\\.gemini\\antigravity\\brain\\d007f9ff-aa76-44c3-b0d3-7010fe7fb3f3\\.user_uploaded\\uploaded_media_4_1789054021541.mp3';
  const transitionVoicePath = 'transition_dde98c99-ccd9-495f-addd-695308ce0841.mp3';

  return new Promise(async (resolve, reject) => {
    try {
      const listVoiceFile = `concat_noah.txt`;
      const listVoiceContent = tempVoiceFiles.map(f => `file '${f}'`).join('\n');
      fs.writeFileSync(listVoiceFile, listVoiceContent);

      const tempVoicePath = `temp_noah_voice.mp3`;
      const tempMixedPath = `temp_noah_mixed.mp3`;

      console.log('      🔗 Concatenando cenas (algumas com chuva e trovão)...');
      await new Promise((res, rej) => {
        ffmpeg()
          .input(listVoiceFile)
          .inputOptions(['-f', 'concat', '-safe', '0'])
          .outputOptions('-c', 'copy')
          .save(tempVoicePath)
          .on('end', res).on('error', rej);
      });

      console.log('      🎵 Adicionando a música orquestral de fundo...');
      await new Promise((res, rej) => {
        ffmpeg()
          .input(tempVoicePath)
          .input(bgmPath)
          .inputOptions(['-stream_loop', '-1'])
          .complexFilter(['[1:a]volume=0.10[bg]', '[0:a][bg]amix=inputs=2:duration=first:dropout_transition=2[a]'])
          .outputOptions(['-map', '[a]', '-c:a', 'libmp3lame', '-q:a', '2'])
          .save(tempMixedPath)
          .on('end', res).on('error', rej);
      });

      console.log('      🎬 Adicionando Abertura, Transição e Encerramento...');
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
          .on('end', res).on('error', rej);
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

async function generateNoahWithSfx() {
  console.log('🎬 INICIANDO RE-GRAVAÇÃO DA ARCA DE NOÉ COM TROVÕES E CHUVA!\n');

  const rainSfxPath = 'C:\\Users\\lucia\\.gemini\\antigravity\\brain\\d007f9ff-aa76-44c3-b0d3-7010fe7fb3f3\\.user_uploaded\\uploaded_media_0_1789066880512.mp3';
  const thunderSfxPath = 'C:\\Users\\lucia\\.gemini\\antigravity\\brain\\d007f9ff-aa76-44c3-b0d3-7010fe7fb3f3\\.user_uploaded\\uploaded_media_1_1789066880512.mp3';

  const episodeId = 'dde98c99-ccd9-495f-addd-695308ce0841';

  const { data: scenes } = await supabase.from('scenes').select('*').eq('episode_id', episodeId).order('scene_number', { ascending: true });

  if (!scenes) return console.log('❌ Cenas não encontradas.');

  // Transição (se não existir, gera)
  const transitionVoicePath = `transition_${episodeId}.mp3`;
  if (!fs.existsSync(transitionVoicePath)) {
     const tBuf = await generateSceneAudio("Olá meus amiguinhos! Vamos juntos descobrir a história da Arca de Noé!", 'NARRADOR');
     fs.writeFileSync(transitionVoicePath, tBuf!);
  }

  const tempFiles: string[] = [];

  for (const scene of scenes) {
    console.log(`   🎙️ Gerando cena ${scene.scene_number}: [${scene.character_name}]`);
    const audioBuffer = await generateSceneAudio(scene.dialogue, scene.character_name);
    
    if (audioBuffer) {
      const rawFile = `noah_raw_${scene.id}.mp3`;
      fs.writeFileSync(rawFile, audioBuffer);

      // Cenas que levam chuva pesada e trovões (Cena 7 ao 9 - Cenas 10 a 13 no banco que correspondem ao chovendo)
      // O script original diz que a Cena 7 (onde chove) bate na Cena 10 do banco "De repente o céu escureceu"
      // Vamos olhar pelo texto para garantir!
      
      const text = scene.dialogue;
      let finalFileForScene = rawFile;

      if (text.includes("céu escureceu") || text.includes("chuva não parava") || text.includes("chuva parou") || text.includes("tempestade rugia lá fora")) {
         console.log(`      ⛈️ Aplicando Efeitos de Chuva e Trovão nesta cena...`);
         const mixedFile = `noah_mixed_${scene.id}.mp3`;
         // Usar o thunder.wav como base de tempestade pesada
         await mixSfxWithVoice(rawFile, thunderSfxPath, mixedFile, "0.35");
         finalFileForScene = mixedFile;
      }

      tempFiles.push(finalFileForScene);
    }
    await new Promise(r => setTimeout(r, 600));
  }

  const finalOutputFile = `noah_final_sfx_${Date.now()}.mp3`;
  console.log(`\n   🛠️ Construindo Superprodução Final...`);
  await buildFinalNoah(tempFiles, finalOutputFile);

  console.log(`   ☁️ Fazendo upload do Novo Episódio 3...`);
  const finalBuffer = fs.readFileSync(finalOutputFile);
  const audioUrl = await uploadToR2(finalBuffer, 'season1/episode03/episode03-completo.mp3', 'audio/mpeg');

  console.log(`   ✅ SUCESSO! URL: ${audioUrl}`);

  // Clean temp files
  tempFiles.forEach(f => {
     if(fs.existsSync(f)) fs.unlinkSync(f);
     if(f.includes('mixed')) {
       const raw = f.replace('mixed', 'raw');
       if(fs.existsSync(raw)) fs.unlinkSync(raw);
     }
  });
}

generateNoahWithSfx().catch(console.error);
