import { Scene, SoundEffectDefinition, QuizQuestion } from '../types';

export const EPISODE_META_2 = {
  brand: 'TOON TALES KIDS',
  series: 'A Bíblia em Áudio Infantil',
  episodeNumber: 2,
  title: 'ADÃO E EVA',
  subtitle: 'O Jardim Perfeito',
  targetAge: '6 a 12 anos',
  durationTarget: '9 a 12 minutos',
  language: 'Português Brasileiro (PT-BR)',
  biblicalText: 'Gênesis 2:4–25 e Gênesis 3:1–24',
  moralLesson: 'Nossas escolhas têm consequências, mas Deus nunca nos abandona e sempre nos oferece esperança e perdão.',
};

export const ADAO_EVA_SCENES: Scene[] = [
  {
    id: 1,
    sceneNumber: 1,
    title: 'Um Lugar Perfeito',
    subtitle: 'O Jardim do Éden',
    biblicalRef: 'Gênesis 2:8-14',
    durationLabel: '60 segundos',
    estimatedDurationSec: 60,
    ambientType: 'garden_eden',
    musicTheme: 'wonder_nature',
    visualKey: 's1e2_01_garden',
    environmentSummary: 'Pássaros, água corrente, vento leve, natureza exuberante.',
    musicDescription: 'Música cinematográfica, suave e maravilhosa. Piano e cordas.',
    soundEffects: ['Pássaros', 'Água corrente', 'Folhas', 'Animais distantes'],
    directorLesson: 'Transmitir maravilha e paz. O narrador deve soar tranquilo e maravilhado.',
    lines: [
      {
        id: 'e2_s1_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Depois de criar os céus e a Terra, Deus preparou um lugar muito especial.',
        emotionGuide: 'Tranquilo e maravilhado'
      },
      {
        id: 'e2_s1_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Um jardim diferente de qualquer outro lugar que já existiu.',
      },
      {
        id: 'e2_s1_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Seu nome era...',
        pauseType: 'PAUSA',
        pauseSeconds: 1
      },
      {
        id: 'e2_s1_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Éden.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5,
        soundCue: 'natureza_suave'
      },
      {
        id: 'e2_s1_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ali havia árvores bonitas. Plantas de todos os tipos.',
      },
      {
        id: 'e2_s1_l6',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Rios de águas cristalinas. E animais vivendo em paz.',
        soundCue: 'passaros_agua'
      },
      {
        id: 'e2_s1_l7',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Era um lugar perfeito.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5
      },
      {
        id: 'e2_s1_l8',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E foi naquele lugar que Deus colocou o primeiro homem.',
      }
    ]
  },
  {
    id: 2,
    sceneNumber: 2,
    title: 'Adão',
    subtitle: 'O Primeiro Homem',
    biblicalRef: 'Gênesis 2:7, 15',
    durationLabel: '50 segundos',
    estimatedDurationSec: 50,
    ambientType: 'garden_eden',
    musicTheme: 'intimate_life',
    visualKey: 's1e2_02_adam',
    environmentSummary: 'Sons muito sutis de respiração, vida e despertar da natureza.',
    musicDescription: 'A música fica mais íntima, focada na descoberta.',
    soundEffects: ['Efeito sonoro suave de vida', 'Pequenos sons de animais'],
    directorLesson: 'Transmitir a alegria da primeira descoberta.',
    lines: [
      {
        id: 'e2_s2_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Deus formou o homem do pó da terra e soprou em suas narinas o fôlego de vida.',
      },
      {
        id: 'e2_s2_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E o homem passou a viver.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5,
        soundCue: 'sopro_vida'
      },
      {
        id: 'e2_s2_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Seu nome era Adão.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5
      },
      {
        id: 'e2_s2_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Adão abriu os olhos... e viu um mundo maravilhoso diante dele.',
      },
      {
        id: 'e2_s2_l5',
        character: 'adam',
        characterLabel: 'Adão',
        text: 'Que lugar incrível!',
        emotionGuide: 'Curioso, bondoso, alegre, sincero'
      },
      {
        id: 'e2_s2_l6',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele podia ouvir os pássaros. Sentir o vento. Caminhar entre as árvores. E observar os animais.',
        soundCue: 'passos_vento_animais'
      }
    ]
  },
  {
    id: 3,
    sceneNumber: 3,
    title: 'A Responsabilidade',
    subtitle: 'A Árvore do Conhecimento',
    biblicalRef: 'Gênesis 2:16-17',
    durationLabel: '45 segundos',
    estimatedDurationSec: 45,
    ambientType: 'peaceful_garden',
    musicTheme: 'pure_serenity',
    visualKey: 's1e2_03_rule',
    environmentSummary: 'Ambiente calmo. A trilha diminui para focar na voz.',
    musicDescription: 'Música tranquila, quase parando para a fala de Deus.',
    soundEffects: [],
    directorLesson: 'Transmitir autoridade e amor ao mesmo tempo.',
    lines: [
      {
        id: 'e2_s3_l1',
        character: 'god',
        characterLabel: 'Deus',
        text: 'Adão, este jardim foi colocado sob seus cuidados.',
        emotionGuide: 'Majestosa, sábia, amorosa, firme',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5
      },
      {
        id: 'e2_s3_l2',
        character: 'god',
        characterLabel: 'Deus',
        text: 'Você poderá comer das árvores do jardim.',
      },
      {
        id: 'e2_s3_l3',
        character: 'god',
        characterLabel: 'Deus',
        text: 'Mas há uma árvore da qual você não deve comer.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5
      },
      {
        id: 'e2_s3_l4',
        character: 'god',
        characterLabel: 'Deus',
        text: 'É a árvore do conhecimento do bem e do mal. Não coma do seu fruto.',
      },
      {
        id: 'e2_s3_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Deus havia dado a Adão tudo o que ele precisava. Mas também lhe deu uma escolha.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5
      },
      {
        id: 'e2_s3_l6',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Adão poderia confiar em Deus.',
      }
    ]
  },
  {
    id: 4,
    sceneNumber: 4,
    title: 'Eva',
    subtitle: 'A Criação da Mulher',
    biblicalRef: 'Gênesis 2:18-24',
    durationLabel: '60 segundos',
    estimatedDurationSec: 60,
    ambientType: 'blooming_forest',
    musicTheme: 'warm_friendship',
    visualKey: 's1e2_04_eve',
    environmentSummary: 'Sons suaves e românticos da natureza.',
    musicDescription: 'Música suave, emocional e muito calorosa.',
    soundEffects: ['Magia suave de criação'],
    directorLesson: 'Transmitir companheirismo e alegria do encontro.',
    lines: [
      {
        id: 'e2_s4_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas Deus percebeu algo.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5
      },
      {
        id: 'e2_s4_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Não era bom que o homem estivesse sozinho. Então Deus disse:',
      },
      {
        id: 'e2_s4_l3',
        character: 'god',
        characterLabel: 'Deus',
        text: 'Farei para ele uma ajudadora que lhe seja adequada.',
      },
      {
        id: 'e2_s4_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E Deus criou a mulher.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5
      },
      {
        id: 'e2_s4_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Quando Adão a viu, ficou maravilhado.',
      },
      {
        id: 'e2_s4_l6',
        character: 'adam',
        characterLabel: 'Adão',
        text: 'Ela é parte de mim!',
        emotionGuide: 'Maravilhado, feliz'
      },
      {
        id: 'e2_s4_l7',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Seu nome era Eva.',
      },
      {
        id: 'e2_s4_l8',
        character: 'eve',
        characterLabel: 'Eva',
        text: 'Olá, Adão.',
        emotionGuide: 'Doce, expressiva, feliz'
      },
      {
        id: 'e2_s4_l9',
        character: 'adam',
        characterLabel: 'Adão',
        text: 'Olá, Eva.',
        soundCue: 'musica_calorosa'
      },
      {
        id: 'e2_s4_l10',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Agora Adão e Eva caminhavam juntos pelo jardim. Conversavam. Conheciam os animais. Cuidavam da criação. E desfrutavam da companhia um do outro.',
      }
    ]
  },
  {
    id: 5,
    sceneNumber: 5,
    title: 'O Jardim Perfeito',
    subtitle: 'A Harmonia Original',
    biblicalRef: 'Gênesis 2:25',
    durationLabel: '45 segundos',
    estimatedDurationSec: 45,
    ambientType: 'triumphant_nature',
    musicTheme: 'pastoral_growth',
    visualKey: 's1e2_05_harmony',
    environmentSummary: 'Sons plenos da natureza: água, pássaros, animais, vento e passos.',
    musicDescription: 'Montagem musical alegre, fluida, bela.',
    soundEffects: ['Água', 'Pássaros', 'Animais', 'Vento', 'Passos'],
    directorLesson: 'Transmitir que a vida ali não tinha defeitos.',
    lines: [
      {
        id: 'e2_s5_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Todos os dias eram cheios de descobertas.',
        soundCue: 'som_montagem_natureza'
      },
      {
        id: 'e2_s5_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Não havia medo. Não havia tristeza. Não havia doença. Não havia morte.',
      },
      {
        id: 'e2_s5_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Adão e Eva viviam em perfeita harmonia com Deus.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5
      },
      {
        id: 'e2_s5_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas havia uma coisa que eles precisavam lembrar.',
        soundCue: 'musica_diminui'
      },
      {
        id: 'e2_s5_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A palavra de Deus.',
      }
    ]
  },
  {
    id: 6,
    sceneNumber: 6,
    title: 'A Serpente',
    subtitle: 'A Semente da Dúvida',
    biblicalRef: 'Gênesis 3:1-5',
    durationLabel: '60 segundos',
    estimatedDurationSec: 60,
    ambientType: 'tense_silence',
    musicTheme: 'tense_minimal',
    visualKey: 's1e2_06_snake',
    environmentSummary: 'O ambiente muda. Os pássaros somem. Silêncio parcial.',
    musicDescription: 'Música minimalista com tensão crescente.',
    soundEffects: ['Silêncio na natureza', 'Sons rastejantes muito sutis'],
    directorLesson: 'Não usar tom demoníaco. A serpente deve soar misteriosa, calma e persuasiva.',
    lines: [
      {
        id: 'e2_s6_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Entre os animais havia uma serpente.',
        emotionGuide: 'Mais baixo, um pouco tenso',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5
      },
      {
        id: 'e2_s6_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ela era astuta.',
      },
      {
        id: 'e2_s6_l3',
        character: 'snake',
        characterLabel: 'A Serpente',
        text: 'Foi isso mesmo que Deus disse?',
        emotionGuide: 'Sutil, calma, persuasiva, parece saber do que fala'
      },
      {
        id: 'e2_s6_l4',
        character: 'eve',
        characterLabel: 'Eva',
        text: 'Deus disse que podemos comer dos frutos das árvores do jardim.',
        emotionGuide: 'Confiante no início, mas dando ouvidos',
        pauseType: 'PAUSA',
        pauseSeconds: 1.2
      },
      {
        id: 'e2_s6_l5',
        character: 'eve',
        characterLabel: 'Eva',
        text: 'E que não devemos comer do fruto daquela árvore.',
      },
      {
        id: 'e2_s6_l6',
        character: 'snake',
        characterLabel: 'A Serpente',
        text: 'Vocês não morrerão.',
        emotionGuide: 'Sussurrante e muito persuasivo',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5
      },
      {
        id: 'e2_s6_l7',
        character: 'snake',
        characterLabel: 'A Serpente',
        text: 'Deus sabe que, quando comerem desse fruto, seus olhos serão abertos. Vocês serão como Deus, conhecendo o bem e o mal.',
        soundCue: 'tensao_crescente'
      }
    ]
  },
  {
    id: 7,
    sceneNumber: 7,
    title: 'A Escolha',
    subtitle: 'O Fruto Proibido',
    biblicalRef: 'Gênesis 3:6',
    durationLabel: '60 segundos',
    estimatedDurationSec: 60,
    ambientType: 'tense_silence',
    musicTheme: 'tense_minimal',
    visualKey: 's1e2_07_choice',
    environmentSummary: 'Quase total silêncio. Foco no som da quebra.',
    musicDescription: 'Silêncio com poucos graves dramáticos.',
    soundEffects: ['Som natural de fruto colhido', 'Mordida'],
    directorLesson: 'Criar um suspense real, o momento da tragédia silenciosa.',
    lines: [
      {
        id: 'e2_s7_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eva olhou para a árvore.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5
      },
      {
        id: 'e2_s7_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O fruto parecia bonito. Parecia desejável.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5
      },
      {
        id: 'e2_s7_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ela sabia o que Deus havia ordenado. Mas agora havia uma dúvida em seu coração.',
      },
      {
        id: 'e2_s7_l4',
        character: 'eve',
        characterLabel: 'Eva',
        text: 'Será que...?',
        emotionGuide: 'Incompleta. Cheia de dúvida.',
        pauseType: 'PAUSA',
        pauseSeconds: 2.0
      },
      {
        id: 'e2_s7_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eva tomou o fruto.',
        soundCue: 'fruto_colhido'
      },
      {
        id: 'e2_s7_l6',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E comeu.',
        pauseType: 'PAUSA LONGA',
        pauseSeconds: 2.5
      },
      {
        id: 'e2_s7_l7',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E então deu também a Adão.',
      },
      {
        id: 'e2_s7_l8',
        character: 'adam',
        characterLabel: 'Adão',
        text: 'Eva...',
        emotionGuide: 'Hesitante, um pouco inseguro.'
      },
      {
        id: 'e2_s7_l9',
        character: 'eve',
        characterLabel: 'Eva',
        text: 'Experimente.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5
      },
      {
        id: 'e2_s7_l10',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E Adão também comeu.'
      }
    ]
  },
  {
    id: 8,
    sceneNumber: 8,
    title: 'Tudo Mudou',
    subtitle: 'A Descoberta do Medo',
    biblicalRef: 'Gênesis 3:7-8',
    durationLabel: '45 segundos',
    estimatedDurationSec: 45,
    ambientType: 'empty_wind',
    musicTheme: 'sad_strings',
    visualKey: 's1e2_08_fear',
    environmentSummary: 'Vento mais frio. Ausência da alegria natural.',
    musicDescription: 'A trilha muda imediatamente. Cordas tristes e sombrias.',
    soundEffects: ['Respiração suave ofegante', 'Folhas secas'],
    directorLesson: 'Transmitir o peso imediato do erro. Vergonha e medo.',
    lines: [
      {
        id: 'e2_s8_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Naquele momento...',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5
      },
      {
        id: 'e2_s8_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'algo mudou.',
      },
      {
        id: 'e2_s8_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Adão e Eva perceberam que estavam nus. Sentiram vergonha. Sentiram medo.',
        soundCue: 'respiracao_ofegante'
      },
      {
        id: 'e2_s8_l4',
        character: 'adam',
        characterLabel: 'Adão',
        text: 'Precisamos nos esconder.',
        emotionGuide: 'Confuso, assustado'
      },
      {
        id: 'e2_s8_l5',
        character: 'eve',
        characterLabel: 'Eva',
        text: 'Deus está vindo.',
        emotionGuide: 'Medo, arrependimento'
      },
      {
        id: 'e2_s8_l6',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E pela primeira vez...',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5
      },
      {
        id: 'e2_s8_l7',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'eles sentiram medo de encontrar Deus.'
      }
    ]
  },
  {
    id: 9,
    sceneNumber: 9,
    title: 'O Chamado de Deus',
    subtitle: 'As Desculpas',
    biblicalRef: 'Gênesis 3:9-13',
    durationLabel: '60 segundos',
    estimatedDurationSec: 60,
    ambientType: 'empty_wind',
    musicTheme: 'sad_strings',
    visualKey: 's1e2_09_hide',
    environmentSummary: 'Ambiente quase silencioso. Apenas vento.',
    musicDescription: 'Triste e melancólica.',
    soundEffects: ['Passos pesados nas folhas secas'],
    directorLesson: 'Deus não está gritando irritado. Ele está triste e chamando por eles.',
    lines: [
      {
        id: 'e2_s9_l1',
        character: 'god',
        characterLabel: 'Deus',
        text: 'Adão...',
        emotionGuide: 'Voz profunda, triste, buscando',
        pauseType: 'PAUSA',
        pauseSeconds: 2.0
      },
      {
        id: 'e2_s9_l2',
        character: 'god',
        characterLabel: 'Deus',
        text: 'Adão, onde você está?'
      },
      {
        id: 'e2_s9_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Adão ouviu a voz de Deus.'
      },
      {
        id: 'e2_s9_l4',
        character: 'adam',
        characterLabel: 'Adão',
        text: 'Eu ouvi sua voz no jardim... e fiquei com medo. Por isso me escondi.'
      },
      {
        id: 'e2_s9_l5',
        character: 'god',
        characterLabel: 'Deus',
        text: 'Quem disse que você estava nu?',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5
      },
      {
        id: 'e2_s9_l6',
        character: 'god',
        characterLabel: 'Deus',
        text: 'Você comeu da árvore que eu ordenei que não comesse?',
        pauseType: 'PAUSA LONGA',
        pauseSeconds: 2.0
      },
      {
        id: 'e2_s9_l7',
        character: 'adam',
        characterLabel: 'Adão',
        text: 'Foi a mulher que o Senhor me deu.',
        emotionGuide: 'Acusador, defensivo, triste'
      },
      {
        id: 'e2_s9_l8',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E Eva respondeu.'
      },
      {
        id: 'e2_s9_l9',
        character: 'eve',
        characterLabel: 'Eva',
        text: 'A serpente me enganou.',
        emotionGuide: 'Culpada, arrependida'
      }
    ]
  },
  {
    id: 10,
    sceneNumber: 10,
    title: 'As Consequências',
    subtitle: 'O Mundo Quebrado',
    biblicalRef: 'Gênesis 3:14-19',
    durationLabel: '50 segundos',
    estimatedDurationSec: 50,
    ambientType: 'melancholy_breeze',
    musicTheme: 'sad_strings',
    visualKey: 's1e2_10_consequence',
    environmentSummary: 'Vento e vazio. A tristeza pela perfeição perdida.',
    musicDescription: 'Triste, porém delicada.',
    soundEffects: [],
    directorLesson: 'Explicar de forma compassiva que o erro teve um preço alto.',
    lines: [
      {
        id: 'e2_s10_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A escolha de Adão e Eva trouxe consequências.',
        emotionGuide: 'Triste, solene'
      },
      {
        id: 'e2_s10_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A harmonia que existia foi quebrada. A dor entrou na história humana.',
      },
      {
        id: 'e2_s10_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A morte passou a fazer parte do mundo. Adão e Eva não poderiam continuar vivendo para sempre naquele jardim como antes.',
        pauseType: 'PAUSA LONGA',
        pauseSeconds: 2.0
      },
      {
        id: 'e2_s10_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas havia algo que eles ainda precisavam saber.',
      }
    ]
  },
  {
    id: 11,
    sceneNumber: 11,
    title: 'Deus Não os Abandonou',
    subtitle: 'A Primeira Promessa',
    biblicalRef: 'Gênesis 3:21-22',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'melancholy_breeze',
    musicTheme: 'hopeful_melody',
    visualKey: 's1e2_11_promise',
    environmentSummary: 'Vento suave, som de roupas sendo feitas ou entregues (tecido).',
    musicDescription: 'A música começa lentamente a mudar de tristeza para esperança.',
    soundEffects: ['Som suave de peles/tecido'],
    directorLesson: 'A promessa de que Deus ainda os ama, apesar do erro.',
    lines: [
      {
        id: 'e2_s11_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mesmo diante da desobediência... Deus não deixou de cuidar deles.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5
      },
      {
        id: 'e2_s11_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Deus fez roupas para Adão e Eva. E os preparou para enfrentar uma nova realidade.',
      },
      {
        id: 'e2_s11_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles precisariam deixar o Jardim do Éden.',
        pauseType: 'PAUSA LONGA',
        pauseSeconds: 2.0
      },
      {
        id: 'e2_s11_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas Deus continuaria presente.',
      }
    ]
  },
  {
    id: 12,
    sceneNumber: 12,
    title: 'A Saída do Jardim',
    subtitle: 'Um Novo Começo Fora do Éden',
    biblicalRef: 'Gênesis 3:23-24',
    durationLabel: '50 segundos',
    estimatedDurationSec: 50,
    ambientType: 'empty_wind',
    musicTheme: 'hopeful_melody',
    visualKey: 's1e2_12_leave',
    environmentSummary: 'Vento suave, passos firmes, mas melancólicos.',
    musicDescription: 'Música emocional.',
    soundEffects: ['Passos na terra diminuindo de volume'],
    directorLesson: 'Um momento de despedida, mas também de resiliência e fé no futuro.',
    lines: [
      {
        id: 'e2_s12_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Adão e Eva olharam uma última vez para o jardim.'
      },
      {
        id: 'e2_s12_l2',
        character: 'eve',
        characterLabel: 'Eva',
        text: 'Adão... Você acha que um dia tudo será diferente?',
        emotionGuide: 'Buscando esperança.'
      },
      {
        id: 'e2_s12_l3',
        character: 'adam',
        characterLabel: 'Adão',
        text: 'Eu não sei.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5
      },
      {
        id: 'e2_s12_l4',
        character: 'adam',
        characterLabel: 'Adão',
        text: 'Mas precisamos confiar em Deus.'
      },
      {
        id: 'e2_s12_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E então eles seguiram adiante.',
        soundCue: 'passos_terra'
      },
      {
        id: 'e2_s12_l6',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O jardim ficou para trás.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5
      },
      {
        id: 'e2_s12_l7',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a história da humanidade estava apenas começando.',
      }
    ]
  },
  {
    id: 13,
    sceneNumber: 13,
    title: 'Lição para as Crianças',
    subtitle: 'O Que Aprendemos',
    biblicalRef: 'Aplicação',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'warm_acoustic',
    musicTheme: 'warm_discovery',
    visualKey: 's1e2_13_lesson',
    environmentSummary: 'Quente e próximo.',
    musicDescription: 'A música fica acolhedora, voltada diretamente ao pequeno ouvinte.',
    soundEffects: [],
    directorLesson: 'Conversa direta com a criança.',
    lines: [
      {
        id: 'e2_s13_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E o que podemos aprender com Adão e Eva?',
        emotionGuide: 'Caloroso e amigável',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5
      },
      {
        id: 'e2_s13_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Deus nos criou para viver em amizade com Ele. Ele nos dá liberdade para escolher. Mas nossas escolhas têm consequências.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5
      },
      {
        id: 'e2_s13_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Quando erramos, precisamos reconhecer nosso erro. E lembrar que Deus continua sendo nosso Criador.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5
      },
      {
        id: 'e2_s13_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele nos chama para confiar nele.',
      }
    ]
  },
  {
    id: 14,
    sceneNumber: 14,
    title: 'Encerramento Emocional',
    subtitle: 'A Promessa que Atravessa o Tempo',
    biblicalRef: '',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'warm_acoustic',
    musicTheme: 'hopeful_melody',
    visualKey: 's1e2_14_outro',
    environmentSummary: 'Transição para a marca sonora.',
    musicDescription: 'Ponte de esperança que conduz ao jingle da série.',
    soundEffects: [],
    directorLesson: 'Manter a expectativa para a próxima história.',
    lines: [
      {
        id: 'e2_s14_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Adão e Eva deixaram o jardim... mas Deus não abandonou a humanidade.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5
      },
      {
        id: 'e2_s14_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A história continuaria. Novas pessoas nasceriam. Novas aventuras aconteceriam. E, muitos anos depois... Deus revelaria ainda mais claramente seu plano de amor.',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.5
      },
      {
        id: 'e2_s14_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas essa... é uma história para outro episódio.',
      }
    ]
  },
  {
    id: 15,
    sceneNumber: 15,
    title: 'Assinatura',
    subtitle: 'Toon Tales Kids',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'toon_tales_jingle',
    musicTheme: 'signature_jingle',
    visualKey: 's1e2_15_jingle',
    environmentSummary: 'Logotipo sonoro',
    musicDescription: 'Música alegre, memorável e fantástica (orquestra infantil e coros).',
    soundEffects: ['Magia brand'],
    directorLesson: 'Energético e feliz.',
    lines: [
      {
        id: 'e2_s15_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E essa foi mais uma aventura da Bíblia em Áudio. Mas a história ainda não terminou... Uma nova aventura está esperando por você.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5,
        emotionGuide: 'Dinâmico, animado'
      },
      {
        id: 'e2_s15_l2',
        character: 'child',
        characterLabel: 'Crianças',
        text: 'Toon Tales Kids!',
        emotionGuide: 'Grito em coro'
      },
      {
        id: 'e2_s15_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Histórias que ensinam...',
      },
      {
        id: 'e2_s15_l4',
        character: 'child',
        characterLabel: 'Crianças',
        text: '...e aventuras que transformam!',
      }
    ]
  }
];

