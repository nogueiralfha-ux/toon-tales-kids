import React from 'react';
import { Season, Episode } from '../data/catalog';
import { ToonTalesArtwork } from './ToonTalesArtwork';
import { Shield, Sparkles, Play, Star, ChevronRight, Lock } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroesOfFaithSectionProps {
  season5: Season;
  onPlayEpisode: (episode: Episode) => void;
  onOpenDetails: (episode: Episode) => void;
  onOpenSeason: (season: Season) => void;
}

export const HeroesOfFaithSection: React.FC<HeroesOfFaithSectionProps> = ({
  season5,
  onPlayEpisode,
  onOpenDetails,
  onOpenSeason,
}) => {
  return (
    <section className="relative rounded-[32px] overflow-hidden bg-gradient-to-b from-amber-950 via-slate-950 to-slate-950 border-4 border-amber-400/50 p-6 sm:p-8 md:p-10 shadow-2xl shadow-amber-950/30 select-none space-y-6">
      {/* Background Starlight & Glow Ambient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(251,191,36,0.18)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[radial-gradient(circle,rgba(245,158,11,0.12)_0%,transparent_70%)] pointer-events-none" />

      {/* Header with Title & Subtitle */}
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-4 border-b border-amber-400/20 pb-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md font-brand flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 fill-current" />
              Temporada 5 • Superprodução
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-950/80 text-amber-300 text-xs font-bold border border-amber-400/30">
              Hebreus 11
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-brand tracking-tight drop-shadow-md">
            🛡️ HERÓIS DA FÉ
          </h2>

          <p className="text-sm sm:text-base md:text-lg font-bold text-amber-300 font-brand">
            Pessoas comuns. Grandes desafios. Uma fé extraordinária.
          </p>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Conheça homens e mulheres que andaram com Deus, venceram gigantes, superaram fornalhas ardentes e covas de leões, provando que a fé transforma o impossível em testemunho eterno!
          </p>
        </div>

        <button
          onClick={() => onOpenSeason(season5)}
          className="px-5 py-3 rounded-2xl bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 font-black text-xs uppercase tracking-wider border border-amber-400/40 transition-all flex items-center gap-2 shrink-0 active:scale-95"
        >
          <span>Ver Temporada Completa</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Hero Episodes Grid / Carousel */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
        {season5.episodes.map((ep) => {
          const isAvailable = ep.isAvailable;

          return (
            <motion.div
              key={ep.id}
              whileHover={isAvailable ? { y: -6, scale: 1.02 } : {}}
              transition={{ duration: 0.2 }}
              onClick={() => isAvailable && onOpenDetails(ep)}
              className={`group relative rounded-[24px] overflow-hidden border-2 transition-all p-4 flex flex-col justify-between min-h-[300px] select-none ${
                isAvailable
                  ? 'bg-slate-900/90 border-amber-400/50 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-400/20 cursor-pointer'
                  : 'bg-slate-950/60 border-white/10 opacity-70 cursor-not-allowed'
              }`}
            >
              {/* Top 3D Thumbnail */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 mb-3 shadow-inner">
                <ToonTalesArtwork
                  type="episode"
                  name={ep.characterId || 'enoch'}
                  theme={ep.cardImageTheme}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                <div className="absolute top-2 left-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-950/90 text-amber-300 text-[10px] font-black uppercase tracking-wider border border-amber-400/40">
                    {ep.id === 't5e0' ? 'ABERTURA' : `HERÓI • EP ${ep.episodeNumber}`}
                  </span>
                </div>

                {isAvailable && (
                  <div className="absolute inset-0 bg-amber-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onPlayEpisode(ep);
                      }}
                      className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-500 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform ring-4 ring-white/40"
                    >
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </button>
                  </div>
                )}
              </div>

              {/* Title & Description */}
              <div className="space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-black text-white font-brand leading-snug group-hover:text-amber-300 transition-colors line-clamp-1">
                    {ep.title}
                  </h4>
                  <p className="text-xs text-amber-400/90 font-medium line-clamp-1">
                    {ep.subtitle || ep.description}
                  </p>
                  <p className="text-[11px] text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                    {ep.description}
                  </p>
                </div>

                <div className="pt-3 mt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-bold">
                  {isAvailable ? (
                    <span className="text-amber-400 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> Ouvir Agora
                    </span>
                  ) : (
                    <span className="text-slate-400 flex items-center gap-1">
                      <Lock className="w-3.5 h-3.5" /> Em breve
                    </span>
                  )}

                  {ep.durationLabel && (
                    <span className="text-slate-400">{ep.durationLabel}</span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
