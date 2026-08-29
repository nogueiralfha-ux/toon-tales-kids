import React, { useState, useEffect } from 'react';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Sparkles,
  ArrowRight,
  MessageCircle,
  CreditCard,
  QrCode,
  AlertTriangle,
  Gift,
  Crown,
  HeartHandshake,
  Check,
  Globe,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CHECKOUT_PLANS_CONFIG,
  saveLeadCapture,
  PlanConfig,
  SupportedCurrency,
} from '../config/checkoutConfig';

interface CheckoutLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  planId: string;
  currency?: SupportedCurrency;
  onSuccessAccess: () => void;
}

export const CheckoutLeadModal: React.FC<CheckoutLeadModalProps> = ({
  isOpen,
  onClose,
  planId,
  currency = 'BRL',
  onSuccessAccess,
}) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [activeCurrency, setActiveCurrency] = useState<SupportedCurrency>(currency);
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'credit_card' | 'paypal'>('pix');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [showExitIntent, setShowExitIntent] = useState<boolean>(false);

  const plan: PlanConfig = CHECKOUT_PLANS_CONFIG[planId] || CHECKOUT_PLANS_CONFIG['vitalicio'];
  const currentPricing = plan.prices[activeCurrency] || plan.prices['BRL'];

  useEffect(() => {
    setActiveCurrency(currency);
  }, [currency]);

  // Auto-save lead capture as user types
  useEffect(() => {
    if (email.length > 5 || phone.length >= 8) {
      saveLeadCapture({
        name: name || 'Visitante',
        email,
        phone,
        planId: plan.id,
        planName: plan.name,
        planPrice: currentPricing.priceDisplay,
        currency: activeCurrency,
        status: 'initiated',
        lastStep: 'preenchendo_dados',
      });
    }
  }, [name, email, phone, plan, currentPricing, activeCurrency]);

  if (!isOpen) return null;

  const handleAttemptClose = () => {
    if ((name || email || phone) && !isSuccess) {
      saveLeadCapture({
        name: name || 'Responsável',
        email,
        phone,
        planId: plan.id,
        planName: plan.name,
        planPrice: currentPricing.priceDisplay,
        currency: activeCurrency,
        status: 'abandoned',
        lastStep: 'carrinho_abandonado',
      });
      setShowExitIntent(true);
    } else {
      onClose();
    }
  };

  const handleProceedToPayment = () => {
    if (!name.trim()) {
      alert('Por favor, informe seu nome completo.');
      return;
    }
    if (!email.includes('@')) {
      alert('Por favor, informe um e-mail válido para receber o acesso.');
      return;
    }
    if (phone.replace(/\D/g, '').length < 7) {
      alert('Por favor, informe seu WhatsApp/Telefone com DDD ou código do país.');
      return;
    }

    setIsSubmitting(true);

    saveLeadCapture({
      name,
      email,
      phone,
      planId: plan.id,
      planName: plan.name,
      planPrice: currentPricing.priceDisplay,
      currency: activeCurrency,
      status: 'completed',
      lastStep: 'redirecionado_gateway',
    });

    // Trigger Meta Pixel InitiateCheckout Event
    try {
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'InitiateCheckout', {
          content_name: plan.name,
          content_category: 'Bible Audio Course',
          value: currentPricing.cashPrice,
          currency: activeCurrency,
        });
      }
    } catch {}

    // Check for Hotmart Global Checkout Link
    if (plan.hotmartCheckoutUrl && plan.hotmartCheckoutUrl.startsWith('http')) {
      window.location.href = plan.hotmartCheckoutUrl;
      return;
    }

    // Check for Stripe Checkout Link
    if (plan.stripeCheckoutUrl && plan.stripeCheckoutUrl.startsWith('http')) {
      window.location.href = plan.stripeCheckoutUrl;
      return;
    }

    // Check for Asaas Link
    if (plan.asaasPaymentLink && plan.asaasPaymentLink.startsWith('http')) {
      window.location.href = plan.asaasPaymentLink;
      return;
    }

    // Simulated approved checkout for testing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onSuccessAccess();
      }, 2000);
    }, 1200);
  };

  const whatsappRecoveryMsg = encodeURIComponent(
    `Olá! Meu nome é ${name || 'pai/mãe'}, telefone ${phone || ''} e e-mail ${email || ''}. Estava na página de compra do ${plan.name} (${currentPricing.priceDisplay}) e gostaria de ajuda para concluir minha inscrição!`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleAttemptClose}
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 1, y: 0 }}
        className="relative z-10 w-full max-w-xl rounded-[36px] overflow-hidden bg-white border-4 border-amber-300 shadow-2xl flex flex-col max-h-[94vh]"
      >
        {/* Top Header */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white p-5 sm:p-6 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center shadow-inner text-xl">
              👑
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-white text-orange-600 text-[10px] font-black uppercase font-brand">
                  {plan.badge}
                </span>
                {/* Currency Switcher */}
                <div className="inline-flex rounded-lg bg-black/30 p-0.5 text-[10px] font-black font-brand">
                  <button
                    onClick={() => setActiveCurrency('BRL')}
                    className={`px-1.5 py-0.5 rounded ${activeCurrency === 'BRL' ? 'bg-amber-300 text-slate-950' : 'text-white'}`}
                  >
                    R$
                  </button>
                  <button
                    onClick={() => setActiveCurrency('USD')}
                    className={`px-1.5 py-0.5 rounded ${activeCurrency === 'USD' ? 'bg-amber-300 text-slate-950' : 'text-white'}`}
                  >
                    $ USD
                  </button>
                  <button
                    onClick={() => setActiveCurrency('EUR')}
                    className={`px-1.5 py-0.5 rounded ${activeCurrency === 'EUR' ? 'bg-amber-300 text-slate-950' : 'text-white'}`}
                  >
                    € EUR
                  </button>
                </div>
              </div>
              <h3 className="text-base sm:text-xl font-black font-brand leading-tight">
                Liberar Acesso do Toon Tales Kids
              </h3>
            </div>
          </div>

          <button
            onClick={handleAttemptClose}
            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1 space-y-5">
          {!isSuccess ? (
            <>
              {/* Plan Summary Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wide">
                    Plano Escolhido:
                  </span>
                  <h4 className="font-brand font-black text-slate-900 text-sm sm:text-base">
                    {plan.name}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {plan.billingType === 'vitalicio_taxa_unica'
                      ? 'Pagamento único • Sem mensalidades futuras'
                      : 'Acesso imediato com renovação automática cancelável'}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-lg sm:text-2xl font-black font-brand text-orange-600">
                    {currentPricing.priceDisplay}
                  </span>
                </div>
              </div>

              {/* Lead Capture Form */}
              <div className="space-y-3.5 text-xs font-bold text-slate-700">
                <div>
                  <label className="block text-slate-600 mb-1">
                    Nome Completo do Responsável <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Luciana Oliveira Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 font-medium focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all text-slate-900"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-600 mb-1">
                      E-mail para Receber o Acesso <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="seuemail@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 font-medium focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 mb-1">
                      WhatsApp / Telefone com DDD <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+55 (16) 99732-5572"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 font-medium focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all text-slate-900"
                    />
                  </div>
                </div>

                {/* Formas de Pagamento Internacionais / Nacionais */}
                <div>
                  <label className="block text-slate-600 mb-1.5">Forma de Pagamento</label>
                  <div className="grid grid-cols-3 gap-2">
                    {activeCurrency === 'BRL' && (
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('pix')}
                        className={`p-2.5 rounded-2xl border-2 font-black text-xs font-brand flex flex-col items-center justify-center gap-1 transition-all ${
                          paymentMethod === 'pix'
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-900 shadow-sm'
                            : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        <QrCode className="w-4 h-4 text-emerald-600" />
                        <span>PIX Imediato</span>
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('credit_card')}
                      className={`p-2.5 rounded-2xl border-2 font-black text-xs font-brand flex flex-col items-center justify-center gap-1 transition-all ${
                        paymentMethod === 'credit_card'
                          ? 'border-orange-500 bg-orange-50 text-orange-900 shadow-sm'
                          : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <CreditCard className="w-4 h-4 text-orange-600" />
                      <span>Cartão de Crédito</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('paypal')}
                      className={`p-2.5 rounded-2xl border-2 font-black text-xs font-brand flex flex-col items-center justify-center gap-1 transition-all ${
                        paymentMethod === 'paypal'
                          ? 'border-sky-500 bg-sky-50 text-sky-900 shadow-sm'
                          : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <Globe className="w-4 h-4 text-sky-600" />
                      <span>PayPal / Global</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Trust Badge & Security */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-slate-600 text-xs">
                <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
                <div className="space-y-0.5">
                  <p className="font-bold text-slate-800">
                    Garantia Incondicional de 7 Dias • Checkout 100% Blindado
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Seus dados estão protegidos por criptografia internacional SSL de 256 bits.
                  </p>
                </div>
              </div>

              {/* Action Submit Button */}
              <button
                type="button"
                onClick={handleProceedToPayment}
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 text-white font-black text-sm sm:text-base font-brand uppercase tracking-wider shadow-xl shadow-emerald-500/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Processando Acesso Seguro...</span>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Avançar para Pagamento Seguro</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </>
          ) : (
            <div className="text-center py-10 space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-xl animate-bounce">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-brand">
                Parabéns, {name}! 🎉
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Seu acesso ao <strong>Toon Tales Kids</strong> está confirmado. Entrando no painel dos pais e na galeria de histórias...
              </p>
            </div>
          )}
        </div>

        {/* EXIT-INTENT RECOVERY MODAL */}
        <AnimatePresence>
          {showExitIntent && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute inset-0 z-20 bg-slate-950/95 p-6 sm:p-8 text-white flex flex-col justify-between"
            >
              <div className="space-y-4 text-center">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 text-slate-950 flex items-center justify-center text-2xl shadow-lg">
                  🎁
                </div>
                <div className="space-y-1">
                  <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-400/30 text-[10px] font-black uppercase font-brand">
                    Espere! Não vá embora ainda
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black font-brand text-amber-300">
                    Ficou com alguma dúvida para liberar o acesso dos seus filhos?
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Não deixe seus filhos sem as histórias que edificam a fé! Fale agora com nosso suporte oficial no WhatsApp para tirar dúvidas sobre parcelamento ou ativação.
                </p>
              </div>

              <div className="space-y-3 pt-4">
                <a
                  href={`https://wa.me/5516997325572?text=${whatsappRecoveryMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs sm:text-sm font-brand uppercase tracking-wider shadow-xl flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all border-2 border-white"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Tirar Dúvidas com Suporte no WhatsApp</span>
                </a>

                <button
                  onClick={() => setShowExitIntent(false)}
                  className="w-full py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-slate-300 text-xs font-bold font-brand transition-colors"
                >
                  Voltar e Concluir Minha Inscrição
                </button>

                <button
                  onClick={onClose}
                  className="w-full text-center text-[11px] text-slate-400 hover:underline pt-1"
                >
                  Fechar janela
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
