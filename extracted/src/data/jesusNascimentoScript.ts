import { Scene, QuizQuestion } from '../types';

export const EPISODE_META_T3E1 = {
  id: 't3e1',
  title: 'O Nascimento de Jesus',
  subtitle: 'A noite em que a esperança nasceu',
  biblicalText: 'Mateus 1–2, Lucas 1–2',
  durationLabel: '15 min',
  moralLesson: 'Jesus é uma mensagem de esperança. Quando tudo parece escuro, Deus pode trazer esperança e mostrar Seu amor por nós.',
};

export const JESUS_NASCIMENTO_SCENES: Scene[] = [
  {
    id: 1,
    sceneNumber: 1,
    title: 'A Espera',
    subtitle: 'A promessa',
    biblicalRef: '',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'desert_night',
    musicTheme: 'season3_intro',
    visualKey: 's3e1_01_wait',
    environmentSummary: 'Noite, vento, distância.',
    musicDescription: 'Música extremamente suave. Uma lenda antiga sendo contada.',
    soundEffects: ['desert_wind'],
    directorLesson: 'Começar com silêncio, mistério e esperança.',
    lines: [
      {
        id: 's3e1_01_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Durante muitos anos... o povo esperou.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e1_01_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Esperou por uma promessa. Esperou por um Salvador.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e1_01_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Profetas haviam anunciado que um dia... uma esperança chegaria.',
        soundCue: 'Música começa a crescer'
      },
      {
        id: 's3e1_01_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E o momento estava se aproximando.',
      }
    ]
  },
  {
    id: 2,
    sceneNumber: 2,
    title: 'Maria',
    subtitle: 'A jovem de Nazaré',
    biblicalRef: 'Lucas 1:26-27',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'nazareth_house',
    musicTheme: 'jesus_theme',
    visualKey: 's3e1_02_mary',
    environmentSummary: 'Pequena casa, noite tranquila.',
    musicDescription: 'Música delicada.',
    soundEffects: ['nature_sounds'],
    directorLesson: 'Apresentar a simplicidade de Maria.',
    lines: [
      {
        id: 's3e1_02_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Em uma pequena cidade chamada Nazaré... vivia uma jovem chamada Maria.',
        soundCue: 'Ambiente doméstico leve'
      },
      {
        id: 's3e1_02_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Maria amava a Deus. Era humilde. E tinha um coração disposto a confiar.',
      }
    ]
  },
  {
    id: 3,
    sceneNumber: 3,
    title: 'O Anjo',
    subtitle: 'A visita',
    biblicalRef: 'Lucas 1:28-33',
    durationLabel: '35 segundos',
    estimatedDurationSec: 35,
    ambientType: 'celestial_sky',
    musicTheme: 'celestial_wonder',
    visualKey: 's3e1_03_angel',
    environmentSummary: 'O ambiente desaparece, som celestial brilha.',
    musicDescription: 'Música celestial.',
    soundEffects: ['angelic_choir'],
    directorLesson: 'A aparição de Gabriel deve ser majestosa, porém serena e acolhedora.',
    lines: [
      {
        id: 's3e1_03_l1',
        character: 'anjo',
        characterLabel: 'Anjo Gabriel',
        text: 'Maria.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e1_03_l2',
        character: 'anjo',
        characterLabel: 'Anjo Gabriel',
        text: 'Não tenha medo.',
        emotionGuide: 'Voz serena, majestosa e tranquila'
      },
      {
        id: 's3e1_03_l3',
        character: 'maria',
        characterLabel: 'Maria',
        text: 'Quem é você?',
        emotionGuide: 'Doce, serena, surpreendida'
      },
      {
        id: 's3e1_03_l4',
        character: 'anjo',
        characterLabel: 'Anjo Gabriel',
        text: 'Eu sou Gabriel. Deus enviou-me para falar com você.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e1_03_l5',
        character: 'anjo',
        characterLabel: 'Anjo Gabriel',
        text: 'Você terá um filho. Seu nome será Jesus.',
        soundCue: 'Música cresce'
      },
      {
        id: 's3e1_03_l6',
        character: 'anjo',
        characterLabel: 'Anjo Gabriel',
        text: 'Ele será grande. E será chamado Filho do Altíssimo.',
      }
    ]
  },
  {
    id: 4,
    sceneNumber: 4,
    title: 'Maria Confia',
    subtitle: 'A serva do Senhor',
    biblicalRef: 'Lucas 1:34-38',
    durationLabel: '35 segundos',
    estimatedDurationSec: 35,
    ambientType: 'celestial_sky',
    musicTheme: 'celestial_wonder',
    visualKey: 's3e1_04_trust',
    environmentSummary: 'O brilho angelical e o silêncio respeitoso.',
    musicDescription: 'Música suave, emocional.',
    soundEffects: [],
    directorLesson: 'A coragem de Maria ao aceitar a vontade de Deus.',
    lines: [
      {
        id: 's3e1_04_l1',
        character: 'maria',
        characterLabel: 'Maria',
        text: 'Como isso acontecerá?',
      },
      {
        id: 's3e1_04_l2',
        character: 'anjo',
        characterLabel: 'Anjo Gabriel',
        text: 'O Espírito Santo virá sobre você. E o poder do Altíssimo estará sobre você.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e1_04_l3',
        character: 'anjo',
        characterLabel: 'Anjo Gabriel',
        text: 'Para Deus nada é impossível.',
        soundCue: 'Silêncio'
      },
      {
        id: 's3e1_04_l4',
        character: 'maria',
        characterLabel: 'Maria',
        text: 'Eu sou serva do Senhor. Que aconteça comigo conforme a palavra de Deus.',
        emotionGuide: 'Corajosa, humilde e decidida',
        soundCue: 'Música emocional'
      },
      {
        id: 's3e1_04_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Maria não sabia tudo o que aconteceria. Mas decidiu confiar.',
      }
    ]
  },
  {
    id: 5,
    sceneNumber: 5,
    title: 'José',
    subtitle: 'A dúvida',
    biblicalRef: 'Mateus 1:18-19',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'nazareth_house',
    musicTheme: 'journey_hope',
    visualKey: 's3e1_05_joseph',
    environmentSummary: 'Ambiente noturno em Nazaré.',
    musicDescription: 'Música contemplativa.',
    soundEffects: ['desert_night'],
    directorLesson: 'A retidão e confusão de José.',
    lines: [
      {
        id: 's3e1_05_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'José estava noivo de Maria. Quando descobriu que ela estava grávida... ficou confuso.',
      },
      {
        id: 's3e1_05_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele não entendia o que estava acontecendo.',
        soundCue: 'Ambiente noturno'
      },
      {
        id: 's3e1_05_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Então, durante a noite...',
      }
    ]
  },
  {
    id: 6,
    sceneNumber: 6,
    title: 'O Sonho de José',
    subtitle: 'O recado divino',
    biblicalRef: 'Mateus 1:20-24',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'celestial_sky',
    musicTheme: 'celestial_wonder',
    visualKey: 's3e1_06_dream',
    environmentSummary: 'Brilho e reverberação do sonho.',
    musicDescription: 'Música celestial suave.',
    soundEffects: ['angelic_choir'],
    directorLesson: 'A revelação do plano a José e sua obediência imediata.',
    lines: [
      {
        id: 's3e1_06_l1',
        character: 'anjo',
        characterLabel: 'Anjo do Senhor',
        text: 'José. Não tenha medo de receber Maria como sua esposa. O que nela foi gerado vem de Deus.',
      },
      {
        id: 's3e1_06_l2',
        character: 'anjo',
        characterLabel: 'Anjo do Senhor',
        text: 'Ela terá um filho. E você dará a ele o nome de Jesus.',
      },
      {
        id: 's3e1_06_l3',
        character: 'anjo',
        characterLabel: 'Anjo do Senhor',
        text: 'Porque ele salvará o seu povo.',
      },
      {
        id: 's3e1_06_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Quando José acordou... ele decidiu obedecer.',
      }
    ]
  },
  {
    id: 7,
    sceneNumber: 7,
    title: 'A Viagem para Belém',
    subtitle: 'A longa estrada',
    biblicalRef: 'Lucas 2:1-5',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'bethlehem_road',
    musicTheme: 'journey_hope',
    visualKey: 's3e1_07_journey',
    environmentSummary: 'Estrada, vento, passos lentos, animal de carga caminhando.',
    musicDescription: 'Música de viagem pacífica e persistente.',
    soundEffects: ['desert_wind', 'field_sheep'],
    directorLesson: 'O cansaço e a persistência na jornada.',
    lines: [
      {
        id: 's3e1_07_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Naqueles dias... um decreto foi publicado. Cada pessoa deveria voltar à cidade de sua família.',
      },
      {
        id: 's3e1_07_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'José precisava ir para Belém. E Maria foi com ele.',
        soundCue: 'Passos e animal caminhando'
      },
      {
        id: 's3e1_07_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A viagem era longa. Mas eles continuaram.',
      }
    ]
  },
  {
    id: 8,
    sceneNumber: 8,
    title: 'Belém',
    subtitle: 'Cidade cheia',
    biblicalRef: 'Lucas 2:6-7',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'bethlehem_city',
    musicTheme: 'journey_hope',
    visualKey: 's3e1_08_bethlehem',
    environmentSummary: 'Cidade movimentada, vozes, animais.',
    musicDescription: 'Música recua um pouco, focando na dificuldade.',
    soundEffects: ['nature_sounds'],
    directorLesson: 'O contraste da promessa celestial e a falta de espaço humano.',
    lines: [
      {
        id: 's3e1_08_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Quando chegaram a Belém... a cidade estava cheia.',
        soundCue: 'Multidão'
      },
      {
        id: 's3e1_08_l2',
        character: 'jose',
        characterLabel: 'José',
        text: 'Precisamos encontrar um lugar.',
        emotionGuide: 'Preocupado, humilde, protetor'
      },
      {
        id: 's3e1_08_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas não havia lugar disponível para eles.',
        soundCue: 'Música fica mais suave'
      }
    ]
  },
  {
    id: 9,
    sceneNumber: 9,
    title: 'O Lugar Simples',
    subtitle: 'Sem luxos',
    biblicalRef: 'Lucas 2:7',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'manger_night',
    musicTheme: 'humble_birth',
    visualKey: 's3e1_09_manger',
    environmentSummary: 'Local silencioso, madeira, animais resfolegando, vento.',
    musicDescription: 'Música delicada.',
    soundEffects: ['desert_night', 'field_sheep'],
    directorLesson: 'A beleza da extrema humildade do nascimento de Jesus.',
    lines: [
      {
        id: 's3e1_09_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Então encontraram um lugar simples onde os animais ficavam.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e1_09_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Não era um palácio. Não havia luxo. Não havia grandes salões.',
        soundCue: 'Música delicada'
      },
      {
        id: 's3e1_09_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas naquela noite... aquele lugar simples se tornaria especial.',
      }
    ]
  },
  {
    id: 10,
    sceneNumber: 10,
    title: 'O Nascimento',
    subtitle: 'A chegada',
    biblicalRef: 'Lucas 2:7',
    durationLabel: '35 segundos',
    estimatedDurationSec: 35,
    ambientType: 'manger_night',
    musicTheme: 'jesus_theme',
    visualKey: 's3e1_10_birth',
    environmentSummary: 'Vento suave. O mundo prende a respiração.',
    musicDescription: 'A música quase desaparece. Após a revelação do nome, grande entrada orquestral do Tema de Jesus.',
    soundEffects: ['desert_wind'],
    directorLesson: 'O momento de maior impacto emocional do episódio. Usar o silêncio a favor.',
    lines: [
      {
        id: 's3e1_10_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E aconteceu.',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.5,
      },
      {
        id: 's3e1_10_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Maria deu à luz seu filho.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e1_10_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Seu primeiro filho. Um menino. Ela o envolveu em panos... e o colocou em uma manjedoura.',
        soundCue: 'Respiração suave de bebê e a música começa a crescer'
      },
      {
        id: 's3e1_10_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Seu nome era...',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 1.5,
      },
      {
        id: 's3e1_10_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'JESUS.',
        soundCue: 'Grande entrada emocionante do Tema Principal de Jesus'
      }
    ]
  },
  {
    id: 11,
    sceneNumber: 11,
    title: 'A Noite Mais Especial',
    subtitle: 'A mudança',
    biblicalRef: '',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'manger_night',
    musicTheme: 'jesus_theme',
    visualKey: 's3e1_11_night',
    environmentSummary: 'Paz noturna.',
    musicDescription: 'Música emocional sustentando o milagre.',
    soundEffects: ['desert_night'],
    directorLesson: 'O sentimento de que a história mudou em silêncio.',
    lines: [
      {
        id: 's3e1_11_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Naquela noite... o mundo parecia igual. As estrelas brilhavam. O vento soprava. As pessoas dormiam.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e1_11_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas algo havia mudado. Jesus havia nascido.',
      },
      {
        id: 's3e1_11_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A esperança havia chegado.',
      }
    ]
  },
  {
    id: 12,
    sceneNumber: 12,
    title: 'Os Pastores',
    subtitle: 'No campo',
    biblicalRef: 'Lucas 2:8',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'shepherd_field_night',
    musicTheme: 'star_mystery',
    visualKey: 's3e1_12_shepherds',
    environmentSummary: 'Ovelhas, fogueira crepitando, grilos.',
    musicDescription: 'Subitamente cortada por uma música celestial de espanto.',
    soundEffects: ['field_sheep', 'desert_night'],
    directorLesson: 'O susto dos pastores na vigília noturna.',
    lines: [
      {
        id: 's3e1_12_l1',
        character: 'pastor',
        characterLabel: 'Pastor 1',
        text: 'Está tudo tranquilo esta noite.',
      },
      {
        id: 's3e1_12_l2',
        character: 'pastor',
        characterLabel: 'Pastor 2',
        text: 'Sim. Os animais estão descansando.',
        soundCue: 'Música celestial e brilho'
      },
      {
        id: 's3e1_12_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Então... uma luz apareceu.',
      },
      {
        id: 's3e1_12_l4',
        character: 'pastor',
        characterLabel: 'Pastor 1',
        text: 'O que está acontecendo?',
        emotionGuide: 'Assustado, protegendo os olhos da luz'
      }
    ]
  },
  {
    id: 13,
    sceneNumber: 13,
    title: 'Os Anjos',
    subtitle: 'A boa notícia',
    biblicalRef: 'Lucas 2:9-12',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'celestial_sky',
    musicTheme: 'celestial_wonder',
    visualKey: 's3e1_13_angels',
    environmentSummary: 'Atmosfera celestial majestosa e vasta.',
    musicDescription: 'Música gloriosa e resplandecente.',
    soundEffects: ['angelic_choir'],
    directorLesson: 'A revelação triunfal do nascimento para homens simples.',
    lines: [
      {
        id: 's3e1_13_l1',
        character: 'anjo',
        characterLabel: 'Anjo',
        text: 'Não tenham medo! Estou trazendo uma boa notícia para vocês. Uma notícia que trará grande alegria.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e1_13_l2',
        character: 'anjo',
        characterLabel: 'Anjo',
        text: 'Hoje nasceu o Salvador. Ele é Cristo, o Senhor.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e1_13_l3',
        character: 'anjo',
        characterLabel: 'Anjo',
        text: 'Vocês o encontrarão envolvido em panos... e deitado em uma manjedoura.',
        soundCue: 'Música cresce'
      }
    ]
  },
  {
    id: 14,
    sceneNumber: 14,
    title: 'O Céu se Enche de Anjos',
    subtitle: 'Glória a Deus',
    biblicalRef: 'Lucas 2:13-14',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'celestial_sky',
    musicTheme: 'angelic_choir',
    visualKey: 's3e1_14_choir',
    environmentSummary: 'Vento e coro celestial resplandecente.',
    musicDescription: 'Curta e poderosa manifestação de alegria.',
    soundEffects: ['angelic_choir', 'desert_wind'],
    directorLesson: 'Louvor majestoso, forte e rápido.',
    lines: [
      {
        id: 's3e1_14_l1',
        character: 'anjos',
        characterLabel: 'Multidão de Anjos',
        text: 'Glória a Deus nas alturas! E paz na terra!',
        emotionGuide: 'Som celestial uníssono em reverência profunda'
      }
    ]
  },
  {
    id: 15,
    sceneNumber: 15,
    title: 'Os Pastores vão até Jesus',
    subtitle: 'A pressa',
    biblicalRef: 'Lucas 2:15-16',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'shepherd_field_night',
    musicTheme: 'journey_hope',
    visualKey: 's3e1_15_visit',
    environmentSummary: 'Passos apressados, ovelhas movendo-se.',
    musicDescription: 'Música de aventura suave e urgente.',
    soundEffects: ['field_sheep'],
    directorLesson: 'A excitação após a revelação.',
    lines: [
      {
        id: 's3e1_15_l1',
        character: 'pastor',
        characterLabel: 'Pastor',
        text: 'Vamos até Belém! Precisamos ver esse menino!',
        soundCue: 'Passos e ovelhas'
      },
      {
        id: 's3e1_15_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles foram depressa. E encontraram Maria. José. E o bebê.',
      }
    ]
  },
  {
    id: 16,
    sceneNumber: 16,
    title: 'Diante da Manjedoura',
    subtitle: 'A adoração',
    biblicalRef: 'Lucas 2:16-17',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'manger_night',
    musicTheme: 'jesus_theme',
    visualKey: 's3e1_16_adoration',
    environmentSummary: 'Respiração extasiada dos pastores. Silêncio.',
    musicDescription: 'Música extremamente emocional.',
    soundEffects: ['desert_night'],
    directorLesson: 'A contemplação humilde diante de Jesus.',
    lines: [
      {
        id: 's3e1_16_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles olharam para o menino. Era tão pequeno. Tão simples.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e1_16_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas os pastores sabiam. Aquela criança era o Salvador anunciado pelos anjos.',
      },
      {
        id: 's3e1_16_l3',
        character: 'pastor',
        characterLabel: 'Pastor',
        text: 'É verdade. Ele nasceu.',
        emotionGuide: 'Com lágrimas e sorrisos',
        soundCue: 'Música cresce'
      }
    ]
  },
  {
    id: 17,
    sceneNumber: 17,
    title: 'Maria Guarda Tudo',
    subtitle: 'No coração',
    biblicalRef: 'Lucas 2:19',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'manger_night',
    musicTheme: 'humble_birth',
    visualKey: 's3e1_17_mary_heart',
    environmentSummary: 'Paz do estábulo.',
    musicDescription: 'Música delicada.',
    soundEffects: [],
    directorLesson: 'A reflexão interior de Maria, mãe, serva e grata.',
    lines: [
      {
        id: 's3e1_17_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Maria guardava todas aquelas coisas no coração. Ela observava. Pensava. E agradecia a Deus.',
      },
      {
        id: 's3e1_17_l2',
        character: 'maria',
        characterLabel: 'Maria',
        text: 'Obrigada, Senhor.',
        emotionGuide: 'Sussurrando em oração suave e aliviada'
      }
    ]
  },
  {
    id: 18,
    sceneNumber: 18,
    title: 'A Estrela',
    subtitle: 'No Oriente',
    biblicalRef: 'Mateus 2:1-2',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'star_sky',
    musicTheme: 'star_mystery',
    visualKey: 's3e1_18_star',
    environmentSummary: 'Noite misteriosa, vento distante.',
    musicDescription: 'Música de mistério e chamado distante.',
    soundEffects: ['desert_wind'],
    directorLesson: 'A abrangência cósmica do evento: do humilde pastor aos sábios de outras terras.',
    lines: [
      {
        id: 's3e1_18_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E muito longe dali... alguns sábios do Oriente observavam o céu.',
        soundCue: 'Vento noturno'
      },
      {
        id: 's3e1_18_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles viram uma estrela especial.',
      },
      {
        id: 's3e1_18_l3',
        character: 'sabio',
        characterLabel: 'Sábio 1',
        text: 'Olhem! Uma nova estrela.',
      },
      {
        id: 's3e1_18_l4',
        character: 'sabio',
        characterLabel: 'Sábio 2',
        text: 'Precisamos descobrir o que ela significa.',
      },
      {
        id: 's3e1_18_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles entenderam que algo extraordinário havia acontecido.',
      }
    ]
  },
  {
    id: 19,
    sceneNumber: 19,
    title: 'A Jornada dos Sábios',
    subtitle: 'Viagem de fé',
    biblicalRef: 'Mateus 2:9-11',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'desert_night',
    musicTheme: 'journey_hope',
    visualKey: 's3e1_19_wisemen',
    environmentSummary: 'Caminhada nas areias, camelos.',
    musicDescription: 'Música de aventura e exploração sagrada.',
    soundEffects: ['desert_wind'],
    directorLesson: 'A fé daqueles que seguiram uma luz sem ter todas as respostas.',
    lines: [
      {
        id: 's3e1_19_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles partiram em uma longa viagem. Levaram presentes. E seguiram o sinal que haviam visto.',
      },
      {
        id: 's3e1_19_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Era uma viagem de fé.',
      }
    ]
  },
  {
    id: 20,
    sceneNumber: 20,
    title: 'O Significado',
    subtitle: 'Para todos',
    biblicalRef: '',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'manger_night',
    musicTheme: 'jesus_theme',
    visualKey: 's3e1_20_meaning',
    environmentSummary: 'Silêncio reconfortante.',
    musicDescription: 'Música emocional com piano e cordas serenas.',
    soundEffects: [],
    directorLesson: 'Amarrar os temas de humildade e universalidade da mensagem de Jesus.',
    lines: [
      {
        id: 's3e1_20_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus não nasceu em um palácio. Nasceu em humildade.',
      },
      {
        id: 's3e1_20_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Não foi recebido por reis em um grande salão. Foi visitado por pastores.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e1_20_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Porque a esperança de Deus não pertencia apenas aos poderosos. Era para todos.',
      }
    ]
  },
  {
    id: 21,
    sceneNumber: 21,
    title: 'A Grande Mensagem',
    subtitle: 'Luz no escuro',
    biblicalRef: '',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'desert_wind',
    musicTheme: 'gentle_teaching',
    visualKey: 's3e1_21_message',
    environmentSummary: 'Encerramento acolhedor e consolador.',
    musicDescription: 'Música acolhedora.',
    soundEffects: [],
    directorLesson: 'Lição moral cristalina, falando ao coração das crianças sobre serviço e amor.',
    lines: [
      {
        id: 's3e1_21_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O nascimento de Jesus nos ensina que Deus pode trazer esperança mesmo quando o mundo parece escuro.',
      },
      {
        id: 's3e1_21_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus veio para mostrar o amor de Deus. Veio para ensinar. Veio para servir. Veio para trazer esperança.',
      }
    ]
  },
  {
    id: 22,
    sceneNumber: 22,
    title: 'Mensagem para as Crianças',
    subtitle: 'Deus não esqueceu você',
    biblicalRef: '',
    durationLabel: '35 segundos',
    estimatedDurationSec: 35,
    ambientType: 'desert_wind',
    musicTheme: 'gentle_teaching',
    visualKey: 's3e1_22_children',
    environmentSummary: 'Proximidade vocal e segurança.',
    musicDescription: 'Música muito emotiva, reconfortante.',
    soundEffects: [],
    directorLesson: 'Falar de forma empática sobre a solidão infantil, mostrando que não estão só.',
    lines: [
      {
        id: 's3e1_22_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Talvez você já tenha se sentido sozinho. Talvez tenha sentido medo.',
      },
      {
        id: 's3e1_22_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Talvez tenha pensado que ninguém percebe o que você está vivendo.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e1_22_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a história de Jesus começa com uma mensagem poderosa. Deus não esqueceu você.',
      },
      {
        id: 's3e1_22_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Existe esperança. Existe amor. E a história de Jesus está apenas começando.',
      }
    ]
  },
  {
    id: 23,
    sceneNumber: 23,
    title: 'Final da Abertura da Temporada',
    subtitle: 'O início',
    biblicalRef: '',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'desert_wind',
    musicTheme: 'jesus_theme',
    visualKey: 's3e1_23_finale',
    environmentSummary: 'Tema final do episódio crescendo grandiosamente.',
    musicDescription: 'O novo grande Tema Principal de Jesus resplandece.',
    soundEffects: [],
    directorLesson: 'Apresentar Jesus como o centro dessa temporada.',
    lines: [
      {
        id: 's3e1_23_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Um bebê nasceu em Belém.',
        soundCue: 'Música principal de Jesus cresce'
      },
      {
        id: 's3e1_23_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas aquele bebê cresceria. Aprenderia. Ensinaria. Curaria. Amaria. E mudaria a história para sempre.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e1_23_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Esta é apenas a primeira página.',
      }
    ]
  },
  {
    id: 24,
    sceneNumber: 24,
    title: 'Gancho',
    subtitle: 'Jesus no templo',
    biblicalRef: '',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'desert_wind',
    musicTheme: 'temple_hook',
    visualKey: 's3e1_24_hook',
    environmentSummary: 'Transição do grandioso para o misterioso e curioso.',
    musicDescription: 'Música misteriosa crescendo suavemente.',
    soundEffects: [],
    directorLesson: 'Instigar o ouvinte com a inteligência infanto-juvenil de Jesus.',
    lines: [
      {
        id: 's3e1_24_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Anos depois... quando Jesus ainda era menino... algo extraordinário aconteceria no templo de Jerusalém.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e1_24_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Seus pais procurariam por ele. E encontrariam Jesus conversando com os mestres.',
        soundCue: 'Música cresce'
      },
      {
        id: 's3e1_24_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O que um menino tão jovem estaria fazendo ali?',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e1_24_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Essa será a próxima aventura.',
      }
    ]
  },
  {
    id: 25,
    sceneNumber: 25,
    title: 'Assinatura',
    subtitle: 'Toon Tales Kids',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'toon_tales_jingle',
    musicTheme: 'signature_jingle',
    visualKey: 's3e1_25_outro',
    environmentSummary: 'Logotipo sonoro',
    musicDescription: 'A música da história diminui. Entra o tema musical alegre.',
    soundEffects: ['toon_tales_jingle'],
    directorLesson: 'Assinatura vibrante de término oficial.',
    lines: [
      {
        id: 's3e1_25_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E essa foi mais uma aventura da Bíblia em Áudio.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e1_25_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a história ainda não terminou...',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's3e1_25_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma nova aventura está esperando por você.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e1_25_l4',
        character: 'child',
        characterLabel: 'Crianças',
        text: 'TOON TALES KIDS!',
        emotionGuide: 'Em coro feliz e forte'
      },
      {
        id: 's3e1_25_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Histórias que ensinam, aventuras que transformam!',
      }
    ]
  }
];

