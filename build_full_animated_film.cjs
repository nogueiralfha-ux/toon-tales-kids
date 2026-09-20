const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const ffmpegStatic = require('ffmpeg-static');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
require('dotenv').config();

const clipsDir = path.resolve('EDITORIAL_LIBRARY/ABRAAO_ANIMATED_CLIPS');
const audioFile = path.resolve('EDITORIAL_LIBRARY/episode05-completo.mp3');
const outputFile = path.resolve('EDITORIAL_LIBRARY/Filme_Abraao_e_as_Estrelas_ANIMADO.mp4');
const desktopFile = 'C:\\Users\\lucia\\OneDrive\\Área de Trabalho\\Filme_Abraao_e_as_Estrelas.mp4';

const scenes = [
  { file: 'clip_01_ur_deserto.mp4', duration: 36.0 },
  { file: 'clip_02_chamado.mp4', duration: 36.0 },
  { file: 'clip_03_sara_tenda.mp4', duration: 38.0 },
  { file: 'clip_04_caravana.mp4', duration: 45.0 },
  { file: 'clip_05_canaa_altar.mp4', duration: 37.0 },
  { file: 'clip_06_estrelas.mp4', duration: 53.0 },
  { file: 'clip_07_alianca_futuro.mp4', duration: 35.0 },
  { file: 'clip_08_visitantes.mp4', duration: 55.0 },
  { file: 'clip_09_isaque_nascimento.mp4', duration: 30.0 },
  { file: 'clip_10_isaque_estrelas.mp4', duration: 20.44 }
];

console.log('=== ASSEMBLING 100% LIVING 3D ANIMATED MASTER FILM (00:06:25) ===');

const tempDir = path.resolve('EDITORIAL_LIBRARY/TEMP_ANIMATED_SEGMENTS');
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

const segmentFiles = [];

for (let i = 0; i < scenes.length; i++) {
  const sc = scenes[i];
  const inPath = path.join(clipsDir, sc.file);
  const outSeg = path.join(tempDir, `seg_${i.toString().padStart(2, '0')}.mp4`);
  segmentFiles.push(outSeg);

  console.log(`[SEGMENT ${i + 1}/10] Rendering living ${sc.duration}s for ${sc.file}...`);

  execFileSync(ffmpegStatic, [
    '-y',
    '-stream_loop', '-1',
    '-i', inPath,
    '-t', sc.duration.toString(),
    '-vf', 'scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2,fps=25',
    '-c:v', 'libx264',
    '-preset', 'fast',
    '-crf', '19',
    '-pix_fmt', 'yuv420p',
    outSeg
  ]);
  console.log(`[OK] Created: ${path.basename(outSeg)}`);
}

// Concatenate all 10 animated segments and mux with master audio
console.log('\n[CONCAT] Joining all 10 animated scenes with master audio...');
const concatListFile = path.join(tempDir, 'concat_list.txt');
const concatContent = segmentFiles.map(f => `file '${f.replace(/\\/g, '/')}'`).join('\n');
fs.writeFileSync(concatListFile, concatContent, 'utf8');

execFileSync(ffmpegStatic, [
  '-y',
  '-f', 'concat',
  '-safe', '0',
  '-i', concatListFile,
  '-i', audioFile,
  '-c:v', 'copy',
  '-c:a', 'aac',
  '-b:a', '192k',
  '-shortest',
  outputFile
]);

console.log(`\n[SUCCESS] Master 100% Living Animated Film created: ${outputFile}`);
const stats = fs.statSync(outputFile);
console.log(`File size: ${(stats.size / (1024 * 1024)).toFixed(2)} MB`);

// Overwrite the desktop file with this living masterpiece
fs.copyFileSync(outputFile, desktopFile);
console.log(`[DESKTOP UPDATED]: ${desktopFile}`);

// Upload to Cloudflare R2
console.log('\n[R2] Uploading living animated film to Cloudflare R2...');
const r2Client = new S3Client({
  region: 'auto',
  endpoint: process.env.CLOUDFLARE_R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY,
    secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_KEY,
  },
});

(async () => {
  const stream = fs.createReadStream(outputFile);
  const command = new PutObjectCommand({
    Bucket: process.env.CLOUDFLARE_R2_BUCKET_NAME,
    Key: 'videos/Filme_Abraao_e_as_Estrelas.mp4',
    Body: stream,
    ContentType: 'video/mp4',
  });
  await r2Client.send(command);
  console.log('[R2 COMPLETE] Living video updated at: https://pub-bf22f5d21d6d4607a123c603ac5632d1.r2.dev/videos/Filme_Abraao_e_as_Estrelas.mp4');
})();
