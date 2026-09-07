import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
  Sparkles,
  Award,
  CheckCircle,
  Headphones,
  Sliders,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../../contexts/AuthContext';
import { progressService } from '../../services/progressService';
import { audioEngine } from '../../services/audioEngine';
import { Episode, getEpisodeById } from '../../data/catalog';
import confetti from 'canvas-confetti';

interface SupabaseAudioPlayerProps {
  episodeId: string;
  onClose?: () => void;
  onEpisodeCompleted?: (episodeId: string) => void;
}

export const SupabaseAudioPlayer: React.FC<SupabaseAudioPlayerProps> = ({
  episodeId,
  onClose,
  onEpisodeCompleted,
}) => {
  const { user, activeKid, updateChildXp, markEpisodeCompletedForActiveChild } = useAuth();
  const episode: Episode | undefined = getEpisodeById(episodeId);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const duration = 600; // Mock 10 min
  const [volume, setVolume] = useState<number>(0.8);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [showCelebration, setShowCelebration] = useState<boolean>(false);

  const timerRef = useRef<any>(null);

  const targetUserId = activeKid?.id || user?.id || 'guest';

  // Load initial progress
  useEffect(() => {
    let mounted = true;
    async function loadProgress() {
      if (targetUserId) {
        const prog = await progressService.getEpisodeProgress(targetUserId, episodeId);
        if (mounted && prog) {
          if (prog.lastPositionSec > 0 && prog.lastPositionSec < duration) {
            setCurrentTime(prog.lastPositionSec);
          }
          if (prog.status === 'COMPLETED') {
            setIsCompleted(true);
          }
        }
      }
    }
    loadProgress();
    return () => {
      mounted = false;
    };
  }, [episodeId, targetUserId, duration]);

  // Audio Playback Timer Simulation & Engine Sync
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          const next = prev + 1 * playbackRate;
          if (next >= duration) {
            setIsPlaying(false);
            handleComplete();
            return duration;
          }

          // Calculate percent
          const percent = Math.min(100, Math.round((next / duration) * 100));

          // Save progress
          if (targetUserId) {
            progressService.saveProgress(targetUserId, episodeId, percent, Math.round(next));
          }

          // If reached 90% and not completed yet
          if (percent >= 90 && !isCompleted) {
            handleComplete();
          }

          return next;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, duration, playbackRate, isCompleted, targetUserId, episodeId]);

  const handleComplete = () => {
    if (isCompleted) return;
    setIsCompleted(true);
    setShowCelebration(true);

    // Save 100% progress
    if (targetUserId) {
      progressService.saveProgress(targetUserId, episodeId, 100, duration, true);
    }

    // Award XP
    updateChildXp(100, `Conclusão do episódio ${episode?.title || episodeId}`);
    markEpisodeCompletedForActiveChild(episodeId);

    // Confetti effect
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#ec4899', '#3b82f6', '#10b981'],
      });
    } catch {}

    if (onEpisodeCompleted) {
      onEpisodeCompleted(episodeId);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioEngine.pauseEpisode();
    } else {
      audioEngine.resumeEpisode();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    const percent = Math.min(100, Math.round((newTime / duration) * 100));
    if (targetUserId) {
      progressService.saveProgress(targetUserId, episodeId, percent, Math.round(newTime));
    }
  };

  const skipTime = (seconds: number) => {
    setCurrentTime((prev) => {
      const next = Math.max(0, Math.min(duration, prev + seconds));
      const percent = Math.min(100, Math.round((next / duration) * 100));
      if (targetUserId) {
        progressService.saveProgress(targetUserId, episodeId, percent, Math.round(next));
      }
      return next;
    });
  };

  const formatTime = (secs: number): string => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercent = Math.min(100, Math.round((currentTime / duration) * 100));

  return (
    <div className="relative w-full max-w-2xl mx-auto bg-slate-900/95 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-amber-500/10 backdrop-blur-xl text-white">
      {/* Celebration Popup */}
      <AnimatePresence>
        {showCelebration && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 z-20 bg-slate-950/90 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center p-6 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-slate-950 mb-3 shadow-lg shadow-amber-500/40">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-amber-300 mb-1">Parabéns, Aventureiro!</h3>
            <p className="text-sm text-slate-300 mb-4 max-w-sm">
              Você completou esta história bíblica e ganhou{' '}
              <span className="font-bold text-amber-400">+100 XP</span> de fé e sabedoria!
            </p>
            <button
              onClick={() => setShowCelebration(false)}
              className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              Continuar Ouvindo
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Episode Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-slate-800 shrink-0 border border-amber-500/30 shadow-md">
          <div className={`w-full h-full ${episode?.cardImageTheme || 'bg-slate-700'} flex items-center justify-center`}>
            <span className="text-white font-black font-brand text-2xl">T{episode?.seasonNumber}</span>
          </div>
          {isCompleted && (
            <div className="absolute top-1 right-1 bg-emerald-500 text-slate-950 p-1 rounded-full shadow">
              <CheckCircle className="w-3.5 h-3.5" />
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-400 font-bold text-[10px] uppercase tracking-wider">
              {episode?.seasonId ? `Temporada ${episode.seasonId.replace('t', '')}` : 'Áudio Bíblico'}
            </span>
            <span className="text-xs text-slate-400">• {progressPercent}% Ouvido</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white truncate">
            {episode?.title || 'História Bíblica Interativa'}
          </h3>
          <p className="text-xs text-slate-400 truncate">{episode?.subtitle || 'Áudio imersivo com efeitos 3D'}</p>
        </div>
      </div>

      {/* Progress Bar with timestamps */}
      <div className="mb-6">
        <div className="relative w-full">
          <input
            type="range"
            min="0"
            max={duration}
            step="1"
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400 hover:accent-amber-300"
          />
        </div>
        <div className="flex justify-between items-center text-[11px] font-mono text-slate-400 mt-1.5">
          <span>{formatTime(currentTime)}</span>
          <span className="text-amber-400 font-semibold">{progressPercent}%</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Player Controls */}
      <div className="flex items-center justify-between">
        {/* Playback Rate */}
        <button
          onClick={() => {
            const rates = [0.8, 1.0, 1.2, 1.5];
            const nextIdx = (rates.indexOf(playbackRate) + 1) % rates.length;
            setPlaybackRate(rates[nextIdx]);
          }}
          className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono font-bold text-amber-400 border border-slate-700 transition-colors"
        >
          {playbackRate}x
        </button>

        {/* Main Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={() => skipTime(-10)}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
            title="Voltar 10s"
          >
            <RotateCcw className="w-5 h-5" />
          </button>

          <button
            onClick={togglePlay}
            className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/30 hover:scale-105 transition-all"
          >
            {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-0.5" />}
          </button>

          <button
            onClick={() => skipTime(10)}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
            title="Avançar 10s"
          >
            <RotateCw className="w-5 h-5" />
          </button>
        </div>

        {/* Volume button toggle */}
        <button
          onClick={() => setVolume(volume > 0 ? 0 : 0.8)}
          className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
        >
          {volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
};
