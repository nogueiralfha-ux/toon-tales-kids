import React from 'react';
import { Sparkles, BookOpen, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface LoadingScreenProps {
  message?: string;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  message = 'Preparando uma nova aventura...',
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-b from-slate-950 via-amber-950/90 to-slate-950 flex flex-col items-center justify-center p-6 text-white select-none">
      {/* Radiant Glowing Background */}
      <div className="absolute w-96 h-96 bg-[radial-gradient(circle,rgba(251,191,36,0.25)_0%,transparent_70%)] animate-pulse" />

      {/* 3D Animated Logo Emblem */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], rotate: [0, 2, -2, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-400 flex items-center justify-center text-white font-brand font-black text-5xl sm:text-6xl shadow-2xl shadow-orange-500/50 ring-4 ring-amber-300 mb-6"
      >
        T
        {/* Orbiting Sparkles */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          className="absolute -inset-4 pointer-events-none"
        >
          <div className="w-4 h-4 rounded-full bg-yellow-300 shadow-md shadow-yellow-300 absolute -top-1 left-1/2" />
          <div className="w-3 h-3 rounded-full bg-amber-400 shadow-md shadow-amber-400 absolute -bottom-1 right-1/4" />
        </motion.div>
      </motion.div>

      {/* Brand Title */}
      <div className="relative z-10 text-center space-y-2">
        <h2 className="text-3xl sm:text-4xl font-black font-brand tracking-tight text-white drop-shadow-md">
          TOON TALES <span className="text-amber-400">KIDS</span>
        </h2>
        <p className="text-xs sm:text-sm text-amber-200 font-bold font-brand tracking-wide">
          Histórias que ensinam, aventuras que transformam!
        </p>
      </div>

      {/* Loading Bar & Message */}
      <div className="relative z-10 mt-8 text-center space-y-3 max-w-xs w-full">
        <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden p-0.5 border border-white/30">
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1/2 h-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 rounded-full shadow-md"
          />
        </div>

        <p className="text-xs text-slate-300 font-bold flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
          <span>{message}</span>
        </p>
      </div>
    </div>
  );
};
