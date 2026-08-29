import React, { useState, useEffect } from 'react';
import { CREATION_SCENES, EPISODE_META, CREATION_QUIZ } from './data/creationScript';
import { ADAO_EVA_SCENES, EPISODE_META_2, ADAO_EVA_QUIZ } from './data/adaoEvaScript';
import { NOE_SCENES, EPISODE_META_3, NOE_QUIZ } from './data/noeScript';
import { BABEL_SCENES, EPISODE_META_4, BABEL_QUIZ } from './data/babelScript';
import { ABRAAO_SCENES, EPISODE_META_5, ABRAAO_QUIZ } from './data/abraaoScript';
import { JOSE_SCENES, EPISODE_META_T2E1, JOSE_QUIZ } from './data/joseScript';
import { MOISES_SCENES, EPISODE_META_T2E2, MOISES_QUIZ } from './data/moisesScript';
import { MAR_VERMELHO_SCENES, EPISODE_META_T2E3, MAR_VERMELHO_QUIZ } from './data/marVermelhoScript';
import { JOSUE_SCENES, EPISODE_META_T2E4, JOSUE_QUIZ } from './data/josueScript';
import { DAVI_GOLIAS_SCENES, EPISODE_META_T2E5, DAVI_GOLIAS_QUIZ } from './data/daviGoliasScript';
import { JESUS_NASCIMENTO_SCENES, EPISODE_META_T3E1, JESUS_NASCIMENTO_QUIZ } from './data/jesusNascimentoScript';
import { JESUS_TEMPLO_SCENES, EPISODE_META_T3E2, JESUS_TEMPLO_QUIZ } from './data/jesusTemploScript';
import { JESUS_BATISMO_SCENES, EPISODE_META_T3E3, JESUS_BATISMO_QUIZ } from './data/jesusBatismoScript';
import { OS_DISCIPULOS_SCENES, EPISODE_META_T3E4, OS_DISCIPULOS_QUIZ } from './data/osDiscipulosScript';
import { OS_MILAGRES_SCENES, EPISODE_META_T3E5, OS_MILAGRES_QUIZ } from './data/osMilagresScript';
import { AS_PARABOLAS_SCENES, EPISODE_META_T3E6, AS_PARABOLAS_QUIZ } from './data/asParabolasScript';
import { A_TEMPESTADE_NO_MAR_SCENES, EPISODE_META_T3E7, A_TEMPESTADE_NO_MAR_QUIZ } from './data/aTempestadeNoMarScript';
import { A_MULTIPLICACAO_SCENES, EPISODE_META_T3E8, A_MULTIPLICACAO_QUIZ } from './data/aMultiplicacaoScript';
import { A_RESSURREICAO_SCENES, EPISODE_META_T3E9, A_RESSURREICAO_QUIZ } from './data/aRessurreicaoScript';
import { PENTECOSTES_SCENES, EPISODE_META_T4E1, PENTECOSTES_QUIZ } from './data/pentecostesScript';
import { PEDRO_SCENES, EPISODE_META_T4E2, PEDRO_QUIZ } from './data/pedroScript';
import { ESTEVAO_SCENES, EPISODE_META_T4E3, ESTEVAO_QUIZ } from './data/estevaoScript';
import { PAULO_SCENES, EPISODE_META_T4E4, PAULO_QUIZ } from './data/pauloScript';
import { PAULO_SILAS_SCENES, EPISODE_META_T4E5, PAULO_SILAS_QUIZ } from './data/pauloSilasScript';
import { PAULO_ROMA_SCENES, EPISODE_META_T4E6, PAULO_ROMA_QUIZ } from './data/pauloRomaScript';
import { TEMPESTADE_SCENES, EPISODE_META_T4E7, TEMPESTADE_QUIZ } from './data/tempestadeScript';
import { ROMA_SCENES, EPISODE_META_T4E10, ROMA_QUIZ } from './data/romaScript';
import { MALTA_SCENES, EPISODE_META_T4E9, MALTA_QUIZ } from './data/maltaScript';
import { NAUFRAGIO_SCENES, EPISODE_META_T4E8, NAUFRAGIO_QUIZ } from './data/naufragioScript';
import { SEASON5_OPENING_SCENES, EPISODE_META_T5E0, SEASON5_INTRO_QUIZ } from './data/season5Opening';
import { ENOCH_SCENES, EPISODE_META_T5E1, ENOCH_QUIZ } from './data/enochScript';
import { audioEngine } from './services/audioEngine';
import { AudioMixSettings, ScriptLine, Scene, QuizQuestion } from './types';
import { Navbar, NavTab } from './components/Navbar';
import { DashboardView } from './components/DashboardView';
import { EpisodeCard } from './components/EpisodeCard';
import { SeasonCard } from './components/SeasonCard';
import { CharacterCard } from './components/CharacterCard';
import { HeroesOfFaithSection } from './components/HeroesOfFaithSection';
import { FavoritesView } from './components/FavoritesView';
import { ProfileView } from './components/ProfileView';
import { ParentsPortal } from './components/ParentsPortal';
import { SalesLandingPage } from './components/SalesLandingPage';
import { ThankYouPageView } from './components/ThankYouPageView';
import { ColoringStudioModal } from './components/ColoringStudioModal';
import { AuthModal } from './components/AuthModal';
import { AdminDashboardModal } from './components/AdminDashboardModal';
import { authService, UserAccount } from './services/authService';
import { EpisodeModal } from './components/EpisodeModal';
import { CharacterModal } from './components/CharacterModal';
import { SeasonModal } from './components/SeasonModal';
import { SmartSearchModal } from './components/SmartSearchModal';
import { FloatingMiniPlayer } from './components/FloatingMiniPlayer';
import { LoadingScreen } from './components/LoadingScreen';
import { CinematicSceneView } from './components/CinematicSceneView';
import { AudioPlayerControls } from './components/AudioPlayerControls';
import { ScriptTeleprompter } from './components/ScriptTeleprompter';
import { SoundBoardConsole } from './components/SoundBoardConsole';
import { CreationQuiz } from './components/CreationQuiz';
import { AudioMixerModal } from './components/AudioMixerModal';
import { BedtimeModeModal } from './components/BedtimeModeModal';
import { BIBLE_SEASONS, ALL_EPISODES, Episode, Season, getEpisodeById } from './data/catalog';
import { CHARACTERS_DATA, BiblicalCharacter } from './data/charactersData';
import { CATEGORIES_DATA } from './data/categoriesData';
import { ListeningProgressItem } from './components/ContinueListening';
import { Sparkles, Heart, BookOpen, Volume2, ShieldCheck, Sun, Star, ArrowLeft, Layers, Users, Shield, Headphones } from 'lucide-react';
import { AnimatePresence } from 'motion/react';

