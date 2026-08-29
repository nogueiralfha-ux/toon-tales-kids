import React, { useState } from 'react';
import { ACHIEVEMENTS_DATA, USER_LEVELS, Achievement } from '../data/achievementsData';
import { Episode, ALL_EPISODES } from '../data/catalog';
import { ToonTalesArtwork } from './ToonTalesArtwork';
import { Trophy, Star, Sparkles, Heart, Headphones, BookOpen, Shield, Award, Check, Moon, Zap, User, Edit3 } from 'lucide-react';
import { motion } from 'motion/react';

interface ProfileViewProps {
  favorites: string[];
  completedEpisodes: string[];
  totalMinutesListened: number;
  onSelectEpisode: (episode: Episode) => void;
}

const AVAILABLE_AVATARS = [
  { id: 'clara', name: 'Clara', type: 'esther', color: 'from-pink-500 to-rose-600' },
  { id: 'theo', name: 'Theo', type: 'david', color: 'from-amber-500 to-orange-600' },
  { id: 'gabriel', name: 'Gabriel', type: 'paul', color: 'from-blue-500 to-indigo-600' },
  { id: 'sophia', name: 'Sophia', type: 'mary', color: 'from-purple-500 to-pink-600' },
  { id: 'noah', name: 'Noah', type: 'noah', color: 'from-emerald-500 to-teal-600' },
];

