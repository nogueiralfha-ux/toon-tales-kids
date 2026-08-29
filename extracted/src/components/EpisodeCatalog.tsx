import React from 'react';
import { BIBLE_SEASONS, Episode } from '../data/catalog';
import { Play, Lock, BookOpen, Clock, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface EpisodeCatalogProps {
  onSelectEpisode: (episode: Episode) => void;
}

export const EpisodeCatalog: React.FC<EpisodeCatalogProps> = ({ onSelectEpisode }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-white border-2 border-orange-200 rounded-[28px] p-6 sm:p-8 shadow-md">
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-brand flex items-center gap-2">
          <BookOpen className="w-8 h-8 text-orange-500" />
          A Bíblia em Temporadas
        </h2>
        <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-3xl leading-relaxed">
          Explore as maiores histórias já contadas, divididas em temporadas como as suas séries favoritas. 
          Escolha um episódio disponível para começar a aventura em áudio imersivo!
        </p>
      </div>

      <div className="space-y-10">
        {BIBLE_SEASONS.map((season, sIdx) => (
          <div key={season.id} className="space-y-4">
            <h3 className="text-lg sm:text-xl font-black text-slate-800 font-brand flex items-center gap-2">
              <span className="text-orange-500">S{sIdx + 1}</span> • {season.title}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {season.episodes.map((ep, eIdx) => (
                <motion.button
                  key={ep.id}
                  whileHover={ep.isAvailable ? { scale: 1.02 } : {}}
                  whileTap={ep.isAvailable ? { scale: 0.98 } : {}}
                  onClick={() => ep.isAvailable && onSelectEpisode(ep)}
                  className={`text-left w-full relative rounded-2xl p-5 border-2 transition-all duration-300 flex flex-col justify-between min-h-[140px] shadow-sm ${
                    ep.isAvailable
                      ? 'bg-white border-orange-200 hover:border-orange-400 hover:shadow-orange-100 cursor-pointer group overflow-hidden'
                      : 'bg-slate-50 border-slate-200 opacity-70 cursor-not-allowed'
                  }`}
                >
                  {ep.isAvailable && (
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-100 to-transparent rounded-bl-full opacity-50 -z-10 group-hover:scale-110 transition-transform" />
                  )}
                  
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        ep.isAvailable ? 'bg-orange-100 text-orange-700' : 'bg-slate-200 text-slate-600'
                      }`}>
                        {ep.id === 't5e0' ? 'ABERTURA OFICIAL' : ep.id.startsWith('t5') ? `EP ${eIdx + 29}` : `EP ${eIdx + 1}`}
                      </span>
                      {ep.isAvailable ? (
                        <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-md">
                          <Play className="w-3 h-3 fill-current ml-0.5" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center">
                          <Lock className="w-3 h-3" />
                        </div>
                      )}
                    </div>
                    
                    <h4 className={`text-base font-black font-brand leading-tight ${ep.isAvailable ? 'text-slate-900 group-hover:text-orange-600 transition-colors' : 'text-slate-700'}`}>
                      {ep.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1.5 line-clamp-2">
                      {ep.description}
                    </p>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-[11px] font-bold">
                    {ep.isAvailable ? (
                      <span className="text-orange-600 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Tocar agora
                      </span>
                    ) : (
                      <span className="text-slate-400">Em produção</span>
                    )}
                    {ep.durationLabel && (
                      <span className="text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {ep.durationLabel}
                      </span>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
