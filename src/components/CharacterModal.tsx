import React from 'react';
import { BiblicalCharacter } from '../data/charactersData';
import { Episode, getEpisodeById } from '../data/catalog';
import { ToonTalesArtwork } from './ToonTalesArtwork';
import { X, Play, Heart, Star, Sparkles, BookOpen, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CharacterModalProps {
  character: BiblicalCharacter | null;
  onClose: () => void;
  onPlayEpisode: (episode: Episode) => void;
  favorites: string[];
  onToggleFavorite: (episodeId: string) => void;
}

export const CharacterModal: React.FC<CharacterModalProps> = ({
  character,
  onClose,
  onPlayEpisode,
  favorites,
  onToggleFavorite,
}) => {
  if (!character) return null;

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
          className="relative z-10 w-full max-w-3xl rounded-[32px] overflow-hidden bg-white border-4 border-amber-300 shadow-2xl shadow-slate-950/50 max-h-[90vh] flex flex-col"
        >
          {/* Top Banner with 3D Avatar & Header */}
          <div className="relative p-6 sm:p-8 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white flex flex-col sm:flex-row items-center gap-6 overflow-hidden">
            {/* Ambient Background Circles */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-full blur-2xl" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* 3D Avatar */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl overflow-hidden bg-slate-900 border-4 border-white/40 shadow-xl shrink-0">
              <ToonTalesArtwork
                type="character"
                name={character.svgType}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title & Header Text */}
            <div className="space-y-2 text-center sm:text-left flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-amber-200 text-xs font-black uppercase tracking-wider border border-white/30">
                  Universo 3D Toon Tales
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-brand tracking-tight">
                {character.name}
              </h2>

              <p className="text-amber-200 font-bold text-sm sm:text-base font-brand">
                {character.title}
              </p>

              {/* Personality Traits */}
              <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start pt-2">
                {character.personality.map((trait) => (
                  <span
                    key={trait}
                    className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-bold text-white border border-white/20"
                  >
                    ✨ {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Scrollable Content */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
            {/* Key Verse Quote Card */}
            <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-sm">
              <div className="p-2.5 rounded-xl bg-amber-500 text-white shrink-0 shadow-md">
                <Quote className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <p className="text-slate-800 text-xs sm:text-sm font-semibold italic leading-relaxed">
                  "{character.keyVerse}"
                </p>
                <p className="text-xs font-black text-orange-600 font-brand">
                  — {character.verseRef}
                </p>
              </div>
            </div>

            {/* Biography */}
            <div className="space-y-2">
              <h3 className="text-lg font-black text-slate-900 font-brand flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-orange-500" />
                Quem foi {character.name}?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {character.fullBio}
              </p>
            </div>

            {/* Related Audio Stories */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-black text-slate-900 font-brand flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                Histórias e Aventuras com {character.name}
              </h3>

              <div className="space-y-2.5">
                {character.relatedEpisodes.map((epId) => {
                  const ep = getEpisodeById(epId);
                  if (!ep) return null;
                  const isFav = favorites.includes(ep.id);

                  return (
                    <div
                      key={ep.id}
                      className="rounded-2xl border-2 border-slate-100 hover:border-orange-300 p-4 bg-slate-50 hover:bg-orange-50/40 transition-all flex items-center justify-between gap-4"
                    >
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black uppercase tracking-wider text-orange-600 bg-orange-100 px-2.5 py-0.5 rounded-full">
                            EP. {ep.episodeNumber}
                          </span>
                          {ep.durationLabel && (
                            <span className="text-xs text-slate-400 font-bold">
                              {ep.durationLabel}
                            </span>
                          )}
                        </div>
                        <h4 className="font-black text-slate-900 text-sm font-brand leading-tight line-clamp-1">
                          {ep.title}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-1">
                          {ep.subtitle || ep.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => onToggleFavorite(ep.id)}
                          title="Favoritar"
                          className={`p-2 rounded-xl border transition-colors ${
                            isFav
                              ? 'bg-rose-500 text-white border-rose-500'
                              : 'bg-white text-slate-400 border-slate-200 hover:text-rose-500'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
                        </button>

                        <button
                          onClick={() => {
                            onPlayEpisode(ep);
                            onClose();
                          }}
                          className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-black text-xs font-brand uppercase tracking-wider shadow-md shadow-orange-200 transition-all flex items-center gap-1.5 active:scale-95"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Ouvir</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
