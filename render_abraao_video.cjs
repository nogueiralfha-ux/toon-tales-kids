const fs = require('fs');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegStatic = require('ffmpeg-static');
ffmpeg.setFfmpegPath(ffmpegStatic);

const audioFile = path.resolve('EDITORIAL_LIBRARY/episode05-completo.mp3');
const outputFile = path.resolve('EDITORIAL_LIBRARY/Filme_Abraao_e_as_Estrelas.mp4');

const scenes = [
  { file: path.resolve('EDITORIAL_LIBRARY/ABRAAO_MASTER_SCENES/scene_01_ur_deserto.jpg'), duration: 36, mode: 'zoom_in' },
  { file: path.resolve('EDITORIAL_LIBRARY/ABRAAO_MASTER_SCENES/scene_02_chamado.jpg'), duration: 36, mode: 'zoom_in' },
  { file: path.resolve('EDITORIAL_LIBRARY/ABRAAO_MASTER_SCENES/scene_03_sara_tenda.jpg'), duration: 38, mode: 'zoom_in' },
  { file: path.resolve('EDITORIAL_LIBRARY/ABRAAO_MASTER_SCENES/scene_04_caravana.jpg'), duration: 45, mode: 'pan_right' },
  { file: path.resolve('EDITORIAL_LIBRARY/ABRAAO_MASTER_SCENES/scene_05_canaa_altar.jpg'), duration: 37, mode: 'zoom_in' },
  { file: path.resolve('EDITORIAL_LIBRARY/ABRAAO_MASTER_SCENES/scene_06_estrelas.jpg'), duration: 53, mode: 'tilt_up' },
  { file: path.resolve('EDITORIAL_LIBRARY/ABRAAO_MASTER_SCENES/scene_07_alianca_futuro.jpg'), duration: 35, mode: 'zoom_in' },
  { file: path.resolve('EDITORIAL_LIBRARY/ABRAAO_MASTER_SCENES/scene_08_visitantes.jpg'), duration: 55, mode: 'zoom_in' },
  { file: path.resolve('EDITORIAL_LIBRARY/ABRAAO_MASTER_SCENES/scene_09_isaque_nascimento.jpg'), duration: 30, mode: 'zoom_in' },
  { file: path.resolve('EDITORIAL_LIBRARY/ABRAAO_MASTER_SCENES/scene_10_isaque_estrelas.jpg'), duration: 21, mode: 'zoom_in' }
];

const fps = 25;
let filterComplex = '';
let concatInputs = '';

const command = ffmpeg();

scenes.forEach((scene, index) => {
  command.input(scene.file);
  const frames = Math.floor(scene.duration * fps);
  
  let zoomExpr;
  if (scene.mode === 'pan_right') {
    zoomExpr = `zoompan=z=1.12:x='if(lte(on,1),(iw-iw/zoom)*0.2,x+0.35)':y='(ih-ih/zoom)/2':d=${frames}:s=1920x1080,framerate=${fps}`;
  } else if (scene.mode === 'tilt_up') {
    zoomExpr = `zoompan=z='min(zoom+0.0003,1.15)':x='iw/2-(iw/zoom/2)':y='if(lte(on,1),(ih-ih/zoom)*0.8,max((ih-ih/zoom)*0.1,y-0.3))':d=${frames}:s=1920x1080,framerate=${fps}`;
  } else {
    zoomExpr = `zoompan=z='min(zoom+0.0003,1.15)':d=${frames}:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1920x1080,framerate=${fps}`;
  }

  const filter = `[${index}:v]scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,${zoomExpr}[v${index}];`;
  filterComplex += filter;
  concatInputs += `[v${index}]`;
});

filterComplex += `${concatInputs}concat=n=${scenes.length}:v=1:a=0[outv]`;

command.input(audioFile);

command
  .complexFilter(filterComplex)
  .outputOptions([
    '-map [outv]',
    `-map ${scenes.length}:a`,
    '-c:v libx264',
    '-preset fast',
    '-crf 20',
    '-pix_fmt yuv420p',
    '-c:a aac',
    '-b:a 192k',
    '-shortest'
  ])
  .save(outputFile)
  .on('start', (cmd) => {
    console.log('FFmpeg render started for Filme Abraao e as Estrelas...');
  })
  .on('progress', (progress) => {
    if (progress.percent) {
      process.stdout.write(`Rendering: ${Math.round(progress.percent)}%\r`);
    }
  })
  .on('end', () => {
    console.log('\n[SUCCESS] Master Video generated successfully:', outputFile);
    const stats = fs.statSync(outputFile);
    console.log(`Video size: ${(stats.size / (1024 * 1024)).toFixed(2)} MB`);
  })
  .on('error', (err) => {
    console.error('Error generating video:', err);
    process.exit(1);
  });

console.log('Starting Master Cinema Render of Episode 5 (Abraão e as Estrelas)...');
