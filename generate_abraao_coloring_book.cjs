const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const lineartsDir = path.resolve('EDITORIAL_LIBRARY/LINEARTS_ABRAAO');
const outPdfPath = path.resolve('Livro_Colorir_Abraao_Completo.pdf');
const desktopPdfPath = 'C:\\Users\\lucia\\OneDrive\\Área de Trabalho\\Livro_Colorir_Abraao_Completo.pdf';

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
    file: 'scene_01_ur_deserto_lineart.jpg',
    title: '1. Uma Voz no Silêncio do Deserto',
    ref: 'Gênesis 12:1',
    instruction: '★ Dica de Cor: Use tons de azul escuro e amarelo brilhante para as estrelas e tendas!'
  },
  {
    file: 'scene_02_chamado_lineart.jpg',
    title: '2. O Chamado do Criador no Deserto',
    ref: 'Gênesis 12:1-2',
    instruction: '★ Dica de Cor: Pinte o raio de luz de Deus com amarelo dourado e a túnica de azul celeste!'
  },
  {
    file: 'scene_03_sara_tenda_lineart.jpg',
    title: '3. A Decisão com Sara na Tenda',
    ref: 'Gênesis 12:4',
    instruction: '★ Dica de Cor: Pinte a lamparina com cores quentes e os tapetes com lindos padrões coloridos!'
  },
  {
    file: 'scene_04_caravana_lineart.jpg',
    title: '4. A Grande Caravana no Deserto',
    ref: 'Gênesis 12:5',
    instruction: '★ Dica de Cor: Use tons de areia dourada para as dunas e marrom para os simpáticos camelos!'
  },
  {
    file: 'scene_05_canaa_altar_lineart.jpg',
    title: '5. A Terra Prometida e o Altar de Gratidão',
    ref: 'Gênesis 12:7',
    instruction: '★ Dica de Cor: Pinte as colinas com verde vibrante, as flores coloridas e o sol radiante!'
  },
  {
    file: 'scene_06_estrelas_lineart.jpg',
    title: '6. As Estrelas e a Grande Promessa',
    ref: 'Gênesis 15:5',
    instruction: '★ Dica de Cor: Pinte cada estrelinha com lápis amarelo ou prata brilhante!'
  },
  {
    file: 'scene_08_visitantes_lineart.jpg',
    title: '7. Os Três Mensageiros sob os Carvalhos',
    ref: 'Gênesis 18:1-10',
    instruction: '★ Dica de Cor: Pinte a copa da árvore com folhagens verdes e as vestes dos anjos de branco luminoso!'
  },
  {
    file: 'scene_09_isaque_nascimento_lineart.jpg',
    title: '8. O Menino do Riso: Nasce Isaque!',
    ref: 'Gênesis 21:1-3',
    instruction: '★ Dica de Cor: Pinte o bebê Isaque com tons suaves e os rostos felizes de Abraão e Sara!'
  }
];

// ==========================================
// PÁGINA 1: CAPA PARA COLORIR
// ==========================================
doc.addPage();

// Outer border
doc.roundedRect(30, 30, PAGE_W - 60, PAGE_H - 60, 16)
   .lineWidth(3)
   .stroke('#1E293B');

// Inner fine line
doc.roundedRect(34, 34, PAGE_W - 68, PAGE_H - 68, 14)
   .lineWidth(1)
   .stroke('#94A3B8');

doc.fillColor('#0F172A')
   .font('Helvetica-Bold')
   .fontSize(22)
   .text('TOON TALES KIDS', 36, 52, { width: PAGE_W - 72, align: 'center' });

doc.fillColor('#475569')
   .font('Helvetica-Bold')
   .fontSize(14)
   .text('LIVRO OFICIAL PARA COLORIR', 36, 80, { width: PAGE_W - 72, align: 'center' });

doc.fillColor('#0F172A')
   .font('Helvetica-Bold')
   .fontSize(26)
   .text('ABRAÃO E AS ESTRELAS', 36, 102, { width: PAGE_W - 72, align: 'center' });

// Cover Line Art Image (480 x 270)
const coverLinePath = path.join(lineartsDir, 'cover_abraao_lineart.jpg');
const cImgW = 480;
const cImgH = 270;
const cImgX = (PAGE_W - cImgW) / 2;
const cImgY = 142;

doc.roundedRect(cImgX - 3, cImgY - 3, cImgW + 6, cImgH + 6, 12)
   .lineWidth(2)
   .stroke('#334155');

if (fs.existsSync(coverLinePath)) {
  doc.save();
  doc.roundedRect(cImgX, cImgY, cImgW, cImgH, 10).clip();
  doc.image(coverLinePath, cImgX, cImgY, { width: cImgW, height: cImgH });
  doc.restore();
}

// Subtitle Box
const subBoxY = cImgY + cImgH + 24;
doc.roundedRect(48, subBoxY, PAGE_W - 96, 210, 12)
   .lineWidth(1.5)
   .stroke('#94A3B8');

