import React from 'react';
import { AudioMixSettings } from '../types';
import { audioEngine } from '../services/audioEngine';
import { Sliders, X, Volume2, Music, Trees, Sparkles, Mic, RotateCcw, Check } from 'lucide-react';

interface AudioMixerModalProps {
  isOpen: boolean;
  settings: AudioMixSettings;
  onClose: () => void;
  onUpdateSettings: (newSettings: Partial<AudioMixSettings>) => void;
}

export const AudioMixerModal: React.FC<AudioMixerModalProps> = ({
  isOpen,
  settings,
  onClose,
  onUpdateSettings,
}) => {
  if (!isOpen) return null;

  const handleResetDefaults = () => {
    onUpdateSettings({
      master: 0.9,
      voice: 1.0,
      music: 0.20,
      ambience: 0.35,
      sfx: 0.65,
      autoDucking: true,
      godVoiceReverb: true,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-lg bg-white border-2 border-slate-100 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-orange-100 text-orange-600 border border-orange-200 shadow-sm">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900 font-brand">Mesa de Mixagem Cinematográfica</h3>
              <p className="text-xs text-slate-500 font-semibold">Padrão de Qualidade Master Toon Tales Kids</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-2xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Master Rule Banner */}
        <div className="bg-orange-50 border-2 border-orange-200 p-4 rounded-2xl text-xs text-orange-950 leading-relaxed font-medium shadow-sm">
          <strong className="block mb-0.5 text-orange-600 font-black font-brand text-sm">Regra de Mixagem Toon Tales:</strong>
          A voz é a prioridade absoluta (100%), e a trilha sonora é calibrada entre 15% e 25% para total inteligibilidade e conforto das crianças.
        </div>

        {/* Sliders */}
        <div className="space-y-3.5">
          {/* Voice Volume */}
          <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border-2 border-slate-100">
            <div className="flex items-center justify-between text-xs font-bold text-slate-800">
              <span className="flex items-center gap-1.5 text-orange-600 font-black">
                <Mic className="w-4 h-4" />
                1. Voz dos Personagens (Narrador, Deus, Criança)
              </span>
              <span className="font-mono text-orange-600 font-black text-sm">{Math.round(settings.voice * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={settings.voice}
              onChange={(e) => onUpdateSettings({ voice: parseFloat(e.target.value) })}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
          </div>

          {/* Music Volume (15-25% recommended) */}
          <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border-2 border-slate-100">
            <div className="flex items-center justify-between text-xs font-bold text-slate-800">
              <span className="flex items-center gap-1.5 text-purple-600 font-black">
                <Music className="w-4 h-4" />
                2. Trilha Sonora Orquestral
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 border border-purple-200 font-bold">
                  Ideal 15–25%
                </span>
              </span>
              <span className="font-mono text-purple-600 font-black text-sm">{Math.round(settings.music * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="0.6"
              step="0.02"
              value={settings.music}
              onChange={(e) => onUpdateSettings({ music: parseFloat(e.target.value) })}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
          </div>

          {/* Ambience Volume */}
          <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border-2 border-slate-100">
            <div className="flex items-center justify-between text-xs font-bold text-slate-800">
              <span className="flex items-center gap-1.5 text-emerald-600 font-black">
                <Trees className="w-4 h-4" />
                3. Ambientes Naturais (Ondas, Vento, Floresta)
              </span>
              <span className="font-mono text-emerald-600 font-black text-sm">{Math.round(settings.ambience * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={settings.ambience}
              onChange={(e) => onUpdateSettings({ ambience: parseFloat(e.target.value) })}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
          </div>

          {/* SFX / Foley Volume */}
          <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border-2 border-slate-100">
            <div className="flex items-center justify-between text-xs font-bold text-slate-800">
              <span className="flex items-center gap-1.5 text-sky-600 font-black">
                <Sparkles className="w-4 h-4" />
                4. Efeitos Especiais & Foley (Luz, Estrelas, Animais)
              </span>
              <span className="font-mono text-sky-600 font-black text-sm">{Math.round(settings.sfx * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={settings.sfx}
              onChange={(e) => onUpdateSettings({ sfx: parseFloat(e.target.value) })}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-500"
            />
          </div>
        </div>

        {/* Character Voice Testing Panel */}
        <div className="bg-amber-50/70 border border-amber-200 p-4 rounded-2xl space-y-2">
          <span className="text-xs font-bold text-amber-950 block">
            Testar Vozes Individuais dos Personagens:
          </span>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => {
                audioEngine.speakLine({
                  id: 'test-narrator',
                  character: 'narrator',
                  characterLabel: 'Narrador',
                  text: 'No princípio, Deus criou os céus e a terra.',
                });
              }}
              className="px-2.5 py-2 rounded-xl bg-white hover:bg-indigo-50 text-indigo-900 border border-indigo-200 text-xs font-bold transition-all active:scale-95 text-center shadow-2xs"
            >
              🎙️ Narrador
            </button>

            <button
              type="button"
              onClick={() => {
                audioEngine.speakLine({
                  id: 'test-god',
                  character: 'god',
                  characterLabel: 'Voz de Deus',
                  text: 'Haja luz!',
                });
              }}
              className="px-2.5 py-2 rounded-xl bg-white hover:bg-amber-50 text-amber-950 border border-amber-300 text-xs font-black transition-all active:scale-95 text-center shadow-2xs"
            >
              👑 Voz de Deus
            </button>

            <button
              type="button"
              onClick={() => {
                audioEngine.speakLine({
                  id: 'test-child',
                  character: 'child',
                  characterLabel: 'Criança',
                  text: 'Uau! Que lindo tudo o que Deus fez!',
                });
              }}
              className="px-2.5 py-2 rounded-xl bg-white hover:bg-sky-50 text-sky-900 border border-sky-200 text-xs font-bold transition-all active:scale-95 text-center shadow-2xs"
            >
              ⭐ Voz da Criança
            </button>
          </div>
        </div>

        {/* Toggles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <label className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border-2 border-slate-100 text-xs font-bold text-slate-800 cursor-pointer hover:border-slate-200 transition-colors">
            <span>Ducking Automático</span>
            <input
              type="checkbox"
              checked={settings.autoDucking}
              onChange={(e) => onUpdateSettings({ autoDucking: e.target.checked })}
              className="w-4 h-4 accent-orange-500 rounded"
            />
          </label>

          <label className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border-2 border-slate-100 text-xs font-bold text-slate-800 cursor-pointer hover:border-slate-200 transition-colors">
            <span>Harmônicos da Voz de Deus</span>
            <input
              type="checkbox"
              checked={settings.godVoiceReverb}
              onChange={(e) => onUpdateSettings({ godVoiceReverb: e.target.checked })}
              className="w-4 h-4 accent-orange-500 rounded"
            />
          </label>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-2 border-t-2 border-slate-100">
          <button
            onClick={handleResetDefaults}
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-orange-600 font-bold transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restaurar Padrão Master</span>
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-black font-brand text-xs flex items-center gap-1.5 transition-colors shadow-md shadow-orange-200"
          >
            <Check className="w-4 h-4" />
            <span>Salvar & Fechar</span>
          </button>
        </div>
      </div>
    </div>
  );
};
