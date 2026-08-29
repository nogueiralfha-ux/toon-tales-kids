import { Scene, QuizQuestion } from '../types';

export const EPISODE_META_T5E1 = {
  id: 't5e1',
  title: 'Enoque',
  subtitle: 'O Homem que Andou com Deus',
  biblicalText: 'Gênesis 5:21–24; Hebreus 11:5; Judas 1:14–15',
  durationLabel: '18 min',
  moralLesson: 'Andar com Deus não é fazer coisas para aparecer aos outros; é escolher a presença amorosa de Deus em cada pequeno momento do seu dia.',
};

export const ENOCH_SCENES: Scene[] = [
  {
    id: 1,
    sceneNumber: 1,
    title: 'Abertura',
    subtitle: 'Um Mundo Agitado e Barulhento',
    biblicalRef: 'Gênesis 5:21',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'ancient_city',
    musicTheme: 'tense_minimal',
    visualKey: 's5e1_01_intro',
    environmentSummary: 'Vozes distantes, gritos de pessoas apressadas, ferramentas de ferro forjado soando duramente. O clima de uma geração distante de Deus.',
    musicDescription: 'Música minimalista com percussão metálica seca e uma corda grave que expressa vazio e desassossego.',
    soundEffects: ['city_noise', 'metal_hammer', 'distant_arguments'],
    directorLesson: 'Evidenciar o contraste entre a confusão ruidosa do mundo sem Deus e a serenidade da presença divina.',
    lines: [
      {
        id: 's5e1_01_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Há muitos e muitos séculos, nos primeiros passos da história humana, as cidades cresciam depressa.',
      },
      {
        id: 's5e1_01_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Havia muito barulho, pessoas competindo para ver quem era mais forte, e quase ninguém parava para agradecer ao Criador.',
        pauseAfter: 'PAUSA',
      },
      {
        id: 's5e1_01_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'As pessoas viviam ocupadas demais consigo mesmas... e o coração daquela geração foi se tornando duro como pedra.',
      }
    ]
  },
  {
    id: 2,
    sceneNumber: 2,
    title: 'O Homem na Colina',
    subtitle: 'Quem era Enoque?',
    biblicalRef: 'Gênesis 5:21',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'wildlife_forest',
    musicTheme: 'pastoral_growth',
    visualKey: 's5e1_02_generation',
    environmentSummary: 'O ruído da cidade se afasta. Surge o canto doce de pássaros ao amanhecer e uma brisa suave soprando as folhas de uma figueira.',
    musicDescription: 'Uma melodia acústica nobre de violão de cordas de nylon e flauta de madeira doce.',
    soundEffects: ['morning_birds', 'gentle_breeze', 'soft_footsteps'],
    directorLesson: 'Apresentar Enoque como alguém que escolhe o silêncio da oração em vez do tumulto do orgulho.',
    lines: [
      {
        id: 's5e1_02_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas longe do tumulto das praças barulhentas, havia um homem simples e atento.',
        soundCue: 'vento suave e passarinhos',
      },
      {
        id: 's5e1_02_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'O nome dele era Enoque.',
        pauseAfter: 'PAUSA',
      },
      {
        id: 's5e1_02_l3',
        character: 'enoque',
        characterLabel: 'Enoque',
        text: 'Como o Senhor é bom... Toda manhã, quando o sol desponta nas colinas, posso sentir a Tua fidelidade cercando cada detalhe.',
      }
    ]
  },
  {
    id: 3,
    sceneNumber: 3,
    title: 'O Nascimento de Metusalém',
    subtitle: 'O Amor que Desperta o Coração',
    biblicalRef: 'Gênesis 5:21–22',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'sabbath_peace',
    musicTheme: 'warm_discovery',
    visualKey: 's5e1_03_enoch_walk',
    environmentSummary: 'O choro suave e reconfortante de um bebê recém-nascido em uma tenda de pedra e madeira acolhedora.',
    musicDescription: 'Piano delicado e violoncelo suave transbordando ternura e responsabilidade sagrada.',
    soundEffects: ['baby_gentle_coo', 'cloth_swaddling', 'family_whispers'],
    directorLesson: 'Mostrar como a família e a chegada de um filho despertam em Enoque o desejo de viver com ainda mais integridade diante de Deus.',
    lines: [
      {
        id: 's5e1_03_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Aos sessenta e cinco anos, aconteceu algo maravilhoso na tenda de Enoque. Nasceu o seu primeiro filho!',
        soundCue: 'bebe com carinho',
      },
      {
        id: 's5e1_03_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Enoque segurou aquele pequeno menino nos braços e lhe deu o nome de Metusalém.',
        pauseAfter: 'PAUSA',
      },
      {
        id: 's5e1_03_l3',
        character: 'enoque',
        characterLabel: 'Enoque',
        text: 'Meu pequeno filho... Que você aprenda que neste mundo de tantas vozes confusas, a única voz que verdadeiramente traz paz é a voz de Deus.',
      }
    ]
  },
  {
    id: 4,
    sceneNumber: 4,
    title: 'A Grande Decisão',
    subtitle: 'Escolhendo Andar com Deus',
    biblicalRef: 'Gênesis 5:22',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'blooming_forest',
    musicTheme: 'sacred_piano_strings',
    visualKey: 's5e1_04_fatherhood',
    environmentSummary: 'Caminhada sobre folhas secas e terra fértil. A luz dourada da manhã banha a colina com esperança límpida.',
    musicDescription: 'Arranjo comovente de piano e cordas que expressa uma consagração sincera e profunda.',
    soundEffects: ['earth_steps', 'rustling_leaves'],
    directorLesson: 'Andar com Deus não foi um evento isolado, mas uma decisão diária mantida ano após ano.',
    lines: [
      {
        id: 's5e1_04_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A partir daquele dia, algo solene se firmou no coração de Enoque. A Bíblia registra com simplicidade e beleza única:',
      },
      {
        id: 's5e1_04_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: '"E Enoque andou com Deus."',
        soundCue: 'brilho suave',
        pauseAfter: 'PAUSA DRAMATICA',
      },
      {
        id: 's5e1_04_l3',
        character: 'enoque',
        characterLabel: 'Enoque',
        text: 'Senhor, eu não quero seguir o caminho da violência nem da ganância. Onde quer que meus pés pisem, quero dar cada passo na Tua sagrada companhia.',
      }
    ]
  },
  {
    id: 5,
    sceneNumber: 5,
    title: 'Os Pequenos Momentos Diários',
    subtitle: 'A Amizade na Rotina Comum',
    biblicalRef: 'Gênesis 5:22; Salmos 1:1–2',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'field_sheep',
    musicTheme: 'wonder_nature',
    visualKey: 's5e1_05_decision',
    environmentSummary: 'O som da enxada trabalhando na horta, balido suave de ovelhas, água jorrando de um cântaro para a família.',
    musicDescription: 'Música calorosa, alegre e pastoral, demonstrando que a santidade é vivida na vida real.',
    soundEffects: ['flowing_water', 'sheep_gentle', 'wood_chores'],
    directorLesson: 'Ensinar às crianças que Deus quer ser nosso melhor amigo nas tarefas simples: arrumar a cama, ajudar em casa, conversar com Ele ao brincar.',
    lines: [
      {
        id: 's5e1_05_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas o que significa "andar com Deus"? Será que Enoque ficava o dia todo fechado em um quarto escuro?',
        isInteractivePrompt: true,
      },
      {
        id: 's5e1_05_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Não! Enoque plantava o seu trigo, cuidava das suas ovelhas, brincava com os filhos e sentava-se à mesa com a família.',
      },
      {
        id: 's5e1_05_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Só que em cada momento, ele conversava com Deus. Em cada escolha, ele perguntava: "Senhor, isto agrada ao Teu coração?"',
        pauseAfter: 'PAUSA',
      }
    ]
  },
  {
    id: 6,
    sceneNumber: 6,
    title: 'A Zombaria da Cidade',
    subtitle: 'Por que você não é igual a nós?',
    biblicalRef: 'Judas 1:14–15',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'ancient_city',
    musicTheme: 'tense_chords',
    visualKey: 's5e1_06_mockery',
    environmentSummary: 'Passos apressados, gargalhadas desdenhosas de homens da cidade antiga observando Enoque passar pacificamente.',
    musicDescription: 'Cordas tensas e secas marcando o preconceito da multidão.',
    soundEffects: ['distant_laughter', 'whispering_crowd'],
    directorLesson: 'Ajudar a criança a lidar com a pressão dos colegas quando escolhe não mentir, não zombar e fazer o que é correto.',
    lines: [
      {
        id: 's5e1_06_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'As pessoas da região começaram a reparar no jeito sereno de Enoque. Alguns não entendiam nada e zombavam abertamente.',
      },
      {
        id: 's5e1_06_l2',
        character: 'homem_cidade',
        characterLabel: 'Homem da Cidade',
        text: 'Ei, Enoque! Por que você anda sempre sozinho olhando para o céu? Venha lutar conosco, venha acumular ouro e poder!',
      },
      {
        id: 's5e1_06_l3',
        character: 'enoque',
        characterLabel: 'Enoque',
        text: 'O verdadeiro tesouro não está nas brigas nem no ouro que enferruja, meus amigos. A verdadeira riqueza é a paz de ter Deus como amigo.',
        pauseAfter: 'PAUSA',
      }
    ]
  },
  {
    id: 7,
    sceneNumber: 7,
    title: 'O Testemunho da Verdade',
    subtitle: 'Ensinando Sobre o Criador Justo',
    biblicalRef: 'Judas 1:14–15; Hebreus 11:5',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'early_church',
    musicTheme: 'courage_theme',
    visualKey: 's5e1_07_faith_action',
    environmentSummary: 'Um grupo de crianças e jovens sentados na relva ao entardecer ouvindo Enoque explicar as constelações.',
    musicDescription: 'Cordas calorosas e nobres que transmitem autoridade afetuosa e firmeza de caráter.',
    soundEffects: ['campfire_crackling', 'night_crickets'],
    directorLesson: 'Mostrar que quem anda com Deus transmite a verdade com mansidão, sem arrogância e sem violência.',
    lines: [
      {
        id: 's5e1_07_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Enoque não tinha vergonha de sua fé. Ele falava com coragem e amor para quem quisesse ouvir.',
      },
      {
        id: 's5e1_07_l2',
        character: 'enoque',
        characterLabel: 'Enoque',
        text: 'O Senhor Deus é justo e conhece cada intenção dos nossos pensamentos. Ele há de julgar a maldade com santidade, mas acolhe com carinho todo aquele que busca a verdade.',
        pauseAfter: 'PAUSA',
      },
      {
        id: 's5e1_07_l3',
        character: 'metusalem',
        characterLabel: 'Metusalém (Menino)',
        text: 'Papai, quando você fala de Deus, parece que Ele está sentado aqui bem pertinho de nós!',
      },
      {
        id: 's5e1_07_l4',
        character: 'enoque',
        characterLabel: 'Enoque',
        text: 'E Ele está, meu filho! Mais perto do que o próprio ar que nós respiramos.',
      }
    ]
  },
  {
    id: 8,
    sceneNumber: 8,
    title: 'Trezentos Anos de Fidelidade',
    subtitle: 'Uma Amizade que Não Envelheceu',
    biblicalRef: 'Gênesis 5:22',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'sabbath_peace',
    musicTheme: 'pure_serenity',
    visualKey: 's5e1_08_sunset_walk',
    environmentSummary: 'O vento nas árvores, as estações do ano se alternando suavemente — sol de verão, folhas caindo no outono, flores desabrochando na primavera.',
    musicDescription: 'Uma progressão harmônica sublime de harpa e violinos que evoca a passagem do tempo em perfeita harmonia com Deus.',
    soundEffects: ['gentle_wind_chimes', 'nature_transition'],
    directorLesson: 'Destacar que a constância diária em amar a Deus é a maior vitória da vida de um ser humano.',
    lines: [
      {
        id: 's5e1_08_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Os anos foram passando... e a Bíblia relata que Enoque andou com Deus por trezentos anos.',
        soundCue: 'passagem de tempo suave',
      },
      {
        id: 's5e1_08_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Pense nisso! Trezentos anos de lealdade, sem recuar, sem cansar de ser amigo do Criador.',
        pauseAfter: 'PAUSA',
      },
      {
        id: 's5e1_08_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A cada dia que passava, Enoque parecia pertencer mais ao céu do que a este mundo terreno.',
      }
    ]
  },
  {
    id: 9,
    sceneNumber: 9,
    title: 'O Passeio Inesquecível',
    subtitle: 'Um Entardecer Dourado',
    biblicalRef: 'Gênesis 5:24',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'celestial_sky',
    musicTheme: 'celestial_wonder',
    visualKey: 's5e1_09_climax_take',
    environmentSummary: 'Um pôr do sol inigualável com tons dourados, âmbar e violeta. A atmosfera brilha com um calor sereno e celestial.',
    musicDescription: 'Coro suave angelical acompanhado de notas agudas cristalinas de piano e cordas etéreas.',
    soundEffects: ['celestial_breeze', 'light_shimmer'],
    directorLesson: 'Preparar o clímax da trasladação de Enoque com máxima beleza poética e reverência sagrada.',
    lines: [
      {
        id: 's5e1_09_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Chegou então um dia inesquecível. O sol da tarde descia suavemente pelas colinas banhando toda a terra com uma luz dourada brilhante.',
        soundCue: 'brisa e luz dourada',
      },
      {
        id: 's5e1_09_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Enoque saiu para sua caminhada diária com Deus, conversando com o coração transbordando de gratidão.',
      },
      {
        id: 's5e1_09_l3',
        character: 'enoque',
        characterLabel: 'Enoque',
        text: 'Senhor, a Tua presença é a minha alegria mais profunda... Hoje sinto a Tua luz tão viva, como se as portas do céu estivessem abertas sobre a minha cabeça.',
        pauseAfter: 'PAUSA DRAMATICA',
      }
    ]
  },
  {
    id: 10,
    sceneNumber: 10,
    title: 'O Grande Mistério',
    subtitle: 'Deus o Tomou Para Si!',
    biblicalRef: 'Gênesis 5:24; Hebreus 11:5',
    durationLabel: '22 segundos',
    estimatedDurationSec: 22,
    ambientType: 'celestial_stars',
    musicTheme: 'emotional_climax',
    visualKey: 's5e1_09_climax_take',
    environmentSummary: 'Uma onda de luz radiante e suave envolve o ambiente. Ouve-se uma brisa sobrenatural quente e um acorde celestial arrebatador.',
    musicDescription: 'Grande crescendo sinfônico límpido que deságua em uma calma sobrenatural de violoncelos e harpa.',
    soundEffects: ['sparkle_burst', 'whoosh_soft', 'celestial_bells'],
    directorLesson: 'Retratar a trasladação de Enoque não com medo ou espanto negativo, mas como a mais doce coroação de uma vida de amizade íntima com Deus.',
    lines: [
      {
        id: 's5e1_10_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E então... algo extraordinário aconteceu. Algo que nunca antes havia sido visto na história dos homens.',
        soundCue: 'brilho radiante',
      },
      {
        id: 's5e1_10_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A amizade entre Enoque e Deus era tão próxima, tão pura e tão profunda...',
        pauseAfter: 'PAUSA',
      },
      {
        id: 's5e1_10_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'que a Bíblia declara com poucas e eternas palavras:',
        pauseAfter: 'PAUSA',
      },
      {
        id: 's5e1_10_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: '"Enoque andou com Deus; e já não foi mais visto, porque Deus o tomou para si!"',
        soundCue: 'acorde triunfal e silencio santo',
        pauseAfter: 'PAUSA DRAMATICA',
      }
    ]
  },
  {
    id: 11,
    sceneNumber: 11,
    title: 'A Procura e a Certeza',
    subtitle: 'Onde está Enoque?',
    biblicalRef: 'Hebreus 11:5',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'blooming_forest',
    musicTheme: 'sacred_piano_strings',
    visualKey: 's5e1_10_missing',
    environmentSummary: 'Passos correndo pelas campinas ao cair da noite. A voz de Metusalém e dos vizinhos chamando por Enoque.',
    musicDescription: 'Piano suave com cordas contemplativas que trazem paz e conforto reconfortante.',
    soundEffects: ['footsteps_hurried', 'night_owl', 'peaceful_crickets'],
    directorLesson: 'A ausência física de Enoque é explicada pelo mistério da fé: ele não provou a morte, foi levado direto à presença de Deus.',
    lines: [
      {
        id: 's5e1_11_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Quando a noite caiu, a família esperou por ele à porta da tenda. Os amigos procuraram pelas colinas, nos vales e junto aos riachos.',
      },
      {
        id: 's5e1_11_l2',
        character: 'metusalem',
        characterLabel: 'Metusalém',
        text: 'Papai! Onde você está? A tocha está acesa e a mesa está posta!',
      },
      {
        id: 's5e1_11_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles procuraram por toda parte... mas ninguém encontrou Enoque.',
        pauseAfter: 'PAUSA',
      },
      {
        id: 's5e1_11_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele não havia caído. Não havia sofrido nenhum mal. Deus, o seu grande amigo, o havia levado diretamente para o Seu lar eterno!',
      }
    ]
  },
  {
    id: 12,
    sceneNumber: 12,
    title: 'O Testemunho que Ficou',
    subtitle: 'Ele Agradou a Deus!',
    biblicalRef: 'Hebreus 11:5–6',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'sabbath_peace',
    musicTheme: 'hopeful_melody',
    visualKey: 's5e1_11_testimony',
    environmentSummary: 'A brisa no alto da colina, sob um céu pontilhado por milhares de estrelas faiscantes.',
    musicDescription: 'Uma orquestração luminosa e comovente que ressalta a grandeza do testemunho de Enoque.',
    soundEffects: ['star_sparkles', 'night_sky_wind'],
    directorLesson: 'O maior elogio que alguém pode receber no céu e na terra é ter agradado ao coração de Deus.',
    lines: [
      {
        id: 's5e1_12_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Muitos séculos depois, o livro de Hebreus escreveu a frase mais linda sobre a vida desse herói:',
        soundCue: 'sino celestial',
      },
      {
        id: 's5e1_12_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: '"Pela fé, Enoque foi trasladado para não ver a morte... pois antes da sua trasladação, alcançou testemunho de haver agradado a Deus!"',
        pauseAfter: 'PAUSA DRAMATICA',
      },
      {
        id: 's5e1_12_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Que legado maravilhoso! O segredo de Enoque não era a sua força física, nem a sua fama... era o prazer de agradar a Deus.',
      }
    ]
  },
  {
    id: 13,
    sceneNumber: 13,
    title: 'A Lição Para a Sua Vida',
    subtitle: 'Como Andar com Deus Hoje?',
    biblicalRef: 'Miqueias 6:8; Colossenses 2:6',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'early_church',
    musicTheme: 'gentle_teaching',
    visualKey: 's5e1_12_lesson',
    environmentSummary: 'Uma luz acolhedora e intimista de quarto infantil, aproximando o narrador como um mentor carinhoso.',
    musicDescription: 'Violão acústico suave e flauta doce em clima de ensinamento fraterno.',
    soundEffects: ['warm_wind', 'acoustic_strum'],
    directorLesson: 'Trazer a aplicação prática para o cotidiano infantil: escola, brincadeiras, relacionamento com irmãos e pais.',
    lines: [
      {
        id: 's5e1_13_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Agora pense comigo: você não precisa esperar trezentos anos para começar a andar com Deus!',
        isInteractivePrompt: true,
      },
      {
        id: 's5e1_13_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Você pode andar com Ele hoje mesmo: quando escolhe falar a verdade em vez de uma mentira fácil.',
      },
      {
        id: 's5e1_13_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Quando você ajuda um amigo que está triste na escola. Quando você dobra os joelhos à noite e agradece pelo seu dia.',
      },
      {
        id: 's5e1_13_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Andar com Deus é colocar a sua mão na mão dEle e dizer: "Senhor, vamos juntos neste dia!"',
        pauseAfter: 'PAUSA',
      }
    ]
  },
  {
    id: 14,
    sceneNumber: 14,
    title: 'Momento Interativo',
    subtitle: 'A Sua Oração Sincera',
    biblicalRef: 'Salmos 27:8',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'bible_quiet',
    musicTheme: 'introspective',
    visualKey: 's5e1_13_children',
    environmentSummary: 'Silêncio sereno com notas graves e calmas de violoncelo.',
    musicDescription: 'Uma melodia reflexiva que convida a criança a orar e responder com o coração.',
    soundEffects: ['heartbeat_pulse'],
    directorLesson: 'Facilitar uma oração simples e verdadeira guiada pela voz da criança.',
    lines: [
      {
        id: 's5e1_14_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Que tal fazermos juntos a oração de Enoque agora?',
        isInteractivePrompt: true,
        pauseAfter: 'PAUSA',
      },
      {
        id: 's5e1_14_l2',
        character: 'child',
        characterLabel: 'Voz da Criança',
        text: 'Querido Deus, eu também quero ser Teu amigo leal. Ensina-me a andar Contigo todos os dias, com amor, obediência e um coração puro!',
        pauseAfter: 'PAUSA',
      },
      {
        id: 's5e1_14_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Amém! Quando uma criança ora com sinceridade, o céu inteiro se alegra em responder.',
      }
    ]
  },
  {
    id: 15,
    sceneNumber: 15,
    title: 'Encerramento e Gancho',
    subtitle: 'Próximo Episódio: Jó!',
    biblicalRef: 'Jó 1:1; Hebreus 11:6',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'sabbath_peace',
    musicTheme: 'signature_jingle',
    visualKey: 's5e1_14_hook_job',
    environmentSummary: 'O tema musical oficial de Toon Tales Kids ressoa triunfante com sinos festivos, anunciando os próximos desafios da fé.',
    musicDescription: 'Jingle alegre e aventureiro seguido por um acorde misterioso e solene anunciando o próximo herói: Jó.',
    soundEffects: ['toon_tales_chime', 'desert_wind_hook'],
    directorLesson: 'Criar curiosidade para o Episódio 31 (Jó) reforçando a mensagem de fidelidade mesmo em meio às lágrimas.',
    lines: [
      {
        id: 's5e1_15_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E assim conhecemos a extraordinária história do primeiro Herói da Fé da nossa quinta temporada: Enoque, o homem que andou com Deus!',
        soundCue: 'jingle oficial',
      },
      {
        id: 's5e1_15_l2',
        character: 'child',
        characterLabel: 'Voz Infantil',
        text: 'TOON TALES KIDS! A Bíblia em Áudio!',
      },
      {
        id: 's5e1_15_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E no próximo episódio... nós vamos conhecer outro homem de fibra incomparável: JÓ! Aquele que mesmo em meio às maiores tempestades e perdas, nunca deixou de clamar: "Eu sei que o meu Redentor vive!"',
        soundCue: 'vento no deserto e harpa',
      },
      {
        id: 's5e1_15_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Até o próximo episódio de Heróis da Fé!',
        pauseAfter: 'PAUSA LONGA',
      }
    ]
  }
];

