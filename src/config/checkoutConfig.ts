// Configuração Oficial de Checkout Multimoeda e Gateways Globais (Hotmart / Stripe / Asaas)
// Valores e links 100% integrados com a Hotmart

export type SupportedCurrency = 'BRL' | 'USD' | 'EUR';

export interface CurrencyPricing {
  currency: SupportedCurrency;
  symbol: string;
  priceDisplay: string;
  cashPrice: number;
  installmentPrice: string;
}

export interface PlanConfig {
  id: string;
  name: string;
  badge: string;
  billingType: 'recorrente_mensal' | 'taxa_unica_anual' | 'vitalicio_taxa_unica';
  prices: Record<SupportedCurrency, CurrencyPricing>;
  
  // Links de Pagamento / Gateways Oficiais Hotmart
  hotmartCheckoutUrl?: string; // Link global da Hotmart (detecta moeda automaticamente)
  stripeCheckoutUrl?: string;  // Link do Stripe Checkout
  asaasPaymentLink?: string;   // Link do Asaas (específico para BRL / PIX)
  
  features: string[];
}

export const CHECKOUT_PLANS_CONFIG: Record<string, PlanConfig> = {
  pessoal_mensal: {
    id: 'pessoal_mensal',
    name: 'Plano Pessoal Mensal (1 Filho)',
    badge: 'Cobrança Mensal',
    billingType: 'recorrente_mensal',
    prices: {
      BRL: {
        currency: 'BRL',
        symbol: 'R$',
        priceDisplay: 'R$ 49,90 / mês',
        cashPrice: 49.9,
        installmentPrice: 'R$ 49,90/mês',
      },
      USD: {
        currency: 'USD',
        symbol: '$',
        priceDisplay: '$ 9.90 / month',
        cashPrice: 9.9,
        installmentPrice: '$ 9.90/mo',
      },
      EUR: {
        currency: 'EUR',
        symbol: '€',
        priceDisplay: '€ 8.90 / mois',
        cashPrice: 8.9,
        installmentPrice: '€ 8.90/mois',
      },
    },
    hotmartCheckoutUrl: 'https://pay.hotmart.com/T107380286O?off=bi2vx944',
    stripeCheckoutUrl: '',
    asaasPaymentLink: '',
    features: [
      '1 Perfil Individual para seu Filho',
      'Catálogo Completo em Áudio 3D (34 Histórias Ilimitadas)',
      '2 Histórias Personalizadas por IA por mês (Créditos de Criação)',
      'Estúdio de Pintura 3D + Caderno P&B para Imprimir',
      'Quizzes Bíblicos Interativos e Modo Hora de Dormir',
    ],
  },
  pessoal_anual: {
    id: 'pessoal_anual',
    name: 'Combo VIP Campeão Anual Pessoal (1 Filho)',
    badge: '⭐ COMBO VIP • ANUAL INDIVIDUAL',
    billingType: 'taxa_unica_anual',
    prices: {
      BRL: {
        currency: 'BRL',
        symbol: 'R$',
        priceDisplay: '12x R$ 49,90 (ou R$ 598,80 / ano)',
        cashPrice: 598.8,
        installmentPrice: '12x R$ 49,90',
      },
      USD: {
        currency: 'USD',
        symbol: '$',
        priceDisplay: '$ 118.80 / year (VIP)',
        cashPrice: 118.8,
        installmentPrice: '$ 118.80/yr',
      },
      EUR: {
        currency: 'EUR',
        symbol: '€',
        priceDisplay: '€ 106.80 / an (VIP)',
        cashPrice: 106.8,
        installmentPrice: '€ 106.80/an',
      },
    },
    hotmartCheckoutUrl: 'https://pay.hotmart.com/T107380286O?off=0wee11gn',
    stripeCheckoutUrl: '',
    asaasPaymentLink: '',
    features: [
      '1 Perfil Individual para seu Filho',
      'Catálogo Completo em Áudio 3D (34 Histórias Ilimitadas)',
      'BÔNUS: 30 Aulas Lab Kids em Português',
      'Kit 100 Atividades em PDF A4 + Estúdio de Pintura 3D',
      '30 Histórias Personalizadas por IA no ano',
      'Modo Hora de Dormir com Timer e Quizzes',
    ],
  },
  familiar_mensal: {
    id: 'familiar_mensal',
    name: 'Plano Familiar Mensal (Até 3 Filhos)',
    badge: 'Cobrança Mensal Família',
    billingType: 'recorrente_mensal',
    prices: {
      BRL: {
        currency: 'BRL',
        symbol: 'R$',
        priceDisplay: 'R$ 97,00 / mês',
        cashPrice: 97.0,
        installmentPrice: 'R$ 97,00/mês',
      },
      USD: {
        currency: 'USD',
        symbol: '$',
        priceDisplay: '$ 19.90 / month',
        cashPrice: 19.9,
        installmentPrice: '$ 19.90/mo',
      },
      EUR: {
        currency: 'EUR',
        symbol: '€',
        priceDisplay: '€ 17.90 / mois',
        cashPrice: 17.9,
        installmentPrice: '€ 17.90/mois',
      },
    },
    hotmartCheckoutUrl: 'https://pay.hotmart.com/T107380286O?off=j8cnv1bc',
    stripeCheckoutUrl: '',
    asaasPaymentLink: '',
    features: [
      'Até 3 Perfis Simultâneos para os Filhos',
      'Catálogo Completo em Áudio 3D (34 Histórias Ilimitadas)',
      '6 Histórias Personalizadas por IA por mês (Créditos de Criação)',
      'Painel dos Pais com Trava por PIN e Controle de Tempo',
      'Estúdio de Pintura 3D + Caderno P&B para Imprimir',
    ],
  },
  familiar_anual: {
    id: 'familiar_anual',
    name: 'Combo VIP Campeão Anual Familiar (3 Filhos)',
    badge: '⭐ MAIS POPULAR • ANUAL FAMÍLIA',
    billingType: 'taxa_unica_anual',
    prices: {
      BRL: {
        currency: 'BRL',
        symbol: 'R$',
        priceDisplay: '12x R$ 97,00 (ou R$ 1.164,00 / ano)',
        cashPrice: 1164.0,
        installmentPrice: '12x R$ 97,00',
      },
      USD: {
        currency: 'USD',
        symbol: '$',
        priceDisplay: '$ 238.80 / year',
        cashPrice: 238.8,
        installmentPrice: '$ 238.80/yr',
      },
      EUR: {
        currency: 'EUR',
        symbol: '€',
        priceDisplay: '€ 214.80 / an',
        cashPrice: 214.8,
        installmentPrice: '€ 214.80/an',
      },
    },
    hotmartCheckoutUrl: 'https://pay.hotmart.com/T107380286O?off=h6td6b5r',
    stripeCheckoutUrl: '',
    asaasPaymentLink: '',
    features: [
      'Até 3 Perfis Simultâneos para os Filhos',
      'Catálogo Completo em Áudio 3D (34 Histórias Ilimitadas)',
      'BÔNUS: 30 Aulas Lab Kids em Português',
      'Kit 100 Atividades em PDF A4 + Estúdio de Pintura 3D',
      '80 Histórias Personalizadas por IA no ano',
      'Painel dos Pais com Trava por PIN e Relatórios',
    ],
  },
  vitalicio: {
    id: 'vitalicio',
    name: '👑 Combo VIP Tudo Campeão (Acesso Eterno • Família)',
    badge: '👑 COMBO VIP TUDO CAMPEÃO • VITALÍCIO',
    billingType: 'vitalicio_taxa_unica',
    prices: {
      BRL: {
        currency: 'BRL',
        symbol: 'R$',
        priceDisplay: '12x R$ 167,50 (ou R$ 1.670,00 à vista)',
        cashPrice: 1670.0,
        installmentPrice: '12x R$ 167,50',
      },
      USD: {
        currency: 'USD',
        symbol: '$',
        priceDisplay: '$ 329.00 (Lifetime Access • One-time)',
        cashPrice: 329.0,
        installmentPrice: '$ 329.00',
      },
      EUR: {
        currency: 'EUR',
        symbol: '€',
        priceDisplay: '€ 299.00 (Accès à vie • Paiement unique)',
        cashPrice: 299.0,
        installmentPrice: '€ 299.00',
      },
    },
    hotmartCheckoutUrl: 'https://pay.hotmart.com/T107380286O?off=pflzun2m',
    stripeCheckoutUrl: '',
    asaasPaymentLink: '',
    features: [
      'Acesso Vitalício Eterno (Sem Mensalidades Futuras)',
      '🔥 Apenas 50 Vagas Disponíveis neste Lote de Lançamento',
      'Todas as 5 Temporadas + Todos os Lançamentos Futuros Garantidos',
      'Histórias Personalizadas por IA sem Expiração (Créditos de Criação)',
      'Módulo Trilíngue Completo (Português, Inglês e Espanhol)',
      'Download dos Áudios em MP3 para Ouvir no Carro e Viagens Offline',
      'Perfis Familiares Ilimitados para Todos os Filhos da Casa',
      'Certificados de Conclusão Personalizados e Grupo VIP de Famílias',
    ],
  },
  kit_atividades_100: {
    id: 'kit_atividades_100',
    name: 'Kit 100 Aventuras Bíblicas para Imprimir (Caderno A4)',
    badge: '🔥 OFERTA ESPECIAL • R$ 27,90',
    billingType: 'vitalicio_taxa_unica',
    prices: {
      BRL: {
        currency: 'BRL',
        symbol: 'R$',
        priceDisplay: 'R$ 27,90 (Taxa Única)',
        cashPrice: 27.9,
        installmentPrice: 'R$ 27,90',
      },
      USD: {
        currency: 'USD',
        symbol: '$',
        priceDisplay: '$ 5.90 (One-time)',
        cashPrice: 5.9,
        installmentPrice: '$ 5.90',
      },
      EUR: {
        currency: 'EUR',
        symbol: '€',
        priceDisplay: '€ 4.90',
        cashPrice: 4.9,
        installmentPrice: '€ 4.90',
      },
    },
    hotmartCheckoutUrl: 'https://pay.hotmart.com/W107385181M?off=n1vhx6nj',
    stripeCheckoutUrl: '',
    asaasPaymentLink: '',
    features: [
      '100 Páginas de Atividades em Formato A4 Pronto para Imprimir',
      '30 Desenhos para Colorir em Line Art (Economia de Tinta)',
      '30 Labirintos & Caça-Palavras Bíblicos dos Heróis da Fé',
      '20 Quizzes & Desafios da Verdade Bíblica',
      '20 Páginas de Caligrafia e Memorização de Versículos',
      'Acesso Imediato ao Arquivo Digital em Alta Resolução (PDF)',
    ],
  },
  labkids_unico: {
    id: 'labkids_unico',
    name: 'Lab Kids (Pagamento Único)',
    badge: '🔥 ACESSO VITALÍCIO LAB KIDS',
    billingType: 'vitalicio_taxa_unica',
    prices: {
      BRL: {
        currency: 'BRL',
        symbol: 'R$',
        priceDisplay: 'R$ 57,00 (Taxa Única)',
        cashPrice: 57.0,
        installmentPrice: 'R$ 57,00',
      },
      USD: {
        currency: 'USD',
        symbol: '$',
        priceDisplay: '$ 12.90 (One-time)',
        cashPrice: 12.9,
        installmentPrice: '$ 12.90',
      },
      EUR: {
        currency: 'EUR',
        symbol: '€',
        priceDisplay: '€ 11.90',
        cashPrice: 11.9,
        installmentPrice: '€ 11.90',
      },
    },
    hotmartCheckoutUrl: '',
    stripeCheckoutUrl: '',
    asaasPaymentLink: '',
    features: [
      'Acesso Vitalício às 30 Aulas Animadas em Full HD',
      '5 Trilhas Científicas',
      '90 Quizzes Interativos com XP',
      'Garantia de 7 Dias',
    ],
  },
  combo_labkids_unico: {
    id: 'combo_labkids_unico',
    name: 'Combo VIP Tudo (Lab Kids + Histórias)',
    badge: '👑 COMBO VIP TUDO',
    billingType: 'vitalicio_taxa_unica',
    prices: {
      BRL: {
        currency: 'BRL',
        symbol: 'R$',
        priceDisplay: 'R$ 97,90 (Taxa Única)',
        cashPrice: 97.9,
        installmentPrice: 'R$ 97,90',
      },
      USD: {
        currency: 'USD',
        symbol: '$',
        priceDisplay: '$ 19.90 (One-time)',
        cashPrice: 19.9,
        installmentPrice: '$ 19.90',
      },
      EUR: {
        currency: 'EUR',
        symbol: '€',
        priceDisplay: '€ 17.90',
        cashPrice: 17.9,
        installmentPrice: '€ 17.90',
      },
    },
    hotmartCheckoutUrl: '',
    stripeCheckoutUrl: '',
    asaasPaymentLink: '',
    features: [
      '30 Aulas Lab Kids de Ciências',
      '34 Histórias Bíblicas em Áudio 3D',
      'Kit 100 Atividades em PDF A4 + Estúdio de Pintura 3D',
      'Acesso Ilimitado em Português Nativo',
    ],
  },
};

