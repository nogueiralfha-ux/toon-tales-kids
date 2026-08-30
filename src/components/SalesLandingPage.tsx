import React, { useState, useEffect } from 'react';
import { BIBLE_SEASONS, ALL_EPISODES } from '../data/catalog';
import { CHARACTERS_DATA } from '../data/charactersData';
import { ToonTalesArtwork } from './ToonTalesArtwork';
import { PlatformVideoTour } from './PlatformVideoTour';
import { ColoringStudioModal } from './ColoringStudioModal';
import { CheckoutLeadModal } from './CheckoutLeadModal';
import { AmbassadorModal } from './AmbassadorModal';
import { audioEngine } from '../services/audioEngine';
import { SupportedCurrency, CHECKOUT_PLANS_CONFIG } from '../config/checkoutConfig';
import {
  Sparkles,
  Play,
  Pause,
  ShieldCheck,
  Heart,
  BookOpen,
  Star,
  Trophy,
  Users,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Moon,
  Award,
  Check,
  HelpCircle,
  Volume2,
  Lock,
  Smartphone,
  Flame,
  ArrowRight,
  Shield,
  Zap,
  MessageCircle,
  Clock,
  ThumbsUp,
  Headphones,
  Film,
  Layers,
  Crown,
  User,
  UserCheck,
  Video,
  Eye,
  X,
  Globe,
  Languages,
  Gift,
  Download,
  FileText,
  Timer,
  CheckCheck,
  Palette,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SalesLandingPageProps {
  onEnterPlatform?: () => void;
}

export type PlanType = 'pessoal_mensal' | 'pessoal_anual' | 'familiar_mensal' | 'familiar_anual' | 'vitalicio';
export type LangType = 'pt' | 'en' | 'es';

export const SalesLandingPage: React.FC<SalesLandingPageProps> = ({ onEnterPlatform }) => {
  const [isPlayingDemo, setIsPlayingDemo] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [billingCycle, setBillingCycle] = useState<'annual' | 'monthly'>('annual');
  const [selectedCurrency, setSelectedCurrency] = useState<SupportedCurrency>('BRL');
  const [selectedPlan, setSelectedPlan] = useState<PlanType>('vitalicio');
  const [modularPlanMode, setModularPlanMode] = useState<'pessoal' | 'familiar'>('pessoal');
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState<boolean>(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState<boolean>(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);
  const [isColoringModalOpen, setIsColoringModalOpen] = useState<boolean>(false);
  const [isAmbassadorModalOpen, setIsAmbassadorModalOpen] = useState<boolean>(false);
  const [videoModalTab, setVideoModalTab] = useState<'video' | 'tour'>('video');
  const [selectedDemoLang, setSelectedDemoLang] = useState<LangType>('pt');
  const [showStickyCta, setShowStickyCta] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.scrollY > 500;
    }
    return false;
  });

  // Countdown timer state (Offer urgency)
  const [timeLeft, setTimeLeft] = useState({
    hours: 3,
    minutes: 47,
    seconds: 32,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 3, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Sticky CTA scroll detection (executa imediatamente no mount)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cinematic Hero Slider State
  const [heroSlideIndex, setHeroSlideIndex] = useState<number>(0);

  const heroSlides = [
    {
      id: 'jesus_birth',
      tag: 'Superprodução em Áudio • Temporada 3',
      title: 'O Nascimento de Jesus',
      subtitle: 'Uma Estrela Brilhante e o Maior Presente do Céu',
      desc: 'Uma noite serena em Belém, pastores no campo ouvindo o coral de anjos e uma estrela mágica que guiou os sábios do oriente até o Salvador da humanidade.',
      lesson: 'Jesus é o maior presente de amor e paz que Deus deu ao mundo.',
      image: '/characters/jesus.jpg',
      verse: 'Lucas 2 • Mateus 1',
    },
    {
      id: 'david_goliath',
      tag: 'Grandes Aventuras • Temporada 2',
      title: 'Davi e o Gigante Golias',
      subtitle: 'Coragem, Fé e a Pequena Pedra que Derrubou um Gigante',
      desc: 'Enquanto todo o exército tremia de medo, um jovem pastorzinho de ovelhas armado apenas de uma funda e de uma fé inabalável em Deus enfrentou o maior guerreiro dos filisteus.',
      lesson: 'Quando confiamos no Senhor dos Exércitos, nenhum gigante pode nos deter.',
      image: '/characters/david.jpg',
      verse: '1 Samuel 17',
    },
    {
      id: 'moses_redsea',
      tag: 'Milagres e Maravilhas • Temporada 2',
      title: 'A Travessia do Mar Vermelho',
      subtitle: 'O Libertador e as Águas que se Abriram',
      desc: 'Com o exército de Faraó marchando atrás e o mar profundo à frente, Moisés ergueu seu cajado e o poder de Deus abriu um caminho seco no meio das águas cristalinas.',
      lesson: 'Deus abre caminhos onde não há caminho para cuidar de seus filhos.',
      image: '/characters/moses.jpg',
      verse: 'Êxodo 14',
    },
    {
      id: 'joshua_jericho',
      tag: 'Conquistas da Fé • Temporada 2',
      title: 'Josué e as Muralhas de Jericó',
      subtitle: 'Sete Trombetas, Marchas de Louvor e a Queda dos Muros',
      desc: 'Ao toque das trombetas e ao brado de fé do povo de Deus, as impenetráveis muralhas de Jericó ruíram por terra demonstrando a glória do Todo-Poderoso.',
      lesson: 'A obediência com louvor derruba qualquer muralha em nossas vidas.',
      image: '/characters/jericho.jpg',
      verse: 'Josué 6',
    },
    {
      id: 'paul_rome',
      tag: 'Igreja e Apóstolos • Temporada 4',
      title: 'A Grande Viagem de Paulo a Roma',
      subtitle: 'Tempestades, Naufrágios e uma Fé que Nunca Desiste',
      desc: 'Ventos violentos, mares revoltos e a picada de uma víbora venenosa na ilha de Malta não conseguiram parar a missão de Paulo de levar o amor de Deus até a capital do império.',
      lesson: 'Tudo podemos Naquele que nos fortalece em todas as circunstâncias.',
      image: '/characters/paul.jpg',
      verse: 'Atos 27-28',
    },
    {
      id: 'noah_ark',
      tag: 'O Começo de Tudo • Temporada 1',
      title: 'A Grande Arca de Noé',
      subtitle: 'O Arco-Íris da Aliança e a Fé que Salvou a Família',
      desc: 'Construindo um barco gigante no meio da terra seca sob a promessa de Deus, Noé protegeu os animais e viu o primeiro arco-íris de esperança brilhar no céu.',
      lesson: 'A obediência paciente a Deus sempre traz segurança e paz.',
      image: '/characters/noah.jpg',
      verse: 'Gênesis 6-9',
    },
  ];

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const currentHero = heroSlides[heroSlideIndex];

  // Multilingual lines
  const getDemoLinesByLang = (lang: LangType) => {
    if (lang === 'en') {
      return [
        {
          id: 'demo-en-1',
          character: 'narrator' as const,
          characterLabel: 'Narrator (English)',
          text: 'Welcome to Toon Tales Kids! Immersive Bible audio stories teaching eternal faith and courage for your children!',
          emotionGuide: 'Warm and enthusiastic',
        },
        {
          id: 'demo-en-2',
          character: 'god' as const,
          characterLabel: 'Voice of God',
          text: 'Fear not, My child. Be strong and courageous, for the Lord your God is with you wherever you go!',
          emotionGuide: 'Majestic with sacred echo',
        },
        {
          id: 'demo-en-3',
          character: 'davi' as const,
          characterLabel: 'David',
          text: 'You come against me with sword and spear, but I come against you in the name of the Lord of Hosts!',
          emotionGuide: 'Brave and bold',
        },
      ];
    } else if (lang === 'es') {
      return [
        {
          id: 'demo-es-1',
          character: 'narrator' as const,
          characterLabel: 'Narrador (Español)',
          text: '¡Bienvenidos a Toon Tales Kids! ¡Historias bíblicas en audio inmersivo que enseñan valores eternos para tus hijos!',
          emotionGuide: 'Cálido y entusiasta',
        },
        {
          id: 'demo-es-2',
          character: 'god' as const,
          characterLabel: 'Voz de Dios',
          text: '¡No temas, hijo mío. Sé fuerte y valiente, porque Yo el Señor tu Dios estoy contigo dondequiera que vayas!',
          emotionGuide: 'Majestuoso con eco sagrado',
        },
        {
          id: 'demo-es-3',
          character: 'davi' as const,
          characterLabel: 'David',
          text: '¡Tú vienes contra mí con espada y lanza, pero yo voy contra ti en el nombre del Señor de los Ejércitos!',
          emotionGuide: 'Valiente y lleno de fe',
        },
      ];
    }

    // Default: PT-BR
    return [
      {
        id: 'demo-pt-1',
        character: 'narrator' as const,
        characterLabel: 'Narrador',
        text: 'Bem-vindo ao Toon Tales Kids! Histórias bíblicas em áudio que ensinam valores eternos para os seus filhos!',
        emotionGuide: 'Entusiasmado e caloroso',
      },
      {
        id: 'demo-pt-2',
        character: 'god' as const,
        characterLabel: 'Voz de Deus',
        text: 'Não temas, meu filho. Sê forte e corajoso, pois Eu sou contigo por onde quer que andares!',
        emotionGuide: 'Majestoso com eco sagrado',
      },
      {
        id: 'demo-pt-3',
        character: 'davi' as const,
        characterLabel: 'Davi',
        text: 'Você vem contra mim com espada e lança, mas eu vou contra você em nome do Senhor dos Exércitos!',
        emotionGuide: 'Corajoso e cheio de fé',
      },
    ];
  };

  // Audio preview toggle
  const handleToggleDemoAudio = () => {
    audioEngine.initContext();
    if (isPlayingDemo) {
      audioEngine.stopEpisode();
      setIsPlayingDemo(false);
    } else {
      setIsPlayingDemo(true);
      const demoScenes = [
        {
          id: 999,
          sceneNumber: 1,
          title: `Demonstração Oficial (${selectedDemoLang.toUpperCase()})`,
          subtitle: currentHero.title,
          biblicalRef: currentHero.verse,
          durationLabel: '30 seg',
          estimatedDurationSec: 30,
          ambientType: 'desert_camp' as const,
          musicTheme: 'david_theme' as const,
          visualKey: 's2e5_01_shepherd' as const,
          environmentSummary: 'Cenário Bíblico Cinematográfico',
          musicDescription: 'Trilha orquestral heroica e cinematográfica',
          soundEffects: ['star_chimes'],
          lines: getDemoLinesByLang(selectedDemoLang),
          directorLesson: currentHero.lesson,
        },
      ];

      audioEngine.startEpisode(demoScenes, 0, 0, {
        onPlaybackStateChange: (playing) => setIsPlayingDemo(playing),
        onEpisodeComplete: () => setIsPlayingDemo(false),
      });
    }
  };

  const handleCheckout = (plan: PlanType) => {
    setSelectedPlan(plan);
    setIsCheckoutModalOpen(true);
  };

  const handleSimulatePayment = () => {
    setCheckoutSuccess(true);
    setTimeout(() => {
      setIsCheckoutModalOpen(false);
      setCheckoutSuccess(false);
      if (onEnterPlatform) onEnterPlatform();
    }, 1800);
  };

  const getPlanDetails = (plan: PlanType) => {
    switch (plan) {
      case 'pessoal_mensal':
        return { name: 'Plano Pessoal Mensal (1 Filho)', price: 'R$ 19,90 / mês' };
      case 'pessoal_anual':
        return { name: 'Plano Pessoal Anual (1 Filho • 50% OFF)', price: '12x R$ 9,90 (ou R$ 119,00/ano)' };
      case 'familiar_mensal':
        return { name: 'Plano Familiar Mensal (3 Filhos)', price: 'R$ 49,90 / mês' };
      case 'familiar_anual':
        return { name: 'Plano Familiar Anual (3 Filhos • 50% OFF)', price: '12x R$ 24,90 (ou R$ 297,00/ano)' };
      case 'vitalicio':
      default:
        return { name: '👑 Plano Vitalício Família (Até 3 Filhos • 50% OFF + Temporada 5 + Módulo Trilíngue + 5 Super Bônus)', price: '12x R$ 48,50 (ou R$ 485,00 à vista)' };
    }
  };

  const faqs = [
    {
      q: 'Como funciona o Módulo Multilíngue (Português, Inglês e Espanhol)?',
      a: 'Os seus filhos poderão ouvir as histórias bíblicas em Português nativo, em Inglês (English Kids) e em Espanhol latino! É a forma mais natural e enriquecedora de desenvolver o ouvido bilíngue das crianças desde cedo com valores cristãos de alto nível. O Módulo Trilíngue completo é um Super Bônus Exclusivo do Plano Vitalício! Os planos Pessoal e Familiar possuem todas as histórias completas em Português nativo.',
    },
    {
      q: 'O Estúdio de Pintura e os Desenhos para Imprimir estão inclusos em todos os planos?',
      a: 'SIM! O Estúdio de Pintura 3D online no app e a opção de baixar os cadernos em Preto e Branco (P&B) para imprimir e colorir em casa com lápis de cor estão 100% liberados tanto no Plano Pessoal quanto no Plano Familiar e no Vitalício!',
    },
    {
      q: 'Qual a diferença entre o Plano Pessoal e o Plano Familiar?',
      a: 'O Plano Pessoal foi feito para famílias com 1 filho (1 perfil individual em Português). O Plano Familiar permite criar até 3 perfis simultâneos em Português para que até 3 filhos possam ouvir, salvar favoritos e acompanhar seu próprio progresso de forma independente.',
    },
    {
      q: 'Como funciona o desconto de 50% nos planos anuais e no vitalício?',
      a: 'Na nossa promoção especial de lançamento, todos os planos anuais e o vitalício estão com 50% de desconto real aplicado. No Vitalício, de R$ 970,00 você paga apenas 12x de R$ 48,50 (ou R$ 485,00 à vista) uma única vez e garante todas as 4 temporadas prontas + a Temporada 5 (Heróis da Fé) + o Módulo Trilíngue + todos os 5 Super Bônus sem nunca mais pagar mensalidade.',
    },
    {
      q: 'Quantas temporadas estão disponíveis imediatamente após a compra?',
      a: 'Você terá acesso imediato e completo às 4 primeiras temporadas (34 episódios superproduzidos da Criação a Paulo em Roma). A Temporada 5 (Heróis da Fé) está em fase final de produção e será liberada com prioridade máxima e sem custos adicionais para os assinantes do Plano Vitalício!',
    },
    {
      q: 'Como funciona a Garantia de 7 Dias?',
      a: 'Você tem 7 dias completos para testar com seus filhos. Se por qualquer motivo achar que não valeu a pena, basta solicitar o cancelamento e devolveremos 100% do seu dinheiro na hora, sem perguntas e sem burocracia.',
    },
    {
      q: 'Posso acessar em múltiplos aparelhos (Celular, Tablet, Computador, Smart TV)?',
      a: 'Sim! Como o Toon Tales Kids é um Progressive Web App (PWA) de última geração, ele roda diretamente no navegador de qualquer celular Android, iPhone, iPad, tablet, notebook ou TV conectada, sem precisar baixar arquivos pesados.',
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-16 select-none antialiased text-slate-800 pb-24">
      
      {/* 1. TOP ANNOUNCEMENT & COUNTDOWN BAR */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white py-2.5 px-4 text-center text-xs sm:text-sm font-black font-brand uppercase tracking-wider shadow-md flex flex-wrap items-center justify-between gap-3 rounded-2xl">
        <div className="flex items-center gap-1.5 mx-auto sm:mx-0">
          <Sparkles className="w-4 h-4 animate-spin shrink-0" />
          <span>🎉 LANÇAMENTO TRILÍNGUE • 50% OFF NO PLANO VITALÍCIO</span>
        </div>
        
        <div className="flex items-center gap-3 mx-auto sm:mx-0">
          <button
            onClick={() => setIsAmbassadorModalOpen(true)}
            className="px-3 py-1 rounded-full bg-slate-950/50 hover:bg-slate-950 text-amber-300 text-xs font-black font-brand flex items-center gap-1.5 transition-all border border-amber-300/40 hover:scale-105"
          >
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span>Seja um Embaixador (40% a 50% Comis.)</span>
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/40 border border-white/30 text-amber-200 text-xs font-black font-mono">
            <Timer className="w-3.5 h-3.5 text-amber-300 animate-pulse shrink-0" />
            <span>
              {String(timeLeft.hours).padStart(2, '0')}h : {String(timeLeft.minutes).padStart(2, '0')}m : {String(timeLeft.seconds).padStart(2, '0')}s
            </span>
          </div>
        </div>
      </div>

      {/* 2. HIGH-CONVERTING HERO HEADLINE BLOCK */}
      <div className="text-center space-y-4 max-w-5xl mx-auto pt-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-100 via-orange-100 to-amber-100 border-2 border-amber-300 text-orange-800 text-xs sm:text-sm font-black uppercase font-brand tracking-wider shadow-xs">
          <Globe className="w-4 h-4 text-orange-600 shrink-0" />
          <span>A 1ª Superprodução Bíblica Infantil Trilíngue em Áudio 3D do Brasil</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-brand tracking-tight text-slate-900 leading-[1.15] drop-shadow-xs">
          O Maior Universo de Aventuras Bíblicas que{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500">
            Ensina, Protege e Transforma
          </span>{' '}
          a Mente do Seu Filho.
        </h1>

        <p className="text-sm sm:text-lg text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
          Troque os vídeos vazios da internet por superproduções cinematográficas em áudio 3D, personagens marcantes, histórias bíblicas inesquecíveis e valores eternos de fé e coragem.
        </p>

        {/* 3 Hub Pillars Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-4xl mx-auto pt-2">
          <a
            href="#personagens"
            className="p-4 rounded-3xl bg-amber-500/10 hover:bg-amber-500/20 border-2 border-amber-400/50 text-left flex items-center gap-3.5 transition-all group shadow-xs"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-black text-2xl shadow-md group-hover:scale-110 transition-transform">
              📖
            </div>
            <div>
              <div className="font-brand font-black text-sm text-slate-900">1. Áudio Bíblico 3D</div>
              <div className="text-xs text-amber-800 font-bold">34 Superproduções de Fé</div>
            </div>
          </a>

          <a
            href="#labkids"
            className="p-4 rounded-3xl bg-purple-500/10 hover:bg-purple-500/20 border-2 border-purple-400/50 text-left flex items-center gap-3.5 transition-all group shadow-xs"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center font-black text-2xl shadow-md group-hover:scale-110 transition-transform">
              🔬
            </div>
            <div>
              <div className="font-brand font-black text-sm text-slate-900">2. Canal Lab Kids</div>
              <div className="text-xs text-purple-800 font-bold">30 Aulas de Ciências + XP</div>
            </div>
          </a>

          <a
            href="#atividades"
            className="p-4 rounded-3xl bg-emerald-500/10 hover:bg-emerald-500/20 border-2 border-emerald-400/50 text-left flex items-center gap-3.5 transition-all group shadow-xs"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center font-black text-2xl shadow-md group-hover:scale-110 transition-transform">
              🎨
            </div>
            <div>
              <div className="font-brand font-black text-sm text-slate-900">3. Kit 100 Atividades</div>
              <div className="text-xs text-emerald-800 font-bold">Estúdio 3D + PDFs A4</div>
            </div>
          </a>
        </div>

        {/* Trust Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 pt-1 text-xs font-bold text-slate-700">
          <span className="px-3.5 py-1.5 rounded-2xl bg-white border border-amber-200 shadow-2xs flex items-center gap-1.5">
            🌎 <strong>Trilíngue no Vitalício (PT • EN • ES)</strong>
          </span>
          <span className="px-3.5 py-1.5 rounded-2xl bg-white border border-amber-200 shadow-2xs flex items-center gap-1.5">
            ⭐ <strong>34 Episódios Bíblicos</strong>
          </span>
          <span className="px-3.5 py-1.5 rounded-2xl bg-white border border-purple-200 shadow-2xs flex items-center gap-1.5">
            🔬 <strong>30 Vídeos Lab Kids</strong>
          </span>
          <span className="px-3.5 py-1.5 rounded-2xl bg-white border border-emerald-200 shadow-2xs flex items-center gap-1.5">
            🎨 <strong>100 Atividades A4</strong>
          </span>
          <span className="px-3.5 py-1.5 rounded-2xl bg-white border border-amber-200 shadow-2xs flex items-center gap-1.5">
            🛡️ <strong>100% Sem Anúncios</strong>
          </span>
        </div>
      </div>

      {/* 3. CINEMATIC WIDESCREEN 16:9 HERO BANNER SLIDER */}
      <section className="relative rounded-[36px] overflow-hidden bg-slate-950 border-4 border-amber-400 shadow-2xl text-white">
        <div className="relative min-h-[480px] sm:min-h-[540px] flex flex-col justify-end p-6 sm:p-10 lg:p-14 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={currentHero.image}
              alt={currentHero.title}
              className="w-full h-full object-cover object-center scale-105 transition-all duration-1000 opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-4">
            {/* Top Badges */}
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-black uppercase font-brand tracking-wider">
                {currentHero.tag}
              </span>
            </div>

            <div className="space-y-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-brand tracking-tight text-white drop-shadow-md">
                {currentHero.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-bold text-amber-300 font-brand">
                {currentHero.subtitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-200 line-clamp-3 leading-relaxed max-w-2xl">
              {currentHero.desc}
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold backdrop-blur-md">
              <Star className="w-3.5 h-3.5 fill-current text-amber-400 shrink-0" />
              <span><strong>Lição:</strong> {currentHero.lesson}</span>
            </div>

            {/* Action Buttons: Audio Demo + Video Tour + CTA */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={handleToggleDemoAudio}
                className={`px-7 py-3.5 rounded-2xl font-black text-sm font-brand uppercase tracking-wider transition-all flex items-center gap-2 shadow-xl hover:scale-105 active:scale-95 ${
                  isPlayingDemo
                    ? 'bg-rose-500 hover:bg-rose-600 text-white animate-pulse'
                    : 'bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 shadow-orange-500/40'
                }`}
              >
                {isPlayingDemo ? (
                  <>
                    <Pause className="w-5 h-5 fill-current" />
                    <span>Pausar Áudio (Português)</span>
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                    <span>Ouvir em Português (30s)</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  setVideoModalTab('video');
                  setIsVideoModalOpen(true);
                }}
                className="px-6 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-amber-300 hover:text-amber-200 border-2 border-amber-400/60 font-black text-xs sm:text-sm font-brand uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg hover:scale-105 active:scale-95"
              >
                <Video className="w-4 h-4 text-amber-400" />
                <span>Ver Teaser & Tour (Vídeo)</span>
              </button>

              <button
                onClick={() => setIsColoringModalOpen(true)}
                className="px-6 py-3.5 rounded-2xl bg-emerald-600/90 hover:bg-emerald-600 text-white border-2 border-emerald-400/60 font-black text-xs sm:text-sm font-brand uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg hover:scale-105 active:scale-95"
              >
                <Palette className="w-4 h-4 text-emerald-200" />
                <span>Testar Pintura 3D</span>
              </button>

              <a
                href="#planos"
                className="px-6 py-3.5 rounded-2xl bg-white/20 hover:bg-white/30 text-white backdrop-blur-md font-bold text-xs sm:text-sm font-brand uppercase tracking-wider border border-white/30 transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Garantir 50% OFF</span>
              </a>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setHeroSlideIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === heroSlideIndex ? 'w-8 bg-amber-400' : 'w-2.5 bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setHeroSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setHeroSlideIndex((prev) => (prev + 1) % heroSlides.length)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EDUCAÇÃO BÍBLICA TRILÍNGUE (EXCLUSIVA DO PLANO VITALÍCIO) */}
      <section className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950 border-4 border-indigo-500/40 rounded-[36px] p-8 sm:p-12 lg:p-16 text-white shadow-2xl space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(99,102,241,0.25)_0%,transparent_70%)] pointer-events-none" />

        <div className="text-center space-y-3 max-w-3xl mx-auto relative z-10">
          <span className="px-3.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/40 text-xs font-black uppercase tracking-wider font-brand flex items-center gap-1.5 w-fit mx-auto">
            <Languages className="w-4 h-4 text-indigo-400" />
            Super Bônus Exclusivo do Plano Vitalício
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-brand tracking-tight text-white">
            Seu Filho Aprendendo Novos Idiomas com a Palavra de Deus
          </h2>
          <p className="text-xs sm:text-sm text-indigo-200 leading-relaxed max-w-2xl mx-auto">
            Nos Planos Pessoal e Familiar, todas as histórias estão disponíveis no nosso impecável <strong>Português Nativo</strong>. No <strong>Plano Vitalício</strong>, você ganha como Super Bônus o Módulo Trilíngue Completo com <strong>Inglês e Espanhol</strong>!
          </p>
        </div>

        {/* 3 Interactive Language Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {/* Card PT */}
          <div className="bg-slate-900/80 border-2 border-amber-400/40 rounded-3xl p-6 space-y-4 flex flex-col justify-between backdrop-blur-md">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl">🇧🇷</span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-black uppercase font-brand">
                  Todos os Planos
                </span>
              </div>
              <h3 className="text-xl font-black font-brand text-amber-300">Português Nativo</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Narração calorosa e imersiva com rica ambientação sonora para que a criança entenda e memorize cada princípio bíblico com facilidade.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 font-bold">
              ✔ 34 Episódios Prontos no App
            </div>
          </div>

          {/* Card EN */}
          <div className="bg-slate-900/80 border-2 border-sky-400/40 rounded-3xl p-6 space-y-4 flex flex-col justify-between backdrop-blur-md relative">
            <div className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-sky-500 text-slate-950 text-[10px] font-black uppercase font-brand">
              Exclusivo Vitalício
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl">🇺🇸</span>
                <span className="px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 text-[10px] font-black uppercase font-brand">
                  English Kids
                </span>
              </div>
              <h3 className="text-xl font-black font-brand text-sky-300">Inglês Infantil Imersivo</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Vocabulário claro e adaptado para a idade, permitindo que a criança treine a compreensão auditiva e aprenda inglês de forma natural e divertida.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-800 text-[11px] text-sky-300 font-bold">
              ✔ Alfabetização Bilíngue Cristã
            </div>
          </div>

          {/* Card ES */}
          <div className="bg-slate-900/80 border-2 border-rose-400/40 rounded-3xl p-6 space-y-4 flex flex-col justify-between backdrop-blur-md relative">
            <div className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-rose-500 text-white text-[10px] font-black uppercase font-brand">
              Exclusivo Vitalício
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl">🇪🇸</span>
                <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[10px] font-black uppercase font-brand">
                  Español Kids
                </span>
              </div>
              <h3 className="text-xl font-black font-brand text-rose-300">Espanhol Latino</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dublagem clássica em espanhol para conectar seu filho ao segundo idioma mais falado das Américas, com versículos e lições cativantes.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-800 text-[11px] text-rose-300 font-bold">
              ✔ Expansão Cultural e Linguística
            </div>
          </div>
        </div>

        {/* Call to action inside multilingual box */}
        <div className="text-center pt-2 relative z-10">
          <a
            href="#planos"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-xs sm:text-sm font-brand uppercase tracking-wider shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            <Crown className="w-4 h-4 fill-current" />
            <span>Garantir o Módulo Trilíngue Completo no Plano Vitalício</span>
          </a>
        </div>
      </section>

      {/* 5. AS 4 GRANDES TEMPORADAS DISPONÍVEIS */}
      <section id="incluso" className="space-y-8 scroll-mt-20">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider font-brand">
            Catálogo Oficial • 4 Temporadas Prontas
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-brand">
            Mais de 34 Aventuras Bíblicas para Ouvir Agora
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Cada temporada é uma jornada completa com ilustrações 3D, música orquestral, efeitos de estúdio e quizzes interativos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Temporada 1 */}
          <div className="bg-white border-2 border-emerald-200 rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase font-brand">
                  Temporada 1 • 5 Episódios
                </span>
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Disponível Imediatamente
                </span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 font-brand">
                O Começo de Tudo (Gênesis)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A fascinante Criação do mundo em 6 dias, a vida no Jardim do Éden, a Arca de Noé, a Torre de Babel e o chamado de fé de Abraão sob as estrelas.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['A Criação', 'Adão e Eva', 'A Arca de Noé', 'A Torre de Babel', 'A Fé de Abraão'].map((ep) => (
                  <span key={ep} className="px-2.5 py-1 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-[11px] font-bold">
                    📖 {ep}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
              <span>Tema: Criação, Obediência e Promessa</span>
              <span className="text-emerald-700 font-black font-brand">~80 min de áudio</span>
            </div>
          </div>

          {/* Temporada 2 */}
          <div className="bg-white border-2 border-amber-200 rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-black uppercase font-brand">
                  Temporada 2 • 5 Episódios
                </span>
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Disponível Imediatamente
                </span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 font-brand">
                Grandes Aventuras da Fé
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                José no Egito, o chamado de Moisés no arbusto em chamas, a abertura do Mar Vermelho, a tomada das muralhas de Jericó por Josué e a vitória épica de Davi contra Golias.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['José do Egito', 'Moisés', 'O Mar Vermelho', 'Josué e Jericó', 'Davi e Golias'].map((ep) => (
                  <span key={ep} className="px-2.5 py-1 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-[11px] font-bold">
                    🛡️ {ep}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
              <span>Tema: Coragem, Perdão e Milagres</span>
              <span className="text-amber-700 font-black font-brand">~95 min de áudio</span>
            </div>
          </div>

          {/* Temporada 3 */}
          <div className="bg-white border-2 border-sky-200 rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-black uppercase font-brand">
                  Temporada 3 • 9 Episódios
                </span>
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Disponível Imediatamente
                </span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 font-brand">
                A Vida e os Milagres de Jesus
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Do nascimento em Belém ao ministério de amor na Galileia: tempestade acalmada, multiplicação dos pães e peixes, parábolas inesquecíveis e a Ressurreição gloriosa.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Nascimento', 'No Templo', 'Batismo', 'Discípulos', 'Milagres', 'Parábolas', 'Tempestade', 'Multiplicação', 'Ressurreição'].map((ep) => (
                  <span key={ep} className="px-2.5 py-1 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-[11px] font-bold">
                    ✝️ {ep}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
              <span>Tema: Amor, Salvação e Esperança</span>
              <span className="text-sky-700 font-black font-brand">~140 min de áudio</span>
            </div>
          </div>

          {/* Temporada 4 */}
          <div className="bg-white border-2 border-indigo-200 rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-black uppercase font-brand">
                  Temporada 4 • 10 Episódios
                </span>
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Disponível Imediatamente
                </span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 font-brand">
                A Igreja Primitiva e os Apóstolos
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                O fogo de Pentecostes, a coragem de Pedro e Estêvão, a conversão de Paulo na estrada de Damasco e suas grandes viagens missionárias até Roma.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Pentecostes', 'Pedro', 'Estêvão', 'Paulo', 'Paulo e Silas', 'Rumo a Roma', 'Tempestade', 'Naufrágio', 'Malta', 'Roma Imperial'].map((ep) => (
                  <span key={ep} className="px-2.5 py-1 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-[11px] font-bold">
                    ⛵ {ep}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
              <span>Tema: Missão, Ousadia e Fé Inabalável</span>
              <span className="text-indigo-700 font-black font-brand">~180 min de áudio</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DESTAQUE ESPECIAL: TEMPORADA 5 EM PRODUÇÃO */}
      <section className="relative rounded-[36px] overflow-hidden bg-gradient-to-r from-slate-950 via-amber-950 to-slate-950 border-4 border-amber-400 p-8 sm:p-12 shadow-2xl text-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(245,158,11,0.25)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 text-xs font-black uppercase tracking-wider font-brand">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Superprodução em Andamento • Lançamento Exclusivo
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-brand tracking-tight text-amber-300">
              Temporada 5 — Heróis da Fé
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              <em>"Pessoas comuns. Grandes desafios. Uma fé extraordinária."</em><br />
              Estamos gravando a maior e mais emocionante superprodução da história da plataforma: as vidas de <strong>Enoque, Daniel na Cova dos Leões, Jacó, Josué, Elias e a Rainha Ester</strong> com orquestração ao vivo e elenco infantil completo!
            </p>

            <div className="p-4 rounded-2xl bg-amber-900/50 border border-amber-400/40 text-xs text-amber-100 font-bold space-y-1">
              <p className="flex items-center gap-2 text-white font-black font-brand text-sm">
                <Crown className="w-4 h-4 text-amber-400" /> BÔNUS EXCLUSIVO DO PLANO VITALÍCIO:
              </p>
              <p>
                Quem garantir o <strong>Plano Família Vitalício</strong> hoje terá acesso prioritário e vitalício a todos os episódios da Temporada 5 assim que forem lançados, sem pagar um único centavo a mais!
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#planos"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-xs sm:text-sm font-brand uppercase tracking-wider shadow-lg shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all"
              >
                <Crown className="w-4 h-4 fill-current" />
                <span>Garantir Acesso Vitalício + Temporada 5 (50% OFF)</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex items-center justify-center">
            <div className="w-64 sm:w-72 aspect-[3/4] rounded-3xl overflow-hidden border-4 border-amber-300 shadow-2xl bg-slate-900 relative">
              <img
                src="/characters/daniel.jpg"
                alt="Heróis da Fé"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-5 text-center">
                <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-[10px] font-black uppercase font-brand mx-auto mb-1">
                  Daniel na Cova dos Leões
                </span>
                <p className="font-brand font-black text-sm text-white">Temporada 5 Em Produção</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SEÇÃO DE SUPER BÔNUS EXCLUSIVOS */}
      <section className="bg-gradient-to-b from-amber-500/10 via-orange-500/5 to-amber-500/10 border-3 border-amber-300 rounded-[36px] p-8 sm:p-12 lg:p-14 space-y-8">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-xs font-black uppercase tracking-wider font-brand shadow-sm">
            🎁 Presentes Especiais de Lançamento (Valor: R$ 497,00 • Grátis Hoje)
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-brand">
            Super Bônus Inclusos no Toon Tales Kids
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Muito além do áudio: todo um ecossistema educativo para transformar a fé e o aprendizado das crianças.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Bonus 1 */}
          <div className="bg-white border-2 border-amber-200 rounded-3xl p-6 shadow-sm space-y-3 relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-brand font-black text-xl shadow-xs">
                <Crown className="w-6 h-6 text-amber-500" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full">
                  Bônus #1 • Valor R$ 197
                </span>
                <h3 className="text-lg font-black text-slate-900 font-brand">
                  Temporada 5 — Heróis da Fé
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Acesso prioritário vitalício a todos os episódios da nova temporada com Daniel, Enoque, Jacó, Josué, Elias e a Rainha Ester.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-[11px] font-bold text-emerald-600 flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" /> 100% Grátis no Vitalício
            </div>
          </div>

          {/* Bonus 2 */}
          <div className="bg-white border-2 border-sky-200 rounded-3xl p-6 shadow-sm space-y-3 relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center font-brand font-black text-xl shadow-xs">
                <Globe className="w-6 h-6 text-sky-500" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase text-sky-700 bg-sky-100 px-2.5 py-0.5 rounded-full">
                  Bônus #2 • Valor R$ 147
                </span>
                <h3 className="text-lg font-black text-slate-900 font-brand">
                  Módulo Trilíngue Completo (PT • EN • ES)
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Histórias em inglês infantil e espanhol para que seus filhos desenvolvam a fluência bilíngue ouvindo os valores da Palavra.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-[11px] font-bold text-emerald-600 flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" /> 100% Grátis no Vitalício
            </div>
          </div>

          {/* Bonus 3: ESTÚDIO DE PINTURA 3D & CADERNO P&B (LIBERADO EM TODOS OS PLANOS) */}
          <div className="bg-white border-2 border-emerald-200 rounded-3xl p-6 shadow-sm space-y-3 relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-brand font-black text-xl shadow-xs">
                <Palette className="w-6 h-6 text-emerald-500" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                  Bônus #3 • Valor R$ 67 • Liberado em Todos os Planos
                </span>
                <h3 className="text-lg font-black text-slate-900 font-brand">
                  Estúdio de Pintura 3D & Caderno P&B
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                As crianças podem colorir online direto na tela do celular/tablet OU baixar o caderno em Preto e Branco (P&B) para imprimir e colorir em casa com lápis de cor!
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Em Todos os Planos
              </span>
              <button
                onClick={() => setIsColoringModalOpen(true)}
                className="px-2.5 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-[10px] font-black uppercase font-brand transition-colors"
              >
                Testar Agora
              </button>
            </div>
          </div>

          {/* Bonus 4 */}
          <div className="bg-white border-2 border-purple-200 rounded-3xl p-6 shadow-sm space-y-3 relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center font-brand font-black text-xl shadow-xs">
                <ShieldCheck className="w-6 h-6 text-purple-500" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full">
                  Bônus #4 • Valor R$ 47
                </span>
                <h3 className="text-lg font-black text-slate-900 font-brand">
                  Painel dos Pais & Trava por PIN
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Controle total de tempo de tela, relatórios de episódios mais ouvidos e princípios bíblicos memorizados pelos seus filhos.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-[11px] font-bold text-emerald-600 flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" /> 100% Grátis em Todos os Planos
            </div>
          </div>

          {/* Bonus 5 */}
          <div className="bg-white border-2 border-rose-200 rounded-3xl p-6 shadow-sm space-y-3 relative overflow-hidden flex flex-col justify-between lg:col-span-2">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center font-brand font-black text-xl shadow-xs">
                <Trophy className="w-6 h-6 text-rose-500" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase text-rose-700 bg-rose-100 px-2.5 py-0.5 rounded-full">
                  Bônus #5 • Valor R$ 39
                </span>
                <h3 className="text-lg font-black text-slate-900 font-brand">
                  Certificados de Honra & Conquistas Bíblicas
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sistema de gamificação com quizzes no final de cada história e certificados digitais personalizáveis com o nome do seu filho ao completar cada temporada!
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-[11px] font-bold text-emerald-600 flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" /> 100% Grátis no Vitalício
            </div>
          </div>
        </div>
      </section>

      {/* 8. 3D CHARACTERS GALLERY (EXPANDIDA COM ARTES OFICIAIS) */}
      <section id="personagens" className="space-y-8 scroll-mt-20">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider font-brand">
            Universo 3D Cinematográfico
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-brand">
            Conheça os Heróis que seu Filho vai Amar
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Personagens históricos da Bíblia recriados em 3D cinematográfico com vozes expressivas e ensinamentos reais.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {[
            {
              name: 'Davi',
              role: 'O Pastorzinho Corajoso',
              desc: 'Ensina sobre coragem, confiança em Deus e louvor de coração.',
              img: '/characters/david.jpg',
              verse: 'O Senhor é meu pastor. (Salmos 23:1)',
              tag: 'Temporada 2 • Ep. 5',
            },
            {
              name: 'Jesus',
              role: 'O Mestre da Vida e do Amor',
              desc: 'Ensina sobre compaixão, milagres, salvação e o Reino dos Céus.',
              img: '/characters/jesus.jpg',
              verse: 'Deixai vir a mim as crianças. (Marcos 10:14)',
              tag: 'Temporada 3 • 9 Episódios',
            },
            {
              name: 'Moisés',
              role: 'O Grande Libertador',
              desc: 'Ensina sobre obediência, perseverança e os Mandamentos de Deus.',
              img: '/characters/moses.jpg',
              verse: 'O Senhor pelejará por vós. (Êxodo 14:14)',
              tag: 'Temporada 2 • Ep. 2 e 3',
            },
            {
              name: 'Josué',
              role: 'O Guerreiro de Jericó',
              desc: 'Ensina sobre bravura, liderança fiel e o poder do louvor.',
              img: '/characters/joshua.jpg',
              verse: 'Sê forte e corajoso! (Josué 1:9)',
              tag: 'Temporada 2 • Ep. 4',
            },
            {
              name: 'Daniel',
              role: 'O Jovem Fiel na Cova dos Leões',
              desc: 'Ensina sobre oração diária, integridade e fidelidade a Deus.',
              img: '/characters/daniel.jpg',
              verse: 'O meu Deus enviou o Seu anjo. (Daniel 6:22)',
              tag: 'Temporada 5 • Ep. 3',
            },
            {
              name: 'Abraão',
              role: 'O Pai da Fé',
              desc: 'Ensina sobre confiar nas promessas divinas mesmo sem ver o caminho.',
              img: '/characters/abraham.jpg',
              verse: 'Olha para os céus e conta as estrelas. (Gênesis 15:5)',
              tag: 'Temporada 1 • Ep. 5',
            },
            {
              name: 'Noé',
              role: 'O Homem da Grande Arca',
              desc: 'Ensina sobre fidelidade, paciência e a aliança do arco-íris.',
              img: '/characters/noah.jpg',
              verse: 'Noé andava com Deus. (Gênesis 6:9)',
              tag: 'Temporada 1 • Ep. 3',
            },
            {
              name: 'Paulo',
              role: 'O Apóstolo Missionário',
              desc: 'Ensina sobre transformação de vida, ousadia no evangelho e perseverança.',
              img: '/characters/paul.jpg',
              verse: 'Tudo posso naquele que me fortalece. (Fp 4:13)',
              tag: 'Temporada 4 • 10 Episódios',
            },
          ].map((char) => (
            <div
              key={char.name}
              className="bg-white border-2 border-orange-200 hover:border-amber-400 rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-slate-950">
                <img
                  src={char.img}
                  alt={char.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-amber-300 text-[10px] font-black font-brand">
                  {char.tag}
                </div>
              </div>

              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-black text-slate-900 font-brand">{char.name}</h3>
                  <p className="text-xs font-bold text-orange-600 leading-snug">{char.role}</p>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{char.desc}</p>
                </div>
                <p className="text-[11px] text-slate-400 italic pt-2 border-t border-slate-100">
                  {char.verse}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. PAIN VS SOLUTION SECTION */}
      <section id="beneficios" className="bg-white border-2 border-orange-200 rounded-[36px] p-8 sm:p-12 lg:p-16 shadow-sm space-y-8 scroll-mt-20">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-black uppercase tracking-wider font-brand">
            O Grande Dilema dos Pais
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 font-brand tracking-tight">
            Você sabe o que seu filho consome nas telas hoje?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Desenhos barulhentos, vazios de valores e algoritmos agressivos feitos para prender a atenção sem ensinar nada. Chegou a hora de transformar a rotina digital da sua família.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-rose-50 border-2 border-rose-200 space-y-4">
            <h3 className="text-lg font-black text-rose-900 font-brand flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-rose-500 text-white flex items-center justify-center text-xs">✕</span>
              O que a internet oferece hoje:
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">•</span>
                Conteúdos hiperestimulantes que causam agitação e atrapalham o sono da noite.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">•</span>
                Propagandas invasivas de jogos e compras acidentais por crianças.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">•</span>
                Falta de princípios bíblicos, honra aos pais e respeito ao próximo.
              </li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-emerald-50 border-2 border-emerald-300 space-y-4">
            <h3 className="text-lg font-black text-emerald-900 font-brand flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs">✓</span>
              Com o Toon Tales Kids você tem:
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                Histórias bíblicas com profundas lições de fé, coragem e perdão.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                Modo Hora de Dormir com som orquestral relaxante e desligamento automático.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                Ambiente 100% blindado com controle parental protegido por PIN.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS */}
      <section id="depoimentos" className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-[36px] p-8 sm:p-12 shadow-sm space-y-8 scroll-mt-20">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-amber-200 text-amber-900 text-xs font-black uppercase tracking-wider font-brand">
            Depoimentos Reais
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-brand">
            O que as Famílias estão Dizendo
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-amber-200 rounded-3xl p-6 shadow-sm space-y-3">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
              "Meus filhos de 7 e 9 anos agora pedem para ouvir a história de Davi e Golias antes de dormir. A paz na hora do sono mudou totalmente!"
            </p>
            <div className="pt-2 border-t border-slate-100">
              <p className="text-xs font-black text-slate-900 font-brand">Mariana S. Silva</p>
              <p className="text-[11px] text-slate-400">Mãe do Pedro e da Alice • São Paulo/SP</p>
            </div>
          </div>

          <div className="bg-white border border-amber-200 rounded-3xl p-6 shadow-sm space-y-3">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
              "A qualidade do áudio é impressionante! A voz de Deus com reverberação e os sons da tempestade no Mar Vermelho parecem filme de cinema. Vale cada centavo."
            </p>
            <div className="pt-2 border-t border-slate-100">
              <p className="text-xs font-black text-slate-900 font-brand">Pastor Rodrigo M.</p>
              <p className="text-[11px] text-slate-400">Pai e Educador Cristão • Curitiba/PR</p>
            </div>
          </div>

          <div className="bg-white border border-amber-200 rounded-3xl p-6 shadow-sm space-y-3">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
              "O Painel dos Pais me dá total tranquilidade. Saber que meu filho está aprendendo sobre perdão e coragem bíblica não tem preço nos dias de hoje."
            </p>
            <div className="pt-2 border-t border-slate-100">
              <p className="text-xs font-black text-slate-900 font-brand">Camila & Daniel Rocha</p>
              <p className="text-[11px] text-slate-400">Pais do Lucas • Belo Horizonte/MG</p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 10.1 VITRINE 2: 🔬 CANAL LAB KIDS (O LABORATÓRIO DE CIÊNCIAS) */}
      {/* ------------------------------------------------------------- */}
      <section id="labkids" className="bg-gradient-to-br from-purple-950 via-indigo-950 to-slate-950 text-white rounded-[36px] p-8 sm:p-12 lg:p-14 border-4 border-purple-400/50 shadow-2xl space-y-8 relative overflow-hidden scroll-mt-20">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/30 text-purple-300 border border-purple-400/40 text-xs font-black uppercase tracking-wider font-brand">
              <Sparkles className="w-4 h-4 text-purple-300 animate-spin" />
              Universo 2 • Canal de Ciência & Descobertas
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-brand tracking-tight text-white leading-tight">
              🔬 Lab Kids: Aprender Ciência Nunca Foi Tão Divertido!
            </h2>

            <p className="text-sm sm:text-base text-purple-100 leading-relaxed">
              <strong>30 Episódios Animados em Full HD</strong> com dublagem profissional que ensinam os segredos da natureza, o corpo humano, vulcões, espaço sideral, tecnologia e o universo de forma segura e fascinante para as crianças.
            </p>

            {/* 4 Feature Tags */}
            <div className="grid grid-cols-2 gap-3 text-xs font-bold text-slate-200">
              <div className="p-3 rounded-2xl bg-white/10 border border-white/15 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>30 Vídeos em Full HD</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 border border-white/15 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>5 Trilhas Científicas</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 border border-white/15 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>90 Quizzes do Cientista</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 border border-white/15 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Anúncios e Distrações</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#planos"
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white font-black text-xs sm:text-sm font-brand uppercase tracking-wider shadow-lg shadow-purple-500/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Garantir o Lab Kids no Combo VIP</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full max-w-sm rounded-3xl overflow-hidden border-4 border-purple-400 shadow-2xl bg-slate-900 group">
              <img
                src="/labkids/branding/Labkids mockup portugues.webp"
                alt="Lab Kids Mockup"
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 10.2 VITRINE 3: 🎨 KIT 100 ATIVIDADES & ESTÚDIO DE PINTURA   */}
      {/* ------------------------------------------------------------- */}
      <section id="atividades" className="bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-950 text-white rounded-[36px] p-8 sm:p-12 lg:p-14 border-4 border-emerald-400/50 shadow-2xl space-y-8 relative overflow-hidden scroll-mt-20">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex items-center justify-center order-2 lg:order-1">
            <div className="w-full max-w-sm rounded-3xl overflow-hidden border-4 border-emerald-400 shadow-2xl bg-slate-900 group">
              <img
                src="/activities-kit-mockup.jpg"
                alt="Kit 100 Atividades Mockup"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/30 text-emerald-300 border border-emerald-400/40 text-xs font-black uppercase tracking-wider font-brand">
              <Sparkles className="w-4 h-4 text-emerald-300 animate-spin" />
              Universo 3 • Criatividade Fora da Tela
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-brand tracking-tight text-white leading-tight">
              🎨 Kit 100 Atividades & Estúdio de Pintura 3D
            </h2>

            <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
              Tire seu filho do excesso de telas com <strong>cadernos pedagógicos completos prontos para imprimir em folha A4</strong> com caça-palavras, labirintos, desenhos dos heróis da fé, animais da arca e experimentos científicos para colorir com lápis de cor!
            </p>

            {/* 4 Feature Tags */}
            <div className="grid grid-cols-2 gap-3 text-xs font-bold text-slate-200">
              <div className="p-3 rounded-2xl bg-white/10 border border-white/15 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100 Folhas em PDF A4 Prontas</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 border border-white/15 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Estúdio de Pintura Online no App</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 border border-white/15 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Labirintos e Caça-Palavras</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 border border-white/15 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Desenvolvimento Motor e Lógico</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsColoringModalOpen(true)}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-black text-xs sm:text-sm font-brand uppercase tracking-wider shadow-lg shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <Palette className="w-4 h-4" />
                <span>Experimentar Estúdio de Pintura</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 11. PRICING & PLANS TABLE (HUB 3 EM 1) */}
      <section id="planos" className="space-y-8 scroll-mt-20">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-black uppercase tracking-wider font-brand">
            Tabela Oficial de Preços
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-brand">
            Escolha o Plano Ideal para a Sua Família
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Acesso imediato às 4 Temporadas completas + Estúdio de Pintura 3D e Caderno P&B inclusos em todos os planos!
          </p>

          {/* Billing Cycle & Currency Switchers */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            {/* Billing Cycle Switcher */}
            <div className="inline-flex items-center p-1.5 rounded-2xl bg-amber-100/80 border-2 border-amber-300 shadow-inner">
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-5 py-2 rounded-xl text-xs font-black font-brand transition-all flex items-center gap-1.5 ${
                  billingCycle === 'annual'
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-300 scale-105'
                    : 'text-amber-900 hover:text-orange-600'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Planos Anuais (50% OFF)</span>
              </button>

              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-5 py-2 rounded-xl text-xs font-black font-brand transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-300 scale-105'
                    : 'text-amber-900 hover:text-orange-600'
                }`}
              >
                <span>Planos Mensais</span>
              </button>
            </div>

            {/* Currency Selector (BRL / USD / EUR) */}
            <div className="inline-flex items-center p-1 rounded-2xl bg-slate-900 text-white border-2 border-amber-400 shadow-md">
              <button
                onClick={() => setSelectedCurrency('BRL')}
                className={`px-3 py-1.5 rounded-xl text-xs font-black font-brand transition-all flex items-center gap-1 ${
                  selectedCurrency === 'BRL'
                    ? 'bg-amber-400 text-slate-950 shadow-xs scale-105'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>🇧🇷 BRL (R$)</span>
              </button>

              <button
                onClick={() => setSelectedCurrency('USD')}
                className={`px-3 py-1.5 rounded-xl text-xs font-black font-brand transition-all flex items-center gap-1 ${
                  selectedCurrency === 'USD'
                    ? 'bg-amber-400 text-slate-950 shadow-xs scale-105'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>🇺🇸 USD ($)</span>
              </button>

              <button
                onClick={() => setSelectedCurrency('EUR')}
                className={`px-3 py-1.5 rounded-xl text-xs font-black font-brand transition-all flex items-center gap-1 ${
                  selectedCurrency === 'EUR'
                    ? 'bg-amber-400 text-slate-950 shadow-xs scale-105'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>🇪🇺 EUR (€)</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3 Main Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Card 1: Plano Pessoal (1 Filho • Somente Português + Pintura 3D & P&B) */}
          <div className="bg-white border-2 border-slate-200 hover:border-amber-300 rounded-[32px] p-8 shadow-sm flex flex-col justify-between space-y-6 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-black uppercase font-brand flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-slate-500" /> 1 Filho (Individual)
                </span>
                {billingCycle === 'annual' && (
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase font-brand">
                    50% OFF
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-xl font-black text-slate-900 font-brand">Plano Pessoal</h3>
                {billingCycle === 'annual' ? (
                  <div className="mt-2 space-y-0.5">
                    <span className="text-xs text-slate-400 font-medium">
                      {selectedCurrency === 'BRL' ? 'De R$ 238,80 por apenas' : '50% OFF Annual Promo'}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-slate-900 font-brand">
                        {CHECKOUT_PLANS_CONFIG.pessoal_anual.prices[selectedCurrency].priceDisplay}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="mt-2 space-y-0.5">
                    <span className="text-xs text-slate-400">Cobrança Mensal Flexível</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-slate-900 font-brand">
                        {CHECKOUT_PLANS_CONFIG.pessoal_mensal.prices[selectedCurrency].priceDisplay}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400">Cancele quando quiser</span>
                  </div>
                )}
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                Ideal para 1 criança ouvir no celular ou tablet com seu próprio progresso em Português.
              </p>

              <ul className="space-y-2.5 text-xs text-slate-600 font-medium pt-4 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" /> <strong>1 Perfil Individual (1 Filho)</strong>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" /> 4 Temporadas em Áudio 3D (34 Histórias Ilimitadas)
                </li>
                <li className="flex items-center gap-2 text-indigo-700 font-bold">
                  <Sparkles className="w-4 h-4 text-indigo-600 shrink-0" /> Histórias Personalizadas por IA (Créditos de Criação)
                </li>
                <li className="flex items-center gap-2 text-emerald-700 font-bold">
                  <Palette className="w-4 h-4 text-emerald-600 shrink-0" /> Estúdio de Pintura 3D + Caderno P&B para Imprimir
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" /> Quizzes Bíblicos Interativos
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" /> Modo Hora de Dormir com Timer
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleCheckout(billingCycle === 'annual' ? 'pessoal_anual' : 'pessoal_mensal')}
              className="w-full py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-black text-xs font-brand uppercase tracking-wider transition-colors shadow-2xs"
            >
              {billingCycle === 'annual' ? 'Assinar Pessoal Anual (R$ 299)' : 'Assinar Pessoal Mensal (R$ 49)'}
            </button>
          </div>

          {/* Card 2: Plano Familiar (3 Filhos • Somente Português + Pintura 3D & P&B) */}
          <div className="bg-white border-2 border-amber-300 hover:border-amber-400 rounded-[32px] p-8 shadow-md flex flex-col justify-between space-y-6 transition-all relative">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-black uppercase font-brand flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-amber-600" /> Até 3 Filhos (Família)
                </span>
                {billingCycle === 'annual' && (
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase font-brand">
                    ⭐ MAIS POPULAR
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-xl font-black text-slate-900 font-brand">Plano Familiar</h3>
                {billingCycle === 'annual' ? (
                  <div className="mt-2 space-y-0.5">
                    <span className="text-xs text-slate-400 font-medium">
                      {selectedCurrency === 'BRL' ? 'De R$ 1.164,00 por apenas' : 'Annual Family Discount'}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-slate-900 font-brand">
                        {CHECKOUT_PLANS_CONFIG.familiar_anual.prices[selectedCurrency].priceDisplay}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="mt-2 space-y-0.5">
                    <span className="text-xs text-slate-400">Cobrança Mensal Família</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-slate-900 font-brand">
                        {CHECKOUT_PLANS_CONFIG.familiar_mensal.prices[selectedCurrency].priceDisplay}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400">Sem fidelidade, cancele quando quiser</span>
                  </div>
                )}
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                Perfeito para famílias com 2 ou 3 crianças ouvirem ao mesmo tempo com controle parental.
              </p>

              <ul className="space-y-2.5 text-xs text-slate-600 font-medium pt-4 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" /> <strong>Até 3 Perfis Individuais para os Filhos</strong>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" /> 4 Temporadas em Áudio 3D (34 Histórias Ilimitadas)
                </li>
                <li className="flex items-center gap-2 text-indigo-700 font-bold">
                  <Sparkles className="w-4 h-4 text-indigo-600 shrink-0" /> Criação Ampliada de Histórias com IA
                </li>
                <li className="flex items-center gap-2 text-emerald-700 font-bold">
                  <Palette className="w-4 h-4 text-emerald-600 shrink-0" /> Estúdio de Pintura 3D + Caderno P&B para Imprimir
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" /> Quizzes Bíblicos Interativos
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" /> Painel dos Pais com Trava por PIN
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleCheckout(billingCycle === 'annual' ? 'familiar_anual' : 'familiar_mensal')}
              className="w-full py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-black text-xs font-brand uppercase tracking-wider transition-colors shadow-md shadow-amber-200"
            >
              {billingCycle === 'annual' ? 'Assinar Familiar Anual (R$ 997)' : 'Assinar Familiar Mensal (R$ 97)'}
            </button>
          </div>

          {/* Card 3: Plano Vitalício Família (⭐ CAMPEÃO DE VENDAS COM TEMPORADA 5 + MÓDULO TRILÍNGUE + 5 SUPER BÔNUS) */}
          <div className="relative bg-gradient-to-b from-slate-950 via-amber-950 to-slate-950 text-white border-4 border-amber-400 rounded-[36px] p-8 shadow-2xl flex flex-col justify-between space-y-6 transform lg:-translate-y-4">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-red-600 via-amber-500 to-red-600 text-white text-xs font-black uppercase tracking-wider font-brand shadow-lg border-2 border-amber-300 animate-pulse">
              🔥 LOTE ESPECIAL: APENAS 50 VAGAS
            </div>

            <div className="space-y-4 pt-2">
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 text-xs font-black uppercase font-brand flex items-center gap-1 w-fit">
                <Crown className="w-3.5 h-3.5 text-amber-400" /> Acesso Vitalício Para Sempre
              </span>

              <div>
                <span className="text-xs line-through text-slate-400">
                  {selectedCurrency === 'BRL' ? 'De R$ 3.974,00 por apenas' : 'Regular $ 797.00'}
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-black font-brand text-amber-400">
                    {CHECKOUT_PLANS_CONFIG.vitalicio.prices[selectedCurrency].priceDisplay}
                  </span>
                </div>
                <span className="text-xs text-amber-200 font-bold">Taxa Única • Sem Nenhuma Mensalidade</span>
              </div>

              <p className="text-xs text-amber-100 leading-relaxed">
                Pague uma única vez e tenha acesso para sempre sem nenhuma mensalidade futura para seus filhos e netos!
              </p>

              <ul className="space-y-2.5 text-xs text-white font-medium pt-4 border-t border-amber-500/30">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400" /> <strong>Acesso Vitalício Eterno (Sem Mensalidades)</strong>
                </li>
                <li className="flex items-center gap-2 text-rose-300 font-bold">
                  <Flame className="w-4 h-4 text-rose-400 shrink-0" /> <strong>Garantia de 1 das 50 Vagas do Lote</strong>
                </li>
                <li className="flex items-center gap-2 text-amber-300 font-bold">
                  <Crown className="w-4 h-4 text-amber-400 shrink-0" /> <strong>Todas as 5 Temporadas + Futuros Lançamentos</strong>
                </li>
                <li className="flex items-center gap-2 text-sky-300 font-bold">
                  <Globe className="w-4 h-4 text-sky-400 shrink-0" /> <strong>Módulo Trilíngue Completo (PT • EN • ES)</strong>
                </li>
                <li className="flex items-center gap-2 text-indigo-300 font-bold">
                  <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" /> <strong>Criação de Histórias com IA sem Expiração</strong>
                </li>
                <li className="flex items-center gap-2 text-purple-300 font-bold">
                  <Sparkles className="w-4 h-4 text-purple-400 shrink-0" /> <strong>Canal Lab Kids Incluso (30 Aulas de Ciências + 90 Quizzes)</strong>
                </li>
                <li className="flex items-center gap-2 text-emerald-300 font-bold">
                  <Palette className="w-4 h-4 text-emerald-400 shrink-0" /> <strong>Estúdio de Pintura 3D + Kit 100 Atividades em PDF A4</strong>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400" /> Perfis Familiares Ilimitados para a Casa
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400" /> Download dos Áudios em MP3 para Ouvir Offline
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleCheckout('vitalicio')}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-sm font-brand uppercase tracking-wider shadow-xl shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all ring-2 ring-white/50"
            >
              Garantir Acesso Vitalício (50 Vagas)
            </button>
          </div>

        </div>

        {/* 11.1 MATRIZ DE PRODUTOS AVULSOS VS COMBO VIP (ESTILO NETFLIX HUB) */}
        <div className="mt-10 bg-slate-950 border-4 border-amber-400 rounded-[32px] p-6 sm:p-8 text-white max-w-5xl mx-auto space-y-6 shadow-2xl">
          <div className="text-center space-y-2">
            <span className="px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-black uppercase font-brand border border-amber-400/30">
              ⚡ Opções Modulares • Estilo Netflix
            </span>
            <h3 className="text-xl sm:text-2xl font-black font-brand text-white">
              Tabela de Planos Mensais & Combos VIP
            </h3>
            <p className="text-xs text-slate-300 max-w-2xl mx-auto">
              Escolha a quantidade de perfis infantis e compare os módulos avulsos com os Super Combos VIP Tudo Campeão:
            </p>

            {/* Selector: Pessoal (1 Filho) vs Familiar (3 Filhos) */}
            <div className="inline-flex items-center p-1.5 rounded-2xl bg-slate-900 border-2 border-amber-400/60 shadow-inner mt-2">
              <button
                onClick={() => setModularPlanMode('pessoal')}
                className={`px-5 py-2 rounded-xl text-xs font-black font-brand transition-all flex items-center gap-1.5 ${
                  modularPlanMode === 'pessoal'
                    ? 'bg-amber-400 text-slate-950 shadow-md scale-105'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>Plano Pessoal (1 Filho)</span>
              </button>

              <button
                onClick={() => setModularPlanMode('familiar')}
                className={`px-5 py-2 rounded-xl text-xs font-black font-brand transition-all flex items-center gap-1.5 ${
                  modularPlanMode === 'familiar'
                    ? 'bg-amber-400 text-slate-950 shadow-md scale-105'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Plano Familiar (3 Filhos)</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {/* Produto 1: Só Bíblico */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-700 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-3xl">📖</span>
                <h4 className="font-brand font-black text-sm text-white">
                  Só Áudio Bíblico 3D ({modularPlanMode === 'pessoal' ? '1 Filho' : '3 Filhos'})
                </h4>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  34 histórias bíblicas em áudio 3D, 5 temporadas, quizzes e galeria 3D dos Heróis da Fé.
                </p>
                <div className="text-xl font-black text-amber-400 font-brand">
                  {modularPlanMode === 'pessoal' ? 'R$ 49,90' : 'R$ 97,90'}{' '}
                  <span className="text-[10px] text-slate-400 font-normal">/ mês</span>
                </div>
              </div>
              <button
                onClick={() => handleCheckout(modularPlanMode === 'pessoal' ? 'pessoal_mensal' : 'familiar_mensal')}
                className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase font-brand transition-all"
              >
                Assinar Só Bíblico
              </button>
            </div>

            {/* Produto 2: Só Lab Kids */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-purple-500/40 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-3xl">🔬</span>
                <h4 className="font-brand font-black text-sm text-white">
                  Só Canal Lab Kids ({modularPlanMode === 'pessoal' ? '1 Filho' : '3 Filhos'})
                </h4>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  30 episódios de ciências, 5 trilhas vivas e 90 quizzes com ganho de XP.
                </p>
                <div className="text-xl font-black text-purple-400 font-brand">
                  {modularPlanMode === 'pessoal' ? 'R$ 37,00' : 'R$ 79,00'}{' '}
                  <span className="text-[10px] text-slate-400 font-normal">/ mês</span>
                </div>
              </div>
              <button
                onClick={() => handleCheckout(modularPlanMode === 'pessoal' ? 'pessoal_mensal' : 'familiar_mensal')}
                className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-black text-xs uppercase font-brand transition-all"
              >
                Assinar Só Lab Kids
              </button>
            </div>

            {/* Produto 3: Só 100 Atividades */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-emerald-500/40 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-3xl">🎨</span>
                <h4 className="font-brand font-black text-sm text-white">Kit 100 Atividades</h4>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Cadernos em PDF A4 para imprimir + Estúdio de Pintura 3D no App.
                </p>
                <div className="text-xl font-black text-emerald-400 font-brand">
                  R$ 27,90 <span className="text-[10px] text-slate-400 font-normal">taxa única</span>
                </div>
              </div>
              <button
                onClick={() => handleCheckout('vitalicio')}
                className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase font-brand transition-all"
              >
                Comprar Atividades (R$ 27,90)
              </button>
            </div>

            {/* Produto 4: COMBO VIP TUDO CAMPEÃO */}
            <div className="p-5 rounded-2xl bg-gradient-to-b from-amber-500/20 to-purple-500/20 border-2 border-amber-400 flex flex-col justify-between space-y-4 relative">
              <div className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-brand font-black text-[9px] uppercase shadow-sm">
                ⭐ CAMPEÃO MENSAL
              </div>
              <div className="space-y-2">
                <span className="text-3xl">👑</span>
                <h4 className="font-brand font-black text-sm text-amber-300">
                  COMBO VIP TUDO ({modularPlanMode === 'pessoal' ? '1 Filho' : '3 Filhos'})
                </h4>
                <p className="text-[11px] text-slate-200 leading-relaxed">
                  Bíblico + Lab Kids + Kit 100 Atividades + Estúdio 3D + Bônus!
                </p>
                <div className="text-2xl font-black text-amber-400 font-brand">
                  {modularPlanMode === 'pessoal' ? 'R$ 97,90' : 'R$ 147,90'}{' '}
                  <span className="text-[10px] text-slate-400 font-normal">/ mês</span>
                </div>
                <div className="text-[10px] text-emerald-400 font-bold">
                  {modularPlanMode === 'pessoal'
                    ? 'Ou Anual por R$ 970,90 / ano'
                    : 'Ou Anual por R$ 1.670,00 / ano'}
                </div>
              </div>
              <button
                onClick={() => handleCheckout(modularPlanMode === 'pessoal' ? 'pessoal_anual' : 'familiar_anual')}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-xs uppercase shadow-md transition-all font-brand"
              >
                Garantir Combo VIP
              </button>
            </div>
          </div>
        </div>

        {/* SPECIAL ORDER BUMP / STANDALONE OFFER: KIT 100 ATIVIDADES BÍBLICAS */}
        <div className="mt-8 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-[32px] p-6 sm:p-8 text-white shadow-xl border-4 border-amber-300 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="w-full md:w-1/3 max-w-[240px] shrink-0 mx-auto">
            <img
              src="/activities-kit-mockup.jpg"
              alt="Kit 100 Atividades Bíblicas para Imprimir"
              className="w-full h-auto rounded-2xl shadow-2xl border-2 border-white/80 rotate-1 hover:rotate-0 transition-transform duration-300"
            />
          </div>

          <div className="flex-1 space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white font-brand font-black text-xs uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Material Físico / Digital para Imprimir</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black font-brand leading-tight">
              Kit 100 Aventuras Bíblicas para Imprimir
            </h3>

            <p className="text-xs sm:text-sm text-amber-100 leading-relaxed">
              Tire seu filho das telas com <strong>100 páginas de atividades em folha A4</strong>: 30 desenhos para colorir em line art (economia de tinta), 30 labirintos e caça-palavras, 20 quizzes e 20 versículos para treino de caligrafia!
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1 text-[11px] font-bold text-slate-900">
              <span className="px-3 py-1 rounded-xl bg-white/90 shadow-xs">🎨 30 Desenhos</span>
              <span className="px-3 py-1 rounded-xl bg-white/90 shadow-xs">🧩 30 Labirintos</span>
              <span className="px-3 py-1 rounded-xl bg-white/90 shadow-xs">❓ 20 Quizzes</span>
              <span className="px-3 py-1 rounded-xl bg-white/90 shadow-xs">✍️ 20 Caligrafias</span>
            </div>
          </div>

          <div className="w-full md:w-auto shrink-0 text-center space-y-2">
            <div>
              <span className="text-xs line-through text-amber-200">De R$ 67,00 por</span>
              <div className="text-3xl sm:text-4xl font-black font-brand text-white">
                R$ 27,90
              </div>
              <span className="text-[10px] text-amber-100 font-bold uppercase">Pagamento Único • Download Imediato</span>
            </div>

            <a
              href="https://pay.hotmart.com/W107385181M?off=n1vhx6nj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full md:w-auto px-6 py-3.5 rounded-2xl bg-slate-950 hover:bg-slate-900 text-amber-400 font-brand font-black text-xs uppercase tracking-wider shadow-lg border-2 border-amber-300 items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              <span>Comprar Caderno A4 (R$ 27,90)</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 12. TABELA COMPARATIVA LADO A LADO DE RECURSOS */}
      <section className="bg-white border-2 border-slate-200 rounded-[36px] p-6 sm:p-10 shadow-md space-y-6 max-w-5xl mx-auto overflow-hidden">
        <div className="text-center space-y-2">
          <span className="px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-black uppercase font-brand">
            Comparativo Detalhado
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-brand">
            Compare Todos os Recursos dos Planos
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b-2 border-slate-200 text-slate-900 font-brand">
                <th className="py-3 px-3 sm:px-4 font-black">Recursos & Benefícios</th>
                <th className="py-3 px-3 sm:px-4 text-center font-bold text-slate-600">Pessoal</th>
                <th className="py-3 px-3 sm:px-4 text-center font-bold text-amber-700">Familiar</th>
                <th className="py-3 px-3 sm:px-4 text-center font-black bg-amber-50 text-amber-900 rounded-t-2xl">👑 Vitalício</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              <tr>
                <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">Perfis de Filhos Simultâneos</td>
                <td className="py-3.5 px-3 sm:px-4 text-center">1 Filho</td>
                <td className="py-3.5 px-3 sm:px-4 text-center font-bold text-amber-700">Até 3 Filhos</td>
                <td className="py-3.5 px-3 sm:px-4 text-center font-black bg-amber-50/70 text-amber-900">Até 3 Filhos</td>
              </tr>
              <tr>
                <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">4 Temporadas Iniciais (34 Episódios)</td>
                <td className="py-3.5 px-3 sm:px-4 text-center text-emerald-600 font-bold">✔ Inclusas (Português)</td>
                <td className="py-3.5 px-3 sm:px-4 text-center text-emerald-600 font-bold">✔ Inclusas (Português)</td>
                <td className="py-3.5 px-3 sm:px-4 text-center text-emerald-600 font-black bg-amber-50/70">✔ Inclusas</td>
              </tr>
              <tr>
                <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">Temporada 5 (Heróis da Fé: Daniel, Ester...)</td>
                <td className="py-3.5 px-3 sm:px-4 text-center text-slate-400">✕ Não</td>
                <td className="py-3.5 px-3 sm:px-4 text-center text-slate-400">✕ Não</td>
                <td className="py-3.5 px-3 sm:px-4 text-center font-black text-amber-600 bg-amber-50/70">⭐ Inclusa (Bônus)</td>
              </tr>
              <tr>
                <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">Módulo Trilíngue (Inglês & Espanhol Kids)</td>
                <td className="py-3.5 px-3 sm:px-4 text-center text-slate-400">✕ Não (Somente Português)</td>
                <td className="py-3.5 px-3 sm:px-4 text-center text-slate-400">✕ Não (Somente Português)</td>
                <td className="py-3.5 px-3 sm:px-4 text-center font-black text-sky-600 bg-amber-50/70">🌎 Completo (PT • EN • ES)</td>
              </tr>
              <tr>
                <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">Estúdio de Pintura 3D & Caderno P&B para Imprimir</td>
                <td className="py-3.5 px-3 sm:px-4 text-center text-emerald-600 font-bold">✔ Incluso (Online + P&B)</td>
                <td className="py-3.5 px-3 sm:px-4 text-center text-emerald-600 font-bold">✔ Incluso (Online + P&B)</td>
                <td className="py-3.5 px-3 sm:px-4 text-center font-black text-emerald-600 bg-amber-50/70">🎨 Incluso (Online + P&B)</td>
              </tr>
              <tr>
                <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">Quizzes Bíblicos & Coroas de Conquista</td>
                <td className="py-3.5 px-3 sm:px-4 text-center text-emerald-600">✔ Sim</td>
                <td className="py-3.5 px-3 sm:px-4 text-center text-emerald-600">✔ Sim</td>
                <td className="py-3.5 px-3 sm:px-4 text-center font-black text-emerald-600 bg-amber-50/70">✔ Sim + Certificados</td>
              </tr>
              <tr>
                <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">Modo Hora de Dormir com Timer</td>
                <td className="py-3.5 px-3 sm:px-4 text-center text-emerald-600">✔ Sim</td>
                <td className="py-3.5 px-3 sm:px-4 text-center text-emerald-600">✔ Sim</td>
                <td className="py-3.5 px-3 sm:px-4 text-center font-black text-emerald-600 bg-amber-50/70">✔ Sim</td>
              </tr>
              <tr>
                <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">Mensalidades Futuras</td>
                <td className="py-3.5 px-3 sm:px-4 text-center text-slate-600">Mensal ou Anual</td>
                <td className="py-3.5 px-3 sm:px-4 text-center text-slate-600">Mensal ou Anual</td>
                <td className="py-3.5 px-3 sm:px-4 text-center font-black text-emerald-700 bg-amber-50/70">🎉 NUNCA MAIS (Taxa Única)</td>
              </tr>
              <tr>
                <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">Garantia Incondicional de Devolução</td>
                <td className="py-3.5 px-3 sm:px-4 text-center text-emerald-600">7 Dias</td>
                <td className="py-3.5 px-3 sm:px-4 text-center text-emerald-600">7 Dias</td>
                <td className="py-3.5 px-3 sm:px-4 text-center font-black text-emerald-600 bg-amber-50/70 rounded-b-2xl">7 Dias (100% Seguro)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-center pt-2">
          <a
            href="#planos"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs sm:text-sm font-brand uppercase tracking-wider shadow-md transition-all hover:scale-105"
          >
            <Crown className="w-4 h-4" />
            <span>Escolher o Plano Vitalício com 50% de Desconto</span>
          </a>
        </div>
      </section>

      {/* 13. 7-DAY GUARANTEE BANNER */}
      <section className="bg-white border-4 border-amber-300 rounded-[36px] p-8 sm:p-12 shadow-lg flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-500 text-slate-950 flex flex-col items-center justify-center font-black font-brand shrink-0 shadow-xl border-4 border-white ring-4 ring-amber-200">
          <span className="text-2xl sm:text-3xl leading-none">7</span>
          <span className="text-[10px] uppercase tracking-wider">DIAS</span>
          <span className="text-[8px] uppercase">Garantia</span>
        </div>

        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-brand">
            Garantia Incondicional de 100% de Satisfação
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Experimente o Toon Tales Kids por 7 dias. Se os seus filhos não ficarem encantados com as histórias e você não notar uma transformação na paz da sua casa, basta solicitar o reembolso que devolveremos cada centavo sem perguntas.
          </p>
        </div>
      </section>

      {/* 14. FAQ ACCORDION */}
      <section id="faq" className="bg-white border-2 border-slate-200 rounded-[36px] p-8 sm:p-12 shadow-sm space-y-8 max-w-4xl mx-auto scroll-mt-20">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-brand">
            Perguntas Frequentes dos Pais
          </h2>
          <p className="text-xs text-slate-500">Tire suas dúvidas sobre os planos, idiomas e as temporadas.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border-2 border-slate-100 rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-4 sm:p-5 text-left font-black text-xs sm:text-sm text-slate-900 font-brand flex items-center justify-between gap-4 hover:bg-slate-50"
              >
                <span>{faq.q}</span>
                <ChevronRight
                  className={`w-4 h-4 text-orange-500 transition-transform ${
                    activeFaq === idx ? 'rotate-90' : ''
                  }`}
                />
              </button>

              {activeFaq === idx && (
                <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 15. FINAL CLOSING CTA */}
      <section className="rounded-[36px] bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 p-8 sm:p-12 text-center text-white space-y-6 shadow-2xl border-4 border-amber-300">
        <div className="space-y-2 max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black font-brand">
            Dê aos Seus Filhos Histórias que Edificam!
          </h2>
          <p className="text-xs sm:text-sm text-amber-100 leading-relaxed">
            Plante princípios bíblicos no coração dos seus filhos hoje mesmo com o melhor audiolivro 3D cristão e trilíngue do Brasil.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#planos"
            className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-white text-orange-600 hover:bg-amber-50 font-black text-sm sm:text-base font-brand uppercase tracking-wider shadow-xl hover:scale-105 active:scale-95 transition-all text-center"
          >
            Quero Assinar Agora com 50% de Desconto
          </a>
        </div>
      </section>

      {/* 16. AMBASSADOR / AFILIADOS RECRUITMENT BANNER */}
      <section className="rounded-[36px] bg-slate-900 border-4 border-amber-400 p-6 sm:p-10 shadow-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 text-xs font-black uppercase font-brand">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span>Programa Oficial de Embaixadores</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black font-brand text-slate-100">
            Ganhe de <span className="text-amber-400">40% a 50% de Comissão</span> por Indicação!
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Seja um parceiro oficial do Toon Tales Kids! Receba comissões automáticas diretamente na sua conta da Hotmart indicando o melhor áudio bíblico 3D para famílias, igrejas e escolas.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
          <button
            onClick={() => setIsAmbassadorModalOpen(true)}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-xs sm:text-sm font-brand uppercase tracking-wider shadow-xl shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Crown className="w-4 h-4" />
            <span>Conhecer o Programa & Ganhos</span>
          </button>
        </div>
      </section>

      {/* 17. FLOATING STICKY CTA BOTTOM BAR (COM BOTÃO WHATSAPP INTEGRADO EXATAMENTE NO MEIO) */}
      <AnimatePresence>
        {showStickyCta && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-0 inset-x-0 z-40 bg-slate-950/95 backdrop-blur-xl border-t-2 border-amber-400 py-3 px-4 sm:px-6 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Esquerda: Detalhes da Oferta Vitalício */}
              <div className="flex items-center gap-3 text-white text-center md:text-left">
                <span className="hidden sm:flex w-10 h-10 rounded-xl bg-amber-500 text-slate-950 items-center justify-center font-black shrink-0">
                  👑
                </span>
                <div>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <span className="font-brand font-black text-xs sm:text-sm text-amber-400">
                      Plano Vitalício Toon Tales (50% OFF)
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-black uppercase">
                      Taxa Única
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300">
                    4 Temporadas + Temporada 5 + Módulo Trilíngue + Estúdio de Pintura + Bônus
                  </p>
                </div>
              </div>

              {/* Meio: Botão do WhatsApp (Exatamente onde apontou a seta do mouse) */}
              <div className="flex items-center justify-center">
                <a
                  href="https://wa.me/5516997325572?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20o%20Toon%20Tales%20Kids!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs font-brand uppercase tracking-wider shadow-lg flex items-center gap-2 hover:scale-105 active:scale-95 transition-all border-2 border-white ring-2 ring-emerald-500/30 shrink-0"
                  title="Fale com nosso suporte no WhatsApp (16) 99732-5572"
                >
                  <MessageCircle className="w-4 h-4 fill-current animate-bounce" />
                  <span>Dúvidas? Fale no WhatsApp</span>
                </a>
              </div>

              {/* Direita: Botão de Compra Dourado */}
              <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-end">
                <a
                  href="#planos"
                  onClick={() => setSelectedPlan('vitalicio')}
                  className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-xs sm:text-sm font-brand uppercase tracking-wider text-center shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0"
                >
                  Garantir por {CHECKOUT_PLANS_CONFIG.vitalicio.prices[selectedCurrency].installmentPrice}
                </a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 17. BOTÃO WHATSAPP FLUTUANTE (VISÍVEL APENAS ANTES DA BARRA DE OFERTA ENTRAR EM CENA) */}
      <AnimatePresence>
        {!showStickyCta && (
          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            href="https://wa.me/5516997325572?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20o%20Toon%20Tales%20Kids!"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs font-brand uppercase tracking-wider shadow-2xl flex items-center gap-2 hover:scale-105 active:scale-95 transition-all border-2 border-white ring-4 ring-emerald-500/20"
            title="Fale com nosso suporte no WhatsApp (16) 99732-5572"
          >
            <MessageCircle className="w-5 h-5 fill-current animate-bounce" />
            <span className="hidden sm:inline">Dúvidas? Fale no WhatsApp</span>
          </motion.a>
        )}
      </AnimatePresence>

      {/* 18. VIDEO & TOUR MODAL (COM PLAYER MP4 REAL + TOUR INTERATIVO) */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVideoModalOpen(false)}
              className="fixed inset-0 bg-slate-950/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1, y: 0 }}
              className="relative z-10 w-full max-w-4xl rounded-[32px] overflow-hidden bg-slate-900 border-4 border-amber-400 p-6 sm:p-8 shadow-2xl text-white space-y-6"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black font-brand text-amber-300">
                      Showcase Oficial • Toon Tales Kids
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      Veja a experiência de áudio 3D, animação, quizzes e modo noturno
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* Tab Selector between Real Video and Interactive Tour */}
                  <div className="inline-flex rounded-xl bg-slate-800 p-1 border border-slate-700">
                    <button
                      onClick={() => setVideoModalTab('video')}
                      className={`px-3 py-1 rounded-lg text-xs font-black font-brand transition-all ${
                        videoModalTab === 'video' ? 'bg-amber-400 text-slate-950' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      Trailer Oficial
                    </button>
                    <button
                      onClick={() => setVideoModalTab('tour')}
                      className={`px-3 py-1 rounded-lg text-xs font-black font-brand transition-all ${
                        videoModalTab === 'tour' ? 'bg-amber-400 text-slate-950' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      Tour Interativo
                    </button>
                  </div>

                  <button
                    onClick={() => setIsVideoModalOpen(false)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* View Content */}
              {videoModalTab === 'video' ? (
                <div className="space-y-4">
                  <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black border-2 border-amber-400/40 shadow-inner">
                    <video
                      controls
                      autoPlay
                      className="w-full h-full object-cover"
                      src="/trailer.mp4"
                    >
                      Seu navegador não suporta a tag de vídeo.
                    </video>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>🎬 Trailer Oficial em Alta Definição (Superprodução Toon Tales)</span>
                    <a
                      href="#planos"
                      onClick={() => setIsVideoModalOpen(false)}
                      className="text-amber-400 font-bold hover:underline"
                    >
                      Garantir Acesso Completo →
                    </a>
                  </div>
                </div>
              ) : (
                <PlatformVideoTour onClose={() => setIsVideoModalOpen(false)} />
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 19. COLORING STUDIO MODAL (ESTÚDIO DE PINTURA ONLINE & PDF P&B) */}
      <ColoringStudioModal
        isOpen={isColoringModalOpen}
        onClose={() => setIsColoringModalOpen(false)}
      />

      {/* 20. CHECKOUT & LEAD CAPTURE MODAL (MULTIMOEDA: HOTMART / STRIPE / ASAAS) */}
      <CheckoutLeadModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        planId={selectedPlan}
        currency={selectedCurrency}
        onSuccessAccess={() => {
          setIsCheckoutModalOpen(false);
          if (onEnterPlatform) onEnterPlatform();
        }}
      />

      {/* 21. AMBASSADOR MODAL (PROGRAMA DE AFILIADOS 40% A 50% COMISSÃO) */}
      <AmbassadorModal
        isOpen={isAmbassadorModalOpen}
        onClose={() => setIsAmbassadorModalOpen(false)}
      />
    </div>
  );
};