export const ENOCH_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    dayLabel: 'Pergunta 1 • Gênesis 5:24',
    question: 'Qual é a característica marcante de Enoque destacada no livro de Gênesis 5?',
    options: [
      'Ele construiu os muros mais altos de sua cidade',
      'Ele andou com Deus durante toda a sua vida',
      'Ele foi um general militar temido por todos',
      'Ele era um marinheiro navegador dos mares'
    ],
    correctIndex: 1,
    correctAnswer: 1,
    explanation: 'Gênesis 5:22 e 24 afirmam duas vezes que "Enoque andou com Deus", demonstrando sua íntima amizade e comunhão com o Senhor.',
    biblicalVerse: 'Gênesis 5:22, 24'
  },
  {
    id: 2,
    dayLabel: 'Pergunta 2 • Família',
    question: 'Qual foi o nome do filho de Enoque que se tornou o homem que viveu mais anos na Bíblia?',
    options: [
      'Metusalém',
      'Noé',
      'Caim',
      'Lameque'
    ],
    correctIndex: 0,
    correctAnswer: 0,
    explanation: 'Metusalém nasceu quando Enoque tinha 65 anos e viveu 969 anos (Gênesis 5:27).',
    biblicalVerse: 'Gênesis 5:21, 27'
  },
  {
    id: 3,
    dayLabel: 'Pergunta 3 • O Milagre',
    question: 'O que aconteceu de extraordinário com Enoque ao final de sua caminhada terrena?',
    options: [
      'Ele foi derrotado por um exército inimigo',
      'Ele já não foi mais visto, porque Deus o tomou para Si sem que visse a morte',
      'Ele se escondeu em uma caverna para sempre',
      'Ele viajou para o Egito e nunca mais voltou'
    ],
    correctIndex: 1,
    correctAnswer: 1,
    explanation: 'Gênesis 5:24 e Hebreus 11:5 explicam que Enoque foi trasladado por Deus para não passar pela morte física.',
    biblicalVerse: 'Gênesis 5:24'
  },
  {
    id: 4,
    dayLabel: 'Pergunta 4 • Hebreus 11:5',
    question: 'Segundo o livro de Hebreus 11:5, qual testemunho Enoque alcançou antes de ser levado por Deus?',
    options: [
      'Testemunho de ter sido o homem mais rico da época',
      'Testemunho de ter derrotado muitos gigantes',
      'Testemunho de haver agradado a Deus',
      'Testemunho de nunca ter saído de sua tenda'
    ],
    correctIndex: 2,
    correctAnswer: 2,
    explanation: 'Hebreus 11:5 declara: "pois antes da sua trasladação alcançou testemunho de haver agradado a Deus".',
    biblicalVerse: 'Hebreus 11:5'
  },
  {
    id: 5,
    dayLabel: 'Pergunta 5 • Lição Prática',
    question: 'O que a história de Enoque ensina de prático para as crianças e famílias de hoje?',
    options: [
      'Que Deus só se importa com pessoas famosas',
      'Que andar com Deus é viver em amizade com Ele na escola, em casa e em todas as escolhas diárias',
      'Que não precisamos conversar com Deus em oração',
      'Que devemos ser iguais a todas as pessoas ao nosso redor sem nos preocupar com o que é certo'
    ],
    correctIndex: 1,
    correctAnswer: 1,
    explanation: 'Andar com Deus é uma decisão de amizade contínua, praticada na verdade, na obediência, na oração e no amor ao próximo.',
    biblicalVerse: 'Miqueias 6:8'
  }
];
