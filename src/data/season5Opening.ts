import { Scene, QuizQuestion } from '../types';

export const EPISODE_META_T5E0 = {
  id: 't5e0',
  title: 'Abertura Oficial — Heróis da Fé',
  subtitle: 'Pessoas Comuns. Grandes Desafios. Uma Fé Extraordinária.',
  biblicalText: 'Hebreus 11',
  durationLabel: '90 seg',
  moralLesson: 'Herói não é quem nunca sente medo. Herói é quem, mesmo com medo, escolhe confiar em Deus.',
};

export const SEASON5_OPENING_SCENES: Scene[] = [
  {
    id: 1,
    sceneNumber: 1,
    title: 'O Silêncio e a Bíblia',
    subtitle: 'O chamado das páginas sagradas',
    biblicalRef: 'Hebreus 11:1',
    durationLabel: '10 segundos',
    estimatedDurationSec: 10,
    ambientType: 'bible_quiet',
    musicTheme: 'mysterious_drone',
    visualKey: 's5intro_01_silence',
    environmentSummary: 'Silêncio absoluto. Ouve-se apenas a respiração calma e atenta de uma criança no quarto silencioso.',
    musicDescription: 'Música ausente no início, criando profunda expectativa e respeito auditivo.',
    soundEffects: ['child_breathing', 'heavy_book_table_thud', 'pages_turning'],
    directorLesson: 'Começar no silêncio e no toque da Bíblia para transportar a criança do ruído do mundo para a reverência da Palavra.',
    lines: [
      {
        id: 's5intro_01_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Em completo silêncio... uma criança coloca as mãos sobre a Bíblia Sagrada.',
        soundCue: 'biblia na mesa tum',
      },
      {
        id: 's5intro_01_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'As páginas começam a se mover suavemente.',
        soundCue: 'paginas virando',
        pauseAfter: 'PAUSA',
      }
    ]
  },
  {
    id: 2,
    sceneNumber: 2,
    title: 'Você Já Imaginou?',
    subtitle: 'A grande pergunta da fé',
    biblicalRef: 'Hebreus 11:1–2',
    durationLabel: '12 segundos',
    estimatedDurationSec: 12,
    ambientType: 'early_church',
    musicTheme: 'hopeful_melody',
    visualKey: 's5intro_02_bible',
    environmentSummary: 'Vento suave e passos distantes de caminhada sobre terra batida. A orquestra surge com violinos quentes e piano doce.',
    musicDescription: 'Tema acolhedor de cordas e piano nascendo em crescendo sutil.',
    soundEffects: ['soft_wind', 'distant_footsteps'],
    directorLesson: 'Conectar diretamente com o íntimo da criança através de perguntas que despertam identificação emocional.',
    lines: [
      {
        id: 's5intro_02_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Você já imaginou... como seria ter coragem quando todos ao seu redor estivessem com medo?',
        pauseAfter: 'PAUSA',
        isInteractivePrompt: true,
      },
      {
        id: 's5intro_02_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Como seria continuar acreditando... mesmo quando tudo parecesse completamente impossível?',
        pauseAfter: 'PAUSA DRAMATICA',
      },
      {
        id: 's5intro_02_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A Bíblia está repleta de histórias inesquecíveis como essa.',
      }
    ]
  },
  {
    id: 3,
    sceneNumber: 3,
    title: 'A Galeria: Enoque e Jó',
    subtitle: 'Comunhão e Esperança inabalável',
    biblicalRef: 'Gênesis 5:24; Jó 19:25',
    durationLabel: '10 segundos',
    estimatedDurationSec: 10,
    ambientType: 'wildlife_forest',
    musicTheme: 'pastoral_growth',
    visualKey: 's5intro_03_enoch',
    environmentSummary: 'Brisa na vegetação e canto de pássaros, sucedido por um vento reflexivo no deserto.',
    musicDescription: 'Flauta pastoril suave que se transforma em violoncelo emotivo e nobre.',
    soundEffects: ['nature_birds', 'desert_wind'],
    directorLesson: 'Apresentar Enoque e Jó não como lendas distantes, mas como pessoas que amaram a Deus de verdade.',
    lines: [
      {
        id: 's5intro_03_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Enoque: um homem comum que escolheu caminhar lado a lado com Deus todos os dias da sua vida.',
        soundCue: 'passos sobre a terra',
        pauseAfter: 'PAUSA',
      },
      {
        id: 's5intro_03_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jó: um homem que perdeu quase tudo o que tinha... mas nunca, jamais perdeu a sua esperança no Criador.',
        soundCue: 'vento e cordas',
        pauseAfter: 'PAUSA',
      }
    ]
  },
  {
    id: 4,
    sceneNumber: 4,
    title: 'A Galeria: Gideão e Daniel',
    subtitle: 'O pequeno que Deus ergue e o justo na cova',
    biblicalRef: 'Juízes 6:14; Daniel 6:10',
    durationLabel: '10 segundos',
    estimatedDurationSec: 10,
    ambientType: 'ancient_city',
    musicTheme: 'adventure_epic',
    visualKey: 's5intro_05_gideon',
    environmentSummary: 'Sons de passos marchando ao longe, eco de palácio de pedra e o rugido grave e abafado de leões famintos na noite.',
    musicDescription: 'Percussão épica de aventura seguida por cordas de mistério e nobreza.',
    soundEffects: ['soldiers_marching', 'palace_reverb', 'distant_lion_growl'],
    directorLesson: 'Mostrar o contraste entre a fraqueza humana e a força sobrenatural de quem busca a Deus em oração.',
    lines: [
      {
        id: 's5intro_04_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Gideão: um jovem que se sentia o menor de sua família, mas descobriu que Deus podia usá-lo com poder.',
        soundCue: 'marcha e trombeta',
        pauseAfter: 'PAUSA',
      },
      {
        id: 's5intro_04_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Daniel: um homem que continuou ajoelhado orando ao Senhor três vezes ao dia... mesmo sabendo que isso o levaria à cova dos leões.',
        soundCue: 'eco do palacio e leao',
        pauseAfter: 'PAUSA',
      }
    ]
  },
  {
    id: 5,
    sceneNumber: 5,
    title: 'A Galeria: Ester, Rute e Maria',
    subtitle: 'Coragem no palácio, fidelidade no campo, amor sincero',
    biblicalRef: 'Ester 4:14; Rute 1:16; Lucas 1:38',
    durationLabel: '10 segundos',
    estimatedDurationSec: 10,
    ambientType: 'blooming_forest',
    musicTheme: 'celestial_wonder',
    visualKey: 's5intro_07_esther',
    environmentSummary: 'Passos decididos em corredores reais de mármore, vento suave nos campos de cevada de Belém e uma luz cálida de mansidão.',
    musicDescription: 'Harpa suave, oboé e cordas celestiais luminosas.',
    soundEffects: ['marble_steps', 'wheat_field_wind', 'gentle_chimes'],
    directorLesson: 'Destacar o protagonismo feminino na história bíblica como pilares de obediência, fidelidade e salvação.',
    lines: [
      {
        id: 's5intro_05_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ester: uma jovem rainha que arriscou a própria vida com coragem para proteger o seu povo.',
        pauseAfter: 'PAUSA',
      },
      {
        id: 's5intro_05_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Rute: uma mulher que provou que a fidelidade diária e o amor leal podem transformar para sempre uma história.',
        pauseAfter: 'PAUSA',
      },
      {
        id: 's5intro_05_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E Maria: uma jovem de Nazaré que recebeu o maior anúncio do céu e respondeu com um coração obediente: "Eis aqui a serva do Senhor".',
        soundCue: 'luz celestial e sino',
        pauseAfter: 'PAUSA DRAMATICA',
      }
    ]
  },
  {
    id: 6,
    sceneNumber: 6,
    title: 'Pessoas Reais e Imperfeitas',
    subtitle: 'A humanidade por trás da bravura',
    biblicalRef: 'Hebreus 11:32–34',
    durationLabel: '10 segundos',
    estimatedDurationSec: 10,
    ambientType: 'desert_wind',
    musicTheme: 'emotional_climax',
    visualKey: 's5intro_10_montage',
    environmentSummary: 'Montagem rápida de sons de desertos, praças antigas, tempestades no mar e aldeias pacíficas.',
    musicDescription: 'Crescendo orquestral comovente e envolvente que une o épico ao profundamente humano.',
    soundEffects: ['fast_page_flip', 'whoosh_air'],
    directorLesson: 'Desmistificar o heroísmo falso: os heróis bíblicos choraram, tiveram dúvidas e sentiram medo, mas não desistiram.',
    lines: [
      {
        id: 's5intro_06_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles não eram estátuas de bronze. Eles eram pessoas como você e eu.',
      },
      {
        id: 's5intro_06_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles sentiram medo na escuridão. Fizeram escolhas difíceis. Alguns tropeçaram. Alguns choraram na solidão.',
      },
      {
        id: 's5intro_06_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Alguns precisaram recomeçar do zero.',
        pauseAfter: 'PAUSA DRAMATICA',
      }
    ]
  },
  {
    id: 7,
    sceneNumber: 7,
    title: 'O Que é a Verdadeira Fé?',
    subtitle: 'A força invisível que move montanhas',
    biblicalRef: 'Hebreus 11:1–3',
    durationLabel: '10 segundos',
    estimatedDurationSec: 10,
    ambientType: 'sabbath_peace',
    musicTheme: 'sacred_piano_strings',
    visualKey: 's5intro_11_faith',
    environmentSummary: 'A música recolhe-se por um instante para dar lugar a uma clareza cristalina no ar.',
    musicDescription: 'Solo de piano límpido com acordes graves de violoncelo que sustentam a alma.',
    soundEffects: ['heartbeat_pulse'],
    directorLesson: 'Definir a fé como ação viva de confiança diária, não apenas uma teoria ou pensamento abstrato.',
    lines: [
      {
        id: 's5intro_07_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas havia algo poderoso e invencível que os unia...',
        pauseAfter: 'PAUSA',
      },
      {
        id: 's5intro_07_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'FÉ!',
        pauseAfter: 'PAUSA',
      },
      {
        id: 's5intro_07_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Fé para continuar caminhando. Fé para obedecer. Fé para perdoar quem nos feriu. Fé para recomeçar com dignidade. Fé para fazer sempre o que é certo aos olhos de Deus!',
      }
    ]
  },
  {
    id: 8,
    sceneNumber: 8,
    title: 'O Desafio Para o Seu Coração',
    subtitle: 'A voz que fala a você agora',
    biblicalRef: 'Hebreus 12:1',
    durationLabel: '8 segundos',
    estimatedDurationSec: 8,
    ambientType: 'bible_quiet',
    musicTheme: 'introspective',
    visualKey: 's5intro_11_faith',
    environmentSummary: 'Silêncio no ar, acompanhado de um batimento suave e aconchegante.',
    musicDescription: 'Uma nota sustentada suave ao violino, abrindo espaço para a decisão da criança.',
    soundEffects: ['warm_chime'],
    directorLesson: 'Provocar uma reflexão pessoal direta que convida a criança a ser protagonista de sua própria jornada de fé.',
    lines: [
      {
        id: 's5intro_08_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E agora... a pergunta é para você!',
        isInteractivePrompt: true,
        pauseAfter: 'PAUSA',
      },
      {
        id: 's5intro_08_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O que você faria se precisasse confiar em Deus, mesmo sem conseguir enxergar o que vai acontecer amanhã?',
        pauseAfter: 'PAUSA DRAMATICA',
        isInteractivePrompt: true,
      }
    ]
  },
  {
    id: 9,
    sceneNumber: 9,
    title: 'A Grande Revelação',
    subtitle: 'HERÓIS DA FÉ!',
    biblicalRef: 'Hebreus 11:39–40',
    durationLabel: '10 segundos',
    estimatedDurationSec: 10,
    ambientType: 'celestial_stars',
    musicTheme: 'heroes_epic',
    visualKey: 's5intro_12_title',
    environmentSummary: 'Grande impacto orquestral, páginas sagradas folheando com brilho sonoro cintilante.',
    musicDescription: 'Fanfarra triunfal com metais majestosos, tímpanos e coro celestial radiante.',
    soundEffects: ['epic_brass_hit', 'chimes_sparkle', 'whoosh_cinematic'],
    directorLesson: 'Entregar o clímax de abertura com máxima empolgação, beleza orquestral e alegria espiritual.',
    lines: [
      {
        id: 's5intro_09_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Prepare o seu coração! Porque agora... nós vamos mergulhar nessas vidas extraordinárias!',
        soundCue: 'vento forte e trombetas',
      },
      {
        id: 's5intro_09_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'HERÓIS DA FÉ!',
        soundCue: 'brilho triunfal',
        pauseAfter: 'PAUSA',
      },
      {
        id: 's5intro_09_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Homens e mulheres... jovens e crianças... pessoas comuns que viveram uma fé que atravessou os séculos!',
      },
      {
        id: 's5intro_09_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Porque herói... não é aquele que nunca sente medo. Herói é quem... mesmo com medo... escolhe confiar!',
        pauseAfter: 'PAUSA DRAMATICA',
      }
    ]
  },
  {
    id: 10,
    sceneNumber: 10,
    title: 'Assinatura Oficial e Chamado',
    subtitle: 'Próxima Parada: Enoque',
    biblicalRef: 'Gênesis 5:22',
    durationLabel: '10 segundos',
    estimatedDurationSec: 10,
    ambientType: 'sabbath_peace',
    musicTheme: 'signature_jingle',
    visualKey: 's5intro_13_first_hero',
    environmentSummary: 'O jingle clássico de Toon Tales Kids ecoa com brilho, seguido pelo som suave de passos e passarinhos na relva fresca.',
    musicDescription: 'Assinatura musical Toon Tales Kids com três notas ascendentes e um fade out para o som da caminhada de Enoque.',
    soundEffects: ['toon_tales_chime', 'nature_birds', 'gentle_steps_earth'],
    directorLesson: 'Sinalizar com autoridade e carinho que a Temporada 5 começou, abrindo as portas do Episódio 30 com expectativa irresistível.',
    lines: [
      {
        id: 's5intro_10_l1',
        character: 'child',
        characterLabel: 'Voz Infantil',
        text: 'TOON TALES KIDS! Heróis da Fé!',
        soundCue: 'jingle alegre',
      },
      {
        id: 's5intro_10_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Histórias que ensinam... aventuras que transformam para sempre o seu coração!',
      },
      {
        id: 's5intro_10_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E a nossa primeira grande aventura começa nos primeiros passos da humanidade com um homem muito especial: seu nome era Enoque.',
        soundCue: 'passos suaves na grama',
      },
      {
        id: 's5intro_10_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'EPISÓDIO 30 — ENOQUE: O HOMEM QUE ANDOU COM DEUS!',
        soundCue: 'virar de pagina e brilho',
        pauseAfter: 'PAUSA LONGA',
      }
    ]
  }
];

