const { MsEdgeTTS, OUTPUT_FORMAT } = require('msedge-tts');
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const ffmpegStatic = require('ffmpeg-static');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
require('dotenv').config();

const r2Client = new S3Client({
  region: 'auto',
  endpoint: process.env.CLOUDFLARE_R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY,
    secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_KEY,
  },
});

const outDir = path.resolve('render/ep01_multilang');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const linesEN = [
  // Cena 1
  { id: 's1_l1', character: 'narrator', text: 'Before there were any mountains...' },
  { id: 's1_l2', character: 'narrator', text: 'Before the rivers flowed...' },
  { id: 's1_l3', character: 'narrator', text: 'Before the birds flew across the sky...' },
  { id: 's1_l4', character: 'narrator', text: 'Even before the Sun and the Moon shone...' },
  { id: 's1_l5', character: 'narrator', text: 'There were no cities. No trees. No animals. The world had not yet been formed.' },
  { id: 's1_l6', character: 'narrator', text: 'But God was there.' },
  { id: 's1_l7', character: 'narrator', text: 'And then... God began a wonderful work.' },
  // Cena 2
  { id: 's2_l1', character: 'narrator', text: 'The Earth was formless and empty. Darkness was over the surface of the deep waters.' },
  { id: 's2_l2', character: 'god', text: 'Let there be light!' },
  { id: 's2_l3', character: 'narrator', text: 'And light appeared! God saw that the light was good.' },
  { id: 's2_l4', character: 'narrator', text: 'God called the light "day"... and the darkness He called "night".' },
  { id: 's2_l5', character: 'narrator', text: 'On that very first day, God began His wonderful work of creation.' },
  // Cena 3
  { id: 's3_l1', character: 'narrator', text: 'On the second day, God continued His work.' },
  { id: 's3_l2', character: 'narrator', text: 'He separated the waters and created the vast sky above them.' },
  { id: 's3_l3', character: 'narrator', text: 'Now there was space... there was sky... there was air.' },
  { id: 's3_l4', character: 'narrator', text: 'The world was beginning to take shape.' },
  // Cena 4
  { id: 's4_l1', character: 'narrator', text: 'Then God gathered the waters into their places. And dry land appeared.' },
  { id: 's4_l2', character: 'god', text: 'Let the land produce vegetation!' },
  { id: 's4_l3', character: 'narrator', text: 'And something incredible happened! Tiny plants began to sprout. Then came tall trees... colorful flowers... seeds... and lush green fields.' },
  { id: 's4_l4', character: 'narrator', text: 'The Earth was becoming more and more beautiful. God saw that all of it was good.' },
  { id: 's4_l5_q', character: 'narrator', text: 'And what about you... which sweet fruit or colorful flower that God made do you like the most?' },
  { id: 's4_l6_a', character: 'child', text: 'Mmm, I love bright red strawberries and super crunchy apples!' },
  { id: 's4_l7', character: 'narrator', text: 'How delicious! All of this was made with love to feed and bring joy to our world.' },
  // Cena 5
  { id: 's5_l1', character: 'narrator', text: 'Then came the fourth day. God placed great lights in the sky.' },
  { id: 's5_l2', character: 'narrator', text: 'The Sun to govern the day... the Moon to light up the night... and countless stars began to sparkle.' },
  { id: 's5_l3', character: 'narrator', text: 'Look up at the sky on a dark night. Do you prefer the warm Sun during the day or the twinkling stars at night?' },
  { id: 's5_l3_a', character: 'child', text: 'I love counting the stars... it feels like they are winking at me in the sky!' },
  { id: 's5_l4', character: 'narrator', text: 'God knows every single one of them by name.' },
  // Cena 6
  { id: 's6_l1', character: 'narrator', text: 'On the fifth day, something extraordinary happened. The seas came alive!' },
  { id: 's6_l2', character: 'narrator', text: 'Tiny little fish... enormous whales... sea creatures of every kind.' },
  { id: 's6_l3', character: 'narrator', text: 'And then... the skies were filled with life too! Birds began to soar.' },
  { id: 's6_l4', character: 'narrator', text: 'Some flew high. Others flew low. Some were big. Others were tiny. And God saw that all of it was good.' },
  // Cena 7
  { id: 's7_l1', character: 'narrator', text: 'But something was still missing. We arrived at the sixth day. The Earth began to fill with animals.' },
  { id: 's7_l2', character: 'narrator', text: 'Big animals... small animals... fast animals... strong animals...' },
  { id: 's7_l3', character: 'narrator', text: 'Lions. Elephants. Giraffes. Bunnies. Horses. And many more.' },
  { id: 's7_l4', character: 'narrator', text: 'Each one unique. Each one special. Each one created by God.' },
  { id: 's7_l5_q', character: 'narrator', text: 'And you listening right now... what is your favorite animal that God created?' },
  { id: 's7_l6_a', character: 'child', text: 'I love giant elephants and playful little puppies!' },
  { id: 's7_l7', character: 'narrator', text: 'How wonderful! God put so much imagination and love into every single creature.' },
  // Cena 8
  { id: 's8_l1', character: 'narrator', text: 'Then, God made His most special creation.' },
  { id: 's8_l2', character: 'narrator', text: 'From the dust of the ground, God formed the man, Adam, and breathed into his nostrils the breath of life!' },
  { id: 's8_l3', character: 'narrator', text: 'And God saw that it was not good for the man to be alone. With tender love, He created Eve, a partner to walk beside him.' },
  { id: 's8_l4', character: 'god', text: 'Be fruitful and multiply! Fill the earth and care with love for all of My creation.' },
  { id: 's8_l5', character: 'narrator', text: 'Adam and Eve were in the Garden of Eden, with hearts full of joy, living in perfect friendship with God.' },
  // Cena 9
  { id: 's9_l1', character: 'narrator', text: 'Now there was light. There was sky. There were seas. There were trees. Flowers. Stars. Animals. And people.' },
  { id: 's9_l2', character: 'narrator', text: 'God looked at everything He had made.' },
  { id: 's9_l3', character: 'narrator', text: 'And He saw that it was very good.' },
  // Cena 10
  { id: 's10_l1', character: 'narrator', text: 'On the seventh day, God finished His work. He rested from all that He had done.' },
  { id: 's10_l2', character: 'narrator', text: 'Not because He was tired... but because His work was complete.' },
  { id: 's10_l3', character: 'narrator', text: 'The very first chapter of the story of our world had begun.' },
  // Cena 11
  { id: 's11_l1', character: 'narrator', text: 'And do you know what this story teaches us?' },
  { id: 's11_l2', character: 'narrator', text: 'You are not here by accident. The world around you is full of marvelous things.' },
  { id: 's11_l3', character: 'narrator', text: 'The sky... the trees... the animals... the people...' },
  { id: 's11_l4', character: 'narrator', text: 'Everything reminds us that God is the Creator.' },
  { id: 's11_l4_q', character: 'narrator', text: 'And how can we show love and care for God’s beautiful world today?' },
  { id: 's11_l5', character: 'child', text: 'We should take care of the world God created, watering the little plants and loving the animals!' },
  { id: 's11_l6', character: 'narrator', text: 'Exactly!' },
  { id: 's11_l7', character: 'narrator', text: 'Whenever you look up at the sky... hear a bird sing... or see a flower bloom... remember: God created it all. And He taught us to care for His creation.' },
  { id: 's11_l8', character: 'narrator', text: 'Until the next adventure!' },
  // Cena 12
  { id: 's12_l1', character: 'child', text: 'Toon Tales Kids!' },
  { id: 's12_l1b', character: 'narrator', text: 'And that was another adventure of the Audio Bible. But the story is not over yet... A brand new adventure is waiting for you.' },
  { id: 's12_l2', character: 'child', text: 'Toon Tales Kids!' },
  { id: 's12_l3', character: 'narrator', text: 'Stories that teach...' },
  { id: 's12_l4', character: 'child', text: '...and adventures that transform!' }
];

