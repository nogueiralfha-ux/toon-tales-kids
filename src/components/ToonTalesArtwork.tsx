import React from 'react';

interface ToonTalesArtworkProps {
  type: 'character' | 'season' | 'episode' | 'hero';
  name?: string;
  theme?: string;
  className?: string;
  aspect?: '3:4' | '16:9' | '1:1' | 'banner';
}

const CHARACTER_IMAGE_MAP: Record<string, string> = {
  david: '/characters/david.jpg',
  davi: '/characters/david.jpg',
  jesus: '/characters/jesus.jpg',
  moses: '/characters/moses.jpg',
  moises: '/characters/moses.jpg',
  noah: '/characters/noah.jpg',
  noe: '/characters/noah.jpg',
  paul: '/characters/paul.jpg',
  paulo: '/characters/paul.jpg',
  abraham: '/characters/abraham.jpg',
  abraao: '/characters/abraham.jpg',
  joseph: '/characters/jacob.jpg',
  jose: '/characters/jacob.jpg',
  jacob: '/characters/jacob.jpg',
  joshua: '/characters/joshua.jpg',
  josue: '/characters/joshua.jpg',
  daniel: '/characters/daniel.jpg',
  peter: '/characters/peter.jpg',
  pedro: '/characters/peter.jpg',
  enoch: '/characters/enoch.jpg',
  enoque: '/characters/enoch.jpg',
  esther: '/characters/esther.jpg',
  ester: '/characters/esther.jpg',
  ruth: '/characters/ruth.jpg',
  rute: '/characters/ruth.jpg',
  mary: '/characters/mary.jpg',
  maria: '/characters/mary.jpg',
  stephen: '/characters/stephen.jpg',
  estevao: '/characters/stephen.jpg',
  gideon: '/characters/gideon.jpg',
  gideao: '/characters/gideon.jpg',
  creation: '/capa-oficial-hotmart.jpg',
  criacao: '/capa-oficial-hotmart.jpg',
  adam: '/capa-oficial-hotmart.jpg',
  eden: '/capa-oficial-hotmart.jpg',
};

const THEME_IMAGE_MAP: Record<string, string> = {
  creation: '/capa-oficial-hotmart.jpg',
  garden_eden: '/capa-oficial-hotmart.jpg',
  noah_ark: '/characters/noah.jpg',
  noah: '/characters/noah.jpg',
  babel: '/characters/abraham.jpg',
  abraham: '/characters/abraham.jpg',
  joseph: '/characters/jacob.jpg',
  moses: '/characters/moses.jpg',
  red_sea: '/characters/moses.jpg',
  joshua: '/characters/joshua.jpg',
  jericho: '/characters/jericho.jpg',
  david: '/characters/david.jpg',
  david_theme: '/characters/david.jpg',
  david_shepherd: '/characters/david.jpg',
  jesus_birth: '/characters/jesus.jpg',
  jesus_temple: '/characters/jesus.jpg',
  jesus_miracles: '/characters/jesus.jpg',
  jesus_resurrection: '/characters/jesus_red.jpg',
  paul_rome: '/characters/paul.jpg',
  paul_shipwreck: '/characters/paul.jpg',
  peter: '/characters/peter.jpg',
  pedro: '/characters/peter.jpg',
  enoch: '/characters/enoch.jpg',
  enoque: '/characters/enoch.jpg',
  esther: '/characters/esther.jpg',
  ester: '/characters/esther.jpg',
  ruth: '/characters/ruth.jpg',
  rute: '/characters/ruth.jpg',
  mary: '/characters/mary.jpg',
  maria: '/characters/mary.jpg',
  stephen: '/characters/stephen.jpg',
  estevao: '/characters/stephen.jpg',
  gideon: '/characters/gideon.jpg',
  gideao: '/characters/gideon.jpg',
  heroes_gold: '/characters/david.jpg',
};

