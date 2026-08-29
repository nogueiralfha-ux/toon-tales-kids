import { Scene, QuizQuestion } from '../types';

export const EPISODE_META_T4E7 = {
  id: 't4e7',
  title: 'A Tempestade',
  subtitle: 'Quando o mar se levantou',
  biblicalText: 'Atos 27:13 a 26',
  durationLabel: '21 min',
  moralLesson: 'Mesmo quando tudo parece perdido, podemos manter a esperança e confiar em Deus.',
};

export const TEMPESTADE_SCENES: Scene[] = [
  {
    id: 1,
    sceneNumber: 1,
    title: 'Abertura',
    subtitle: 'Navegando de novo',
    biblicalRef: 'Atos 27:13',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'ship_deck',
    musicTheme: 'calm_sea_adventure',
    visualKey: 's4e7_01_intro',
    environmentSummary: 'Ondas, vento suave, navio navegando, velas e madeira.',
    musicDescription: 'Música de aventura animada, trazendo alívio.',
    soundEffects: ['sea_waves', 'wind_breeze'],
    directorLesson: 'Começar exatamente de onde o episódio 25 terminou. Tudo parece bem.',
    lines: [
      {
        id: 's4e7_01_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O vento havia começado a soprar.',
      },
      {
        id: 's4e7_01_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas ninguém naquele navio imaginava o que estava por vir.',
      }
    ]
  },
  {
    id: 2,
    sceneNumber: 2,
    title: 'O Vento Favorável',
    subtitle: 'Falsa segurança',
    biblicalRef: 'Atos 27:13',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'ship_deck',
    musicTheme: 'calm_sea_adventure',
    visualKey: 's4e7_02_favorable_wind',
    environmentSummary: 'Vento moderado, velas esticando e os marinheiros animados.',
    musicDescription: 'Música alegre, viagem tranquila.',
    soundEffects: ['wind_breeze'],
    directorLesson: 'A sensação de alívio e controle que logo será quebrada.',
    lines: [
      {
        id: 's4e7_02_l1',
        character: 'marinheiro',
        characterLabel: 'Marinheiro',
        text: 'O vento mudou!',
        emotionGuide: 'Animado'
      },
      {
        id: 's4e7_02_l2',
        character: 'marinheiro',
        characterLabel: 'Outro Marinheiro',
        text: 'Finalmente!',
      },
      {
        id: 's4e7_02_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Por um momento... parecia que a viagem seria tranquila.',
      }
    ]
  },
  {
    id: 3,
    sceneNumber: 3,
    title: 'O Vento Muda',
    subtitle: 'A surpresa',
    biblicalRef: 'Atos 27:14',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'ship_deck',
    musicTheme: 'storm_percussion',
    visualKey: 's4e7_03_wind_changes',
    environmentSummary: 'Vento aumentando bruscamente, rajada forte e velas estalando.',
    musicDescription: 'A música alegre se apaga, substituída por um ritmo de ação que entra de supetão.',
    soundEffects: ['wind_breeze'],
    directorLesson: 'O momento da virada.',
    lines: [
      {
        id: 's4e7_03_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas o mar Mediterrâneo podia mudar rapidamente.',
      },
      {
        id: 's4e7_03_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'De repente...',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e7_03_l3',
        character: 'marinheiro',
        characterLabel: 'Marinheiro',
        text: 'Segurem as cordas!',
        emotionGuide: 'Urgente'
      }
    ]
  },
  {
    id: 4,
    sceneNumber: 4,
    title: 'O Vento Violento',
    subtitle: 'Perdendo o controle',
    biblicalRef: 'Atos 27:14',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'stormy_sea',
    musicTheme: 'storm_percussion',
    visualKey: 's4e7_04_violent_wind',
    environmentSummary: 'Ondas crescendo, madeira rangendo fortemente sob tensão.',
    musicDescription: 'Música de ação intensa.',
    soundEffects: ['sea_waves'],
    directorLesson: 'O perigo escala rapidamente.',
    lines: [
      {
        id: 's4e7_04_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Um vento violento começou a empurrar o navio.',
      },
      {
        id: 's4e7_04_l2',
        character: 'marinheiro',
        characterLabel: 'Marinheiro',
        text: 'Estamos perdendo o controle!',
      }
    ]
  },
  {
    id: 5,
    sceneNumber: 5,
    title: 'A Tempestade',
    subtitle: 'O caos no mar',
    biblicalRef: 'Atos 27:14',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'stormy_sea',
    musicTheme: 'storm_percussion',
    visualKey: 's4e7_05_storm',
    environmentSummary: 'Grande onda batendo, trovão distante, chuva, navio balançando violentamente.',
    musicDescription: 'A música explode com cordas graves e percussão épica.',
    soundEffects: ['earthquake_rumble', 'sea_waves'],
    directorLesson: 'O ápice da virada. A tempestade em sua glória ameaçadora.',
    lines: [
      {
        id: 's4e7_05_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E então... a tempestade chegou.',
      }
    ]
  },
  {
    id: 6,
    sceneNumber: 6,
    title: 'O Navio é Levado',
    subtitle: 'À deriva',
    biblicalRef: 'Atos 27:15',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'stormy_sea',
    musicTheme: 'storm_percussion',
    visualKey: 's4e7_06_ship_blown',
    environmentSummary: 'Ondas enormes, vento cortante, tripulação gritando ordens ineficazes.',
    musicDescription: 'Tensão contínua, percussão acelerada.',
    soundEffects: ['sea_waves', 'wind_breeze'],
    directorLesson: 'A impotência humana diante da natureza.',
    lines: [
      {
        id: 's4e7_06_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O vento era tão forte... que o navio já não conseguia seguir seu caminho.',
      },
      {
        id: 's4e7_06_l2',
        character: 'marinheiro',
        characterLabel: 'Marinheiro',
        text: 'Soltem as velas!',
      },
      {
        id: 's4e7_06_l3',
        character: 'marinheiro',
        characterLabel: 'Outro',
        text: 'Segurem tudo!',
      }
    ]
  },
  {
    id: 7,
    sceneNumber: 7,
    title: 'Tentando Salvar o Navio',
    subtitle: 'Esforço humano',
    biblicalRef: 'Atos 27:16',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'ship_deck',
    musicTheme: 'storm_percussion',
    visualKey: 's4e7_07_saving_ship',
    environmentSummary: 'Trabalho desesperado, cordas puxadas com força, caixas sendo empurradas.',
    musicDescription: 'Ritmo de trabalho e urgência.',
    soundEffects: ['footsteps_running'],
    directorLesson: 'Eles lutam com tudo que têm.',
    lines: [
      {
        id: 's4e7_07_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os marinheiros começaram a trabalhar desesperadamente.',
      },
      {
        id: 's4e7_07_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles tentavam proteger o navio. Mas a tempestade era mais forte.',
      }
    ]
  },
  {
    id: 8,
    sceneNumber: 8,
    title: 'A Carga é Jogada',
    subtitle: 'Deixando o peso',
    biblicalRef: 'Atos 27:18',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'ship_deck',
    musicTheme: 'storm_percussion',
    visualKey: 's4e7_08_cargo_overboard',
    environmentSummary: 'Caixas arrastadas e caindo no mar revolto.',
    musicDescription: 'Ação dramática.',
    soundEffects: ['water_splash'],
    directorLesson: 'O sacrifício das mercadorias para não afundarem.',
    lines: [
      {
        id: 's4e7_08_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Algumas cargas foram lançadas ao mar.',
      },
      {
        id: 's4e7_08_l2',
        character: 'marinheiro',
        characterLabel: 'Marinheiro',
        text: 'Joguem mais!',
      },
      {
        id: 's4e7_08_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Era preciso deixar o navio mais leve.',
      }
    ]
  },
  {
    id: 9,
    sceneNumber: 9,
    title: 'Dias de Tempestade',
    subtitle: 'A passagem do tempo',
    biblicalRef: 'Atos 27:20',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'stormy_sea',
    musicTheme: 'storm_percussion',
    visualKey: 's4e7_09_storm_days',
    environmentSummary: 'Montagem de sons: chuva e vento constantes que não param.',
    musicDescription: 'O ritmo começa a ficar sombrio, arrastado e pesado.',
    soundEffects: ['sea_waves', 'wind_breeze'],
    directorLesson: 'A exaustão de vários dias sendo açoitados pelo mar.',
    lines: [
      {
        id: 's4e7_09_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Um dia passou.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e7_09_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Depois outro. E outro.',
      },
      {
        id: 's4e7_09_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Durante muitos dias... o céu permaneceu coberto.',
      }
    ]
  },
  {
    id: 10,
    sceneNumber: 10,
    title: 'Sem Sol nem Estrelas',
    subtitle: 'Perdidos e no escuro',
    biblicalRef: 'Atos 27:20',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'stormy_sea',
    musicTheme: 'tense_silence',
    visualKey: 's4e7_10_no_stars',
    environmentSummary: 'Vento distante e constante, sem variação.',
    musicDescription: 'A música desaparece. Um vazio aterrorizante de silêncio natural.',
    soundEffects: ['sea_waves'],
    directorLesson: 'A escuridão contínua tira toda a referência deles.',
    lines: [
      {
        id: 's4e7_10_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles não conseguiam ver o sol. Nem as estrelas.',
      },
      {
        id: 's4e7_10_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Não sabiam exatamente onde estavam.',
      }
    ]
  },
  {
    id: 11,
    sceneNumber: 11,
    title: 'O Medo',
    subtitle: 'Esperança perdida',
    biblicalRef: 'Atos 27:20',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'ship_deck',
    musicTheme: 'tense_silence',
    visualKey: 's4e7_11_fear',
    environmentSummary: 'Vozes baixas, tremidas pelo frio e pelo medo.',
    musicDescription: 'O peso do desespero.',
    soundEffects: [],
    directorLesson: 'O medo contamina a tripulação.',
    lines: [
      {
        id: 's4e7_11_l1',
        character: 'marinheiro',
        characterLabel: 'Marinheiro',
        text: 'Será que vamos conseguir?',
        emotionGuide: 'Voz baixa, assustada'
      },
      {
        id: 's4e7_11_l2',
        character: 'marinheiro',
        characterLabel: 'Outro',
        text: 'Eu não sei.',
      },
      {
        id: 's4e7_11_l3',
        character: 'lucas',
        characterLabel: 'Lucas',
        text: 'Paulo...',
      },
      {
        id: 's4e7_11_l4',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Estou aqui.',
      },
      {
        id: 's4e7_11_l5',
        character: 'lucas',
        characterLabel: 'Lucas',
        text: 'O que vamos fazer?',
      }
    ]
  },
  {
    id: 12,
    sceneNumber: 12,
    title: 'Paulo Observa',
    subtitle: 'O contraste da fé',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'ship_deck',
    musicTheme: 'hope_piano_choir',
    visualKey: 's4e7_12_paul_observes',
    environmentSummary: 'O vento forte continua, mas a postura de Paulo é firme.',
    musicDescription: 'Música extremamente suave, um farol na escuridão.',
    soundEffects: [],
    directorLesson: 'Paulo não está em pânico. Ele é a rocha ali dentro.',
    lines: [
      {
        id: 's4e7_12_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Paulo também sabia que a situação era séria.',
      },
      {
        id: 's4e7_12_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas ele não perdeu a esperança.',
      }
    ]
  },
  {
    id: 13,
    sceneNumber: 13,
    title: 'Paulo Recebe Uma Mensagem',
    subtitle: 'Deus fala na tempestade',
    biblicalRef: 'Atos 27:23',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'ship_deck',
    musicTheme: 'hope_piano_choir',
    visualKey: 's4e7_13_message',
    environmentSummary: 'O vento diminui e um silêncio reverente toma conta da cena.',
    musicDescription: 'Música celestial, muito bela, mas sem exageros.',
    soundEffects: ['wind_breeze'],
    directorLesson: 'A promessa divina que sustenta Paulo.',
    lines: [
      {
        id: 's4e7_13_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Durante aquela noite... Paulo recebeu uma mensagem de Deus.',
      }
    ]
  },
  {
    id: 14,
    sceneNumber: 14,
    title: 'Paulo Encoraja Todos',
    subtitle: 'Liderança',
    biblicalRef: 'Atos 27:22',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'ship_deck',
    musicTheme: 'hope_piano_choir',
    visualKey: 's4e7_14_encouragement',
    environmentSummary: 'Paulo se levanta entre os marinheiros assustados.',
    musicDescription: 'A música começa a crescer em encorajamento.',
    soundEffects: [],
    directorLesson: 'Paulo fala com uma autoridade que traz paz.',
    lines: [
      {
        id: 's4e7_14_l1',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Tenham coragem. Não tenham medo.',
        emotionGuide: 'Forte, firme, amável'
      },
      {
        id: 's4e7_14_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os homens ouviram atentamente.',
      },
      {
        id: 's4e7_14_l3',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Eu confio em Deus. Ele me disse que ninguém perderá a vida.',
      }
    ]
  },
  {
    id: 15,
    sceneNumber: 15,
    title: 'A Promessa',
    subtitle: 'Vidas preservadas',
    biblicalRef: 'Atos 27:22-25',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'ship_deck',
    musicTheme: 'hope_piano_choir',
    visualKey: 's4e7_15_promise',
    environmentSummary: 'O impacto das palavras dele nos marinheiros.',
    musicDescription: 'Música emocional que confirma a fé.',
    soundEffects: [],
    directorLesson: 'O navio será perdido, mas as pessoas não. A fé de Paulo se destaca.',
    lines: [
      {
        id: 's4e7_15_l1',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Precisamos continuar confiando. O navio será perdido... mas nossas vidas serão preservadas.',
      },
      {
        id: 's4e7_15_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Paulo acreditava na promessa de Deus.',
      }
    ]
  },
  {
    id: 16,
    sceneNumber: 16,
    title: 'A Reação dos Marinheiros',
    subtitle: 'Surpresa',
    biblicalRef: 'Atos 27:25',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'ship_deck',
    musicTheme: 'hope_piano_choir',
    visualKey: 's4e7_16_reaction',
    environmentSummary: 'O vento não parou, mas a atmosfera entre eles sim.',
    musicDescription: 'Música contínua e tranquilizadora.',
    soundEffects: ['sea_waves'],
    directorLesson: 'Eles acham difícil acreditar, mas a confiança de Paulo os atinge.',
    lines: [
      {
        id: 's4e7_16_l1',
        character: 'marinheiro',
        characterLabel: 'Marinheiro',
        text: 'Você realmente acredita nisso?',
      },
      {
        id: 's4e7_16_l2',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Sim. Eu confio em Deus.',
      }
    ]
  },
  {
    id: 17,
    sceneNumber: 17,
    title: 'A Esperança Volta',
    subtitle: 'Mudança de atmosfera',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'ship_deck',
    musicTheme: 'hope_piano_choir',
    visualKey: 's4e7_17_hope_returns',
    environmentSummary: 'As pessoas se entreolham no meio da chuva.',
    musicDescription: 'Esperança renovada.',
    soundEffects: [],
    directorLesson: 'A liderança espiritual em tempos de crise.',
    lines: [
      {
        id: 's4e7_17_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'As pessoas ainda estavam com medo. Mas agora havia algo diferente.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e7_17_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Esperança.',
      }
    ]
  },
  {
    id: 18,
    sceneNumber: 18,
    title: 'A Lição',
    subtitle: 'A verdade sobre a fé',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'ship_deck',
    musicTheme: 'hope_piano_choir',
    visualKey: 's4e7_18_lesson',
    environmentSummary: 'Música reflexiva.',
    musicDescription: 'Uma melodia que toca o coração da criança.',
    soundEffects: [],
    directorLesson: 'Explicar que ter fé não é ignorar a dor ou o perigo.',
    lines: [
      {
        id: 's4e7_18_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ter fé não significa fingir que os problemas não existem.',
      },
      {
        id: 's4e7_18_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Paulo sabia que a tempestade era perigosa. Mas escolheu confiar.',
      }
    ]
  },
  {
    id: 19,
    sceneNumber: 19,
    title: 'Frase Marcante',
    subtitle: 'Coragem real',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'ship_deck',
    musicTheme: 'hope_piano_choir',
    visualKey: 's4e7_19_phrase',
    environmentSummary: 'O foco principal do episódio.',
    musicDescription: 'Emocional, cresce até um ponto alto de significado.',
    soundEffects: [],
    directorLesson: 'A frase que as crianças devem levar para a vida.',
    lines: [
      {
        id: 's4e7_19_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Coragem não é dizer... Eu não estou com medo.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e7_19_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Coragem é dizer... Mesmo com medo, eu vou continuar confiando.',
      }
    ]
  },
  {
    id: 20,
    sceneNumber: 20,
    title: 'A Tempestade Continua',
    subtitle: 'O mar não parou',
    biblicalRef: 'Atos 27:27',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'stormy_sea',
    musicTheme: 'storm_percussion',
    visualKey: 's4e7_20_storm_continues',
    environmentSummary: 'O som do vento e das ondas volta a subir rapidamente.',
    musicDescription: 'A tensão retorna, a realidade da tempestade os acerta.',
    soundEffects: ['sea_waves', 'wind_breeze'],
    directorLesson: 'Lembrar que o problema não desapareceu magicamente.',
    lines: [
      {
        id: 's4e7_20_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a tempestade ainda não havia terminado.',
      },
      {
        id: 's4e7_20_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Durante muitos dias... o navio continuou sendo levado pelo mar.',
      }
    ]
  },
  {
    id: 21,
    sceneNumber: 21,
    title: 'O Navio Perde Equipamentos',
    subtitle: 'Ficando vazios',
    biblicalRef: 'Atos 27:19',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'ship_deck',
    musicTheme: 'storm_percussion',
    visualKey: 's4e7_21_lose_equipment',
    environmentSummary: 'Cordas e madeiras pesadas sendo atiradas no mar.',
    musicDescription: 'O drama da perda material.',
    soundEffects: ['water_splash'],
    directorLesson: 'Desespero para sobreviver.',
    lines: [
      {
        id: 's4e7_21_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os marinheiros precisaram lançar equipamentos ao mar.',
      },
      {
        id: 's4e7_21_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O navio estava cada vez mais pesado para enfrentar aquela situação.',
      }
    ]
  },
  {
    id: 22,
    sceneNumber: 22,
    title: 'O Mar Sem Fim',
    subtitle: 'Firmeza',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'stormy_sea',
    musicTheme: 'storm_percussion',
    visualKey: 's4e7_22_endless_sea',
    environmentSummary: 'A imensidão do oceano violento.',
    musicDescription: 'Épica e desafiadora.',
    soundEffects: ['sea_waves'],
    directorLesson: 'Destacar a figura minúscula do navio no grande mar, com Paulo inabalável dentro dele.',
    lines: [
      {
        id: 's4e7_22_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Em todas as direções... havia apenas mar.',
      },
      {
        id: 's4e7_22_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas Paulo continuava firme.',
      }
    ]
  },
  {
    id: 23,
    sceneNumber: 23,
    title: 'O Grande Suspense',
    subtitle: 'O perigo final se aproxima',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'stormy_sea',
    musicTheme: 'dark_sea_mystery',
    visualKey: 's4e7_23_suspense',
    environmentSummary: 'O som do mar cria expectativa. Uma grande onda.',
    musicDescription: 'Música baixa e carregada de suspense.',
    soundEffects: ['sea_waves'],
    directorLesson: 'Preparando para o grande clímax que será o próximo episódio.',
    lines: [
      {
        id: 's4e7_23_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles ainda não sabiam... onde o navio iria parar.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e7_23_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E o pior ainda estava por vir.',
      }
    ]
  },
  {
    id: 24,
    sceneNumber: 24,
    title: 'O Gancho',
    subtitle: 'Terra à vista na escuridão',
    biblicalRef: 'Atos 27:27',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'stormy_sea',
    musicTheme: 'dark_sea_mystery',
    visualKey: 's4e7_24_hook',
    environmentSummary: 'Ondas quebrando de forma diferente, indicando rochas. Grito de alerta.',
    musicDescription: 'A música cresce e então corta bruscamente com o grito.',
    soundEffects: ['sea_waves'],
    directorLesson: 'O ponto de maior tensão. Um cliffhanger perfeito.',
    lines: [
      {
        id: 's4e7_24_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A tempestade estava levando o navio para águas desconhecidas.',
      },
      {
        id: 's4e7_24_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E logo... os marinheiros perceberiam que a terra estava mais perto.',
      },
      {
        id: 's4e7_24_l3',
        character: 'marinheiro',
        characterLabel: 'Marinheiro',
        text: 'Estamos nos aproximando de alguma coisa!',
        emotionGuide: 'Grito de pânico na chuva'
      }
    ]
  },
  {
    id: 25,
    sceneNumber: 25,
    title: 'Próximo Episódio',
    subtitle: 'O Naufrágio',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'stormy_sea',
    musicTheme: 'storm_percussion',
    visualKey: 's4e7_25_next',
    environmentSummary: 'Onda forte batendo contra a madeira e fade out.',
    musicDescription: 'Ação dramática.',
    soundEffects: ['sea_waves'],
    directorLesson: 'Anunciando o desastre final da viagem marítima.',
    lines: [
      {
        id: 's4e7_25_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'No próximo episódio... O Naufrágio.',
      },
      {
        id: 's4e7_25_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Quando o navio se partiu.',
      }
    ]
  },
  {
    id: 26,
    sceneNumber: 26,
    title: 'Assinatura',
    subtitle: 'Toon Tales Kids',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'toon_tales_jingle',
    musicTheme: 'signature_jingle',
    visualKey: 's4e7_26_outro',
    environmentSummary: 'O jingle e vozes da assinatura.',
    musicDescription: 'Alívio alegre de sempre.',
    soundEffects: ['toon_tales_jingle'],
    directorLesson: 'Voltar ao calor do formato padrão Toon Tales.',
    lines: [
      {
        id: 's4e7_26_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E essa foi mais uma aventura da Bíblia em Áudio.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e7_26_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a história ainda não terminou...',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's4e7_26_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma nova aventura está esperando por você.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e7_26_l4',
        character: 'child',
        characterLabel: 'Crianças',
        text: 'TOON TALES KIDS!',
        emotionGuide: 'Voz infantil e enérgica'
      },
      {
        id: 's4e7_26_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Histórias que ensinam, aventuras que transformam!',
      }
    ]
  }
];

