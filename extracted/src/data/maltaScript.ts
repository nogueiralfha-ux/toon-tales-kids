import { Scene, QuizQuestion } from '../types';

export const EPISODE_META_T4E9 = {
  id: 't4e9',
  title: 'Malta',
  subtitle: 'A ilha onde Deus continuou agindo',
  biblicalText: 'Atos 28:1 a 10',
  durationLabel: '18 min',
  moralLesson: 'Mesmo depois de uma grande tempestade, podemos continuar fazendo o bem. Quando recebemos bondade, também podemos espalhar bondade.',
};

export const MALTA_SCENES: Scene[] = [
  {
    id: 1,
    sceneNumber: 1,
    title: 'Abertura',
    subtitle: 'Depois do naufrágio',
    biblicalRef: 'Atos 28:1',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'malta_island',
    musicTheme: 'hope_piano_choir',
    visualKey: 's4e9_01_intro',
    environmentSummary: 'Ondas suaves, passos na areia, respiração cansada, vento.',
    musicDescription: 'Música suave de alívio e sobrevivência.',
    soundEffects: ['sea_waves', 'footsteps_running', 'wind_breeze'],
    directorLesson: 'Começar exatamente do final do episódio 27. Mostrar a exaustão mas também o milagre de estarem vivos.',
    lines: [
      {
        id: 's4e9_01_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Depois de enfrentar uma terrível tempestade...',
      },
      {
        id: 's4e9_01_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: '...Paulo e todos os outros sobreviventes finalmente chegaram à terra.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e9_01_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles estavam vivos.',
      }
    ]
  },
  {
    id: 2,
    sceneNumber: 2,
    title: 'A Ilha',
    subtitle: 'Um lugar desconhecido',
    biblicalRef: 'Atos 28:1',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'malta_island',
    musicTheme: 'malta_theme',
    visualKey: 's4e9_02_island',
    environmentSummary: 'Vento leve, gaivotas, sons da natureza da ilha.',
    musicDescription: 'Uma música com sensação mediterrânea de calor e acolhimento.',
    soundEffects: ['wind_breeze'],
    directorLesson: 'Apresentar Malta como um lugar de refúgio.',
    lines: [
      {
        id: 's4e9_02_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A ilha se chamava Malta.',
      },
      {
        id: 's4e9_02_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os habitantes daquele lugar não conheciam aqueles estrangeiros.',
      },
      {
        id: 's4e9_02_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas decidiram ajudá-los.',
      }
    ]
  },
  {
    id: 3,
    sceneNumber: 3,
    title: 'Os Habitantes',
    subtitle: 'Encontro com os nativos',
    biblicalRef: 'Atos 28:2',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'malta_island',
    musicTheme: 'malta_theme',
    visualKey: 's4e9_03_inhabitants',
    environmentSummary: 'Passos, pessoas conversando, sons de galhos secos.',
    musicDescription: 'Continuação da música de acolhimento.',
    soundEffects: ['footsteps_running'],
    directorLesson: 'Mostrar a hospitalidade que Paulo não esperava.',
    lines: [
      {
        id: 's4e9_03_l1',
        character: 'habitante',
        characterLabel: 'Habitante',
        text: 'Vocês estão bem?',
        emotionGuide: 'Preocupado'
      },
      {
        id: 's4e9_03_l2',
        character: 'habitante',
        characterLabel: 'Outro Habitante',
        text: 'Venham! Precisamos aquecê-los.',
      },
      {
        id: 's4e9_03_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles foram muito bondosos.',
      }
    ]
  },
  {
    id: 4,
    sceneNumber: 4,
    title: 'A Grande Fogueira',
    subtitle: 'Calor e segurança',
    biblicalRef: 'Atos 28:2',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'malta_island',
    musicTheme: 'malta_theme',
    visualKey: 's4e9_04_fire',
    environmentSummary: 'Som de fogo crepitando alto, madeira estalando.',
    musicDescription: 'Acolhedora.',
    soundEffects: ['fire_crackling'],
    directorLesson: 'A fogueira representa o calor humano, a segurança depois do frio no mar.',
    lines: [
      {
        id: 's4e9_04_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os habitantes de Malta acenderam uma grande fogueira.',
      },
      {
        id: 's4e9_04_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Todos se aproximaram para se aquecer.',
      },
      {
        id: 's4e9_04_l3',
        character: 'lucas',
        characterLabel: 'Lucas',
        text: 'Depois de tudo o que aconteceu... esse fogo parece um presente.',
      },
      {
        id: 's4e9_04_l4',
        character: 'aristarco',
        characterLabel: 'Aristarco',
        text: 'Com certeza.',
      }
    ]
  },
  {
    id: 5,
    sceneNumber: 5,
    title: 'Paulo Ajuda',
    subtitle: 'Trabalho em equipe',
    biblicalRef: 'Atos 28:3',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'malta_island',
    musicTheme: 'malta_theme',
    visualKey: 's4e9_05_paul_helps',
    environmentSummary: 'Galhos secos quebrando, passos.',
    musicDescription: 'Música leve.',
    soundEffects: ['fire_crackling'],
    directorLesson: 'Paulo não age como um líder distante. Ele serve.',
    lines: [
      {
        id: 's4e9_05_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Paulo também decidiu ajudar.',
      },
      {
        id: 's4e9_05_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele recolheu alguns gravetos e colocou lenha no fogo.',
      },
      {
        id: 's4e9_05_l3',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Vamos manter a fogueira acesa.',
      }
    ]
  },
  {
    id: 6,
    sceneNumber: 6,
    title: 'A Serpente',
    subtitle: 'Um perigo oculto',
    biblicalRef: 'Atos 28:3',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'malta_island',
    musicTheme: 'suspense_snake',
    visualKey: 's4e9_06_snake',
    environmentSummary: 'Folhas e galhos se mexendo levemente.',
    musicDescription: 'Música de suspense leve.',
    soundEffects: [],
    directorLesson: 'Preparar a surpresa sem causar terror excessivo nas crianças.',
    lines: [
      {
        id: 's4e9_06_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas havia algo escondido entre os gravetos.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e9_06_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma serpente.',
      },
      {
        id: 's4e9_06_l3',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Oh!',
        emotionGuide: 'Surpresa'
      }
    ]
  },
  {
    id: 7,
    sceneNumber: 7,
    title: 'A Picada',
    subtitle: 'A cobra se prende',
    biblicalRef: 'Atos 28:3',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'malta_island',
    musicTheme: 'suspense_snake',
    visualKey: 's4e9_07_snake_bites',
    environmentSummary: 'Reação imediata e falas assustadas ao redor.',
    musicDescription: 'A tensão cresce.',
    soundEffects: ['fire_crackling'],
    directorLesson: 'Evitar sangue e dor gráfica. O foco é a surpresa.',
    lines: [
      {
        id: 's4e9_07_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A serpente se prendeu à mão de Paulo.',
      },
      {
        id: 's4e9_07_l2',
        character: 'habitante',
        characterLabel: 'Habitante',
        text: 'Olhem!',
      },
      {
        id: 's4e9_07_l3',
        character: 'habitante',
        characterLabel: 'Outro',
        text: 'É uma serpente!',
      }
    ]
  },
  {
    id: 8,
    sceneNumber: 8,
    title: 'A Expectativa',
    subtitle: 'O julgamento apressado',
    biblicalRef: 'Atos 28:4',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'malta_island',
    musicTheme: 'suspense_snake',
    visualKey: 's4e9_08_expectation',
    environmentSummary: 'Sussurros de quem observa de longe.',
    musicDescription: 'Tensão curiosa.',
    soundEffects: ['fire_crackling'],
    directorLesson: 'A lógica humana sendo testada pela ação divina.',
    lines: [
      {
        id: 's4e9_08_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os habitantes ficaram observando.',
      },
      {
        id: 's4e9_08_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles esperavam que Paulo ficasse muito doente.',
      },
      {
        id: 's4e9_08_l3',
        character: 'habitante',
        characterLabel: 'Habitante',
        text: 'Ele deve estar em grande perigo.',
      }
    ]
  },
  {
    id: 9,
    sceneNumber: 9,
    title: 'Paulo Permanece Bem',
    subtitle: 'O milagre silencioso',
    biblicalRef: 'Atos 28:5',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'malta_island',
    musicTheme: 'healing_light',
    visualKey: 's4e9_09_paul_safe',
    environmentSummary: 'Silêncio, apenas o som da fogueira crepitando.',
    musicDescription: 'Música de maravilha.',
    soundEffects: ['fire_crackling'],
    directorLesson: 'A calmaria milagrosa onde Paulo apenas sacode a cobra e nada acontece.',
    lines: [
      {
        id: 's4e9_09_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas Paulo continuou bem.',
      },
      {
        id: 's4e9_09_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele não caiu. Não ficou doente.',
      },
      {
        id: 's4e9_09_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Continuou ali.',
      }
    ]
  },
  {
    id: 10,
    sceneNumber: 10,
    title: 'A Reação',
    subtitle: 'Mudança de opinião',
    biblicalRef: 'Atos 28:6',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'malta_island',
    musicTheme: 'healing_light',
    visualKey: 's4e9_10_reaction',
    environmentSummary: 'As pessoas agora sussurram com admiração.',
    musicDescription: 'Suave encanto.',
    soundEffects: [],
    directorLesson: 'O povo muda de percepção sobre quem Paulo é.',
    lines: [
      {
        id: 's4e9_10_l1',
        character: 'habitante',
        characterLabel: 'Habitante',
        text: 'Como isso é possível?',
      },
      {
        id: 's4e9_10_l2',
        character: 'habitante',
        characterLabel: 'Outro',
        text: 'Ele deve ser um homem muito especial.',
      },
      {
        id: 's4e9_10_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Primeiro, eles pensaram uma coisa.',
      },
      {
        id: 's4e9_10_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Depois, quando perceberam que Paulo estava bem... mudaram de opinião.',
      }
    ]
  },
  {
    id: 11,
    sceneNumber: 11,
    title: 'Paulo Humilde',
    subtitle: 'Sem exibições',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'malta_island',
    musicTheme: 'hope_piano_choir',
    visualKey: 's4e9_11_humble',
    environmentSummary: 'Passos.',
    musicDescription: 'Música suave.',
    soundEffects: [],
    directorLesson: 'Fundamental deixar claro que Paulo não procurou glória para si mesmo.',
    lines: [
      {
        id: 's4e9_11_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Paulo não ficou se gabando.',
      },
      {
        id: 's4e9_11_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele simplesmente continuou ajudando as pessoas.',
      }
    ]
  },
  {
    id: 12,
    sceneNumber: 12,
    title: 'Públio',
    subtitle: 'Hospitalidade da autoridade local',
    biblicalRef: 'Atos 28:7',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'publius_house',
    musicTheme: 'malta_theme',
    visualKey: 's4e9_12_publius',
    environmentSummary: 'Sons de uma casa, acolhimento mais arranjado.',
    musicDescription: 'Alegre e gentil.',
    soundEffects: ['footsteps_running'],
    directorLesson: 'Enfatizar a recepção que eles têm mesmo como estrangeiros.',
    lines: [
      {
        id: 's4e9_12_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Naquela região vivia um homem importante chamado Públio.',
      },
      {
        id: 's4e9_12_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele recebeu Paulo e seus companheiros em sua casa.',
      },
      {
        id: 's4e9_12_l3',
        character: 'publio',
        characterLabel: 'Públio',
        text: 'Sejam bem-vindos. Podem ficar conosco.',
      }
    ]
  },
  {
    id: 13,
    sceneNumber: 13,
    title: 'O Pai Doente',
    subtitle: 'Problema em casa',
    biblicalRef: 'Atos 28:8',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'publius_house',
    musicTheme: 'melancholy_underscore',
    visualKey: 's4e9_13_publius_father',
    environmentSummary: 'Ambiente tranquilo, respiração fraca de fundo.',
    musicDescription: 'Tom emocional de tristeza.',
    soundEffects: [],
    directorLesson: 'A aflição de quem acolheu.',
    lines: [
      {
        id: 's4e9_13_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas o pai de Públio estava doente.',
      },
      {
        id: 's4e9_13_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele estava com febre e muito enfermo.',
      },
      {
        id: 's4e9_13_l3',
        character: 'publio',
        characterLabel: 'Públio',
        text: 'Meu pai está muito doente.',
        emotionGuide: 'Preocupado'
      }
    ]
  },
  {
    id: 14,
    sceneNumber: 14,
    title: 'A Visita',
    subtitle: 'Oração',
    biblicalRef: 'Atos 28:8',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'publius_house',
    musicTheme: 'healing_light',
    visualKey: 's4e9_14_paul_visits',
    environmentSummary: 'Passos, porta abrindo e silêncio.',
    musicDescription: 'Música suave de oração.',
    soundEffects: ['footsteps_running'],
    directorLesson: 'O poder da oração intercessória.',
    lines: [
      {
        id: 's4e9_14_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Paulo foi visitá-lo.',
      },
      {
        id: 's4e9_14_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele orou... e colocou as mãos sobre o homem.',
      }
    ]
  },
  {
    id: 15,
    sceneNumber: 15,
    title: 'A Cura',
    subtitle: 'A ação de Deus',
    biblicalRef: 'Atos 28:8',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'publius_house',
    musicTheme: 'healing_light',
    visualKey: 's4e9_15_healing',
    environmentSummary: 'Alívio.',
    musicDescription: 'Música luminosa, crescendo.',
    soundEffects: [],
    directorLesson: 'A alegria restaurada na casa de Públio.',
    lines: [
      {
        id: 's4e9_15_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E o homem foi curado.',
      },
      {
        id: 's4e9_15_l2',
        character: 'publio',
        characterLabel: 'Públio',
        text: 'Meu pai! Ele está melhor!',
        emotionGuide: 'Grato, maravilhado'
      }
    ]
  },
  {
    id: 16,
    sceneNumber: 16,
    title: 'A Notícia se Espalha',
    subtitle: 'Esperança para todos',
    biblicalRef: 'Atos 28:9',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'malta_island',
    musicTheme: 'hope_piano_choir',
    visualKey: 's4e9_16_news_spreads',
    environmentSummary: 'Pessoas chegando, passos.',
    musicDescription: 'Música alegre de esperança.',
    soundEffects: ['footsteps_running'],
    directorLesson: 'A bondade de Deus alcançando todos.',
    lines: [
      {
        id: 's4e9_16_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A notícia se espalhou pela ilha.',
      },
      {
        id: 's4e9_16_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Outras pessoas doentes começaram a procurar Paulo.',
      }
    ]
  },
  {
    id: 17,
    sceneNumber: 17,
    title: 'Mais Curas',
    subtitle: 'Servindo com fé',
    biblicalRef: 'Atos 28:9',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'malta_island',
    musicTheme: 'hope_piano_choir',
    visualKey: 's4e9_17_other_healings',
    environmentSummary: 'Oração contínua e fé.',
    musicDescription: 'Esperançosa.',
    soundEffects: [],
    directorLesson: 'Reforçar oração e fé, sem dar ares de mágica.',
    lines: [
      {
        id: 's4e9_17_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Paulo orou por elas.',
      },
      {
        id: 's4e9_17_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E muitas foram curadas.',
      }
    ]
  },
  {
    id: 18,
    sceneNumber: 18,
    title: 'Gratidão',
    subtitle: 'Cuidado mútuo',
    biblicalRef: 'Atos 28:10',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'malta_island',
    musicTheme: 'hope_piano_choir',
    visualKey: 's4e9_18_gratitude',
    environmentSummary: 'Conversas felizes e gratidão.',
    musicDescription: 'Música de celebração.',
    soundEffects: [],
    directorLesson: 'As bênçãos vão nos dois sentidos.',
    lines: [
      {
        id: 's4e9_18_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os habitantes de Malta ficaram muito gratos.',
      },
      {
        id: 's4e9_18_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E passaram a cuidar dos sobreviventes.',
      }
    ]
  },
  {
    id: 19,
    sceneNumber: 19,
    title: 'Troca de Bondade',
    subtitle: 'Reflexão',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'malta_island',
    musicTheme: 'hope_piano_choir',
    visualKey: 's4e9_19_kindness_exchange',
    environmentSummary: 'Clima agradável e emocional.',
    musicDescription: 'Emocional, preparando o momento reflexivo.',
    soundEffects: [],
    directorLesson: 'Preparando a lição do episódio.',
    lines: [
      {
        id: 's4e9_19_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os habitantes haviam ajudado Paulo quando ele precisava de calor e abrigo.',
      },
      {
        id: 's4e9_19_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Agora Paulo ajudava aquelas pessoas levando esperança.',
      }
    ]
  },
  {
    id: 20,
    sceneNumber: 20,
    title: 'Lição',
    subtitle: 'Pequenas atitudes',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'malta_island',
    musicTheme: 'hope_piano_choir',
    visualKey: 's4e9_20_lesson',
    environmentSummary: 'Voz direta para a criança.',
    musicDescription: 'Suave.',
    soundEffects: [],
    directorLesson: 'Como aplicar a história na vida da criança.',
    lines: [
      {
        id: 's4e9_20_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Às vezes pensamos que precisamos fazer algo enorme para ajudar alguém.',
      },
      {
        id: 's4e9_20_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas muitas vezes... uma pequena atitude já pode fazer uma grande diferença.',
      }
    ]
  },
  {
    id: 21,
    sceneNumber: 21,
    title: 'Frase Marcante',
    subtitle: 'Espalhar bondade',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'malta_island',
    musicTheme: 'hope_piano_choir',
    visualKey: 's4e9_21_phrase',
    environmentSummary: 'O núcleo emocional do episódio.',
    musicDescription: 'Cresce levemente em emoção.',
    soundEffects: [],
    directorLesson: 'A frase que as crianças vão gravar na mente.',
    lines: [
      {
        id: 's4e9_21_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma fogueira aqueceu Paulo. E a fé de Paulo levou esperança àquela ilha.',
      },
      {
        id: 's4e9_21_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Quando recebemos bondade... também podemos espalhar bondade.',
      }
    ]
  },
  {
    id: 22,
    sceneNumber: 22,
    title: 'Da Tempestade para Esperança',
    subtitle: 'O contraste',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'malta_island',
    musicTheme: 'hope_piano_choir',
    visualKey: 's4e9_22_transition',
    environmentSummary: 'Ondas suaves do mar pacífico de Malta.',
    musicDescription: 'Paz.',
    soundEffects: ['sea_waves'],
    directorLesson: 'Contrastar o naufrágio e o acolhimento seguro.',
    lines: [
      {
        id: 's4e9_22_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Pouco tempo antes... Paulo estava no meio de uma tempestade.',
      },
      {
        id: 's4e9_22_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Agora... estava cercado por pessoas que o acolhiam.',
      }
    ]
  },
  {
    id: 23,
    sceneNumber: 23,
    title: 'Deus Continua Agindo',
    subtitle: 'Propósito',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'malta_island',
    musicTheme: 'hope_piano_choir',
    visualKey: 's4e9_23_god_acts',
    environmentSummary: 'A visão do futuro.',
    musicDescription: 'Música ganha força e propósito.',
    soundEffects: [],
    directorLesson: 'Garantir que a missão de Deus nunca foi destruída.',
    lines: [
      {
        id: 's4e9_23_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A tempestade havia destruído o navio. Mas não havia destruído o propósito de Paulo.',
      },
      {
        id: 's4e9_23_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A viagem ainda não havia terminado.',
      }
    ]
  },
  {
    id: 24,
    sceneNumber: 24,
    title: 'O Tempo Passa',
    subtitle: 'Meses em Malta',
    biblicalRef: 'Atos 28:11',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'malta_island',
    musicTheme: 'malta_theme',
    visualKey: 's4e9_24_time_passes',
    environmentSummary: 'Vento, pássaros, paz duradoura.',
    musicDescription: 'Tranquilidade e passagem do tempo.',
    soundEffects: ['wind_breeze'],
    directorLesson: 'Três meses de descanso.',
    lines: [
      {
        id: 's4e9_24_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os sobreviventes permaneceram naquela ilha durante algum tempo.',
      },
      {
        id: 's4e9_24_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E os habitantes continuaram demonstrando grande bondade.',
      }
    ]
  },
  {
    id: 25,
    sceneNumber: 25,
    title: 'Preparação Para Partir',
    subtitle: 'Hora de ir',
    biblicalRef: 'Atos 28:11',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'ship_deck',
    musicTheme: 'epic_roma_journey',
    visualKey: 's4e9_25_preparation',
    environmentSummary: 'Porto, pessoas, cordas.',
    musicDescription: 'Música de aventura recomeçando.',
    soundEffects: ['footsteps_running'],
    directorLesson: 'O retorno para a grande jornada final de Paulo.',
    lines: [
      {
        id: 's4e9_25_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Depois de algum tempo... chegou a hora de continuar a viagem.',
      },
      {
        id: 's4e9_25_l2',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Precisamos seguir.',
      },
      {
        id: 's4e9_25_l3',
        character: 'lucas',
        characterLabel: 'Lucas',
        text: 'Roma ainda nos espera.',
      }
    ]
  },
  {
    id: 26,
    sceneNumber: 26,
    title: 'Despedida',
    subtitle: 'Ajudas e suprimentos',
    biblicalRef: 'Atos 28:10',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'ship_deck',
    musicTheme: 'epic_roma_journey',
    visualKey: 's4e9_26_departure',
    environmentSummary: 'Porto e acenos de despedida.',
    musicDescription: 'Música alegre de quem vai em paz.',
    soundEffects: [],
    directorLesson: 'A partida próspera.',
    lines: [
      {
        id: 's4e9_26_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os habitantes da ilha ajudaram os viajantes com tudo o que precisavam.',
      },
      {
        id: 's4e9_26_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E quando chegou o momento da partida... Paulo e seus companheiros deixaram Malta.',
      }
    ]
  },
  {
    id: 27,
    sceneNumber: 27,
    title: 'Gancho Para Roma',
    subtitle: 'De volta ao mar',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'ship_deck',
    musicTheme: 'epic_roma_journey',
    visualKey: 's4e9_27_hook',
    environmentSummary: 'Navio partindo, velas se abrindo.',
    musicDescription: 'Épica!',
    soundEffects: ['sea_waves'],
    directorLesson: 'O entusiasmo do último trecho.',
    lines: [
      {
        id: 's4e9_27_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mais uma vez... Paulo estava no mar.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e9_27_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas agora... Roma estava cada vez mais perto.',
      }
    ]
  },
  {
    id: 28,
    sceneNumber: 28,
    title: 'Transição Final',
    subtitle: 'A grande missão continua',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'ship_deck',
    musicTheme: 'epic_roma_journey',
    visualKey: 's4e9_28_transition_roma',
    environmentSummary: 'Vento e navegação segura.',
    musicDescription: 'Emocional, subindo o tom heroico.',
    soundEffects: [],
    directorLesson: 'Preparando para o encerramento do arco narrativo de todo o livro de Atos!',
    lines: [
      {
        id: 's4e9_28_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O navio havia sido perdido.',
      },
      {
        id: 's4e9_28_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A tempestade havia passado.',
      },
      {
        id: 's4e9_28_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Malta havia ficado para trás. Mas a missão continuava.',
      }
    ]
  },
  {
    id: 29,
    sceneNumber: 29,
    title: 'Próximo Episódio',
    subtitle: 'A Chegada a Roma',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'ship_deck',
    musicTheme: 'epic_roma_journey',
    visualKey: 's4e9_29_next',
    environmentSummary: 'Fade out com música.',
    musicDescription: 'A música épica dá espaço.',
    soundEffects: ['sea_waves'],
    directorLesson: 'Antecipação do último episódio da temporada.',
    lines: [
      {
        id: 's4e9_29_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'No próximo episódio... A Chegada a Roma.',
      }
    ]
  },
  {
    id: 30,
    sceneNumber: 30,
    title: 'Assinatura',
    subtitle: 'Toon Tales Kids',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'toon_tales_jingle',
    musicTheme: 'signature_jingle',
    visualKey: 's4e9_30_outro',
    environmentSummary: 'O jingle e vozes da assinatura.',
    musicDescription: 'Alívio alegre de sempre.',
    soundEffects: ['toon_tales_jingle'],
    directorLesson: 'Voltar ao calor do formato padrão Toon Tales.',
    lines: [
      {
        id: 's4e9_30_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E essa foi mais uma aventura da Bíblia em Áudio.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e9_30_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a história ainda não terminou...',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's4e9_30_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma nova aventura está esperando por você.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e9_30_l4',
        character: 'child',
        characterLabel: 'Crianças',
        text: 'TOON TALES KIDS!',
        emotionGuide: 'Voz infantil e enérgica'
      },
      {
        id: 's4e9_30_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Histórias que ensinam, aventuras que transformam!',
      }
    ]
  }
];

