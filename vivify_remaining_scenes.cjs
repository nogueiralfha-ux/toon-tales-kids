const fs = require('fs');
const path = require('path');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
require('dotenv').config();

const falKey = process.env.FAL_KEY;
if (!falKey) {
  console.error('FAL_KEY not found in .env');
  process.exit(1);
}

const r2Client = new S3Client({
  region: 'auto',
  endpoint: process.env.CLOUDFLARE_R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY,
    secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_KEY,
  },
});

const scenesToVivify = [
  {
    id: 'clip_01_ur_deserto',
    imageFile: 'scene_01_ur_deserto.jpg',
    prompt: 'Disney Pixar 3D animated film style. Abraham standing near his tent in the desert village at dusk. Abraham breathes softly, looks around serenely, with his silver beard and desert robes gently waving in the evening breeze. Campfires in the background flicker warm orange light. Extremely smooth, feature film 3D character animation.'
  },
  {
    id: 'clip_02_chamado',
    imageFile: 'scene_02_chamado.jpg',
    prompt: 'Disney Pixar 3D animated film style. Abraham in the twilight desert under a glorious celestial beam of golden divine light. Abraham gently places his hand on his heart, blinks softly and looks up toward Heaven in deep reverent prayer and peaceful emotion. The golden rays of light pulse with warmth and gentle particles. Masterpiece 3D character animation.'
  },
  {
    id: 'clip_03_sara_tenda',
    imageFile: 'scene_03_sara_tenda.jpg',
    prompt: 'Disney Pixar 3D animated film style. Inside a warm, cozy tent lit by a glowing oil lantern. Abraham and Sarah are seated together, smiling affectionately and nodding to each other with joyful faith. Abraham gently touches the travel scroll and Sarah packs with care. The lantern flame flickers warmly, casting soft gentle shadows. Heartwarming 3D character animation.'
  },
  {
    id: 'clip_04_caravana',
    imageFile: 'scene_04_caravana.jpg',
    prompt: 'Disney Pixar 3D animated film style. An epic desert caravan traversing rolling golden sand dunes. The camels steadily walk forward with gentle swaying motion, small dust kicks up softly from their hooves, sheep and travelers march onward under the bright sun. Abraham leads holding his wooden staff. Grand cinematic adventure animation, vivid realistic animal motion.'
  },
  {
    id: 'clip_05_canaa_altar',
    imageFile: 'scene_05_canaa_altar.jpg',
    prompt: 'Disney Pixar 3D animated film style. Abraham kneeling reverently before a stone altar in the lush green hills of Canaan under bright morning sunlight. He gently raises his hands toward the blue sky in profound thanksgiving and joyful praise, olive tree leaves rustle softly in the wind, wildflowers sway. Inspiring, beautiful 3D character animation.'
  },
  {
    id: 'clip_07_alianca_futuro',
    imageFile: 'scene_07_alianca_futuro.jpg',
    prompt: 'Disney Pixar 3D animated film style. Abraham standing on a grand golden cliff overlooking the vast valley of Canaan at sunset. God\'s majestic golden light beams break through the clouds. Abraham stands firm, holding his wooden staff, his desert cloak and silver hair fluttering heroically in the mountain wind as he looks toward the horizon with confident hope. Epic cinematic scale animation.'
  },
  {
    id: 'clip_08_visitantes',
    imageFile: 'scene_08_visitantes.jpg',
    prompt: 'Disney Pixar 3D animated film style. Under the shady canopy of the green oak trees, Abraham bows warmly offering a bowl of water to three luminous, smiling celestial messengers in glowing white robes. The messengers smile kindly and extend their hands with blessing. Sarah gently smiles peeking from the desert tent. Oak leaves rustle gently. Peaceful divine presence 3D animation.'
  },
  {
    id: 'clip_09_isaque_nascimento',
    imageFile: 'scene_09_isaque_nascimento.jpg',
    prompt: 'Disney Pixar 3D animated film style. Inside a sunlit tent, elderly Abraham and Sarah are crying joyful happy tears, smiling radiantly as they embrace and cradle newborn baby boy Isaac. Baby Isaac is cute, happily smiling, kicking his little feet and moving his tiny hands wrapped in linen. Radiant emotion, pure happiness, masterpiece 3D character animation.'
  },
  {
    id: 'clip_10_isaque_estrelas',
    imageFile: 'scene_10_isaque_estrelas.jpg',
    prompt: 'Disney Pixar 3D animated film style. Sitting on a desert rock at twilight, Abraham gently points his arm up toward the glittering starry night sky. Young cute toddler Isaac looks up with round, wonder-filled eyes and giggles happily, leaning affectionately against his father. The stars twinkle brightly and swirl gently across the sky. Emotional father-son bonding, exquisite 3D animation.'
  }
];

