const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const scenesDir = path.resolve('EDITORIAL_LIBRARY/ABRAAO_MASTER_SCENES');
const outPdfPath = path.resolve('Livro_Ilustrado_Abraao_Completo.pdf');
const desktopPdfPath = 'C:\\Users\\lucia\\OneDrive\\Área de Trabalho\\Livro_Ilustrado_Abraao_Completo.pdf';

const doc = new PDFDocument({
  size: 'A4', // 595.28 x 841.89 pt
  margins: { top: 0, bottom: 0, left: 0, right: 0 },
  autoFirstPage: false
});

const writeStream = fs.createWriteStream(outPdfPath);
doc.pipe(writeStream);

const PAGE_W = 595.28;
const PAGE_H = 841.89;

// Premium Color Palette
const NAVY = '#0F172A';
const DARK_SLATE = '#1E293B';
const GOLD = '#D97706';
const GOLD_LIGHT = '#FEF3C7';
const SKY_BLUE = '#0284C7';
const TEXT_MUTED = '#475569';
const CARD_BG = '#F8FAFC';
const CARD_BORDER = '#CBD5E1';

function addPageHeader(doc, title, badgeText, pageNum) {
  // Top Badge
  if (badgeText) {
    doc.roundedRect(36, 24, 130, 22, 11)
       .fillAndStroke(GOLD_LIGHT, GOLD);
    doc.fillColor(GOLD)
       .font('Helvetica-Bold')
       .fontSize(9)
       .text(badgeText, 36, 30, { width: 130, align: 'center', lineBreak: false });
  }

  // Header Title
  doc.fillColor(NAVY)
     .font('Helvetica-Bold')
     .fontSize(13)
     .text(title, 175, 27, { width: PAGE_W - 175 - 55, lineBreak: false });

  // Page number pill
  doc.roundedRect(PAGE_W - 36 - 40, 24, 40, 22, 11)
     .fillAndStroke('#E0F2FE', SKY_BLUE);
  doc.fillColor(SKY_BLUE)
     .font('Helvetica-Bold')
     .fontSize(9)
     .text(`${pageNum}`, PAGE_W - 36 - 40, 30, { width: 40, align: 'center', lineBreak: false });

  // Divider
  doc.strokeColor('#E2E8F0')
     .lineWidth(1)
     .moveTo(36, 52)
     .lineTo(PAGE_W - 36, 52)
     .stroke();
}

function addStoryPage(doc, imageFile, title, badgeText, narrativeParagraphs, moralHighlight, pageNum) {
  doc.addPage();
  addPageHeader(doc, title, badgeText, pageNum);

  // 16:9 Widescreen image (480 x 270 pt)
  const imgW = 480;
  const imgH = 270;
  const imgX = (PAGE_W - imgW) / 2;
  const imgY = 62;

  // Frame container card
  doc.roundedRect(imgX - 3, imgY - 3, imgW + 6, imgH + 6, 12)
     .fillAndStroke('#FFFFFF', CARD_BORDER);

  const imgPath = path.join(scenesDir, imageFile);
  if (fs.existsSync(imgPath)) {
    doc.save();
    doc.roundedRect(imgX, imgY, imgW, imgH, 10).clip();
    doc.image(imgPath, imgX, imgY, { width: imgW, height: imgH });
    doc.restore();
  }

  // Story Box below image
  const boxX = 36;
  const boxY = imgY + imgH + 16; // 348
  const boxW = PAGE_W - 72;     // 523.28
  const boxH = 365;

  doc.roundedRect(boxX, boxY, boxW, boxH, 12)
     .fillAndStroke(CARD_BG, CARD_BORDER);

  // Decorative gold left accent bar
  doc.roundedRect(boxX, boxY, 6, boxH, 3)
     .fill(GOLD);

  // Narrative Text
  let textY = boxY + 18;
  const textX = boxX + 24;
  const textW = boxW - 48;

  narrativeParagraphs.forEach((para) => {
    doc.fillColor(DARK_SLATE)
       .font('Helvetica')
       .fontSize(11.5)
       .text(para, textX, textY, { width: textW, align: 'justify', lineGap: 4 });
    textY = doc.y + 10;
  });

  // Highlight Box at bottom
  if (moralHighlight) {
    const hlY = boxY + boxH - 68;
    doc.roundedRect(textX, hlY, textW, 52, 8)
       .fillAndStroke('#EFF6FF', '#BFDBFE');

    doc.fillColor('#1D4ED8')
       .font('Helvetica-Bold')
       .fontSize(9.5)
       .text('REVELAÇÃO DA FÉ:', textX + 12, hlY + 8, { width: textW - 24, lineBreak: false });

    doc.fillColor('#1E3A8A')
       .font('Helvetica-Oblique')
       .fontSize(9.5)
       .text(moralHighlight, textX + 12, hlY + 22, { width: textW - 24, lineGap: 2 });
  }

  // Bottom Footer Badge
  doc.fillColor(TEXT_MUTED)
     .font('Helvetica')
     .fontSize(8)
     .text('Toon Tales Kids • Episódio 5: Abraão e as Estrelas • Edição Oficial de Colecionador', 36, PAGE_H - 30, { width: PAGE_W - 72, align: 'center', lineBreak: false });
}

