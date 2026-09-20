const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const lineartsDir = path.resolve('EDITORIAL_LIBRARY/LINEARTS_ADAO');
const outPdfPath = path.resolve('Livro_Colorir_Adao_Eva_Completo.pdf');
const desktopPdfPath1 = 'C:\\Users\\lucia\\OneDrive\\Área de Trabalho\\Livro_Colorir_Adao_Eva_Completo.pdf';
const desktopPdfPath2 = 'C:\\Users\\lucia\\Desktop\\Livro_Colorir_Adao_Eva_Completo.pdf';

const doc = new PDFDocument({
  size: 'A4', // 595.28 x 841.89 pt
  margins: { top: 0, bottom: 0, left: 0, right: 0 },
  autoFirstPage: false
});

const writeStream = fs.createWriteStream(outPdfPath);
doc.pipe(writeStream);

const PAGE_W = 595.28;
const PAGE_H = 841.89;

const coloringScenes = [
  {
    file: 'scene_01_jardim_eden_lineart.jpg',
    title: '1. O Jardim do Eden',
    ref: 'Genesis 2:8',
    instruction: '* Dica de Cor: Pinte as arvores com diferentes tons de verde e o rio de azul cristalino!'
  },
  {
    file: 'scene_02_folego_vida_lineart.jpg',
    title: '2. O Folego de Vida',
    ref: 'Genesis 2:7',
    instruction: '* Dica de Cor: Pinte o raio de vida com amarelo brilhante e o jardim com cores alegres!'
  },
  {
    file: 'scene_03_adao_animais_lineart.jpg',
    title: '3. Adao e os Animais no Eden',
    ref: 'Genesis 2:19-20',
    instruction: '* Dica de Cor: Use cores vivas para os passaros, borboletas e leaozinhos amigos!'
  },
  {
    file: 'scene_04_criacao_eva_lineart.jpg',
    title: '4. A Criacao de Eva',
    ref: 'Genesis 2:22',
    instruction: '* Dica de Cor: Pinte com cores suaves e calorosas para expressar a beleza deste encontro!'
  },
  {
    file: 'scene_05_caminhando_harmonia_lineart.jpg',
    title: '5. Caminhando em Harmonia',
    ref: 'Genesis 2:25',
    instruction: '* Dica de Cor: Use muito verde, flores vermelhas e amarelas, e um ceu azul radiante!'
  },
  {
    file: 'scene_06_arvore_vida_lineart.jpg',
    title: '6. A Arvore da Vida',
    ref: 'Genesis 2:9',
    instruction: '* Dica de Cor: Pinte os frutos da arvore com cores douradas e as folhas bem verdinhas!'
  },
  {
    file: 'scene_07_a_escolha_lineart.jpg',
    title: '7. A Escolha',
    ref: 'Genesis 3:6',
    instruction: '* Dica de Cor: Pinte com cuidado os detalhes da folhagem e das arvores ao redor!'
  },
  {
    file: 'scene_08_tristeza_medo_lineart.jpg',
    title: '8. A Tristeza do Medo',
    ref: 'Genesis 3:9',
    instruction: '* Dica de Cor: Pinte as sombras e as folhagens com tons de verde escuro e castanho!'
  },
  {
    file: 'scene_09_amor_restaura_lineart.jpg',
    title: '9. O Amor que Restaura',
    ref: 'Genesis 3:21',
    instruction: '* Dica de Cor: Pinte as vestimentas de carinho com tons suaves de bege e marrom!'
  },
  {
    file: 'scene_10_promessa_eterna_lineart.jpg',
    title: '10. A Promessa Eterna',
    ref: 'Genesis 3:24',
    instruction: '* Dica de Cor: Pinte o horizonte ao fundo com cores de um novo amanhecer cheio de sol!'
  }
];