export const TEMPESTADE_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    dayLabel: 'A Falsa Segurança',
    question: 'O que enganou os marinheiros, fazendo-os achar que a viagem seria tranquila no começo?',
    options: ['O canto dos pássaros', 'O mar estava verde', 'O vento começou a soprar a favor deles', 'O sol não apareceu'],
    correctIndex: 2,
    explanation: 'No início, o vento estava soprando do jeito certo. Mas no Mar Mediterrâneo, o tempo podia mudar muito rápido, e logo um vento violento os surpreendeu.',
    biblicalVerse: 'Atos 27:13',
  },
  {
    id: 2,
    dayLabel: 'A Força do Vento',
    question: 'Quando a grande tempestade chegou, o que os marinheiros precisaram jogar no mar para deixar o navio mais leve?',
    options: ['As roupas deles', 'As cargas de comida e equipamentos do navio', 'As moedas de ouro', 'As espadas dos soldados'],
    correctIndex: 1,
    explanation: 'O vento e as ondas batiam com muita força! Para o navio não afundar, eles tiveram que lançar ao mar toda a carga pesada e até equipamentos.',
    biblicalVerse: 'Atos 27:18',
  },
  {
    id: 3,
    dayLabel: 'A Escuridão',
    question: 'O que deixou os homens ainda mais desesperados porque eles não conseguiam mais saber onde estavam?',
    options: ['Eles não tinham bússola', 'Ficou tudo silencioso de repente', 'O vento levou os remos', 'O céu ficou coberto durante muitos dias, sem sol nem estrelas'],
    correctIndex: 3,
    explanation: 'Sem poder ver o sol durante o dia ou as estrelas durante a noite, os marinheiros daquela época não podiam se guiar no mar, e se viram completamente perdidos.',
    biblicalVerse: 'Atos 27:20',
  },
  {
    id: 4,
    dayLabel: 'A Promessa de Deus',
    question: 'Enquanto todos tinham medo, Paulo encorajou a tripulação. Qual promessa ele recebeu de Deus naquela noite?',
    options: ['Que ele receberia muito dinheiro', 'Que a tempestade pararia no mesmo instante', 'Que o navio seria salvo', 'Que o navio seria perdido, mas a vida de todos seria preservada'],
    correctIndex: 3,
    explanation: 'Deus prometeu que o navio afundaria, mas que nem uma só pessoa daquele navio perderia a vida. Deus estava protegendo Paulo e todos os que estavam com ele.',
    biblicalVerse: 'Atos 27:22',
  },
  {
    id: 5,
    dayLabel: 'A Verdadeira Coragem',
    question: 'O que o episódio ensinou sobre coragem e fé no meio das tempestades da vida?',
    options: ['Coragem é apenas fingir que os problemas não existem', 'Ter fé é saber que nunca haverá tempestades ou problemas', 'Coragem é dizer que não temos nenhum medo', 'Coragem é dizer: Mesmo com medo, eu vou continuar confiando em Deus'],
    correctIndex: 3,
    explanation: 'Deus nunca prometeu que não teríamos problemas, mas nos deu a garantia que estará conosco durante eles. A verdadeira fé escolhe confiar em Deus, mesmo quando há motivos para ter medo.',
    biblicalVerse: 'Salmos 56:3',
  }
];
