import { Scene, QuizQuestion } from '../types';

export const EPISODE_META_T4E6 = {
  id: 't4e6',
  title: 'Paulo Viaja para Roma',
  subtitle: 'Uma viagem rumo à cidade imperial',
  biblicalText: 'Atos 27:1 a 12',
  durationLabel: '18 min',
  moralLesson: 'Paulo nos ensina que confiar em Deus não significa ignorar os perigos, mas agir com sabedoria.',
};

export const PAULO_ROMA_SCENES: Scene[] = [
  {
    id: 1,
    sceneNumber: 1,
    title: 'Abertura',
    subtitle: 'O Chamado para Roma',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'ship_deck',
    musicTheme: 'epic_adventure',
    visualKey: 's4e6_01_intro',
    environmentSummary: 'Ondas, gaivotas, madeira rangendo e vento.',
    musicDescription: 'Música épica de aventura, sugerindo o início de algo grandioso.',
    soundEffects: ['sea_waves', 'wind_breeze'],
    directorLesson: 'Abertura cinematográfica mostrando que uma nova fase e uma grande viagem vão começar.',
    lines: [
      {
        id: 's4e6_01_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Paulo já havia enfrentado muitas dificuldades. Prisões. Perseguições. Longas viagens.',
      },
      {
        id: 's4e6_01_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas agora...',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e6_01_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'uma nova viagem começaria. Uma viagem para Roma.',
      }
    ]
  },
  {
    id: 2,
    sceneNumber: 2,
    title: 'A Cidade Imperial',
    subtitle: 'Destino',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'rome_city',
    musicTheme: 'rome_journey',
    visualKey: 's4e6_02_rome',
    environmentSummary: 'Sons de uma cidade movimentada, carruagens, passos.',
    musicDescription: 'Música cresce com ar de grandiosidade imperial.',
    soundEffects: ['city_street', 'footsteps'],
    directorLesson: 'Estabelecer a importância do destino final.',
    lines: [
      {
        id: 's4e6_02_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Roma era uma das cidades mais importantes do mundo naquele tempo. Era para lá que Paulo seria levado.',
      }
    ]
  },
  {
    id: 3,
    sceneNumber: 3,
    title: 'A Missão de Paulo',
    subtitle: 'Sempre testemunhando',
    biblicalRef: 'Atos 27:1',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'prison_cell',
    musicTheme: 'mission_adventure',
    visualKey: 's4e6_03_mission',
    environmentSummary: 'Ambiente fechado, antes de sair.',
    musicDescription: 'Música séria e com foco na missão.',
    soundEffects: [],
    directorLesson: 'Paulo continua a missão mesmo preso.',
    lines: [
      {
        id: 's4e6_03_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Paulo sabia que ainda precisava testemunhar sobre Jesus. Mesmo estando preso, ele continuava cumprindo sua missão.',
      },
      {
        id: 's4e6_03_l2',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Preciso continuar.',
        emotionGuide: 'Voz calma e determinada'
      }
    ]
  },
  {
    id: 4,
    sceneNumber: 4,
    title: 'Os Companheiros',
    subtitle: 'Lucas e Aristarco',
    biblicalRef: 'Atos 27:2',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'ship_port',
    musicTheme: 'mission_adventure',
    visualKey: 's4e6_04_companions',
    environmentSummary: 'Porto movimentado, marinheiros.',
    musicDescription: 'A aventura começa a se formar.',
    soundEffects: ['crowd_murmur_surprised'],
    directorLesson: 'Introduzir os amigos fiéis que vão na viagem.',
    lines: [
      {
        id: 's4e6_04_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Paulo não viajaria sozinho. Lucas estava com ele. E também Aristarco.',
      },
      {
        id: 's4e6_04_l2',
        character: 'lucas',
        characterLabel: 'Lucas',
        text: 'Paulo, estamos prontos.',
      },
      {
        id: 's4e6_04_l3',
        character: 'aristarco',
        characterLabel: 'Aristarco',
        text: 'Roma nos espera.',
      },
      {
        id: 's4e6_04_l4',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Vamos confiar em Deus.',
      }
    ]
  },
  {
    id: 5,
    sceneNumber: 5,
    title: 'O Oficial Júlio',
    subtitle: 'O centurião romano',
    biblicalRef: 'Atos 27:1',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'ship_port',
    musicTheme: 'rome_journey',
    visualKey: 's4e6_05_julius',
    environmentSummary: 'Passos firmes de bota militar de couro.',
    musicDescription: 'Um tom militar respeitoso.',
    soundEffects: ['footsteps'],
    directorLesson: 'Apresentar Júlio de forma respeitosa.',
    lines: [
      {
        id: 's4e6_05_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O oficial responsável pelos prisioneiros se chamava Júlio.',
      },
      {
        id: 's4e6_05_l2',
        character: 'julio',
        characterLabel: 'Júlio',
        text: 'Preparem-se para embarcar.',
        emotionGuide: 'Voz de comando, mas justa'
      },
      {
        id: 's4e6_05_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Júlio tratou Paulo com consideração.',
      }
    ]
  },
  {
    id: 6,
    sceneNumber: 6,
    title: 'O Embarque',
    subtitle: 'Zarpando',
    biblicalRef: 'Atos 27:2',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'ship_deck',
    musicTheme: 'sea_adventure',
    visualKey: 's4e6_06_boarding',
    environmentSummary: 'Cordas, madeira, passos, caixas e marinheiros trabalhando.',
    musicDescription: 'Música de aventura marítima vibrante.',
    soundEffects: ['footsteps', 'wind_breeze'],
    directorLesson: 'Dar vida ao navio zarpando.',
    lines: [
      {
        id: 's4e6_06_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O navio estava pronto. Velas foram preparadas. As cordas foram soltas.',
      },
      {
        id: 's4e6_06_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E o navio começou a deixar o porto.',
      }
    ]
  },
  {
    id: 7,
    sceneNumber: 7,
    title: 'O Mar Aberto',
    subtitle: 'O início da jornada',
    biblicalRef: 'Atos 27:3',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'ship_deck',
    musicTheme: 'sea_adventure',
    visualKey: 's4e6_07_sea',
    environmentSummary: 'Ondas, vento moderado, som agradável de navegação.',
    musicDescription: 'Música leve de viagem marítima.',
    soundEffects: ['sea_waves'],
    directorLesson: 'O começo parece promissor e pacífico.',
    lines: [
      {
        id: 's4e6_07_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'No começo... o mar parecia tranquilo.',
      },
      {
        id: 's4e6_07_l2',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Que viagem será essa?',
      },
      {
        id: 's4e6_07_l3',
        character: 'lucas',
        characterLabel: 'Lucas',
        text: 'Espero que seja tranquila.',
      },
      {
        id: 's4e6_07_l4',
        character: 'aristarco',
        characterLabel: 'Aristarco',
        text: '(Ri discretamente)',
        emotionGuide: 'Alegre e otimista'
      }
    ]
  },
  {
    id: 8,
    sceneNumber: 8,
    title: 'A Viagem Complica',
    subtitle: 'Primeira Parada',
    biblicalRef: 'Atos 27:3-4',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'ship_deck',
    musicTheme: 'storm_suspense',
    visualKey: 's4e6_08_first_stop',
    environmentSummary: 'Ventos mudando de direção, rangidos fortes da madeira.',
    musicDescription: 'A música adquire um tom de preocupação leve.',
    soundEffects: ['wind_breeze'],
    directorLesson: 'Os primeiros obstáculos aparecem.',
    lines: [
      {
        id: 's4e6_08_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O navio navegou por vários lugares. Os ventos, porém, não estavam ajudando.',
      }
    ]
  },
  {
    id: 9,
    sceneNumber: 9,
    title: 'Ventos Contrários',
    subtitle: 'Luta no mar',
    biblicalRef: 'Atos 27:4-7',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'ship_deck',
    musicTheme: 'storm_suspense',
    visualKey: 's4e6_09_contrary_wind',
    environmentSummary: 'Vento mais forte, marinheiros lutando com as cordas.',
    musicDescription: 'Música acelera com leve tensão.',
    soundEffects: ['wind_breeze', 'sea_waves'],
    directorLesson: 'O trabalho árduo no mar.',
    lines: [
      {
        id: 's4e6_09_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O vento começou a dificultar a viagem. Os marinheiros precisaram navegar com cuidado.',
      },
      {
        id: 's4e6_09_l2',
        character: 'marinheiro',
        characterLabel: 'Marinheiro',
        text: 'Segurem as cordas!',
        emotionGuide: 'Gritando com esforço no vento'
      }
    ]
  },
  {
    id: 10,
    sceneNumber: 10,
    title: 'Creta',
    subtitle: 'Bons Portos',
    biblicalRef: 'Atos 27:7-8',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'ship_port',
    musicTheme: 'rome_journey',
    visualKey: 's4e6_10_crete',
    environmentSummary: 'Som de porto mais calmo, âncoras caindo.',
    musicDescription: 'Música acalma temporariamente.',
    soundEffects: ['city_street'],
    directorLesson: 'Uma parada para decidir o futuro da viagem.',
    lines: [
      {
        id: 's4e6_10_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles chegaram a uma região próxima à ilha de Creta. Ali precisavam decidir o que fazer.',
      }
    ]
  },
  {
    id: 11,
    sceneNumber: 11,
    title: 'O Perigo se Aproxima',
    subtitle: 'Tempo fechando',
    biblicalRef: 'Atos 27:9',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'ship_port',
    musicTheme: 'storm_suspense',
    visualKey: 's4e6_11_danger',
    environmentSummary: 'Um vento mais gelado soprando no fundo.',
    musicDescription: 'O suspense aumenta significativamente.',
    soundEffects: ['wind_breeze'],
    directorLesson: 'Informar o problema sazonal do inverno marítimo.',
    lines: [
      {
        id: 's4e6_11_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Já era uma época perigosa para navegar. O inverno estava se aproximando.',
      },
      {
        id: 's4e6_11_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os ventos poderiam ficar muito fortes.',
      }
    ]
  },
  {
    id: 12,
    sceneNumber: 12,
    title: 'O Alerta de Paulo',
    subtitle: 'Aviso Sábio',
    biblicalRef: 'Atos 27:10',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'ship_deck',
    musicTheme: 'tense_silence',
    visualKey: 's4e6_12_paul_warns',
    environmentSummary: 'Silêncio no navio para a fala de Paulo.',
    musicDescription: 'Ausência quase total de música, focando no aviso.',
    soundEffects: [],
    directorLesson: 'Paulo não é o capitão, mas tem experiência de vida e sabedoria espiritual.',
    lines: [
      {
        id: 's4e6_12_l1',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Senhores...',
      },
      {
        id: 's4e6_12_l2',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Estou percebendo que essa viagem pode trazer muitos problemas. Podemos perder a carga. O navio pode ser danificado.',
      },
      {
        id: 's4e6_12_l3',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'E nossas vidas podem correr perigo.',
        emotionGuide: 'Firme e muito sério'
      }
    ]
  },
  {
    id: 13,
    sceneNumber: 13,
    title: 'A Decisão de Continuar',
    subtitle: 'Ignorando o Aviso',
    biblicalRef: 'Atos 27:11-12',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'ship_deck',
    musicTheme: 'storm_suspense',
    visualKey: 's4e6_13_decision',
    environmentSummary: 'Vozes discutindo o trajeto.',
    musicDescription: 'A tensão de um grande erro prestes a ser cometido.',
    soundEffects: [],
    directorLesson: 'Mostrar a decisão humana que leva ao desastre.',
    lines: [
      {
        id: 's4e6_13_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas o comandante e outros responsáveis pelo navio pensaram que ainda seria possível continuar.',
      },
      {
        id: 's4e6_13_l2',
        character: 'marinheiro',
        characterLabel: 'Marinheiro',
        text: 'Talvez encontremos um lugar melhor para passar o inverno.',
      },
      {
        id: 's4e6_13_l3',
        character: 'julio',
        characterLabel: 'Júlio',
        text: 'Vamos avaliar as condições.',
      },
      {
        id: 's4e6_13_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A decisão foi continuar.',
      }
    ]
  },
  {
    id: 14,
    sceneNumber: 14,
    title: 'O Céu Muda',
    subtitle: 'Nuvens Escuras',
    biblicalRef: 'Atos 27:13-14',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'stormy_sea',
    musicTheme: 'storm_suspense',
    visualKey: 's4e6_14_weather_changes',
    environmentSummary: 'Vento assobiando mais alto e ondas quebrando.',
    musicDescription: 'Música de suspense grave e crescente.',
    soundEffects: ['wind_breeze', 'sea_waves'],
    directorLesson: 'O perigo iminente se apresenta.',
    lines: [
      {
        id: 's4e6_14_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E então... o céu começou a mudar.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e6_14_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'As nuvens se aproximaram. O vento ficou mais forte.',
      }
    ]
  },
  {
    id: 15,
    sceneNumber: 15,
    title: 'Paulo Observa',
    subtitle: 'Cuidado',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'stormy_sea',
    musicTheme: 'storm_suspense',
    visualKey: 's4e6_15_paul_observes',
    environmentSummary: 'Mar agitado.',
    musicDescription: 'Manter a tensão leve.',
    soundEffects: ['sea_waves', 'wind_breeze'],
    directorLesson: 'A percepção do apóstolo perante o perigo inevitável.',
    lines: [
      {
        id: 's4e6_15_l1',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Precisamos ter cuidado.',
      },
      {
        id: 's4e6_15_l2',
        character: 'lucas',
        characterLabel: 'Lucas',
        text: 'Você acha que vai piorar?',
      },
      {
        id: 's4e6_15_l3',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Não sei. Mas devemos estar preparados.',
      }
    ]
  },
  {
    id: 16,
    sceneNumber: 16,
    title: 'A Última Noite Tranquila',
    subtitle: 'Confiança em Deus',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'ship_deck',
    musicTheme: 'warm_acoustic',
    visualKey: 's4e6_16_quiet_night',
    environmentSummary: 'Vento moderado, rangido rítmico do navio, paz momentânea.',
    musicDescription: 'Música emocional suave.',
    soundEffects: ['sea_waves'],
    directorLesson: 'O último momento de calmaria antes do caos da tempestade.',
    lines: [
      {
        id: 's4e6_16_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Naquela noite... Paulo olhou para o mar.',
      },
      {
        id: 's4e6_16_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele ainda não sabia tudo o que aconteceria. Mas sabia de uma coisa.',
      },
      {
        id: 's4e6_16_l3',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Deus está conosco.',
        emotionGuide: 'Com profunda certeza'
      }
    ]
  },
  {
    id: 17,
    sceneNumber: 17,
    title: 'Reflexão',
    subtitle: 'Um Passo de Cada Vez',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'ship_deck',
    musicTheme: 'warm_acoustic',
    visualKey: 's4e6_17_reflection',
    environmentSummary: 'Ambiente contemplativo.',
    musicDescription: 'A canção acolhe.',
    soundEffects: [],
    directorLesson: 'Preparando a moral da história.',
    lines: [
      {
        id: 's4e6_17_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Às vezes... quando começamos uma aventura... não conseguimos enxergar todos os desafios que estão pela frente.',
      },
      {
        id: 's4e6_17_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas podemos continuar um passo de cada vez.',
      }
    ]
  },
  {
    id: 18,
    sceneNumber: 18,
    title: 'A Lição para as Crianças',
    subtitle: 'Agir com Sabedoria',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'ship_deck',
    musicTheme: 'warm_acoustic',
    visualKey: 's4e6_18_lesson',
    environmentSummary: 'Pausa para a sabedoria infantil.',
    musicDescription: 'Manter suavidade e profundidade.',
    soundEffects: [],
    directorLesson: 'Mensagem pastoral final.',
    lines: [
      {
        id: 's4e6_18_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Paulo nos ensina que confiar em Deus não significa ignorar os perigos. Significa agir com sabedoria... e continuar confiando mesmo quando não sabemos o que acontecerá.',
      }
    ]
  },
  {
    id: 19,
    sceneNumber: 19,
    title: 'Frase Marcante',
    subtitle: 'O Próximo Passo',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'ship_deck',
    musicTheme: 'warm_acoustic',
    visualKey: 's4e6_19_phrase',
    environmentSummary: 'Silêncio suave da música.',
    musicDescription: 'O auge emocional da lição.',
    soundEffects: [],
    directorLesson: 'A grande frase de ouro.',
    lines: [
      {
        id: 's4e6_19_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Você não precisa conhecer todo o caminho...',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e6_19_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: '...para dar o próximo passo.',
      }
    ]
  },
  {
    id: 20,
    sceneNumber: 20,
    title: 'Montagem Final',
    subtitle: 'Navegando ao Desconhecido',
    biblicalRef: '',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'ship_deck',
    musicTheme: 'sea_adventure',
    visualKey: 's4e6_20_montage',
    environmentSummary: 'Sons de mar vasto e marinheiros.',
    musicDescription: 'A música épica volta.',
    soundEffects: ['sea_waves', 'wind_breeze'],
    directorLesson: 'A viagem continua sob falsa esperança do clima.',
    lines: [
      {
        id: 's4e6_20_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O navio continuou. As velas estavam abertas. O mar se estendia até o horizonte.',
      },
      {
        id: 's4e6_20_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Roma ainda estava muito distante.',
      }
    ]
  },
  {
    id: 21,
    sceneNumber: 21,
    title: 'O Suspense',
    subtitle: 'A Virada',
    biblicalRef: 'Atos 27:14',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'stormy_sea',
    musicTheme: 'storm_suspense',
    visualKey: 's4e6_21_suspense',
    environmentSummary: 'Onda forte, vento avassalador cortando a cena.',
    musicDescription: 'Música grave de desastre iminente, corta abruptamente no fim.',
    soundEffects: ['sea_waves', 'wind_breeze'],
    directorLesson: 'A grande transição para o próximo episódio.',
    lines: [
      {
        id: 's4e6_21_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas o mar estava prestes a mudar.',
        pauseType: 'PAUSA LONGA',
        pauseSeconds: 2.0,
      },
      {
        id: 's4e6_21_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma tempestade se aproximava.',
      }
    ]
  },
  {
    id: 22,
    sceneNumber: 22,
    title: 'Gancho',
    subtitle: 'O Primeiro Dia',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'stormy_sea',
    musicTheme: 'storm_suspense',
    visualKey: 's4e6_22_hook',
    environmentSummary: 'O mar ganha força monstruosa.',
    musicDescription: 'Onda gigante de som.',
    soundEffects: ['rain_storm', 'sea_waves'],
    directorLesson: 'O perigo atinge o auge antes do corte.',
    lines: [
      {
        id: 's4e6_22_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E aquela... seria apenas a primeira noite de uma das maiores aventuras da vida de Paulo.',
      }
    ]
  },
  {
    id: 23,
    sceneNumber: 23,
    title: 'Próximo Episódio',
    subtitle: 'A Tempestade',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'stormy_sea',
    musicTheme: 'epic_adventure',
    visualKey: 's4e6_23_next',
    environmentSummary: 'Trovão estrondoso.',
    musicDescription: 'Música Épica.',
    soundEffects: ['rain_storm'],
    directorLesson: 'Final de arrepiar.',
    lines: [
      {
        id: 's4e6_23_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'No próximo episódio... A Tempestade.',
      },
      {
        id: 's4e6_23_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Quando o mar se levantou.',
      }
    ]
  },
  {
    id: 24,
    sceneNumber: 24,
    title: 'Assinatura',
    subtitle: 'Toon Tales Kids',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'toon_tales_jingle',
    musicTheme: 'signature_jingle',
    visualKey: 's4e6_24_outro',
    environmentSummary: 'A volta da paz com o jingle oficial.',
    musicDescription: 'Assinatura clássica da série.',
    soundEffects: ['toon_tales_jingle'],
    directorLesson: 'O sorriso e a paz de volta.',
    lines: [
      {
        id: 's4e6_24_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E essa foi mais uma aventura da Bíblia em Áudio.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e6_24_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a história ainda não terminou...',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's4e6_24_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma nova aventura está esperando por você.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e6_24_l4',
        character: 'child',
        characterLabel: 'Crianças',
        text: 'TOON TALES KIDS!',
        emotionGuide: 'Forte e feliz'
      },
      {
        id: 's4e6_24_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Histórias que ensinam, aventuras que transformam!',
      }
    ]
  }
];

