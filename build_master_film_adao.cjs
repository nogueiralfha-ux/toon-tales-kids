const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const ffmpegStatic = require('ffmpeg-static');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
require('dotenv').config();

console.log('=== TOON TALES KIDS - PRODUCAO CINEMATOGRAFICA MASTER ===');
console.log('=== EPISODIO 02: ADAO E EVA - O JARDIM PERFEITO (00:07:27.63) ===\n');

const scenesDir = path.resolve('EDITORIAL_LIBRARY/ADAO_MASTER_SCENES');
const tempDir = path.resolve('EDITORIAL_LIBRARY/TEMP_CINEMA_ADAO');
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

const audioMaster = path.resolve('EPISODIO_02_ADAO_E_EVA_AUDIO_COMPLETO.mp3');
const outputFile = path.resolve('EDITORIAL_LIBRARY/Filme_Adao_e_Eva.mp4');
const desktopPath1 = 'C:\\Users\\lucia\\OneDrive\\Área de Trabalho\\Filme_Adao_e_Eva.mp4';
const desktopPath2 = 'C:\\Users\\lucia\\Desktop\\Filme_Adao_e_Eva.mp4';

// Canonical Assets
const imgEden = path.join(scenesDir, 'scene_01_jardim_eden.jpg');
const imgFolego = path.join(scenesDir, 'scene_02_folego_vida.jpg');
const imgAnimais = path.join(scenesDir, 'scene_03_adao_animais.jpg');
const imgEva = path.join(scenesDir, 'scene_04_criacao_eva.jpg');
const imgHarmonia = path.join(scenesDir, 'scene_05_caminhando_harmonia.jpg');
const imgArvore = path.join(scenesDir, 'scene_06_arvore_vida.jpg');
const imgEscolha = path.join(scenesDir, 'scene_07_a_escolha.jpg');
const imgMedo = path.join(scenesDir, 'scene_08_tristeza_medo.jpg');
const imgRoupas = path.join(scenesDir, 'scene_09_amor_restaura.jpg');
const imgSaida = path.join(scenesDir, 'scene_10_promessa_eterna.jpg');
const clipEdenLiving = path.resolve('ADAM_EVE_EDEN_VIVIFICADO_5S.mp4');
const clipEdenWalk = path.resolve('EDITORIAL_LIBRARY/CHARACTERS/ADAO_E_EVA_6_OFFICIAL_LIVING_3D.mp4');

