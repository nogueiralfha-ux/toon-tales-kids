import { Scene, QuizQuestion } from '../types';

export const EPISODE_META_T3E7 = {
  id: 't3e7',
  title: 'A Tempestade no Mar',
  subtitle: 'Quando Jesus acalmou o vento e as ondas',
  biblicalText: 'Mateus 8, Marcos 4 e Lucas 8',
  durationLabel: '16 min',
  moralLesson: 'Mesmo quando enfrentamos tempestades, não precisamos enfrentar o medo sozinhos. A fé não significa nunca sentir medo, mas lembrar que Deus está conosco.',
};

export const A_TEMPESTADE_NO_MAR_SCENES: Scene[] = [
  {
    id: 1,
    sceneNumber: 1,
    title: 'A Viagem Começa',
    subtitle: 'Um lago tranquilo',
    biblicalRef: 'Marcos 4:35-36',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'calm_sea_boat',
    musicTheme: 'adventure_discovery',
    visualKey: 's3e7_01_boarding',
    environmentSummary: 'Água tranquila, gaivotas, som da madeira do barco e vento suave.',
    musicDescription: 'Música de aventura e tranquilidade.',
    soundEffects: ['water_gentle', 'seagulls', 'wood_creak'],
    directorLesson: 'Estabelecer a paz e a calmaria antes do conflito.',
    lines: [
      {
        id: 's3e7_01_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus havia passado o dia ensinando. Agora... era hora de atravessar o lago.',
        soundCue: 'Passos de várias pessoas entrando no barco'
      },
      {
        id: 's3e7_01_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus entrou em um barco. Seus discípulos foram com Ele.',
      },
      {
        id: 's3e7_01_l3',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Vamos! Segurem firme!',
        emotionGuide: 'Corajoso, energético'
      },
      {
        id: 's3e7_01_l4',
        character: 'andre',
        characterLabel: 'André',
        text: 'Já estamos indo. Será uma viagem tranquila.',
      },
      {
        id: 's3e7_01_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O lago estava tranquilo.',
      },
      {
        id: 's3e7_01_l6',
        character: 'joao',
        characterLabel: 'João',
        text: 'Que noite bonita.',
      },
      {
        id: 's3e7_01_l7',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ou pelo menos... era o que eles imaginavam.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
        soundCue: 'Som distante de vento começando'
      }
    ]
  },
  {
    id: 2,
    sceneNumber: 2,
    title: 'Jesus Descansa',
    subtitle: 'O sono no barco',
    biblicalRef: 'Marcos 4:38',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'calm_sea_boat',
    musicTheme: 'pure_serenity',
    visualKey: 's3e7_02_jesus_sleeps',
    environmentSummary: 'Barco balançando suavemente.',
    musicDescription: 'Música diminui para um tom sereno.',
    soundEffects: ['water_gentle'],
    directorLesson: 'Mostrar a humanidade de Jesus (cansaço) e Sua paz profunda.',
    lines: [
      {
        id: 's3e7_02_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Depois de um dia inteiro ensinando... Jesus estava cansado.',
      },
      {
        id: 's3e7_02_l2',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Vou descansar um pouco.',
        emotionGuide: 'Sereno, com voz mansa e cansada'
      },
      {
        id: 's3e7_02_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus deitou-se no barco.',
      }
    ]
  },
  {
    id: 3,
    sceneNumber: 3,
    title: 'O Vento Muda',
    subtitle: 'Os primeiros sinais',
    biblicalRef: 'Marcos 4:37',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'growing_storm',
    musicTheme: 'storm_theme',
    visualKey: 's3e7_03_wind_changes',
    environmentSummary: 'O vento suave ganha força subitamente.',
    musicDescription: 'Início da tensão musical (violoncelos e tambores graves suaves).',
    soundEffects: ['wind_howl', 'waves_growing'],
    directorLesson: 'A transição de calma para perigo.',
    lines: [
      {
        id: 's3e7_03_l1',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Esperem... Vocês sentiram isso?',
        emotionGuide: 'Preocupado, em alerta'
      },
      {
        id: 's3e7_03_l2',
        character: 'andre',
        characterLabel: 'André',
        text: 'O vento mudou.',
      },
      {
        id: 's3e7_03_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'As águas começaram a ficar mais agitadas.',
        soundCue: 'Água batendo com mais força no casco'
      }
    ]
  },
  {
    id: 4,
    sceneNumber: 4,
    title: 'A Tempestade',
    subtitle: 'A água invade o barco',
    biblicalRef: 'Marcos 4:37',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'heavy_storm_sea',
    musicTheme: 'storm_theme',
    visualKey: 's3e7_04_storm_starts',
    environmentSummary: 'Chuva, ventania, mar agitado, barco rangendo.',
    musicDescription: 'A música cresce junto com os efeitos.',
    soundEffects: ['heavy_rain', 'thunder', 'wood_creaking_heavy'],
    directorLesson: 'A sensação de descontrole. A força da natureza contra o pequeno barco.',
    lines: [
      {
        id: 's3e7_04_l1',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Segurem as cordas!',
        emotionGuide: 'Gritando contra o vento'
      },
      {
        id: 's3e7_04_l2',
        character: 'tiago',
        characterLabel: 'Tiago',
        text: 'A água está entrando!',
        emotionGuide: 'Desesperado'
      },
      {
        id: 's3e7_04_l3',
        character: 'joao',
        characterLabel: 'João',
        text: 'Precisamos fazer alguma coisa!',
      },
      {
        id: 's3e7_04_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A tempestade ficou cada vez mais forte.',
      }
    ]
  },
  {
    id: 5,
    sceneNumber: 5,
    title: 'O Medo',
    subtitle: 'Perto de afundar',
    biblicalRef: 'Marcos 4:37-38',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'heavy_storm_sea',
    musicTheme: 'storm_theme',
    visualKey: 's3e7_05_fear',
    environmentSummary: 'O ápice da tempestade.',
    musicDescription: 'Música de perigo intenso.',
    soundEffects: ['crashing_waves'],
    directorLesson: 'O pânico dos discípulos contrastado com o sono de Jesus.',
    lines: [
      {
        id: 's3e7_05_l1',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Vamos afundar!',
      },
      {
        id: 's3e7_05_l2',
        character: 'andre',
        characterLabel: 'André',
        text: 'Precisamos tirar a água!',
      },
      {
        id: 's3e7_05_l3',
        character: 'tiago',
        characterLabel: 'Tiago',
        text: 'Rápido!',
      },
      {
        id: 's3e7_05_l4',
        character: 'joao',
        characterLabel: 'João',
        text: 'Cadê Jesus?',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e7_05_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Então eles perceberam... Jesus estava dormindo.',
      }
    ]
  },
  {
    id: 6,
    sceneNumber: 6,
    title: 'Acordem Jesus!',
    subtitle: 'Socorro Senhor',
    biblicalRef: 'Marcos 4:38',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'heavy_storm_sea',
    musicTheme: 'storm_theme',
    visualKey: 's3e7_06_wake_jesus',
    environmentSummary: 'Meio do caos.',
    musicDescription: 'Ação rápida.',
    soundEffects: [],
    directorLesson: 'A perplexidade de encontrá-lo dormindo.',
    lines: [
      {
        id: 's3e7_06_l1',
        character: 'joao',
        characterLabel: 'João',
        text: 'Jesus!',
      },
      {
        id: 's3e7_06_l2',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Senhor!',
      },
      {
        id: 's3e7_06_l3',
        character: 'andre',
        characterLabel: 'André',
        text: 'Você precisa acordar!',
        soundCue: 'Jesus acorda calmamente'
      },
      {
        id: 's3e7_06_l4',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Por que vocês estão com tanto medo?',
        emotionGuide: 'Calmo, sem levantar a voz apesar da tempestade'
      },
      {
        id: 's3e7_06_l5',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Senhor, estamos quase afundando!',
      }
    ]
  },
  {
    id: 7,
    sceneNumber: 7,
    title: 'Jesus se Levanta',
    subtitle: 'Soberania',
    biblicalRef: 'Marcos 4:39',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'heavy_storm_sea',
    musicTheme: 'storm_theme',
    visualKey: 's3e7_07_stands_up',
    environmentSummary: 'Vento forte. Jesus em pé no barco agitado.',
    musicDescription: 'Música para quase completamente. Apenas os sons da natureza e a expectativa.',
    soundEffects: ['wind_howl'],
    directorLesson: 'O momento antes do milagre. A autoridade silenciosa.',
    lines: [
      {
        id: 's3e7_07_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus se levantou.',
      },
      {
        id: 's3e7_07_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Enquanto o vento rugia... Ele permaneceu tranquilo.',
      }
    ]
  },
  {
    id: 8,
    sceneNumber: 8,
    title: 'A Ordem',
    subtitle: 'Fique quieto',
    biblicalRef: 'Marcos 4:39',
    durationLabel: '10 segundos',
    estimatedDurationSec: 10,
    ambientType: 'heavy_storm_sea',
    musicTheme: 'miracle_silence_theme',
    visualKey: 's3e7_08_order',
    environmentSummary: 'O comando.',
    musicDescription: 'Silêncio musical total antes da fala.',
    soundEffects: ['storm_chaos_peaks'],
    directorLesson: 'A voz de Deus comandando a criação. Sem gritos. Apenas firmeza absoluta.',
    lines: [
      {
        id: 's3e7_08_l1',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Silêncio.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e7_08_l2',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Fique quieto.',
        emotionGuide: 'Firme, inabalável e poderoso, mas não um grito.'
      }
    ]
  },
  {
    id: 9,
    sceneNumber: 9,
    title: 'O Milagre',
    subtitle: 'A tempestade para',
    biblicalRef: 'Marcos 4:39',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'miracle_silence',
    musicTheme: 'miracle_silence_theme',
    visualKey: 's3e7_09_miracle',
    environmentSummary: 'Uma transição absurda do caos absoluto para o silêncio.',
    musicDescription: 'Música celestial muito, muito suave começando no fundo.',
    soundEffects: ['wind_dies_down_instantly'],
    directorLesson: 'Este é o ápice do som do episódio. A ausência de som é o efeito especial.',
    lines: [
      {
        id: 's3e7_09_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E... de repente... tudo ficou calmo.',
        soundCue: 'Silêncio dramático. 2 segundos. Depois apenas a água tranquila e uma ave ao longe.'
      }
    ]
  },
  {
    id: 10,
    sceneNumber: 10,
    title: 'O Silêncio',
    subtitle: 'Inacreditável',
    biblicalRef: 'Marcos 4:39',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'calm_sea_boat',
    musicTheme: 'miracle_silence_theme',
    visualKey: 's3e7_10_silence',
    environmentSummary: 'Apenas a respiração ofegante dos discípulos e o rangido suave do barco.',
    musicDescription: 'Música sutil e etérea.',
    soundEffects: ['water_gentle_lapping', 'breathing_amazement'],
    directorLesson: 'Deixe o ouvinte processar o contraste.',
    lines: [
      {
        id: 's3e7_10_l1',
        character: 'joao',
        characterLabel: 'João',
        text: 'Está... calmo.',
        emotionGuide: 'Em choque, sussurrando'
      },
      {
        id: 's3e7_10_l2',
        character: 'andre',
        characterLabel: 'André',
        text: 'Completamente calmo.',
      },
      {
        id: 's3e7_10_l3',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Como isso aconteceu?',
        emotionGuide: 'Desnorteado e fascinado'
      }
    ]
  },
  {
    id: 11,
    sceneNumber: 11,
    title: 'Os Discípulos Olham para Jesus',
    subtitle: 'Quem é este?',
    biblicalRef: 'Marcos 4:41',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'calm_sea_boat',
    musicTheme: 'majestic_stars',
    visualKey: 's3e7_11_admiration',
    environmentSummary: 'Admirados com Jesus.',
    musicDescription: 'Música de admiração e respeito profundo.',
    soundEffects: [],
    directorLesson: 'O reconhecimento do poder divino.',
    lines: [
      {
        id: 's3e7_11_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os discípulos olharam uns para os outros. E depois olharam para Jesus.',
      },
      {
        id: 's3e7_11_l2',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Quem é este?',
        emotionGuide: 'Reverência absoluta'
      },
      {
        id: 's3e7_11_l3',
        character: 'joao',
        characterLabel: 'João',
        text: 'Até o vento e o mar obedecem a Ele.',
      }
    ]
  },
  {
    id: 12,
    sceneNumber: 12,
    title: 'A Lição Sobre a Fé',
    subtitle: 'Fé vs Medo',
    biblicalRef: '',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'calm_sea_boat',
    musicTheme: 'teaching_courage',
    visualKey: 's3e7_12_faith_lesson',
    environmentSummary: 'O barco deslizando nas águas mansas.',
    musicDescription: 'Música emocional que fala sobre coragem e amor.',
    soundEffects: [],
    directorLesson: 'Validar os sentimentos das crianças. Medo é normal, mas Deus é maior.',
    lines: [
      {
        id: 's3e7_12_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os discípulos haviam sentido medo. E o medo era real. Mas Jesus mostrou que eles podiam confiar nele.',
      },
      {
        id: 's3e7_12_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ter fé não significa nunca sentir medo. Significa lembrar que Deus está conosco mesmo quando estamos com medo.',
      }
    ]
  },
  {
    id: 13,
    sceneNumber: 13,
    title: 'Para as Crianças',
    subtitle: 'As nossas tempestades',
    biblicalRef: '',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'calm_sea_boat',
    musicTheme: 'gentle_teaching',
    visualKey: 's3e7_13_children',
    environmentSummary: 'Tom acolhedor de narração.',
    musicDescription: 'Música suave, pastoral.',
    soundEffects: [],
    directorLesson: 'Trazer a metáfora da tempestade para a vida da criança (ansiedade, problemas).',
    lines: [
      {
        id: 's3e7_13_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Talvez você também já tenha enfrentado uma tempestade.',
      },
      {
        id: 's3e7_13_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Talvez tenha sido um problema na escola. Uma preocupação. Uma mudança. Uma situação que fez seu coração ficar apertado.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e7_13_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Você pode conversar com Deus. Pode pedir ajuda. E também pode procurar alguém de confiança.',
      }
    ]
  },
  {
    id: 14,
    sceneNumber: 14,
    title: 'Coragem',
    subtitle: 'Continuar fazendo o certo',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'calm_sea_boat',
    musicTheme: 'teaching_courage',
    visualKey: 's3e7_14_courage',
    environmentSummary: 'Encerramento reflexivo.',
    musicDescription: 'Música cresce suavemente com inspiração.',
    soundEffects: [],
    directorLesson: 'Redefinir coragem.',
    lines: [
      {
        id: 's3e7_14_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Coragem não significa nunca sentir medo. Coragem significa continuar fazendo o que é certo... mesmo quando estamos com medo.',
      }
    ]
  },
  {
    id: 15,
    sceneNumber: 15,
    title: 'Jesus no Barco',
    subtitle: 'Nunca sozinhos',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'calm_sea_boat',
    musicTheme: 'pure_serenity',
    visualKey: 's3e7_15_boat_peace',
    environmentSummary: 'A paz reina.',
    musicDescription: 'Paz absoluta.',
    soundEffects: ['water_gentle'],
    directorLesson: 'A grande diferença é quem está no barco com você.',
    lines: [
      {
        id: 's3e7_15_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E naquele barco... os discípulos aprenderam uma lição que jamais esqueceriam. Jesus estava com eles.',
      }
    ]
  },
  {
    id: 16,
    sceneNumber: 16,
    title: 'Frase Marcante',
    subtitle: 'Encontrando a Paz',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'calm_sea_boat',
    musicTheme: 'emotional_climax',
    visualKey: 's3e7_16_phrase',
    environmentSummary: 'O coração da mensagem.',
    musicDescription: 'Música emocional forte e marcante.',
    soundEffects: [],
    directorLesson: 'O ensinamento profundo sobre não estar sozinho.',
    lines: [
      {
        id: 's3e7_16_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Às vezes... a tempestade não desaparece imediatamente. Mas podemos encontrar paz... porque sabemos que não estamos sozinhos.',
      }
    ]
  },
  {
    id: 17,
    sceneNumber: 17,
    title: 'Transição',
    subtitle: 'Caminhada continua',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'calm_sea_boat',
    musicTheme: 'adventure_discovery',
    visualKey: 's3e7_17_transition',
    environmentSummary: 'O fim da travessia e o início de novos dias.',
    musicDescription: 'Música alegre, leve.',
    soundEffects: [],
    directorLesson: 'Fechar o ciclo da história do mar.',
    lines: [
      {
        id: 's3e7_17_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Depois daquela noite... os discípulos continuaram sua caminhada. E cada dia ao lado de Jesus trazia uma nova surpresa.',
      }
    ]
  },
  {
    id: 18,
    sceneNumber: 18,
    title: 'Gancho para o Episódio 18',
    subtitle: 'Um problema de fome',
    biblicalRef: '',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'feeding_multitude_hook',
    musicTheme: 'loaves_fishes_hook',
    visualKey: 's3e7_18_hook',
    environmentSummary: 'Sons de uma enorme multidão no campo. Crianças brincando, murmúrios.',
    musicDescription: 'Música de expectativa.',
    soundEffects: ['crowd_outdoors', 'kids_playing'],
    directorLesson: 'Criar curiosidade sobre como Jesus alimentará a multidão.',
    lines: [
      {
        id: 's3e7_18_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Certa vez... uma enorme multidão seguiu Jesus para ouvi-lo.',
      },
      {
        id: 's3e7_18_l2',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Senhor... Há muita gente aqui.',
      },
      {
        id: 's3e7_18_l3',
        character: 'andre',
        characterLabel: 'André',
        text: 'E parece que todos estão com fome.',
        soundCue: 'Breve silêncio para criar expectativa'
      },
      {
        id: 's3e7_18_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas havia um menino... com algo muito simples nas mãos.',
        soundCue: 'Som de uma cesta de palha sendo aberta'
      },
      {
        id: 's3e7_18_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Cinco pães. Dois peixes.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e7_18_l6',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E Jesus faria algo extraordinário.',
      }
    ]
  },
  {
    id: 19,
    sceneNumber: 19,
    title: 'Próximo Episódio',
    subtitle: 'A Multiplicação',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'feeding_multitude_hook',
    musicTheme: 'epic_orchestral',
    visualKey: 's3e7_19_next',
    environmentSummary: 'A promessa do próximo grande milagre.',
    musicDescription: 'Música termina num tom grandioso e expectante.',
    soundEffects: [],
    directorLesson: 'O trailer vibrante para a Multiplicação dos pães.',
    lines: [
      {
        id: 's3e7_19_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'No próximo episódio... A Multiplicação dos Pães! Quando um pequeno presente se tornou uma grande bênção.',
      }
    ]
  },
  {
    id: 20,
    sceneNumber: 20,
    title: 'Assinatura',
    subtitle: 'Toon Tales Kids',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'toon_tales_jingle',
    musicTheme: 'signature_jingle',
    visualKey: 's3e7_20_outro',
    environmentSummary: 'Logotipo sonoro final.',
    musicDescription: 'A música da história diminui e entra o tema alegre da série.',
    soundEffects: ['toon_tales_jingle'],
    directorLesson: 'Encerramento vibrante oficial.',
    lines: [
      {
        id: 's3e7_20_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E essa foi mais uma aventura da Bíblia em Áudio.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e7_20_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a história ainda não terminou...',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's3e7_20_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma nova aventura está esperando por você.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e7_20_l4',
        character: 'child',
        characterLabel: 'Crianças',
        text: 'TOON TALES KIDS!',
        emotionGuide: 'Em coro feliz e forte'
      },
      {
        id: 's3e7_20_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Histórias que ensinam, aventuras que transformam!',
      }
    ]
  }
];

