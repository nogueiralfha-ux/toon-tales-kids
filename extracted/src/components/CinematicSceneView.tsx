import React, { useEffect, useRef, useState } from 'react';
import { Scene, ScriptLine } from '../types';
import { audioEngine } from '../services/audioEngine';
import { Sparkles, BookOpen, Volume2, Sun, Moon, Compass, Heart, Wind, Waves, Trees, Crown, HelpCircle, Check, MessageCircle, FastForward, Shield, Flame, Star, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CinematicSceneViewProps {
  scene: Scene;
  currentLine: ScriptLine | null;
  isPlaying: boolean;
  onSelectScene: (sceneId: number) => void;
  isPauseActive?: boolean;
  pauseSecondsRemaining?: number;
  onAnswerInteractive?: (optionText: string) => void;
}

export const CinematicSceneView: React.FC<CinematicSceneViewProps> = ({
  scene,
  currentLine,
  isPlaying,
  isPauseActive = false,
  pauseSecondsRemaining,
  onAnswerInteractive,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [activeWords, setActiveWords] = useState<string[]>([]);

  useEffect(() => {
    if (currentLine) {
      setActiveWords(currentLine.text.split(' '));
      setSelectedOption(null);
    }
  }, [currentLine]);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    audioEngine.triggerSoundEffect('star_chimes');
    if (onAnswerInteractive) {
      onAnswerInteractive(option);
    }
  };

  const handleSkipPause = () => {
    audioEngine.skipCurrentPause();
  };

  // Audio spectrum visualizer loop
  useEffect(() => {
    let animationFrameId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const analyser = audioEngine.analyser;

      if (analyser && isPlaying) {
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyser.getByteFrequencyData(dataArray);

        const barWidth = (canvas.width / 32) - 2;
        let x = 0;

        for (let i = 0; i < 32; i++) {
          const index = Math.floor((i / 32) * bufferLength * 0.6);
          const barHeight = Math.max(3, (dataArray[index] / 255) * canvas.height * 0.85);

          // Dynamic glowing gradient
          const gradient = ctx.createLinearGradient(0, canvas.height, 0, canvas.height - barHeight);
          gradient.addColorStop(0, 'rgba(245, 158, 11, 0.2)');
          gradient.addColorStop(0.6, 'rgba(251, 191, 36, 0.8)');
          gradient.addColorStop(1, 'rgba(254, 240, 138, 1)');

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.roundRect(x, canvas.height - barHeight, barWidth, barHeight, [4, 4, 0, 0]);
          ctx.fill();

          x += barWidth + 2;
        }
      } else {
        // Idle gentle waveform
        const time = Date.now() * 0.002;
        const barWidth = (canvas.width / 32) - 2;
        let x = 0;
        for (let i = 0; i < 32; i++) {
          const h = 4 + Math.sin(time + i * 0.3) * 3;
          ctx.fillStyle = 'rgba(148, 163, 184, 0.25)';
          ctx.fillRect(x, canvas.height - h, barWidth, h);
          x += barWidth + 2;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlaying]);

  const getSceneBadgeColor = () => {
    switch (scene.id) {
      case 1: return 'from-indigo-900 to-slate-900 text-indigo-200 border-indigo-700/50';
      case 2: return 'from-amber-600 to-yellow-500 text-amber-950 border-amber-300';
      case 3: return 'from-sky-700 to-cyan-600 text-sky-100 border-sky-400/40';
      case 4: return 'from-emerald-700 to-teal-600 text-emerald-100 border-emerald-400/40';
      case 5: return 'from-indigo-950 to-purple-900 text-amber-200 border-amber-400/30';
      case 6: return 'from-blue-700 to-cyan-500 text-blue-50 border-cyan-400/40';
      case 7: return 'from-amber-700 to-orange-600 text-amber-50 border-orange-400/40';
      case 8: return 'from-rose-800 to-amber-700 text-rose-100 border-rose-400/40';
      case 9: return 'from-emerald-600 via-teal-600 to-amber-500 text-emerald-950 border-amber-300';
      case 10: return 'from-slate-800 to-indigo-950 text-indigo-100 border-indigo-400/40';
      case 11: return 'from-amber-500 to-orange-500 text-slate-950 border-amber-200';
      default: return 'from-amber-500 to-purple-600 text-white border-amber-300';
    }
  };

  const renderVisualIllustration = () => {
    switch (scene.visualKey) {
      case 'scene_01_before':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-indigo-950/60 to-black">
            {/* Primordial deep cosmos */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/30 via-slate-950/80 to-black animate-pulse" style={{ animationDuration: '6s' }} />
            <div className="relative z-10 text-center px-6 max-w-lg">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="w-24 h-24 mx-auto mb-6 rounded-full bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center shadow-2xl shadow-indigo-500/10"
              >
                <Sparkles className="w-10 h-10 text-indigo-300 animate-spin" style={{ animationDuration: '12s' }} />
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold text-indigo-100 tracking-wide mb-2 font-brand">
                No Princípio...
              </h3>
              <p className="text-sm sm:text-base text-indigo-200/80 font-light leading-relaxed">
                Antes de todo o universo existir, Deus já estava presente com Seu infinito amor e sabedoria.
              </p>
            </div>
          </div>
        );

      case 'scene_02_light':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-amber-950/40 to-black">
            {/* Glowing radiant burst of light */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[500px] h-[500px] rounded-full bg-amber-400/20 blur-3xl animate-ping" style={{ animationDuration: '4s' }} />
              <div className="w-64 h-64 rounded-full bg-amber-300/30 blur-xl" />
              <div className="w-32 h-32 rounded-full bg-amber-100 shadow-[0_0_100px_40px_rgba(251,191,36,0.6)] animate-pulse" />
            </div>
            {/* Rays */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_100%)]" />
            <div className="relative z-10 text-center px-6">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-block px-5 py-2 rounded-full bg-amber-500/20 border border-amber-400/40 backdrop-blur-md mb-4"
              >
                <span className="text-amber-200 font-bold tracking-widest text-xs uppercase font-brand">"Haja Luz!"</span>
              </motion.div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-amber-100 drop-shadow-md font-brand">
                A Luz Venceu a Escuridão
              </h3>
              <p className="text-sm text-amber-200/90 mt-2">O Primeiro Dia da Criação • Separação do Dia e da Noite</p>
            </div>
          </div>
        );

      case 'scene_03_sky':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-sky-900 via-sky-600 to-cyan-900">
            {/* Clouds and atmospheric depth */}
            <div className="absolute top-8 left-12 w-48 h-20 bg-white/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute bottom-16 right-16 w-64 h-24 bg-cyan-200/20 rounded-full blur-2xl" />
            <div className="relative z-10 text-center px-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-white/10 border border-sky-200/30 backdrop-blur-md flex items-center justify-center shadow-lg">
                <Wind className="w-10 h-10 text-sky-200" />
              </div>
              <h3 className="text-2xl font-bold text-white font-brand">O Firmamento e o Céu</h3>
              <p className="text-sm text-sky-100/90 mt-1">O ar puro e o espaço aberto entre as águas</p>
            </div>
          </div>
        );

      case 'scene_04_green':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-emerald-950 via-teal-900 to-emerald-900">
            {/* Lush vegetation particles */}
            <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-emerald-800/80 to-transparent" />
            <div className="relative z-10 text-center px-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-emerald-500/20 border border-emerald-300/40 backdrop-blur-md flex items-center justify-center shadow-lg">
                <Trees className="w-10 h-10 text-emerald-300" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-100 font-brand">A Terra Fica Verde</h3>
              <p className="text-sm text-emerald-200/90 mt-1">Árvores, flores perfumadas, sementes e campos verdejantes</p>
            </div>
          </div>
        );

      case 'scene_05_stars':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900">
            {/* Stars, Sun & Moon */}
            <div className="absolute top-12 left-16 w-20 h-20 rounded-full bg-amber-400/80 shadow-[0_0_50px_20px_rgba(251,191,36,0.5)] flex items-center justify-center">
              <Sun className="w-10 h-10 text-amber-950" />
            </div>
            <div className="absolute top-14 right-20 w-16 h-16 rounded-full bg-slate-200/90 shadow-[0_0_40px_10px_rgba(226,232,240,0.4)] flex items-center justify-center">
              <Moon className="w-8 h-8 text-slate-800" />
            </div>
            <div className="relative z-10 text-center px-6 mt-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-900/60 border border-indigo-400/40 text-amber-200 text-xs font-semibold mb-3">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>"Deus conhece cada uma das estrelas"</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-brand">Sol, Lua e Constelações</h3>
              <p className="text-sm text-indigo-200/90 mt-1">Os grandes luminares para governar o dia e a noite</p>
            </div>
          </div>
        );

      case 'scene_06_seas':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-sky-800 via-blue-700 to-cyan-900">
            <div className="relative z-10 text-center px-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-cyan-400/20 border border-cyan-300/40 backdrop-blur-md flex items-center justify-center shadow-lg">
                <Waves className="w-10 h-10 text-cyan-200" />
              </div>
              <h3 className="text-2xl font-bold text-white font-brand">Vida nos Mares e Céus</h3>
              <p className="text-sm text-cyan-100/90 mt-1">Cardumes nadando e revoadas de pássaros voando livres</p>
            </div>
          </div>
        );

      case 'scene_07_animals':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-amber-950 via-stone-900 to-emerald-950">
            <div className="relative z-10 text-center px-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-amber-500/20 border border-amber-300/40 backdrop-blur-md flex items-center justify-center shadow-lg">
                <Crown className="w-10 h-10 text-amber-300" />
              </div>
              <h3 className="text-2xl font-bold text-amber-100 font-brand">Os Animais da Terra</h3>
              <p className="text-sm text-amber-200/90 mt-1">Leões, elefantes, girafas, cavalos e coelhos — cada um especial!</p>
            </div>
          </div>
        );

      case 'scene_08_human':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-rose-950 via-slate-900 to-amber-950">
            <div className="relative z-10 text-center px-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-rose-500/20 border border-rose-300/40 backdrop-blur-md flex items-center justify-center shadow-lg">
                <Heart className="w-10 h-10 text-rose-300" />
              </div>
              <h3 className="text-2xl font-bold text-rose-100 font-brand">À Imagem e Semelhança de Deus</h3>
              <p className="text-sm text-rose-200/90 mt-1">Criados com amor para cuidar da criação e viver em amizade com Deus</p>
            </div>
          </div>
        );

      case 'scene_09_very_good':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-emerald-900 via-teal-800 to-amber-900">
            <div className="relative z-10 text-center px-6">
              <div className="inline-block px-5 py-2 rounded-full bg-amber-400 text-slate-950 font-extrabold text-sm mb-4 shadow-xl font-brand">
                "E Deus viu que era MUITO BOM!"
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-brand">
                A Harmonia Perfeita
              </h3>
              <p className="text-sm text-emerald-100/90 mt-2">Tudo o que foi criado vibra com beleza, cor e vida</p>
            </div>
          </div>
        );

      case 'scene_10_rest':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-950">
            <div className="relative z-10 text-center px-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-indigo-500/20 border border-indigo-300/40 backdrop-blur-md flex items-center justify-center shadow-lg">
                <Compass className="w-10 h-10 text-indigo-200" />
              </div>
              <h3 className="text-2xl font-bold text-indigo-100 font-brand">O Sétimo Dia — O Descanso</h3>
              <p className="text-sm text-indigo-200/90 mt-1">A obra divina estava completa e abençoada com santa paz</p>
            </div>
          </div>
        );

      case 'scene_11_lesson':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-amber-600 via-orange-500 to-amber-800">
            <div className="relative z-10 text-center px-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950/40 text-amber-200 text-xs font-bold mb-3 border border-amber-300/30">
                <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
                <span>Nossa Missão Especial</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white font-brand">Cuidar do Mundo de Deus</h3>
              <p className="text-sm text-amber-100/90 mt-1 max-w-md mx-auto">
                "Você não está aqui por acaso. Tudo nos lembra que Deus é o Criador amoroso."
              </p>
            </div>
          </div>
        );

      case 'scene_12_outro':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-tr from-purple-900 via-amber-600 to-indigo-950">
            <div className="relative z-10 text-center px-6">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="w-24 h-24 mx-auto mb-4 rounded-3xl bg-amber-400 text-slate-950 flex items-center justify-center shadow-2xl shadow-amber-500/30 font-brand text-3xl font-black"
              >
                TTK
              </motion.div>
              <h2 className="text-3xl font-black tracking-tight text-white font-brand">
                TOON TALES KIDS
              </h2>
              <p className="text-amber-200 font-medium text-sm mt-1">A Bíblia em Áudio Infantil • Episódio 01</p>
            </div>
          </div>
        );

      // Season 5 Opening Visuals
      case 's5intro_01_silence':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-black" />
            <div className="relative z-10 text-center px-6 max-w-md">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [1, 1.05, 1], opacity: 1 }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-amber-500/20 border border-amber-400/40 backdrop-blur-md flex items-center justify-center shadow-2xl shadow-amber-500/20"
              >
                <BookOpen className="w-10 h-10 text-amber-300" />
              </motion.div>
              <span className="inline-block px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-[11px] font-bold text-amber-300 uppercase tracking-widest mb-2">
                O Chamado das Páginas Sagradas
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-amber-100 font-brand">
                Silêncio Reverente
              </h3>
              <p className="text-xs text-slate-300 mt-1">Uma Bíblia se abre sobre a mesa...</p>
            </div>
          </div>
        );

      case 's5intro_02_bible':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-indigo-950 via-sky-950 to-slate-950">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 rounded-full bg-amber-400/10 blur-3xl animate-pulse" />
            </div>
            <div className="relative z-10 text-center px-6 max-w-lg">
              <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-sky-300" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-brand">
                Você Já Imaginou?
              </h3>
              <p className="text-sm text-sky-200/90 mt-2 font-medium">
                Ter coragem quando todos estão com medo. Continuar acreditando no impossível.
              </p>
            </div>
          </div>
        );

      case 's5intro_03_enoch':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-emerald-950 via-teal-900 to-amber-950">
            <div className="relative z-10 text-center px-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-emerald-500/20 border border-emerald-300/40 backdrop-blur-md flex items-center justify-center shadow-lg">
                <Sun className="w-10 h-10 text-amber-300" />
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-400/40 text-xs font-bold text-emerald-200 mb-2">
                Gênesis 5:24 • Jó 19:25
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-emerald-100 font-brand">
                Enoque & Jó
              </h3>
              <p className="text-sm text-emerald-200/90 mt-1">O homem que andou com Deus e a esperança inabalável</p>
            </div>
          </div>
        );

      case 's5intro_05_gideon':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-amber-950 via-slate-900 to-indigo-950">
            <div className="relative z-10 text-center px-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-amber-500/20 border border-amber-400/40 backdrop-blur-md flex items-center justify-center shadow-lg">
                <Flame className="w-10 h-10 text-amber-400" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-amber-100 font-brand">
                Gideão & Daniel
              </h3>
              <p className="text-sm text-amber-200/90 mt-1">O menor que Deus ergueu e a oração inegociável na cova dos leões</p>
            </div>
          </div>
        );

      case 's5intro_07_esther':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-950 via-rose-950 to-amber-950">
            <div className="relative z-10 text-center px-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-rose-500/20 border border-rose-300/40 backdrop-blur-md flex items-center justify-center shadow-lg">
                <Crown className="w-10 h-10 text-amber-300" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-rose-100 font-brand">
                Ester, Rute e Maria
              </h3>
              <p className="text-sm text-rose-200/90 mt-1">Coragem no palácio, fidelidade na colheita e obediência fiel</p>
            </div>
          </div>
        );

      case 's5intro_10_montage':
      case 's5intro_11_faith':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-amber-950">
            <div className="relative z-10 text-center px-6 max-w-lg">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-2xl shadow-amber-400/40 font-black">
                <Heart className="w-10 h-10 fill-current text-slate-950" />
              </div>
              <span className="inline-block px-4 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-200 text-xs font-bold mb-2">
                A Força que Vence o Mundo
              </span>
              <h3 className="text-3xl font-black text-white font-brand tracking-wide">
                UMA FÉ VIVA
              </h3>
              <p className="text-sm text-amber-200/90 mt-2">
                Fé para continuar, obedecer, perdoar, recomeçar e confiar.
              </p>
            </div>
          </div>
        );

      case 's5intro_12_title':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-amber-600 via-orange-600 to-indigo-950">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 rounded-full bg-amber-300/30 blur-3xl animate-ping" style={{ animationDuration: '3s' }} />
            </div>
            <div className="relative z-10 text-center px-6">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: [0.95, 1.05, 1] }}
                transition={{ duration: 1.5 }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-950/60 border border-amber-300 text-amber-200 text-xs font-black uppercase tracking-widest mb-3 shadow-xl"
              >
                <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                Temporada 5
                <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
              </motion.div>
              <h2 className="text-4xl sm:text-5xl font-black text-white drop-shadow-lg font-brand tracking-tight">
                HERÓIS DA FÉ
              </h2>
              <p className="text-base text-amber-100 font-bold mt-2">
                Pessoas Comuns. Grandes Desafios. Uma Fé Extraordinária.
              </p>
            </div>
          </div>
        );

      case 's5intro_13_first_hero':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-sky-900 via-emerald-800 to-amber-900">
            <div className="relative z-10 text-center px-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-amber-400 text-slate-950 flex items-center justify-center shadow-xl font-brand font-black text-2xl">
                TTK
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-brand">
                TOON TALES KIDS
              </h3>
              <p className="text-amber-200 font-bold text-sm mt-1">
                Episódio 30: Enoque — O Homem que Andou com Deus
              </p>
            </div>
          </div>
        );

      // Episode 30 (Enoch) Visuals
      case 's5e1_01_intro':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-stone-900 via-slate-900 to-amber-950">
            <div className="relative z-10 text-center px-6 max-w-lg">
              <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center">
                <Compass className="w-8 h-8 text-amber-300" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-amber-100 font-brand">
                Um Mundo Agitado e Barulhento
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Cidades apressadas, ferramentas soando... e corações que se esqueciam do Criador.
              </p>
            </div>
          </div>
        );

      case 's5e1_02_generation':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-sky-900 via-teal-800 to-emerald-950">
            <div className="relative z-10 text-center px-6 max-w-lg">
              <div className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
                <Sun className="w-10 h-10 text-amber-300" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-brand">
                O Homem na Colina
              </h3>
              <p className="text-sm text-emerald-100/90 mt-2">
                Longe do tumulto, Enoque contemplava a alvorada com gratidão sincera.
              </p>
            </div>
          </div>
        );

      case 's5e1_03_enoch_walk':
      case 's5e1_04_fatherhood':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-amber-900 via-orange-800 to-slate-950">
            <div className="relative z-10 text-center px-6 max-w-lg">
              <div className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-amber-400/20 border border-amber-300/40 flex items-center justify-center">
                <Heart className="w-10 h-10 text-amber-300" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-amber-100 font-brand">
                O Amor que Desperta o Coração
              </h3>
              <p className="text-sm text-amber-200/90 mt-2">
                Ao segurar o pequeno Metusalém nos braços, Enoque decidiu: "Andarei com Deus todos os meus dias!"
              </p>
            </div>
          </div>
        );

      case 's5e1_05_decision':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-emerald-900 via-teal-900 to-amber-950">
            <div className="relative z-10 text-center px-6">
              <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center">
                <Trees className="w-8 h-8 text-emerald-300" />
              </div>
              <h3 className="text-2xl font-black text-white font-brand">
                Amizade na Vida Real
              </h3>
              <p className="text-sm text-emerald-200/90 mt-1 max-w-md mx-auto">
                No trabalho do campo, à mesa com a família e em cada escolha simples do dia a dia.
              </p>
            </div>
          </div>
        );

      case 's5e1_06_mockery':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-stone-900 via-slate-900 to-indigo-950">
            <div className="relative z-10 text-center px-6 max-w-md">
              <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                <Shield className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-black text-slate-100 font-brand">
                Firme Diante da Zombaria
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                "A verdadeira riqueza não é o ouro que enferruja, mas a paz de ter Deus como amigo."
              </p>
            </div>
          </div>
        );

      case 's5e1_07_faith_action':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-indigo-950 via-slate-900 to-amber-950">
            <div className="relative z-10 text-center px-6">
              <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center">
                <Flame className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-black text-amber-100 font-brand">
                O Testemunho da Verdade
              </h3>
              <p className="text-sm text-amber-200/90 mt-1">
                Ensinando aos filhos e amigos sobre a justiça e o amor de Deus.
              </p>
            </div>
          </div>
        );

      case 's5e1_08_sunset_walk':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-amber-600 via-orange-700 to-indigo-950">
            <div className="relative z-10 text-center px-6">
              <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-amber-400/20 border border-amber-300/40 flex items-center justify-center">
                <Sun className="w-8 h-8 text-amber-300" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-brand">
                Trezentos Anos de Fidelidade
              </h3>
              <p className="text-sm text-amber-100/90 mt-1">
                Uma amizade com Deus que nunca envelheceu.
              </p>
            </div>
          </div>
        );

      case 's5e1_09_climax_take':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-amber-400 via-amber-600 to-indigo-950">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[500px] h-[500px] rounded-full bg-amber-200/30 blur-3xl animate-pulse" />
            </div>
            <div className="relative z-10 text-center px-6 max-w-lg">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                className="inline-block px-5 py-2 rounded-full bg-slate-950/60 border border-amber-200 text-amber-200 text-xs font-black uppercase tracking-widest mb-3 shadow-2xl"
              >
                Gênesis 5:24
              </motion.div>
              <h2 className="text-3xl sm:text-4xl font-black text-white drop-shadow-xl font-brand">
                "Deus o Tomou Para Si!"
              </h2>
              <p className="text-sm sm:text-base text-amber-100 font-bold mt-2 leading-relaxed">
                Enoque andou tão perto de Deus que foi acolhido direto nos braços do Criador.
              </p>
            </div>
          </div>
        );

      case 's5e1_10_missing':
      case 's5e1_11_testimony':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900">
            <div className="relative z-10 text-center px-6 max-w-md">
              <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-amber-400/20 border border-amber-300/40 flex items-center justify-center">
                <Award className="w-8 h-8 text-amber-300" />
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-indigo-900/60 border border-indigo-400/40 text-[11px] font-bold text-amber-200 uppercase tracking-wider mb-2">
                Hebreus 11:5
              </span>
              <h3 className="text-2xl font-black text-white font-brand">
                "Ele Agradou a Deus!"
              </h3>
              <p className="text-xs sm:text-sm text-indigo-200/90 mt-1">
                O maior testemunho que qualquer pessoa pode alcançar no céu e na terra.
              </p>
            </div>
          </div>
        );

      case 's5e1_12_lesson':
      case 's5e1_13_children':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-sky-900 via-indigo-900 to-amber-950">
            <div className="relative z-10 text-center px-6 max-w-lg">
              <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-sky-500/20 border border-sky-300/40 flex items-center justify-center">
                <Heart className="w-8 h-8 text-sky-200 fill-sky-200/30" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-brand">
                Como Andar com Deus Hoje?
              </h3>
              <p className="text-xs sm:text-sm text-sky-100/90 mt-2 leading-relaxed">
                Na escola, ao perdoar, ao falar a verdade e na oração sincera antes de dormir.
              </p>
            </div>
          </div>
        );

      case 's5e1_14_hook_job':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-amber-700 via-orange-800 to-slate-950">
            <div className="relative z-10 text-center px-6">
              <div className="w-20 h-20 mx-auto mb-3 rounded-3xl bg-amber-400 text-slate-950 flex items-center justify-center shadow-xl font-brand font-black text-2xl">
                TTK
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-brand">
                Próximo Herói da Fé: JÓ!
              </h3>
              <p className="text-amber-200 font-bold text-sm mt-1">
                "Eu sei que o meu Redentor vive!"
              </p>
            </div>
          </div>
        );

      default:
        // Universal cinematic adaptive fallback for any episode scene
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-slate-950/60 to-black animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="relative z-10 text-center px-6 max-w-lg">
              <div className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-white/10 border border-amber-300/30 backdrop-blur-md flex items-center justify-center shadow-lg">
                <Sparkles className="w-10 h-10 text-amber-300" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-brand drop-shadow-md">
                {scene.title}
              </h3>
              <p className="text-sm text-amber-200/90 mt-2 font-medium">
                {scene.subtitle}
              </p>
              {scene.environmentSummary && (
                <p className="text-xs text-slate-400 mt-2 line-clamp-2 italic">
                  {scene.environmentSummary}
                </p>
              )}
            </div>
          </div>
        );
    }
  };

  return (
    <div id="cinematic-stage" className="relative w-full rounded-[32px] sm:rounded-[36px] overflow-hidden bg-slate-900 border-4 sm:border-8 border-white shadow-xl aspect-[16/9] min-h-[380px] flex flex-col justify-between">
      {/* Dynamic Background Illustration */}
      <div className="absolute inset-0 z-0">
        {renderVisualIllustration()}
      </div>

      {/* Top Header Overlay */}
      <div className="relative z-20 p-4 sm:p-6 flex items-start justify-between gap-4 bg-gradient-to-b from-slate-950/70 via-slate-950/20 to-transparent">
        <div className="flex items-center gap-3">
          <span className={`px-3.5 py-1 rounded-full text-xs font-black border-2 backdrop-blur-md uppercase tracking-wider shadow-sm ${getSceneBadgeColor()}`}>
            {scene.biblicalDay || `Cena ${scene.sceneNumber}`}
          </span>
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-800 font-bold bg-white/90 px-3.5 py-1 rounded-full border border-slate-200 backdrop-blur-md shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-orange-500" />
            <span>{scene.biblicalRef}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {isPlaying && (
            <span className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500 text-white border border-emerald-400 text-xs font-black shadow-md shadow-emerald-200 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              Áudio Ativo
            </span>
          )}
        </div>
      </div>

      {/* Live Teleprompter Subtitles Overlay */}
      <div className="relative z-20 px-4 sm:px-10 pb-4 text-center max-w-3xl mx-auto w-full">
        <AnimatePresence mode="wait">
          {currentLine ? (
            <motion.div
              key={currentLine.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className={`backdrop-blur-md border-2 p-4 sm:p-5 rounded-3xl shadow-xl transition-all ${
                currentLine.isInteractivePrompt
                  ? 'bg-amber-50/95 border-amber-400 ring-4 ring-amber-300/40 shadow-amber-900/20'
                  : 'bg-white/95 border-orange-200 shadow-xl'
              }`}
            >
              {currentLine.isInteractivePrompt ? (
                <div className="space-y-3">
                  {/* Interactive Question Badge */}
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black bg-amber-500 text-slate-950 uppercase tracking-wider shadow-sm animate-pulse">
                      <Sparkles className="w-3.5 h-3.5 text-yellow-100 fill-current" />
                      Momento Interativo • Sua Vez de Falar!
                    </span>
                    <span className="text-[11px] font-bold text-amber-900 bg-amber-200/80 px-2.5 py-0.5 rounded-full border border-amber-300">
                      Pausa para você responder em voz alta
                    </span>
                  </div>

                  {/* Question Text */}
                  <p className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-relaxed font-brand">
                    {currentLine.text}
                  </p>

                  {/* Interactive Options Choice Chips */}
                  {currentLine.interactiveOptions && currentLine.interactiveOptions.length > 0 && (
                    <div className="pt-2 border-t border-amber-200/80">
                      <p className="text-xs text-amber-950 font-bold mb-2 flex items-center justify-center gap-1.5">
                        <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                        Escolha uma opção ou fale em voz alta:
                      </p>
                      <div className="flex flex-wrap items-center justify-center gap-2">
                        {currentLine.interactiveOptions.map((opt) => {
                          const isSelected = selectedOption === opt;
                          return (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => handleOptionClick(opt)}
                              className={`px-3.5 py-1.5 rounded-2xl text-xs font-bold transition-all duration-200 border-2 active:scale-95 flex items-center gap-1.5 ${
                                isSelected
                                  ? 'bg-emerald-500 text-white border-emerald-600 shadow-md shadow-emerald-200 ring-2 ring-emerald-300 scale-105'
                                  : 'bg-white hover:bg-amber-100 text-slate-800 border-amber-300 shadow-sm hover:border-amber-400'
                              }`}
                            >
                              {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                              <span>{opt}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Bottom helper and skip pause button */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-xs text-amber-900 font-semibold border-t border-amber-200/60">
                    <span className="flex items-center gap-1 text-[11px] text-amber-800">
                      <Volume2 className="w-3.5 h-3.5 text-amber-600" />
                      {selectedOption ? (
                        <span className="text-emerald-700 font-bold">
                          Você escolheu <strong>{selectedOption}</strong>! A criança vai responder...
                        </span>
                      ) : (
                        <span>{currentLine.childAnswerHint || 'A voz da criança vai responder com a dela!'}</span>
                      )}
                    </span>

                    {isPlaying && isPauseActive && (
                      <button
                        type="button"
                        onClick={handleSkipPause}
                        className="px-3 py-1 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-black flex items-center gap-1 transition-all active:scale-95 shadow-sm"
                      >
                        <span>Ouvir Resposta</span>
                        <FastForward className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className={`px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                      currentLine.character === 'god'
                        ? 'bg-amber-100 text-amber-900 border border-amber-300'
                        : currentLine.character === 'child'
                        ? 'bg-sky-100 text-sky-800 border border-sky-300'
                        : 'bg-indigo-100 text-indigo-800 border border-indigo-300'
                    }`}>
                      {currentLine.characterLabel}
                    </span>
                    {currentLine.pauseType && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-500 border border-slate-200 font-semibold">
                        [{currentLine.pauseType}]
                      </span>
                    )}
                  </div>

                  <p className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-relaxed font-brand">
                    {currentLine.text}
                  </p>

                  {currentLine.emotionGuide && (
                    <p className="text-xs text-orange-700 font-medium italic mt-1.5 flex items-center justify-center gap-1">
                      <Volume2 className="w-3.5 h-3.5 text-orange-500" />
                      Direção vocal: {currentLine.emotionGuide}
                    </p>
                  )}
                </>
              )}
            </motion.div>
          ) : (
            <div className="bg-white/90 backdrop-blur-sm border-2 border-orange-200 px-5 py-3 rounded-2xl inline-block shadow-sm">
              <p className="text-sm text-slate-700 font-bold">
                Pressione <strong className="text-orange-600">Tocar Episódio</strong> para iniciar a narrativa cinematográfica
              </p>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Spectrum Visualizer Bar */}
      <div className="relative z-20 h-10 w-full px-4 flex items-end">
        <canvas
          ref={canvasRef}
          width={400}
          height={32}
          className="w-full h-8 opacity-90"
        />
      </div>
    </div>
  );
};