// 47 Shots Timeline specification (Duration in seconds)
const SHOTS = [
  // 0. Vinheta Abertura (23.0s) - No mouth moving, slow gentle zoom
  { id: 'shot_00_vinheta', type: 'image', file: imgEden, dur: 23.0, zs: '1.0', ze: '1.05', cx: 'iw/2', cy: 'ih/2' },

  // 1. O Jardim do Éden (25.0s: 23.0s -> 48.0s)
  { id: 'shot_01a_eden_vista', type: 'image', file: imgEden, dur: 12.0, zs: '1.05', ze: '1.12', cx: 'iw*0.45', cy: 'ih*0.5' },
  { id: 'shot_01b_eden_living', type: 'video', file: clipEdenLiving, dur: 5.0 },
  { id: 'shot_01c_eden_rio', type: 'image', file: imgEden, dur: 8.0, zs: '1.12', ze: '1.18', cx: 'iw*0.55', cy: 'ih*0.6' },

  // 2. Criação de Adão & Descoberta (28.5s: 48.0s -> 76.5s)
  { id: 'shot_02a_criacao_folego', type: 'image', file: imgFolego, dur: 13.0, zs: '1.0', ze: '1.08', cx: 'iw*0.5', cy: 'ih*0.45' },
  { id: 'shot_02b_adao_olhos', type: 'image', file: imgFolego, dur: 4.6, zs: '1.15', ze: '1.22', cx: 'iw*0.48', cy: 'ih*0.42' },
  { id: 'shot_02c_adao_fala_incrivel', type: 'image', file: imgFolego, dur: 2.4, zs: '1.25', ze: '1.30', cx: 'iw*0.48', cy: 'ih*0.40' }, // Adão fala: "Que lugar incrível!"
  { id: 'shot_02d_adao_animais', type: 'image', file: imgAnimais, dur: 8.5, zs: '1.02', ze: '1.09', cx: 'iw*0.5', cy: 'ih*0.5' },

  // 3. A Árvore do Conhecimento & Mandamento (28.0s: 76.5s -> 104.5s)
  { id: 'shot_03a_deus_mandamento', type: 'image', file: imgArvore, dur: 17.0, zs: '1.0', ze: '1.08', cx: 'iw*0.5', cy: 'ih*0.4' }, // Deus fala: "Adão, este jardim..."
  { id: 'shot_03b_adao_escolha', type: 'image', file: imgArvore, dur: 11.0, zs: '1.08', ze: '1.15', cx: 'iw*0.52', cy: 'ih*0.55' },

  // 4. Criação de Eva & Primeiro Encontro (23.0s: 104.5s -> 127.5s)
  { id: 'shot_04a_deus_ajudadora', type: 'image', file: imgEva, dur: 8.5, zs: '1.0', ze: '1.06', cx: 'iw*0.5', cy: 'ih*0.45' }, // Deus fala: "Farei uma ajudadora..."
  { id: 'shot_04b_revelacao_eva', type: 'image', file: imgEva, dur: 6.0, zs: '1.08', ze: '1.16', cx: 'iw*0.55', cy: 'ih*0.42' },
  { id: 'shot_04c_adao_fala_eva', type: 'image', file: imgEva, dur: 4.0, zs: '1.20', ze: '1.26', cx: 'iw*0.40', cy: 'ih*0.42' }, // Adão fala: "Ela é parte de mim."
  { id: 'shot_04d_eva_fala_ola', type: 'image', file: imgEva, dur: 2.0, zs: '1.26', ze: '1.30', cx: 'iw*0.62', cy: 'ih*0.42' }, // Eva fala: "Olá, Adão."
  { id: 'shot_04e_adao_responde_ola', type: 'image', file: imgEva, dur: 2.5, zs: '1.26', ze: '1.30', cx: 'iw*0.38', cy: 'ih*0.42' }, // Adão fala: "Olá, Eva."

  // 5. Harmonia Plena no Éden (33.5s: 127.5s -> 161.0s)
  { id: 'shot_05a_living_walk', type: 'video', file: clipEdenWalk, dur: 10.0 }, // Living 3D walk!
  { id: 'shot_05b_harmonia_animais', type: 'image', file: imgHarmonia, dur: 14.5, zs: '1.02', ze: '1.10', cx: 'iw*0.5', cy: 'ih*0.48' },
  { id: 'shot_05c_eden_sereno', type: 'image', file: imgHarmonia, dur: 9.0, zs: '1.10', ze: '1.16', cx: 'iw*0.48', cy: 'ih*0.52' },

  // 6. A Serpente & Diálogo da Dúvida (26.5s: 161.0s -> 187.5s)
  { id: 'shot_06a_serpente_arvore', type: 'image', file: imgEscolha, dur: 5.0, zs: '1.0', ze: '1.06', cx: 'iw*0.5', cy: 'ih*0.45' },
  { id: 'shot_06b_serpente_pergunta', type: 'image', file: imgEscolha, dur: 3.0, zs: '1.15', ze: '1.22', cx: 'iw*0.35', cy: 'ih*0.38' }, // Serpente fala: "Foi isso mesmo..."
  { id: 'shot_06c_eva_responde', type: 'image', file: imgEscolha, dur: 7.5, zs: '1.18', ze: '1.25', cx: 'iw*0.65', cy: 'ih*0.45' }, // Eva fala: "Deus disse que podemos..."
  { id: 'shot_06d_serpente_engano', type: 'image', file: imgEscolha, dur: 11.0, zs: '1.22', ze: '1.30', cx: 'iw*0.40', cy: 'ih*0.38' }, // Serpente fala: "Não morrerão..."

  // 7. A Escolha & O Fruto (25.5s: 187.5s -> 213.0s)
  { id: 'shot_07a_eva_contempla', type: 'image', file: imgEscolha, dur: 16.5, zs: '1.05', ze: '1.14', cx: 'iw*0.6', cy: 'ih*0.45' }, // Eva contempla e come
  { id: 'shot_07b_eva_oferece', type: 'image', file: imgEscolha, dur: 4.0, zs: '1.16', ze: '1.22', cx: 'iw*0.5', cy: 'ih*0.45' },
  { id: 'shot_07c_adao_fala_eva', type: 'image', file: imgEscolha, dur: 2.0, zs: '1.22', ze: '1.28', cx: 'iw*0.38', cy: 'ih*0.45' }, // Adão fala: "Eva..."
  { id: 'shot_07d_eva_fala_experimente', type: 'image', file: imgEscolha, dur: 1.5, zs: '1.25', ze: '1.30', cx: 'iw*0.62', cy: 'ih*0.45' }, // Eva fala: "Experimente."
  { id: 'shot_07e_adao_come', type: 'image', file: imgEscolha, dur: 1.5, zs: '1.22', ze: '1.25', cx: 'iw*0.42', cy: 'ih*0.45' },

  // 8. O Medo & O Esconderijo (20.5s: 213.0s -> 233.5s)
  { id: 'shot_08a_vergonha_medo', type: 'image', file: imgMedo, dur: 11.0, zs: '1.0', ze: '1.08', cx: 'iw*0.5', cy: 'ih*0.48' },
  { id: 'shot_08b_esconderijo', type: 'image', file: imgMedo, dur: 4.5, zs: '1.12', ze: '1.18', cx: 'iw*0.45', cy: 'ih*0.5' }, // Adão/Eva: "Precisamos nos esconder..."
  { id: 'shot_08c_passos_vento', type: 'image', file: imgMedo, dur: 5.0, zs: '1.08', ze: '1.14', cx: 'iw*0.55', cy: 'ih*0.45' },

  // 9. O Chamado de Deus & Consequências (26.5s: 233.5s -> 260.0s)
  { id: 'shot_09a_deus_chama', type: 'image', file: imgArvore, dur: 4.7, zs: '1.0', ze: '1.06', cx: 'iw*0.5', cy: 'ih*0.35' }, // Deus fala: "Adão! Onde você está?"
  { id: 'shot_09b_adao_responde_medo', type: 'image', file: imgMedo, dur: 8.3, zs: '1.18', ze: '1.25', cx: 'iw*0.42', cy: 'ih*0.48' }, // Adão fala: "Ouvi Tua voz e tive medo..."
  { id: 'shot_09c_deus_inquire', type: 'image', file: imgArvore, dur: 6.5, zs: '1.05', ze: '1.12', cx: 'iw*0.5', cy: 'ih*0.4' }, // Deus fala: "Quem disse que estava nu?..."
  { id: 'shot_09d_adao_desculpa', type: 'image', file: imgMedo, dur: 3.0, zs: '1.20', ze: '1.25', cx: 'iw*0.40', cy: 'ih*0.48' }, // Adão fala: "Foi a mulher..."
  { id: 'shot_09e_eva_desculpa', type: 'image', file: imgMedo, dur: 4.0, zs: '1.22', ze: '1.28', cx: 'iw*0.60', cy: 'ih*0.48' }, // Eva fala: "A serpente me enganou."

  // 10. A Quebra & A Tristeza (19.5s: 260.0s -> 279.5s)
  { id: 'shot_10a_consequencias', type: 'image', file: imgMedo, dur: 10.0, zs: '1.08', ze: '1.15', cx: 'iw*0.5', cy: 'ih*0.5' },
  { id: 'shot_10b_tristeza', type: 'image', file: imgMedo, dur: 9.5, zs: '1.15', ze: '1.20', cx: 'iw*0.48', cy: 'ih*0.52' },

  // 11. O Amor que Cuida & Vestimentas de Peles (18.5s: 279.5s -> 298.0s)
  { id: 'shot_11a_roupas_pele', type: 'image', file: imgRoupas, dur: 9.5, zs: '1.0', ze: '1.08', cx: 'iw*0.5', cy: 'ih*0.45' },
  { id: 'shot_11b_primeira_promessa', type: 'image', file: imgRoupas, dur: 9.0, zs: '1.10', ze: '1.18', cx: 'iw*0.5', cy: 'ih*0.42' },

  // 12. A Saída do Éden & Novo Amanhecer (22.0s: 298.0s -> 320.0s)
  { id: 'shot_12a_despedida', type: 'image', file: imgSaida, dur: 4.0, zs: '1.0', ze: '1.05', cx: 'iw*0.5', cy: 'ih*0.5' },
  { id: 'shot_12b_eva_pergunta_diferente', type: 'image', file: imgSaida, dur: 4.5, zs: '1.12', ze: '1.18', cx: 'iw*0.58', cy: 'ih*0.45' }, // Eva fala: "Adão, acha que tudo será diferente?"
  { id: 'shot_12c_adao_confia_deus', type: 'image', file: imgSaida, dur: 4.5, zs: '1.14', ze: '1.20', cx: 'iw*0.42', cy: 'ih*0.45' }, // Adão fala: "Precisamos confiar em Deus."
  { id: 'shot_12d_novo_horizonte', type: 'image', file: imgSaida, dur: 9.0, zs: '1.05', ze: '1.14', cx: 'iw*0.5', cy: 'ih*0.45' },

  // 13. Lição para as Crianças (44.0s: 320.0s -> 364.0s)
  { id: 'shot_13a_licao_amizade', type: 'image', file: imgEden, dur: 15.0, zs: '1.02', ze: '1.10', cx: 'iw*0.5', cy: 'ih*0.5' },
  { id: 'shot_13b_licao_escolhas', type: 'image', file: imgHarmonia, dur: 15.0, zs: '1.05', ze: '1.12', cx: 'iw*0.5', cy: 'ih*0.5' },
  { id: 'shot_13c_licao_amor_plano', type: 'image', file: imgSaida, dur: 14.0, zs: '1.08', ze: '1.16', cx: 'iw*0.5', cy: 'ih*0.45' },

  // 14. Encerramento Oficial Toon Tales Kids (18.0s: 364.0s -> 382.0s)
  { id: 'shot_14_assinatura', type: 'image', file: imgEden, dur: 18.0, zs: '1.0', ze: '1.06', cx: 'iw*0.5', cy: 'ih*0.5' },

  // 15. Créditos & Música Final (65.63s: 382.0s -> 447.63s)
  { id: 'shot_15a_creditos_1', type: 'image', file: imgHarmonia, dur: 22.0, zs: '1.0', ze: '1.06', cx: 'iw*0.5', cy: 'ih*0.5' },
  { id: 'shot_15b_creditos_2', type: 'image', file: imgArvore, dur: 22.0, zs: '1.0', ze: '1.06', cx: 'iw*0.5', cy: 'ih*0.5' },
  { id: 'shot_15c_creditos_3', type: 'image', file: imgSaida, dur: 21.63, zs: '1.0', ze: '1.06', cx: 'iw*0.5', cy: 'ih*0.5' }
];

