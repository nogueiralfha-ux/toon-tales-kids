const { MsEdgeTTS, OUTPUT_FORMAT } = require('msedge-tts');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ts = require('typescript');
const { execFileSync } = require('child_process');
const ffmpegStatic = require('ffmpeg-static');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
require('dotenv').config();

const GEMINI_KEY = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

const r2Client = new S3Client({
  region: 'auto',
  endpoint: process.env.CLOUDFLARE_R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY,
    secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_KEY,
  },
});

const R2_PUBLIC_BASE = 'https://pub-bf22f5d21d6d4607a123c603ac5632d1.r2.dev';

function loadTsModule(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const transpiled = ts.transpileModule(code, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  });
  const mod = { exports: {} };
  const fn = new Function('exports', 'require', 'module', '__filename', '__dirname', transpiled.outputText);
  fn(mod.exports, require, mod, filePath, path.dirname(filePath));
  return mod.exports;
}

function getEpisodeScriptMap() {
  const appCode = fs.readFileSync(path.resolve('src/App.tsx'), 'utf8');
  // Map variable name -> import path
  const importMap = {};
  const importRegex = /import\s+\{([^}]+)\}\s+from\s+'(\.\/data\/[^']+)';/g;
  let m;
  while ((m = importRegex.exec(appCode)) !== null) {
    const vars = m[1].split(',').map(s => s.trim());
    const relPath = m[2] + '.ts';
    for (const v of vars) {
      importMap[v] = path.resolve('src', relPath.replace('./', ''));
    }
  }

  // Parse EPISODE_REGISTRY
  const regStart = appCode.indexOf('const EPISODE_REGISTRY');
  const regEnd = appCode.indexOf('};', regStart);
  const regBlock = appCode.slice(regStart, regEnd);
  const epMap = {};
  const entryRegex = /(t\d+e\d+):\s*\{\s*scenes:\s*([A-Z0-9_]+)/g;
  while ((m = entryRegex.exec(regBlock)) !== null) {
    const epId = m[1];
    const scenesVar = m[2];
    if (importMap[scenesVar]) {
      epMap[epId] = { filePath: importMap[scenesVar], scenesVar };
    }
  }
  return epMap;
}

function getVoiceConfig(lang, character) {
  const femaleChars = ['eve', 'maria', 'sara', 'miria', 'joquebede', 'filha_farao', 'raabe', 'maria_madalena', 'mae'];
  const childChars = ['child', 'crianca1', 'crianca2', 'menino', 'menina', 'coro_infantil', 'voz_infantil', 'jesus_boy', 'davi', 'isaque', 'jose'];
  const godChars = ['god', 'jesus', 'voz'];
  const deepChars = ['snake', 'golias', 'farao', 'potifar', 'saul', 'autoridade', 'carcereiro'];

  if (lang === 'en') {
    if (godChars.includes(character)) return { voice: 'en-US-ChristopherNeural', pitch: '-10Hz', rate: '-8%' };
    if (childChars.includes(character)) return { voice: 'en-US-AnaNeural', pitch: '+4Hz', rate: '+4%' };
    if (femaleChars.includes(character)) return { voice: 'en-US-JennyNeural', pitch: '+2Hz', rate: '+0%' };
    if (deepChars.includes(character)) return { voice: 'en-US-SteffanNeural', pitch: '-8Hz', rate: '-6%' };
    if (character !== 'narrator') return { voice: 'en-US-BrianNeural', pitch: '+2Hz', rate: '+2%' };
    return { voice: 'en-US-GuyNeural', pitch: '+0Hz', rate: '+0%' };
  } else {
    if (godChars.includes(character)) return { voice: 'es-ES-AlvaroNeural', pitch: '-10Hz', rate: '-8%' };
    if (childChars.includes(character)) return { voice: 'es-MX-DaliaNeural', pitch: '+15Hz', rate: '+6%' };
    if (femaleChars.includes(character)) return { voice: 'es-MX-DaliaNeural', pitch: '+2Hz', rate: '+0%' };
    if (deepChars.includes(character)) return { voice: 'es-ES-AlvaroNeural', pitch: '-8Hz', rate: '-8%' };
    if (character !== 'narrator') return { voice: 'es-MX-JorgeNeural', pitch: '+6Hz', rate: '+4%' };
    return { voice: 'es-MX-JorgeNeural', pitch: '+0Hz', rate: '+0%' };
  }
}

