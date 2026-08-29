import { Scene, QuizQuestion } from '../types';

export const EPISODE_META_T3E2 = {
  id: 't3e2',
  title: 'Jesus no Templo',
  subtitle: 'O menino que surpreendeu os mestres',
  biblicalText: 'Lucas 2:41–52',
  durationLabel: '15 min',
  moralLesson: 'Jesus amava sua família, crescia em sabedoria e tinha um propósito especial. A verdadeira sabedoria cresce quando buscamos aprender, ouvir e conhecer a Deus.',
};

export const JESUS_TEMPLO_SCENES: Scene[] = [
  {
    id: 1,
    sceneNumber: 1,
    title: 'A Viagem para Jerusalém',
    subtitle: 'Jesus aos 12 anos',
    biblicalRef: 'Lucas 2:41-42',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'caravan_road',
    musicTheme: 'jesus_theme',
    visualKey: 's3e2_01_intro',
    environmentSummary: 'Passos, animais, pessoas viajando.',
    musicDescription: 'O tema de Jesus alegre e leve.',
    soundEffects: ['desert_wind', 'field_sheep'],
    directorLesson: 'Introduzir o crescimento de Jesus. Uma criança atenta e inteligente.',
    lines: [
      {
        id: 's3e2_01_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus havia nascido em Belém. Mas os anos passaram.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e2_01_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E aquele bebê cresceu.',
        soundCue: 'Música muda para uma melodia mais leve'
      },
      {
        id: 's3e2_01_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Agora Jesus tinha doze anos. Era um menino. Curioso. Atento. E sempre interessado em aprender.',
      },
      {
        id: 's3e2_01_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Todos os anos, Maria e José viajavam para Jerusalém. E naquele ano... Jesus tinha doze anos.',
      },
      {
        id: 's3e2_01_l5',
        character: 'maria',
        characterLabel: 'Maria',
        text: 'Jesus, fique sempre perto de nós.',
        emotionGuide: 'Maternal e cuidadosa'
      },
      {
        id: 's3e2_01_l6',
        character: 'jesus_boy',
        characterLabel: 'Jesus',
        text: 'Sim, mãe.',
        emotionGuide: 'Tranquilo, respeitoso e feliz'
      },
      {
        id: 's3e2_01_l7',
        character: 'jose',
        characterLabel: 'José',
        text: 'Vamos juntos.',
        emotionGuide: 'Firme e protetor'
      }
    ]
  },
  {
    id: 2,
    sceneNumber: 2,
    title: 'Jerusalém',
    subtitle: 'A grande cidade',
    biblicalRef: 'Lucas 2:43',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'jerusalem_city',
    musicTheme: 'wisdom_discovery',
    visualKey: 's3e2_02_jerusalem',
    environmentSummary: 'Cidade movimentada, mercadores, animais, grande fluxo de pessoas.',
    musicDescription: 'Música de descoberta e deslumbramento.',
    soundEffects: ['market_city'],
    directorLesson: 'A magnitude da celebração da Páscoa.',
    lines: [
      {
        id: 's3e2_02_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jerusalém estava cheia. Famílias de muitos lugares tinham chegado para celebrar a Páscoa.',
      },
      {
        id: 's3e2_02_l2',
        character: 'jesus_boy',
        characterLabel: 'Jesus',
        text: 'Pai, olhe quantas pessoas!',
        emotionGuide: 'Impressionado e animado'
      },
      {
        id: 's3e2_02_l3',
        character: 'jose',
        characterLabel: 'José',
        text: 'É uma cidade muito movimentada.',
      },
      {
        id: 's3e2_02_l4',
        character: 'maria',
        characterLabel: 'Maria',
        text: 'E o templo está cheio.',
        soundCue: 'Música de descoberta ganha destaque'
      }
    ]
  },
  {
    id: 3,
    sceneNumber: 3,
    title: 'O Templo',
    subtitle: 'O menino observador',
    biblicalRef: 'Lucas 2:46',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'temple_interior',
    musicTheme: 'wisdom_discovery',
    visualKey: 's3e2_03_temple',
    environmentSummary: 'Passos em pedra, eco majestoso, vozes murmurando.',
    musicDescription: 'Música suave, intelectual, reflexiva.',
    soundEffects: ['ancient_city'],
    directorLesson: 'O ambiente solene de ensino e a atenção profunda de Jesus.',
    lines: [
      {
        id: 's3e2_03_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus entrou no templo.',
        soundCue: 'Passos em pedra e eco suave'
      },
      {
        id: 's3e2_03_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E ali... começou a observar.',
      },
      {
        id: 's3e2_03_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele ouviu os mestres. Prestou atenção. Fez perguntas. E também respondeu.',
      }
    ]
  },
  {
    id: 4,
    sceneNumber: 4,
    title: 'Jesus e os Mestres',
    subtitle: 'Conversas sábias',
    biblicalRef: 'Lucas 2:46-47',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'temple_interior',
    musicTheme: 'wisdom_discovery',
    visualKey: 's3e2_04_masters',
    environmentSummary: 'O círculo de debates no templo.',
    musicDescription: 'Música de sabedoria e curiosidade, muito leve.',
    soundEffects: [],
    directorLesson: 'A maturidade espiritual de um menino de 12 anos entre estudiosos.',
    lines: [
      {
        id: 's3e2_04_l1',
        character: 'mestre',
        characterLabel: 'Mestre 1',
        text: 'E o que você pensa sobre isso?',
        emotionGuide: 'Curioso e respeitoso'
      },
      {
        id: 's3e2_04_l2',
        character: 'jesus_boy',
        characterLabel: 'Jesus',
        text: 'Eu penso que devemos buscar entender o que Deus ensina.',
      },
      {
        id: 's3e2_04_l3',
        character: 'mestre',
        characterLabel: 'Mestre 1',
        text: 'Interessante.',
      },
      {
        id: 's3e2_04_l4',
        character: 'mestre',
        characterLabel: 'Mestre 2',
        text: 'E como você chegou a essa conclusão?',
      },
      {
        id: 's3e2_04_l5',
        character: 'jesus_boy',
        characterLabel: 'Jesus',
        text: 'Porque precisamos ouvir e aprender.',
      },
      {
        id: 's3e2_04_l6',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os mestres ficaram impressionados.',
      }
    ]
  },
  {
    id: 5,
    sceneNumber: 5,
    title: 'A Admiração',
    subtitle: 'O menino surpreendente',
    biblicalRef: 'Lucas 2:47',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'temple_interior',
    musicTheme: 'wisdom_discovery',
    visualKey: 's3e2_05_amazement',
    environmentSummary: 'Murmúrios de aprovação.',
    musicDescription: 'Música cresce suavemente, brilhante.',
    soundEffects: [],
    directorLesson: 'Não deve parecer que Jesus é arrogante, mas sim alguém incrivelmente lúcido.',
    lines: [
      {
        id: 's3e2_05_l1',
        character: 'mestre',
        characterLabel: 'Mestre 1',
        text: 'Esse menino tem muita compreensão.',
      },
      {
        id: 's3e2_05_l2',
        character: 'mestre',
        characterLabel: 'Mestre 2',
        text: 'Como ele consegue responder dessa maneira?',
      },
      {
        id: 's3e2_05_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Todos que ouviam Jesus ficavam admirados com sua inteligência e suas respostas.',
      }
    ]
  },
  {
    id: 6,
    sceneNumber: 6,
    title: 'A Viagem de Volta',
    subtitle: 'A caravana parte',
    biblicalRef: 'Lucas 2:43-44',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'caravan_road',
    musicTheme: 'journey_hope',
    visualKey: 's3e2_06_return',
    environmentSummary: 'Passos em grupo, clima de retorno.',
    musicDescription: 'Música alegre de viagem.',
    soundEffects: ['desert_wind', 'field_sheep'],
    directorLesson: 'A rotina normal e a confiança na grande caravana familiar.',
    lines: [
      {
        id: 's3e2_06_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A celebração terminou. Era hora de voltar para casa. Maria e José começaram a viagem.',
      },
      {
        id: 's3e2_06_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles acreditavam que Jesus estava entre os parentes e conhecidos da caravana.',
      }
    ]
  },
  {
    id: 7,
    sceneNumber: 7,
    title: 'A Descoberta',
    subtitle: 'Onde está Jesus?',
    biblicalRef: 'Lucas 2:44',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'caravan_road',
    musicTheme: 'anxious_search',
    visualKey: 's3e2_07_discovery',
    environmentSummary: 'O ambiente fica mais vazio. Silêncio da ausência.',
    musicDescription: 'Música para gradualmente, depois entra tensão sutil.',
    soundEffects: ['desert_wind'],
    directorLesson: 'O susto e o pavor de um pai e uma mãe.',
    lines: [
      {
        id: 's3e2_07_l1',
        character: 'maria',
        characterLabel: 'Maria',
        text: 'José... Você viu Jesus?',
        emotionGuide: 'Preocupada'
      },
      {
        id: 's3e2_07_l2',
        character: 'jose',
        characterLabel: 'José',
        text: 'Não.',
      },
      {
        id: 's3e2_07_l3',
        character: 'maria',
        characterLabel: 'Maria',
        text: 'Ele não está com os parentes?',
      },
      {
        id: 's3e2_07_l4',
        character: 'jose',
        characterLabel: 'José',
        text: 'Vou procurar.',
        soundCue: 'Música de tensão'
      },
      {
        id: 's3e2_07_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Maria e José procuraram entre os viajantes. Nada. Jesus não estava ali.',
      }
    ]
  },
  {
    id: 8,
    sceneNumber: 8,
    title: 'A Preocupação',
    subtitle: 'Retorno a Jerusalém',
    biblicalRef: 'Lucas 2:45',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'empty_road',
    musicTheme: 'anxious_search',
    visualKey: 's3e2_08_worry',
    environmentSummary: 'Passos rápidos de volta.',
    musicDescription: 'Tensa, porém apropriada para crianças.',
    soundEffects: ['desert_wind'],
    directorLesson: 'A urgência e a culpa dos pais.',
    lines: [
      {
        id: 's3e2_08_l1',
        character: 'maria',
        characterLabel: 'Maria',
        text: 'Precisamos voltar para Jerusalém.',
      },
      {
        id: 's3e2_08_l2',
        character: 'jose',
        characterLabel: 'José',
        text: 'Vamos.',
        soundCue: 'Passos rápidos'
      },
      {
        id: 's3e2_08_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os dois retornaram. Precisavam encontrar Jesus.',
      }
    ]
  },
  {
    id: 9,
    sceneNumber: 9,
    title: 'Um Dia',
    subtitle: 'A busca',
    biblicalRef: 'Lucas 2:46',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'jerusalem_city',
    musicTheme: 'anxious_search',
    visualKey: 's3e2_09_day1',
    environmentSummary: 'Buscando pela cidade. Silêncio angustiante.',
    musicDescription: 'Música minimalista.',
    soundEffects: ['market_city'],
    directorLesson: 'Transmitir a demora e o peso do tempo passando.',
    lines: [
      {
        id: 's3e2_09_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Passou um dia. Mas não encontraram Jesus.',
      },
      {
        id: 's3e2_09_l2',
        character: 'maria',
        characterLabel: 'Maria',
        text: 'Jesus!',
        emotionGuide: 'Gritando aflita'
      },
      {
        id: 's3e2_09_l3',
        character: 'jose',
        characterLabel: 'José',
        text: 'Jesus!',
        emotionGuide: 'Chamando com força'
      },
      {
        id: 's3e2_09_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Silêncio.',
      }
    ]
  },
  {
    id: 10,
    sceneNumber: 10,
    title: 'Dois Dias',
    subtitle: 'Ainda perdidos',
    biblicalRef: 'Lucas 2:46',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'jerusalem_city',
    musicTheme: 'anxious_search',
    visualKey: 's3e2_10_day2',
    environmentSummary: 'Ruas da cidade e interrogatórios rápidos.',
    musicDescription: 'Música aumenta discretamente o suspense.',
    soundEffects: ['ancient_city'],
    directorLesson: 'Aumentar o desespero.',
    lines: [
      {
        id: 's3e2_10_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Passaram-se dois dias. Eles continuaram procurando.',
      },
      {
        id: 's3e2_10_l2',
        character: 'maria',
        characterLabel: 'Maria',
        text: 'Você viu um menino chamado Jesus?',
      },
      {
        id: 's3e2_10_l3',
        character: 'person',
        characterLabel: 'Pessoa',
        text: 'Não.',
      },
      {
        id: 's3e2_10_l4',
        character: 'jose',
        characterLabel: 'José',
        text: 'Vamos continuar.',
      }
    ]
  },
  {
    id: 11,
    sceneNumber: 11,
    title: 'Três Dias',
    subtitle: 'O encontro',
    biblicalRef: 'Lucas 2:46',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'temple_interior',
    musicTheme: 'jesus_theme',
    visualKey: 's3e2_11_day3',
    environmentSummary: 'Eles chegam ao templo.',
    musicDescription: 'Música de suspense alivia para uma melodia serena.',
    soundEffects: ['temple_interior'],
    directorLesson: 'A surpresa do reencontro.',
    lines: [
      {
        id: 's3e2_11_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Depois de três dias... finalmente... eles encontraram Jesus.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e2_11_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas não estava perdido.',
        soundCue: 'Música muda'
      },
      {
        id: 's3e2_11_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele estava no templo.',
      }
    ]
  },
  {
    id: 12,
    sceneNumber: 12,
    title: 'A Grande Descoberta',
    subtitle: 'Entre os mestres',
    biblicalRef: 'Lucas 2:46-47',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'temple_interior',
    musicTheme: 'wisdom_discovery',
    visualKey: 's3e2_12_found',
    environmentSummary: 'As vozes no templo, o eco e o momento de alívio materno.',
    musicDescription: 'Música delicada.',
    soundEffects: [],
    directorLesson: 'O alívio e a incompreensão.',
    lines: [
      {
        id: 's3e2_12_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus estava sentado entre os mestres. Escutando. Perguntando. Respondendo.',
      },
      {
        id: 's3e2_12_l2',
        character: 'maria',
        characterLabel: 'Maria',
        text: 'Jesus!',
        emotionGuide: 'Alívio extremo e carinho',
        soundCue: 'Música para brevemente'
      },
      {
        id: 's3e2_12_l3',
        character: 'jesus_boy',
        characterLabel: 'Jesus',
        text: 'Mãe!',
      }
    ]
  },
  {
    id: 13,
    sceneNumber: 13,
    title: 'Maria Fala com Jesus',
    subtitle: 'A resposta do menino',
    biblicalRef: 'Lucas 2:48-50',
    durationLabel: '35 segundos',
    estimatedDurationSec: 35,
    ambientType: 'temple_interior',
    musicTheme: 'jesus_theme',
    visualKey: 's3e2_13_talk',
    environmentSummary: 'O diálogo entre mãe e filho, envolto em mistério divino.',
    musicDescription: 'Música suave, celestial.',
    soundEffects: [],
    directorLesson: 'Jesus mostra sua clareza de propósito, sem ser mal educado.',
    lines: [
      {
        id: 's3e2_13_l1',
        character: 'maria',
        characterLabel: 'Maria',
        text: 'Filho... Por que você fez isso conosco? Seu pai e eu estávamos muito preocupados.',
      },
      {
        id: 's3e2_13_l2',
        character: 'jesus_boy',
        characterLabel: 'Jesus',
        text: 'Por que vocês estavam procurando por mim?',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e2_13_l3',
        character: 'jesus_boy',
        characterLabel: 'Jesus',
        text: 'Vocês não sabiam que eu precisava estar na casa de meu Pai?',
      },
      {
        id: 's3e2_13_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Silêncio.',
        soundCue: 'Música suave e profunda'
      },
      {
        id: 's3e2_13_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Maria e José não compreenderam completamente o que Jesus queria dizer.',
      }
    ]
  },
  {
    id: 14,
    sceneNumber: 14,
    title: 'O Significado',
    subtitle: 'O propósito',
    biblicalRef: 'Lucas 2:51',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'temple_interior',
    musicTheme: 'jesus_theme',
    visualKey: 's3e2_14_meaning',
    environmentSummary: 'Resolução calma.',
    musicDescription: 'Música emocional de entendimento e submissão.',
    soundEffects: [],
    directorLesson: 'Explicar suavemente que a casa do Pai era o Templo (Deus).',
    lines: [
      {
        id: 's3e2_14_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus estava falando sobre Deus. Ele sabia que sua vida tinha um propósito especial.',
      },
      {
        id: 's3e2_14_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas ainda assim... voltou para casa com Maria e José.',
      }
    ]
  },
  {
    id: 15,
    sceneNumber: 15,
    title: 'O Retorno a Nazaré',
    subtitle: 'Crescendo',
    biblicalRef: 'Lucas 2:51-52',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'nazareth_house',
    musicTheme: 'wisdom_discovery',
    visualKey: 's3e2_15_nazareth',
    environmentSummary: 'Passos calmos e ambiente doméstico pacífico.',
    musicDescription: 'Música tranquila e reconfortante.',
    soundEffects: ['nature_sounds'],
    directorLesson: 'A vida humilde em família de volta a Nazaré.',
    lines: [
      {
        id: 's3e2_15_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E Jesus voltou com eles para Nazaré.',
        soundCue: 'Passos calmos'
      },
      {
        id: 's3e2_15_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ali... continuou crescendo. Cresceu em sabedoria. Cresceu em estatura. E cresceu no favor de Deus e das pessoas.',
      }
    ]
  },
  {
    id: 16,
    sceneNumber: 16,
    title: 'A Grande Lição',
    subtitle: 'Ouvir e aprender',
    biblicalRef: '',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'desert_wind',
    musicTheme: 'gentle_teaching',
    visualKey: 's3e2_16_lesson',
    environmentSummary: 'Silêncio de aprendizado.',
    musicDescription: 'Música acolhedora.',
    soundEffects: [],
    directorLesson: 'Conectar a atitude de Jesus à vida das crianças.',
    lines: [
      {
        id: 's3e2_16_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Essa história nos ensina algo muito bonito.',
      },
      {
        id: 's3e2_16_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus tinha perguntas. Jesus ouvia. Jesus aprendia. E Jesus respeitava sua família.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e2_16_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Você também pode aprender todos os dias.',
      }
    ]
  },
  {
    id: 17,
    sceneNumber: 17,
    title: 'Para as Crianças',
    subtitle: 'Uma aventura do saber',
    biblicalRef: '',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'desert_wind',
    musicTheme: 'gentle_teaching',
    visualKey: 's3e2_17_children',
    environmentSummary: 'Paz.',
    musicDescription: 'Música cresce suavemente.',
    soundEffects: [],
    directorLesson: 'Incentivar perguntas, a escuta e o respeito.',
    lines: [
      {
        id: 's3e2_17_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Quando você não entender alguma coisa... pergunte.',
      },
      {
        id: 's3e2_17_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Quando alguém estiver ensinando... escute.',
      },
      {
        id: 's3e2_17_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Quando cometer um erro... aprenda. E quando estiver em família... valorize esse momento.',
        soundCue: 'Música cresce suavemente'
      },
      {
        id: 's3e2_17_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Buscar sabedoria também é uma aventura.',
      }
    ]
  },
  {
    id: 18,
    sceneNumber: 18,
    title: 'Frase Marcante',
    subtitle: 'A verdadeira sabedoria',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'desert_wind',
    musicTheme: 'gentle_teaching',
    visualKey: 's3e2_18_phrase',
    environmentSummary: 'Vento leve.',
    musicDescription: 'Trilha reflexiva e emocional.',
    soundEffects: [],
    directorLesson: 'A pérola de encerramento moral.',
    lines: [
      {
        id: 's3e2_18_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma criança curiosa pode descobrir grandes coisas.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e2_18_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a verdadeira sabedoria começa quando aprendemos a ouvir.',
      }
    ]
  },
  {
    id: 19,
    sceneNumber: 19,
    title: 'Gancho para o Episódio 13',
    subtitle: 'O Rio Jordão',
    biblicalRef: '',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'desert_wind',
    musicTheme: 'season3_intro',
    visualKey: 's3e2_19_hook',
    environmentSummary: 'Música muda, rio correndo.',
    musicDescription: 'A música começa a ficar épica e misteriosa.',
    soundEffects: ['ocean_waters'],
    directorLesson: 'O avanço no tempo. A entrada do ministério público de Jesus.',
    lines: [
      {
        id: 's3e2_19_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus continuou crescendo. E chegou o dia em que sua missão começaria de uma maneira muito especial.',
        soundCue: 'Água corrente e música misteriosa'
      },
      {
        id: 's3e2_19_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Um homem chamado João estava pregando perto do rio Jordão. Multidões chegavam para ouvi-lo.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e2_19_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E então... Jesus apareceu.',
        soundCue: 'Música cresce'
      },
      {
        id: 's3e2_19_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O que aconteceria quando Jesus entrasse nas águas?',
      }
    ]
  },
  {
    id: 20,
    sceneNumber: 20,
    title: 'Próximo Episódio',
    subtitle: 'O batismo',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'desert_wind',
    musicTheme: 'season3_intro',
    visualKey: 's3e2_20_next',
    environmentSummary: 'Suspense com o som das águas e finalização.',
    musicDescription: 'Música termina com uma nota misteriosa.',
    soundEffects: [],
    directorLesson: 'Garantir a expectativa para o céu se abrindo.',
    lines: [
      {
        id: 's3e2_20_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'No próximo episódio... O Batismo de Jesus. Quando o céu se abriu.',
        soundCue: 'Música termina com uma nota misteriosa'
      }
    ]
  },
  {
    id: 21,
    sceneNumber: 21,
    title: 'Assinatura',
    subtitle: 'Toon Tales Kids',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'toon_tales_jingle',
    musicTheme: 'signature_jingle',
    visualKey: 's3e2_21_outro',
    environmentSummary: 'Logotipo sonoro',
    musicDescription: 'A música da história diminui. Entra o tema musical alegre.',
    soundEffects: ['toon_tales_jingle'],
    directorLesson: 'Assinatura vibrante de término oficial.',
    lines: [
      {
        id: 's3e2_21_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E essa foi mais uma aventura da Bíblia em Áudio.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e2_21_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a história ainda não terminou...',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's3e2_21_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma nova aventura está esperando por você.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e2_21_l4',
        character: 'child',
        characterLabel: 'Crianças',
        text: 'TOON TALES KIDS!',
        emotionGuide: 'Em coro feliz e forte'
      },
      {
        id: 's3e2_21_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Histórias que ensinam, aventuras que transformam!',
      }
    ]
  }
];