interface EpisodeData {
  scenes: Scene[];
  meta: any;
  quiz: QuizQuestion[];
}

const EPISODE_REGISTRY: Record<string, EpisodeData> = {
  t1e1: { scenes: CREATION_SCENES, meta: EPISODE_META, quiz: CREATION_QUIZ },
  t1e2: { scenes: ADAO_EVA_SCENES, meta: EPISODE_META_2, quiz: ADAO_EVA_QUIZ },
  t1e3: { scenes: NOE_SCENES, meta: EPISODE_META_3, quiz: NOE_QUIZ },
  t1e4: { scenes: BABEL_SCENES, meta: EPISODE_META_4, quiz: BABEL_QUIZ },
  t1e5: { scenes: ABRAAO_SCENES, meta: EPISODE_META_5, quiz: ABRAAO_QUIZ },
  t2e1: { scenes: JOSE_SCENES, meta: EPISODE_META_T2E1, quiz: JOSE_QUIZ },
  t2e2: { scenes: MOISES_SCENES, meta: EPISODE_META_T2E2, quiz: MOISES_QUIZ },
  t2e3: { scenes: MAR_VERMELHO_SCENES, meta: EPISODE_META_T2E3, quiz: MAR_VERMELHO_QUIZ },
  t2e4: { scenes: JOSUE_SCENES, meta: EPISODE_META_T2E4, quiz: JOSUE_QUIZ },
  t2e5: { scenes: DAVI_GOLIAS_SCENES, meta: EPISODE_META_T2E5, quiz: DAVI_GOLIAS_QUIZ },
  t3e1: { scenes: JESUS_NASCIMENTO_SCENES, meta: EPISODE_META_T3E1, quiz: JESUS_NASCIMENTO_QUIZ },
  t3e2: { scenes: JESUS_TEMPLO_SCENES, meta: EPISODE_META_T3E2, quiz: JESUS_TEMPLO_QUIZ },
  t3e3: { scenes: JESUS_BATISMO_SCENES, meta: EPISODE_META_T3E3, quiz: JESUS_BATISMO_QUIZ },
  t3e4: { scenes: OS_DISCIPULOS_SCENES, meta: EPISODE_META_T3E4, quiz: OS_DISCIPULOS_QUIZ },
  t3e5: { scenes: OS_MILAGRES_SCENES, meta: EPISODE_META_T3E5, quiz: OS_MILAGRES_QUIZ },
  t3e6: { scenes: AS_PARABOLAS_SCENES, meta: EPISODE_META_T3E6, quiz: AS_PARABOLAS_QUIZ },
  t3e7: { scenes: A_TEMPESTADE_NO_MAR_SCENES, meta: EPISODE_META_T3E7, quiz: A_TEMPESTADE_NO_MAR_QUIZ },
  t3e8: { scenes: A_MULTIPLICACAO_SCENES, meta: EPISODE_META_T3E8, quiz: A_MULTIPLICACAO_QUIZ },
  t3e9: { scenes: A_RESSURREICAO_SCENES, meta: EPISODE_META_T3E9, quiz: A_RESSURREICAO_QUIZ },
  t4e1: { scenes: PENTECOSTES_SCENES, meta: EPISODE_META_T4E1, quiz: PENTECOSTES_QUIZ },
  t4e2: { scenes: PEDRO_SCENES, meta: EPISODE_META_T4E2, quiz: PEDRO_QUIZ },
  t4e3: { scenes: ESTEVAO_SCENES, meta: EPISODE_META_T4E3, quiz: ESTEVAO_QUIZ },
  t4e4: { scenes: PAULO_SCENES, meta: EPISODE_META_T4E4, quiz: PAULO_QUIZ },
  t4e5: { scenes: PAULO_SILAS_SCENES, meta: EPISODE_META_T4E5, quiz: PAULO_SILAS_QUIZ },
  t4e6: { scenes: PAULO_ROMA_SCENES, meta: EPISODE_META_T4E6, quiz: PAULO_ROMA_QUIZ },
  t4e7: { scenes: TEMPESTADE_SCENES, meta: EPISODE_META_T4E7, quiz: TEMPESTADE_QUIZ },
  t4e8: { scenes: NAUFRAGIO_SCENES, meta: EPISODE_META_T4E8, quiz: NAUFRAGIO_QUIZ },
  t4e9: { scenes: MALTA_SCENES, meta: EPISODE_META_T4E9, quiz: MALTA_QUIZ },
  t4e10: { scenes: ROMA_SCENES, meta: EPISODE_META_T4E10, quiz: ROMA_QUIZ },
  t5e0: { scenes: SEASON5_OPENING_SCENES, meta: EPISODE_META_T5E0, quiz: SEASON5_INTRO_QUIZ },
  t5e1: { scenes: ENOCH_SCENES, meta: EPISODE_META_T5E1, quiz: ENOCH_QUIZ },
};

