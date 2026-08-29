import { Scene, QuizQuestion } from '../types';

export const EPISODE_META_T2E4 = {
  id: 't2e4',
  title: 'Josué e Jericó',
  subtitle: 'As muralhas que caíram',
  biblicalText: 'Josué 1–6',
  durationLabel: '14 min',
  moralLesson: 'Fé significa confiar em Deus mesmo quando não entendemos imediatamente como Ele fará alguma coisa.',
};

export const JOSUE_SCENES: Scene[] = [
  {
    id: 1,
    sceneNumber: 1,
    title: 'Depois de Moisés',
    subtitle: 'Uma nova missão',
    biblicalRef: 'Josué 1',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'camp_israel',
    musicTheme: 'pure_serenity',
    visualKey: 's2e4_01_leadership',
    environmentSummary: 'Acampamento de Israel. Vento. Pessoas.',
    musicDescription: 'Música contemplativa.',
    soundEffects: ['desert_wind', 'nature_sounds'],
    directorLesson: 'O peso da liderança passando de Moisés para Josué.',
    lines: [
      {
        id: 's2e4_01_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Depois de muitos anos guiando o povo... Moisés havia partido.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e4_01_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Agora, uma nova missão estava diante de Josué.',
        soundCue: 'Música começa a crescer'
      },
      {
        id: 's2e4_01_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele seria o novo líder de Israel.',
      },
      {
        id: 's2e4_01_l4',
        character: 'josue',
        characterLabel: 'Josué',
        text: 'Senhor... Eu estou pronto.',
        emotionGuide: 'Firme mas apreensivo',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e4_01_l5',
        character: 'josue',
        characterLabel: 'Josué',
        text: 'Mas preciso da sua ajuda.',
      }
    ]
  },
  {
    id: 2,
    sceneNumber: 2,
    title: 'Seja Forte e Corajoso',
    subtitle: 'A promessa',
    biblicalRef: 'Josué 1:5-9',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'camp_israel',
    musicTheme: 'joshua_courage',
    visualKey: 's2e4_02_courage',
    environmentSummary: 'Vento e a voz de Deus serena e poderosa.',
    musicDescription: 'Música suave, transmitindo coragem.',
    soundEffects: ['desert_wind'],
    directorLesson: 'Deus infundindo confiança em Josué.',
    lines: [
      {
        id: 's2e4_02_l1',
        character: 'god',
        characterLabel: 'Voz de Deus',
        text: 'Josué... Seja forte e corajoso.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e4_02_l2',
        character: 'god',
        characterLabel: 'Voz de Deus',
        text: 'Não tenha medo. Eu estarei com você.',
      },
      {
        id: 's2e4_02_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Josué ouviu aquelas palavras. E guardou-as no coração.',
      },
      {
        id: 's2e4_02_l4',
        character: 'god',
        characterLabel: 'Voz de Deus',
        text: 'Assim como estive com Moisés... estarei com você.',
        soundCue: 'Música cresce'
      }
    ]
  },
  {
    id: 3,
    sceneNumber: 3,
    title: 'Preparando o Povo',
    subtitle: 'Prontos para partir',
    biblicalRef: 'Josué 1:10-11',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'camp_israel',
    musicTheme: 'joshua_courage',
    visualKey: 's2e4_03_prepare',
    environmentSummary: 'Acampamento, passos, vozes.',
    musicDescription: 'Música de preparação.',
    soundEffects: ['nature_sounds'],
    directorLesson: 'A energia da liderança ativa de Josué.',
    lines: [
      {
        id: 's2e4_03_l1',
        character: 'josue',
        characterLabel: 'Josué',
        text: 'Preparem alimentos. Estamos prestes a partir.',
        emotionGuide: 'Firme'
      },
      {
        id: 's2e4_03_l2',
        character: 'israelita',
        characterLabel: 'Povo',
        text: 'Sim!',
        emotionGuide: 'Vozes múltiplas concordando'
      },
      {
        id: 's2e4_03_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O povo se preparou. Depois de tantos anos no deserto... eles estavam finalmente se aproximando da terra prometida.',
      }
    ]
  },
  {
    id: 4,
    sceneNumber: 4,
    title: 'O Rio Jordão',
    subtitle: 'Um novo milagre',
    biblicalRef: 'Josué 3',
    durationLabel: '35 segundos',
    estimatedDurationSec: 35,
    ambientType: 'jordan_river',
    musicTheme: 'miracle_climax',
    visualKey: 's2e4_04_jordan',
    environmentSummary: 'Água corrente forte e depois parando.',
    musicDescription: 'Música majestosa de descoberta.',
    soundEffects: ['ocean_waters'],
    directorLesson: 'Mostrar a continuidade do poder de Deus (como no Mar Vermelho).',
    lines: [
      {
        id: 's2e4_04_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas havia um obstáculo. O rio Jordão. Suas águas estavam fortes.',
      },
      {
        id: 's2e4_04_l2',
        character: 'child',
        characterLabel: 'Criança',
        text: 'Como vamos atravessar?',
      },
      {
        id: 's2e4_04_l3',
        character: 'josue',
        characterLabel: 'Josué',
        text: 'Confiem em Deus.',
      },
      {
        id: 's2e4_04_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E Deus abriu o caminho.',
        soundCue: 'Água diminuindo'
      },
      {
        id: 's2e4_04_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os sacerdotes carregando a arca avançaram. E o povo atravessou.',
      }
    ]
  },
  {
    id: 5,
    sceneNumber: 5,
    title: 'Diante de Jericó',
    subtitle: 'A cidade gigante',
    biblicalRef: 'Josué 5:13',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'jericho_walls',
    musicTheme: 'mysterious_jericho',
    visualKey: 's2e4_05_jericho',
    environmentSummary: 'Vento batendo nas pedras gigantescas.',
    musicDescription: 'Música misteriosa e ameaçadora.',
    soundEffects: ['desert_wind'],
    directorLesson: 'A enormidade do obstáculo.',
    lines: [
      {
        id: 's2e4_05_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Depois da travessia... uma cidade apareceu diante deles.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e4_05_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jericó.',
        soundCue: 'Música fica misteriosa'
      },
      {
        id: 's2e4_05_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Suas muralhas eram enormes.',
      },
      {
        id: 's2e4_05_l4',
        character: 'child',
        characterLabel: 'Criança',
        text: 'Olha o tamanho dessas muralhas!',
      },
      {
        id: 's2e4_05_l5',
        character: 'israelita',
        characterLabel: 'Outra voz',
        text: 'Como vamos entrar?',
      },
      {
        id: 's2e4_05_l6',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Parecia impossível.',
      }
    ]
  },
  {
    id: 6,
    sceneNumber: 6,
    title: 'Os Espias',
    subtitle: 'A coragem de Raabe',
    biblicalRef: 'Josué 2',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'jericho_inside',
    musicTheme: 'suspense_spies',
    visualKey: 's2e4_06_spies',
    environmentSummary: 'Passos discretos. Tensão.',
    musicDescription: 'Música de suspense.',
    soundEffects: ['desert_night'],
    directorLesson: 'A tensão dos espias e a bravura surpreendente de Raabe.',
    lines: [
      {
        id: 's2e4_06_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Antes de enfrentar Jericó... Josué enviou dois homens para observar a cidade.',
      },
      {
        id: 's2e4_06_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles entraram secretamente. Mas foram descobertos.',
        soundCue: 'Música tensa'
      },
      {
        id: 's2e4_06_l3',
        character: 'raabe',
        characterLabel: 'Raabe',
        text: 'Venham comigo! Escondam-se aqui.',
        emotionGuide: 'Determinada e acolhedora em sussurro firme'
      },
      {
        id: 's2e4_06_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma mulher chamada Raabe decidiu ajudá-los.',
      },
      {
        id: 's2e4_06_l5',
        character: 'raabe',
        characterLabel: 'Raabe',
        text: 'Eu sei que o Senhor está com vocês. Ouvi tudo o que Deus fez por Israel.',
      },
      {
        id: 's2e4_06_l6',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Raabe demonstrou coragem. E protegeu os homens.',
      }
    ]
  },
  {
    id: 7,
    sceneNumber: 7,
    title: 'O Retorno dos Espias',
    subtitle: 'Relatório encorajador',
    biblicalRef: 'Josué 2:23-24',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'camp_israel',
    musicTheme: 'joshua_courage',
    visualKey: 's2e4_07_return',
    environmentSummary: 'Acampamento.',
    musicDescription: 'Música recobra confiança.',
    soundEffects: ['nature_sounds'],
    directorLesson: 'O relato dos espias traz fé a Josué.',
    lines: [
      {
        id: 's2e4_07_l1',
        character: 'josue',
        characterLabel: 'Josué',
        text: 'O que vocês descobriram?',
      },
      {
        id: 's2e4_07_l2',
        character: 'espia',
        characterLabel: 'Espia 1',
        text: 'Jericó está fortemente protegida.',
      },
      {
        id: 's2e4_07_l3',
        character: 'espia',
        characterLabel: 'Espia 2',
        text: 'Mas o povo está com medo de nós.',
      },
      {
        id: 's2e4_07_l4',
        character: 'josue',
        characterLabel: 'Josué',
        text: 'Então precisamos confiar em Deus.',
      }
    ]
  },
  {
    id: 8,
    sceneNumber: 8,
    title: 'O Plano Inesperado',
    subtitle: 'As voltas e as trombetas',
    biblicalRef: 'Josué 6:2-5',
    durationLabel: '45 segundos',
    estimatedDurationSec: 45,
    ambientType: 'camp_israel',
    musicTheme: 'mysterious_jericho',
    visualKey: 's2e4_08_plan',
    environmentSummary: 'Vento e mistério.',
    musicDescription: 'Música misteriosa revelando o plano estranho.',
    soundEffects: ['desert_wind'],
    directorLesson: 'A confusão de um plano militar que envolve caminhar e silêncio.',
    lines: [
      {
        id: 's2e4_08_l1',
        character: 'god',
        characterLabel: 'Voz de Deus',
        text: 'Josué... Marcharão ao redor da cidade. Uma vez por dia. Durante seis dias.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e4_08_l2',
        character: 'god',
        characterLabel: 'Voz de Deus',
        text: 'No sétimo dia... vocês marcharão sete vezes. Depois... os sacerdotes tocarão as trombetas. E todo o povo gritará.',
      },
      {
        id: 's2e4_08_l3',
        character: 'josue',
        characterLabel: 'Josué',
        text: 'Senhor... É só isso?',
        emotionGuide: 'Pequena confusão, mas muito respeitoso'
      },
      {
        id: 's2e4_08_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Josué provavelmente poderia imaginar muitas maneiras de conquistar uma cidade.',
      },
      {
        id: 's2e4_08_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas aquele plano era diferente de tudo.',
      }
    ]
  },
  {
    id: 9,
    sceneNumber: 9,
    title: 'Primeiro Dia',
    subtitle: 'Silêncio',
    biblicalRef: 'Josué 6:11',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'jericho_walls',
    musicTheme: 'march_rhythm',
    visualKey: 's2e4_09_day1',
    environmentSummary: 'Passos sincronizados. Trombetas muito suaves.',
    musicDescription: 'Música minimalista e cadenciada.',
    soundEffects: ['desert_wind'],
    directorLesson: 'A tensão de um grande exército em total silêncio.',
    lines: [
      {
        id: 's2e4_09_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'No primeiro dia... o povo marchou.',
      },
      {
        id: 's2e4_09_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma volta. Silêncio. Ninguém atacou. Ninguém gritou.',
      },
      {
        id: 's2e4_09_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Apenas caminharam.',
      }
    ]
  },
  {
    id: 10,
    sceneNumber: 10,
    title: 'Segundo Dia',
    subtitle: 'A mesma coisa',
    biblicalRef: 'Josué 6:14',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'jericho_walls',
    musicTheme: 'march_rhythm',
    visualKey: 's2e4_10_day2',
    environmentSummary: 'Mais passos.',
    musicDescription: 'Música minimalista.',
    soundEffects: ['desert_wind'],
    directorLesson: 'A repetição da obediência.',
    lines: [
      {
        id: 's2e4_10_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'No segundo dia... marcharam novamente.',
      },
      {
        id: 's2e4_10_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma volta. Depois voltaram para o acampamento.',
      }
    ]
  },
  {
    id: 11,
    sceneNumber: 11,
    title: 'Terceiro, Quarto e Quinto Dias',
    subtitle: 'A espera',
    biblicalRef: 'Josué 6:14',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'jericho_walls',
    musicTheme: 'march_rhythm',
    visualKey: 's2e4_11_days3to5',
    environmentSummary: 'Montagem de passos e ventos com trombetas distantes.',
    musicDescription: 'O ritmo continua, mas ligeiras dúvidas pairam.',
    soundEffects: ['desert_wind'],
    directorLesson: 'A tentação de duvidar no meio do processo.',
    lines: [
      {
        id: 's2e4_11_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Terceiro dia. Quarto dia. Quinto dia. Todos continuavam obedecendo.',
      },
      {
        id: 's2e4_11_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Talvez algumas pessoas estivessem pensando:',
      },
      {
        id: 's2e4_11_l3',
        character: 'israelita',
        characterLabel: 'Israelita',
        text: 'Quando as muralhas vão cair?',
        emotionGuide: 'Cochichando e curioso'
      },
      {
        id: 's2e4_11_l4',
        character: 'israelita',
        characterLabel: 'Outra voz',
        text: 'Não sei.',
      },
      {
        id: 's2e4_11_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas ninguém deveria abandonar o plano.',
      }
    ]
  },
  {
    id: 12,
    sceneNumber: 12,
    title: 'Sexto Dia',
    subtitle: 'A última volta unitária',
    biblicalRef: 'Josué 6:14',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'jericho_walls',
    musicTheme: 'march_rhythm',
    visualKey: 's2e4_12_day6',
    environmentSummary: 'Passos constantes.',
    musicDescription: 'Música mais profunda.',
    soundEffects: ['desert_wind'],
    directorLesson: 'A tensão pré-clímax.',
    lines: [
      {
        id: 's2e4_12_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Sexto dia. Mais uma volta. E depois... silêncio.',
      },
      {
        id: 's2e4_12_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Josué sabia que o dia seguinte seria diferente.',
      }
    ]
  },
  {
    id: 13,
    sceneNumber: 13,
    title: 'O Sétimo Dia',
    subtitle: 'Cedo pela manhã',
    biblicalRef: 'Josué 6:15',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'jericho_walls',
    musicTheme: 'miracle_climax',
    visualKey: 's2e4_13_day7',
    environmentSummary: 'Acampamento despertando cedo.',
    musicDescription: 'Música quase silenciosa.',
    soundEffects: ['desert_wind'],
    directorLesson: 'O início do dia mais importante.',
    lines: [
      {
        id: 's2e4_13_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Então chegou o sétimo dia.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e4_13_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Antes mesmo do sol ficar alto... o povo se levantou.',
      },
      {
        id: 's2e4_13_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E começaram a marchar.',
      }
    ]
  },
  {
    id: 14,
    sceneNumber: 14,
    title: 'Sete Voltas',
    subtitle: 'A tensão aumenta',
    biblicalRef: 'Josué 6:15',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'jericho_walls',
    musicTheme: 'miracle_climax',
    visualKey: 's2e4_14_seven_laps',
    environmentSummary: 'Passos em montagem crescendo e acelerando.',
    musicDescription: 'A tensão musical sobe.',
    soundEffects: ['desert_wind'],
    directorLesson: 'Uma montagem claustrofóbica da repetição até a volta final.',
    lines: [
      {
        id: 's2e4_14_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Primeira volta. Segunda. Terceira.',
      },
      {
        id: 's2e4_14_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Quarta. Quinta. Sexta.',
      },
      {
        id: 's2e4_14_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E então... chegou a sétima volta.',
        soundCue: 'Silêncio'
      }
    ]
  },
  {
    id: 15,
    sceneNumber: 15,
    title: 'As Trombetas',
    subtitle: 'O grito de vitória',
    biblicalRef: 'Josué 6:16',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'jericho_walls',
    musicTheme: 'miracle_climax',
    visualKey: 's2e4_15_trumpets',
    environmentSummary: 'Silêncio absoluto, depois estrondo de trombetas e um grande grito.',
    musicDescription: 'A música explode com poder absoluto.',
    soundEffects: [],
    directorLesson: 'O momento da obediência radical de gritar para a pedra maciça.',
    lines: [
      {
        id: 's2e4_15_l1',
        character: 'josue',
        characterLabel: 'Josué',
        text: 'Agora!',
      },
      {
        id: 's2e4_15_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os sacerdotes tocaram as trombetas!',
        soundCue: 'Trombetas tocando fortíssimas'
      },
      {
        id: 's2e4_15_l3',
        character: 'josue',
        characterLabel: 'Josué',
        text: 'GRITEM!',
      },
      {
        id: 's2e4_15_l4',
        character: 'israelita',
        characterLabel: 'Povo',
        text: 'AHHHHH!',
        emotionGuide: 'Grande grito coletivo'
      }
    ]
  },
  {
    id: 16,
    sceneNumber: 16,
    title: 'As Muralhas Caem',
    subtitle: 'O impossível acontece',
    biblicalRef: 'Josué 6:20',
    durationLabel: '35 segundos',
    estimatedDurationSec: 35,
    ambientType: 'jericho_walls',
    musicTheme: 'miracle_climax',
    visualKey: 's2e4_16_walls_fall',
    environmentSummary: 'As pedras começam a estalar, vibrar e desmoronam numa grande nuvem de som.',
    musicDescription: 'Música suspensa para focar nos efeitos sonoros.',
    soundEffects: ['desert_wind'],
    directorLesson: 'O milagre colossal com foco sonoro no desmoronamento.',
    lines: [
      {
        id: 's2e4_16_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Então... as muralhas começaram a tremer.',
        soundCue: 'Pedras vibrando e estalando'
      },
      {
        id: 's2e4_16_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E as enormes muralhas de Jericó...',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's2e4_16_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'CAÍRAM.',
        soundCue: 'Grande impacto sonoro, pedras desmoronando, poeira'
      }
    ]
  },
  {
    id: 17,
    sceneNumber: 17,
    title: 'Admiração',
    subtitle: 'Promessa cumprida',
    biblicalRef: 'Josué 6:20',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'jericho_walls',
    musicTheme: 'triumphant_joy',
    visualKey: 's2e4_17_amazement',
    environmentSummary: 'Vento e respiração de choque e alívio.',
    musicDescription: 'Música triunfante.',
    soundEffects: ['desert_wind'],
    directorLesson: 'O povo absorvendo a grandeza de Deus que lhes deu a cidade.',
    lines: [
      {
        id: 's2e4_17_l1',
        character: 'child',
        characterLabel: 'Criança',
        text: 'Caíram!',
      },
      {
        id: 's2e4_17_l2',
        character: 'child',
        characterLabel: 'Outra criança',
        text: 'As muralhas caíram!',
      },
      {
        id: 's2e4_17_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O povo ficou maravilhado. Deus havia feito exatamente o que havia prometido.',
      }
    ]
  },
  {
    id: 18,
    sceneNumber: 18,
    title: 'A Fé de Raabe',
    subtitle: 'Preservada',
    biblicalRef: 'Josué 6:25',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'jericho_inside',
    musicTheme: 'pure_serenity',
    visualKey: 's2e4_18_rahab',
    environmentSummary: 'Tranquilidade e gratidão.',
    musicDescription: 'Música emocional de salvação.',
    soundEffects: ['desert_wind'],
    directorLesson: 'Lembrar a fidelidade para com Raabe que também creu.',
    lines: [
      {
        id: 's2e4_18_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Raabe e sua família foram preservadas, conforme havia sido prometido aos espias.',
      },
      {
        id: 's2e4_18_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A coragem de Raabe também fazia parte daquela história. Ela havia confiado no Deus de Israel.',
      }
    ]
  },
  {
    id: 19,
    sceneNumber: 19,
    title: 'A Grande Lição',
    subtitle: 'Perseverança',
    biblicalRef: '',
    durationLabel: '45 segundos',
    estimatedDurationSec: 45,
    ambientType: 'desert_wind',
    musicTheme: 'gentle_teaching',
    visualKey: 's2e4_19_lesson',
    environmentSummary: 'Vento.',
    musicDescription: 'Música acolhedora.',
    soundEffects: [],
    directorLesson: 'O sentido de marchar e esperar os planos de Deus.',
    lines: [
      {
        id: 's2e4_19_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Às vezes... Deus pode nos pedir para fazer algo que não entendemos imediatamente.',
      },
      {
        id: 's2e4_19_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Talvez pareça simples demais. Talvez pareça difícil demais. Talvez você pense: "Por que preciso continuar?"',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e4_19_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A história de Jericó nos ensina a perseverar.',
      },
      {
        id: 's2e4_19_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Um passo. Depois outro. Depois mais um. Até chegar ao fim.',
      }
    ]
  },
  {
    id: 20,
    sceneNumber: 20,
    title: 'Frase para as Crianças',
    subtitle: 'Confie',
    biblicalRef: '',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'desert_wind',
    musicTheme: 'gentle_teaching',
    visualKey: 's2e4_20_phrase',
    environmentSummary: 'Silêncio tranquilo.',
    musicDescription: 'Encerramento acolhedor.',
    soundEffects: [],
    directorLesson: 'Reforçar a confiança das crianças.',
    lines: [
      {
        id: 's2e4_20_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Você não precisa resolver tudo de uma vez.',
      },
      {
        id: 's2e4_20_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Faça o que é certo. Obedeça. Tenha paciência. Continue caminhando. E confie em Deus.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e4_20_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Grandes muralhas também podem cair.',
      }
    ]
  },
  {
    id: 21,
    sceneNumber: 21,
    title: 'Gancho para o Próximo',
    subtitle: 'Um desafio gigante',
    biblicalRef: '',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'desert_wind',
    musicTheme: 'david_hook',
    visualKey: 's2e4_21_hook',
    environmentSummary: 'Vento e tensão.',
    musicDescription: 'Música muda para aventura e tensão profunda.',
    soundEffects: ['desert_wind'],
    directorLesson: 'Introduzir a ameaça monumental de Golias e a figura pequena de Davi.',
    lines: [
      {
        id: 's2e4_21_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a próxima grande aventura apresentará um desafio ainda mais impressionante.',
      },
      {
        id: 's2e4_21_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Não será uma cidade. Não serão muralhas.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e4_21_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Será um gigante.',
        soundCue: 'Música de tensão forte'
      },
      {
        id: 's2e4_21_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Um guerreiro enorme. Temido por todo um exército.',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 1.5,
      },
      {
        id: 's2e4_21_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas alguém muito pequeno decidirá enfrentá-lo.',
      },
      {
        id: 's2e4_21_l6',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Seu nome era... Davi.',
        soundCue: 'Pequeno impacto sonoro'
      },
      {
        id: 's2e4_21_l7',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E o gigante se chamava... GOLIAS.',
        soundCue: 'Música termina em grande suspense'
      }
    ]
  },
  {
    id: 22,
    sceneNumber: 22,
    title: 'Assinatura',
    subtitle: 'Toon Tales Kids',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'toon_tales_jingle',
    musicTheme: 'signature_jingle',
    visualKey: 's2e4_22_outro',
    environmentSummary: 'Logotipo sonoro',
    musicDescription: 'A trilha de aventura diminui e entra o tema musical alegre.',
    soundEffects: ['toon_tales_jingle'],
    directorLesson: 'Energético, feliz e familiar.',
    lines: [
      {
        id: 's2e4_22_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E essa foi mais uma aventura da Bíblia em Áudio.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e4_22_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a história ainda não terminou...',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's2e4_22_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma nova aventura está esperando por você.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e4_22_l4',
        character: 'child',
        characterLabel: 'Crianças',
        text: 'TOON TALES KIDS!',
        emotionGuide: 'Em coro vibrante'
      },
      {
        id: 's2e4_22_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Histórias que ensinam, aventuras que transformam!',
      }
    ]
  }
];

