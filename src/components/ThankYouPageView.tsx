import React from 'react';
import {
  CheckCircle2,
  Sparkles,
  Crown,
  BookOpen,
  Headphones,
  Download,
  ShieldCheck,
  MessageCircle,
  Play,
  Heart,
  Star,
  Lock,
  ArrowRight,
  Smartphone,
  Gift,
  Palette,
} from 'lucide-react';
import { motion } from 'motion/react';

interface ThankYouPageViewProps {
  onEnterApp: () => void;
  onOpenColoringStudio: () => void;
}

export const ThankYouPageView: React.FC<ThankYouPageViewProps> = ({
  onEnterApp,
  onOpenColoringStudio,
}) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in text-slate-800 pb-20 select-none">
      
      {/* 1. CELEBRATION HEADER CARD */}
      <div className="relative rounded-[36px] bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 p-8 sm:p-12 text-center text-white shadow-2xl border-4 border-amber-300 overflow-hidden">
        
        {/* Floating Sparkles & Light FX */}
        <div className="absolute top-4 left-6 animate-pulse text-2xl">✨</div>
        <div className="absolute top-6 right-8 animate-bounce text-2xl">🎉</div>
        <div className="absolute bottom-4 left-10 text-2xl">⭐</div>

        <div className="space-y-4 max-w-2xl mx-auto relative z-10">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-white text-emerald-600 flex items-center justify-center shadow-xl text-3xl">
            <CheckCircle2 className="w-12 h-12 stroke-[2.5]" />
          </div>

          <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-white/20 text-white border border-white/40 text-xs font-black uppercase font-brand tracking-wider">
            <Crown className="w-3.5 h-3.5 text-amber-300" />
            Compra Aprovada com Sucesso!
          </span>

          <h1 className="text-3xl sm:text-5xl font-black font-brand tracking-tight drop-shadow-md">
            Parabéns, Família! Seu Acesso Está 100% Liberado!
          </h1>

          <p className="text-sm sm:text-base text-amber-100 font-medium leading-relaxed">
            Seja muito bem-vindo ao <strong>Toon Tales Kids</strong>! A partir de agora, seus filhos têm um ambiente 100% seguro, sem propagandas e repleto de histórias bíblicas cinematográficas.
          </p>
        </div>
      </div>

      {/* 2. PRIMARY ACTION - ENTER APP NOW */}
      <div className="bg-white border-4 border-emerald-400 rounded-[32px] p-6 sm:p-8 shadow-xl text-center space-y-4">
        <span className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase font-brand">
          Passo 1 • Acesso Imediato
        </span>
        
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-brand">
          Comece a Ouvir as Histórias Agora Mesmo!
        </h2>
        
        <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
          Você não precisa esperar nada por e-mail para começar. Basta clicar no botão abaixo para entrar no catálogo completo com 4 temporadas, quizzes e estúdio de pintura!
        </p>

        <div className="pt-2 max-w-md mx-auto">
          <button
            onClick={onEnterApp}
            className="w-full py-5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 text-white font-black text-base sm:text-lg font-brand uppercase tracking-wider shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 border-2 border-white ring-4 ring-emerald-400/30"
          >
            <Play className="w-6 h-6 fill-current" />
            <span>Entrar na Plataforma Agora</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* 3. THREE QUICK STEPS FOR PARENTS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Step 1 */}
        <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 shadow-sm space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black font-brand">
              1
            </div>
            <h3 className="font-brand font-black text-slate-900 text-base">
              Fixe no Celular (Como App)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              No navegador do celular (Chrome ou Safari), clique em <strong>"Compartilhar / Opções"</strong> e selecione <strong>"Adicionar à Tela de Início"</strong> para usar como um aplicativo real!
            </p>
          </div>
          <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-indigo-600">
            <Smartphone className="w-4 h-4" />
            <span>100% Compatível com iOS e Android</span>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-white border-2 border-amber-200 rounded-3xl p-6 shadow-sm space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-black font-brand">
              2
            </div>
            <h3 className="font-brand font-black text-slate-900 text-base">
              Caderno de Pintura 3D
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Liberamos o Estúdio de Pintura online para as crianças colorirem no tablet e a opção de baixar os desenhos em Preto e Branco para imprimir em casa.
            </p>
          </div>
          <div className="pt-2 border-t border-amber-100">
            <button
              onClick={onOpenColoringStudio}
              className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs font-brand uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Abrir Estúdio de Pintura</span>
            </button>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 shadow-sm space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center font-black font-brand">
              3
            </div>
            <h3 className="font-brand font-black text-slate-900 text-base">
              PIN Parental de Segurança
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              O controle de tempo e relatórios na <strong>Área dos Pais</strong> vem protegido de fábrica com o PIN de segurança padrão: <strong className="text-indigo-600 font-mono text-sm">1234</strong>.
            </p>
          </div>
          <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-600">
            <Lock className="w-4 h-4 text-indigo-500" />
            <span>PIN Padrão: 1234</span>
          </div>
        </div>

      </div>

      {/* 4. VIP WHATSAPP SUPPORT BOX */}
      <div className="bg-slate-900 text-white border-2 border-emerald-400 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Suporte VIP Dedicado
          </div>
          <h3 className="text-xl sm:text-2xl font-black font-brand text-amber-300">
            Ficou com alguma dúvida ou precisa de ajuda?
          </h3>
          <p className="text-xs text-slate-300 max-w-lg">
            Nossa equipe oficial está pronta para te atender no WhatsApp: <strong>(16) 99732-5572</strong>.
          </p>
        </div>

        <a
          href="https://wa.me/5516997325572?text=Ol%C3%A1!%20Acabei%20de%20adquirir%20o%20Toon%20Tales%20Kids%20e%20gostaria%20de%20suporte!"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs sm:text-sm font-brand uppercase tracking-wider shadow-lg flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shrink-0"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>Falar com o Suporte</span>
        </a>
      </div>

    </div>
  );
};
