export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  gradient: string;
  accentColor: string;
}

export const CATEGORIES_DATA: Category[] = [
  {
    id: 'all',
    name: '🌟 Todas as Histórias',
    icon: 'Sparkles',
    description: 'Explore todo o universo de histórias da Bíblia em áudio.',
    color: 'from-amber-500 to-orange-500',
    gradient: 'bg-gradient-to-br from-amber-500 to-orange-600',
    accentColor: 'text-amber-500',
  },
  {
    id: 'aventuras',
    name: '🔥 Aventuras Épicas',
    icon: 'Flame',
    description: 'Grandes jornadas, batalhas com gigantes e travessias pelo mar.',
    color: 'from-orange-500 to-red-500',
    gradient: 'bg-gradient-to-br from-orange-500 to-red-600',
    accentColor: 'text-orange-500',
  },
  {
    id: 'herois',
    name: '🛡️ Heróis da Fé',
    icon: 'Shield',
    description: 'Pessoas comuns com grandes desafios e uma fé extraordinária.',
    color: 'from-amber-400 to-yellow-600',
    gradient: 'bg-gradient-to-br from-amber-400 to-yellow-600',
    accentColor: 'text-amber-500',
  },
  {
    id: 'jesus',
    name: '✝️ Histórias de Jesus',
    icon: 'Heart',
    description: 'A vida, o amor, as parábolas e os ensinamentos do Mestre.',
    color: 'from-sky-500 to-blue-600',
    gradient: 'bg-gradient-to-br from-sky-500 to-blue-600',
    accentColor: 'text-sky-500',
  },
  {
    id: 'milagres',
    name: '✨ Milagres e Maravilhas',
    icon: 'Sparkles',
    description: 'Mares que se abrem, pães que se multiplicam e tempestades acalmadas.',
    color: 'from-purple-500 to-indigo-600',
    gradient: 'bg-gradient-to-br from-purple-500 to-indigo-600',
    accentColor: 'text-purple-500',
  },
  {
    id: 'mulheres',
    name: '👧 Mulheres de Fé',
    icon: 'Crown',
    description: 'Exemplos de coragem, fidelidade, oração e amor a Deus.',
    color: 'from-pink-500 to-rose-600',
    gradient: 'bg-gradient-to-br from-pink-500 to-rose-600',
    accentColor: 'text-pink-500',
  },
  {
    id: 'viagens',
    name: '🌊 Grandes Viagens',
    icon: 'Compass',
    description: 'Navegações, tempestades, ilhas desertas e estradas antigas.',
    color: 'from-cyan-500 to-teal-600',
    gradient: 'bg-gradient-to-br from-cyan-500 to-teal-600',
    accentColor: 'text-cyan-500',
  },
  {
    id: 'criacao',
    name: '🌿 Criação & Natureza',
    icon: 'Sun',
    description: 'A beleza do mundo criado por Deus, os animais e o jardim.',
    color: 'from-emerald-500 to-green-600',
    gradient: 'bg-gradient-to-br from-emerald-500 to-green-600',
    accentColor: 'text-emerald-500',
  },
];
