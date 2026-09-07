import { supabase, isSupabaseConfigured } from '../lib/supabaseClient';
import { PlanType } from './authService';

export interface PlanDetails {
  id: string;
  slug: PlanType;
  name: string;
  priceFormatted: string;
  priceCents: number;
  periodLabel: string;
  highlight?: boolean;
  badge?: string;
  description: string;
  features: string[];
  checkoutUrl?: string;
  stripePriceId?: string;
}

export const SUBSCRIPTION_PLANS: PlanDetails[] = [
  {
    id: 'plan-vitalicio',
    slug: 'vitalicio',
    name: 'Acesso Vitalício Black',
    priceFormatted: 'R$ 97,00',
    priceCents: 9700,
    periodLabel: 'pagamento único • sem mensalidade',
    highlight: true,
    badge: 'O MAIS POPULAR & COMPLETO',
    description: 'Acesso perpétuo para toda a família a todas as temporadas presentes e futuras.',
    features: [
      'Acesso ilimitado a todas as Temporadas Bíblicas',
      'Módulo LabKids (Ciência e Bíblia) incluso',
      'Módulo LabKids English (Bilingue) incluso',
      'Múltiplos perfis infantis para todos os filhos',
      'Player cinematográfico com áudio 3D e efeitos sonoros',
      'Estúdio de colorir e desenhos imprimíveis',
      'Modo Hora de Dormir (Sons suaves da natureza)',
      'Sem limite de tempo e sem renovação recorrente',
    ],
    checkoutUrl: 'https://pay.hotmart.com/toontales-vitalicio',
  },
  {
    id: 'plan-familiar',
    slug: 'familiar',
    name: 'Assinatura Familiar Anual',
    priceFormatted: 'R$ 19,90',
    priceCents: 1990,
    periodLabel: 'por mês (faturado anualmente)',
    highlight: false,
    badge: 'RECOMENDADO',
    description: 'Ideal para famílias que desejam acompanhar lançamentos mensais com controle parental total.',
    features: [
      'Acesso a todas as temporadas bíblicas lançadas',
      'Até 3 perfis para crianças',
      'Sistema de gamificação e recompensas em XP',
      'Quizzes bíblicos interativos',
      'Relatórios de progresso para os pais',
      'Suporte prioritário via WhatsApp',
    ],
    checkoutUrl: 'https://pay.hotmart.com/toontales-familiar',
  },
  {
    id: 'plan-pessoal',
    slug: 'pessoal',
    name: 'Plano Mensal Básico',
    priceFormatted: 'R$ 29,90',
    priceCents: 2990,
    periodLabel: 'por mês • cancele quando quiser',
    highlight: false,
    badge: 'FLEXÍVEL',
    description: 'Acesso mensal para 1 criança com renovação automática.',
    features: [
      'Acesso aos episódios da Temporada 1 a 4',
      '1 Perfil infantil ativo',
      'Quizzes de fixação bíblica',
      'Acesso no celular, tablet e computador',
    ],
    checkoutUrl: 'https://pay.hotmart.com/toontales-mensal',
  },
];

export const subscriptionService = {
  getPlans(): PlanDetails[] {
    return SUBSCRIPTION_PLANS;
  },

  async checkUserSubscription(userId: string): Promise<{
    hasActiveSubscription: boolean;
    plan: PlanType;
    status: string;
    expiresAt?: string;
  }> {
    if (isSupabaseConfigured()) {
      try {
        const { data, error } = await supabase
          .from('subscriptions')
          .select('*, plan:subscription_plans(*)')
          .eq('userId', userId)
          .eq('status', 'ACTIVE')
          .single();

        if (!error && data) {
          return {
            hasActiveSubscription: true,
            plan: (data.plan?.slug as PlanType) || 'familiar',
            status: data.status,
            expiresAt: data.currentPeriodEnd,
          };
        }
      } catch (err) {
        console.warn('[SubscriptionService] Supabase query notice:', err);
      }
    }

    // Default fallback: Local Storage
    try {
      const stored = localStorage.getItem('toontales_active_session');
      if (stored) {
        const user = JSON.parse(stored);
        return {
          hasActiveSubscription: user.planStatus === 'active',
          plan: user.plan || 'vitalicio',
          status: user.planStatus || 'active',
        };
      }
    } catch {}

    return {
      hasActiveSubscription: true,
      plan: 'vitalicio',
      status: 'active',
    };
  },

  async createCheckoutSession(planSlug: PlanType, userId?: string, email?: string): Promise<{ url: string }> {
    // Try calling the Next.js API route if available
    try {
      const response = await fetch('/api/subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planSlug, userId, email }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.url) return { url: data.url };
      }
    } catch {
      // Fallback
    }

    const plan = SUBSCRIPTION_PLANS.find((p) => p.slug === planSlug) || SUBSCRIPTION_PLANS[0];
    return { url: plan.checkoutUrl || '#planos' };
  },
};
