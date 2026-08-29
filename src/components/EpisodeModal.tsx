import React from 'react';
import { Episode, getSeasonById } from '../data/catalog';
import { CHARACTERS_DATA } from '../data/charactersData';
import { ToonTalesArtwork } from './ToonTalesArtwork';
import { X, Play, Heart, Star, Sparkles, BookOpen, Clock, ShieldCheck, Check, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface EpisodeModalProps {
  episode: Episode | null;
  onClose: () => void;
  onPlayEpisode: (episode: Episode) => void;
  onOpenScript: (episode: Episode) => void;
  onOpenQuiz: (episode: Episode) => void;
  favorites: string[];
  onToggleFavorite: (episodeId: string) => void;
}

export const EpisodeModal: React.FC<EpisodeModalProps> = ({
  episode,
  onClose,
  onPlayEpisode,
  onOpenScript,
  onOpenQuiz,
  favorites,
  onToggleFavorite,
}) => {
  if (!episode) return null;

  const isFavorite = favorites.includes(episode.id);
  const season = getSeasonById(episode.seasonId);
  const character = CHARACTERS_DATA.find((c) => c.id === episode.characterId);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-3xl rounded-[32px] overflow-hidden bg-white border-4 border-amber-300 shadow-2xl shadow-slate-950/50 max-h-[92vh] flex flex-col"
        >
          {/* Hero Banner with 3D Artwork */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-slate-950 flex items-end p-6 sm:p-8 select-none">
            <ToonTalesArtwork
              type="episode"
              name={episode.characterId || 'david'}
              theme={episode.cardImageTheme}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-10" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Banner Meta & Title */}
            <div className="relative z-20 space-y-1 text-white">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-black uppercase tracking-wider shadow-sm font-brand">
                  Temporada {episode.seasonNumber} • EP {episode.episodeNumber}
                </span>

                {episode.durationLabel && (
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-amber-200 text-xs font-bold border border-white/20 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-300" />
                    {episode.durationLabel}
                  </span>
                )}

                <span className="px-3 py-1 rounded-full bg-sky-900/80 backdrop-blur-md text-sky-200 text-xs font-bold border border-sky-400/30">
                  {episode.biblicalRef}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-brand tracking-tight">
                {episode.title}
              </h2>

              <p className="text-amber-300 font-bold text-sm sm:text-base font-brand">
                {episode.subtitle || episode.description}
              </p>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="px-6 sm:px-8 py-4 bg-amber-50/80 border-b border-amber-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  onPlayEpisode(episode);
                  onClose();
                }}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-black text-sm font-brand uppercase tracking-wider shadow-md shadow-orange-300 transition-all flex items-center gap-2 active:scale-95 ring-2 ring-white"
              >
                <Play className="w-4 h-4 fill-current ml-0.5" />
                <span>Ouvir Agora</span>
              </button>

              <button
                onClick={() => onToggleFavorite(episode.id)}
                className={`px-4 py-3 rounded-2xl border-2 font-black text-xs font-brand uppercase tracking-wider transition-all flex items-center gap-1.5 active:scale-95 ${
                  isFavorite
                    ? 'bg-rose-500 text-white border-rose-500 shadow-md shadow-rose-200'
                    : 'bg-white hover:bg-orange-50 text-slate-700 border-slate-200'
                }`}
              >
                {isFavorite ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Salvo</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>Minha Lista</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  onOpenScript(episode);
                  onClose();
                }}
                className="px-4 py-3 rounded-2xl bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs border border-slate-200 transition-colors flex items-center gap-1.5"
              >
                <BookOpen className="w-4 h-4 text-orange-500" />
                <span>Roteiro</span>
              </button>

              <button
                onClick={() => {
                  onOpenQuiz(episode);
                  onClose();
                }}
                className="px-4 py-3 rounded-2xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs font-brand uppercase tracking-wider shadow-sm transition-colors flex items-center gap-1.5"
              >
                <Star className="w-4 h-4 fill-current" />
                <span>Quiz</span>
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
            {/* Synopsis */}
            <div className="space-y-2">
              <h3 className="text-base font-black text-slate-900 font-brand">
                Sobre esta Aventura
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {episode.description}
              </p>
            </div>

            {/* Moral Lesson Card */}
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-sm">
              <div className="p-2.5 rounded-xl bg-emerald-500 text-white shrink-0 shadow-md">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-black text-emerald-900 font-brand uppercase tracking-wider">
                  Lição que Transforma
                </h4>
                <p className="text-slate-700 text-xs sm:text-sm font-semibold leading-relaxed">
                  {episode.moralLesson}
                </p>
              </div>
            </div>

            {/* Characters & Theme Tags */}
            <div className="space-y-2">
              <h4 className="text-xs font-black text-slate-500 uppercase tracking-wider">
                Temas & Palavras-chave
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-xl bg-orange-100 text-orange-700 text-xs font-bold">
                  {episode.categoryLabel}
                </span>
                {episode.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-xl bg-slate-100 text-slate-600 text-xs font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
