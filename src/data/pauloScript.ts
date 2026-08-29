import { Scene, QuizQuestion } from '../types';

export const EPISODE_META_T4E4 = {
  id: 't4e4',
  title: 'Paulo',
  subtitle: 'O homem que teve sua vida transformada',
  biblicalText: 'Atos 8 a 9 e Atos 13 a 14',
  durationLabel: '20 min',
  moralLesson: 'Deus pode transformar um coração, uma direção e até uma história inteira. Quando uma pessoa decide mudar, o futuro pode ser completamente diferente.',
};

export const PAULO_SCENES: Scene[] = [
  {
    id: 1,
    sceneNumber: 1,
    title: 'Abertura Cinematográfica',
    subtitle: 'A Perseguição',
    biblicalRef: 'Atos 8:1-3',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'jerusalem_street',
    musicTheme: 'tense_minimal',
    visualKey: 's4e4_01_intro',
    environmentSummary: 'Passos rápidos. Portas batendo, cidade em clima de tensão.',
    musicDescription: 'Música de tensão grave.',
    soundEffects: ['footsteps_running', 'door_open'],
    directorLesson: 'Estabelecer a tensão inicial sem violência extrema.',
    lines: [
      {
        id: 's4e4_01_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jerusalém estava mudando. A mensagem sobre Jesus estava se espalhando. Mas nem todos estavam felizes.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e4_01_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Entre os que perseguiam os seguidores de Jesus... havia um homem chamado Saulo.',
      }
    ]
  },
  {
    id: 2,
    sceneNumber: 2,
    title: 'Quem era Saulo?',
    subtitle: 'Convicções equivocadas',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'jerusalem_street',
    musicTheme: 'paul_theme',
    visualKey: 's4e4_02_saul',
    environmentSummary: 'Música introduz o tom sombrio de Saulo.',
    musicDescription: 'A música ganha força com instrumentos graves.',
    soundEffects: [],
    directorLesson: 'Mostrar que ele acreditava estar fazendo o certo, mesmo estando totalmente errado.',
    lines: [
      {
        id: 's4e4_02_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Saulo era muito dedicado às suas convicções. Ele acreditava que estava fazendo o que era certo. Mas estava perseguindo pessoas que seguiam Jesus.',
      }
    ]
  },
  {
    id: 3,
    sceneNumber: 3,
    title: 'A Caminho de Damasco',
    subtitle: 'A Viagem',
    biblicalRef: 'Atos 9:1-2',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'damascus_road',
    musicTheme: 'tense_minimal',
    visualKey: 's4e4_03_road',
    environmentSummary: 'Sons da estrada, ventania, passos.',
    musicDescription: 'Música mantém a tensão.',
    soundEffects: ['footsteps', 'wind_breeze'],
    directorLesson: 'A viagem da oposição.',
    lines: [
      {
        id: 's4e4_03_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Um dia... Saulo recebeu autorização para viajar até Damasco.',
      },
      {
        id: 's4e4_03_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Seu objetivo era encontrar seguidores de Jesus e levá-los presos.',
      }
    ]
  },
  {
    id: 4,
    sceneNumber: 4,
    title: 'A Estrada',
    subtitle: 'Vento Forte',
    biblicalRef: 'Atos 9:3',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'damascus_road',
    musicTheme: 'tense_minimal',
    visualKey: 's4e4_04_wind',
    environmentSummary: 'Vento aumenta consideravelmente, passos aceleram.',
    musicDescription: 'Música desaparece.',
    soundEffects: ['wind_breeze'],
    directorLesson: 'O silêncio antes do grande evento.',
    lines: [
      {
        id: 's4e4_04_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele seguia pela estrada... quando algo extraordinário aconteceu.',
        pauseType: 'PAUSA',
        pauseSeconds: 2.0,
      }
    ]
  },
  {
    id: 5,
    sceneNumber: 5,
    title: 'A Luz',
    subtitle: 'O Grande Impacto',
    biblicalRef: 'Atos 9:3-4',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'heavenly_light',
    musicTheme: 'celestial_light',
    visualKey: 's4e4_05_light',
    environmentSummary: 'Grande impacto sonoro suave (não explosão) seguido de silêncio.',
    musicDescription: 'Música celestial muito suave.',
    soundEffects: ['wind_breeze'],
    directorLesson: 'A luz que cega e traz revelação, feita pelo design de som.',
    lines: [
      {
        id: 's4e4_05_l1',
        character: 'saulo',
        characterLabel: 'Saulo',
        text: 'Ah!',
        emotionGuide: 'Surpreendido e atordoado'
      }
    ]
  },
  {
    id: 6,
    sceneNumber: 6,
    title: 'A Voz',
    subtitle: 'Jesus',
    biblicalRef: 'Atos 9:4-5',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'heavenly_light',
    musicTheme: 'celestial_light',
    visualKey: 's4e4_06_voice',
    environmentSummary: 'Silêncio absoluto quebrado pela voz majestosa de Jesus.',
    musicDescription: 'O tema celestial enche a cena.',
    soundEffects: [],
    directorLesson: 'O momento que dividiu a história do homem e do mundo.',
    lines: [
      {
        id: 's4e4_06_l1',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Saulo, Saulo... por que você me persegue?',
        emotionGuide: 'Sereno, firme e majestoso'
      },
      {
        id: 's4e4_06_l2',
        character: 'saulo',
        characterLabel: 'Saulo',
        text: 'Quem és tu, Senhor?',
        emotionGuide: 'No chão, assustado e humilde'
      },
      {
        id: 's4e4_06_l3',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Eu sou Jesus. Você está me perseguindo.',
        emotionGuide: 'Misericordioso e impactante'
      }
    ]
  },
  {
    id: 7,
    sceneNumber: 7,
    title: 'A Cegueira',
    subtitle: 'Sem Enxergar',
    biblicalRef: 'Atos 9:8',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'damascus_road',
    musicTheme: 'introspective',
    visualKey: 's4e4_07_blind',
    environmentSummary: 'O vento diminui e retorna a realidade terrena.',
    musicDescription: 'Música introspectiva, mostrando a vulnerabilidade.',
    soundEffects: ['wind_breeze'],
    directorLesson: 'A luz foi tão grande que apagou a visão humana de Saulo para dar lugar à visão espiritual.',
    lines: [
      {
        id: 's4e4_07_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Saulo abriu os olhos. Mas não conseguia enxergar.',
      },
      {
        id: 's4e4_07_l2',
        character: 'saulo',
        characterLabel: 'Saulo',
        text: 'Eu não consigo ver...',
        emotionGuide: 'Atordoado, confuso'
      },
      {
        id: 's4e4_07_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os homens que estavam com ele precisaram ajudá-lo.',
      }
    ]
  },
  {
    id: 8,
    sceneNumber: 8,
    title: 'Damasco',
    subtitle: 'A Oração',
    biblicalRef: 'Atos 9:9-11',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'damascus_house',
    musicTheme: 'introspective',
    visualKey: 's4e4_08_damascus',
    environmentSummary: 'Portas se fechando, passos, casa.',
    musicDescription: 'A reflexão e o arrependimento.',
    soundEffects: ['city_street', 'door_open'],
    directorLesson: 'Saulo, o homem forte, agora dependente e em silêncio por três dias.',
    lines: [
      {
        id: 's4e4_08_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Saulo foi levado até Damasco. Durante três dias... ele não enxergou. Não comeu. E ficou em oração.',
      }
    ]
  },
  {
    id: 9,
    sceneNumber: 9,
    title: 'A Mudança Começa',
    subtitle: 'O Arrependimento',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'damascus_house',
    musicTheme: 'introspective',
    visualKey: 's4e4_09_change',
    environmentSummary: 'Sons suaves e introspectivos.',
    musicDescription: 'A música prepara para a redenção.',
    soundEffects: [],
    directorLesson: 'Explicar a grande desconstrução e arrependimento de Saulo.',
    lines: [
      {
        id: 's4e4_09_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Saulo precisava pensar. Precisava entender o que havia acontecido.',
      },
      {
        id: 's4e4_09_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele tinha acreditado que estava defendendo Deus. Agora percebia que estava perseguindo pessoas que seguiam Jesus.',
      }
    ]
  },
  {
    id: 10,
    sceneNumber: 10,
    title: 'Ananias',
    subtitle: 'O Chamado de Jesus',
    biblicalRef: 'Atos 9:10-15',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'damascus_house',
    musicTheme: 'hope_theme',
    visualKey: 's4e4_10_ananias',
    environmentSummary: 'Casa silenciosa e mansa.',
    musicDescription: 'Música muda para um tom mais esperançoso.',
    soundEffects: [],
    directorLesson: 'Mostrar o receio muito natural e humano de Ananias, e a ordem divina.',
    lines: [
      {
        id: 's4e4_10_l1',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Ananias.',
      },
      {
        id: 's4e4_10_l2',
        character: 'ananias',
        characterLabel: 'Ananias',
        text: 'Sim, Senhor?',
      },
      {
        id: 's4e4_10_l3',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Vá até Saulo.',
      },
      {
        id: 's4e4_10_l4',
        character: 'ananias',
        characterLabel: 'Ananias',
        text: 'Saulo? Mas ele persegue os seguidores de Jesus!',
        emotionGuide: 'Surpreso, receoso'
      },
      {
        id: 's4e4_10_l5',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Vá.',
        emotionGuide: 'Firme'
      }
    ]
  },
  {
    id: 11,
    sceneNumber: 11,
    title: 'Ananias Vai',
    subtitle: 'O Encontro',
    biblicalRef: 'Atos 9:17',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'damascus_house',
    musicTheme: 'hope_theme',
    visualKey: 's4e4_11_goes',
    environmentSummary: 'Passos até a porta e ambiente silêncioso.',
    musicDescription: 'A expectativa pelo milagre.',
    soundEffects: ['footsteps', 'door_open'],
    directorLesson: 'O encontro do perseguidor vulnerável com a vítima cheia de perdão.',
    lines: [
      {
        id: 's4e4_11_l1',
        character: 'ananias',
        characterLabel: 'Ananias',
        text: 'Saulo?',
      },
      {
        id: 's4e4_11_l2',
        character: 'saulo',
        characterLabel: 'Saulo',
        text: 'Quem está aí?',
        emotionGuide: 'No escuro'
      },
      {
        id: 's4e4_11_l3',
        character: 'ananias',
        characterLabel: 'Ananias',
        text: 'Sou Ananias. Jesus me enviou.',
        emotionGuide: 'Compassivo'
      }
    ]
  },
  {
    id: 12,
    sceneNumber: 12,
    title: 'A Oração',
    subtitle: 'Irmão Saulo',
    biblicalRef: 'Atos 9:17',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'damascus_house',
    musicTheme: 'emotional_climax',
    visualKey: 's4e4_12_prayer',
    environmentSummary: 'Oração sincera, respiração e conforto.',
    musicDescription: 'A música emocionante de reconciliação.',
    soundEffects: [],
    directorLesson: 'Não criar som mágico. Criar uma aura de amor profundo que Jesus pede.',
    lines: [
      {
        id: 's4e4_12_l1',
        character: 'ananias',
        characterLabel: 'Ananias',
        text: 'Irmão Saulo... Jesus me enviou para que você volte a enxergar.',
        emotionGuide: 'Com amor, chamando-o de irmão'
      },
      {
        id: 's4e4_12_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ananias colocou as mãos sobre Saulo e orou.',
      }
    ]
  },
  {
    id: 13,
    sceneNumber: 13,
    title: 'Saulo Volta a Enxergar',
    subtitle: 'Batismo',
    biblicalRef: 'Atos 9:18',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'damascus_house',
    musicTheme: 'celestial_light',
    visualKey: 's4e4_13_sight',
    environmentSummary: 'Som de uma luz musical abrindo.',
    musicDescription: 'Tema luminoso cresce de forma gloriosa.',
    soundEffects: [],
    directorLesson: 'A nova vida.',
    lines: [
      {
        id: 's4e4_13_l1',
        character: 'saulo',
        characterLabel: 'Saulo',
        text: 'Eu consigo ver!',
        emotionGuide: 'Emocionado, maravilhado'
      },
      {
        id: 's4e4_13_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Saulo recuperou a visão. Depois foi batizado.',
      }
    ]
  },
  {
    id: 14,
    sceneNumber: 14,
    title: 'O Anúncio',
    subtitle: 'O Filho de Deus',
    biblicalRef: 'Atos 9:20',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'jerusalem_street',
    musicTheme: 'mission_adventure',
    visualKey: 's4e4_14_preach',
    environmentSummary: 'Multidão em Damasco escutando a sua voz firme.',
    musicDescription: 'O tema de Paulo se transforma num tema de missão (piano e cordas).',
    soundEffects: ['city_street'],
    directorLesson: 'A coragem adquirida instantaneamente pela fé.',
    lines: [
      {
        id: 's4e4_14_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E então aconteceu algo que ninguém esperava. Saulo começou a anunciar que Jesus era o Filho de Deus.',
      }
    ]
  },
  {
    id: 15,
    sceneNumber: 15,
    title: 'Surpresa',
    subtitle: 'Espantados',
    biblicalRef: 'Atos 9:21',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'jerusalem_street',
    musicTheme: 'mission_adventure',
    visualKey: 's4e4_15_surprise',
    environmentSummary: 'Murmúrios e perguntas.',
    musicDescription: 'A missão avança com energia.',
    soundEffects: ['crowd_murmur_surprised'],
    directorLesson: 'O choque positivo da transformação.',
    lines: [
      {
        id: 's4e4_15_l1',
        character: 'pessoa1',
        characterLabel: 'Pessoa',
        text: 'Mas... não era ele que perseguia os seguidores de Jesus?'
      },
      {
        id: 's4e4_15_l2',
        character: 'pessoa2',
        characterLabel: 'Outra Pessoa',
        text: 'É ele mesmo!'
      },
      {
        id: 's4e4_15_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'As pessoas ficaram espantadas. Era difícil acreditar. Mas Saulo havia mudado.',
      }
    ]
  },
  {
    id: 16,
    sceneNumber: 16,
    title: 'De Saulo a Paulo',
    subtitle: 'Um Novo Homem',
    biblicalRef: 'Atos 13:9',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'mission_journey',
    musicTheme: 'mission_adventure',
    visualKey: 's4e4_16_paul',
    environmentSummary: 'Transição didática.',
    musicDescription: 'A música o eleva para a grande missão.',
    soundEffects: [],
    directorLesson: 'Explicar a evolução de seu nome.',
    lines: [
      {
        id: 's4e4_16_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mais tarde, Saulo ficou conhecido principalmente pelo nome Paulo.',
      },
      {
        id: 's4e4_16_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele dedicaria sua vida a anunciar a mensagem de Jesus.',
      }
    ]
  },
  {
    id: 17,
    sceneNumber: 17,
    title: 'Primeiros Desafios',
    subtitle: 'Não seria fácil',
    biblicalRef: '',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'mission_journey',
    musicTheme: 'tense_minimal',
    visualKey: 's4e4_17_challenges',
    environmentSummary: 'Sons de tempestade e dificuldades.',
    musicDescription: 'Música de aventura mais intensa.',
    soundEffects: ['wind_breeze', 'sea_waves'],
    directorLesson: 'Mostrar que seguir Jesus tem provações reais.',
    lines: [
      {
        id: 's4e4_17_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas sua nova missão não seria fácil. Paulo enfrentaria viagens. Perigos. Perseguições. Tempestades. E muitas dificuldades.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e4_17_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas ele continuaria.',
      }
    ]
  },
  {
    id: 18,
    sceneNumber: 18,
    title: 'Paulo e Barnabé',
    subtitle: 'Companheiros',
    biblicalRef: 'Atos 13:2',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'mission_journey',
    musicTheme: 'mission_adventure',
    visualKey: 's4e4_18_barnabas',
    environmentSummary: 'Sons de estrada e caminhada em dupla.',
    musicDescription: 'O companheirismo entra na música.',
    soundEffects: ['footsteps'],
    directorLesson: 'Introduzir a importância da equipe.',
    lines: [
      {
        id: 's4e4_18_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Em sua missão, Paulo viajaria com outros cristãos. Entre eles estava Barnabé.',
      },
      {
        id: 's4e4_18_l2',
        character: 'barnabe',
        characterLabel: 'Barnabé',
        text: 'Vamos continuar.',
        emotionGuide: 'Encorajador'
      },
      {
        id: 's4e4_18_l3',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Precisamos anunciar a mensagem.',
        emotionGuide: 'Determinado'
      }
    ]
  },
  {
    id: 19,
    sceneNumber: 19,
    title: 'A Missão Começa',
    subtitle: 'Mundo Afora',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'mission_journey',
    musicTheme: 'paul_theme',
    visualKey: 's4e4_19_mission',
    environmentSummary: 'Montagem: Caminhadas, barcos, portos e cidades.',
    musicDescription: 'A música ganha força com sopros e cordas vibrantes.',
    soundEffects: ['sea_waves', 'city_street'],
    directorLesson: 'A grande expansão da igreja no mundo começa.',
    lines: [
      {
        id: 's4e4_19_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles viajaram de cidade em cidade. Falando sobre Jesus. Ensinando. Encorajando novos cristãos.',
      }
    ]
  },
  {
    id: 20,
    sceneNumber: 20,
    title: 'Paulo Não Era um Super-Herói',
    subtitle: 'Dependência',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'mission_journey',
    musicTheme: 'hope_theme',
    visualKey: 's4e4_20_human',
    environmentSummary: 'Diminuição sonora, foco na humanidade do apóstolo.',
    musicDescription: 'Música suave de esperança.',
    soundEffects: [],
    directorLesson: 'Humanizar Paulo, assim como Pedro. Eles confiavam em Deus.',
    lines: [
      {
        id: 's4e4_20_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Paulo não era um super-herói. Ele sentia cansaço. Enfrentava dificuldades. Às vezes sofria. Mas continuava confiando em Deus.',
      }
    ]
  },
  {
    id: 21,
    sceneNumber: 21,
    title: 'Lição',
    subtitle: 'Ninguém é Incorrigível',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'mission_journey',
    musicTheme: 'hope_theme',
    visualKey: 's4e4_21_lesson',
    environmentSummary: 'Foco na criança.',
    musicDescription: 'Música acolhedora.',
    soundEffects: [],
    directorLesson: 'As pessoas podem mudar.',
    lines: [
      {
        id: 's4e4_21_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A história de Paulo nos ensina que pessoas podem mudar. Talvez você tenha cometido um erro.',
      },
      {
        id: 's4e4_21_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Talvez alguém diga que você nunca vai conseguir mudar.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e4_21_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas uma nova escolha pode começar uma nova história.',
      }
    ]
  },
  {
    id: 22,
    sceneNumber: 22,
    title: 'Segunda Chance',
    subtitle: 'Uma Nova Vida',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'mission_journey',
    musicTheme: 'hope_theme',
    visualKey: 's4e4_22_chance',
    environmentSummary: 'Continuando a reflexão.',
    musicDescription: 'Música reconfortante.',
    soundEffects: [],
    directorLesson: 'O que fazer com o perdão? Ajudar os outros.',
    lines: [
      {
        id: 's4e4_22_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Paulo recebeu uma segunda chance. E usou sua nova vida para ajudar outras pessoas. Isso é transformação.',
      }
    ]
  },
  {
    id: 23,
    sceneNumber: 23,
    title: 'Frase Marcante',
    subtitle: 'Deus transforma o futuro',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'mission_journey',
    musicTheme: 'emotional_climax',
    visualKey: 's4e4_23_phrase',
    environmentSummary: 'O ápice da mensagem redentora.',
    musicDescription: 'Música emocional forte.',
    soundEffects: [],
    directorLesson: 'A grande verdade de todo este episódio colossal.',
    lines: [
      {
        id: 's4e4_23_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Deus pode transformar um coração... uma direção... e até uma história inteira.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e4_23_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Quando uma pessoa decide mudar... o futuro pode ser completamente diferente.',
      }
    ]
  },
  {
    id: 24,
    sceneNumber: 24,
    title: 'Montagem Final',
    subtitle: 'Apenas o Começo',
    biblicalRef: '',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'mission_journey',
    musicTheme: 'epic_orchestral',
    visualKey: 's4e4_24_montage',
    environmentSummary: 'Passos apressados, barcos pelo mar agitado, multidões e portas.',
    musicDescription: 'Música épica, pavimentando a temporada gigantesca de viagens.',
    soundEffects: ['footsteps', 'sea_waves', 'crowd_distant'],
    directorLesson: 'Avisar as crianças da quantidade de perigos e emoções que vêm pela frente.',
    lines: [
      {
        id: 's4e4_24_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E aquela estrada para Damasco... foi apenas o começo.',
      },
      {
        id: 's4e4_24_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Paulo viajaria por terras distantes. Enfrentaria mares. Prisões. Tempestades. E perigos. Mas continuaria levando a mensagem.',
      }
    ]
  },
  {
    id: 25,
    sceneNumber: 25,
    title: 'O Gancho',
    subtitle: 'A Prisão com Silas',
    biblicalRef: 'Atos 16',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'prison_cell',
    musicTheme: 'mission_adventure',
    visualKey: 's4e4_25_hook',
    environmentSummary: 'Porta de prisão se fechando, correntes balançando discretamente. Uma nota musical quebra o escuro.',
    musicDescription: 'A música se torna expectante, aventura com tensão.',
    soundEffects: ['prison_door_close'],
    directorLesson: 'A atitude que mudaria o mundo (louvar na dor).',
    lines: [
      {
        id: 's4e4_25_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Em uma de suas viagens... Paulo e seu companheiro Silas seriam presos.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e4_25_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas naquela prisão... eles fariam algo inesperado.',
      },
      {
        id: 's4e4_25_l3',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Vamos cantar.',
      },
      {
        id: 's4e4_25_l4',
        character: 'silas',
        characterLabel: 'Silas',
        text: 'Mesmo aqui?',
        emotionGuide: 'Dolorido, mas confiante'
      },
      {
        id: 's4e4_25_l5',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Mesmo aqui.',
      }
    ]
  },
  {
    id: 26,
    sceneNumber: 26,
    title: 'Próximo Episódio',
    subtitle: 'Paulo e Silas',
    biblicalRef: '',
    durationLabel: '10 segundos',
    estimatedDurationSec: 10,
    ambientType: 'prison_cell',
    musicTheme: 'mission_adventure',
    visualKey: 's4e4_26_next',
    environmentSummary: 'O anúncio eletrizante.',
    musicDescription: 'Encerramento em suspense e glória.',
    soundEffects: [],
    directorLesson: 'Clímax do trailer.',
    lines: [
      {
        id: 's4e4_26_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'No próximo episódio... Paulo e Silas. Louvor mesmo na prisão.',
      }
    ]
  },
  {
    id: 27,
    sceneNumber: 27,
    title: 'Assinatura',
    subtitle: 'Toon Tales Kids',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'toon_tales_jingle',
    musicTheme: 'signature_jingle',
    visualKey: 's4e4_27_outro',
    environmentSummary: 'O encerramento oficial acolhedor.',
    musicDescription: 'Alegria e a assinatura clássica da série.',
    soundEffects: ['toon_tales_jingle'],
    directorLesson: 'Voltar ao tom radiante de encerramento.',
    lines: [
      {
        id: 's4e4_27_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E essa foi mais uma aventura da Bíblia em Áudio.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e4_27_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a história ainda não terminou...',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's4e4_27_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma nova aventura está esperando por você.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e4_27_l4',
        character: 'child',
        characterLabel: 'Crianças',
        text: 'TOON TALES KIDS!',
        emotionGuide: 'Em coro feliz e forte'
      },
      {
        id: 's4e4_27_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Histórias que ensinam, aventuras que transformam!',
      }
    ]
  }
];