// ==========================================
// PAGE 1: CAPA OFICIAL
// ==========================================
doc.addPage();

// Background gradient / dark fill
doc.rect(0, 0, PAGE_W, PAGE_H).fill('#090D16');

// Gold Header Ribbon
doc.roundedRect(36, 36, PAGE_W - 72, 28, 14)
   .fillAndStroke('#1E293B', GOLD);
doc.fillColor(GOLD_LIGHT)
   .font('Helvetica-Bold')
   .fontSize(11)
   .text('★ COLEÇÃO HISTÓRIAS BÍBLICAS INESQUECÍVEIS • LIVRO OFICIAL ILUSTRADO ★', 36, 44, { width: PAGE_W - 72, align: 'center', lineBreak: false });

// Titles
doc.fillColor('#F8FAFC')
   .font('Helvetica-Bold')
   .fontSize(28)
   .text('ABRAÃO E AS ESTRELAS', 36, 76, { width: PAGE_W - 72, align: 'center', lineBreak: false });

doc.fillColor('#94A3B8')
   .font('Helvetica-Bold')
   .fontSize(13)
   .text('Uma Viagem Extraordinária de Fé, Confiança e Promessa', 36, 108, { width: PAGE_W - 72, align: 'center', lineBreak: false });

// Cover Master Image (480 x 270)
const coverImgPath = path.join(scenesDir, 'cover_abraao.jpg');
const cImgW = 490;
const cImgH = 275.6;
const cImgX = (PAGE_W - cImgW) / 2;
const cImgY = 135;

doc.roundedRect(cImgX - 4, cImgY - 4, cImgW + 8, cImgH + 8, 14)
   .fillAndStroke('#1E293B', GOLD);

if (fs.existsSync(coverImgPath)) {
  doc.save();
  doc.roundedRect(cImgX, cImgY, cImgW, cImgH, 10).clip();
  doc.image(coverImgPath, cImgX, cImgY, { width: cImgW, height: cImgH });
  doc.restore();
}

// Cover Highlights Box
const infoY = cImgY + cImgH + 20;
doc.roundedRect(36, infoY, PAGE_W - 72, 285, 14)
   .fillAndStroke('#111827', '#374151');

doc.roundedRect(36, infoY, 6, 285, 3).fill(GOLD);

doc.fillColor(GOLD)
   .font('Helvetica-Bold')
   .fontSize(13)
   .text('A Grande Jornada Que Mudou a História do Povo de Deus', 60, infoY + 16, { width: PAGE_W - 120 });

doc.fillColor('#E2E8F0')
   .font('Helvetica')
   .fontSize(11)
   .text('Muito tempo atrás, Deus chamou Abraão para deixar sua casa e partir em direção a uma terra desconhecida. Sem mapas e sem saber onde terminaria o caminho, Abraão confiou na promessa divina.', 60, infoY + 40, { width: PAGE_W - 120, lineGap: 3 });

doc.fillColor('#E2E8F0')
   .font('Helvetica')
   .fontSize(11)
   .text('Sob o céu pontilhado de incontáveis estrelas, Deus fez a maior aliança de todas: "Olhe para o céu e conte as estrelas se puder... assim será a sua descendência!" Um livro cinematográfico criado com amor para toda a família.', 60, infoY + 105, { width: PAGE_W - 120, lineGap: 3 });

