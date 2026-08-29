import { Scene, QuizQuestion } from '../types';

export const EPISODE_META_T3E9 = {
  id: 't3e9',
  title: 'A Ressurreição de Jesus',
  subtitle: 'A Maior Esperança',
  biblicalText: 'Os 4 Evangelhos (Mateus 26-28, Marcos 14-16, Lucas 22-24, João 13-20)',
  durationLabel: '22 min',
  moralLesson: 'O amor de Jesus foi tão grande que Ele deu Sua vida por nós. Mas a morte não teve a última palavra! Jesus ressuscitou, e essa é a nossa maior esperança.',
};

export const A_RESSURREICAO_SCENES: Scene[] = [
  {
    id: 1,
    sceneNumber: 1,
    title: 'A Última Ceia',
    subtitle: 'Um momento de amor',
    biblicalRef: 'Lucas 22:14-20',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'last_supper',
    musicTheme: 'last_supper_theme',
    visualKey: 's3e9_01_supper',
    environmentSummary: 'Som de uma refeição calma, taças, pão sendo partido.',
    musicDescription: 'Música doce, mas com um tom de despedida.',
    soundEffects: ['bread_breaking'],
    directorLesson: 'Estabelecer a intimidade e o tom amoroso da despedida de Jesus.',
    lines: [
      {
        id: 's3e9_01_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O momento mais importante da história havia chegado.',
      },
      {
        id: 's3e9_01_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus reuniu Seus amigos para um último jantar especial.',
      },
      {
        id: 's3e9_01_l3',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Eu desejei muito comer esta Páscoa com vocês.',
        emotionGuide: 'Afetuoso e sereno'
      },
      {
        id: 's3e9_01_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele partiu o pão e dividiu com eles. Era o Seu jeito de mostrar que os amava até o fim.',
      }
    ]
  },
  {
    id: 2,
    sceneNumber: 2,
    title: 'Getsêmani',
    subtitle: 'A oração no jardim',
    biblicalRef: 'Marcos 14:32-36',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'gethsemane_night',
    musicTheme: 'gethsemane_sorrow',
    visualKey: 's3e9_02_gethsemane',
    environmentSummary: 'Noite, vento suave, grilos.',
    musicDescription: 'Música emotiva, carregada de sentimentos profundos.',
    soundEffects: ['night_crickets', 'wind_breeze'],
    directorLesson: 'A humanidade e a entrega de Jesus ao plano de Deus.',
    lines: [
      {
        id: 's3e9_02_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Depois do jantar, Jesus foi a um jardim chamado Getsêmani para orar.',
      },
      {
        id: 's3e9_02_l2',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Pai... que seja feita a Tua vontade. Não a minha.',
        emotionGuide: 'Voz cheia de emoção e entrega'
      },
      {
        id: 's3e9_02_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O coração de Jesus estava pesado, mas Ele estava pronto para fazer o que era certo.',
      }
    ]
  },
  {
    id: 3,
    sceneNumber: 3,
    title: 'A Prisão',
    subtitle: 'O silêncio do Cordeiro',
    biblicalRef: 'Mateus 26:47-50',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'gethsemane_night',
    musicTheme: 'gethsemane_sorrow',
    visualKey: 's3e9_03_arrest',
    environmentSummary: 'Passos e vozes chegando.',
    musicDescription: 'Tensão dramática, mas sem ser assustadora.',
    soundEffects: ['footsteps', 'crowd_murmur'],
    directorLesson: 'Jesus não foge, Ele se entrega por amor.',
    lines: [
      {
        id: 's3e9_03_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Naquela mesma noite, soldados vieram e prenderam Jesus.',
      },
      {
        id: 's3e9_03_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele não lutou. Ele não fugiu. Ele sabia que tudo aquilo precisava acontecer.',
      }
    ]
  },
  {
    id: 4,
    sceneNumber: 4,
    title: 'A Crucificação',
    subtitle: 'O sacrifício',
    biblicalRef: 'Lucas 23',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'crucifixion_hill',
    musicTheme: 'crucifixion_love',
    visualKey: 's3e9_04_cross',
    environmentSummary: 'Vento soprando. O ambiente é solene e comovente.',
    musicDescription: 'Música sublime, focada no sacrifício e amor incondicional.',
    soundEffects: ['wind_howl'],
    directorLesson: 'Não usar violência sonora. O foco é a compaixão e a obediência de Jesus.',
    lines: [
      {
        id: 's3e9_04_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'No dia seguinte, Jesus foi levado para ser crucificado.',
      },
      {
        id: 's3e9_04_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Foi um dia muito triste. Ele sofreu por amor a nós, para perdoar todos os nossos erros.',
      },
      {
        id: 's3e9_04_l3',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Pai, perdoa-lhes. Eles não sabem o que fazem.',
        emotionGuide: 'Voz fraca, mas cheia de perdão'
      }
    ]
  },
  {
    id: 5,
    sceneNumber: 5,
    title: 'O Maior Amor',
    subtitle: 'Está consumado',
    biblicalRef: 'João 19:30',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'crucifixion_hill',
    musicTheme: 'crucifixion_love',
    visualKey: 's3e9_05_love_sacrifice',
    environmentSummary: 'Momento de reverência.',
    musicDescription: 'A música atinge um ponto de entrega total e para.',
    soundEffects: [],
    directorLesson: 'A entrega final, solene e respeitosa.',
    lines: [
      {
        id: 's3e9_05_l1',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Está consumado.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e9_05_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus entregou Sua vida. Era a maior prova de amor do mundo.',
      }
    ]
  },
  {
    id: 6,
    sceneNumber: 6,
    title: 'A Tristeza dos Discípulos',
    subtitle: 'O fim de um sonho?',
    biblicalRef: 'Lucas 23:27',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'tomb_silence',
    musicTheme: 'tomb_silence_theme',
    visualKey: 's3e9_06_sadness',
    environmentSummary: 'Choro contido, profunda tristeza.',
    musicDescription: 'Música melancólica.',
    soundEffects: [],
    directorLesson: 'Transmitir a dor da perda antes da alegria.',
    lines: [
      {
        id: 's3e9_06_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O céu escureceu. Os amigos de Jesus choraram. Parecia que a esperança havia acabado.',
      },
      {
        id: 's3e9_06_l2',
        character: 'maria_madalena',
        characterLabel: 'Maria',
        text: 'Ele se foi...',
        emotionGuide: 'Chorando suavemente'
      }
    ]
  },
  {
    id: 7,
    sceneNumber: 7,
    title: 'O Sepultamento',
    subtitle: 'A pedra rola',
    biblicalRef: 'Mateus 27:59-60',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'tomb_silence',
    musicTheme: 'tomb_silence_theme',
    visualKey: 's3e9_07_tomb',
    environmentSummary: 'Som de uma pedra pesada deslizando.',
    musicDescription: 'A música vai desaparecendo.',
    soundEffects: ['heavy_stone_rolling'],
    directorLesson: 'O som da pedra sela o túmulo e a esperança deles.',
    lines: [
      {
        id: 's3e9_07_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O corpo de Jesus foi colocado com muito cuidado num túmulo novo, cavado na rocha.',
      },
      {
        id: 's3e9_07_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma enorme pedra foi rolada para fechar a entrada.',
      }
    ]
  },
  {
    id: 8,
    sceneNumber: 8,
    title: 'O Silêncio',
    subtitle: 'O sábado',
    biblicalRef: 'Lucas 23:56',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'tomb_silence',
    musicTheme: 'tomb_silence_theme',
    visualKey: 's3e9_08_silence',
    environmentSummary: 'Silêncio total, o luto.',
    musicDescription: 'Silêncio musical ou apenas um tom grave e imóvel.',
    soundEffects: [],
    directorLesson: 'O tempo de espera.',
    lines: [
      {
        id: 's3e9_08_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Sexta-feira passou. O sábado foi um dia de silêncio.',
      },
      {
        id: 's3e9_08_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ninguém falava. Os discípulos estavam escondidos, com medo. A história de Jesus parecia ter terminado ali.',
      }
    ]
  },
  {
    id: 9,
    sceneNumber: 9,
    title: 'A Manhã do Terceiro Dia',
    subtitle: 'Domingo',
    biblicalRef: 'Lucas 24:1',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'resurrection_morning',
    musicTheme: 'resurrection_glory',
    visualKey: 's3e9_09_morning',
    environmentSummary: 'O amanhecer. Pássaros cantando. Passos femininos.',
    musicDescription: 'A música começa a nascer junto com o sol. Tons de maravilhamento e luz.',
    soundEffects: ['birds_morning', 'footsteps'],
    directorLesson: 'O nascer de um novo dia e a mudança completa do tom da narrativa.',
    lines: [
      {
        id: 's3e9_09_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas então... chegou a manhã de domingo.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e9_09_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Bem cedinho, quando o sol estava começando a brilhar, Maria Madalena e outras mulheres foram até o túmulo.',
      }
    ]
  },
  {
    id: 10,
    sceneNumber: 10,
    title: 'A Surpresa',
    subtitle: 'A pedra rolada',
    biblicalRef: 'Marcos 16:4',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'resurrection_morning',
    musicTheme: 'resurrection_glory',
    visualKey: 's3e9_10_stone_rolled',
    environmentSummary: 'As mulheres param de andar abruptamente.',
    musicDescription: 'Música de suspense alegre.',
    soundEffects: [],
    directorLesson: 'O espanto.',
    lines: [
      {
        id: 's3e9_10_l1',
        character: 'maria_madalena',
        characterLabel: 'Maria Madalena',
        text: 'Olhem! A pedra... a pedra não está na porta!',
        emotionGuide: 'Surpresa e assustada'
      },
      {
        id: 's3e9_10_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A imensa pedra havia sido rolada.',
      }
    ]
  },
  {
    id: 11,
    sceneNumber: 11,
    title: 'O Anjo',
    subtitle: 'Ele não está aqui',
    biblicalRef: 'Lucas 24:4-6',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'resurrection_morning',
    musicTheme: 'resurrection_glory',
    visualKey: 's3e9_12_angel',
    environmentSummary: 'Uma luz brilhante e radiante.',
    musicDescription: 'Música ganha contornos celestiais e grandiosos.',
    soundEffects: ['angelic_shimmer'],
    directorLesson: 'O anúncio celestial e poderoso da vitória.',
    lines: [
      {
        id: 's3e9_11_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'De repente, anjos com roupas que brilhavam como a luz apareceram.',
      },
      {
        id: 's3e9_11_l2',
        character: 'anjo',
        characterLabel: 'Anjo',
        text: 'Por que vocês estão procurando entre os mortos Aquele que vive?',
        emotionGuide: 'Voz grandiosa, ressoante e alegre'
      },
      {
        id: 's3e9_11_l3',
        character: 'anjo',
        characterLabel: 'Anjo',
        text: 'Ele não está aqui. Ele ressuscitou!',
      }
    ]
  },
  {
    id: 12,
    sceneNumber: 12,
    title: 'As Mulheres Correm',
    subtitle: 'A grande notícia',
    biblicalRef: 'Mateus 28:8',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'resurrection_morning',
    musicTheme: 'season_finale_joy',
    visualKey: 's3e9_13_women_run',
    environmentSummary: 'Passos correndo rápidos e empolgados.',
    musicDescription: 'Música explode em alegria e energia.',
    soundEffects: ['running_footsteps'],
    directorLesson: 'A transição de medo para euforia.',
    lines: [
      {
        id: 's3e9_12_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'As mulheres não podiam acreditar! O coração batia forte. Elas correram o mais rápido que puderam para contar aos amigos de Jesus.',
      }
    ]
  },
  {
    id: 13,
    sceneNumber: 13,
    title: 'Jesus Aparece a Maria',
    subtitle: 'Mestre!',
    biblicalRef: 'João 20:16',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'resurrection_morning',
    musicTheme: 'resurrection_glory',
    visualKey: 's3e9_15_jesus_mary',
    environmentSummary: 'Jardim do túmulo.',
    musicDescription: 'Música doce, emocionante, o reencontro.',
    soundEffects: [],
    directorLesson: 'Um dos momentos mais emocionantes e pessoais da ressurreição.',
    lines: [
      {
        id: 's3e9_13_l1',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Maria.',
        emotionGuide: 'Com imenso amor e tranquilidade'
      },
      {
        id: 's3e9_13_l2',
        character: 'maria_madalena',
        characterLabel: 'Maria Madalena',
        text: 'Mestre!',
        emotionGuide: 'Choro de alegria, arrebatada de emoção'
      },
      {
        id: 's3e9_13_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus estava ali! Ele estava vivo!',
      }
    ]
  },
  {
    id: 14,
    sceneNumber: 14,
    title: 'Os Discípulos',
    subtitle: 'Reunidos com medo',
    biblicalRef: 'João 20:19',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'upper_room_joy',
    musicTheme: 'season_finale_joy',
    visualKey: 's3e9_16_disciples_room',
    environmentSummary: 'Sala com portas trancadas, vozes confusas.',
    musicDescription: 'Música vibrante no fundo, prestes a explodir.',
    soundEffects: [],
    directorLesson: 'A quebra do medo pela presença.',
    lines: [
      {
        id: 's3e9_14_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mais tarde, os discípulos estavam reunidos numa casa com as portas trancadas.',
      },
      {
        id: 's3e9_14_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'De repente... sem que ninguém abrisse a porta...',
      }
    ]
  },
  {
    id: 15,
    sceneNumber: 15,
    title: 'A Paz Seja Com Vocês',
    subtitle: 'O Mestre voltou',
    biblicalRef: 'João 20:19',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'upper_room_joy',
    musicTheme: 'resurrection_glory',
    visualKey: 's3e9_17_jesus_appears',
    environmentSummary: 'Jesus surge. Respirações de espanto.',
    musicDescription: 'Clímax maravilhoso.',
    soundEffects: [],
    directorLesson: 'O reencontro glorioso.',
    lines: [
      {
        id: 's3e9_15_l1',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Paz seja com vocês.',
      },
      {
        id: 's3e9_15_l2',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Senhor?!',
        emotionGuide: 'Incrédulo, maravilhado'
      },
      {
        id: 's3e9_15_l3',
        character: 'joao',
        characterLabel: 'João',
        text: 'É Jesus! Ele está aqui!',
        emotionGuide: 'Muito feliz'
      }
    ]
  },
  {
    id: 16,
    sceneNumber: 16,
    title: 'A Alegria',
    subtitle: 'Ele vive',
    biblicalRef: 'João 20:20',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'upper_room_joy',
    musicTheme: 'season_finale_joy',
    visualKey: 's3e9_18_joy',
    environmentSummary: 'Comemoração, abraços.',
    musicDescription: 'Alegria triunfante e contagiante.',
    soundEffects: ['crowd_happy'],
    directorLesson: 'A tristeza desaparece completamente.',
    lines: [
      {
        id: 's3e9_16_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus mostrou as marcas em Suas mãos. Ele sorriu. Ele comeu com eles.',
      },
      {
        id: 's3e9_16_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A tristeza desapareceu. O medo foi embora. A maior alegria que já existiu tomou conta daquela sala!',
      }
    ]
  },
  {
    id: 17,
    sceneNumber: 17,
    title: 'A Conclusão do Narrador',
    subtitle: 'A surpresa de Deus',
    biblicalRef: '',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'upper_room_joy',
    musicTheme: 'season_finale_joy',
    visualKey: 's3e9_21_narrator_conclusion',
    environmentSummary: 'O coração pulsante de esperança de toda a temporada.',
    musicDescription: 'Música marcante, poderosa e épica.',
    soundEffects: [],
    directorLesson: 'O encerramento triunfal e narrativo que o usuário pediu.',
    lines: [
      {
        id: 's3e9_17_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A história parecia ter terminado...',
      },
      {
        id: 's3e9_17_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas Deus ainda tinha uma surpresa.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e9_17_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A morte não teve a última palavra. O túmulo estava vazio.',
      },
      {
        id: 's3e9_17_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Jesus estava vivo!',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's3e9_17_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E aquela manhã mudou a história para sempre.',
      }
    ]
  },
  {
    id: 18,
    sceneNumber: 18,
    title: 'Assinatura',
    subtitle: 'Toon Tales Kids',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'toon_tales_jingle',
    musicTheme: 'signature_jingle',
    visualKey: 's3e9_22_outro',
    environmentSummary: 'O encerramento oficial.',
    musicDescription: 'O jingle clássico entra glorioso.',
    soundEffects: ['toon_tales_jingle'],
    directorLesson: 'Finalizar com a energia inesgotável e alegre da série.',
    lines: [
      {
        id: 's3e9_18_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E essa foi mais uma aventura da Bíblia em Áudio.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e9_18_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a história ainda não terminou...',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's3e9_18_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma nova aventura está esperando por você.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's3e9_18_l4',
        character: 'child',
        characterLabel: 'Crianças',
        text: 'TOON TALES KIDS!',
        emotionGuide: 'Em coro feliz e forte'
      },
      {
        id: 's3e9_18_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Histórias que ensinam, aventuras que transformam!',
      }
    ]
  }
];