const linesES = [
  // Cena 1
  { id: 's1_l1', character: 'narrator', text: 'Antes de que existieran las montañas...' },
  { id: 's1_l2', character: 'narrator', text: 'Antes de que los ríos corrieran...' },
  { id: 's1_l3', character: 'narrator', text: 'Antes de que los pájaros volaran por el cielo...' },
  { id: 's1_l4', character: 'narrator', text: 'Incluso antes de que el Sol y la Luna brillaran...' },
  { id: 's1_l5', character: 'narrator', text: 'No había ciudades. No había árboles. No había animales. El mundo aún no había sido formado.' },
  { id: 's1_l6', character: 'narrator', text: 'Pero Dios estaba allí.' },
  { id: 's1_l7', character: 'narrator', text: 'Y entonces... Dios comenzó una obra maravillosa.' },
  // Cena 2
  { id: 's2_l1', character: 'narrator', text: 'La Tierra estaba desordenada y vacía. Había oscuridad sobre las aguas.' },
  { id: 's2_l2', character: 'god', text: '¡Hágase la luz!' },
  { id: 's2_l3', character: 'narrator', text: '¡Y la luz apareció! Dios vio que la luz era buena.' },
  { id: 's2_l4', character: 'narrator', text: 'Dios llamó a la luz "día"... y a la oscuridad llamó "noche".' },
  { id: 's2_l5', character: 'narrator', text: 'En ese primer día, Dios comenzó su maravillosa obra de creación.' },
  // Cena 3
  { id: 's3_l1', character: 'narrator', text: 'En el segundo día, Dios continuó su obra.' },
  { id: 's3_l2', character: 'narrator', text: 'Separó las aguas y creó el gran cielo sobre ellas.' },
  { id: 's3_l3', character: 'narrator', text: 'Ahora había espacio... había cielo... había aire.' },
  { id: 's3_l4', character: 'narrator', text: 'El mundo comenzaba a tomar forma.' },
  // Cena 4
  { id: 's4_l1', character: 'narrator', text: 'Entonces Dios reunió las aguas en sus lugares. Y apareció la tierra seca.' },
  { id: 's4_l2', character: 'god', text: '¡Produzca la tierra hierba verde y plantas!' },
  { id: 's4_l3', character: 'narrator', text: '¡Y ocurrió algo increíble! Pequeñas plantas comenzaron a brotar. Luego vinieron los árboles... flores... semillas... y campos verdes.' },
  { id: 's4_l4', character: 'narrator', text: 'La Tierra se estaba poniendo cada vez más hermosa. Dios vio que todo aquello era bueno.' },
  { id: 's4_l5_q', character: 'narrator', text: 'Y tú... ¿cuál fruta dulce o flor colorida que Dios creó es tu favorita?' },
  { id: 's4_l6_a', character: 'child', text: '¡Mmm, a mí me encantan las fresas rojitas y las manzanas bien crujientes!' },
  { id: 's4_l7', character: 'narrator', text: '¡Qué delicia! Todo esto fue hecho con amor para alimentar y alegrar nuestro mundo.' },
  // Cena 5
  { id: 's5_l1', character: 'narrator', text: 'Entonces llegó el cuarto día. Dios puso grandes luces en el cielo.' },
  { id: 's5_l2', character: 'narrator', text: 'El Sol para alumbrar el día... la Luna para iluminar la noche... e incontables estrellas comenzaron a brillar.' },
  { id: 's5_l3', character: 'narrator', text: 'Mira hacia el cielo en una noche oscura. ¿Prefieres el calor del Sol de día o las estrellas brillantes de noche?' },
  { id: 's5_l3_a', character: 'child', text: '¡Me encanta contar las estrellas... parece que me están guiñando un ojo desde el cielo!' },
  { id: 's5_l4', character: 'narrator', text: 'Dios conoce cada una de ellas por su nombre.' },
  // Cena 6
  { id: 's6_l1', character: 'narrator', text: 'En el quinto día, ocurrió algo extraordinario. ¡Los mares comenzaron a llenarse de vida!' },
  { id: 's6_l2', character: 'narrator', text: 'Peces pequeños... ballenas enormes... criaturas marinas de todo tipo.' },
  { id: 's6_l3', character: 'narrator', text: 'Y entonces... ¡los cielos también se llenaron de vida! Los pájaros comenzaron a volar.' },
  { id: 's6_l4', character: 'narrator', text: 'Unos volaban alto. Otros volaban bajo. Unos eran grandes. Otros muy pequeñitos. Y Dios vio que todo era bueno.' },
  // Cena 7
  { id: 's7_l1', character: 'narrator', text: 'Pero aún faltaba algo. Llegamos al sexto día. La Tierra comenzó a llenarse de animales.' },
  { id: 's7_l2', character: 'narrator', text: 'Animales grandes... animales pequeños... animales rápidos... animales fuertes...' },
  { id: 's7_l3', character: 'narrator', text: 'Leones. Elefantes. Jirafas. Conejos. Caballos. Y muchos más.' },
  { id: 's7_l4', character: 'narrator', text: 'Cada uno diferente. Cada uno especial. Cada uno creado por Dios.' },
  { id: 's7_l5_q', character: 'narrator', text: 'Y tú que nos escuchas ahora... ¿cuál es tu animal favorito que Dios creó?' },
  { id: 's7_l6_a', character: 'child', text: '¡Yo amo los elefantes grandotes y los perritos juguetones!' },
  { id: 's7_l7', character: 'narrator', text: '¡Qué maravilla! Dios puso tanta imaginación y amor en cada criatura.' },
  // Cena 8
  { id: 's8_l1', character: 'narrator', text: 'Entonces, Dios hizo su creación más especial.' },
  { id: 's8_l2', character: 'narrator', text: '¡Del polvo de la tierra, Dios formó al hombre, Adán, y sopló en él aliento de vida!' },
  { id: 's8_l3', character: 'narrator', text: 'Y Dios vio que no era bueno que el hombre estuviera solo. Con mucho amor, creó a Eva, una compañera para caminar a su lado.' },
  { id: 's8_l4', character: 'god', text: '¡Sean fructíferos y multiplíquense! Llenen la tierra y cuiden con amor toda mi creación.' },
  { id: 's8_l5', character: 'narrator', text: 'Adán y Eva estaban en el Jardín del Edén, con el corazón lleno de alegría y viviendo en perfecta amistad con Dios.' },
  // Cena 9
  { id: 's9_l1', character: 'narrator', text: 'Ahora había luz. Había cielo. Había mares. Había árboles. Flores. Estrellas. Animales. Y había personas.' },
  { id: 's9_l2', character: 'narrator', text: 'Dios miró todo lo que había hecho.' },
  { id: 's9_l3', character: 'narrator', text: 'Y vio que era muy bueno.' },
  // Cena 10
  { id: 's10_l1', character: 'narrator', text: 'En el séptimo día, Dios terminó su obra. Descansó de todo lo que había creado.' },
  { id: 's10_l2', character: 'narrator', text: 'No porque estuviera cansado... sino porque su obra estaba completa.' },
  { id: 's10_l3', character: 'narrator', text: 'El primer capítulo de la historia de nuestro mundo había comenzado.' },
  // Cena 11
  { id: 's11_l1', character: 'narrator', text: '¿Y sabes qué nos enseña esta historia?' },
  { id: 's11_l2', character: 'narrator', text: 'No estás aquí por casualidad. El mundo a tu alrededor está lleno de cosas maravillosas.' },
  { id: 's11_l3', character: 'narrator', text: 'El cielo... los árboles... los animales... las personas...' },
  { id: 's11_l4', character: 'narrator', text: 'Todo nos recuerda que Dios es el Creador.' },
  { id: 's11_l4_q', character: 'narrator', text: '¿Y cómo podemos demostrar amor y cuidar el hermoso mundo de Dios hoy?' },
  { id: 's11_l5', character: 'child', text: '¡Debemos cuidar el mundo que Dios creó, regando las plantitas y amando a los animales!' },
  { id: 's11_l6', character: 'narrator', text: '¡Exactamente!' },
  { id: 's11_l7', character: 'narrator', text: 'Cuando mires al cielo... cuando escuches cantar un pájaro... o veas nacer una flor... recuerda: Dios creó todo esto. Y nos enseñó a cuidar su creación.' },
  { id: 's11_l8', character: 'narrator', text: '¡Hasta la próxima aventura!' },
  // Cena 12
  { id: 's12_l1', character: 'child', text: '¡Toon Tales Kids!' },
  { id: 's12_l1b', character: 'narrator', text: 'Y esta fue otra aventura de la Biblia en Audio. Pero la historia aún no termina... Una nueva aventura te está esperando.' },
  { id: 's12_l2', character: 'child', text: '¡Toon Tales Kids!' },
  { id: 's12_l3', character: 'narrator', text: 'Historias que enseñan...' },
  { id: 's12_l4', character: 'child', text: '...¡y aventuras que transforman!' }
];

