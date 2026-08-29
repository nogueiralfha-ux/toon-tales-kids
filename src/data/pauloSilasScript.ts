import { Scene, QuizQuestion } from '../types';

export const EPISODE_META_T4E5 = {
  id: 't4e5',
  title: 'Paulo e Silas',
  subtitle: 'Quando o louvor ecoou na prisão',
  biblicalText: 'Atos 16:16 a 40',
  durationLabel: '20 min',
  moralLesson: 'Paulo e Silas mostraram que a esperança pode permanecer viva mesmo nos momentos mais difíceis.',
};

export const PAULO_SILAS_SCENES: Scene[] = [
  {
    id: 1,
    sceneNumber: 1,
    title: 'Abertura',
    subtitle: 'Filipos',
    biblicalRef: 'Atos 16:11-12',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'philippi_street',
    musicTheme: 'mission_adventure',
    visualKey: 's4e5_01_intro',
    environmentSummary: 'Estrada, passos, vento, e depois uma cidade movimentada.',
    musicDescription: 'Música de aventura animada.',
    soundEffects: ['footsteps', 'wind_breeze', 'city_street'],
    directorLesson: 'Estabelecer a continuidade da grande viagem.',
    lines: [
      {
        id: 's4e5_01_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Paulo estava viajando para anunciar a mensagem de Jesus.',
      },
      {
        id: 's4e5_01_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Em uma dessas viagens... ele chegou a uma cidade chamada Filipos.',
      }
    ]
  },
  {
    id: 2,
    sceneNumber: 2,
    title: 'Uma Situação Difícil',
    subtitle: 'A jovem escravizada',
    biblicalRef: 'Atos 16:16',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'philippi_street',
    musicTheme: 'introspective',
    visualKey: 's4e5_02_problem',
    environmentSummary: 'A cidade ao fundo, atmosfera de compaixão.',
    musicDescription: 'A música se torna empática.',
    soundEffects: [],
    directorLesson: 'Explicar a situação sem ser assustador, com foco na exploração da moça.',
    lines: [
      {
        id: 's4e5_02_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Naquela cidade havia uma jovem escravizada. Ela sofria por causa de uma influência espiritual que a controlava.',
      },
      {
        id: 's4e5_02_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ela era explorada por pessoas que ganhavam dinheiro com sua situação.',
      }
    ]
  },
  {
    id: 3,
    sceneNumber: 3,
    title: 'Paulo Percebe',
    subtitle: 'O clamor',
    biblicalRef: 'Atos 16:17-18',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'philippi_street',
    musicTheme: 'tense_minimal',
    visualKey: 's4e5_03_paul_sees',
    environmentSummary: 'Voz da jovem distante.',
    musicDescription: 'Música traz leve tensão de conflito que precisa ser resolvido.',
    soundEffects: ['footsteps'],
    directorLesson: 'O incômodo do apóstolo perante o mal.',
    lines: [
      {
        id: 's4e5_03_l1',
        character: 'jovem',
        characterLabel: 'Jovem',
        text: 'Estes homens anunciam o caminho da salvação!',
        emotionGuide: 'Voz angustiada'
      },
      {
        id: 's4e5_03_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ela continuou fazendo isso por vários dias.',
      },
      {
        id: 's4e5_03_l3',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Isso precisa parar.',
        emotionGuide: 'Sério, cheio de compaixão'
      }
    ]
  },
  {
    id: 4,
    sceneNumber: 4,
    title: 'A Ação',
    subtitle: 'A Libertação',
    biblicalRef: 'Atos 16:18',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'philippi_street',
    musicTheme: 'hope_theme',
    visualKey: 's4e5_04_paul_acts',
    environmentSummary: 'O silêncio do milagre seguido de respiração aliviada.',
    musicDescription: 'Música séria vira música muito suave de paz.',
    soundEffects: ['wind_breeze'],
    directorLesson: 'Não criar exorcisos assustadores. Fazer um milagre sereno que traz paz.',
    lines: [
      {
        id: 's4e5_04_l1',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Em nome de Jesus Cristo... saia dela.',
        emotionGuide: 'Com autoridade firme'
      },
      {
        id: 's4e5_04_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E naquele momento... a jovem ficou livre daquela influência.',
      }
    ]
  },
  {
    id: 5,
    sceneNumber: 5,
    title: 'A Fúria',
    subtitle: 'Prejuízo',
    biblicalRef: 'Atos 16:19',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'philippi_street',
    musicTheme: 'tense_minimal',
    visualKey: 's4e5_05_angry_owners',
    environmentSummary: 'Sons de agitação e passos agressivos.',
    musicDescription: 'Tensão reaparece com urgência.',
    soundEffects: ['footsteps_running'],
    directorLesson: 'O conflito real começa pelo egoísmo e dinheiro.',
    lines: [
      {
        id: 's4e5_05_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas os homens que lucravam com aquela situação ficaram furiosos.',
      },
      {
        id: 's4e5_05_l2',
        character: 'dono',
        characterLabel: 'Dono',
        text: 'Agora perdemos nossa fonte de dinheiro!',
        emotionGuide: 'Furioso'
      },
      {
        id: 's4e5_05_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles arrastaram Paulo e Silas até as autoridades.',
      }
    ]
  },
  {
    id: 6,
    sceneNumber: 6,
    title: 'A Multidão',
    subtitle: 'Acusação',
    biblicalRef: 'Atos 16:20-22',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'philippi_street',
    musicTheme: 'tense_minimal',
    visualKey: 's4e5_06_crowd',
    environmentSummary: 'Multidão irada e gritando.',
    musicDescription: 'Bateria e tensão.',
    soundEffects: ['crowd_murmur_surprised'],
    directorLesson: 'A injustiça cega das massas.',
    lines: [
      {
        id: 's4e5_06_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A multidão se voltou contra eles. Paulo e Silas foram acusados injustamente.',
      }
    ]
  },
  {
    id: 7,
    sceneNumber: 7,
    title: 'A Prisão',
    subtitle: 'Feridos e Cansados',
    biblicalRef: 'Atos 16:23-24',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'philippi_prison',
    musicTheme: 'introspective',
    visualKey: 's4e5_07_prison',
    environmentSummary: 'Portas pesadas, correntes, escuridão.',
    musicDescription: 'Música triste e sombria.',
    soundEffects: ['prison_door_close'],
    directorLesson: 'O fundo do poço. O momento de provação extrema dos nossos heróis.',
    lines: [
      {
        id: 's4e5_07_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles foram presos.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e5_07_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E naquela noite... Paulo e Silas estavam machucados e cansados.',
      }
    ]
  },
  {
    id: 8,
    sceneNumber: 8,
    title: 'A Escolha',
    subtitle: 'Vamos orar',
    biblicalRef: 'Atos 16:25',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'philippi_prison',
    musicTheme: 'introspective',
    visualKey: 's4e5_08_choice',
    environmentSummary: 'Silêncio da prisão quebrado pelos sussurros deles.',
    musicDescription: 'Música no mínimo.',
    soundEffects: [],
    directorLesson: 'A conversa humana antes da atitude divina.',
    lines: [
      {
        id: 's4e5_08_l1',
        character: 'silas',
        characterLabel: 'Silas',
        text: 'Paulo...',
        emotionGuide: 'Voz cansada, dolorida'
      },
      {
        id: 's4e5_08_l2',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Sim?',
      },
      {
        id: 's4e5_08_l3',
        character: 'silas',
        characterLabel: 'Silas',
        text: 'Estamos presos.',
      },
      {
        id: 's4e5_08_l4',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Eu sei.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e5_08_l5',
        character: 'silas',
        characterLabel: 'Silas',
        text: 'O que vamos fazer?',
      },
      {
        id: 's4e5_08_l6',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Vamos orar.',
        emotionGuide: 'Respirando fundo'
      }
    ]
  },
  {
    id: 9,
    sceneNumber: 9,
    title: 'O Louvor',
    subtitle: 'Cânticos na Noite',
    biblicalRef: 'Atos 16:25',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'philippi_prison',
    musicTheme: 'praise_night',
    visualKey: 's4e5_09_praise',
    environmentSummary: 'Uma melodia começa fraca e ganha esperança.',
    musicDescription: 'Tudo começa com um piano muito suave e vozes acapella, e cresce.',
    soundEffects: [],
    directorLesson: 'O momento que dá nome ao episódio. Um milagre de atitude.',
    lines: [
      {
        id: 's4e5_09_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'À meia-noite... Paulo e Silas começaram a orar. E também cantaram louvores a Deus.',
      },
      {
        id: 's4e5_09_l2',
        character: 'silas',
        characterLabel: 'Silas',
        text: 'Mesmo aqui...',
      },
      {
        id: 's4e5_09_l3',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Mesmo aqui.',
      }
    ]
  },
  {
    id: 10,
    sceneNumber: 10,
    title: 'Eles Ouvem',
    subtitle: 'O Testemunho',
    biblicalRef: 'Atos 16:25',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'philippi_prison',
    musicTheme: 'praise_night',
    visualKey: 's4e5_10_others_listen',
    environmentSummary: 'Os ecos do louvor percorrendo os corredores escuros.',
    musicDescription: 'A música ganha encorpo (cordas).',
    soundEffects: [],
    directorLesson: 'Mostrar que a atitude influencia outras pessoas ao redor.',
    lines: [
      {
        id: 's4e5_10_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os outros presos estavam ouvindo.',
      },
      {
        id: 's4e5_10_l2',
        character: 'pessoa1',
        characterLabel: 'Preso 1',
        text: 'O que eles estão cantando?'
      },
      {
        id: 's4e5_10_l3',
        character: 'pessoa2',
        characterLabel: 'Preso 2',
        text: 'Não sei... Mas eles não parecem ter perdido a esperança.'
      }
    ]
  },
  {
    id: 11,
    sceneNumber: 11,
    title: 'O Terremoto',
    subtitle: 'A Resposta',
    biblicalRef: 'Atos 16:26',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'philippi_prison',
    musicTheme: 'earthquake_wonder',
    visualKey: 's4e5_11_earthquake',
    environmentSummary: 'Tremor começa baixo e explode em uma grande onda sonora.',
    musicDescription: 'O impacto orquestral grandioso (não sombrio, mas de milagre).',
    soundEffects: ['earthquake_rumble', 'rocks_falling'],
    directorLesson: 'O poder de Deus invadindo a prisão.',
    lines: [
      {
        id: 's4e5_11_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'De repente... a terra começou a tremer.',
      },
      {
        id: 's4e5_11_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Foi um grande terremoto. Os alicerces da prisão foram abalados.',
      }
    ]
  },
  {
    id: 12,
    sceneNumber: 12,
    title: 'Portas Abertas',
    subtitle: 'Livres',
    biblicalRef: 'Atos 16:26',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'philippi_prison',
    musicTheme: 'earthquake_wonder',
    visualKey: 's4e5_12_doors_open',
    environmentSummary: 'Sons de metal pesado se soltando.',
    musicDescription: 'A música de maravilha cresce.',
    soundEffects: ['prison_door_close'],
    directorLesson: 'A liberdade física acontece.',
    lines: [
      {
        id: 's4e5_12_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'As portas se abriram. E as correntes se soltaram.',
      }
    ]
  },
  {
    id: 13,
    sceneNumber: 13,
    title: 'O Carcereiro',
    subtitle: 'Desespero',
    biblicalRef: 'Atos 16:27',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'philippi_prison',
    musicTheme: 'tense_minimal',
    visualKey: 's4e5_13_jailer_wakes',
    environmentSummary: 'Passos apressados do carcereiro em pânico.',
    musicDescription: 'O medo do guarda de perder sua vida pela falha.',
    soundEffects: ['footsteps_running'],
    directorLesson: 'Desespero pela vida.',
    lines: [
      {
        id: 's4e5_13_l1',
        character: 'carcereiro',
        characterLabel: 'Carcereiro',
        text: 'Meu Deus! Os presos!',
        emotionGuide: 'Pânico total'
      },
      {
        id: 's4e5_13_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O carcereiro acordou... e pensou que todos haviam fugido.',
      }
    ]
  },
  {
    id: 14,
    sceneNumber: 14,
    title: 'A Prevenção',
    subtitle: 'Cuidado!',
    biblicalRef: 'Atos 16:28',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'philippi_prison',
    musicTheme: 'tense_minimal',
    visualKey: 's4e5_14_tragedy_prevented',
    environmentSummary: 'Silêncio abrupto cortado pelo grito de compaixão de Paulo.',
    musicDescription: 'Tensão cessa após o grito.',
    soundEffects: [],
    directorLesson: 'Uma cena muito delicada para crianças. Focar apenas que Paulo salvou o homem de se ferir.',
    lines: [
      {
        id: 's4e5_14_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele pensou que havia perdido os presos. Mas Paulo gritou:',
      },
      {
        id: 's4e5_14_l2',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Não faça nenhum mal a você! Estamos todos aqui!',
        emotionGuide: 'Forte, com amor e urgência'
      }
    ]
  },
  {
    id: 15,
    sceneNumber: 15,
    title: 'Surpresa Total',
    subtitle: 'Choque do Guarda',
    biblicalRef: 'Atos 16:29',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'philippi_prison',
    musicTheme: 'emotional_climax',
    visualKey: 's4e5_15_jailer_surprised',
    environmentSummary: 'Respiração ofegante do guarda acalmando.',
    musicDescription: 'Música emocional assume a cena.',
    soundEffects: [],
    directorLesson: 'O impacto de ser salvo por quem você prendeu.',
    lines: [
      {
        id: 's4e5_15_l1',
        character: 'carcereiro',
        characterLabel: 'Carcereiro',
        text: 'Vocês... ainda estão aqui?',
        emotionGuide: 'Trêmulo'
      },
      {
        id: 's4e5_15_l2',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Estamos.',
      },
      {
        id: 's4e5_15_l3',
        character: 'carcereiro',
        characterLabel: 'Carcereiro',
        text: 'Por quê?',
        emotionGuide: 'Incrédulo e comovido'
      }
    ]
  },
  {
    id: 16,
    sceneNumber: 16,
    title: 'A Pergunta',
    subtitle: 'Salvação',
    biblicalRef: 'Atos 16:30-31',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'philippi_prison',
    musicTheme: 'emotional_climax',
    visualKey: 's4e5_16_great_question',
    environmentSummary: 'Atmosfera de revelação.',
    musicDescription: 'O ponto mais doce do episódio.',
    soundEffects: [],
    directorLesson: 'A grande salvação.',
    lines: [
      {
        id: 's4e5_16_l1',
        character: 'carcereiro',
        characterLabel: 'Carcereiro',
        text: 'Senhores... o que devo fazer para ser salvo?',
      },
      {
        id: 's4e5_16_l2',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Creia no Senhor Jesus.',
      },
      {
        id: 's4e5_16_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E Paulo e Silas explicaram a mensagem de Jesus.',
      }
    ]
  },
  {
    id: 17,
    sceneNumber: 17,
    title: 'O Cuidado',
    subtitle: 'Na casa do Carcereiro',
    biblicalRef: 'Atos 16:33',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'jailer_house',
    musicTheme: 'hope_theme',
    visualKey: 's4e5_17_jailer_cares',
    environmentSummary: 'Sons de água, lavando as feridas, ambiente doméstico.',
    musicDescription: 'A bondade gerando frutos práticos.',
    soundEffects: ['water_splash', 'door_open'],
    directorLesson: 'O inimigo se torna cuidador.',
    lines: [
      {
        id: 's4e5_17_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O carcereiro levou Paulo e Silas para sua casa. E cuidou deles.',
      },
      {
        id: 's4e5_17_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Naquela noite... ele e sua família ouviram a mensagem.',
      }
    ]
  },
  {
    id: 18,
    sceneNumber: 18,
    title: 'Uma Nova Família',
    subtitle: 'Transformados',
    biblicalRef: 'Atos 16:33-34',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'jailer_house',
    musicTheme: 'hope_theme',
    visualKey: 's4e5_18_new_family',
    environmentSummary: 'Clima de festa de salvação.',
    musicDescription: 'Música alegre de conforto.',
    soundEffects: [],
    directorLesson: 'A família toda aceita Jesus.',
    lines: [
      {
        id: 's4e5_18_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E naquela mesma noite... o carcereiro e sua família decidiram seguir Jesus.',
      }
    ]
  },
  {
    id: 19,
    sceneNumber: 19,
    title: 'Mesa Compartilhada',
    subtitle: 'Refeição de amigos',
    biblicalRef: 'Atos 16:34',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'jailer_house',
    musicTheme: 'hope_theme',
    visualKey: 's4e5_19_shared_table',
    environmentSummary: 'Comida, pratos, água, conversas animadas.',
    musicDescription: 'A comunhão perfeita.',
    soundEffects: ['crowd_murmur_surprised'],
    directorLesson: 'Mostrar a inversão de papéis causada pelo amor de Cristo.',
    lines: [
      {
        id: 's4e5_19_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Aquele homem que antes era responsável pela prisão... agora estava cuidando daqueles que estavam presos.',
      },
      {
        id: 's4e5_19_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Que mudança!',
      }
    ]
  },
  {
    id: 20,
    sceneNumber: 20,
    title: 'A Manhã',
    subtitle: 'Livre',
    biblicalRef: 'Atos 16:35-36',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'philippi_street',
    musicTheme: 'hope_theme',
    visualKey: 's4e5_20_morning',
    environmentSummary: 'Manhã de sol, passarinhos.',
    musicDescription: 'Música de amanhecer.',
    soundEffects: ['city_street'],
    directorLesson: 'O raiar de um novo dia após uma noite difícil.',
    lines: [
      {
        id: 's4e5_20_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Quando amanheceu... as autoridades enviaram uma mensagem dizendo que Paulo e Silas poderiam sair.',
      }
    ]
  },
  {
    id: 21,
    sceneNumber: 21,
    title: 'Direitos',
    subtitle: 'Um Erro',
    biblicalRef: 'Atos 16:37',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'philippi_street',
    musicTheme: 'mission_adventure',
    visualKey: 's4e5_21_rights',
    environmentSummary: 'O retorno à jornada pública.',
    musicDescription: 'O tema da missão retorna de forma pacífica.',
    soundEffects: [],
    directorLesson: 'O respeito que eles exigiram.',
    lines: [
      {
        id: 's4e5_21_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Paulo explicou que eles haviam sido tratados injustamente. Ele não queria apenas sair. Queria que as autoridades reconhecessem o erro.',
      }
    ]
  },
  {
    id: 22,
    sceneNumber: 22,
    title: 'Despedida',
    subtitle: 'Encorajando os irmãos',
    biblicalRef: 'Atos 16:40',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'philippi_street',
    musicTheme: 'mission_adventure',
    visualKey: 's4e5_22_farewell',
    environmentSummary: 'Eles pegando suas coisas e voltando à estrada.',
    musicDescription: 'A missão avança.',
    soundEffects: ['footsteps'],
    directorLesson: 'Mesmo pós dor, eles animam os outros.',
    lines: [
      {
        id: 's4e5_22_l1',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Continuem firmes.',
      },
      {
        id: 's4e5_22_l2',
        character: 'silas',
        characterLabel: 'Silas',
        text: 'Deus está com vocês.',
      },
      {
        id: 's4e5_22_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Depois de encorajar os irmãos... Paulo e Silas seguiram viagem.',
      }
    ]
  },
  {
    id: 23,
    sceneNumber: 23,
    title: 'Lição',
    subtitle: 'Escolhas na dor',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'philippi_street',
    musicTheme: 'hope_theme',
    visualKey: 's4e5_23_lesson',
    environmentSummary: 'Tempo para a criança entender a aplicação.',
    musicDescription: 'Música maternal/paternal.',
    soundEffects: [],
    directorLesson: 'As nossas atitudes nas provações.',
    lines: [
      {
        id: 's4e5_23_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Paulo e Silas estavam em uma situação muito difícil. Mas escolheram orar. Escolheram cantar. E escolheram tratar o carcereiro com compaixão.',
      }
    ]
  },
  {
    id: 24,
    sceneNumber: 24,
    title: 'A Escolha é Sua',
    subtitle: 'Quando algo dá errado',
    biblicalRef: '',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'philippi_street',
    musicTheme: 'hope_theme',
    visualKey: 's4e5_24_important_choice',
    environmentSummary: 'Conselhos suaves.',
    musicDescription: 'A canção os abraça.',
    soundEffects: [],
    directorLesson: 'Conselhos práticos.',
    lines: [
      {
        id: 's4e5_24_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Quando algo dá errado... podemos escolher reclamar... ou podemos procurar esperança.',
      },
      {
        id: 's4e5_24_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Podemos pedir ajuda. Podemos orar. Podemos fazer o bem.',
      }
    ]
  },
  {
    id: 25,
    sceneNumber: 25,
    title: 'Frase Marcante',
    subtitle: 'Uma porta fechada',
    biblicalRef: '',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'philippi_street',
    musicTheme: 'emotional_climax',
    visualKey: 's4e5_25_phrase',
    environmentSummary: 'O auge moral.',
    musicDescription: 'A emoção máxima.',
    soundEffects: [],
    directorLesson: 'A grande lição poética do episódio.',
    lines: [
      {
        id: 's4e5_25_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma prisão podia fechar uma porta... mas não podia fechar a esperança.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e5_25_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E quando a esperança permanece... até uma noite difícil pode se transformar em uma nova história.',
      }
    ]
  },
  {
    id: 26,
    sceneNumber: 26,
    title: 'Montagem Final',
    subtitle: 'A missão avança',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'ship_deck',
    musicTheme: 'epic_orchestral',
    visualKey: 's4e5_26_montage',
    environmentSummary: 'Sons do mar distante.',
    musicDescription: 'A aventura épica volta a bater forte.',
    soundEffects: ['footsteps', 'sea_waves'],
    directorLesson: 'Início do tema marítimo final.',
    lines: [
      {
        id: 's4e5_26_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Paulo continuaria viajando. Continuaria anunciando Jesus. E continuaria enfrentando desafios. Mas uma grande viagem ainda estava por vir.',
      }
    ]
  },
  {
    id: 27,
    sceneNumber: 27,
    title: 'O Gancho',
    subtitle: 'Roma e a Tempestade',
    biblicalRef: 'Atos 27',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'ship_deck',
    musicTheme: 'sea_adventure',
    visualKey: 's4e5_27_hook',
    environmentSummary: 'As madeiras do navio rangendo e o vento da tempestade levantando com fúria.',
    musicDescription: 'O mar traz suspense e medo gigantesco.',
    soundEffects: ['sea_waves', 'wind_breeze'],
    directorLesson: 'A promessa da maior aventura náutica de todas.',
    lines: [
      {
        id: 's4e5_27_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Um dia... Paulo embarcaria em um navio rumo a Roma.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e5_27_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas aquela viagem seria muito diferente do que ele imaginava.',
      },
      {
        id: 's4e5_27_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Porque no meio do mar... uma enorme tempestade estava esperando.',
      }
    ]
  },
  {
    id: 28,
    sceneNumber: 28,
    title: 'Próximo Episódio',
    subtitle: 'Paulo Viaja para Roma',
    biblicalRef: '',
    durationLabel: '10 segundos',
    estimatedDurationSec: 10,
    ambientType: 'ship_deck',
    musicTheme: 'sea_adventure',
    visualKey: 's4e5_28_next',
    environmentSummary: 'O mar engole o som.',
    musicDescription: 'Suspense brutal cortado para o fim.',
    soundEffects: ['sea_waves'],
    directorLesson: 'O clímax eletrizante.',
    lines: [
      {
        id: 's4e5_28_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'No próximo episódio... Paulo Viaja para Roma. Uma viagem rumo à capital imperial.',
      }
    ]
  },
  {
    id: 29,
    sceneNumber: 29,
    title: 'Assinatura',
    subtitle: 'Toon Tales Kids',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'toon_tales_jingle',
    musicTheme: 'signature_jingle',
    visualKey: 's4e5_29_outro',
    environmentSummary: 'O encerramento oficial acolhedor.',
    musicDescription: 'Alegria e a assinatura clássica da série.',
    soundEffects: ['toon_tales_jingle'],
    directorLesson: 'Voltar ao tom radiante de encerramento.',
    lines: [
      {
        id: 's4e5_29_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E essa foi mais uma aventura da Bíblia em Áudio.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e5_29_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a história ainda não terminou...',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's4e5_29_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma nova aventura está esperando por você.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e5_29_l4',
        character: 'child',
        characterLabel: 'Crianças',
        text: 'TOON TALES KIDS!',
        emotionGuide: 'Em coro feliz e forte'
      },
      {
        id: 's4e5_29_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Histórias que ensinam, aventuras que transformam!',
      }
    ]
  }
];