async function uploadToR2(localPath, r2Key) {
  const fileBuffer = fs.readFileSync(localPath);
  const command = new PutObjectCommand({
    Bucket: process.env.CLOUDFLARE_R2_BUCKET_NAME,
    Key: r2Key,
    Body: fileBuffer,
    ContentType: 'image/jpeg',
  });
  await r2Client.send(command);
  return `https://pub-bf22f5d21d6d4607a123c603ac5632d1.r2.dev/${r2Key}`;
}

async function vivifySingleScene(scene) {
  const localImg = path.resolve('EDITORIAL_LIBRARY/ABRAAO_MASTER_SCENES', scene.imageFile);
  const outputFile = path.resolve('EDITORIAL_LIBRARY/ABRAAO_ANIMATED_CLIPS', `${scene.id}.mp4`);

  if (fs.existsSync(outputFile)) {
    console.log(`[SKIP] ${scene.id} already exists (${(fs.statSync(outputFile).size / (1024 * 1024)).toFixed(2)} MB)`);
    return outputFile;
  }

  console.log(`\n========================================`);
  console.log(`[START] Vivifying ${scene.id} (${scene.imageFile})...`);
  const r2Key = `staging/${scene.imageFile}`;
  const publicUrl = await uploadToR2(localImg, r2Key);
  console.log(`[R2 READY] ${publicUrl}`);

  const endpoint = 'fal-ai/kling-video/v1/standard/image-to-video';
  const payload = {
    prompt: scene.prompt,
    image_url: publicUrl,
    duration: '5',
    aspect_ratio: '16:9'
  };

  const queueUrl = `https://queue.fal.run/${endpoint}`;
  const submitRes = await fetch(queueUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Key ${falKey}`,
      'Content-Type': 'application/json',
      'User-Agent': 'ToonTalesKids/1.0'
    },
    body: JSON.stringify(payload)
  });

  if (!submitRes.ok) {
    const errText = await submitRes.text();
    throw new Error(`Submit failed for ${scene.id} HTTP ${submitRes.status}: ${errText}`);
  }

  const queueData = await submitRes.json();
  const { status_url, response_url, request_id } = queueData;
  console.log(`[QUEUED] ${scene.id} -> Req ID: ${request_id}`);

  const startTime = Date.now();
  let completedData = null;

  while (!completedData) {
    await new Promise(r => setTimeout(r, 4000));
    const elapsed = Math.round((Date.now() - startTime) / 1000);

    const statusRes = await fetch(status_url, {
      headers: { 'Authorization': `Key ${falKey}` }
    });

    if (!statusRes.ok) {
      console.log(`[WARN] ${scene.id} status returned ${statusRes.status}, retrying...`);
      continue;
    }

    const statusData = await statusRes.json();
    console.log(`[${scene.id} - ${elapsed}s] Status: ${statusData.status}`);

    if (statusData.status === 'COMPLETED') {
      const resultRes = await fetch(response_url, {
        headers: { 'Authorization': `Key ${falKey}` }
      });
      completedData = await resultRes.json();
      break;
    } else if (statusData.status === 'FAILED' || statusData.status === 'ERROR') {
      throw new Error(`Generation failed for ${scene.id}: ${JSON.stringify(statusData)}`);
    }
  }

  const videoUrl = completedData.video?.url;
  if (!videoUrl) throw new Error(`No video URL returned for ${scene.id}`);

  console.log(`[DOWNLOAD] Downloading ${scene.id} from ${videoUrl}...`);
  const vidRes = await fetch(videoUrl);
  if (!vidRes.ok) throw new Error(`Download failed HTTP ${vidRes.status}`);
  const vidBuffer = Buffer.from(await vidRes.arrayBuffer());
  fs.writeFileSync(outputFile, vidBuffer);
  console.log(`[SUCCESS] ${scene.id} saved to ${outputFile} (${(vidBuffer.length / (1024 * 1024)).toFixed(2)} MB)`);

  return outputFile;
}

(async () => {
  console.log(`=== STARTING BATCH VIVIFICATION OF ${scenesToVivify.length} SCENES ===`);
  for (let i = 0; i < scenesToVivify.length; i++) {
    const sc = scenesToVivify[i];
    console.log(`\n--> Processing [${i + 1}/${scenesToVivify.length}]: ${sc.id}`);
    try {
      await vivifySingleScene(sc);
    } catch (err) {
      console.error(`[ERROR ON ${sc.id}]:`, err.message);
    }
  }
  console.log('\n=== ALL SCENES COMPLETED! ===');
})();
