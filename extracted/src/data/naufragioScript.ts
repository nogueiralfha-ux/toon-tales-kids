import { Scene, QuizQuestion } from '../types';

export const EPISODE_META_T4E8 = {
  id: 't4e8',
  title: 'O Naufrágio',
  subtitle: 'Quando o navio se partiu',
  biblicalText: 'Atos 27:27 a 44',
  durationLabel: '20 min',
  moralLesson: 'Quando enfrentamos uma grande dificuldade, não devemos abandonar a esperança nem deixar nossos companheiros para trás.',
};

export const NAUFRAGIO_SCENES: Scene[] = [
  {
    id: 1,
    sceneNumber: 1,
    title: 'Abertura',
    subtitle: 'Muitos Dias no Mar',
    biblicalRef: 'Atos 27:27',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'stormy_sea',
    musicTheme: 'dark_sea_mystery',
    visualKey: 's4e8_01_intro',
    environmentSummary: 'Mar, vento, navio rangendo e ondas batendo forte.',
    musicDescription: 'Música de suspense e exaustão, tom misterioso.',
    soundEffects: ['sea_waves', 'wind_breeze'],
    directorLesson: 'Continuar exatamente do episódio anterior, mostrando a longa deriva.',
    lines: [
      {
        id: 's4e8_01_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Durante muitos dias... o navio havia sido levado pelo mar.',
      },
      {
        id: 's4e8_01_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas naquela noite...',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e8_01_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'algo mudou.',
      }
    ]
  },
  {
    id: 2,
    sceneNumber: 2,
    title: 'A Descoberta',
    subtitle: 'Próximos de terra',
    biblicalRef: 'Atos 27:27',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'stormy_sea',
    musicTheme: 'dark_sea_mystery',
    visualKey: 's4e8_02_discovery',
    environmentSummary: 'Sons de marinheiro caminhando rapidamente no convés molhado.',
    musicDescription: 'A música cresce indicando uma descoberta que traz mais perigo do que alívio imediato.',
    soundEffects: ['footsteps_running', 'sea_waves'],
    directorLesson: 'A descoberta muda o ritmo de estático para ação.',
    lines: [
      {
        id: 's4e8_02_l1',
        character: 'marinheiro',
        characterLabel: 'Marinheiro',
        text: 'Esperem! Estamos nos aproximando de terra!',
        emotionGuide: 'Gritando com urgência'
      }
    ]
  },
  {
    id: 3,
    sceneNumber: 3,
    title: 'Medindo a Profundidade',
    subtitle: 'Ficando mais raso',
    biblicalRef: 'Atos 27:28',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'stormy_sea',
    musicTheme: 'danger_percussion',
    visualKey: 's4e8_03_depth',
    environmentSummary: 'Corda pesada sendo lançada na água, splash repetido.',
    musicDescription: 'Percussão de suspense e tensão contínua.',
    soundEffects: ['water_splash', 'wind_breeze'],
    directorLesson: 'A contagem decrescente gera urgência.',
    lines: [
      {
        id: 's4e8_03_l1',
        character: 'marinheiro',
        characterLabel: 'Marinheiro',
        text: 'Quarenta côvados!',
      },
      {
        id: 's4e8_03_l2',
        character: 'marinheiro',
        characterLabel: 'Outro',
        text: 'Agora está mais raso!',
      },
      {
        id: 's4e8_03_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os marinheiros perceberam que a profundidade estava diminuindo.',
      }
    ]
  },
  {
    id: 4,
    sceneNumber: 4,
    title: 'O Perigo',
    subtitle: 'Rochas',
    biblicalRef: 'Atos 27:29',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'stormy_sea',
    musicTheme: 'danger_percussion',
    visualKey: 's4e8_04_danger',
    environmentSummary: 'Ondas quebrando alto, madeira rangendo forte.',
    musicDescription: 'Tensão muito alta.',
    soundEffects: ['sea_waves', 'wind_breeze'],
    directorLesson: 'O perigo iminente de colisão na escuridão.',
    lines: [
      {
        id: 's4e8_04_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles temeram que o navio fosse lançado contra as rochas.',
      },
      {
        id: 's4e8_04_l2',
        character: 'marinheiro',
        characterLabel: 'Marinheiro',
        text: 'Precisamos parar o navio!',
      }
    ]
  },
  {
    id: 5,
    sceneNumber: 5,
    title: 'A Tentativa de Fuga',
    subtitle: 'Medo e egoísmo',
    biblicalRef: 'Atos 27:30-31',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'stormy_sea',
    musicTheme: 'danger_percussion',
    visualKey: 's4e8_05_escape_attempt',
    environmentSummary: 'Barco menor batendo contra a lateral, cordas puxadas apressadamente.',
    musicDescription: 'O ritmo do perigo aumenta.',
    soundEffects: ['water_splash'],
    directorLesson: 'O pânico faz os marinheiros tentarem abandonar os outros.',
    lines: [
      {
        id: 's4e8_05_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Alguns marinheiros tentaram baixar um barco menor.',
      },
      {
        id: 's4e8_05_l2',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Se eles saírem do navio... vocês não conseguirão sobreviver.',
        emotionGuide: 'Firme, sereno, avisando os soldados'
      }
    ]
  },
  {
    id: 6,
    sceneNumber: 6,
    title: 'A Decisão',
    subtitle: 'União',
    biblicalRef: 'Atos 27:32',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'stormy_sea',
    musicTheme: 'hope_piano_strings',
    visualKey: 's4e8_06_decision',
    environmentSummary: 'Corte de cordas rápidas.',
    musicDescription: 'Música de decisão, firme e com propósito.',
    soundEffects: ['wind_breeze'],
    directorLesson: 'Liderança de Paulo garante a sobrevivência de todos.',
    lines: [
      {
        id: 's4e8_06_l1',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Precisamos permanecer juntos. Todos nós.',
      },
      {
        id: 's4e8_06_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E os soldados impediram a tentativa de fuga.',
      }
    ]
  },
  {
    id: 7,
    sceneNumber: 7,
    title: 'A Noite',
    subtitle: 'Espera angustiante',
    biblicalRef: 'Atos 27:33',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'stormy_sea',
    musicTheme: 'hope_piano_strings',
    visualKey: 's4e8_07_night',
    environmentSummary: 'O vento incessante, o mar impiedoso.',
    musicDescription: 'A música suaviza, trazendo o cansaço do tempo.',
    soundEffects: ['sea_waves'],
    directorLesson: 'A noite longa finalmente aproxima-se do fim.',
    lines: [
      {
        id: 's4e8_07_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A noite parecia não terminar.',
      },
      {
        id: 's4e8_07_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas o amanhecer estava chegando.',
      }
    ]
  },
  {
    id: 8,
    sceneNumber: 8,
    title: 'Paulo Encoraja Todos',
    subtitle: 'Cuidado humano',
    biblicalRef: 'Atos 27:33-34',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'ship_deck',
    musicTheme: 'hope_piano_strings',
    visualKey: 's4e8_08_paul_encourages',
    environmentSummary: 'O mar ao fundo, vozes cansadas sendo acalmadas.',
    musicDescription: 'Uma música profundamente emocional e de cuidado.',
    soundEffects: [],
    directorLesson: 'A atitude pastoral e cuidadosa de Paulo.',
    lines: [
      {
        id: 's4e8_08_l1',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Vocês não comem há muito tempo. Precisamos recuperar nossas forças.',
      },
      {
        id: 's4e8_08_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Paulo pediu que todos comessem.',
      }
    ]
  },
  {
    id: 9,
    sceneNumber: 9,
    title: 'Agradecimento',
    subtitle: 'Um momento de paz no caos',
    biblicalRef: 'Atos 27:35',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'ship_deck',
    musicTheme: 'hope_piano_strings',
    visualKey: 's4e8_09_thanksgiving',
    environmentSummary: 'O ambiente do navio balançando.',
    musicDescription: 'Música suave de oração e confiança.',
    soundEffects: ['sea_waves'],
    directorLesson: 'O simples ato de agradecer muda a atmosfera de medo para esperança.',
    lines: [
      {
        id: 's4e8_09_l1',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Vamos agradecer a Deus.',
      },
      {
        id: 's4e8_09_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Paulo tomou o pão... agradeceu a Deus... e começou a comer.',
      }
    ]
  },
  {
    id: 10,
    sceneNumber: 10,
    title: 'Todos Comem',
    subtitle: 'Forças renovadas',
    biblicalRef: 'Atos 27:36',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'ship_deck',
    musicTheme: 'hope_piano_strings',
    visualKey: 's4e8_10_eating',
    environmentSummary: 'Sons de pessoas comendo, mastigando e bebendo água.',
    musicDescription: 'O alívio e a força retornando aos homens.',
    soundEffects: ['water_splash'],
    directorLesson: 'A importância da preparação para a ação final.',
    lines: [
      {
        id: 's4e8_10_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Depois disso... os outros também comeram. E todos recuperaram as forças.',
      }
    ]
  },
  {
    id: 11,
    sceneNumber: 11,
    title: 'A Última Carga',
    subtitle: 'Deixando tudo para trás',
    biblicalRef: 'Atos 27:38',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'ship_deck',
    musicTheme: 'danger_percussion',
    visualKey: 's4e8_11_last_cargo',
    environmentSummary: 'Caixas pesadas sendo arrastadas e caindo no mar com forte splash.',
    musicDescription: 'Ação retornando.',
    soundEffects: ['water_splash'],
    directorLesson: 'O sacrifício final para garantir flutuabilidade.',
    lines: [
      {
        id: 's4e8_11_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Depois de comer... eles lançaram o restante da carga ao mar.',
      }
    ]
  },
  {
    id: 12,
    sceneNumber: 12,
    title: 'O Amanhecer',
    subtitle: 'A luz retorna',
    biblicalRef: 'Atos 27:39',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'stormy_sea',
    musicTheme: 'hope_piano_strings',
    visualKey: 's4e8_12_dawn',
    environmentSummary: 'O vento diminui um pouco, gaivotas distantes.',
    musicDescription: 'Luminosa, amanhecer e esperança visual.',
    soundEffects: ['wind_breeze'],
    directorLesson: 'O raiar do dia revela a situação.',
    lines: [
      {
        id: 's4e8_12_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E então... o céu começou a clarear.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e8_12_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Era o amanhecer.',
      }
    ]
  },
  {
    id: 13,
    sceneNumber: 13,
    title: 'Terra!',
    subtitle: 'A visão da salvação',
    biblicalRef: 'Atos 27:39',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'ship_deck',
    musicTheme: 'beach_discovery',
    visualKey: 's4e8_13_land',
    environmentSummary: 'Sons de ondas na costa distante.',
    musicDescription: 'Música de esperança e surpresa.',
    soundEffects: ['sea_waves'],
    directorLesson: 'A descoberta que traz a meta final.',
    lines: [
      {
        id: 's4e8_13_l1',
        character: 'marinheiro',
        characterLabel: 'Marinheiro',
        text: 'Terra!',
      },
      {
        id: 's4e8_13_l2',
        character: 'marinheiro',
        characterLabel: 'Outro',
        text: 'Ali!',
      },
      {
        id: 's4e8_13_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles não sabiam exatamente qual era aquela terra. Mas havia terra.',
      }
    ]
  },
  {
    id: 14,
    sceneNumber: 14,
    title: 'A Tentativa Final',
    subtitle: 'Rumo à praia',
    biblicalRef: 'Atos 27:40',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'stormy_sea',
    musicTheme: 'danger_percussion',
    visualKey: 's4e8_14_beach_attempt',
    environmentSummary: 'Cordas, velas, ondas, tensão máxima de navegação.',
    musicDescription: 'Ação rápida, as cordas aceleram.',
    soundEffects: ['wind_breeze', 'sea_waves'],
    directorLesson: 'A manobra arriscada.',
    lines: [
      {
        id: 's4e8_14_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os marinheiros tentaram conduzir o navio em direção à praia.',
      }
    ]
  },
  {
    id: 15,
    sceneNumber: 15,
    title: 'O Navio Encalha',
    subtitle: 'Presos',
    biblicalRef: 'Atos 27:41',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'stormy_sea',
    musicTheme: 'danger_percussion',
    visualKey: 's4e8_15_ship_stuck',
    environmentSummary: 'Grande impacto grave de madeira batendo em algo sólido, muita água.',
    musicDescription: 'Clímax da ação.',
    soundEffects: ['earthquake_rumble', 'sea_waves'],
    directorLesson: 'O impacto brutal de encalhar.',
    lines: [
      {
        id: 's4e8_15_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas o navio bateu em um banco de areia. Ficou preso.',
      }
    ]
  },
  {
    id: 16,
    sceneNumber: 16,
    title: 'O Navio se Parte',
    subtitle: 'Destruição do mar',
    biblicalRef: 'Atos 27:41',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'stormy_sea',
    musicTheme: 'danger_percussion',
    visualKey: 's4e8_16_ship_breaks',
    environmentSummary: 'Madeira rangendo alto e partindo-se, ondas quebrando violentamente.',
    musicDescription: 'Tensão muito alta e desespero.',
    soundEffects: ['sea_waves'],
    directorLesson: 'O perigo final: o navio se desfazendo sob eles.',
    lines: [
      {
        id: 's4e8_16_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'As ondas começaram a quebrar a embarcação. Partes do navio começaram a se soltar.',
      }
    ]
  },
  {
    id: 17,
    sceneNumber: 17,
    title: 'A Correria',
    subtitle: 'Sobrevivência',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'ship_deck',
    musicTheme: 'danger_percussion',
    visualKey: 's4e8_17_panic',
    environmentSummary: 'Passos desesperados, água lavando o convés, gritos.',
    musicDescription: 'Ação acelerada.',
    soundEffects: ['footsteps_running', 'water_splash'],
    directorLesson: 'O caos ordenado. A voz de Paulo traz calma.',
    lines: [
      {
        id: 's4e8_17_l1',
        character: 'marinheiro',
        characterLabel: 'Marinheiro',
        text: 'Segurem-se!',
      },
      {
        id: 's4e8_17_l2',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Não entrem em pânico!',
        emotionGuide: 'Firme e encorajador'
      }
    ]
  },
  {
    id: 18,
    sceneNumber: 18,
    title: 'O Perigo dos Soldados',
    subtitle: 'Decisão cruel',
    biblicalRef: 'Atos 27:42',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'ship_deck',
    musicTheme: 'danger_percussion',
    visualKey: 's4e8_18_soldiers_fear',
    environmentSummary: 'Espadas sendo desembainhadas na água.',
    musicDescription: 'Tensão pelo perigo humano.',
    soundEffects: [],
    directorLesson: 'Explicar a lógica romana sem aprofundar violência.',
    lines: [
      {
        id: 's4e8_18_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os soldados ficaram preocupados com os prisioneiros. Naquele tempo, um soldado poderia ser responsabilizado caso um prisioneiro escapasse.',
      }
    ]
  },
  {
    id: 19,
    sceneNumber: 19,
    title: 'A Intervenção de Júlio',
    subtitle: 'Protegendo Paulo',
    biblicalRef: 'Atos 27:43',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'ship_deck',
    musicTheme: 'hope_piano_strings',
    visualKey: 's4e8_19_julius_intervenes',
    environmentSummary: 'Voz de comando forte parando a ação.',
    musicDescription: 'A decisão heroica de salvar.',
    soundEffects: ['sea_waves'],
    directorLesson: 'Júlio salva as vidas dos prisioneiros devido ao seu respeito por Paulo.',
    lines: [
      {
        id: 's4e8_19_l1',
        character: 'julio',
        characterLabel: 'Júlio',
        text: 'Não! Deixem todos viver!',
        emotionGuide: 'Comando absoluto'
      },
      {
        id: 's4e8_19_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Júlio decidiu proteger Paulo. E ordenou que todos tivessem oportunidade de chegar à terra.',
      }
    ]
  },
  {
    id: 20,
    sceneNumber: 20,
    title: 'A Sobrevivência',
    subtitle: 'Nadando para a areia',
    biblicalRef: 'Atos 27:44',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'stormy_sea',
    musicTheme: 'beach_discovery',
    visualKey: 's4e8_20_survival',
    environmentSummary: 'Pessoas nadando, esforço, ondas quebrando na areia.',
    musicDescription: 'A música constrói esperança rítmica e emocionante.',
    soundEffects: ['water_splash'],
    directorLesson: 'A luta contra a água para alcançar a segurança.',
    lines: [
      {
        id: 's4e8_20_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Alguns chegaram nadando. Outros se seguraram em pedaços da embarcação.',
      },
      {
        id: 's4e8_20_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Pouco a pouco... todos chegaram à praia.',
      }
    ]
  },
  {
    id: 21,
    sceneNumber: 21,
    title: 'O Silêncio',
    subtitle: 'Vivos',
    biblicalRef: 'Atos 27:44',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'malta_beach',
    musicTheme: 'beach_discovery',
    visualKey: 's4e8_21_silence',
    environmentSummary: 'Ondas suaves, respiração cansada, passos na areia.',
    musicDescription: 'A música desaparece e depois começa suavemente.',
    soundEffects: ['sea_waves'],
    directorLesson: 'O contraste da calmaria da praia após a violência do naufrágio.',
    lines: [
      {
        id: 's4e8_21_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E então... silêncio.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e8_21_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Todos estavam vivos.',
      }
    ]
  },
  {
    id: 22,
    sceneNumber: 22,
    title: 'A Promessa',
    subtitle: 'Deus cumpriu',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'malta_beach',
    musicTheme: 'hope_piano_strings',
    visualKey: 's4e8_22_paul_looks',
    environmentSummary: 'Vento leve e pacífico na praia.',
    musicDescription: 'Profunda gratidão.',
    soundEffects: ['wind_breeze'],
    directorLesson: 'O reconhecimento do livramento.',
    lines: [
      {
        id: 's4e8_22_l1',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Deus cumpriu sua promessa.',
      }
    ]
  },
  {
    id: 23,
    sceneNumber: 23,
    title: 'O Alívio',
    subtitle: 'Unidos',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'malta_beach',
    musicTheme: 'hope_piano_strings',
    visualKey: 's4e8_23_relief',
    environmentSummary: 'Os amigos juntos novamente em solo seguro.',
    musicDescription: 'Amizade e segurança.',
    soundEffects: [],
    directorLesson: 'Os amigos comemoram a vida.',
    lines: [
      {
        id: 's4e8_23_l1',
        character: 'lucas',
        characterLabel: 'Lucas',
        text: 'Conseguimos.',
      },
      {
        id: 's4e8_23_l2',
        character: 'aristarco',
        characterLabel: 'Aristarco',
        text: 'Todos.',
      },
      {
        id: 's4e8_23_l3',
        character: 'paulo',
        characterLabel: 'Paulo',
        text: 'Graças a Deus.',
        emotionGuide: 'Respirando aliviado'
      }
    ]
  },
  {
    id: 24,
    sceneNumber: 24,
    title: 'A Lição',
    subtitle: 'Ninguém para trás',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'malta_beach',
    musicTheme: 'beach_discovery',
    visualKey: 's4e8_24_lesson',
    environmentSummary: 'Música inspiradora preenche o espaço.',
    musicDescription: 'A reflexão sobre a história.',
    soundEffects: [],
    directorLesson: 'Mensagem pastoral sobre não desistir e ajudar os outros.',
    lines: [
      {
        id: 's4e8_24_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Aquela viagem parecia impossível. O navio foi perdido. Mas as vidas foram preservadas.',
      },
      {
        id: 's4e8_24_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Paulo não desistiu. E também não deixou seus companheiros para trás.',
      }
    ]
  },
  {
    id: 25,
    sceneNumber: 25,
    title: 'Frase Marcante',
    subtitle: 'Como atravessar a tempestade',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'malta_beach',
    musicTheme: 'hope_piano_strings',
    visualKey: 's4e8_25_phrase',
    environmentSummary: 'O impacto emocional máximo da narrativa.',
    musicDescription: 'Intensa, tocante e inesquecível.',
    soundEffects: [],
    directorLesson: 'O ensinamento ouro do episódio.',
    lines: [
      {
        id: 's4e8_25_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Às vezes... não podemos escolher a tempestade.',
      },
      {
        id: 's4e8_25_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas podemos escolher como atravessá-la.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e8_25_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Com coragem. Com união. E com esperança.',
      }
    ]
  },
  {
    id: 26,
    sceneNumber: 26,
    title: 'A Ilha',
    subtitle: 'Malta',
    biblicalRef: 'Atos 28:1',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'malta_beach',
    musicTheme: 'beach_discovery',
    visualKey: 's4e8_26_island',
    environmentSummary: 'Praia, gaivotas, vento.',
    musicDescription: 'A descoberta do novo lugar.',
    soundEffects: ['sea_waves'],
    directorLesson: 'Revelar onde eles estão.',
    lines: [
      {
        id: 's4e8_26_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles ainda não sabiam... mas aquela praia pertencia a uma ilha chamada Malta.',
      }
    ]
  },
  {
    id: 27,
    sceneNumber: 27,
    title: 'O Gancho',
    subtitle: 'Abrigo e Surpresa',
    biblicalRef: '',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'malta_beach',
    musicTheme: 'dark_sea_mystery',
    visualKey: 's4e8_27_hook',
    environmentSummary: 'Fogueira começando, madeira e vento.',
    musicDescription: 'Música misteriosa suave.',
    soundEffects: ['fire_crackling', 'wind_breeze'],
    directorLesson: 'Preparando a próxima aventura focada na ilha de Malta.',
    lines: [
      {
        id: 's4e8_27_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os sobreviventes estavam cansados e molhados. Precisavam de abrigo. Precisavam de calor.',
      },
      {
        id: 's4e8_27_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E os moradores da ilha... iriam recebê-los.',
      },
      {
        id: 's4e8_27_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas naquela ilha... Paulo ainda viveria uma experiência inesperada.',
      }
    ]
  },
  {
    id: 28,
    sceneNumber: 28,
    title: 'Próximo Episódio',
    subtitle: 'Malta',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'malta_beach',
    musicTheme: 'epic_adventure',
    visualKey: 's4e8_28_next',
    environmentSummary: 'Som de fogueira e ondas.',
    musicDescription: 'Música de aventura final.',
    soundEffects: ['fire_crackling', 'sea_waves'],
    directorLesson: 'Fechando e prometendo mais.',
    lines: [
      {
        id: 's4e8_28_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'No próximo episódio... Malta.',
      },
      {
        id: 's4e8_28_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A ilha da esperança.',
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
    visualKey: 's4e8_29_outro',
    environmentSummary: 'O jingle clássico e a voz feliz da assinatura.',
    musicDescription: 'O final feliz de cada aventura.',
    soundEffects: ['toon_tales_jingle'],
    directorLesson: 'Voltar ao calor do formato padrão Toon Tales.',
    lines: [
      {
        id: 's4e8_29_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E essa foi mais uma aventura da Bíblia em Áudio.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e8_29_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a história ainda não terminou...',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's4e8_29_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma nova aventura está esperando por você.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e8_29_l4',
        character: 'child',
        characterLabel: 'Crianças',
        text: 'TOON TALES KIDS!',
        emotionGuide: 'Voz infantil e enérgica'
      },
      {
        id: 's4e8_29_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Histórias que ensinam, aventuras que transformam!',
      }
    ]
  }
];

export const NAUFRAGIO_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    dayLabel: 'O Perigo na Noite',
    question: 'Quando o navio estava à deriva à noite, o que alguns marinheiros assustados tentaram fazer?',
    options: ['Arrumar as velas', 'Jogar o barco menor no mar para tentar fugir sozinhos', 'Acender uma fogueira no convés', 'Dormir'],
    correctIndex: 1,
    explanation: 'Alguns marinheiros tentaram fugir sozinhos no barco menor, com medo de bater nas rochas. Mas Paulo avisou que eles precisavam ficar juntos para sobreviverem.',
    biblicalVerse: 'Atos 27:30',
  },
  {
    id: 2,
    dayLabel: 'O Conselho Sábio',
    question: 'O que Paulo pediu que as pessoas fizessem enquanto esperavam o amanhecer?',
    options: ['Que eles cantassem alto', 'Que eles comessem para recuperar as forças', 'Que eles pulassem na água no escuro', 'Que eles brigassem'],
    correctIndex: 1,
    explanation: 'Paulo foi muito sábio e encorajador. Ele agradeceu a Deus pelo pão e lembrou todos de que eles precisavam comer para ter forças para nadar até a praia depois.',
    biblicalVerse: 'Atos 27:33-34',
  },
  {
    id: 3,
    dayLabel: 'O Encalhe',
    question: 'O que aconteceu quando os marinheiros tentaram levar o navio para a praia de manhã?',
    options: ['O navio chegou perfeito no porto', 'O navio bateu num banco de areia, ficou preso e começou a se partir pelas ondas', 'Eles encontraram um pirata', 'Eles voaram para a areia'],
    correctIndex: 1,
    explanation: 'O navio bateu e ficou encalhado! A força incrível das ondas começou a quebrar a madeira do barco, obrigando todos a nadarem.',
    biblicalVerse: 'Atos 27:41',
  },
  {
    id: 4,
    dayLabel: 'O Cuidado de Júlio',
    question: 'Por que o centurião Júlio impediu que os soldados fizessem mal aos prisioneiros?',
    options: ['Porque ele queria salvar a vida de Paulo', 'Porque ele queria o navio', 'Porque não tinha prisioneiros', 'Porque ele não era um soldado'],
    correctIndex: 0,
    explanation: 'Júlio respeitava muito Paulo. Ele não deixou que os soldados fizessem mal aos prisioneiros porque queria garantir que Paulo chegasse seguro até a terra.',
    biblicalVerse: 'Atos 27:43',
  },
  {
    id: 5,
    dayLabel: 'A Sobrevivência',
    question: 'Quantas pessoas do navio conseguiram sobreviver e chegar à praia?',
    options: ['Só Paulo', 'Apenas os marinheiros', 'Ninguém', 'Todos eles! Alguns nadando e outros em pedaços do navio'],
    correctIndex: 3,
    explanation: 'Deus cumpriu Sua promessa! Exatamente como Paulo havia dito que aconteceria, Deus protegeu a todos e não perderam a vida, mesmo perdendo o navio.',
    biblicalVerse: 'Atos 27:44',
  }
];