export const ToonTalesArtwork: React.FC<ToonTalesArtworkProps> = ({
  type,
  name = '',
  theme = 'creation',
  className = '',
  aspect = '3:4',
}) => {
  const normName = (name || '').toLowerCase();
  const normTheme = (theme || '').toLowerCase();

  // Character
  if (type === 'character') {
    const imgSrc = CHARACTER_IMAGE_MAP[normName];
    if (imgSrc) {
      return (
        <div className={`relative overflow-hidden rounded-2xl flex items-center justify-center select-none bg-slate-900 ${className}`}>
          <img
            src={imgSrc}
            alt={name}
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      );
    }
    return (
      <div className={`relative overflow-hidden rounded-2xl flex items-center justify-center select-none bg-slate-900 ${className}`}>
        {renderCharacterArtwork(normName)}
      </div>
    );
  }

  // Season
  if (type === 'season') {
    return (
      <div className={`relative overflow-hidden rounded-2xl flex items-center justify-center select-none ${className}`}>
        {renderSeasonArtwork(theme)}
      </div>
    );
  }

  // Hero banner
  if (type === 'hero') {
    return (
      <div className={`relative overflow-hidden w-full h-full flex items-center justify-center select-none ${className}`}>
        {renderHeroArtwork(theme)}
      </div>
    );
  }

  // Episode card
  const episodeImg = THEME_IMAGE_MAP[normTheme] || (normName && CHARACTER_IMAGE_MAP[normName]);
  if (episodeImg) {
    return (
      <div className={`relative overflow-hidden rounded-2xl flex items-center justify-center select-none bg-slate-900 ${className}`}>
        <img
          src={episodeImg}
          alt={name || theme}
          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl flex items-center justify-center select-none bg-slate-900 ${className}`}>
      {renderEpisodeArtwork(theme, normName)}
    </div>
  );
};

// 3D Stylized Character Art Studio with Cinematic Volumetric Lighting
function renderCharacterArtwork(characterKey: string) {
  const key = characterKey.toLowerCase();

  switch (key) {
    case 'davi':
    case 'david':
      return (
        <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="bgDavid3D" cx="50%" cy="30%" r="75%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="50%" stopColor="#B45309" />
              <stop offset="100%" stopColor="#1E1B4B" />
            </radialGradient>
            <radialGradient id="sunGlow" cx="50%" cy="30%" r="60%">
              <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#F59E0B" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="davidSkin" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFEDD5" />
              <stop offset="70%" stopColor="#FED7AA" />
              <stop offset="100%" stopColor="#FDBA74" />
            </linearGradient>
            <linearGradient id="davidHair3D" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#B45309" />
              <stop offset="40%" stopColor="#78350F" />
              <stop offset="100%" stopColor="#451A03" />
            </linearGradient>
            <linearGradient id="tunic3D" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="60%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#0369A1" />
            </linearGradient>
          </defs>

          <rect width="400" height="400" fill="url(#bgDavid3D)" />
          <circle cx="200" cy="130" r="150" fill="url(#sunGlow)" />
          <path d="M-20 400 Q100 270 200 310 T420 290 L420 400 Z" fill="#451A03" opacity="0.4" />
          <path d="M-20 400 Q150 310 280 340 T420 340 L420 400 Z" fill="#0F172A" opacity="0.6" />

          {/* Torso & Tunic */}
          <path d="M130 270 C140 230 170 215 200 215 C230 215 260 230 270 270 L295 400 L105 400 Z" fill="url(#tunic3D)" />
          <path d="M140 225 L260 355" stroke="#78350F" strokeWidth="14" strokeLinecap="round" />
          <circle cx="210" cy="300" r="14" fill="#F59E0B" />

          {/* Neck */}
          <rect x="184" y="180" width="32" height="45" rx="10" fill="url(#davidSkin)" />

          {/* 3D Head */}
          <ellipse cx="200" cy="140" rx="52" ry="58" fill="url(#davidSkin)" />
          <circle cx="168" cy="155" r="14" fill="#FB7185" opacity="0.5" />
          <circle cx="232" cy="155" r="14" fill="#FB7185" opacity="0.5" />

          {/* Big Expressive 3D Eyes */}
          <ellipse cx="174" cy="135" rx="16" ry="18" fill="#FFFFFF" />
          <ellipse cx="226" cy="135" rx="16" ry="18" fill="#FFFFFF" />
          <circle cx="176" cy="135" r="10" fill="#0284C7" />
          <circle cx="228" cy="135" r="10" fill="#0284C7" />
          <circle cx="173" cy="131" r="3.5" fill="#FFFFFF" />
          <circle cx="225" cy="131" r="3.5" fill="#FFFFFF" />

          <path d="M160 114 Q174 105 188 114" stroke="#451A03" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          <path d="M212 114 Q226 105 240 114" stroke="#451A03" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          <path d="M184 168 Q200 185 216 168" stroke="#9A3412" strokeWidth="4" strokeLinecap="round" fill="none" />

          <path d="M135 125 C125 75 165 45 200 45 C235 45 275 75 265 125 C278 145 270 175 255 175 C245 120 235 85 200 85 C165 85 155 120 145 175 C130 175 122 145 135 125 Z" fill="url(#davidHair3D)" />
        </svg>
      );

    case 'jesus':
      return (
        <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="bgJesus3D" cx="50%" cy="30%" r="75%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#1E3A8A" />
              <stop offset="100%" stopColor="#0B132B" />
            </radialGradient>
            <radialGradient id="halo3D" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#F59E0B" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="robe3D" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="70%" stopColor="#F1F5F9" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </linearGradient>
          </defs>

          <rect width="400" height="400" fill="url(#bgJesus3D)" />
          <circle cx="200" cy="135" r="130" fill="url(#halo3D)" />

          <path d="M120 270 C130 220 170 210 200 210 C230 210 270 220 280 270 L305 400 L95 400 Z" fill="url(#robe3D)" />
          <path d="M140 220 Q200 270 270 380 L240 400 Q180 300 120 240 Z" fill="#EF4444" />

          <rect x="184" y="175" width="32" height="45" rx="10" fill="#FED7AA" />
          <ellipse cx="200" cy="135" rx="50" ry="56" fill="#FED7AA" />

          <ellipse cx="175" cy="132" rx="14" ry="16" fill="#FFFFFF" />
          <ellipse cx="225" cy="132" rx="14" ry="16" fill="#FFFFFF" />
          <circle cx="175" cy="132" r="9" fill="#451A03" />
          <circle cx="225" cy="132" r="9" fill="#451A03" />
          <circle cx="173" cy="129" r="3" fill="#FFFFFF" />
          <circle cx="223" cy="129" r="3" fill="#FFFFFF" />

          <path d="M184 162 Q200 176 216 162" stroke="#9A3412" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M172 155 Q200 200 228 155" fill="#78350F" opacity="0.85" />

          <path d="M145 115 C135 65 175 45 200 45 C225 45 265 65 255 115 C270 170 265 220 248 235 C238 150 230 105 200 105 C170 105 162 150 152 235 C135 220 130 170 145 115 Z" fill="#542B0E" />
        </svg>
      );

    case 'enoch':
    case 'enoque':
      return (
        <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="bgEnoch3D" cx="50%" cy="30%" r="75%">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#451A03" />
            </radialGradient>
          </defs>
          <rect width="400" height="400" fill="url(#bgEnoch3D)" />
          <circle cx="200" cy="130" r="140" fill="#FEF08A" opacity="0.5" />
          <path d="M130 250 C145 210 175 200 200 200 C225 200 255 210 270 250 L295 400 L105 400 Z" fill="#FBBF24" />

          <ellipse cx="200" cy="135" rx="48" ry="54" fill="#FED7AA" />
          <circle cx="174" cy="132" r="8" fill="#451A03" />
          <circle cx="226" cy="132" r="8" fill="#451A03" />
          <circle cx="172" cy="129" r="2.5" fill="#FFFFFF" />
          <circle cx="224" cy="129" r="2.5" fill="#FFFFFF" />
          <path d="M184 160 Q200 175 216 160" stroke="#78350F" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'ester':
    case 'esther':
    case 'rute':
    case 'ruth':
    case 'maria':
    case 'mary':
      return (
        <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="bgQueen3D" cx="50%" cy="30%" r="75%">
              <stop offset="0%" stopColor="#F472B6" />
              <stop offset="50%" stopColor="#DB2777" />
              <stop offset="100%" stopColor="#831843" />
            </radialGradient>
          </defs>
          <rect width="400" height="400" fill="url(#bgQueen3D)" />
          <path d="M125 260 C135 220 170 205 200 205 C230 205 265 220 275 260 L295 400 L105 400 Z" fill="#FDF2F8" />

          <ellipse cx="200" cy="135" rx="48" ry="54" fill="#FED7AA" />
          <ellipse cx="175" cy="132" rx="14" ry="16" fill="#FFFFFF" />
          <ellipse cx="225" cy="132" rx="14" ry="16" fill="#FFFFFF" />
          <circle cx="175" cy="132" r="9" fill="#831843" />
          <circle cx="225" cy="132" r="9" fill="#831843" />
          <circle cx="173" cy="129" r="3" fill="#FFFFFF" />
          <circle cx="223" cy="129" r="3" fill="#FFFFFF" />

          <path d="M184 162 Q200 175 216 162" stroke="#BE185D" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M165 75 L182 95 L200 65 L218 95 L235 75 L235 100 L165 100 Z" fill="#FBBF24" />

          <path d="M145 105 C135 55 175 40 200 40 C225 40 265 55 255 105 C275 165 270 240 252 260 C242 145 230 105 200 105 C170 105 158 145 148 260 C130 240 125 165 145 105 Z" fill="#451A03" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="bgGen3D" cx="50%" cy="30%" r="75%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#0F172A" />
            </radialGradient>
          </defs>
          <rect width="400" height="400" fill="url(#bgGen3D)" />
          <circle cx="200" cy="135" r="120" fill="#FBBF24" opacity="0.4" />
          <path d="M125 260 C135 220 170 205 200 205 C230 205 265 220 275 260 L295 400 L105 400 Z" fill="#0284C7" />

          <ellipse cx="200" cy="135" rx="50" ry="56" fill="#FED7AA" />
          <ellipse cx="175" cy="132" rx="14" ry="16" fill="#FFFFFF" />
          <ellipse cx="225" cy="132" rx="14" ry="16" fill="#FFFFFF" />
          <circle cx="175" cy="132" r="9" fill="#0F172A" />
          <circle cx="225" cy="132" r="9" fill="#0F172A" />
          <circle cx="173" cy="129" r="3" fill="#FFFFFF" />
          <circle cx="223" cy="129" r="3" fill="#FFFFFF" />

          <path d="M184 165 Q200 178 216 165" stroke="#9A3412" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M145 110 C135 60 175 45 200 45 C225 45 265 60 255 110 C265 140 255 160 245 160 C238 120 230 85 200 85 C170 85 162 120 155 160 C145 160 135 140 145 110 Z" fill="#78350F" />
        </svg>
      );
  }
}

function renderSeasonArtwork(seasonTheme: string) {
  switch (seasonTheme) {
    case 'eden':
      return (
        <svg viewBox="0 0 600 360" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="s1Eden" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#065F46" />
              <stop offset="50%" stopColor="#059669" />
              <stop offset="100%" stopColor="#34D399" />
            </linearGradient>
          </defs>
          <rect width="600" height="360" fill="url(#s1Eden)" />
          <circle cx="300" cy="100" r="140" fill="#FEF08A" opacity="0.4" />
          <path d="M-50 360 Q150 180 350 260 T650 220 L650 360 Z" fill="#064E3B" opacity="0.8" />
          <path d="M-50 360 Q200 240 450 280 T650 300 L650 360 Z" fill="#022C22" />
        </svg>
      );
    case 'desert':
      return (
        <svg viewBox="0 0 600 360" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="s2Desert" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7C2D12" />
              <stop offset="50%" stopColor="#C2410C" />
              <stop offset="100%" stopColor="#FBBF24" />
            </linearGradient>
          </defs>
          <rect width="600" height="360" fill="url(#s2Desert)" />
          <path d="M-20 360 Q150 260 300 300 T620 280 L620 360 Z" fill="#451A03" opacity="0.7" />
          <path d="M-20 360 Q200 300 400 320 T620 340 L620 360 Z" fill="#1E293B" />
        </svg>
      );
    case 'jesus_light':
      return (
        <svg viewBox="0 0 600 360" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="s3Jesus" cx="50%" cy="40%" r="70%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="40%" stopColor="#1E3A8A" />
              <stop offset="100%" stopColor="#0B132B" />
            </radialGradient>
          </defs>
          <rect width="600" height="360" fill="url(#s3Jesus)" />
          <circle cx="300" cy="150" r="160" fill="#FEF08A" opacity="0.3" />
        </svg>
      );
    case 'rome_road':
      return (
        <svg viewBox="0 0 600 360" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="s4Rome" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#312E81" />
              <stop offset="50%" stopColor="#4338CA" />
              <stop offset="100%" stopColor="#818CF8" />
            </linearGradient>
          </defs>
          <rect width="600" height="360" fill="url(#s4Rome)" />
          <path d="M220 360 L280 180 L320 180 L380 360 Z" fill="#E2E8F0" opacity="0.4" />
        </svg>
      );
    case 'heroes_gold':
    default:
      return (
        <svg viewBox="0 0 600 360" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="s5Heroes" cx="50%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#78350F" />
            </radialGradient>
          </defs>
          <rect width="600" height="360" fill="url(#s5Heroes)" />
          <circle cx="300" cy="180" r="140" fill="#FEF3C7" opacity="0.3" />
        </svg>
      );
  }
}

function renderHeroArtwork(bgType: string) {
  const norm = (bgType || '').toLowerCase();
  let imgSrc = '/characters/david.jpg';
  if (norm.includes('rome') || norm.includes('paul')) imgSrc = '/characters/paul.jpg';
  if (norm.includes('sea') || norm.includes('moses')) imgSrc = '/characters/moses.jpg';
  if (norm.includes('jesus')) imgSrc = '/characters/jesus.jpg';
  if (norm.includes('noah')) imgSrc = '/characters/noah.jpg';

  return (
    <div className="w-full h-full relative overflow-hidden bg-slate-950 flex items-center justify-end">
      <img
        src={imgSrc}
        alt="Hero Banner"
        className="w-full h-full object-cover object-center opacity-80"
      />
    </div>
  );
}

function renderEpisodeArtwork(theme: string, name?: string) {
  if (name && CHARACTER_IMAGE_MAP[name]) {
    return (
      <img
        src={CHARACTER_IMAGE_MAP[name]}
        alt={name}
        className="w-full h-full object-cover"
      />
    );
  }
  return renderCharacterArtwork(name || 'david');
}