function getVoiceConfig(lang, character) {
  if (lang === 'en') {
    if (character === 'god') return { voice: 'en-US-ChristopherNeural', pitch: '-12Hz', rate: '-10%' };
    if (character === 'child') return { voice: 'en-US-AnaNeural', pitch: '+4Hz', rate: '+4%' };
    return { voice: 'en-US-GuyNeural', pitch: '+0Hz', rate: '+0%' };
  } else {
    if (character === 'god') return { voice: 'es-ES-AlvaroNeural', pitch: '-12Hz', rate: '-10%' };
    if (character === 'child') return { voice: 'es-MX-DaliaNeural', pitch: '+16Hz', rate: '+6%' };
    return { voice: 'es-MX-JorgeNeural', pitch: '+0Hz', rate: '+0%' };
  }
}

async function synthesizeWithRetry(voice, text, outputFile, pitch = '+0Hz', rate = '+0%', retries = 4) {
  if (fs.existsSync(outputFile) && fs.statSync(outputFile).size > 1000) return;
  for (let i = 1; i <= retries; i++) {
    try {
      const tts = new MsEdgeTTS();
      await tts.setMetadata(voice, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
      const { audioStream } = tts.toStream(text, { pitch, rate });
      await new Promise((resolve, reject) => {
        const ws = fs.createWriteStream(outputFile);
        audioStream.pipe(ws);
        ws.on('finish', () => {
          if (fs.existsSync(outputFile) && fs.statSync(outputFile).size > 500) resolve();
          else reject(new Error('Empty audio'));
        });
        ws.on('error', reject);
      });
      return;
    } catch (err) {
      console.log(`Retry ${i}/${retries} for ${path.basename(outputFile)}: ${err.message}`);
      await new Promise(r => setTimeout(r, 1500));
    }
  }
  throw new Error('Failed after retries: ' + outputFile);
}

async function buildLanguageTrack(lang, lines, finalMp3Name) {
  const langDir = path.join(outDir, lang);
  if (!fs.existsSync(langDir)) fs.mkdirSync(langDir, { recursive: true });

  console.log(`\n=== Sintetizando EP01 [${lang.toUpperCase()}] (${lines.length} falas) ===`);
  const silencePath = path.join(langDir, 'silence_035.mp3');
  if (!fs.existsSync(silencePath)) {
    execFileSync(ffmpegStatic, ['-y', '-f', 'lavfi', '-i', 'anullsrc=r=24000:cl=mono', '-t', '0.35', '-q:a', '4', silencePath], { stdio: 'ignore' });
  }

  const concatList = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const cfg = getVoiceConfig(lang, line.character);
    const clipPath = path.join(langDir, `${String(i + 1).padStart(2, '0')}_${line.id}.mp3`);
    await synthesizeWithRetry(cfg.voice, line.text, clipPath, cfg.pitch, cfg.rate);
    concatList.push(`file '${clipPath.replace(/\\/g, '/')}'`);
    concatList.push(`file '${silencePath.replace(/\\/g, '/')}'`);
    if ((i + 1) % 10 === 0 || i === lines.length - 1) {
      console.log(`  [${lang.toUpperCase()}] ${i + 1}/${lines.length} falas prontas.`);
    }
  }

  const listFile = path.join(langDir, 'concat.txt');
  fs.writeFileSync(listFile, concatList.join('\n'), 'utf8');

  const finalPath = path.join(outDir, finalMp3Name);
  execFileSync(ffmpegStatic, ['-y', '-f', 'concat', '-safe', '0', '-i', listFile, '-c:a', 'libmp3lame', '-b:a', '128k', '-ar', '24000', finalPath], { stdio: 'ignore' });
  const sizeMB = (fs.statSync(finalPath).size / (1024 * 1024)).toFixed(2);
  console.log(`✅ Master ${finalMp3Name} gerado (${sizeMB} MB)!`);
  return finalPath;
}

async function uploadToR2(filePath, r2Key) {
  console.log(`☁️ Uploading ${r2Key}...`);
  const buffer = fs.readFileSync(filePath);
  await r2Client.send(new PutObjectCommand({
    Bucket: process.env.CLOUDFLARE_R2_BUCKET_NAME || 'toontales-media',
    Key: r2Key,
    Body: buffer,
    ContentType: 'audio/mpeg',
  }));
  console.log(`✅ Upload concluído: https://pub-bf22f5d21d6d4607a123c603ac5632d1.r2.dev/${r2Key}`);
}

async function main() {
  const mp3En = await buildLanguageTrack('en', linesEN, 'episode01-en.mp3');
  const mp3Es = await buildLanguageTrack('es', linesES, 'episode01-es.mp3');

  await uploadToR2(mp3En, 'season1/episode01/episode01-en.mp3');
  await uploadToR2(mp3Es, 'season1/episode01/episode01-es.mp3');
  console.log('\n🎉 EPISÓDIO 1 (EN & ES) 100% PRONTO E ONLINE NO R2!');
}

main().catch(err => {
  console.error('Erro:', err);
  process.exit(1);
});
