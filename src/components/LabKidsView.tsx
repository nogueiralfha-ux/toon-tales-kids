import React, { useState, useMemo } from 'react';
import {
  SCIENCE_TRACKS,
  LAB_KIDS_EPISODES,
  LabKidsEpisode,
  ScienceTrack,
  LabKidsQuizQuestion,
} from '../data/labKidsData';
import { UserAccount, authService } from '../services/authService';
import {
  Sparkles,
  Search,
  Play,
  CheckCircle2,
  Lock,
  Unlock,
  Award,
  BookOpen,
  Volume2,
  Zap,
  HelpCircle,
  X,
  RotateCcw,
  ArrowRight,
  Flame,
  Rocket,
  HeartPulse,
  Cpu,
  Leaf,
  GraduationCap,
  Star,
  ExternalLink,
  ChevronRight,
  Tv,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LabKidsViewProps {
  currentUser: UserAccount | null;
  onOpenAuth: (mode?: 'login' | 'register') => void;
  onAddXp?: (amount: number) => void;
}

export const LabKidsView: React.FC<LabKidsViewProps> = ({
  currentUser,
  onOpenAuth,
  onAddXp,
}) => {
  const [selectedTrack, setSelectedTrack] = useState<ScienceTrack | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeEpisode, setActiveEpisode] = useState<LabKidsEpisode | null>(null);
  const [activeTab, setActiveTab] = useState<'video' | 'quiz'>('video');
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [showUnlockModal, setShowUnlockModal] = useState<boolean>(false);
  const [completedQuizzes, setCompletedQuizzes] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('toontales_labkids_completed');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const hasAccess = authService.hasModuleAccess(currentUser, 'labkids');

  // Filtered Episodes
  const filteredEpisodes = useMemo(() => {
    return LAB_KIDS_EPISODES.filter((ep) => {
      const matchesTrack = selectedTrack === 'all' || ep.track === selectedTrack;
      const matchesSearch =
        searchQuery.trim() === '' ||
        ep.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ep.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ep.learningGoal.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTrack && matchesSearch;
    });
  }, [selectedTrack, searchQuery]);

  const handleOpenEpisode = (ep: LabKidsEpisode) => {
    if (!hasAccess && !ep.isFreePreview) {
      setShowUnlockModal(true);
      return;
    }
    setActiveEpisode(ep);
    setActiveTab('video');
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  const handleSelectQuizOption = (questionId: string, optionIdx: number) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [questionId]: optionIdx }));
  };

  const handleFinishQuiz = (ep: LabKidsEpisode) => {
    setQuizSubmitted(true);
    let correctCount = 0;
    ep.quiz.forEach((q) => {
      if (quizAnswers[q.id] === q.correctIndex) {
        correctCount++;
      }
    });

    if (correctCount === ep.quiz.length) {
      if (!completedQuizzes.includes(ep.id)) {
        const updated = [...completedQuizzes, ep.id];
        setCompletedQuizzes(updated);
        try {
          localStorage.setItem('toontales_labkids_completed', JSON.stringify(updated));
        } catch {}
        if (onAddXp) {
          onAddXp(ep.xpReward);
        }
      }
    }
  };

  const trackIcons: Record<ScienceTrack, React.ReactNode> = {
    natureza_terra: <Leaf className="w-5 h-5" />,
    forcas_natureza: <Flame className="w-5 h-5" />,
    espaco_cosmos: <Rocket className="w-5 h-5" />,
    corpo_saude: <HeartPulse className="w-5 h-5" />,
    tecnologia_inovacao: <Cpu className="w-5 h-5" />,
  };

  return (
    <div className="space-y-10 select-none pb-20">
      {/* ------------------------------------------------------------- */}
      {/* 1. HERO BANNER PRINCIPAL (LAB KIDS COSMIC LAB)                */}
      {/* ------------------------------------------------------------- */}
      <section className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-950 text-white border-2 border-purple-500/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/20 via-purple-500/10 to-transparent pointer-events-none" />
        
        {/* Floating Science Badges */}
        <div className="absolute -top-10 -right-10 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
          {/* Left Column: Headline & Value Prop */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-500/30 border border-purple-400/40 text-purple-200 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>NOVIDADE • CANAL OFICIAL DE CIÊNCIA & DESCOBERTAS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
                LAB KIDS
              </span>
              <br />
              Aprender Ciência Nunca Foi Tão Divertido!
            </h1>

            <p className="text-slate-200 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              30 episódios animados em Full HD com dublagem profissional, curiosidades do universo, corpo humano, fenômenos naturais e quizzes interativos do Pequeno Cientista.
            </p>

            {/* Micro Stats */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-md">
              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
                <div className="text-xl sm:text-2xl font-black text-amber-300">30</div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium">Aulas em Vídeo</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
                <div className="text-xl sm:text-2xl font-black text-cyan-300">5</div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium">Trilhas Vivas</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
                <div className="text-xl sm:text-2xl font-black text-emerald-300">90</div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium">Quizzes com XP</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => handleOpenEpisode(LAB_KIDS_EPISODES[0])}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-base shadow-lg shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all"
              >
                <Play className="w-5 h-5 fill-current" />
                Assistir Aula Grátis (Som & Ouvido)
              </button>

              {!hasAccess && (
                <button
                  onClick={() => setShowUnlockModal(true)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold text-base shadow-lg shadow-orange-500/30 hover:scale-105 active:scale-95 transition-all"
                >
                  <Lock className="w-5 h-5" />
                  Desbloquear Coleção Completa
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Hero Visual Card Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm rounded-3xl overflow-hidden p-2 bg-gradient-to-b from-purple-400/40 via-cyan-400/20 to-transparent shadow-2xl">
              <img
                src="/labkids/covers/A Ciência do Som Explorando Como Ouvimos.jpg"
                alt="Lab Kids Destaque"
                className="w-full h-auto rounded-2xl object-cover shadow-inner group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5 rounded-2xl">
                <div>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500 text-slate-950 text-xs font-black uppercase tracking-wider">
                    Degustação Liberada
                  </span>
                  <h3 className="text-white font-bold text-lg mt-1">A Ciência do Som</h3>
                  <p className="text-slate-300 text-xs">Descubra como o tímpano ouve músicas e vozes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. BARRA DE FILTROS POR TRILHA & PESQUISA                     */}
      {/* ------------------------------------------------------------- */}
      <section className="space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <span>🔬 Trilhas do Conhecimento</span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 font-bold">
                {filteredEpisodes.length} aulas
              </span>
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Selecione o tema para explorar ou busque por uma palavra-chave
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por tema, vulcão, sol..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
            />
          </div>
        </div>

        {/* Track Pills */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedTrack('all')}
            className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
              selectedTrack === 'all'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20 scale-105'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Todas as Aulas ({LAB_KIDS_EPISODES.length})
          </button>

          {SCIENCE_TRACKS.map((track) => (
            <button
              key={track.id}
              onClick={() => setSelectedTrack(track.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                selectedTrack === track.id
                  ? `bg-gradient-to-r ${track.bgGradient} text-white shadow-md scale-105`
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {trackIcons[track.id]}
              {track.shortTitle}
            </button>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. GRID DOS 30 EPISÓDIOS COM CAPAS E BADGES                   */}
      {/* ------------------------------------------------------------- */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredEpisodes.map((episode) => {
          const isUnlocked = hasAccess || episode.isFreePreview;
          const isCompleted = completedQuizzes.includes(episode.id);
          const trackInfo = SCIENCE_TRACKS.find((t) => t.id === episode.track);

          return (
            <motion.div
              key={episode.id}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col rounded-3xl overflow-hidden bg-white dark:bg-slate-800 border-2 border-slate-200/80 dark:border-slate-700/80 shadow-md hover:shadow-xl transition-all"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img
                  src={episode.coverImage}
                  alt={episode.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-sm text-white text-[11px] font-semibold">
                  {episode.duration}
                </div>

                {/* Free Preview or Locked Pill */}
                <div className="absolute top-2 left-2">
                  {episode.isFreePreview ? (
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-wide shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Grátis
                    </span>
                  ) : !hasAccess ? (
                    <span className="px-2.5 py-1 rounded-full bg-amber-500/90 backdrop-blur-sm text-slate-950 text-[10px] font-black uppercase tracking-wide shadow-md flex items-center gap-1">
                      <Lock className="w-3 h-3" />
                      Bloqueado
                    </span>
                  ) : null}
                </div>

                {/* Quiz Completed Star */}
                {isCompleted && (
                  <div className="absolute top-2 right-2 p-1.5 rounded-full bg-amber-400 text-slate-950 shadow-md" title="Quiz Concluído!">
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                )}

                {/* Hover Play Overlay */}
                <button
                  onClick={() => handleOpenEpisode(episode)}
                  className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
                >
                  <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    {isUnlocked ? <Play className="w-6 h-6 fill-current ml-0.5" /> : <Lock className="w-5 h-5" />}
                  </div>
                </button>
              </div>

              {/* Content Body */}
              <div className="flex flex-col flex-1 p-5 space-y-3">
                {/* Track Badge */}
                <div className="flex items-center gap-1.5 text-xs font-bold">
                  <span className={`${trackInfo?.color} flex items-center gap-1`}>
                    {trackIcons[episode.track]}
                    {trackInfo?.shortTitle}
                  </span>
                  <span className="text-slate-300 dark:text-slate-600">•</span>
                  <span className="text-slate-500 dark:text-slate-400">Aula {episode.number}</span>
                </div>

                {/* Title */}
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white line-clamp-2 leading-snug group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {episode.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed flex-1">
                  {episode.description}
                </p>

                {/* Action Footer */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    +{episode.xpReward} XP
                  </span>

                  <button
                    onClick={() => handleOpenEpisode(episode)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                      isUnlocked
                        ? 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 hover:bg-purple-200'
                        : 'bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 hover:bg-amber-200'
                    }`}
                  >
                    {isUnlocked ? (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        Assistir
                      </>
                    ) : (
                      <>
                        <Lock className="w-3.5 h-3.5" />
                        Desbloquear
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. MODAL DO PLAYER & QUIZ DO PEQUENO CIENTISTA                */}
      {/* ------------------------------------------------------------- */}
      <AnimatePresence>
        {activeEpisode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border-2 border-purple-500/40 shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-2xl bg-purple-600 text-white">
                    <Tv className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                      Aula {activeEpisode.number} • {activeEpisode.duration}
                    </div>
                    <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white line-clamp-1">
                      {activeEpisode.title}
                    </h2>
                  </div>
                </div>

                <button
                  onClick={() => setActiveEpisode(null)}
                  className="p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Tabs */}
              <div className="flex border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 pt-2">
                <button
                  onClick={() => setActiveTab('video')}
                  className={`pb-3 px-4 text-sm font-bold border-b-2 flex items-center gap-2 transition-all ${
                    activeTab === 'video'
                      ? 'border-purple-600 text-purple-600 dark:text-purple-400'
                      : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
                >
                  <Play className="w-4 h-4" />
                  Vídeo da Aula
                </button>
                <button
                  onClick={() => setActiveTab('quiz')}
                  className={`pb-3 px-4 text-sm font-bold border-b-2 flex items-center gap-2 transition-all ${
                    activeTab === 'quiz'
                      ? 'border-purple-600 text-purple-600 dark:text-purple-400'
                      : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
                >
                  <HelpCircle className="w-4 h-4" />
                  Quiz do Cientista ({activeEpisode.quiz.length} Perguntas)
                </button>
              </div>

              {/* Modal Content Body */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
                {activeTab === 'video' ? (
                  <div className="space-y-4">
                    {/* Video Player */}
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-lg">
                      <video
                        src={activeEpisode.videoUrl}
                        poster={activeEpisode.coverImage}
                        controls
                        autoPlay
                        className="w-full h-full object-contain"
                      >
                        Seu navegador não suporta a tag de vídeo.
                      </video>
                    </div>

                    {/* Lesson Meta */}
                    <div className="p-5 rounded-2xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900/50 space-y-2">
                      <h4 className="text-xs font-extrabold text-purple-700 dark:text-purple-300 uppercase tracking-wide">
                        🎯 Objetivo Pedagógico
                      </h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                        {activeEpisode.learningGoal}
                      </p>
                    </div>

                    {/* Call to Action Quiz */}
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-400/30">
                      <div className="flex items-center gap-3">
                        <Award className="w-6 h-6 text-amber-500" />
                        <div>
                          <div className="text-sm font-extrabold text-slate-900 dark:text-white">
                            Pronto para o Desafio do Cientista?
                          </div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">
                            Responda ao quiz e ganhe +{activeEpisode.xpReward} XP e o badge "{activeEpisode.badgeName}"!
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => setActiveTab('quiz')}
                        className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs shadow-md transition-all"
                      >
                        Iniciar Quiz
                      </button>
                    </div>
                  </div>
                ) : (
                  /* QUIZ INTERATIVO */
                  <div className="space-y-6">
                    <div className="text-center max-w-md mx-auto space-y-1">
                      <h3 className="text-xl font-black text-slate-900 dark:text-white">
                        🧠 Desafio: {activeEpisode.badgeName}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Responda às 3 perguntas para fixar o aprendizado e conquistar seus pontos!
                      </p>
                    </div>

                    <div className="space-y-6">
                      {activeEpisode.quiz.map((q, qIndex) => {
                        const selected = quizAnswers[q.id];
                        const isCorrect = selected === q.correctIndex;

                        return (
                          <div
                            key={q.id}
                            className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3"
                          >
                            <div className="text-sm font-extrabold text-slate-900 dark:text-white flex items-start gap-2">
                              <span className="px-2 py-0.5 rounded-md bg-purple-600 text-white text-xs font-black">
                                {qIndex + 1}
                              </span>
                              <span>{q.question}</span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                              {q.options.map((opt, optIdx) => {
                                let btnStyle =
                                  'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-purple-400';

                                if (selected === optIdx) {
                                  btnStyle = 'bg-purple-100 dark:bg-purple-900/40 border-purple-500 text-purple-800 dark:text-purple-200 font-bold';
                                }

                                if (quizSubmitted) {
                                  if (optIdx === q.correctIndex) {
                                    btnStyle = 'bg-emerald-100 dark:bg-emerald-900/40 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-bold';
                                  } else if (selected === optIdx && !isCorrect) {
                                    btnStyle = 'bg-rose-100 dark:bg-rose-900/40 border-rose-500 text-rose-800 dark:text-rose-200 line-through';
                                  }
                                }

                                return (
                                  <button
                                    key={optIdx}
                                    onClick={() => handleSelectQuizOption(q.id, optIdx)}
                                    disabled={quizSubmitted}
                                    className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all ${btnStyle}`}
                                  >
                                    {opt}
                                  </button>
                                );
                              })}
                            </div>

                            {quizSubmitted && (
                              <div className="pt-2 text-xs font-semibold text-slate-600 dark:text-slate-400 bg-white/60 dark:bg-slate-900/60 p-2.5 rounded-lg">
                                💡 <span className="font-bold text-slate-900 dark:text-white">Explicação:</span> {q.explanation}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end pt-4">
                      {!quizSubmitted ? (
                        <button
                          onClick={() => handleFinishQuiz(activeEpisode)}
                          disabled={Object.keys(quizAnswers).length < activeEpisode.quiz.length}
                          className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-50 text-white font-extrabold text-sm shadow-lg shadow-purple-500/20 transition-all"
                        >
                          Concluir e Ver Resultado
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setQuizAnswers({});
                            setQuizSubmitted(false);
                          }}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 text-slate-800 dark:text-white font-bold text-xs transition-all"
                        >
                          <RotateCcw className="w-4 h-4" />
                          Tentar Novamente
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ------------------------------------------------------------- */}
      {/* 5. MODAL DE DESBLOQUEIO / PAYWALL INTELIGENTE (UPSELL)        */}
      {/* ------------------------------------------------------------- */}
      <AnimatePresence>
        {showUnlockModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-lg rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border-2 border-amber-400 shadow-2xl p-6 sm:p-8 text-center space-y-6"
            >
              <button
                onClick={() => setShowUnlockModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-amber-500 to-orange-500 text-slate-950 flex items-center justify-center mx-auto shadow-xl">
                <Lock className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                  Desbloqueie o Lab Kids!
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Tenha acesso a todos os 30 episódios de ciências, 5 trilhas educativas e 90 quizzes com medalhas e XP por apenas <strong className="text-purple-600 dark:text-purple-400">R$ 37,00/mês</strong> ou no Super Combo VIP!
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-700/50 text-left space-y-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>30 Episódios Full HD sobre Planeta, Espaço, Corpo & Tech</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>90 Perguntas de Quizzes pedagógicos com badges e XP</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Acesso em Celular, Tablet, Smart TV e Computador</span>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href="#planos"
                  onClick={() => {
                    setShowUnlockModal(false);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-base shadow-lg shadow-purple-500/30 transition-all"
                >
                  <Sparkles className="w-5 h-5" />
                  Ver Planos de Assinatura (a partir de R$ 37,00/mês)
                </a>

                <button
                  onClick={() => {
                    setShowUnlockModal(false);
                    onOpenAuth('login');
                  }}
                  className="text-xs text-slate-500 dark:text-slate-400 hover:underline font-bold"
                >
                  Já comprou? Faça login para sincronizar seu acesso
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
