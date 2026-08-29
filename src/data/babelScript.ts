import { Scene, QuizQuestion } from '../types';

export const EPISODE_META_4 = {
  id: 't1e4',
  title: 'A Torre de Babel',
  subtitle: 'Quando o orgulho quis chegar ao céu',
  biblicalText: 'Gênesis 11:1–9',
  durationLabel: '10 min',
  moralLesson: 'Nosso sucesso nunca deve nos fazer esquecer de Deus. A humildade é maior que qualquer construção humana.',
};

export const BABEL_SCENES: Scene[] = [
  {
    id: 1,
    sceneNumber: 1,
    title: 'Uma Só Língua',
    subtitle: 'A humanidade unida',
    biblicalRef: 'Gênesis 11:1',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'ancient_city',
    musicTheme: 'adventure_discovery',
    visualKey: 's1e4_01_city',
    environmentSummary: 'Cidade antiga, pessoas conversando, crianças brincando, animais, vento.',
    musicDescription: 'Música de descoberta e aventura.',
    soundEffects: ['nature_sounds', 'wind_sky'],
    directorLesson: 'Curiosidade e entusiasmo. Mostrar como a comunicação era perfeita.',
    lines: [
      {
        id: 's1e4_01_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Depois de muitos anos, os descendentes de Noé começaram a se espalhar pela Terra.',
        emotionGuide: 'Curioso e maravilhado'
      },
      {
        id: 's1e4_01_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Naquele tempo, todas aquelas pessoas falavam a mesma língua.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's1e4_01_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Imagine isso. Todo mundo entendia todo mundo. Quando alguém falava, todos sabiam exatamente o que aquela pessoa queria dizer.',
        soundCue: 'Vozes distantes felizes e conversas claras'
      },
      {
        id: 's1e4_01_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Parecia que nada poderia impedir aquele povo.',
        emotionGuide: 'Entusiástico'
      }
    ]
  },
  {
    id: 2,
    sceneNumber: 2,
    title: 'A Grande Ideia',
    subtitle: 'O plano do povo',
    biblicalRef: 'Gênesis 11:3-4',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'ancient_city',
    musicTheme: 'construction_progress',
    visualKey: 's1e4_02_idea',
    environmentSummary: 'Ambiente de reunião. Várias pessoas conversando entusiasmadas.',
    musicDescription: 'A trilha começa a crescer e ganhar ritmo.',
    soundEffects: [],
    directorLesson: 'Sensação de união e empolgação.',
    lines: [
      {
        id: 's1e4_02_l1',
        character: 'leader',
        characterLabel: 'Líder',
        text: 'Vamos construir uma cidade!',
        emotionGuide: 'Inspirador e confiante'
      },
      {
        id: 's1e4_02_l2',
        character: 'person',
        characterLabel: 'Povo',
        text: 'Sim!',
        emotionGuide: 'Coro animado'
      },
      {
        id: 's1e4_02_l3',
        character: 'leader',
        characterLabel: 'Líder',
        text: 'E vamos construir uma torre enorme!',
        emotionGuide: 'Determinado'
      },
      {
        id: 's1e4_02_l4',
        character: 'person',
        characterLabel: 'Povo',
        text: 'Vamos!',
        emotionGuide: 'Coro muito animado'
      },
      {
        id: 's1e4_02_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles queriam construir uma cidade muito grande. E no centro dela... uma torre gigantesca.',
        soundCue: 'Música rítmica iniciando'
      }
    ]
  },
  {
    id: 3,
    sceneNumber: 3,
    title: 'Vamos Construir!',
    subtitle: 'O trabalho começa',
    biblicalRef: 'Gênesis 11:3',
    durationLabel: '45 segundos',
    estimatedDurationSec: 45,
    ambientType: 'construction_site',
    musicTheme: 'construction_progress',
    visualKey: 's1e4_03_build',
    environmentSummary: 'Som de pedras, madeira, martelos, passos, cordas, trabalhadores.',
    musicDescription: 'Percussão leve, ritmo crescente e sensação de progresso intenso.',
    soundEffects: ['wood_chopping', 'stone_carving'],
    directorLesson: 'Muitos sons de trabalho e ritmo acelerado.',
    lines: [
      {
        id: 's1e4_03_l1',
        character: 'builder',
        characterLabel: 'Construtor 1',
        text: 'Tragam mais pedras!',
        emotionGuide: 'Gritando para o alto, animado'
      },
      {
        id: 's1e4_03_l2',
        character: 'builder',
        characterLabel: 'Construtor 2',
        text: 'Precisamos de mais tijolos!',
      },
      {
        id: 's1e4_03_l3',
        character: 'builder',
        characterLabel: 'Construtor 3',
        text: 'A torre está ficando enorme!',
        emotionGuide: 'Maravilhado'
      },
      {
        id: 's1e4_03_l4',
        character: 'leader',
        characterLabel: 'Líder',
        text: 'Continuem! Não vamos parar!',
        emotionGuide: 'Incentivando o povo'
      },
      {
        id: 's1e4_03_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E o trabalho começou. Dia após dia... pedra após pedra... tijolo após tijolo... a torre crescia.',
        emotionGuide: 'Narrativa ritmada e aventureira'
      }
    ]
  },
  {
    id: 4,
    sceneNumber: 4,
    title: 'Cada Vez Mais Alta',
    subtitle: 'A torre sobe',
    biblicalRef: 'Gênesis 11:4',
    durationLabel: '35 segundos',
    estimatedDurationSec: 35,
    ambientType: 'construction_site',
    musicTheme: 'grand_pride',
    visualKey: 's1e4_04_higher',
    environmentSummary: 'Construção acelerada e vento começando a soprar mais forte no alto.',
    musicDescription: 'A música fica maior e grandiosa.',
    soundEffects: ['wind_sky'],
    directorLesson: 'A ambição crescendo junto com a torre.',
    lines: [
      {
        id: 's1e4_04_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A torre ficou mais alta. E mais alta. E ainda mais alta.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's1e4_04_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'As pessoas olhavam para cima... E mal conseguiam enxergar o topo.',
      },
      {
        id: 's1e4_04_l3',
        character: 'builder',
        characterLabel: 'Construtor 1',
        text: 'Olhem!',
      },
      {
        id: 's1e4_04_l4',
        character: 'builder',
        characterLabel: 'Construtor 2',
        text: 'Estamos chegando muito alto!',
        emotionGuide: 'Ofegante, mas muito animado'
      },
      {
        id: 's1e4_04_l5',
        character: 'leader',
        characterLabel: 'Líder',
        text: 'Vamos continuar!',
        emotionGuide: 'Obcecado com a grandeza'
      }
    ]
  },
  {
    id: 5,
    sceneNumber: 5,
    title: 'O Orgulho',
    subtitle: 'Foco em si mesmos',
    biblicalRef: 'Gênesis 11:4',
    durationLabel: '45 segundos',
    estimatedDurationSec: 45,
    ambientType: 'construction_site',
    musicTheme: 'tense_chords',
    visualKey: 's1e4_05_pride',
    environmentSummary: 'Sons de construção mais pesados.',
    musicDescription: 'A música muda. Menos alegre. Mais grandiosa, mas com acordes tensos.',
    soundEffects: [],
    directorLesson: 'A transição da alegria da construção para o orgulho cego.',
    lines: [
      {
        id: 's1e4_05_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas enquanto a torre crescia... algo também crescia dentro do coração das pessoas.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5,
      },
      {
        id: 's1e4_05_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O orgulho.',
        emotionGuide: 'Sério e grave'
      },
      {
        id: 's1e4_05_l3',
        character: 'leader',
        characterLabel: 'Líder',
        text: 'Vamos construir algo tão grandioso que todos se lembrarão de nós!',
        emotionGuide: 'Arrogante'
      },
      {
        id: 's1e4_05_l4',
        character: 'builder',
        characterLabel: 'Construtor',
        text: 'Ninguém poderá nos deter!',
      },
      {
        id: 's1e4_05_l5',
        character: 'leader',
        characterLabel: 'Líder',
        text: 'Vamos fazer nosso próprio nome!',
      },
      {
        id: 's1e4_05_l6',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles estavam tão impressionados com sua própria força... que começaram a esquecer de Deus. Eles queriam mostrar que poderiam fazer tudo sozinhos.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5,
      }
    ]
  },
  {
    id: 6,
    sceneNumber: 6,
    title: 'Deus Observa',
    subtitle: 'O plano divino',
    biblicalRef: 'Gênesis 11:5-7',
    durationLabel: '35 segundos',
    estimatedDurationSec: 35,
    ambientType: 'tense_silence',
    musicTheme: 'pure_serenity',
    visualKey: 's1e4_06_god',
    environmentSummary: 'Silêncio parcial e celestial. Sons da terra abafados.',
    musicDescription: 'Música diminui, trazendo um tom de majestade e reverência.',
    soundEffects: [],
    directorLesson: 'A perspectiva muda da agitação da Terra para a serenidade divina.',
    lines: [
      {
        id: 's1e4_06_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas Deus viu o que estava acontecendo. Ele conhecia o coração daquele povo.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's1e4_06_l2',
        character: 'god',
        characterLabel: 'Deus',
        text: 'Se todos continuarem unidos dessa maneira, poderão realizar tudo o que planejarem.',
        emotionGuide: 'Sereno, firme, onisciente'
      },
      {
        id: 's1e4_06_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Deus decidiu confundir a língua deles. Assim, eles não conseguiriam mais entender uns aos outros como antes.',
      }
    ]
  },
  {
    id: 7,
    sceneNumber: 7,
    title: 'A Confusão',
    subtitle: 'Línguas misturadas',
    biblicalRef: 'Gênesis 11:7',
    durationLabel: '50 segundos',
    estimatedDurationSec: 50,
    ambientType: 'confusion_babel',
    musicTheme: 'comic_confusion',
    visualKey: 's1e4_07_confusion',
    environmentSummary: 'Várias línguas diferentes (gibberish/sons estrangeiros) se misturando ao som da construção.',
    musicDescription: 'Música dinâmica, surpreendente e levemente divertida (pizzicatos, madeiras).',
    soundEffects: [],
    directorLesson: 'Caos leve e divertido, mas focando na confusão total de comunicação.',
    lines: [
      {
        id: 's1e4_07_l1',
        character: 'builder',
        characterLabel: 'Construtor 1',
        text: 'Traga as pedras!',
      },
      {
        id: 's1e4_07_l2',
        character: 'builder',
        characterLabel: 'Construtor 2',
        text: '¿Qué?',
        emotionGuide: 'Muito confuso'
      },
      {
        id: 's1e4_07_l3',
        character: 'builder',
        characterLabel: 'Construtor 1',
        text: 'Pedras!',
      },
      {
        id: 's1e4_07_l4',
        character: 'builder',
        characterLabel: 'Construtor 2',
        text: 'Não estou entendendo!',
      },
      {
        id: 's1e4_07_l5',
        character: 'builder',
        characterLabel: 'Construtor 3',
        text: 'Tragam a madeira!',
      },
      {
        id: 's1e4_07_l6',
        character: 'person',
        characterLabel: 'Pessoa',
        text: 'O quê?',
      },
      {
        id: 's1e4_07_l7',
        character: 'builder',
        characterLabel: 'Construtor 3',
        text: 'Madeira!',
      },
      {
        id: 's1e4_07_l8',
        character: 'person',
        characterLabel: 'Pessoa',
        text: 'Não entendo!',
      },
      {
        id: 's1e4_07_l9',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E de repente... ninguém conseguia entender ninguém. O homem que pedia pedras... recebia madeira. O trabalhador que pedia água... não conseguia explicar o que queria.',
        soundCue: 'Efeito sonoro engraçado e suave de confusão'
      },
      {
        id: 's1e4_07_l10',
        character: 'builder',
        characterLabel: 'Construtor',
        text: 'Como vamos terminar a torre se ninguém entende ninguém?',
      },
      {
        id: 's1e4_07_l11',
        character: 'person',
        characterLabel: 'Pessoa',
        text: 'Blaf! Shuruba duna?',
        emotionGuide: 'Falando em idioma inventado/estrangeiro'
      },
      {
        id: 's1e4_07_l12',
        character: 'builder',
        characterLabel: 'Construtor',
        text: 'Exatamente!',
      },
      {
        id: 's1e4_07_l13',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas ele também não havia entendido.',
        emotionGuide: 'Leve humor surpreso'
      }
    ]
  },
  {
    id: 8,
    sceneNumber: 8,
    title: 'A Torre Fica para Trás',
    subtitle: 'A dispersão',
    biblicalRef: 'Gênesis 11:8',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'desert_wind',
    musicTheme: 'melancholy_underscore',
    visualKey: 's1e4_08_abandon',
    environmentSummary: 'Ferramentas caindo. Silêncio da construção. Som de passos se afastando, caravanas, vento.',
    musicDescription: 'A música começa a diminuir, adotando um tom reflexivo e espaçoso.',
    soundEffects: ['wind_sky'],
    directorLesson: 'O fim de uma era de arrogância. A dispersão melancólica.',
    lines: [
      {
        id: 's1e4_08_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O trabalho parou. Sem conseguir se comunicar... as pessoas começaram a se separar. E foram para diferentes lugares.',
        soundCue: 'Ferramentas parando, passos se espalhando'
      },
      {
        id: 's1e4_08_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Grupos diferentes seguiram caminhos diferentes. E a grande cidade ficou para trás.',
      }
    ]
  },
  {
    id: 9,
    sceneNumber: 9,
    title: 'Babel',
    subtitle: 'A lembrança',
    biblicalRef: 'Gênesis 11:9',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'desert_wind',
    musicTheme: 'soft_piano_strings',
    visualKey: 's1e4_09_babel',
    environmentSummary: 'Vento soprando na torre vazia.',
    musicDescription: 'Música muito contemplativa (apenas piano e cordas leves).',
    soundEffects: ['wind_sky'],
    directorLesson: 'O peso da história.',
    lines: [
      {
        id: 's1e4_09_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Por causa da confusão das línguas, aquele lugar ficou conhecido como Babel.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's1e4_09_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Babel lembraria para sempre daquele acontecimento. Um povo que queria construir algo grandioso... mas que havia deixado o orgulho tomar conta.',
      }
    ]
  },
  {
    id: 10,
    sceneNumber: 10,
    title: 'A Lição',
    subtitle: 'Aprendendo humildade',
    biblicalRef: '',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'desert_wind',
    musicTheme: 'gentle_teaching',
    visualKey: 's1e4_10_lesson',
    environmentSummary: 'Clima de aprendizado.',
    musicDescription: 'Música emocional e muito acolhedora.',
    soundEffects: [],
    directorLesson: 'Explicar a moral de forma carinhosa, não repreensiva.',
    lines: [
      {
        id: 's1e4_10_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E o que podemos aprender com essa história? Construir, criar e aprender são coisas boas. Ter grandes sonhos também pode ser algo maravilhoso.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5,
      },
      {
        id: 's1e4_10_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas precisamos lembrar de uma coisa. Nosso sucesso nunca deve nos fazer esquecer de Deus. Não precisamos provar que somos melhores que os outros.',
      },
      {
        id: 's1e4_10_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Não precisamos colocar nosso orgulho acima de tudo. Deus nos ensina a viver com humildade.',
      }
    ]
  },
  {
    id: 11,
    sceneNumber: 11,
    title: 'Uma Nova História',
    subtitle: 'O próximo passo',
    biblicalRef: '',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'desert_wind',
    musicTheme: 'hopeful_melody',
    visualKey: 's1e4_11_abraham',
    environmentSummary: 'Transição suave para o próximo gancho da história.',
    musicDescription: 'A música começa a ficar mais esperançosa e viva.',
    soundEffects: [],
    directorLesson: 'Criar expectativa.',
    lines: [
      {
        id: 's1e4_11_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E mesmo depois de Babel... a história ainda estava apenas começando. Deus continuaria trabalhando através de pessoas que aprenderiam a confiar nele.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's1e4_11_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Em breve, conheceremos um homem chamado...',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's1e4_11_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Abraão.',
        soundCue: 'Música cria pequeno gancho brilhante'
      },
      {
        id: 's1e4_11_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Deus faria uma promessa a ele. Uma promessa que mudaria a história.',
      }
    ]
  },
  {
    id: 12,
    sceneNumber: 12,
    title: 'Assinatura',
    subtitle: 'Toon Tales Kids',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'toon_tales_jingle',
    musicTheme: 'signature_jingle',
    visualKey: 's1e4_12_outro',
    environmentSummary: 'Logotipo sonoro',
    musicDescription: 'A música diminui lentamente. Entra o tema musical alegre, memorável e fantástico.',
    soundEffects: ['toon_tales_jingle'],
    directorLesson: 'Energético, feliz e acolhedor.',
    lines: [
      {
        id: 's1e4_12_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E essa foi mais uma aventura da Bíblia em Áudio.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
        emotionGuide: 'Voz calorosa e emocionante'
      },
      {
        id: 's1e4_12_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a história ainda não terminou...',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's1e4_12_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma nova aventura está esperando por você.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's1e4_12_l4',
        character: 'child',
        characterLabel: 'Crianças',
        text: 'TOON TALES KIDS!',
        emotionGuide: 'Alegre e espontânea, em coro'
      },
      {
        id: 's1e4_12_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Histórias que ensinam, aventuras que transformam!',
      }
    ]
  }
];

