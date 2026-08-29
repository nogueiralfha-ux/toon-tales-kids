import React, { useState } from 'react';
import { Scene } from '../types';
import { audioEngine } from '../services/audioEngine';
import { Play, Pause, RotateCcw, SkipBack, SkipForward, Sliders, Moon, Volume2, Sparkles, HelpCircle, CheckCircle2 } from 'lucide-react';

interface AudioPlayerControlsProps {
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
  const [testStatus, setTestStatus] = useState<string | null>(null);
  const [showTroubleshoot, setShowTroubleshoot] = useState<boolean>(false);
  const speedOptions = [0.85, 0.95, 1.0, 1.1];

  const handleTestAudio = async () => {
    setTestStatus('Tocando teste...');
    const result = await audioEngine.testAudioSystem();
    if (result.speech || result.webAudio) {
      setTestStatus('Áudio ativado com sucesso! 🎶');
    } else {
      setTestStatus('Clique para desbloquear o som');
    }
    setTimeout(() => setTestStatus(null), 4000);
  };

  // Total duration calculation
  const totalDurationSec = allScenes.reduce((acc, s) => acc + s.estimatedDurationSec, 0);
  const elapsedDurationSec = allScenes
    .slice(0, currentSceneIndex)
    .reduce((acc, s) => acc + s.estimatedDurationSec, 0);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const progressPercent = Math.min(100, (elapsedDurationSec / totalDurationSec) * 100);

