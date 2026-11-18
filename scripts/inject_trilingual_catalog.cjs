const fs = require('fs');
const path = require('path');

function esc(str) {
  return String(str || '')
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\r?\n/g, ' ');
}

const catalogPath = path.resolve('src/data/catalog.ts');
let content = fs.readFileSync(catalogPath, 'utf8');
const lineEnding = content.includes('\r\n') ? '\r\n' : '\n';

const perEpDir = path.resolve('render/dub_results_per_ep');
const files = fs.readdirSync(perEpDir).filter(f => f.endsWith('.json')).sort();

let updatedCount = 0;

for (const file of files) {
  const data = JSON.parse(fs.readFileSync(path.join(perEpDir, file), 'utf8'));
  const epId = data.id;

  const idMarker = `id: '${epId}'`;
  const idIdx = content.indexOf(idMarker);
  if (idIdx === -1) {
    console.warn(`⚠️ Não encontrado ${epId} em catalog.ts`);
    continue;
  }

  // Encontra o fechamento do objeto do episódio (procurando o próximo `tags:` ou `fullAudioUrl:` ou `},`)
  const blockEnd = content.indexOf('      },', idIdx);
  if (blockEnd === -1) {
    console.warn(`⚠️ Não encontrado fim do bloco para ${epId}`);
    continue;
  }

  let block = content.slice(idIdx, blockEnd);

  // Pula se já tiver audioUrls
  if (block.includes('audioUrls:')) {
    console.log(`⏭️ ${epId} já possui audioUrls`);
    continue;
  }

  // Extrai fullAudioUrl atual se existir
  const fullAudioMatch = block.match(/fullAudioUrl:\s*'([^']+)'/);
  const ptUrl = fullAudioMatch ? fullAudioMatch[1] : '';

  const injection = [
    `        audioUrls: {`,
    ...(ptUrl ? [`          pt: '${esc(ptUrl)}',`] : []),
    `          en: '${esc(data.enUrl)}',`,
    `          es: '${esc(data.esUrl)}',`,
    `        },`,
    `        titleEn: '${esc(data.titleEn)}',`,
    `        titleEs: '${esc(data.titleEs)}',`,
    `        descriptionEn: '${esc(data.descriptionEn)}',`,
    `        descriptionEs: '${esc(data.descriptionEs)}',`,
    `        moralLessonEn: '${esc(data.moralLessonEn)}',`,
    `        moralLessonEs: '${esc(data.moralLessonEs)}',`,
  ].join(lineEnding);

  // Insere antes do fechamento `blockEnd`
  content = content.slice(0, blockEnd) + injection + lineEnding + content.slice(blockEnd);
  updatedCount++;
  console.log(`✅ Atualizado ${epId} (${data.titleEn} / ${data.titleEs})`);
}

fs.writeFileSync(catalogPath, content, 'utf8');
console.log(`\n🎉 catalog.ts atualizado com ${updatedCount} episódios trilíngues!`);
