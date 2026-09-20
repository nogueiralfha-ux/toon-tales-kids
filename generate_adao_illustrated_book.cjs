const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const scenesDir = path.resolve('EDITORIAL_LIBRARY/ADAO_MASTER_SCENES');
const outPdfPath = path.resolve('Livro_Ilustrado_Adao_Eva_Completo.pdf');
const desktopPdfPath1 = 'C:\\Users\\lucia\\OneDrive\\Área de Trabalho\\Livro_Ilustrado_Adao_Eva_Completo.pdf';
const desktopPdfPath2 = 'C:\\Users\\lucia\\Desktop\\Livro_Ilustrado_Adao_Eva_Completo.pdf';

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
const EMERALD = '#059669';
const EMERALD_LIGHT = '#D1FAE5';
const SKY_BLUE = '#0284C7';
const TEXT_MUTED = '#475569';
const CARD_BG = '#F8FAFC';
const CARD_BORDER = '#CBD5E1';

function addPageHeader(doc, title, badgeText, pageNum) {
  // Top Badge
  if (badgeText) {
    doc.roundedRect(36, 24, 130, 22, 11)
       .fillAndStroke(EMERALD_LIGHT, EMERALD);
    doc.fillColor(EMERALD)
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
     .text(pageNum.toString(), PAGE_W - 36 - 40, 30, { width: 40, align: 'center', lineBreak: false });

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

  const fullImgPath = path.join(scenesDir, imageFile);
  if (fs.existsSync(fullImgPath)) {
    doc.save();
    doc.roundedRect(imgX, imgY, imgW, imgH, 8).clip();
    doc.image(fullImgPath, imgX, imgY, { width: imgW, height: imgH });
    doc.restore();

    doc.roundedRect(imgX, imgY, imgW, imgH, 8)
       .strokeColor('#E2E8F0')
       .lineWidth(1.5)
       .stroke();
  }

  // Narrative Card
  const cardX = 36;
  const cardY = 345;
  const cardW = PAGE_W - 72;
  const cardH = 430;

  doc.roundedRect(cardX, cardY, cardW, cardH, 10)
     .fillAndStroke(CARD_BG, CARD_BORDER);

  let currentY = cardY + 20;

  // Narrative Body
  doc.font('Helvetica')
     .fontSize(11.5)
     .lineGap(4)
     .fillColor(DARK_SLATE);

  narrativeParagraphs.forEach(p => {
    doc.text(p, cardX + 22, currentY, { width: cardW - 44, align: 'justify' });
    currentY += doc.heightOfString(p, { width: cardW - 44 }) + 14;
  });

  // Moral Callout
  if (moralHighlight) {
    const moralY = cardY + cardH - 80;
    doc.roundedRect(cardX + 16, moralY, cardW - 32, 62, 8)
       .fillAndStroke('#ECFDF5', '#A7F3D0');

    doc.font('Helvetica-Bold')
       .fontSize(10)
       .fillColor(EMERALD)
       .text('DICA DE LUZ', cardX + 26, moralY + 12, { lineBreak: false });

    doc.font('Helvetica-Oblique')
       .fontSize(10)
       .lineGap(2)
       .fillColor(DARK_SLATE)
       .text(moralHighlight, cardX + 26, moralY + 28, { width: cardW - 52 });
  }

  // Footer
  doc.font('Helvetica')
     .fontSize(8)
     .fillColor(TEXT_MUTED)
     .text('Toon Tales Kids - A Biblia em Audio Infantil | toon-tales-kids.vercel.app', 36, PAGE_H - 30, {
       width: PAGE_W - 72,
       align: 'center'
     });
}

function buildIllustratedBook() {
  console.log('Gerando Livro Ilustrado: Adão e Eva...');

  // COVER PAGE
  doc.addPage();
  doc.rect(0, 0, PAGE_W, PAGE_H).fill('#064E3B'); // Deep Emerald

  // Cover Image
  const coverImgPath = path.join(scenesDir, 'scene_01_jardim_eden.jpg');
  if (fs.existsSync(coverImgPath)) {
    doc.save();
    doc.roundedRect(40, 110, PAGE_W - 80, 480, 12).clip();
    doc.image(coverImgPath, 40, 110, { width: PAGE_W - 80, height: 480 });
    doc.restore();

    doc.roundedRect(40, 110, PAGE_W - 80, 480, 12)
       .strokeColor('#34D399')
       .lineWidth(3)
       .stroke();
  }

  // Title Banner
  doc.font('Helvetica-Bold')
     .fontSize(14)
     .fillColor('#A7F3D0')
     .text('COLECAO A BIBLIA EM AUDIO INFANTIL - TEMPORADA 1', 0, 48, { width: PAGE_W, align: 'center' });

  doc.font('Helvetica-Bold')
     .fontSize(36)
     .fillColor('#FFFFFF')
     .text('ADAO E EVA', 0, 68, { width: PAGE_W, align: 'center' });

  // Subtitle Pill
  doc.roundedRect((PAGE_W - 320) / 2, 608, 320, 36, 18)
     .fillAndStroke('#047857', '#6EE7B7');
  doc.font('Helvetica-Bold')
     .fontSize(15)
     .fillColor('#FFFFFF')
     .text('O JARDIM PERFEITO', (PAGE_W - 320) / 2, 618, { width: 320, align: 'center' });

  // Description
  doc.font('Helvetica')
     .fontSize(12)
     .fillColor('#D1FAE5')
     .text('A vida no Eden, as escolhas e a promessa de amor eterno de Deus.', 50, 660, { width: PAGE_W - 100, align: 'center' });

  // Footer Badge
  doc.font('Helvetica-Bold')
     .fontSize(11)
     .fillColor('#FDE047')
     .text('TOON TALES KIDS - EDICAO COLECIONADOR MASTER', 0, 770, { width: PAGE_W, align: 'center' });

  // 10 STORY PAGES
  const storyPages = [
    {
      file: 'scene_01_jardim_eden.jpg',
      title: '1. O Jardim do Eden',
      badge: 'Genesis 2:8',
      narrative: [
        'Depois de criar os ceus e a Terra, Deus preparou um lugar extraordinario e cheio de vida: o Jardim do Eden.',
        'Ali brotavam arvores frondosas com frutos deliciosos, rios de aguas cristalinas e animais que conviviam em perfeita harmonia.',
        'Era o lar perfeito, desenhado com amor pelo Criador para a humanidade viver com alegria.'
      ],
      moral: 'Deus pensou em cada detalhe do mundo para nos encher de alegria, beleza e paz!'
    },
    {
      file: 'scene_02_folego_vida.jpg',
      title: '2. O Folego de Vida',
      badge: 'Genesis 2:7',
      narrative: [
        'Do po da terra, o Senhor moldou o ser humano com infinito carinho e atencao aos detalhes.',
        'E entao, soprou em suas narinas o folego de vida! Adao abriu os olhos e contemplou pela primeira vez a beleza ao seu redor.',
        'Ele sentiu o amor e o cuidado paternal de Deus, pronto para viver uma linda historia de amizade com o Criador.'
      ],
      moral: 'Nossa vida e um presente precioso que veio direto do sopro de amor de Deus!'
    },
    {
      file: 'scene_03_adao_animais.jpg',
      title: '3. Adao e os Animais no Eden',
      badge: 'Genesis 2:19-20',
      narrative: [
        'Deus deu a Adao uma missao fascinante: conhecer e dar nome a todas as criaturas da terra!',
        'Adao observava os passaros coloridos, os leoes mansos, os peixinhos e os elefantes, cuidando da natureza com ternura e alegria.',
        'Havia amizade entre todos os seres vivos, em um ambiente sem medo e sem perigo.'
      ],
      moral: 'Cuidar da criacao e dos animais e uma forma de demonstrar gratidao a Deus!'
    },
    {
      file: 'scene_04_criacao_eva.jpg',
      title: '4. A Criacao de Eva',
      badge: 'Genesis 2:22',
      narrative: [
        'Ao ver que Adao estava so, Deus declarou com ternura que nao era bom o homem viver solitario.',
        'Com profunda sabedoria e amor, o Criador formou Eva para ser sua companheira querida e ajudadora fiel.',
        'Quando Adao a viu, seu coracao se encheu de alegria e ele disse: Ela e parte de mim!'
      ],
      moral: 'A verdadeira amizade e a familia sao dons maravilhosos que Deus nos concede!'
    },
    {
      file: 'scene_05_caminhando_harmonia.jpg',
      title: '5. Caminhando em Harmonia',
      badge: 'Genesis 2:25',
      narrative: [
        'Adao e Eva caminhavam juntos de maos dadas pelo jardim todos os dias, desfrutando da criacao.',
        'Nao existia medo, tristeza, dor ou solidao. Conversavam diariamente com o Senhor na brisa suave do entardecer.',
        'A comunhao entre o homem, a mulher e Deus era pura, sincera e cheia de luz.'
      ],
      moral: 'Quando andamos em harmonia com Deus e com quem amamos, tudo se torna belo!'
    },
    {
      file: 'scene_06_arvore_vida.jpg',
      title: '6. A Arvore da Vida',
      badge: 'Genesis 2:9, 16-17',
      narrative: [
        'No coracao do Eden estavam a Arvore da Vida e a Arvore do Conhecimento do Bem e do Mal.',
        'Deus permitiu que desfrutassem de todas as frutas saborosas do jardim, mas alertou com amor de Pai:',
        'Nao comam daquela arvore, pois a obediencia protege o coracao e preserva a vida plena.'
      ],
      moral: 'Os limites de Deus nao sao para nos prender, mas para nos proteger com amor!'
    },
    {
      file: 'scene_07_a_escolha.jpg',
      title: '7. A Escolha',
      badge: 'Genesis 3:6',
      narrative: [
        'Uma serpente astuta aproximou-se e semeou a duvida sobre a bondade e a verdade de Deus.',
        'Eva olhou para o fruto proibido, que parecia atraente, e decidiu comer, oferecendo tambem a Adao.',
        'Pela primeira vez, a desobediencia e a duvida entraram no coracao humano, quebrando a harmonia.'
      ],
      moral: 'Nem tudo o que parece brilhante e bom. Confiar na palavra de Deus e sempre a melhor escolha!'
    },
    {
      file: 'scene_08_tristeza_medo.jpg',
      title: '8. A Tristeza do Medo',
      badge: 'Genesis 3:9',
      narrative: [
        'Logo apos desobedecerem, seus olhos se abriram e perceberam sua fragilidade. O medo invadiu o jardim.',
        'Ao ouvirem a voz carinhosa de Deus chamando "Adao, onde voce esta?", eles correram para se esconder entre as folhagens.',
        'Pela primeira vez na historia humana, sentiram vergonha e tristeza diante do Criador.'
      ],
      moral: 'Quando erramos, nao devemos fugir de Deus, mas correr para os Seus bracos em oracao!'
    },
    {
      file: 'scene_09_amor_restaura.jpg',
      title: '9. O Amor que Restaura',
      badge: 'Genesis 3:21',
      narrative: [
        'Embora a desobediencia trouxesse consequencias dolorosas, o amor de Deus nunca deixou de cuidar deles.',
        'Com Suas proprias maos, o Criador fez vestimentas de peles para aquecer e proteger Adao e Eva.',
        'E Deus fez a primeira grande promessa: um Salvador viria no futuro para vencer o mal e restaurar todas as coisas.'
      ],
      moral: 'O perdao e a misericordia de Deus sao infinitamente maiores do que os nossos erros!'
    },
    {
      file: 'scene_10_promessa_eterna.jpg',
      title: '10. A Promessa Eterna',
      badge: 'Genesis 3:24',
      narrative: [
        'Adao e Eva olharam para tras uma ultima vez e deixaram o Eden com fe e esperanca no coracao.',
        'A jornada fora do jardim exigiria esforco e coragem, mas a presenca e a promessa de Deus continuavam com eles.',
        'Um dia, pelo imenso amor de Jesus, a humanidade retornara ao verdadeiro paraiso!'
      ],
      moral: 'A historia nao termina na tristeza: o plano de amor de Deus sempre vence no final!'
    }
  ];

  storyPages.forEach((p, idx) => {
    addStoryPage(doc, p.file, p.title, p.badge, p.narrative, p.moral, idx + 1);
  });

  // BACK COVER
  doc.addPage();
  doc.rect(0, 0, PAGE_W, PAGE_H).fill('#064E3B');

  doc.font('Helvetica-Bold')
     .fontSize(28)
     .fillColor('#FFFFFF')
     .text('TOON TALES KIDS', 0, 160, { width: PAGE_W, align: 'center' });

  doc.font('Helvetica-Bold')
     .fontSize(14)
     .fillColor('#A7F3D0')
     .text('A BIBLIA EM AUDIO INFANTIL', 0, 200, { width: PAGE_W, align: 'center' });

  doc.roundedRect((PAGE_W - 460) / 2, 260, 460, 200, 12)
     .fillAndStroke('#047857', '#34D399');

  doc.font('Helvetica-Bold')
     .fontSize(14)
     .fillColor('#FDE047')
     .text('TEMPORADA 1: O COMECo', 0, 285, { width: PAGE_W, align: 'center' });

  const epList = [
    'Episodio 1: A Criacao do Mundo',
    'Episodio 2: Adao e Eva - O Jardim Perfeito',
    'Episodio 3: A Arca de Noe e a Grande Promessa',
    'Episodio 4: A Torre de Babel',
    'Episodio 5: Abraao e as Estrelas'
  ];

  let epY = 320;
  doc.font('Helvetica')
     .fontSize(11)
     .fillColor('#FFFFFF');
  epList.forEach(ep => {
    doc.text(ep, (PAGE_W - 400) / 2, epY, { width: 400, align: 'center' });
    epY += 20;
  });

  doc.font('Helvetica-Bold')
     .fontSize(12)
     .fillColor('#6EE7B7')
     .text('Acesse a plataforma completa e assista aos filmes:', 0, 520, { width: PAGE_W, align: 'center' });

  doc.roundedRect((PAGE_W - 280) / 2, 545, 280, 36, 18)
     .fillAndStroke('#0F172A', '#38BDF8');
  doc.font('Helvetica-Bold')
     .fontSize(13)
     .fillColor('#38BDF8')
     .text('toon-tales-kids.vercel.app', 0, 556, { width: PAGE_W, align: 'center' });

  doc.font('Helvetica-Oblique')
     .fontSize(10)
     .fillColor('#A7F3D0')
     .text('Historias que ensinam, aventuras que transformam.', 0, 660, { width: PAGE_W, align: 'center' });

  doc.end();

  writeStream.on('finish', () => {
    console.log(`Livro Ilustrado finalizado com sucesso! (${(fs.statSync(outPdfPath).size / 1024 / 1024).toFixed(2)} MB)`);
    try {
      fs.copyFileSync(outPdfPath, desktopPdfPath1);
      console.log(`Copiado para: ${desktopPdfPath1}`);
    } catch(e){}
    try {
      fs.copyFileSync(outPdfPath, desktopPdfPath2);
      console.log(`Copiado para: ${desktopPdfPath2}`);
    } catch(e){}
  });
}

buildIllustratedBook();