async function translateEpisodeWithGemini(epMeta, lines) {
  const cacheDir = path.resolve('render/translations_cache');
  if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir, { recursive: true });
  const cacheFile = path.join(cacheDir, `${epMeta.id}.json`);

  if (fs.existsSync(cacheFile)) {
    const cached = JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
    if (cached.en && cached.es && cached.en.length === lines.length && cached.es.length === lines.length) {
      return cached;
    }
  }

  const prompt = `You are a professional children's Biblical animation translator (Disney/Pixar tone).
Translate the following Portuguese episode metadata and ${lines.length} dialogue lines into warm, engaging, child-friendly English (US) and Latin American Spanish (ES).
Keep biblical names accurate (e.g., Noé -> Noah / Noé, Moisés -> Moses / Moisés, José -> Joseph / José, Davi -> David / David, Golias -> Goliath / Goliat).
IMPORTANT: Do NOT include speaker labels or brackets like [narrator] or [god] in the translated dialogue strings—return ONLY the spoken dialogue text!
Return ONLY valid JSON matching this exact schema:
{
  "titleEn": "string",
  "titleEs": "string",
  "descriptionEn": "string",
  "descriptionEs": "string",
  "moralLessonEn": "string",
  "moralLessonEs": "string",
  "en": ["line 1 in English", ... exactly ${lines.length} items],
  "es": ["line 1 in Spanish", ... exactly ${lines.length} items]
}

Episode Metadata:
Title: ${epMeta.title}
Description: ${epMeta.description}
Moral Lesson: ${epMeta.moralLesson}

Dialogue Lines (${lines.length} lines):
${lines.map((l, idx) => `${idx + 1}. ${l.text}`).join('\n')}`;

  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { responseMimeType: 'application/json', temperature: 0.3 }
        })
      });
      const data = await resp.json();
      if (!data.candidates || !data.candidates[0]?.content?.parts?.[0]?.text) {
        throw new Error('Invalid Gemini response: ' + JSON.stringify(data).slice(0, 200));
      }
      const parsed = JSON.parse(data.candidates[0].content.parts[0].text);
      if (!Array.isArray(parsed.en) || !Array.isArray(parsed.es) || parsed.en.length !== lines.length || parsed.es.length !== lines.length) {
        throw new Error(`Line count mismatch: got en=${parsed.en?.length}, es=${parsed.es?.length}, expected=${lines.length}`);
      }
      parsed.en = parsed.en.map(s => String(s).replace(/^\[[^\]]+\]\s*/i, '').trim());
      parsed.es = parsed.es.map(s => String(s).replace(/^\[[^\]]+\]\s*/i, '').trim());
      fs.writeFileSync(cacheFile, JSON.stringify(parsed, null, 2), 'utf8');
      return parsed;
    } catch (err) {
      console.log(`  Gemini translate retry ${attempt}/4 for ${epMeta.id}: ${err.message}`);
      await new Promise(r => setTimeout(r, 3000 * attempt));
    }
  }
  throw new Error(`Failed to translate ${epMeta.id}`);
}

