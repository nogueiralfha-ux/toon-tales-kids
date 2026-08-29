import { Scene, QuizQuestion } from '../types';

export const EPISODE_META_T4E10 = {
  id: 't4e10',
  title: 'A Chegada a Roma',
  subtitle: 'Quando Paulo finalmente chegou ao destino',
  biblicalText: 'Atos 28:11 a 31',
  durationLabel: '20 min',
  moralLesson: 'Os obstáculos podem mudar o caminho, mas não precisam destruir o propósito. Deus continua agindo através de nós.',
};

export const ROMA_SCENES: Scene[] = [
  {
    id: 1,
    sceneNumber: 1,
    title: 'Abertura',
    subtitle: 'Prontos para viajar',
    biblicalRef: 'Atos 28:11',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'ship_deck',
    musicTheme: 'epic_roma_journey',
    visualKey: 's4e10_01_intro',
    environmentSummary: 'Porto, ondas suaves, gaivotas, cordas sendo puxadas, navio grande.',
    musicDescription: 'Música de aventura retomando o fôlego.',
    soundEffects: ['sea_waves', 'footsteps_running', 'wind_breeze'],
    directorLesson: 'O entusiasmo do recomeço. Roma está logo ali.',
    lines: [
      {
        id: 's4e10_01_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Depois de passar algum tempo em Malta...',
      },
      {
        id: 's4e10_01_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: '...Paulo e seus companheiros estavam novamente prontos para viajar.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e10_01_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Roma estava cada vez mais perto.',
      }
    ]
  },
  {
    id: 2,
    sceneNumber: 2,
    title: 'A Partida de Malta',
    subtitle: 'O novo caminho',
    biblicalRef: 'Atos 28:11',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'ship_deck',
    musicTheme: 'epic_roma_journey',
    visualKey: 's4e10_02_departure',
    environmentSummary: 'Cordas sendo soltas, som das velas se abrindo e esticando com o vento.',
    musicDescription: 'Música crescente, com sensação de progresso.',
    soundEffects: ['wind_breeze'],
    directorLesson: 'A energia de Paulo e seus amigos ao embarcar.',
    lines: [
      {
        id: 's4e10_02_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O navio deixou a ilha.',
      },
      {
        id: 's4e10_02_l2',
        character: 'lucas',
        characterLabel: 'Lucas',
        text: 'Estamos partindo.',
      },
      {
        id: 's4e10_02_l3',
        character: 'aristarco',
        characterLabel: 'Aristarco',
        text: 'E agora... Roma!',
      },
      {
        id: 's4e10_02_l4',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Vamos continuar.',
      }
    ]
  },
  {
    id: 3,
    sceneNumber: 3,
    title: 'O Novo Navio',
    subtitle: 'Aproximando-se do destino',
    biblicalRef: 'Atos 28:11',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'ship_deck',
    musicTheme: 'epic_roma_journey',
    visualKey: 's4e10_03_new_ship',
    environmentSummary: 'O ranger da madeira, o mar avançando e a brisa do oceano.',
    musicDescription: 'Aventura constante.',
    soundEffects: ['sea_waves'],
    directorLesson: 'Mostrar que este navio é seguro.',
    lines: [
      {
        id: 's4e10_03_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles embarcaram em outro navio que havia passado o inverno na ilha.',
      },
      {
        id: 's4e10_03_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O caminho ainda era longo.',
      },
      {
        id: 's4e10_03_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas agora havia uma diferença. Paulo sabia que estava cada vez mais perto de Roma.',
      }
    ]
  },
  {
    id: 4,
    sceneNumber: 4,
    title: 'Siracusa',
    subtitle: 'Primeira parada',
    biblicalRef: 'Atos 28:12',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'roma_city',
    musicTheme: 'epic_roma_journey',
    visualKey: 's4e10_04_siracusa',
    environmentSummary: 'Sons de um porto de tamanho médio, vozes abafadas.',
    musicDescription: 'Pequena transição musical de viagem.',
    soundEffects: [],
    directorLesson: 'A viagem tem escalas e está progredindo.',
    lines: [
      {
        id: 's4e10_04_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O navio chegou a Siracusa.',
      },
      {
        id: 's4e10_04_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ali permaneceram alguns dias.',
      }
    ]
  },
  {
    id: 5,
    sceneNumber: 5,
    title: 'Régio',
    subtitle: 'Navegando a costa',
    biblicalRef: 'Atos 28:13',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'ship_deck',
    musicTheme: 'epic_roma_journey',
    visualKey: 's4e10_05_regio',
    environmentSummary: 'Som de mar de novo, vento.',
    musicDescription: 'A música ganha um tom um pouco mais caloroso.',
    soundEffects: ['sea_waves'],
    directorLesson: 'Mantendo o ritmo da jornada.',
    lines: [
      {
        id: 's4e10_05_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Depois partiram outra vez.',
      },
      {
        id: 's4e10_05_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Passaram por Régio... e seguiram viagem.',
      }
    ]
  },
  {
    id: 6,
    sceneNumber: 6,
    title: 'Putéoli',
    subtitle: 'Finalmente Itália',
    biblicalRef: 'Atos 28:13',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'roma_city',
    musicTheme: 'hope_piano_choir',
    visualKey: 's4e10_06_puteoli',
    environmentSummary: 'Porto muito movimentado. Um verdadeiro porto de chegada.',
    musicDescription: 'Música emocional, com sensação de lar.',
    soundEffects: ['footsteps_running'],
    directorLesson: 'A chegada na Itália.',
    lines: [
      {
        id: 's4e10_06_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Finalmente chegaram a Putéoli.',
      },
      {
        id: 's4e10_06_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E ali aconteceu algo muito especial.',
      }
    ]
  },
  {
    id: 7,
    sceneNumber: 7,
    title: 'Os Irmãos',
    subtitle: 'Comunhão',
    biblicalRef: 'Atos 28:14',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'roma_city',
    musicTheme: 'hope_piano_choir',
    visualKey: 's4e10_07_brothers',
    environmentSummary: 'Vozes animadas, saudações.',
    musicDescription: 'Alegre e calorosa.',
    soundEffects: [],
    directorLesson: 'A emoção de ver a igreja já existindo ali.',
    lines: [
      {
        id: 's4e10_07_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Paulo encontrou cristãos que viviam naquela região.',
      },
      {
        id: 's4e10_07_l2',
        character: 'lucas',
        characterLabel: 'Lucas',
        text: 'Paulo... eles são nossos irmãos.',
      },
      {
        id: 's4e10_07_l3',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Que alegria encontrar vocês!',
        emotionGuide: 'Emocionado'
      }
    ]
  },
  {
    id: 8,
    sceneNumber: 8,
    title: 'Sete Dias',
    subtitle: 'Descanso e força',
    biblicalRef: 'Atos 28:14',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'roma_city',
    musicTheme: 'hope_piano_choir',
    visualKey: 's4e10_08_seven_days',
    environmentSummary: 'Passagem suave de tempo.',
    musicDescription: 'Música tranquila e repousante.',
    soundEffects: [],
    directorLesson: 'O vigor renovado.',
    lines: [
      {
        id: 's4e10_08_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles ficaram com os irmãos durante sete dias.',
      },
      {
        id: 's4e10_08_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Paulo encontrou encorajamento e comunhão.',
      }
    ]
  },
  {
    id: 9,
    sceneNumber: 9,
    title: 'A Caminho de Roma',
    subtitle: 'Por terra',
    biblicalRef: 'Atos 28:14',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'roman_road',
    musicTheme: 'epic_roma_journey',
    visualKey: 's4e10_09_road',
    environmentSummary: 'Passos em estrada de terra e pedra, vento nas árvores.',
    musicDescription: 'Música de jornada por terra, firme.',
    soundEffects: ['footsteps_running', 'wind_breeze'],
    directorLesson: 'A última etapa da viagem.',
    lines: [
      {
        id: 's4e10_09_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Depois continuaram a viagem.',
      },
      {
        id: 's4e10_09_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Agora por terra.',
      }
    ]
  },
  {
    id: 10,
    sceneNumber: 10,
    title: 'Roma se Aproxima',
    subtitle: 'A grande capital',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'roman_road',
    musicTheme: 'epic_roma_journey',
    visualKey: 's4e10_10_roma_approaches',
    environmentSummary: 'O som da cidade grande começa a ser ouvido ao longe.',
    musicDescription: 'Música épica começa lentamente a se formar.',
    soundEffects: ['footsteps_running'],
    directorLesson: 'A antecipação de que estão quase lá.',
    lines: [
      {
        id: 's4e10_10_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Quanto mais caminhavam...',
      },
      {
        id: 's4e10_10_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: '...mais perto Roma ficava.',
      }
    ]
  },
  {
    id: 11,
    sceneNumber: 11,
    title: 'O Primeiro Grupo',
    subtitle: 'Cristãos em Roma',
    biblicalRef: 'Atos 28:15',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'roman_road',
    musicTheme: 'epic_roma_journey',
    visualKey: 's4e10_11_first_group',
    environmentSummary: 'Sons de pessoas correndo pela estrada para encontrá-lo.',
    musicDescription: 'Cresce com a emoção.',
    soundEffects: ['footsteps_running'],
    directorLesson: 'O movimento da igreja vindo recebê-lo.',
    lines: [
      {
        id: 's4e10_11_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os cristãos de Roma souberam que Paulo estava chegando.',
      },
      {
        id: 's4e10_11_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E alguns foram ao encontro dele.',
      }
    ]
  },
  {
    id: 12,
    sceneNumber: 12,
    title: 'Praça de Ápio e Três Tavernas',
    subtitle: 'Mais e mais irmãos',
    biblicalRef: 'Atos 28:15',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'roman_road',
    musicTheme: 'epic_roma_journey',
    visualKey: 's4e10_12_apio',
    environmentSummary: 'Mais carruagens e estradas pavimentadas.',
    musicDescription: 'Heroica e alegre.',
    soundEffects: [],
    directorLesson: 'Eles não o deixaram entrar sozinho como um criminoso anônimo.',
    lines: [
      {
        id: 's4e10_12_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Alguns encontraram Paulo na Praça de Ápio.',
      },
      {
        id: 's4e10_12_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Outros chegaram até as Três Tavernas.',
      }
    ]
  },
  {
    id: 13,
    sceneNumber: 13,
    title: 'Paulo Vê os Irmãos',
    subtitle: 'A força da comunhão',
    biblicalRef: 'Atos 28:15',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'roman_road',
    musicTheme: 'final_arrival',
    visualKey: 's4e10_13_paul_sees',
    environmentSummary: 'Passos parando, saudações emocionadas.',
    musicDescription: 'O tema principal se abre majestosamente.',
    soundEffects: [],
    directorLesson: 'A verdadeira recompensa de Paulo.',
    lines: [
      {
        id: 's4e10_13_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Quando Paulo viu aquelas pessoas... sentiu-se encorajado.',
      },
      {
        id: 's4e10_13_l2',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Deus seja louvado. Não estou sozinho.',
        emotionGuide: 'Muito grato e fortalecido'
      }
    ]
  },
  {
    id: 14,
    sceneNumber: 14,
    title: 'A Entrada em Roma',
    subtitle: 'A linha de chegada',
    biblicalRef: 'Atos 28:16',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'roma_city',
    musicTheme: 'final_arrival',
    visualKey: 's4e10_14_entry',
    environmentSummary: 'O barulho da grande cidade envolve todos eles. Roma.',
    musicDescription: 'Épica, o grande clímax da temporada.',
    soundEffects: ['footsteps_running'],
    directorLesson: 'Depois de tanta luta, o prêmio visual e sonoro de entrar em Roma.',
    lines: [
      {
        id: 's4e10_14_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E então... Paulo chegou a Roma.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e10_14_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Depois de tudo. A tempestade. O naufrágio. Malta. Longos caminhos.',
      },
      {
        id: 's4e10_14_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele finalmente chegou.',
      }
    ]
  },
  {
    id: 15,
    sceneNumber: 15,
    title: 'A Grande Cidade',
    subtitle: 'A capital do mundo antigo',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'roma_city',
    musicTheme: 'final_arrival',
    visualKey: 's4e10_15_roma',
    environmentSummary: 'Movimento constante, cavalos, soldados.',
    musicDescription: 'A música se estabelece majestosa.',
    soundEffects: [],
    directorLesson: 'Dar a dimensão do lugar.',
    lines: [
      {
        id: 's4e10_15_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Roma era enorme.',
      },
      {
        id: 's4e10_15_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Construções imponentes, mercados, ruas movimentadas.',
      },
      {
        id: 's4e10_15_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Era uma das maiores cidades do mundo daquele tempo.',
      }
    ]
  },
  {
    id: 16,
    sceneNumber: 16,
    title: 'Paulo sob Custódia',
    subtitle: 'A prisão domiciliar',
    biblicalRef: 'Atos 28:16',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'paul_house_rome',
    musicTheme: 'hope_piano_choir',
    visualKey: 's4e10_16_custody',
    environmentSummary: 'Uma casa tranquila, o som metálico sutil do soldado da guarda.',
    musicDescription: 'Música muda para um tom mais brando e focado.',
    soundEffects: [],
    directorLesson: 'Ele não está numa cela escura, mas também não é livre.',
    lines: [
      {
        id: 's4e10_16_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Paulo continuava sob custódia.',
      },
      {
        id: 's4e10_16_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas não estava preso em uma cela comum. Ele podia permanecer em uma casa, acompanhado por um soldado.',
      }
    ]
  },
  {
    id: 17,
    sceneNumber: 17,
    title: 'A Missão Continua',
    subtitle: 'Nenhuma corrente o para',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'paul_house_rome',
    musicTheme: 'the_message_continues',
    visualKey: 's4e10_17_mission',
    environmentSummary: 'O tom é inspirador.',
    musicDescription: 'O tema "A Mensagem Continua" começa.',
    soundEffects: [],
    directorLesson: 'Apresentar a resiliência de Paulo.',
    lines: [
      {
        id: 's4e10_17_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E mesmo ali... Paulo continuou falando sobre Jesus.',
      },
      {
        id: 's4e10_17_l2',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Quero contar a vocês sobre o Reino de Deus.',
      }
    ]
  },
  {
    id: 18,
    sceneNumber: 18,
    title: 'Os Líderes Judeus',
    subtitle: 'Chamando os locais',
    biblicalRef: 'Atos 28:17',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'paul_house_rome',
    musicTheme: 'the_message_continues',
    visualKey: 's4e10_18_leaders',
    environmentSummary: 'Vários homens judeus sérios e respeitosos em silêncio.',
    musicDescription: 'Continua...',
    soundEffects: [],
    directorLesson: 'Paulo age com respeito à sua própria tradição.',
    lines: [
      {
        id: 's4e10_18_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Paulo chamou os líderes judeus que estavam em Roma.',
      },
      {
        id: 's4e10_18_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E explicou por que havia chegado ali.',
      },
      {
        id: 's4e10_18_l3',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Eu não fiz nada contra o nosso povo. Fui enviado para cá como prisioneiro.',
      }
    ]
  },
  {
    id: 19,
    sceneNumber: 19,
    title: 'Eles Ouvem',
    subtitle: 'Curiosidade',
    biblicalRef: 'Atos 28:22',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'paul_house_rome',
    musicTheme: 'the_message_continues',
    visualKey: 's4e10_19_listen',
    environmentSummary: 'Eles assentem.',
    musicDescription: 'Expectativa respeitosa.',
    soundEffects: [],
    directorLesson: 'Ouvintes dispostos.',
    lines: [
      {
        id: 's4e10_19_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles queriam ouvir Paulo.',
      },
      {
        id: 's4e10_19_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Marcaram um dia para voltar.',
      }
    ]
  },
  {
    id: 20,
    sceneNumber: 20,
    title: 'O Grande Encontro',
    subtitle: 'A casa lotada',
    biblicalRef: 'Atos 28:23',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'paul_house_rome',
    musicTheme: 'the_message_continues',
    visualKey: 's4e10_20_great_meeting',
    environmentSummary: 'Casa cheia, muitas pessoas sentadas ouvindo.',
    musicDescription: 'Música encorpando.',
    soundEffects: [],
    directorLesson: 'A sala está cheia. O ministério prospera mesmo nas restrições.',
    lines: [
      {
        id: 's4e10_20_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'No dia combinado... muitas pessoas foram até a casa onde Paulo estava.',
      },
      {
        id: 's4e10_20_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Desde a manhã até a tarde... Paulo ensinou sobre o Reino de Deus.',
      }
    ]
  },
  {
    id: 21,
    sceneNumber: 21,
    title: 'A Esperança em Jesus',
    subtitle: 'A mensagem central',
    biblicalRef: 'Atos 28:23-24',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'paul_house_rome',
    musicTheme: 'the_message_continues',
    visualKey: 's4e10_21_paul_speaks',
    environmentSummary: 'O tom de voz de Paulo é convicto e gentil.',
    musicDescription: 'Emocional, cheia de fé.',
    soundEffects: [],
    directorLesson: 'Alguns aceitam, outros não, e isso faz parte da pregação.',
    lines: [
      {
        id: 's4e10_21_l1',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'As Escrituras apontavam para a esperança de Deus. E essa esperança está em Jesus.',
      },
      {
        id: 's4e10_21_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Alguns acreditaram.',
      },
      {
        id: 's4e10_21_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Outros tiveram dúvidas. Mas Paulo continuou ensinando.',
      }
    ]
  },
  {
    id: 22,
    sceneNumber: 22,
    title: 'A Mensagem Não Para',
    subtitle: 'Liberdade do Evangelho',
    biblicalRef: 'Atos 28:31',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'paul_house_rome',
    musicTheme: 'the_message_continues',
    visualKey: 's4e10_22_mission_not_stop',
    environmentSummary: 'A glória da missão cumprida.',
    musicDescription: 'A música cresce grandemente.',
    soundEffects: [],
    directorLesson: 'Enfatizar que as correntes físicas não seguraram a Palavra.',
    lines: [
      {
        id: 's4e10_22_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Paulo estava preso... mas a mensagem não estava presa.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e10_22_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele continuou anunciando o Reino de Deus.',
      }
    ]
  },
  {
    id: 23,
    sceneNumber: 23,
    title: 'Dois Anos',
    subtitle: 'Tempo de estabilidade',
    biblicalRef: 'Atos 28:30',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'paul_house_rome',
    musicTheme: 'the_message_continues',
    visualKey: 's4e10_23_two_years',
    environmentSummary: 'Passagem rápida de tempo.',
    musicDescription: 'Música de transição inspiradora.',
    soundEffects: [],
    directorLesson: 'O fim de Atos se desenhando.',
    lines: [
      {
        id: 's4e10_23_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Paulo permaneceu ali por dois anos.',
      },
      {
        id: 's4e10_23_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Recebia todos os que iam visitá-lo. E ensinava sobre Jesus com coragem.',
      }
    ]
  },
  {
    id: 24,
    sceneNumber: 24,
    title: 'Montagem Final',
    subtitle: 'Muitas vidas alcançadas',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'paul_house_rome',
    musicTheme: 'the_message_continues',
    visualKey: 's4e10_24_montage',
    environmentSummary: 'Montagem sonora: pessoas de todos os tipos entrando na casa, som de ensino e conversas.',
    musicDescription: 'Cresce a ideia de algo muito maior que ele.',
    soundEffects: ['footsteps_running'],
    directorLesson: 'A igreja nascendo forte e diversa em Roma.',
    lines: [
      {
        id: 's4e10_24_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Durante dois anos... pessoas chegaram.',
      },
      {
        id: 's4e10_24_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Perguntaram. Ouviram. Aprenderam.',
      },
      {
        id: 's4e10_24_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E Paulo continuou anunciando a mensagem.',
      }
    ]
  },
  {
    id: 25,
    sceneNumber: 25,
    title: 'O Propósito Maior',
    subtitle: 'Deus na direção',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'paul_house_rome',
    musicTheme: 'the_message_continues',
    visualKey: 's4e10_25_purpose',
    environmentSummary: 'Uma luz suave, a voz narrativa assume um tom conselheiro.',
    musicDescription: 'Emocional, aconchegante.',
    soundEffects: [],
    directorLesson: 'Ajudar a criança a olhar para as dificuldades como parte do caminho, não o fim dele.',
    lines: [
      {
        id: 's4e10_25_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A viagem havia sido difícil. Mas cada dificuldade fazia parte de uma história maior.',
      },
      {
        id: 's4e10_25_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Paulo chegou a Roma... porque ainda tinha uma missão.',
      }
    ]
  },
  {
    id: 26,
    sceneNumber: 26,
    title: 'Grande Reflexão',
    subtitle: 'Encorajando a criança',
    biblicalRef: '',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'paul_house_rome',
    musicTheme: 'the_message_continues',
    visualKey: 's4e10_26_reflection',
    environmentSummary: 'O ouvinte em foco.',
    musicDescription: 'Piano gentil, muito próximo.',
    soundEffects: [],
    directorLesson: 'Uma mensagem pastoral para os ouvintes.',
    lines: [
      {
        id: 's4e10_26_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Talvez você também tenha um caminho difícil pela frente.',
      },
      {
        id: 's4e10_26_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Talvez algumas coisas não aconteçam como você imaginou.',
      },
      {
        id: 's4e10_26_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas não desista. Continue fazendo o bem. Continue aprendendo. E continue confiando em Deus.',
      }
    ]
  },
  {
    id: 27,
    sceneNumber: 27,
    title: 'A Frase Marcante',
    subtitle: 'O resumo da temporada',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'paul_house_rome',
    musicTheme: 'the_message_continues',
    visualKey: 's4e10_27_phrase',
    environmentSummary: 'Momento muito significativo.',
    musicDescription: 'A música prepara o clímax final.',
    soundEffects: [],
    directorLesson: 'A frase que marca a vida de quem ouve.',
    lines: [
      {
        id: 's4e10_27_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma tempestade pode mudar o caminho... mas não precisa mudar o propósito.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e10_27_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Paulo chegou a Roma. E sua missão continuou.',
      }
    ]
  },
  {
    id: 28,
    sceneNumber: 28,
    title: 'A Retrospectiva da Temporada',
    subtitle: 'Tudo o que aconteceu',
    biblicalRef: '',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'paul_house_rome',
    musicTheme: 'final_arrival',
    visualKey: 's4e10_28_season_montage',
    environmentSummary: 'Sons entrelaçados: vento de pentecostes, mar, fogueira.',
    musicDescription: 'O tema da temporada ganha sua forma máxima, grandioso.',
    soundEffects: ['wind_breeze', 'sea_waves', 'fire_crackling'],
    directorLesson: 'A viagem épica do livro de Atos em poucos segundos.',
    lines: [
      {
        id: 's4e10_28_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'De Jerusalém... até Roma.',
      },
      {
        id: 's4e10_28_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'De uma pequena comunidade... até cidades inteiras.',
      },
      {
        id: 's4e10_28_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'De uma tempestade... até uma nova oportunidade.',
      },
      {
        id: 's4e10_28_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A história continuou.',
      }
    ]
  },
  {
    id: 29,
    sceneNumber: 29,
    title: 'A Mensagem Chegou Até Nós',
    subtitle: 'O elo da corrente',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'paul_house_rome',
    musicTheme: 'final_arrival',
    visualKey: 's4e10_29_narrator',
    environmentSummary: 'O fechamento com o hoje.',
    musicDescription: 'Emocional, épica, gloriosa.',
    soundEffects: [],
    directorLesson: 'Mostrar à criança que ela é parte dessa corrente.',
    lines: [
      {
        id: 's4e10_29_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E assim... Paulo chegou a Roma.',
      },
      {
        id: 's4e10_29_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a mensagem de Jesus continuaria viajando.',
      },
      {
        id: 's4e10_29_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'De pessoa para pessoa. De cidade para cidade. De geração para geração.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e10_29_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E chegou até nós.',
      }
    ]
  },
  {
    id: 30,
    sceneNumber: 30,
    title: 'Você Também Pode',
    subtitle: 'A luz que continua',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'paul_house_rome',
    musicTheme: 'final_arrival',
    visualKey: 's4e10_30_season_end',
    environmentSummary: 'Brilho final da história.',
    musicDescription: 'Música suaviza maravilhosamente.',
    soundEffects: [],
    directorLesson: 'Entregar o "bastão" da missão para quem está ouvindo.',
    lines: [
      {
        id: 's4e10_30_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E talvez... um dia... você também possa levar esperança para alguém.',
      },
      {
        id: 's4e10_30_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Porque uma pequena luz... pode iluminar um lugar inteiro.',
      }
    ]
  },
  {
    id: 31,
    sceneNumber: 31,
    title: 'O Fim da História',
    subtitle: 'O fim de Atos',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'paul_house_rome',
    musicTheme: 'final_arrival',
    visualKey: 's4e10_31_message_child',
    environmentSummary: 'O fim solene de uma jornada épica.',
    musicDescription: 'A música cresce e dá espaço.',
    soundEffects: [],
    directorLesson: 'O livro de Atos se encerra.',
    lines: [
      {
        id: 's4e10_31_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Esta história termina aqui.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e10_31_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a aventura da Bíblia... continua.',
      }
    ]
  },
  {
    id: 32,
    sceneNumber: 32,
    title: 'Uma Nova Temporada',
    subtitle: 'Expectativa',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'paul_house_rome',
    musicTheme: 'the_message_continues',
    visualKey: 's4e10_32_grand_finale',
    environmentSummary: 'Música de expectativa.',
    musicDescription: 'Misteriosa e empolgante.',
    soundEffects: [],
    directorLesson: 'Criar curiosidade para as próximas histórias.',
    lines: [
      {
        id: 's4e10_32_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Prepare-se para novas histórias. Novas aventuras. Novos personagens. E novas lições.',
      },
      {
        id: 's4e10_32_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma nova temporada está chegando...',
      }
    ]
  },
  {
    id: 33,
    sceneNumber: 33,
    title: 'A Grande Frase Final',
    subtitle: 'A grande verdade',
    biblicalRef: '',
    durationLabel: '10 segundos',
    estimatedDurationSec: 10,
    ambientType: 'paul_house_rome',
    musicTheme: 'the_message_continues',
    visualKey: 's4e10_33_next_season',
    environmentSummary: 'Silêncio absoluto para o impacto, seguido de um brilho.',
    musicDescription: 'Termina com suspensão.',
    soundEffects: [],
    directorLesson: 'Uma despedida marcante.',
    lines: [
      {
        id: 's4e10_33_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Porque quando uma história termina... uma nova aventura pode começar.',
      }
    ]
  },
  {
    id: 34,
    sceneNumber: 34,
    title: 'Assinatura',
    subtitle: 'Toon Tales Kids',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'toon_tales_jingle',
    musicTheme: 'signature_jingle',
    visualKey: 's4e10_34_outro',
    environmentSummary: 'O jingle e vozes da assinatura.',
    musicDescription: 'Alívio alegre de sempre.',
    soundEffects: ['toon_tales_jingle'],
    directorLesson: 'Voltar ao calor do formato padrão Toon Tales.',
    lines: [
      {
        id: 's4e10_34_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E essa foi mais uma aventura da Bíblia em Áudio.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e10_34_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a história ainda não terminou...',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's4e10_34_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma nova aventura está esperando por você.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e10_34_l4',
        character: 'child',
        characterLabel: 'Crianças',
        text: 'TOON TALES KIDS!',
        emotionGuide: 'Voz infantil e enérgica'
      },
      {
        id: 's4e10_34_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Histórias que ensinam, aventuras que transformam!',
      }
    ]
  }
];

