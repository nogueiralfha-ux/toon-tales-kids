import React, { useState, useMemo } from 'react';
import { ALL_EPISODES, BIBLE_SEASONS, Episode, Season } from '../data/catalog';
import { CHARACTERS_DATA, BiblicalCharacter } from '../data/charactersData';
import { CATEGORIES_DATA } from '../data/categoriesData';
import { Search, X, Play, BookOpen, Shield, Sparkles, Flame, Heart, Compass, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SmartSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectEpisode: (episode: Episode) => void;
  onSelectCharacter: (character: BiblicalCharacter) => void;
  onSelectSeason: (season: Season) => void;
}

const QUICK_TAGS = [
  'Daniel',
  'Milagres',
  'Jesus',
  'Coragem',
  'Fé',
  'Davi',
  'Mar Vermelho',
  'Paulo',
  'Criação',
  'Enoque',
  'Amor',
  'Tempestade',
];

export const SmartSearchModal: React.FC<SmartSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectEpisode,
  onSelectCharacter,
  onSelectSeason,
}) => {
  const [query, setQuery] = useState<string>('');

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { episodes: [], characters: [], seasons: [] };

    const episodes = ALL_EPISODES.filter(
      (ep) =>
        ep.title.toLowerCase().includes(q) ||
        ep.description.toLowerCase().includes(q) ||
        (ep.subtitle && ep.subtitle.toLowerCase().includes(q)) ||
        ep.moralLesson.toLowerCase().includes(q) ||
        ep.tags.some((t) => t.toLowerCase().includes(q)) ||
        ep.categoryLabel.toLowerCase().includes(q)
    );

    const characters = CHARACTERS_DATA.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.title.toLowerCase().includes(q) ||
        c.shortBio.toLowerCase().includes(q) ||
        c.personality.some((p) => p.toLowerCase().includes(q))
    );

    const seasons = BIBLE_SEASONS.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.subtitle.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q)
    );

    return { episodes, characters, seasons };
  }, [query]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 sm:pt-16 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Search Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.25 }}
          className="relative z-10 w-full max-w-2xl rounded-[32px] overflow-hidden bg-white border-4 border-amber-300 shadow-2xl shadow-slate-950/50 flex flex-col max-h-[85vh]"
        >
          {/* Search Header Bar */}
          <div className="p-4 sm:p-6 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 border-b border-orange-400">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-6 h-6 text-orange-400" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="O que você quer descobrir hoje? (ex: Davi, Milagres, Coragem...)"
                className="w-full pl-12 pr-12 py-3.5 rounded-2xl bg-white text-slate-900 placeholder:text-slate-400 text-sm sm:text-base font-bold focus:outline-none focus:ring-4 focus:ring-amber-300/60 shadow-inner"
              />
              {query ? (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-4 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={onClose}
                  className="absolute right-4 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Fast Suggestion Chips */}
            <div className="flex flex-wrap items-center gap-1.5 mt-3">
              <span className="text-[11px] font-black text-amber-100 uppercase tracking-wider">
                Sugestões:
              </span>
              {QUICK_TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="px-2.5 py-1 rounded-xl bg-white/20 hover:bg-white/35 text-white text-xs font-bold transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Results Container */}
          <div className="p-4 sm:p-6 space-y-6 overflow-y-auto flex-1 bg-slate-50/50">
            {!query.trim() ? (
              <div className="text-center py-10 space-y-3">
                <div className="w-16 h-16 mx-auto rounded-3xl bg-amber-100 text-amber-600 flex items-center justify-center shadow-inner">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-base font-black text-slate-800 font-brand">
                  Explore o Universo Toon Tales
                </h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Digite o nome de um personagem, milagre, história ou tema para encontrar aventuras bíblicas em áudio.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Character Results */}
                {searchResults.characters.length > 0 && (
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-black uppercase tracking-wider text-orange-600 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Personagens ({searchResults.characters.length})
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {searchResults.characters.map((c) => (
                        <div
                          key={c.id}
                          onClick={() => {
                            onSelectCharacter(c);
                            onClose();
                          }}
                          className="p-3 rounded-2xl bg-white border-2 border-orange-200 hover:border-orange-400 transition-all cursor-pointer flex items-center gap-3 shadow-sm"
                        >
                          <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-brand font-black text-base shrink-0">
                            {c.name.charAt(0)}
                          </div>
                          <div className="min-w-0">
                            <h5 className="font-black text-slate-900 text-sm font-brand line-clamp-1">
                              {c.name}
                            </h5>
                            <p className="text-[11px] text-orange-600 font-medium line-clamp-1">
                              {c.title}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Episodes Results */}
                {searchResults.episodes.length > 0 && (
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-black uppercase tracking-wider text-orange-600 flex items-center gap-1.5">
                      <Play className="w-3.5 h-3.5 fill-current" />
                      Histórias & Episódios ({searchResults.episodes.length})
                    </h4>
                    <div className="space-y-2">
                      {searchResults.episodes.map((ep) => (
                        <div
                          key={ep.id}
                          onClick={() => {
                            onSelectEpisode(ep);
                            onClose();
                          }}
                          className="p-3.5 rounded-2xl bg-white border-2 border-slate-200 hover:border-orange-400 transition-all cursor-pointer flex items-center justify-between gap-3 shadow-sm hover:shadow-md"
                        >
                          <div className="min-w-0 space-y-0.5">
                            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-orange-600">
                              <span>EP. {ep.episodeNumber}</span>
                              <span className="text-slate-400 font-bold">• {ep.categoryLabel}</span>
                            </div>
                            <h5 className="font-black text-slate-900 text-sm font-brand line-clamp-1">
                              {ep.title}
                            </h5>
                            <p className="text-xs text-slate-500 line-clamp-1">
                              {ep.subtitle || ep.description}
                            </p>
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectEpisode(ep);
                              onClose();
                            }}
                            className="w-9 h-9 rounded-xl bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center shrink-0 shadow-md transition-all active:scale-95"
                          >
                            <Play className="w-4 h-4 fill-current ml-0.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Seasons Results */}
                {searchResults.seasons.length > 0 && (
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-black uppercase tracking-wider text-orange-600 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      Temporadas ({searchResults.seasons.length})
                    </h4>
                    <div className="space-y-2">
                      {searchResults.seasons.map((s) => (
                        <div
                          key={s.id}
                          onClick={() => {
                            onSelectSeason(s);
                            onClose();
                          }}
                          className="p-3.5 rounded-2xl bg-white border-2 border-slate-200 hover:border-orange-400 transition-all cursor-pointer flex items-center justify-between gap-3 shadow-sm"
                        >
                          <div>
                            <span className="text-[10px] font-black uppercase tracking-wider text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">
                              Temporada {s.seasonNumber}
                            </span>
                            <h5 className="font-black text-slate-900 text-sm font-brand mt-1">
                              {s.title}
                            </h5>
                            <p className="text-xs text-slate-500 line-clamp-1">
                              {s.subtitle}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Empty Search Results State */}
                {searchResults.episodes.length === 0 &&
                  searchResults.characters.length === 0 &&
                  searchResults.seasons.length === 0 && (
                    <div className="text-center py-10 space-y-3">
                      <div className="w-14 h-14 mx-auto rounded-full bg-slate-100 text-slate-400 flex items-center justify-center">
                        <Search className="w-7 h-7" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-700 font-brand">
                        Nenhuma aventura encontrada para "{query}"
                      </h4>
                      <p className="text-xs text-slate-400 max-w-xs mx-auto">
                        Tente pesquisar por outros termos como "Davi", "Jesus", "Milagre" ou "Fé".
                      </p>
                    </div>
                  )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