doc.fillColor('#1E293B')
   .font('Helvetica-Bold')
   .fontSize(13)
   .text('Traços 100% Fiéis às Cenas Oficiais da Animação!', 48, subBoxY + 18, { width: PAGE_W - 96, align: 'center' });

doc.fillColor('#475569')
   .font('Helvetica')
   .fontSize(11)
   .text('Dê asas à sua imaginação e pinte a maior jornada de fé da Bíblia.', 60, subBoxY + 42, { width: PAGE_W - 120, align: 'center' });

doc.fillColor('#475569')
   .font('Helvetica')
   .fontSize(10.5)
   .text('Use lápis de cor, giz de cera ou canetinha para colorir as estrelas cintilantes, as dunas do deserto, as tendas acolhedoras e a grande família de Abraão!', 60, subBoxY + 62, { width: PAGE_W - 120, align: 'center', lineGap: 2 });

// Artist Name Field
const fieldY = subBoxY + 125;
doc.roundedRect(60, fieldY, PAGE_W - 120, 50, 8)
   .fillAndStroke('#F8FAFC', '#CBD5E1');

doc.fillColor('#0F172A')
   .font('Helvetica-Bold')
   .fontSize(11)
   .text('ESTE LIVRO DE COLORIR PERTENCE AO(À) ARTISTA:', 60, fieldY + 10, { width: PAGE_W - 120, align: 'center', lineBreak: false });

doc.fillColor('#334155')
   .font('Helvetica')
   .fontSize(12)
   .text('Nome: ____________________________________________________', 75, fieldY + 28, { width: PAGE_W - 150, lineBreak: false });

// Cover Footer
doc.fillColor('#64748B')
   .font('Helvetica')
   .fontSize(8.5)
   .text('Edição Especial para Imprimir e Colorir • Toon Tales Kids Colecionador © 2026', 36, PAGE_H - 45, { width: PAGE_W - 72, align: 'center', lineBreak: false });

// ==========================================
// PÁGINAS 2 A 9: AS 8 CENAS DE HISTÓRIA
// ==========================================
coloringScenes.forEach((sc, idx) => {
  doc.addPage();
  const pageNum = idx + 2;

  // Header Box
  doc.roundedRect(36, 26, PAGE_W - 72, 38, 8)
     .lineWidth(1.5)
     .stroke('#1E293B');

  // Title
  doc.fillColor('#0F172A')
     .font('Helvetica-Bold')
     .fontSize(13)
     .text(sc.title, 48, 34, { width: PAGE_W - 180, lineBreak: false });

  // Ref pill
  doc.fillColor('#64748B')
     .font('Helvetica-Bold')
     .fontSize(9.5)
     .text(sc.ref, 48, 50, { width: PAGE_W - 180, lineBreak: false });

  // Page pill
  doc.roundedRect(PAGE_W - 36 - 45, 32, 35, 24, 6)
     .lineWidth(1.5)
     .stroke('#0F172A');
  doc.fillColor('#0F172A')
     .font('Helvetica-Bold')
     .fontSize(11)
     .text(`${pageNum}`, PAGE_W - 36 - 45, 38, { width: 35, align: 'center', lineBreak: false });

  // Main Line Art Image (490 x 275.6 pt - BIGGER FOR COLORING)
  // Let's make it as large and fun to color as possible: 500 x 281.25 pt
  const imgW = 500;
  const imgH = 281.25;
  const imgX = (PAGE_W - imgW) / 2;
  const imgY = 78;

  doc.roundedRect(imgX - 3, imgY - 3, imgW + 6, imgH + 6, 10)
     .lineWidth(2)
     .stroke('#1E293B');

  const imgPath = path.join(lineartsDir, sc.file);
  if (fs.existsSync(imgPath)) {
    doc.save();
    doc.roundedRect(imgX, imgY, imgW, imgH, 8).clip();
    doc.image(imgPath, imgX, imgY, { width: imgW, height: imgH });
    doc.restore();
  }

  // Coloring Activity Box below image
  const actY = imgY + imgH + 20;
  const actH = 390;
  doc.roundedRect(36, actY, PAGE_W - 72, actH, 12)
     .lineWidth(1.5)
     .stroke('#94A3B8');

  // Tip header
  doc.fillColor('#D97706')
     .font('Helvetica-Bold')
     .fontSize(11)
     .text(sc.instruction, 54, actY + 16, { width: PAGE_W - 108 });

  // Drawing / Doodling Space inside
  const drawBoxY = actY + 44;
  const drawBoxH = actH - 65;
  doc.roundedRect(54, drawBoxY, PAGE_W - 108, drawBoxH, 8)
     .fillAndStroke('#F8FAFC', '#E2E8F0');

  doc.fillColor('#94A3B8')
     .font('Helvetica-Oblique')
     .fontSize(10)
     .text('Espaço livre para desenhar seus próprios detalhes: estrelas extras, camelinhos ou flores!', 54, drawBoxY + 12, { width: PAGE_W - 108, align: 'center' });

  // Footer badge
  doc.fillColor('#64748B')
     .font('Helvetica')
     .fontSize(8.5)
     .text(`Toon Tales Kids • Livro de Colorir • Cena ${idx + 1} de 8 • Página ${pageNum}`, 36, PAGE_H - 30, { width: PAGE_W - 72, align: 'center', lineBreak: false });
});

