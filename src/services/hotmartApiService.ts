import { authService, PlanType, UserAccount } from './authService';

export interface HotmartWebhookPayload {
  event: 'PURCHASE_APPROVED' | 'PURCHASE_COMPLETE' | 'PURCHASE_REFUNDED' | 'PURCHASE_CANCELED' | 'PURCHASE_CHARGEBACK';
  data: {
    product: {
      id: number;
      name: string;
      ucode: string;
    };
    buyer: {
      name: string;
      email: string;
      checkout_phone?: string;
    };
    purchase: {
      transaction: string;
      order_date: number;
      approved_date?: number;
      status: string;
      price: {
        value: number;
        currency_value: string;
      };
      offer: {
        code: string;
        payment_mode: string;
      };
    };
  };
}

export interface WebhookLogItem {
  id: string;
  timestamp: string;
  event: string;
  buyerName: string;
  buyerEmail: string;
  planAssigned: PlanType;
  priceDisplay: string;
  transactionId: string;
  status: 'success' | 'error';
}

const STORAGE_WEBHOOKS_KEY = 'toontales_hotmart_webhooks_log';

export const hotmartApiService = {
  getLogs(): WebhookLogItem[] {
    try {
      const stored = localStorage.getItem(STORAGE_WEBHOOKS_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  },

  saveLog(log: WebhookLogItem) {
    try {
      const logs = this.getLogs();
      logs.unshift(log);
      localStorage.setItem(STORAGE_WEBHOOKS_KEY, JSON.stringify(logs.slice(0, 50)));
    } catch {}
  },

  clearLogs() {
    try {
      localStorage.removeItem(STORAGE_WEBHOOKS_KEY);
    } catch {}
  },

  /**
   * Process incoming Hotmart Webhook (Real or Simulated)
   */
  processWebhook(payload: HotmartWebhookPayload): { success: boolean; message: string; user?: UserAccount } {
    const { event, data } = payload;
    const buyer = data.buyer;
    const offerCode = data.purchase?.offer?.code || '';
    const transaction = data.purchase?.transaction || 'HP' + Date.now();
    const priceVal = data.purchase?.price?.value || 485;
    const currency = data.purchase?.price?.currency_value || 'BRL';

    // Map offer code to plan type
    let plan: PlanType = 'vitalicio';
    if (offerCode === '0wee11gn' || priceVal === 297) {
      plan = 'familiar';
    } else if (offerCode === 'pflzun2m' || priceVal === 119) {
      plan = 'pessoal';
    } else {
      plan = 'vitalicio';
    }

    if (event === 'PURCHASE_APPROVED' || event === 'PURCHASE_COMPLETE') {
      const users = authService.getUsers();
      const existing = users.find((u) => u.email.toLowerCase() === buyer.email.toLowerCase());

      let resultingUser: UserAccount;

      if (existing) {
        authService.updateUserPlan(existing.id, plan, 'active');
        resultingUser = { ...existing, plan, planStatus: 'active' };
      } else {
        const reg = authService.register({
          name: buyer.name,
          email: buyer.email,
          phone: buyer.checkout_phone,
          plan: plan,
        });
        resultingUser = reg.user!;
      }

      this.saveLog({
        id: 'log-' + Date.now(),
        timestamp: new Date().toISOString(),
        event,
        buyerName: buyer.name,
        buyerEmail: buyer.email,
        planAssigned: plan,
        priceDisplay: `${currency} ${priceVal.toFixed(2)}`,
        transactionId: transaction,
        status: 'success',
      });

      return {
        success: true,
        message: `Acesso liberado com sucesso para ${buyer.name} (${plan.toUpperCase()})!`,
        user: resultingUser,
      };
    } else if (event === 'PURCHASE_REFUNDED' || event === 'PURCHASE_CANCELED' || event === 'PURCHASE_CHARGEBACK') {
      const users = authService.getUsers();
      const existing = users.find((u) => u.email.toLowerCase() === buyer.email.toLowerCase());
      if (existing) {
        authService.updateUserPlan(existing.id, 'degustacao', 'expired');
      }

      this.saveLog({
        id: 'log-' + Date.now(),
        timestamp: new Date().toISOString(),
        event,
        buyerName: buyer.name,
        buyerEmail: buyer.email,
        planAssigned: 'degustacao',
        priceDisplay: `${currency} ${priceVal.toFixed(2)}`,
        transactionId: transaction,
        status: 'success',
      });

      return {
        success: true,
        message: `Status de acesso atualizado para cancelado/reembolsado: ${buyer.email}`,
      };
    }

    return { success: false, message: 'Evento não suportado' };
  },

  /**
   * Helper to simulate a test purchase from Hotmart
   */
  simulateTestPurchase(name: string, email: string, phone: string, plan: PlanType) {
    const offerMap: Record<PlanType, { code: string; price: number }> = {
      vitalicio: { code: 'e3cw731a', price: 485.0 },
      familiar: { code: '0wee11gn', price: 297.0 },
      pessoal: { code: 'pflzun2m', price: 119.0 },
      degustacao: { code: 'free', price: 0.0 },
    };

    const targetOffer = offerMap[plan];

    return this.processWebhook({
      event: 'PURCHASE_APPROVED',
      data: {
        product: {
          id: 8414983,
          name: 'TOON TALES KIDS — Bíblia em Áudio e Aventuras Bíblicas',
          ucode: 'T107380286O',
        },
        buyer: {
          name,
          email,
          checkout_phone: phone,
        },
        purchase: {
          transaction: 'TEST-' + Math.random().toString(36).substring(2, 9).toUpperCase(),
          order_date: Date.now(),
          approved_date: Date.now(),
          status: 'APPROVED',
          price: {
            value: targetOffer.price,
            currency_value: 'BRL',
          },
          offer: {
            code: targetOffer.code,
            payment_mode: 'CREDIT_CARD',
          },
        },
      },
    });
  },
};
