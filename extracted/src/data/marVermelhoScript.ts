import { Scene, QuizQuestion } from '../types';

export const EPISODE_META_T2E3 = {
  id: 't2e3',
  title: 'A Abertura do Mar Vermelho',
  subtitle: 'Quando Deus abriu um caminho',
  biblicalText: 'Êxodo 12–14',
  durationLabel: '15 min',
  moralLesson: 'Quando enfrentamos uma situação assustadora, podemos confiar em Deus e continuar caminhando com coragem.',
};

export const MAR_VERMELHO_SCENES: Scene[] = [
  {
    id: 1,
    sceneNumber: 1,
    title: 'A Noite da Libertação',
    subtitle: 'Prontos para partir',
    biblicalRef: 'Êxodo 12',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'egypt_night',
    musicTheme: 'mysterious_exodus',
    visualKey: 's2e3_01_night',
    environmentSummary: 'Egito à noite. Vento. Passos. Famílias se preparando.',
    musicDescription: 'Música misteriosa e antecipatória.',
    soundEffects: ['desert_night', 'wind_sky'],
    directorLesson: 'Transmitir a urgência e a grande mudança após anos de sofrimento.',
    lines: [
      {
        id: 's2e3_01_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Depois de muitos anos de sofrimento... chegou o momento de Israel deixar o Egito.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e3_01_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Deus havia ouvido o clamor do seu povo. E agora era hora de partir.',
      },
      {
        id: 's2e3_01_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles estavam prontos.',
        soundCue: 'Famílias preparando bagagens'
      },
      {
        id: 's2e3_01_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Sandálias nos pés. Pertences preparados. E os olhos voltados para o caminho.',
      }
    ]
  },
  {
    id: 2,
    sceneNumber: 2,
    title: 'Partindo',
    subtitle: 'A grande jornada começa',
    biblicalRef: 'Êxodo 12:37-39',
    durationLabel: '45 segundos',
    estimatedDurationSec: 45,
    ambientType: 'desert_journey',
    musicTheme: 'exodus_hope',
    visualKey: 's2e3_02_leaving',
    environmentSummary: 'Passos, carroças, animais, pessoas em movimento.',
    musicDescription: 'A música começa a crescer com esperança.',
    soundEffects: ['nature_sounds'],
    directorLesson: 'Um senso de alívio e expectativa de liberdade.',
    lines: [
      {
        id: 's2e3_02_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Então começaram a sair.',
      },
      {
        id: 's2e3_02_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Famílias inteiras. Pais. Mães. Crianças. Idosos. Rebanhos.',
      },
      {
        id: 's2e3_02_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Todos caminhando juntos.',
      },
      {
        id: 's2e3_02_l4',
        character: 'child',
        characterLabel: 'Criança',
        text: 'Estamos indo embora?',
        emotionGuide: 'Curiosa'
      },
      {
        id: 's2e3_02_l5',
        character: 'mae',
        characterLabel: 'Mãe',
        text: 'Sim. Deus está nos levando para a liberdade.',
        emotionGuide: 'Carinhosa e comovida'
      }
    ]
  },
  {
    id: 3,
    sceneNumber: 3,
    title: 'Moisés Conduz o Povo',
    subtitle: 'A guia de Deus',
    biblicalRef: 'Êxodo 13:21-22',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'desert_journey',
    musicTheme: 'majestic_guide',
    visualKey: 's2e3_03_guiding',
    environmentSummary: 'Deserto, vento, passos.',
    musicDescription: 'Música suave e majestosa.',
    soundEffects: ['desert_wind'],
    directorLesson: 'Moisés guiando, mas sabendo que Deus é o verdadeiro guia.',
    lines: [
      {
        id: 's2e3_03_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Moisés estava à frente.',
      },
      {
        id: 's2e3_03_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele sabia que aquela jornada não seria fácil. Mas sabia que Deus estava guiando o caminho.',
      },
      {
        id: 's2e3_03_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Durante o dia, Deus guiava o povo. E durante a noite, mostrava o caminho.',
      }
    ]
  },
  {
    id: 4,
    sceneNumber: 4,
    title: 'Faraó Muda de Ideia',
    subtitle: 'A perseguição ordenada',
    biblicalRef: 'Êxodo 14:5-9',
    durationLabel: '35 segundos',
    estimatedDurationSec: 35,
    ambientType: 'palace_pharaoh',
    musicTheme: 'pharaoh_chase',
    visualKey: 's2e3_04_pharaoh',
    environmentSummary: 'Palácio. A música muda completamente para tensão militar.',
    musicDescription: 'Música de perseguição forte e iminente.',
    soundEffects: [],
    directorLesson: 'O orgulho e a fúria do Faraó.',
    lines: [
      {
        id: 's2e3_04_l1',
        character: 'farao',
        characterLabel: 'Faraó',
        text: 'O que fizemos? Deixamos os israelitas partir?',
        emotionGuide: 'Autoritário, orgulhoso e furioso',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e3_04_l2',
        character: 'farao',
        characterLabel: 'Faraó',
        text: 'Tragam os cavalos. Preparem os carros!',
      },
      {
        id: 's2e3_04_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Faraó decidiu persegui-los.',
        soundCue: 'Cavalos, rodas e tambores ao fundo'
      }
    ]
  },
  {
    id: 5,
    sceneNumber: 5,
    title: 'O Exército Se Aproxima',
    subtitle: 'A poeira no horizonte',
    biblicalRef: 'Êxodo 14:10',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'desert_journey',
    musicTheme: 'army_approaches',
    visualKey: 's2e3_05_army',
    environmentSummary: 'Cavalos ao longe, tambores, pessoas correndo.',
    musicDescription: 'A música cresce e o perigo aumenta rapidamente.',
    soundEffects: ['desert_wind'],
    directorLesson: 'Ameaça visual e sonora do exército chegando.',
    lines: [
      {
        id: 's2e3_05_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os israelitas estavam caminhando... quando alguém olhou para trás.',
      },
      {
        id: 's2e3_05_l2',
        character: 'israelita',
        characterLabel: 'Israelita',
        text: 'Olhem! Os egípcios!',
        emotionGuide: 'Pânico'
      },
      {
        id: 's2e3_05_l3',
        character: 'israelita',
        characterLabel: 'Israelita 2',
        text: 'Eles estão vindo!',
      },
      {
        id: 's2e3_05_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O exército de Faraó estava se aproximando.',
      }
    ]
  },
  {
    id: 6,
    sceneNumber: 6,
    title: 'Diante do Mar',
    subtitle: 'Sem saída aparente',
    biblicalRef: 'Êxodo 14:10',
    durationLabel: '35 segundos',
    estimatedDurationSec: 35,
    ambientType: 'red_sea_shore',
    musicTheme: 'red_sea_fear',
    visualKey: 's2e3_06_sea',
    environmentSummary: 'O ambiente fica mais silencioso, ouve-se o mar e o vento.',
    musicDescription: 'Música muito tensa e angustiante.',
    soundEffects: ['ocean_waves', 'wind_sky'],
    directorLesson: 'O desespero do povo de estar encurralado.',
    lines: [
      {
        id: 's2e3_06_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'À frente... estava o mar.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e3_06_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'De um lado... o mar. Do outro... o exército.',
      },
      {
        id: 's2e3_06_l3',
        character: 'israelita',
        characterLabel: 'Israelita',
        text: 'Moisés! O que vamos fazer?',
      },
      {
        id: 's2e3_06_l4',
        character: 'israelita',
        characterLabel: 'Israelita 2',
        text: 'Não há para onde ir!',
      },
      {
        id: 's2e3_06_l5',
        character: 'child',
        characterLabel: 'Criança',
        text: 'Estou com medo.',
        emotionGuide: 'Aflita'
      }
    ]
  },
  {
    id: 7,
    sceneNumber: 7,
    title: 'O Medo',
    subtitle: 'Esquecendo de confiar',
    biblicalRef: 'Êxodo 14:11-12',
    durationLabel: '35 segundos',
    estimatedDurationSec: 35,
    ambientType: 'red_sea_shore',
    musicTheme: 'red_sea_fear',
    visualKey: 's2e3_07_fear',
    environmentSummary: 'Vozes sobrepostas discretas de pânico.',
    musicDescription: 'A tensão se mantém baixa, pontuando o medo humano.',
    soundEffects: [],
    directorLesson: 'Normalizar o sentimento de medo, mas apontar para a fé.',
    lines: [
      {
        id: 's2e3_07_l1',
        character: 'israelita',
        characterLabel: 'Israelita',
        text: 'Por que você nos trouxe até aqui?',
      },
      {
        id: 's2e3_07_l2',
        character: 'israelita',
        characterLabel: 'Israelita 2',
        text: 'Era melhor ter ficado no Egito!',
      },
      {
        id: 's2e3_07_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O medo tomou conta do povo.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e3_07_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E, quando sentimos medo... às vezes esquecemos tudo o que Deus já fez.',
      }
    ]
  },
  {
    id: 8,
    sceneNumber: 8,
    title: 'Moisés Responde',
    subtitle: 'Fiquem firmes',
    biblicalRef: 'Êxodo 14:13-14',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'red_sea_shore',
    musicTheme: 'faith_stands',
    visualKey: 's2e3_08_moses_speaks',
    environmentSummary: 'Silêncio.',
    musicDescription: 'Música começa a crescer lentamente em fé e coragem.',
    soundEffects: ['ocean_waves'],
    directorLesson: 'Moisés assumindo sua liderança inabalável sob Deus.',
    lines: [
      {
        id: 's2e3_08_l1',
        character: 'moises',
        characterLabel: 'Moisés',
        text: 'Não tenham medo.',
        emotionGuide: 'Firme, tranquilo, em meio ao pânico',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e3_08_l2',
        character: 'moises',
        characterLabel: 'Moisés',
        text: 'Fiquem firmes. Vocês verão o que Deus fará.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e3_08_l3',
        character: 'moises',
        characterLabel: 'Moisés',
        text: 'O Senhor lutará por vocês. Vocês precisam apenas confiar.',
      }
    ]
  },
  {
    id: 9,
    sceneNumber: 9,
    title: 'Deus Fala com Moisés',
    subtitle: 'A ordem para avançar',
    biblicalRef: 'Êxodo 14:15-16',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'red_sea_shore',
    musicTheme: 'faith_stands',
    visualKey: 's2e3_09_god_speaks',
    environmentSummary: 'Vento e som majestoso discreto.',
    musicDescription: 'Música com presença divina, indicando ação iminente.',
    soundEffects: ['wind_sky'],
    directorLesson: 'Deus move Moisés à ação num cenário impossível.',
    lines: [
      {
        id: 's2e3_09_l1',
        character: 'god',
        characterLabel: 'Voz de Deus',
        text: 'Por que você está clamando a mim? Diga ao povo que avance.',
      },
      {
        id: 's2e3_09_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Avançar? Mas o mar estava diante deles.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e3_09_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Como poderiam avançar?',
      }
    ]
  },
  {
    id: 10,
    sceneNumber: 10,
    title: 'O Mar se Abre',
    subtitle: 'O vento forte',
    biblicalRef: 'Êxodo 14:21',
    durationLabel: '50 segundos',
    estimatedDurationSec: 50,
    ambientType: 'red_sea_shore',
    musicTheme: 'sea_opening_miracle',
    visualKey: 's2e3_10_miracle',
    environmentSummary: 'Vento forte crescendo. Ondas se movendo com enorme força.',
    musicDescription: 'Música começa silenciosa, depois cresce para um GRANDE IMPACTO MUSICAL.',
    soundEffects: ['ocean_waves', 'wind_sky'],
    directorLesson: 'O momento mais espetacular. O poder da natureza obedecendo a Deus.',
    lines: [
      {
        id: 's2e3_10_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Moisés levantou seu cajado.',
      },
      {
        id: 's2e3_10_l2',
        character: 'moises',
        characterLabel: 'Moisés',
        text: 'Vamos!',
      },
      {
        id: 's2e3_10_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Então... um vento forte começou a soprar.',
        soundCue: 'Vento muito forte. As ondas começam a se mover e se afastar'
      },
      {
        id: 's2e3_10_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O vento soprou durante toda aquela noite. A água começou a se afastar.',
      },
      {
        id: 's2e3_10_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E então...',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's2e3_10_l6',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O mar se abriu.',
        soundCue: 'GRANDE IMPACTO MUSICAL. Água dividida'
      }
    ]
  },
  {
    id: 11,
    sceneNumber: 11,
    title: 'O Caminho Entre as Águas',
    subtitle: 'Muros de água',
    biblicalRef: 'Êxodo 14:22',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'red_sea_path',
    musicTheme: 'majestic_guide',
    visualKey: 's2e3_11_path',
    environmentSummary: 'Silêncio breve, seguido de vento e o som contínuo e massivo de paredes de água.',
    musicDescription: 'Música majestosa e maravilhada.',
    soundEffects: ['ocean_waters'],
    directorLesson: 'O assombro e admiração da revelação do milagre.',
    lines: [
      {
        id: 's2e3_11_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Diante dos olhos do povo... havia um caminho.',
      },
      {
        id: 's2e3_11_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Um caminho seco. Bem no meio do mar.',
      },
      {
        id: 's2e3_11_l3',
        character: 'child',
        characterLabel: 'Criança',
        text: 'Olha! Tem um caminho!',
      },
      {
        id: 's2e3_11_l4',
        character: 'mae',
        characterLabel: 'Mãe',
        text: 'É Deus!',
        emotionGuide: 'Maravilhada e com lágrimas de alegria'
      }
    ]
  },
  {
    id: 12,
    sceneNumber: 12,
    title: 'A Travessia',
    subtitle: 'Pisando em terra seca',
    biblicalRef: 'Êxodo 14:22',
    durationLabel: '45 segundos',
    estimatedDurationSec: 45,
    ambientType: 'red_sea_path',
    musicTheme: 'walking_dry_land',
    visualKey: 's2e3_12_crossing',
    environmentSummary: 'Passos na terra seca, o som imponente da água retida.',
    musicDescription: 'Música de aventura feliz e inacreditável.',
    soundEffects: ['nature_sounds'],
    directorLesson: 'O alívio e a fé em movimento.',
    lines: [
      {
        id: 's2e3_12_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E o povo começou a caminhar.',
      },
      {
        id: 's2e3_12_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Homens. Mulheres. Crianças. Todos atravessando.',
      },
      {
        id: 's2e3_12_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'De um lado... paredes de água. Do outro... paredes de água.',
      },
      {
        id: 's2e3_12_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas o caminho estava seco.',
      },
      {
        id: 's2e3_12_l5',
        character: 'child',
        characterLabel: 'Criança',
        text: 'Estamos atravessando o mar!',
        emotionGuide: 'Muito feliz'
      }
    ]
  },
  {
    id: 13,
    sceneNumber: 13,
    title: 'Moisés Olha para Trás',
    subtitle: 'O exército no mar',
    biblicalRef: 'Êxodo 14:23-25',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'red_sea_path',
    musicTheme: 'pharaoh_chase',
    visualKey: 's2e3_13_looking_back',
    environmentSummary: 'Cavalos e tambores ao longe, ecoando entre as paredes de água.',
    musicDescription: 'Música fica tensa novamente, mas contida.',
    soundEffects: ['desert_wind'],
    directorLesson: 'A persistência teimosa do mal, que não entende os limites de Deus.',
    lines: [
      {
        id: 's2e3_13_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Moisés olhou para trás.',
      },
      {
        id: 's2e3_13_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O exército egípcio estava tentando seguir o povo.',
        soundCue: 'Cavalos e tambores'
      },
      {
        id: 's2e3_13_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas Deus continuava protegendo Israel.'
      }
    ]
  },
  {
    id: 14,
    sceneNumber: 14,
    title: 'O Mar Volta',
    subtitle: 'Livres para sempre',
    biblicalRef: 'Êxodo 14:26-29',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'red_sea_shore',
    musicTheme: 'sea_closing_tension',
    visualKey: 's2e3_14_closing',
    environmentSummary: 'Grande movimento de água caindo, e depois silêncio.',
    musicDescription: 'Música extremamente tensa que subitamente se acalma em resolução baixa.',
    soundEffects: ['ocean_waves'],
    directorLesson: 'Mostrar a resolução sem violar o senso infantil (sem foco nas mortes).',
    lines: [
      {
        id: 's2e3_14_l1',
        character: 'god',
        characterLabel: 'Voz de Deus',
        text: 'Estenda a mão sobre o mar.',
      },
      {
        id: 's2e3_14_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Moisés obedece. O vento diminui. As águas começam a se mover.',
        soundCue: 'Grande movimento de água colapsando'
      },
      {
        id: 's2e3_14_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'As águas começaram a voltar. Então... o caminho desapareceu.',
      },
      {
        id: 's2e3_14_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O povo de Israel estava livre.'
      }
    ]
  },
  {
    id: 15,
    sceneNumber: 15,
    title: 'Silêncio Depois do Milagre',
    subtitle: 'A ficha cai',
    biblicalRef: 'Êxodo 14:30-31',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'red_sea_crossed',
    musicTheme: 'pure_serenity',
    visualKey: 's2e3_15_silence',
    environmentSummary: 'Vento suave, som do mar batendo na praia.',
    musicDescription: 'Música contemplativa profunda.',
    soundEffects: ['ocean_waters'],
    directorLesson: 'O peso da liberdade real e da grandeza do poder divino.',
    lines: [
      {
        id: 's2e3_15_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Por alguns instantes... ninguém falou.',
      },
      {
        id: 's2e3_15_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Todos olhavam para o mar.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e3_15_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E entenderam que tinham acabado de testemunhar algo extraordinário.',
      }
    ]
  },
  {
    id: 16,
    sceneNumber: 16,
    title: 'A Alegria',
    subtitle: 'O cântico de Miriã',
    biblicalRef: 'Êxodo 15',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'red_sea_crossed',
    musicTheme: 'celebration_joy',
    visualKey: 's2e3_16_joy',
    environmentSummary: 'Risadas, vozes felizes, pandeiros.',
    musicDescription: 'Música alegre, triunfante e celebratória.',
    soundEffects: ['nature_sounds'],
    directorLesson: 'A celebração efusiva, a dança e o alívio que extravasa.',
    lines: [
      {
        id: 's2e3_16_l1',
        character: 'miria',
        characterLabel: 'Miriã',
        text: 'Deus nos salvou!',
        emotionGuide: 'Muito feliz'
      },
      {
        id: 's2e3_16_l2',
        character: 'israelita',
        characterLabel: 'Israelitas',
        text: 'Glória a Deus!',
      },
      {
        id: 's2e3_16_l3',
        character: 'child',
        characterLabel: 'Crianças',
        text: 'Conseguimos!',
      },
      {
        id: 's2e3_16_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Miriã começou a celebrar. Outras mulheres pegaram instrumentos.',
        soundCue: 'Pandeiros'
      },
      {
        id: 's2e3_16_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Todos cantaram. O medo havia dado lugar à alegria.',
      }
    ]
  },
  {
    id: 17,
    sceneNumber: 17,
    title: 'A Grande Lição',
    subtitle: 'Deus abre caminhos',
    biblicalRef: '',
    durationLabel: '50 segundos',
    estimatedDurationSec: 50,
    ambientType: 'desert_wind',
    musicTheme: 'gentle_teaching',
    visualKey: 's2e3_17_lesson',
    environmentSummary: 'Vento calmo.',
    musicDescription: 'Música acolhedora.',
    soundEffects: [],
    directorLesson: 'Traduzir o milagre para os problemas da vida das crianças.',
    lines: [
      {
        id: 's2e3_17_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A história do Mar Vermelho nos ensina uma coisa muito importante.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e3_17_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Às vezes... podemos olhar para um problema e pensar: "Não existe saída."',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e3_17_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas Deus pode abrir caminhos que nós não conseguimos imaginar.',
      },
      {
        id: 's2e3_17_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Isso não significa que todos os problemas desaparecerão imediatamente.',
      },
      {
        id: 's2e3_17_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Significa que podemos continuar caminhando. Confiando. Orando. Fazendo o que é certo. E não deixando o medo vencer.',
      }
    ]
  },
  {
    id: 18,
    sceneNumber: 18,
    title: 'Frase para as Crianças',
    subtitle: 'Um passo de cada vez',
    biblicalRef: '',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'desert_wind',
    musicTheme: 'gentle_teaching',
    visualKey: 's2e3_18_phrase',
    environmentSummary: 'Música suave.',
    musicDescription: 'Continuação do ensino suave.',
    soundEffects: [],
    directorLesson: 'Acalmar e assegurar a criança em seus medos diários.',
    lines: [
      {
        id: 's2e3_18_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Quando você estiver diante de uma situação difícil... lembre-se de Moisés.',
      },
      {
        id: 's2e3_18_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Respire. Ore. Tenha coragem. E continue avançando.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e3_18_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Você não precisa saber exatamente como tudo vai terminar. Pode dar um passo de cada vez.',
      }
    ]
  },
  {
    id: 19,
    sceneNumber: 19,
    title: 'Gancho para o Próximo',
    subtitle: 'As muralhas gigantes',
    biblicalRef: '',
    durationLabel: '35 segundos',
    estimatedDurationSec: 35,
    ambientType: 'desert_wind',
    musicTheme: 'joshua_hook',
    visualKey: 's2e3_19_hook',
    environmentSummary: 'Vento e expectativa crescente.',
    musicDescription: 'A música começa aventureira e cresce de modo monumental.',
    soundEffects: ['desert_wind'],
    directorLesson: 'Preparar a épica batalha de Jericó e Josué.',
    lines: [
      {
        id: 's2e3_19_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a aventura do povo de Israel estava apenas começando.',
      },
      {
        id: 's2e3_19_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E depois de atravessar o mar... eles ainda teriam um longo caminho pela frente.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e3_19_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Um novo líder surgiria. Seu nome era Josué.',
        soundCue: 'Música cresce forte'
      },
      {
        id: 's2e3_19_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E diante dele estaria uma cidade cercada por enormes muralhas.',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's2e3_19_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jericó.',
      },
      {
        id: 's2e3_19_l6',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Como aquelas muralhas cairiam?',
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
    visualKey: 's2e3_20_outro',
    environmentSummary: 'Logotipo sonoro',
    musicDescription: 'A trilha da aventura diminui. Entra o tema musical alegre, memorável e fantástico.',
    soundEffects: ['toon_tales_jingle'],
    directorLesson: 'Energético, feliz e acolhedor.',
    lines: [
      {
        id: 's2e3_20_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E essa foi mais uma aventura da Bíblia em Áudio.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
        emotionGuide: 'Voz calorosa e emocionante'
      },
      {
        id: 's2e3_20_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a história ainda não terminou...',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's2e3_20_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma nova aventura está esperando por você.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's2e3_20_l4',
        character: 'child',
        characterLabel: 'Crianças',
        text: 'TOON TALES KIDS!',
        emotionGuide: 'Alegre e espontânea, em coro'
      },
      {
        id: 's2e3_20_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Histórias que ensinam, aventuras que transformam!',
      }
    ]
  }
];

export const MAR_VERMELHO_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    dayLabel: 'A Partida',
    question: 'Por que o povo de Israel saiu do Egito apressado à noite?',
    options: ['Porque eles queriam acampar para uma festa no deserto', 'Porque Deus os estava libertando de anos de sofrimento e escravidão no Egito', 'Porque Moisés encontrou um tesouro no deserto', 'Porque eles perderam um concurso no Egito'],
    correctIndex: 1,
    explanation: 'Deus ouviu o clamor de Israel e enviou Moisés para libertá-los após muito sofrimento no Egito.',
    biblicalVerse: 'Êxodo 12:41-42',
  },
  {
    id: 2,
    dayLabel: 'A Perseguição',
    question: 'O que o Faraó fez depois que deixou o povo de Israel partir?',
    options: ['Ele mandou presentes de desculpas para eles', 'Ele fez uma festa e convidou outras nações', 'Ele se arrependeu de deixá-los ir, e enviou seu exército com cavalos e carros para persegui-los', 'Ele pediu para ser o rei de Israel'],
    correctIndex: 2,
    explanation: 'O orgulhoso Faraó se arrependeu, e liderou seu exército para perseguir o povo no deserto.',
    biblicalVerse: 'Êxodo 14:5-8',
  },
  {
    id: 3,
    dayLabel: 'O Medo',
    question: 'Quando os israelitas chegaram diante do Mar Vermelho e viram o exército chegando, o que Moisés lhes disse?',
    options: ['"Fujam nadando o mais rápido que puderem!"', '"Não tenham medo. Fiquem firmes. O Senhor lutará por vocês."', '"Vamos lutar contra os carros e cavalos!"', '"Vamos construir grandes barcos de madeira."'],
    correctIndex: 1,
    explanation: 'Apesar do medo do povo, Moisés permaneceu com fé, dizendo que não precisavam temer porque Deus lutaria por eles.',
    biblicalVerse: 'Êxodo 14:13-14',
  },
  {
    id: 4,
    dayLabel: 'O Milagre',
    question: 'Como Deus abriu o caminho para os israelitas passarem pelo meio do Mar Vermelho?',
    options: ['Ele levantou a terra para formar uma ponte por cima da água', 'Deus enviou um vento forte durante a noite e a água se dividiu, formando um caminho seco', 'Ele transformou o mar inteiro em gelo', 'Fez chover areia até o mar secar'],
    correctIndex: 1,
    explanation: 'Moisés estendeu a mão, e Deus enviou um forte vento leste que dividiu as águas, formando muralhas de água de ambos os lados.',
    biblicalVerse: 'Êxodo 14:21-22',
  },
  {
    id: 5,
    dayLabel: 'A Celebração',
    question: 'Quem pegou um pandeiro e cantou de alegria celebrando que Deus os havia salvado?',
    options: ['Faraó', 'Miriã, irmã de Moisés, junto com outras mulheres', 'Arão e todos os homens mais velhos', 'Moisés cantou sozinho'],
    correctIndex: 1,
    explanation: 'Depois da grande libertação, Miriã e outras mulheres celebraram o poder de Deus cantando com pandeiros.',
    biblicalVerse: 'Êxodo 15:20-21',
  }
];