// ==========================================
// PÁGINA 10: CERTIFICADO DO PEQUENO ARTISTA
// ==========================================
doc.addPage();

// Outer border
doc.roundedRect(30, 30, PAGE_W - 60, PAGE_H - 60, 16)
   .lineWidth(3)
   .stroke('#1E293B');

doc.roundedRect(34, 34, PAGE_W - 68, PAGE_H - 68, 14)
   .lineWidth(1)
   .stroke('#D97706');

// Header
doc.fillColor('#D97706')
   .font('Helvetica-Bold')
   .fontSize(16)
   .text('★ PARABÉNS, PEQUENO(A) ARTISTA DA FÉ! ★', 36, 50, { width: PAGE_W - 72, align: 'center', lineBreak: false });

doc.fillColor('#0F172A')
   .font('Helvetica-Bold')
   .fontSize(22)
   .text('CERTIFICADO OFICIAL DE CONCLUSÃO', 36, 75, { width: PAGE_W - 72, align: 'center', lineBreak: false });

// Final Climax Line Art (480 x 270)
const finalLinePath = path.join(lineartsDir, 'scene_10_isaque_estrelas_lineart.jpg');
const fImgW = 480;
const fImgH = 270;
const fImgX = (PAGE_W - fImgW) / 2;
const fImgY = 110;

doc.roundedRect(fImgX - 3, fImgY - 3, fImgW + 6, fImgH + 6, 12)
   .lineWidth(2)
   .stroke('#1E293B');

if (fs.existsSync(finalLinePath)) {
  doc.save();
  doc.roundedRect(fImgX, fImgY, fImgW, fImgH, 10).clip();
  doc.image(finalLinePath, fImgX, fImgY, { width: fImgW, height: fImgH });
  doc.restore();
}

// Certificate Body Box
const certY = fImgY + fImgH + 20;
const certH = 380;
doc.roundedRect(48, certY, PAGE_W - 96, certH, 12)
   .fillAndStroke('#F8FAFC', '#CBD5E1');

doc.fillColor('#1E293B')
   .font('Helvetica-Bold')
   .fontSize(13)
   .text('Certificamos com muito orgulho que:', 48, certY + 18, { width: PAGE_W - 96, align: 'center' });

// Name line
doc.fillColor('#0F172A')
   .font('Helvetica-Bold')
   .fontSize(14)
   .text('____________________________________________________', 48, certY + 45, { width: PAGE_W - 96, align: 'center' });

doc.fillColor('#475569')
   .font('Helvetica')
   .fontSize(11)
   .text('Completou com talento, dedicação e alegria todas as páginas do livro oficial para colorir da história de Abraão e as Estrelas.', 68, certY + 75, { width: PAGE_W - 136, align: 'center', lineGap: 3 });

doc.fillColor('#1E3A8A')
   .font('Helvetica-Bold')
   .fontSize(11)
   .text('«Você aprendeu que a fé é confiar no amor e nas promessas de Deus!»', 68, certY + 125, { width: PAGE_W - 136, align: 'center' });

// Signatures block
const sigY = certY + 185;
// Left sig
doc.strokeColor('#334155').lineWidth(1).moveTo(80, sigY).lineTo(230, sigY).stroke();
doc.fillColor('#475569').font('Helvetica-Bold').fontSize(9).text('Família / Responsável', 80, sigY + 6, { width: 150, align: 'center', lineBreak: false });

// Right sig
doc.strokeColor('#334155').lineWidth(1).moveTo(PAGE_W - 230, sigY).lineTo(PAGE_W - 80, sigY).stroke();
doc.fillColor('#475569').font('Helvetica-Bold').fontSize(9).text('Toon Tales Kids Studios', PAGE_W - 230, sigY + 6, { width: 150, align: 'center', lineBreak: false });

// Data block
doc.fillColor('#64748B')
   .font('Helvetica')
   .fontSize(9.5)
   .text('Data de Conclusão: _____ / _____ / 2026', 48, certY + 235, { width: PAGE_W - 96, align: 'center', lineBreak: false });

// Footer
doc.fillColor('#94A3B8')
   .font('Helvetica-Bold')
   .fontSize(8.5)
   .text('TOON TALES KIDS • PLATAFORMA BÍBLICA OFICIAL • TODOS OS DIREITOS RESERVADOS', 36, PAGE_H - 45, { width: PAGE_W - 72, align: 'center', lineBreak: false });

doc.end();

writeStream.on('finish', () => {
  console.log('[SUCCESS] Livro de Colorir generated:', outPdfPath);
  fs.copyFileSync(outPdfPath, desktopPdfPath);
  console.log('[COPIED TO DESKTOP]:', desktopPdfPath);
});
