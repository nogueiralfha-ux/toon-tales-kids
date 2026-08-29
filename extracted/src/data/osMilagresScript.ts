import { Scene, QuizQuestion } from '../types';

export const EPISODE_META_T3E5 = {
  id: 't3e5',
  title: 'Os Milagres',
  subtitle: 'Quando Jesus fez o impossível acontecer',
  biblicalText: 'Evangelhos de Mateus, Marcos, Lucas e João',
  durationLabel: '20 min',
  moralLesson: 'Jesus não apenas fazia coisas impressionantes, Ele curava por causa de Seu grande amor. Para Ele, nenhuma pessoa era invisível. Um dos maiores milagres começa quando alguém decide cuidar de outra pessoa.',
};

export const OS_MILAGRES_SCENES: Scene[] = [
  {
    id: 1,
    sceneNumber: 1,
    title: 'Uma Casa Lotada',
    subtitle: 'Muitas pessoas',
    biblicalRef: 'Marcos 2:1-2',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'house_crowd',
    musicTheme: 'playful_adventure',
    visualKey: 's3e5_01_house',
    environmentSummary: 'Casa simples. Multidão do lado de fora.',
    musicDescription: 'Música de aventura animada.',
    soundEffects: ['market_city'],
    directorLesson: 'Estabelecer o contexto: Jesus era muito procurado, a ponto de não haver espaço para mais ninguém.',
    lines: [
      {
        id: 's3e5_01_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os discípulos estavam apenas começando sua caminhada com Jesus. Mas logo perceberiam algo extraordinário.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e5_01_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus não apenas ensinava. Ele também ajudava pessoas.',
        soundCue: 'Multidão crescendo'
      },
      {
        id: 's3e5_01_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Doentes procuravam Jesus. Pessoas aflitas vinham até Ele. E histórias incríveis começaram a acontecer.',
        soundCue: 'Música cresce'
      },
      {
        id: 's3e5_01_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Essas histórias ficaram conhecidas como...',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e5_01_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'MILAGRES.',
      },
      {
        id: 's3e5_01_l6',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Certa vez, Jesus estava ensinando em uma casa. A casa estava completamente cheia.',
      },
      {
        id: 's3e5_01_l7',
        character: 'person',
        characterLabel: 'Pessoa',
        text: 'Não consigo nem entrar!',
      },
      {
        id: 's3e5_01_l8',
        character: 'homem1',
        characterLabel: 'Outra pessoa',
        text: 'Tem gente por toda parte!',
      },
      {
        id: 's3e5_01_l9',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Todos queriam ouvir Jesus.',
      }
    ]
  },
  {
    id: 2,
    sceneNumber: 2,
    title: 'O Homem que Não Conseguia Andar',
    subtitle: 'Os amigos leais',
    biblicalRef: 'Marcos 2:3',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'house_crowd',
    musicTheme: 'curious_discovery',
    visualKey: 's3e5_02_paralytic',
    environmentSummary: 'Multidão.',
    musicDescription: 'Música muda para o tom de curiosidade e determinação.',
    soundEffects: ['desert_wind'],
    directorLesson: 'A amizade e o esforço de trazer alguém a Jesus.',
    lines: [
      {
        id: 's3e5_02_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Então chegaram alguns homens carregando um amigo que não conseguia andar.',
      },
      {
        id: 's3e5_02_l2',
        character: 'amigo1',
        characterLabel: 'Amigo',
        text: 'Precisamos levá-lo até Jesus.',
      },
      {
        id: 's3e5_02_l3',
        character: 'amigo2',
        characterLabel: 'Outro',
        text: 'Mas como vamos entrar?',
        soundCue: 'Multidão bloqueando'
      },
      {
        id: 's3e5_02_l4',
        character: 'amigo1',
        characterLabel: 'Amigo',
        text: 'Não vamos desistir.',
      }
    ]
  },
  {
    id: 3,
    sceneNumber: 3,
    title: 'Uma Ideia Corajosa',
    subtitle: 'Pelo telhado',
    biblicalRef: 'Marcos 2:4',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'house_crowd',
    musicTheme: 'playful_adventure',
    visualKey: 's3e5_03_roof',
    environmentSummary: 'Eles sobem no telhado de palha/barro/madeira.',
    musicDescription: 'Aventura determinada.',
    soundEffects: ['construction_site'],
    directorLesson: 'A ousadia gerada pela fé.',
    lines: [
      {
        id: 's3e5_03_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Como não conseguiam passar pela porta... eles tiveram uma ideia.',
      },
      {
        id: 's3e5_03_l2',
        character: 'amigo1',
        characterLabel: 'Amigo',
        text: 'Vamos subir.',
      },
      {
        id: 's3e5_03_l3',
        character: 'amigo2',
        characterLabel: 'Outro',
        text: 'No telhado?',
      },
      {
        id: 's3e5_03_l4',
        character: 'amigo1',
        characterLabel: 'Amigo',
        text: 'Sim!',
        soundCue: 'Som de madeira, movimento'
      },
      {
        id: 's3e5_03_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles abriram uma passagem no teto... e baixaram o amigo até onde Jesus estava.',
      },
      {
        id: 's3e5_03_l6',
        character: 'person',
        characterLabel: 'Pessoas',
        text: 'Olhem! O que está acontecendo?',
      }
    ]
  },
  {
    id: 4,
    sceneNumber: 4,
    title: 'Jesus Olha Para Ele',
    subtitle: 'Perdão',
    biblicalRef: 'Marcos 2:5-7',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'house_crowd',
    musicTheme: 'peaceful_miracle',
    visualKey: 's3e5_04_forgiveness',
    environmentSummary: 'Silêncio dentro da casa.',
    musicDescription: 'Música fica suave e terna.',
    soundEffects: [],
    directorLesson: 'A prioridade de Jesus: o coração.',
    lines: [
      {
        id: 's3e5_04_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus olhou para aquele homem. E também viu a fé daqueles amigos.',
      },
      {
        id: 's3e5_04_l2',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Filho... seus pecados estão perdoados.',
        emotionGuide: 'Sereno, compassivo'
      },
      {
        id: 's3e5_04_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Alguns mestres ficaram incomodados.',
      }
    ]
  },
  {
    id: 5,
    sceneNumber: 5,
    title: 'Levante-se',
    subtitle: 'A cura do corpo',
    biblicalRef: 'Marcos 2:10-12',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'house_crowd',
    musicTheme: 'miracles_theme',
    visualKey: 's3e5_05_healing',
    environmentSummary: 'O impacto do milagre, murmúrios mudando para choque.',
    musicDescription: 'Música cresce explodindo em alegria.',
    soundEffects: ['market_city'],
    directorLesson: 'O poder sobre o corpo como prova do poder sobre o pecado.',
    lines: [
      {
        id: 's3e5_05_l1',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Para que vocês saibam que o Filho do Homem tem autoridade... Eu digo a você... Levante-se. Pegue sua maca... E vá para casa.',
      },
      {
        id: 's3e5_05_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O homem tentou se mover.',
        soundCue: 'Movimento, homem respira fundo'
      },
      {
        id: 's3e5_05_l3',
        character: 'homem',
        characterLabel: 'Homem',
        text: 'Eu... consigo!',
        emotionGuide: 'Choque e emoção'
      },
      {
        id: 's3e5_05_l4',
        character: 'person',
        characterLabel: 'Multidão',
        text: 'Uau! Ele está andando!',
        soundCue: 'Música explode em alegria'
      }
    ]
  },
  {
    id: 6,
    sceneNumber: 6,
    title: 'Primeira Lição',
    subtitle: 'Não desistir',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'warm_acoustic',
    musicTheme: 'gentle_teaching',
    visualKey: 's3e5_06_lesson',
    environmentSummary: 'Transição suave.',
    musicDescription: 'Música doce.',
    soundEffects: [],
    directorLesson: 'O valor da amizade e compaixão conectada à fé.',
    lines: [
      {
        id: 's3e5_06_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os amigos não desistiram. E Jesus demonstrou compaixão.',
      },
      {
        id: 's3e5_06_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Às vezes... ajudar alguém significa simplesmente não desistir dela.',
      }
    ]
  },
  {
    id: 7,
    sceneNumber: 7,
    title: 'Um Homem Afastado',
    subtitle: 'O homem com lepra',
    biblicalRef: 'Marcos 1:40',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'road_walking',
    musicTheme: 'melancholy_underscore',
    visualKey: 's3e5_07_leper',
    environmentSummary: 'Caminho empoeirado, pessoas se afastando rapidamente com nojo e medo.',
    musicDescription: 'Música muda para triste e tensa.',
    soundEffects: ['desert_wind'],
    directorLesson: 'A dor da rejeição social do homem com lepra.',
    lines: [
      {
        id: 's3e5_07_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Em outra ocasião... um homem que sofria com uma doença de pele se aproximou de Jesus.',
        soundCue: 'Pessoas se afastando'
      },
      {
        id: 's3e5_07_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Naquela época, pessoas com determinadas doenças eram muitas vezes afastadas da comunidade.',
      },
      {
        id: 's3e5_07_l3',
        character: 'homem',
        characterLabel: 'Homem',
        text: 'Senhor... se quiser... pode me purificar.',
        emotionGuide: 'Quebrado, humilde, com esperança'
      }
    ]
  },
  {
    id: 8,
    sceneNumber: 8,
    title: 'Jesus Demonstra Compaixão',
    subtitle: 'O toque',
    biblicalRef: 'Marcos 1:41-42',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'road_walking',
    musicTheme: 'miracles_theme',
    visualKey: 's3e5_08_compassion',
    environmentSummary: 'Apenas a voz de Jesus em meio ao silêncio.',
    musicDescription: 'Delicada e curadora.',
    soundEffects: [],
    directorLesson: 'O milagre que começa com o ato de compaixão e o toque (algo proibido na época).',
    lines: [
      {
        id: 's3e5_08_l1',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Eu quero.',
        soundCue: 'Música delicada'
      },
      {
        id: 's3e5_08_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus estendeu a mão. Demonstrou compaixão. E o homem foi curado.',
      },
      {
        id: 's3e5_08_l3',
        character: 'homem',
        characterLabel: 'Homem',
        text: 'Estou curado!',
        emotionGuide: 'Alegria e surpresa',
        soundCue: 'Música de esperança'
      }
    ]
  },
  {
    id: 9,
    sceneNumber: 9,
    title: 'A Compaixão',
    subtitle: 'Enxergar o invisível',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'warm_acoustic',
    musicTheme: 'gentle_teaching',
    visualKey: 's3e5_09_meaning',
    environmentSummary: 'Transição.',
    musicDescription: 'Música terna.',
    soundEffects: [],
    directorLesson: 'Jesus quebrava o preconceito com amor.',
    lines: [
      {
        id: 's3e5_09_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus não tratou aquele homem como alguém invisível.',
      },
      {
        id: 's3e5_09_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele o viu. Ouviu. E demonstrou amor.',
      }
    ]
  },
  {
    id: 10,
    sceneNumber: 10,
    title: 'O Centurião',
    subtitle: 'Uma palavra basta',
    biblicalRef: 'Mateus 8:5-8',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'road_walking',
    musicTheme: 'curious_discovery',
    visualKey: 's3e5_10_centurion',
    environmentSummary: 'Um oficial romano se aproxima com grande respeito.',
    musicDescription: 'Música de caminhada, um pouco mais firme.',
    soundEffects: [],
    directorLesson: 'A fé de alguém que, culturalmente, não faria parte do povo.',
    lines: [
      {
        id: 's3e5_10_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Em outra cidade... um oficial romano procurou Jesus.',
      },
      {
        id: 's3e5_10_l2',
        character: 'centuriao',
        characterLabel: 'Centurião',
        text: 'Senhor... meu servo está muito doente. Ele está sofrendo.',
        emotionGuide: 'Firme, mas respeitoso e aflito'
      },
      {
        id: 's3e5_10_l3',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Eu irei até ele.',
      },
      {
        id: 's3e5_10_l4',
        character: 'centuriao',
        characterLabel: 'Centurião',
        text: 'Senhor... não sou digno de que entre em minha casa. Mas basta dizer uma palavra... E meu servo ficará bem.',
      }
    ]
  },
  {
    id: 11,
    sceneNumber: 11,
    title: 'A Fé Surpreendente',
    subtitle: 'Feito conforme creu',
    biblicalRef: 'Mateus 8:10-13',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'road_walking',
    musicTheme: 'miracles_theme',
    visualKey: 's3e5_11_faith',
    environmentSummary: 'O impacto da resposta.',
    musicDescription: 'Música emocional de admiração.',
    soundEffects: [],
    directorLesson: 'O milagre à distância pelo poder da palavra.',
    lines: [
      {
        id: 's3e5_11_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus ficou admirado com a fé daquele homem.',
      },
      {
        id: 's3e5_11_l2',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Vá. Será feito conforme você creu.',
      },
      {
        id: 's3e5_11_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E naquele momento... o servo foi restaurado.',
      }
    ]
  },
  {
    id: 12,
    sceneNumber: 12,
    title: 'A Tempestade',
    subtitle: 'No mar',
    biblicalRef: 'Marcos 4:35',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'storm_sea',
    musicTheme: 'playful_adventure',
    visualKey: 's3e5_12_boat',
    environmentSummary: 'Começa calmo, barco na água.',
    musicDescription: 'Grande mudança musical para ambiente aquático.',
    soundEffects: ['ocean_waters'],
    directorLesson: 'Mudança de cenário, de curas terrestres para a natureza.',
    lines: [
      {
        id: 's3e5_12_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas nem todos os milagres aconteceriam em terra. Um dia... Jesus entrou em um barco com seus discípulos.',
      },
      {
        id: 's3e5_12_l2',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Vamos atravessar para o outro lado.',
        soundCue: 'Som de barco e remos'
      }
    ]
  },
  {
    id: 13,
    sceneNumber: 13,
    title: 'O Vento Começa',
    subtitle: 'Tensão',
    biblicalRef: 'Marcos 4:37',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'storm_sea',
    musicTheme: 'storm_chaos',
    visualKey: 's3e5_13_wind',
    environmentSummary: 'Ondas começam a bater mais forte.',
    musicDescription: 'Música tensa começa a crescer.',
    soundEffects: ['rain_storm'],
    directorLesson: 'A escalada do perigo no meio do mar.',
    lines: [
      {
        id: 's3e5_13_l1',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'O vento está aumentando!',
      },
      {
        id: 's3e5_13_l2',
        character: 'andre',
        characterLabel: 'André',
        text: 'As ondas estão ficando grandes!',
      },
      {
        id: 's3e5_13_l3',
        character: 'tiago',
        characterLabel: 'Tiago',
        text: 'Segurem o barco!',
      }
    ]
  },
  {
    id: 14,
    sceneNumber: 14,
    title: 'Desespero',
    subtitle: 'Vamos afundar',
    biblicalRef: 'Marcos 4:38',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'storm_sea',
    musicTheme: 'storm_chaos',
    visualKey: 's3e5_14_storm',
    environmentSummary: 'Vento forte, madeira rangendo.',
    musicDescription: 'Música de caos e perigo total.',
    soundEffects: ['rain_storm', 'ocean_waves'],
    directorLesson: 'O contraste entre o caos da natureza e o silêncio que virá a seguir.',
    lines: [
      {
        id: 's3e5_14_l1',
        character: 'joao',
        characterLabel: 'João',
        text: 'Jesus! Precisamos de ajuda!',
        emotionGuide: 'Desesperado'
      },
      {
        id: 's3e5_14_l2',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Senhor! Vamos afundar!',
      }
    ]
  },
  {
    id: 15,
    sceneNumber: 15,
    title: 'Jesus Acalma a Tempestade',
    subtitle: 'Silêncio',
    biblicalRef: 'Marcos 4:39-40',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'storm_sea',
    musicTheme: 'peaceful_miracle',
    visualKey: 's3e5_15_calm',
    environmentSummary: 'Tudo silencia drasticamente após o comando.',
    musicDescription: 'A música para no meio. Depois, volta muito suave.',
    soundEffects: [],
    directorLesson: 'O momento sonoro mais marcante do episódio: do caos extremo à calmaria absoluta na mesma hora.',
    lines: [
      {
        id: 's3e5_15_l1',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Por que vocês estão com tanto medo?',
        soundCue: 'Jesus se levanta, o som diminui um pouco'
      },
      {
        id: 's3e5_15_l2',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Tenham fé.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e5_15_l3',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Silêncio. Fique quieto.',
        emotionGuide: 'Forte, autoritário'
      },
      {
        id: 's3e5_15_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'As ondas diminuem. O vento desaparece.',
        soundCue: 'Silêncio instantâneo e mar tranquilo'
      }
    ]
  },
  {
    id: 16,
    sceneNumber: 16,
    title: 'O Silêncio do Mar',
    subtitle: 'Maravilha',
    biblicalRef: 'Marcos 4:41',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'storm_sea',
    musicTheme: 'pure_serenity',
    visualKey: 's3e5_16_silence',
    environmentSummary: 'Água super tranquila, som agradável do mar calmo.',
    musicDescription: 'Música de admiração e pasmo.',
    soundEffects: ['ocean_waters'],
    directorLesson: 'O susto positivo com a autoridade divina sobre a criação.',
    lines: [
      {
        id: 's3e5_16_l1',
        character: 'andre',
        characterLabel: 'André',
        text: 'Que homem é esse?',
        emotionGuide: 'Pasmo, ofegante'
      },
      {
        id: 's3e5_16_l2',
        character: 'joao',
        characterLabel: 'João',
        text: 'Até o vento e o mar obedecem a Ele.',
      },
      {
        id: 's3e5_16_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os discípulos estavam maravilhados.',
      }
    ]
  },
  {
    id: 17,
    sceneNumber: 17,
    title: 'O Pedido de Jairo',
    subtitle: 'Desespero de um pai',
    biblicalRef: 'Marcos 5:21-24',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'road_walking',
    musicTheme: 'sad_strings',
    visualKey: 's3e5_17_jairus',
    environmentSummary: 'Multidão em terra.',
    musicDescription: 'Música muda para triste e emocional.',
    soundEffects: [],
    directorLesson: 'O poder de Jesus sobre a vida e a morte.',
    lines: [
      {
        id: 's3e5_17_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas ainda havia outra história. Um homem chamado Jairo procurou Jesus.',
      },
      {
        id: 's3e5_17_l2',
        character: 'jairo',
        characterLabel: 'Jairo',
        text: 'Minha filha está muito doente. Por favor... Venha comigo.',
        emotionGuide: 'Pai desesperado'
      },
      {
        id: 's3e5_17_l3',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Vamos.',
      }
    ]
  },
  {
    id: 18,
    sceneNumber: 18,
    title: 'A Pior Notícia',
    subtitle: 'Tarde demais?',
    biblicalRef: 'Marcos 5:35',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'road_walking',
    musicTheme: 'melancholy_underscore',
    visualKey: 's3e5_18_news',
    environmentSummary: 'Passos param subitamente.',
    musicDescription: 'A música para no impacto da má notícia.',
    soundEffects: ['market_city'],
    directorLesson: 'O luto batendo à porta. Tratado com respeito e delicadeza.',
    lines: [
      {
        id: 's3e5_18_l1',
        character: 'mensageiro',
        characterLabel: 'Mensageiro',
        text: 'Jairo... não precisa mais incomodar Jesus.',
        emotionGuide: 'Triste, entregando más notícias'
      },
      {
        id: 's3e5_18_l2',
        character: 'mensageiro',
        characterLabel: 'Mensageiro',
        text: 'Sua filha morreu.',
        soundCue: 'Música para, Jairo respira pesadamente'
      },
      {
        id: 's3e5_18_l3',
        character: 'jairo',
        characterLabel: 'Jairo',
        text: 'Não...',
        emotionGuide: 'Chorando baixo'
      }
    ]
  },
  {
    id: 19,
    sceneNumber: 19,
    title: 'Não Tenha Medo',
    subtitle: 'Apenas creia',
    biblicalRef: 'Marcos 5:36',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'road_walking',
    musicTheme: 'hopeful_melody',
    visualKey: 's3e5_19_dont_fear',
    environmentSummary: 'Firmeza e esperança na voz de Jesus.',
    musicDescription: 'A fé superando o luto.',
    soundEffects: [],
    directorLesson: 'Jesus trazendo luz na escuridão extrema.',
    lines: [
      {
        id: 's3e5_19_l1',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Não tenha medo. Continue confiando.',
        emotionGuide: 'Extremamente encorajador'
      },
      {
        id: 's3e5_19_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus continuou caminhando.',
      }
    ]
  },
  {
    id: 20,
    sceneNumber: 20,
    title: 'A Casa de Jairo',
    subtitle: 'Choro',
    biblicalRef: 'Marcos 5:38-39',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'jairus_house',
    musicTheme: 'sad_strings',
    visualKey: 's3e5_20_house_mourning',
    environmentSummary: 'Choro e tristeza na casa.',
    musicDescription: 'Música muito suave e triste.',
    soundEffects: ['market_city'],
    directorLesson: 'O ambiente da perda.',
    lines: [
      {
        id: 's3e5_20_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Quando chegaram... a casa estava cheia de pessoas tristes.',
      },
      {
        id: 's3e5_20_l2',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Por que vocês estão chorando?',
      }
    ]
  },
  {
    id: 21,
    sceneNumber: 21,
    title: 'Menina, Levante-se',
    subtitle: 'Talita cumi',
    biblicalRef: 'Marcos 5:40-41',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'jairus_house',
    musicTheme: 'miracles_theme',
    visualKey: 's3e5_21_talitha',
    environmentSummary: 'Quarto silencioso.',
    musicDescription: 'Música explode em alegria após a fala da menina.',
    soundEffects: [],
    directorLesson: 'O milagre mais íntimo e profundo, com extremo cuidado infantil.',
    lines: [
      {
        id: 's3e5_21_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus entrou onde a menina estava. Pegou sua mão.',
      },
      {
        id: 's3e5_21_l2',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Menina... Eu digo a você... Levante-se.',
        soundCue: 'Silêncio. Respiração profunda.'
      },
      {
        id: 's3e5_21_l3',
        character: 'menina',
        characterLabel: 'Menina',
        text: 'Pai?',
        emotionGuide: 'Voz infantil, acordando'
      },
      {
        id: 's3e5_21_l4',
        character: 'jairo',
        characterLabel: 'Jairo',
        text: 'Minha filha!',
        emotionGuide: 'Chorando de alegria'
      }
    ]
  },
  {
    id: 22,
    sceneNumber: 22,
    title: 'Alegria',
    subtitle: 'Esperança restaurada',
    biblicalRef: 'Marcos 5:42',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'jairus_house',
    musicTheme: 'triumphant_joy',
    visualKey: 's3e5_22_joy',
    environmentSummary: 'Abraços e choro de felicidade.',
    musicDescription: 'Música emocionante, alegre.',
    soundEffects: [],
    directorLesson: 'Celebrar a restauração da família.',
    lines: [
      {
        id: 's3e5_22_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A tristeza deu lugar à alegria. Porque Jesus havia trazido esperança.',
      }
    ]
  },
  {
    id: 23,
    sceneNumber: 23,
    title: 'O Que é um Milagre?',
    subtitle: 'Cuidado de Deus',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'warm_acoustic',
    musicTheme: 'gentle_teaching',
    visualKey: 's3e5_23_what_is_miracle',
    environmentSummary: 'Transição, clima educativo.',
    musicDescription: 'Música de ensino carinhoso.',
    soundEffects: [],
    directorLesson: 'Explicar a verdadeira motivação dos milagres de Jesus.',
    lines: [
      {
        id: 's3e5_23_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas o que aprendemos com os milagres?',
      },
      {
        id: 's3e5_23_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Um milagre não é apenas algo impressionante. É também uma demonstração do cuidado de Deus.',
      },
      {
        id: 's3e5_23_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus via pessoas. Jesus ouvia pessoas. Jesus se importava com pessoas.',
      }
    ]
  },
  {
    id: 24,
    sceneNumber: 24,
    title: 'Para as Crianças',
    subtitle: 'Pequenos gestos',
    biblicalRef: '',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'warm_acoustic',
    musicTheme: 'gentle_teaching',
    visualKey: 's3e5_24_children',
    environmentSummary: 'Fala direta à criança.',
    musicDescription: 'Terno e empático.',
    soundEffects: [],
    directorLesson: 'Traduzir os milagres celestiais para os pequenos atos diários de bondade.',
    lines: [
      {
        id: 's3e5_24_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Talvez você conheça alguém que esteja passando por um momento difícil.',
      },
      {
        id: 's3e5_24_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Você pode não conseguir realizar um milagre. Mas pode fazer algo muito importante.',
      },
      {
        id: 's3e5_24_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Pode ajudar. Pode ouvir. Pode abraçar. Pode orar. Pode chamar um adulto quando alguém precisar de ajuda.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e5_24_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Às vezes... um pequeno gesto de amor pode fazer uma grande diferença.',
      }
    ]
  },
  {
    id: 25,
    sceneNumber: 25,
    title: 'A Grande Verdade',
    subtitle: 'Ele se importava',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'warm_acoustic',
    musicTheme: 'miracles_theme',
    visualKey: 's3e5_25_phrase',
    environmentSummary: 'Silêncio.',
    musicDescription: 'Música emocional que enche o coração.',
    soundEffects: [],
    directorLesson: 'O clímax da lição.',
    lines: [
      {
        id: 's3e5_25_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus fazia coisas extraordinárias. Mas uma coisa aparecia em todas essas histórias.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e5_25_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele se importava.',
      }
    ]
  },
  {
    id: 26,
    sceneNumber: 26,
    title: 'Os Discípulos Aprendem',
    subtitle: 'Continuem comigo',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'road_walking',
    musicTheme: 'playful_adventure',
    visualKey: 's3e5_26_disciples',
    environmentSummary: 'Amigos voltando a caminhar juntos.',
    musicDescription: 'Música de aventura volta alegre.',
    soundEffects: ['desert_wind'],
    directorLesson: 'Conexão dos discípulos com o que viram.',
    lines: [
      {
        id: 's3e5_26_l1',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Cada vez que estamos com Jesus... acontece alguma coisa extraordinária.',
      },
      {
        id: 's3e5_26_l2',
        character: 'andre',
        characterLabel: 'André',
        text: 'E ainda temos muito para aprender.',
      },
      {
        id: 's3e5_26_l3',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Continuem comigo.',
        soundCue: 'Música cresce alegre'
      }
    ]
  },
  {
    id: 27,
    sceneNumber: 27,
    title: 'Gancho para o Episódio 16',
    subtitle: 'Pequenas histórias',
    biblicalRef: '',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'field_parables',
    musicTheme: 'parables_hook',
    visualKey: 's3e5_27_hook',
    environmentSummary: 'Campo tranquilo, som da natureza.',
    musicDescription: 'Tom muda para aconchegante, curioso e folclórico.',
    soundEffects: ['peaceful_garden'],
    directorLesson: 'Preparação para o mundo das parábolas.',
    lines: [
      {
        id: 's3e5_27_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas Jesus não ensinava apenas através de milagres.',
      },
      {
        id: 's3e5_27_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele também contava histórias. Histórias simples... mas cheias de significado.',
      },
      {
        id: 's3e5_27_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Falava de sementes. Ovelhas. Casas. Tesouros. Pais. E filhos.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e5_27_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Essas histórias tinham um nome especial... PARÁBOLAS.',
      }
    ]
  },
  {
    id: 28,
    sceneNumber: 28,
    title: 'Próximo Episódio',
    subtitle: 'As parábolas',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'field_parables',
    musicTheme: 'parables_hook',
    visualKey: 's3e5_28_next',
    environmentSummary: 'Trailer do próximo episódio.',
    musicDescription: 'Música cresce e termina com curiosidade.',
    soundEffects: [],
    directorLesson: 'Encerramento acolhedor.',
    lines: [
      {
        id: 's3e5_28_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'No próximo episódio... As Parábolas. Histórias que escondiam grandes lições.',
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
    visualKey: 's3e5_29_outro',
    environmentSummary: 'Logotipo sonoro',
    musicDescription: 'A música diminui. Entra o tema musical alegre.',
    soundEffects: ['toon_tales_jingle'],
    directorLesson: 'Assinatura vibrante de término oficial.',
    lines: [
      {
        id: 's3e5_29_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E essa foi mais uma aventura da Bíblia em Áudio.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e5_29_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a história ainda não terminou...',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's3e5_29_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma nova aventura está esperando por você.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e5_29_l4',
        character: 'child',
        characterLabel: 'Crianças',
        text: 'TOON TALES KIDS!',
        emotionGuide: 'Em coro feliz e forte'
      },
      {
        id: 's3e5_29_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Histórias que ensinam, aventuras que transformam!',
      }
    ]
  }
];

export const OS_MILAGRES_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    dayLabel: 'O Telhado',
    question: 'O que os amigos fizeram para levar o homem paralítico até Jesus porque a casa estava muito cheia?',
    options: ['Bateram na porta e todos saíram', 'Subiram no telhado, abriram um buraco e desceram ele por lá', 'Esperaram Jesus ir embora para falar com Ele na rua', 'Passaram rastejando pelo chão no meio das pessoas'],
    correctIndex: 1,
    explanation: 'Como eles tinham muita fé e queriam ajudar o amigo a qualquer custo, subiram no telhado e o desceram bem na frente de Jesus!',
    biblicalVerse: 'Marcos 2:4',
  },
  {
    id: 2,
    dayLabel: 'O Toque',
    question: 'O que Jesus fez ao curar o homem com lepra, que era afastado da comunidade?',
    options: ['Lhe deu uma poção mágica para beber', 'Fugiu dele com medo da doença', 'Estendeu a mão, o tocou e demonstrou grande compaixão', 'Gritou para ele ir embora dali'],
    correctIndex: 2,
    explanation: 'Enquanto muitos rejeitavam o homem doente, Jesus estendeu a mão com amor e o curou completamente, não o tratando como invisível.',
    biblicalVerse: 'Marcos 1:41',
  },
  {
    id: 3,
    dayLabel: 'O Comando de Jesus',
    question: 'O que Jesus falou para o vento e para o mar quando os discípulos estavam com muito medo da tempestade?',
    options: ['"Silêncio! Fique quieto!"', '"Por favor, parem um pouco!"', '"Socorro, não sei nadar!"', '"Amanhã nós continuamos a viagem!"'],
    correctIndex: 0,
    explanation: 'Apenas com suas palavras: "Silêncio! Fique quieto!", Jesus parou todo o vento e acalmou todo o mar no mesmo instante.',
    biblicalVerse: 'Marcos 4:39',
  },
  {
    id: 4,
    dayLabel: 'A Verdadeira Intenção',
    question: 'Qual era a maior razão de Jesus fazer tantos milagres?',
    options: ['Para ficar famoso na cidade inteira e aparecer', 'Para provar para os romanos que Ele era forte', 'Para ser coroado rei do mundo rapidamente', 'Porque Ele sentia muito amor e se importava de verdade com as pessoas'],
    correctIndex: 3,
    explanation: 'Os milagres não eram para Jesus "aparecer", mas sim uma demonstração pura do Seu coração amoroso e do Seu cuidado por cada pessoa.',
    biblicalVerse: '',
  },
  {
    id: 5,
    dayLabel: 'O Nosso Milagre',
    question: 'Como nós, sendo crianças, podemos fazer algo muito importante por alguém hoje?',
    options: ['Comprando presentes muito caros', 'Apenas ignorando quem chora', 'Ajudando, ouvindo, orando e chamando um adulto quando alguém precisa', 'Fazendo mágica profissional'],
    correctIndex: 2,
    explanation: 'Nós podemos demonstrar amor, carinho e compaixão através de pequenos gestos diários. Ouvir e ajudar amigos são milagres de cuidado!',
    biblicalVerse: '',
  }
];
