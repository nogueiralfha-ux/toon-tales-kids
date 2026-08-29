import { Scene, QuizQuestion } from '../types';

export const EPISODE_META_T4E2 = {
  id: 't4e2',
  title: 'Pedro',
  subtitle: 'O pescador que se tornou um pregador',
  biblicalText: 'Atos 3 a 5 e Atos 9 a 12',
  durationLabel: '17 min',
  moralLesson: 'Pedro não era perfeito. Mas aprendeu, mudou e teve coragem para continuar sua missão. Quando eu errar, posso aprender e continuar fazendo o bem.',
};

export const PEDRO_SCENES: Scene[] = [
  {
    id: 1,
    sceneNumber: 1,
    title: 'Abertura',
    subtitle: 'Lembrança',
    biblicalRef: '',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'peter_past',
    musicTheme: 'peter_theme',
    visualKey: 's4e2_01_intro',
    environmentSummary: 'Sons de multidão, vozes e passos que fazem a transição para o som de mar, ondas e um barco de pesca.',
    musicDescription: 'Música tema de Pedro, com instrumentos simples e tocantes.',
    soundEffects: ['crowd_distant', 'sea_waves', 'boat_creak'],
    directorLesson: 'Estabelecer de onde Pedro veio, mostrando sua humanidade.',
    lines: [
      {
        id: 's4e2_01_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Antes de se tornar um dos grandes líderes da Igreja... Pedro era um pescador.',
      },
      {
        id: 's4e2_01_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Um homem simples. Impulsivo. Corajoso. E algumas vezes... muito assustado.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e2_01_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas Jesus acreditou nele.',
      },
      {
        id: 's4e2_01_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E Pedro nunca mais seria o mesmo.',
      }
    ]
  },
  {
    id: 2,
    sceneNumber: 2,
    title: 'Flashback',
    subtitle: 'Pedro e Jesus',
    biblicalRef: 'Evangelhos',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'peter_past',
    musicTheme: 'peter_theme',
    visualKey: 's4e2_02_flashback',
    environmentSummary: 'Som do mar, barco e redes de pesca sendo puxadas.',
    musicDescription: 'Música continua suave.',
    soundEffects: ['sea_waves'],
    directorLesson: 'Lembrar o chamado original de Pedro.',
    lines: [
      {
        id: 's4e2_02_l1',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Venha comigo.',
        emotionGuide: 'Sereno, amável'
      },
      {
        id: 's4e2_02_l2',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Eu?',
        emotionGuide: 'Surpreso, inseguro'
      },
      {
        id: 's4e2_02_l3',
        character: 'jesus',
        characterLabel: 'Jesus',
        text: 'Sim.',
      },
      {
        id: 's4e2_02_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Pedro deixou suas redes... e começou a seguir Jesus.',
      }
    ]
  },
  {
    id: 3,
    sceneNumber: 3,
    title: 'Os Erros',
    subtitle: 'Aprender e Crescer',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'peter_past',
    musicTheme: 'hope_theme',
    visualKey: 's4e2_03_mistakes',
    environmentSummary: 'Ambiente tranquilo.',
    musicDescription: 'Música mais delicada, focada no aprendizado.',
    soundEffects: [],
    directorLesson: 'Humanizar Pedro, mostrando que os heróis também erram.',
    lines: [
      {
        id: 's4e2_03_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Pedro aprendeu muitas coisas. Mas também cometeu erros.',
      },
      {
        id: 's4e2_03_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele aprendeu que coragem não significa nunca ter medo. E que seguir Jesus também significa aprender com os próprios erros.',
      }
    ]
  },
  {
    id: 4,
    sceneNumber: 4,
    title: 'A Transformação',
    subtitle: 'Nova Missão',
    biblicalRef: 'Atos 1',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'jerusalem_street',
    musicTheme: 'courage_theme',
    visualKey: 's4e2_04_transformation',
    environmentSummary: 'Vento e sons de multidão, marcando a passagem do tempo pós-ressurreição.',
    musicDescription: 'Música ganha força, cordas e percussão começam.',
    soundEffects: ['wind_breeze', 'crowd_distant'],
    directorLesson: 'O início da fase madura de Pedro.',
    lines: [
      {
        id: 's4e2_04_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Depois da ressurreição de Jesus... Pedro recebeu uma nova missão.',
      },
      {
        id: 's4e2_04_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Agora ele deveria ajudar a anunciar a mensagem de Jesus.',
      }
    ]
  },
  {
    id: 5,
    sceneNumber: 5,
    title: 'Pedro e João',
    subtitle: 'A caminho do templo',
    biblicalRef: 'Atos 3:1',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'temple_gate',
    musicTheme: 'courage_theme',
    visualKey: 's4e2_05_peter_john',
    environmentSummary: 'Rua de Jerusalém, pessoas caminhando, passos na pedra.',
    musicDescription: 'Música continua, ritmo de caminhada.',
    soundEffects: ['footsteps', 'city_street'],
    directorLesson: 'Contextualizar o momento do milagre.',
    lines: [
      {
        id: 's4e2_05_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Certo dia... Pedro e João estavam indo ao templo.',
      }
    ]
  },
  {
    id: 6,
    sceneNumber: 6,
    title: 'O Homem na Porta',
    subtitle: 'Um pedido de ajuda',
    biblicalRef: 'Atos 3:2-3',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'temple_gate',
    musicTheme: 'hope_theme',
    visualKey: 's4e2_06_man_walking',
    environmentSummary: 'Som de moedas sendo colocadas num recipiente.',
    musicDescription: 'Música suave.',
    soundEffects: ['coins_jingle'],
    directorLesson: 'Apresentar a necessidade com respeito e sem dramatismo exagerado.',
    lines: [
      {
        id: 's4e2_06_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Na entrada havia um homem que não conseguia andar. Ele pedia ajuda às pessoas que passavam.',
      },
      {
        id: 's4e2_06_l2',
        character: 'homem_curado',
        characterLabel: 'Homem',
        text: 'Por favor... Podem me ajudar?',
        emotionGuide: 'Humilde'
      }
    ]
  },
  {
    id: 7,
    sceneNumber: 7,
    title: 'Pedro Para',
    subtitle: 'Em Nome de Jesus',
    biblicalRef: 'Atos 3:4-6',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'temple_gate',
    musicTheme: 'peter_theme',
    visualKey: 's4e2_07_peter_stops',
    environmentSummary: 'Os passos de Pedro e João param. Fica um silêncio atento.',
    musicDescription: 'Música cria uma expectativa santa e emocionante.',
    soundEffects: [],
    directorLesson: 'A fé em ação, focando na atenção plena que Pedro dá ao homem.',
    lines: [
      {
        id: 's4e2_07_l1',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Olhe para nós.',
        emotionGuide: 'Firme e bondoso'
      },
      {
        id: 's4e2_07_l2',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Não tenho prata nem ouro.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e2_07_l3',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Mas o que tenho... isso lhe dou. Em nome de Jesus Cristo... levante-se e ande.',
      }
    ]
  },
  {
    id: 8,
    sceneNumber: 8,
    title: 'O Milagre',
    subtitle: 'Andando e Saltando',
    biblicalRef: 'Atos 3:7-8',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'temple_healing',
    musicTheme: 'miracle_joy',
    visualKey: 's4e2_08_miracle',
    environmentSummary: 'O som de movimento do homem se levantando e passos rápidos.',
    musicDescription: 'A música explode em alegria!',
    soundEffects: ['footsteps_running'],
    directorLesson: 'O milagre focado na restauração, na alegria e na gratidão.',
    lines: [
      {
        id: 's4e2_08_l1',
        character: 'homem_curado',
        characterLabel: 'Homem',
        text: 'Eu... Estou andando!',
        emotionGuide: 'Explodindo de alegria e gratidão'
      },
      {
        id: 's4e2_08_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O homem começou a andar. E entrou no templo... andando, saltando e louvando a Deus.',
      }
    ]
  },
  {
    id: 9,
    sceneNumber: 9,
    title: 'A Multidão se Surpreende',
    subtitle: 'Admirados',
    biblicalRef: 'Atos 3:9-10',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'temple_healing',
    musicTheme: 'miracle_joy',
    visualKey: 's4e2_09_crowd_surprised',
    environmentSummary: 'Sons da multidão em choque e reverência.',
    musicDescription: 'Continuação da música de alegria.',
    soundEffects: ['crowd_murmur_surprised'],
    directorLesson: 'O espanto coletivo ao ver o poder de Deus.',
    lines: [
      {
        id: 's4e2_09_l1',
        character: 'pessoa1',
        characterLabel: 'Pessoa',
        text: 'É ele!',
      },
      {
        id: 's4e2_09_l2',
        character: 'pessoa2',
        characterLabel: 'Outra Pessoa',
        text: 'Mas ele não conseguia andar!',
      },
      {
        id: 's4e2_09_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'As pessoas ficaram admiradas.',
      }
    ]
  },
  {
    id: 10,
    sceneNumber: 10,
    title: 'Pedro Explica',
    subtitle: 'Foi Jesus',
    biblicalRef: 'Atos 3:12-13',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'temple_healing',
    musicTheme: 'hope_theme',
    visualKey: 's4e2_10_peter_explains',
    environmentSummary: 'Atenção voltada para Pedro.',
    musicDescription: 'Música emocional, focada no verdadeiro Herói.',
    soundEffects: [],
    directorLesson: 'Garantir que a glória vai para Jesus, demonstrando a humildade do apóstolo.',
    lines: [
      {
        id: 's4e2_10_l1',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Por que vocês estão olhando para nós como se tivéssemos feito isso? Foi Jesus.',
        emotionGuide: 'Enérgico e verdadeiro'
      },
      {
        id: 's4e2_10_l2',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Deus glorificou Jesus.',
      },
      {
        id: 's4e2_10_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Pedro aproveitou aquele momento para falar sobre Jesus.',
      }
    ]
  },
  {
    id: 11,
    sceneNumber: 11,
    title: 'Pedro Prega',
    subtitle: 'O novo líder',
    biblicalRef: 'Atos 3:15',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'temple_healing',
    musicTheme: 'mission_theme',
    visualKey: 's4e2_11_peter_preaches',
    environmentSummary: 'Multidão em silêncio ouvindo atentamente.',
    musicDescription: 'Música de missão.',
    soundEffects: [],
    directorLesson: 'Mostrar a coragem adquirida de Pedro ao falar.',
    lines: [
      {
        id: 's4e2_11_l1',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Jesus está vivo. Deus o ressuscitou. E sua mensagem é para todos.',
      },
      {
        id: 's4e2_11_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Pedro já não era aquele homem que tinha medo de falar. Agora ele anunciava sua fé com coragem.',
      }
    ]
  },
  {
    id: 12,
    sceneNumber: 12,
    title: 'A Oposição',
    subtitle: 'Prisão',
    biblicalRef: 'Atos 4:1-3',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'sanhedrin_room',
    musicTheme: 'tense_minimal',
    visualKey: 's4e2_12_opposition',
    environmentSummary: 'Passos firmes dos guardas, porta de prisão se fechando.',
    musicDescription: 'Música fica tensa.',
    soundEffects: ['footsteps', 'prison_door_close'],
    directorLesson: 'Introduzir a oposição sem exagerar ou assustar, apenas para gerar a tensão da provação.',
    lines: [
      {
        id: 's4e2_12_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas nem todos ficaram felizes. Algumas autoridades prenderam Pedro e João.',
      }
    ]
  },
  {
    id: 13,
    sceneNumber: 13,
    title: 'Diante das Autoridades',
    subtitle: 'A Provação',
    biblicalRef: 'Atos 4:7-10',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'sanhedrin_room',
    musicTheme: 'tense_minimal',
    visualKey: 's4e2_13_authorities',
    environmentSummary: 'Sala ampla, silêncio solene.',
    musicDescription: 'A música começa a crescer.',
    soundEffects: [],
    directorLesson: 'A provação da coragem de Pedro.',
    lines: [
      {
        id: 's4e2_13_l1',
        character: 'autoridade',
        characterLabel: 'Autoridade',
        text: 'Com que poder vocês fizeram isso?',
        emotionGuide: 'Firme e sério'
      },
      {
        id: 's4e2_13_l2',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Foi em nome de Jesus Cristo.',
        emotionGuide: 'Após uma respiração profunda, responde com firmeza inabalável'
      }
    ]
  },
  {
    id: 14,
    sceneNumber: 14,
    title: 'A Coragem de Pedro',
    subtitle: 'A Declaração',
    biblicalRef: 'Atos 4:20',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'sanhedrin_room',
    musicTheme: 'courage_theme',
    visualKey: 's4e2_14_courage',
    environmentSummary: 'O impacto da declaração corta o silêncio.',
    musicDescription: 'O MAIOR CRESCIMENTO MUSICAL DO EPISÓDIO. Coral infantil suave e cordas vibrantes.',
    soundEffects: [],
    directorLesson: 'O clímax emocional da transformação de Pedro: de covarde que nega Jesus, a homem que O defende diante dos mais poderosos.',
    lines: [
      {
        id: 's4e2_14_l1',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Não podemos deixar de falar sobre aquilo que vimos e ouvimos.',
      },
      {
        id: 's4e2_14_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Pedro estava diante de autoridades. Mas não voltou atrás.',
      }
    ]
  },
  {
    id: 15,
    sceneNumber: 15,
    title: 'Eles Saem',
    subtitle: 'Alívio',
    biblicalRef: 'Atos 4:21-23',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'jerusalem_street',
    musicTheme: 'hope_theme',
    visualKey: 's4e2_15_leave',
    environmentSummary: 'Portas se abrindo, som da rua.',
    musicDescription: 'Música de alívio e companheirismo.',
    soundEffects: ['door_open'],
    directorLesson: 'O companheirismo vitorioso de Pedro e João.',
    lines: [
      {
        id: 's4e2_15_l1',
        character: 'joao',
        characterLabel: 'João',
        text: 'Conseguimos.',
        emotionGuide: 'Aliviado e grato'
      },
      {
        id: 's4e2_15_l2',
        character: 'pedro',
        characterLabel: 'Pedro',
        text: 'Deus nos ajudou.',
      }
    ]
  },
  {
    id: 16,
    sceneNumber: 16,
    title: 'A Igreja Ora',
    subtitle: 'A força da união',
    biblicalRef: 'Atos 4:24-31',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'church_prayer',
    musicTheme: 'church_theme',
    visualKey: 's4e2_16_church_prays',
    environmentSummary: 'Pessoas reunidas orando suavemente.',
    musicDescription: 'Música suave da igreja.',
    soundEffects: ['crowd_prayer_soft'],
    directorLesson: 'A igreja unida pede coragem para continuar o trabalho.',
    lines: [
      {
        id: 's4e2_16_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Quando voltaram para os outros cristãos... todos oraram.',
      },
      {
        id: 's4e2_16_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E pediram coragem para continuar anunciando a mensagem.',
      }
    ]
  },
  {
    id: 17,
    sceneNumber: 17,
    title: 'Uma Igreja Que Cuidava',
    subtitle: 'Serviço',
    biblicalRef: 'Atos 4:32-35',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'early_church',
    musicTheme: 'church_theme',
    visualKey: 's4e2_17_church_cares',
    environmentSummary: 'A comunidade compartilhando e se cuidando.',
    musicDescription: 'Tema da Igreja acolhedor.',
    soundEffects: ['eating_together'],
    directorLesson: 'Mostrar o amor prático entre os cristãos.',
    lines: [
      {
        id: 's4e2_17_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Aquela primeira comunidade também aprendeu a cuidar uns dos outros. Compartilhavam. Oravam. Ensinavam. E ajudavam quem precisava.',
      }
    ]
  },
  {
    id: 18,
    sceneNumber: 18,
    title: 'A Lição de Pedro',
    subtitle: 'A mudança',
    biblicalRef: '',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'early_church',
    musicTheme: 'hope_theme',
    visualKey: 's4e2_18_lesson',
    environmentSummary: 'Resumo das virtudes ensinadas.',
    musicDescription: 'Música emocional de lição.',
    soundEffects: [],
    directorLesson: 'Sintetizar o episódio: de pescador impulsivo a herói focado.',
    lines: [
      {
        id: 's4e2_18_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Pedro nos ensina que uma pessoa pode mudar. Aquele pescador impulsivo... tornou-se um homem corajoso.',
      },
      {
        id: 's4e2_18_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Não porque ficou perfeito. Mas porque continuou aprendendo e confiando em Deus.',
      }
    ]
  },
  {
    id: 19,
    sceneNumber: 19,
    title: 'Para as Crianças',
    subtitle: 'Pequenas atitudes',
    biblicalRef: '',
    durationLabel: '25 segundos',
    estimatedDurationSec: 25,
    ambientType: 'early_church',
    musicTheme: 'hope_theme',
    visualKey: 's4e2_19_children',
    environmentSummary: 'Linguagem direta para o ouvinte.',
    musicDescription: 'Continuação.',
    soundEffects: [],
    directorLesson: 'Instrução prática para as crianças em seu dia a dia.',
    lines: [
      {
        id: 's4e2_19_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Talvez você pense... "Eu sou pequeno demais. Eu não consigo. Eu não sei o que fazer."',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e2_19_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Pedro também precisou aprender. Comece com pequenas atitudes.',
      },
      {
        id: 's4e2_19_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Seja honesto. Ajude alguém. Peça desculpas quando errar. Tenha coragem para fazer o que é certo.',
      }
    ]
  },
  {
    id: 20,
    sceneNumber: 20,
    title: 'A Frase Marcante',
    subtitle: 'Deus trabalha com pessoas dispostas',
    biblicalRef: '',
    durationLabel: '15 segundos',
    estimatedDurationSec: 15,
    ambientType: 'early_church',
    musicTheme: 'church_theme',
    visualKey: 's4e2_20_phrase',
    environmentSummary: 'O fechamento inspirador.',
    musicDescription: 'Música suave, porém edificante.',
    soundEffects: [],
    directorLesson: 'A grande lição do episódio.',
    lines: [
      {
        id: 's4e2_20_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Deus não procura pessoas perfeitas. Ele pode trabalhar através de pessoas dispostas a aprender, servir e fazer o bem.',
      }
    ]
  },
  {
    id: 21,
    sceneNumber: 21,
    title: 'Montagem Cinematográfica',
    subtitle: 'Uma mensagem avançando',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'early_church',
    musicTheme: 'mission_theme',
    visualKey: 's4e2_21_montage',
    environmentSummary: 'Montagem: pessoas ajudando, comunidade orando, risos de crianças, e pregações.',
    musicDescription: 'Música crescente, unindo esperança e missão.',
    soundEffects: ['children_laughing', 'bread_breaking', 'crowd_happy'],
    directorLesson: 'Preparar a expansão da igreja que levará às próximas histórias.',
    lines: [
      {
        id: 's4e2_21_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E a mensagem continuava avançando. Mas uma nova história estava prestes a surgir.',
      }
    ]
  },
  {
    id: 22,
    sceneNumber: 22,
    title: 'Gancho para Estêvão',
    subtitle: 'Serviço',
    biblicalRef: 'Atos 6',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'stephen_hook',
    musicTheme: 'stephen_theme',
    visualKey: 's4e2_22_hook',
    environmentSummary: 'A atmosfera fica um pouco mais solene e expectante.',
    musicDescription: 'Música muda para o tom emocional de Estêvão, com leve suspense no final.',
    soundEffects: ['crowd_distant'],
    directorLesson: 'Introduzir a próxima grande figura de forma solene e reverente.',
    lines: [
      {
        id: 's4e2_22_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Entre os primeiros cristãos... havia um homem chamado Estêvão. Ele era conhecido por sua fé... e por servir às pessoas.',
      },
      {
        id: 's4e2_22_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas sua coragem seria colocada à prova.',
      }
    ]
  },
  {
    id: 23,
    sceneNumber: 23,
    title: 'Próximo Episódio',
    subtitle: 'Estêvão',
    biblicalRef: '',
    durationLabel: '10 segundos',
    estimatedDurationSec: 10,
    ambientType: 'stephen_hook',
    musicTheme: 'stephen_theme',
    visualKey: 's4e2_23_next',
    environmentSummary: 'Apenas a locução do narrador.',
    musicDescription: 'Música termina suavemente.',
    soundEffects: [],
    directorLesson: 'A transição para o próximo capítulo.',
    lines: [
      {
        id: 's4e2_23_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'No próximo episódio... Estêvão. A coragem de permanecer fiel.',
      }
    ]
  },
  {
    id: 24,
    sceneNumber: 24,
    title: 'Assinatura',
    subtitle: 'Toon Tales Kids',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'toon_tales_jingle',
    musicTheme: 'signature_jingle',
    visualKey: 's4e2_24_outro',
    environmentSummary: 'O encerramento oficial.',
    musicDescription: 'O jingle clássico entra glorioso.',
    soundEffects: ['toon_tales_jingle'],
    directorLesson: 'Finalizar com a energia inesgotável e alegre da série.',
    lines: [
      {
        id: 's4e2_24_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E essa foi mais uma aventura da Bíblia em Áudio.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e2_24_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a história ainda não terminou...',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's4e2_24_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma nova aventura está esperando por você.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's4e2_24_l4',
        character: 'child',
        characterLabel: 'Crianças',
        text: 'TOON TALES KIDS!',
        emotionGuide: 'Em coro feliz e forte'
      },
      {
        id: 's4e2_24_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Histórias que ensinam, aventuras que transformam!',
      }
    ]
  }
];

