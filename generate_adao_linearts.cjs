const fs = require('fs');
const path = require('path');
const jpeg = require('jpeg-js');

const inDir = path.resolve('EDITORIAL_LIBRARY/ADAO_MASTER_SCENES');
const outDir = path.resolve('EDITORIAL_LIBRARY/LINEARTS_ADAO');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const scenes = [
  'scene_01_jardim_eden.jpg',
  'scene_02_folego_vida.jpg',
  'scene_03_adao_animais.jpg',
  'scene_04_criacao_eva.jpg',
  'scene_05_caminhando_harmonia.jpg',
  'scene_06_arvore_vida.jpg',
  'scene_07_a_escolha.jpg',
  'scene_08_tristeza_medo.jpg',
  'scene_09_amor_restaura.jpg',
  'scene_10_promessa_eterna.jpg'
];

function processLineArt(inPath, outPath) {
  const jpegData = fs.readFileSync(inPath);
  const raw = jpeg.decode(jpegData, { useTArray: true });
  const w = raw.width;
  const h = raw.height;

  // 1. Grayscale
  const gray = new Uint8Array(w * h);
  for (let i = 0; i < w * h; i++) {
    const r = raw.data[i * 4];
    const g = raw.data[i * 4 + 1];
    const b = raw.data[i * 4 + 2];
    gray[i] = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
  }

  // 2. 3x3 Smooth Box Blur (denoise)
  const smooth = new Uint8Array(w * h);
  for (let y = 1; y < h - 1; y++) {
    const yw = y * w;
    const yPrev = yw - w;
    const yNext = yw + w;
    for (let x = 1; x < w - 1; x++) {
      const sum = gray[yPrev + (x - 1)] + gray[yPrev + x] + gray[yPrev + (x + 1)]
                + gray[yw + (x - 1)]    + gray[yw + x]    + gray[yw + (x + 1)]
                + gray[yNext + (x - 1)] + gray[yNext + x] + gray[yNext + (x + 1)];
      smooth[yw + x] = Math.round(sum / 9);
    }
  }

  // 3. Sobel Edge Detection
  const edges = new Uint8Array(w * h);
  const THRESHOLD = 36;

  for (let y = 2; y < h - 2; y++) {
    const yw = y * w;
    const yPrev = yw - w;
    const yNext = yw + w;
    for (let x = 2; x < w - 2; x++) {
      // Sobel horizontal
      const gx = -1 * smooth[yPrev + (x - 1)] + 1 * smooth[yPrev + (x + 1)]
               + -2 * smooth[yw    + (x - 1)] + 2 * smooth[yw    + (x + 1)]
               + -1 * smooth[yNext + (x - 1)] + 1 * smooth[yNext + (x + 1)];

      // Sobel vertical
      const gy = -1 * smooth[yPrev + (x - 1)] - 2 * smooth[yPrev + x] - 1 * smooth[yPrev + (x + 1)]
               +  1 * smooth[yNext + (x - 1)] + 2 * smooth[yNext + x] + 1 * smooth[yNext + (x + 1)];

      const mag = Math.min(255, Math.sqrt(gx * gx + gy * gy));
      edges[yw + x] = mag > THRESHOLD ? 255 : 0;
    }
  }

  // 4. Invert and Dilate for thick clear outlines
  const dilated = new Uint8Array(w * h);
  dilated.fill(255); // White background

  for (let y = 1; y < h - 1; y++) {
    const yw = y * w;
    for (let x = 1; x < w - 1; x++) {
      if (edges[yw + x] === 255) {
        // Draw dark 2x2 outline
        dilated[yw + x] = 18;
        dilated[yw + x + 1] = 18;
        dilated[yw + w + x] = 18;
        dilated[yw + w + x + 1] = 18;
      }
    }
  }

  // 5. Encode to JPEG
  const outBuf = Buffer.alloc(w * h * 4);
  for (let i = 0; i < w * h; i++) {
    const v = dilated[i];
    outBuf[i * 4] = v;
    outBuf[i * 4 + 1] = v;
    outBuf[i * 4 + 2] = v;
    outBuf[i * 4 + 3] = 255;
  }

  const encoded = jpeg.encode({ data: outBuf, width: w, height: h }, 90);
  fs.writeFileSync(outPath, encoded.data);
}

scenes.forEach((f, idx) => {
  const inP = path.join(inDir, f);
  const outP = path.join(outDir, f.replace('.jpg', '_lineart.jpg'));
  console.log(`[${idx + 1}/${scenes.length}] Processando line art: ${f}...`);
  processLineArt(inP, outP);
  console.log(` -> Salvo: ${outP} (${(fs.statSync(outP).size / 1024).toFixed(1)} KB)`);
});
console.log('Todas as 10 line arts foram geradas com sucesso!');
