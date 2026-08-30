import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Play,
  CheckCircle2,
  Lock,
  Unlock,
  ShieldCheck,
  Star,
  Award,
  Zap,
  ArrowRight,
  Tv,
  Smartphone,
  Tablet,
  Laptop,
  HelpCircle,
  MessageCircle,
  Flame,
  Rocket,
  HeartPulse,
  Cpu,
  Leaf,
  Clock,
  Gift,
  ChevronDown,
  Volume2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LAB_KIDS_EPISODES, SCIENCE_TRACKS } from '../data/labKidsData';

interface LabKidsSalesPageProps {
  onOpenAuth: (mode?: 'login' | 'register') => void;
  onSelectPlan?: (planId: string) => void;
  onEnterPlatform?: () => void;
  onOpenBiblicalSales?: () => void;
}

export const LabKidsSalesPage: React.FC<LabKidsSalesPageProps> = ({
  onOpenAuth,
  onSelectPlan,
  onEnterPlatform,
  onOpenBiblicalSales,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({ hours: 3, minutes: 42, seconds: 18 });
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 3, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'Como vou receber o acesso ao Lab Kids?',
      a: 'O acesso é imediato! Assim que seu pagamento for confirmado, você receberá seus dados de acesso (login e senha) por e-mail e WhatsApp para começar a assistir agora mesmo.',
    },
    {
      q: 'Qual é a faixa etária recomendada?',
      a: 'O Lab Kids foi desenhado por educadores para crianças de 3 a 12 anos. O vocabulário é didático, claro e divertido, despertando a curiosidade dos menores e ensinando conceitos profundos para os maiores.',
    },
    {
      q: 'Existe alguma mensalidade ou cobrança recorrente?',
      a: 'NÃO! O pagamento é único e você terá acesso vitalício a todas as 30 aulas de ciências, quizzes do pequeno cientista e atualizações futuras sem nenhuma mensalidade.',
    },
    {
      q: 'Funciona na Smart TV, Celular e Tablet?',
      a: 'SIM! A plataforma é 100% responsiva (Web e PWA). Funciona com máxima fluidez em celulares Android e iPhone, tablets, iPads, computadores e Smart TVs através do navegador.',
    },
    {
      q: 'E se meu filho não gostar? Tenho garantia?',
      a: 'Você tem 7 dias de garantia incondicional de risco zero. Se por qualquer motivo você ou seu filho não amarem o conteúdo, basta enviar um e-mail ou mensagem no WhatsApp e devolvemos 100% do seu dinheiro.',
    },
  ];

  const testimonials = [
    {
      name: 'Camila Albuquerque',
      role: 'Mãe do Pedro (6 anos)',
      location: 'São Paulo - SP',
      text: 'O Pedro passava horas assistindo vídeos aleatórios e agitados na internet. Quando coloquei o Lab Kids sobre o Sistema Solar e o Corpo Humano, ele ficou fascinado! Agora ele me explica como o coração bate e como as plantas respiram!',
      stars: 5,
    },
    {
      name: 'Prof. Marcos Vinícius',
      role: 'Pai da Sofia (8 anos) e Pedagogo',
      location: 'Curitiba - PR',
      text: 'Como educador, fiquei impressionado com o rigor pedagógico aliado à linguagem lúdica. As animações são de altíssimo nível e os quizzes no final de cada aula fixam o conteúdo de verdade. Vale cada centavo!',
      stars: 5,
    },
    {
      name: 'Juliana e Renato',
      role: 'Pais do Theo (5 anos) e Clara (9 anos)',
      location: 'Belo Horizonte - MG',
      text: 'O melhor investimento do ano para a nossa família. É um alívio deixar as crianças assistindo a um conteúdo 100% limpo, seguro, que educa de verdade e sem nenhuma propaganda!',
      stars: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800 font-sans selection:bg-purple-600 selection:text-white pb-16">
      
      {/* ------------------------------------------------------------- */}
      {/* 1. TOPO DE URGÊNCIA & NOTIFICAÇÃO                            */}
      {/* ------------------------------------------------------------- */}
      <div className="w-full bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 text-white py-2 px-4 text-center text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-md">
        <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
        <span>OFERTA DE LANÇAMENTO LAB KIDS • 30 VÍDEOS + QUIZZES COM 70% OFF</span>
        <span className="hidden md:inline font-mono bg-black/30 px-2 py-0.5 rounded-md border border-white/20">
          ⏰ Encerra em: {String(timeLeft.hours).padStart(2, '0')}h : {String(timeLeft.minutes).padStart(2, '0')}m : {String(timeLeft.seconds).padStart(2, '0')}s
        </span>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 2. CABEÇALHO DA PÁGINA COM LOGO E BOTÃO DE COMPRA            */}
      {/* ------------------------------------------------------------- */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4 border-b border-purple-100">
        <div className="flex items-center gap-3">
          <img
            src="/labkids/branding/logo labkids portugues.png"
            alt="Lab Kids Logo"
            className="h-10 sm:h-12 w-auto object-contain drop-shadow-sm"
          />
          <span className="hidden sm:inline-block text-[11px] font-black uppercase tracking-wider text-purple-700 bg-purple-100 px-2.5 py-1 rounded-full border border-purple-200">
            Ciência & Descobertas
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenAuth('login')}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-purple-50 text-slate-700 hover:text-purple-700 text-xs font-bold transition-all flex items-center gap-1.5 border border-slate-200"
          >
            <span>🔐 Entrar (Já sou Aluno)</span>
          </button>

          <a
            href="#oferta"
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white text-xs font-black uppercase tracking-wider shadow-md shadow-emerald-400/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-1"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Garantir Vaga</span>
          </a>
        </div>
      </header>

      {/* ------------------------------------------------------------- */}
      {/* 3. HERO PRINCIPAL & VSL (VÍDEO DE VENDAS OFICIAL)             */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 text-center space-y-6">
        
        {/* Headline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-800 text-xs sm:text-sm font-extrabold shadow-xs">
          <Sparkles className="w-4 h-4 text-purple-600 animate-spin" />
          <span>O Melhor e Mais Completo Conteúdo Educativo Infantil do Brasil</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
          Aqui os Pequeninos Aprendem Sobre{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600">
            Ciência e os Mistérios do Planeta
          </span>{' '}
          de Forma Divertida em...
        </h1>

        {/* Big Highlight */}
        <div className="text-2xl sm:text-4xl font-black text-amber-500 uppercase tracking-wide">
          🔬 30 VÍDEOS EDUCATIVOS FULL HD + 90 QUIZZES!
        </div>

        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-medium">
          Troque as telas vazias e vícios da internet por um universo interativo onde seu filho aprende física, astronomia, corpo humano, natureza e tecnologia brincando!
        </p>

        {/* 🎬 VSL Video Player Container */}
        <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-purple-400 bg-slate-950 aspect-video group">
          <video
            src="/labkids/vsl.mp4"
            poster="/labkids/branding/Capa pc labkids.webp"
            controls
            playsInline
            className="w-full h-full object-contain"
          >
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>

        {/* Primary CTA Button */}
        <div className="pt-4 max-w-md mx-auto space-y-3">
          <a
            href="#oferta"
            className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-white font-black text-lg sm:text-xl uppercase tracking-wider shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 ring-4 ring-emerald-200"
          >
            <Sparkles className="w-6 h-6 fill-current" />
            <span>QUERO ACESSO IMEDIATO AO LAB KIDS</span>
          </a>

          <div className="flex items-center justify-center gap-4 text-xs text-slate-500 font-bold">
            <span className="flex items-center gap-1 text-emerald-600">
              <ShieldCheck className="w-4 h-4" /> 7 Dias de Garantia
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-purple-600">
              <Zap className="w-4 h-4" /> Acesso Imediato
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-indigo-600">
              <Lock className="w-4 h-4" /> Pagamento 100% Seguro
            </span>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. OS 3 PILARES DE DESENVOLVIMENTO INFANTIL                   */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
            Por Que o <span className="text-purple-600">Lab Kids</span> Transforma o Aprendizado?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Desenvolvido sob medida para prender a atenção das crianças com propósito e valores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-6 rounded-3xl bg-white border-2 border-purple-100 shadow-md hover:shadow-xl hover:border-purple-300 transition-all space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center font-black text-2xl shadow-inner">
              🧠
            </div>
            <h3 className="text-lg font-black text-slate-900">Atenção e Foco Real</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Vídeos envolventes e dinâmicos com duração calibrada (5 a 9 min) que mantêm o cérebro da criança ativo e focado no assunto.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-3xl bg-white border-2 border-amber-100 shadow-md hover:shadow-xl hover:border-amber-300 transition-all space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-black text-2xl shadow-inner">
              🚀
            </div>
            <h3 className="text-lg font-black text-slate-900">Desenvolvimento Escolar</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Conceitos de ciências, biologia, física e geografia que dão uma vantagem enorme para o seu filho na escola e na vida.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-3xl bg-white border-2 border-emerald-100 shadow-md hover:shadow-xl hover:border-emerald-300 transition-all space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-black text-2xl shadow-inner">
              🛡️
            </div>
            <h3 className="text-lg font-black text-slate-900">100% Livre de Lixo Digital</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Zero propagandas, zero algoritmos tóxicos e zero conteúdos vazios. Um porto seguro para você deixar seu filho navegar com tranquilidade.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. VITRINE DAS 5 TRILHAS & OS 30 EPISÓDIOS                    */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-gradient-to-b from-purple-900 via-indigo-950 to-slate-950 text-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/40 text-xs font-bold uppercase tracking-wider">
              Biblioteca Completa de Vídeos
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              30 Aulas Mágicas Divididas em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-amber-300">
                5 Trilhas Vivas
              </span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Veja tudo o que está esperando pelo seu filho dentro da plataforma:
            </p>
          </div>

          {/* 5 Tracks Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SCIENCE_TRACKS.map((track) => {
              const episodesInTrack = LAB_KIDS_EPISODES.filter((e) => e.track === track.id);
              return (
                <div
                  key={track.id}
                  className="p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 space-y-4 hover:bg-white/15 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{track.title.split(' ')[0]}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-xs font-bold">
                      {episodesInTrack.length} Aulas
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-white">{track.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{track.description}</p>
                  
                  <div className="pt-2 space-y-1 border-t border-white/10 text-xs text-slate-300">
                    {episodesInTrack.slice(0, 3).map((ep) => (
                      <div key={ep.id} className="flex items-center gap-1.5 truncate">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{ep.title}</span>
                      </div>
                    ))}
                    {episodesInTrack.length > 3 && (
                      <div className="text-[11px] font-bold text-amber-300 pt-1">
                        + {episodesInTrack.length - 3} outros episódios incríveis!
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Showcase of 4 Real Covers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            {LAB_KIDS_EPISODES.slice(0, 4).map((ep) => (
              <div key={ep.id} className="rounded-2xl overflow-hidden border-2 border-purple-400/40 shadow-xl group">
                <img
                  src={ep.coverImage}
                  alt={ep.title}
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-3 bg-slate-900 text-center">
                  <div className="text-xs font-bold text-white line-clamp-1">{ep.title}</div>
                  <div className="text-[10px] text-purple-400 font-semibold">{ep.duration} • Full HD</div>
                </div>
              </div>
            ))}
          </div>

          {/* Midpage CTA */}
          <div className="text-center pt-6">
            <a
              href="#oferta"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-base uppercase tracking-wider shadow-xl shadow-orange-500/30 hover:scale-105 active:scale-95 transition-all"
            >
              <Sparkles className="w-5 h-5 fill-current" />
              <span>Quero Desbloquear Todas as 30 Aulas Agora</span>
            </a>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 6. ACESSO EM QUALQUER DISPOSITIVO (CELULAR, TV, TABLET, PC)   */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="px-3.5 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-extrabold uppercase tracking-wider">
              Liberdade Total de Uso
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              Assista no Celular, Tablet, Computador ou na Smart TV da Sala!
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Você não precisa baixar programas pesados nem se preocupar com espaço no celular. O Lab Kids é leve, rápido e funciona direto no navegador ou como aplicativo instalado na tela inicial com 1 clique.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-3">
                <Smartphone className="w-6 h-6 text-purple-600" />
                <span className="text-xs font-bold text-slate-800">Android & iPhone</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-3">
                <Tablet className="w-6 h-6 text-indigo-600" />
                <span className="text-xs font-bold text-slate-800">iPads & Tablets</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-3">
                <Tv className="w-6 h-6 text-amber-600" />
                <span className="text-xs font-bold text-slate-800">Smart TVs</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-3">
                <Laptop className="w-6 h-6 text-emerald-600" />
                <span className="text-xs font-bold text-slate-800">PCs & Notebooks</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/labkids/branding/Labkids mockup portugues.webp"
              alt="Mockup Lab Kids Dispositivos"
              className="w-full max-w-lg h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 7. DEPOIMENTOS DE PAIS E EDUCADORES                           */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-purple-50/70 border-y border-purple-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              O Que Dizem os Pais e Educadores
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Famílias reais que trocaram as telas vazias pelo Lab Kids:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-purple-200/80 shadow-md space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    "{t.text}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <div className="font-black text-sm text-slate-900">{t.name}</div>
                  <div className="text-xs text-purple-700 font-bold">{t.role}</div>
                  <div className="text-[11px] text-slate-400">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 8. TABELA DE OFERTA DE LANÇAMENTO (CHECKOUT & PREÇOS)        */}
      {/* ------------------------------------------------------------- */}
      <section id="oferta" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-black uppercase tracking-wider">
            🏷️ Condição Especial de Lançamento
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900">
            Escolha o Seu Plano de Acesso
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Pagamento único • Sem mensalidades • Acesso vitalício para toda a família!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* PLANO 1: LAB KIDS INDEPENDENTE */}
          <div className="p-8 rounded-3xl bg-white border-2 border-purple-300 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-black uppercase tracking-wider">
                🔬 Canal Lab Kids
              </div>
              
              <h3 className="text-2xl font-black text-slate-900">Só Canal Lab Kids</h3>
              <p className="text-xs text-slate-600">Acesso completo às 30 aulas de ciências, 5 trilhas e aos quizzes pedagógicos.</p>

              {/* Price Tag */}
              <div className="pt-2">
                <div className="text-xs text-slate-400">Plano Pessoal (1 Filho)</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold text-slate-700">R$</span>
                  <span className="text-4xl sm:text-5xl font-black text-purple-700">37,00</span>
                  <span className="text-xs text-slate-500 font-bold">/ mês</span>
                </div>
                <div className="text-[11px] text-purple-600 font-bold mt-1">Ou Plano Familiar (3 Filhos) por R$ 79,00 / mês</div>
              </div>

              {/* Feature List */}
              <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>30 Aulas Animadas em Full HD com Dublagem PT-BR</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>5 Trilhas Científicas (Corpo, Espaço, Terra, Clima, Tech)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>90 Quizzes Interativos com XP e Medalhas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Acesso em Celular, Tablet, Computador e Smart TV</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Garantia de 7 Dias com Risco Zero</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onEnterPlatform()}
              className="w-full py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-black text-center text-sm uppercase tracking-wider shadow-lg shadow-purple-400/30 hover:scale-105 active:scale-95 transition-all block"
            >
              Assinar Só Lab Kids (R$ 37,00/mês)
            </button>
          </div>

          {/* PLANO 2: SUPER COMBO VIP (TUDO EM 1) */}
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-white border-4 border-amber-400 shadow-2xl flex flex-col justify-between space-y-6">
            
            {/* Best Value Ribbon */}
            <div className="absolute -top-4 right-6 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg">
              ⭐ MAIS VENDIDO • CAMPEÃO MENSAL
            </div>

            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-black uppercase tracking-wider">
                👑 Super Combo VIP Tudo
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-black text-white">COMBO VIP TUDO</h3>
              <p className="text-xs text-slate-300">Acesso ilimitado a TUDO: Histórias Bíblicas + Lab Kids + Kit 100 Atividades + Estúdio 3D!</p>

              {/* Price Tag */}
              <div className="pt-2">
                <div className="text-xs text-slate-400">Plano Pessoal (1 Filho)</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold text-amber-400">R$</span>
                  <span className="text-4xl sm:text-5xl font-black text-amber-400">97,90</span>
                  <span className="text-xs text-slate-300 font-bold">/ mês</span>
                </div>
                <div className="text-[11px] text-emerald-400 font-bold mt-1">Ou Plano Anual por R$ 970,90 / ano</div>
              </div>

              {/* Feature List */}
              <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs font-semibold text-slate-200">
                <div className="flex items-center gap-2 text-amber-300 font-bold">
                  <Sparkles className="w-4 h-4 shrink-0 fill-current" />
                  <span>30 Aulas Lab Kids de Ciências (Tudo Incluso)</span>
                </div>
                <div className="flex items-center gap-2 text-amber-300 font-bold">
                  <Sparkles className="w-4 h-4 shrink-0 fill-current" />
                  <span>34 Histórias Bíblicas em Áudio 3D (Temporadas 1 a 5)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Kit 100 Atividades em PDF A4 + Estúdio de Pintura 3D</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Acesso Ilimitado em Português Nativo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Portal dos Pais com Relatório de Progresso</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onEnterPlatform()}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-center text-sm uppercase tracking-wider shadow-xl shadow-orange-500/30 hover:scale-105 active:scale-95 transition-all block ring-2 ring-amber-300"
            >
              Garantir Combo VIP Completo (R$ 97,90/mês)
            </button>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 9. GARANTIA BLINDADA DE 7 DIAS                                */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="p-8 rounded-3xl bg-emerald-50 border-2 border-emerald-300 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left shadow-md">
          <div className="w-20 h-20 rounded-3xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/30">
            <ShieldCheck className="w-12 h-12" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-black text-slate-900">Garantia Blindada de 7 Dias (100% de Reembolso)</h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Você testa o Lab Kids com seus filhos por 7 dias. Se não amar ou achar que não valeu a pena, basta mandar uma única mensagem no WhatsApp e devolvemos cada centavo imediatamente. O risco é 100% nosso!
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 10. FAQ - DÚVIDAS FREQUENTES                                  */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Perguntas Frequentes (FAQ)</h2>
          <p className="text-xs sm:text-sm text-slate-600">Ficou com alguma dúvida? Veja as respostas rápidas abaixo:</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-4 sm:p-5 text-left font-black text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4 hover:bg-purple-50/50 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-purple-600 transition-transform duration-300 ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 11. BOTÃO FLUTUANTE DE WHATSAPP                               */}
      {/* ------------------------------------------------------------- */}
      <a
        href="https://wa.me/5516997325572?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20o%20Lab%20Kids!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center gap-2 group ring-4 ring-emerald-200"
        title="Fale Conosco pelo WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="hidden group-hover:inline text-xs font-black uppercase tracking-wider pr-1">
          Dúvidas? Fale no WhatsApp
        </span>
      </a>

    </div>
  );
};
