import { CREATION_SCENES } from './src/data/creationScript.js';
import * as sdk from 'microsoft-cognitiveservices-speech-sdk';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import * as dotenv from 'dotenv';
import fs from 'fs';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegStatic from 'ffmpeg-static';

// @ts-ignore
ffmpeg.setFfmpegPath(ffmpegStatic);
dotenv.config();

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

async function generateSceneAudio(dialogue: string, characterName: string): Promise<Buffer | null> {
  const cleanDialogue = cleanText(dialogue);
  
  const voiceConfig: Record<string, { voice: string; style: string; rate?: string; pitch?: string }> = {
    'narrator': { voice: 'pt-BR-AntonioNeural', style: 'newscast-casual', rate: '+0%', pitch: '+5Hz' },
    'god': { voice: 'pt-BR-DonatoNeural', style: 'narration-professional', rate: '-10%', pitch: '-10Hz' },
    'adao': { voice: 'pt-BR-AntonioNeural', style: 'gentle', rate: '+0%' },
    'eva': { voice: 'pt-BR-GiovannaNeural', style: 'cheerful', rate: '+5%' },
    'child': { voice: 'pt-BR-YaraNeural', style: 'cheerful', rate: '+0%' },
  };

  const config = voiceConfig[characterName.toLowerCase()] || voiceConfig['narrator'];

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
        if (result && result.reason === sdk.ResultReason.SynthesizingAudioCompleted && result.audioData) {
          resolve(Buffer.from(result.audioData));
        } else {
          console.error(`❌ Erro na síntese: ${result?.errorDetails}`);
          resolve(null);
        }
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
      const listVoiceFile = 'concat_voice_list_ep1.txt';
      const listVoiceContent = tempVoiceFiles.map(f => `file '${f.replace(/'/g, "'\\''")}'`).join('\n');
      fs.writeFileSync(listVoiceFile, listVoiceContent);

      const tempVoicePath = 'temp_voice_track_ep1.mp3';
      const tempMixedPath = 'temp_mixed_main_ep1.mp3';

      console.log('🔗 1. Concatenando todas as falas...');
      await new Promise((res, rej) => {
        ffmpeg()
          .input(listVoiceFile)
          .inputOptions(['-f', 'concat', '-safe', '0'])
          .outputOptions('-c', 'copy')
          .save(tempVoicePath)
          .on('end', res)
          .on('error', rej);
      });

      console.log('🎵 2. Mixando falas com a música de fundo...');
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

      console.log('🎬 3. Adicionando Abertura Nova, Transições e Encerramento (Re-encodando)...');
      
      await new Promise((res, rej) => {
        ffmpeg()
          .input(introPath)
          .input(transitionVoicePath)
          .input(transitionSfxPath)
          .input(tempMixedPath)
          .input(outroPath)
          .complexFilter([
            '[0:a][1:a][2:a][3:a][4:a]concat=n=5:v=0:a=1[out]'
          ])
          .outputOptions([
            '-map', '[out]',
            '-c:a', 'libmp3lame',
            '-ar', '44100',
            '-ac', '2',
            '-q:a', '2'
          ])
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

async function generateEpisode1Locally() {
  console.log(' ============================================');
  console.log(' GERANDO ÁUDIO: EPISÓDIO 1 - A CRIAÇÃO');
  console.log('🎬 ============================================\n');

  const scenes = CREATION_SCENES.filter(s => s && s.sceneNumber);
  const tempFiles: string[] = [];
  let idx = 0;

  console.log('🎙️ Gerando voz de transição...');
  const transitionText = "Olá meus amiguinhos! Vamos juntos descobrir a história da Criação!";
  const transitionVoiceBuffer = await generateSceneAudio(transitionText, 'narrator');
  if (transitionVoiceBuffer) {
    fs.writeFileSync('ep1_transition_voice.mp3', transitionVoiceBuffer);
  }

  // Só gerar os audios de novo se não existirem
  for (const scene of scenes) {
    console.log(`\n🎬 Cena ${scene.sceneNumber}: ${scene.title}`);
    for (const line of scene.lines) {
        const tempFile = `ep1_fix_${idx++}.mp3`;
        if (!fs.existsSync(tempFile)) {
           console.log(`🎙️ Gerando: [${line.character}]: "${line.text.substring(0, 40)}..."`);
           const audioBuffer = await generateSceneAudio(line.text, line.character);
           if (audioBuffer) fs.writeFileSync(tempFile, audioBuffer);
           await new Promise(resolve => setTimeout(resolve, 600));
        }
        tempFiles.push(tempFile);
    }
  }

  console.log('\n🔗 Construindo Episódio Final...\n');
  const finalOutputFile = 'episode01-final-bgm-full.mp3';
  
  // A NOVA ABERTURA ENVIADA PELO USUARIO
  const introPath = 'C:\\Users\\lucia\\.gemini\\antigravity\\brain\\d007f9ff-aa76-44c3-b0d3-7010fe7fb3f3\\.user_uploaded\\uploaded_media_1789059462663.mp3';
  const transitionVoicePath = 'ep1_transition_voice.mp3';
  const transitionSfxPath = 'C:\\Users\\lucia\\.gemini\\antigravity\\brain\\d007f9ff-aa76-44c3-b0d3-7010fe7fb3f3\\.user_uploaded\\uploaded_media_1789057626719.mp3';
  const bgmPath = 'C:\\Users\\lucia\\.gemini\\antigravity\\brain\\d007f9ff-aa76-44c3-b0d3-7010fe7fb3f3\\.user_uploaded\\uploaded_media_1789051021383.mp3';
  const outroPath = 'C:\\Users\\lucia\\.gemini\\antigravity\\brain\\d007f9ff-aa76-44c3-b0d3-7010fe7fb3f3\\.user_uploaded\\uploaded_media_4_1789054021541.mp3';
  
  await buildFinalEpisode(tempFiles, finalOutputFile, bgmPath, introPath, transitionVoicePath, transitionSfxPath, outroPath);

  console.log('☁️ Fazendo upload...');
  const finalBuffer = fs.readFileSync(finalOutputFile);
  const fullAudioPath = 'season1/episode01/episode01-completo.mp3';
  const fullAudioUrl = await uploadToR2(finalBuffer, fullAudioPath, 'audio/mpeg');

  // Nao apagar os temp files pra não ter que regerar tudo da Azure se formos testar de novo
  fs.unlinkSync(finalOutputFile);
  if(fs.existsSync(transitionVoicePath)) fs.unlinkSync(transitionVoicePath);

  console.log('🎉 EPISÓDIO 1 ATUALIZADO COM NOVA ABERTURA!');
  console.log(`🔗 URL: ${fullAudioUrl}`);
}

generateEpisode1Locally().catch(console.error);
