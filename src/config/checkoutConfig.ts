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
        priceDisplay: 'R$ 19,90 / mês',
        cashPrice: 19.9,
        installmentPrice: 'R$ 19,90/mês',
      },
      USD: {
        currency: 'USD',
        symbol: '$',
        priceDisplay: '$ 4.99 / month',
        cashPrice: 4.99,
        installmentPrice: '$ 4.99/mo',
      },
      EUR: {
        currency: 'EUR',
        symbol: '€',
        priceDisplay: '€ 4.49 / mois',
        cashPrice: 4.49,
        installmentPrice: '€ 4.49/mois',
      },
    },
    hotmartCheckoutUrl: 'https://pay.hotmart.com/T107380286O?off=pflzun2m',
    stripeCheckoutUrl: '',
    asaasPaymentLink: '',
    features: [
      '1 Perfil Individual',
      '4 Temporadas em Áudio 3D (34 Episódios)',
      'Estúdio de Pintura 3D + Caderno P&B para Imprimir',
      'Quizzes Bíblicos Interativos',
      'Modo Hora de Dormir com Timer',
    ],
  },
  pessoal_anual: {
    id: 'pessoal_anual',
    name: 'Plano Pessoal Anual (1 Filho • 50% OFF)',
    badge: '50% OFF • Anual',
    billingType: 'taxa_unica_anual',
    prices: {
      BRL: {
        currency: 'BRL',
        symbol: 'R$',
        priceDisplay: '12x R$ 12,31 (ou R$ 119,00 à vista)',
        cashPrice: 119.0,
        installmentPrice: '12x R$ 12,31',
      },
      USD: {
        currency: 'USD',
        symbol: '$',
        priceDisplay: '$ 29.00 / year (50% OFF)',
        cashPrice: 29.0,
        installmentPrice: '$ 29.00/yr',
      },
      EUR: {
        currency: 'EUR',
        symbol: '€',
        priceDisplay: '€ 27.00 / an (50% OFF)',
        cashPrice: 27.0,
        installmentPrice: '€ 27.00/an',
      },
    },
    hotmartCheckoutUrl: 'https://pay.hotmart.com/T107380286O?off=pflzun2m',
    stripeCheckoutUrl: '',
    asaasPaymentLink: '',
    features: [
      '1 Perfil Individual',
      '4 Temporadas em Áudio 3D (34 Episódios)',
      'Estúdio de Pintura 3D + Caderno P&B para Imprimir',
      'Economia Real de 50%',
      'Modo Hora de Dormir com Timer',
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
        priceDisplay: 'R$ 49,90 / mês',
        cashPrice: 49.9,
        installmentPrice: 'R$ 49,90/mês',
      },
      USD: {
        currency: 'USD',
        symbol: '$',
        priceDisplay: '$ 9.99 / month',
        cashPrice: 9.99,
        installmentPrice: '$ 9.99/mo',
      },
      EUR: {
        currency: 'EUR',
        symbol: '€',
        priceDisplay: '€ 8.99 / mois',
        cashPrice: 8.99,
        installmentPrice: '€ 8.99/mois',
      },
    },
    hotmartCheckoutUrl: 'https://pay.hotmart.com/T107380286O?off=0wee11gn',
    stripeCheckoutUrl: '',
    asaasPaymentLink: '',
    features: [
      'Até 3 Perfis Simultâneos',
      '4 Temporadas em Áudio 3D (34 Episódios)',
      'Estúdio de Pintura 3D + Caderno P&B para Imprimir',
      'Painel dos Pais com Trava por PIN',
      'Modo Hora de Dormir com Timer',
    ],
  },
  familiar_anual: {
    id: 'familiar_anual',
    name: 'Plano Familiar Anual (Até 3 Filhos • 50% OFF)',
    badge: '50% OFF • Anual Família',
    billingType: 'taxa_unica_anual',
    prices: {
      BRL: {
        currency: 'BRL',
        symbol: 'R$',
        priceDisplay: '12x R$ 30,72 (ou R$ 297,00 à vista)',
        cashPrice: 297.0,
        installmentPrice: '12x R$ 30,72',
      },
      USD: {
        currency: 'USD',
        symbol: '$',
        priceDisplay: '$ 49.00 / year (50% OFF)',
        cashPrice: 49.0,
        installmentPrice: '$ 49.00/yr',
      },
      EUR: {
        currency: 'EUR',
        symbol: '€',
        priceDisplay: '€ 45.00 / an (50% OFF)',
        cashPrice: 45.0,
        installmentPrice: '€ 45.00/an',
      },
    },
    hotmartCheckoutUrl: 'https://pay.hotmart.com/T107380286O?off=0wee11gn',
    stripeCheckoutUrl: '',
    asaasPaymentLink: '',
    features: [
      'Até 3 Perfis Simultâneos',
      '4 Temporadas em Áudio 3D (34 Episódios)',
      'Estúdio de Pintura 3D + Caderno P&B para Imprimir',
      'Painel dos Pais com Trava por PIN',
      'Economia de 50%',
    ],
  },
  vitalicio: {
    id: 'vitalicio',
    name: '👑 Plano Vitalício Família (Acesso Eterno)',
    badge: '⭐ CAMPEÃO DE VENDAS • 50% OFF',
    billingType: 'vitalicio_taxa_unica',
    prices: {
      BRL: {
        currency: 'BRL',
        symbol: 'R$',
        priceDisplay: '12x R$ 50,16 (ou R$ 485,00 à vista)',
        cashPrice: 485.0,
        installmentPrice: '12x R$ 50,16',
      },
      USD: {
        currency: 'USD',
        symbol: '$',
        priceDisplay: '$ 97.00 (Lifetime Access • One-time)',
        cashPrice: 97.0,
        installmentPrice: '$ 97.00',
      },
      EUR: {
        currency: 'EUR',
        symbol: '€',
        priceDisplay: '€ 89.00 (Accès à vie • Paiement unique)',
        cashPrice: 89.0,
        installmentPrice: '€ 89.00',
      },
    },
    hotmartCheckoutUrl: 'https://pay.hotmart.com/T107380286O?off=e3cw731a',
    stripeCheckoutUrl: '',
    asaasPaymentLink: '',
    features: [
      'Acesso Vitalício Eterno (Sem Mensalidades Futuras)',
      'BÔNUS 1: Temporada 5 (Heróis da Fé) Inclusa!',
      'BÔNUS 2: Módulo Trilíngue Completo (Português, Inglês e Espanhol)',
      'BÔNUS 3: Estúdio de Pintura 3D + Caderno P&B para Imprimir',
      'BÔNUS 4: Painel dos Pais com PIN',
      'BÔNUS 5: Certificados de Conclusão Personalizados',
      'Até 3 Filhos / Perfis Simultâneos',
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
