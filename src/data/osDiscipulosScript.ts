import { Scene, QuizQuestion } from '../types';

export const EPISODE_META_T3E4 = {
  id: 't3e4',
  title: 'Os Discípulos',
  subtitle: 'Os amigos que deixaram tudo para seguir Jesus',
  biblicalText: 'Mateus 4:18-22, Marcos 1:16-20, Lucas 5:1-11, João 1:35-51',
  durationLabel: '15 min',
  moralLesson: 'Deus pode usar pessoas comuns para fazer coisas extraordinárias. Você não precisa ser perfeito para começar. Precisa estar disposto a aprender, confiar e fazer o bem.',
};

export const OS_DISCIPULOS_SCENES: Scene[] = [
  {
    id: 1,
    sceneNumber: 1,
    title: 'Os Pescadores',
    subtitle: 'Homens do mar',
    biblicalRef: 'Mateus 4:18',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'galilee_sea',
    musicTheme: 'playful_adventure',
    visualKey: 's3e4_01_fishermen',
    environmentSummary: 'Água do mar, gaivotas, barco balançando e som de redes.',
    musicDescription: 'Música de aventura náutica.',
    soundEffects: ['ocean_waves', 'ocean_waters'],
    directorLesson: 'Apresentar a rotina normal dos homens que logo seriam chamados para algo eterno.',
    lines: [
      {
        id: 's3e4_01_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Antes de serem discípulos... eles eram pescadores.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e4_01_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Tinham barcos. Tinham redes. E conheciam o mar.',
        soundCue: 'Rede sendo puxada'
      },
      {
        id: 's3e4_01_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas naquele dia... a vida deles estava prestes a mudar.',
      },
      {
        id: 's3e4_01_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Na região da Galileia... alguns homens trabalhavam como pescadores.',
      },
      {
        id: 's3e4_01_l5',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Vamos puxar a rede!',
        emotionGuide: 'Energético, espontâneo'
      },
      {
        id: 's3e4_01_l6',
        character: 'andre',
        characterLabel: 'André',
        text: 'Estou puxando!',
        emotionGuide: 'Firme, ajudando'
      },
      {
        id: 's3e4_01_l7',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Mais forte!',
      }
    ]
  },
  {
    id: 2,
    sceneNumber: 2,
    title: 'Uma Noite Difícil',
    subtitle: 'Nenhum peixe',
    biblicalRef: 'Lucas 5:5',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'galilee_sea',
    musicTheme: 'melancholy_underscore',
    visualKey: 's3e4_02_hard_night',
    environmentSummary: 'O som da água batendo no casco do barco. Uma noite frustrante.',
    musicDescription: 'Música levemente desanimada.',
    soundEffects: ['ocean_waters'],
    directorLesson: 'Destacar o cansaço do fracasso comum do dia a dia.',
    lines: [
      {
        id: 's3e4_02_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles haviam trabalhado durante muito tempo. Mas naquele dia... não conseguiram pescar quase nada.',
      },
      {
        id: 's3e4_02_l2',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Nada.',
        emotionGuide: 'Frustrado'
      },
      {
        id: 's3e4_02_l3',
        character: 'andre',
        characterLabel: 'André',
        text: 'Nem um peixe.',
      },
      {
        id: 's3e4_02_l4',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Precisamos tentar novamente.',
      },
      {
        id: 's3e4_02_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas estavam cansados.',
      }
    ]
  },
  {
    id: 3,
    sceneNumber: 3,
    title: 'Jesus Aparece',
    subtitle: 'A multidão e o barco',
    biblicalRef: 'Lucas 5:1-3',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'village_galilee',
    musicTheme: 'jesus_theme',
    visualKey: 's3e4_03_jesus_arrives',
    environmentSummary: 'Multidão se aproximando da praia.',
    musicDescription: 'Música muda para o tema suave de Jesus.',
    soundEffects: ['market_city', 'ocean_waters'],
    directorLesson: 'A transição de uma cena de trabalho frustrante para o ensino divino.',
    lines: [
      {
        id: 's3e4_03_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Então Jesus chegou. As pessoas começaram a se aproximar.',
      },
      {
        id: 's3e4_03_l2',
        character: 'person',
        characterLabel: 'Pessoa',
        text: 'Jesus está aqui!',
      },
      {
        id: 's3e4_03_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A multidão ficou tão grande... que Jesus entrou em um barco.',
      }
    ]
  },
  {
    id: 4,
    sceneNumber: 4,
    title: 'Jesus Ensina',
    subtitle: 'Palavras de vida',
    biblicalRef: 'Lucas 5:3',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'fishing_boat',
    musicTheme: 'gentle_teaching',
    visualKey: 's3e4_04_teaching',
    environmentSummary: 'Barco na beira da praia, multidão ouvindo atenta.',
    musicDescription: 'Música suave, ambiente pacífico.',
    soundEffects: ['ocean_waters'],
    directorLesson: 'A autoridade e a paz no ensino de Jesus.',
    lines: [
      {
        id: 's3e4_04_l1',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Escutem. Deus deseja transformar nossos corações.',
        emotionGuide: 'Sereno, firme'
      },
      {
        id: 's3e4_04_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus ensinava às pessoas. E todos queriam ouvi-lo.',
        soundCue: 'Música suave'
      }
    ]
  },
  {
    id: 5,
    sceneNumber: 5,
    title: 'Vá para Águas Mais Fundas',
    subtitle: 'O desafio',
    biblicalRef: 'Lucas 5:4-5',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'fishing_boat',
    musicTheme: 'curious_discovery',
    visualKey: 's3e4_05_deep_waters',
    environmentSummary: 'Momento de decisão. Som do mar.',
    musicDescription: 'Música de curiosidade que cresce gradualmente.',
    soundEffects: ['ocean_waters'],
    directorLesson: 'Pedro hesita, mas decide obedecer. Isso é chave.',
    lines: [
      {
        id: 's3e4_05_l1',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Pedro... leve o barco para águas mais profundas. E lancem as redes.',
      },
      {
        id: 's3e4_05_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Pedro hesita.',
      },
      {
        id: 's3e4_05_l3',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Senhor... nós trabalhamos a noite inteira. E não conseguimos pegar nada.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e4_05_l4',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Mas, se o senhor está dizendo... vamos tentar.',
        emotionGuide: 'Duvidoso, mas respeitoso'
      }
    ]
  },
  {
    id: 6,
    sceneNumber: 6,
    title: 'A Pesca Maravilhosa',
    subtitle: 'Redes cheias',
    biblicalRef: 'Lucas 5:6',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'miracle_catch',
    musicTheme: 'miracle_climax',
    visualKey: 's3e4_06_miracle',
    environmentSummary: 'Movimento brusco de água, a rede tensiona, alegria caótica.',
    musicDescription: 'Música começa a crescer intensamente.',
    soundEffects: ['ocean_waters', 'rain_storm'],
    directorLesson: 'O choque e a adrenalina do milagre no mar.',
    lines: [
      {
        id: 's3e4_06_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A rede entrou na água.',
        soundCue: 'Silêncio breve, depois movimento forte da água'
      },
      {
        id: 's3e4_06_l2',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Espere! A rede está pesada!',
        emotionGuide: 'Surpreso e fazendo esforço'
      },
      {
        id: 's3e4_06_l3',
        character: 'andre',
        characterLabel: 'André',
        text: 'Tem alguma coisa aí!',
      },
      {
        id: 's3e4_06_l4',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Puxe!',
        soundCue: 'Som de rede rasgando água'
      },
      {
        id: 's3e4_06_l5',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Peixes!',
      },
      {
        id: 's3e4_06_l6',
        character: 'andre',
        characterLabel: 'André',
        text: 'São muitos!',
      },
      {
        id: 's3e4_06_l7',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Precisamos de ajuda!',
        soundCue: 'Barco balançando e música no clímax'
      }
    ]
  },
  {
    id: 7,
    sceneNumber: 7,
    title: 'Tiago e João',
    subtitle: 'Ajuda',
    biblicalRef: 'Lucas 5:7',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'miracle_catch',
    musicTheme: 'triumphant_joy',
    visualKey: 's3e4_07_help',
    environmentSummary: 'Outro barco se aproximando rapidamente.',
    musicDescription: 'Triunfal e cheia de ação.',
    soundEffects: ['ocean_waves'],
    directorLesson: 'A amizade e cooperação entre os quatro primeiros.',
    lines: [
      {
        id: 's3e4_07_l1',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Tiago! João! Venham ajudar!',
      },
      {
        id: 's3e4_07_l2',
        character: 'tiago',
        characterLabel: 'Tiago',
        text: 'Estamos indo!',
        emotionGuide: 'Corajoso, gritando do outro barco'
      },
      {
        id: 's3e4_07_l3',
        character: 'joao',
        characterLabel: 'João',
        text: 'Segurem a rede!',
        emotionGuide: 'Firme'
      },
      {
        id: 's3e4_07_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os peixes eram tantos... que os barcos quase ficaram cheios.',
      }
    ]
  },
  {
    id: 8,
    sceneNumber: 8,
    title: 'Pedro Fica Impressionado',
    subtitle: 'Não sou digno',
    biblicalRef: 'Lucas 5:8-10',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'fishing_boat',
    musicTheme: 'pure_serenity',
    visualKey: 's3e4_08_amazement',
    environmentSummary: 'O susto do milagre e a reverência diante de Jesus.',
    musicDescription: 'Música diminui totalmente.',
    soundEffects: ['ocean_waters'],
    directorLesson: 'O peso da santidade de Jesus contrastando com a empolgação da pesca.',
    lines: [
      {
        id: 's3e4_08_l1',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Senhor... Eu não sou digno disso.',
        emotionGuide: 'Tremendo, muito respeitoso'
      },
      {
        id: 's3e4_08_l2',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Não tenha medo, Pedro.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e4_08_l3',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'De agora em diante... você será pescador de pessoas.',
        soundCue: 'Silêncio, depois música emocional'
      }
    ]
  },
  {
    id: 9,
    sceneNumber: 9,
    title: 'O Chamado de Pedro',
    subtitle: 'Pescador de pessoas',
    biblicalRef: 'Lucas 5:11',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'fishing_boat',
    musicTheme: 'disciples_theme',
    visualKey: 's3e4_09_call_peter',
    environmentSummary: 'O chamado direto.',
    musicDescription: 'O tema dos discípulos ganha vida. Aventura e propósito.',
    soundEffects: [],
    directorLesson: 'A decisão rápida que muda uma vida.',
    lines: [
      {
        id: 's3e4_09_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Pedro entendeu que Jesus estava fazendo um convite. Não para pescar peixes. Mas para ajudar pessoas.',
      },
      {
        id: 's3e4_09_l2',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Venha comigo.',
      },
      {
        id: 's3e4_09_l3',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Eu vou.',
        emotionGuide: 'Determinado'
      }
    ]
  },
  {
    id: 10,
    sceneNumber: 10,
    title: 'O Chamado de André',
    subtitle: 'Seguir Jesus',
    biblicalRef: 'Marcos 1:16-18',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'fishing_boat',
    musicTheme: 'disciples_theme',
    visualKey: 's3e4_10_call_andrew',
    environmentSummary: 'André também se une.',
    musicDescription: 'Música suave, acolhedora.',
    soundEffects: [],
    directorLesson: 'André como alguém calmo e observador.',
    lines: [
      {
        id: 's3e4_10_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'André também decidiu seguir Jesus.',
      },
      {
        id: 's3e4_10_l2',
        character: 'andre',
        characterLabel: 'André',
        text: 'Eu quero aprender com você.',
      },
      {
        id: 's3e4_10_l3',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Então venha.',
      }
    ]
  },
  {
    id: 11,
    sceneNumber: 11,
    title: 'O Chamado de Tiago e João',
    subtitle: 'Deixando tudo',
    biblicalRef: 'Marcos 1:19-20',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'fishing_boat',
    musicTheme: 'disciples_theme',
    visualKey: 's3e4_11_call_james_john',
    environmentSummary: 'No outro barco.',
    musicDescription: 'Música de afirmação.',
    soundEffects: ['ocean_waters'],
    directorLesson: 'O compromisso e a união fraterna.',
    lines: [
      {
        id: 's3e4_11_l1',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Venham comigo.',
      },
      {
        id: 's3e4_11_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Tiago olha para João.',
      },
      {
        id: 's3e4_11_l3',
        character: 'tiago',
        characterLabel: 'Tiago',
        text: 'Vamos?',
      },
      {
        id: 's3e4_11_l4',
        character: 'joao',
        characterLabel: 'João',
        text: 'Vamos.',
      },
      {
        id: 's3e4_11_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles deixaram o barco... e seguiram Jesus.',
      }
    ]
  },
  {
    id: 12,
    sceneNumber: 12,
    title: 'O que é um discípulo?',
    subtitle: 'Aprender',
    biblicalRef: '',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'warm_acoustic',
    musicTheme: 'gentle_teaching',
    visualKey: 's3e4_12_meaning',
    environmentSummary: 'Transição.',
    musicDescription: 'Música educativa, reflexiva.',
    soundEffects: [],
    directorLesson: 'Traduzir a palavra discípulo para as crianças.',
    lines: [
      {
        id: 's3e4_12_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas o que significa ser discípulo?',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e4_12_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Um discípulo é alguém que aprende com um mestre. Alguém que acompanha. Alguém que observa. Alguém que coloca em prática aquilo que aprende.',
      }
    ]
  },
  {
    id: 13,
    sceneNumber: 13,
    title: 'Jesus e Seus Novos Amigos',
    subtitle: 'Companheiros',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'caravan_road',
    musicTheme: 'playful_adventure',
    visualKey: 's3e4_13_friends',
    environmentSummary: 'Grupo caminhando, sons leves e amigáveis.',
    musicDescription: 'Música alegre de viagem e amizade.',
    soundEffects: ['desert_wind'],
    directorLesson: 'A humanidade da relação entre eles.',
    lines: [
      {
        id: 's3e4_13_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus agora tinha companheiros de caminhada.',
        soundCue: 'Passos caminhando juntos'
      },
      {
        id: 's3e4_13_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles viajariam juntos. Aprenderiam juntos. Comeriam juntos. Ririam. Enfrentariam desafios. E aprenderiam a confiar em Deus.',
      }
    ]
  },
  {
    id: 14,
    sceneNumber: 14,
    title: 'Não Eram Perfeitos',
    subtitle: 'Gente como a gente',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'caravan_road',
    musicTheme: 'warm_friendship',
    visualKey: 's3e4_14_imperfect',
    environmentSummary: 'Estrada.',
    musicDescription: 'Música mais leve e acolhedora.',
    soundEffects: [],
    directorLesson: 'Mostrar que erros fazem parte do processo.',
    lines: [
      {
        id: 's3e4_14_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os discípulos não eram perfeitos. Às vezes tinham medo. Às vezes não entendiam. Às vezes discutiam. Mas continuavam aprendendo.',
      },
      {
        id: 's3e4_14_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E Jesus tinha paciência para ensiná-los.',
      }
    ]
  },
  {
    id: 15,
    sceneNumber: 15,
    title: 'Para as Crianças',
    subtitle: 'Você também',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'warm_acoustic',
    musicTheme: 'gentle_teaching',
    visualKey: 's3e4_15_children',
    environmentSummary: 'Intimidade com o ouvinte.',
    musicDescription: 'Música de ensino carinhoso.',
    soundEffects: [],
    directorLesson: 'Encorajar a criança que se acha incapaz.',
    lines: [
      {
        id: 's3e4_15_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Talvez você pense que precisa ser perfeito para fazer algo importante. Mas não.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e4_15_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Você pode começar aprendendo. Pode ajudar. Pode ser gentil. Pode ter coragem. Pode fazer o bem.',
      }
    ]
  },
  {
    id: 16,
    sceneNumber: 16,
    title: 'Frase Marcante',
    subtitle: 'A grande aventura',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'warm_acoustic',
    musicTheme: 'disciples_theme',
    visualKey: 's3e4_16_phrase',
    environmentSummary: 'Silêncio.',
    musicDescription: 'Música emocional.',
    soundEffects: [],
    directorLesson: 'A grande conclusão de sabedoria.',
    lines: [
      {
        id: 's3e4_16_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Grandes aventuras podem começar com uma simples decisão.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e4_16_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Seguir. Aprender. Confiar.',
      }
    ]
  },
  {
    id: 17,
    sceneNumber: 17,
    title: 'Caminhando com Jesus',
    subtitle: 'A jornada começa',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'caravan_road',
    musicTheme: 'playful_adventure',
    visualKey: 's3e4_17_journey',
    environmentSummary: 'Passos firmes e vento na jornada.',
    musicDescription: 'O tema dos discípulos, leve e empolgante.',
    soundEffects: ['desert_wind'],
    directorLesson: 'Um encerramento alegre da equipe reunida.',
    lines: [
      {
        id: 's3e4_17_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E assim começou uma nova jornada. Jesus e seus discípulos. Juntos.',
      },
      {
        id: 's3e4_17_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Um grupo de amigos... que ainda não fazia ideia de tudo o que estava por vir.',
      }
    ]
  },
  {
    id: 18,
    sceneNumber: 18,
    title: 'Gancho para o Episódio 15',
    subtitle: 'O impossível',
    biblicalRef: '',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'crowd_river',
    musicTheme: 'miracle_climax',
    visualKey: 's3e4_18_hook',
    environmentSummary: 'Multidão clamando por milagres.',
    musicDescription: 'Música de mistério muda para algo espetacular.',
    soundEffects: ['market_city'],
    directorLesson: 'Preparar o terreno para os milagres estonteantes do próximo episódio.',
    lines: [
      {
        id: 's3e4_18_l1',
        character: 'person',
        characterLabel: 'Pessoa',
        text: 'Jesus! Ajude meu filho!',
      },
      {
        id: 's3e4_18_l2',
        character: 'homem1',
        characterLabel: 'Homem',
        text: 'Ele está doente!',
      },
      {
        id: 's3e4_18_l3',
        character: 'person',
        characterLabel: 'Pessoa',
        text: 'Senhor, tenha misericórdia!',
        soundCue: 'Música muda'
      },
      {
        id: 's3e4_18_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Logo os discípulos descobririam que Jesus tinha um poder extraordinário. Ele curava. Libertava. Restaurava. E realizava milagres.',
      }
    ]
  },
  {
    id: 19,
    sceneNumber: 19,
    title: 'Próximo Episódio',
    subtitle: 'Os milagres',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'warm_acoustic',
    musicTheme: 'miracle_climax',
    visualKey: 's3e4_19_next',
    environmentSummary: 'Trailer do próximo episódio.',
    musicDescription: 'Música cresce forte e termina com expectativa.',
    soundEffects: [],
    directorLesson: 'Encerramento entusiasmado.',
    lines: [
      {
        id: 's3e4_19_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'No próximo episódio... Os Milagres. Quando Jesus fez o impossível acontecer.',
      }
    ]
  },
  {
    id: 20,
    sceneNumber: 20,
    title: 'Assinatura',
    subtitle: 'Toon Tales Kids',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'toon_tales_jingle',
    musicTheme: 'signature_jingle',
    visualKey: 's3e4_20_outro',
    environmentSummary: 'Logotipo sonoro',
    musicDescription: 'A música diminui. Entra o tema musical alegre.',
    soundEffects: ['toon_tales_jingle'],
    directorLesson: 'Assinatura vibrante de término oficial.',
    lines: [
      {
        id: 's3e4_20_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E essa foi mais uma aventura da Bíblia em Áudio.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e4_20_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a história ainda não terminou...',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's3e4_20_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma nova aventura está esperando por você.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e4_20_l4',
        character: 'child',
        characterLabel: 'Crianças',
        text: 'TOON TALES KIDS!',
        emotionGuide: 'Em coro feliz e forte'
      },
      {
        id: 's3e4_20_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Histórias que ensinam, aventuras que transformam!',
      }
    ]
  }
];