export const JOSUE_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    dayLabel: 'A Liderança',
    question: 'Quem Deus escolheu para ser o novo líder de Israel depois que Moisés partiu?',
    options: ['Um dos espias', 'Josué', 'Raabe', 'O sacerdote mais velho'],
    correctIndex: 1,
    explanation: 'Após a partida de Moisés, Deus chamou Josué para ser forte e corajoso e liderar o povo para a Terra Prometida.',
    biblicalVerse: 'Josué 1:1-2',
  },
  {
    id: 2,
    dayLabel: 'A Promessa',
    question: 'Qual foi o encorajamento principal de Deus para Josué antes de entrarem na nova terra?',
    options: ['"Vocês precisam aprender a lutar com muitas espadas"', '"Construam muralhas maiores que as de Jericó"', '"Seja forte e corajoso! Eu estarei com você."', '"Esperem no deserto por mais quarenta anos"'],
    correctIndex: 2,
    explanation: 'Deus garantiu a Josué que não precisava ter medo e que devia ser forte e corajoso, pois o Senhor estaria com ele.',
    biblicalVerse: 'Josué 1:9',
  },
  {
    id: 3,
    dayLabel: 'O Encontro Oculto',
    question: 'Quem demonstrou grande coragem e protegeu os dois espias israelitas dentro da cidade de Jericó?',
    options: ['A rainha de Jericó', 'Raabe', 'Um general arrependido', 'Um menino do deserto'],
    correctIndex: 1,
    explanation: 'Raabe escondeu os espias porque ela tinha ouvido falar sobre os grandes feitos do Deus de Israel e creu nEle.',
    biblicalVerse: 'Josué 2:1-4',
  },
  {
    id: 4,
    dayLabel: 'O Plano',
    question: 'O que o povo de Israel fez durante os primeiros seis dias diante de Jericó?',
    options: ['Atacaram as muralhas com grandes pedras', 'Gritaram sem parar dia e noite', 'Marcharam silenciosamente ao redor da cidade uma vez por dia', 'Construíram túneis por baixo do chão'],
    correctIndex: 2,
    explanation: 'Obedecendo ao estranho plano de Deus, o povo marchou uma vez ao redor da cidade por seis dias em completo silêncio.',
    biblicalVerse: 'Josué 6:3-4',
  },
  {
    id: 5,
    dayLabel: 'O Milagre',
    question: 'O que aconteceu no sétimo dia, logo após a sétima volta, quando os sacerdotes tocaram as trombetas e o povo gritou?',
    options: ['As portas da cidade se abriram', 'As muralhas de Jericó caíram', 'O exército da cidade fugiu com medo', 'Choveu granizo sobre a cidade'],
    correctIndex: 1,
    explanation: 'Quando as trombetas soaram e o povo soltou um grande grito, as enormes muralhas desmoronaram pelo poder de Deus, dando a eles a cidade!',
    biblicalVerse: 'Josué 6:20',
  }
];