export const SEASON5_INTRO_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    dayLabel: 'Pergunta 1 • Hebreus 11',
    question: 'O que une todos os heróis apresentados na Temporada 5 da Bíblia em Áudio?',
    options: [
      'Ter superpoderes invencíveis',
      'A fé e a confiança inabalável em Deus mesmo em tempos difíceis',
      'Nunca ter sentido medo nem chorado',
      'Viverem em palácios cheios de ouro'
    ],
    correctIndex: 1,
    correctAnswer: 1,
    explanation: 'Em Hebreus 11, a Bíblia ensina que o que tornou esses homens e mulheres heróis foi a fé obediente e a confiança sincera no Senhor.',
    biblicalVerse: 'Hebreus 11:1–2'
  },
  {
    id: 2,
    dayLabel: 'Pergunta 2 • Coragem Real',
    question: 'De acordo com a frase oficial da Temporada 5, quem é o verdadeiro herói?',
    options: [
      'Aquele que nunca sente medo em situação nenhuma',
      'Aquele que vence todas as brigas sozinho',
      'Aquele que, mesmo sentindo medo, escolhe confiar em Deus e fazer o que é certo',
      'Apenas os reis e generais de grandes exércitos'
    ],
    correctIndex: 2,
    correctAnswer: 2,
    explanation: 'Sentir medo faz parte de ser humano. O heroísmo bíblico está em escolher confiar no Deus altíssimo mesmo diante do medo.',
    biblicalVerse: 'Josué 1:9'
  },
  {
    id: 3,
    dayLabel: 'Pergunta 3 • Episódio 30',
    question: 'Qual é o primeiro herói da fé que abre as histórias completas da 5ª Temporada (Episódio 30)?',
    options: [
      'Enoque, o homem que andou com Deus',
      'Golias de Gate',
      'O Faraó do Egito',
      'Sansão'
    ],
    correctIndex: 0,
    correctAnswer: 0,
    explanation: 'A Temporada 5 começa com o Episódio 30 contando a emocionante jornada de amizade de Enoque com Deus.',
    biblicalVerse: 'Gênesis 5:24'
  },
  {
    id: 4,
    dayLabel: 'Pergunta 4 • Ester',
    question: 'Qual destas atitudes fez a jovem rainha Ester ser lembrada como uma heroína da fé?',
    options: [
      'Esconder-se e não se importar com o povo',
      'Arriscar sua vida com coragem e oração para salvar seu povo',
      'Fazer festas grandiosas sem orar',
      'Fugir para outra terra bem distante'
    ],
    correctIndex: 1,
    correctAnswer: 1,
    explanation: 'Ester confiou em Deus, jejuou, orou e intercedeu com extraordinária coragem diante do rei pelo seu povo.',
    biblicalVerse: 'Ester 4:14–16'
  },
  {
    id: 5,
    dayLabel: 'Pergunta 5 • Lição de Vida',
    question: 'Como qualquer criança de 6 a 12 anos pode viver como um herói da fé no dia a dia?',
    options: [
      'Apenas quando for adulta e importante',
      'Obedecendo aos pais, sendo leal com os amigos, perdoando e orando de coração',
      'Nunca admitindo quando comete um erro',
      'Sendo mais forte do que todos os colegas'
    ],
    correctIndex: 1,
    correctAnswer: 1,
    explanation: 'A fé em ação se revela nas pequenas decisões diárias: no perdão, na gentileza, na verdade e na oração confiante ao Criador.',
    biblicalVerse: '1 Timóteo 4:12'
  }
];
