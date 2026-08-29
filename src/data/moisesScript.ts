import { Scene, QuizQuestion } from '../types';

export const EPISODE_META_T2E2 = {
  id: 't2e2',
  title: 'Moisés',
  subtitle: 'O homem que ouviu o chamado de Deus',
  biblicalText: 'Êxodo 1–4',
  durationLabel: '14 min',
  moralLesson: 'Você não precisa ser perfeito para fazer o que é certo. Deus pode ajudá-lo a ser corajoso.',
};

export const MOISES_SCENES: Scene[] = [
  {
    id: 1,
    sceneNumber: 1,
    title: 'O Povo que Sofria',
    subtitle: 'A escravidão no Egito',
    biblicalRef: 'Êxodo 1',
    durationLabel: '50 segundos',
    estimatedDurationSec: 50,
    ambientType: 'egypt_work',
    musicTheme: 'dramatic_egypt',
    visualKey: 's2e2_01_slavery',
    environmentSummary: 'Egito antigo. Pessoas trabalhando. Passos, pedras e ferramentas.',
    musicDescription: 'Música dramática. Fica mais séria com o perigo iminente.',
    soundEffects: ['construction_site', 'nature_sounds'],
    directorLesson: 'Mostrar a dor do povo para aumentar a necessidade de um libertador.',
    lines: [
      {
        id: 's2e2_01_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os anos passaram.',
      },
      {
        id: 's2e2_01_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os descendentes de Jacó haviam crescido muito no Egito.',
      },
      {
        id: 's2e2_01_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E formaram um grande povo.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e2_01_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas um novo faraó chegou ao poder.',
      },
      {
        id: 's2e2_01_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E ele não conhecia José.',
        soundCue: 'A música fica mais séria'
      },
      {
        id: 's2e2_01_l6',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O faraó ficou com medo de que os israelitas se tornassem numerosos demais.',
      },
      {
        id: 's2e2_01_l7',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E começou a obrigá-los a trabalhar muito.',
        soundCue: 'Som de ferramentas, pedras e trabalho'
      },
      {
        id: 's2e2_01_l8',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles carregavam pedras.',
      },
      {
        id: 's2e2_01_l9',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Construíam cidades.',
      },
      {
        id: 's2e2_01_l10',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E sofriam.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e2_01_l11',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas Deus não havia esquecido seu povo.',
      }
    ]
  },
  {
    id: 2,
    sceneNumber: 2,
    title: 'O Bebê Moisés',
    subtitle: 'Uma mãe protetora',
    biblicalRef: 'Êxodo 2:1-2',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'house_baby',
    musicTheme: 'emotional_basket',
    visualKey: 's2e2_02_baby',
    environmentSummary: 'Casa simples. Bebê chorando suavemente.',
    musicDescription: 'Música emocional.',
    soundEffects: ['intimate_tent'],
    directorLesson: 'Transmitir o amor materno e a tensão da ordem de Faraó.',
    lines: [
      {
        id: 's2e2_02_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Naquela época nasceu um menino.',
      },
      {
        id: 's2e2_02_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Seus pais perceberam que ele era especial.',
      },
      {
        id: 's2e2_02_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas havia um grande perigo.',
      },
      {
        id: 's2e2_02_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O faraó havia ordenado que os meninos hebreus recém-nascidos fossem mortos.',
        soundCue: 'A música fica tensa'
      },
      {
        id: 's2e2_02_l5',
        character: 'joquebede',
        characterLabel: 'Joquebede',
        text: 'Precisamos protegê-lo.',
        emotionGuide: 'Amorosa e determinada'
      },
      {
        id: 's2e2_02_l6',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Durante algum tempo, sua mãe conseguiu escondê-lo.',
      },
      {
        id: 's2e2_02_l7',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas chegou o momento em que não era mais possível.',
      }
    ]
  },
  {
    id: 3,
    sceneNumber: 3,
    title: 'O Cesto no Rio',
    subtitle: 'Confiança nas águas',
    biblicalRef: 'Êxodo 2:3-4',
    durationLabel: '45 segundos',
    estimatedDurationSec: 45,
    ambientType: 'river_reeds',
    musicTheme: 'emotional_basket',
    visualKey: 's2e2_03_basket',
    environmentSummary: 'Rio. Pássaros. Água. Juncos.',
    musicDescription: 'Música emocional de despedida e esperança.',
    soundEffects: ['ocean_waters'],
    directorLesson: 'A mãe entregando o filho aos cuidados de Deus.',
    lines: [
      {
        id: 's2e2_03_l1',
        character: 'joquebede',
        characterLabel: 'Joquebede',
        text: 'Meu filho... Deus cuidará de você.',
        emotionGuide: 'Emocionada, orando e chorando'
      },
      {
        id: 's2e2_03_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ela preparou um pequeno cesto.',
      },
      {
        id: 's2e2_03_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Colocou o bebê dentro dele.',
      },
      {
        id: 's2e2_03_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E o deixou entre os juncos do rio.',
        soundCue: 'Cesto tocando suavemente a água'
      },
      {
        id: 's2e2_03_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A irmã do menino, Miriã, ficou observando de longe.',
      },
      {
        id: 's2e2_03_l6',
        character: 'miria',
        characterLabel: 'Miriã',
        text: 'Vou ficar aqui. Vou ver o que acontece.',
        emotionGuide: 'Voz infantil, determinada'
      }
    ]
  },
  {
    id: 4,
    sceneNumber: 4,
    title: 'A Princesa Encontra o Bebê',
    subtitle: 'Um choro nas águas',
    biblicalRef: 'Êxodo 2:5-10',
    durationLabel: '50 segundos',
    estimatedDurationSec: 50,
    ambientType: 'river_reeds',
    musicTheme: 'mysterious_drone',
    visualKey: 's2e2_04_princess',
    environmentSummary: 'Passos. Água. Vozes femininas.',
    musicDescription: 'Música misteriosa com leve surpresa e alívio.',
    soundEffects: [],
    directorLesson: 'A compaixão da princesa e a providência incrível de Deus.',
    lines: [
      {
        id: 's2e2_04_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A filha de Faraó desceu ao rio.',
      },
      {
        id: 's2e2_04_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Quando viu o cesto... mandou buscá-lo.',
        soundCue: 'Cesto sendo puxado. Bebê chorando'
      },
      {
        id: 's2e2_04_l3',
        character: 'filha_farao',
        characterLabel: 'Filha de Faraó',
        text: 'É um bebê!',
        emotionGuide: 'Surpresa e compaixão'
      },
      {
        id: 's2e2_04_l4',
        character: 'filha_farao',
        characterLabel: 'Filha de Faraó',
        text: 'É um menino hebreu.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e2_04_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ela sentiu compaixão.',
      },
      {
        id: 's2e2_04_l6',
        character: 'filha_farao',
        characterLabel: 'Filha de Faraó',
        text: 'Vou cuidar dele.',
        emotionGuide: 'Firme e amorosa'
      },
      {
        id: 's2e2_04_l7',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Miriã se aproximou.',
      },
      {
        id: 's2e2_04_l8',
        character: 'miria',
        characterLabel: 'Miriã',
        text: 'Quer que eu procure uma mulher hebreia para cuidar do bebê?',
      },
      {
        id: 's2e2_04_l9',
        character: 'filha_farao',
        characterLabel: 'Filha de Faraó',
        text: 'Sim.',
      },
      {
        id: 's2e2_04_l10',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E assim... de uma maneira surpreendente... a própria mãe de Moisés pôde continuar cuidando dele.',
      }
    ]
  },
  {
    id: 5,
    sceneNumber: 5,
    title: 'Moisés Cresce',
    subtitle: 'As duas identidades',
    biblicalRef: 'Êxodo 2:10-11',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'egypt_palace',
    musicTheme: 'hopeful_melody',
    visualKey: 's2e2_05_grows',
    environmentSummary: 'Sons distantes do palácio.',
    musicDescription: 'Montagem musical contemplativa.',
    soundEffects: [],
    directorLesson: 'O crescimento físico e o dilema interno de Moisés.',
    lines: [
      {
        id: 's2e2_05_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O menino cresceu.',
      },
      {
        id: 's2e2_05_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Foi chamado Moisés.',
      },
      {
        id: 's2e2_05_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele cresceu conhecendo o palácio do Egito.',
      },
      {
        id: 's2e2_05_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas também conhecia sua origem.',
        soundCue: 'Música contemplativa'
      },
      {
        id: 's2e2_05_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Moisés sabia que fazia parte do povo hebreu.',
      }
    ]
  },
  {
    id: 6,
    sceneNumber: 6,
    title: 'Moisés Foge',
    subtitle: 'Um erro e a partida',
    biblicalRef: 'Êxodo 2:11-15',
    durationLabel: '35 segundos',
    estimatedDurationSec: 35,
    ambientType: 'desert_wind',
    musicTheme: 'tense_danger',
    visualKey: 's2e2_06_flees',
    environmentSummary: 'Vento do deserto, passos apressados e fuga.',
    musicDescription: 'Música tensa de fuga.',
    soundEffects: ['desert_wind'],
    directorLesson: 'Um momento crítico onde as escolhas o levam para o deserto.',
    lines: [
      {
        id: 's2e2_06_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Um dia, Moisés viu um egípcio maltratando um hebreu.',
      },
      {
        id: 's2e2_06_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Depois de um acontecimento grave, Moisés percebeu que estava em perigo.',
      },
      {
        id: 's2e2_06_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele decidiu fugir do Egito.',
        soundCue: 'Passos rápidos. Vento'
      },
      {
        id: 's2e2_06_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E foi para uma terra distante.',
      },
      {
        id: 's2e2_06_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Para Midiã.',
      }
    ]
  },
  {
    id: 7,
    sceneNumber: 7,
    title: 'Uma Nova Vida',
    subtitle: 'De príncipe a pastor',
    biblicalRef: 'Êxodo 2:16-22',
    durationLabel: '35 segundos',
    estimatedDurationSec: 35,
    ambientType: 'desert_midian',
    musicTheme: 'pastoral_growth',
    visualKey: 's2e2_07_midian',
    environmentSummary: 'Deserto. Ovelhas e vento calmo.',
    musicDescription: 'Música tranquila e suave.',
    soundEffects: ['field_sheep'],
    directorLesson: 'O contraste da vida grandiosa do Egito para a paz do campo.',
    lines: [
      {
        id: 's2e2_07_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Em Midiã, Moisés começou uma nova vida.',
      },
      {
        id: 's2e2_07_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Casou-se com Zípora. E passou a cuidar de ovelhas.',
        soundCue: 'Ovelhas ao fundo'
      },
      {
        id: 's2e2_07_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os anos passaram.',
        soundCue: 'Música suave'
      },
      {
        id: 's2e2_07_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Moisés provavelmente pensava que aquela seria sua vida.',
      },
      {
        id: 's2e2_07_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas Deus tinha outros planos.',
      }
    ]
  },
  {
    id: 8,
    sceneNumber: 8,
    title: 'A Sarça Ardente',
    subtitle: 'Um fogo inexplicável',
    biblicalRef: 'Êxodo 3:1-3',
    durationLabel: '45 segundos',
    estimatedDurationSec: 45,
    ambientType: 'burning_bush',
    musicTheme: 'mysterious_bush',
    visualKey: 's2e2_08_bush',
    environmentSummary: 'Deserto, ovelhas ao longe. Som de fogo suave.',
    musicDescription: 'Música muito misteriosa, de maravilhamento divino.',
    soundEffects: ['wind_sky'],
    directorLesson: 'Cena cinematográfica. Fogo que não queima.',
    lines: [
      {
        id: 's2e2_08_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Um dia, Moisés levou as ovelhas para além do deserto.',
      },
      {
        id: 's2e2_08_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E chegou ao monte de Deus, chamado Horebe.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e2_08_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Então ele viu algo estranho.',
        soundCue: 'Pequeno brilho. Fogo suave'
      },
      {
        id: 's2e2_08_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma sarça estava em chamas.',
      },
      {
        id: 's2e2_08_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas não era destruída pelo fogo.',
      },
      {
        id: 's2e2_08_l6',
        character: 'moises',
        characterLabel: 'Moisés',
        text: 'Que coisa estranha! Vou me aproximar para ver isso.',
        emotionGuide: 'Voz adulta, intrigado e surpreso'
      }
    ]
  },
  {
    id: 9,
    sceneNumber: 9,
    title: 'Moisés, Moisés!',
    subtitle: 'Terra santa',
    biblicalRef: 'Êxodo 3:4-6',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'burning_bush',
    musicTheme: 'pure_serenity',
    visualKey: 's2e2_09_voice',
    environmentSummary: 'A música quase para. Vento suave e chama.',
    musicDescription: 'Ambiente sobrenatural discreto.',
    soundEffects: [],
    directorLesson: 'Reverência e o primeiro contato com a voz de Deus.',
    lines: [
      {
        id: 's2e2_09_l1',
        character: 'god',
        characterLabel: 'Voz de Deus',
        text: 'Moisés!',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e2_09_l2',
        character: 'god',
        characterLabel: 'Voz de Deus',
        text: 'Moisés!',
      },
      {
        id: 's2e2_09_l3',
        character: 'moises',
        characterLabel: 'Moisés',
        text: 'Aqui estou.',
      },
      {
        id: 's2e2_09_l4',
        character: 'god',
        characterLabel: 'Voz de Deus',
        text: 'Não se aproxime.',
      },
      {
        id: 's2e2_09_l5',
        character: 'god',
        characterLabel: 'Voz de Deus',
        text: 'Tire as sandálias dos pés. Pois o lugar onde você está é terra santa.',
        soundCue: 'Passos parando'
      },
      {
        id: 's2e2_09_l6',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Moisés ficou admirado.',
      },
      {
        id: 's2e2_09_l7',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E percebeu que estava diante de uma experiência extraordinária.',
      }
    ]
  },
  {
    id: 10,
    sceneNumber: 10,
    title: 'Deus Conhece o Sofrimento',
    subtitle: 'O chamado divino',
    biblicalRef: 'Êxodo 3:7-10',
    durationLabel: '45 segundos',
    estimatedDurationSec: 45,
    ambientType: 'burning_bush',
    musicTheme: 'emotional_climax',
    visualKey: 's2e2_10_suffering',
    environmentSummary: 'Vento e chama, presença divina.',
    musicDescription: 'Música emocional, com senso de justiça e compaixão.',
    soundEffects: [],
    directorLesson: 'O anúncio da libertação.',
    lines: [
      {
        id: 's2e2_10_l1',
        character: 'god',
        characterLabel: 'Voz de Deus',
        text: 'Eu vi o sofrimento do meu povo no Egito.',
      },
      {
        id: 's2e2_10_l2',
        character: 'god',
        characterLabel: 'Voz de Deus',
        text: 'Ouvi seu clamor. E conheço suas dores.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e2_10_l3',
        character: 'god',
        characterLabel: 'Voz de Deus',
        text: 'Por isso vim para libertá-los.',
      },
      {
        id: 's2e2_10_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Moisés ouviu atentamente.',
      },
      {
        id: 's2e2_10_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Então Deus apresentou a missão.',
      },
      {
        id: 's2e2_10_l6',
        character: 'god',
        characterLabel: 'Voz de Deus',
        text: 'Agora vá.',
      },
      {
        id: 's2e2_10_l7',
        character: 'god',
        characterLabel: 'Voz de Deus',
        text: 'Eu enviarei você ao faraó. Você tirará meu povo do Egito.',
        pauseType: 'PAUSA LONGA',
        pauseSeconds: 2.0,
      }
    ]
  },
  {
    id: 11,
    sceneNumber: 11,
    title: 'Moisés Fica com Medo',
    subtitle: 'A insegurança humana',
    biblicalRef: 'Êxodo 3:11-12',
    durationLabel: '35 segundos',
    estimatedDurationSec: 35,
    ambientType: 'burning_bush',
    musicTheme: 'sad_strings',
    visualKey: 's2e2_11_fear',
    environmentSummary: 'Chamas suaves.',
    musicDescription: 'Música muito suave e reflexiva.',
    soundEffects: [],
    directorLesson: 'A fragilidade do herói em face ao impossível.',
    lines: [
      {
        id: 's2e2_11_l1',
        character: 'moises',
        characterLabel: 'Moisés',
        text: 'Quem sou eu para ir até Faraó?',
        emotionGuide: 'Hesitante, sincero, pequeno',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e2_11_l2',
        character: 'moises',
        characterLabel: 'Moisés',
        text: 'E se eles não acreditarem em mim? E se não me ouvirem?',
      },
      {
        id: 's2e2_11_l3',
        character: 'god',
        characterLabel: 'Voz de Deus',
        text: 'Eu estarei com você.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e2_11_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Essa era a resposta.',
      },
      {
        id: 's2e2_11_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Moisés não estaria sozinho.',
      }
    ]
  },
  {
    id: 12,
    sceneNumber: 12,
    title: 'A Missão Parece Impossível',
    subtitle: 'A promessa divina',
    biblicalRef: 'Êxodo 4:10-12',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'burning_bush',
    musicTheme: 'hopeful_melody',
    visualKey: 's2e2_12_impossible',
    environmentSummary: 'Chamas da sarça e a presença de Deus.',
    musicDescription: 'A música ganha um tom gentil e fortalecedor.',
    soundEffects: [],
    directorLesson: 'Deus capacita os que Ele chama.',
    lines: [
      {
        id: 's2e2_12_l1',
        character: 'moises',
        characterLabel: 'Moisés',
        text: 'Senhor... Eu não sou bom com palavras.',
        emotionGuide: 'Ainda tímido'
      },
      {
        id: 's2e2_12_l2',
        character: 'god',
        characterLabel: 'Voz de Deus',
        text: 'Quem deu a boca ao ser humano?',
      },
      {
        id: 's2e2_12_l3',
        character: 'god',
        characterLabel: 'Voz de Deus',
        text: 'Não sou eu? Eu estarei com você. E ensinarei o que você deve falar.',
      },
      {
        id: 's2e2_12_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Moisés ainda estava com medo.',
      },
      {
        id: 's2e2_12_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas começou a entender.',
      },
      {
        id: 's2e2_12_l6',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A missão não dependeria apenas da capacidade dele. Deus estaria com ele.',
      }
    ]
  },
  {
    id: 13,
    sceneNumber: 13,
    title: 'Arão',
    subtitle: 'O ajudador',
    biblicalRef: 'Êxodo 4:14-16',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'burning_bush',
    musicTheme: 'majestic_promise',
    visualKey: 's2e2_13_aaron',
    environmentSummary: 'Paz no deserto e a chama sobrenatural.',
    musicDescription: 'A música começa a crescer.',
    soundEffects: [],
    directorLesson: 'Um amigo e parceiro para a jornada.',
    lines: [
      {
        id: 's2e2_13_l1',
        character: 'god',
        characterLabel: 'Voz de Deus',
        text: 'Seu irmão Arão estará com você.',
      },
      {
        id: 's2e2_13_l2',
        character: 'god',
        characterLabel: 'Voz de Deus',
        text: 'Ele falará por você.',
      },
      {
        id: 's2e2_13_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Moisés não precisaria enfrentar aquela missão sozinho.',
      },
      {
        id: 's2e2_13_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Deus havia preparado um ajudador.',
      }
    ]
  },
  {
    id: 14,
    sceneNumber: 14,
    title: 'Moisés Aceita',
    subtitle: 'O ' + "sim" + ' do pastor',
    biblicalRef: 'Êxodo 4:18',
    durationLabel: '35 segundos',
    estimatedDurationSec: 35,
    ambientType: 'burning_bush',
    musicTheme: 'heroic_mission',
    visualKey: 's2e2_14_accepts',
    environmentSummary: 'Vento.',
    musicDescription: 'Música de esperança, heroica mas humilde.',
    soundEffects: [],
    directorLesson: 'A coragem não é a ausência de medo, mas a obediência apesar dele.',
    lines: [
      {
        id: 's2e2_14_l1',
        character: 'moises',
        characterLabel: 'Moisés',
        text: 'Então eu vou.',
        emotionGuide: 'Decidido, voz mais firme',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e2_14_l2',
        character: 'moises',
        characterLabel: 'Moisés',
        text: 'Vou fazer o que Deus me pediu.',
      },
      {
        id: 's2e2_14_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E assim começou uma das maiores aventuras de toda a Bíblia.',
      },
      {
        id: 's2e2_14_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Um homem que se sentia pequeno... iria enfrentar o poderoso faraó.',
      },
      {
        id: 's2e2_14_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas não iria sozinho.',
      }
    ]
  },
  {
    id: 15,
    sceneNumber: 15,
    title: 'A Caminho do Egito',
    subtitle: 'O retorno',
    biblicalRef: 'Êxodo 4:20',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'desert_journey',
    musicTheme: 'adventure_epic',
    visualKey: 's2e2_15_journey',
    environmentSummary: 'Deserto. Passos. Jumentos. Vento.',
    musicDescription: 'Música de aventura. Começa a crescer significativamente.',
    soundEffects: ['desert_wind'],
    directorLesson: 'O início de uma jornada grandiosa.',
    lines: [
      {
        id: 's2e2_15_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Moisés começou sua viagem de volta ao Egito.',
      },
      {
        id: 's2e2_15_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Depois de muitos anos... ele retornaria ao lugar de onde havia fugido.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e2_15_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas agora tinha uma missão.',
      },
      {
        id: 's2e2_15_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Libertar o povo de Deus.',
        soundCue: 'Música cresce'
      }
    ]
  },
  {
    id: 16,
    sceneNumber: 16,
    title: 'A Grande Lição',
    subtitle: 'O que é ter coragem?',
    biblicalRef: '',
    durationLabel: '55 segundos',
    estimatedDurationSec: 55,
    ambientType: 'desert_wind',
    musicTheme: 'gentle_teaching',
    visualKey: 's2e2_16_lesson',
    environmentSummary: 'Vento e paz.',
    musicDescription: 'Música acolhedora.',
    soundEffects: [],
    directorLesson: 'Transmitindo a moral e encorajando as crianças nos seus próprios medos.',
    lines: [
      {
        id: 's2e2_16_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Talvez você já tenha sentido medo de fazer alguma coisa.',
      },
      {
        id: 's2e2_16_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Talvez tenha pensado: "Eu não consigo."',
      },
      {
        id: 's2e2_16_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Foi exatamente assim que Moisés se sentiu.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e2_16_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas Deus mostrou a ele uma coisa importante.',
      },
      {
        id: 's2e2_16_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Coragem não significa nunca sentir medo.',
      },
      {
        id: 's2e2_16_l6',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Coragem significa fazer o que é certo mesmo quando sentimos medo.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e2_16_l7',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E quando Deus nos chama para fazer algo bom... podemos confiar que Ele estará conosco.',
      }
    ]
  },
  {
    id: 17,
    sceneNumber: 17,
    title: 'O Grande Gancho',
    subtitle: 'Rumo à liberdade',
    biblicalRef: '',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'desert_wind',
    musicTheme: 'epic_orchestral',
    visualKey: 's2e2_17_hook',
    environmentSummary: 'Impacto musical crescendo muito forte.',
    musicDescription: 'A música cresce lentamente para ficar muito grandiosa e de aventura.',
    soundEffects: ['ocean_waves'],
    directorLesson: 'Construir o clímax e expectativa absoluta para o Mar Vermelho.',
    lines: [
      {
        id: 's2e2_17_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Agora Moisés estava indo para o Egito.',
      },
      {
        id: 's2e2_17_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E lá... ele encontraria Faraó.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e2_17_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas Faraó não queria deixar o povo partir.',
        soundCue: 'Música fica grandiosa'
      },
      {
        id: 's2e2_17_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E Deus começaria a mostrar seu poder.',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's2e2_17_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Até que um dia... um caminho impossível apareceria diante do povo.',
        soundCue: 'Música de aventura'
      },
      {
        id: 's2e2_17_l6',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Um caminho entre as águas.',
      }
    ]
  },
  {
    id: 18,
    sceneNumber: 18,
    title: 'Assinatura',
    subtitle: 'Toon Tales Kids',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'toon_tales_jingle',
    musicTheme: 'signature_jingle',
    visualKey: 's2e2_18_outro',
    environmentSummary: 'Logotipo sonoro',
    musicDescription: 'A trilha da aventura diminui. Entra o tema musical alegre, memorável e fantástico.',
    soundEffects: ['toon_tales_jingle'],
    directorLesson: 'Energético, feliz e acolhedor.',
    lines: [
      {
        id: 's2e2_18_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E essa foi mais uma aventura da Bíblia em Áudio.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
        emotionGuide: 'Voz calorosa e emocionante'
      },
      {
        id: 's2e2_18_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a história ainda não terminou...',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's2e2_18_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma nova aventura está esperando por você.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e2_18_l4',
        character: 'child',
        characterLabel: 'Crianças',
        text: 'TOON TALES KIDS!',
        emotionGuide: 'Alegre e espontânea, em coro'
      },
      {
        id: 's2e2_18_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Histórias que ensinam, aventuras que transformam!',
      }
    ]
  }
];