  return (
    <div id="audio-player-controls" className="w-full bg-white border-2 border-slate-100 rounded-3xl p-5 sm:p-7 shadow-md">
      {/* Timeline Progress Bar */}
      <div className="mb-5">
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-orange-600 font-extrabold font-brand">{currentScene.title}</span>
            <span className="text-slate-300">•</span>
            <span>Cena {currentSceneIndex + 1} de {allScenes.length}</span>
          </div>
          <div className="font-mono text-slate-600 font-semibold">
            {formatTime(elapsedDurationSec)} / {formatTime(totalDurationSec)} <span className="text-slate-400 font-normal">(Alvo: 8–10 min)</span>
          </div>
        </div>

        {/* Multi-segment Scene Scrubber */}
        <div className="grid grid-cols-12 gap-1 h-3.5 w-full bg-slate-100 p-0.5 rounded-full overflow-hidden border border-slate-200 shadow-inner">
          {allScenes.map((scene, idx) => {
            const isPassed = idx < currentSceneIndex;
            const isCurrent = idx === currentSceneIndex;
            return (
              <button
                key={scene.id}
                onClick={() => onSelectScene(idx)}
                title={`Cena ${scene.sceneNumber}: ${scene.title}`}
                className={`h-full rounded-sm transition-all duration-300 ${
                  isCurrent
                    ? 'bg-orange-500 ring-2 ring-orange-300 shadow-md'
                    : isPassed
                    ? 'bg-orange-300 hover:bg-orange-400'
                    : 'bg-slate-200 hover:bg-slate-300'
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Main Controls Row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Chapter / Scene Quick Selector */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <select
            value={currentSceneIndex}
            onChange={(e) => onSelectScene(Number(e.target.value))}
            className="w-full sm:w-60 bg-slate-50 border-2 border-slate-200 rounded-2xl px-3.5 py-2.5 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer shadow-sm"
          >
            {allScenes.map((scene, idx) => (
              <option key={scene.id} value={idx}>
                {scene.sceneNumber}. {scene.title} {scene.biblicalDay ? `(${scene.biblicalDay})` : ''}
              </option>
            ))}
          </select>
        </div>

        {/* Center: Play / Pause / Navigation Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            id="btn-restart"
            onClick={onRestart}
            title="Reiniciar episódio do início"
            className="p-3 rounded-2xl bg-white hover:bg-orange-50 text-slate-700 hover:text-orange-600 transition-colors border-2 border-slate-200 shadow-sm active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            id="btn-prev-scene"
            onClick={onPrevScene}
            disabled={currentSceneIndex === 0}
            title="Cena anterior"
            className="p-3 rounded-2xl bg-white hover:bg-orange-50 text-slate-700 hover:text-orange-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors border-2 border-slate-200 shadow-sm active:scale-95"
          >
            <SkipBack className="w-5 h-5" />
          </button>

          {/* Big Hero Play Button */}
          <button
            id="btn-play-pause"
            onClick={isPlaying ? onPause : onPlay}
            className={`px-7 py-3.5 rounded-2xl flex items-center gap-2.5 font-black font-brand text-base shadow-lg transition-all duration-200 active:scale-95 ${
              isPlaying
                ? 'bg-orange-600 hover:bg-orange-700 text-white shadow-orange-200'
                : 'bg-orange-500 hover:bg-orange-600 text-white shadow-orange-200 hover:scale-105'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-5 h-5 fill-current" />
                <span>Pausar</span>
              </>
            ) : (
              <>
                <Play className="w-5 h-5 fill-current" />
                <span>Tocar Episódio</span>
              </>
            )}
          </button>

          <button
            id="btn-next-scene"
            onClick={onNextScene}
            disabled={currentSceneIndex === allScenes.length - 1}
            title="Próxima cena"
            className="p-3 rounded-2xl bg-white hover:bg-orange-50 text-slate-700 hover:text-orange-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors border-2 border-slate-200 shadow-sm active:scale-95"
          >
            <SkipForward className="w-5 h-5" />
          </button>
        </div>

        {/* Right: Quick Tools (Speed, Mixer, Bedtime) */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          {/* Speed Selector */}
          <div className="flex items-center bg-slate-50 border-2 border-slate-200 rounded-2xl p-1 shadow-sm">
            {speedOptions.map((rate) => (
              <button
                key={rate}
                onClick={() => onChangeSpeed(rate)}
                className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-colors ${
                  Math.abs(speechRate - rate) < 0.03
                    ? 'bg-orange-500 text-white font-black shadow-sm'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {rate}x
              </button>
            ))}
          </div>

          {/* Open Mixer Modal Button */}
          <button
            id="btn-open-mixer"
            onClick={onOpenMixer}
            title="Mesa de Mixagem de Áudio (Vozes, Trilha, Efeitos, Ambientes)"
            className="p-3 rounded-2xl bg-white hover:bg-orange-50 text-slate-700 hover:text-orange-600 transition-colors border-2 border-slate-200 shadow-sm flex items-center gap-1.5 text-xs font-bold"
          >
            <Sliders className="w-4 h-4 text-orange-500" />
            <span className="hidden md:inline">Mixer</span>
          </button>

          {/* Open Bedtime Sleep Timer Button */}
          <button
            id="btn-open-bedtime"
            onClick={onOpenBedtime}
            title="Modo Hora de Dormir (Temporizador suave para crianças)"
            className="p-3 rounded-2xl bg-white hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 transition-colors border-2 border-slate-200 shadow-sm flex items-center gap-1.5 text-xs font-bold"
          >
            <Moon className="w-4 h-4 text-indigo-500" />
            <span className="hidden md:inline">Sono</span>
          </button>
        </div>
      </div>

      {/* Audio Quick Test & Diagnostic Strip */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleTestAudio}
            id="btn-test-sound"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-100 hover:bg-orange-200 text-orange-800 font-bold border border-orange-200 shadow-2xs active:scale-95 transition-all"
            title="Clique para testar se os alto-falantes e as vozes do navegador estão funcionando"
          >
            <Volume2 className="w-3.5 h-3.5 text-orange-600" />
            <span>Testar Som & Voz</span>
          </button>

          {testStatus && (
            <span className="text-emerald-700 font-bold flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 animate-fade-in">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              {testStatus}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => setShowTroubleshoot(!showTroubleshoot)}
          className="text-slate-500 hover:text-orange-600 font-medium flex items-center gap-1 transition-colors"
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Sem som? Veja como resolver</span>
        </button>
      </div>

      {/* Troubleshooting tips expandable */}
      {showTroubleshoot && (
        <div className="mt-3 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-slate-700 text-xs space-y-2 animate-fade-in">
          <div className="font-bold text-amber-900 flex items-center gap-1.5">
            <Volume2 className="w-4 h-4 text-amber-600" />
            Por que o som pode não estar saindo no seu navegador?
          </div>
          <ol className="list-decimal list-inside space-y-1 text-slate-700 font-medium pl-1">
            <li><strong>Permissão de Reprodução do Navegador:</strong> Navegadores modernos bloqueiam áudio automático até que você clique em <em>"Tocar Episódio"</em> ou <em>"Testar Som & Voz"</em> na página.</li>
            <li><strong>Aba ou Alto-falante Silenciado:</strong> Verifique se o volume do seu computador/celular está ligado e se a aba do navegador não está com o ícone de mudo (🔇).</li>
            <li><strong>Pacote de Voz do Sistema (TTS):</strong> A narração usa o sintetizador de voz em Português do seu dispositivo. Ao clicar em <em>"Testar Som"</em>, o navegador desbloqueia o motor Web Audio e a voz.</li>
            <li><strong>Volume no Mixer:</strong> Abra o botão <strong>Mixer</strong> acima para garantir que os volumes de <em>Vozes, Trilha Sonora, Ambientes e Efeitos</em> estejam aumentados.</li>
          </ol>
        </div>
      )}
    </div>
  );
};
