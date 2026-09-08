export const PLANS = {
  basic: {
    name: 'Básico',
    price: 19.90,
    interval: 'mês',
    benefits: [
      'Acesso ao catálogo completo (20+ histórias)',
      'Streaming ilimitado de áudios',
      'Download para ouvir offline',
      'Novos episódios todo mês',
      'Suporte por email'
    ]
  },
  premium: {
    name: 'Premium',
    price: 39.90,
    interval: 'mês',
    benefits: [
      'Tudo do plano Básico',
      '5 personalizações por mês',
      'Histórias com o nome do seu filho',
      'Acesso antecipado a novidades',
      'Certificado de ouvinte',
      'Suporte prioritário'
    ]
  },
  annual: {
    name: 'Anual',
    price: 149.90,
    interval: 'ano',
    benefits: [
      'Tudo do plano Premium',
      '10 personalizações por mês',
      '2 meses grátis',
      'Conteúdo exclusivo',
      'Desconto em vídeos personalizados'
    ]
  },
  lifetime: {
    name: 'Vitalício',
    price: 397.00,
    interval: 'único',
    benefits: [
      'Acesso vitalício ao catálogo',
      'Personalizações ilimitadas',
      'Todos os futuros episódios',
      '2 vídeos personalizados por ano',
      'Suporte VIP',
      'Participação em decisões de conteúdo'
    ]
  }
};

export const EXTRA_NOTE = "Vídeos personalizados avulsos: R$ 59,00 cada (4 minutos)";