export const BABEL_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    dayLabel: 'O Começo',
    question: 'No início desta história, o que era verdade sobre todas as pessoas na Terra?',
    options: ['Eles tinham roupas iguais', 'Eles falavam a mesma língua', 'Eles não gostavam de construir', 'Eles moravam em barcos'],
    correctIndex: 1,
    explanation: 'Naquele tempo, a Bíblia conta que todos falavam exatamente a mesma língua e se entendiam perfeitamente.',
    biblicalVerse: 'Gênesis 11:1',
  },
  {
    id: 2,
    dayLabel: 'O Plano',
    question: 'O que o povo decidiu construir juntos?',
    options: ['Uma cidade e uma torre enorme', 'Uma Arca gigante', 'Um jardim cheio de frutas', 'Uma ponte até as nuvens'],
    correctIndex: 0,
    explanation: 'Eles decidiram construir uma grande cidade e, no meio dela, uma torre que chegasse até o céu.',
    biblicalVerse: 'Gênesis 11:4',
  },
  {
    id: 3,
    dayLabel: 'O Problema',
    question: 'O que começou a crescer no coração daquelas pessoas enquanto construíam?',
    options: ['O amor a Deus', 'O medo de cair', 'O orgulho e a vaidade', 'A alegria de dividir'],
    correctIndex: 2,
    explanation: 'O orgulho os fez querer ser os maiores de todos, esquecendo-se completamente de Deus.',
    biblicalVerse: 'Gênesis 11:4',
  },
  {
    id: 4,
    dayLabel: 'A Decisão de Deus',
    question: 'O que Deus fez para parar a construção da torre?',
    options: ['Ele quebrou a torre com um raio', 'Ele confundiu as línguas das pessoas', 'Ele fez chover por 40 dias', 'Ele escondeu as ferramentas deles'],
    correctIndex: 1,
    explanation: 'Deus fez com que as pessoas passassem a falar línguas diferentes. Sem conseguir se entender, a construção parou.',
    biblicalVerse: 'Gênesis 11:7',
  },
  {
    id: 5,
    dayLabel: 'O Nome',
    question: 'Qual foi o nome dado a esse lugar por causa da confusão das línguas?',
    options: ['Éden', 'Arca', 'Babel', 'Jericó'],
    correctIndex: 2,
    explanation: 'O lugar ficou conhecido como Babel, que nos lembra da grande confusão que o orgulho e a falta de Deus podem causar.',
    biblicalVerse: 'Gênesis 11:9',
  }
];