export const OS_DISCIPULOS_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    dayLabel: 'A Profissão',
    question: 'Qual era o trabalho de Pedro, André, Tiago e João antes de conhecerem Jesus?',
    options: ['Eles eram carpinteiros', 'Eles eram soldados', 'Eles eram pescadores', 'Eles eram pastores de ovelhas'],
    correctIndex: 2,
    explanation: 'Eles eram homens simples e trabalhadores que conheciam muito bem o mar da Galileia, pois eram pescadores.',
    biblicalVerse: 'Mateus 4:18',
  },
  {
    id: 2,
    dayLabel: 'A Noite',
    question: 'O que aconteceu com Pedro e André na noite em que tentaram pescar antes de encontrarem Jesus?',
    options: ['Pegaram muitos peixes gigantes', 'Não conseguiram pescar absolutamente nada', 'Um tubarão rasgou a rede deles', 'Eles dormiram no barco a noite toda'],
    correctIndex: 1,
    explanation: 'Eles trabalharam a noite toda de forma muito cansativa e não haviam pescado nada, até Jesus mandar jogar a rede novamente.',
    biblicalVerse: 'Lucas 5:5',
  },
  {
    id: 3,
    dayLabel: 'O Chamado',
    question: 'O que Jesus disse para Pedro que ele seria "pescador" a partir daquele momento?',
    options: ['"Você será pescador de baleias."', '"Você será pescador de pérolas."', '"Você será pescador de pessoas."', '"Você não será mais um pescador."'],
    correctIndex: 2,
    explanation: 'Jesus chamou Pedro com uma missão especial: em vez de peixes, ele agora buscaria pessoas para conhecerem o amor de Deus.',
    biblicalVerse: 'Lucas 5:10',
  },
  {
    id: 4,
    dayLabel: 'A Definição',
    question: 'O que significa ser um "discípulo"?',
    options: ['Alguém que já sabe tudo e não erra', 'Alguém que não precisa de amigos', 'Alguém que nunca sente medo', 'Alguém que aprende e segue um mestre'],
    correctIndex: 3,
    explanation: 'Ser discípulo significa estar disposto a seguir, observar, aprender com um Mestre (Jesus) e colocar em prática Seus ensinamentos.',
    biblicalVerse: '',
  },
  {
    id: 5,
    dayLabel: 'A Nossa Missão',
    question: 'O que precisamos ser para começarmos uma grande aventura seguindo a Deus?',
    options: ['Precisamos ser completamente perfeitos', 'Precisamos nunca mais ter medo na vida', 'Precisamos ser ricos e famosos', 'Precisamos estar dispostos a aprender, confiar e fazer o bem'],
    correctIndex: 3,
    explanation: 'Deus pode usar pessoas simples! Não precisamos ser perfeitos, apenas ter a coragem de começar, aprendendo e ajudando os outros.',
    biblicalVerse: '',
  }
];
