import { Scene, QuizQuestion } from '../types';

export const EPISODE_META_3 = {
  id: 't1e3',
  title: 'Noé e a Grande Arca',
  subtitle: 'Uma Promessa no Meio da Tempestade',
  biblicalText: 'Gênesis 6–9',
  durationLabel: '12 min',
  moralLesson: 'Mesmo no meio das maiores tempestades, quem confia e obedece a Deus encontra segurança e promessas de um novo amanhã.',
};

export const NOE_SCENES: Scene[] = [
  {
    id: 1,
    sceneNumber: 1,
    title: 'Um Mundo Distante',
    subtitle: 'A terra se afasta de Deus',
    biblicalRef: 'Gênesis 6:5',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'melancholy_breeze',
    musicTheme: 'melancholy_underscore',
    visualKey: 's1e3_01_world',
    environmentSummary: 'Vento triste e atmosfera pesada.',
    musicDescription: 'Trilha suave, com tons menores e tristes.',
    soundEffects: ['wind_sky'],
    directorLesson: 'O narrador deve transmitir um sentimento de tristeza pela humanidade, mas com uma faísca de esperança ao mencionar Noé.',
    lines: [
      {
        id: 's1e3_01_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Muito tempo havia se passado desde o Jardim do Éden. As pessoas se multiplicaram pela terra...',
        emotionGuide: 'Tom suave, quase nostálgico'
      },
      {
        id: 's1e3_01_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas, em vez de cuidarem uns dos outros, elas esqueceram de Deus. Havia brigas, egoísmo e muita tristeza.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5,
        emotionGuide: 'Tom grave e pesaroso'
      },
      {
        id: 's1e3_01_l3',
        character: 'god',
        characterLabel: 'Deus',
        text: 'Meu coração se entristece ao ver o que o mundo se tornou. Eles escolheram a maldade...',
        soundCue: 'Efeito de reverbação suave, tom triste mas amoroso',
        emotionGuide: 'Voz paterna, triste pela humanidade'
      },
      {
        id: 's1e3_01_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Porém, no meio de tantas pessoas que faziam o mal, havia um homem diferente. Um homem que caminhava com Deus. Seu nome era Noé.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
        emotionGuide: 'Esperançoso'
      }
    ]
  },
  {
    id: 2,
    sceneNumber: 2,
    title: 'O Chamado',
    subtitle: 'A missão de Noé',
    biblicalRef: 'Gênesis 6:13-14',
    durationLabel: '50 segundos',
    estimatedDurationSec: 50,
    ambientType: 'garden_eden',
    musicTheme: 'warm_discovery',
    visualKey: 's1e3_02_call',
    environmentSummary: 'Lugar tranquilo, vento sereno.',
    musicDescription: 'Acordes celestiais sutis indicando a presença divina.',
    soundEffects: ['light_burst', 'wind_sky'],
    directorLesson: 'Um diálogo íntimo entre Deus e Noé. Deus revela um plano gigantesco, e Noé escuta com reverência.',
    lines: [
      {
        id: 's1e3_02_l1',
        character: 'god',
        characterLabel: 'Deus',
        text: 'Noé...',
        soundCue: 'Brilho celestial suave'
      },
      {
        id: 's1e3_02_l2',
        character: 'noe',
        characterLabel: 'Noé',
        text: 'Eis-me aqui, Senhor.',
        emotionGuide: 'Reverente e atento'
      },
      {
        id: 's1e3_02_l3',
        character: 'god',
        characterLabel: 'Deus',
        text: 'A maldade tomou conta da terra. Eu enviarei um grande dilúvio, muita chuva, para lavar este mundo e começar de novo.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5,
      },
      {
        id: 's1e3_02_l4',
        character: 'god',
        characterLabel: 'Deus',
        text: 'Mas com você, Noé, eu farei uma aliança. Quero que você construa uma Arca. Um barco enorme, feito de madeira de cipreste.',
        emotionGuide: 'Poderoso, instruindo com clareza'
      },
      {
        id: 's1e3_02_l5',
        character: 'noe',
        characterLabel: 'Noé',
        text: 'Uma... arca, Senhor? Um barco gigante? Em terra firme?',
        emotionGuide: 'Um pouco confuso, mas obediente'
      },
      {
        id: 's1e3_02_l6',
        character: 'god',
        characterLabel: 'Deus',
        text: 'Sim, Noé. Para salvar a você, sua família, e um casal de cada espécie de animal. Confie em mim.',
      }
    ]
  },
  {
    id: 3,
    sceneNumber: 3,
    title: 'A Construção',
    subtitle: 'Fé em ação',
    biblicalRef: 'Gênesis 6:22',
    durationLabel: '45 segundos',
    estimatedDurationSec: 45,
    ambientType: 'ark_interior',
    musicTheme: 'storm_build',
    visualKey: 's1e3_03_build',
    environmentSummary: 'Sons de madeira sendo cortada, marteladas.',
    musicDescription: 'Ritmo marcado, refletindo trabalho duro e perseverança.',
    soundEffects: ['nature_bloom'],
    directorLesson: 'Mostrar o trabalho incansável de Noé, contrastando com as pessoas zombando.',
    lines: [
      {
        id: 's1e3_03_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Construir um barco daquele tamanho não era tarefa para um dia. Levou muitos e muitos anos.',
        emotionGuide: 'Narrativa rítmica'
      },
      {
        id: 's1e3_03_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Enquanto Noé cortava madeira, lixava e passava piche para vedar a Arca, as outras pessoas passavam e davam risada.',
      },
      {
        id: 's1e3_03_l3',
        character: 'noe',
        characterLabel: 'Noé',
        text: 'Podem rir! O Senhor me avisou que a chuva virá. Eu preciso deixar esta Arca forte o suficiente para salvar a minha família!',
        soundCue: 'Som de madeira sendo martelada (TOC, TOC, TOC)',
        emotionGuide: 'Determinado, sem se importar com as zombarias'
      },
      {
        id: 's1e3_03_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Noé não desistiu. Ele fez exatamente tudo o que Deus havia mandado.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5,
      }
    ]
  },
  {
    id: 4,
    sceneNumber: 4,
    title: 'De Dois em Dois',
    subtitle: 'A chegada dos animais',
    biblicalRef: 'Gênesis 7:8-9',
    durationLabel: '50 segundos',
    estimatedDurationSec: 50,
    ambientType: 'nature_sounds',
    musicTheme: 'playful_wonder',
    visualKey: 's1e3_04_animals',
    environmentSummary: 'Muitos sons de animais misturados: leões, pássaros, elefantes, insetos.',
    musicDescription: 'Música curiosa, animada e marcha leve.',
    soundEffects: ['lion_roar', 'birds_chirping', 'horse_gallop'],
    directorLesson: 'Uma cena divertida e grandiosa. Os animais chegando sozinhos.',
    lines: [
      {
        id: 's1e3_04_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Quando a Arca ficou pronta, aconteceu algo maravilhoso. Do meio das florestas, dos céus e das planícies...',
        emotionGuide: 'Maravilhado, empolgante'
      },
      {
        id: 's1e3_04_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os animais começaram a chegar! E não era uma confusão, não. Eles vinham marchando de dois em dois.',
        soundCue: 'Rugido do leão seguido por galopes e pios de pássaros',
      },
      {
        id: 's1e3_04_l3',
        character: 'noe',
        characterLabel: 'Noé',
        text: 'Venham, amiguinhos! Venham para a segurança da Arca. Os leões ali, os elefantes acolá, e cuidado para não pisar nas formigas!',
        emotionGuide: 'Alegre, organizando o trânsito animal'
      },
      {
        id: 's1e3_04_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Deus os guiou, um macho e uma fêmea de cada espécie, exatamente como havia prometido.',
      }
    ]
  },
  {
    id: 5,
    sceneNumber: 5,
    title: 'A Porta se Fecha',
    subtitle: 'O fim da espera',
    biblicalRef: 'Gênesis 7:16',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'rain_storm',
    musicTheme: 'storm_build',
    visualKey: 's1e3_05_door',
    environmentSummary: 'Céu escurecendo, primeiros pingos e som de madeira pesada se fechando.',
    musicDescription: 'Música começa a ganhar tensão.',
    soundEffects: ['wind_sky'],
    directorLesson: 'Momento de transição. A segurança antes da tempestade.',
    lines: [
      {
        id: 's1e3_05_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Noé, sua esposa, seus três filhos — Sem, Cam e Jafé — e as esposas deles entraram na Arca.',
      },
      {
        id: 's1e3_05_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O céu escureceu. Nuvens pesadas cobriram o sol. E então... Deus mesmo fechou a grande porta da Arca pelo lado de fora.',
        soundCue: 'Som de uma porta gigantesca de madeira fechando pesadamente, seguido pelo primeiro trovão.'
      }
    ]
  },
  {
    id: 6,
    sceneNumber: 6,
    title: 'A Tempestade',
    subtitle: 'As águas caem sobre a terra',
    biblicalRef: 'Gênesis 7:17',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'rain_storm',
    musicTheme: 'heavy_rain',
    visualKey: 's1e3_06_storm',
    environmentSummary: 'Chuva torrencial, trovões ensurdecedores e vento forte.',
    musicDescription: 'Orquestra intensa e dramática.',
    soundEffects: ['water_waves', 'wind_sky'],
    directorLesson: 'A força da natureza. A chuva não era uma chuva normal, era o Dilúvio.',
    lines: [
      {
        id: 's1e3_06_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma gota caiu. Depois duas, depois milhares.',
        soundCue: 'Efeito de chuva crescendo até virar torrencial',
      },
      {
        id: 's1e3_06_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'As fontes da terra jorraram e as janelas do céu se abriram. Choveu sem parar, dia e noite, por quarenta dias!',
        emotionGuide: 'Narrativa imersiva, intensa'
      },
      {
        id: 's1e3_06_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A água subiu tanto que cobriu as árvores, as casas e até as montanhas mais altas.',
      }
    ]
  },
  {
    id: 7,
    sceneNumber: 7,
    title: 'Segurança na Arca',
    subtitle: 'Paz em meio ao caos',
    biblicalRef: 'Gênesis 7:23',
    durationLabel: '35 segundos',
    estimatedDurationSec: 35,
    ambientType: 'ark_interior',
    musicTheme: 'ark_safety',
    visualKey: 's1e3_07_inside',
    environmentSummary: 'Som abafado de chuva do lado de fora, som de água batendo no casco.',
    musicDescription: 'Música terna, como um abraço seguro, que contrasta com a chuva abafada.',
    soundEffects: ['water_waves'],
    directorLesson: 'Contraste! Fora é caos, dentro é paz e gratidão.',
    lines: [
      {
        id: 's1e3_07_l1',
        character: 'noe',
        characterLabel: 'Noé',
        text: 'Não tenham medo. Confiem no Senhor. Ele prometeu cuidar de nós.',
        emotionGuide: 'Voz reconfortante, calma'
      },
      {
        id: 's1e3_07_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Do lado de fora, a tempestade rugia. Mas do lado de dentro, a Arca flutuava suavemente. Era o porto seguro de Deus.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      }
    ]
  },
  {
    id: 8,
    sceneNumber: 8,
    title: 'O Fim da Chuva',
    subtitle: 'A lembrança de Deus',
    biblicalRef: 'Gênesis 8:1-2',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'wind_sky',
    musicTheme: 'peaceful_morning',
    visualKey: 's1e3_08_silence',
    environmentSummary: 'Vento soprando suavemente. A chuva para completamente.',
    musicDescription: 'Música suspensa, indicando calmaria.',
    soundEffects: ['wind_sky'],
    directorLesson: 'O silêncio pós-tempestade.',
    lines: [
      {
        id: 's1e3_08_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E então... a chuva parou. Deus se lembrou de Noé e fez soprar um vento forte sobre a terra, e as águas começaram a baixar.',
        soundCue: 'O som da chuva cessa. Entra o som de um vento contínuo e purificador.'
      },
      {
        id: 's1e3_08_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A imensa Arca, depois de navegar pelo mar sem fim, parou e descansou sobre as montanhas de Ararate.',
      }
    ]
  },
  {
    id: 9,
    sceneNumber: 9,
    title: 'A Pomba',
    subtitle: 'Buscando terra seca',
    biblicalRef: 'Gênesis 8:8-9',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'ark_interior',
    musicTheme: 'curious_discovery',
    visualKey: 's1e3_09_dove',
    environmentSummary: 'Som de pássaro batendo as asas e voando.',
    musicDescription: 'Trilha leve e esperançosa.',
    soundEffects: ['birds_chirping'],
    directorLesson: 'A expectativa de Noé.',
    lines: [
      {
        id: 's1e3_09_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Para saber se já havia terra seca, Noé abriu a janela da Arca. Primeiro, ele soltou um corvo, que ficou voando de um lado para outro.',
      },
      {
        id: 's1e3_09_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Depois, ele soltou uma pombinha...',
        soundCue: 'Som de bater de asas leve (frufrufru)'
      },
      {
        id: 's1e3_09_l3',
        character: 'noe',
        characterLabel: 'Noé',
        text: 'Vá, pequenina... veja se o mundo já está pronto para nós.',
        emotionGuide: 'Terno, torcendo pelo passarinho'
      },
      {
        id: 's1e3_09_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a pomba não encontrou lugar para pousar, pois a água ainda cobria a terra, e voltou para a Arca.',
      }
    ]
  },
  {
    id: 10,
    sceneNumber: 10,
    title: 'O Ramo de Oliveira',
    subtitle: 'Um sinal de esperança',
    biblicalRef: 'Gênesis 8:11',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'ark_interior',
    musicTheme: 'hopeful_melody',
    visualKey: 's1e3_10_leaf',
    environmentSummary: 'Alegria sutil.',
    musicDescription: 'Música de celebração suave e cheia de esperança.',
    soundEffects: ['birds_chirping'],
    directorLesson: 'O momento em que Noé sabe que a vida voltou a crescer.',
    lines: [
      {
        id: 's1e3_10_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Sete dias depois, Noé soltou a pombinha novamente. E ao entardecer...',
      },
      {
        id: 's1e3_10_l2',
        character: 'noe',
        characterLabel: 'Noé',
        text: 'Olhem! Ela voltou! E traz no bico... uma folha nova de oliveira! As águas secaram! A vida está brotando de novo!',
        soundCue: 'Pio alegre do pássaro',
        emotionGuide: 'Exultante, muito emocionado e grato'
      }
    ]
  },
  {
    id: 11,
    sceneNumber: 11,
    title: 'Terra Seca',
    subtitle: 'Um novo começo',
    biblicalRef: 'Gênesis 8:15-18',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'nature_sounds',
    musicTheme: 'epic_orchestral',
    visualKey: 's1e3_11_dry',
    environmentSummary: 'Os animais saindo, felizes, correndo e voando. Sons de alegria.',
    musicDescription: 'Trilha majestosa e ensolarada, marcando um novo dia na Terra.',
    soundEffects: ['lion_roar', 'horse_gallop', 'birds_chirping'],
    directorLesson: 'Celebração! O portão se abre e a vida volta ao mundo.',
    lines: [
      {
        id: 's1e3_11_l1',
        character: 'god',
        characterLabel: 'Deus',
        text: 'Noé, saia da Arca. Você, sua família e todos os animais. Saiam e multipliquem-se pela terra.',
        soundCue: 'Voz radiante e encorajadora'
      },
      {
        id: 's1e3_11_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A grande porta se abriu! O sol brilhou no rosto deles. Os animais saíram pulando, correndo e voando de alegria em direção ao novo mundo.',
        soundCue: 'Relinchos felizes, asas batendo, passos na terra seca'
      }
    ]
  },
  {
    id: 12,
    sceneNumber: 12,
    title: 'O Arco-Íris',
    subtitle: 'A aliança no céu',
    biblicalRef: 'Gênesis 9:12-13',
    durationLabel: '45 segundos',
    estimatedDurationSec: 45,
    ambientType: 'rainbow_peace',
    musicTheme: 'rainbow_covenant',
    visualKey: 's1e3_12_rainbow',
    environmentSummary: 'Paz absoluta e divina.',
    musicDescription: 'Música divina, linda e reluzente.',
    soundEffects: ['light_burst', 'celestial_harmony'],
    directorLesson: 'O clímax visual e espiritual da história. O arco-íris é a assinatura de amor de Deus.',
    lines: [
      {
        id: 's1e3_12_l1',
        character: 'noe',
        characterLabel: 'Noé',
        text: 'Obrigado, Senhor. Construímos este altar para agradecer por nos salvar e por Teu imenso amor.',
        emotionGuide: 'Grato, em oração'
      },
      {
        id: 's1e3_12_l2',
        character: 'god',
        characterLabel: 'Deus',
        text: 'Eu estabeleço a minha aliança com vocês. Nunca mais as águas se tornarão um dilúvio para destruir a terra.',
      },
      {
        id: 's1e3_12_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E, de repente, o céu foi pintado com as cores mais lindas! Um grande arco de luz colorida atravessou as nuvens.',
        soundCue: 'Acorde cintilante, mágico e arrepiante de tão bonito'
      },
      {
        id: 's1e3_12_l4',
        character: 'god',
        characterLabel: 'Deus',
        text: 'Este é o meu arco nas nuvens. Ele é o sinal da minha promessa eterna. Sempre que ele aparecer, Eu me lembrarei de vocês.',
        emotionGuide: 'Amoroso e eterno'
      }
    ]
  },
  {
    id: 13,
    sceneNumber: 13,
    title: 'Lição',
    subtitle: 'A promessa',
    biblicalRef: '',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'melancholy_breeze',
    musicTheme: 'gentle_teaching',
    visualKey: 's1e3_13_lesson',
    environmentSummary: 'Ambiente neutro de aprendizado.',
    musicDescription: 'Música doce e gentil.',
    soundEffects: [],
    directorLesson: 'A moral da história ensinada com carinho às crianças.',
    lines: [
      {
        id: 's1e3_13_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E assim, a vida recomeçou. O arco-íris nos lembra até hoje que, não importa o tamanho da tempestade, Deus sempre cuida daqueles que o amam e o obedecem.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5,
        emotionGuide: 'Tom afetuoso e acolhedor'
      }
    ]
  },
  {
    id: 14,
    sceneNumber: 14,
    title: 'Encerramento',
    subtitle: 'Toon Tales Kids',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'toon_tales_jingle',
    musicTheme: 'signature_jingle',
    visualKey: 's1e3_14_outro',
    environmentSummary: 'Logotipo sonoro',
    musicDescription: 'Música alegre, memorável e fantástica (orquestra infantil e coros).',
    soundEffects: ['toon_tales_jingle'],
    directorLesson: 'Energético e feliz.',
    lines: [
      {
        id: 's1e3_14_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E essa foi mais uma aventura da Bíblia em Áudio. Mas a história ainda não terminou... Uma nova aventura está esperando por você.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5,
        emotionGuide: 'Dinâmico, animado'
      },
      {
        id: 's1e3_14_l2',
        character: 'child',
        characterLabel: 'Crianças',
        text: 'Toon Tales Kids!',
        emotionGuide: 'Grito em coro'
      },
      {
        id: 's1e3_14_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Histórias que ensinam...',
      },
      {
        id: 's1e3_14_l4',
        character: 'child',
        characterLabel: 'Crianças',
        text: '...e aventuras que transformam!',
      }
    ]
  }
];

export const NOE_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    dayLabel: 'O Chamado',
    question: 'O que Deus pediu para Noé construir para salvar sua família?',
    options: ['Um castelo bem alto', 'Uma Arca enorme de madeira', 'Um avião de cipreste', 'Uma tenda nas montanhas'],
    correctIndex: 1,
    explanation: 'Deus pediu para Noé construir uma grande Arca (um barco de madeira) para protegê-los da chuva que viria.',
    biblicalVerse: 'Gênesis 6:14',
  },
  {
    id: 2,
    dayLabel: 'Os Animais',
    question: 'Como os animais entraram na Arca?',
    options: ['Sozinhos, de dois em dois', 'Noé teve que caçá-los com uma rede', 'Eles chegaram de avião', 'Eles não entraram na Arca'],
    correctIndex: 0,
    explanation: 'Deus guiou os animais até a Arca, e eles entraram organizados, de dois em dois (um macho e uma fêmea).',
    biblicalVerse: 'Gênesis 7:8-9',
  },
  {
    id: 3,
    dayLabel: 'O Dilúvio',
    question: 'Durante quantos dias e quantas noites choveu sem parar na Terra?',
    options: ['7 dias e 7 noites', '10 dias e 10 noites', '40 dias e 40 noites', '100 dias e 100 noites'],
    correctIndex: 2,
    explanation: 'Choveu torrencialmente por quarenta dias e quarenta noites, cobrindo toda a terra.',
    biblicalVerse: 'Gênesis 7:12',
  },
  {
    id: 4,
    dayLabel: 'A Busca',
    question: 'Qual foi o pássaro que trouxe uma folha nova de oliveira para Noé?',
    options: ['O Corvo', 'A Pomba', 'A Águia', 'O Papagaio'],
    correctIndex: 1,
    explanation: 'A pombinha voltou com um ramo de oliveira, mostrando a Noé que a água havia baixado e as plantas estavam crescendo.',
    biblicalVerse: 'Gênesis 8:11',
  },
  {
    id: 5,
    dayLabel: 'A Promessa',
    question: 'Qual foi o lindo sinal que Deus colocou no céu como promessa de que nunca mais destruiria a terra com água?',
    options: ['Uma nuvem com formato de coração', 'Um raio de sol dourado', 'Um grande Arco-Íris', 'Uma estrela cadente'],
    correctIndex: 2,
    explanation: 'Deus colocou o arco-íris nas nuvens como um sinal do Seu grande amor e da Sua promessa eterna.',
    biblicalVerse: 'Gênesis 9:13',
  }
];