export default function App() {
  // Navigation: Default to Sales Landing Page on initial arrival
  const [activeTab, setActiveTab] = useState<NavTab>('landing');

  // URL route detection for /obrigado or Hotmart redirect
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const search = window.location.search.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (
        path.includes('obrigado') ||
        path.includes('thank-you') ||
        search.includes('status=approved') ||
        search.includes('obrigado') ||
        search.includes('sucesso') ||
        hash.includes('obrigado')
      ) {
        setActiveTab('thankyou');
      }
    }
  }, []);

  // Currently loaded audio episode
  const [currentEpisodeId, setCurrentEpisodeId] = useState<string>('t2e5');
  const selectedEpisodeData = EPISODE_REGISTRY[currentEpisodeId] || EPISODE_REGISTRY['t2e5'];
  const currentScenes = selectedEpisodeData.scenes;
  const currentMeta = selectedEpisodeData.meta;
  const currentQuiz = selectedEpisodeData.quiz;
  const currentEpisode = getEpisodeById(currentEpisodeId) || ALL_EPISODES[9];

  // Playback state
  const [currentSceneIndex, setCurrentSceneIndex] = useState<number>(0);
  const [activeLineId, setActiveLineId] = useState<string | null>(null);
  const [currentLine, setCurrentLine] = useState<ScriptLine | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isPauseActive, setIsPauseActive] = useState<boolean>(false);

  // Modals & Popups
  const [isMixerOpen, setIsMixerOpen] = useState<boolean>(false);
  const [isBedtimeOpen, setIsBedtimeOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isColoringModalOpen, setIsColoringModalOpen] = useState<boolean>(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'register'>('login');
  const [isAdminModalOpen, setIsAdminModalOpen] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<UserAccount | null>(() => authService.getCurrentUser());
  const [selectedEpisodeModal, setSelectedEpisodeModal] = useState<Episode | null>(null);
  const [selectedCharacterModal, setSelectedCharacterModal] = useState<BiblicalCharacter | null>(null);
  const [selectedSeasonModal, setSelectedSeasonModal] = useState<Season | null>(null);
  const [isLoadingTransition, setIsLoadingTransition] = useState<boolean>(false);

  // Bedtime
  const [bedtimeMinutesLeft, setBedtimeMinutesLeft] = useState<number | null>(null);
  const [mixSettings, setMixSettings] = useState<AudioMixSettings>(audioEngine.getSettings());

  // User Local Storage Persistence (Favorites & Progress)
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('toontales_favorites');
      return saved ? JSON.parse(saved) : ['t2e5', 't1e1', 't3e1'];
    } catch {
      return ['t2e5', 't1e1', 't3e1'];
    }
  });

  const [listeningProgress, setListeningProgress] = useState<ListeningProgressItem[]>(() => {
    try {
      const saved = localStorage.getItem('toontales_progress');
      return saved
        ? JSON.parse(saved)
        : [
            { episodeId: 't4e6', progressPercent: 68, timeRemainingLabel: '5 min', lastPlayedAt: 'Hoje' },
            { episodeId: 't2e5', progressPercent: 42, timeRemainingLabel: '8 min', lastPlayedAt: 'Hoje' },
            { episodeId: 't1e1', progressPercent: 90, timeRemainingLabel: '1 min', lastPlayedAt: 'Ontem' },
          ];
    } catch {
      return [
        { episodeId: 't4e6', progressPercent: 68, timeRemainingLabel: '5 min', lastPlayedAt: 'Hoje' },
        { episodeId: 't2e5', progressPercent: 42, timeRemainingLabel: '8 min', lastPlayedAt: 'Hoje' },
        { episodeId: 't1e1', progressPercent: 90, timeRemainingLabel: '1 min', lastPlayedAt: 'Ontem' },
      ];
    }
  });

  const currentScene = currentScenes[currentSceneIndex] || currentScenes[0];

  // Save favorites to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('toontales_favorites', JSON.stringify(favorites));
    } catch {}
  }, [favorites]);

  // Save progress to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('toontales_progress', JSON.stringify(listeningProgress));
    } catch {}
  }, [listeningProgress]);

  const handleToggleFavorite = (episodeId: string) => {
    setFavorites((prev) => {
      const exists = prev.includes(episodeId);
      if (exists) {
        return prev.filter((id) => id !== episodeId);
      } else {
        audioEngine.triggerSoundEffect('star_chimes');
        return [...prev, episodeId];
      }
    });
  };

  // Playback start
  const startPlayback = (sceneIdx = currentSceneIndex, lineIdx = 0) => {
    audioEngine.startEpisode(currentScenes, sceneIdx, lineIdx, {
      onLineStart: (lineId, sceneId) => {
        setIsPauseActive(false);
        setActiveLineId(lineId);
        const scene = currentScenes.find((s) => s.id === sceneId);
        if (scene) {
          const line = scene.lines.find((l) => l.id === lineId);
          if (line) setCurrentLine(line);
        }
      },
      onLineEnd: () => {
        setIsPauseActive(false);
      },
      onPauseStart: () => {
        setIsPauseActive(true);
      },
      onPauseEnd: () => {
        setIsPauseActive(false);
      },
      onSceneChange: (sceneId) => {
        const idx = currentScenes.findIndex((s) => s.id === sceneId);
        if (idx !== -1) {
          setCurrentSceneIndex(idx);
          // Update progress
          const pct = Math.min(100, Math.round(((idx + 1) / currentScenes.length) * 100));
          setListeningProgress((prev) => {
            const filtered = prev.filter((p) => p.episodeId !== currentEpisodeId);
            return [
              {
                episodeId: currentEpisodeId,
                progressPercent: pct,
                timeRemainingLabel: `${Math.max(1, Math.round((currentScenes.length - idx) * 1.5))} min`,
                lastPlayedAt: 'Agora',
              },
              ...filtered,
            ];
          });
        }
      },
      onPlaybackStateChange: (playing) => {
        setIsPlaying(playing);
        if (!playing) setIsPauseActive(false);
      },
      onEpisodeComplete: () => {
        setIsPlaying(false);
        setIsPauseActive(false);
        setActiveLineId(null);
        setCurrentLine(null);
      },
    });
  };

  const handlePlay = () => {
    audioEngine.initContext();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.resume();
    }

    if (audioEngine.getPlaybackStatus().isPaused) {
      audioEngine.resumeEpisode();
      setIsPlaying(true);
    } else {
      startPlayback(currentSceneIndex, 0);
    }
  };

  const handlePause = () => {
    audioEngine.pauseEpisode();
    setIsPlaying(false);
  };

  const handleRestart = () => {
    audioEngine.initContext();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.resume();
    }
    setCurrentSceneIndex(0);
    startPlayback(0, 0);
  };

  const handleNextScene = () => {
    audioEngine.initContext();
    if (currentSceneIndex < currentScenes.length - 1) {
      const nextIdx = currentSceneIndex + 1;
      setCurrentSceneIndex(nextIdx);
      audioEngine.jumpToScene(nextIdx);
    }
  };

  const handlePrevScene = () => {
    audioEngine.initContext();
    if (currentSceneIndex > 0) {
      const prevIdx = currentSceneIndex - 1;
      setCurrentSceneIndex(prevIdx);
      audioEngine.jumpToScene(prevIdx);
    }
  };

  const handleSelectScene = (index: number) => {
    audioEngine.initContext();
    setCurrentSceneIndex(index);
    audioEngine.jumpToScene(index);
  };

  const handleChangeSpeed = (rate: number) => {
    const updated = { ...mixSettings, speechRate: rate };
    setMixSettings(updated);
    audioEngine.updateSettings(updated);
  };

  const handleUpdateMixSettings = (newSettings: Partial<AudioMixSettings>) => {
    const updated = { ...mixSettings, ...newSettings };
    setMixSettings(updated);
    audioEngine.updateSettings(updated);
  };

  const handlePlayEpisodeDirectly = (ep: Episode) => {
    if (EPISODE_REGISTRY[ep.id]) {
      setIsLoadingTransition(true);
      setCurrentEpisodeId(ep.id);
      setCurrentSceneIndex(0);
      audioEngine.initContext();
      audioEngine.stopEpisode();
      setIsPlaying(false);

      setTimeout(() => {
        setIsLoadingTransition(false);
        setActiveTab('player');
        // Start playback with slight delay for audio context
        setTimeout(() => {
          startPlayback(0, 0);
        }, 400);
      }, 700);
    }
  };

  const handleOpenScript = (ep: Episode) => {
    if (EPISODE_REGISTRY[ep.id]) {
      setCurrentEpisodeId(ep.id);
      setActiveTab('script');
    }
  };

  const handleOpenQuiz = (ep: Episode) => {
    if (EPISODE_REGISTRY[ep.id]) {
      setCurrentEpisodeId(ep.id);
      setActiveTab('quiz');
    }
  };

  // Bedtime countdown
  useEffect(() => {
    if (bedtimeMinutesLeft === null) return;
    if (bedtimeMinutesLeft <= 0) {
      audioEngine.stopEpisode();
      setIsPlaying(false);
      setBedtimeMinutesLeft(null);
      return;
    }

    const interval = setInterval(() => {
      setBedtimeMinutesLeft((prev) => (prev !== null && prev > 0 ? prev - 1 : null));
    }, 60000);

    return () => clearInterval(interval);
  }, [bedtimeMinutesLeft]);

  const showFloatingPlayer = isPlaying && !['player', 'script', 'quiz', 'soundboard'].includes(activeTab);

  return (
    <div className="min-h-screen bg-[#FFFBEB] text-slate-800 flex flex-col selection:bg-orange-500 selection:text-white font-sans antialiased pb-20 lg:pb-0">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenMixer={() => setIsMixerOpen(true)}
        onOpenBedtime={() => setIsBedtimeOpen(true)}
        onOpenAuth={(mode = 'login') => {
          setAuthModalMode(mode);
          setIsAuthModalOpen(true);
        }}
        onOpenAdmin={() => setIsAdminModalOpen(true)}
        onOpenColoring={() => setIsColoringModalOpen(true)}
        onLogout={() => {
          authService.logout();
          setCurrentUser(null);
        }}
        currentUser={currentUser}
        bedtimeActive={bedtimeMinutesLeft !== null}
        favoritesCount={favorites.length}
        userXp={850 + favorites.length * 40}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        
        {/* 1. DASHBOARD PRINCIPAL */}
        {activeTab === 'dashboard' && (
          <DashboardView
            onPlayEpisode={handlePlayEpisodeDirectly}
            onOpenEpisodeDetails={(ep) => setSelectedEpisodeModal(ep)}
            onOpenScript={handleOpenScript}
            onOpenQuiz={handleOpenQuiz}
            onOpenSeason={(s) => setSelectedSeasonModal(s)}
            onOpenCharacter={(c) => setSelectedCharacterModal(c)}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            listeningProgress={listeningProgress}
          />
        )}

        {/* 2. CATÁLOGO COMPLETO DE HISTÓRIAS */}
        {activeTab === 'catalog' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-[28px] p-6 sm:p-8 text-white shadow-md border-4 border-amber-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="px-3 py-0.5 rounded-full bg-white/20 text-white text-xs font-black uppercase font-brand">
                  Catálogo Oficial
                </span>
                <h2 className="text-2xl sm:text-3xl font-black font-brand">
                  A Bíblia em Áudio • Todas as Histórias
                </h2>
                <p className="text-xs sm:text-sm text-amber-100 max-w-2xl">
                  Explore todas as aventuras bíblicas em formato de audiolivro cinematográfico.
                </p>
              </div>

              <div className="px-4 py-2 rounded-2xl bg-white/20 text-white font-brand font-black text-xs">
                {ALL_EPISODES.length} Episódios Disponíveis
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {ALL_EPISODES.map((ep) => (
                <EpisodeCard
                  key={ep.id}
                  episode={ep}
                  isFavorite={favorites.includes(ep.id)}
                  onPlay={handlePlayEpisodeDirectly}
                  onOpenDetails={(e) => setSelectedEpisodeModal(e)}
                  onToggleFavorite={handleToggleFavorite}
                  aspect="3:4"
                />
              ))}
            </div>
          </div>
        )}

        {/* 3. EXPLORE AS TEMPORADAS */}
        {activeTab === 'seasons' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white border-2 border-orange-200 rounded-[28px] p-6 sm:p-8 shadow-sm space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-brand flex items-center gap-2">
                <Layers className="w-8 h-8 text-orange-500" />
                Explore as 5 Grandes Temporadas
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 max-w-3xl leading-relaxed">
                Do jardim do Éden até a Roma Imperial e a galeria eterna dos Heróis da Fé. Escolha uma temporada para ver todos os episódios!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {BIBLE_SEASONS.map((season) => (
                <SeasonCard
                  key={season.id}
                  season={season}
                  onSelectSeason={(s) => setSelectedSeasonModal(s)}
                />
              ))}
            </div>
          </div>
        )}

        {/* 4. UNIVERSO 3D DE PERSONAGENS */}
        {activeTab === 'characters' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 rounded-[28px] p-6 sm:p-8 text-white shadow-md border-4 border-sky-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="px-3 py-0.5 rounded-full bg-white/20 text-white text-xs font-black uppercase font-brand">
                  Universo 3D Toon Tales
                </span>
                <h2 className="text-2xl sm:text-3xl font-black font-brand flex items-center gap-2">
                  <Users className="w-7 h-7" />
                  Galeria de Personagens Bíblicos
                </h2>
                <p className="text-xs sm:text-sm text-sky-100 max-w-xl">
                  Clique em um personagem para ler sua biografia bíblica infantil e ouvir suas histórias!
                </p>
              </div>

              <div className="px-4 py-2 rounded-2xl bg-white/20 text-white font-brand font-black text-xs">
                {CHARACTERS_DATA.length} Heróis Catalogados
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {CHARACTERS_DATA.map((c) => (
                <CharacterCard
                  key={c.id}
                  character={c}
                  onOpenCharacter={(char) => setSelectedCharacterModal(char)}
                />
              ))}
            </div>
          </div>
        )}

        {/* 5. DESTAQUE TEMPORADA 5 — HERÓIS DA FÉ */}
        {activeTab === 'heroes' && (
          <div className="space-y-8 animate-fade-in">
            <HeroesOfFaithSection
              season5={BIBLE_SEASONS.find((s) => s.id === 's5') || BIBLE_SEASONS[4]}
              onPlayEpisode={handlePlayEpisodeDirectly}
              onOpenDetails={(ep) => setSelectedEpisodeModal(ep)}
              onOpenSeason={(s) => setSelectedSeasonModal(s)}
            />
          </div>
        )}

        {/* 6. MINHA LISTA / FAVORITOS */}
        {activeTab === 'favorites' && (
          <FavoritesView
            favorites={favorites}
            onPlayEpisode={handlePlayEpisodeDirectly}
            onOpenDetails={(ep) => setSelectedEpisodeModal(ep)}
            onToggleFavorite={handleToggleFavorite}
            onExploreCatalog={() => setActiveTab('catalog')}
          />
        )}

        {/* 7. MEU PERFIL & CONQUISTAS */}
        {activeTab === 'profile' && (
          <ProfileView
            favorites={favorites}
            completedEpisodes={listeningProgress.map((p) => p.episodeId)}
            totalMinutesListened={135}
            onSelectEpisode={handlePlayEpisodeDirectly}
          />
        )}

        {/* 8. ÁREA DOS PAIS (PORTAL PARENTAL) */}
        {activeTab === 'parents' && (
          <ParentsPortal
            totalMinutesListened={135}
            completedEpisodesCount={18}
            favoritesCount={favorites.length}
            onOpenBedtime={() => setIsBedtimeOpen(true)}
            onOpenMixer={() => setIsMixerOpen(true)}
          />
        )}

        {/* 9. PÁGINA DE VENDAS & OFERTAS (LANDING PAGE DE ALTA CONVERSÃO) */}
        {activeTab === 'landing' && (
          <SalesLandingPage
            onEnterPlatform={() => setActiveTab('dashboard')}
          />
        )}

        {/* 9.1 PÁGINA DE OBRIGADO (ACESSO IMEDIATO PÓS-COMPRA HOTMART) */}
        {activeTab === 'thankyou' && (
          <ThankYouPageView
            onEnterApp={() => setActiveTab('dashboard')}
            onOpenColoringStudio={() => setIsColoringModalOpen(true)}
          />
        )}

        {/* 10. PLAYER CINEMATOGRÁFICO DE ÁUDIO (ESTÚDIO DEDICADO) */}
        {activeTab === 'player' && (
          <div className="space-y-6 animate-fade-in">
            {/* Top Navigation Back to Dashboard */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setActiveTab('dashboard')}
                className="px-4 py-2 rounded-xl bg-white hover:bg-orange-50 text-slate-700 hover:text-orange-600 font-bold text-xs border border-slate-200 transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar ao Dashboard</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('script')}
                  className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200 transition-colors flex items-center gap-1"
                >
                  <BookOpen className="w-3.5 h-3.5 text-orange-500" />
                  <span>Roteiro</span>
                </button>
                <button
                  onClick={() => setActiveTab('quiz')}
                  className="px-3.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-black font-brand uppercase tracking-wider transition-colors flex items-center gap-1 shadow-sm"
                >
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>Fazer Quiz</span>
                </button>
              </div>
            </div>

            {/* Episode Hero Meta Banner */}
            <div className="bg-white border-2 border-orange-200 rounded-[28px] p-5 sm:p-6 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3.5 py-1 rounded-full bg-orange-500 text-white text-xs font-black font-brand uppercase tracking-wider shadow-sm">
                    Audiolivro Cinematográfico
                  </span>
                  <span className="text-xs font-bold text-sky-800 bg-sky-100 px-3 py-1 rounded-full border border-sky-200">
                    Público-Alvo: 6 a 12 anos
                  </span>
                  <span className="text-xs font-bold text-amber-900 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
                    {currentMeta.biblicalText}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-brand">
                  {currentMeta.title} — <span className="text-orange-500">{currentMeta.subtitle}</span>
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
                  Superprodução de áudio com a voz majestosa de Deus, narrador envolvente, efeitos sonoros imersivos e trilha orquestral original.
                </p>
              </div>
            </div>

            {/* Visual 3D Stage */}
            <CinematicSceneView
              scene={currentScene}
              currentLine={currentLine}
              isPlaying={isPlaying}
              isPauseActive={isPauseActive}
              onSelectScene={handleSelectScene}
            />

            {/* Audio Player Controls */}
            <AudioPlayerControls
              isPlaying={isPlaying}
              currentScene={currentScene}
              allScenes={currentScenes}
              currentSceneIndex={currentSceneIndex}
              speechRate={mixSettings.speechRate}
              onPlay={handlePlay}
              onPause={handlePause}
              onRestart={handleRestart}
              onNextScene={handleNextScene}
              onPrevScene={handlePrevScene}
              onSelectScene={handleSelectScene}
              onOpenMixer={() => setIsMixerOpen(true)}
              onOpenBedtime={() => setIsBedtimeOpen(true)}
              onChangeSpeed={handleChangeSpeed}
            />

            {/* Moral Lesson & Values Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border-2 border-slate-100 rounded-3xl p-5 shadow-sm flex items-start gap-3.5">
                <div className="p-3 rounded-2xl bg-rose-100 text-rose-600 border border-rose-200 shrink-0">
                  <Heart className="w-6 h-6 fill-rose-500 text-rose-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base font-brand">A Lição Central da Aventura</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {currentMeta.moralLesson}
                  </p>
                </div>
              </div>

              <div className="bg-white border-2 border-slate-100 rounded-3xl p-5 shadow-sm flex items-start gap-3.5">
                <div className="p-3 rounded-2xl bg-sky-100 text-sky-600 border border-sky-200 shrink-0">
                  <ShieldCheck className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base font-brand">Direção Artística & Reverência</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Produção pensada para inspirar maravilhamento, paz e amor pela Palavra, sem sons assustadores ou dramatizações exageradas.
                  </p>
                </div>
              </div>
            </div>

            {/* Scene Explorer Grid */}
            <div className="bg-white border-2 border-slate-100 rounded-3xl p-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-3.5 flex items-center gap-2 font-brand">
                <BookOpen className="w-4 h-4 text-orange-500" />
                Jornada das Cenas • {currentMeta.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
                {currentScenes.map((scene, idx) => {
                  const isCurrent = idx === currentSceneIndex;
                  return (
                    <button
                      key={scene.id}
                      onClick={() => handleSelectScene(idx)}
                      className={`p-3 rounded-2xl border-2 text-left transition-all duration-200 ${
                        isCurrent
                          ? 'bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-200 ring-2 ring-orange-200 font-bold'
                          : 'bg-slate-50 border-slate-100 text-slate-700 hover:border-orange-200 hover:bg-orange-50/50'
                      }`}
                    >
                      <div className={`flex items-center justify-between text-[10px] font-bold mb-1 ${isCurrent ? 'text-orange-100' : 'text-slate-400'}`}>
                        <span>Cena {scene.sceneNumber}</span>
                        {scene.biblicalDay && (
                          <span className={isCurrent ? 'text-yellow-200' : 'text-orange-600'}>{scene.biblicalDay}</span>
                        )}
                      </div>
                      <div className="font-bold text-xs line-clamp-1 font-brand">
                        {scene.title}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* 11. TELEPROMPTER DE ROTEIRO */}
        {activeTab === 'script' && (
          <div className="space-y-6 animate-fade-in">
            <button
              onClick={() => setActiveTab('player')}
              className="px-4 py-2 rounded-xl bg-white hover:bg-orange-50 text-slate-700 hover:text-orange-600 font-bold text-xs border border-slate-200 transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar ao Player</span>
            </button>
            <ScriptTeleprompter
              scenes={currentScenes}
              currentSceneId={currentScene.id}
              activeLineId={activeLineId}
              onSelectScene={handleSelectScene}
            />
          </div>
        )}

        {/* 12. SOUNDBOARD DE EFEITOS FOLEY */}
        {activeTab === 'soundboard' && (
          <div className="space-y-6 animate-fade-in">
            <button
              onClick={() => setActiveTab('dashboard')}
              className="px-4 py-2 rounded-xl bg-white hover:bg-orange-50 text-slate-700 hover:text-orange-600 font-bold text-xs border border-slate-200 transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar ao Dashboard</span>
            </button>
            <SoundBoardConsole />
          </div>
        )}

        {/* 13. QUIZ BÍBLICO INTERATIVO */}
        {activeTab === 'quiz' && (
          <div className="space-y-6 animate-fade-in">
            <button
              onClick={() => setActiveTab('player')}
              className="px-4 py-2 rounded-xl bg-white hover:bg-orange-50 text-slate-700 hover:text-orange-600 font-bold text-xs border border-slate-200 transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar ao Episódio</span>
            </button>
            <CreationQuiz quizData={currentQuiz} />
          </div>
        )}
      </main>

      {/* Floating Mini Player Docked on Bottom */}
      <AnimatePresence>
        {showFloatingPlayer && (
          <FloatingMiniPlayer
            currentEpisode={currentEpisode}
            currentScene={currentScene}
            currentSceneIndex={currentSceneIndex}
            totalScenes={currentScenes.length}
            isPlaying={isPlaying}
            onPlay={handlePlay}
            onPause={handlePause}
            onExpandPlayer={() => setActiveTab('player')}
            onNextScene={handleNextScene}
            onPrevScene={handlePrevScene}
          />
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="w-full bg-white border-t-4 border-amber-400 py-10 mt-16 text-center text-xs text-slate-500 shadow-inner select-none">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-amber-500 shadow-sm"></div>
            <div className="w-3 h-3 rounded-full bg-orange-500 shadow-sm"></div>
            <div className="w-3 h-3 rounded-full bg-sky-500 shadow-sm"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm"></div>
          </div>

          <p className="font-black text-slate-800 font-brand text-base">
            TOON TALES KIDS • A Bíblia em Áudio Infantil
          </p>

          <p className="text-slate-500 text-xs max-w-xl mx-auto">
            "Histórias que ensinam, aventuras que transformam!" — Baseado fielmente nos textos bíblicos. Desenvolvido para crianças de 6 a 12 anos e suas famílias em Português Brasileiro (PT-BR).
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-slate-400 pt-2">
            <button onClick={() => setActiveTab('dashboard')} className="hover:text-orange-600">Início</button>
            <span>•</span>
            <button onClick={() => setActiveTab('catalog')} className="hover:text-orange-600">Histórias</button>
            <span>•</span>
            <button onClick={() => setActiveTab('seasons')} className="hover:text-orange-600">Temporadas</button>
            <span>•</span>
            <button onClick={() => setActiveTab('characters')} className="hover:text-orange-600">Personagens</button>
            <span>•</span>
            <button onClick={() => setActiveTab('heroes')} className="hover:text-orange-600">Heróis da Fé</button>
            <span>•</span>
            <button onClick={() => setActiveTab('parents')} className="hover:text-indigo-600">Área dos Pais</button>
            <span>•</span>
            <button onClick={() => setActiveTab('landing')} className="hover:text-orange-600">Vitrine</button>
          </div>
        </div>
      </footer>

      {/* Global Modals & Overlays */}
      <EpisodeModal
        episode={selectedEpisodeModal}
        onClose={() => setSelectedEpisodeModal(null)}
        onPlayEpisode={handlePlayEpisodeDirectly}
        onOpenScript={handleOpenScript}
        onOpenQuiz={handleOpenQuiz}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
      />

      <CharacterModal
        character={selectedCharacterModal}
        onClose={() => setSelectedCharacterModal(null)}
        onPlayEpisode={handlePlayEpisodeDirectly}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
      />

      <SeasonModal
        season={selectedSeasonModal}
        onClose={() => setSelectedSeasonModal(null)}
        onPlayEpisode={handlePlayEpisodeDirectly}
        onOpenEpisodeDetails={(ep) => setSelectedEpisodeModal(ep)}
      />

      <SmartSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectEpisode={handlePlayEpisodeDirectly}
        onSelectCharacter={(c) => setSelectedCharacterModal(c)}
        onSelectSeason={(s) => setSelectedSeasonModal(s)}
      />

      <AudioMixerModal
        isOpen={isMixerOpen}
        settings={mixSettings}
        onClose={() => setIsMixerOpen(false)}
        onUpdateSettings={handleUpdateMixSettings}
      />

      <BedtimeModeModal
        isOpen={isBedtimeOpen}
        onClose={() => setIsBedtimeOpen(false)}
        minutesLeft={bedtimeMinutesLeft}
        onSetTimer={handleSetBedtimeTimer}
        onCancelTimer={handleCancelBedtimeTimer}
      />

      <ColoringStudioModal
        isOpen={isColoringModalOpen}
        onClose={() => setIsColoringModalOpen(false)}
      />

      {/* Auth Modal (Login / Registro) */}
      <AuthModal
        isOpen={isAuthModalOpen}
        initialMode={authModalMode}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccessAuth={(user) => {
          setCurrentUser(user);
          if (user.role === 'admin' || user.email.toLowerCase() === 'nogueiralfha@gmail.com') {
            setIsAdminModalOpen(true);
          }
        }}
      />

      {/* Admin Dashboard Modal (Master Admin) */}
      <AdminDashboardModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        onLogoutAdmin={() => {
          authService.logout();
          setCurrentUser(null);
          setIsAdminModalOpen(false);
        }}
      />

      {/* Loading Transition Overlay */}
      {isLoadingTransition && <LoadingScreen />}
    </div>
  );
}
