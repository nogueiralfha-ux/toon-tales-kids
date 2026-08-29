import React from 'react';
import { BiblicalCharacter } from '../data/charactersData';
import { ToonTalesArtwork } from './ToonTalesArtwork';
import { Sparkles, ArrowRight, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

interface CharacterCardProps {
  character: BiblicalCharacter;
  onOpenCharacter: (character: BiblicalCharacter) => void;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  onOpenCharacter,
}) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      onClick={() => onOpenCharacter(character)}
      className="group relative rounded-[28px] overflow-hidden bg-white border-2 border-amber-200/80 hover:border-orange-400 p-4 sm:p-5 shadow-md hover:shadow-xl hover:shadow-orange-500/10 cursor-pointer flex flex-col justify-between select-none transition-all"
    >
      {/* 3D Character Avatar Stage */}
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-900 mb-3.5 shadow-inner">
        <ToonTalesArtwork
          type="character"
          name={character.svgType}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

        <div className="absolute bottom-2.5 left-2.5 right-2.5">
          <div className="flex flex-wrap gap-1">
            {character.personality.slice(0, 2).map((trait) => (
              <span
                key={trait}
                className="px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-bold text-amber-300 border border-white/10"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Character Information */}
      <div className="space-y-1.5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-black text-slate-900 font-brand leading-tight group-hover:text-orange-600 transition-colors">
            {character.name}
          </h3>
          <p className="text-xs font-bold text-orange-600 line-clamp-1">
            {character.title}
          </p>
          <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
            {character.shortBio}
          </p>
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-black text-orange-600 group-hover:text-orange-700">
          <span className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-amber-500" />
            <span>Conhecer</span>
          </span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};
