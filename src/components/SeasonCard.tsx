import React from 'react';
import { Season } from '../data/catalog';
import { ToonTalesArtwork } from './ToonTalesArtwork';
import { Play, Sparkles, BookOpen, Layers } from 'lucide-react';
import { motion } from 'motion/react';

interface SeasonCardProps {
  season: Season;
  onSelectSeason: (season: Season) => void;
}

export const SeasonCard: React.FC<SeasonCardProps> = ({
  season,
  onSelectSeason,
}) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      onClick={() => onSelectSeason(season)}
      className="group relative rounded-[28px] overflow-hidden border-2 border-amber-200/60 hover:border-orange-400 p-5 bg-white shadow-md hover:shadow-xl hover:shadow-orange-500/10 cursor-pointer flex flex-col justify-between min-h-[260px] select-none transition-all"
    >
      {/* Background Thematic Artwork */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-90 group-hover:opacity-100 transition-opacity">
        <ToonTalesArtwork
          type="season"
          theme={season.visualTheme}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />
      </div>

      {/* Top Header Information */}
      <div className="relative z-10 flex items-start justify-between gap-2">
        <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-amber-300 text-xs font-black uppercase tracking-wider border border-amber-300/30">
          TEMPORADA {season.seasonNumber}
        </span>

        <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-bold border border-white/30">
          {season.totalEpisodes} Episódios
        </span>
      </div>

      {/* Bottom Content & Title */}
      <div className="relative z-10 space-y-2 pt-8">
        <h3 className="text-xl sm:text-2xl font-black text-white font-brand leading-tight drop-shadow-md">
          {season.title.replace(`TEMPORADA ${season.seasonNumber} — `, '')}
        </h3>

        <p className="text-xs text-slate-200 line-clamp-2 leading-relaxed drop-shadow">
          {season.subtitle || season.description}
        </p>

        <div className="pt-2 flex items-center justify-between">
          <span className="text-[11px] font-bold text-amber-300 flex items-center gap-1.5 drop-shadow">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Explorar Saga</span>
          </span>

          <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-orange-400 transition-all">
            <Play className="w-4 h-4 fill-current ml-0.5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
