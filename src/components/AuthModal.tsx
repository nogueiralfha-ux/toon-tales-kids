import React, { useState } from 'react';
import {
  X,
  Lock,
  Mail,
  User,
  Phone,
  Sparkles,
  Crown,
  CheckCircle2,
  AlertCircle,
  Eye,
  EyeOff,
  ArrowRight,
  Shield,
  Heart,
  Smile,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { authService, UserAccount, PlanType } from '../services/authService';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessAuth: (user: UserAccount) => void;
  initialMode?: 'login' | 'register';
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onSuccessAuth,
  initialMode = 'login',
}) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [kidName, setKidName] = useState<string>('');
  const [kidAge, setKidAge] = useState<number>(6);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const result = authService.login(email, password);
    if (result.success && result.user) {
      setSuccessMessage(`Bem-vindo de volta, ${result.user.name}!`);
      setTimeout(() => {
        onSuccessAuth(result.user!);
        onClose();
      }, 500);
    } else {
      setErrorMessage(result.message || 'Erro ao realizar login.');
    }
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!name.trim()) {
      setErrorMessage('Informe seu nome completo.');
      return;
    }
    if (!email.includes('@')) {
      setErrorMessage('Informe um e-mail válido.');
      return;
    }
    if (password.length < 6) {
      setErrorMessage('A senha deve ter no mínimo 6 caracteres.');
      return;
    }

    const result = authService.register({
      name,
      email,
      password,
      phone,
      kidName,
      kidAge,
      plan: 'vitalicio',
    });

    if (result.success && result.user) {
      setSuccessMessage('Conta de família criada com sucesso!');
      setTimeout(() => {
        onSuccessAuth(result.user!);
        onClose();
      }, 500);
    } else {
      setErrorMessage(result.message || 'Erro ao registrar.');
    }
  };

  // Quick fill admin credentials button for convenience
  const handleFillAdmin = () => {
    setEmail('nogueiralfha@gmail.com');
    setPassword('missionario405');
    setMode('login');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 20 }}
        className="relative w-full max-w-lg rounded-[36px] bg-white border-4 border-amber-400 p-6 sm:p-8 shadow-2xl overflow-hidden text-slate-800"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-black uppercase font-brand">
            <Crown className="w-3.5 h-3.5 text-amber-600" />
            <span>Toon Tales Kids • Área de Membros</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-brand">
            {mode === 'login' ? 'Acesse a sua Família' : 'Criar Nova Conta de Família'}
          </h2>

          <p className="text-xs text-slate-600">
            {mode === 'login'
              ? 'Entre com seus dados para continuar as aventuras bíblicas.'
              : 'Cadastre-se para liberar perfis das crianças e acompanhar o progresso.'}
          </p>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex rounded-2xl bg-slate-100 p-1 mb-6 border border-slate-200">
          <button
            onClick={() => {
              setMode('login');
              setErrorMessage(null);
            }}
            className={`flex-1 py-2.5 rounded-xl font-black text-xs font-brand uppercase tracking-wider transition-all ${
              mode === 'login' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Entrar (Login)
          </button>
          <button
            onClick={() => {
              setMode('register');
              setErrorMessage(null);
            }}
            className={`flex-1 py-2.5 rounded-xl font-black text-xs font-brand uppercase tracking-wider transition-all ${
              mode === 'register' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Cadastrar Família
          </button>
        </div>

        {/* Notifications */}
        {errorMessage && (
          <div className="mb-4 p-3 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
            <span>{errorMessage}</span>
          </div>
        )}

        {successMessage && (
          <div className="mb-4 p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* LOGIN FORM */}
        {mode === 'login' && (
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 font-brand">E-mail Cadastrado:</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ex: seuemail@gmail.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl border-2 border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 text-sm font-semibold text-slate-900 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 font-brand">Sua Senha:</label>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua senha"
                  className="w-full pl-10 pr-10 py-2.5 rounded-2xl border-2 border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 text-sm font-semibold text-slate-900 outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-sm font-brand uppercase tracking-wider shadow-lg shadow-orange-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <Crown className="w-4 h-4" />
              <span>Entrar na Plataforma</span>
            </button>

            {/* Quick Admin Fill Helper */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span>É o Administrador?</span>
              <button
                type="button"
                onClick={handleFillAdmin}
                className="text-amber-600 hover:text-orange-600 font-bold hover:underline"
              >
                Preencher Admin (nogueiralfha@gmail.com)
              </button>
            </div>
          </form>
        )}

        {/* REGISTER FORM */}
        {mode === 'register' && (
          <form onSubmit={handleRegisterSubmit} className="space-y-3 max-h-[65vh] overflow-y-auto pr-1">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 font-brand">Nome do Responsável / Pai / Mãe:</label>
              <div className="relative">
                <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome completo"
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl border-2 border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 text-sm font-semibold text-slate-900 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 font-brand">E-mail de Acesso:</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seuemail@gmail.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-2xl border-2 border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 text-sm font-semibold text-slate-900 outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 font-brand">WhatsApp (com DDD):</label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="w-full pl-10 pr-4 py-2.5 rounded-2xl border-2 border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 text-sm font-semibold text-slate-900 outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 font-brand">Crie uma Senha:</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mínimo 6 caracteres"
                  className="w-full pl-10 pr-10 py-2.5 rounded-2xl border-2 border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 text-sm font-semibold text-slate-900 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Kid Profile Setup */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-black text-amber-900 font-brand">
                <Smile className="w-4 h-4 text-amber-600" />
                <span>Primeiro Perfil Infantil:</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={kidName}
                  onChange={(e) => setKidName(e.target.value)}
                  placeholder="Nome do filho(a)"
                  className="px-3 py-2 rounded-xl bg-white border border-amber-300 text-xs font-bold text-slate-900 outline-none"
                />
                <select
                  value={kidAge}
                  onChange={(e) => setKidAge(Number(e.target.value))}
                  className="px-3 py-2 rounded-xl bg-white border border-amber-300 text-xs font-bold text-slate-900 outline-none"
                >
                  {[3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((age) => (
                    <option key={age} value={age}>
                      {age} anos
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 text-white font-black text-sm font-brand uppercase tracking-wider shadow-lg shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Finalizar Cadastro e Entrar</span>
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};
