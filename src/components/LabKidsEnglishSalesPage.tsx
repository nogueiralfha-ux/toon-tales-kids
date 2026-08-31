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

interface LabKidsEnglishSalesPageProps {
  onOpenAuth: (mode?: 'login' | 'register') => void;
  onEnterPlatform?: () => void;
  onOpenPortugueseVersion?: () => void;
}

export const LabKidsEnglishSalesPage: React.FC<LabKidsEnglishSalesPageProps> = ({
  onOpenAuth,
  onEnterPlatform,
  onOpenPortugueseVersion,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({ hours: 3, minutes: 42, seconds: 18 });
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const [selectedPlanMode, setSelectedPlanMode] = useState<'single' | 'family'>('single');

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
      q: 'How will I receive access to Lab Kids?',
      a: 'Access is immediate! As soon as your Hotmart order is approved, you will receive your login and password via email and WhatsApp to start watching right away.',
    },
    {
      q: 'What is the recommended age group?',
      a: 'Lab Kids was designed by educators for kids aged 3 to 12. The language is clear, fun, and easy to understand, sparking the curiosity of little ones while delivering rich STEM concepts.',
    },
    {
      q: 'Does it work on Smart TVs, Phones, and Tablets?',
      a: 'YES! The platform is 100% responsive (Web and PWA). It works seamlessly on Android, iPhone, iPad, Windows, Mac, and Smart TV browsers.',
    },
    {
      q: 'What if my child does not like it? Is there a guarantee?',
      a: 'You have a 100% risk-free 30-Day Money-Back Guarantee. If for any reason you or your child are not delighted, simply request a refund via Hotmart for a full refund.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Jenkins',
      role: 'Mother of Liam (6 years old)',
      location: 'Austin, TX',
      text: 'Liam used to spend hours on chaotic video apps. When I showed him Lab Kids about the Solar System and the Human Body, he was hooked! Now he explains how the heart beats and why plants breathe!',
      stars: 5,
    },
    {
      name: 'Prof. David Miller',
      role: 'Father of Emma (8) & Elementary STEM Educator',
      location: 'Orlando, FL',
      text: 'As an educator, I am deeply impressed by the pedagogical rigor paired with fun storytelling. The animations are top-tier and the quizzes reinforce real learning.',
      stars: 5,
    },
    {
      name: 'Jessica & Robert',
      role: 'Parents of Noah (5) and Clara (9)',
      location: 'London, UK',
      text: 'The best educational investment we made for our family this year. It is such a relief to let our kids watch clean, safe, and truly educational content without annoying ads!',
      stars: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800 font-sans selection:bg-purple-600 selection:text-white pb-16">
      
      {/* ------------------------------------------------------------- */}
      {/* 1. TOPO DE URGÊNCIA & NOTIFICAÇÃO                            */}
      {/* ------------------------------------------------------------- *      {/* ------------------------------------------------------------- */}
      {/* 1. URGENCY TOP NOTIFICATION BAR                               */}
      {/* ------------------------------------------------------------- */}
      <div className="w-full bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 text-white py-2 px-4 text-center text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-md">
        <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
        <span>OFFICIAL LAB KIDS LAUNCH • 30 FULL HD STEM VIDEOS + 90 QUIZZES (70% OFF)</span>
        <span className="hidden md:inline font-mono bg-black/30 px-2 py-0.5 rounded-md border border-white/20">
          ⏰ Ends in: {String(timeLeft.hours).padStart(2, '0')}h : {String(timeLeft.minutes).padStart(2, '0')}m : {String(timeLeft.seconds).padStart(2, '0')}s
        </span>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 2. PAGE HEADER WITH LOGO AND BUTTONS                          */}
      {/* ------------------------------------------------------------- */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4 border-b border-purple-100">
        <div className="flex items-center gap-3">
          <img
            src="/labkids-en/branding/logo labkids ingles.png"
            alt="Lab Kids English Logo"
            className="h-10 sm:h-12 w-auto object-contain drop-shadow-sm"
          />
          <span className="hidden sm:inline-block text-[11px] font-black uppercase tracking-wider text-purple-700 bg-purple-100 px-2.5 py-1 rounded-full border border-purple-200">
            Science & Discoveries
          </span>
        </div>

        <div className="flex items-center gap-3">
          {onOpenPortugueseVersion && (
            <button
              onClick={onOpenPortugueseVersion}
              className="px-3 py-1.5 rounded-xl text-xs font-bold text-slate-600 hover:text-purple-700 hover:bg-purple-50 border border-slate-200 transition-colors hidden sm:flex items-center gap-1.5"
              title="Versão em Português"
            >
              <span>🇧🇷 PT-BR</span>
            </button>
          )}

          <button
            onClick={() => onOpenAuth('login')}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-purple-50 text-slate-700 hover:text-purple-700 text-xs font-bold transition-all flex items-center gap-1.5 border border-slate-200"
          >
            <span>🔐 Student Login</span>
          </button>
          <button
            onClick={() => {
              const el = document.getElementById('offer');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white text-xs font-black uppercase tracking-wider shadow-md shadow-emerald-400/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-1"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get Instant Access</span>
          </button>
        </div>
      </header>

      {/* ------------------------------------------------------------- */}
      {/* 3. HERO PRINCIPAL & VSL                                       */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 text-center space-y-6">
        
        {/* Headline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-800 text-xs sm:text-sm font-extrabold shadow-xs">
          <Sparkles className="w-4 h-4 text-purple-600 animate-spin" />
          <span>The #1 Science & STEM Learning Series for Kids</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
          Here the Little Ones Learn About{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600">
            Science & The Mysteries of Our Planet
          </span>{' '}
          in a Fun Way in...
        </h1>

        {/* Big Highlight */}
        <div className="text-2xl sm:text-4xl font-black text-amber-500 uppercase tracking-wide font-brand">
          🔬 30 ANIMATED VIDEOS FOR KIDS + 90 QUIZZES!
        </div>

        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-medium">
          Replace endless scrolling with engaging, high-impact STEM videos where your child learns physics, astronomy, nature, human anatomy, and coding in a 100% wholesome, safe environment.
        </p>

        {/* 🎬 VSL Video Player Container (English Intro Video) */}
        <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-purple-400 bg-slate-950 aspect-video group">
          <video
            src="/labkids-en/vsl.mp4"
            poster="/labkids-en/branding/Arte 1 labkids ingles.webp"
            controls
            playsInline
            className="w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Primary CTA Button */}
        <div className="pt-4 max-w-md mx-auto space-y-3">
          <button
            onClick={() => {
              const el = document.getElementById('offer');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-white font-black text-lg sm:text-xl uppercase tracking-wider shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 ring-4 ring-emerald-200"
          >
            <Sparkles className="w-6 h-6 fill-current" />
            <span>GET INSTANT ACCESS TO LAB KIDS</span>
          </button>

          <div className="flex items-center justify-center gap-4 text-xs text-slate-500 font-bold">
            <span className="flex items-center gap-1 text-emerald-600">
              <ShieldCheck className="w-4 h-4" /> 30-Day Guarantee
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-purple-600">
              <Zap className="w-4 h-4" /> Instant Delivery
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-indigo-600">
              <Lock className="w-4 h-4" /> 100% Secure via Hotmart
            </span>
          </div>
        </div>
      </section>
      {/* ------------------------------------------------------------- */}
      {/* 4. THE 3 PILLARS OF DEVELOPMENT                               */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
            Why <span className="text-purple-600">Lab Kids</span> is the New Favorite of Kids!
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Tailor-made to engage children's curiosity with science, values, and zero digital junk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-6 rounded-3xl bg-white border-2 border-purple-100 shadow-md hover:shadow-xl hover:border-purple-300 transition-all space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center font-black text-2xl shadow-inner">
              🎯
            </div>
            <h3 className="text-lg font-black text-slate-900">Attention & Focus</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Engaging and dynamic videos that enhance concentration and keep your child excited about real-world science.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-3xl bg-white border-2 border-amber-100 shadow-md hover:shadow-xl hover:border-amber-300 transition-all space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-black text-2xl shadow-inner">
              🚀
            </div>
            <h3 className="text-lg font-black text-slate-900">Development with Every Video</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Everything is taught in a constructive and fun way, building a strong foundation in biology, physics, and astronomy.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-3xl bg-white border-2 border-emerald-100 shadow-md hover:shadow-xl hover:border-emerald-300 transition-all space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-black text-2xl shadow-inner">
              💡
            </div>
            <h3 className="text-lg font-black text-slate-900">Natural Skills Unlocked</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Learning about each topic helps your child excel at school, develop sharp reasoning, and love learning naturally.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. SHOWCASE OF ALL 30 EPISODES                                */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-gradient-to-b from-purple-900 via-indigo-950 to-slate-950 text-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/40 text-xs font-bold uppercase tracking-wider">
              Complete STEM Library
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              You Get All{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-amber-300">
                30 Animated Videos
              </span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Each video features incredible, educational content to watch anytime and anywhere:
            </p>
          </div>

          {/* 30 Episodes Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
            {[
              { id: 1, title: 'Exploring Volcanoes', img: '/labkids-en/covers/1. Exploring Volcanoes A Fiery Adventure.png' },
              { id: 2, title: 'Day and Night: Earth Adventures', img: '/labkids-en/covers/2. Day and Night Earth_s Bright and Dark Adventures.png' },
              { id: 3, title: 'The Water Cycle Adventure', img: '/labkids-en/covers/3. The Water Cycle Nature_s Amazing Water Adventure.png' },
              { id: 4, title: 'Animal Homes Around the World', img: '/labkids-en/covers/4. Animal Homes Exploring Where Animals Live!.png' },
              { id: 5, title: 'Earthquakes & The Shaky Ground', img: '/labkids-en/covers/5. Earthquakes Exploring the Shaky World Beneath Our Feet!.png' },
              { id: 6, title: 'Magnetic Magic & Magnets', img: '/labkids-en/covers/6. Magnetic Magic Exploring the Power of Magnets.png' },
              { id: 7, title: 'Incredible Inventors', img: '/labkids-en/covers/7. Incredible Inventors and Their Amazing Creations!.png' },
              { id: 8, title: 'The Amazing Journey of Plants', img: '/labkids-en/covers/8. The Amazing Journey of Plants Exploring the Plant Life Cycle!.png' },
              { id: 9, title: 'Weather Wonders & Storms', img: '/labkids-en/covers/9. Weather Wonders Exploring the Science of Rain, Snow, and Thunderstorms!.png' },
              { id: 10, title: 'Ocean Adventures & Sea Life', img: '/labkids-en/covers/10. Ocean Adventures Exploring the Amazing World of Sea Creatures!.png' },
              { id: 11, title: 'Renewable Solar & Wind Energy', img: '/labkids-en/covers/11. Renewable Energy Powering Our Planet with the Sun, Wind, and Water!.png' },
              { id: 12, title: 'Shooting Stars, Meteors & Comets', img: '/labkids-en/covers/12. Shooting Stars and Cosmic Visitors Exploring Meteors and Comets!.png' },
              { id: 13, title: 'Understanding Floods', img: '/labkids-en/covers/13. Understanding Floods Keeping Our Environment Safe.png' },
              { id: 14, title: 'Sink or Float Science', img: '/labkids-en/covers/14. Sink or Float Fun with Science!.png' },
              { id: 15, title: 'Moon Magic: Lunar Eclipse', img: '/labkids-en/covers/15. Moon Magic Exploring the Lunar Eclipse!.png' },
              { id: 16, title: 'Sun Secrets: Solar Eclipse', img: '/labkids-en/covers/16. Sun Secrets Exploring the Solar Eclipse!.png' },
              { id: 17, title: "Let's Recycle Fun Facts", img: '/labkids-en/covers/17. Lets Recycle Fun Facts About Recycling.png' },
              { id: 18, title: 'The Mystery of Invisible Germs', img: '/labkids-en/covers/18. The Mystery of Invisible Germs!.png' },
              { id: 19, title: "Let's Move: Power of Exercise", img: '/labkids-en/covers/19. Let_s Move Why Exercise is Important!.png' },
              { id: 20, title: 'Fire Safety Rules for Kids', img: '/labkids-en/covers/20. Be Safe from Fire - Fun Facts About Fire Safety.png' },
              { id: 21, title: 'Feeling Hot: All About Fever', img: '/labkids-en/covers/21. Feeling Hot All About Fever.png' },
              { id: 22, title: 'Exploring the Amazon River', img: '/labkids-en/covers/22. Exploring the Amazing Amazon River!.png' },
              { id: 23, title: 'Tsunami: The Giant Wave', img: '/labkids-en/covers/23. Tsunami The Giant Wave!.png' },
              { id: 24, title: 'The Awesome Pufferfish', img: '/labkids-en/covers/24. The Awesome Pufferfish!.png' },
              { id: 25, title: 'Inside Our Incredible Bodies', img: '/labkids-en/covers/25. Inside Our Incredible Bodies Exploring the Amazing Human Machine!.png' },
              { id: 26, title: 'Healthy Habits: Eat, Move, Sleep', img: '/labkids-en/covers/26. Healthy Habits for Happy Kids Eat, Move, Sleep!.png' },
              { id: 27, title: 'Snooze Science: Power of Sleep', img: '/labkids-en/covers/27. Snooze Science Exploring the Power of Sleep and Rest.png' },
              { id: 28, title: 'The Science of Sound & Ears', img: '/labkids-en/covers/28. The Science of Sound Exploring How We Hear.png' },
              { id: 29, title: 'The Art of Coding with Computers', img: '/labkids-en/covers/29. The Art of Coding Creating Magic with Computers.png' },
              { id: 30, title: 'The Flu: How the Body Fights Back', img: '/labkids-en/covers/30. The Flu Understanding a Common Sickness.png' },
            ].map((ep) => (
              <div key={ep.id} className="rounded-2xl overflow-hidden border border-white/20 bg-white/10 shadow-lg group hover:scale-105 transition-all">
                <img
                  src={ep.img}
                  alt={ep.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-2 text-center bg-black/40">
                  <div className="text-[11px] font-black text-amber-300 truncate">#{ep.id} {ep.title}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Midpage CTA */}
          <div className="text-center pt-6">
            <a
              href="#offer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-base uppercase tracking-wider shadow-xl shadow-orange-500/30 hover:scale-105 active:scale-95 transition-all"
            >
              <Sparkles className="w-5 h-5 fill-current" />
              <span>Unlock All 30 STEM Episodes Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 6. MULTI-DEVICE SECTION                                       */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="px-3.5 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-extrabold uppercase tracking-wider">
              Total Freedom of Use
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              On PC, Mobile, Tablet, or Smart TV! Choose where you want to watch.
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              No complicated installations or heavy storage required. Lab Kids streams instantly in high definition directly on any browser with your personal login.
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
                <span className="text-xs font-bold text-slate-800">PCs & MacBooks</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/labkids-en/branding/Labkids mockup ingles.webp"
              alt="Lab Kids English Multi-Device Mockup"
              className="w-full max-w-lg h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 7. REVIEWS & TESTIMONIALS                                     */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-purple-50/70 border-y border-purple-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              Trusted by Parents & Educators Worldwide
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Real families replacing mindless videos with wholesome science:
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
      {/* 8. OFFICIAL HOTMART CHECKOUT & PRICING TABLE                  */}
      {/* ------------------------------------------------------------- */}
      <section id="offer" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-black uppercase tracking-wider">
            🏷️ Time to Take It Home!
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900">
            Get Your Access to <span className="text-purple-600">LabKids</span> Now!
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            ⚡ Flexible Monthly & Annual Plans • Cancel Anytime • Instant Family Access!
          </p>

          <div className="inline-flex items-center p-1.5 rounded-2xl bg-slate-100 border border-slate-300 shadow-inner mt-2">
            <button
              onClick={() => setSelectedPlanMode('single')}
              className={`px-5 py-2 rounded-xl text-xs font-black font-brand transition-all ${
                selectedPlanMode === 'single'
                  ? 'bg-purple-600 text-white shadow-md scale-105'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              👤 Single Child Pass
            </button>

            <button
              onClick={() => setSelectedPlanMode('family')}
              className={`px-5 py-2 rounded-xl text-xs font-black font-brand transition-all ${
                selectedPlanMode === 'family'
                  ? 'bg-purple-600 text-white shadow-md scale-105'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              👨‍👩‍👧‍👦 Family Pass (3 Kids)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* PLAN 1: SOLO LAB KIDS */}
          <div className="p-8 rounded-3xl bg-white border-2 border-purple-300 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-black uppercase tracking-wider">
                🔬 Lab Kids Channel
              </div>
              
              <h3 className="text-2xl font-black text-slate-900">Solo Lab Kids Channel</h3>
              <p className="text-xs text-slate-600">
                Complete access to all 30 science lessons, 5 tracks, and interactive quizzes.
              </p>

              {/* Price Tag */}
              <div className="pt-2">
                <div className="text-xs text-slate-400">
                  {selectedPlanMode === 'single' ? 'Single Child Plan (1 Profile)' : 'Family Plan (3 Profiles)'}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold text-slate-700">$</span>
                  <span className="text-4xl sm:text-5xl font-black text-purple-700">
                    {selectedPlanMode === 'single' ? '37.00' : '79.00'}
                  </span>
                  <span className="text-xs text-slate-500 font-bold">/ month</span>
                </div>
                <div className="text-[11px] text-purple-600 font-bold mt-1">
                  {selectedPlanMode === 'single'
                    ? 'Or Family Plan (3 Profiles) for $ 79.00 / month'
                    : 'Unlimited access across all your family devices'}
                </div>
              </div>

              {/* Feature List */}
              <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>30 Animated Lessons in Full HD (English Voiceover)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>5 STEM Science Tracks (Body, Space, Earth, Weather, Tech)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>90 Interactive Quizzes with Badges and XP Points</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Access on Mobile, Tablet, Computer, and Smart TV</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>7-Day 100% Risk-Free Guarantee</span>
                </div>
              </div>
            </div>

            <a
              href={
                selectedPlanMode === 'single'
                  ? 'https://pay.hotmart.com/T107380286O?off=h7w8lkur'
                  : 'https://pay.hotmart.com/T107380286O?off=zfw0lhek'
              }
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-black text-center text-sm uppercase tracking-wider shadow-lg shadow-purple-400/30 hover:scale-105 active:scale-95 transition-all block"
            >
              Subscribe to Solo Lab Kids ({selectedPlanMode === 'single' ? '$37.00/mo' : '$79.00/mo'})
            </a>
          </div>

          {/* PLAN 2: SUPER VIP ALL-ACCESS */}
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-white border-4 border-amber-400 shadow-2xl flex flex-col justify-between space-y-6">
            <div className="absolute -top-4 right-6 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg">
              ⭐ BEST SELLER • MONTHLY CHAMPION
            </div>

            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-black uppercase tracking-wider">
                👑 Super VIP All-in-One
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-black text-white">COMPLETE VIP COMBO</h3>
              <p className="text-xs text-slate-300">
                Unlimited access to EVERYTHING: 3D Audio Stories + Lab Kids + 100 Activity Books + 3D Studio!
              </p>

              {/* Price Tag */}
              <div className="pt-2">
                <div className="text-xs text-slate-400">
                  {selectedPlanMode === 'single' ? 'Single Child Plan (1 Profile)' : 'Family Plan (3 Profiles)'}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold text-amber-400">$</span>
                  <span className="text-4xl sm:text-5xl font-black text-amber-400">
                    {selectedPlanMode === 'single' ? '97.90' : '147.90'}
                  </span>
                  <span className="text-xs text-slate-300 font-bold">/ month</span>
                </div>
                <div className="text-[11px] text-emerald-400 font-bold mt-1">
                  {selectedPlanMode === 'single' ? (
                    <a
                      href="https://pay.hotmart.com/T107380286O?off=rjonkcd3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-amber-300"
                    >
                      Or Annual Plan for $ 970.90 / year (Best Deal!)
                    </a>
                  ) : (
                    'Or Annual Family Plan for $ 1,670.00 / year'
                  )}
                </div>
              </div>

              {/* Feature List */}
              <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs font-semibold text-slate-200">
                <div className="flex items-center gap-2 text-amber-300 font-bold">
                  <Sparkles className="w-4 h-4 shrink-0 fill-current" />
                  <span>30 Lab Kids Science Lessons (All Included)</span>
                </div>
                <div className="flex items-center gap-2 text-amber-300 font-bold">
                  <Sparkles className="w-4 h-4 shrink-0 fill-current" />
                  <span>34 3D Audio Stories (Seasons 1 to 5)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100 Activity Books (Printable A4 PDF) + 3D Coloring Studio</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Parental Portal with Progress Reports</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>7-Day 100% Risk-Free Guarantee</span>
                </div>
              </div>
            </div>

            <a
              href={
                selectedPlanMode === 'single'
                  ? 'https://pay.hotmart.com/T107380286O?off=8sknyius'
                  : 'https://pay.hotmart.com/T107380286O?off=a45xdqoj'
              }
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-center text-sm uppercase tracking-wider shadow-xl shadow-orange-500/30 hover:scale-105 active:scale-95 transition-all block ring-2 ring-amber-300"
            >
              Get Complete VIP Combo ({selectedPlanMode === 'single' ? '$97.90/mo' : '$147.90/mo'})
            </a>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 9. 30-DAY GUARANTEE BANNER                                    */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="p-8 rounded-3xl bg-emerald-50 border-2 border-emerald-300 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left shadow-md">
          <div className="w-20 h-20 rounded-3xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/30">
            <ShieldCheck className="w-12 h-12" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-black text-slate-900">30-Day Money-Back Guarantee!</h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Try it completely risk-free. If our product does not meet your expectations or if our support team cannot resolve your issue, we will gladly refund your purchase via Hotmart. We are committed to your satisfaction!
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 10. FAQ - FREQUENTLY ASKED QUESTIONS                          */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Frequently Asked Questions</h2>
          <p className="text-xs sm:text-sm text-slate-600">Got questions? Find instant answers below:</p>
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
      {/* 11. FLOATING WHATSAPP / CONTACT BUTTON                         */}
      {/* ------------------------------------------------------------- */}
      <a
        href="https://wa.me/5516997325572?text=Hello!%20I%20have%20a%20question%20about%20Lab%20Kids!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center gap-2 group ring-4 ring-emerald-200"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="hidden group-hover:inline text-xs font-black uppercase tracking-wider pr-1">
          Need Help? Chat with Us
        </span>
      </a>

    </div>
  );
};
export default LabKidsEnglishSalesPage;

