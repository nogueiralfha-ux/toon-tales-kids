const fs = require('fs');
const path = require('path');
const jpeg = require('jpeg-js');

const inDir = path.resolve('EDITORIAL_LIBRARY/ABRAAO_MASTER_SCENES');
const outDir = path.resolve('EDITORIAL_LIBRARY/LINEARTS_ABRAAO');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const frames = [
  'cover_abraao.jpg',
  'scene_01_ur_deserto.jpg',
  'scene_02_chamado.jpg',
  'scene_03_sara_tenda.jpg',
  'scene_04_caravana.jpg',
  'scene_05_canaa_altar.jpg',
  'scene_06_estrelas.jpg',
  'scene_08_visitantes.jpg',
  'scene_09_isaque_nascimento.jpg',
  'scene_10_isaque_estrelas.jpg'
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
      const idx = yw + x;
      const gx = -smooth[yPrev + (x - 1)] + smooth[yPrev + (x + 1)]
                 - 2 * smooth[idx - 1]     + 2 * smooth[idx + 1]
                 - smooth[yNext + (x - 1)] + smooth[yNext + (x + 1)];

      const gy = -smooth[yPrev + (x - 1)] - 2 * smooth[yPrev + x] - smooth[yPrev + (x + 1)]
                 + smooth[yNext + (x - 1)] + 2 * smooth[yNext + x] + smooth[yNext + (x + 1)];

      const mag = Math.sqrt(gx * gx + gy * gy);
      if (mag > THRESHOLD) {
        edges[idx] = 1;
      }
    }
  }

  // 4. Morphological Dilation (Radius 1 for crisp, bold outlines)
  const RADIUS = 1;
  const dilated = new Uint8Array(w * h);

  for (let y = RADIUS; y < h - RADIUS; y++) {
    for (let x = RADIUS; x < w - RADIUS; x++) {
      if (edges[y * w + x] === 1) {
        for (let dy = -RADIUS; dy <= RADIUS; dy++) {
          for (let dx = -RADIUS; dx <= RADIUS; dx++) {
            dilated[(y + dy) * w + (x + dx)] = 1;
          }
        }
      }
    }
  }

  // 5. Output pure black & white line art JPEG
  const outRaw = {
    width: w,
    height: h,
    data: Buffer.alloc(w * h * 4)
  };

  for (let i = 0; i < w * h; i++) {
    const isLine = dilated[i] === 1;
    const val = isLine ? 15 : 255;
    outRaw.data[i * 4] = val;
    outRaw.data[i * 4 + 1] = val;
    outRaw.data[i * 4 + 2] = val;
    outRaw.data[i * 4 + 3] = 255;
  }

  const encoded = jpeg.encode(outRaw, 92);
  fs.writeFileSync(outPath, encoded.data);
  console.log(`[OK] Line art generated: ${path.basename(outPath)}`);
}

console.log('Generating bold line arts for Coloring Book from master video keyframes...');
for (const file of frames) {
  const inPath = path.join(inDir, file);
  const outName = file.replace('.jpg', '_lineart.jpg');
  const outPath = path.join(outDir, outName);
  processLineArt(inPath, outPath);
}
console.log('All line arts successfully created!');
