import { Scene, QuizQuestion } from '../types';

export const EPISODE_META_T3E3 = {
  id: 't3e3',
  title: 'O Batismo de Jesus',
  subtitle: 'Quando o céu se abriu',
  biblicalText: 'Mateus 3:1-17, Marcos 1:9-11, Lucas 3:21-22, João 1:29-34',
  durationLabel: '15 min',
  moralLesson: 'Jesus estava iniciando uma missão especial. Deus conhece quem somos e tem um propósito para nossa vida. Quando sabemos que somos amados, podemos enfrentar novos desafios com coragem.',
};

export const JESUS_BATISMO_SCENES: Scene[] = [
  {
    id: 1,
    sceneNumber: 1,
    title: 'João no Deserto',
    subtitle: 'Preparando o caminho',
    biblicalRef: 'Mateus 3:1-3',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'desert_wind',
    musicTheme: 'john_calling',
    visualKey: 's3e3_01_intro',
    environmentSummary: 'Vento, areia, passos no deserto. Água corrente ao fundo.',
    musicDescription: 'Música de aventura e chamado, com tambores leves e cordas.',
    soundEffects: ['desert_wind', 'ocean_waters'],
    directorLesson: 'Apresentar João Batista como uma figura corajosa preparando algo grande.',
    lines: [
      {
        id: 's3e3_01_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus havia crescido. Agora tinha chegado o momento de começar sua missão.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e3_01_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas antes... algo extraordinário aconteceria no rio Jordão.',
        soundCue: 'Som de água aumenta'
      },
      {
        id: 's3e3_01_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Um homem chamado João estava preparando o caminho.',
        soundCue: 'Música de aventura cresce'
      },
      {
        id: 's3e3_01_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Enquanto Jesus crescia... um homem começou a chamar as pessoas para mudar de vida. Seu nome era João.',
      },
      {
        id: 's3e3_01_l5',
        character: 'joao_batista',
        characterLabel: 'João',
        text: 'Preparem o caminho! Voltem o coração para Deus!',
        emotionGuide: 'Forte, energético, apaixonado'
      },
      {
        id: 's3e3_01_l6',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'João pregava perto do rio Jordão.',
      }
    ]
  },
  {
    id: 2,
    sceneNumber: 2,
    title: 'A Multidão',
    subtitle: 'Buscando mudança',
    biblicalRef: 'Lucas 3:10-14',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'crowd_river',
    musicTheme: 'john_calling',
    visualKey: 's3e3_02_crowd',
    environmentSummary: 'Pessoas chegando, conversas, crianças e o som do rio.',
    musicDescription: 'Música de expectativa.',
    soundEffects: ['nature_sounds', 'ocean_waters'],
    directorLesson: 'A mensagem prática de João sobre viver honestamente.',
    lines: [
      {
        id: 's3e3_02_l1',
        character: 'joao_batista',
        characterLabel: 'João',
        text: 'Deus está chamando vocês! Preparem o coração!',
        soundCue: 'Pessoas chegando'
      },
      {
        id: 's3e3_02_l2',
        character: 'person',
        characterLabel: 'Pessoa',
        text: 'João, o que devemos fazer?',
      },
      {
        id: 's3e3_02_l3',
        character: 'joao_batista',
        characterLabel: 'João',
        text: 'Façam o que é certo. Sejam honestos. Sejam bondosos. Vivam de maneira que mostre que vocês realmente querem seguir a Deus.',
      },
      {
        id: 's3e3_02_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Cada vez mais pessoas vinham ouvir João.',
      }
    ]
  },
  {
    id: 3,
    sceneNumber: 3,
    title: 'O Batismo',
    subtitle: 'Um novo começo',
    biblicalRef: 'Mateus 3:5-6',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'jordan_river_baptism',
    musicTheme: 'jesus_theme',
    visualKey: 's3e3_03_baptism',
    environmentSummary: 'Som de água do rio se movendo suavemente.',
    musicDescription: 'Música suave.',
    soundEffects: ['ocean_waters'],
    directorLesson: 'Explicar o simbolismo do batismo para as crianças de forma simples.',
    lines: [
      {
        id: 's3e3_03_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'João batizava as pessoas no rio Jordão.',
        soundCue: 'Música suave, som de água'
      },
      {
        id: 's3e3_03_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O batismo representava uma decisão. Uma mudança. Um novo começo.',
      },
      {
        id: 's3e3_03_l3',
        character: 'joao_batista',
        characterLabel: 'João',
        text: 'Preparem seus corações.',
      }
    ]
  },
  {
    id: 4,
    sceneNumber: 4,
    title: 'Uma Notícia',
    subtitle: 'Ele está chegando',
    biblicalRef: 'João 1:29',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'crowd_river',
    musicTheme: 'mysterious_drone',
    visualKey: 's3e3_04_news',
    environmentSummary: 'Ambiente de multidão diminuindo para um silêncio tenso.',
    musicDescription: 'Música muda para silêncio reflexivo.',
    soundEffects: ['ocean_waters'],
    directorLesson: 'A expectativa e o choque positivo de João.',
    lines: [
      {
        id: 's3e3_04_l1',
        character: 'person',
        characterLabel: 'Pessoa',
        text: 'João! Você ouviu?',
      },
      {
        id: 's3e3_04_l2',
        character: 'joao_batista',
        characterLabel: 'João',
        text: 'O quê?',
      },
      {
        id: 's3e3_04_l3',
        character: 'person',
        characterLabel: 'Pessoa',
        text: 'Jesus está vindo.',
        soundCue: 'Silêncio. Música muda'
      },
      {
        id: 's3e3_04_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'João respira.',
      },
      {
        id: 's3e3_04_l5',
        character: 'joao_batista',
        characterLabel: 'João',
        text: 'Jesus...',
      }
    ]
  },
  {
    id: 5,
    sceneNumber: 5,
    title: 'Jesus Chega',
    subtitle: 'Ao Jordão',
    biblicalRef: 'Mateus 3:13',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'jordan_river_baptism',
    musicTheme: 'jesus_theme',
    visualKey: 's3e3_05_arrival',
    environmentSummary: 'Passos aproximando-se da água.',
    musicDescription: 'Música começa a crescer.',
    soundEffects: ['ocean_waters'],
    directorLesson: 'A entrada de Jesus é serena, mas muda a atmosfera do local.',
    lines: [
      {
        id: 's3e3_05_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Então Jesus chegou ao rio Jordão. João olhou para ele.',
      },
      {
        id: 's3e3_05_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Naquele momento... algo parecia diferente.',
      }
    ]
  },
  {
    id: 6,
    sceneNumber: 6,
    title: 'João Reconhece Jesus',
    subtitle: 'A humildade de João',
    biblicalRef: 'Mateus 3:14-15',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'jordan_river_baptism',
    musicTheme: 'jesus_theme',
    visualKey: 's3e3_06_recognition',
    environmentSummary: 'O diálogo íntimo no meio da multidão.',
    musicDescription: 'Música de piano serena.',
    soundEffects: ['ocean_waters'],
    directorLesson: 'A recusa humilde de João e a firmeza mansa de Jesus.',
    lines: [
      {
        id: 's3e3_06_l1',
        character: 'joao_batista',
        characterLabel: 'João',
        text: 'Eu é que preciso ser batizado por você. Como você vem a mim?',
        emotionGuide: 'Sincero, quase espantado'
      },
      {
        id: 's3e3_06_l2',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Faça assim por enquanto. É importante cumprir o que Deus deseja.',
        emotionGuide: 'Sereno, firme, humilde'
      },
      {
        id: 's3e3_06_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'João compreendeu. Ele estava diante daquele que havia sido anunciado.',
      }
    ]
  },
  {
    id: 7,
    sceneNumber: 7,
    title: 'O Batismo',
    subtitle: 'Nas águas',
    biblicalRef: 'Mateus 3:16',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'jordan_river_baptism',
    musicTheme: 'pure_serenity',
    visualKey: 's3e3_07_water',
    environmentSummary: 'O ato do batismo com som claro da água.',
    musicDescription: 'Música fica extremamente suave e dá espaço para o som da água.',
    soundEffects: ['ocean_waters'],
    directorLesson: 'O momento da imersão e o silêncio pós-batismo que prepara o milagre.',
    lines: [
      {
        id: 's3e3_07_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Então Jesus entrou nas águas do Jordão.',
        soundCue: 'Som da água e movimento suave'
      },
      {
        id: 's3e3_07_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'João o batizou.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e3_07_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus saiu da água.',
        soundCue: 'Silêncio total'
      }
    ]
  },
  {
    id: 8,
    sceneNumber: 8,
    title: 'O Céu se Abre',
    subtitle: 'O extraordinário',
    biblicalRef: 'Mateus 3:16',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'heaven_open',
    musicTheme: 'heaven_theme',
    visualKey: 's3e3_08_heaven',
    environmentSummary: 'Silêncio absoluto quebrado por uma expansão sonora grandiosa.',
    musicDescription: 'Uma nota de piano, depois cordas e um coral suave crescendo espacialmente.',
    soundEffects: ['celestial_sky'],
    directorLesson: 'Criar o momento mais grandioso de áudio do episódio sem ser assustador.',
    lines: [
      {
        id: 's3e3_08_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E então... algo extraordinário aconteceu.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e3_08_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os céus se abriram.',
        soundCue: 'Grande expansão sonora e música celestial'
      }
    ]
  },
  {
    id: 9,
    sceneNumber: 9,
    title: 'O Espírito Santo',
    subtitle: 'A pomba',
    biblicalRef: 'Mateus 3:16',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'heaven_open',
    musicTheme: 'heaven_theme',
    visualKey: 's3e3_09_spirit',
    environmentSummary: 'Asas suaves e brilhantes (efeito sonoro sutil, não literal de pássaro).',
    musicDescription: 'Música celestial continua brilhante e pacífica.',
    soundEffects: ['celestial_sky'],
    directorLesson: 'Visualizar sonoramente a descida do Espírito de forma mansa.',
    lines: [
      {
        id: 's3e3_09_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E o Espírito de Deus desceu sobre Jesus... como uma pomba.',
        soundCue: 'Asas suaves batendo'
      }
    ]
  },
  {
    id: 10,
    sceneNumber: 10,
    title: 'A Voz do Céu',
    subtitle: 'A aprovação',
    biblicalRef: 'Mateus 3:17',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'heaven_open',
    musicTheme: 'identity_peace',
    visualKey: 's3e3_10_voice',
    environmentSummary: 'Silêncio reverberante e a voz cheia de autoridade e amor.',
    musicDescription: 'Música diminui para destacar a voz de Deus.',
    soundEffects: [],
    directorLesson: 'A voz de Deus deve ser puramente majestosa e amorosa, sem ecos distorcidos.',
    lines: [
      {
        id: 's3e3_10_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Silêncio.',
      },
      {
        id: 's3e3_10_l2',
        character: 'god',
        characterLabel: 'Voz de Deus',
        text: 'Este é o meu Filho amado. Tenho grande alegria nele.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      }
    ]
  },
  {
    id: 11,
    sceneNumber: 11,
    title: 'A Admiração',
    subtitle: 'Reações',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'crowd_river',
    musicTheme: 'identity_peace',
    visualKey: 's3e3_11_amazement',
    environmentSummary: 'Murmúrios e admiração da multidão retornam suavemente.',
    musicDescription: 'Música maravilhada.',
    soundEffects: ['ocean_waters'],
    directorLesson: 'A comoção pacífica dos que testemunharam o evento.',
    lines: [
      {
        id: 's3e3_11_l1',
        character: 'person',
        characterLabel: 'Pessoa 1',
        text: 'Você viu?',
      },
      {
        id: 's3e3_11_l2',
        character: 'person',
        characterLabel: 'Pessoa 2',
        text: 'O céu se abriu!',
      },
      {
        id: 's3e3_11_l3',
        character: 'person',
        characterLabel: 'Pessoa 3',
        text: 'O que foi isso?',
      },
      {
        id: 's3e3_11_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Todos ficaram maravilhados.',
      }
    ]
  },
  {
    id: 12,
    sceneNumber: 12,
    title: 'João Observa',
    subtitle: 'A confirmação',
    biblicalRef: 'João 1:34',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'jordan_river_baptism',
    musicTheme: 'identity_peace',
    visualKey: 's3e3_12_john',
    environmentSummary: 'João olhando maravilhado.',
    musicDescription: 'Música emocional de confirmação.',
    soundEffects: ['ocean_waters'],
    directorLesson: 'João percebe que seu papel foi cumprido com êxito.',
    lines: [
      {
        id: 's3e3_12_l1',
        character: 'joao_batista',
        characterLabel: 'João',
        text: 'Ele é aquele de quem falei.',
      },
      {
        id: 's3e3_12_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'João sabia que aquele momento era especial. Jesus havia começado uma nova etapa.',
      }
    ]
  },
  {
    id: 13,
    sceneNumber: 13,
    title: 'O Significado',
    subtitle: 'O início',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'desert_wind',
    musicTheme: 'jesus_theme',
    visualKey: 's3e3_13_meaning',
    environmentSummary: 'Transição suave com vento leve.',
    musicDescription: 'Música acolhedora.',
    soundEffects: ['desert_wind'],
    directorLesson: 'Explicar a missão pública de Jesus.',
    lines: [
      {
        id: 's3e3_13_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O batismo marcou o início público da missão de Jesus.',
      },
      {
        id: 's3e3_13_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele veio para ensinar. Para servir. Para mostrar o amor de Deus. E para levar esperança às pessoas.',
      }
    ]
  },
  {
    id: 14,
    sceneNumber: 14,
    title: 'A Lição para as Crianças',
    subtitle: 'Deus te conhece',
    biblicalRef: '',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'warm_acoustic',
    musicTheme: 'gentle_teaching',
    visualKey: 's3e3_14_lesson',
    environmentSummary: 'Silêncio íntimo.',
    musicDescription: 'Música de ensino carinhosa.',
    soundEffects: [],
    directorLesson: 'Conectar a história ao valor individual de cada criança.',
    lines: [
      {
        id: 's3e3_14_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Você sabe uma coisa? Deus também conhece você.',
      },
      {
        id: 's3e3_14_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele conhece seu coração. Conhece seus sonhos. Conhece seus medos. E conhece aquilo que você pode se tornar.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e3_14_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Você não precisa ser igual a outra pessoa. Você pode ser você.',
      }
    ]
  },
  {
    id: 15,
    sceneNumber: 15,
    title: 'Identidade',
    subtitle: 'Você é amado',
    biblicalRef: '',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'warm_acoustic',
    musicTheme: 'identity_peace',
    visualKey: 's3e3_15_identity',
    environmentSummary: 'Continuação do ensino.',
    musicDescription: 'Música suave, afirmando a identidade e valor.',
    soundEffects: [],
    directorLesson: 'Destacar que o valor das crianças vem do amor, não de desempenho.',
    lines: [
      {
        id: 's3e3_15_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus ouviu uma declaração de amor do Pai. E você também precisa lembrar de algo.',
      },
      {
        id: 's3e3_15_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Seu valor não depende de ser o mais inteligente. Nem o mais forte. Nem o mais popular.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e3_15_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Seu valor começa no fato de que você é amado.',
      }
    ]
  },
  {
    id: 16,
    sceneNumber: 16,
    title: 'Coragem para o Propósito',
    subtitle: 'Pronto para a missão',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'warm_acoustic',
    musicTheme: 'journey_hope',
    visualKey: 's3e3_16_courage',
    environmentSummary: 'O tom sobe, trazendo encorajamento.',
    musicDescription: 'Música começa a crescer em ritmo de jornada.',
    soundEffects: [],
    directorLesson: 'Amarra a lição de identidade com a coragem para o futuro.',
    lines: [
      {
        id: 's3e3_16_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Quando sabemos quem somos... podemos caminhar com coragem.',
      },
      {
        id: 's3e3_16_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus sabia que uma grande missão estava diante dele. E estava pronto para começar.',
      }
    ]
  },
  {
    id: 17,
    sceneNumber: 17,
    title: 'Gancho para o Episódio 14',
    subtitle: 'Novos amigos',
    biblicalRef: '',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'ocean_waters',
    musicTheme: 'playful_adventure',
    visualKey: 's3e3_17_hook',
    environmentSummary: 'Som de mar (mar da Galileia), redes.',
    musicDescription: 'Música muda para aventura vibrante.',
    soundEffects: ['ocean_waters'],
    directorLesson: 'Abrir a expectativa para o chamado dos primeiros discípulos.',
    lines: [
      {
        id: 's3e3_17_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas Jesus não faria essa jornada sozinho.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e3_17_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele escolheria pessoas comuns. Pescadores. Homens com histórias diferentes. Homens que aprenderiam a caminhar com Ele.',
        soundCue: 'Música cresce'
      },
      {
        id: 's3e3_17_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eram os discípulos.',
      }
    ]
  },
  {
    id: 18,
    sceneNumber: 18,
    title: 'Próximo Episódio',
    subtitle: 'Os discípulos',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'ocean_waters',
    musicTheme: 'playful_adventure',
    visualKey: 's3e3_18_next',
    environmentSummary: 'Finalização do trailer com sons marítimos.',
    musicDescription: 'Música termina com expectativa e alegria.',
    soundEffects: [],
    directorLesson: 'Encerramento entusiasmado.',
    lines: [
      {
        id: 's3e3_18_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'No próximo episódio... Os Discípulos. Os amigos que deixaram tudo para seguir Jesus.',
        soundCue: 'Música termina com expectativa'
      }
    ]
  },
  {
    id: 19,
    sceneNumber: 19,
    title: 'Assinatura',
    subtitle: 'Toon Tales Kids',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'toon_tales_jingle',
    musicTheme: 'signature_jingle',
    visualKey: 's3e3_19_outro',
    environmentSummary: 'Logotipo sonoro',
    musicDescription: 'A música diminui. Entra o tema musical alegre.',
    soundEffects: ['toon_tales_jingle'],
    directorLesson: 'Assinatura vibrante de término oficial.',
    lines: [
      {
        id: 's3e3_19_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E essa foi mais uma aventura da Bíblia em Áudio.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e3_19_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a história ainda não terminou...',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's3e3_19_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma nova aventura está esperando por você.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e3_19_l4',
        character: 'child',
        characterLabel: 'Crianças',
        text: 'TOON TALES KIDS!',
        emotionGuide: 'Em coro feliz e forte'
      },
      {
        id: 's3e3_19_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Histórias que ensinam, aventuras que transformam!',
      }
    ]
  }
];

export const JESUS_BATISMO_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    dayLabel: 'O Mensageiro',
    question: 'Quem era o homem que pregava no deserto e batizava as pessoas no rio Jordão?',
    options: ['Pedro', 'Moisés', 'João Batista', 'Isaías'],
    correctIndex: 2,
    explanation: 'João Batista foi escolhido por Deus para preparar o coração do povo para a chegada de Jesus.',
    biblicalVerse: 'Mateus 3:1',
  },
  {
    id: 2,
    dayLabel: 'O Batismo',
    question: 'O que João Batista disse quando Jesus pediu para ser batizado por ele?',
    options: ['"Eu é que preciso ser batizado por você."', '"A água está muito fria hoje."', '"Você não precisa ser batizado."', '"Por favor, batize as outras pessoas primeiro."'],
    correctIndex: 0,
    explanation: 'João Batista reconheceu quem Jesus era e disse, com muita humildade, que ele (João) é que precisava ser batizado por Jesus.',
    biblicalVerse: 'Mateus 3:14',
  },
  {
    id: 3,
    dayLabel: 'O Céu Aberto',
    question: 'O que desceu sobre Jesus do céu, como uma pomba, logo após Ele ser batizado?',
    options: ['Uma nuvem de chuva', 'O Espírito de Deus', 'Um anjo com uma espada', 'Uma coroa de ouro'],
    correctIndex: 1,
    explanation: 'Logo depois do batismo, o Espírito de Deus desceu do céu, de forma mansa como uma pomba, sobre Jesus.',
    biblicalVerse: 'Mateus 3:16',
  },
  {
    id: 4,
    dayLabel: 'A Voz de Deus',
    question: 'O que a voz de Deus, vinda do céu, disse sobre Jesus?',
    options: ['"Este é um bom rei."', '"Este é o meu Filho amado. Tenho grande alegria nele."', '"Ele vai ser um pescador de homens."', '"Vocês devem ouvi-lo em todas as coisas."'],
    correctIndex: 1,
    explanation: 'Deus, o Pai, falou do céu declarando seu amor por Jesus e Sua alegria nEle.',
    biblicalVerse: 'Mateus 3:17',
  },
  {
    id: 5,
    dayLabel: 'Nossa Identidade',
    question: 'O que a história do Batismo de Jesus nos ensina sobre o nosso valor para Deus?',
    options: ['Que devemos ser sempre os mais rápidos', 'Que nosso valor depende de ser amado por Deus', 'Que só os adultos têm valor', 'Que nosso valor depende da nossa inteligência'],
    correctIndex: 1,
    explanation: 'Deus conhece e ama cada um de nós. Nosso valor não depende de sermos os mais fortes ou populares, mas do fato de sermos amados por Ele.',
    biblicalVerse: '',
  }
];