export const JESUS_NASCIMENTO_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    dayLabel: 'A Mensagem',
    question: 'Quem Deus enviou para falar com Maria em Nazaré?',
    options: ['O profeta Samuel', 'Um sábio do Oriente', 'O Anjo Gabriel', 'Um dos pastores'],
    correctIndex: 2,
    explanation: 'Deus enviou o Anjo Gabriel para anunciar a Maria que ela teria um filho chamado Jesus.',
    biblicalVerse: 'Lucas 1:26-31',
  },
  {
    id: 2,
    dayLabel: 'O Propósito',
    question: 'Em um sonho, o que o anjo explicou a José sobre o bebê?',
    options: ['Que ele seria um grande rei em um palácio', 'Que ele seria um soldado', 'Que ele seria o maior fazendeiro', 'Que ele salvaria o seu povo'],
    correctIndex: 3,
    explanation: 'O anjo disse a José para não ter medo e que Jesus veio com uma missão divina: salvar o Seu povo.',
    biblicalVerse: 'Mateus 1:20-21',
  },
  {
    id: 3,
    dayLabel: 'O Lugar',
    question: 'Por que Jesus foi colocado numa manjedoura quando nasceu em Belém?',
    options: ['Porque eles gostavam de dormir com os animais', 'Porque Maria achou a manjedoura muito confortável', 'Porque não havia lugar disponível para eles na cidade', 'Porque foi uma ordem do rei'],
    correctIndex: 2,
    explanation: 'A cidade de Belém estava muito cheia por causa do recenseamento, e não havia lugar para eles ficarem, mostrando a humildade do nascimento de Jesus.',
    biblicalVerse: 'Lucas 2:7',
  },
  {
    id: 4,
    dayLabel: 'A Notícia',
    question: 'Quem foram os primeiros a receber a notícia do nascimento de Jesus?',
    options: ['Os pastores que estavam no campo cuidando de ovelhas', 'O rei que morava no palácio', 'Os soldados de Israel', 'Os comerciantes de Belém'],
    correctIndex: 0,
    explanation: 'Um anjo, acompanhado de uma multidão do exército celestial, apareceu aos humildes pastores no campo para lhes dar a grande notícia.',
    biblicalVerse: 'Lucas 2:8-11',
  },
  {
    id: 5,
    dayLabel: 'O Sinal',
    question: 'O que guiou os sábios do Oriente em sua viagem?',
    options: ['Um mapa antigo e secreto', 'Um pássaro especial que voava na frente deles', 'Uma estrela brilhante no céu', 'Um anjo que caminhava pela estrada com eles'],
    correctIndex: 2,
    explanation: 'Os sábios viram uma estrela especial no Oriente e a seguiram em sua jornada de fé, pois entenderam que era o sinal do nascimento de um rei.',
    biblicalVerse: 'Mateus 2:1-2',
  }
];
