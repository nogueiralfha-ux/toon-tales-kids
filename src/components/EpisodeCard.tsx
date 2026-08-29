import React from 'react';
import { Episode } from '../data/catalog';
import { ToonTalesArtwork } from './ToonTalesArtwork';
import { Play, Heart, Lock, Clock, Sparkles, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface EpisodeCardProps {
  episode: Episode;
  isFavorite: boolean;
  onPlay: (episode: Episode) => void;
  onOpenDetails: (episode: Episode) => void;
  onToggleFavorite: (episodeId: string) => void;
  aspect?: '3:4' | '16:9';
}

export const EpisodeCard: React.FC<EpisodeCardProps> = ({
  episode,
  isFavorite,
  onPlay,
  onOpenDetails,
  onToggleFavorite,
  aspect = '3:4',
}) => {
  const isAvailable = episode.isAvailable;

  return (
    <motion.div
      whileHover={isAvailable ? { y: -6, scale: 1.02 } : {}}
      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      className={`group relative rounded-[24px] overflow-hidden border-2 transition-all duration-200 select-none shadow-md ${
        isAvailable
          ? 'bg-white border-amber-200/80 hover:border-orange-400 hover:shadow-xl hover:shadow-orange-500/15 cursor-pointer'
          : 'bg-slate-100 border-slate-200 opacity-60 cursor-not-allowed'
      }`}
    >
      {/* Visual 3D Stage / Image Container */}
      <div
        onClick={() => isAvailable && onOpenDetails(episode)}
        className={`relative w-full overflow-hidden bg-slate-900 ${
          aspect === '3:4' ? 'aspect-[3/4]' : 'aspect-video'
        }`}
      >
        <ToonTalesArtwork
          type="episode"
          name={episode.characterId || episode.cardImageTheme}
          theme={episode.cardImageTheme}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Ambient Dark Gradient on Bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        {/* Top Badges: Episode Number & Favorite Button */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] font-black text-amber-300 uppercase tracking-wider border border-white/20 shadow-md">
            EP. {episode.episodeNumber}
          </span>

          {isAvailable && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(episode.id);
              }}
              title={isFavorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
              className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all active:scale-90 ${
                isFavorite
                  ? 'bg-rose-500 text-white shadow-md shadow-rose-300 ring-2 ring-white/50'
                  : 'bg-slate-900/60 text-white/80 hover:text-rose-400 hover:bg-slate-900/90'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
          )}
        </div>

        {/* Hover Action Overlay with Big Play Button */}
        {isAvailable && (
          <div className="absolute inset-0 bg-orange-950/40 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-opacity duration-200 flex flex-col items-center justify-center gap-3 p-4 z-20">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPlay(episode);
              }}
              className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white flex items-center justify-center shadow-lg shadow-orange-500/50 hover:scale-110 active:scale-95 transition-all ring-4 ring-white/40"
            >
              <Play className="w-6 h-6 fill-current ml-1" />
            </button>
            <span className="text-white text-xs font-black font-brand uppercase tracking-wider drop-shadow-md">
              Ouvir Agora
            </span>
          </div>
        )}

        {/* Bottom Metadata inside Image */}
        <div className="absolute bottom-3 left-3 right-3 z-10">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-300 mb-1">
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span className="truncate">{episode.categoryLabel}</span>
          </div>
          <h4 className="text-white font-black text-base sm:text-lg font-brand leading-tight drop-shadow-md line-clamp-1">
            {episode.title}
          </h4>
        </div>
      </div>

      {/* Card Body & Lesson */}
      <div
        onClick={() => isAvailable && onOpenDetails(episode)}
        className="p-4 bg-white flex flex-col justify-between gap-2"
      >
        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
          {episode.description}
        </p>

        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-500">
          {episode.durationLabel && (
            <div className="flex items-center gap-1 text-slate-500">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>{episode.durationLabel}</span>
            </div>
          )}

          {isAvailable ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPlay(episode);
              }}
              className="px-2.5 py-1 rounded-xl bg-orange-50 hover:bg-orange-100 text-orange-600 font-black flex items-center gap-1 transition-colors"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>Tocar</span>
            </button>
          ) : (
            <span className="text-slate-400 flex items-center gap-1">
              <Lock className="w-3 h-3" /> Em breve
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
