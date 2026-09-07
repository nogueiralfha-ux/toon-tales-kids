import React from 'react';
import { Sparkles, Trophy, Award, Star, CheckCircle, BookOpen, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useAuth } from '../../contexts/AuthContext';
import { gamificationService } from '../../services/gamificationService';
import { getEpisodeById } from '../../data/catalog';

interface GamificationWidgetProps {
  onSelectEpisode?: (episodeId: string) => void;
}

export const GamificationWidget: React.FC<GamificationWidgetProps> = ({ onSelectEpisode }) => {
  const { activeKid } = useAuth();

  const xp = activeKid?.xp || 0;
  const completedEpisodes = activeKid?.completedEpisodes || [];

  const { currentRank, nextRank, progressInLevel, neededInLevel, levelPercent } =
    gamificationService.getRankInfo(xp);

  const achievements = gamificationService.getAchievementsWithStatus(completedEpisodes, xp);
  const unlockedCount = achievements.filter((a) => a.unlocked).length;

  return (
    <div className="w-full bg-slate-900/90 border border-amber-500/20 rounded-3xl p-6 sm:p-8 shadow-xl text-white space-y-6">
      {/* Top Header: Kid Info + Level */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-2xl shadow-lg shadow-amber-500/20 border-2 border-amber-300">
            {currentRank.badgeIcon}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-black text-white">{activeKid?.name || 'Aventureiro'}</h3>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 font-bold text-xs">
                Nível {currentRank.level}
              </span>
            </div>
            <p className="text-xs text-amber-300 font-semibold">{currentRank.title}</p>
          </div>
        </div>

        {/* Total XP Counter */}
        <div className="px-4 py-2 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <div>
            <div className="text-xs text-slate-400 font-medium">XP Total Acumulado</div>
            <div className="text-lg font-black text-amber-400">{xp} XP</div>
          </div>
        </div>
      </div>

      {/* Level Progress Bar */}
      <div>
        <div className="flex justify-between items-center text-xs font-semibold mb-2">
          <span className="text-slate-300">
            Progresso para{' '}
            <strong className="text-amber-400">
              {nextRank ? `Nível ${nextRank.level}: ${nextRank.title}` : 'Nível Máximo Alcançado!'}
            </strong>
          </span>
          <span className="text-amber-400 font-mono">
            {progressInLevel} / {neededInLevel} XP ({levelPercent}%)
          </span>
        </div>
        <div className="w-full h-4 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${levelPercent}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`h-full rounded-full bg-gradient-to-r ${currentRank.themeColor}`}
          />
        </div>
      </div>

      {/* Achievements Section */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2 text-sm font-bold text-white">
            <Trophy className="w-4 h-4 text-amber-400" /> Conquistas e Medalhas
          </div>
          <span className="text-xs text-slate-400">
            {unlockedCount} de {achievements.length} Desbloqueadas
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className={`p-3 rounded-2xl border transition-all ${
                ach.unlocked
                  ? 'bg-gradient-to-br from-slate-800 to-amber-950/30 border-amber-500/40 shadow-md shadow-amber-500/5'
                  : 'bg-slate-950/40 border-slate-800 opacity-60'
              }`}
            >
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-xl">{ach.icon}</span>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-white truncate">{ach.title}</h4>
                  <span className="text-[10px] text-amber-400 font-semibold">+{ach.xpReward} XP</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 line-clamp-2">{ach.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Completed Episodes Gallery */}
      {completedEpisodes.length > 0 && (
        <div className="pt-4 border-t border-slate-800">
          <div className="flex items-center gap-2 text-sm font-bold text-white mb-3">
            <BookOpen className="w-4 h-4 text-emerald-400" /> Histórias Bíblicas Completadas ({completedEpisodes.length})
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {completedEpisodes.map((epId) => {
              const ep = getEpisodeById(epId);
              return (
                <div
                  key={epId}
                  onClick={() => onSelectEpisode && onSelectEpisode(epId)}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 cursor-pointer transition-colors group"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs font-semibold text-white truncate">
                      {ep?.title || `Episódio ${epId}`}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