export const MOISES_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    dayLabel: 'O Cesto',
    question: 'Como a mãe de Moisés tentou salvar o bebê dele ser morto no Egito?',
    options: ['Levou ele de volta para a terra de Abraão', 'Colocou-o em um pequeno cesto de juncos e o deixou no rio', 'Escondeu ele em uma caverna escura no deserto', 'Deu ele para os soldados do Faraó cuidarem'],
    correctIndex: 1,
    explanation: 'Para protegê-lo, ela colocou Moisés em um cesto e o entregou nas águas do rio confiando em Deus.',
    biblicalVerse: 'Êxodo 2:3',
  },
  {
    id: 2,
    dayLabel: 'A Princesa',
    question: 'Quem encontrou o cesto de Moisés no rio e decidiu cuidar dele?',
    options: ['Um pescador que passava por perto', 'O rei do Egito e os sábios', 'A filha de Faraó', 'A própria Miriã, irmã de Moisés'],
    correctIndex: 2,
    explanation: 'A filha de Faraó teve compaixão pelo bebê chorando e decidiu que cuidaria dele como se fosse dela.',
    biblicalVerse: 'Êxodo 2:5-6',
  },
  {
    id: 3,
    dayLabel: 'O Chamado',
    question: 'Enquanto cuidava de ovelhas em Midiã, Moisés viu algo muito estranho que Deus usou para falar com ele. O que era?',
    options: ['Uma montanha de ouro brilhante', 'Uma tempestade de raios no deserto', 'Uma sarça que pegava fogo mas não era destruída', 'Um jumento que falava as palavras de Deus'],
    correctIndex: 2,
    explanation: 'Deus chamou a atenção de Moisés usando uma sarça ardente que não queimava.',
    biblicalVerse: 'Êxodo 3:2',
  },
  {
    id: 4,
    dayLabel: 'O Medo',
    question: 'Qual foi a reação de Moisés quando Deus pediu para ele ir falar com o Faraó?',
    options: ['Ele ficou com medo, inseguro e disse que não era bom com palavras', 'Ele ficou animado e correu no mesmo instante para o Egito', 'Ele mandou Arão ir sozinho na frente dele', 'Ele pediu para ser coroado rei antes de ir'],
    correctIndex: 0,
    explanation: 'Moisés sentiu muito medo e achou que não seria capaz, mas Deus o ensinou que a coragem é agir apesar do medo, pois Deus estaria com ele.',
    biblicalVerse: 'Êxodo 3:11, 4:10',
  },
  {
    id: 5,
    dayLabel: 'O Ajudador',
    question: 'Como Deus ajudou Moisés para ele não se sentir tão sozinho para falar?',
    options: ['Deus enviou milhares de anjos com espadas', 'Deus disse que seu irmão, Arão, seria o seu ajudador e falaria por ele', 'Deus enviou Josué para guiá-lo pelo caminho de volta', 'Deus não ajudou, Moisés teve que fazer tudo sem ajuda'],
    correctIndex: 1,
    explanation: 'Deus disse que Arão estava vindo ao seu encontro e iria ajudá-lo a falar com o povo e com Faraó.',
    biblicalVerse: 'Êxodo 4:14-16',
  }
];