export const A_RESSURREICAO_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    dayLabel: 'A Última Ceia',
    question: 'O que Jesus fez com seus discípulos antes de ser preso?',
    options: ['Ele os levou para pescar no mar da Galileia', 'Ele reuniu Seus amigos para um último jantar especial de Páscoa', 'Ele mandou todos embora para suas casas', 'Ele construiu um barco com eles'],
    correctIndex: 1,
    explanation: 'Jesus quis passar um último tempo com as pessoas que amava. Na Última Ceia, Ele partiu o pão e demonstrou Seu amor até o fim.',
    biblicalVerse: 'Lucas 22:14-15',
  },
  {
    id: 2,
    dayLabel: 'O Túmulo',
    question: 'Como as pessoas protegeram o lugar onde Jesus foi sepultado?',
    options: ['Eles construíram uma parede de tijolos', 'Eles deixaram a porta aberta para ventilar', 'Eles rolaram uma pedra enorme para fechar a entrada', 'Eles colocaram uma porta de madeira com chave'],
    correctIndex: 2,
    explanation: 'Depois que Jesus foi sepultado, uma pedra gigante e muito pesada foi rolada para bloquear completamente a entrada do túmulo.',
    biblicalVerse: 'Mateus 27:60',
  },
  {
    id: 3,
    dayLabel: 'A Manhã de Domingo',
    question: 'O que as mulheres viram quando chegaram ao túmulo bem cedinho no domingo?',
    options: ['O túmulo estava cheio de flores', 'Jesus estava dormindo lá dentro', 'A pedra estava fechada e elas não conseguiram entrar', 'A enorme pedra havia sido rolada e o túmulo estava vazio!'],
    correctIndex: 3,
    explanation: 'Foi a maior surpresa de todas! A pedra pesada tinha sido tirada do caminho e, quando olharam, Jesus não estava mais lá!',
    biblicalVerse: 'Marcos 16:4',
  },
  {
    id: 4,
    dayLabel: 'O Anjo',
    question: 'O que os anjos disseram para as mulheres no túmulo?',
    options: ['"Voltem amanhã, o túmulo está fechado."', '"Ele não está aqui. Ele ressuscitou!"', '"Jesus viajou para bem longe."', '"Não façam barulho, as pessoas estão dormindo."'],
    correctIndex: 1,
    explanation: 'Os anjos deram a melhor notícia da história! Eles perguntaram por que elas procuravam entre os mortos Aquele que vive, e afirmaram: "Ele ressuscitou!"',
    biblicalVerse: 'Lucas 24:5-6',
  },
  {
    id: 5,
    dayLabel: 'Nossa Vida',
    question: 'O que a ressurreição de Jesus significa para nós hoje?',
    options: ['Significa que Ele é o nosso super-herói que só existe em livros', 'Significa que a morte venceu', 'Significa que a morte não teve a última palavra e que Ele nos dá amor e esperança!', 'Significa que nunca mais vamos ter problemas'],
    correctIndex: 2,
    explanation: 'A ressurreição de Jesus prova que Ele tem todo o poder. O Seu grande amor nos perdoou e a vida Dele nos garante que a maior esperança está viva!',
    biblicalVerse: 'João 11:25',
  }
];
