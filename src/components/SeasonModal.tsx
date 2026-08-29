import React from 'react';
import { Season, Episode } from '../data/catalog';
import { ToonTalesArtwork } from './ToonTalesArtwork';
import { X, Play, Lock, Clock, Sparkles, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SeasonModalProps {
  season: Season | null;
  onClose: () => void;
  onPlayEpisode: (episode: Episode) => void;
  onOpenEpisodeDetails: (episode: Episode) => void;
}

export const SeasonModal: React.FC<SeasonModalProps> = ({
  season,
  onClose,
  onPlayEpisode,
  onOpenEpisodeDetails,
}) => {
  if (!season) return null;

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

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-4xl rounded-[32px] overflow-hidden bg-white border-4 border-amber-300 shadow-2xl shadow-slate-950/50 max-h-[92vh] flex flex-col"
        >
          {/* Season Hero Banner */}
          <div className="relative aspect-[21/9] sm:aspect-[24/8] w-full overflow-hidden bg-slate-950 flex items-end p-6 sm:p-8 select-none">
            <ToonTalesArtwork
              type="season"
              theme={season.visualTheme}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent z-10" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative z-20 space-y-1 text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3.5 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider font-brand">
                  Temporada {season.seasonNumber}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold border border-white/20">
                  {season.totalEpisodes} Episódios
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-brand tracking-tight">
                {season.title}
              </h2>

              <p className="text-amber-200 text-xs sm:text-sm max-w-2xl font-medium">
                {season.subtitle || season.description}
              </p>
            </div>
          </div>

          {/* Episode List */}
          <div className="p-6 sm:p-8 space-y-4 overflow-y-auto flex-1 bg-slate-50/50">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-black text-slate-900 font-brand flex items-center gap-2">
                <Layers className="w-5 h-5 text-orange-500" />
                Episódios desta Temporada
              </h3>
              <span className="text-xs font-bold text-slate-500">
                {season.availableEpisodes} de {season.totalEpisodes} disponíveis
              </span>
            </div>

            <div className="space-y-3">
              {season.episodes.map((ep) => {
                const isAvail = ep.isAvailable;

                return (
                  <div
                    key={ep.id}
                    className={`rounded-2xl border-2 p-4 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                      isAvail
                        ? 'bg-white border-orange-200/80 hover:border-orange-400 hover:shadow-md'
                        : 'bg-slate-100/80 border-slate-200 opacity-60'
                    }`}
                  >
                    <div
                      onClick={() => isAvail && onOpenEpisodeDetails(ep)}
                      className={`flex-1 space-y-1 ${isAvail ? 'cursor-pointer' : ''}`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                          isAvail ? 'bg-orange-100 text-orange-700' : 'bg-slate-200 text-slate-600'
                        }`}>
                          EP. {ep.episodeNumber}
                        </span>
                        {ep.durationLabel && (
                          <span className="text-xs text-slate-400 font-bold flex items-center gap-1">
                            <Clock className="w-3 h-3 text-amber-500" />
                            {ep.durationLabel}
                          </span>
                        )}
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs text-slate-500 font-medium">{ep.categoryLabel}</span>
                      </div>

                      <h4 className={`text-base font-black font-brand leading-snug ${isAvail ? 'text-slate-900 hover:text-orange-600' : 'text-slate-600'}`}>
                        {ep.title}
                      </h4>

                      <p className="text-xs text-slate-500 line-clamp-1">
                        {ep.subtitle || ep.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                      {isAvail ? (
                        <button
                          onClick={() => {
                            onPlayEpisode(ep);
                            onClose();
                          }}
                          className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-black text-xs font-brand uppercase tracking-wider shadow-md shadow-orange-200 transition-all flex items-center gap-1.5 active:scale-95"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Ouvir</span>
                        </button>
                      ) : (
                        <span className="px-3 py-1.5 rounded-xl bg-slate-200 text-slate-500 text-xs font-bold flex items-center gap-1">
                          <Lock className="w-3.5 h-3.5" />
                          <span>Em Breve</span>
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
