import { Scene, QuizQuestion } from '../types';

export const EPISODE_META_T3E6 = {
  id: 't3e6',
  title: 'As Parábolas',
  subtitle: 'Histórias que escondiam grandes lições',
  biblicalText: 'Mateus 13, Mateus 18, Lucas 10 e Lucas 15',
  durationLabel: '20 min',
  moralLesson: 'Pequenas histórias podem ensinar grandes verdades. Jesus nos ensinou a amar, perdoar e praticar Suas palavras no nosso dia a dia.',
};

export const AS_PARABOLAS_SCENES: Scene[] = [
  {
    id: 1,
    sceneNumber: 1,
    title: 'Jesus Conta Histórias',
    subtitle: 'Abertura',
    biblicalRef: '',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'crowd_teaching',
    musicTheme: 'parables_theme',
    visualKey: 's3e6_01_intro',
    environmentSummary: 'Vento suave, passarinhos, crianças correndo e multidão se acomodando.',
    musicDescription: 'Música de curiosidade e descoberta.',
    soundEffects: ['nature_sounds'],
    directorLesson: 'Introduzir a ideia de contação de histórias como ferramenta de ensino.',
    lines: [
      {
        id: 's3e6_01_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus fazia milagres. Jesus ensinava. Mas havia outra maneira especial que Ele usava para ensinar.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e6_01_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele contava histórias.',
      },
      {
        id: 's3e6_01_l3',
        character: 'crianca1',
        characterLabel: 'Criança 1',
        text: 'Histórias?',
        emotionGuide: 'Curiosa'
      },
      {
        id: 's3e6_01_l4',
        character: 'crianca2',
        characterLabel: 'Criança 2',
        text: 'Que tipo de histórias?',
      },
      {
        id: 's3e6_01_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Histórias sobre pessoas. Animais. Plantações. Famílias. Viagens. E até casas.',
        soundCue: 'Música começa'
      },
      {
        id: 's3e6_01_l6',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Essas histórias eram chamadas de...',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e6_01_l7',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'PARÁBOLAS.',
      }
    ]
  },
  {
    id: 2,
    sceneNumber: 2,
    title: 'O Bom Samaritano',
    subtitle: 'A primeira história',
    biblicalRef: 'Lucas 10:30',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'road_travel',
    musicTheme: 'samaritan_theme',
    visualKey: 's3e6_02_samaritan',
    environmentSummary: 'Estrada empoeirada, vento e passos.',
    musicDescription: 'Música leve que transiciona para tensão suave.',
    soundEffects: ['desert_wind'],
    directorLesson: 'Foco na imaginação da criança entrando na história.',
    lines: [
      {
        id: 's3e6_02_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus começou uma história. Um homem estava viajando por uma estrada.',
        soundCue: 'Passos caminhando'
      },
      {
        id: 's3e6_02_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas bandidos apareceram.',
        soundCue: 'Movimento rápido, sem violência gráfica'
      },
      {
        id: 's3e6_02_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E o homem ficou ferido e sozinho.',
        soundCue: 'Silêncio'
      }
    ]
  },
  {
    id: 3,
    sceneNumber: 3,
    title: 'As Pessoas Passam',
    subtitle: 'Ignorando o ferido',
    biblicalRef: 'Lucas 10:31-32',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'road_travel',
    musicTheme: 'sad_strings',
    visualKey: 's3e6_03_ignore',
    environmentSummary: 'Passos que se aproximam e se afastam apressadamente.',
    musicDescription: 'Música de decepção.',
    soundEffects: [],
    directorLesson: 'A frieza e a falta de empatia.',
    lines: [
      {
        id: 's3e6_03_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma pessoa passou. Mas não parou.',
      },
      {
        id: 's3e6_03_l2',
        character: 'person',
        characterLabel: 'Pessoa',
        text: 'Não posso ficar aqui.',
        emotionGuide: 'Apressada, indiferente',
        soundCue: 'Passos se afastam'
      },
      {
        id: 's3e6_03_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Outra pessoa passou. Também não ajudou.',
      }
    ]
  },
  {
    id: 4,
    sceneNumber: 4,
    title: 'O Samaritano',
    subtitle: 'Compaixão verdadeira',
    biblicalRef: 'Lucas 10:33-34',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'road_travel',
    musicTheme: 'hopeful_melody',
    visualKey: 's3e6_04_help',
    environmentSummary: 'Som de animal se aproximando. Ajuda.',
    musicDescription: 'Música de esperança e bondade.',
    soundEffects: [],
    directorLesson: 'O herói improvável da história.',
    lines: [
      {
        id: 's3e6_04_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Então apareceu um homem samaritano. Ele viu o homem ferido.',
      },
      {
        id: 's3e6_04_l2',
        character: 'samaritano',
        characterLabel: 'Samaritano',
        text: 'Você está machucado. Vou ajudar.',
        emotionGuide: 'Bondoso, prestativo',
        soundCue: 'Som de tecido e água sendo derramada'
      },
      {
        id: 's3e6_04_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele cuidou das feridas. Colocou o homem sobre seu animal. E o levou para um lugar seguro.',
      }
    ]
  },
  {
    id: 5,
    sceneNumber: 5,
    title: 'A Grande Lição',
    subtitle: 'Quem é o próximo?',
    biblicalRef: 'Lucas 10:36-37',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'crowd_teaching',
    musicTheme: 'gentle_teaching',
    visualKey: 's3e6_05_lesson1',
    environmentSummary: 'De volta à multidão ouvindo Jesus.',
    musicDescription: 'Música de sabedoria.',
    soundEffects: [],
    directorLesson: 'Trazer a lição da história.',
    lines: [
      {
        id: 's3e6_05_l1',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Quem foi o próximo daquele homem?',
      },
      {
        id: 's3e6_05_l2',
        character: 'person',
        characterLabel: 'Pessoa da multidão',
        text: 'O que teve misericórdia dele.',
      },
      {
        id: 's3e6_05_l3',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Então faça o mesmo.',
        soundCue: 'Música emocional'
      },
      {
        id: 's3e6_05_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus ensinou uma grande verdade. Nosso próximo é aquele que precisa de nossa ajuda.',
      }
    ]
  },
  {
    id: 6,
    sceneNumber: 6,
    title: 'A Ovelha Perdida',
    subtitle: 'As cem ovelhas',
    biblicalRef: 'Lucas 15:4',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'field_sheep',
    musicTheme: 'lost_sheep_theme',
    visualKey: 's3e6_06_sheep',
    environmentSummary: 'Campo, ovelhas e som de sino.',
    musicDescription: 'Música folclórica, levemente preocupada.',
    soundEffects: ['shepherd_field'],
    directorLesson: 'Começa a segunda história.',
    lines: [
      {
        id: 's3e6_06_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Depois Jesus contou outra história. Um pastor tinha cem ovelhas.',
        soundCue: 'Som de ovelhas'
      },
      {
        id: 's3e6_06_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas uma delas desapareceu.',
      }
    ]
  },
  {
    id: 7,
    sceneNumber: 7,
    title: 'O Pastor Procura',
    subtitle: 'Busca incessante',
    biblicalRef: 'Lucas 15:4',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'field_sheep',
    musicTheme: 'adventure_discovery',
    visualKey: 's3e6_07_search',
    environmentSummary: 'Passos no campo, folhas e vento.',
    musicDescription: 'Aventura leve.',
    soundEffects: [],
    directorLesson: 'O esforço e o cuidado.',
    lines: [
      {
        id: 's3e6_07_l1',
        character: 'pastor',
        characterLabel: 'Pastor',
        text: 'Preciso encontrar minha ovelha.',
      },
      {
        id: 's3e6_07_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele procurou. Procurou. Procurou.',
        soundCue: 'Ovelha bali ao longe'
      },
      {
        id: 's3e6_07_l3',
        character: 'pastor',
        characterLabel: 'Pastor',
        text: 'Ali está você!',
        soundCue: 'Música alegre'
      }
    ]
  },
  {
    id: 8,
    sceneNumber: 8,
    title: 'A Alegria',
    subtitle: 'Deus não desiste',
    biblicalRef: 'Lucas 15:5-7',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'crowd_teaching',
    musicTheme: 'triumphant_joy',
    visualKey: 's3e6_08_found',
    environmentSummary: 'Retorno para a multidão.',
    musicDescription: 'Alegria e celebração.',
    soundEffects: [],
    directorLesson: 'Deus comemora cada pessoa.',
    lines: [
      {
        id: 's3e6_08_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O pastor encontrou a ovelha. E ficou muito feliz.',
      },
      {
        id: 's3e6_08_l2',
        character: 'pastor',
        characterLabel: 'Pastor',
        text: 'Encontrei!',
        emotionGuide: 'Aliviado e feliz'
      },
      {
        id: 's3e6_08_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus ensinou que Deus se importa profundamente com cada pessoa. Mesmo quando alguém se sente perdido... Deus não deixa de procurar.',
      }
    ]
  },
  {
    id: 9,
    sceneNumber: 9,
    title: 'O Filho Pródigo',
    subtitle: 'A herança',
    biblicalRef: 'Lucas 15:11-12',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'house_father',
    musicTheme: 'prodigal_theme',
    visualKey: 's3e6_09_prodigal_start',
    environmentSummary: 'Ambiente familiar interno.',
    musicDescription: 'Música mais reflexiva, tom muda.',
    soundEffects: [],
    directorLesson: 'Início da terceira história. Foco no arrependimento e perdão.',
    lines: [
      {
        id: 's3e6_09_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Então Jesus contou outra história. Era sobre um pai e seus dois filhos.',
      },
      {
        id: 's3e6_09_l2',
        character: 'filho',
        characterLabel: 'Filho mais novo',
        text: 'Pai... Quero minha parte da herança.',
        emotionGuide: 'Impulsivo'
      },
      {
        id: 's3e6_09_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O pai entregou ao filho aquilo que ele havia pedido.',
      }
    ]
  },
  {
    id: 10,
    sceneNumber: 10,
    title: 'Longe de Casa',
    subtitle: 'Tudo perdido',
    biblicalRef: 'Lucas 15:13-17',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'road_travel',
    musicTheme: 'sad_strings',
    visualKey: 's3e6_10_far_away',
    environmentSummary: 'Vento e solidão.',
    musicDescription: 'Música diminui, fica melancólica.',
    soundEffects: ['desert_wind'],
    directorLesson: 'O erro e a consequência.',
    lines: [
      {
        id: 's3e6_10_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O filho foi embora. Viajou para muito longe. Mas desperdiçou tudo o que tinha.',
      },
      {
        id: 's3e6_10_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Quando ficou sem nada... percebeu que havia cometido um grande erro.',
      },
      {
        id: 's3e6_10_l3',
        character: 'filho',
        characterLabel: 'Filho mais novo',
        text: 'Vou voltar para casa.',
        emotionGuide: 'Arrependido, triste'
      }
    ]
  },
  {
    id: 11,
    sceneNumber: 11,
    title: 'O Pai Espera',
    subtitle: 'Ao longe',
    biblicalRef: 'Lucas 15:20',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'house_father',
    musicTheme: 'hopeful_melody',
    visualKey: 's3e6_11_waiting',
    environmentSummary: 'Vento. Silêncio e espera na varanda da casa.',
    musicDescription: 'Música emocional.',
    soundEffects: [],
    directorLesson: 'A paciência e o amor que nunca desistem.',
    lines: [
      {
        id: 's3e6_11_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Enquanto isso... o pai continuava esperando.',
        soundCue: 'Vento soprando suavemente. Silêncio'
      },
      {
        id: 's3e6_11_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Um dia... ele viu alguém ao longe.',
      },
      {
        id: 's3e6_11_l3',
        character: 'pai',
        characterLabel: 'Pai',
        text: 'Meu filho!',
        emotionGuide: 'Emocionado, surpreso',
        soundCue: 'Passos correndo rápidos'
      }
    ]
  },
  {
    id: 12,
    sceneNumber: 12,
    title: 'O Abraço',
    subtitle: 'Reencontro',
    biblicalRef: 'Lucas 15:21-24',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'house_father',
    musicTheme: 'emotional_climax',
    visualKey: 's3e6_12_embrace',
    environmentSummary: 'O abraço emocionado.',
    musicDescription: 'Música cresce, emocionante e bela.',
    soundEffects: [],
    directorLesson: 'A beleza do perdão incondicional.',
    lines: [
      {
        id: 's3e6_12_l1',
        character: 'filho',
        characterLabel: 'Filho',
        text: 'Pai... Eu errei.',
        emotionGuide: 'Chorando'
      },
      {
        id: 's3e6_12_l2',
        character: 'pai',
        characterLabel: 'Pai',
        text: 'Você voltou! Venha para casa.',
        soundCue: 'Som de abraço apertado'
      },
      {
        id: 's3e6_12_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O pai não respondeu com rejeição. Ele respondeu com amor.',
      }
    ]
  },
  {
    id: 13,
    sceneNumber: 13,
    title: 'A Lição do Perdão',
    subtitle: 'Alegria de Deus',
    biblicalRef: 'Lucas 15:7',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'crowd_teaching',
    musicTheme: 'gentle_teaching',
    visualKey: 's3e6_13_lesson3',
    environmentSummary: 'Volta à multidão.',
    musicDescription: 'Música pacífica e didática.',
    soundEffects: [],
    directorLesson: 'Jesus conecta a história ao amor do Pai Celestial.',
    lines: [
      {
        id: 's3e6_13_l1',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Assim também existe alegria quando alguém volta para Deus.',
      },
      {
        id: 's3e6_13_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus ensinou sobre perdão. Sobre arrependimento. E sobre o amor de Deus.',
      }
    ]
  },
  {
    id: 14,
    sceneNumber: 14,
    title: 'O Semeador',
    subtitle: 'As sementes',
    biblicalRef: 'Mateus 13:3-4',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'field_sower',
    musicTheme: 'sower_theme',
    visualKey: 's3e6_14_sower',
    environmentSummary: 'Campo agrícola, pássaros, sementes caindo na terra.',
    musicDescription: 'Música rústica, curiosa.',
    soundEffects: ['nature_sounds'],
    directorLesson: 'Início da quarta parábola.',
    lines: [
      {
        id: 's3e6_14_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Depois Jesus contou uma história sobre um agricultor.',
        soundCue: 'Som de sementes sendo jogadas'
      },
      {
        id: 's3e6_14_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele saiu para semear.',
      }
    ]
  },
  {
    id: 15,
    sceneNumber: 15,
    title: 'Diferentes Terrenos',
    subtitle: 'O caminho das sementes',
    biblicalRef: 'Mateus 13:4-8',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'field_sower',
    musicTheme: 'curious_discovery',
    visualKey: 's3e6_15_seeds',
    environmentSummary: 'Sons diferentes para cada terreno.',
    musicDescription: 'Música acompanha cada ambiente.',
    soundEffects: [],
    directorLesson: 'Mostrar a diversidade de corações através dos sons.',
    lines: [
      {
        id: 's3e6_15_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Algumas sementes caíram pelo caminho.',
        soundCue: 'Sementes batendo no chão duro. Pássaros grasnando.'
      },
      {
        id: 's3e6_15_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Outras caíram em pedras.',
        soundCue: 'Sementes quicando em pedras.'
      },
      {
        id: 's3e6_15_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Outras entre espinhos.',
        soundCue: 'Som de vento batendo em mato seco.'
      },
      {
        id: 's3e6_15_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas algumas caíram em boa terra.',
        soundCue: 'Som de crescimento suave e mágico.'
      }
    ]
  },
  {
    id: 16,
    sceneNumber: 16,
    title: 'A Lição do Coração',
    subtitle: 'A boa terra',
    biblicalRef: 'Mateus 13:18-23',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'crowd_teaching',
    musicTheme: 'gentle_teaching',
    visualKey: 's3e6_16_lesson4',
    environmentSummary: 'Transição.',
    musicDescription: 'Ensinamento terno.',
    soundEffects: [],
    directorLesson: 'Nossos corações são o terreno.',
    lines: [
      {
        id: 's3e6_16_l1',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'A semente representa a Palavra de Deus.',
      },
      {
        id: 's3e6_16_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus ensinou que nossos corações podem ser como diferentes tipos de solo. Quando ouvimos a Palavra... precisamos permitir que ela cresça dentro de nós.',
      }
    ]
  },
  {
    id: 17,
    sceneNumber: 17,
    title: 'A Casa sobre a Rocha',
    subtitle: 'Os construtores',
    biblicalRef: 'Mateus 7:24',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'house_sand_rock',
    musicTheme: 'rock_house_theme',
    visualKey: 's3e6_17_builders',
    environmentSummary: 'Som de marcenaria e construção.',
    musicDescription: 'Música de aventura e trabalho.',
    soundEffects: ['construction_site'],
    directorLesson: 'A última parábola. Foco no trabalho de construção.',
    lines: [
      {
        id: 's3e6_17_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Por fim... Jesus contou sobre dois homens que construíram casas.',
        soundCue: 'Som de construção'
      }
    ]
  },
  {
    id: 18,
    sceneNumber: 18,
    title: 'Duas Casas',
    subtitle: 'Areia e pedra',
    biblicalRef: 'Mateus 7:24-26',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'house_sand_rock',
    musicTheme: 'rock_house_theme',
    visualKey: 's3e6_18_two_houses',
    environmentSummary: 'Diferentes terrenos de fundação.',
    musicDescription: 'Música de trabalho continua.',
    soundEffects: [],
    directorLesson: 'As escolhas que fazemos.',
    lines: [
      {
        id: 's3e6_18_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Um construiu sua casa sobre a areia.',
        soundCue: 'Som de areia se mexendo'
      },
      {
        id: 's3e6_18_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Outro construiu sobre uma rocha.',
        soundCue: 'Som de pedras grandes e firmes'
      }
    ]
  },
  {
    id: 19,
    sceneNumber: 19,
    title: 'A Tempestade',
    subtitle: 'A provação',
    biblicalRef: 'Mateus 7:27',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'house_sand_rock',
    musicTheme: 'storm_chaos',
    visualKey: 's3e6_19_storm',
    environmentSummary: 'Chuva, vento, trovões.',
    musicDescription: 'Música tensa de tempestade.',
    soundEffects: ['rain_storm'],
    directorLesson: 'A tempestade é inevitável.',
    lines: [
      {
        id: 's3e6_19_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Então veio uma grande tempestade.',
        soundCue: 'A chuva aumenta e venta forte'
      },
      {
        id: 's3e6_19_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A casa construída sobre a areia não resistiu.',
        soundCue: 'Som de madeira desabando. Depois: silêncio'
      }
    ]
  },
  {
    id: 20,
    sceneNumber: 20,
    title: 'A Casa Permanece',
    subtitle: 'Firme na rocha',
    biblicalRef: 'Mateus 7:25',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'house_sand_rock',
    musicTheme: 'triumphant_joy',
    visualKey: 's3e6_20_rock',
    environmentSummary: 'Vento e chuva, mas a casa não cede.',
    musicDescription: 'Música cresce de forma heroica.',
    soundEffects: ['rain_storm'],
    directorLesson: 'A recompensa da obediência.',
    lines: [
      {
        id: 's3e6_20_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a casa construída sobre a rocha permaneceu firme.',
      }
    ]
  },
  {
    id: 21,
    sceneNumber: 21,
    title: 'A Grande Lição Final',
    subtitle: 'Praticar o que ouve',
    biblicalRef: 'Mateus 7:24',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'crowd_teaching',
    musicTheme: 'gentle_teaching',
    visualKey: 's3e6_21_lesson5',
    environmentSummary: 'De volta aos ouvintes de Jesus.',
    musicDescription: 'Música sábia.',
    soundEffects: [],
    directorLesson: 'O ensinamento que encerra as histórias.',
    lines: [
      {
        id: 's3e6_21_l1',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Quem ouve minhas palavras e pratica o que ensino... é como aquele que construiu sua casa sobre a rocha.',
      },
      {
        id: 's3e6_21_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Não basta apenas ouvir. Precisamos colocar em prática.',
      }
    ]
  },
  {
    id: 22,
    sceneNumber: 22,
    title: 'As Cinco Lições',
    subtitle: 'Resumo das histórias',
    biblicalRef: '',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'warm_acoustic',
    musicTheme: 'parables_theme',
    visualKey: 's3e6_22_summary',
    environmentSummary: 'Clima de recapitulação.',
    musicDescription: 'Música reflexiva.',
    soundEffects: [],
    directorLesson: 'Reforçar tudo que a criança ouviu no episódio de forma rápida e poética.',
    lines: [
      {
        id: 's3e6_22_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Cinco histórias. Cinco grandes lições.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e6_22_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O Bom Samaritano... Ajude quem precisa.',
      },
      {
        id: 's3e6_22_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A Ovelha Perdida... Deus se importa com cada pessoa.',
      },
      {
        id: 's3e6_22_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O Filho Pródigo... Existe perdão para quem volta.',
      },
      {
        id: 's3e6_22_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O Semeador... Cuide do seu coração.',
      },
      {
        id: 's3e6_22_l6',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A Casa sobre a Rocha... Ouça Jesus e pratique seus ensinamentos.',
      }
    ]
  },
  {
    id: 23,
    sceneNumber: 23,
    title: 'Uma Criança Pergunta',
    subtitle: 'A verdade por trás da história',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'crowd_teaching',
    musicTheme: 'gentle_teaching',
    visualKey: 's3e6_23_question',
    environmentSummary: 'A criança descobre a magia das parábolas.',
    musicDescription: 'Terno e doce.',
    soundEffects: [],
    directorLesson: 'A revelação de que brincar de imaginar também é aprender.',
    lines: [
      {
        id: 's3e6_23_l1',
        character: 'crianca1',
        characterLabel: 'Criança',
        text: 'Então Jesus contava histórias para ensinar?',
      },
      {
        id: 's3e6_23_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Exatamente.',
      },
      {
        id: 's3e6_23_l3',
        character: 'crianca2',
        characterLabel: 'Criança 2',
        text: 'E as histórias eram simples.',
      },
      {
        id: 's3e6_23_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas as lições eram enormes.',
      }
    ]
  },
  {
    id: 24,
    sceneNumber: 24,
    title: 'Para as Crianças',
    subtitle: 'Pratique hoje',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'warm_acoustic',
    musicTheme: 'parables_theme',
    visualKey: 's3e6_24_children',
    environmentSummary: 'Chamada para ação.',
    musicDescription: 'Música emocional acolhedora.',
    soundEffects: [],
    directorLesson: 'Desafio para aplicar no mundo real.',
    lines: [
      {
        id: 's3e6_24_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E agora... qual dessas histórias você mais gostou?',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e6_24_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Talvez você possa começar colocando uma dessas lições em prática hoje. Ajude alguém. Perdoe. Seja gentil. Cuide do seu coração. E faça o bem.',
      }
    ]
  },
  {
    id: 25,
    sceneNumber: 25,
    title: 'Frase Marcante',
    subtitle: 'Dentro do coração',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'warm_acoustic',
    musicTheme: 'emotional_climax',
    visualKey: 's3e6_25_phrase',
    environmentSummary: 'Encerramento emocional.',
    musicDescription: 'Música toca fundo.',
    soundEffects: [],
    directorLesson: 'O poder das histórias.',
    lines: [
      {
        id: 's3e6_25_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus transformava grandes verdades em histórias que todos podiam entender.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e6_25_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Porque algumas histórias... ficam para sempre dentro do coração.',
      }
    ]
  },
  {
    id: 26,
    sceneNumber: 26,
    title: 'Gancho para o Episódio 17',
    subtitle: 'O barco',
    biblicalRef: '',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'storm_sea',
    musicTheme: 'parables_hook',
    visualKey: 's3e6_26_hook',
    environmentSummary: 'Um barco entra na água calmo. Mas a tensão cresce.',
    musicDescription: 'Música começa misteriosa e ameaçadora.',
    soundEffects: ['ocean_waters'],
    directorLesson: 'Preparar a tensão espetacular do próximo episódio (O mar agitado).',
    lines: [
      {
        id: 's3e6_26_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas certa vez... Jesus e seus discípulos entraram em um barco.',
        soundCue: 'Som de madeira na água'
      },
      {
        id: 's3e6_26_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O céu estava tranquilo.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e6_26_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Por enquanto.',
        soundCue: 'Som distante de trovão. Música aumenta'
      },
      {
        id: 's3e6_26_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Porque uma tempestade estava se aproximando.',
      }
    ]
  },
  {
    id: 27,
    sceneNumber: 27,
    title: 'Próximo Episódio',
    subtitle: 'A tempestade',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'storm_sea',
    musicTheme: 'storm_chaos',
    visualKey: 's3e6_27_next',
    environmentSummary: 'Trailer forte.',
    musicDescription: 'Música termina num ápice épico.',
    soundEffects: ['ocean_waves'],
    directorLesson: 'Deixar as crianças ansiosas pela ação.',
    lines: [
      {
        id: 's3e6_27_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'No próximo episódio... A Tempestade no Mar. Quando Jesus acalmou o vento e as ondas.',
        soundCue: 'Onda forte bate e música corta.'
      }
    ]
  },
  {
    id: 28,
    sceneNumber: 28,
    title: 'Assinatura',
    subtitle: 'Toon Tales Kids',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'toon_tales_jingle',
    musicTheme: 'signature_jingle',
    visualKey: 's3e6_28_outro',
    environmentSummary: 'Logotipo sonoro.',
    musicDescription: 'A música diminui. Entra o tema alegre da série.',
    soundEffects: ['toon_tales_jingle'],
    directorLesson: 'Encerramento vibrante oficial.',
    lines: [
      {
        id: 's3e6_28_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E essa foi mais uma aventura da Bíblia em Áudio.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e6_28_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a história ainda não terminou...',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's3e6_28_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma nova aventura está esperando por você.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e6_28_l4',
        character: 'child',
        characterLabel: 'Crianças',
        text: 'TOON TALES KIDS!',
        emotionGuide: 'Em coro feliz e forte'
      },
      {
        id: 's3e6_28_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Histórias que ensinam, aventuras que transformam!',
      }
    ]
  }
];