export const ProfileView: React.FC<ProfileViewProps> = ({
  favorites,
  completedEpisodes,
  totalMinutesListened,
  onSelectEpisode,
}) => {
  const [currentAvatar, setCurrentAvatar] = useState(AVAILABLE_AVATARS[0]);
  const [profileName, setProfileName] = useState<string>('Clara');
  const [isEditingName, setIsEditingName] = useState<boolean>(false);

  // Calculate XP and level
  const totalXp = 850 + completedEpisodes.length * 150 + favorites.length * 40;
  const currentLevel = USER_LEVELS.find((lvl) => totalXp >= lvl.minXp && totalXp <= lvl.maxXp) || USER_LEVELS[2];
  const nextLevel = USER_LEVELS.find((lvl) => lvl.level === currentLevel.level + 1);

  const levelProgress = nextLevel
    ? Math.min(100, Math.round(((totalXp - currentLevel.minXp) / (nextLevel.minXp - currentLevel.minXp)) * 100))
    : 100;

  return (
    <div className="space-y-8 select-none animate-fade-in">
      {/* Profile Header Hero */}
      <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 p-6 sm:p-10 border-4 border-amber-300 shadow-xl text-white">
        <div className="absolute -top-16 -right-16 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
          {/* Avatar with Ring */}
          <div className="relative group">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-[28px] overflow-hidden bg-slate-900 border-4 border-white shadow-2xl shrink-0">
              <ToonTalesArtwork
                type="character"
                name={currentAvatar.type}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-slate-950 text-amber-300 font-brand font-black text-xs border border-amber-300 shadow-md">
              Nv. {currentLevel.level} {currentLevel.badgeIcon}
            </div>
          </div>

          {/* User Info & Journey Summary */}
          <div className="space-y-3 flex-1 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-amber-100 text-xs font-black uppercase tracking-wider border border-white/30">
                Aventureiro da Fé
              </span>
              <span className="px-3.5 py-1 rounded-full bg-slate-950/40 text-white text-xs font-bold">
                {currentLevel.title}
              </span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-2">
              {isEditingName ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={profileName}
                    onChange={(e) => setProfileName(e.target.value)}
                    className="px-3 py-1 rounded-xl bg-white text-slate-900 font-brand font-black text-2xl"
                  />
                  <button
                    onClick={() => setIsEditingName(false)}
                    className="p-2 rounded-xl bg-white/20 hover:bg-white/30"
                  >
                    <Check className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <>
                  <h1 className="text-3xl sm:text-4xl font-black font-brand tracking-tight drop-shadow-md">
                    {profileName}
                  </h1>
                  <button
                    onClick={() => setIsEditingName(true)}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>

            {/* XP Progress Bar */}
            <div className="max-w-md space-y-1.5 pt-1">
              <div className="flex items-center justify-between text-xs font-bold text-amber-100">
                <span>{totalXp} XP Acumulados</span>
                {nextLevel ? (
                  <span>Próximo nível em {nextLevel.minXp - totalXp} XP</span>
                ) : (
                  <span>Nível Máximo Alcançado!</span>
                )}
              </div>
              <div className="w-full h-3 rounded-full bg-black/20 p-0.5 border border-white/30">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-yellow-300 to-amber-300 transition-all duration-500 shadow-md"
                  style={{ width: `${levelProgress}%` }}
                />
              </div>
            </div>
          </div>
        </div>

          {/* Quick Avatar Switcher */}
          <div className="mt-6 pt-6 border-t border-white/20 flex flex-wrap items-center justify-center md:justify-start gap-3">
            <span className="text-xs font-black uppercase tracking-wider text-amber-100">
              Trocar Avatar 3D:
            </span>
            {AVAILABLE_AVATARS.map((av) => (
              <button
                key={av.id}
                onClick={() => setCurrentAvatar(av)}
                className={`px-3.5 py-1.5 rounded-2xl text-xs font-black font-brand transition-all flex items-center gap-2 ${
                  currentAvatar.id === av.id
                    ? 'bg-white text-orange-600 shadow-lg scale-105 ring-2 ring-amber-300'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <span>{av.name}</span>
              </button>
            ))}
          </div>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white border-2 border-orange-200 rounded-[24px] p-5 shadow-sm space-y-1 text-center">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-2">
            <Headphones className="w-6 h-6" />
          </div>
          <span className="text-2xl sm:text-3xl font-black text-slate-900 font-brand">
            {18 + completedEpisodes.length}
          </span>
          <p className="text-xs font-bold text-slate-500">Histórias Ouvidas</p>
        </div>

        <div className="bg-white border-2 border-rose-200 rounded-[24px] p-5 shadow-sm space-y-1 text-center">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-2">
            <Heart className="w-6 h-6 fill-rose-500" />
          </div>
          <span className="text-2xl sm:text-3xl font-black text-slate-900 font-brand">
            {favorites.length || 12}
          </span>
          <p className="text-xs font-bold text-slate-500">Favoritas Salvas</p>
        </div>

        <div className="bg-white border-2 border-amber-200 rounded-[24px] p-5 shadow-sm space-y-1 text-center">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-2">
            <Trophy className="w-6 h-6" />
          </div>
          <span className="text-2xl sm:text-3xl font-black text-slate-900 font-brand">
            7
          </span>
          <p className="text-xs font-bold text-slate-500">Conquistas Ganhas</p>
        </div>

        <div className="bg-white border-2 border-sky-200 rounded-[24px] p-5 shadow-sm space-y-1 text-center">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mb-2">
            <BookOpen className="w-6 h-6" />
          </div>
          <span className="text-2xl sm:text-3xl font-black text-slate-900 font-brand">
            5
          </span>
          <p className="text-xs font-bold text-slate-500">Temporadas Exploradas</p>
        </div>
      </div>

      {/* Gamification Achievements Showcase */}
      <div className="bg-white border-2 border-amber-200/80 rounded-[28px] p-6 sm:p-8 shadow-md space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-brand flex items-center gap-2">
              <Trophy className="w-7 h-7 text-amber-500" />
              Galeria de Troféus & Conquistas
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Desbloqueie insígnias mágicas ouvindo histórias bíblicas e acertando os quizzes!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ACHIEVEMENTS_DATA.map((ach) => {
            const isUnlocked = ach.unlockedByDefault || ach.id === 'first_adventure' || ach.id === 'favorite_collector';

            return (
              <div
                key={ach.id}
                className={`rounded-2xl border-2 p-4 transition-all flex flex-col justify-between min-h-[160px] ${
                  isUnlocked
                    ? 'bg-gradient-to-b from-amber-50 to-white border-amber-300 shadow-sm'
                    : 'bg-slate-50 border-slate-200 opacity-60'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{ach.title.split(' ')[0]}</span>
                    <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-black">
                      +{ach.xpReward} XP
                    </span>
                  </div>

                  <h4 className="font-black text-slate-900 text-sm font-brand leading-tight">
                    {ach.title.replace(/^[^\s]+ /, '')}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold">
                  {isUnlocked ? (
                    <span className="text-emerald-600 flex items-center gap-1 font-bold">
                      <Check className="w-3.5 h-3.5" /> Conquistado
                    </span>
                  ) : (
                    <span className="text-slate-400">
                      {ach.requiredCondition}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