export const PAULO_SILAS_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    dayLabel: 'O Encontro',
    question: 'Em Filipos, Paulo e Silas foram injustamente presos porque Paulo ajudou uma jovem escravizada. O que eles fizeram no meio da noite?',
    options: ['Eles ficaram reclamando de tudo', 'Eles oraram e cantaram louvores a Deus', 'Eles conseguiram uma chave secreta e fugiram sozinhos', 'Eles culparam a Deus pela situação deles'],
    correctIndex: 1,
    explanation: 'Mesmo doloridos e no escuro da prisão, eles fizeram uma escolha: orar e louvar! Eles não deixaram que a prisão roubasse a esperança deles.',
    biblicalVerse: 'Atos 16:25',
  },
  {
    id: 2,
    dayLabel: 'O Terremoto',
    question: 'Enquanto Paulo e Silas cantavam, o que aconteceu na prisão?',
    options: ['Um grande terremoto abalou as portas e as correntes caíram', 'Um tornado levou o telhado', 'O carcereiro abriu a porta porque achou a música bonita', 'Começou a chover dentro da cela'],
    correctIndex: 0,
    explanation: 'Deus agiu com poder! A terra tremeu e todas as correntes se soltaram milagrosamente!',
    biblicalVerse: 'Atos 16:26',
  },
  {
    id: 3,
    dayLabel: 'O Carcereiro em Desespero',
    question: 'O carcereiro acordou e achou que todos os presos tinham fugido. O que o apóstolo Paulo fez?',
    options: ['Paulo correu para fora sem falar nada', 'Paulo gritou "estamos todos aqui!" e evitou que ele fizesse algo ruim contra a própria vida', 'Paulo riu do guarda', 'Paulo fingiu que estava dormindo'],
    correctIndex: 1,
    explanation: 'A atitude de perdão e empatia de Paulo impressionou muito o guarda. Paulo se importou em proteger aquele que horas antes os tinha colocado lá.',
    biblicalVerse: 'Atos 16:27-28',
  },
  {
    id: 4,
    dayLabel: 'A Grande Pergunta',
    question: 'O carcereiro percebeu que eles eram homens de Deus. O que ele perguntou para Paulo e Silas?',
    options: ['Como consertar as portas de metal?', 'O que devo fazer para ser salvo?', 'Para que cidade vocês estavam indo?', 'Vocês ensinam a cantar?'],
    correctIndex: 1,
    explanation: 'O milagre do terremoto causou a abertura física da prisão, mas a atitude do coração de Paulo abriu o coração do carcereiro para fazer a pergunta mais importante da vida dele.',
    biblicalVerse: 'Atos 16:30',
  },
  {
    id: 5,
    dayLabel: 'A Mudança de Casa',
    question: 'Depois daquela grande noite, o que o carcereiro fez com os apóstolos?',
    options: ['Prendeu-os ainda mais longe', 'Ele os expulsou da cidade para não perder o emprego', 'Ele e sua família aceitaram a Jesus, e cuidaram das feridas de Paulo e Silas!', 'Ele construiu um barco para eles'],
    correctIndex: 2,
    explanation: 'O amor mudou tudo! O carcereiro e a sua família se tornaram uma família cristã! Ele lavou as feridas dos heróis e compartilhou uma mesa de alegria e salvação com eles.',
    biblicalVerse: 'Atos 16:33-34',
  }
];
