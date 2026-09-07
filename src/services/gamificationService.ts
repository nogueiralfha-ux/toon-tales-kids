export interface RankInfo {
  level: number;
  title: string;
  minXp: number;
  maxXp: number;
  badgeIcon: string;
  themeColor: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  xpReward: number;
  unlocked?: boolean;
}

export const RANKS: RankInfo[] = [
  { level: 1, title: 'Pequeno Explorador', minXp: 0, maxXp: 200, badgeIcon: '🌱', themeColor: 'from-emerald-400 to-green-600' },
  { level: 2, title: 'Amigo da Fé', minXp: 200, maxXp: 500, badgeIcon: '⭐', themeColor: 'from-sky-400 to-blue-600' },
  { level: 3, title: 'Guardião da Arca', minXp: 500, maxXp: 1000, badgeIcon: '⛵', themeColor: 'from-amber-400 to-orange-600' },
  { level: 4, title: 'Conquistador de Jericó', minXp: 1000, maxXp: 2000, badgeIcon: '🏰', themeColor: 'from-purple-400 to-indigo-600' },
  { level: 5, title: 'Coração de Davi', minXp: 2000, maxXp: 3500, badgeIcon: '👑', themeColor: 'from-rose-400 to-pink-600' },
  { level: 6, title: 'Sábio de Salomão', minXp: 3500, maxXp: 5000, badgeIcon: '📜', themeColor: 'from-yellow-300 to-amber-500' },
  { level: 7, title: 'Embaixador do Reino', minXp: 5000, maxXp: 10000, badgeIcon: '🏆', themeColor: 'from-amber-300 via-yellow-400 to-orange-500' },
];

export const ACHIEVEMENTS_LIST: AchievementItem[] = [
  {
    id: 'first_story',
    title: 'Primeira Aventura',
    description: 'Ouviu sua primeira história bíblica completa!',
    icon: '🎧',
    xpReward: 50,
  },
  {
    id: 'creation_master',
    title: 'Amigo da Criação',
    description: 'Completou todos os episódios de Gênesis e da Criação.',
    icon: '🌍',
    xpReward: 100,
  },
  {
    id: 'quiz_champion',
    title: 'Mestre do Quiz',
    description: 'Acertou 100% das perguntas de um quiz bíblico.',
    icon: '🎯',
    xpReward: 75,
  },
  {
    id: 'david_courage',
    title: 'Coragem de Davi',
    description: 'Ouviu a história épica de Davi e Golias.',
    icon: '🛡️',
    xpReward: 50,
  },
  {
    id: 'streak_3',
    title: 'Fiel e Constante',
    description: 'Ouviu histórias bíblicas por 3 dias seguidos!',
    icon: '🔥',
    xpReward: 150,
  },
  {
    id: 'miracles_hero',
    title: 'Testemunha de Milagres',
    description: 'Completou a temporada sobre os milagres de Jesus.',
    icon: '✨',
    xpReward: 120,
  },
];

export const gamificationService = {
  getRankInfo(totalXp: number): {
    currentRank: RankInfo;
    nextRank: RankInfo | null;
    progressInLevel: number;
    neededInLevel: number;
    levelPercent: number;
  } {
    let currentRank = RANKS[0];
    let nextRank: RankInfo | null = RANKS[1];

    for (let i = 0; i < RANKS.length; i++) {
      if (totalXp >= RANKS[i].minXp) {
        currentRank = RANKS[i];
        nextRank = i < RANKS.length - 1 ? RANKS[i + 1] : null;
      }
    }

    if (!nextRank) {
      return {
        currentRank,
        nextRank: null,
        progressInLevel: totalXp - currentRank.minXp,
        neededInLevel: 1000,
        levelPercent: 100,
      };
    }

    const neededInLevel = nextRank.minXp - currentRank.minXp;
    const progressInLevel = totalXp - currentRank.minXp;
    const levelPercent = Math.min(100, Math.max(0, Math.round((progressInLevel / neededInLevel) * 100)));

    return {
      currentRank,
      nextRank,
      progressInLevel,
      neededInLevel,
      levelPercent,
    };
  },

  getAchievementsWithStatus(completedEpisodeIds: string[], xp: number): AchievementItem[] {
    return ACHIEVEMENTS_LIST.map((ach) => {
      let unlocked = false;
      if (ach.id === 'first_story' && completedEpisodeIds.length >= 1) unlocked = true;
      if (ach.id === 'creation_master' && completedEpisodeIds.includes('t1e1') && completedEpisodeIds.includes('t1e2')) unlocked = true;
      if (ach.id === 'david_courage' && completedEpisodeIds.includes('t2e5')) unlocked = true;
      if (ach.id === 'quiz_champion' && xp >= 300) unlocked = true;
      if (ach.id === 'streak_3' && completedEpisodeIds.length >= 3) unlocked = true;
      if (ach.id === 'miracles_hero' && (completedEpisodeIds.includes('t3e5') || completedEpisodeIds.includes('t3e7'))) unlocked = true;

      return { ...ach, unlocked };
    });
  },
};
