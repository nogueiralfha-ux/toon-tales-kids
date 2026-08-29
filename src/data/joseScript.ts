import { Scene, QuizQuestion } from '../types';

export const EPISODE_META_T2E1 = {
  id: 't2e1',
  title: 'José do Egito',
  subtitle: 'O menino dos sonhos',
  biblicalText: 'Gênesis 37–50',
  durationLabel: '15 min',
  moralLesson: 'Mesmo quando não consigo entender o que está acontecendo, posso continuar confiando em Deus.',
};

export const JOSE_SCENES: Scene[] = [
  {
    id: 1,
    sceneNumber: 1,
    title: 'O Menino que Sonhava',
    subtitle: 'Os sonhos começam',
    biblicalRef: 'Gênesis 37:1-2',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'field_sheep',
    musicTheme: 'dream_motif',
    visualKey: 's2e1_01_dream',
    environmentSummary: 'Campo, ovelhas, vento suave.',
    musicDescription: 'Música suave. Música começa a ganhar brilho.',
    soundEffects: ['nature_sounds', 'wind_sky'],
    directorLesson: 'Alegria e maravilha ao introduzir o jovem José e seu dom.',
    lines: [
      {
        id: 's2e1_01_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Há muitos anos, em uma terra distante, vivia um jovem chamado José.',
      },
      {
        id: 's2e1_01_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'José era filho de Jacó. Ele fazia parte de uma grande família.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e1_01_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas havia algo especial sobre aquele menino. José sonhava.',
        soundCue: 'Música começa a ganhar brilho com motivo etéreo'
      },
      {
        id: 's2e1_01_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E alguns de seus sonhos pareciam muito diferentes de sonhos comuns.',
      }
    ]
  },
  {
    id: 2,
    sceneNumber: 2,
    title: 'A Túnica Especial',
    subtitle: 'O presente de Jacó',
    biblicalRef: 'Gênesis 37:3-4',
    durationLabel: '50 segundos',
    estimatedDurationSec: 50,
    ambientType: 'desert_camp',
    musicTheme: 'sad_betrayal',
    visualKey: 's2e1_02_coat',
    environmentSummary: 'Ambiente de acampamento. Som de tecido.',
    musicDescription: 'A música muda discretamente, indicando ciúme.',
    soundEffects: [],
    directorLesson: 'Demonstrar o amor paterno, mas o início do ressentimento dos irmãos.',
    lines: [
      {
        id: 's2e1_02_l1',
        character: 'jaco',
        characterLabel: 'Jacó',
        text: 'José, venha aqui.',
        emotionGuide: 'Paternal e carinhoso'
      },
      {
        id: 's2e1_02_l2',
        character: 'jose',
        characterLabel: 'José',
        text: 'Sim, pai?',
        emotionGuide: 'Alegre'
      },
      {
        id: 's2e1_02_l3',
        character: 'jaco',
        characterLabel: 'Jacó',
        text: 'Tenho algo para você.',
        soundCue: 'Tecido sendo aberto'
      },
      {
        id: 's2e1_02_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jacó havia preparado para José uma túnica especial.',
      },
      {
        id: 's2e1_02_l5',
        character: 'jose',
        characterLabel: 'José',
        text: 'É linda!',
      },
      {
        id: 's2e1_02_l6',
        character: 'jaco',
        characterLabel: 'Jacó',
        text: 'Quero que você saiba o quanto é importante para mim.',
      },
      {
        id: 's2e1_02_l7',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'José ficou muito feliz. Mas seus irmãos não ficaram.',
        soundCue: 'A música fica um pouco mais tensa'
      },
      {
        id: 's2e1_02_l8',
        character: 'irmao1',
        characterLabel: 'Irmão 1',
        text: 'Por que ele recebeu uma túnica especial?',
        emotionGuide: 'Com ciúmes'
      },
      {
        id: 's2e1_02_l9',
        character: 'irmao2',
        characterLabel: 'Irmão 2',
        text: 'Nosso pai gosta mais dele.',
      },
      {
        id: 's2e1_02_l10',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O coração deles começou a ficar cheio de ciúme.',
      }
    ]
  },
  {
    id: 3,
    sceneNumber: 3,
    title: 'O Primeiro Sonho',
    subtitle: 'Os feixes de trigo',
    biblicalRef: 'Gênesis 37:5-8',
    durationLabel: '50 segundos',
    estimatedDurationSec: 50,
    ambientType: 'desert_camp',
    musicTheme: 'dream_motif',
    visualKey: 's2e1_03_first_dream',
    environmentSummary: 'Vento suave, ambiente familiar.',
    musicDescription: 'Música misteriosa com o tema do sonho.',
    soundEffects: ['wind_sky'],
    directorLesson: 'O relato ingênuo do sonho gera ainda mais raiva nos irmãos.',
    lines: [
      {
        id: 's2e1_03_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Então José teve um sonho.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e1_03_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele viu a si mesmo e seus irmãos trabalhando no campo. Eles estavam amarrando feixes de trigo.',
      },
      {
        id: 's2e1_03_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'De repente... o feixe de José ficou de pé. E os feixes de seus irmãos se inclinaram diante dele.',
      },
      {
        id: 's2e1_03_l4',
        character: 'jose',
        characterLabel: 'José',
        text: 'Tive um sonho muito estranho!',
        emotionGuide: 'Curioso e maravilhado'
      },
      {
        id: 's2e1_03_l5',
        character: 'irmao',
        characterLabel: 'Irmão',
        text: 'Que sonho?',
      },
      {
        id: 's2e1_03_l6',
        character: 'jose',
        characterLabel: 'José',
        text: 'Parecia que os feixes de vocês se inclinavam diante do meu.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e1_03_l7',
        character: 'irmao1',
        characterLabel: 'Irmão 1',
        text: 'Você acha que um dia vamos nos curvar diante de você?',
        emotionGuide: 'Muito irritado'
      },
      {
        id: 's2e1_03_l8',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os irmãos ficaram ainda mais irritados.',
      }
    ]
  },
  {
    id: 4,
    sceneNumber: 4,
    title: 'Outro Sonho',
    subtitle: 'O sol, a lua e as estrelas',
    biblicalRef: 'Gênesis 37:9-11',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'desert_camp',
    musicTheme: 'mysterious_drone',
    visualKey: 's2e1_04_second_dream',
    environmentSummary: 'Ambiente diurno na tenda.',
    musicDescription: 'Música celestial.',
    soundEffects: [],
    directorLesson: 'O aumento do mistério divino em contraste com o ambiente familiar tenso.',
    lines: [
      {
        id: 's2e1_04_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Depois José teve outro sonho. Ele viu o sol... a lua... e onze estrelas... se inclinando diante dele.',
      },
      {
        id: 's2e1_04_l2',
        character: 'jose',
        characterLabel: 'José',
        text: 'Eu sonhei novamente!',
      },
      {
        id: 's2e1_04_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'José contou o sonho à sua família.',
      },
      {
        id: 's2e1_04_l4',
        character: 'jaco',
        characterLabel: 'Jacó',
        text: 'José, que sonho é esse?',
        emotionGuide: 'Confuso mas não furioso, pensativo'
      },
      {
        id: 's2e1_04_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jacó ficou pensativo. Mas guardou aquilo em seu coração.',
      }
    ]
  },
  {
    id: 5,
    sceneNumber: 5,
    title: 'Os Irmãos Vão para Longe',
    subtitle: 'A partida de José',
    biblicalRef: 'Gênesis 37:12-14',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'field_sheep',
    musicTheme: 'playful_adventure',
    visualKey: 's2e1_05_journey',
    environmentSummary: 'Campo, ovelhas, vento.',
    musicDescription: 'Música de aventura.',
    soundEffects: ['nature_sounds', 'wind_sky'],
    directorLesson: 'Inocência da viagem, antes do perigo.',
    lines: [
      {
        id: 's2e1_05_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Um dia, os irmãos de José foram cuidar dos rebanhos em um lugar distante.',
      },
      {
        id: 's2e1_05_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jacó chamou José.',
      },
      {
        id: 's2e1_05_l3',
        character: 'jaco',
        characterLabel: 'Jacó',
        text: 'Vá ver como seus irmãos estão.',
      },
      {
        id: 's2e1_05_l4',
        character: 'jose',
        characterLabel: 'José',
        text: 'Sim, pai.',
      },
      {
        id: 's2e1_05_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'José partiu.',
        soundCue: 'Música de aventura, passos na areia'
      }
    ]
  },
  {
    id: 6,
    sceneNumber: 6,
    title: 'Onde Estão Meus Irmãos?',
    subtitle: 'A busca',
    biblicalRef: 'Gênesis 37:15-17',
    durationLabel: '35 segundos',
    estimatedDurationSec: 35,
    ambientType: 'desert_day',
    musicTheme: 'tense_minimal',
    visualKey: 's2e1_06_lost',
    environmentSummary: 'Caminhada, passos, vento.',
    musicDescription: 'A música muda, dando uma pista do perigo à frente.',
    soundEffects: [],
    directorLesson: 'Sensação de busca inocente.',
    lines: [
      {
        id: 's2e1_06_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'José procurou seus irmãos. Mas não os encontrou.',
      },
      {
        id: 's2e1_06_l2',
        character: 'homem',
        characterLabel: 'Homem',
        text: 'Está procurando alguém?',
      },
      {
        id: 's2e1_06_l3',
        character: 'jose',
        characterLabel: 'José',
        text: 'Meus irmãos. Você sabe para onde foram?',
      },
      {
        id: 's2e1_06_l4',
        character: 'homem',
        characterLabel: 'Homem',
        text: 'Eles seguiram para Dotã.',
      },
      {
        id: 's2e1_06_l5',
        character: 'jose',
        characterLabel: 'José',
        text: 'Obrigado!',
      },
      {
        id: 's2e1_06_l6',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'José continuou caminhando. Sem saber que seus irmãos estavam prestes a tomar uma decisão terrível.',
      }
    ]
  },
  {
    id: 7,
    sceneNumber: 7,
    title: 'O Poço',
    subtitle: 'A traição',
    biblicalRef: 'Gênesis 37:18-24',
    durationLabel: '45 segundos',
    estimatedDurationSec: 45,
    ambientType: 'tense_silence',
    musicTheme: 'tense_danger',
    visualKey: 's2e1_07_pit',
    environmentSummary: 'Vozes distantes ganhando volume.',
    musicDescription: 'A música fica tensa, emocional sem exageros.',
    soundEffects: [],
    directorLesson: 'A traição angustiante, mas adequada para crianças.',
    lines: [
      {
        id: 's2e1_07_l1',
        character: 'irmao1',
        characterLabel: 'Irmão 1',
        text: 'Lá vem o sonhador!',
        emotionGuide: 'Cruel e ameaçador'
      },
      {
        id: 's2e1_07_l2',
        character: 'irmao2',
        characterLabel: 'Irmão 2',
        text: 'Vamos acabar com esses sonhos dele!',
      },
      {
        id: 's2e1_07_l3',
        character: 'irmao',
        characterLabel: 'Outro irmão',
        text: 'Não! Não vamos matá-lo. Podemos colocá-lo naquele poço.',
      },
      {
        id: 's2e1_07_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Quando José chegou... seus irmãos tiraram sua túnica.',
        soundCue: 'Som de tecido'
      },
      {
        id: 's2e1_07_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E o colocaram em um poço vazio.',
      },
      {
        id: 's2e1_07_l6',
        character: 'jose',
        characterLabel: 'José',
        text: 'Meus irmãos! Por favor! Não façam isso!',
        emotionGuide: 'Desesperado e aflito'
      },
      {
        id: 's2e1_07_l7',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'José não entendia o que estava acontecendo.',
      }
    ]
  },
  {
    id: 8,
    sceneNumber: 8,
    title: 'José Vai para o Egito',
    subtitle: 'Vendido como escravo',
    biblicalRef: 'Gênesis 37:25-28',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'desert_journey',
    musicTheme: 'sad_betrayal',
    visualKey: 's2e1_08_sold',
    environmentSummary: 'Som de caravana se aproximando, camelos, rodas.',
    musicDescription: 'Música triste e comovente.',
    soundEffects: ['nature_sounds'],
    directorLesson: 'Sensação de perda, mas apontando para o cuidado de Deus.',
    lines: [
      {
        id: 's2e1_08_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Então uma caravana apareceu no caminho. Os irmãos decidiram vender José como escravo.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e1_08_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E José foi levado para o Egito.',
      },
      {
        id: 's2e1_08_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Imagine como ele deve ter se sentido. Longe de sua família. Longe de sua casa. E sem saber o que aconteceria.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e1_08_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas Deus não havia esquecido José.',
      }
    ]
  },
  {
    id: 9,
    sceneNumber: 9,
    title: 'Na Casa de Potifar',
    subtitle: 'Trabalho e confiança',
    biblicalRef: 'Gênesis 39:1-4',
    durationLabel: '45 segundos',
    estimatedDurationSec: 45,
    ambientType: 'egypt_palace',
    musicTheme: 'hopeful_melody',
    visualKey: 's2e1_09_potifar',
    environmentSummary: 'Ambiente tranquilo de palácio egípcio.',
    musicDescription: 'Música muda para esperança.',
    soundEffects: [],
    directorLesson: 'A perseverança e o trabalho bem feito.',
    lines: [
      {
        id: 's2e1_09_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'No Egito, José foi levado para a casa de um homem chamado Potifar.',
      },
      {
        id: 's2e1_09_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'José trabalhou com dedicação. Era responsável. Era honesto. E pouco a pouco... Potifar percebeu que podia confiar nele.',
      },
      {
        id: 's2e1_09_l3',
        character: 'potifar',
        characterLabel: 'Potifar',
        text: 'José, você cuidará de tudo nesta casa.',
        emotionGuide: 'Firme e autoritário, mas satisfeito'
      },
      {
        id: 's2e1_09_l4',
        character: 'jose',
        characterLabel: 'José',
        text: 'Farei o meu melhor.',
        emotionGuide: 'Jovem adulto, humilde e prestativo'
      },
      {
        id: 's2e1_09_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'José estava aprendendo a perseverar.',
      }
    ]
  },
  {
    id: 10,
    sceneNumber: 10,
    title: 'Uma Grande Injustiça',
    subtitle: 'Tudo dá errado de novo',
    biblicalRef: 'Gênesis 39:20',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'prison_cell',
    musicTheme: 'sad_strings',
    visualKey: 's2e1_10_injustice',
    environmentSummary: 'Porta de ferro se fechando, ambiente sombrio.',
    musicDescription: 'A música escurece, triste, com cello.',
    soundEffects: [],
    directorLesson: 'Mostrar a frustração da injustiça sem violência.',
    lines: [
      {
        id: 's2e1_10_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas outra dificuldade apareceu. José foi acusado injustamente. Mesmo sem ter feito aquilo... ele foi enviado para a prisão.',
        soundCue: 'Som de porta de ferro batendo forte'
      },
      {
        id: 's2e1_10_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Parecia que tudo estava dando errado novamente.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e1_10_l3',
        character: 'jose',
        characterLabel: 'José',
        text: 'Por que isso está acontecendo?',
        emotionGuide: 'Dolorido e humano'
      },
      {
        id: 's2e1_10_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'José poderia ter desistido. Mas não desistiu.',
      }
    ]
  },
  {
    id: 11,
    sceneNumber: 11,
    title: 'Na Prisão',
    subtitle: 'Deus com José',
    biblicalRef: 'Gênesis 39:21-23',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'prison_cell',
    musicTheme: 'hope_prison',
    visualKey: 's2e1_11_prison',
    environmentSummary: 'Ambiente úmido de prisão antiga, passos, correntes muito suaves e distantes.',
    musicDescription: 'Música começa a criar esperança novamente.',
    soundEffects: [],
    directorLesson: 'A fé em meio à escuridão.',
    lines: [
      {
        id: 's2e1_11_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Na prisão, José continuou fazendo o que era certo.',
      },
      {
        id: 's2e1_11_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele ajudava as pessoas. Escutava. Trabalhava. E Deus estava com ele.',
      }
    ]
  },
  {
    id: 12,
    sceneNumber: 12,
    title: 'Os Sonhos na Prisão',
    subtitle: 'O dom reaparece',
    biblicalRef: 'Gênesis 40:1-23',
    durationLabel: '50 segundos',
    estimatedDurationSec: 50,
    ambientType: 'prison_cell',
    musicTheme: 'dream_motif',
    visualKey: 's2e1_12_prison_dreams',
    environmentSummary: 'Conversas na prisão.',
    musicDescription: 'Motivo musical de sonhos.',
    soundEffects: [],
    directorLesson: 'José ainda tem fé que Deus guia pelos sonhos.',
    lines: [
      {
        id: 's2e1_12_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Um dia, dois homens que estavam presos com José tiveram sonhos.',
      },
      {
        id: 's2e1_12_l2',
        character: 'homem1',
        characterLabel: 'Homem 1',
        text: 'Tive um sonho estranho.',
      },
      {
        id: 's2e1_12_l3',
        character: 'homem2',
        characterLabel: 'Homem 2',
        text: 'Eu também.',
      },
      {
        id: 's2e1_12_l4',
        character: 'jose',
        characterLabel: 'José',
        text: 'Deus pode nos ajudar a entender os sonhos.',
        emotionGuide: 'Calmo, confiante em Deus'
      },
      {
        id: 's2e1_12_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'José ouviu os dois sonhos. E explicou o significado deles.',
        soundCue: 'Pequeno brilho musical mágico e discreto'
      },
      {
        id: 's2e1_12_l6',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E o que José havia dito aconteceu. Mas aquele homem se esqueceu de José.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e1_12_l7',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Por dois anos.',
      }
    ]
  },
  {
    id: 13,
    sceneNumber: 13,
    title: 'O Sonho do Faraó',
    subtitle: 'Um problema nacional',
    biblicalRef: 'Gênesis 41:1-8',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'egypt_palace',
    musicTheme: 'mysterious_drone',
    visualKey: 's2e1_13_pharaoh_dream',
    environmentSummary: 'Sons de palácio, passos.',
    musicDescription: 'Música começa misteriosa e tensa.',
    soundEffects: [],
    directorLesson: 'A angústia do poderoso e a lembrança oportuna.',
    lines: [
      {
        id: 's2e1_13_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Então, um dia... o faraó teve sonhos que ninguém conseguia explicar.',
      },
      {
        id: 's2e1_13_l2',
        character: 'farao',
        characterLabel: 'Faraó',
        text: 'Quero saber o significado desses sonhos!',
        emotionGuide: 'Impaciente, poderoso, mas frustrado'
      },
      {
        id: 's2e1_13_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ninguém conseguia responder. Até que alguém se lembrou de José.',
      },
      {
        id: 's2e1_13_l4',
        character: 'homem',
        characterLabel: 'Homem',
        text: 'Faraó... Eu conheço alguém que pode interpretar sonhos.',
      },
      {
        id: 's2e1_13_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'José foi chamado.',
      }
    ]
  },
  {
    id: 14,
    sceneNumber: 14,
    title: 'Diante do Faraó',
    subtitle: 'O significado revelado',
    biblicalRef: 'Gênesis 41:14-36',
    durationLabel: '50 segundos',
    estimatedDurationSec: 50,
    ambientType: 'egypt_palace',
    musicTheme: 'grand_egypt',
    visualKey: 's2e1_14_pharaoh',
    environmentSummary: 'Salão majestoso.',
    musicDescription: 'Música grandiosa, mas reverente.',
    soundEffects: [],
    directorLesson: 'José é humilde, transferindo o crédito a Deus.',
    lines: [
      {
        id: 's2e1_14_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'José foi levado diante do faraó.',
      },
      {
        id: 's2e1_14_l2',
        character: 'farao',
        characterLabel: 'Faraó',
        text: 'Disseram que você consegue interpretar sonhos.',
      },
      {
        id: 's2e1_14_l3',
        character: 'jose',
        characterLabel: 'José',
        text: 'Não sou eu quem sabe fazer isso. Deus dará a resposta.',
        emotionGuide: 'Calmo, seguro'
      },
      {
        id: 's2e1_14_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E José explicou os sonhos. Viriam sete anos de grande fartura. Depois viriam sete anos de fome.',
      },
      {
        id: 's2e1_14_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E José apresentou um plano. Guardar alimentos durante os anos de fartura. Assim, haveria comida durante os anos difíceis.',
      },
      {
        id: 's2e1_14_l6',
        character: 'farao',
        characterLabel: 'Faraó',
        text: 'Não encontro ninguém mais preparado do que você.',
      }
    ]
  },
  {
    id: 15,
    sceneNumber: 15,
    title: 'Governador do Egito',
    subtitle: 'A exaltação de José',
    biblicalRef: 'Gênesis 41:37-41',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'market_city',
    musicTheme: 'epic_orchestral',
    visualKey: 's2e1_15_governor',
    environmentSummary: 'Cidade, multidão.',
    musicDescription: 'Música muito grandiosa e triunfante.',
    soundEffects: [],
    directorLesson: 'A reviravolta maravilhosa e justa na vida de José.',
    lines: [
      {
        id: 's2e1_15_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'José recebeu uma posição de grande responsabilidade.',
      },
      {
        id: 's2e1_15_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Agora ele era governador do Egito.',
      },
      {
        id: 's2e1_15_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas José não se esqueceu de onde tinha vindo. Nem de Deus.',
      }
    ]
  },
  {
    id: 16,
    sceneNumber: 16,
    title: 'A Fome',
    subtitle: 'Buscando pão',
    biblicalRef: 'Gênesis 41:53-42:5',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'market_city',
    musicTheme: 'sad_strings',
    visualKey: 's2e1_16_famine',
    environmentSummary: 'Mercado de grãos agitado, pessoas procurando comida.',
    musicDescription: 'Música mais séria e tensa emocionalmente.',
    soundEffects: [],
    directorLesson: 'Os ecos do plano e a chegada da providência.',
    lines: [
      {
        id: 's2e1_16_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Então os anos de fartura terminaram. E chegaram os anos de fome.',
      },
      {
        id: 's2e1_16_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Famílias de muitos lugares foram ao Egito em busca de alimento.',
      },
      {
        id: 's2e1_16_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Entre elas... estavam os irmãos de José.',
      }
    ]
  },
  {
    id: 17,
    sceneNumber: 17,
    title: 'O Reencontro',
    subtitle: 'A grande surpresa',
    biblicalRef: 'Gênesis 42',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'tense_silence',
    musicTheme: 'tense_minimal',
    visualKey: 's2e1_17_reunion',
    environmentSummary: 'Silêncio, passos no salão governamental.',
    musicDescription: 'Tensão de reencontro, algo não revelado.',
    soundEffects: [],
    directorLesson: 'Um momento longo de silêncio e reflexão.',
    lines: [
      {
        id: 's2e1_17_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'José reconheceu seus irmãos. Mas eles não o reconheceram.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e1_17_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Anos haviam passado. José poderia ter usado seu poder para se vingar. Mas decidiu esperar.',
      }
    ]
  },
  {
    id: 18,
    sceneNumber: 18,
    title: 'Eu Sou José',
    subtitle: 'A revelação',
    biblicalRef: 'Gênesis 45:1-4',
    durationLabel: '50 segundos',
    estimatedDurationSec: 50,
    ambientType: 'tense_silence',
    musicTheme: 'forgiveness_tears',
    visualKey: 's2e1_18_i_am_jose',
    environmentSummary: 'Os irmãos estão diante dele.',
    musicDescription: 'Música emocional começa a emergir.',
    soundEffects: [],
    directorLesson: 'O clímax emocional da história, forte mas contido.',
    lines: [
      {
        id: 's2e1_18_l1',
        character: 'jose',
        characterLabel: 'José',
        text: 'Eu sou José.',
        emotionGuide: 'Voz embargada pela emoção, comovido'
      },
      {
        id: 's2e1_18_l2',
        character: 'irmao',
        characterLabel: 'Irmão',
        text: 'José?',
        emotionGuide: 'Em choque, sussurrando'
      },
      {
        id: 's2e1_18_l3',
        character: 'jose',
        characterLabel: 'José',
        text: 'Sim. Sou eu.',
        pauseType: 'PAUSA LONGA',
        pauseSeconds: 2.0,
      },
      {
        id: 's2e1_18_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os irmãos ficaram assustados. Eles se lembraram de tudo o que haviam feito.',
      },
      {
        id: 's2e1_18_l5',
        character: 'irmao',
        characterLabel: 'Irmão',
        text: 'José... Será que você vai se vingar de nós?',
        emotionGuide: 'Muito assustado'
      },
      {
        id: 's2e1_18_l6',
        character: 'jose',
        characterLabel: 'José',
        text: 'Não tenham medo.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e1_18_l7',
        character: 'jose',
        characterLabel: 'José',
        text: 'Vocês fizeram algo que me trouxe muito sofrimento. Mas Deus esteve comigo durante todo esse caminho.',
      }
    ]
  },
  {
    id: 19,
    sceneNumber: 19,
    title: 'O Perdão',
    subtitle: 'A família restaurada',
    biblicalRef: 'Gênesis 45:5-15',
    durationLabel: '50 segundos',
    estimatedDurationSec: 50,
    ambientType: 'tense_silence',
    musicTheme: 'hopeful_melody',
    visualKey: 's2e1_19_forgiveness',
    environmentSummary: 'Abraços e lágrimas.',
    musicDescription: 'A música começa a crescer emocionalmente.',
    soundEffects: [],
    directorLesson: 'O poder curador do perdão verdadeiro.',
    lines: [
      {
        id: 's2e1_19_l1',
        character: 'jose',
        characterLabel: 'José',
        text: 'Deus me trouxe até aqui para preservar vidas. Eu não vou me vingar de vocês.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e1_19_l2',
        character: 'jose',
        characterLabel: 'José',
        text: 'Eu perdoo vocês.',
        emotionGuide: 'Solene, sincero e amoroso'
      },
      {
        id: 's2e1_19_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E naquele momento... uma família que havia sido separada pelo ódio... começou a ser reunida novamente.',
      },
      {
        id: 's2e1_19_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'José chorou. Seus irmãos choraram. E depois de tantos anos... houve perdão.',
      }
    ]
  },
  {
    id: 20,
    sceneNumber: 20,
    title: 'A Grande Lição',
    subtitle: 'Deus sempre presente',
    biblicalRef: '',
    durationLabel: '50 segundos',
    estimatedDurationSec: 50,
    ambientType: 'desert_wind',
    musicTheme: 'gentle_teaching',
    visualKey: 's2e1_20_lesson',
    environmentSummary: 'Vento e paz.',
    musicDescription: 'Música acolhedora.',
    soundEffects: [],
    directorLesson: 'Transmitindo a moral, conectando os desafios de José com os das crianças.',
    lines: [
      {
        id: 's2e1_20_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A história de José nos ensina algo muito importante.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e1_20_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Às vezes, coisas injustas acontecem. Às vezes, nossos planos não acontecem como imaginamos. Podemos passar por momentos difíceis.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e1_20_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas não precisamos desistir. Podemos continuar fazendo o que é certo. Podemos confiar em Deus. E podemos aprender a perdoar.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e1_20_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'José não esqueceu o que aconteceu. Mas escolheu não deixar a dor controlar seu coração.',
      }
    ]
  },
  {
    id: 21,
    sceneNumber: 21,
    title: 'Frase Final',
    subtitle: 'Um final que não é o fim',
    biblicalRef: '',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'desert_wind',
    musicTheme: 'dream_motif',
    visualKey: 's2e1_21_final',
    environmentSummary: 'Música suave.',
    musicDescription: 'Música final acolhedora, reprisando o tema dos sonhos.',
    soundEffects: [],
    directorLesson: 'Encerramento poético da história de José.',
    lines: [
      {
        id: 's2e1_21_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'José começou como um menino que sonhava. Passou por lugares que nunca imaginou conhecer. Enfrentou momentos que pareciam o fim.',
      },
      {
        id: 's2e1_21_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas sua história ainda não havia terminado.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e1_21_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Porque quando Deus está presente... uma dificuldade não precisa ser o fim da história.',
      }
    ]
  },
  {
    id: 22,
    sceneNumber: 22,
    title: 'A Próxima Aventura',
    subtitle: 'O chamado de um líder',
    biblicalRef: '',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'desert_wind',
    musicTheme: 'epic_orchestral',
    visualKey: 's2e1_22_hook',
    environmentSummary: 'Vento forte. Impacto musical.',
    musicDescription: 'A música começa a ganhar força para o gancho.',
    soundEffects: ['wind_sky'],
    directorLesson: 'Construir muita expectativa para Moisés.',
    lines: [
      {
        id: 's2e1_22_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a próxima grande aventura será ainda maior. Um povo inteiro estará sofrendo.',
      },
      {
        id: 's2e1_22_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E Deus chamará um homem chamado...',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's2e1_22_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Moisés.',
        soundCue: 'Vento forte e um impacto musical grandioso'
      },
      {
        id: 's2e1_22_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele terá uma missão que parecerá impossível.',
      }
    ]
  },
  {
    id: 23,
    sceneNumber: 23,
    title: 'Assinatura',
    subtitle: 'Toon Tales Kids',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'toon_tales_jingle',
    musicTheme: 'signature_jingle',
    visualKey: 's2e1_23_outro',
    environmentSummary: 'Logotipo sonoro',
    musicDescription: 'A trilha da história diminui lentamente. Entra o tema musical alegre, memorável e fantástico.',
    soundEffects: ['toon_tales_jingle'],
    directorLesson: 'Energético, feliz e acolhedor.',
    lines: [
      {
        id: 's2e1_23_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E essa foi mais uma aventura da Bíblia em Áudio.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
        emotionGuide: 'Voz calorosa e emocionante'
      },
      {
        id: 's2e1_23_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a história ainda não terminou...',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's2e1_23_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma nova aventura está esperando por você.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e1_23_l4',
        character: 'child',
        characterLabel: 'Crianças',
        text: 'TOON TALES KIDS!',
        emotionGuide: 'Alegre e espontânea, em coro'
      },
      {
        id: 's2e1_23_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Histórias que ensinam, aventuras que transformam!',
      }
    ]
  }
];

