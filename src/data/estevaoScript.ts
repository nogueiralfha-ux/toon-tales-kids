import { Scene, QuizQuestion } from '../types';

export const EPISODE_META_T4E3 = {
  id: 't4e3',
  title: 'Estêvão',
  subtitle: 'A coragem de permanecer fiel',
  biblicalText: 'Atos 6 a 7',
  durationLabel: '18 min',
  moralLesson: 'A verdadeira coragem nasce de uma fé que permanece firme, mesmo nos momentos mais difíceis.',
};

export const ESTEVAO_SCENES: Scene[] = [
  {
    id: 1,
    sceneNumber: 1,
    title: 'Abertura',
    subtitle: 'A Comunidade Cresce',
    biblicalRef: 'Atos 6:1',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'early_church',
    musicTheme: 'church_theme',
    visualKey: 's4e3_01_intro',
    environmentSummary: 'Sons da cidade de Jerusalém, pessoas caminhando. Depois, pessoas compartilhando alimentos, crianças brincando, conversas felizes.',
    musicDescription: 'Música tema da Igreja, acolhedora.',
    soundEffects: ['city_street', 'eating_together', 'children_laughing'],
    directorLesson: 'Estabelecer o contexto de uma igreja que cresce rápido e precisa de organização para cuidar de todos.',
    lines: [
      {
        id: 's4e3_01_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A comunidade dos seguidores de Jesus estava crescendo. Cada dia chegavam novas pessoas. E havia muito trabalho para fazer.',
      },
      {
        id: 's4e3_01_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Era preciso cuidar dos necessitados. Distribuir alimentos. Ensinar. Orar. E ajudar uns aos outros.',
      }
    ]
  },
  {
    id: 2,
    sceneNumber: 2,
    title: 'Estêvão Entra',
    subtitle: 'Um homem de fé',
    biblicalRef: 'Atos 6:5',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'early_church',
    musicTheme: 'stephen_theme',
    visualKey: 's4e3_02_stephen',
    environmentSummary: 'O ambiente foca em Estêvão, com sons de comunidade ao fundo.',
    musicDescription: 'Música acolhedora, o tema de Estêvão com piano e flauta inicia suavemente.',
    soundEffects: [],
    directorLesson: 'Apresentar Estêvão como alguém cujo serviço transborda de fé e amor.',
    lines: [
      {
        id: 's4e3_02_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Entre aqueles primeiros cristãos... havia um homem chamado Estêvão. Ele era conhecido por sua fé. E também por seu coração disposto a servir.',
      },
      {
        id: 's4e3_02_l2',
        character: 'estevao',
        characterLabel: 'Estêvão',
        text: 'Vamos ajudar essas pessoas. Todos precisam ser cuidados.',
        emotionGuide: 'Gentil, acolhedor'
      }
    ]
  },
  {
    id: 3,
    sceneNumber: 3,
    title: 'A Escolha dos Sete',
    subtitle: 'Serviço e Dedicação',
    biblicalRef: 'Atos 6:2-6',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'early_church',
    musicTheme: 'stephen_theme',
    visualKey: 's4e3_03_seven',
    environmentSummary: 'A unção e separação para o serviço.',
    musicDescription: 'A música cresce suavemente, demonstrando a importância de seu chamado.',
    soundEffects: [],
    directorLesson: 'Mostrar que ser escolhido para servir é uma grande honra.',
    lines: [
      {
        id: 's4e3_03_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os apóstolos escolheram homens de boa reputação, cheios de fé e sabedoria, para ajudar a cuidar da comunidade. Estêvão estava entre eles.',
      },
      {
        id: 's4e3_03_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E ele começou a servir com dedicação.',
      }
    ]
  },
  {
    id: 4,
    sceneNumber: 4,
    title: 'Estêvão Ajuda',
    subtitle: 'Demonstrando Amor',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'jerusalem_street',
    musicTheme: 'hope_theme',
    visualKey: 's4e3_04_help',
    environmentSummary: 'Montagem de sons: alimentos, passos, vozes amigáveis.',
    musicDescription: 'Música alegre de companheirismo.',
    soundEffects: ['footsteps', 'crowd_murmur_surprised'],
    directorLesson: 'O serviço de Estêvão na prática, com pessoas reais.',
    lines: [
      {
        id: 's4e3_04_l1',
        character: 'child',
        characterLabel: 'Criança',
        text: 'Obrigado, Estêvão.',
        emotionGuide: 'Grata, feliz'
      },
      {
        id: 's4e3_04_l2',
        character: 'estevao',
        characterLabel: 'Estêvão',
        text: 'Deus abençoe você.',
        emotionGuide: 'Carinhoso, sereno'
      },
      {
        id: 's4e3_04_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Para Estêvão... servir também era uma maneira de demonstrar amor.',
      }
    ]
  },
  {
    id: 5,
    sceneNumber: 5,
    title: 'Estêvão Fala de Jesus',
    subtitle: 'Sinais e Maravilhas',
    biblicalRef: 'Atos 6:8',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'jerusalem_street',
    musicTheme: 'mission_theme',
    visualKey: 's4e3_05_preach',
    environmentSummary: 'O som da rua, Estêvão rodeado de pessoas que escutam atentamente.',
    musicDescription: 'Música muda para o tema de missão.',
    soundEffects: [],
    directorLesson: 'Ele não apenas cuida do físico, mas também do espiritual.',
    lines: [
      {
        id: 's4e3_05_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas Estêvão não apenas servia. Ele também falava sobre Jesus.',
      },
      {
        id: 's4e3_05_l2',
        character: 'estevao',
        characterLabel: 'Estêvão',
        text: 'Jesus nos ensinou a amar. A mensagem de Deus é uma mensagem de esperança.',
        emotionGuide: 'Firme, com amor e sabedoria'
      }
    ]
  },
  {
    id: 6,
    sceneNumber: 6,
    title: 'Oposição',
    subtitle: 'Discussões',
    biblicalRef: 'Atos 6:9-10',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'jerusalem_street',
    musicTheme: 'tense_minimal',
    visualKey: 's4e3_06_conflict',
    environmentSummary: 'Pessoas começam a questioná-lo. O ambiente fica agitado.',
    musicDescription: 'A música se torna tensa.',
    soundEffects: ['crowd_distant'],
    directorLesson: 'A oposição surge, mas Estêvão não perde a calma.',
    lines: [
      {
        id: 's4e3_06_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Algumas pessoas não gostaram do que Estêvão dizia. Elas começaram a discutir com ele.',
      },
      {
        id: 's4e3_06_l2',
        character: 'voz',
        characterLabel: 'Voz da Multidão',
        text: 'Por que você fala essas coisas?',
        emotionGuide: 'Irritado e acusador'
      },
      {
        id: 's4e3_06_l3',
        character: 'estevao',
        characterLabel: 'Estêvão',
        text: 'Porque acredito que Jesus é o Salvador.',
        emotionGuide: 'Tranquilo, respondendo com sabedoria, não com raiva'
      },
      {
        id: 's4e3_06_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas eles não conseguiram vencer a sabedoria com que Estêvão falava.',
      }
    ]
  },
  {
    id: 7,
    sceneNumber: 7,
    title: 'Acusações',
    subtitle: 'Levado Preso',
    biblicalRef: 'Atos 6:11-12',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'jerusalem_street',
    musicTheme: 'tense_minimal',
    visualKey: 's4e3_07_accusations',
    environmentSummary: 'Vozes sobrepostas acusando, multidão em alvoroço.',
    musicDescription: 'A música diminui e se torna misteriosa/baixa.',
    soundEffects: ['crowd_murmur_surprised'],
    directorLesson: 'A injustiça começa a cercar Estêvão.',
    lines: [
      {
        id: 's4e3_07_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Então algumas pessoas começaram a espalhar acusações contra Estêvão. Ele foi levado diante das autoridades.',
      }
    ]
  },
  {
    id: 8,
    sceneNumber: 8,
    title: 'Diante das Autoridades',
    subtitle: 'Paz no Rosto',
    biblicalRef: 'Atos 6:13-15',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'sanhedrin_room',
    musicTheme: 'tense_minimal',
    visualKey: 's4e3_08_authorities',
    environmentSummary: 'Grande sala. O som dos passos dos guardas. Silêncio.',
    musicDescription: 'Música de suspense leve, ressaltando o ambiente oficial.',
    soundEffects: ['footsteps'],
    directorLesson: 'A calma sobrenatural de Estêvão (seu rosto brilhando como de um anjo) em meio ao tribunal hostil.',
    lines: [
      {
        id: 's4e3_08_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Estêvão poderia ter ficado assustado. Mas permaneceu tranquilo.',
      },
      {
        id: 's4e3_08_l2',
        character: 'autoridade',
        characterLabel: 'Autoridade',
        text: 'Você confirma essas acusações?',
        emotionGuide: 'Firme, autoritário'
      },
      {
        id: 's4e3_08_l3',
        character: 'estevao',
        characterLabel: 'Estêvão',
        text: 'Quero contar a vocês uma história.',
        emotionGuide: 'Depois de respirar fundo, sereno'
      }
    ]
  },
  {
    id: 9,
    sceneNumber: 9,
    title: 'A Grande História',
    subtitle: 'O Discurso',
    biblicalRef: 'Atos 7:1-50',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'sanhedrin_room',
    musicTheme: 'epic_orchestral',
    visualKey: 's4e3_09_story',
    environmentSummary: 'Silêncio absoluto enquanto o eco de sua voz fala.',
    musicDescription: 'Música épica, trazendo o peso da história milenar de Deus com o povo.',
    soundEffects: [],
    directorLesson: 'Resumir o longo discurso bíblico focando no plano contínuo de Deus ao longo da história.',
    lines: [
      {
        id: 's4e3_09_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Então Estêvão começou a contar a história do povo de Deus.',
      },
      {
        id: 's4e3_09_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Falou de Abraão. De José. De Moisés. Da saída do Egito. Dos profetas.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e3_09_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E mostrou como Deus sempre esteve conduzindo seu povo.',
      }
    ]
  },
  {
    id: 10,
    sceneNumber: 10,
    title: 'O Testemunho',
    subtitle: 'O foco em Jesus',
    biblicalRef: 'Atos 7:51-53',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'sanhedrin_room',
    musicTheme: 'emotional_climax',
    visualKey: 's4e3_10_jesus',
    environmentSummary: 'O tom da história converge para Jesus.',
    musicDescription: 'Música emocional.',
    soundEffects: [],
    directorLesson: 'O clímax do testemunho: o propósito de toda a história era Cristo.',
    lines: [
      {
        id: 's4e3_10_l1',
        character: 'estevao',
        characterLabel: 'Estêvão',
        text: 'Deus enviou Jesus. Mas muitas pessoas não o reconheceram. Jesus morreu... e Deus o ressuscitou.',
        emotionGuide: 'Profundo e contundente'
      },
      {
        id: 's4e3_10_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Estêvão não estava apenas contando uma história. Ele estava testemunhando aquilo em que acreditava.',
      }
    ]
  },
  {
    id: 11,
    sceneNumber: 11,
    title: 'O Clima Fica Tenso',
    subtitle: 'Fúria do Sinédrio',
    biblicalRef: 'Atos 7:54',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'sanhedrin_room',
    musicTheme: 'tense_minimal',
    visualKey: 's4e3_11_tension',
    environmentSummary: 'Sons de multidão inquieta e vozes de protesto do conselho.',
    musicDescription: 'Tensão musical aumenta rapidamente.',
    soundEffects: ['crowd_distant'],
    directorLesson: 'O contraste da raiva do conselho com a serenidade de Estêvão.',
    lines: [
      {
        id: 's4e3_11_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Algumas pessoas ficaram muito irritadas. Mas Estêvão continuou olhando para o alto.',
      }
    ]
  },
  {
    id: 12,
    sceneNumber: 12,
    title: 'Estêvão Olha Para o Céu',
    subtitle: 'A Visão',
    biblicalRef: 'Atos 7:55-56',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'heaven_open',
    musicTheme: 'celestial_wonder',
    visualKey: 's4e3_12_heaven',
    environmentSummary: 'A música desaparece. Silêncio e depois um vento suave. Um momento místico.',
    musicDescription: 'Música celestial começa com brilho, separando Estêvão do caos terreno.',
    soundEffects: ['wind_breeze'],
    directorLesson: 'O milagre visual de Estêvão sendo confortado pelo Céu.',
    lines: [
      {
        id: 's4e3_12_l1',
        character: 'estevao',
        characterLabel: 'Estêvão',
        text: 'Eu vejo os céus abertos... e o Filho do Homem em pé à direita de Deus.',
        emotionGuide: 'Maravilhado, cheio de paz'
      },
      {
        id: 's4e3_12_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Estêvão manteve seus olhos voltados para Deus.',
      }
    ]
  },
  {
    id: 13,
    sceneNumber: 13,
    title: 'A Multidão Reage',
    subtitle: 'Para Fora da Cidade',
    biblicalRef: 'Atos 7:57-58',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'jerusalem_street',
    musicTheme: 'tense_chords',
    visualKey: 's4e3_13_crowd',
    environmentSummary: 'A multidão cobre os ouvidos. Som de passos fortes, arrastando, portas abrindo com força.',
    musicDescription: 'Retorna a tensão leve para manter o andamento sem assustar crianças.',
    soundEffects: ['crowd_distant', 'door_open'],
    directorLesson: 'Agitação sem violência gráfica.',
    lines: [
      {
        id: 's4e3_13_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A situação ficou perigosa. Estêvão foi levado para fora da cidade.',
      }
    ]
  },
  {
    id: 14,
    sceneNumber: 14,
    title: 'Momento de Silêncio',
    subtitle: 'A Provação Final',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'open_field',
    musicTheme: 'pure_serenity',
    visualKey: 's4e3_14_silence',
    environmentSummary: 'Vento soprando em um ambiente aberto. Silêncio de paz.',
    musicDescription: 'Música extremamente suave e serena.',
    soundEffects: ['wind_breeze'],
    directorLesson: 'Isolar Estêvão e sua fé imperturbável.',
    lines: [
      {
        id: 's4e3_14_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Estêvão sabia que estava enfrentando um momento muito difícil. Mas sua fé permanecia firme.',
      }
    ]
  },
  {
    id: 15,
    sceneNumber: 15,
    title: 'O Perdão',
    subtitle: 'Como Jesus',
    biblicalRef: 'Atos 7:59-60',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'open_field',
    musicTheme: 'pure_serenity',
    visualKey: 's4e3_15_forgiveness',
    environmentSummary: 'O ápice da cena final foca nas últimas palavras de Estêvão.',
    musicDescription: 'Música emocional cresce lentamente, cheia de graça, não de terror.',
    soundEffects: [],
    directorLesson: 'O ponto mais comovente do episódio: a capacidade de perdoar seus inimigos, seguindo os passos do seu Mestre.',
    lines: [
      {
        id: 's4e3_15_l1',
        character: 'estevao',
        characterLabel: 'Estêvão',
        text: 'Senhor Jesus... recebe o meu espírito.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e3_15_l2',
        character: 'estevao',
        characterLabel: 'Estêvão',
        text: 'Senhor... não os condenes por isso.',
        emotionGuide: 'A última oração cheia de misericórdia'
      },
      {
        id: 's4e3_15_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mesmo naquele momento... Estêvão escolheu perdoar.',
      }
    ]
  },
  {
    id: 16,
    sceneNumber: 16,
    title: 'A Esperança',
    subtitle: 'Uma Coragem Fiel',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'open_field',
    musicTheme: 'hope_theme',
    visualKey: 's4e3_16_hope',
    environmentSummary: 'A atmosfera torna-se solene, respeitosa e luminosa.',
    musicDescription: 'O tema da esperança toma conta, afirmando a vitória de sua vida, não sua derrota.',
    soundEffects: [],
    directorLesson: 'Afirmar para as crianças que Estêvão foi vencedor por sua fé.',
    lines: [
      {
        id: 's4e3_16_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Estêvão permaneceu fiel até o fim. Seu exemplo continuaria sendo lembrado.',
      },
      {
        id: 's4e3_16_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Porque sua coragem não estava baseada em força física. Estava baseada em sua fé.',
      }
    ]
  },
  {
    id: 17,
    sceneNumber: 17,
    title: 'Saulo Aparece',
    subtitle: 'Um jovem misterioso',
    biblicalRef: 'Atos 7:58 e 8:1',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'open_field',
    musicTheme: 'mysterious_drone',
    visualKey: 's4e3_17_saul',
    environmentSummary: 'A multidão vai se afastando ao fundo.',
    musicDescription: 'A música muda para um tom misterioso de introdução.',
    soundEffects: ['crowd_distant'],
    directorLesson: 'Plantar a semente para o próximo grande arco da temporada.',
    lines: [
      {
        id: 's4e3_17_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Entre aqueles que testemunharam aqueles acontecimentos... havia um jovem chamado Saulo.',
      },
      {
        id: 's4e3_17_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Naquele momento... Saulo ainda não seguia Jesus. Mas sua história estava prestes a mudar.',
      }
    ]
  },
  {
    id: 18,
    sceneNumber: 18,
    title: 'A Semente',
    subtitle: 'Deus continua trabalhando',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'open_field',
    musicTheme: 'mysterious_drone',
    visualKey: 's4e3_18_seed',
    environmentSummary: 'A voz do narrador ecoa com sabedoria e conforto.',
    musicDescription: 'A música misteriosa dá espaço para uma ponta de esperança.',
    soundEffects: [],
    directorLesson: 'Ensinar sobre os propósitos maiores de Deus mesmo no sofrimento.',
    lines: [
      {
        id: 's4e3_18_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Às vezes... não conseguimos enxergar o que Deus fará depois de um momento difícil.',
      },
      {
        id: 's4e3_18_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas Deus continua trabalhando. A história de Estêvão terminava... mas outra história estava começando.',
      }
    ]
  },
  {
    id: 19,
    sceneNumber: 19,
    title: 'Lição',
    subtitle: 'Coragem não é procurar problemas',
    biblicalRef: '',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'early_church',
    musicTheme: 'hope_theme',
    visualKey: 's4e3_19_lesson',
    environmentSummary: 'Linguagem voltada diretamente à criança.',
    musicDescription: 'Música acolhedora de ensino.',
    soundEffects: [],
    directorLesson: 'O desfecho didático sobre o real significado de coragem.',
    lines: [
      {
        id: 's4e3_19_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Estêvão nos ensina que coragem não significa procurar problemas. Coragem é fazer o bem.',
      },
      {
        id: 's4e3_19_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'É falar a verdade com amor. É ajudar quem precisa. É continuar firme quando algo é difícil. E também... é aprender a perdoar.',
      }
    ]
  },
  {
    id: 20,
    sceneNumber: 20,
    title: 'Pergunta',
    subtitle: 'Para refletir',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'early_church',
    musicTheme: 'hope_theme',
    visualKey: 's4e3_20_question',
    environmentSummary: 'Um momento de introspecção.',
    musicDescription: 'Continua acolhedora.',
    soundEffects: [],
    directorLesson: 'Aplicação prática para a vida infantil.',
    lines: [
      {
        id: 's4e3_20_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Você já precisou fazer a coisa certa mesmo quando ninguém queria fazer?',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e3_20_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Talvez tenha sido difícil. Mas pequenas atitudes de coragem fazem diferença.',
      }
    ]
  },
  {
    id: 21,
    sceneNumber: 21,
    title: 'A Frase Marcante',
    subtitle: 'Uma vida de fé',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'early_church',
    musicTheme: 'church_theme',
    visualKey: 's4e3_21_phrase',
    environmentSummary: 'O fechamento inspirador da lição.',
    musicDescription: 'Música inspiradora.',
    soundEffects: [],
    directorLesson: 'A frase que encerra a jornada de Estêvão com dignidade e triunfo.',
    lines: [
      {
        id: 's4e3_21_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma pessoa pode parecer pequena aos olhos do mundo... mas uma vida cheia de fé pode deixar uma marca enorme.',
      }
    ]
  },
  {
    id: 22,
    sceneNumber: 22,
    title: 'Montagem Final',
    subtitle: 'A Inspiração de Estêvão',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'early_church',
    musicTheme: 'stephen_theme',
    visualKey: 's4e3_22_montage',
    environmentSummary: 'Montagem sonora: comunidade viva e unida, pessoas cuidando de pessoas.',
    musicDescription: 'Música do tema de Estêvão cresce triunfante.',
    soundEffects: ['eating_together', 'children_laughing'],
    directorLesson: 'A semente plantada por Estêvão continua gerando frutos de amor e fé.',
    lines: [
      {
        id: 's4e3_22_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Estêvão serviu. Estêvão falou. Estêvão permaneceu fiel.',
      },
      {
        id: 's4e3_22_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E sua história continuou inspirando aqueles que vieram depois.',
      }
    ]
  },
  {
    id: 23,
    sceneNumber: 23,
    title: 'O Gancho para Paulo',
    subtitle: 'Um caminho inesperado',
    biblicalRef: 'Atos 8 e 9',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'paul_hook',
    musicTheme: 'paul_theme',
    visualKey: 's4e3_23_hook',
    environmentSummary: 'Música muda completamente, som de passos em estrada seca de terra.',
    musicDescription: 'A música ganha força e mistério com tons épicos de deserto e tempestade que vem aí.',
    soundEffects: ['footsteps', 'wind_breeze'],
    directorLesson: 'Fazer o gancho perfeito para o imenso encontro no caminho de Damasco que acontecerá no ep 23.',
    lines: [
      {
        id: 's4e3_23_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas agora... a história seguiria por um caminho inesperado.',
      },
      {
        id: 's4e3_23_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Um homem chamado Saulo... começaria a perseguir os seguidores de Jesus.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e3_23_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Até que, um dia... ele teria um encontro que mudaria sua vida para sempre.',
      }
    ]
  },
  {
    id: 24,
    sceneNumber: 24,
    title: 'Próximo Episódio',
    subtitle: 'Paulo',
    biblicalRef: '',
    durationLabel: '10 segundos',
    estimatedDurationSec: 10,
    ambientType: 'paul_hook',
    musicTheme: 'paul_theme',
    visualKey: 's4e3_24_next',
    environmentSummary: 'O anúncio imponente do próximo capítulo.',
    musicDescription: 'A música épica encerra com suspense marcante.',
    soundEffects: [],
    directorLesson: 'O clímax final do trailer.',
    lines: [
      {
        id: 's4e3_24_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'No próximo episódio... Paulo. O homem que teve sua vida transformada.',
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
    visualKey: 's4e3_25_outro',
    environmentSummary: 'O encerramento acolhedor, retomando o conforto da série infantil.',
    musicDescription: 'O jingle retorna a série ao seu lugar de diversão e aprendizado seguro.',
    soundEffects: ['toon_tales_jingle'],
    directorLesson: 'Entregar o abraço de final de episódio que eles esperam.',
    lines: [
      {
        id: 's4e3_25_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E essa foi mais uma aventura da Bíblia em Áudio.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e3_25_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a história ainda não terminou...',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's4e3_25_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma nova aventura está esperando por você.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e3_25_l4',
        character: 'child',
        characterLabel: 'Crianças',
        text: 'TOON TALES KIDS!',
        emotionGuide: 'Em coro feliz e forte'
      },
      {
        id: 's4e3_25_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Histórias que ensinam, aventuras que transformam!',
      }
    ]
  }
];

export const ESTEVAO_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    dayLabel: 'O Serviço',
    question: 'Por que Estêvão foi escolhido pelos apóstolos?',
    options: ['Para liderar exércitos', 'Para ajudar a cuidar da comunidade, porque ele era cheio de fé, sabedoria e amor', 'Para cantar hinos no templo', 'Para construir barcos'],
    correctIndex: 1,
    explanation: 'A igreja primitiva estava crescendo muito, e precisava de homens de boa reputação e amor para ajudar a servir as pessoas, principalmente cuidando da distribuição de comida.',
    biblicalVerse: 'Atos 6:2-5',
  },
  {
    id: 2,
    dayLabel: 'Além do Serviço',
    question: 'O que Estêvão fazia além de cuidar e servir a comunidade?',
    options: ['Ele ensinava e falava com muita fé e sabedoria sobre Jesus', 'Ele viajava de barco pelo mundo todo', 'Ele pintava quadros de Israel', 'Ele construía casas para os reis'],
    correctIndex: 0,
    explanation: 'Deus usava Estêvão poderosamente! Além de servir, ele falava de Jesus com muita graça e sabedoria, de um modo que ninguém conseguia discutir com a verdade que ele ensinava.',
    biblicalVerse: 'Atos 6:8-10',
  },
  {
    id: 3,
    dayLabel: 'A Visão',
    question: 'Quando as autoridades estavam muito bravas com ele, para onde Estêvão olhou e o que ele viu?',
    options: ['Ele olhou para a rua e viu seus amigos', 'Ele olhou para o céu e viu os céus abertos e Jesus em pé à direita de Deus', 'Ele olhou para o chão e achou uma moeda', 'Ele fechou os olhos e dormiu'],
    correctIndex: 1,
    explanation: 'Ao invés de se assustar, ele olhou firmemente para o alto e recebeu a grande visão do Senhor para confortar o seu coração!',
    biblicalVerse: 'Atos 7:55-56',
  },
  {
    id: 4,
    dayLabel: 'O Perdão de Estêvão',
    question: 'O que Estêvão fez pelas pessoas que estavam lhe fazendo o mal, imitando o mesmo amor de Jesus?',
    options: ['Ele pediu para elas lhe darem dinheiro', 'Ele perdoou essas pessoas, orando "Senhor, não os condenes por isso"', 'Ele prometeu que voltaria para discutir mais', 'Ele pediu para elas correrem'],
    correctIndex: 1,
    explanation: 'No seu momento mais difícil, Estêvão teve a verdadeira coragem de perdoar os seus inimigos. Ele fez a mesma coisa que Jesus havia feito na cruz.',
    biblicalVerse: 'Atos 7:60',
  },
  {
    id: 5,
    dayLabel: 'A Nova Semente',
    question: 'Entre as pessoas que estavam testemunhando a atitude de Estêvão, havia um jovem. Qual era o seu nome?',
    options: ['Pedro', 'João', 'Moisés', 'Saulo'],
    correctIndex: 3,
    explanation: 'O jovem Saulo estava ali e ele seria a próxima pessoa a ter sua vida virada de cabeça para baixo pelo Senhor Jesus! Deus estava prestes a começar uma nova história.',
    biblicalVerse: 'Atos 7:58',
  }
];
