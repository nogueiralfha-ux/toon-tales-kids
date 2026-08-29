import React, { useState } from 'react';
import { BIBLE_SEASONS, ALL_EPISODES, Season, Episode } from '../data/catalog';
import { CHARACTERS_DATA, BiblicalCharacter } from '../data/charactersData';
import { CATEGORIES_DATA } from '../data/categoriesData';
import { HeroBanner } from './HeroBanner';
import { ContinueListening, ListeningProgressItem } from './ContinueListening';
import { EpisodeCard } from './EpisodeCard';
import { SeasonCard } from './SeasonCard';
import { HeroesOfFaithSection } from './HeroesOfFaithSection';
import { CharacterCard } from './CharacterCard';
import { Sparkles, BookOpen, Users, Compass, Star, ChevronRight, Flame, Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface DashboardViewProps {
  onPlayEpisode: (episode: Episode) => void;
  onOpenEpisodeDetails: (episode: Episode) => void;
  onOpenScript: (episode: Episode) => void;
  onOpenQuiz: (episode: Episode) => void;
  onOpenSeason: (season: Season) => void;
  onOpenCharacter: (character: BiblicalCharacter) => void;
  favorites: string[];
  onToggleFavorite: (episodeId: string) => void;
  listeningProgress: ListeningProgressItem[];
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  onPlayEpisode,
  onOpenEpisodeDetails,
  onOpenScript,
  onOpenQuiz,
  onOpenSeason,
  onOpenCharacter,
  favorites,
  onToggleFavorite,
  listeningProgress,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const season5 = BIBLE_SEASONS.find((s) => s.id === 's5') || BIBLE_SEASONS[4];

  // Filter episodes for "A Bíblia em Áudio" section
  const filteredEpisodes = selectedCategory === 'all'
    ? ALL_EPISODES
    : ALL_EPISODES.filter((ep) => ep.category === selectedCategory);

  // Recommendations: e.g. "Porque você gostou de Davi e Golias"
  const recommendedStories = ALL_EPISODES.filter((ep) =>
    ['t2e4', 't5e3', 't5e5', 't3e7', 't4e5'].includes(ep.id)
  );

  return (
    <div className="space-y-12 select-none">
      {/* Nível 1: Hero Principal Widescreen */}
      <HeroBanner
        onPlayEpisode={onPlayEpisode}
        onOpenDetails={onOpenEpisodeDetails}
        onOpenScript={onOpenScript}
        onOpenQuiz={onOpenQuiz}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      />

      {/* Nível 2: Carrossel "Continue Ouvindo" */}
      {listeningProgress.length > 0 && (
        <ContinueListening
          items={listeningProgress}
          onPlayEpisode={onPlayEpisode}
        />
      )}

      {/* Nível 3: Explore as Temporadas (1 a 5) */}
      <section className="space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-brand flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-md shadow-orange-200">
                <BookOpen className="w-4 h-4" />
              </span>
              Explore as Temporadas
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Grandes sagas bíblicas organizadas do Gênesis aos Apóstolos e Heróis da Fé.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {BIBLE_SEASONS.map((season) => (
            <SeasonCard
              key={season.id}
              season={season}
              onSelectSeason={onOpenSeason}
            />
          ))}
        </div>
      </section>

      {/* Nível 4: Destaque Especial — Temporada 5: Heróis da Fé */}
      <HeroesOfFaithSection
        season5={season5}
        onPlayEpisode={onPlayEpisode}
        onOpenDetails={onOpenEpisodeDetails}
        onOpenSeason={onOpenSeason}
      />

      {/* Nível 5: Seção Principal — A Bíblia em Áudio (Cards 3:4 com Filtros) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-brand flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-md shadow-amber-200">
                <Sparkles className="w-4 h-4" />
              </span>
              A Bíblia em Áudio
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Todas as aventuras narradas em formato cinematográfico com cards ilustrados.
            </p>
          </div>

          <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
            Mostrando {filteredEpisodes.length} Histórias
          </span>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {CATEGORIES_DATA.map((cat) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-black font-brand whitespace-nowrap transition-all flex items-center gap-1.5 active:scale-95 ${
                  isSelected
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-300 ring-2 ring-orange-200 scale-105'
                    : 'bg-white text-slate-700 hover:bg-orange-50 hover:text-orange-600 border border-slate-200'
                }`}
              >
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Cards 3:4 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredEpisodes.map((episode) => (
            <EpisodeCard
              key={episode.id}
              episode={episode}
              isFavorite={favorites.includes(episode.id)}
              onPlay={onPlayEpisode}
              onOpenDetails={onOpenEpisodeDetails}
              onToggleFavorite={onToggleFavorite}
              aspect="3:4"
            />
          ))}
        </div>
      </section>

      {/* Nível 6: Conheça os Personagens (Universo 3D) */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-brand flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-sky-500 text-white flex items-center justify-center shadow-md shadow-sky-200">
                <Users className="w-4 h-4" />
              </span>
              Conheça os Personagens
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Descubra a história, personalidade e versículos dos grandes nomes da Bíblia.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {CHARACTERS_DATA.slice(0, 6).map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onOpenCharacter={onOpenCharacter}
            />
          ))}
        </div>
      </section>

      {/* Nível 7: Recomendações Inteligentes ("Porque você gostou de Davi e Golias...") */}
      <section className="space-y-6 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200/80 rounded-[32px] p-6 sm:p-8 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-3 py-0.5 rounded-full bg-amber-200 text-amber-900 text-[10px] font-black uppercase font-brand">
                Recomendação Especial
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-brand flex items-center gap-2">
              <Star className="w-6 h-6 text-amber-500 fill-current" />
              Talvez Você Goste: Histórias de Coragem & Fé
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Histórias inspiradoras selecionadas com base nos temas de coragem e vitória sobre gigantes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {recommendedStories.slice(0, 4).map((episode) => (
            <EpisodeCard
              key={`rec-${episode.id}`}
              episode={episode}
              isFavorite={favorites.includes(episode.id)}
              onPlay={onPlayEpisode}
              onOpenDetails={onOpenEpisodeDetails}
              onToggleFavorite={onToggleFavorite}
              aspect="3:4"
            />
          ))}
        </div>
      </section>
    </div>
  );
};
