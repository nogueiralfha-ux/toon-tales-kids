import { Scene, QuizQuestion } from '../types';

export const EPISODE_META_T3E8 = {
  id: 't3e8',
  title: 'A Multiplicação dos Pães',
  subtitle: 'Quando um pequeno presente se tornou uma grande bênção',
  biblicalText: 'João 6, Mateus 14, Marcos 6 e Lucas 9',
  durationLabel: '17 min',
  moralLesson: 'Aquilo que parece pequeno pode se tornar uma grande bênção quando é colocado nas mãos de Deus. Um coração disposto a compartilhar pode ajudar muitas pessoas.',
};

export const A_MULTIPLICACAO_SCENES: Scene[] = [
  {
    id: 1,
    sceneNumber: 1,
    title: 'Uma Grande Multidão',
    subtitle: 'Seguindo Jesus',
    biblicalRef: 'João 6:1-2',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'field_multitude',
    musicTheme: 'adventure_discovery',
    visualKey: 's3e8_01_multitude',
    environmentSummary: 'Campo aberto com sons de passos, crianças, pássaros e uma grande multidão chegando.',
    musicDescription: 'Música de aventura e curiosidade.',
    soundEffects: ['crowd_outdoors', 'kids_playing', 'nature_sounds'],
    directorLesson: 'Estabelecer a escala enorme da multidão para contrastar com o pouco alimento depois.',
    lines: [
      {
        id: 's3e8_01_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Depois da tempestade... os discípulos continuaram sua caminhada com Jesus.',
      },
      {
        id: 's3e8_01_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas certa vez... uma multidão enorme começou a segui-los.',
        soundCue: 'Sons de milhares de pessoas se aproximando'
      },
      {
        id: 's3e8_01_l3',
        character: 'crianca1',
        characterLabel: 'Criança',
        text: 'Jesus está ali!',
        emotionGuide: 'Animada'
      },
      {
        id: 's3e8_01_l4',
        character: 'person',
        characterLabel: 'Pessoa',
        text: 'Vamos!',
      },
      {
        id: 's3e8_01_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eram tantas pessoas... que parecia que o lugar inteiro havia se enchido.',
      }
    ]
  },
  {
    id: 2,
    sceneNumber: 2,
    title: 'Jesus Vê as Pessoas',
    subtitle: 'Compaixão no olhar',
    biblicalRef: 'Marcos 6:34',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'field_multitude',
    musicTheme: 'pure_serenity',
    visualKey: 's3e8_02_jesus_sees',
    environmentSummary: 'O burburinho da multidão ao fundo.',
    musicDescription: 'Música emocional suave.',
    soundEffects: [],
    directorLesson: 'Focar na empatia de Jesus, Ele não viu um problema, viu pessoas.',
    lines: [
      {
        id: 's3e8_02_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus olhou para aquela multidão. Ele poderia simplesmente mandá-los embora. Mas não fez isso.',
      },
      {
        id: 's3e8_02_l2',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Vamos cuidar deles.',
        emotionGuide: 'Compassivo e sereno'
      },
      {
        id: 's3e8_02_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus teve compaixão.',
      }
    ]
  },
  {
    id: 3,
    sceneNumber: 3,
    title: 'Jesus Ensina',
    subtitle: 'O alimento da alma',
    biblicalRef: 'Lucas 9:11',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'field_multitude',
    musicTheme: 'gentle_teaching',
    visualKey: 's3e8_03_teaching',
    environmentSummary: 'Multidão sentada ouvindo em silêncio.',
    musicDescription: 'Música suave de ensino.',
    soundEffects: ['nature_sounds'],
    directorLesson: 'Um breve momento de paz e ensino antes do problema da fome.',
    lines: [
      {
        id: 's3e8_03_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus ensinou durante muito tempo. Falou sobre Deus. Falou sobre esperança. Falou sobre o Reino de Deus.',
      }
    ]
  },
  {
    id: 4,
    sceneNumber: 4,
    title: 'Está Ficando Tarde',
    subtitle: 'A fome chega',
    biblicalRef: 'Mateus 14:15',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'field_multitude',
    musicTheme: 'tense_chords',
    visualKey: 's3e8_04_getting_late',
    environmentSummary: 'O vento no fim da tarde. As pessoas começam a ficar inquietas.',
    musicDescription: 'Tensão sutil crescendo.',
    soundEffects: ['wind_breeze'],
    directorLesson: 'Introduzir o conflito. A preocupação racional dos discípulos.',
    lines: [
      {
        id: 's3e8_04_l1',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Senhor... já está ficando tarde.',
        emotionGuide: 'Preocupado'
      },
      {
        id: 's3e8_04_l2',
        character: 'filipe',
        characterLabel: 'Filipe',
        text: 'As pessoas precisam comer.',
        emotionGuide: 'Racional e realista'
      },
      {
        id: 's3e8_04_l3',
        character: 'andre',
        characterLabel: 'André',
        text: 'Talvez seja melhor mandar todos para as aldeias.',
      },
      {
        id: 's3e8_04_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas Jesus tinha outra ideia.',
      },
      {
        id: 's3e8_04_l5',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Vocês mesmos deem algo para eles comerem.',
      }
    ]
  },
  {
    id: 5,
    sceneNumber: 5,
    title: 'Mas Como?',
    subtitle: 'A preocupação',
    biblicalRef: 'João 6:7',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'field_multitude',
    musicTheme: 'tense_minimal',
    visualKey: 's3e8_05_but_how',
    environmentSummary: 'Silêncio de perplexidade.',
    musicDescription: 'Tensão aumenta um pouco mais.',
    soundEffects: [],
    directorLesson: 'O problema parece impossível.',
    lines: [
      {
        id: 's3e8_05_l1',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Para toda essa gente?',
        emotionGuide: 'Espantado'
      },
      {
        id: 's3e8_05_l2',
        character: 'filipe',
        characterLabel: 'Filipe',
        text: 'Seria necessário muito dinheiro para comprar comida para todos!',
      },
      {
        id: 's3e8_05_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os discípulos olharam para a multidão. Eram milhares de pessoas.',
      }
    ]
  },
  {
    id: 6,
    sceneNumber: 6,
    title: 'O Menino',
    subtitle: 'O pequeno tesouro',
    biblicalRef: 'João 6:8-9',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'field_multitude',
    musicTheme: 'sharing_theme',
    visualKey: 's3e8_06_the_boy',
    environmentSummary: 'André chega com o menino.',
    musicDescription: 'A música ganha um tom inocente e curioso.',
    soundEffects: [],
    directorLesson: 'Apresentar a pequena solução que parece ridícula.',
    lines: [
      {
        id: 's3e8_06_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Então André percebeu algo.',
      },
      {
        id: 's3e8_06_l2',
        character: 'andre',
        characterLabel: 'André',
        text: 'Tem um menino aqui... Ele tem cinco pães e dois peixes.',
      },
      {
        id: 's3e8_06_l3',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'É só isso?',
      },
      {
        id: 's3e8_06_l4',
        character: 'andre',
        characterLabel: 'André',
        text: 'Sim. Mas talvez possamos apresentar isso a Jesus.',
      }
    ]
  },
  {
    id: 7,
    sceneNumber: 7,
    title: 'O Menino Entrega o Alimento',
    subtitle: 'Nas mãos de Jesus',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'field_multitude',
    musicTheme: 'warm_discovery',
    visualKey: 's3e8_07_gives_food',
    environmentSummary: 'Passos tímidos. Som de cesta.',
    musicDescription: 'Música delicada, um momento de conexão visual.',
    soundEffects: ['footsteps', 'basket_handling'],
    directorLesson: 'A generosidade despretensiosa de uma criança.',
    lines: [
      {
        id: 's3e8_07_l1',
        character: 'andre',
        characterLabel: 'André',
        text: 'Jesus... Encontramos isto. Cinco pães. Dois peixes. É pouco para tanta gente.',
      },
      {
        id: 's3e8_07_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O menino se aproxima.',
      },
      {
        id: 's3e8_07_l3',
        character: 'menino',
        characterLabel: 'Menino',
        text: 'Pode usar.',
        emotionGuide: 'Tímido, mas generoso'
      },
      {
        id: 's3e8_07_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus olha para o menino.',
      },
      {
        id: 's3e8_07_l5',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Obrigado.',
        emotionGuide: 'Profundamente grato e sereno'
      }
    ]
  },
  {
    id: 8,
    sceneNumber: 8,
    title: 'Jesus Organiza a Multidão',
    subtitle: 'Preparando o banquete',
    biblicalRef: 'Marcos 6:39-40',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'miracle_distribution',
    musicTheme: 'sharing_theme',
    visualKey: 's3e8_08_organize',
    environmentSummary: 'Sons da multidão se acomodando na grama.',
    musicDescription: 'Música começa a construir a expectativa.',
    soundEffects: ['crowd_outdoors'],
    directorLesson: 'Jesus é organizado. A expectativa cresce.',
    lines: [
      {
        id: 's3e8_08_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus pediu que as pessoas se sentassem.',
        soundCue: 'Pessoas e crianças se sentando na grama'
      },
      {
        id: 's3e8_08_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus segura o pão.',
      }
    ]
  },
  {
    id: 9,
    sceneNumber: 9,
    title: 'Jesus Agradece',
    subtitle: 'Gratidão a Deus',
    biblicalRef: 'João 6:11',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'field_multitude',
    musicTheme: 'pure_serenity',
    visualKey: 's3e8_09_thanks',
    environmentSummary: 'Pequeno silêncio de oração.',
    musicDescription: 'Música solene e leve.',
    soundEffects: [],
    directorLesson: 'Ensinar o princípio de agradecer antes de receber o milagre.',
    lines: [
      {
        id: 's3e8_09_l1',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Pai... Obrigado por este alimento. Obrigado por cuidar de nós. Amém.',
        emotionGuide: 'Voz elevada e mansa'
      },
      {
        id: 's3e8_09_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: '',
        soundCue: 'Pequeno silêncio'
      }
    ]
  },
  {
    id: 10,
    sceneNumber: 10,
    title: 'O Milagre',
    subtitle: 'Repartindo o pão',
    biblicalRef: 'Mateus 14:19',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'miracle_distribution',
    musicTheme: 'sharing_theme',
    visualKey: 's3e8_10_miracle',
    environmentSummary: 'O som do pão sendo partido e distribuído para os cestos.',
    musicDescription: 'A música cresce e brilha sem ser espalhafatosa.',
    soundEffects: ['bread_breaking', 'basket_handling'],
    directorLesson: 'O milagre acontece no silêncio da distribuição, na abundância silenciosa.',
    lines: [
      {
        id: 's3e8_10_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Então Jesus começou a repartir o pão.',
        soundCue: 'Som de pão sendo partido'
      },
      {
        id: 's3e8_10_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os discípulos começaram a distribuir.',
      },
      {
        id: 's3e8_10_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Um recebia. Depois outro. E outro. E outro.',
      }
    ]
  },
  {
    id: 11,
    sceneNumber: 11,
    title: 'A Comida Não Acaba',
    subtitle: 'Abundância inexplicável',
    biblicalRef: 'João 6:11',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'miracle_distribution',
    musicTheme: 'epic_orchestral',
    visualKey: 's3e8_11_food_multiplies',
    environmentSummary: 'Espanto dos discípulos com a quantidade de alimento.',
    musicDescription: 'Música continua a crescer majestosamente.',
    soundEffects: ['crowd_happy'],
    directorLesson: 'A surpresa dos discípulos.',
    lines: [
      {
        id: 's3e8_11_l1',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'André...',
        emotionGuide: 'Perplexo'
      },
      {
        id: 's3e8_11_l2',
        character: 'andre',
        characterLabel: 'André',
        text: 'Sim?',
      },
      {
        id: 's3e8_11_l3',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Ainda tem!',
      },
      {
        id: 's3e8_11_l4',
        character: 'andre',
        characterLabel: 'André',
        text: 'Continue distribuindo!',
        emotionGuide: 'Feliz e agitado'
      },
      {
        id: 's3e8_11_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O alimento continuava sendo distribuído. E todos comiam.',
      }
    ]
  },
  {
    id: 12,
    sceneNumber: 12,
    title: 'Todos Comem',
    subtitle: 'Satisfeitos',
    biblicalRef: 'Mateus 14:20-21',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'miracle_distribution',
    musicTheme: 'triumphant_joy',
    visualKey: 's3e8_12_everyone_eats',
    environmentSummary: 'Todos se alimentando, clima de piquenique.',
    musicDescription: 'Música alegre e festiva.',
    soundEffects: ['eating_crowd_happy'],
    directorLesson: 'A magnitude do milagre — milhares saciados.',
    lines: [
      {
        id: 's3e8_12_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Homens. Mulheres. Crianças.',
      },
      {
        id: 's3e8_12_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Todos comeram. E ficaram satisfeitos.',
      }
    ]
  },
  {
    id: 13,
    sceneNumber: 13,
    title: 'Os Discípulos Recolhem os Pedaços',
    subtitle: 'Doze cestos cheios',
    biblicalRef: 'João 6:12-13',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'miracle_distribution',
    musicTheme: 'wonder_nature',
    visualKey: 's3e8_13_leftovers',
    environmentSummary: 'Som de cestos de vime sendo preenchidos.',
    musicDescription: 'Música de maravilha após a constatação.',
    soundEffects: ['basket_handling'],
    directorLesson: 'A economia divina — nada se perde.',
    lines: [
      {
        id: 's3e8_13_l1',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Agora recolham o que sobrou.',
      },
      {
        id: 's3e8_13_l2',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Olhem isso!',
      },
      {
        id: 's3e8_13_l3',
        character: 'andre',
        characterLabel: 'André',
        text: 'Está sobrando comida!',
      },
      {
        id: 's3e8_13_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os discípulos recolheram os pedaços que sobraram.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e8_13_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Doze cestos ficaram cheios.',
      }
    ]
  },
  {
    id: 14,
    sceneNumber: 14,
    title: 'O Menino Observa',
    subtitle: 'Uma pequena ajuda',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'field_multitude',
    musicTheme: 'soft_piano_strings',
    visualKey: 's3e8_14_boy_watches',
    environmentSummary: 'Foco apenas no menino olhando a multidão ao fundo.',
    musicDescription: 'Música suave, contemplativa.',
    soundEffects: [],
    directorLesson: 'A reflexão do protagonista secreto do milagre.',
    lines: [
      {
        id: 's3e8_14_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O menino observava tudo.',
        soundCue: 'Ele olha para suas mãos. Depois para a multidão.'
      },
      {
        id: 's3e8_14_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Talvez ele nunca imaginasse... que aquilo que parecia tão pequeno... seria usado para alimentar tanta gente.',
      }
    ]
  },
  {
    id: 15,
    sceneNumber: 15,
    title: 'A Grande Lição',
    subtitle: 'Não despreze o pequeno',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'field_multitude',
    musicTheme: 'gentle_teaching',
    visualKey: 's3e8_15_lesson1',
    environmentSummary: 'Narração carinhosa.',
    musicDescription: 'Música emocional didática.',
    soundEffects: [],
    directorLesson: 'O ensinamento principal do episódio.',
    lines: [
      {
        id: 's3e8_15_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A história nos ensina uma coisa importante. Não devemos desprezar aquilo que temos.',
      },
      {
        id: 's3e8_15_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Pode parecer pequeno. Pode parecer simples. Mas quando compartilhamos... podemos fazer uma grande diferença.',
      }
    ]
  },
  {
    id: 16,
    sceneNumber: 16,
    title: 'Generosidade',
    subtitle: 'Pequenos gestos',
    biblicalRef: '',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'field_multitude',
    musicTheme: 'gentle_teaching',
    visualKey: 's3e8_16_generosity',
    environmentSummary: 'Chamada prática para as crianças.',
    musicDescription: 'Continua o tom acolhedor.',
    soundEffects: [],
    directorLesson: 'Tradução do milagre para a vida prática.',
    lines: [
      {
        id: 's3e8_16_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Você não precisa ter muito para ajudar. Pode compartilhar um brinquedo. Pode dividir um lanche.',
      },
      {
        id: 's3e8_16_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Pode ajudar um colega. Pode oferecer seu tempo. Pode dar atenção a alguém que está sozinho.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e8_16_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Pequenos gestos podem levar grandes bênçãos.',
      }
    ]
  },
  {
    id: 17,
    sceneNumber: 17,
    title: 'Gratidão',
    subtitle: 'O valor do que temos',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'field_multitude',
    musicTheme: 'soft_piano_strings',
    visualKey: 's3e8_17_gratitude',
    environmentSummary: 'Ensinamento secundário: ser grato.',
    musicDescription: 'Música suave e terna.',
    soundEffects: [],
    directorLesson: 'O poder da oração de agradecimento de Jesus.',
    lines: [
      {
        id: 's3e8_17_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus também nos ensina a agradecer. Antes de repartir o alimento... Ele agradeceu.',
      },
      {
        id: 's3e8_17_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Quando somos gratos... aprendemos a perceber o valor das coisas que já temos.',
      }
    ]
  },
  {
    id: 18,
    sceneNumber: 18,
    title: 'Os Discípulos Aprendem',
    subtitle: 'Cuidar uns dos outros',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'field_multitude',
    musicTheme: 'teaching_courage',
    visualKey: 's3e8_18_disciples_learn',
    environmentSummary: 'Os apóstolos conversando sobre o milagre.',
    musicDescription: 'Música emocionante, reveladora.',
    soundEffects: [],
    directorLesson: 'A ficha caiu para os discípulos.',
    lines: [
      {
        id: 's3e8_18_l1',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Eu achei que não seria suficiente.',
      },
      {
        id: 's3e8_18_l2',
        character: 'andre',
        characterLabel: 'André',
        text: 'Eu também.',
      },
      {
        id: 's3e8_18_l3',
        character: 'filipe',
        characterLabel: 'Filipe',
        text: 'Parecia impossível.',
      },
      {
        id: 's3e8_18_l4',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Quando vocês cuidam uns dos outros... aprendem algo importante.',
      }
    ]
  },
  {
    id: 19,
    sceneNumber: 19,
    title: 'Frase Marcante',
    subtitle: 'O pouco suficiente',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'field_multitude',
    musicTheme: 'emotional_climax',
    visualKey: 's3e8_19_phrase',
    environmentSummary: 'O coração da mensagem de todo o episódio.',
    musicDescription: 'A música toca fundo na alma.',
    soundEffects: [],
    directorLesson: 'O resumo de ouro da história.',
    lines: [
      {
        id: 's3e8_19_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Nas mãos de Jesus... o pouco pode se tornar suficiente.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e8_19_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E um coração disposto a compartilhar... pode ser uma grande bênção.',
      }
    ]
  },
  {
    id: 20,
    sceneNumber: 20,
    title: 'Montagem Final',
    subtitle: 'Final do dia',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'field_multitude',
    musicTheme: 'adventure_discovery',
    visualKey: 's3e8_20_montage',
    environmentSummary: 'O povo feliz indo embora no pôr do sol.',
    musicDescription: 'Música alegre, leveza e fim de tarde.',
    soundEffects: ['crowd_happy'],
    directorLesson: 'O sentimento bom de ver todos voltando para casa bem.',
    lines: [
      {
        id: 's3e8_20_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E naquele dia... a multidão voltou para casa alimentada.',
      },
      {
        id: 's3e8_20_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os discípulos voltaram diferentes. E um menino descobriu que... aquilo que ele tinha para oferecer... podia ajudar muitas pessoas.',
      }
    ]
  },
  {
    id: 21,
    sceneNumber: 21,
    title: 'Para as Crianças',
    subtitle: 'O seu coração',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'field_multitude',
    musicTheme: 'sharing_theme',
    visualKey: 's3e8_21_children',
    environmentSummary: 'Uma última conversa com o ouvinte.',
    musicDescription: 'Música delicada e carinhosa.',
    soundEffects: [],
    directorLesson: 'A reflexão interior antes de acabar.',
    lines: [
      {
        id: 's3e8_21_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Agora pense. O que você tem hoje que poderia compartilhar?',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e8_21_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Talvez seja pouco. Mas não importa. O importante é ter um coração disposto a ajudar.',
      }
    ]
  },
  {
    id: 22,
    sceneNumber: 22,
    title: 'Transição para o Final',
    subtitle: 'Recapitulação',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'field_multitude',
    musicTheme: 'majestic_stars',
    visualKey: 's3e8_22_transition',
    environmentSummary: 'Preparando para o grande final da Temporada 3.',
    musicDescription: 'Música começa a ficar mais grandiosa e retrospectiva.',
    soundEffects: [],
    directorLesson: 'Fazer o balanço da vida de Jesus até agora.',
    lines: [
      {
        id: 's3e8_22_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus havia ensinado. Curado. Contado histórias. Acalmado tempestades. E alimentado uma multidão.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e8_22_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas ainda havia muito mais para acontecer.',
      }
    ]
  },
  {
    id: 23,
    sceneNumber: 23,
    title: 'Gancho',
    subtitle: 'Para a maior história',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'resurrection_hook',
    musicTheme: 'resurrection_theme',
    visualKey: 's3e8_23_hook',
    environmentSummary: 'O tom muda para algo épico e profundamente reverente.',
    musicDescription: 'Música misteriosa com expectativa monumental.',
    soundEffects: [],
    directorLesson: 'Prepara o terreno para o último e mais importante evento.',
    lines: [
      {
        id: 's3e8_23_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os discípulos continuariam caminhando com Jesus. E cada nova aventura revelaria algo mais sobre quem Ele era.',
      },
      {
        id: 's3e8_23_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a história de Jesus... ainda estava apenas começando.',
      }
    ]
  },
  {
    id: 24,
    sceneNumber: 24,
    title: 'Próximo Episódio',
    subtitle: 'A Ressurreição',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'resurrection_hook',
    musicTheme: 'epic_orchestral',
    visualKey: 's3e8_24_next',
    environmentSummary: 'Fechamento do arco da Temporada 3.',
    musicDescription: 'Música termina num clímax de glória e emoção.',
    soundEffects: [],
    directorLesson: 'Anunciar o Season Finale.',
    lines: [
      {
        id: 's3e8_24_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'No próximo episódio... A Ressurreição de Jesus. Uma história que mudaria tudo. A maior esperança.',
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
    visualKey: 's3e8_25_outro',
    environmentSummary: 'O encerramento padrão da série.',
    musicDescription: 'Música da história desaparece, entra jingle clássico.',
    soundEffects: ['toon_tales_jingle'],
    directorLesson: 'Garantir a identidade familiar da série.',
    lines: [
      {
        id: 's3e8_25_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E essa foi mais uma aventura da Bíblia em Áudio.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e8_25_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a história ainda não terminou...',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's3e8_25_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma nova aventura está esperando por você.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e8_25_l4',
        character: 'child',
        characterLabel: 'Crianças',
        text: 'TOON TALES KIDS!',
        emotionGuide: 'Em coro feliz e forte'
      },
      {
        id: 's3e8_25_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Histórias que ensinam, aventuras que transformam!',
      }
    ]
  }
];

export const A_MULTIPLICACAO_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    dayLabel: 'A Multidão',
    question: 'Por que Jesus não quis mandar a enorme multidão embora quando ficou tarde?',
    options: ['Porque eles queriam comprar doces', 'Porque Jesus teve compaixão e queria cuidar deles', 'Porque Ele queria que eles andassem mais longe', 'Porque não tinha estrada para voltar'],
    correctIndex: 1,
    explanation: 'Jesus teve compaixão daquelas pessoas! Em vez de vê-las como um problema, Ele viu que precisavam de cuidado e alimento.',
    biblicalVerse: 'Mateus 14:14',
  },
  {
    id: 2,
    dayLabel: 'O Menino',
    question: 'O que o menino tinha em suas mãos e decidiu oferecer para Jesus?',
    options: ['Muito dinheiro para comprar pizzas', 'Apenas cinco pães e dois peixinhos', 'Uma cesta com doze sanduíches e suco', 'Cem pães bem grandes'],
    correctIndex: 1,
    explanation: 'Parecia muito pouco para alimentar milhares de pessoas, mas o menino generosamente ofereceu tudo o que ele tinha: cinco pães e dois peixes.',
    biblicalVerse: 'João 6:9',
  },
  {
    id: 3,
    dayLabel: 'A Gratidão',
    question: 'O que Jesus fez antes de começar a repartir os pães para as pessoas?',
    options: ['Ele reclamou que era muito pouco', 'Ele orou e agradeceu a Deus pelo alimento', 'Ele pediu para os discípulos cozinharem', 'Ele mandou o menino ir pescar mais'],
    correctIndex: 1,
    explanation: 'Jesus nos ensinou algo valioso: a gratidão! Antes do grande milagre acontecer, Ele olhou para o céu e agradeceu ao Pai por aquele pouco alimento.',
    biblicalVerse: 'João 6:11',
  },
  {
    id: 4,
    dayLabel: 'O Milagre',
    question: 'O que aconteceu depois que todos comeram e ficaram bem satisfeitos?',
    options: ['A comida acabou e alguns ficaram com fome', 'As pessoas foram embora tristes', 'Os discípulos recolheram doze cestos cheios com os pedaços que sobraram', 'Eles deixaram a sobra espalhada no campo'],
    correctIndex: 2,
    explanation: 'O milagre foi tão abundante e generoso que, depois de milhares comerem, ainda sobrou alimento suficiente para encher doze cestos inteiros!',
    biblicalVerse: 'João 6:13',
  },
  {
    id: 5,
    dayLabel: 'Nossa Vida',
    question: 'O que esse episódio nos ensina sobre a generosidade?',
    options: ['Que só podemos ajudar se formos ricos', 'Que não devemos dividir nossas coisas', 'Que Deus não precisa de nós', 'Que nas mãos de Jesus, o nosso "pouco" pode se transformar numa grande bênção'],
    correctIndex: 3,
    explanation: 'Nunca despreze o pouco que você tem! Um pequeno gesto de amor, um pequeno lanche ou um pouco do seu tempo podem abençoar a vida de muita gente.',
    biblicalVerse: 'João 6:14',
  }
];