export const ROMA_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    dayLabel: 'A Chegada',
    question: 'Depois que partiram de Malta e passaram por outras cidades, como Paulo foi recebido pelos irmãos em Roma?',
    options: ['Eles não quiseram ver Paulo', 'Eles cobraram dinheiro', 'Eles foram até a estrada encontrá-lo, o que deixou Paulo encorajado', 'Eles fugiram com medo'],
    correctIndex: 2,
    explanation: 'A igreja de Roma ficou tão feliz em saber que Paulo estava chegando que muitos irmãos viajaram até a Praça de Ápio e as Três Tavernas só para encontrá-lo na estrada. Isso encheu o coração de Paulo de alegria!',
    biblicalVerse: 'Atos 28:15',
  },
  {
    id: 2,
    dayLabel: 'A Situação de Paulo',
    question: 'Onde Paulo teve que morar quando finalmente chegou a Roma, sob custódia?',
    options: ['Em um belo palácio imperial', 'Em uma cela muito escura e fria', 'No convés de um navio', 'Em uma casa, mas acompanhado por um soldado'],
    correctIndex: 3,
    explanation: 'Embora fosse prisioneiro, Paulo teve permissão para morar em uma casa alugada por ele mesmo, onde vivia com um soldado responsável por sua guarda.',
    biblicalVerse: 'Atos 28:16',
  },
  {
    id: 3,
    dayLabel: 'Ensinando com Coragem',
    question: 'O que Paulo continuou fazendo na casa em que estava hospedado em Roma?',
    options: ['Ficou o tempo todo dormindo para descansar da viagem', 'Não quis receber mais ninguém, porque estava triste e cansado', 'Fazia brinquedos de madeira para o exército romano', 'Recebia a todos que iam visitá-lo e ensinava sobre o Reino de Deus e Jesus'],
    correctIndex: 3,
    explanation: 'Nem o navio quebrado nem a prisão puderam parar a mensagem! Durante dois anos inteiros, Paulo continuou anunciando as boas novas sobre Jesus para todas as pessoas que iam até sua casa.',
    biblicalVerse: 'Atos 28:30-31',
  },
  {
    id: 4,
    dayLabel: 'A Reação das Pessoas',
    question: 'O que acontecia quando Paulo ensinava as Escrituras aos líderes e a outras pessoas em Roma?',
    options: ['Todos sempre concordavam sem fazer nenhuma pergunta', 'Alguns acreditavam e outros duvidavam, mas Paulo continuava ensinando', 'Eles dormiam enquanto ele falava', 'Apenas os mais ricos podiam entrar na casa para ouvir'],
    correctIndex: 1,
    explanation: 'Assim como acontece até hoje, algumas pessoas que ouviram a mensagem acreditaram, enquanto outras preferiram não acreditar. A missão de Paulo era pregar a todos com amor, independente do que eles escolheriam.',
    biblicalVerse: 'Atos 28:24',
  },
  {
    id: 5,
    dayLabel: 'O Propósito Divino',
    question: 'Qual é o grande ensinamento que aprendemos com toda a viagem e a chegada de Paulo a Roma?',
    options: ['Se tivermos um problema, é porque Deus não nos ama mais', 'Uma tempestade e os obstáculos podem mudar o nosso caminho, mas não precisam destruir o nosso propósito de fazer o bem', 'Quando a viagem é longa, devemos sempre desistir', 'Só podemos ajudar as pessoas se formos livres de qualquer problema'],
    correctIndex: 1,
    explanation: 'Deus prometeu que Paulo iria para Roma, e Paulo acreditou nisso! As tempestades, o vento, a serpente, as acusações e até a custódia não foram capazes de parar os planos de Deus.',
    biblicalVerse: 'Filipenses 1:12-14',
  }
];