export const MALTA_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    dayLabel: 'A Chegada',
    question: 'Como os habitantes de Malta receberam Paulo e os outros sobreviventes?',
    options: ['Eles não os deixaram entrar na ilha', 'Eles cobraram dinheiro para ajudar', 'Eles prenderam todos eles', 'Eles demonstraram bondade e acenderam uma fogueira'],
    correctIndex: 3,
    explanation: 'Mesmo sem conhecer os viajantes, os moradores de Malta mostrar house e foram muito bondosos, acendendo uma fogueira para que eles pudessem se aquecer da chuva e do frio.',
    biblicalVerse: 'Atos 28:2',
  },
  {
    id: 2,
    dayLabel: 'A Serpente',
    question: 'O que aconteceu enquanto Paulo ajudava a colocar gravetos na fogueira?',
    options: ['Ele queimou as mãos no fogo', 'Uma serpente saiu por causa do calor e o picou', 'Ele encontrou ouro perdido', 'Ele deixou o fogo apagar sem querer'],
    correctIndex: 1,
    explanation: 'Paulo estava trabalhando para ajudar o grupo, quando uma cobra que estava escondida nos galhos se soltou com o calor do fogo e se prendeu à sua mão.',
    biblicalVerse: 'Atos 28:3',
  },
  {
    id: 3,
    dayLabel: 'O Milagre',
    question: 'O que os habitantes de Malta pensaram quando viram que a serpente não fez mal nenhum a Paulo?',
    options: ['Acharam que era um truque', 'Ficaram furiosos com ele', 'Pensaram que a cobra era de brinquedo', 'Mudaram de opinião e viram que ele era alguém muito especial e protegido'],
    correctIndex: 3,
    explanation: 'Primeiro eles acharam que Paulo era uma pessoa má e estava sendo punido. Mas quando viram o milagre da proteção divina, eles perceberam que Deus estava ali.',
    biblicalVerse: 'Atos 28:6',
  },
  {
    id: 4,
    dayLabel: 'Oração',
    question: 'O que Paulo fez quando descobriu que o pai de Públio estava muito doente?',
    options: ['Foi embora dali o mais rápido possível', 'Orou por ele, e o homem foi curado', 'Enviou uma carta para pedir remédios', 'Disse que não havia nada que ele pudesse fazer'],
    correctIndex: 1,
    explanation: 'Paulo não perdeu a chance de demonstrar o amor de Deus! Ele orou e impôs as mãos sobre o pai de Públio, e o Senhor curou aquele homem através da oração de Paulo.',
    biblicalVerse: 'Atos 28:8',
  },
  {
    id: 5,
    dayLabel: 'O Ensinamento',
    question: 'O que a história de Malta nos ensina sobre fazer o bem?',
    options: ['Que apenas as pessoas famosas podem ajudar as outras', 'Que não devemos ajudar quem não conhecemos', 'Que quando recebemos bondade, podemos e devemos espalhar bondade', 'Que uma fogueira não serve para nada'],
    correctIndex: 2,
    explanation: 'Os habitantes da ilha acolheram os viajantes com amor, e Paulo retribuiu aquela bondade levando cura, oração e esperança a todos eles. O amor se espalha e cura!',
    biblicalVerse: 'Gálatas 6:10',
  }
];
