import React from 'react';
import { Sparkles, BookOpen, Volume2, Award, Headphones, Moon, Sliders, Shield } from 'lucide-react';

interface HeaderProps {
  currentMeta: any;

  activeTab: 'catalog' | 'player' | 'script' | 'soundboard' | 'quiz';
  onSelectTab: (tab: 'catalog' | 'player' | 'script' | 'soundboard' | 'quiz') => void;
  onOpenMixer: () => void;
  onOpenBedtime: () => void;
  bedtimeActive: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentMeta,
  activeTab,
  onSelectTab,
  onOpenMixer,
  onOpenBedtime,
  bedtimeActive,
}) => {
  return (
    <header id="main-header" className="w-full bg-white border-b-4 border-orange-400 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand identity */}
        <div className="flex items-center gap-3.5 self-start md:self-auto">
          <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center text-white font-brand font-black text-2xl shadow-lg shadow-orange-200 ring-4 ring-orange-100 hover:scale-105 transition-transform">
            T
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-black tracking-tight text-orange-600 uppercase font-brand">
                TOON TALES <span className="text-sky-500">KIDS</span>
              </h1>
              <span className="bg-sky-100 text-sky-700 px-3 py-0.5 rounded-full font-bold text-[11px] uppercase tracking-wider border border-sky-200 hidden sm:inline-block">
                A Bíblia em Áudio
              </span>
            </div>
            <p className="text-xs text-slate-500 font-semibold">
              Temporada 1 • <span className="text-orange-600 font-bold">{currentMeta.title}</span>
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1.5 bg-slate-100/80 p-1.5 rounded-2xl border-2 border-slate-200/80 self-stretch sm:self-auto overflow-x-auto scrollbar-hide">
          <button
            id="tab-catalog"
            onClick={() => onSelectTab('catalog')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'catalog'
                ? 'bg-orange-500 text-white shadow-md shadow-orange-200 font-extrabold'
                : 'text-slate-600 hover:text-orange-600 hover:bg-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Catálogo</span>
          </button>

          <button
            id="tab-player"
            onClick={() => onSelectTab('player')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'player'
                ? 'bg-orange-500 text-white shadow-md shadow-orange-200 font-extrabold'
                : 'text-slate-600 hover:text-orange-600 hover:bg-white'
            }`}
          >
            <Headphones className="w-4 h-4" />
            <span>Episódio Atual</span>
          </button>

          <button
            id="tab-script"
            onClick={() => onSelectTab('script')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'script'
                ? 'bg-orange-500 text-white shadow-md shadow-orange-200 font-extrabold'
                : 'text-slate-600 hover:text-orange-600 hover:bg-white'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Roteiro</span>
          </button>

          <button
            id="tab-soundboard"
            onClick={() => onSelectTab('soundboard')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'soundboard'
                ? 'bg-orange-500 text-white shadow-md shadow-orange-200 font-extrabold'
                : 'text-slate-600 hover:text-orange-600 hover:bg-white'
            }`}
          >
            <Volume2 className="w-4 h-4" />
            <span>Mixer Foley</span>
          </button>

          <button
            id="tab-quiz"
            onClick={() => onSelectTab('quiz')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'quiz'
                ? 'bg-orange-500 text-white shadow-md shadow-orange-200 font-extrabold'
                : 'text-slate-600 hover:text-orange-600 hover:bg-white'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Quiz</span>
          </button>
        </nav>

        {/* Action icons & Playful Dots */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1.5 mr-1">
            <div className="w-3 h-3 bg-red-400 rounded-full shadow-sm"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-sm"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full shadow-sm"></div>
          </div>

          <button
            onClick={onOpenMixer}
            title="Mesa de Mixagem de Áudio"
            className="p-2.5 rounded-2xl bg-white hover:bg-orange-50 text-slate-700 hover:text-orange-600 border-2 border-slate-200 transition-colors shadow-sm flex items-center gap-1 text-xs font-bold"
          >
            <Sliders className="w-4 h-4 text-orange-500" />
            <span className="hidden sm:inline">Mixer</span>
          </button>

          <button
            onClick={onOpenBedtime}
            title="Modo Hora de Dormir"
            className={`p-2.5 rounded-2xl border-2 transition-colors shadow-sm flex items-center gap-1 text-xs font-bold ${
              bedtimeActive
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-indigo-200'
                : 'bg-white hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 border-slate-200'
            }`}
          >
            <Moon className={`w-4 h-4 ${bedtimeActive ? 'text-white' : 'text-indigo-500'}`} />
            <span className="hidden sm:inline">Sono</span>
          </button>
        </div>
      </div>
    </header>
  );
};