export const JESUS_TEMPLO_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    dayLabel: 'A Viagem',
    question: 'Para onde Maria, José e Jesus viajavam todos os anos para celebrar a Páscoa?',
    options: ['Para a cidade de Jericó', 'Para a cidade de Jerusalém', 'Para a cidade de Nazaré', 'Para a cidade de Belém'],
    correctIndex: 1,
    explanation: 'Todos os anos, a família de Jesus viajava para a grande cidade de Jerusalém para celebrar a festa da Páscoa.',
    biblicalVerse: 'Lucas 2:41',
  },
  {
    id: 2,
    dayLabel: 'O Menino',
    question: 'Quantos anos Jesus tinha quando ocorreu a história Dele no templo conversando com os mestres?',
    options: ['Ele tinha 7 anos', 'Ele tinha 12 anos', 'Ele tinha 15 anos', 'Ele era um bebê'],
    correctIndex: 1,
    explanation: 'Jesus tinha 12 anos quando Maria e José O encontraram no templo de Jerusalém.',
    biblicalVerse: 'Lucas 2:42',
  },
  {
    id: 3,
    dayLabel: 'A Procura',
    question: 'Por quantos dias Maria e José procuraram Jesus até encontrá-lo no templo?',
    options: ['Procuraram por 3 dias', 'Procuraram por 7 dias', 'Procuraram por apenas 1 hora', 'Encontraram Jesus no mesmo dia'],
    correctIndex: 0,
    explanation: 'Maria e José ficaram muito preocupados e procuraram por 3 dias até finalmente encontrarem Jesus.',
    biblicalVerse: 'Lucas 2:46',
  },
  {
    id: 4,
    dayLabel: 'A Descoberta',
    question: 'O que Jesus estava fazendo quando seus pais finalmente O encontraram no templo?',
    options: ['Ele estava brincando no pátio', 'Ele estava dormindo em uma tenda', 'Ele estava sentado entre os mestres, ouvindo e fazendo perguntas', 'Ele estava trabalhando com as ovelhas'],
    correctIndex: 2,
    explanation: 'Jesus estava entre os mestres, prestando atenção, fazendo perguntas e respondendo, deixando todos maravilhados com sua sabedoria.',
    biblicalVerse: 'Lucas 2:46-47',
  },
  {
    id: 5,
    dayLabel: 'O Propósito',
    question: 'O que Jesus respondeu quando Maria perguntou por que Ele havia ficado no templo?',
    options: ['"Eu me perdi no caminho!"', '"Vocês não sabiam que eu precisava estar na casa de meu Pai?"', '"Eu queria conhecer os mestres."', '"Eu não queria voltar para casa."'],
    correctIndex: 1,
    explanation: 'Jesus respondeu com muita sabedoria, mostrando que Ele conhecia Sua missão e a importância de cuidar das coisas de Deus, Seu Pai.',
    biblicalVerse: 'Lucas 2:49',
  }
];
