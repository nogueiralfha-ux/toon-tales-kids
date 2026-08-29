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
        priceDisplay: 'R$ 49,00 / mês',
        cashPrice: 49.0,
        installmentPrice: 'R$ 49,00/mês',
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
    hotmartCheckoutUrl: 'https://pay.hotmart.com/T107380286O?off=pflzun2m',
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
    name: 'Plano Pessoal Anual (1 Filho • Economia de 50%)',
    badge: '50% OFF • Anual',
    billingType: 'taxa_unica_anual',
    prices: {
      BRL: {
        currency: 'BRL',
        symbol: 'R$',
        priceDisplay: '12x R$ 30,93 (ou R$ 299,00 à vista)',
        cashPrice: 299.0,
        installmentPrice: '12x R$ 30,93',
      },
      USD: {
        currency: 'USD',
        symbol: '$',
        priceDisplay: '$ 59.00 / year (50% OFF)',
        cashPrice: 59.0,
        installmentPrice: '$ 59.00/yr',
      },
      EUR: {
        currency: 'EUR',
        symbol: '€',
        priceDisplay: '€ 55.00 / an (50% OFF)',
        cashPrice: 55.0,
        installmentPrice: '€ 55.00/an',
      },
    },
    hotmartCheckoutUrl: 'https://pay.hotmart.com/T107380286O?off=pflzun2m',
    stripeCheckoutUrl: '',
    asaasPaymentLink: '',
    features: [
      '1 Perfil Individual para seu Filho',
      'Acesso Anual Ilimitado a 34 Histórias Bíblicas 3D',
      '30 Histórias Personalizadas por IA no ano (Créditos de Criação)',
      'Estúdio de Pintura 3D + Caderno P&B para Imprimir',
      'Economia Real de 50% vs Plano Mensal',
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
    hotmartCheckoutUrl: 'https://pay.hotmart.com/T107380286O?off=0wee11gn',
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
    name: 'Plano Familiar Anual (Até 3 Filhos • Mais Popular)',
    badge: '⭐ MAIS POPULAR • ANUAL FAMÍLIA',
    billingType: 'taxa_unica_anual',
    prices: {
      BRL: {
        currency: 'BRL',
        symbol: 'R$',
        priceDisplay: '12x R$ 103,13 (ou R$ 997,00 à vista)',
        cashPrice: 997.0,
        installmentPrice: '12x R$ 103,13',
      },
      USD: {
        currency: 'USD',
        symbol: '$',
        priceDisplay: '$ 197.00 / year',
        cashPrice: 197.0,
        installmentPrice: '$ 197.00/yr',
      },
      EUR: {
        currency: 'EUR',
        symbol: '€',
        priceDisplay: '€ 185.00 / an',
        cashPrice: 185.0,
        installmentPrice: '€ 185.00/an',
      },
    },
    hotmartCheckoutUrl: 'https://pay.hotmart.com/T107380286O?off=0wee11gn',
    stripeCheckoutUrl: '',
    asaasPaymentLink: '',
    features: [
      'Até 3 Perfis Simultâneos para os Filhos',
      'Acesso Anual Ilimitado a Todas as 5 Temporadas',
      '80 Histórias Personalizadas por IA no ano (Créditos de Criação)',
      'Módulo Trilíngue Completo (Português, Inglês e Espanhol)',
      'Estúdio de Pintura 3D + Todos os Cadernos P&B para Imprimir',
      'Painel dos Pais com Trava por PIN e Relatórios de Aprendizado',
      'Economia de mais de 60% vs Plano Mensal',
    ],
  },
  vitalicio: {
    id: 'vitalicio',
    name: '👑 Plano Vitalício Família (Acesso Eterno • 50 Vagas)',
    badge: '🔥 LOTE EXCLUSIVO • APENAS 50 VAGAS',
    billingType: 'vitalicio_taxa_unica',
    prices: {
      BRL: {
        currency: 'BRL',
        symbol: 'R$',
        priceDisplay: '12x R$ 205,53 (ou R$ 1.987,00 à vista)',
        cashPrice: 1987.0,
        installmentPrice: '12x R$ 205,53',
      },
      USD: {
        currency: 'USD',
        symbol: '$',
        priceDisplay: '$ 397.00 (Lifetime Access • One-time)',
        cashPrice: 397.0,
        installmentPrice: '$ 397.00',
      },
      EUR: {
        currency: 'EUR',
        symbol: '€',
        priceDisplay: '€ 369.00 (Accès à vie • Paiement unique)',
        cashPrice: 369.0,
        installmentPrice: '€ 369.00',
      },
    },
    hotmartCheckoutUrl: 'https://pay.hotmart.com/T107380286O?off=e3cw731a',
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