async function renderAllShots() {
  console.log(`Total de Planos Cinematograficos a Renderizar: ${SHOTS.length}`);
  const totalPlannedDur = SHOTS.reduce((acc, s) => acc + s.dur, 0);
  console.log(`Duracao Total Planejada: ${totalPlannedDur.toFixed(2)}s (Alvo Audio: 447.63s)\n`);

  const segmentFiles = [];

  for (let i = 0; i < SHOTS.length; i++) {
    const s = SHOTS[i];
    const outSeg = path.join(tempDir, `shot_${i.toString().padStart(2, '0')}.mp4`);
    segmentFiles.push(outSeg);

    if (fs.existsSync(outSeg) && fs.statSync(outSeg).size > 100000) {
      console.log(`[${i + 1}/${SHOTS.length}] [CACHE OK] ${s.id} (${s.dur}s)`);
      continue;
    }

    console.log(`[${i + 1}/${SHOTS.length}] Renderizando ${s.id} (${s.dur}s)...`);

    if (s.type === 'video') {
      execFileSync(ffmpegStatic, [
        '-y',
        '-stream_loop', '-1',
        '-i', s.file,
        '-t', s.dur.toString(),
        '-vf', 'scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,fps=25',
        '-c:v', 'libx264',
        '-preset', 'veryfast',
        '-crf', '19',
        '-pix_fmt', 'yuv420p',
        outSeg
      ]);
    } else {
      const frames = Math.max(Math.round(s.dur * 25), 1);
      const zIncr = (parseFloat(s.ze) - parseFloat(s.zs)) / frames;
      const zoomExpr = `min(zoom+${zIncr.toFixed(7)},${s.ze})`;
      const vf = `scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,zoompan=z='${zoomExpr}':x='${s.cx}-(iw/zoom/2)':y='${s.cy}-(ih/zoom/2)':d=${frames}:s=1920x1080:fps=25`;

      execFileSync(ffmpegStatic, [
        '-y',
        '-i', s.file,
        '-vf', vf,
        '-c:v', 'libx264',
        '-preset', 'veryfast',
        '-crf', '19',
        '-pix_fmt', 'yuv420p',
        outSeg
      ]);
    }
  }

  console.log('\n[CONCAT] Unindo todos os 47 planos cinematograficos...');
  const concatList = path.join(tempDir, 'concat_list.txt');
  const listContent = segmentFiles.map(f => `file '${f.replace(/\\/g, '/')}'`).join('\n');
  fs.writeFileSync(concatList, listContent, 'utf8');

  console.log('[MUX] Mixando video com audio master oficial...');
  execFileSync(ffmpegStatic, [
    '-y',
    '-f', 'concat',
    '-safe', '0',
    '-i', concatList,
    '-i', audioMaster,
    '-c:v', 'copy',
    '-c:a', 'aac',
    '-b:a', '192k',
    '-shortest',
    outputFile
  ]);

  const stats = fs.statSync(outputFile);
  console.log(`\n======================================================`);
  console.log(`FILME MASTER GERADO COM SUCESSO: ${outputFile}`);
  console.log(`Tamanho: ${(stats.size / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`======================================================\n`);

  console.log('Copiando para a Area de Trabalho do Usuario...');
  try {
    fs.copyFileSync(outputFile, desktopPath1);
    console.log(`[DESKTOP 1]: ${desktopPath1}`);
  } catch(e) { console.error('Erro desktop 1:', e.message); }

  try {
    fs.copyFileSync(outputFile, desktopPath2);
    console.log(`[DESKTOP 2]: ${desktopPath2}`);
  } catch(e) { console.error('Erro desktop 2:', e.message); }

  console.log('\nEnviando filme master para Cloudflare R2...');
  const r2Client = new S3Client({
    region: 'auto',
    endpoint: process.env.CLOUDFLARE_R2_ENDPOINT,
    credentials: {
      accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY,
      secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_KEY,
    },
  });

  const fileStream = fs.createReadStream(outputFile);
  const command = new PutObjectCommand({
    Bucket: process.env.CLOUDFLARE_R2_BUCKET_NAME,
    Key: 'videos/Filme_Adao_e_Eva.mp4',
    Body: fileStream,
    ContentType: 'video/mp4',
  });
  await r2Client.send(command);
  console.log(`[R2 MASTER]: https://pub-bf22f5d21d6d4607a123c603ac5632d1.r2.dev/videos/Filme_Adao_e_Eva.mp4`);
  console.log('\nPROCESSO COMPLETO FINALIZADO COM EXITO!');
}

renderAllShots().catch(err => {
  console.error('Falha no render:', err);
  process.exit(1);
});