// Metadata Pills
const pillY = infoY + 195;
doc.roundedRect(60, pillY, 140, 28, 6).fillAndStroke('#1F2937', '#4B5563');
doc.fillColor('#FDE047').font('Helvetica-Bold').fontSize(9).text('REFERÊNCIA BÍBLICA', 60, pillY + 5, { width: 140, align: 'center', lineBreak: false });
doc.fillColor('#F3F4F6').font('Helvetica').fontSize(9).text('Gênesis 12, 15, 17, 18, 21', 60, pillY + 16, { width: 140, align: 'center', lineBreak: false });

doc.roundedRect(215, pillY, 140, 28, 6).fillAndStroke('#1F2937', '#4B5563');
doc.fillColor('#38BDF8').font('Helvetica-Bold').fontSize(9).text('PÚBLICO & FAIXA ETÁRIA', 215, pillY + 5, { width: 140, align: 'center', lineBreak: false });
doc.fillColor('#F3F4F6').font('Helvetica').fontSize(9).text('Infantil e Família (Livre)', 215, pillY + 16, { width: 140, align: 'center', lineBreak: false });

doc.roundedRect(370, pillY, 140, 28, 6).fillAndStroke('#1F2937', '#4B5563');
doc.fillColor('#4ADE80').font('Helvetica-Bold').fontSize(9).text('PRODUÇÃO EXECUTIVA', 370, pillY + 5, { width: 140, align: 'center', lineBreak: false });
doc.fillColor('#F3F4F6').font('Helvetica').fontSize(9).text('Toon Tales Kids Studios', 370, pillY + 16, { width: 140, align: 'center', lineBreak: false });

// Bottom Footer
doc.fillColor('#64748B')
   .font('Helvetica-Bold')
   .fontSize(9)
   .text('EDIÇÃO MASTER DIGITAL • TOON TALES KIDS OFICIAL • 100% FIEL AO FILME', 36, PAGE_H - 45, { width: PAGE_W - 72, align: 'center', lineBreak: false });

// ==========================================
// PÁGINA 2: CENA 1 - UR DOS CALDEUS
// ==========================================
addStoryPage(
  doc,
  'scene_01_ur_deserto.jpg',
  '1. Uma Voz no Silêncio do Deserto',
  'CENA 01 • UR DOS CALDEUS',
  [
    'Muito tempo depois dos acontecimentos da Torre de Babel, a terra continuava cheia de povos que buscavam seus próprios caminhos. Mas Deus mantinha seus olhos fitos em um homem especial que habitava em uma terra distante chamada Ur.',
    'Seu nome era Abrão. Ele vivia com sua família, cuidava de seus rebanhos sob as palmeiras e desfrutava de uma vida segura e confortável. Ele tinha servos, amigos e uma rotina tranquila na aldeia.',
    'Porém, no silêncio da noite, enquanto a brisa fresca acariciava a areia do deserto e as primeiras estrelas surgiam no firmamento, o Criador do Universo decidiu que era o momento de iniciar um plano glorioso.'
  ],
  'Mesmo quando estamos confortáveis em nosso lugar, Deus nos chama para propósitos maiores e muito mais elevados.',
  2
);

// ==========================================
// PÁGINA 3: CENA 2 - O CHAMADO DE DEUS
// ==========================================
addStoryPage(
  doc,
  'scene_02_chamado.jpg',
  '2. O Chamado do Criador',
  'CENA 02 • GÊNESIS 12:1-2',
  [
    'Em meio ao profundo silêncio da noite no deserto, uma voz serena, doce e cheia de autoridade ressoou no coração de Abrão. Deus aproximou-se dele com um chamado que transformaria o mundo inteiro.',
    '— "Saia da sua terra, do meio dos seus parentes e da casa de seu pai. Vá para a terra que eu lhe mostrarei. Farei de você uma grande nação, e abençoarei o seu nome, e você será uma bênção!"',
    'Abrão escutou cada palavra com o coração acelerado. Mas havia um grande mistério: Deus não lhe entregou um mapa e nem explicou os detalhes do caminho. Abrão não sabia exatamente para onde ia, mas sabia perfeitamente QUEM o estava chamando.'
  ],
  'A verdadeira fé começa quando confiamos na voz de Deus, mesmo antes de enxergar onde a estrada vai terminar.',
  3
);

