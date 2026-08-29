import React, { useState, useRef } from 'react';
import {
  X,
  Palette,
  Download,
  Printer,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  Brush,
  PaintBucket,
  Undo,
  Heart,
  Crown,
  FileDown,
} from 'lucide-react';
import { motion } from 'motion/react';
import { audioEngine } from '../services/audioEngine';

interface ColoringStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface DrawingTemplate {
  id: string;
  title: string;
  subtitle: string;
  verse: string;
  seasonTag: string;
  paths: { id: string; d: string; defaultColor: string; name: string }[];
}

const TEMPLATES: DrawingTemplate[] = [
  {
    id: 'david',
    title: 'Davi e a Harpa no Campo',
    subtitle: 'O pastorzinho louvando ao Senhor',
    verse: 'O Senhor é meu pastor e nada me faltará. (Salmos 23:1)',
    seasonTag: 'Temporada 2',
    paths: [
      // Sky
      { id: 'sky', d: 'M10 10 H390 V250 H10 Z', defaultColor: '#E0F2FE', name: 'Céu' },
      // Sun
      { id: 'sun', d: 'M330 60 A30 30 0 1 0 330 61 Z', defaultColor: '#FDE047', name: 'Sol' },
      // Hills background
      { id: 'hill1', d: 'M10 240 Q120 180 250 240 Q330 200 390 230 L390 390 L10 390 Z', defaultColor: '#86EFAC', name: 'Montanhas' },
      // Meadow foreground
      { id: 'ground', d: 'M10 280 Q160 250 390 280 L390 390 L10 390 Z', defaultColor: '#4ADE80', name: 'Campo Verdejante' },
      // Sheep 1 body
      { id: 'sheep_body', d: 'M70 290 Q50 270 70 250 Q90 240 110 250 Q130 260 120 280 Q110 300 85 300 Z', defaultColor: '#FFFFFF', name: 'Ovelhinha' },
      // Sheep 1 head
      { id: 'sheep_head', d: 'M55 265 A12 12 0 1 0 55 266 Z', defaultColor: '#334155', name: 'Cabeça da Ovelha' },
      // David tunic
      { id: 'david_tunic', d: 'M180 210 L220 210 L235 310 L165 310 Z', defaultColor: '#F59E0B', name: 'Túnica de Davi' },
      // David head
      { id: 'david_head', d: 'M200 170 A25 25 0 1 0 200 171 Z', defaultColor: '#FCD34D', name: 'Rosto de Davi' },
      // David hair
      { id: 'david_hair', d: 'M175 160 Q200 135 225 160 Q215 145 190 145 Z', defaultColor: '#92400E', name: 'Cabelo de Davi' },
      // Harp frame
      { id: 'harp_frame', d: 'M230 220 Q260 210 255 270 Q240 280 225 275 Z', defaultColor: '#D97706', name: 'Harpa de Louvor' },
    ],
  },
  {
    id: 'noah',
    title: 'A Grande Arca de Noé',
    subtitle: 'O arco-íris da promessa de Deus',
    verse: 'Pus o meu arco nas nuvens como sinal da aliança. (Gênesis 9:13)',
    seasonTag: 'Temporada 1',
    paths: [
      // Sky
      { id: 'sky_noah', d: 'M10 10 H390 V260 H10 Z', defaultColor: '#BAE6FD', name: 'Céu Azul' },
      // Rainbow arch 1
      { id: 'rainbow_red', d: 'M50 200 A150 150 0 0 1 350 200 L350 185 A165 165 0 0 0 50 185 Z', defaultColor: '#EF4444', name: 'Arco-Íris Vermelho' },
      // Rainbow arch 2
      { id: 'rainbow_yellow', d: 'M65 200 A135 135 0 0 1 335 200 L335 185 A150 150 0 0 0 65 185 Z', defaultColor: '#FBBF24', name: 'Arco-Íris Amarelo' },
      // Rainbow arch 3
      { id: 'rainbow_blue', d: 'M80 200 A120 120 0 0 1 320 200 L320 185 A135 135 0 0 0 80 185 Z', defaultColor: '#3B82F6', name: 'Arco-Íris Azul' },
      // Water
      { id: 'water', d: 'M10 260 Q100 245 200 260 Q300 275 390 260 L390 390 L10 390 Z', defaultColor: '#0284C7', name: 'Águas' },
      // Ark hull
      { id: 'ark_hull', d: 'M100 250 L300 250 L270 310 L130 310 Z', defaultColor: '#78350F', name: 'Casco da Arca' },
      // Ark cabin
      { id: 'ark_cabin', d: 'M140 210 H260 V250 H140 Z', defaultColor: '#B45309', name: 'Cabine da Arca' },
      // Ark roof
      { id: 'ark_roof', d: 'M130 210 L200 185 L270 210 Z', defaultColor: '#92400E', name: 'Telhado' },
      // Dove
      { id: 'dove', d: 'M200 130 Q215 115 230 130 Q215 140 200 130 Z', defaultColor: '#FFFFFF', name: 'Pombinha da Paz' },
    ],
  },
  {
    id: 'daniel',
    title: 'Daniel e os Leões Amistosos',
    subtitle: 'Protegido pelo anjo do Senhor',
    verse: 'O meu Deus enviou o Seu anjo e fechou a boca dos leões. (Daniel 6:22)',
    seasonTag: 'Temporada 5',
    paths: [
      // Cave background
      { id: 'cave_bg', d: 'M10 10 H390 V390 H10 Z', defaultColor: '#334155', name: 'Cova de Pedras' },
      // Light beam from above
      { id: 'light_beam', d: 'M150 10 L250 10 L290 390 L110 390 Z', defaultColor: '#FEF08A', name: 'Luz Celestial' },
      // Daniel prayer pose
      { id: 'daniel_robe', d: 'M180 220 L220 220 L230 340 L170 340 Z', defaultColor: '#F8FAFC', name: 'Túnica de Oração' },
      { id: 'daniel_head', d: 'M200 180 A20 20 0 1 0 200 181 Z', defaultColor: '#FCD34D', name: 'Daniel' },
      // Lion left body
      { id: 'lion1_body', d: 'M60 280 Q100 260 120 310 Q100 360 60 350 Z', defaultColor: '#F59E0B', name: 'Leão Manso 1' },
      { id: 'lion1_mane', d: 'M110 270 A25 25 0 1 0 110 271 Z', defaultColor: '#B45309', name: 'Juba do Leão 1' },
      // Lion right body
      { id: 'lion2_body', d: 'M340 280 Q300 260 280 310 Q300 360 340 350 Z', defaultColor: '#F59E0B', name: 'Leão Manso 2' },
      { id: 'lion2_mane', d: 'M290 270 A25 25 0 1 0 290 271 Z', defaultColor: '#B45309', name: 'Juba do Leão 2' },
    ],
  },
];