export const JOSE_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    dayLabel: 'O Menino',
    question: 'Que dom especial José tinha quando era jovem?',
    options: ['Ele era o homem mais forte do acampamento', 'Ele tinha sonhos com significados importantes', 'Ele conseguia falar com os animais', 'Ele corria mais rápido que cavalos'],
    correctIndex: 1,
    explanation: 'José tinha o dom especial de receber e interpretar sonhos dados por Deus.',
    biblicalVerse: 'Gênesis 37:5',
  },
  {
    id: 2,
    dayLabel: 'A Túnica',
    question: 'Por que os irmãos de José ficaram com ciúmes dele?',
    options: ['Porque José não dividia comida', 'Porque ele ganhou uma túnica especial do pai e contava seus sonhos sobre eles', 'Porque ele tinha mais ovelhas', 'Porque ele morava em uma tenda maior'],
    correctIndex: 1,
    explanation: 'Jacó deu a José uma bela túnica especial e José contava que eles se curvariam diante dele em seus sonhos.',
    biblicalVerse: 'Gênesis 37:3-8',
  },
  {
    id: 3,
    dayLabel: 'A Injustiça',
    question: 'O que aconteceu com José depois que seus irmãos o jogaram em um poço vazio?',
    options: ['Ele achou um tesouro no fundo', 'Ele construiu uma escada e fugiu', 'Ele foi vendido como escravo e levado para o Egito', 'Seus irmãos se arrependeram e o ajudaram logo em seguida'],
    correctIndex: 2,
    explanation: 'Seus irmãos o venderam para uma caravana e ele foi levado como escravo para o Egito.',
    biblicalVerse: 'Gênesis 37:28',
  },
  {
    id: 4,
    dayLabel: 'O Faraó',
    question: 'O que os sonhos do Faraó queriam dizer, e que José interpretou através de Deus?',
    options: ['Que o sol se apagaria', 'Que viriam sete anos de fartura, seguidos de sete anos de grande fome', 'Que o Egito conquistaria novos países', 'Que o rio secaria para sempre'],
    correctIndex: 1,
    explanation: 'Deus revelou que haveria abundância de comida e depois um tempo longo de fome, o que permitiu ao Egito se preparar e salvar muitas vidas.',
    biblicalVerse: 'Gênesis 41:25-30',
  },
  {
    id: 5,
    dayLabel: 'O Perdão',
    question: 'Quando os irmãos de José o reencontraram, o que José fez?',
    options: ['Ele se vingou e prendeu todos eles', 'Ele fingiu não conhecer ninguém', 'Ele os perdoou, reconhecendo que Deus estava cuidando da história', 'Ele mandou todos de volta para casa sem comida'],
    correctIndex: 2,
    explanation: 'José escolheu o amor e o perdão, confortando seus irmãos e dizendo que Deus planejou preservar as vidas deles.',
    biblicalVerse: 'Gênesis 45:5',
  }
];
