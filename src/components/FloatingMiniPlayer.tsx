import React from 'react';
import { Scene } from '../types';
import { Episode } from '../data/catalog';
import { ToonTalesArtwork } from './ToonTalesArtwork';
import { Play, Pause, RotateCcw, FastForward, Maximize2, Sparkles, Volume2 } from 'lucide-react';
import { motion } from 'motion/react';

interface FloatingMiniPlayerProps {
  currentEpisode: Episode;
  currentScene: Scene;
  currentSceneIndex: number;
  totalScenes: number;
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
  onExpandPlayer: () => void;
  onNextScene: () => void;
  onPrevScene: () => void;
}

export const FloatingMiniPlayer: React.FC<FloatingMiniPlayerProps> = ({
  currentEpisode,
  currentScene,
  currentSceneIndex,
  totalScenes,
  isPlaying,
  onPlay,
  onPause,
  onExpandPlayer,
  onNextScene,
  onPrevScene,
}) => {
  const progress = Math.min(100, Math.round(((currentSceneIndex + 1) / totalScenes) * 100));

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 80, opacity: 0 }}
      className="fixed bottom-3 left-3 right-3 sm:left-6 sm:right-6 md:left-auto md:right-8 md:w-[460px] z-40"
    >
      <div className="bg-slate-900/95 backdrop-blur-xl border-2 border-amber-400/80 rounded-[24px] p-3.5 shadow-2xl shadow-slate-950/60 flex items-center justify-between gap-3 select-none">
        {/* Left Thumbnail & Info */}
        <div
          onClick={onExpandPlayer}
          className="flex items-center gap-3 min-w-0 cursor-pointer flex-1 group"
        >
          <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-800 shrink-0 border border-amber-400/40 shadow-inner">
            <ToonTalesArtwork
              type="episode"
              name={currentEpisode.characterId || 'david'}
              theme={currentEpisode.cardImageTheme}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform"
            />
            {isPlaying && (
              <div className="absolute inset-0 bg-amber-500/20 flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1 space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-black uppercase tracking-wider font-brand">
                Cena {currentSceneIndex + 1}/{totalScenes}
              </span>
              <span className="text-[10px] text-slate-400 truncate hidden sm:inline">
                {currentEpisode.title}
              </span>
            </div>

            <h4 className="text-white font-black text-xs sm:text-sm font-brand truncate group-hover:text-amber-300 transition-colors">
              {currentScene.title}
            </h4>

            {/* Mini Progress Line */}
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-1">
              <div
                className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Right Playback Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onPrevScene}
            title="Cena Anterior"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors hidden sm:flex"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={isPlaying ? onPause : onPlay}
            title={isPlaying ? 'Pausar' : 'Ouvir'}
            className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 flex items-center justify-center shadow-lg shadow-orange-500/40 active:scale-95 transition-all ring-2 ring-white/30"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current ml-0.5" />
            )}
          </button>

          <button
            onClick={onNextScene}
            title="Próxima Cena"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors hidden sm:flex"
          >
            <FastForward className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onExpandPlayer}
            title="Abrir Player Completo"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 text-amber-300 flex items-center justify-center transition-colors ml-1"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