const COLOR_PALETTE = [
  { name: 'Ouro Divino', hex: '#F59E0B' },
  { name: 'Amarelo Sol', hex: '#FDE047' },
  { name: 'Laranja Fogo', hex: '#EA580C' },
  { name: 'Vermelho Manto', hex: '#EF4444' },
  { name: 'Rosa Flor', hex: '#EC4899' },
  { name: 'Roxo Real', hex: '#8B5CF6' },
  { name: 'Azul Céu', hex: '#38BDF8' },
  { name: 'Azul Real', hex: '#2563EB' },
  { name: 'Verde Jardim', hex: '#22C55E' },
  { name: 'Verde Esmeralda', hex: '#059669' },
  { name: 'Marrom Madeira', hex: '#78350F' },
  { name: 'Areia Bíblica', hex: '#D97706' },
  { name: 'Pele Clara', hex: '#FCD34D' },
  { name: 'Branco Paz', hex: '#FFFFFF' },
  { name: 'Cinza Rocha', hex: '#64748B' },
  { name: 'Preto Noite', hex: '#0F172A' },
];

export const ColoringStudioModal: React.FC<ColoringStudioModalProps> = ({ isOpen, onClose }) => {
  const [selectedTemplateIndex, setSelectedTemplateIndex] = useState<number>(0);
  const [selectedColor, setSelectedColor] = useState<string>('#F59E0B');
  const [coloredPaths, setColoredPaths] = useState<Record<string, string>>({});
  const [isSavedToast, setIsSavedToast] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  if (!isOpen) return null;

  const currentTemplate = TEMPLATES[selectedTemplateIndex];

  const handleColorPath = (pathId: string) => {
    audioEngine.triggerSoundEffect('star_chimes');
    setColoredPaths((prev) => ({
      ...prev,
      [pathId]: selectedColor,
    }));
  };

  const handleResetColors = () => {
    setColoredPaths({});
  };

  // Download colored version
  const handleDownloadColored = () => {
    if (!svgRef.current) return;
    const svgElement = svgRef.current;
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      if (ctx) {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, 800, 800);
        ctx.drawImage(img, 0, 0, 800, 800);
        const link = document.createElement('a');
        link.download = `toon-tales-colorido-${currentTemplate.id}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        setIsSavedToast('Desenho colorido salvo com sucesso! 🎉');
        setTimeout(() => setIsSavedToast(null), 3000);
      }
    };
    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
  };

  // Download clean Black & White outline version for printing
  const handleDownloadBlackAndWhite = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');

    // Create a cloned SVG string with all white fills and bold black outlines
    const bwSvgString = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="800" height="800">
        <rect width="400" height="400" fill="#FFFFFF" />
        ${currentTemplate.paths
          .map(
            (p) =>
              `<path d="${p.d}" fill="#FFFFFF" stroke="#000000" stroke-width="4.5" stroke-linejoin="round" stroke-linecap="round" />`
          )
          .join('\n')}
      </svg>
    `;

    const img = new Image();
    img.onload = () => {
      if (ctx) {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, 800, 800);
        ctx.drawImage(img, 0, 0, 800, 800);
        const link = document.createElement('a');
        link.download = `toon-tales-para-colorir-PB-${currentTemplate.id}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        setIsSavedToast('Caderno Preto e Branco baixado para imprimir! 🖨️');
        setTimeout(() => setIsSavedToast(null), 3000);
      }
    };
    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(bwSvgString)));
  };

  const handlePrintTemplate = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 1, y: 0 }}
        className="relative z-10 w-full max-w-5xl rounded-[36px] overflow-hidden bg-white border-4 border-amber-400 shadow-2xl flex flex-col max-h-[92vh]"
      >
        {/* Top Header */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white p-4 sm:p-6 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center shadow-inner">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-white text-orange-600 text-[10px] font-black uppercase font-brand">
                  Liberado em Todos os Planos
                </span>
                <h3 className="text-base sm:text-xl font-black font-brand">
                  Estúdio de Pintura Bíblica 3D & Caderno P&B
                </h3>
              </div>
              <p className="text-xs text-amber-100 hidden sm:block">
                Pinte online no celular/tablet ou baixe em Preto e Branco (P&B) para imprimir e colorir em casa!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadBlackAndWhite}
              className="px-3.5 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-black font-brand uppercase tracking-wider transition-all flex items-center gap-1.5 border border-white/30"
              title="Baixar em Preto e Branco para Imprimir"
            >
              <FileDown className="w-4 h-4" />
              <span className="hidden md:inline">Baixar P&B (Imprimir)</span>
            </button>
            <button
              onClick={handlePrintTemplate}
              className="px-3.5 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-black font-brand uppercase tracking-wider transition-all flex items-center gap-1.5"
              title="Imprimir Direto"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden md:inline">Imprimir</span>
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Template Picker & Drawing Canvas */}
          <div className="lg:col-span-8 space-y-4">
            {/* Template Selector Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {TEMPLATES.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setSelectedTemplateIndex(idx);
                    setColoredPaths({});
                  }}
                  className={`px-4 py-2 rounded-2xl text-xs font-black font-brand transition-all shrink-0 flex items-center gap-2 ${
                    selectedTemplateIndex === idx
                      ? 'bg-orange-500 text-white shadow-md shadow-orange-300 scale-105'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.title}</span>
                </button>
              ))}
            </div>

            {/* Interactive SVG Coloring Canvas */}
            <div className="relative aspect-square w-full max-w-[500px] mx-auto rounded-3xl overflow-hidden bg-slate-50 border-4 border-amber-300 shadow-inner p-2 flex items-center justify-center">
              <svg
                ref={svgRef}
                viewBox="0 0 400 400"
                className="w-full h-full cursor-pointer select-none"
              >
                {currentTemplate.paths.map((p) => {
                  const fillColor = coloredPaths[p.id] || p.defaultColor;
                  return (
                    <path
                      key={p.id}
                      d={p.d}
                      fill={fillColor}
                      stroke="#1E293B"
                      strokeWidth="3.5"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      onClick={() => handleColorPath(p.id)}
                      className="transition-colors duration-200 hover:opacity-90 hover:stroke-orange-500 hover:stroke-[4.5]"
                    >
                      <title>{p.name}</title>
                    </path>
                  );
                })}
              </svg>

              {/* Reset button inside canvas */}
              <button
                onClick={handleResetColors}
                className="absolute top-4 right-4 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 text-slate-700 hover:text-orange-600 text-xs font-bold font-brand shadow-sm flex items-center gap-1 transition-colors"
                title="Reiniciar Cores"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Limpar</span>
              </button>
            </div>

            {/* Template Info & Verse */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-center space-y-1">
              <div className="flex items-center justify-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-amber-200 text-amber-900 text-[10px] font-black uppercase font-brand">
                  {currentTemplate.seasonTag}
                </span>
                <h4 className="text-sm font-black text-slate-900 font-brand">{currentTemplate.title}</h4>
              </div>
              <p className="text-xs text-slate-600 italic">"{currentTemplate.verse}"</p>
            </div>
          </div>

          {/* Right Column: Palette & Action Buttons */}
          <div className="lg:col-span-4 space-y-5 flex flex-col justify-between">
            {/* Color Palette Grid */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-black uppercase tracking-wider font-brand text-slate-700 flex items-center gap-1.5">
                  <PaintBucket className="w-4 h-4 text-orange-500" />
                  Paleta de Cores Bíblicas
                </label>
                <span className="text-[11px] text-slate-400 font-bold">Toque para escolher</span>
              </div>

              <div className="grid grid-cols-4 gap-2.5">
                {COLOR_PALETTE.map((color) => (
                  <button
                    key={color.hex}
                    onClick={() => setSelectedColor(color.hex)}
                    className={`aspect-square rounded-2xl border-2 transition-all flex flex-col items-center justify-center shadow-xs relative ${
                      selectedColor === color.hex
                        ? 'border-orange-600 scale-110 ring-4 ring-orange-200 z-10'
                        : 'border-slate-200 hover:scale-105'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  >
                    {selectedColor === color.hex && (
                      <CheckCircle2
                        className={`w-5 h-5 drop-shadow-md ${
                          ['#FFFFFF', '#FDE047', '#FCD34D'].includes(color.hex)
                            ? 'text-slate-900'
                            : 'text-white'
                        }`}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons: Download Colored + Download Black & White */}
            <div className="space-y-2.5 pt-2">
              <button
                onClick={handleDownloadColored}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-xs sm:text-sm font-brand uppercase tracking-wider shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Salvar Desenho Colorido (PNG)</span>
              </button>

              <button
                onClick={handleDownloadBlackAndWhite}
                className="w-full py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-amber-300 border-2 border-amber-400/50 font-black text-xs font-brand uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <FileDown className="w-4 h-4 text-amber-400" />
                <span>Baixar em Preto e Branco (P&B)</span>
              </button>
            </div>

            {/* How to use */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs text-slate-600">
              <p className="font-bold text-slate-800 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" /> Liberado em Todos os Planos:
              </p>
              <p className="text-[11px] leading-relaxed">
                Você pode pintar diretamente no celular/tablet OU baixar o arquivo em preto e branco para imprimir quantas vezes quiser!
              </p>
            </div>
          </div>
        </div>

        {/* Toast feedback */}
        {isSavedToast && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-2xl bg-emerald-600 text-white font-black font-brand text-xs shadow-2xl flex items-center gap-2 animate-bounce">
            <CheckCircle2 className="w-4 h-4" />
            <span>{isSavedToast}</span>
          </div>
        )}
      </motion.div>
    </div>
  );
};
