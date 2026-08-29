import { Scene, QuizQuestion } from '../types';

export const EPISODE_META_T2E5 = {
  id: 't2e5',
  title: 'Davi e Golias',
  subtitle: 'O pequeno que enfrentou um gigante',
  biblicalText: '1 Samuel 16–17',
  durationLabel: '15 min',
  moralLesson: 'O tamanho do problema não determina o tamanho da nossa coragem. Quando confiamos em Deus, podemos enfrentar desafios que parecem maiores do que nós.',
};

export const DAVI_GOLIAS_SCENES: Scene[] = [
  {
    id: 1,
    sceneNumber: 1,
    title: 'O Jovem Pastor',
    subtitle: 'No campo',
    biblicalRef: '1 Samuel 16:11',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'shepherd_field',
    musicTheme: 'david_theme',
    visualKey: 's2e5_01_shepherd',
    environmentSummary: 'Campo aberto, ovelhas, pássaros, vento.',
    musicDescription: 'Música suave, humilde e alegre.',
    soundEffects: ['field_sheep', 'nature_sounds', 'desert_wind'],
    directorLesson: 'Apresentar a simplicidade de Davi antes da glória.',
    lines: [
      {
        id: 's2e5_01_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Antes de enfrentar um gigante... Davi cuidava de ovelhas.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e5_01_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Era jovem. Passava grande parte dos seus dias nos campos.',
      },
      {
        id: 's2e5_01_l3',
        character: 'davi',
        characterLabel: 'Davi',
        text: 'Vamos, minhas ovelhinhas. Fiquem juntas.',
        emotionGuide: 'Carinhoso, jovem e atento'
      },
      {
        id: 's2e5_01_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas Davi não era apenas um pastor.',
      },
      {
        id: 's2e5_01_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele tinha um coração que confiava em Deus.',
      }
    ]
  },
  {
    id: 2,
    sceneNumber: 2,
    title: 'Samuel Procura o Escolhido',
    subtitle: 'Na casa de Jessé',
    biblicalRef: '1 Samuel 16:1-11',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'jesse_house',
    musicTheme: 'samuel_mystery',
    visualKey: 's2e5_02_samuel',
    environmentSummary: 'Ambiente rústico da casa de Jessé.',
    musicDescription: 'Música misteriosa de escolha.',
    soundEffects: ['nature_sounds'],
    directorLesson: 'Deus valoriza o interior sobre a força física.',
    lines: [
      {
        id: 's2e5_02_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Um dia, Deus enviou o profeta Samuel à casa de Jessé.',
      },
      {
        id: 's2e5_02_l2',
        character: 'god',
        characterLabel: 'Voz de Deus',
        text: 'Entre seus filhos está aquele que escolhi.',
      },
      {
        id: 's2e5_02_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Samuel viu o filho mais velho. Era forte. Parecia um grande guerreiro.',
      },
      {
        id: 's2e5_02_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas Deus mostrou:',
      },
      {
        id: 's2e5_02_l5',
        character: 'god',
        characterLabel: 'Voz de Deus',
        text: 'Não olhe apenas para a aparência. O Senhor vê o coração.',
      },
      {
        id: 's2e5_02_l6',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Samuel perguntou:',
      },
      {
        id: 's2e5_02_l7',
        character: 'samuel',
        characterLabel: 'Samuel',
        text: 'Você tem outros filhos?',
      },
      {
        id: 's2e5_02_l8',
        character: 'jesse',
        characterLabel: 'Jessé',
        text: 'Tenho mais um. Ele está cuidando das ovelhas.',
      }
    ]
  },
  {
    id: 3,
    sceneNumber: 3,
    title: 'Davi é Ungido',
    subtitle: 'O escolhido chega',
    biblicalRef: '1 Samuel 16:12-13',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'jesse_house',
    musicTheme: 'pure_serenity',
    visualKey: 's2e5_03_anointed',
    environmentSummary: 'Passos.',
    musicDescription: 'Música emocional crescendo suavemente.',
    soundEffects: ['nature_sounds'],
    directorLesson: 'O momento solene e calmo do início do propósito de Davi.',
    lines: [
      {
        id: 's2e5_03_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Davi entra.',
        soundCue: 'Passos se aproximando'
      },
      {
        id: 's2e5_03_l2',
        character: 'samuel',
        characterLabel: 'Samuel',
        text: 'É ele.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e5_03_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Então Samuel o ungiu.',
      },
      {
        id: 's2e5_03_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Naquele momento... uma nova etapa começou na vida de Davi.',
        soundCue: 'Música cresce suavemente'
      }
    ]
  },
  {
    id: 4,
    sceneNumber: 4,
    title: 'O Campo de Batalha',
    subtitle: 'O exército acampado',
    biblicalRef: '1 Samuel 17:1-3',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'battlefield',
    musicTheme: 'army_fear',
    visualKey: 's2e5_04_battlefield',
    environmentSummary: 'Acampamento militar, cavalos, armaduras, soldados.',
    musicDescription: 'Mudança brusca para percussão de guerra (tambores).',
    soundEffects: ['desert_wind'],
    directorLesson: 'Estabelecer a escala da guerra.',
    lines: [
      {
        id: 's2e5_04_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Enquanto isso... o exército de Israel estava diante dos filisteus.',
        soundCue: 'Tambores, armaduras batendo, cavalos e soldados'
      },
      {
        id: 's2e5_04_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os dois exércitos estavam preparados.',
      },
      {
        id: 's2e5_04_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas ninguém queria dar o primeiro passo.',
      }
    ]
  },
  {
    id: 5,
    sceneNumber: 5,
    title: 'O Gigante',
    subtitle: 'Golias',
    biblicalRef: '1 Samuel 17:4-10',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'battlefield',
    musicTheme: 'goliath_theme',
    visualKey: 's2e5_05_goliath',
    environmentSummary: 'Passos muito pesados estremecendo o chão.',
    musicDescription: 'Música extremamente grave e ameaçadora.',
    soundEffects: [],
    directorLesson: 'A ameaça imensa e intimidadora.',
    lines: [
      {
        id: 's2e5_05_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Então... um homem enorme saiu do acampamento dos filisteus.',
        soundCue: 'THUM. THUM. THUM. (passos muito pesados)',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e5_05_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Seu nome era Golias.',
      },
      {
        id: 's2e5_05_l3',
        character: 'golias',
        characterLabel: 'Golias',
        text: 'Quem virá lutar comigo? Escolham um homem!',
        emotionGuide: 'Voz extremamente grave, poderosa, intimidadora e arrogante'
      },
      {
        id: 's2e5_05_l4',
        character: 'golias',
        characterLabel: 'Golias',
        text: 'Se ele me vencer... nós serviremos a vocês.',
      },
      {
        id: 's2e5_05_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Durante muitos dias... Golias repetiu o desafio. E ninguém avançava.',
      }
    ]
  },
  {
    id: 6,
    sceneNumber: 6,
    title: 'O Medo dos Soldados',
    subtitle: 'Exército paralisado',
    biblicalRef: '1 Samuel 17:11',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'battlefield',
    musicTheme: 'army_fear',
    visualKey: 's2e5_06_fear',
    environmentSummary: 'Soldados conversando baixo, tensos.',
    musicDescription: 'Música de suspense opressivo.',
    soundEffects: ['desert_wind'],
    directorLesson: 'A inação e a covardia coletiva.',
    lines: [
      {
        id: 's2e5_06_l1',
        character: 'soldado',
        characterLabel: 'Soldado 1',
        text: 'Ele é enorme.',
        emotionGuide: 'Sussurrando com pavor'
      },
      {
        id: 's2e5_06_l2',
        character: 'soldado',
        characterLabel: 'Soldado 2',
        text: 'Ninguém consegue enfrentá-lo.',
      },
      {
        id: 's2e5_06_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os soldados estavam assustados. Até mesmo o rei Saul estava preocupado.',
      }
    ]
  },
  {
    id: 7,
    sceneNumber: 7,
    title: 'Davi Chega ao Acampamento',
    subtitle: 'Ouvindo o desafio',
    biblicalRef: '1 Samuel 17:20-23',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'battlefield',
    musicTheme: 'david_theme',
    visualKey: 's2e5_07_arrival',
    environmentSummary: 'Passos leves e aproximação ao acampamento.',
    musicDescription: 'Música leve, mas que muda rapidamente para tensão.',
    soundEffects: ['nature_sounds'],
    directorLesson: 'O contraste da ingenuidade pura de Davi chegando no meio do terror.',
    lines: [
      {
        id: 's2e5_07_l1',
        character: 'davi',
        characterLabel: 'Davi',
        text: 'Pai pediu que eu trouxesse comida para meus irmãos.',
        soundCue: 'Passos'
      },
      {
        id: 's2e5_07_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Davi chegou ao acampamento. Enquanto conversava... ouviu a voz de Golias.',
      },
      {
        id: 's2e5_07_l3',
        character: 'golias',
        characterLabel: 'Golias',
        text: 'Quem vai lutar comigo?',
        soundCue: 'Música muda para tensão grave'
      }
    ]
  },
  {
    id: 8,
    sceneNumber: 8,
    title: 'Davi Faz uma Pergunta',
    subtitle: 'Por que o medo?',
    biblicalRef: '1 Samuel 17:26',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'battlefield',
    musicTheme: 'samuel_mystery',
    visualKey: 's2e5_08_question',
    environmentSummary: 'Rumores entre os soldados.',
    musicDescription: 'Música de intriga e resolução.',
    soundEffects: ['desert_wind'],
    directorLesson: 'A fé genuína não compreende o medo irracional.',
    lines: [
      {
        id: 's2e5_08_l1',
        character: 'davi',
        characterLabel: 'Davi',
        text: 'Por que ninguém vai enfrentá-lo?',
      },
      {
        id: 's2e5_08_l2',
        character: 'soldado',
        characterLabel: 'Soldado',
        text: 'Você não entende. Ele é um guerreiro.',
      },
      {
        id: 's2e5_08_l3',
        character: 'davi',
        characterLabel: 'Davi',
        text: 'Mas... por que todos estão com medo?',
      },
      {
        id: 's2e5_08_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Davi não estava pensando apenas no tamanho de Golias. Estava pensando no tamanho de Deus.',
      }
    ]
  },
  {
    id: 9,
    sceneNumber: 9,
    title: 'Davi Fala com Saul',
    subtitle: 'Eu vou lutar',
    biblicalRef: '1 Samuel 17:32-37',
    durationLabel: '45 segundos',
    estimatedDurationSec: 45,
    ambientType: 'battlefield',
    musicTheme: 'david_courage',
    visualKey: 's2e5_09_saul',
    environmentSummary: 'Vento e a tenda do rei.',
    musicDescription: 'Música emocional de coragem imensa.',
    soundEffects: ['desert_wind'],
    directorLesson: 'A convicção tranquila que convence o rei.',
    lines: [
      {
        id: 's2e5_09_l1',
        character: 'davi',
        characterLabel: 'Davi',
        text: 'Eu vou lutar contra ele.',
        emotionGuide: 'Firme e calmo'
      },
      {
        id: 's2e5_09_l2',
        character: 'saul',
        characterLabel: 'Saul',
        text: 'Você? Você é apenas um jovem.',
        emotionGuide: 'Descrente, mas surpreso'
      },
      {
        id: 's2e5_09_l3',
        character: 'davi',
        characterLabel: 'Davi',
        text: 'Eu cuido das ovelhas do meu pai. Quando um animal atacava... eu precisava protegê-las.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e5_09_l4',
        character: 'davi',
        characterLabel: 'Davi',
        text: 'Deus me ajudou naquela época. E Ele pode me ajudar agora.',
      },
      {
        id: 's2e5_09_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Silêncio.',
      },
      {
        id: 's2e5_09_l6',
        character: 'saul',
        characterLabel: 'Saul',
        text: 'Então vá. Que o Senhor esteja com você.',
      }
    ]
  },
  {
    id: 10,
    sceneNumber: 10,
    title: 'A Armadura',
    subtitle: 'Muito pesada',
    biblicalRef: '1 Samuel 17:38-39',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'battlefield',
    musicTheme: 'david_courage',
    visualKey: 's2e5_10_armor',
    environmentSummary: 'Metal pesado batendo desajeitadamente.',
    musicDescription: 'Música recua um pouco, mostrando a simplicidade de Davi.',
    soundEffects: [],
    directorLesson: 'Davi rejeitando a confiança humana para confiar em Deus e nas suas próprias habilidades pastoris.',
    lines: [
      {
        id: 's2e5_10_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Saul tentou colocar sua própria armadura em Davi.',
        soundCue: 'Metal de armadura pesada sendo colocada'
      },
      {
        id: 's2e5_10_l2',
        character: 'davi',
        characterLabel: 'Davi',
        text: 'Não consigo lutar com isso. Não estou acostumado.',
        emotionGuide: 'Desconfortável, tentando se mover'
      },
      {
        id: 's2e5_10_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Davi tirou a armadura. Ele enfrentaria Golias do jeito que sabia.',
      },
      {
        id: 's2e5_10_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Com sua funda. E com sua confiança em Deus.',
      }
    ]
  },
  {
    id: 11,
    sceneNumber: 11,
    title: 'As Cinco Pedras',
    subtitle: 'No riacho',
    biblicalRef: '1 Samuel 17:40',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'stream_stones',
    musicTheme: 'david_theme',
    visualKey: 's2e5_11_stones',
    environmentSummary: 'Riacho calmo e pedras molhadas sendo recolhidas.',
    musicDescription: 'Música suave, pacífica antes da tempestade.',
    soundEffects: ['ocean_waters'],
    directorLesson: 'A calmaria focada de quem sabe o que vai fazer.',
    lines: [
      {
        id: 's2e5_11_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Davi foi até um riacho.',
      },
      {
        id: 's2e5_11_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Escolheu cinco pedras lisas.',
        soundCue: 'Pedras batendo suavemente ao serem pegas'
      },
      {
        id: 's2e5_11_l3',
        character: 'davi',
        characterLabel: 'Davi',
        text: 'Preciso apenas confiar.',
      },
      {
        id: 's2e5_11_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Colocou as pedras em sua bolsa. E voltou para o campo de batalha.',
      }
    ]
  },
  {
    id: 12,
    sceneNumber: 12,
    title: 'O Encontro',
    subtitle: 'Cara a cara',
    biblicalRef: '1 Samuel 17:41-47',
    durationLabel: '35 segundos',
    estimatedDurationSec: 35,
    ambientType: 'battlefield',
    musicTheme: 'goliath_theme',
    visualKey: 's2e5_12_meeting',
    environmentSummary: 'Passos pesados aproximando-se. Tensão absoluta.',
    musicDescription: 'Música muito tensa que colide com a música heroica.',
    soundEffects: ['desert_wind'],
    directorLesson: 'O choque de duas confianças: o orgulho humano vs fé em Deus.',
    lines: [
      {
        id: 's2e5_12_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Golias se aproxima.',
        soundCue: 'THUM. THUM. THUM. (passos lentos e pesados)'
      },
      {
        id: 's2e5_12_l2',
        character: 'golias',
        characterLabel: 'Golias',
        text: 'Você? Mandaram um menino?',
        emotionGuide: 'Zombando com desdém'
      },
      {
        id: 's2e5_12_l3',
        character: 'davi',
        characterLabel: 'Davi',
        text: 'Você vem contra mim com espada e lança. Mas eu vou contra você em nome do Senhor.',
        emotionGuide: 'Firme e sonoro. Sem hesitar.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e5_12_l4',
        character: 'golias',
        characterLabel: 'Golias',
        text: 'Venha!',
        emotionGuide: 'Grito de fúria'
      },
      {
        id: 's2e5_12_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A música explode.',
        soundCue: 'Explosão orquestral'
      }
    ]
  },
  {
    id: 13,
    sceneNumber: 13,
    title: 'Davi Corre',
    subtitle: 'A pedra lançada',
    biblicalRef: '1 Samuel 17:48-49',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'battlefield',
    musicTheme: 'sling_tension',
    visualKey: 's2e5_13_run',
    environmentSummary: 'Silêncio breve seguido de corrida rápida e o zumbido fatal da funda.',
    musicDescription: 'Música de suspense cinético subindo e cortando bruscamente.',
    soundEffects: ['desert_wind'],
    directorLesson: 'A velocidade e a surpresa da ação de Davi.',
    lines: [
      {
        id: 's2e5_13_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Silêncio breve.',
        soundCue: 'Silêncio total de 1s'
      },
      {
        id: 's2e5_13_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Davi não ficou parado. Ele correu.',
        soundCue: 'Passos rápidos de Davi correndo na areia'
      },
      {
        id: 's2e5_13_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Colocou uma pedra na funda. Girou.',
        soundCue: 'Zumbido forte da funda girando e cortando o ar'
      },
      {
        id: 's2e5_13_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Música para por um instante.',
        soundCue: 'Música silencia abruptamente'
      },
      {
        id: 's2e5_13_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'LANÇAMENTO.',
        soundCue: 'Pedra zunindo com precisão pelo ar'
      }
    ]
  },
  {
    id: 14,
    sceneNumber: 14,
    title: 'O Grande Momento',
    subtitle: 'O gigante cai',
    biblicalRef: '1 Samuel 17:49',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'battlefield',
    musicTheme: 'pure_serenity',
    visualKey: 's2e5_14_strike',
    environmentSummary: 'Impacto forte seguido do tremor do corpo gigante caindo e silêncio.',
    musicDescription: 'Silêncio.',
    soundEffects: ['desert_wind'],
    directorLesson: 'A ausência de trilha reforça o milagre. O mundo prende a respiração.',
    lines: [
      {
        id: 's2e5_14_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A pedra atingiu Golias.',
        soundCue: 'Forte impacto cinematográfico contido'
      },
      {
        id: 's2e5_14_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O gigante caiu.',
        soundCue: 'Estrondo sísmico de queda',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's2e5_14_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Por alguns segundos... ninguém acreditou no que tinha acontecido.',
      }
    ]
  },
  {
    id: 15,
    sceneNumber: 15,
    title: 'O Exército Reage',
    subtitle: 'A fuga',
    biblicalRef: '1 Samuel 17:51-52',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'battlefield',
    musicTheme: 'victory_celebration',
    visualKey: 's2e5_15_reaction',
    environmentSummary: 'Gritos de vitória do exército israelita.',
    musicDescription: 'Música explode vitoriosa.',
    soundEffects: ['desert_wind'],
    directorLesson: 'O alívio e a reversão instantânea da maré da batalha.',
    lines: [
      {
        id: 's2e5_15_l1',
        character: 'soldado',
        characterLabel: 'Soldado 1',
        text: 'Golias caiu!',
        emotionGuide: 'Exclamando incrédulo',
        soundCue: 'Surpresa coletiva crescendo'
      },
      {
        id: 's2e5_15_l2',
        character: 'soldado',
        characterLabel: 'Soldado 2',
        text: 'Ele venceu!',
        soundCue: 'Música explode em triunfo'
      },
      {
        id: 's2e5_15_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os israelitas perceberam que o gigante havia sido derrotado. E então... o medo desapareceu.',
      },
      {
        id: 's2e5_15_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os soldados avançaram.',
      }
    ]
  },
  {
    id: 16,
    sceneNumber: 16,
    title: 'A Vitória',
    subtitle: 'Não pela força',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'battlefield',
    musicTheme: 'victory_celebration',
    visualKey: 's2e5_16_victory',
    environmentSummary: 'Ventos da vitória.',
    musicDescription: 'Triunfante, mas pura.',
    soundEffects: ['desert_wind'],
    directorLesson: 'Focar na glória a Deus, não na destreza de Davi.',
    lines: [
      {
        id: 's2e5_16_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Davi havia vencido.',
      },
      {
        id: 's2e5_16_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Não porque fosse o mais forte. Mas porque confiou em Deus.',
      },
      {
        id: 's2e5_16_l3',
        character: 'davi',
        characterLabel: 'Davi',
        text: 'Glória a Deus!',
        emotionGuide: 'Feliz e aliviado'
      }
    ]
  },
  {
    id: 17,
    sceneNumber: 17,
    title: 'A Grande Lição',
    subtitle: 'Gigantes da vida',
    biblicalRef: '',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'desert_wind',
    musicTheme: 'gentle_teaching',
    visualKey: 's2e5_17_lesson',
    environmentSummary: 'Silêncio suave.',
    musicDescription: 'Música acolhedora.',
    soundEffects: [],
    directorLesson: 'Traduzir a batalha épica para os medos diários das crianças.',
    lines: [
      {
        id: 's2e5_17_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Talvez você também tenha um gigante na sua frente.',
      },
      {
        id: 's2e5_17_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Talvez seja algo que parece grande demais. Uma dificuldade. Uma tarefa. Um medo.',
      },
      {
        id: 's2e5_17_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma situação que faz você pensar: "Eu não consigo."',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e5_17_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas lembre-se de Davi.',
      },
      {
        id: 's2e5_17_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Não olhe apenas para o tamanho do problema. Olhe para o tamanho da sua fé.',
      }
    ]
  },
  {
    id: 18,
    sceneNumber: 18,
    title: 'Frase Final da Temporada',
    subtitle: 'A verdadeira coragem',
    biblicalRef: '',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'desert_wind',
    musicTheme: 'gentle_teaching',
    visualKey: 's2e5_18_phrase',
    environmentSummary: 'Vento e encerramento gentil.',
    musicDescription: 'Música emocional.',
    soundEffects: [],
    directorLesson: 'Entregar o grande sentimento de proteção que a Temporada prometeu.',
    lines: [
      {
        id: 's2e5_18_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Coragem não é acreditar que somos maiores que todos.',
      },
      {
        id: 's2e5_18_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Coragem é confiar em Deus mesmo quando somos pequenos.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e5_18_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E quando você enfrentar seu próprio gigante... lembre-se: Você não precisa enfrentá-lo sozinho.',
        soundCue: 'Música cresce'
      }
    ]
  },
  {
    id: 19,
    sceneNumber: 19,
    title: 'Grande Montagem da Temporada 2',
    subtitle: 'Retrospectiva das aventuras',
    biblicalRef: '',
    durationLabel: '45 segundos',
    estimatedDurationSec: 45,
    ambientType: 'season_finale_montage',
    musicTheme: 'season_montage',
    visualKey: 's2e5_19_montage',
    environmentSummary: 'Fragmentos sonoros da temporada.',
    musicDescription: 'Música épica une os temas de todos os grandes episódios.',
    soundEffects: ['desert_wind', 'ocean_waters', 'nature_sounds'],
    directorLesson: 'Evocar nostalgia imediata e sensação de dever cumprido na jornada bíblica.',
    lines: [
      {
        id: 's2e5_19_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Nesta temporada... vimos José enfrentar dificuldades.',
      },
      {
        id: 's2e5_19_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Vimos Moisés ouvir o chamado de Deus.',
      },
      {
        id: 's2e5_19_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Vimos o mar se abrir.',
        soundCue: 'Som de vento e águas caindo'
      },
      {
        id: 's2e5_19_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Vimos muralhas caírem.',
        soundCue: 'Trombetas distantes e pedras rolando'
      },
      {
        id: 's2e5_19_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E agora... vimos um jovem enfrentar um gigante.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e5_19_l6',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Grandes aventuras. Grandes desafios. E acima de tudo... um grande Deus.',
      }
    ]
  },
  {
    id: 20,
    sceneNumber: 20,
    title: 'Preparação para a Temporada 3',
    subtitle: 'Uma promessa',
    biblicalRef: '',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'season_finale_montage',
    musicTheme: 'jesus_hook',
    visualKey: 's2e5_20_hook',
    environmentSummary: 'Vento suave e noturno.',
    musicDescription: 'O tema se transforma em algo sagrado e misterioso.',
    soundEffects: ['desert_night'],
    directorLesson: 'Criar curiosidade monumental para o Novo Testamento.',
    lines: [
      {
        id: 's2e5_20_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas nossa jornada pela Bíblia ainda está apenas começando.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e5_20_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma nova história está chegando.',
        soundCue: 'Vento suave e cristalino'
      },
      {
        id: 's2e5_20_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma história que mudaria o mundo para sempre.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e5_20_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Um bebê. Uma promessa. Uma estrela.',
        soundCue: 'Música cresce'
      },
      {
        id: 's2e5_20_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Um menino chamado Jesus.',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's2e5_20_l6',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Na próxima temporada... vamos conhecer a história de Jesus.',
        soundCue: 'Música termina em suspense suave'
      }
    ]
  },
  {
    id: 21,
    sceneNumber: 21,
    title: 'Encerramento da Temporada',
    subtitle: 'A aventura continua',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'desert_wind',
    musicTheme: 'gentle_teaching',
    visualKey: 's2e5_21_closing',
    environmentSummary: 'Música emocional de despedida.',
    musicDescription: 'Calma e gratificante.',
    soundEffects: [],
    directorLesson: 'Fechar o ciclo heroico e acalmar o coração do ouvinte.',
    lines: [
      {
        id: 's2e5_21_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E assim termina a nossa segunda temporada.',
      },
      {
        id: 's2e5_21_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a aventura continua.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e5_21_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Porque a Bíblia está cheia de histórias... de pessoas que confiaram em Deus... e descobriram que a fé pode transformar uma vida.',
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
    visualKey: 's2e5_22_outro',
    environmentSummary: 'Logotipo sonoro',
    musicDescription: 'A trilha épica diminui. Entra o tema musical alegre.',
    soundEffects: ['toon_tales_jingle'],
    directorLesson: 'Assinatura vibrante de término oficial.',
    lines: [
      {
        id: 's2e5_22_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E essa foi mais uma aventura da Bíblia em Áudio.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e5_22_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a história ainda não terminou...',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's2e5_22_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma nova aventura está esperando por você.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e5_22_l4',
        character: 'child',
        characterLabel: 'Crianças',
        text: 'TOON TALES KIDS!',
        emotionGuide: 'Em coro feliz e forte'
      },
      {
        id: 's2e5_22_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Histórias que ensinam, aventuras que transformam!',
      }
    ]
  },
  {
    id: 23,
    sceneNumber: 23,
    title: 'Pós-Créditos',
    subtitle: 'Uma estrela vai brilhar',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'desert_night',
    musicTheme: 'jesus_hook',
    visualKey: 's2e5_23_post_credits',
    environmentSummary: 'Brilho estelar e suspense.',
    musicDescription: 'Uma única nota longa e luminosa.',
    soundEffects: [],
    directorLesson: 'A cena secreta pós-créditos prometendo o Novo Testamento.',
    lines: [
      {
        id: 's2e5_23_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Na próxima temporada... uma estrela vai brilhar.',
        emotionGuide: 'Sussurrando como um grande segredo'
      },
      {
        id: 's2e5_23_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma criança nascerá.',
      },
      {
        id: 's2e5_23_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E o mundo conhecerá...',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 1.5,
      },
      {
        id: 's2e5_23_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus.',
        soundCue: 'Fade out lento'
      }
    ]
  }
];

export const DAVI_GOLIAS_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    dayLabel: 'O Escolhido',
    question: 'Qual era o trabalho de Davi antes do profeta Samuel chegar à casa do seu pai?',
    options: ['Ele era um general do exército', 'Ele construía casas de pedra', 'Ele era um jovem pastor que cuidava de ovelhas', 'Ele tocava trombetas no palácio'],
    correctIndex: 2,
    explanation: 'Davi era jovem e cuidava das ovelhas de seu pai nos campos quando Deus o escolheu.',
    biblicalVerse: '1 Samuel 16:11',
  },
  {
    id: 2,
    dayLabel: 'O Coração',
    question: 'O que Deus ensinou ao profeta Samuel quando ele estava escolhendo o novo rei?',
    options: ['Que o escolhido deveria ser o mais forte', 'Que Deus não olha a aparência, mas vê o coração', 'Que o rei precisa ter uma espada brilhante', 'Que o rei deveria ser o irmão mais velho'],
    correctIndex: 1,
    explanation: 'O homem vê o exterior, mas Deus vê o coração e as intenções de quem O ama.',
    biblicalVerse: '1 Samuel 16:7',
  },
  {
    id: 3,
    dayLabel: 'A Confiança',
    question: 'Por que Davi rejeitou vestir a pesada armadura do rei Saul para enfrentar o gigante?',
    options: ['Porque a armadura era muito feia', 'Porque não estava acostumado com a armadura e preferiu confiar em Deus', 'Porque a armadura era muito pequena para ele', 'Porque ele queria lutar de mãos vazias'],
    correctIndex: 1,
    explanation: 'Davi tentou vestir a armadura, mas não conseguiu andar. Ele escolheu lutar do jeito que sabia, confiando que Deus o protegeria.',
    biblicalVerse: '1 Samuel 17:39',
  },
  {
    id: 4,
    dayLabel: 'As Armas',
    question: 'O que Davi usou para lutar contra o terrível gigante Golias?',
    options: ['Uma grande lança de ouro', 'Uma rede gigante para prendê-lo', 'Sua funda e cinco pedras lisas do riacho', 'O exército inteiro de Israel'],
    correctIndex: 2,
    explanation: 'Davi foi até o riacho, escolheu 5 pedras lisas, colocou na sua bolsa de pastor e usou apenas sua funda para a batalha.',
    biblicalVerse: '1 Samuel 17:40',
  },
  {
    id: 5,
    dayLabel: 'O Confronto',
    question: 'O que Davi respondeu quando Golias zombou dele no campo de batalha?',
    options: ['"Eu vou fugir!"', '"Eu tenho mais pedras que você!"', '"Eu vou contra você em nome do Senhor, o Deus de Israel!"', '"Meu irmão é mais forte que você!"'],
    correctIndex: 2,
    explanation: 'Davi não confiou na sua própria força, mas proclamou corajosamente que iria enfrentar o gigante em nome do Senhor Todo-Poderoso.',
    biblicalVerse: '1 Samuel 17:45',
  }
];