// ==========================================
// PÁGINA 4: CENA 3 - A DECISÃO COM SARA
// ==========================================
addStoryPage(
  doc,
  'scene_03_sara_tenda.jpg',
  '3. A Decisão e a Preparação na Tenda',
  'CENA 03 • GÊNESIS 12:4',
  [
    'Dentro da tenda aconchegante, à luz dourada da lamparina a óleo, Abrão reuniu-se com sua amada esposa Sara. Seus olhos brilhavam com uma certeza que vinha do Alto enquanto organizavam as bagagens e os pergaminhos.',
    '— "Vamos mesmo partir, Abrão?", perguntou Sara com ternura e curiosidade. "E você sabe para onde estamos indo?"',
    'Com um sorriso sereno e convicção inabalável, Abrão respondeu: "Ele nos mostrará o caminho. Deus falou conosco e nós vamos obedecer." E assim, movidos pelo amor e pela confiança mútua, arrumaram os cantis de água, as vestes e os suprimentos para partir.'
  ],
  'Quando uma família se une na fé e no propósito divino, nenhum obstáculo na jornada é grande demais.',
  4
);

// ==========================================
// PÁGINA 5: CENA 4 - A GRANDE CARAVANA
// ==========================================
addStoryPage(
  doc,
  'scene_04_caravana.jpg',
  '4. A Grande Caravana no Deserto',
  'CENA 04 • GÊNESIS 12:5',
  [
    'A caravana de Abrão se pôs em marcha. Era uma visão magnífica: dezenas de camelos carregando suprimentos, ovelhas caminhando pelas dunas onduladas, servos fiéis e suas famílias avançando sob o sol do deserto.',
    'A jornada foi árdua e desafiadora. Eles cruzaram desfiladeiros de pedra, enfrentaram ventos fortes e noites de frio cortante. Dia após dia, montavam acampamento e continuavam a caminhar com esperança.',
    'Embora o deserto fosse imenso e implacável, Abrão não se sentia solitário. Em cada pegada deixada sobre as areias douradas, uma promessa viva caminhava ao lado deles.'
  ],
  'A jornada da vida pode ser longa e desafiadora, mas a presença e a fidelidade de Deus nos acompanham a cada passo.',
  5
);

// ==========================================
// PÁGINA 6: CENA 5 - CHEGADA EM CANAÃ E O ALTAR
// ==========================================
addStoryPage(
  doc,
  'scene_05_canaa_altar.jpg',
  '5. A Terra de Canaã e o Altar de Gratidão',
  'CENA 05 • GÊNESIS 12:7',
  [
    'Após longas semanas de marcha, a caravana finalmente avistou colinas verdes verdejantes, vales floridos e belas oliveiras centenárias. Abrão suspirou aliviado e grato: "Chegamos à terra de Canaã!"',
    'Naquele mesmo instante, a voz do Senhor confirmou com ternura: "Esta terra darei à sua descendência para sempre." Abrão sentiu uma profunda gratidão invadir sua alma.',
    'Imediatamente, com suas próprias mãos, Abrão recolheu pedras lisas do riacho e construiu um lindo altar ao Senhor. Ajoelhado sob os raios da manhã, ele ergueu as mãos aos céus e adorou a Deus de todo o coração.'
  ],
  'Sempre que Deus nos abençoar e nos guiar a novas vitórias, devemos parar e agradecer com um coração cheio de louvor.',
  6
);

// ==========================================
// PÁGINA 7: CENA 6 - AS ESTRELAS E A PROMESSA
// ==========================================
addStoryPage(
  doc,
  'scene_06_estrelas.jpg',
  '6. As Estrelas e a Grande Promessa',
  'CENA 06 • GÊNESIS 15:5',
  [
    'Em uma noite serena, Deus chamou Abrão para sair de sua tenda. O ar estava fresco e o silêncio da estepe era quebrado apenas pelo estalar suave da fogueira.',
    '— "Olhe para os céus, Abrão! Conte as estrelas, se puder!", disse o Senhor. Abrão ergueu o olhar e contemplou bilhões de luzes reluzentes, nebulosas douradas e constelações sem fim que cobriam a vastidão do infinito.',
    '— "Assim será a sua descendência!", completou o Criador. Naquele momento inesquecível, Abrão não duvidou. Ele creu no Senhor, e a sua fé foi contada como perfeita justiça diante dos Céus.'
  ],
  'As promessas de Deus são tão infinitas e brilhantes quanto as estrelas do céu. Ele nunca falha naquilo que prometeu!',
  7
);