export const A_TEMPESTADE_NO_MAR_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    dayLabel: 'A Viagem',
    question: 'O que Jesus estava fazendo no barco logo antes de começar a tempestade?',
    options: ['Estava pescando com uma rede', 'Estava dormindo porque estava muito cansado', 'Estava ensinando uma parábola no barco', 'Estava nadando na água'],
    correctIndex: 1,
    explanation: 'Jesus tinha passado o dia inteiro ensinando e estava tão cansado que conseguiu dormir profundamente, mesmo no meio da tempestade!',
    biblicalVerse: 'Marcos 4:38',
  },
  {
    id: 2,
    dayLabel: 'O Medo dos Discípulos',
    question: 'Como os discípulos se sentiram quando as ondas começaram a entrar no barco?',
    options: ['Eles acharam engraçado', 'Eles continuaram dormindo também', 'Eles ficaram com muito medo de afundar', 'Eles cantaram uma música de alegria'],
    correctIndex: 2,
    explanation: 'Os discípulos ficaram apavorados porque a tempestade estava muito forte e o barco quase afundando. O medo deles era real.',
    biblicalVerse: 'Marcos 4:37-38',
  },
  {
    id: 3,
    dayLabel: 'A Ordem',
    question: 'O que Jesus falou para o vento e para o mar furioso?',
    options: ['"Por favor, parem um pouquinho!"', '"Silêncio. Fique quieto."', '"Alguém feche a janela!"', '"Vento, me leve para a praia."'],
    correctIndex: 1,
    explanation: 'Com muita calma e total poder, Jesus apenas disse: "Silêncio. Fique quieto." E na mesma hora a natureza obedeceu a voz Dele.',
    biblicalVerse: 'Marcos 4:39',
  },
  {
    id: 4,
    dayLabel: 'O Milagre',
    question: 'O que aconteceu imediatamente depois que Jesus deu a ordem para a tempestade?',
    options: ['O barco afundou', 'Choveu ainda mais forte', 'Tudo ficou calmo, num grande silêncio', 'Os peixes pularam no barco'],
    correctIndex: 2,
    explanation: 'O vento parou na hora e o mar ficou completamente calmo. Os discípulos ficaram impressionados com o milagre maravilhoso!',
    biblicalVerse: 'Marcos 4:39',
  },
  {
    id: 5,
    dayLabel: 'Nossa Vida',
    question: 'O que nós aprendemos sobre a coragem e a fé nesse episódio?',
    options: ['Que nunca vamos ter problemas', 'Que quem tem Jesus nunca sente medo', 'Que coragem não é sentir medo, mas saber que Jesus está no barco com a gente', 'Que só os adultos têm coragem'],
    correctIndex: 2,
    explanation: 'Ter fé e coragem não significa que você nunca sentirá medo. Significa que, mesmo com medo, você sabe que Deus está com você te ajudando a passar pela "tempestade".',
    biblicalVerse: 'Marcos 4:40',
  }
];
