import { Scene, QuizQuestion } from '../types';

export const EPISODE_META_5 = {
  id: 't1e5',
  title: 'Abraão e a Promessa',
  subtitle: 'Uma viagem de fé',
  biblicalText: 'Gênesis 12, 15, 17, 18, 21',
  durationLabel: '12 min',
  moralLesson: 'A fé não significa saber tudo o que vai acontecer. Fé significa confiar em Deus, pois Ele conhece o caminho.',
};

export const ABRAAO_SCENES: Scene[] = [
  {
    id: 1,
    sceneNumber: 1,
    title: 'Uma Voz no Silêncio',
    subtitle: 'A vida de Abrão',
    biblicalRef: 'Gênesis 12:1',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'desert_night',
    musicTheme: 'mysterious_journey',
    visualKey: 's1e5_01_silence',
    environmentSummary: 'Noite no deserto, vento muito leve e estrelas.',
    musicDescription: 'Música misteriosa e suave.',
    soundEffects: ['wind_sky'],
    directorLesson: 'Clima de mistério calmo, preparação para um grande chamado.',
    lines: [
      {
        id: 's1e5_01_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Muito tempo depois dos acontecimentos de Babel, Deus chamou um homem que vivia em uma terra distante.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's1e5_01_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Seu nome era Abrão. Ele vivia com sua família. Tinha rebanhos. Tinha servos. E tinha uma vida estabelecida.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's1e5_01_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas um dia... Deus falou com ele.',
        soundCue: 'Música diminui para um leve som de vento'
      }
    ]
  },
  {
    id: 2,
    sceneNumber: 2,
    title: 'O Chamado',
    subtitle: 'A voz de Deus',
    biblicalRef: 'Gênesis 12:1-2',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'desert_night',
    musicTheme: 'pure_serenity',
    visualKey: 's1e5_02_call',
    environmentSummary: 'Silêncio absoluto do deserto.',
    musicDescription: 'Música reduzida, quase silêncio. Acordes leves.',
    soundEffects: [],
    directorLesson: 'Serenidade e reverência ao ouvir a voz de Deus.',
    lines: [
      {
        id: 's1e5_02_l1',
        character: 'god',
        characterLabel: 'Deus',
        text: 'Saia da sua terra, do meio dos seus parentes e da casa de seu pai.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
        emotionGuide: 'Profunda, serena e amorosa'
      },
      {
        id: 's1e5_02_l2',
        character: 'god',
        characterLabel: 'Deus',
        text: 'Vá para a terra que eu lhe mostrarei. Farei de você uma grande nação. E abençoarei você.',
      },
      {
        id: 's1e5_02_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Abrão ouviu. Mas havia um problema. Deus não explicou todos os detalhes da viagem.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's1e5_02_l4',
        character: 'abraao',
        characterLabel: 'Abrão',
        text: 'Para onde vamos?',
        emotionGuide: 'Reflexivo, um pouco incerto mas não com medo'
      },
      {
        id: 's1e5_02_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Ele não sabia. Mas sabia quem estava chamando.',
      }
    ]
  },
  {
    id: 3,
    sceneNumber: 3,
    title: 'A Decisão',
    subtitle: 'Preparando a partida',
    biblicalRef: 'Gênesis 12:4',
    durationLabel: '35 segundos',
    estimatedDurationSec: 35,
    ambientType: 'desert_camp',
    musicTheme: 'adventure_discovery',
    visualKey: 's1e5_03_decision',
    environmentSummary: 'Ambiente de acampamento ganhando vida, movimento de tecidos e passos.',
    musicDescription: 'A música começa a crescer.',
    soundEffects: ['nature_sounds'],
    directorLesson: 'A determinação da fé, mesmo na incerteza.',
    lines: [
      {
        id: 's1e5_03_l1',
        character: 'abraao',
        characterLabel: 'Abrão',
        text: 'Vamos preparar tudo.',
      },
      {
        id: 's1e5_03_l2',
        character: 'sara',
        characterLabel: 'Sara',
        text: 'Vamos mesmo partir?',
        emotionGuide: 'Acolhedora, curiosa'
      },
      {
        id: 's1e5_03_l3',
        character: 'abraao',
        characterLabel: 'Abrão',
        text: 'Sim. Deus nos mostrou o caminho.',
      },
      {
        id: 's1e5_03_l4',
        character: 'sara',
        characterLabel: 'Sara',
        text: 'E você sabe para onde estamos indo?',
      },
      {
        id: 's1e5_03_l5',
        character: 'abraao',
        characterLabel: 'Abrão',
        text: 'Ele nos mostrará.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
        emotionGuide: 'Determinado e confiante'
      },
      {
        id: 's1e5_03_l6',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E assim Abrão partiu. Não porque sabia exatamente o que aconteceria. Mas porque confiava em Deus.',
      }
    ]
  },
  {
    id: 4,
    sceneNumber: 4,
    title: 'A Grande Viagem',
    subtitle: 'Atravessando o deserto',
    biblicalRef: 'Gênesis 12:5',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'desert_journey',
    musicTheme: 'adventure_discovery',
    visualKey: 's1e5_04_journey',
    environmentSummary: 'Passos na areia, camelos, ovelhas, vento do deserto.',
    musicDescription: 'Música de aventura, transmitindo vastidão e descoberta.',
    soundEffects: ['wind_sky'],
    directorLesson: 'Montagem cinematográfica de uma grande jornada épica.',
    lines: [
      {
        id: 's1e5_04_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A viagem foi longa. Eles atravessaram caminhos difíceis. Passaram por lugares desconhecidos.',
      },
      {
        id: 's1e5_04_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Montaram acampamentos. Seguiram adiante. Dia após dia. Noite após noite.',
      },
      {
        id: 's1e5_04_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E enquanto Abrão caminhava... uma promessa caminhava com ele.',
        soundCue: 'Música de aventura cresce levemente'
      }
    ]
  },
  {
    id: 5,
    sceneNumber: 5,
    title: 'A Terra Prometida',
    subtitle: 'A chegada em Canaã',
    biblicalRef: 'Gênesis 12:7',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'desert_day',
    musicTheme: 'majestic_promise',
    visualKey: 's1e5_05_promise',
    environmentSummary: 'Vento suave, pássaros cantando ao longe.',
    musicDescription: 'Música cresce, tornando-se majestosa e bela.',
    soundEffects: ['birds_chirping'],
    directorLesson: 'Um momento de paz e realização após a longa jornada.',
    lines: [
      {
        id: 's1e5_05_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Finalmente chegaram à terra de Canaã. Abrão olhou ao redor.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's1e5_05_l2',
        character: 'abraao',
        characterLabel: 'Abrão',
        text: 'Chegamos.',
        emotionGuide: 'Aliviado e grato'
      },
      {
        id: 's1e5_05_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Então Deus falou novamente.',
      },
      {
        id: 's1e5_05_l4',
        character: 'god',
        characterLabel: 'Deus',
        text: 'Esta terra darei à sua descendência.',
      },
      {
        id: 's1e5_05_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Abrão construiu um altar ao Senhor. E adorou a Deus.',
        soundCue: 'Som suave de pedras sendo colocadas umas sobre as outras'
      }
    ]
  },
  {
    id: 6,
    sceneNumber: 6,
    title: 'As Estrelas',
    subtitle: 'Contando o infinito',
    biblicalRef: 'Gênesis 15:5',
    durationLabel: '45 segundos',
    estimatedDurationSec: 45,
    ambientType: 'desert_night',
    musicTheme: 'majestic_stars',
    visualKey: 's1e5_06_stars',
    environmentSummary: 'Noite silenciosa, grilos muito suaves, som de fogueira crepitando.',
    musicDescription: 'Música contemplativa e celestial.',
    soundEffects: ['nature_sounds'],
    directorLesson: 'A cena mais bonita do episódio. Vislumbrando o tamanho da promessa.',
    lines: [
      {
        id: 's1e5_06_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Em uma noite silenciosa... Abrão saiu de sua tenda. Olhou para o céu.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's1e5_06_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Acima dele havia milhares de estrelas.',
      },
      {
        id: 's1e5_06_l3',
        character: 'god',
        characterLabel: 'Deus',
        text: 'Olhe para o céu. Conte as estrelas, se puder.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.5,
      },
      {
        id: 's1e5_06_l4',
        character: 'god',
        characterLabel: 'Deus',
        text: 'Assim será a sua descendência.',
      },
      {
        id: 's1e5_06_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Abrão olhou para o céu.',
        pauseType: 'PAUSA LONGA',
        pauseSeconds: 2.0,
      },
      {
        id: 's1e5_06_l6',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E acreditou na promessa de Deus.',
        soundCue: 'Acordes celestiais brilhantes'
      }
    ]
  },
  {
    id: 7,
    sceneNumber: 7,
    title: 'O Nome de Abraão',
    subtitle: 'Pai de muitas nações',
    biblicalRef: 'Gênesis 17:5',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'desert_night',
    musicTheme: 'hopeful_melody',
    visualKey: 's1e5_07_name',
    environmentSummary: 'Noite silenciosa.',
    musicDescription: 'Música inspiradora.',
    soundEffects: [],
    directorLesson: 'A transformação do homem e da promessa.',
    lines: [
      {
        id: 's1e5_07_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Deus continuou falando com Abrão. Deus confirmou sua aliança. E mudou seu nome.',
      },
      {
        id: 's1e5_07_l2',
        character: 'god',
        characterLabel: 'Deus',
        text: 'Seu nome não será mais Abrão. Seu nome será Abraão.',
      },
      {
        id: 's1e5_07_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Abraão significa "pai de muitas nações". Deus estava mostrando que sua promessa continuaria através das gerações.',
      }
    ]
  },
  {
    id: 8,
    sceneNumber: 8,
    title: 'A Promessa de um Filho',
    subtitle: 'A espera confiante',
    biblicalRef: 'Gênesis 17:16',
    durationLabel: '35 segundos',
    estimatedDurationSec: 35,
    ambientType: 'desert_camp',
    musicTheme: 'intimate_tent',
    visualKey: 's1e5_08_tent',
    environmentSummary: 'Ambiente aconchegante dentro da tenda. Vento fraco lá fora.',
    musicDescription: 'Música íntima, terna e reflexiva.',
    soundEffects: [],
    directorLesson: 'A dúvida humana frente ao milagre prometido.',
    lines: [
      {
        id: 's1e5_08_l1',
        character: 'sara',
        characterLabel: 'Sara',
        text: 'Abraão... Você realmente acredita que teremos um filho?',
        emotionGuide: 'Preocupada, realista'
      },
      {
        id: 's1e5_08_l2',
        character: 'abraao',
        characterLabel: 'Abraão',
        text: 'Deus prometeu.',
        emotionGuide: 'Bondoso, firme'
      },
      {
        id: 's1e5_08_l3',
        character: 'sara',
        characterLabel: 'Sara',
        text: 'Mesmo depois de tantos anos?',
      },
      {
        id: 's1e5_08_l4',
        character: 'abraao',
        characterLabel: 'Abraão',
        text: 'Sim. Eu acredito.',
      },
      {
        id: 's1e5_08_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Parecia impossível. Mas Deus havia feito uma promessa.',
      }
    ]
  },
  {
    id: 9,
    sceneNumber: 9,
    title: 'Uma Visita Inesperada',
    subtitle: 'A notícia surpreendente',
    biblicalRef: 'Gênesis 18:1-10',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'desert_day',
    musicTheme: 'warm_discovery',
    visualKey: 's1e5_09_visit',
    environmentSummary: 'Vento suave, passos na areia.',
    musicDescription: 'Trilha amigável e acolhedora.',
    soundEffects: ['nature_sounds'],
    directorLesson: 'A hospitalidade que traz a confirmação.',
    lines: [
      {
        id: 's1e5_09_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Um dia, Abraão recebeu visitantes. Ele correu para recebê-los. Preparou comida. Ofereceu água. Mostrou hospitalidade.',
      },
      {
        id: 's1e5_09_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Durante a conversa, uma promessa foi confirmada.',
      },
      {
        id: 's1e5_09_l3',
        character: 'god',
        characterLabel: 'Deus',
        text: 'Na mesma época, no próximo ano, Sara terá um filho.',
      },
      {
        id: 's1e5_09_l4',
        character: 'sara',
        characterLabel: 'Sara',
        text: 'Um filho?',
        soundCue: 'Pequena risada surpresa e abafada',
        emotionGuide: 'Surpresa, admirada'
      },
      {
        id: 's1e5_09_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Sara ficou admirada. Depois de tantos anos... Como aquilo poderia acontecer?',
      }
    ]
  },
  {
    id: 10,
    sceneNumber: 10,
    title: 'Isaque',
    subtitle: 'O menino do riso',
    biblicalRef: 'Gênesis 21:1-3',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'desert_camp',
    musicTheme: 'joyful_birth',
    visualKey: 's1e5_10_isaac',
    environmentSummary: 'Acampamento alegre, risadas.',
    musicDescription: 'Música começa suave e cresce para uma alegria enorme e emocionante.',
    soundEffects: [],
    directorLesson: 'Pura felicidade e alívio.',
    lines: [
      {
        id: 's1e5_10_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas chegou o dia. Deus cumpriu sua promessa.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's1e5_10_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Sara teve um filho.',
      },
      {
        id: 's1e5_10_l3',
        character: 'sara',
        characterLabel: 'Sara',
        text: 'Meu filho!',
        emotionGuide: 'Plena de alegria e emoção'
      },
      {
        id: 's1e5_10_l4',
        character: 'abraao',
        characterLabel: 'Abraão',
        text: 'Isaque!',
        emotionGuide: 'Rindo de felicidade'
      },
      {
        id: 's1e5_10_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Eles deram ao menino o nome de Isaque. Seu nome estava ligado à alegria. Porque aquele nascimento trouxe uma alegria enorme para sua família.',
        soundCue: 'Risadas suaves de um bebê e dos pais'
      }
    ]
  },
  {
    id: 11,
    sceneNumber: 11,
    title: 'A Fé de Abraão',
    subtitle: 'Uma jornada além do que se vê',
    biblicalRef: '',
    durationLabel: '30 segundos',
    estimatedDurationSec: 30,
    ambientType: 'desert_day',
    musicTheme: 'hopeful_future',
    visualKey: 's1e5_11_faith',
    environmentSummary: 'Ambiente contemplativo do deserto.',
    musicDescription: 'Música reflexiva.',
    soundEffects: [],
    directorLesson: 'A grande verdade que Abraão aprendeu.',
    lines: [
      {
        id: 's1e5_11_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Abraão aprendeu algo importante.',
      },
      {
        id: 's1e5_11_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Às vezes... Deus nos chama para caminhar antes que possamos enxergar todo o caminho.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's1e5_11_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A fé não significa saber tudo. Fé significa confiar em Deus.',
      }
    ]
  },
  {
    id: 12,
    sceneNumber: 12,
    title: 'Lição',
    subtitle: 'Confiando no caminho',
    biblicalRef: '',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'desert_day',
    musicTheme: 'gentle_teaching',
    visualKey: 's1e5_12_lesson',
    environmentSummary: 'Vento leve e pacífico.',
    musicDescription: 'Música acolhedora e terna.',
    soundEffects: [],
    directorLesson: 'Transmitindo a moral diretamente para a criança.',
    lines: [
      {
        id: 's1e5_12_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E o que podemos aprender com Abraão?',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's1e5_12_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Quando Deus nos chama para fazer o que é certo... podemos confiar nele.',
      },
      {
        id: 's1e5_12_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mesmo quando não sabemos exatamente o que vai acontecer. Mesmo quando o caminho parece difícil. Mesmo quando precisamos esperar.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's1e5_12_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Deus conhece o caminho. Deus conhece o futuro. E Deus pode nos ensinar a caminhar pela fé.',
      }
    ]
  },
  {
    id: 13,
    sceneNumber: 13,
    title: 'O Fim do Começo',
    subtitle: 'Preparo para a nova temporada',
    biblicalRef: '',
    durationLabel: '40 segundos',
    estimatedDurationSec: 40,
    ambientType: 'desert_wind',
    musicTheme: 'epic_orchestral',
    visualKey: 's1e5_13_hook',
    environmentSummary: 'Transição épica para a próxima etapa da história.',
    musicDescription: 'A música começa a ficar mais aventureira e épica.',
    soundEffects: ['wind_sky'],
    directorLesson: 'O empolgante gancho para a temporada de José.',
    lines: [
      {
        id: 's1e5_13_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A história de Abraão ainda teria muitos desafios. Mas agora vamos seguir adiante.',
      },
      {
        id: 's1e5_13_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Porque depois dele... viriam novas gerações. Novas histórias. Novos desafios.',
      },
      {
        id: 's1e5_13_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E homens e mulheres que precisariam aprender a confiar em Deus.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's1e5_13_l4',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E nossa próxima temporada começa com uma história extraordinária.',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's1e5_13_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'A história de José.',
        soundCue: 'Acorde aventureiro empolgante'
      }
    ]
  },
  {
    id: 14,
    sceneNumber: 14,
    title: 'Assinatura',
    subtitle: 'Toon Tales Kids',
    biblicalRef: '',
    durationLabel: '20 segundos',
    estimatedDurationSec: 20,
    ambientType: 'toon_tales_jingle',
    musicTheme: 'signature_jingle',
    visualKey: 's1e5_14_outro',
    environmentSummary: 'Logotipo sonoro',
    musicDescription: 'A música diminui. Entra o tema musical alegre, memorável e fantástico.',
    soundEffects: ['toon_tales_jingle'],
    directorLesson: 'Energético, feliz e acolhedor.',
    lines: [
      {
        id: 's1e5_14_l1',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'E essa foi mais uma aventura da Bíblia em Áudio.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
        emotionGuide: 'Voz calorosa e emocionante'
      },
      {
        id: 's1e5_14_l2',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Mas a história ainda não terminou...',
        pauseType: 'PAUSA DRAMATICA',
        pauseSeconds: 2.0,
      },
      {
        id: 's1e5_14_l3',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Uma nova aventura está esperando por você.',
        pauseType: 'PAUSA',
        pauseSeconds: 1.0,
      },
      {
        id: 's1e5_14_l4',
        character: 'child',
        characterLabel: 'Crianças',
        text: 'TOON TALES KIDS!',
        emotionGuide: 'Alegre e espontânea, em coro'
      },
      {
        id: 's1e5_14_l5',
        character: 'narrator',
        characterLabel: 'Narrador',
        text: 'Histórias que ensinam, aventuras que transformam!',
      }
    ]
  }
];

