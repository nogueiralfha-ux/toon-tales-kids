import React, { useState } from 'react';
import {
  Sparkles,
  Search,
  Bell,
  Heart,
  Moon,
  Sliders,
  Shield,
  BookOpen,
  Users,
  Trophy,
  Home,
  Layers,
  Star,
  Award,
  ChevronDown,
  Check,
  DollarSign,
  Rocket,
  Headphones,
  ArrowRight,
  LogIn,
  LogOut,
  Crown,
  Palette,
  UserCheck,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { UserAccount } from '../services/authService';

export type NavTab = 'dashboard' | 'catalog' | 'seasons' | 'characters' | 'heroes' | 'favorites' | 'profile' | 'parents' | 'landing' | 'player' | 'script' | 'soundboard' | 'quiz' | 'thankyou';

interface NavbarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenSearch: () => void;
  onOpenMixer: () => void;
  onOpenBedtime: () => void;
  onOpenAuth: (mode?: 'login' | 'register') => void;
  onOpenAdmin: () => void;
  onOpenColoring: () => void;
  onLogout: () => void;
  currentUser: UserAccount | null;
  bedtimeActive: boolean;
  favoritesCount: number;
  userXp: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  onOpenSearch,
  onOpenMixer,
  onOpenBedtime,
  onOpenAuth,
  onOpenAdmin,
  onOpenColoring,
  onLogout,
  currentUser,
  bedtimeActive,
  favoritesCount,
  userXp,
}) => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState<boolean>(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState<boolean>(false);

  const isAdmin = currentUser?.role === 'admin' || currentUser?.email?.toLowerCase() === 'nogueiralfha@gmail.com';

  const notifications = [
    { id: '1', title: '⭐ Nova História Disponível!', desc: 'Episódio 31 de Enoque foi liberado na Temporada 5.', time: 'Hoje' },
    { id: '2', title: '🏆 Conquista Desbloqueada!', desc: 'Você ganhou o badge "Primeira Aventura".', time: 'Ontem' },
  ];

  // -------------------------------------------------------------
  // 1. DEDICATED SALES LANDING NAVBAR (100% CLEAN & FOCUSED)
  // -------------------------------------------------------------
  if (activeTab === 'landing') {
    return (
      <header className="w-full bg-white/95 backdrop-blur-md border-b-4 border-amber-400 sticky top-0 z-40 shadow-md select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-tr from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-white font-brand font-black text-2xl sm:text-3xl shadow-lg shadow-orange-300 ring-4 ring-amber-100 group-hover:scale-105 transition-transform">
              T
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="text-xl sm:text-2xl font-black tracking-tight text-orange-600 uppercase font-brand leading-none">
                  TOON TALES <span className="text-sky-500">KIDS</span>
                </h1>
                <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-black uppercase font-brand border border-amber-200">
                  A Bíblia em Áudio
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-bold hidden md:block">
                Histórias que ensinam, aventuras que transformam!
              </p>
            </div>
          </div>

          {/* Sales Quick Anchor Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-black font-brand text-slate-600">
            <a href="#beneficios" className="hover:text-orange-600 transition-colors">
              Benefícios
            </a>
            <a href="#personagens" className="hover:text-orange-600 transition-colors">
              Personagens 3D
            </a>
            <a href="#incluso" className="hover:text-orange-600 transition-colors">
              O que Inclui
            </a>
            <a href="#depoimentos" className="hover:text-orange-600 transition-colors">
              Depoimentos
            </a>
            <a href="#planos" className="hover:text-orange-600 transition-colors text-amber-600 font-black">
              Planos & Preços
            </a>
            <a href="#faq" className="hover:text-orange-600 transition-colors">
              Dúvidas
            </a>
          </nav>

          {/* Sales Action (Login & Assinar) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {isAdmin ? (
              <button
                onClick={onOpenAdmin}
                className="px-4 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-amber-400 font-brand font-black text-xs uppercase tracking-wider shadow-md border-2 border-amber-400 flex items-center gap-1.5 active:scale-95"
              >
                <Crown className="w-4 h-4 text-amber-400" />
                <span>Painel Admin</span>
              </button>
            ) : currentUser ? (
              <button
                onClick={() => onSelectTab('dashboard')}
                className="px-4 py-2.5 rounded-2xl bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-brand font-black text-xs uppercase tracking-wider border border-emerald-300 flex items-center gap-1.5 active:scale-95"
              >
                <UserCheck className="w-4 h-4 text-emerald-700" />
                <span>Entrar no App</span>
              </button>
            ) : (
              <button
                onClick={() => onOpenAuth('login')}
                className="px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-orange-50 text-slate-800 hover:text-orange-600 font-brand font-black text-xs uppercase tracking-wider border border-slate-200 flex items-center gap-1.5 active:scale-95"
              >
                <LogIn className="w-4 h-4 text-orange-500" />
                <span>Entrar (Login)</span>
              </button>
            )}

            <a
              href="#planos"
              className="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-brand font-black text-xs uppercase tracking-wider shadow-md shadow-orange-300 hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 ring-2 ring-amber-300"
            >
              <Sparkles className="w-4 h-4 fill-current" />
              <span>QUERO ASSINAR</span>
            </a>
          </div>
        </div>
      </header>
    );
  }

  // -------------------------------------------------------------
  // 2. STREAMING PLATFORM NAVBAR (MEMBER DASHBOARD AREA)
  // -------------------------------------------------------------
  return (
    <header className="w-full bg-white/95 backdrop-blur-md border-b-4 border-amber-400 sticky top-0 z-40 shadow-md select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div
          onClick={() => onSelectTab('dashboard')}
          className="flex items-center gap-3 cursor-pointer group shrink-0"
        >
          <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-tr from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-white font-brand font-black text-2xl sm:text-3xl shadow-lg shadow-orange-300 ring-4 ring-amber-100 group-hover:scale-105 transition-transform">
            T
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-xl sm:text-2xl font-black tracking-tight text-orange-600 uppercase font-brand leading-none">
                TOON TALES <span className="text-sky-500">KIDS</span>
              </h1>
              <span className="hidden xl:inline-flex px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-black uppercase font-brand border border-amber-200">
                A Bíblia em Áudio
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-bold hidden sm:block">
              Histórias que ensinam, aventuras que transformam!
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links (Platform Streaming Tabs) */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-2xl border-2 border-slate-200/80">
          <button
            onClick={() => onSelectTab('dashboard')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-black font-brand transition-all flex items-center gap-1.5 ${
              activeTab === 'dashboard'
                ? 'bg-orange-500 text-white shadow-md shadow-orange-200 scale-105'
                : 'text-slate-600 hover:text-orange-600 hover:bg-white'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Início</span>
          </button>

          <button
            onClick={() => onSelectTab('catalog')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-black font-brand transition-all flex items-center gap-1.5 ${
              activeTab === 'catalog'
                ? 'bg-orange-500 text-white shadow-md shadow-orange-200 scale-105'
                : 'text-slate-600 hover:text-orange-600 hover:bg-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Histórias</span>
          </button>

          <button
            onClick={() => onSelectTab('seasons')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-black font-brand transition-all flex items-center gap-1.5 ${
              activeTab === 'seasons'
                ? 'bg-orange-500 text-white shadow-md shadow-orange-200 scale-105'
                : 'text-slate-600 hover:text-orange-600 hover:bg-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Temporadas</span>
          </button>

          <button
            onClick={() => onSelectTab('characters')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-black font-brand transition-all flex items-center gap-1.5 ${
              activeTab === 'characters'
                ? 'bg-orange-500 text-white shadow-md shadow-orange-200 scale-105'
                : 'text-slate-600 hover:text-orange-600 hover:bg-white'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Personagens</span>
          </button>

          <button
            onClick={() => onSelectTab('heroes')}
            className={`px-3 py-1.5 rounded-xl text-xs font-black font-brand transition-all flex items-center gap-1.5 ${
              activeTab === 'heroes'
                ? 'bg-amber-500 text-white shadow-md shadow-amber-200 scale-105'
                : 'text-amber-800 hover:text-amber-950 hover:bg-amber-100/60'
            }`}
          >
            <Shield className="w-4 h-4 fill-current text-amber-300" />
            <span>Heróis da Fé</span>
          </button>

          <button
            onClick={() => onSelectTab('favorites')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-black font-brand transition-all flex items-center gap-1.5 relative ${
              activeTab === 'favorites'
                ? 'bg-rose-500 text-white shadow-md shadow-rose-200 scale-105'
                : 'text-slate-600 hover:text-rose-600 hover:bg-white'
            }`}
          >
            <Heart className={`w-4 h-4 ${favoritesCount > 0 ? 'fill-current text-rose-500' : ''}`} />
            <span>Favoritos</span>
            {favoritesCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] font-black flex items-center justify-center">
                {favoritesCount}
              </span>
            )}
          </button>

          <button
            onClick={() => onSelectTab('parents')}
            className={`px-3 py-1.5 rounded-xl text-xs font-black font-brand transition-all flex items-center gap-1.5 ${
              activeTab === 'parents'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 scale-105'
                : 'text-indigo-700 hover:bg-indigo-50'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Área dos Pais</span>
          </button>

          <button
            onClick={onOpenColoring}
            className="px-3 py-1.5 rounded-xl text-xs font-black font-brand transition-all flex items-center gap-1.5 text-purple-700 hover:bg-purple-50 border border-purple-200"
            title="Estúdio de Pintura 3D e Desenhos P&B"
          >
            <Palette className="w-3.5 h-3.5 text-purple-600" />
            <span>Pintura 3D</span>
          </button>

          {isAdmin && (
            <button
              onClick={onOpenAdmin}
              className="px-3 py-1.5 rounded-xl text-xs font-black font-brand transition-all flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-amber-400 border border-amber-400 shadow-sm"
              title="Painel do Administrador Master"
            >
              <Crown className="w-3.5 h-3.5 text-amber-400" />
              <span>Admin</span>
            </button>
          )}
        </nav>

        {/* Right Actions Toolbar */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            title="Buscar Histórias e Personagens"
            className="p-2.5 rounded-2xl bg-slate-100 hover:bg-orange-50 text-slate-700 hover:text-orange-600 border border-slate-200 transition-colors shadow-sm flex items-center gap-1.5 text-xs font-bold active:scale-95"
          >
            <Search className="w-4 h-4 text-orange-500" />
            <span className="hidden md:inline font-brand">Buscar</span>
          </button>

          {/* XP & Level Badge */}
          <button
            onClick={() => onSelectTab('profile')}
            title="Meu Nível e Conquistas"
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-black font-brand transition-colors"
          >
            <Star className="w-4 h-4 text-amber-500 fill-current" />
            <span>{userXp} XP</span>
          </button>

          {/* Mixer Trigger */}
          <button
            onClick={onOpenMixer}
            title="Mesa de Mixagem Studio"
            className="p-2.5 rounded-2xl bg-slate-100 hover:bg-orange-50 text-slate-700 hover:text-orange-600 border border-slate-200 transition-colors shadow-sm hidden sm:flex items-center"
          >
            <Sliders className="w-4 h-4 text-orange-500" />
          </button>

          {/* Bedtime Mode Trigger */}
          <button
            onClick={onOpenBedtime}
            title="Modo Hora de Dormir"
            className={`p-2.5 rounded-2xl border transition-colors shadow-sm flex items-center ${
              bedtimeActive
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-indigo-200 ring-2 ring-indigo-300'
                : 'bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 border-slate-200'
            }`}
          >
            <Moon className={`w-4 h-4 ${bedtimeActive ? 'text-white' : 'text-indigo-500'}`} />
          </button>

          {/* Profile Switcher & Avatar Button */}
          <div className="relative">
            <button
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="flex items-center gap-2 p-1.5 pl-2.5 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-brand font-black text-xs shadow-md shadow-orange-300 transition-all active:scale-95"
            >
              <span>{currentUser?.name?.split(' ')[0] || 'Clara'}</span>
              <div className="w-7 h-7 rounded-xl bg-white/20 flex items-center justify-center font-bold text-xs">
                {isAdmin ? '👑' : '👧'}
              </div>
              <ChevronDown className="w-3.5 h-3.5 opacity-80" />
            </button>

            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-3 w-64 rounded-3xl bg-white border-2 border-orange-200 p-3 shadow-2xl z-50 space-y-2">
                {isAdmin && (
                  <button
                    onClick={() => {
                      onOpenAdmin();
                      setIsProfileMenuOpen(false);
                    }}
                    className="w-full text-left p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-black text-amber-300 flex items-center gap-2"
                  >
                    <Crown className="w-4 h-4 text-amber-400" />
                    <span>Painel Admin Master</span>
                  </button>
                )}

                <button
                  onClick={() => {
                    onSelectTab('profile');
                    setIsProfileMenuOpen(false);
                  }}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-orange-50 text-xs font-bold text-slate-700 flex items-center gap-2"
                >
                  <Trophy className="w-4 h-4 text-amber-500" />
                  <span>Meu Perfil & Conquistas</span>
                </button>

                <button
                  onClick={() => {
                    onOpenColoring();
                    setIsProfileMenuOpen(false);
                  }}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-purple-50 text-xs font-bold text-purple-800 flex items-center gap-2"
                >
                  <Palette className="w-4 h-4 text-purple-600" />
                  <span>Estúdio de Pintura 3D</span>
                </button>

                <button
                  onClick={() => {
                    onSelectTab('favorites');
                    setIsProfileMenuOpen(false);
                  }}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-rose-50 text-xs font-bold text-slate-700 flex items-center gap-2"
                >
                  <Heart className="w-4 h-4 text-rose-500" />
                  <span>Minha Lista ({favoritesCount})</span>
                </button>

                <div className="border-t border-slate-100 pt-2">
                  <button
                    onClick={() => {
                      onSelectTab('parents');
                      setIsProfileMenuOpen(false);
                    }}
                    className="w-full text-left p-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-xs font-black text-indigo-700 flex items-center gap-2"
                  >
                    <Shield className="w-4 h-4" />
                    <span>Área dos Pais (PIN 1234)</span>
                  </button>
                </div>

                <div className="border-t border-slate-100 pt-2 flex items-center justify-between gap-1">
                  {currentUser ? (
                    <button
                      onClick={() => {
                        onLogout();
                        setIsProfileMenuOpen(false);
                      }}
                      className="w-full text-left p-2 rounded-xl hover:bg-rose-50 text-xs font-bold text-rose-600 flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sair da Conta</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        onOpenAuth('login');
                        setIsProfileMenuOpen(false);
                      }}
                      className="w-full text-left p-2 rounded-xl bg-amber-100 hover:bg-amber-200 text-xs font-black text-amber-900 flex items-center gap-2"
                    >
                      <LogIn className="w-4 h-4 text-amber-700" />
                      <span>Fazer Login</span>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation Bar (Only active inside platform) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t-2 border-orange-300 px-3 py-2 flex items-center justify-around shadow-lg">
        <button
          onClick={() => onSelectTab('dashboard')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-black font-brand ${
            activeTab === 'dashboard' ? 'text-orange-600' : 'text-slate-500'
          }`}
        >
          <Home className="w-5 h-5" />
          <span>Início</span>
        </button>

        <button
          onClick={() => onSelectTab('catalog')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-black font-brand ${
            activeTab === 'catalog' ? 'text-orange-600' : 'text-slate-500'
          }`}
        >
          <BookOpen className="w-5 h-5" />
          <span>Histórias</span>
        </button>

        <button
          onClick={() => onSelectTab('seasons')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-black font-brand ${
            activeTab === 'seasons' ? 'text-orange-600' : 'text-slate-500'
          }`}
        >
          <Layers className="w-5 h-5" />
          <span>Temporadas</span>
        </button>

        <button
          onClick={() => onSelectTab('characters')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-black font-brand ${
            activeTab === 'characters' ? 'text-orange-600' : 'text-slate-500'
          }`}
        >
          <Users className="w-5 h-5" />
          <span>Personagens</span>
        </button>

        <button
          onClick={() => onSelectTab('profile')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-black font-brand ${
            activeTab === 'profile' ? 'text-orange-600' : 'text-slate-500'
          }`}
        >
          <Trophy className="w-5 h-5" />
          <span>Perfil</span>
        </button>
      </div>
    </header>
  );
};
