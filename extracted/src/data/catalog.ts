export interface Episode {
  id: string;
  title: string;
  description: string;
  durationLabel?: string;
  isAvailable: boolean;
}

export interface Season {
  id: string;
  title: string;
  episodes: Episode[];
}

export const BIBLE_SEASONS: Season[] = [
  {
    id: 's1',
    title: 'TEMPORADA 1 — O COMEÇO',
    episodes: [
      {
        id: 't1e1',
        title: 'A Criação',
        description: 'Quando Deus fez o mundo e tudo que nele há.',
        durationLabel: '7 min',
        isAvailable: true,
      },
      {
        id: 't1e2',
        title: 'Adão e Eva',
        description: 'O jardim do Éden e a primeira escolha da humanidade.',
        durationLabel: '10 min',
        isAvailable: true,
      },
      {
        id: 't1e3',
        title: 'Noé e a Grande Arca',
        description: 'Um homem fiel, um grande barco e uma promessa no arco-íris.',
        durationLabel: '12 min',
        isAvailable: true,
      },
      {
        id: 't1e4',
        title: 'A Torre de Babel',
        description: 'Quando as pessoas tentaram alcançar o céu e as línguas se misturaram.',
        durationLabel: '10 min',
        isAvailable: true,
      },
      {
        id: 't1e5',
        title: 'Abraão e a Promessa',
        description: 'A jornada de fé do pai de uma grande nação.',
        durationLabel: '12 min',
        isAvailable: true,
      },
    ],
  },
  {
    id: 's2',
    title: 'TEMPORADA 2 — GRANDES AVENTURAS',
    episodes: [
      {
        id: 't2e1',
        title: 'José do Egito',
        description: 'De sonhador a governador, uma história de perdão.',
        durationLabel: '15 min',
        isAvailable: true,
      },
      {
        id: 't2e2',
        title: 'Moisés',
        description: 'O menino salvo das águas que libertaria seu povo.',
        durationLabel: '14 min',
        isAvailable: true,
      },
      {
        id: 't2e3',
        title: 'Abertura do Mar Vermelho',
        description: 'O grande milagre da libertação e a travessia a pé enxuto.',
        durationLabel: '15 min',
        isAvailable: true,
      },
      {
        id: 't2e4',
        title: 'Josué e Jericó',
        description: 'Uma batalha vencida com fé e o som de trombetas.',
        durationLabel: '14 min',
        isAvailable: true,
      },
      {
        id: 't2e5',
        title: 'Davi e Golias',
        description: 'Um jovem pastor de ovelhas, uma funda e um gigante.',
        durationLabel: '15 min',
        isAvailable: true,
      },
    ],
  },
  {
    id: 's3',
    title: 'TEMPORADA 3 — JESUS',
    episodes: [
      {
        id: 't3e1',
        title: 'O nascimento de Jesus',
        description: 'Uma estrela brilhante e o presente de Deus para nós.',
        durationLabel: '15 min',
        isAvailable: true,
      },
      {
        id: 't3e2',
        title: 'Jesus no templo',
        description: 'O menino Jesus ensinando os mestres.',
        durationLabel: '15 min',
        isAvailable: true,
      },
      {
        id: 't3e3',
        title: 'O batismo de Jesus',
        description: 'A pomba e a voz do céu no rio Jordão.',
        durationLabel: '15 min',
        isAvailable: true,
      },
      {
        id: 't3e4',
        title: 'Os discípulos',
        description: 'Jesus chama seus primeiros amigos pescadores.',
        durationLabel: '15 min',
        isAvailable: true,
      },
      {
        id: 't3e5',
        title: 'Os milagres',
        description: 'Cegos veem, doentes são curados: o poder do amor.',
        durationLabel: '20 min',
        isAvailable: true,
      },
      {
        id: 't3e6',
        title: 'As parábolas',
        description: 'Histórias incríveis com lições eternas.',
        durationLabel: '20 min',
        isAvailable: true,
      },
      {
        id: 't3e7',
        title: 'A tempestade no mar',
        description: 'Jesus acalma o vento e as ondas com uma palavra.',
        durationLabel: '16 min',
        isAvailable: true,
      },
      {
        id: 't3e8',
        title: 'A multiplicação dos pães',
        description: 'O lanchinho de um menino que alimentou uma multidão.',
        durationLabel: '17 min',
        isAvailable: true,
      },
      {
        id: 't3e9',
        title: 'A ressurreição de Jesus',
        description: 'A maior vitória e esperança de todas.',
        durationLabel: '22 min',
        isAvailable: true,
      },
    ],
  },
  {
    id: 's4',
    title: 'TEMPORADA 4 — IGREJA E APÓSTOLOS',
    episodes: [
      {
        id: 't4e1',
        title: 'Pentecostes',
        description: 'O Espírito Santo chega como fogo e vento.',
        durationLabel: '18 min',
        isAvailable: true,
      },
      {
        id: 't4e2',
        title: 'Pedro',
        description: 'O pescador que se tornou um grande líder.',
        durationLabel: '17 min',
        isAvailable: true,
      },
      {
        id: 't4e3',
        title: 'Estêvão',
        description: 'O primeiro a dar a vida por amar a Jesus.',
        durationLabel: '18 min',
        isAvailable: true,
      },
      {
        id: 't4e4',
        title: 'Paulo',
        description: 'A luz brilhante na estrada de Damasco que mudou tudo.',
        durationLabel: '20 min',
        isAvailable: true,
      },
      {
        id: 't4e5',
        title: 'Paulo e Silas',
        description: 'Louvor na prisão e um terremoto libertador.',
        durationLabel: '20 min',
        isAvailable: true,
      },
      {
        id: 't4e6',
        title: 'Paulo Viaja para Roma',
        description: 'Uma viagem rumo à cidade imperial.',
        durationLabel: '18 min',
        isAvailable: true,
      },
      {
        id: 't4e7',
        title: 'A Tempestade',
        description: 'Quando o mar se levantou.',
        durationLabel: '21 min',
        isAvailable: true,
      },
      {
        id: 't4e8',
        title: 'O Naufrágio',
        description: 'Quando o navio se partiu.',
        durationLabel: '20 min',
        isAvailable: true,
      },
      {
        id: 't4e9',
        title: 'Malta',
        description: 'A ilha onde Deus continuou agindo.',
        durationLabel: '18 min',
        isAvailable: true,
      },
      {
        id: 't4e10',
        title: 'A Chegada a Roma',
        description: 'Quando Paulo finalmente chegou ao destino.',
        durationLabel: '20 min',
        isAvailable: true,
      },
    ],
  },
  {
    id: 's5',
    title: 'TEMPORADA 5 — HERÓIS DA FÉ',
    episodes: [
      {
        id: 't5e0',
        title: 'Abertura Oficial — Heróis da Fé',
        description: 'Pessoas comuns. Grandes desafios. Uma fé extraordinária.',
        durationLabel: '90 seg',
        isAvailable: true,
      },
      {
        id: 't5e1',
        title: 'Episódio 30 — Enoque',
        description: 'O homem que andou com Deus. Uma amizade tão íntima que atravessou a eternidade.',
        durationLabel: '18 min',
        isAvailable: true,
      },
      {
        id: 't5e2',
        title: 'Episódio 31 — Jó',
        description: 'A esperança inabalável que permaneceu mesmo na maior tempestade da vida.',
        durationLabel: '20 min',
        isAvailable: false,
      },
      {
        id: 't5e3',
        title: 'Episódio 32 — Gideão',
        description: 'O homem que se sentia pequeno, mas descobriu que Deus podia usá-lo.',
        durationLabel: '19 min',
        isAvailable: false,
      },
      {
        id: 't5e4',
        title: 'Episódio 33 — Sansão',
        description: 'Força, arrependimento sincero e a vitória da fé no final.',
        durationLabel: '20 min',
        isAvailable: false,
      },
      {
        id: 't5e5',
        title: 'Episódio 34 — Daniel',
        description: 'Coragem inabalável na cova dos leões e fidelidade diária em oração.',
        durationLabel: '21 min',
        isAvailable: false,
      },
      {
        id: 't5e6',
        title: 'Episódio 35 — Sadraque, Mesaque e Abede-Nego',
        description: 'A fé que não se curva diante de estátuas e o Quarto Homem na fornalha.',
        durationLabel: '19 min',
        isAvailable: false,
      },
      {
        id: 't5e7',
        title: 'Episódio 36 — Neemias',
        description: 'A coragem de reconstruir as muralhas com oração e determinação.',
        durationLabel: '20 min',
        isAvailable: false,
      },
      {
        id: 't5e8',
        title: 'Episódio 37 — Elias',
        description: 'Fogo do céu no Monte Carmelo e a voz suave e mansa na montanha.',
        durationLabel: '22 min',
        isAvailable: false,
      },
      {
        id: 't5e9',
        title: 'Episódio 38 — Eliseu',
        description: 'Os olhos da fé que contemplam os carros e cavalos de fogo ao redor.',
        durationLabel: '19 min',
        isAvailable: false,
      },
      {
        id: 't5e10',
        title: 'Episódio 39 — João Batista',
        description: 'A voz forte no deserto que preparou com retidão o caminho do Senhor.',
        durationLabel: '18 min',
        isAvailable: false,
      },
      {
        id: 't5e11',
        title: 'Episódio 40 — Mulheres de Fé: Rute e Ester',
        description: 'Fidelidade, nobreza e coragem real: vidas que transformaram gerações.',
        durationLabel: '22 min',
        isAvailable: false,
      },
    ],
  },
];