async function synthesizeWithRetry(voice, text, outputFile, pitch = '+0Hz', rate = '+0%', lang = 'en', retries = 6) {
  if (fs.existsSync(outputFile) && fs.statSync(outputFile).size > 1000) return;
  const cleanText = String(text).replace(/^\[[^\]]+\]\s*/i, '').trim() || '...';
  const fallbackVoice = lang === 'en' ? 'en-US-GuyNeural' : 'es-MX-JorgeNeural';
  for (let i = 1; i <= retries; i++) {
    const activeVoice = i > 3 ? fallbackVoice : voice;
    const activePitch = i > 3 ? '+0Hz' : pitch;
    const activeRate = i > 3 ? '+0%' : rate;
    try {
      const tts = new MsEdgeTTS();
      await tts.setMetadata(activeVoice, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
      const { audioStream } = tts.toStream(cleanText, { pitch: activePitch, rate: activeRate });
      await new Promise((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error('TTS Timeout')), 12000);
        const ws = fs.createWriteStream(outputFile);
        audioStream.pipe(ws);
        audioStream.on('error', (err) => { clearTimeout(timer); reject(err); });
        ws.on('finish', () => {
          clearTimeout(timer);
          if (fs.existsSync(outputFile) && fs.statSync(outputFile).size > 500) resolve();
          else reject(new Error('Empty audio'));
        });
        ws.on('error', (err) => { clearTimeout(timer); reject(err); });
      });
      await new Promise(r => setTimeout(r, 100));
      return;
    } catch (err) {
      await new Promise(r => setTimeout(r, 1500 * i));
    }
  }
  throw new Error('TTS failed after retries: ' + outputFile);
}

async function buildTrack(epId, lang, lines, translatedTexts) {
  const outDir = path.resolve(`render/dub_multilang/${epId}`);
  const langDir = path.join(outDir, lang);
  if (!fs.existsSync(langDir)) fs.mkdirSync(langDir, { recursive: true });

  const finalPath = path.join(outDir, `${epId}-${lang}.mp3`);
  if (fs.existsSync(finalPath) && fs.statSync(finalPath).size > 50000) {
    return finalPath;
  }

  const silencePath = path.join(langDir, 'silence_035.mp3');
  if (!fs.existsSync(silencePath)) {
    execFileSync(ffmpegStatic, ['-y', '-f', 'lavfi', '-i', 'anullsrc=r=24000:cl=mono', '-t', '0.35', '-q:a', '4', silencePath], { stdio: 'ignore' });
  }

  const concatList = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const text = translatedTexts[i];
    const cfg = getVoiceConfig(lang, line.character);
    const clipPath = path.join(langDir, `${String(i + 1).padStart(3, '0')}.mp3`);
    await synthesizeWithRetry(cfg.voice, text, clipPath, cfg.pitch, cfg.rate, lang);
    concatList.push(`file '${clipPath.replace(/\\/g, '/')}'`);
    concatList.push(`file '${silencePath.replace(/\\/g, '/')}'`);
  }

  const listFile = path.join(langDir, 'concat.txt');
  fs.writeFileSync(listFile, concatList.join('\n'), 'utf8');
  execFileSync(ffmpegStatic, ['-y', '-f', 'concat', '-safe', '0', '-i', listFile, '-c:a', 'libmp3lame', '-b:a', '128k', '-ar', '24000', finalPath], { stdio: 'ignore' });
  return finalPath;
}

async function uploadToR2(filePath, r2Key) {
  const buffer = fs.readFileSync(filePath);
  await r2Client.send(new PutObjectCommand({
    Bucket: process.env.CLOUDFLARE_R2_BUCKET_NAME || 'toontales-media',
    Key: r2Key,
    Body: buffer,
    ContentType: 'audio/mpeg',
  }));
  return `${R2_PUBLIC_BASE}/${r2Key}`;
}

