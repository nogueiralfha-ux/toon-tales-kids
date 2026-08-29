export interface HeroBannerItem {
  id: string;
  episodeId: string;
  seasonLabel: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  moralLesson: string;
  durationLabel: string;
  biblicalRef: string;
  themeColor: string;
  gradient: string;
  characterName: string;
  characterRole: string;
  bgType: 'rome' | 'david' | 'redsea' | 'ark' | 'jesus_birth' | 'enoch_stars';
  tags: string[];
}

export const HERO_BANNER_ITEMS: HeroBannerItem[] = [
  {
    id: 'hero-1',
    episodeId: 't2e5',
    seasonLabel: 'TEMPORADA 2 • EPISÓDIO 5',
    title: 'Davi e Golias',
    subtitle: 'O Jovem Pastor que Enfrentou um Gigante',
    description: 'Ouça a emocionante história do pastor de ovelhas que confiou no poder do Senhor e venceu o temível guerreiro com apenas uma funda, cinco pedrinhas e uma fé inabalável!',
    category: '🔥 Aventuras Épicas',
    moralLesson: 'Nenhum gigante é maior do que o Deus que cuida de você. Tenha coragem e confie!',
    durationLabel: '15 min',
    biblicalRef: '1 Samuel 17',
    themeColor: 'from-amber-600 via-orange-600 to-amber-900',
    gradient: 'bg-gradient-to-r from-amber-950 via-slate-900 to-indigo-950',
    characterName: 'Davi',
    characterRole: 'O Valente de Belém',
    bgType: 'david',
    tags: ['Coragem', 'Fé', 'Milagre', 'Vitória'],
  },
  {
    id: 'hero-2',
    episodeId: 't4e6',
    seasonLabel: 'TEMPORADA 4 • EPISÓDIO 6',
    title: 'Paulo Viaja para Roma',
    subtitle: 'Uma Grande Missão Rumo à Cidade Imperial',
    description: 'Embarque em uma jornada épica pelas estradas e mares do Império Romano. Enfrente ventos contrários, tempestades e descubra como o Evangelho chegou ao coração de Roma!',
    category: '🌊 Grandes Viagens',
    moralLesson: 'Deus está no controle de cada tempestade e cumpre todas as Suas promessas.',
    durationLabel: '18 min',
    biblicalRef: 'Atos 27',
    themeColor: 'from-indigo-900 via-blue-900 to-slate-900',
    gradient: 'bg-gradient-to-r from-slate-950 via-indigo-950 to-blue-950',
    characterName: 'Paulo',
    characterRole: 'O Apóstolo Missionário',
    bgType: 'rome',
    tags: ['Missões', 'Viagens', 'Esperança', 'Roma'],
  },
  {
    id: 'hero-3',
    episodeId: 't5e0',
    seasonLabel: 'TEMPORADA 5 • ABERTURA OFICIAL',
    title: 'Heróis da Fé',
    subtitle: 'Pessoas comuns. Grandes desafios. Uma fé extraordinária.',
    description: 'A nova superprodução de Toon Tales Kids! Descubra a vida de homens e mulheres que andaram com Deus, superaram tempestades e deixaram um legado eterno para as nossas vidas.',
    category: '🛡️ Heróis da Fé',
    moralLesson: 'Quando colocamos nossa fé em Deus, Ele transforma o impossível em testemunho.',
    durationLabel: '90 seg',
    biblicalRef: 'Hebreus 11',
    themeColor: 'from-amber-500 via-yellow-500 to-amber-800',
    gradient: 'bg-gradient-to-r from-amber-950 via-slate-900 to-yellow-950',
    characterName: 'Enoque & Heróis',
    characterRole: 'Legado Sagrado',
    bgType: 'enoch_stars',
    tags: ['Heróis', 'Fé', 'Especial', 'Novo'],
  },
  {
    id: 'hero-4',
    episodeId: 't2e3',
    seasonLabel: 'TEMPORADA 2 • EPISÓDIO 3',
    title: 'Abertura do Mar Vermelho',
    subtitle: 'O Grande Milagre da Travessia a Pé Enxuto',
    description: 'Com o mar à frente e o exército de Faraó atrás, Deus manda Moisés erguer o cajado. Veja as águas se dividirem em grandes muralhas cristalinas!',
    category: '✨ Milagres e Maravilhas',
    moralLesson: 'Quando não há saída humana, Deus abre um caminho no meio do mar!',
    durationLabel: '15 min',
    biblicalRef: 'Êxodo 14',
    themeColor: 'from-cyan-900 via-sky-900 to-slate-900',
    gradient: 'bg-gradient-to-r from-slate-950 via-cyan-950 to-blue-950',
    characterName: 'Moisés',
    characterRole: 'O Libertador de Israel',
    bgType: 'redsea',
    tags: ['Milagre', 'Libertação', 'Poder', 'Confiança'],
  },
  {
    id: 'hero-5',
    episodeId: 't3e1',
    seasonLabel: 'TEMPORADA 3 • EPISÓDIO 1',
    title: 'O Nascimento de Jesus',
    subtitle: 'Uma Estrela Brilhante e o Maior Presente do Céu',
    description: 'Uma noite serena em Belém, pastores no campo ouvindo o coral de anjos e uma estrela mágica que guiou os sábios do oriente até o Salvador da humanidade.',
    category: '✝️ Histórias de Jesus',
    moralLesson: 'Jesus é o maior presente de amor e paz que Deus deu ao mundo.',
    durationLabel: '15 min',
    biblicalRef: 'Lucas 2',
    themeColor: 'from-sky-800 via-indigo-900 to-purple-950',
    gradient: 'bg-gradient-to-r from-slate-950 via-sky-950 to-indigo-950',
    characterName: 'Jesus & Maria',
    characterRole: 'Luz do Mundo',
    bgType: 'jesus_birth',
    tags: ['Natal', 'Jesus', 'Amor', 'Paz'],
  },
];
