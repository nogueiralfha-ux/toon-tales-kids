import React from 'react';
import { Episode, getEpisodeById } from '../data/catalog';
import { ToonTalesArtwork } from './ToonTalesArtwork';
import { Play, Clock, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export interface ListeningProgressItem {
  episodeId: string;
  progressPercent: number;
  timeRemainingLabel: string;
  lastPlayedAt: string;
}

interface ContinueListeningProps {
  items: ListeningProgressItem[];
  onPlayEpisode: (episode: Episode) => void;
}

export const ContinueListening: React.FC<ContinueListeningProps> = ({
  items,
  onPlayEpisode,
}) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="space-y-4 select-none">
      <div className="flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-brand flex items-center gap-2">
          <span className="w-8 h-8 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-md shadow-orange-200">
            <Play className="w-4 h-4 fill-current ml-0.5" />
          </span>
          Continue Ouvindo
        </h2>
        <span className="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
          Suas Aventuras em Andamento
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => {
          const episode = getEpisodeById(item.episodeId);
          if (!episode) return null;

          return (
            <motion.div
              key={item.episodeId}
              whileHover={{ y: -4, scale: 1.01 }}
              onClick={() => onPlayEpisode(episode)}
              className="group relative rounded-2xl bg-white border-2 border-orange-200/80 hover:border-orange-400 p-3.5 shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center gap-3.5 overflow-hidden"
            >
              {/* Thumbnail Container */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-slate-900 shrink-0 shadow-inner">
                <ToonTalesArtwork
                  type="episode"
                  name={episode.characterId || 'david'}
                  theme={episode.cardImageTheme}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform ring-2 ring-white/60">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Information & Progress */}
              <div className="flex-1 min-w-0 space-y-1.5">
                <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-orange-600">
                  <span>EP. {episode.episodeNumber}</span>
                  <span className="text-slate-400 font-bold">{item.timeRemainingLabel} restantes</span>
                </div>

                <h4 className="text-sm font-black text-slate-900 font-brand leading-snug line-clamp-1 group-hover:text-orange-600 transition-colors">
                  {episode.title}
                </h4>

                <p className="text-[11px] text-slate-500 line-clamp-1">
                  {episode.subtitle || episode.description}
                </p>

                {/* Progress Bar Container */}
                <div className="pt-1 space-y-1">
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300"
                      style={{ width: `${item.progressPercent}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-400">
                    <span className="text-orange-600 font-extrabold">{item.progressPercent}% concluído</span>
                    <span>Retomar</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