export const ABRAAO_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    dayLabel: 'O Chamado',
    question: 'O que Deus pediu para Abrão fazer no começo da história?',
    options: ['Construir uma grande torre', 'Sair de sua terra e ir para um lugar desconhecido', 'Tornar-se rei do Egito', 'Lutar contra gigantes'],
    correctIndex: 1,
    explanation: 'Deus pediu a Abrão para deixar sua casa e parentes, e viajar para uma nova terra que Ele ainda lhe mostraria.',
    biblicalVerse: 'Gênesis 12:1',
  },
  {
    id: 2,
    dayLabel: 'As Estrelas',
    question: 'Quando Deus disse para Abrão contar as estrelas no céu, o que Ele prometeu?',
    options: ['Que Abrão poderia voar até elas', 'Que Abrão seria um astrônomo', 'Que a família e descendência de Abrão seriam tão numerosas quanto elas', 'Que estrelas cairiam na terra'],
    correctIndex: 2,
    explanation: 'Deus prometeu que a descendência de Abrão (seus filhos, netos, bisnetos) seria tão grande que ninguém conseguiria contar, assim como as estrelas.',
    biblicalVerse: 'Gênesis 15:5',
  },
  {
    id: 3,
    dayLabel: 'O Novo Nome',
    question: 'Deus mudou o nome de Abrão para Abraão. O que "Abraão" significa?',
    options: ['Homem do Deserto', 'O Viajante Veloz', 'Pai de muitas nações', 'Construtor de Tendas'],
    correctIndex: 2,
    explanation: 'Abraão significa "pai de muitas nações", reafirmando a grande promessa que Deus havia feito a ele.',
    biblicalVerse: 'Gênesis 17:5',
  },
  {
    id: 4,
    dayLabel: 'O Filho',
    question: 'Qual foi o nome do filho que Abraão e Sara tiveram, quando já eram muito velhinhos?',
    options: ['Jacó', 'José', 'Isaque', 'Davi'],
    correctIndex: 2,
    explanation: 'Eles chamaram o menino de Isaque, nome que lembra alegria e riso, por causa da grande felicidade que Deus lhes deu.',
    biblicalVerse: 'Gênesis 21:3',
  },
  {
    id: 5,
    dayLabel: 'A Lição',
    question: 'O que a história de Abraão nos ensina de mais importante sobre a fé?',
    options: ['Que não precisamos trabalhar', 'Que a fé significa confiar em Deus, mesmo sem saber tudo o que vai acontecer', 'Que fé é saber como fazer mágica', 'Que devemos sempre viajar para o deserto'],
    correctIndex: 1,
    explanation: 'Abraão obedeceu a Deus mesmo sem saber para onde ia! Ele confiou no caminho de Deus, ensinando-nos o que é a verdadeira fé.',
    biblicalVerse: 'Hebreus 11:8',
  }
];
