import React from 'react';
import { BIBLE_SEASONS } from '../data/catalog';
import { CHARACTERS_DATA } from '../data/charactersData';
import { ToonTalesArtwork } from './ToonTalesArtwork';
import { Sparkles, Play, ShieldCheck, Heart, BookOpen, Star, Trophy, Users, CheckCircle2, ChevronRight, Moon, Award } from 'lucide-react';
import { motion } from 'motion/react';

interface LandingPageViewProps {
  onStartAdventure: () => void;
  onExploreCatalog: () => void;
  onExploreCharacters: () => void;
}

export const LandingPageView: React.FC<LandingPageViewProps> = ({
  onStartAdventure,
  onExploreCatalog,
  onExploreCharacters,
}) => {
  return (
    <div className="space-y-16 select-none animate-fade-in text-slate-800">
      {/* Hero Showcase */}
      <div className="relative rounded-[36px] overflow-hidden bg-gradient-to-br from-slate-950 via-amber-950 to-slate-950 border-4 border-amber-400/60 p-8 sm:p-12 md:p-16 shadow-2xl text-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(245,158,11,0.2)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-black uppercase tracking-wider shadow-md font-brand">
              <Sparkles className="w-4 h-4" />
              Plataforma Digital Infantil Premium
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-brand tracking-tight leading-tight">
                TOON TALES <span className="text-amber-400">KIDS</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-300 font-brand">
                Histórias que ensinam, aventuras que transformam!
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
              Uma nova maneira de descobrir as grandes histórias da Bíblia através de áudio cinematográfico imersivo, personagens carismáticos em 3D, trilha orquestral e lições para toda a vida.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onStartAdventure}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 text-white font-black text-sm sm:text-base font-brand uppercase tracking-wider shadow-lg shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 ring-4 ring-white/30"
              >
                <Play className="w-5 h-5 fill-current ml-0.5" />
                <span>Começar Aventura</span>
              </button>

              <button
                onClick={onExploreCatalog}
                className="px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-md font-black text-xs sm:text-sm font-brand uppercase tracking-wider border-2 border-white/30 transition-all flex items-center gap-2 active:scale-95"
              >
                <BookOpen className="w-4 h-4 text-amber-300" />
                <span>Conhecer as Histórias</span>
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-xs font-bold text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Livre de Anúncios
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Seguro para Crianças
              </span>
            </div>
          </div>

          {/* Hero 3D Card Stack Preview */}
          <div className="relative flex items-center justify-center">
            <div className="w-64 sm:w-80 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-300/80 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <ToonTalesArtwork type="character" name="david" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-4 sm:left-4 bg-slate-900/90 backdrop-blur-xl border-2 border-amber-400/80 rounded-2xl p-4 shadow-xl flex items-center gap-3 text-white">
              <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-md">
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </div>
              <div>
                <span className="text-[10px] text-amber-300 font-bold uppercase">Tocando agora</span>
                <p className="font-brand font-black text-xs sm:text-sm">Davi e Golias</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border-2 border-orange-200 rounded-[28px] p-6 sm:p-8 shadow-sm space-y-3">
          <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
            <BookOpen className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-black text-slate-900 font-brand">
            A Bíblia em Áudio Cinematográfico
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Produzido com narradores expressivos, voz divina com reverberação majestosa, efeitos foley realistas e trilhas orquestrais.
          </p>
        </div>

        <div className="bg-white border-2 border-amber-200 rounded-[28px] p-6 sm:p-8 shadow-sm space-y-3">
          <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
            <Sparkles className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-black text-slate-900 font-brand">
            Universo 3D de Personagens
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Conheça Davi, Moisés, Jesus, Paulo, Noé, Rute, Ester e Daniel com biografias ricas, traços de caráter e histórias interligadas.
          </p>
        </div>

        <div className="bg-white border-2 border-emerald-200 rounded-[28px] p-6 sm:p-8 shadow-sm space-y-3">
          <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-black text-slate-900 font-brand">
            Feito para Crianças & Pais
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Painel dos pais com bloqueio por PIN, relatório de tempo de uso, princípios aprendidos e modo hora de dormir com timer.
          </p>
        </div>
      </div>

      {/* Seasons Preview Strip */}
      <div className="bg-white border-2 border-amber-200 rounded-[32px] p-8 sm:p-10 shadow-md space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-brand">
              5 Grandes Temporadas de Aventuras
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Do Gênesis ao Apocalipse, organizadas como as melhores séries de animação.
            </p>
          </div>
          <button
            onClick={onExploreCatalog}
            className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-black text-xs font-brand uppercase tracking-wider transition-colors flex items-center gap-1.5"
          >
            <span>Ver Catálogo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {BIBLE_SEASONS.map((season) => (
            <div
              key={season.id}
              onClick={onExploreCatalog}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-orange-400 hover:bg-orange-50/40 transition-all cursor-pointer space-y-2"
            >
              <span className="text-[10px] font-black uppercase tracking-wider text-orange-600">
                TEMPORADA {season.seasonNumber}
              </span>
              <h4 className="text-sm font-black text-slate-900 font-brand line-clamp-1">
                {season.title.replace(`TEMPORADA ${season.seasonNumber} — `, '')}
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                {season.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Banner */}
      <div className="rounded-[32px] bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 p-8 sm:p-12 text-center text-white space-y-4 shadow-xl border-4 border-amber-300">
        <h3 className="text-2xl sm:text-4xl font-black font-brand">
          Pronto para Começar a Aventura?
        </h3>
        <p className="text-xs sm:text-sm text-amber-100 max-w-md mx-auto leading-relaxed">
          Entre agora no universo Toon Tales Kids e descubra histórias incríveis que vão encantar as crianças e ensinar princípios eternos!
        </p>
        <div className="pt-2">
          <button
            onClick={onStartAdventure}
            className="px-8 py-4 rounded-2xl bg-white text-orange-600 hover:bg-amber-50 font-black text-sm sm:text-base font-brand uppercase tracking-wider shadow-lg shadow-black/20 hover:scale-105 active:scale-95 transition-all"
          >
            Entrar na Plataforma
          </button>
        </div>
      </div>
    </div>
  );
};
