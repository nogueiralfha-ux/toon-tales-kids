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
import { Header } from './components/Header';
import { CinematicSceneView } from './components/CinematicSceneView';
import { AudioPlayerControls } from './components/AudioPlayerControls';
import { ScriptTeleprompter } from './components/ScriptTeleprompter';
import { SoundBoardConsole } from './components/SoundBoardConsole';
import { CreationQuiz } from './components/CreationQuiz';
import { AudioMixerModal } from './components/AudioMixerModal';
import { BedtimeModeModal } from './components/BedtimeModeModal';
import { EpisodeCatalog } from './components/EpisodeCatalog';
import { BIBLE_SEASONS, Episode } from './data/catalog';
import { Sparkles, Heart, BookOpen, Volume2, ShieldCheck, Sun, Star } from 'lucide-react';

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
  const [currentEpisodeId, setCurrentEpisodeId] = useState<string>('t5e0');
  const selectedEpisode = EPISODE_REGISTRY[currentEpisodeId] || EPISODE_REGISTRY['t1e1'];
  const currentScenes = selectedEpisode.scenes;
  const currentMeta = selectedEpisode.meta;
  const currentQuiz = selectedEpisode.quiz;

  const [activeTab, setActiveTab] = useState<'catalog' | 'player' | 'script' | 'soundboard' | 'quiz'>('catalog');
  const [currentSceneIndex, setCurrentSceneIndex] = useState<number>(0);
  const [activeLineId, setActiveLineId] = useState<string | null>(null);
  const [currentLine, setCurrentLine] = useState<ScriptLine | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isPauseActive, setIsPauseActive] = useState<boolean>(false);
  const [isMixerOpen, setIsMixerOpen] = useState<boolean>(false);
  const [isBedtimeOpen, setIsBedtimeOpen] = useState<boolean>(false);
  const [bedtimeMinutesLeft, setBedtimeMinutesLeft] = useState<number | null>(null);
  const [mixSettings, setMixSettings] = useState<AudioMixSettings>(audioEngine.getSettings());

  const currentScene = currentScenes[currentSceneIndex] || currentScenes[0];

  // Sync state with audio engine callbacks
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
        // Line completed
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

  const handleSelectEpisode = (ep: Episode) => {
    if (EPISODE_REGISTRY[ep.id]) {
      setCurrentEpisodeId(ep.id);
      setCurrentSceneIndex(0);
      audioEngine.initContext();
      audioEngine.stopEpisode();
      setIsPlaying(false);

      setActiveTab('player');
    }
  };

  // Bedtime sleep timer countdown loop
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

  return (
    <div className="min-h-screen bg-[#FFFBEB] text-slate-800 flex flex-col selection:bg-orange-500 selection:text-white font-sans">
      {/* Header Bar */}
      <Header currentMeta={currentMeta}
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onOpenMixer={() => setIsMixerOpen(true)}
        onOpenBedtime={() => setIsBedtimeOpen(true)}
        bedtimeActive={bedtimeMinutesLeft !== null}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8">
        
        {/* Tab 0: Episode Catalog */}
        {activeTab === 'catalog' && (
          <EpisodeCatalog onSelectEpisode={handleSelectEpisode} />
        )}

        {/* Tab 1: Cinematic Audio Player View */}
        {activeTab === 'player' && (
          <div className="space-y-6">
            {/* Hero Meta Banner */}
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
                  Uma superprodução de áudio infantil com narrador profissional, a majestosa voz de Deus, efeitos sonoros imersivos e trilha orquestral original.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setActiveTab('quiz')}
                  className="px-5 py-2.5 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-black text-xs shadow-md shadow-orange-200 transition-all flex items-center gap-1.5 active:scale-95"
                >
                  <Star className="w-4 h-4 fill-current text-yellow-300" />
                  <span>Fazer o Quiz</span>
                </button>
              </div>
            </div>

            {/* Visual Stage */}
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

            {/* Moral Lesson & Value Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border-2 border-slate-100 rounded-3xl p-5 shadow-sm flex items-start gap-3.5">
                <div className="p-3 rounded-2xl bg-rose-100 text-rose-600 border border-rose-200 shrink-0">
                  <Heart className="w-6 h-6 fill-rose-500 text-rose-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base font-brand">A Lição Central do Episódio</h4>
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
                    Produção pensada para inspirar maravilhamento, paz e amor pela natureza, sem sons assustadores ou dramatizações exageradas.
                  </p>
                </div>
              </div>
            </div>

            {/* Scenes Explorer Grid */}
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

        {/* Tab 2: Script Teleprompter & Direction */}
        {activeTab === 'script' && (
          <ScriptTeleprompter
            scenes={currentScenes}
            currentSceneId={currentScene.id}
            activeLineId={activeLineId}
            onSelectScene={handleSelectScene}
          />
        )}

        {/* Tab 3: Interactive Soundboard */}
        {activeTab === 'soundboard' && <SoundBoardConsole />}

        {/* Tab 4: Creation Quiz */}
        {activeTab === 'quiz' && <CreationQuiz quizData={currentQuiz} />}
      </main>

      {/* Footer */}
      <footer className="w-full bg-white border-t-4 border-orange-400 py-6 mt-12 text-center text-xs text-slate-500 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-sky-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
          </div>
          <p className="font-bold text-slate-700 font-brand">
            TOON TALES KIDS • A Bíblia em Áudio Infantil
          </p>
          <p className="text-slate-500 text-[11px]">
            Baseado fielmente nos textos bíblicos. Desenvolvido para crianças de 6 a 12 anos em Português Brasileiro (PT-BR).
          </p>
        </div>
      </footer>

      {/* Modals */}
      <AudioMixerModal
        isOpen={isMixerOpen}
        settings={mixSettings}
        onClose={() => setIsMixerOpen(false)}
        onUpdateSettings={handleUpdateMixSettings}
      />

      <BedtimeModeModal
        isOpen={isBedtimeOpen}
        onClose={() => setIsBedtimeOpen(false)}
        onTimerSet={(minutes) => setBedtimeMinutesLeft(minutes)}
        activeMinutesLeft={bedtimeMinutesLeft}
        onCancelTimer={() => setBedtimeMinutesLeft(null)}
      />
    </div>
  );
}