function buildColoringBook() {
  console.log('Gerando Livro de Colorir: Adão e Eva...');

  // COVER PAGE
  doc.addPage();
  doc.rect(0, 0, PAGE_W, PAGE_H).fill('#FFFFFF');

  // Decorative border
  doc.roundedRect(24, 24, PAGE_W - 48, PAGE_H - 48, 16)
     .strokeColor('#1E293B')
     .lineWidth(3)
     .stroke();

  doc.roundedRect(30, 30, PAGE_W - 60, PAGE_H - 60, 12)
     .strokeColor('#CBD5E1')
     .lineWidth(1)
     .stroke();

  // Cover Lineart Image
  const coverLineart = path.join(lineartsDir, 'scene_01_jardim_eden_lineart.jpg');
  if (fs.existsSync(coverLineart)) {
    doc.save();
    doc.roundedRect(44, 130, PAGE_W - 88, 450, 10).clip();
    doc.image(coverLineart, 44, 130, { width: PAGE_W - 88, height: 450 });
    doc.restore();

    doc.roundedRect(44, 130, PAGE_W - 88, 450, 10)
       .strokeColor('#0F172A')
       .lineWidth(2)
       .stroke();
  }

  // Cover Titles
  doc.font('Helvetica-Bold')
     .fontSize(13)
     .fillColor('#047857')
     .text('TOON TALES KIDS - LIVRO DE COLORIR OFICIAL', 0, 50, { width: PAGE_W, align: 'center' });

  doc.font('Helvetica-Bold')
     .fontSize(32)
     .fillColor('#0F172A')
     .text('ADAO E EVA', 0, 72, { width: PAGE_W, align: 'center' });

  // Subtitle Pill
  doc.roundedRect((PAGE_W - 280) / 2, 600, 280, 34, 17)
     .fillAndStroke('#F1F5F9', '#334155');
  doc.font('Helvetica-Bold')
     .fontSize(14)
     .fillColor('#0F172A')
     .text('O JARDIM DO EDEN', (PAGE_W - 280) / 2, 610, { width: 280, align: 'center' });

  doc.font('Helvetica')
     .fontSize(11)
     .fillColor('#475569')
     .text('10 Lindos Desenhos para Pintar, Soltar a Imaginacao e Aprender a Palavra de Deus', 40, 650, { width: PAGE_W - 80, align: 'center' });

  doc.font('Helvetica-Bold')
     .fontSize(10)
     .fillColor('#047857')
     .text('toon-tales-kids.vercel.app', 0, 760, { width: PAGE_W, align: 'center' });

  // 10 COLORING PAGES
  coloringScenes.forEach((sc, idx) => {
    doc.addPage();
    doc.rect(0, 0, PAGE_W, PAGE_H).fill('#FFFFFF');

    // Outer Border
    doc.roundedRect(24, 24, PAGE_W - 48, PAGE_H - 48, 12)
       .strokeColor('#334155')
       .lineWidth(1.5)
       .stroke();

    // Header Badge
    doc.roundedRect(38, 36, 120, 22, 11)
       .fillAndStroke('#F1F5F9', '#64748B');
    doc.font('Helvetica-Bold')
       .fontSize(9)
       .fillColor('#334155')
       .text(sc.ref, 38, 42, { width: 120, align: 'center', lineBreak: false });

    // Page Title
    doc.font('Helvetica-Bold')
       .fontSize(14)
       .fillColor('#0F172A')
       .text(sc.title, 170, 38, { width: PAGE_W - 170 - 70, lineBreak: false });

    // Page Number
    doc.roundedRect(PAGE_W - 38 - 36, 36, 36, 22, 11)
       .fillAndStroke('#0F172A', '#0F172A');
    doc.font('Helvetica-Bold')
       .fontSize(9)
       .fillColor('#FFFFFF')
       .text((idx + 1).toString(), PAGE_W - 38 - 36, 42, { width: 36, align: 'center', lineBreak: false });

    // Header divider
    doc.strokeColor('#E2E8F0')
       .lineWidth(1)
       .moveTo(38, 66)
       .lineTo(PAGE_W - 38, 66)
       .stroke();

    // Huge Drawing Area (16:9 Widescreen image, 510 x 286 pt)
    const lineartPath = path.join(lineartsDir, sc.file);
    const imgW = 510;
    const imgH = 286;
    const imgX = (PAGE_W - imgW) / 2;
    const imgY = 80;

    if (fs.existsSync(lineartPath)) {
      doc.save();
      doc.roundedRect(imgX, imgY, imgW, imgH, 8).clip();
      doc.image(lineartPath, imgX, imgY, { width: imgW, height: imgH });
      doc.restore();

      doc.roundedRect(imgX, imgY, imgW, imgH, 8)
         .strokeColor('#0F172A')
         .lineWidth(2)
         .stroke();
    }

    // Coloring Box Note
    const boxY = 380;
    const boxW = PAGE_W - 76;
    const boxH = 390;

    doc.roundedRect(38, boxY, boxW, boxH, 10)
       .fillAndStroke('#FAFAFA', '#E2E8F0');

    // Instruction Title
    doc.font('Helvetica-Bold')
       .fontSize(12)
       .fillColor('#0F172A')
       .text('ESPACO PARA COLORIR E DESENHAR', 54, boxY + 16, { width: boxW - 32 });

    doc.font('Helvetica')
       .fontSize(10)
       .fillColor('#475569')
       .text(sc.instruction, 54, boxY + 36, { width: boxW - 32 });

    // Dotted drawing frame
    doc.roundedRect(54, boxY + 66, boxW - 32, boxH - 84, 8)
       .dash(4, { space: 4 })
       .strokeColor('#CBD5E1')
       .lineWidth(1.5)
       .stroke();
    doc.undash();

    doc.font('Helvetica-Oblique')
       .fontSize(9)
       .fillColor('#94A3B8')
       .text('Use este espaco para desenhar suas proprias flores, animais e detalhes do Eden!', 54, boxY + 76, { width: boxW - 32, align: 'center' });

    // Footer
    doc.font('Helvetica')
       .fontSize(8)
       .fillColor('#64748B')
       .text('Toon Tales Kids - A Biblia em Audio Infantil | toon-tales-kids.vercel.app', 38, PAGE_H - 26, {
         width: PAGE_W - 76,
         align: 'center'
       });
  });

  doc.end();

  writeStream.on('finish', () => {
    console.log(`Livro de Colorir finalizado com sucesso! (${(fs.statSync(outPdfPath).size / 1024 / 1024).toFixed(2)} MB)`);
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

buildColoringBook();