export const AS_PARABOLAS_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    dayLabel: 'O Bom Samaritano',
    question: 'Na história do homem ferido na estrada, quem foi a única pessoa que parou para ajudá-lo?',
    options: ['Um policial', 'Uma pessoa muito rica', 'Um samaritano bondoso', 'Um dos bandidos que voltou'],
    correctIndex: 2,
    explanation: 'Enquanto outras pessoas passaram direto sem se importar, o homem samaritano parou, cuidou das feridas e foi o verdadeiro "próximo".',
    biblicalVerse: 'Lucas 10:33',
  },
  {
    id: 2,
    dayLabel: 'A Ovelha Perdida',
    question: 'O que o pastor fez quando percebeu que uma de suas cem ovelhas havia desaparecido?',
    options: ['Não se importou, pois ainda tinha 99', 'Comprou outra ovelha nova', 'Procurou sem parar até encontrá-la', 'Mandou o cachorro procurá-la e foi dormir'],
    correctIndex: 2,
    explanation: 'Assim como Deus nunca desiste de uma pessoa, o pastor procurou sem parar até encontrar a sua ovelhinha perdida, e comemorou muito.',
    biblicalVerse: 'Lucas 15:4',
  },
  {
    id: 3,
    dayLabel: 'O Filho Pródigo',
    question: 'Como o pai reagiu quando o filho que havia gastado todo o dinheiro finalmente voltou para casa arrependido?',
    options: ['Expulsou o filho e mandou ele embora', 'Correu, o abraçou e o recebeu com muito amor', 'Cobrou que ele devolvesse todo o dinheiro', 'Fingiu que não o conhecia'],
    correctIndex: 1,
    explanation: 'Deus é como aquele pai maravilhoso! Em vez de rejeitar o filho que errou, ele correu ao seu encontro, o perdoou e o abraçou fortemente.',
    biblicalVerse: 'Lucas 15:20',
  },
  {
    id: 4,
    dayLabel: 'O Semeador',
    question: 'Na parábola sobre as sementes que caíam na terra, o que a semente representa?',
    options: ['Comida gostosa', 'Dinheiro que plantamos', 'A Palavra de Deus plantada no nosso coração', 'Flores no campo'],
    correctIndex: 2,
    explanation: 'As sementes são a Palavra de Deus. Jesus nos ensinou que nosso coração deve ser como a "boa terra" que faz os ensinamentos crescerem.',
    biblicalVerse: 'Mateus 13:19',
  },
  {
    id: 5,
    dayLabel: 'A Casa Sobre a Rocha',
    question: 'Qual casa conseguiu resistir sem cair durante a grande tempestade e os ventos fortes?',
    options: ['A casa construída sobre a areia fofa', 'A casa construída de palha', 'A casa com o telhado verde', 'A casa construída sobre a rocha firme'],
    correctIndex: 3,
    explanation: 'Para nossa vida ficar "firme como uma rocha" quando os problemas vierem, não basta apenas escutar Jesus, precisamos praticar Seus ensinamentos.',
    biblicalVerse: 'Mateus 7:25',
  }
];
