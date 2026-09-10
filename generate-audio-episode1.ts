import { createClient } from '@supabase/supabase-js';
import * as sdk from 'microsoft-cognitiveservices-speech-sdk';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import * as dotenv from 'dotenv';

dotenv.config();

// ============================================
// CONFIGURAÇÕES
// ============================================
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

// ============================================
// FUNÇÃO: GERAR ÁUDIO DE UMA CENA
// ============================================
async function generateSceneAudio(
  dialogue: string,
  characterName: string,
  emotion?: string
): Promise<Buffer | null> {
  const voiceMap: Record<string, { voice: string; style?: string }> = {
    'NARRADOR': { voice: 'pt-BR-AntonioNeural', style: 'cheerful' },
    'DEUS': { voice: 'pt-BR-DonatoNeural', style: 'gentle' },
    'ADAO': { voice: 'pt-BR-AntonioNeural', style: 'gentle' },
    'EVA': { voice: 'pt-BR-GiovannaNeural', style: 'gentle' },
    'NOE': { voice: 'pt-BR-AntonioNeural', style: 'serious' },
    'ABRAAO': { voice: 'pt-BR-AntonioNeural', style: 'gentle' },
    'SARA': { voice: 'pt-BR-FranciscaNeural', style: 'gentle' },
    'ANJO': { voice: 'pt-BR-FranciscaNeural', style: 'calm' },
  };

  const config = voiceMap[characterName] || voiceMap['NARRADOR'];
  const style = emotion || config.style;

  const speechConfig = sdk.SpeechConfig.fromSubscription(
    process.env.AZURE_SPEECH_KEY!,
    process.env.AZURE_SPEECH_REGION!
  );
  speechConfig.speechSynthesisVoiceName = config.voice;

  const ssml = `
    <speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" 
           xmlns:mstts="https://www.w3.org/2001/mstts" xml:lang="pt-BR">
      <voice name="${config.voice}">
        <mstts:express-as style="${style}" styledegree="1.5">
          ${dialogue}
        </mstts:express-as>
      </voice>
    </speak>
  `;

  return new Promise((resolve, reject) => {
    const synthesizer = new sdk.SpeechSynthesizer(speechConfig);

    synthesizer.speakSsmlAsync(
      ssml,
      (result) => {
        synthesizer.close();
        if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
          resolve(Buffer.from(result.audioData));
        } else {
          console.error(`❌ Erro na síntese: ${result.errorDetails}`);
          resolve(null);
        }
      },
      (error) => {
        synthesizer.close();
        console.error(`❌ Erro: ${error}`);
        resolve(null);
      }
    );
  });
}

// ============================================
// FUNÇÃO: UPLOAD NO R2
// ============================================
async function uploadToR2(
  buffer: Buffer,
  filePath: string,
  contentType: string
): Promise<string> {
  const command = new PutObjectCommand({
    Bucket: process.env.CLOUDFLARE_R2_BUCKET_NAME,
    Key: filePath,
    Body: buffer,
    ContentType: contentType,
  });

  await r2Client.send(command);
  return `${process.env.CLOUDFLARE_R2_PUBLIC_URL}/${filePath}`;
}

// ============================================
// FUNÇÃO PRINCIPAL
// ============================================
async function generateEpisode1() {
  console.log(' ============================================');
  console.log(' GERANDO ÁUDIO: EPISÓDIO 1 - A CRIAÇÃO');
  console.log('🎬 ============================================\n');

  const { data: episode, error: episodeError } = await supabase
    .from('episodes')
    .select('id, title, slug')
    .eq('slug', 'a-criacao')
    .single();

  if (episodeError || !episode) {
    console.error('❌ Episódio não encontrado:', episodeError);
    return;
  }

  console.log(`✅ Episódio encontrado: ${episode.title}\n`);

  const { data: scenes, error: scenesError } = await supabase
    .from('scenes')
    .select('*')
    .eq('episode_id', episode.id)
    .order('scene_number', { ascending: true });

  if (scenesError || !scenes) {
    console.error('❌ Cenas não encontradas:', scenesError);
    return;
  }

  console.log(`📋 ${scenes.length} cenas encontradas\n`);

  const audioBuffers: Buffer[] = [];
  const audioUrls: string[] = [];

  for (const scene of scenes) {
    console.log(`🎙️ Cena ${scene.scene_number}/18: ${scene.character_name}`);
    console.log(`   "${scene.dialogue.substring(0, 60)}..."`);

    const audioBuffer = await generateSceneAudio(
      scene.dialogue,
      scene.character_name,
      scene.emotion
    );

    if (audioBuffer) {
      const sceneAudioPath = `season1/episode01/scene${String(scene.scene_number).padStart(2, '0')}.mp3`;
      const sceneAudioUrl = await uploadToR2(audioBuffer, sceneAudioPath, 'audio/mpeg');

      await supabase
        .from('scenes')
        .update({ audio_url: sceneAudioUrl })
        .eq('id', scene.id);

      audioBuffers.push(audioBuffer);
      audioUrls.push(sceneAudioUrl);
      console.log(`   ✅ Áudio gerado (${(audioBuffer.length / 1024).toFixed(1)} KB)\n`);
    } else {
      console.log(`   ❌ Falha ao gerar áudio\n`);
    }

    await new Promise(resolve => setTimeout(resolve, 800));
  }

  console.log('🔗 Concatenando áudios...\n');
  const fullAudioBuffer = Buffer.concat(audioBuffers);

  const fullAudioPath = 'season1/episode01/episode01-completo.mp3';
  const fullAudioUrl = await uploadToR2(fullAudioBuffer, fullAudioPath, 'audio/mpeg');

  console.log(` Áudio completo: ${fullAudioUrl}\n`);

  await supabase
    .from('episodes')
    .update({ audio_url: fullAudioUrl })
    .eq('id', episode.id);

  await supabase.from('audio_files').insert({
    episode_id: episode.id,
    file_url: fullAudioUrl,
    duration_seconds: scenes.reduce((sum, s) => sum + (s.duration_seconds || 0), 0),
    file_size_bytes: fullAudioBuffer.length,
    provider: 'azure',
  });

  console.log('🎉 ============================================');
  console.log('🎉 EPISÓDIO 1 GERADO COM SUCESSO!');
  console.log('🎉 ============================================');
  console.log(`\n🔗 URL do áudio completo: ${fullAudioUrl}`);
  console.log(`📊 Tamanho: ${(fullAudioBuffer.length / 1024 / 1024).toFixed(2)} MB`);
  console.log(`🎬 Cenas geradas: ${audioBuffers.length}/18`);
  console.log(`\n🎧 Abra a URL no navegador para ouvir!`);
}

generateEpisode1().catch(console.error);
