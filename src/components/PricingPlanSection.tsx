import React, { useState } from 'react';
import { Check, Sparkles, Crown, Zap, ShieldCheck, ArrowRight, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useAuth } from '../contexts/AuthContext';
import { subscriptionService, SUBSCRIPTION_PLANS, PlanDetails } from '../services/subscriptionService';
import { PlanType } from '../services/authService';

interface PricingPlanSectionProps {
  onPlanSelected?: (plan: PlanType) => void;
}

export const PricingPlanSection: React.FC<PricingPlanSectionProps> = ({ onPlanSelected }) => {
  const { user, updateUserPlan } = useAuth();
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const handleChoosePlan = async (plan: PlanDetails) => {
    setLoadingPlan(plan.slug);

    if (onPlanSelected) {
      onPlanSelected(plan.slug);
      setLoadingPlan(null);
      return;
    }

    try {
      const { url } = await subscriptionService.createCheckoutSession(
        plan.slug,
        user?.id,
        user?.email
      );

      // If user is already logged in and it's a direct upgrade simulation
      if (user) {
        updateUserPlan(plan.slug, 'active');
      }

      if (url.startsWith('http')) {
        window.location.href = url;
      } else {
        // Scroll to checkout or open modal
        const el = document.getElementById('checkout-lead');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } catch (err) {
      console.error('Erro ao processar plano:', err);
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <section id="planos" className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gradient-to-tr from-amber-500/10 via-purple-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-xs uppercase tracking-wider mb-4">
          <Crown className="w-4 h-4 text-amber-400" /> Planos para Toda a Família
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Investimento Eterno no{' '}
          <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-200 bg-clip-text text-transparent">
            Coração dos Seus Filhos
          </span>
        </h2>
        <p className="mt-4 text-slate-300 text-sm sm:text-base">
          Escolha o plano ideal e garanta entretenimento bíblico interativo, seguro e sem propagandas.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 items-stretch">
        {SUBSCRIPTION_PLANS.map((plan) => {
          const isCurrentPlan = user?.plan === plan.slug;
          const isHighlight = plan.highlight;

          return (
            <motion.div
              key={plan.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 transition-all ${
                isHighlight
                  ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-amber-950/40 border-2 border-amber-400 shadow-2xl shadow-amber-500/20'
                  : 'bg-slate-900/90 border border-slate-800 hover:border-slate-700 shadow-xl'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-black tracking-wider uppercase shadow-md ${
                    isHighlight
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950'
                      : 'bg-slate-800 text-slate-300 border border-slate-700'
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              <div>
                {/* Plan Title */}
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  {isHighlight && <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />}
                </div>

                <p className="text-xs text-slate-400 min-h-[36px] mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6 p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-white">{plan.priceFormatted}</span>
                  </div>
                  <span className="text-xs text-amber-400/90 font-medium block mt-1">{plan.periodLabel}</span>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <button
                  type="button"
                  onClick={() => handleChoosePlan(plan)}
                  disabled={loadingPlan === plan.slug || isCurrentPlan}
                  className={`w-full py-3.5 px-6 rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 shadow-lg ${
                    isCurrentPlan
                      ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 cursor-default'
                      : isHighlight
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-amber-500/25 hover:scale-[1.02]'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:scale-[1.02]'
                  }`}
                >
                  {loadingPlan === plan.slug ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Processando...
                    </>
                  ) : isCurrentPlan ? (
                    <>
                      <ShieldCheck className="w-4 h-4" /> Plano Atual Ativo
                    </>
                  ) : isHighlight ? (
                    <>
                      Garantir Acesso Vitalício <ArrowRight className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Selecionar Plano <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Security note */}
      <div className="mt-8 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
        <ShieldCheck className="w-4 h-4 text-emerald-400" />
        <span>Garantia incondicional de 7 dias • Pagamento seguro e criptografado</span>
      </div>
    </section>
  );
};
