import { Scene, QuizQuestion } from '../types';

export const EPISODE_META_T4E1 = {
  id: 't4e1',
  title: 'Pentecostes',
  subtitle: 'Quando o Espírito Santo Desceu',
  biblicalText: 'Atos 1:1-14 e Atos 2:1-47',
  durationLabel: '18 min',
  moralLesson: 'O Espírito Santo deu coragem aos discípulos para compartilhar a mensagem de Jesus com o mundo. Deus também pode nos dar coragem para fazer o bem!',
};

export const PENTECOSTES_SCENES: Scene[] = [
  {
    id: 1,
    sceneNumber: 1,
    title: 'Recapitulação',
    subtitle: 'Uma manhã que mudou tudo',
    biblicalRef: '',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'season_recap',
    musicTheme: 'jesus_theme',
    visualKey: 's4e1_01_recap',
    environmentSummary: 'Montagem sonora: água, multidão, tempestade, pães, e então som de vento suave.',
    musicDescription: 'A música tema de Jesus cresce no final da montagem.',
    soundEffects: ['water_splash', 'crowd_distant', 'thunder', 'bread_breaking', 'wind_breeze'],
    directorLesson: 'Fazer a transição emocionante da jornada passada para a nova fase (ressurreição).',
    lines: [
      {
        id: 's4e1_01_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Durante muito tempo... acompanhamos Jesus.',
      },
      {
        id: 's4e1_01_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Vimos seus milagres. Suas histórias. Seus discípulos. Suas viagens.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e1_01_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E vimos também... aquela manhã que mudou tudo.',
      },
      {
        id: 's4e1_01_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus ressuscitou.',
      }
    ]
  },
  {
    id: 2,
    sceneNumber: 2,
    title: 'Jesus e os Discípulos',
    subtitle: 'Uma missão',
    biblicalRef: 'Atos 1:3',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'nature_day',
    musicTheme: 'jesus_theme',
    visualKey: 's4e1_02_jesus_disciples',
    environmentSummary: 'Campo, passos, pessoas conversando felizes.',
    musicDescription: 'Música alegre e cheia de vida.',
    soundEffects: ['footsteps', 'nature_birds'],
    directorLesson: 'Mostrar a alegria contagiante dos discípulos por terem Jesus vivo entre eles.',
    lines: [
      {
        id: 's4e1_02_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Depois de sua ressurreição, Jesus apareceu aos seus discípulos muitas vezes.',
      },
      {
        id: 's4e1_02_l2',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Ele está vivo!',
        emotionGuide: 'Emocionado e feliz'
      },
      {
        id: 's4e1_02_l3',
        character: 'joao',
        characterLabel: 'João',
        text: 'Agora entendemos!',
        emotionGuide: 'Sereno, mas com grande alegria'
      },
      {
        id: 's4e1_02_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus ainda tinha uma missão para eles.',
      }
    ]
  },
  {
    id: 3,
    sceneNumber: 3,
    title: 'A Promessa',
    subtitle: 'Esperem em Jerusalém',
    biblicalRef: 'Atos 1:4',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'nature_day',
    musicTheme: 'waiting_theme',
    visualKey: 's4e1_03_promise',
    environmentSummary: 'Ouvindo o Mestre com atenção.',
    musicDescription: 'Música traz um tom de mistério e expectativa.',
    soundEffects: [],
    directorLesson: 'O foco na instrução e na promessa de algo maior.',
    lines: [
      {
        id: 's4e1_03_l1',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Fiquem em Jerusalém. Esperem pela promessa do Pai.',
        emotionGuide: 'Voz serena e autoritária, transmitindo segurança'
      },
      {
        id: 's4e1_03_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os discípulos ainda não entendiam completamente o que aconteceria. Mas confiavam em Jesus.',
      }
    ]
  },
  {
    id: 4,
    sceneNumber: 4,
    title: 'A Ascensão',
    subtitle: 'Até logo',
    biblicalRef: 'Atos 1:9',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'mountain_breeze',
    musicTheme: 'heavenly_theme',
    visualKey: 's4e1_04_ascension',
    environmentSummary: 'Céu aberto, vento suave, sensação de amplitude.',
    musicDescription: 'Música grandiosa e delicada.',
    soundEffects: ['wind_breeze'],
    directorLesson: 'Focar na maravilha do momento, não em detalhes visuais descritivos.',
    lines: [
      {
        id: 's4e1_04_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Então chegou o momento em que Jesus foi elevado diante deles.',
      },
      {
        id: 's4e1_04_l2',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Jesus...',
        emotionGuide: 'Maravilhado'
      },
      {
        id: 's4e1_04_l3',
        character: 'joao',
        characterLabel: 'João',
        text: 'Ele está indo embora.',
        emotionGuide: 'Voz suave, olhando para o alto'
      },
      {
        id: 's4e1_04_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os discípulos ficaram olhando para o céu.',
      }
    ]
  },
  {
    id: 5,
    sceneNumber: 5,
    title: 'Os Anjos',
    subtitle: 'Ele voltará',
    biblicalRef: 'Atos 1:10-11',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'mountain_breeze',
    musicTheme: 'hope_theme',
    visualKey: 's4e1_05_angels',
    environmentSummary: 'Uma luz e som celestial.',
    musicDescription: 'Música de esperança, suave e brilhante.',
    soundEffects: ['angelic_shimmer'],
    directorLesson: 'Trazer os discípulos de volta à realidade terrena com uma promessa celestial.',
    lines: [
      {
        id: 's4e1_05_l1',
        character: 'anjo',
        characterLabel: 'Voz de Anjo',
        text: 'Por que vocês estão olhando para o céu? Jesus voltará.',
        emotionGuide: 'Ressoante, encorajadora'
      },
      {
        id: 's4e1_05_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles voltaram para Jerusalém.',
      }
    ]
  },
  {
    id: 6,
    sceneNumber: 6,
    title: 'Esperando',
    subtitle: 'Obediência',
    biblicalRef: 'Atos 1:12-14',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'upper_room',
    musicTheme: 'waiting_theme',
    visualKey: 's4e1_06_waiting',
    environmentSummary: 'Ambiente interno (casa em Jerusalém). Passos, sussurros.',
    musicDescription: 'Música de espera paciente.',
    soundEffects: ['footsteps_indoor'],
    directorLesson: 'Destacar a união e a paciência deles antes do evento principal.',
    lines: [
      {
        id: 's4e1_06_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os discípulos fizeram exatamente o que Jesus havia pedido. Eles esperaram. Oraram. E permaneceram juntos.',
      },
      {
        id: 's4e1_06_l2',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Precisamos confiar.',
        emotionGuide: 'Ainda um pouco inseguro, mas tentando ser forte'
      },
      {
        id: 's4e1_06_l3',
        character: 'joao',
        characterLabel: 'João',
        text: 'Jesus prometeu.',
      }
    ]
  },
  {
    id: 7,
    sceneNumber: 7,
    title: 'O Dia de Pentecostes',
    subtitle: 'A grande reunião',
    biblicalRef: 'Atos 2:1',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'upper_room',
    musicTheme: 'pentecost_theme',
    visualKey: 's4e1_07_pentecost_day',
    environmentSummary: 'Eles reunidos, e de repente... silêncio total. Em seguida, um som muito distante.',
    musicDescription: 'Música começa misteriosa.',
    soundEffects: ['wind_distant'],
    directorLesson: 'Criar uma alta expectativa nos segundos que antecedem o som principal.',
    lines: [
      {
        id: 's4e1_07_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Então chegou o dia de Pentecostes.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e1_07_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os discípulos estavam reunidos.',
      },
      {
        id: 's4e1_07_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E algo extraordinário aconteceu.',
      }
    ]
  },
  {
    id: 8,
    sceneNumber: 8,
    title: 'O Som do Vento',
    subtitle: 'Do céu',
    biblicalRef: 'Atos 2:2',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'pentecost_wind',
    musicTheme: 'pentecost_theme',
    visualKey: 's4e1_08_wind_sound',
    environmentSummary: 'Vento começa suave e aumenta progressivamente até um som forte e cinematográfico. O ambiente vibra.',
    musicDescription: 'Música cresce junto com o vento.',
    soundEffects: ['wind_heavy', 'rumble'],
    directorLesson: 'O som do vento deve ser poderoso, maravilhoso, mas nunca assustador.',
    lines: [
      {
        id: 's4e1_08_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'De repente... veio do céu um som... parecido com o de um vento muito forte.',
      }
    ]
  },
  {
    id: 9,
    sceneNumber: 9,
    title: 'As Línguas como de Fogo',
    subtitle: 'O Espírito Santo',
    biblicalRef: 'Atos 2:3-4',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'pentecost_wind',
    musicTheme: 'holy_spirit_theme',
    visualKey: 's4e1_09_fire_tongues',
    environmentSummary: 'Som de vento se mistura com som celestial/místico.',
    musicDescription: 'A música atinge seu primeiro grande clímax.',
    soundEffects: ['holy_shimmer'],
    directorLesson: 'Não usar sons de explosão ou fogo crepitante assustador. Focar em luz, maravilha e presença.',
    lines: [
      {
        id: 's4e1_09_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Então apareceram sobre eles... línguas como de fogo.',
      },
      {
        id: 's4e1_09_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E todos ficaram cheios do Espírito Santo.',
      }
    ]
  },
  {
    id: 10,
    sceneNumber: 10,
    title: 'Novas Línguas',
    subtitle: 'A capacidade',
    biblicalRef: 'Atos 2:4',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'pentecost_wind',
    musicTheme: 'holy_spirit_theme',
    visualKey: 's4e1_10_new_languages',
    environmentSummary: 'Várias vozes começam a falar simultaneamente de forma harmoniosa e natural.',
    musicDescription: 'A música reduz um pouco para dar espaço às vozes.',
    soundEffects: ['crowd_talking_languages'],
    directorLesson: 'As línguas não devem soar confusas ou fabricadas, devem soar como pessoas de fato falando outros idiomas.',
    lines: [
      {
        id: 's4e1_10_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E começaram a falar em outras línguas... conforme o Espírito lhes dava capacidade.',
      }
    ]
  },
  {
    id: 11,
    sceneNumber: 11,
    title: 'A Multidão Chega',
    subtitle: 'Que som foi esse?',
    biblicalRef: 'Atos 2:5-6',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'jerusalem_street',
    musicTheme: 'waiting_theme',
    visualKey: 's4e1_11_crowd_arrives',
    environmentSummary: 'Ruas cheias, muitas pessoas, passos correndo.',
    musicDescription: 'Música de curiosidade e movimento.',
    soundEffects: ['crowd_running', 'city_street'],
    directorLesson: 'Mudar a perspectiva acústica para a rua, mostrando a reação da cidade ao evento.',
    lines: [
      {
        id: 's4e1_11_l1',
        character: 'pessoa1',
        characterLabel: 'Pessoa',
        text: 'Que som foi esse?',
        emotionGuide: 'Curioso'
      },
      {
        id: 's4e1_11_l2',
        character: 'pessoa2',
        characterLabel: 'Outra Pessoa',
        text: 'Vamos ver!',
      },
      {
        id: 's4e1_11_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jerusalém estava cheia de pessoas de muitos lugares. Elas tinham vindo para a festa.',
      }
    ]
  },
  {
    id: 12,
    sceneNumber: 12,
    title: 'O Espanto',
    subtitle: 'Na nossa própria língua',
    biblicalRef: 'Atos 2:7-8',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'jerusalem_street',
    musicTheme: 'waiting_theme',
    visualKey: 's4e1_12_amazement',
    environmentSummary: 'Murmúrio de espanto da multidão.',
    musicDescription: 'Continuação da curiosidade.',
    soundEffects: ['crowd_murmur_surprised'],
    directorLesson: 'Focar na reação maravilhada da multidão que não entende o que está acontecendo.',
    lines: [
      {
        id: 's4e1_12_l1',
        character: 'pessoa1',
        characterLabel: 'Pessoa',
        text: 'Como estamos ouvindo essas pessoas falar em nossa própria língua?',
      },
      {
        id: 's4e1_12_l2',
        character: 'pessoa2',
        characterLabel: 'Outra Pessoa',
        text: 'Isso é incrível!',
      },
      {
        id: 's4e1_12_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Cada pessoa ouvia os discípulos falando de uma maneira que podia compreender.',
      }
    ]
  },
  {
    id: 13,
    sceneNumber: 13,
    title: 'Pedro se Levanta',
    subtitle: 'Coragem',
    biblicalRef: 'Atos 2:14',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'jerusalem_street',
    musicTheme: 'courage_theme',
    visualKey: 's4e1_13_peter_stands',
    environmentSummary: 'A multidão se aquieta quando ele começa a falar.',
    musicDescription: 'A música muda, introduzindo um tema de coragem.',
    soundEffects: ['crowd_silence'],
    directorLesson: 'Mostrar a transformação de Pedro: de inseguro a um líder firme e corajoso.',
    lines: [
      {
        id: 's4e1_13_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Então Pedro se levantou.',
      },
      {
        id: 's4e1_13_l2',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Amigos... Ouçam o que está acontecendo. Deus cumpriu sua promessa.',
        emotionGuide: 'Voz firme, forte e projetada para a multidão'
      }
    ]
  },
  {
    id: 14,
    sceneNumber: 14,
    title: 'A Mensagem de Pedro',
    subtitle: 'Ele está vivo',
    biblicalRef: 'Atos 2:22-33',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'jerusalem_street',
    musicTheme: 'hope_theme',
    visualKey: 's4e1_14_peter_message',
    environmentSummary: 'Pedro pregando para a multidão silenciosa e atenta.',
    musicDescription: 'Música emocional.',
    soundEffects: [],
    directorLesson: 'A essência do evangelho pregada com convicção e paixão.',
    lines: [
      {
        id: 's4e1_14_l1',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Jesus foi enviado por Deus. Ele morreu. Mas Deus o ressuscitou.',
      },
      {
        id: 's4e1_14_l2',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Ele está vivo. E agora Deus enviou seu Espírito.',
        emotionGuide: 'Cheio de paixão e verdade'
      }
    ]
  },
  {
    id: 15,
    sceneNumber: 15,
    title: 'O Coração da Multidão',
    subtitle: 'O que devemos fazer?',
    biblicalRef: 'Atos 2:37-38',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'jerusalem_street',
    musicTheme: 'hope_theme',
    visualKey: 's4e1_15_crowd_heart',
    environmentSummary: 'A mensagem atinge os corações.',
    musicDescription: 'Música continua suave.',
    soundEffects: [],
    directorLesson: 'Mostrar o poder das palavras inspiradas por Deus para mudar as pessoas.',
    lines: [
      {
        id: 's4e1_15_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'As palavras de Pedro tocaram o coração das pessoas.',
      },
      {
        id: 's4e1_15_l2',
        character: 'pessoa1',
        characterLabel: 'Pessoa',
        text: 'O que devemos fazer?',
        emotionGuide: 'Arrependido e sincero'
      },
      {
        id: 's4e1_15_l3',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Voltem-se para Deus. Creiam em Jesus.',
      },
      {
        id: 's4e1_15_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E muitas pessoas receberam a mensagem.',
      }
    ]
  },
  {
    id: 16,
    sceneNumber: 16,
    title: 'O Grande Resultado',
    subtitle: 'Três mil pessoas',
    biblicalRef: 'Atos 2:41',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'jerusalem_street',
    musicTheme: 'church_theme',
    visualKey: 's4e1_16_great_result',
    environmentSummary: 'Celebração e novos crentes se juntando.',
    musicDescription: 'Música alegre. Aqui introduzimos discretamente o TEMA DA IGREJA.',
    soundEffects: ['crowd_happy'],
    directorLesson: 'O início de algo grande sem exageros numéricos na atuação, focando na alegria da comunidade crescente.',
    lines: [
      {
        id: 's4e1_16_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Naquele dia... muitas pessoas foram acrescentadas à comunidade dos seguidores de Jesus. Cerca de três mil pessoas.',
      }
    ]
  },
  {
    id: 17,
    sceneNumber: 17,
    title: 'A Primeira Comunidade',
    subtitle: 'Juntos',
    biblicalRef: 'Atos 2:42-45',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'early_church',
    musicTheme: 'church_theme',
    visualKey: 's4e1_17_first_community',
    environmentSummary: 'Pessoas comendo juntas, crianças, risadas.',
    musicDescription: 'Tema da Igreja, representando comunidade e missão.',
    soundEffects: ['eating_together', 'children_laughing'],
    directorLesson: 'A beleza da união e do compartilhamento na igreja primitiva.',
    lines: [
      {
        id: 's4e1_17_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles aprendiam. Oravam. Comiam juntos. Compartilhavam o que tinham. E ajudavam uns aos outros.',
      }
    ]
  },
  {
    id: 18,
    sceneNumber: 18,
    title: 'Uma Nova Família',
    subtitle: 'Diferentes, mas unidos',
    biblicalRef: 'Atos 2:44',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'early_church',
    musicTheme: 'church_theme',
    visualKey: 's4e1_18_new_family',
    environmentSummary: 'Ambiente caloroso e seguro.',
    musicDescription: 'Música acolhedora.',
    soundEffects: [],
    directorLesson: 'Explicar de forma simples que a igreja abraça as diferenças.',
    lines: [
      {
        id: 's4e1_18_l1',
        character: 'child',
        characterLabel: 'Criança',
        text: 'Eles eram todos iguais?',
        emotionGuide: 'Curiosa'
      },
      {
        id: 's4e1_18_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Não. Havia pessoas diferentes. De lugares diferentes. Com histórias diferentes.',
      },
      {
        id: 's4e1_18_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas agora estavam unidos por uma mesma fé.',
      }
    ]
  },
  {
    id: 19,
    sceneNumber: 19,
    title: 'Lição',
    subtitle: 'Cada um pode ajudar',
    biblicalRef: '',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'early_church',
    musicTheme: 'mission_theme',
    visualKey: 's4e1_19_lesson',
    environmentSummary: 'Pausa para absorver o ensinamento.',
    musicDescription: 'Música de reflexão inspiradora.',
    soundEffects: [],
    directorLesson: 'Conectar a história com o cotidiano da criança ouvinte.',
    lines: [
      {
        id: 's4e1_19_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Pentecostes nos lembra que Deus pode usar pessoas diferentes para fazer coisas importantes.',
      },
      {
        id: 's4e1_19_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Você pode ajudar. Você pode ensinar. Você pode ouvir. Você pode encorajar. Você pode compartilhar.',
      },
      {
        id: 's4e1_19_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Cada pessoa pode contribuir.',
      }
    ]
  },
  {
    id: 20,
    sceneNumber: 20,
    title: 'Coragem',
    subtitle: 'Confiança',
    biblicalRef: 'Atos 4:31 (contexto de coragem)',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'early_church',
    musicTheme: 'courage_theme',
    visualKey: 's4e1_20_courage',
    environmentSummary: 'Foco narrativo e emocional forte.',
    musicDescription: 'Música emocional focada em força interior.',
    soundEffects: [],
    directorLesson: 'Reforçar de onde vem a força dos discípulos.',
    lines: [
      {
        id: 's4e1_20_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Antes, os discípulos tinham sentido medo. Agora... eles falavam com coragem.',
      },
      {
        id: 's4e1_20_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Não porque fossem perfeitos. Mas porque confiavam em Deus.',
      }
    ]
  },
  {
    id: 21,
    sceneNumber: 21,
    title: 'A Grande História',
    subtitle: 'Uma pequena comunidade',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'early_church',
    musicTheme: 'church_theme',
    visualKey: 's4e1_21_phrase',
    environmentSummary: 'A frase marcante.',
    musicDescription: 'Música acolhedora e conclusiva.',
    soundEffects: [],
    directorLesson: 'A frase de efeito para o episódio.',
    lines: [
      {
        id: 's4e1_21_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Quando Deus chama... Ele também pode dar coragem para cumprir a missão.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e1_21_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E uma pequena comunidade... pode começar uma grande história.',
      }
    ]
  },
  {
    id: 22,
    sceneNumber: 22,
    title: 'Montagem Cinematográfica',
    subtitle: 'O começo',
    biblicalRef: 'Atos 2:46-47',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'early_church',
    musicTheme: 'mission_theme',
    visualKey: 's4e1_22_montage',
    environmentSummary: 'Montagem sonora: pessoas compartilhando pão, orando, caminhando, ensinando.',
    musicDescription: 'Música épica, mostrando a expansão da mensagem.',
    soundEffects: ['bread_breaking', 'footsteps', 'crowd_happy'],
    directorLesson: 'Uma visão geral de como a igreja começou a se espalhar, transmitindo movimento.',
    lines: [
      {
        id: 's4e1_22_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E assim começou uma nova etapa.',
      },
      {
        id: 's4e1_22_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A mensagem de Jesus começou a viajar. De pessoa para pessoa. De cidade para cidade. De coração para coração.',
      }
    ]
  },
  {
    id: 23,
    sceneNumber: 23,
    title: 'O Pescador',
    subtitle: 'Gancho',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'peter_hook',
    musicTheme: 'adventure_theme',
    visualKey: 's4e1_23_hook',
    environmentSummary: 'Som de mar, barco.',
    musicDescription: 'Música muda para o tom de aventura e antecipação.',
    soundEffects: ['sea_waves', 'boat_creak'],
    directorLesson: 'Preparar o terreno para o foco da temporada: as aventuras dos apóstolos, começando com Pedro.',
    lines: [
      {
        id: 's4e1_23_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas entre os novos seguidores havia homens e mulheres que fariam coisas extraordinárias.',
      },
      {
        id: 's4e1_23_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Um deles era um pescador chamado Pedro.',
      },
      {
        id: 's4e1_23_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O homem que um dia teve medo... agora teria que aprender a liderar.',
      }
    ]
  },
  {
    id: 24,
    sceneNumber: 24,
    title: 'Próximo Episódio',
    subtitle: 'Pedro',
    biblicalRef: '',
    durationLabel: '10 segundos',
    estimatedDurationSec: 10,
    ambientType: 'peter_hook',
    musicTheme: 'adventure_theme',
    visualKey: 's4e1_24_next',
    environmentSummary: 'Apenas a narração do título, mar de fundo.',
    musicDescription: 'Música épica terminando.',
    soundEffects: ['sea_waves_soft'],
    directorLesson: 'A clássica transição para o próximo capítulo.',
    lines: [
      {
        id: 's4e1_24_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'No próximo episódio... Pedro. O pescador que se tornou um pregador.',
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
    visualKey: 's4e1_25_outro',
    environmentSummary: 'O encerramento oficial.',
    musicDescription: 'O jingle clássico entra glorioso.',
    soundEffects: ['toon_tales_jingle'],
    directorLesson: 'Finalizar com a energia inesgotável e alegre da série.',
    lines: [
      {
        id: 's4e1_25_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E essa foi mais uma aventura da Bíblia em Áudio.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e1_25_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a história ainda não terminou...',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's4e1_25_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma nova aventura está esperando por você.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e1_25_l4',
        character: 'child',
        characterLabel: 'Crianças',
        text: 'TOON TALES KIDS!',
        emotionGuide: 'Em coro feliz e forte'
      },
      {
        id: 's4e1_25_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Histórias que ensinam, aventuras que transformam!',
      }
    ]
  }
];

export const PENTECOSTES_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    dayLabel: 'A Promessa',
    question: 'O que Jesus pediu para os discípulos fazerem antes de subir aos céus?',
    options: ['Viajar pelo mundo o mais rápido possível', 'Ficar em Jerusalém e esperar pela promessa do Pai', 'Ir pescar e voltar para casa', 'Construir um barco grande'],
    correctIndex: 1,
    explanation: 'Jesus disse a eles que não fossem embora de Jerusalém, mas que esperassem pelo presente que Deus havia prometido: o Espírito Santo.',
    biblicalVerse: 'Atos 1:4',
  },
  {
    id: 2,
    dayLabel: 'O Vento',
    question: 'O que aconteceu quando os discípulos estavam todos reunidos no dia de Pentecostes?',
    options: ['Começou a chover forte e trovejar', 'Eles ouviram um som do céu, como de um vento muito forte', 'Apareceu um exército de soldados', 'Houve um terremoto que quebrou a casa'],
    correctIndex: 1,
    explanation: 'De repente, veio do céu um barulho que parecia o de um vento violento, que encheu toda a casa onde eles estavam sentados!',
    biblicalVerse: 'Atos 2:2',
  },
  {
    id: 3,
    dayLabel: 'Fogo',
    question: 'O que apareceu sobre a cabeça de cada um dos discípulos?',
    options: ['Uma coroa de ouro', 'Pombas brancas', 'Línguas como de fogo', 'Um chapéu luminoso'],
    correctIndex: 2,
    explanation: 'Eles viram o que pareciam ser línguas de fogo, que se separaram e pousaram sobre cada um deles, um sinal visível do Espírito Santo.',
    biblicalVerse: 'Atos 2:3',
  },
  {
    id: 4,
    dayLabel: 'O Milagre',
    question: 'Por que a multidão de pessoas de diferentes países ficou tão espantada?',
    options: ['Porque eles viram a casa pegar fogo', 'Porque os discípulos começaram a voar', 'Porque cada um os ouvia falar em sua própria língua', 'Porque eles estavam distribuindo muito dinheiro'],
    correctIndex: 2,
    explanation: 'Havia pessoas de vários lugares em Jerusalém. Quando os discípulos ficaram cheios do Espírito Santo, eles começaram a falar as línguas dessas pessoas para espalhar a mensagem de Jesus!',
    biblicalVerse: 'Atos 2:6',
  },
  {
    id: 5,
    dayLabel: 'Coragem',
    question: 'Depois desse dia, como os discípulos mudaram?',
    options: ['Eles ficaram com muito medo e nunca mais saíram', 'Eles se esconderam ainda mais na casa', 'Eles esqueceram quem era Jesus', 'Eles ganharam coragem e falaram de Jesus para todos'],
    correctIndex: 3,
    explanation: 'Antes eles tinham medo, mas o Espírito Santo deu poder e coragem a eles, e Pedro até pregou para uma multidão, começando a primeira igreja cristã!',
    biblicalVerse: 'Atos 4:31',
  }
];
