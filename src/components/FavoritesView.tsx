import React from 'react';
import { ALL_EPISODES, Episode } from '../data/catalog';
import { EpisodeCard } from './EpisodeCard';
import { Heart, Sparkles, Compass, Play, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

interface FavoritesViewProps {
  favorites: string[];
  onPlayEpisode: (episode: Episode) => void;
  onOpenDetails: (episode: Episode) => void;
  onToggleFavorite: (episodeId: string) => void;
  onExploreCatalog: () => void;
}

export const FavoritesView: React.FC<FavoritesViewProps> = ({
  favorites,
  onPlayEpisode,
  onOpenDetails,
  onToggleFavorite,
  onExploreCatalog,
}) => {
  const favoriteEpisodes = ALL_EPISODES.filter((ep) => favorites.includes(ep.id));

  return (
    <div className="space-y-8 select-none animate-fade-in">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 rounded-[28px] p-6 sm:p-8 text-white shadow-md border-4 border-rose-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-black uppercase tracking-wider border border-white/30 font-brand">
              Minha Coleção Pessoal
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-brand tracking-tight flex items-center gap-2.5">
            <Heart className="w-8 h-8 fill-current text-white" />
            Minhas Histórias Favoritas
          </h2>
          <p className="text-xs sm:text-sm text-rose-100 max-w-xl">
            Suas aventuras bíblicas salvas para ouvir de novo quando quiser!
          </p>
        </div>

        <div className="px-5 py-2.5 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white font-brand font-black text-sm shrink-0">
          {favoriteEpisodes.length} {favoriteEpisodes.length === 1 ? 'História' : 'Histórias'}
        </div>
      </div>

      {/* Grid or Empty State */}
      {favoriteEpisodes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {favoriteEpisodes.map((ep) => (
            <EpisodeCard
              key={ep.id}
              episode={ep}
              isFavorite={true}
              onPlay={onPlayEpisode}
              onOpenDetails={onOpenDetails}
              onToggleFavorite={onToggleFavorite}
              aspect="3:4"
            />
          ))}
        </div>
      ) : (
        <div className="bg-white border-2 border-slate-200 rounded-[32px] p-12 text-center space-y-4 max-w-lg mx-auto shadow-sm">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-rose-50 text-rose-500 flex items-center justify-center border border-rose-100 shadow-inner">
            <Heart className="w-10 h-10" />
          </div>

          <div className="space-y-1.5">
            <h3 className="text-xl font-black text-slate-800 font-brand">
              Você ainda não salvou nenhuma aventura.
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Que tal descobrir uma história incrível no catálogo e clicar no coração?
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={onExploreCatalog}
              className="px-6 py-3.5 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-black text-xs sm:text-sm font-brand uppercase tracking-wider shadow-md shadow-orange-200 transition-all flex items-center gap-2 mx-auto active:scale-95"
            >
              <Compass className="w-4 h-4" />
              <span>Explorar Histórias</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
