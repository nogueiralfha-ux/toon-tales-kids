import React, { useState } from 'react';
import {
  X,
  Award,
  Crown,
  Sparkles,
  DollarSign,
  TrendingUp,
  Users,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  MessageCircle,
  Download,
  Flame,
  ShieldCheck,
  Star,
  Gift,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AmbassadorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AmbassadorModal: React.FC<AmbassadorModalProps> = ({ isOpen, onClose }) => {
  const [salesSimulator, setSalesSimulator] = useState<number>(15);

  if (!isOpen) return null;

  // Calculation based on Vitalicio (R$ 485) and Familiar Anual (R$ 297)
  const tier =
    salesSimulator >= 30
      ? { name: '👑 Embaixador Elite', commission: 50, color: 'text-amber-400 bg-amber-500/20 border-amber-400/50' }
      : salesSimulator >= 10
      ? { name: '🚀 Embaixador PRO', commission: 45, color: 'text-orange-400 bg-orange-500/20 border-orange-400/50' }
      : { name: '🌱 Embaixador', commission: 40, color: 'text-emerald-400 bg-emerald-500/20 border-emerald-400/50' };

  // Average commission per sale (~R$ 180 on average between Vitalicio and Familiar)
  const estimatedAvgCommission = 437 * (tier.commission / 100);
  const totalMonthlyGain = (salesSimulator * estimatedAvgCommission).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const HOTMART_AFFILIATE_LINK = 'https://app.hotmart.com/affiliate-recruiting/view/8414983';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 1, y: 0 }}
        className="relative z-10 w-full max-w-2xl rounded-[36px] overflow-hidden bg-slate-900 border-4 border-amber-400 shadow-2xl text-white flex flex-col max-h-[92vh]"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 p-6 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-slate-950/30 flex items-center justify-center text-2xl shadow-inner">
              👑
            </div>
            <div>
              <span className="px-2.5 py-0.5 rounded-full bg-white text-orange-700 text-[10px] font-black uppercase font-brand">
                Programa Oficial de Afiliados
              </span>
              <h2 className="text-lg sm:text-2xl font-black font-brand leading-tight">
                Seja um Embaixador Toon Tales Kids!
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-200 text-xs sm:text-sm">
          {/* Mission Box */}
          <div className="p-5 rounded-3xl bg-slate-800/80 border border-slate-700 space-y-2">
            <h3 className="font-brand font-black text-amber-300 text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Você acredita que histórias bíblicas podem transformar famílias?
            </h3>
            <p className="text-slate-300 leading-relaxed">
              O <strong>Toon Tales Kids</strong> leva as histórias da Bíblia para milhares de crianças através de áudio 3D cinematográfico e trilíngue. Como nosso Embaixador, você compartilha essa bênção com mães, pais, professores e igrejas e recebe de <strong>40% a 50% de comissão</strong> por cada assinatura realizada através do seu link!
            </p>
          </div>

          {/* 3 Tiers Presentation */}
          <div className="space-y-3">
            <h4 className="font-brand font-black text-slate-100 text-sm uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4 text-orange-400" />
              Plano de Carreira dos Embaixadores
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Tier 1 */}
              <div className="p-4 rounded-2xl bg-slate-800/60 border border-emerald-500/40 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-brand font-black text-emerald-400 text-xs">🌱 Embaixador</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-[10px]">
                    40%
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">1 a 9 vendas / mês</p>
                <p className="text-emerald-300 font-bold text-xs">Até R$ 174,80 por venda</p>
              </div>

              {/* Tier 2 */}
              <div className="p-4 rounded-2xl bg-slate-800/60 border border-orange-500/40 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-brand font-black text-orange-400 text-xs">🚀 Embaixador PRO</span>
                  <span className="px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 font-bold text-[10px]">
                    45%
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">10 a 29 vendas / mês</p>
                <p className="text-orange-300 font-bold text-xs">Até R$ 196,65 por venda</p>
              </div>

              {/* Tier 3 */}
              <div className="p-4 rounded-2xl bg-gradient-to-b from-amber-500/20 to-slate-800/80 border-2 border-amber-400 space-y-2 shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="font-brand font-black text-amber-400 text-xs">👑 Embaixador Elite</span>
                  <span className="px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black text-[10px]">
                    50%
                  </span>
                </div>
                <p className="text-[11px] text-amber-200">30+ vendas / mês</p>
                <p className="text-amber-300 font-bold text-xs">Até R$ 218,50 por venda</p>
              </div>
            </div>
          </div>

          {/* Interactive Calculator */}
          <div className="p-5 sm:p-6 rounded-3xl bg-slate-950 border border-amber-500/40 space-y-4 shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div>
                <h4 className="font-brand font-black text-amber-300 text-sm">
                  Simulador de Ganhos Mensais
                </h4>
                <p className="text-[11px] text-slate-400">
                  Arraste para ver quanto você pode faturar por mês:
                </p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-black font-brand border ${tier.color}`}>
                {tier.name} ({tier.commission}%)
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                <span>Vendas no mês: <strong className="text-amber-400 font-mono text-base">{salesSimulator} assinaturas</strong></span>
              </div>
              <input
                type="range"
                min="1"
                max="60"
                value={salesSimulator}
                onChange={(e) => setSalesSimulator(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
            </div>

            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-300">Seu Faturamento Estimado:</span>
              <span className="text-xl sm:text-2xl font-black font-brand text-emerald-400 font-mono">
                R$ {totalMonthlyGain} / mês
              </span>
            </div>
          </div>

          {/* What We Provide for Affiliates */}
          <div className="space-y-2">
            <h4 className="font-brand font-black text-slate-200 text-xs uppercase tracking-wider">
              Materiais Prontos Inclusos para Você Vender:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-800/40">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Vídeos e Trailers em 3D para Stories/Reels</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-800/40">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Textos e Copies validados para WhatsApp</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-800/40">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Capas e artes oficiais em alta resolução</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-800/40">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pagamento direto e seguro via Hotmart</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3 pt-2">
            <a
              href={HOTMART_AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-sm sm:text-base font-brand uppercase tracking-wider shadow-xl shadow-orange-500/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-center"
            >
              <Crown className="w-5 h-5" />
              <span>Quero Me Afiliar na Hotmart Agora</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/5516997325572?text=Ol%C3%A1!%20Gostaria%20de%20me%20tornar%20um%20Embaixador%20do%20Toon%20Tales%20Kids!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-2xl bg-emerald-600/90 hover:bg-emerald-600 text-white font-bold text-xs font-brand uppercase tracking-wider flex items-center justify-center gap-2 transition-colors border border-emerald-400/40"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Falar com o Gerente de Afiliados no WhatsApp</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