export const PAULO_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    dayLabel: 'O Caminho de Damasco',
    question: 'O que aconteceu com Saulo quando ele estava viajando pela estrada, a caminho de Damasco?',
    options: ['Ele achou um tesouro perdido', 'Ele foi surpreendido por uma grande luz e ouviu a voz de Jesus', 'Ele encontrou com seus velhos amigos e foi pescar', 'Ele dormiu e teve um sonho longo'],
    correctIndex: 1,
    explanation: 'De repente, algo extraordinário e brilhante mudou a vida dele para sempre! Jesus falou diretamente com ele por meio da grande luz.',
    biblicalVerse: 'Atos 9:3-5',
  },
  {
    id: 2,
    dayLabel: 'Sem Enxergar',
    question: 'Quando a luz passou, o que aconteceu com Saulo?',
    options: ['Ele ficou cego, sem enxergar por três dias, orando', 'Ele saiu correndo mais forte', 'Ele viu tudo colorido', 'Ele voltou direto para Jerusalém para prender mais pessoas'],
    correctIndex: 0,
    explanation: 'A luz foi tão poderosa que Saulo ficou sem enxergar. E nestes três dias, ele não comeu, mas apenas refletiu sobre seus erros e orou a Deus.',
    biblicalVerse: 'Atos 9:8-9',
  },
  {
    id: 3,
    dayLabel: 'O Ananias Corajoso',
    question: 'Quem Jesus enviou para orar por Saulo, para que ele pudesse ver de novo?',
    options: ['Pedro', 'O rei de Damasco', 'Ananias, um seguidor de Jesus que precisou de muita coragem para ir até ele', 'Barnabé'],
    correctIndex: 2,
    explanation: 'No início Ananias sentiu medo, afinal, Saulo costumava perseguir e prender os seguidores de Jesus. Mas ele obedeceu à voz de Deus e foi com amor, chamando-o de "Irmão Saulo".',
    biblicalVerse: 'Atos 9:10-17',
  },
  {
    id: 4,
    dayLabel: 'A Transformação',
    question: 'O que Saulo fez assim que voltou a enxergar e foi batizado?',
    options: ['Ele começou a anunciar que Jesus é o Filho de Deus!', 'Ele pediu comida aos soldados e os convidou para perseguir as pessoas', 'Ele chorou muito e voltou a perseguir', 'Ele fingiu que nunca conheceu Jesus'],
    correctIndex: 0,
    explanation: 'Uma virada colossal de vida! O grande perseguidor se tornou um grande pregador e anunciador do amor de Jesus Cristo. Por causa dessa mudança, as pessoas ficavam chocadas!',
    biblicalVerse: 'Atos 9:20',
  },
  {
    id: 5,
    dayLabel: 'Uma Vida de Missão',
    question: 'Com um novo nome (Paulo), ele viajou por muitas terras. Como ele era?',
    options: ['Ele era um super-herói que nunca tinha dor e nunca ficava cansado', 'Ele era um homem que, mesmo passando por mares e prisões com cansaço, confiava e amava a Deus', 'Ele desistiu na primeira vez que choveu', 'Ele usou sua nova chance para fugir de todos'],
    correctIndex: 1,
    explanation: 'Paulo não era um super-herói dos quadrinhos, ele sofria e se cansava. A lição dele é que as pessoas podem mudar, receber perdão e ser grandes instrumentos de Deus mesmo passando por dificuldades!',
    biblicalVerse: 'Atos 14:21-22',
  }
];
