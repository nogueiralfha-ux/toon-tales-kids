import React, { useState, useEffect } from 'react';
import { Moon, X, Clock, Check, Sparkles, VolumeX } from 'lucide-react';
import { audioEngine } from '../services/audioEngine';

interface BedtimeModeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTimerSet: (minutes: number) => void;
  activeMinutesLeft: number | null;
  onCancelTimer: () => void;
}

export const BedtimeModeModal: React.FC<BedtimeModeModalProps> = ({
  isOpen,
  onClose,
  onTimerSet,
  activeMinutesLeft,
  onCancelTimer,
}) => {
  if (!isOpen) return null;

  const timerOptions = [
    { label: '5 Minutos', value: 5, desc: 'Ideal para um cochilo rápido' },
    { label: '10 Minutos', value: 10, desc: 'Duração exata deste episódio' },
    { label: '15 Minutos', value: 15, desc: 'História + reflexão suave' },
    { label: '30 Minutos', value: 30, desc: 'Para adormecer em paz' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-md bg-white border-2 border-indigo-100 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-indigo-100 text-indigo-700 border border-indigo-200 shadow-sm">
              <Moon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900 font-brand">Modo Hora de Dormir</h3>
              <p className="text-xs text-indigo-900/80 font-semibold">Temporizador de sono suave para crianças</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-2xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Active Timer Status */}
        {activeMinutesLeft !== null ? (
          <div className="p-5 rounded-3xl bg-indigo-50 border-2 border-indigo-200 text-center space-y-2 shadow-sm">
            <span className="text-xs text-indigo-800 font-black uppercase tracking-wider">
              Temporizador Ativo
            </span>
            <div className="text-3xl font-black text-indigo-950 font-brand flex items-center justify-center gap-2">
              <Clock className="w-6 h-6 text-indigo-600 animate-pulse" />
              <span>{activeMinutesLeft} min restantes</span>
            </div>
            <p className="text-xs text-slate-600 font-medium">
              O áudio fará um fade-out suave ao término do tempo.
            </p>
            <button
              onClick={onCancelTimer}
              className="mt-2 text-xs font-black text-rose-600 hover:text-rose-700 underline"
            >
              Cancelar Temporizador
            </button>
          </div>
        ) : (
          <p className="text-xs text-slate-600 font-medium leading-relaxed">
            Escolha quanto tempo o áudio continuará tocando antes de fazer um fade-out suave para ajudar as crianças a relaxar e dormir em segurança e paz.
          </p>
        )}

        {/* Preset Options */}
        <div className="grid grid-cols-2 gap-3">
          {timerOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                onTimerSet(opt.value);
                onClose();
              }}
              className="p-4 rounded-2xl bg-slate-50 border-2 border-slate-100 hover:border-indigo-300 hover:bg-indigo-50/40 text-left transition-all group shadow-sm"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-black text-slate-900 group-hover:text-indigo-700 font-brand text-sm">
                  {opt.label}
                </span>
                <Clock className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600" />
              </div>
              <span className="text-[11px] text-slate-500 font-medium">{opt.desc}</span>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-2 border-t-2 border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors shadow-md"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
