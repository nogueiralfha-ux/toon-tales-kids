import React, { useState, useEffect } from 'react';
import { HERO_BANNER_ITEMS, HeroBannerItem } from '../data/heroBannersData';
import { Episode, getEpisodeById } from '../data/catalog';
import { ToonTalesArtwork } from './ToonTalesArtwork';
import { Play, Plus, Check, Sparkles, BookOpen, ChevronLeft, ChevronRight, Star, Heart, Volume2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroBannerProps {
  onPlayEpisode: (episode: Episode) => void;
  onOpenDetails: (episode: Episode) => void;
  onOpenScript: (episode: Episode) => void;
  onOpenQuiz: (episode: Episode) => void;
  favorites: string[];
  onToggleFavorite: (episodeId: string) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onPlayEpisode,
  onOpenDetails,
  onOpenScript,
  onOpenQuiz,
  favorites,
  onToggleFavorite,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentItem = HERO_BANNER_ITEMS[currentIndex];
  const episode = getEpisodeById(currentItem.episodeId);
  const isFavorite = favorites.includes(currentItem.episodeId);

  // Auto-advance banner every 9 seconds if not manually interacted recently
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_BANNER_ITEMS.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_BANNER_ITEMS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_BANNER_ITEMS.length) % HERO_BANNER_ITEMS.length);
  };

  return (
    <div className="relative w-full rounded-[32px] overflow-hidden bg-slate-950 border-4 border-amber-400/40 shadow-2xl shadow-orange-950/40 select-none min-h-[440px] sm:min-h-[500px] md:min-h-[560px] flex items-center">
      {/* Background Cinematic Visual with Smooth Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentItem.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
        >
          <ToonTalesArtwork
            type="hero"
            theme={currentItem.bgType}
            className="w-full h-full"
          />
          {/* Multi-layer Gradient Mask to ensure high readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent z-10 w-full sm:w-3/4 md:w-3/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40 z-10" />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content Overlay */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-6 sm:px-10 py-8 sm:py-12 flex flex-col justify-between min-h-full">
        {/* Top Badges */}
        <motion.div
          key={`meta-${currentItem.id}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center gap-2.5 mb-4"
        >
          <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black text-[11px] uppercase tracking-wider shadow-md shadow-orange-500/40 flex items-center gap-1.5 font-brand">
            <Sparkles className="w-3.5 h-3.5" />
            Superprodução em Áudio
          </span>

          <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-amber-300 text-[11px] font-black uppercase tracking-wider border border-amber-300/30">
            {currentItem.seasonLabel}
          </span>

          <span className="px-3 py-1 rounded-full bg-sky-950/80 backdrop-blur-md text-sky-300 text-[11px] font-bold border border-sky-400/30 hidden sm:inline-flex">
            {currentItem.biblicalRef}
          </span>
        </motion.div>

        {/* Big Title & Subtitle */}
        <motion.div
          key={`text-${currentItem.id}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-2.5 max-w-2xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight font-brand drop-shadow-lg leading-tight">
            {currentItem.title}
          </h1>

          <h2 className="text-base sm:text-xl md:text-2xl font-bold text-amber-400 font-brand drop-shadow-md">
            {currentItem.subtitle}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed drop-shadow max-w-xl line-clamp-3">
            {currentItem.description}
          </p>

          {/* Moral Lesson Highlight */}
          <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-emerald-300 bg-emerald-950/40 backdrop-blur-sm px-3.5 py-2 rounded-2xl border border-emerald-500/30 w-fit max-w-lg">
            <Star className="w-4 h-4 text-yellow-300 shrink-0 fill-current" />
            <span className="line-clamp-1">Lição: {currentItem.moralLesson}</span>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          key={`actions-${currentItem.id}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
        >
          {/* Main Big Play CTA */}
          <button
            onClick={() => episode && onPlayEpisode(episode)}
            className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 text-white font-black text-sm sm:text-base font-brand uppercase tracking-wider shadow-lg shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 ring-4 ring-white/30"
          >
            <Play className="w-5 h-5 fill-current ml-0.5" />
            <span>Ouvir Agora</span>
          </button>

          {/* Add to My List / Favorite Toggle */}
          <button
            onClick={() => onToggleFavorite(currentItem.episodeId)}
            className={`px-5 py-3.5 rounded-2xl backdrop-blur-md text-xs sm:text-sm font-black font-brand uppercase tracking-wider border-2 transition-all flex items-center gap-2 active:scale-95 ${
              isFavorite
                ? 'bg-rose-500/90 text-white border-rose-400 shadow-md shadow-rose-500/30'
                : 'bg-white/10 hover:bg-white/20 text-white border-white/30'
            }`}
          >
            {isFavorite ? (
              <>
                <Check className="w-4 h-4" />
                <span>Na Minha Lista</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>Minha Lista</span>
              </>
            )}
          </button>

          {/* View Script & Scenes */}
          {episode && (
            <button
              onClick={() => onOpenScript(episode)}
              className="px-4 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-md text-xs sm:text-sm font-bold border border-white/20 transition-all flex items-center gap-2 active:scale-95"
            >
              <BookOpen className="w-4 h-4 text-amber-300" />
              <span className="hidden sm:inline">Roteiro</span>
            </button>
          )}

          {/* Quick Quiz */}
          {episode && (
            <button
              onClick={() => onOpenQuiz(episode)}
              className="px-4 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-md text-xs sm:text-sm font-bold border border-white/20 transition-all flex items-center gap-2 active:scale-95"
            >
              <Star className="w-4 h-4 text-yellow-300 fill-current" />
              <span className="hidden sm:inline">Quiz</span>
            </button>
          )}
        </motion.div>

        {/* Carousel Navigation & Dots */}
        <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex items-center gap-2">
            {HERO_BANNER_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                title={item.title}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'w-8 bg-amber-400 shadow-md shadow-amber-400/50'
                    : 'w-2.5 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              title="Destaque anterior"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              title="Próximo destaque"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
