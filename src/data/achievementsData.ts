export interface Achievement {
  id: string;
  title: string;
  description: string;
  category: 'listening' | 'quiz' | 'exploration' | 'hero' | 'bedtime';
  icon: string;
  xpReward: number;
  unlockedByDefault?: boolean;
  requiredCondition: string;
}

export interface UserLevel {
  level: number;
  title: string;
  minXp: number;
  maxXp: number;
  badgeIcon: string;
  color: string;
}

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: 'first_adventure',
    title: '🏆 Primeira Aventura',
    description: 'Ouviu a sua primeira história bíblica na íntegra.',
    category: 'listening',
    icon: 'Sparkles',
    xpReward: 100,
    unlockedByDefault: true,
    requiredCondition: 'Ouça 1 episódio completo',
  },
  {
    id: 'bible_explorer',
    title: '🔥 Explorador da Bíblia',
    description: 'Ouviu mais de 5 episódios de diferentes temporadas.',
    category: 'listening',
    icon: 'Compass',
    xpReward: 250,
    unlockedByDefault: false,
    requiredCondition: 'Ouça 5 episódios',
  },
  {
    id: 'hero_of_faith',
    title: '🛡️ Herói da Fé',
    description: 'Completou a história de Enoque na Temporada 5.',
    category: 'hero',
    icon: 'Shield',
    xpReward: 300,
    unlockedByDefault: false,
    requiredCondition: 'Conclua a história de Enoque',
  },
  {
    id: 'grand_explorer',
    title: '⭐ Grande Conhecedor',
    description: 'Explorou histórias de 4 temporadas diferentes.',
    category: 'exploration',
    icon: 'Award',
    xpReward: 500,
    unlockedByDefault: false,
    requiredCondition: 'Descubra 4 temporadas',
  },
  {
    id: 'scripture_quiz_master',
    title: '💡 Mestre do Quiz',
    description: 'Acertou todas as perguntas de um quiz de episódio.',
    category: 'quiz',
    icon: 'Star',
    xpReward: 200,
    unlockedByDefault: false,
    requiredCondition: 'Consiga 100% de acertos em um quiz',
  },
  {
    id: 'bedtime_peace',
    title: '🌙 Sono Abençoado',
    description: 'Utilizou o Modo Hora de Dormir para adormecer ouvindo a Palavra.',
    category: 'bedtime',
    icon: 'Moon',
    xpReward: 150,
    unlockedByDefault: false,
    requiredCondition: 'Ative o timer de sono',
  },
  {
    id: 'sea_voyager',
    title: '🌊 Desbravador dos Mares',
    description: 'Acompanhou a jornada de Paulo até o naufrágio em Malta e Roma.',
    category: 'exploration',
    icon: 'Anchor',
    xpReward: 350,
    unlockedByDefault: false,
    requiredCondition: 'Ouça a saga marítima da Temporada 4',
  },
  {
    id: 'favorite_collector',
    title: '❤️ Guardião de Memórias',
    description: 'Adicionou 3 histórias à sua lista de Favoritos.',
    category: 'exploration',
    icon: 'Heart',
    xpReward: 120,
    unlockedByDefault: true,
    requiredCondition: 'Salve 3 histórias nos Favoritos',
  },
];

export const USER_LEVELS: UserLevel[] = [
  { level: 1, title: 'Pequeno Aprendiz', minXp: 0, maxXp: 300, badgeIcon: '🌱', color: 'from-emerald-400 to-teal-500' },
  { level: 2, title: 'Explorador da Fé', minXp: 301, maxXp: 750, badgeIcon: '🧭', color: 'from-sky-400 to-blue-500' },
  { level: 3, title: 'Guardião da Palavra', minXp: 751, maxXp: 1400, badgeIcon: '🛡️', color: 'from-amber-400 to-orange-500' },
  { level: 4, title: 'Valente de Deus', minXp: 1401, maxXp: 2200, badgeIcon: '⚔️', color: 'from-purple-400 to-pink-500' },
  { level: 5, title: 'Mestre da Sabedoria', minXp: 2201, maxXp: 3500, badgeIcon: '👑', color: 'from-yellow-300 to-amber-500' },
];
