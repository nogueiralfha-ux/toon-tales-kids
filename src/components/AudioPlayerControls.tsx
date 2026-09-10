import React, { useState, useRef, useEffect } from 'react';
import { Scene } from '../types';
import { Play, Pause, RotateCcw, SkipBack, SkipForward, Sliders, Moon, Volume2, Sparkles, HelpCircle, CheckCircle2, FastForward } from 'lucide-react';

interface AudioPlayerControlsProps {
  audioUrl?: string;
  isPlaying: boolean;
  currentScene: Scene;
  allScenes: Scene[];
  currentSceneIndex: number;
  speechRate: number;
  onPlay: () => void;
  onPause: () => void;
  onRestart: () => void;
  onNextScene: () => void;
  onPrevScene: () => void;
  onSelectScene: (index: number) => void;
  onOpenMixer: () => void;
  onOpenBedtime: () => void;
  onChangeSpeed: (rate: number) => void;
}

export const AudioPlayerControls: React.FC<AudioPlayerControlsProps> = ({
  audioUrl,
  isPlaying,
  currentScene,
  allScenes,
  currentSceneIndex,
  speechRate,
  onPlay,
  onPause,
  onRestart,
  onNextScene,
  onPrevScene,
  onSelectScene,
  onOpenMixer,
  onOpenBedtime,
  onChangeSpeed,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const speedOptions = [0.75, 1.0, 1.25, 1.5];

  // Sincroniza o play/pause do React com a tag de áudio HTML5
  useEffect(() => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.play().catch(e => {
        console.warn('Reprodução bloqueada pelo navegador', e);
        onPause();
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioUrl]);

  // Sincroniza a velocidade
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = speechRate;
    }
  }, [speechRate]);

  // Atualiza o progresso
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleRestartAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
    }
    onRestart();
  };

  // Skip progress 15 seconds
  const handleSkip = (seconds: number) => {
    if (audioRef.current) {
      let newTime = audioRef.current.currentTime + seconds;
      if (newTime < 0) newTime = 0;
      if (newTime > duration) newTime = duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return (
    <div id="audio-player-controls" className="w-full bg-white border-2 border-slate-100 rounded-3xl p-5 sm:p-7 shadow-md select-none relative overflow-hidden">
      
      {/* Tag de Áudio Nativa Invisível */}
      {audioUrl && (
        <audio
          ref={audioRef}
          src={audioUrl}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={onPause}
        />
      )}

      {!audioUrl && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center">
          <p className="text-orange-600 font-bold text-center">Áudio não disponível para este episódio.</p>
        </div>
      )}

      {/* Timeline Progress Bar (Modificada para o MP3 Completo) */}
      <div className="mb-5">
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-orange-600 font-extrabold font-brand">{currentScene.title || 'Superprodução Completa'}</span>
          </div>
          <div className="font-mono text-slate-600 font-semibold">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>

        {/* SeekBar Nativa */}
        <input
          type="range"
          min={0}
          max={duration || 100}
          value={currentTime}
          onChange={handleSeek}
          className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
        />
      </div>

      {/* Main Controls Row */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        
        {/* Velocidade */}
        <div className="flex items-center gap-2 border-2 border-slate-100 bg-slate-50 rounded-xl p-1 shadow-inner">
          {speedOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => onChangeSpeed(opt)}
              className={`px-3 py-1.5 rounded-lg text-xs font-black font-brand transition-all ${
                speechRate === opt
                  ? 'bg-white text-orange-600 shadow-sm ring-1 ring-orange-200'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
              }`}
            >
              {opt}x
            </button>
          ))}
        </div>

        {/* Center: Play / Pause / Navigation Buttons */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={() => handleSkip(-15)}
            title="Voltar 15 segundos"
            className="p-3 rounded-2xl bg-white hover:bg-orange-50 text-slate-700 hover:text-orange-600 transition-colors border-2 border-slate-200 shadow-sm active:scale-95"
          >
            <RotateCcw className="w-5 h-5" />
          </button>

          {/* Big Hero Play Button */}
          <button
            onClick={isPlaying ? onPause : onPlay}
            className={`px-10 py-4 rounded-3xl flex items-center gap-2.5 font-black font-brand text-lg sm:text-xl shadow-lg transition-all duration-200 active:scale-95 ${
              isPlaying
                ? 'bg-orange-600 hover:bg-orange-700 text-white shadow-orange-300'
                : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white shadow-orange-300 hover:scale-105 ring-4 ring-orange-200'
            }`}
          >
            {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
          </button>

          <button
            onClick={() => handleSkip(15)}
            title="Avançar 15 segundos"
            className="p-3 rounded-2xl bg-white hover:bg-orange-50 text-slate-700 hover:text-orange-600 transition-colors border-2 border-slate-200 shadow-sm active:scale-95"
          >
            <FastForward className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
