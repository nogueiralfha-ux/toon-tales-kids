const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const r2Client = new S3Client({
  region: 'auto',
  endpoint: process.env.CLOUDFLARE_R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY,
    secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_KEY,
  },
});

const items = [
  {
    filePath: path.resolve('EDITORIAL_LIBRARY/Filme_Abraao_e_as_Estrelas.mp4'),
    key: 'videos/Filme_Abraao_e_as_Estrelas.mp4',
    contentType: 'video/mp4'
  },
  {
    filePath: path.resolve('Livro_Ilustrado_Abraao_Completo.pdf'),
    key: 'ebooks/Livro_Ilustrado_Abraao_Completo.pdf',
    contentType: 'application/pdf'
  },
  {
    filePath: path.resolve('Livro_Colorir_Abraao_Completo.pdf'),
    key: 'ebooks/Livro_Colorir_Abraao_Completo.pdf',
    contentType: 'application/pdf'
  }
];

async function uploadAll() {
  for (const item of items) {
    console.log(`Uploading ${item.key} (${(fs.statSync(item.filePath).size / (1024 * 1024)).toFixed(2)} MB)...`);
    const stream = fs.createReadStream(item.filePath);
    const command = new PutObjectCommand({
      Bucket: process.env.CLOUDFLARE_R2_BUCKET_NAME,
      Key: item.key,
      Body: stream,
      ContentType: item.contentType,
    });
    await r2Client.send(command);
    console.log(`[OK] Uploaded: https://pub-bf22f5d21d6d4607a123c603ac5632d1.r2.dev/${item.key}`);
  }
  console.log('\nAll assets successfully published to Cloudflare R2!');
}

uploadAll().catch(err => {
  console.error('Upload failed:', err);
  process.exit(1);
});