// ==========================================
// PÁGINA 8: CENA 8 - OS TRÊS VISITANTES EM MANRE
// ==========================================
addStoryPage(
  doc,
  'scene_08_visitantes.jpg',
  '7. Os Três Mensageiros em Manre',
  'CENA 08 • GÊNESIS 18:1-10',
  [
    'Sob a sombra refrescante dos grandes carvalhos de Manre, Abrão estava sentado à entrada de sua tenda quando três misteriosos viajantes aproximaram-se.',
    'Com grande generosidade e humildade, Abrão correu ao encontro deles, inclinou-se com respeito e disse: "Meu Senhor, fiquem um pouco aqui. Vou trazer água fresca para lavar seus pés e um pedaço de pão para recuperarem as forças."',
    'Sara preparou pães quentinhos e bolos na hora. Durante a refeição, os mensageiros celestiais revelaram a grande notícia: "No próximo ano, Sara terá um filho nos braços!" A promessa divina estava prestes a se cumprir diante dos seus olhos.'
  ],
  'A hospitalidade e a bondade com o próximo abrem as portas para os maiores milagres e bênçãos do Senhor.',
  8
);

// ==========================================
// PÁGINA 9: CENA 9 - O NASCIMENTO DE ISAQUE
// ==========================================
addStoryPage(
  doc,
  'scene_09_isaque_nascimento.jpg',
  '8. O Menino do Riso: Nasce Isaque!',
  'CENA 09 • GÊNESIS 21:1-3',
  [
    'O dia mais esperado de todos finalmente amanheceu! Exatamente no tempo determinado por Deus, Sara deu à luz um lindo e saudável bebê. Lágrimas de pura emoção e sorrisos radiantes inundaram a tenda da família.',
    '— "Meu filho amado!", exclamou Sara, abraçando-o contra o peito. E Abraão, com um riso contagiante de felicidade, proclamou: "Seu nome será Isaque!", que significa riso e alegria jubilosa.',
    'Para os homens parecia um milagre impossível, mas para Deus nada é impossível. Toda a aldeia cantou e celebrou, porque a fidelidade do Senhor havia enchido seus lares de esperança perpétua.'
  ],
  'Para Deus nada é impossível! No tempo certo, Ele transforma nossas lágrimas de espera em risos transbordantes de alegria.',
  9
);

// ==========================================
// PÁGINA 10: CONTRACAPA OFICIAL
// ==========================================
doc.addPage();

// Background
doc.rect(0, 0, PAGE_W, PAGE_H).fill('#090D16');

// Header Badge
doc.roundedRect(36, 30, PAGE_W - 72, 26, 13)
   .fillAndStroke('#1E293B', GOLD);
doc.fillColor(GOLD_LIGHT)
   .font('Helvetica-Bold')
   .fontSize(10)
   .text('★ TOON TALES KIDS • LIÇÃO PARA A VIDA TODA ★', 36, 37, { width: PAGE_W - 72, align: 'center', lineBreak: false });

// Final Climax Image: Abraham pointing to stars with little Isaac (480 x 270)
const finalImgPath = path.join(scenesDir, 'scene_10_isaque_estrelas.jpg');
const fImgW = 490;
const fImgH = 275.6;
const fImgX = (PAGE_W - fImgW) / 2;
const fImgY = 68;

doc.roundedRect(fImgX - 3, fImgY - 3, fImgW + 6, fImgH + 6, 12)
   .fillAndStroke('#1E293B', GOLD);

if (fs.existsSync(finalImgPath)) {
  doc.save();
  doc.roundedRect(fImgX, fImgY, fImgW, fImgH, 10).clip();
  doc.image(finalImgPath, fImgX, fImgY, { width: fImgW, height: fImgH });
  doc.restore();
}