export interface CapturedLead {
  id: string;
  name: string;
  email: string;
  phone: string;
  planId: string;
  planName: string;
  planPrice: string;
  currency: SupportedCurrency;
  status: 'initiated' | 'abandoned' | 'completed';
  createdAt: string;
  lastStep: string;
}

export const saveLeadCapture = (leadData: Omit<CapturedLead, 'id' | 'createdAt'>): CapturedLead => {
  const id = 'lead_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
  const newLead: CapturedLead = {
    ...leadData,
    id,
    createdAt: new Date().toISOString(),
  };

  try {
    const existingRaw = localStorage.getItem('toontales_captured_leads');
    const leads: CapturedLead[] = existingRaw ? JSON.parse(existingRaw) : [];
    
    const existingIndex = leads.findIndex((l) => l.email === newLead.email || l.phone === newLead.phone);
    if (existingIndex >= 0) {
      leads[existingIndex] = { ...leads[existingIndex], ...newLead };
    } else {
      leads.unshift(newLead);
    }

    localStorage.setItem('toontales_captured_leads', JSON.stringify(leads));
  } catch (err) {
    console.error('Erro ao salvar lead:', err);
  }

  return newLead;
};

export const getCapturedLeads = (): CapturedLead[] => {
  try {
    const existingRaw = localStorage.getItem('toontales_captured_leads');
    return existingRaw ? JSON.parse(existingRaw) : [];
  } catch {
    return [];
  }
};
