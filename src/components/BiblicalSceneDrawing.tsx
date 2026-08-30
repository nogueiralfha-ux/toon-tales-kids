import React from 'react';

interface BiblicalSceneDrawingProps {
  pageNumber: number;
  colored?: boolean;
  className?: string;
}

export const BiblicalSceneDrawing: React.FC<BiblicalSceneDrawingProps> = ({
  pageNumber,
  colored = false,
  className = '',
}) => {
  // Stroke styling
  const strokeColor = colored ? '#1E293B' : '#0F172A';
  const strokeWidth = '3';

  // Palette generator based on mode
  const c = {
    sky: colored ? '#BAE6FD' : '#FFFFFF',
    sun: colored ? '#FDE047' : '#FFFFFF',
    sunRays: colored ? '#F59E0B' : '#0F172A',
    cloud: colored ? '#FFFFFF' : '#FFFFFF',
    hillBack: colored ? '#86EFAC' : '#FFFFFF',
    hillFront: colored ? '#4ADE80' : '#FFFFFF',
    water: colored ? '#38BDF8' : '#FFFFFF',
    wood: colored ? '#B45309' : '#FFFFFF',
    woodDark: colored ? '#78350F' : '#FFFFFF',
    gold: colored ? '#F59E0B' : '#FFFFFF',
    skin: colored ? '#FCD34D' : '#FFFFFF',
    hairDark: colored ? '#451A03' : '#FFFFFF',
    hairBrown: colored ? '#78350F' : '#FFFFFF',
    robeBlue: colored ? '#3B82F6' : '#FFFFFF',
    robeRed: colored ? '#EF4444' : '#FFFFFF',
    robePurple: colored ? '#A855F7' : '#FFFFFF',
    robeWhite: colored ? '#F8FAFC' : '#FFFFFF',
    star: colored ? '#FDE047' : '#FFFFFF',
    animalOrange: colored ? '#F97316' : '#FFFFFF',
    animalGray: colored ? '#94A3B8' : '#FFFFFF',
    leaf: colored ? '#22C55E' : '#FFFFFF',
  };

  // Switch by pageNumber (1 to 30)
  const sceneIdx = ((pageNumber - 1) % 30) + 1;

  return (
    <svg
      viewBox='0 0 400 320'
      className={w-full h-full max-h-[300px] object-contain select-none }
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='400' height='320' fill={colored ? c.sky : '#FFFFFF'} rx='16' />

      {/* 1. CRIAÇÃO / SOL & ESTRELAS */}
      {sceneIdx === 1 && (
        <g stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round'>
          <path d='M10 240 Q100 200 200 230 Q300 260 390 220 L390 310 L10 310 Z' fill={c.hillBack} />
          <path d='M10 260 Q150 230 280 260 Q340 270 390 250 L390 310 L10 310 Z' fill={c.hillFront} />
          <circle cx='200' cy='120' r='50' fill={c.sun} />
          <line x1='200' y1='50' x2='200' y2='30' stroke={c.sunRays} strokeWidth='4' />
          <line x1='200' y1='190' x2='200' y2='210' stroke={c.sunRays} strokeWidth='4' />
          <line x1='130' y1='120' x2='110' y2='120' stroke={c.sunRays} strokeWidth='4' />
          <line x1='270' y1='120' x2='290' y2='120' stroke={c.sunRays} strokeWidth='4' />
          <path d='M60 100 Q80 80 110 90 Q130 75 150 95 Q170 95 170 115 Q170 130 140 130 L70 130 Q50 130 50 115 Z' fill={c.cloud} />
          <path d='M250 80 Q270 60 300 70 Q320 55 340 75 Q360 75 360 95 Q360 110 330 110 L260 110 Q240 110 240 95 Z' fill={c.cloud} />
        </g>
      )}

      {/* 2. ADÃO E EVA NO ÉDEN */}
      {sceneIdx === 2 && (
        <g stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round'>
          <path d='M10 250 Q200 220 390 250 L390 310 L10 310 Z' fill={c.hillFront} />
          <rect x='60' y='140' width='24' height='120' fill={c.wood} />
          <circle cx='72' cy='120' r='55' fill={c.leaf} />
          <circle cx='55' cy='110' r='8' fill={colored ? '#EF4444' : '#FFFFFF'} />
          <circle cx='85' cy='130' r='8' fill={colored ? '#EF4444' : '#FFFFFF'} />
          <rect x='310' y='140' width='24' height='120' fill={c.wood} />
          <circle cx='322' cy='120' r='55' fill={c.leaf} />
          <path d='M160 210 L190 210 L185 280 L165 280 Z' fill={c.robeBlue} />
          <circle cx='175' cy='180' r='18' fill={c.skin} />
          <path d='M210 210 L240 210 L245 280 L205 280 Z' fill={c.robePurple} />
          <circle cx='225' cy='180' r='18' fill={c.skin} />
        </g>
      )}

      {/* 3. NOÉ E A GRANDE ARCA */}
      {sceneIdx === 3 && (
        <g stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round'>
          <path d='M10 250 Q100 235 200 250 Q300 265 390 250 L390 310 L10 310 Z' fill={c.water} />
          <path d='M80 200 L320 200 L280 270 L120 270 Z' fill={c.wood} />
          <rect x='150' y='150' width='100' height='50' fill={c.woodDark} />
          <polygon points='140,150 200,110 260,150' fill={c.wood} />
          <circle cx='170' cy='175' r='10' fill={c.cloud} />
          <circle cx='230' cy='175' r='10' fill={c.cloud} />
          <path d='M40 90 Q60 50 100 50 Q120 50 130 70 Q150 70 160 90 Z' fill={c.cloud} />
          <circle cx='330' cy='80' r='25' fill={c.sun} />
        </g>
      )}

      {/* 4. ARCO-ÍRIS DA PROMESSA */}
      {sceneIdx === 4 && (
        <g stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round'>
          <path d='M40 260 A160 160 0 0 1 360 260' fill='none' stroke={colored ? '#EF4444' : '#0F172A'} strokeWidth='14' />
          <path d='M60 260 A140 140 0 0 1 340 260' fill='none' stroke={colored ? '#F59E0B' : '#0F172A'} strokeWidth='14' />
          <path d='M80 260 A120 120 0 0 1 320 260' fill='none' stroke={colored ? '#10B981' : '#0F172A'} strokeWidth='14' />
          <path d='M100 260 A100 100 0 0 1 300 260' fill='none' stroke={colored ? '#3B82F6' : '#0F172A'} strokeWidth='14' />
          <path d='M30 260 Q60 230 100 240 Q130 230 150 260 Z' fill={c.cloud} />
          <path d='M250 260 Q280 230 320 240 Q350 230 370 260 Z' fill={c.cloud} />
          <path d='M190 140 Q205 125 220 140 Q210 155 190 140 Z' fill={c.cloud} />
        </g>
      )}

      {/* 5. ABRAÃO E AS ESTRELAS */}
      {sceneIdx === 5 && (
        <g stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round'>
          <rect width='400' height='320' fill={colored ? '#0F172A' : '#FFFFFF'} rx='16' />
          <path d='M10 240 Q200 210 390 240 L390 310 L10 310 Z' fill={colored ? '#1E293B' : '#FFFFFF'} />
          <polygon points='80,80 85,95 100,95 88,105 92,120 80,110 68,120 72,105 60,95 75,95' fill={c.star} />
          <polygon points='200,50 204,62 216,62 206,70 210,82 200,74 190,82 194,70 184,62 196,62' fill={c.star} />
          <polygon points='320,80 324,92 336,92 326,100 330,112 320,104 310,112 314,100 304,92 316,92' fill={c.star} />
          <polygon points='280,140 283,150 293,150 285,156 288,166 280,160 272,166 275,156 267,150 277,150' fill={c.star} />
          <polygon points='120,150 123,160 133,160 125,166 128,176 120,170 112,176 115,166 107,150 117,150' fill={c.star} />
          {/* Abraão */}
          <path d='M185 200 L215 200 L220 280 L180 280 Z' fill={c.robeBlue} />
          <circle cx='200' cy='170' r='18' fill={c.skin} />
          <path d='M190 180 Q200 205 210 180 Z' fill={c.cloud} />
        </g>
      )}

      {/* 10. MOISÉS NO MAR VERMELHO */}
      {(sceneIdx === 8 || sceneIdx === 10) && (
        <g stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round'>
          {/* Paredes de água */}
          <path d='M10 50 Q60 150 30 300 L100 300 Q130 150 70 50 Z' fill={c.water} />
          <path d='M390 50 Q340 150 370 300 L300 300 Q270 150 330 50 Z' fill={c.water} />
          <path d='M80 300 L320 300 L300 260 L100 260 Z' fill={c.wood} />
          {/* Moisés com cajado */}
          <path d='M180 200 L220 200 L225 280 L175 280 Z' fill={c.robeRed} />
          <circle cx='200' cy='165' r='20' fill={c.skin} />
          <path d='M190 175 Q200 205 210 175 Z' fill={c.cloud} />
          <line x1='235' y1='140' x2='235' y2='280' stroke={c.woodDark} strokeWidth='6' />
        </g>
      )}

      {/* 14. SANSÃO E AS COLUNAS */}
      {sceneIdx === 14 && (
        <g stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round'>
          <path d='M10 270 L390 270 L390 310 L10 310 Z' fill={c.woodDark} />
          {/* Coluna Esquerda */}
          <rect x='60' y='60' width='45' height='210' fill={c.cloud} />
          <line x1='60' y1='100' x2='105' y2='100' />
          <line x1='60' y1='230' x2='105' y2='230' />
          {/* Coluna Direita */}
          <rect x='295' y='60' width='45' height='210' fill={c.cloud} />
          <line x1='295' y1='100' x2='340' y2='100' />
          <line x1='295' y1='230' x2='340' y2='230' />
          {/* Sansão no meio */}
          <path d='M175 180 L225 180 L230 270 L170 270 Z' fill={c.robeBlue} />
          <circle cx='200' cy='140' r='22' fill={c.skin} />
          <path d='M175 130 Q200 110 225 130 Q235 170 220 180 Q180 180 165 170 Z' fill={c.hairBrown} />
          {/* Braços empurrando */}
          <line x1='180' y1='170' x2='105' y2='140' strokeWidth='8' stroke={c.skin} />
          <line x1='220' y1='170' x2='295' y2='140' strokeWidth='8' stroke={c.skin} />
        </g>
      )}

      {/* 17 / 18. DAVI E GOLIAS / HARPA */}
      {(sceneIdx === 17 || sceneIdx === 18) && (
        <g stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round'>
          <path d='M10 260 Q200 230 390 260 L390 310 L10 310 Z' fill={c.hillFront} />
          {/* Davi */}
          <path d='M110 200 L145 200 L150 275 L105 275 Z' fill={c.robeBlue} />
          <circle cx='127' cy='165' r='18' fill={c.skin} />
          <path d='M110 155 Q127 135 145 155 Z' fill={c.hairBrown} />
          {/* Harpa ou Funda */}
          <path d='M150 180 Q175 170 170 230 Q155 240 145 230 Z' fill={c.gold} />
          {/* Gigante Golias ao fundo */}
          <path d='M270 130 L340 130 L350 270 L260 270 Z' fill={colored ? '#64748B' : '#FFFFFF'} />
          <circle cx='305' cy='85' r='28' fill={c.skin} />
          <polygon points='285,75 305,45 325,75' fill={c.gold} />
          <line x1='345' y1='110' x2='375' y2='270' stroke={c.woodDark} strokeWidth='6' />
        </g>
      )}

      {/* 21. RAINHA ESTER */}
      {sceneIdx === 21 && (
        <g stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round'>
          <path d='M10 270 L390 270 L390 310 L10 310 Z' fill={colored ? '#7E22CE' : '#FFFFFF'} />
          {/* Palácio colunas */}
          <rect x='40' y='60' width='35' height='210' fill={c.gold} />
          <rect x='325' y='60' width='35' height='210' fill={c.gold} />
          {/* Rainha Ester */}
          <path d='M160 170 L240 170 L255 270 L145 270 Z' fill={c.robePurple} />
          <circle cx='200' cy='130' r='22' fill={c.skin} />
          <polygon points='185,115 192,100 200,110 208,100 215,115' fill={c.gold} />
          <path d='M175 125 Q200 105 225 125 Q235 180 165 180 Z' fill={c.hairDark} />
        </g>
      )}

      {/* 23. DANIEL NA COVA DOS LEÕES */}
      {sceneIdx === 23 && (
        <g stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round'>
          <path d='M10 260 Q200 240 390 260 L390 310 L10 310 Z' fill={colored ? '#78350F' : '#FFFFFF'} />
          {/* Daniel Orando */}
          <path d='M175 180 L225 180 L230 265 L170 265 Z' fill={c.robeWhite} />
          <circle cx='200' cy='145' r='20' fill={c.skin} />
          {/* Mãos postas em oração */}
          <path d='M195 190 L205 190 L205 210 L195 210 Z' fill={c.skin} />
          {/* Leão Esquerdo */}
          <circle cx='90' cy='220' r='35' fill={c.animalOrange} />
          <circle cx='90' cy='220' r='22' fill={c.gold} />
          {/* Leão Direito */}
          <circle cx='310' cy='220' r='35' fill={c.animalOrange} />
          <circle cx='310' cy='220' r='22' fill={c.gold} />
        </g>
      )}

      {/* 24. JONAS E O GRANDE PEIXE */}
      {sceneIdx === 24 && (
        <g stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round'>
          <path d='M10 220 Q100 200 200 220 Q300 240 390 220 L390 310 L10 310 Z' fill={c.water} />
          {/* Grande Peixe / Baleia */}
          <path d='M80 180 Q180 100 280 180 Q320 200 350 170 Q340 220 270 240 Q150 260 80 180 Z' fill={colored ? '#0284C7' : '#FFFFFF'} />
          <circle cx='120' cy='170' r='8' fill='#0F172A' />
          {/* Jato de água */}
          <path d='M190 120 Q190 70 170 50 M190 120 Q200 60 220 50' fill='none' stroke={c.water} strokeWidth='5' />
        </g>
      )}

      {/* 25. JESUS NA MANJEDOURA / NATAL */}
      {sceneIdx === 25 && (
        <g stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round'>
          <polygon points='200,30 208,55 235,55 212,72 220,98 200,82 180,98 188,72 165,55 192,55' fill={c.star} />
          <path d='M10 260 L390 260 L390 310 L10 310 Z' fill={c.woodDark} />
          {/* Estábulo */}
          <polygon points='70,160 200,100 330,160' fill={c.wood} />
          {/* Manjedoura */}
          <rect x='150' y='210' width='100' height='50' fill={c.wood} />
          <line x1='150' y1='260' x2='140' y2='290' strokeWidth='6' />
          <line x1='250' y1='260' x2='260' y2='290' strokeWidth='6' />
          {/* Palha e Bebê Jesus */}
          <ellipse cx='200' cy='210' rx='45' ry='15' fill={c.gold} />
          <circle cx='200' cy='195' r='16' fill={c.skin} />
        </g>
      )}

      {/* FALLBACK UNIVERSAL PARA DEMAIS CENAS BÍBLICAS */}
      {![1, 2, 3, 4, 5, 8, 10, 14, 17, 18, 21, 23, 24, 25].includes(sceneIdx) && (
        <g stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round'>
          <path d='M10 240 Q120 200 240 235 Q320 220 390 240 L390 310 L10 310 Z' fill={c.hillBack} />
          <path d='M10 260 Q160 230 290 260 Q340 270 390 250 L390 310 L10 310 Z' fill={c.hillFront} />
          <circle cx='320' cy='80' r='35' fill={c.sun} />
          {/* Herói Bíblico de Fé */}
          <path d='M175 170 L225 170 L235 270 L165 270 Z' fill={c.robeBlue} />
          <circle cx='200' cy='130' r='22' fill={c.skin} />
          <path d='M175 125 Q200 100 225 125 Z' fill={c.hairBrown} />
          {/* Pergaminho ou Cajado Sagrado */}
          <rect x='130' y='180' width='35' height='25' rx='6' fill={c.gold} />
          <line x1='235' y1='110' x2='235' y2='270' stroke={c.woodDark} strokeWidth='6' />
        </g>
      )}
    </svg>
  );
};