// Moral & Covenant Box
const bBoxY = fImgY + fImgH + 18;
const bBoxH = 430;
doc.roundedRect(36, bBoxY, PAGE_W - 72, bBoxH, 14)
   .fillAndStroke('#111827', '#374151');

doc.roundedRect(36, bBoxY, 6, bBoxH, 3).fill(GOLD);

doc.fillColor(GOLD)
   .font('Helvetica-Bold')
   .fontSize(14)
   .text('O Que Aprendemos Com a Vida de Abraão?', 56, bBoxY + 14, { width: PAGE_W - 112 });

doc.fillColor('#F8FAFC')
   .font('Helvetica-Bold')
   .fontSize(11)
   .text('1. Ter fé não significa saber tudo, mas confiar em Deus.', 56, bBoxY + 38, { width: PAGE_W - 112 });
doc.fillColor('#CBD5E1')
   .font('Helvetica')
   .fontSize(10)
   .text('Abraão não conhecia o mapa do deserto, mas conhecia o amor e o poder do Criador que o chamou para caminhar.', 70, bBoxY + 54, { width: PAGE_W - 126, lineGap: 2 });

doc.fillColor('#F8FAFC')
   .font('Helvetica-Bold')
   .fontSize(11)
   .text('2. A promessa de Deus nunca volta vazia.', 56, bBoxY + 84, { width: PAGE_W - 112 });
doc.fillColor('#CBD5E1')
   .font('Helvetica')
   .fontSize(10)
   .text('Mesmo quando a espera parecia longa e difícil, Deus cumpriu cada palavra exatamente no momento perfeito.', 70, bBoxY + 100, { width: PAGE_W - 126, lineGap: 2 });

doc.fillColor('#F8FAFC')
   .font('Helvetica-Bold')
   .fontSize(11)
   .text('3. Você também faz parte desta história de bênção!', 56, bBoxY + 130, { width: PAGE_W - 112 });
doc.fillColor('#CBD5E1')
   .font('Helvetica')
   .fontSize(10)
   .text('Através da descendência de Abraão, o mundo recebeu a maior luz de todas. Quando você confia em Jesus, você se torna filho da promessa.', 70, bBoxY + 146, { width: PAGE_W - 126, lineGap: 2 });

// Golden Verses Box
const vBoxY = bBoxY + 185;
doc.roundedRect(56, vBoxY, PAGE_W - 112, 100, 8)
   .fillAndStroke('#1E293B', GOLD);

doc.fillColor('#FDE047')
   .font('Helvetica-Bold')
   .fontSize(10)
   .text('VERSÍCULO PARA MEMORIZAR NO CORAÇÃO:', 56, vBoxY + 10, { width: PAGE_W - 112, align: 'center', lineBreak: false });

doc.fillColor('#F8FAFC')
   .font('Helvetica-Oblique')
   .fontSize(10.5)
   .text('«Ora, a fé é a certeza daquilo que esperamos e a prova das coisas que não vemos.»', 70, vBoxY + 28, { width: PAGE_W - 140, align: 'center', lineGap: 3 });

doc.fillColor('#94A3B8')
   .font('Helvetica-Bold')
   .fontSize(9.5)
   .text('Hebreus 11:1 • Gênesis 15:6', 56, vBoxY + 74, { width: PAGE_W - 112, align: 'center', lineBreak: false });

// Publisher seal
doc.fillColor(GOLD)
   .font('Helvetica-Bold')
   .fontSize(11)
   .text('TOON TALES KIDS STUDIOS', 36, bBoxY + bBoxH - 125, { width: PAGE_W - 72, align: 'center', lineBreak: false });

doc.fillColor('#94A3B8')
   .font('Helvetica')
   .fontSize(8.5)
   .text('Plataforma Digital de Vídeos e Livros Bíblicos Interativos • Todos os Direitos Reservados © 2026', 36, bBoxY + bBoxH - 110, { width: PAGE_W - 72, align: 'center', lineBreak: false });

doc.end();

writeStream.on('finish', () => {
  console.log('[SUCCESS] Livro Ilustrado generated:', outPdfPath);
  fs.copyFileSync(outPdfPath, desktopPdfPath);
  console.log('[COPIED TO DESKTOP]:', desktopPdfPath);
});