async function main() {
  const args = process.argv.slice(2);
  const seasonArgIdx = args.indexOf('--season');
  const filterSeason = seasonArgIdx !== -1 ? parseInt(args[seasonArgIdx + 1], 10) : null;

  const catalogMod = loadTsModule(path.resolve('src/data/catalog.ts'));
  const allEpisodes = catalogMod.ALL_EPISODES;
  const scriptMap = getEpisodeScriptMap();

  const resultsFile = path.resolve('render/dub_results.json');
  const results = fs.existsSync(resultsFile) ? JSON.parse(fs.readFileSync(resultsFile, 'utf8')) : {};

  const targetEpisodes = allEpisodes.filter(ep => {
    if (!ep.isAvailable) return false;
    if (ep.audioUrls && ep.audioUrls.en && ep.audioUrls.es) return false;
    if (fs.existsSync(path.resolve('render/dub_results_per_ep', `${ep.id}.json`))) return false;
    if (results[ep.id] && results[ep.id].enUrl && results[ep.id].esUrl) return false;
    if (filterSeason && ep.seasonNumber !== filterSeason) return false;
    return !!scriptMap[ep.id];
  });

  console.log(`\n🚀 Orquestrador Trilíngue: ${targetEpisodes.length} episódios pendentes para processar.`);

  for (let idx = 0; idx < targetEpisodes.length; idx++) {
    const ep = targetEpisodes[idx];
    const info = scriptMap[ep.id];
    console.log(`\n[${idx + 1}/${targetEpisodes.length}] Processando ${ep.id} — ${ep.title} (Temporada ${ep.seasonNumber})...`);

    const scriptMod = loadTsModule(info.filePath);
    const scenes = scriptMod[info.scenesVar];
    const flatLines = [];
    for (const sc of scenes) {
      if (Array.isArray(sc.lines)) {
        for (const l of sc.lines) {
          if (l.text && l.text.trim()) {
            flatLines.push({ id: l.id, character: l.character || 'narrator', text: l.text.trim() });
          }
        }
      }
    }
    console.log(`  📜 ${flatLines.length} falas extraídas.`);

    const translated = await translateEpisodeWithGemini(ep, flatLines);
    console.log(`  🌐 Tradução EN/ES pronta.`);

    const mp3En = await buildTrack(ep.id, 'en', flatLines, translated.en);
    console.log(`  🇺🇸 EN sintetizado (${(fs.statSync(mp3En).size / (1024 * 1024)).toFixed(2)} MB)`);

    const mp3Es = await buildTrack(ep.id, 'es', flatLines, translated.es);
    console.log(`  🇪🇸 ES sintetizado (${(fs.statSync(mp3Es).size / (1024 * 1024)).toFixed(2)} MB)`);

    const enUrl = await uploadToR2(mp3En, `dubbing/${ep.id}/${ep.id}-en.mp3`);
    const esUrl = await uploadToR2(mp3Es, `dubbing/${ep.id}/${ep.id}-es.mp3`);
    console.log(`  ☁️ Online no R2!`);

    const epResult = {
      id: ep.id,
      titleEn: translated.titleEn,
      titleEs: translated.titleEs,
      descriptionEn: translated.descriptionEn,
      descriptionEs: translated.descriptionEs,
      moralLessonEn: translated.moralLessonEn,
      moralLessonEs: translated.moralLessonEs,
      enUrl,
      esUrl,
    };

    const perEpDir = path.resolve('render/dub_results_per_ep');
    if (!fs.existsSync(perEpDir)) fs.mkdirSync(perEpDir, { recursive: true });
    fs.writeFileSync(path.join(perEpDir, `${ep.id}.json`), JSON.stringify(epResult, null, 2), 'utf8');

    const latestResults = fs.existsSync(resultsFile) ? JSON.parse(fs.readFileSync(resultsFile, 'utf8')) : {};
    latestResults[ep.id] = epResult;
    fs.writeFileSync(resultsFile, JSON.stringify(latestResults, null, 2), 'utf8');
  }

  console.log('\n🎉 TODOS OS EPISÓDIOS DO LOTE CONCLUÍDOS COM SUCESSO!');
}

main().catch(err => {
  console.error('❌ Erro fatal:', err);
  process.exit(1);
});
