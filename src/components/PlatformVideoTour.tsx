import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Sparkles,
  CheckCircle2,
  Trophy,
  Moon,
  ShieldCheck,
  Crown,
  ChevronRight,
  Star,
  Film,
  Layers,
  Users,
  Headphones,
  BookOpen,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PlatformVideoTourProps {
  onClose?: () => void;
  onCtaClick?: () => void;
}

interface TourScene {
  id: number;
  durationSec: number;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tagline: string;
  icon: React.ReactNode;
  sceneFeatures: string[];
}

export const PlatformVideoTour: React.FC<PlatformVideoTourProps> = ({ onClose, onCtaClick }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const totalDuration = 30; // 30 seconds

  const scenes: TourScene[] = [
    {
      id: 1,
      durationSec: 6,
      badge: '01 • STREAMING EM ÁUDIO 3D',
      badgeColor: 'from-amber-500 to-orange-500',
      title: 'Player Cinematográfico Imersivo',
      subtitle: 'Trilhas orquestrais, efeitos especiais e a voz majestosa de Deus',
      description: 'Cada história é narrada como um filme de cinema da Disney/Pixar, prendendo a atenção das crianças com lições de fé e coragem.',
      image: '/characters/david.jpg',
      tagline: 'Superprodução Davi e Golias • 1 Samuel 17',
      icon: <Headphones className="w-5 h-5 text-amber-300" />,
      sceneFeatures: ['Vozes de Cinema PT-BR', 'Efeitos Sonoros Imersivos', 'Lições Bíblicas Ilustradas'],
    },
    {
      id: 2,
      durationSec: 6,
      badge: '02 • CATÁLOGO COMPLETO',
      badgeColor: 'from-sky-500 to-blue-600',
      title: '4 Temporadas Prontas (34 Episódios)',
      subtitle: 'Da Criação do Mundo até a Missão de Paulo em Roma',
      description: 'Uma biblioteca rica e estruturada para toda a infância: Gênesis, Heróis da Fé, Toda a Vida de Jesus e a Igreja Primitiva.',
      image: '/characters/jesus.jpg',
      tagline: '34 Aventuras Bíblicas Liberadas no Acesso',
      icon: <Layers className="w-5 h-5 text-sky-300" />,
      sceneFeatures: ['T1: Gênesis (5 eps)', 'T2: Aventuras da Fé (5 eps)', 'T3: Jesus (9 eps)', 'T4: Apóstolos (10 eps)'],
    },
    {
      id: 3,
      durationSec: 6,
      badge: '03 • PERSONAGENS 3D VIVOS',
      badgeColor: 'from-emerald-500 to-teal-600',
      title: 'Galeria 3D dos Heróis Bíblicos',
      subtitle: 'Davi, Jesus, Moisés, Noé, Paulo e muito mais',
      description: 'Cards colecionáveis em arte 3D com versículos bíblicos de cada personagem para inspirar seus filhos no dia a dia.',
      image: '/characters/moses.jpg',
      tagline: 'Moisés e a Abertura do Mar Vermelho',
      icon: <Users className="w-5 h-5 text-emerald-300" />,
      sceneFeatures: ['Modelagem 3D Estilizada', 'Versículos para Memorizar', 'Biografias Acessíveis'],
    },
    {
      id: 4,
      durationSec: 6,
      badge: '04 • GAMIFICAÇÃO EDUCATIVA',
      badgeColor: 'from-purple-500 to-indigo-600',
      title: 'Quizzes & Coroas de Conquista',
      subtitle: 'Aprender a Palavra de Deus se divertindo',
      description: 'Após cada história, as crianças respondem perguntas interativas e ganham coroas, medalhas e pontos de recompensa.',
      image: '/characters/noah.jpg',
      tagline: 'A Arca de Noé • Quiz Bíblico Nível 1',
      icon: <Trophy className="w-5 h-5 text-yellow-300" />,
      sceneFeatures: ['Perguntas Interativas', 'Sistema de Coroas e Conquistas', 'Feedback Imediato dos Pais'],
    },
    {
      id: 5,
      durationSec: 6,
      badge: '05 • ROTINA DE PAZ & SONO',
      badgeColor: 'from-indigo-600 to-slate-900',
      title: 'Modo Hora de Dormir & PIN dos Pais',
      subtitle: 'Desligamento automático e ambiente 100% blindado',
      description: 'Trilhas orquestrais suaves que acalmam as crianças antes de dormir. Controle total dos pais sem nenhum anúncio ou distração.',
      image: '/characters/paul.jpg',
      tagline: 'Ambiente Seguro • Zero Anúncios • Timer Noturno',
      icon: <Moon className="w-5 h-5 text-indigo-300" />,
      sceneFeatures: ['Timer de Sono (15, 30, 45 min)', 'Painel Parental com Senha', '100% Protegido sem Links Externos'],
    },
  ];

  // Timer loop
  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalDuration) {
            return 0; // Loop or stay at end
          }
          return prev + 0.1;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, totalDuration]);

  // Determine current scene based on time
  const getCurrentSceneIndex = () => {
    if (currentTime < 6) return 0;
    if (currentTime < 12) return 1;
    if (currentTime < 18) return 2;
    if (currentTime < 24) return 3;
    return 4;
  };

  const sceneIndex = getCurrentSceneIndex();
  const currentScene = scenes[sceneIndex];
  const progressPercent = Math.min(100, (currentTime / totalDuration) * 100);

  const formatTime = (timeInSec: number) => {
    const sec = Math.floor(timeInSec);
    return `00:${sec < 10 ? '0' : ''}${sec}`;
  };

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 border-2 border-slate-700 shadow-2xl flex flex-col justify-between select-none">
      {/* Background Cinematic Image with smooth fade animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScene.id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
        >
          <img
            src={currentScene.image}
            alt={currentScene.title}
            className="w-full h-full object-cover object-center opacity-45 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
        </motion.div>
      </AnimatePresence>

      {/* Top Overlay Bar */}
      <div className="relative z-10 p-4 sm:p-6 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${currentScene.badgeColor} text-white font-black text-[11px] font-brand tracking-wider shadow-md flex items-center gap-1.5`}>
            {currentScene.icon}
            <span>{currentScene.badge}</span>
          </span>
          <span className="hidden sm:inline-flex px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-amber-300 border border-amber-400/30 text-[10px] font-bold">
            {currentScene.tagline}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-emerald-400 text-xs font-mono font-bold border border-emerald-500/30 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {formatTime(currentTime)} / 00:30
          </span>
        </div>
      </div>

      {/* Center Dynamic Content */}
      <div className="relative z-10 px-6 sm:px-10 max-w-2xl space-y-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScene.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="space-y-2"
          >
            <div className="space-y-1">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-brand text-white tracking-tight drop-shadow-md">
                {currentScene.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base font-bold text-amber-300 font-brand">
                {currentScene.subtitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 leading-relaxed">
              {currentScene.description}
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {currentScene.sceneFeatures.map((feat, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-bold flex items-center gap-1"
                >
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  {feat}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Controls & Video Timeline Scrubber */}
      <div className="relative z-10 p-4 sm:p-6 space-y-3 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent">
        {/* Progress Bar (Timeline with 5 Scene Markers) */}
        <div className="space-y-1.5">
          <div className="relative w-full h-2 rounded-full bg-white/20 overflow-hidden cursor-pointer">
            <div
              className="h-full bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 transition-all duration-100 ease-linear rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* 5 Scene Step Indicators */}
          <div className="grid grid-cols-5 gap-1 text-[9px] sm:text-[10px] text-slate-400 font-brand font-bold text-center">
            {scenes.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentTime(idx * 6)}
                className={`py-0.5 rounded transition-all truncate ${
                  sceneIndex === idx
                    ? 'text-amber-300 font-black scale-105'
                    : 'hover:text-slate-200 opacity-60'
                }`}
              >
                {idx + 1}. {s.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Video Player Buttons */}
        <div className="flex items-center justify-between gap-4 pt-1">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 flex items-center justify-center font-bold shadow-lg shadow-orange-500/30 hover:scale-105 active:scale-95 transition-all"
            >
              {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
            </button>

            <button
              onClick={() => setCurrentTime(0)}
              title="Reiniciar Tour"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <span className="text-xs text-slate-400 font-medium hidden sm:inline-block">
              {isPlaying ? '▶ Reproduzindo tour de 30s' : '⏸ Pausado'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#planos"
              onClick={() => {
                if (onClose) onClose();
                if (onCtaClick) onCtaClick();
              }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black font-brand uppercase text-xs tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 ring-2 ring-amber-300"
            >
              <Crown className="w-3.5 h-3.5 fill-current" />
              <span>Quero o Plano Vitalício (50% OFF)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
