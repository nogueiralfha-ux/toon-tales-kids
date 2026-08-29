import React, { useState } from 'react';
import { SOUND_EFFECTS_CATALOG } from '../data/creationScript';
import { audioEngine } from '../services/audioEngine';
import { Sun, Waves, Wind, Sprout, Sparkles, Feather, Fish, Crown, Zap, Music, Volume2, Sparkle } from 'lucide-react';

export const SoundBoardConsole: React.FC = () => {
  const [activeSfx, setActiveSfx] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sun': return <Sun className="w-6 h-6 text-amber-400" />;
      case 'Waves': return <Waves className="w-6 h-6 text-cyan-400" />;
      case 'Wind': return <Wind className="w-6 h-6 text-sky-400" />;
      case 'Sprout': return <Sprout className="w-6 h-6 text-emerald-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-yellow-300" />;
      case 'Feather': return <Feather className="w-6 h-6 text-rose-300" />;
      case 'Fish': return <Fish className="w-6 h-6 text-blue-400" />;
      case 'Crown': return <Crown className="w-6 h-6 text-amber-500" />;
      case 'Zap': return <Zap className="w-6 h-6 text-orange-400" />;
      case 'Music': return <Music className="w-6 h-6 text-purple-400" />;
      case 'Sparkle': return <Sparkle className="w-6 h-6 text-pink-400" />;
      default: return <Volume2 className="w-6 h-6 text-slate-300" />;
    }
  };

  const handleTrigger = (sfxId: string) => {
    setActiveSfx(sfxId);
    audioEngine.triggerSoundEffect(sfxId);
    setTimeout(() => {
      setActiveSfx((prev) => (prev === sfxId ? null : prev));
    }, 1500);
  };

  return (
    <div id="soundboard-console" className="w-full bg-white border-2 border-slate-100 rounded-3xl p-5 sm:p-7 shadow-md">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b-2 border-slate-100 pb-5 mb-6">
        <div>
          <h3 className="text-xl font-black text-slate-900 flex items-center gap-2 font-brand">
            <Volume2 className="w-5 h-5 text-orange-500" />
            Mesa de Efeitos Sonoros & Foley Interativo
          </h3>
          <p className="text-xs text-slate-500 font-semibold mt-0.5">
            Toque nos botões para disparar os efeitos cinematográficos da Criação!
          </p>
        </div>
        <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 shadow-sm">
          11 Efeitos Procedurais
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
        {SOUND_EFFECTS_CATALOG.map((sfx) => {
          const isActive = activeSfx === sfx.id;
          return (
            <button
              key={sfx.id}
              onClick={() => handleTrigger(sfx.id)}
              className={`p-4 sm:p-5 rounded-3xl border-2 text-left flex flex-col justify-between transition-all duration-200 group active:scale-95 ${
                isActive
                  ? 'bg-orange-50 border-orange-500 shadow-md ring-2 ring-orange-200 scale-[1.02]'
                  : 'bg-white border-slate-100 hover:border-orange-200 hover:bg-orange-50/20 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-3.5">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 group-hover:bg-white group-hover:border-orange-200 transition-colors shadow-sm">
                  {getIcon(sfx.iconName)}
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-200">
                  {sfx.category}
                </span>
              </div>

              <div>
                <h4 className="font-black text-slate-900 text-sm group-hover:text-orange-600 font-brand">
                  {sfx.name}
                </h4>
                <p className="text-xs text-slate-500 font-medium mt-1 line-clamp-2">
                  {sfx.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