export const ADAO_EVA_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    dayLabel: 'O Jardim',
    question: 'Qual era o nome do lugar perfeito que Deus preparou para Adão?',
    options: ['Jardim das Oliveiras', 'Jardim do Éden', 'Jardim de Babilônia', 'Terra Prometida'],
    correctIndex: 1,
    explanation: 'Deus colocou o primeiro homem em um lugar muito especial chamado Jardim do Éden, onde tudo era perfeito.',
    biblicalVerse: 'Gênesis 2:8',
  },
  {
    id: 2,
    dayLabel: 'A Regra',
    question: 'De qual árvore Adão e Eva não podiam comer?',
    options: ['A Árvore da Vida', 'A Árvore da Maçã', 'A Árvore do Conhecimento do bem e do mal', 'A Árvore dos Pássaros'],
    correctIndex: 2,
    explanation: 'Eles podiam comer de todas as árvores, menos da Árvore do Conhecimento do bem e do mal.',
    biblicalVerse: 'Gênesis 2:17',
  },
  {
    id: 3,
    dayLabel: 'A Criação',
    question: 'Por que Deus criou Eva?',
    options: ['Para regar as plantas', 'Porque Adão pediu', 'Porque não era bom que o homem estivesse sozinho', 'Para dar nome aos animais'],
    correctIndex: 2,
    explanation: 'Deus viu que não era bom o homem estar sozinho e fez uma ajudadora para ele.',
    biblicalVerse: 'Gênesis 2:18',
  },
  {
    id: 4,
    dayLabel: 'A Escolha',
    question: 'Quem enganou Eva para comer do fruto proibido?',
    options: ['O Leão', 'A Serpente', 'O Vento', 'Adão'],
    correctIndex: 1,
    explanation: 'A serpente foi astuta e colocou dúvida no coração de Eva.',
    biblicalVerse: 'Gênesis 3:4',
  },
  {
    id: 5,
    dayLabel: 'A Esperança',
    question: 'O que Deus fez por Adão e Eva antes de deixarem o jardim?',
    options: ['Deu-lhes um mapa', 'Construiu uma casa', 'Fez roupas de pele para eles', 'Apagou a memória deles'],
    correctIndex: 2,
    explanation: 'Mesmo após desobedecerem, Deus demonstrou seu amor fazendo roupas para cobri-los e protegê-los.',
    biblicalVerse: 'Gênesis 3:21',
  }
];