export const PAULO_ROMA_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    dayLabel: 'O Destino de Paulo',
    question: 'Para qual cidade importante o apóstolo Paulo estava sendo levado?',
    options: ['Jerusalém', 'Creta', 'Roma', 'Atenas'],
    correctIndex: 2,
    explanation: 'Paulo estava sendo levado para Roma, a cidade mais poderosa do mundo naquela época, para testemunhar sobre Jesus mesmo diante do Imperador.',
    biblicalVerse: 'Atos 27:1',
  },
  {
    id: 2,
    dayLabel: 'Os Amigos',
    question: 'Quais companheiros viajaram no navio com Paulo para não deixá-lo sozinho?',
    options: ['Pedro e João', 'Lucas e Aristarco', 'Silas e Timóteo', 'Barnabé e Marcos'],
    correctIndex: 1,
    explanation: 'Os amigos leais Lucas (que escreveu o livro de Atos) e Aristarco viajaram com Paulo para apoiá-lo nessa difícil missão.',
    biblicalVerse: 'Atos 27:2',
  },
  {
    id: 3,
    dayLabel: 'O Conselho Ignorado',
    question: 'O que Paulo avisou aos marinheiros quando eles pararam em Bons Portos, na ilha de Creta?',
    options: ['Que ele queria comprar roupas novas', 'Que eles não deveriam viajar mais, pois corriam perigo com o inverno e tempestades', 'Que o navio era muito lento', 'Que eles deveriam ir mais rápido'],
    correctIndex: 1,
    explanation: 'Paulo tinha muita experiência e sabedoria, e avisou que se continuassem, o navio, a carga e as pessoas estariam em perigo. Mas o comandante não ouviu.',
    biblicalVerse: 'Atos 27:9-10',
  },
  {
    id: 4,
    dayLabel: 'A Decisão Errada',
    question: 'Por que o comandante do navio decidiu continuar a viagem em vez de ficar lá?',
    options: ['Eles acharam que poderiam achar um porto melhor para passar o inverno', 'Porque estavam com pressa', 'Porque eles não gostavam de Creta', 'Porque o imperador ordenou'],
    correctIndex: 0,
    explanation: 'Eles acharam que o porto onde estavam não era bom para passar o inverno e arriscaram seguir viagem para encontrar um melhor, ignorando o aviso sábio de Paulo.',
    biblicalVerse: 'Atos 27:11-12',
  },
  {
    id: 5,
    dayLabel: 'A Maior Aventura',
    question: 'O que Paulo fez quando viu que a situação no mar começou a ficar perigosa?',
    options: ['Chorou desesperado', 'Entrou em pânico e pulou no mar', 'Permaneceu calmo, confiando que Deus estava no controle', 'Brigou com Júlio e os marinheiros'],
    correctIndex: 2,
    explanation: 'Paulo sabia que os perigos eram reais, mas escolheu confiar em Deus. Confiar não significa ignorar os problemas, mas enfrentá-los com sabedoria e fé.',
    biblicalVerse: 'Lição central do episódio',
  }
];