export const PEDRO_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    dayLabel: 'O Pescador',
    question: 'O que Pedro fazia antes de conhecer e seguir Jesus?',
    options: ['Ele era um soldado romano', 'Ele era um rei muito poderoso', 'Ele era um pescador simples de barco e redes', 'Ele era um médico famoso'],
    correctIndex: 2,
    explanation: 'Antes de se tornar um grande líder da Igreja que ajudaria as pessoas a conhecer Jesus, Pedro trabalhava no mar da Galileia como um simples pescador.',
    biblicalVerse: 'Mateus 4:18-19',
  },
  {
    id: 2,
    dayLabel: 'Na Porta do Templo',
    question: 'O que Pedro e João fizeram por um homem que não podia andar, que pedia ajuda?',
    options: ['Deram a ele uma grande quantia de dinheiro', 'Em nome de Jesus Cristo, Pedro disse para ele se levantar e andar', 'Levaram o homem de barco para passear', 'Deram muita comida para ele'],
    correctIndex: 1,
    explanation: 'Pedro não tinha prata nem ouro, mas pelo poder de Deus, ele curou o homem em nome de Jesus, e ele começou a andar, saltar e louvar a Deus!',
    biblicalVerse: 'Atos 3:6-8',
  },
  {
    id: 3,
    dayLabel: 'A Quem Foi a Glória?',
    question: 'O que Pedro disse quando as pessoas começaram a ficar admiradas pelo milagre?',
    options: ['Ele disse que era o mais poderoso do mundo', 'Ele disse que eles não fizeram o milagre, foi Jesus quem curou o homem', 'Ele fugiu correndo', 'Ele disse que o homem fingiu a cura'],
    correctIndex: 1,
    explanation: 'Pedro foi humilde e não assumiu a glória para si mesmo. Ele ensinou à multidão que foi Jesus quem deu forças àquele homem!',
    biblicalVerse: 'Atos 3:12-16',
  },
  {
    id: 4,
    dayLabel: 'Frente às Autoridades',
    question: 'Quando algumas autoridades prenderam Pedro e João, o que eles responderam com coragem?',
    options: ['"Por favor, vamos parar de falar sobre Jesus!"', '"Nós vamos construir outro templo."', '"Não podemos deixar de falar sobre aquilo que vimos e ouvimos."', '"Nós prometemos ser pescadores novamente."'],
    correctIndex: 2,
    explanation: 'Antes, Pedro teve medo. Mas agora, ele tinha tanta fé e coragem dada pelo Espírito Santo que não teve medo de dizer a verdade diante das autoridades!',
    biblicalVerse: 'Atos 4:19-20',
  },
  {
    id: 5,
    dayLabel: 'O Crescimento de Pedro',
    question: 'O que aprendemos com os erros e as atitudes de Pedro?',
    options: ['Que nunca mais podemos errar para ajudar os outros', 'Que devemos ter sempre as respostas certas', 'Que a coragem não tem valor', 'Que não precisamos ser perfeitos para Deus trabalhar em nós se estivermos dispostos a aprender'],
    correctIndex: 3,
    explanation: 'Assim como Pedro errou e teve que aprender a crescer e ter coragem, nós também podemos ser falhos, mas se confiarmos em Deus, Ele nos usa para fazer o bem!',
    biblicalVerse: 'Lucas 22:31-32',
  }
];
