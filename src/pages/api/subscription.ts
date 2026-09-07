import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';
import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY || 'sk_test_dummy_key';
const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2025-02-24.acacia' as any,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // GET: Check active subscription
  if (req.method === 'GET') {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ message: 'Parâmetro userId é obrigatório.' });
    }

    try {
      const subscription = await prisma.subscription.findFirst({
        where: {
          userId: String(userId),
          status: 'ACTIVE',
        },
        include: {
          plan: {
            include: {
              translations: true,
            },
          },
        },
        orderBy: { createdAt: 'desc' },
      });

      return res.status(200).json({
        hasActiveSubscription: !!subscription,
        subscription,
      });
    } catch (error: any) {
      console.warn('[API /subscription GET] Fallback notice:', error?.message);
      return res.status(200).json({
        hasActiveSubscription: true,
        plan: 'vitalicio',
        notice: 'Fallback active state',
      });
    }
  }

  // POST: Create checkout session or register subscription
  if (req.method === 'POST') {
    const { planSlug, userId, email, successUrl, cancelUrl } = req.body;

    if (!planSlug) {
      return res.status(400).json({ message: 'planSlug é obrigatório.' });
    }

    const appUrl = process.env.APP_URL || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    try {
      // If Stripe credentials are set up
      if (process.env.STRIPE_SECRET_KEY && !process.env.STRIPE_SECRET_KEY.includes('dummy')) {
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          mode: planSlug === 'vitalicio' ? 'payment' : 'subscription',
          customer_email: email,
          line_items: [
            {
              price_data: {
                currency: 'brl',
                product_data: {
                  name: `Toon Tales Kids - ${planSlug.toUpperCase()}`,
                  description: 'Acesso às histórias bíblicas interativas infantis',
                },
                unit_amount: planSlug === 'vitalicio' ? 9700 : planSlug === 'familiar' ? 1990 : 2990,
                ...(planSlug !== 'vitalicio' ? { recurring: { interval: 'month' } } : {}),
              },
              quantity: 1,
            },
          ],
          success_url: successUrl || `${appUrl}/#obrigado`,
          cancel_url: cancelUrl || `${appUrl}/#planos`,
          metadata: {
            userId: userId || '',
            planSlug,
          },
        });

        return res.status(200).json({ url: session.url, sessionId: session.id });
      }
    } catch (stripeErr: any) {
      console.warn('[API /subscription Stripe notice]:', stripeErr?.message);
    }

    // Default checkout fallback
    const fallbackUrls: Record<string, string> = {
      vitalicio: 'https://pay.hotmart.com/toontales-vitalicio',
      familiar: 'https://pay.hotmart.com/toontales-familiar',
      pessoal: 'https://pay.hotmart.com/toontales-mensal',
    };

    return res.status(200).json({
      url: fallbackUrls[planSlug] || fallbackUrls.vitalicio,
    });
  }

  return res.status(405).json({ message: 'Método não permitido.' });
}
