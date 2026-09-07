import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { AppModule } from '../../services/authService';
import { Lock, Sparkles, Shield, ArrowRight, Star } from 'lucide-react';
import { ParentAuthModal } from './ParentAuthModal';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredModule?: AppModule;
  requiredRole?: 'parent' | 'admin';
  fallbackMessage?: string;
  onNavigateToPlans?: () => void;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredModule,
  requiredRole,
  fallbackMessage,
  onNavigateToPlans,
}) => {
  const { user, loading, hasModuleAccess } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  if (loading) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center p-6 text-white">
        <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-slate-400 text-sm">Carregando permissões de acesso...</p>
      </div>
    );
  }

  // Check user logged in
  if (!user) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center max-w-lg mx-auto">
        <div className="w-16 h-16 rounded-3xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 shadow-xl shadow-amber-500/10">
          <Lock className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-black text-white mb-2">Área Exclusiva para Famílias</h3>
        <p className="text-slate-300 text-sm mb-6">
          {fallbackMessage ||
            'Faça login na sua conta de responsável ou cadastre-se para acessar todas as histórias bíblicas interativas e atividades.'}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
          <button
            onClick={() => setIsAuthModalOpen(true)}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 transition-transform hover:scale-105"
          >
            <Sparkles className="w-5 h-5" /> Entrar ou Cadastrar
          </button>
          {onNavigateToPlans && (
            <button
              onClick={onNavigateToPlans}
              className="px-6 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold border border-slate-700 transition-colors"
            >
              Ver Planos e Valores
            </button>
          )}
        </div>

        <ParentAuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
        />
      </div>
    );
  }

  // Check admin role
  if (requiredRole === 'admin' && user.role !== 'admin' && user.email.toLowerCase() !== 'nogueiralfha@gmail.com') {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center p-6 text-center max-w-md mx-auto">
        <div className="w-16 h-16 rounded-3xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-4">
          <Shield className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Acesso Restrito ao Administrador</h3>
        <p className="text-slate-400 text-sm">Esta seção é reservada exclusivamente para a equipe de moderação e gestão da plataforma.</p>
      </div>
    );
  }

  // Check module access
  if (requiredModule && !hasModuleAccess(requiredModule)) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center max-w-lg mx-auto">
        <div className="w-16 h-16 rounded-3xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4 shadow-xl shadow-purple-500/10">
          <Star className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-black text-white mb-2">Módulo Não Incluído no Seu Plano</h3>
        <p className="text-slate-300 text-sm mb-6">
          O módulo <strong className="text-amber-400 uppercase">{requiredModule}</strong> está disponível no plano Vitalício ou como expansão na sua assinatura.
        </p>

        {onNavigateToPlans && (
          <button
            onClick={onNavigateToPlans}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-black shadow-lg shadow-purple-500/25 flex items-center gap-2 transition-transform hover:scale-105"
          >
            Fazer Upgrade Agora <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    );
  }

  return <>{children}</>;
};
