import React, { useState, useEffect } from 'react';
import {
  X,
  Shield,
  Crown,
  Users,
  DollarSign,
  TrendingUp,
  Headphones,
  CheckCircle2,
  AlertCircle,
  Play,
  RefreshCw,
  Trash2,
  ExternalLink,
  MessageCircle,
  Plus,
  Edit,
  Sliders,
  Send,
  Sparkles,
} from 'lucide-react';
import { motion } from 'motion/react';
import { authService, UserAccount, PlanType } from '../services/authService';
import { hotmartApiService, WebhookLogItem } from '../services/hotmartApiService';
import { getCapturedLeads, CapturedLead } from '../config/checkoutConfig';
import { ALL_EPISODES, BIBLE_SEASONS } from '../data/catalog';

interface AdminDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogoutAdmin: () => void;
}

export const AdminDashboardModal: React.FC<AdminDashboardModalProps> = ({
  isOpen,
  onClose,
  onLogoutAdmin,
}) => {
  const [activeTab, setActiveTab] = useState<'metrics' | 'users' | 'leads' | 'webhooks' | 'catalog'>('metrics');
  const [users, setUsers] = useState<UserAccount[]>([]);
  const [leads, setLeads] = useState<CapturedLead[]>([]);
  const [webhookLogs, setWebhookLogs] = useState<WebhookLogItem[]>([]);

  // Simulation form state
  const [simName, setSimName] = useState<string>('Carlos Eduardo');
  const [simEmail, setSimEmail] = useState<string>('carlos.teste@gmail.com');
  const [simPhone, setSimPhone] = useState<string>('5511999887766');
  const [simPlan, setSimPlan] = useState<PlanType>('vitalicio');
  const [simFeedback, setSimFeedback] = useState<string | null>(null);

  const loadData = () => {
    setUsers(authService.getUsers());
    setLeads(getCapturedLeads());
    setWebhookLogs(hotmartApiService.getLogs());
  };

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleUpdatePlan = (userId: string, plan: PlanType) => {
    authService.updateUserPlan(userId, plan, 'active');
    loadData();
  };

  const handleRunSimulation = (e: React.FormEvent) => {
    e.preventDefault();
    const result = hotmartApiService.simulateTestPurchase(simName, simEmail, simPhone, simPlan);
    setSimFeedback(result.message);
    loadData();
    setTimeout(() => setSimFeedback(null), 4000);
  };

  const handleClearLeads = () => {
    if (confirm('Deseja limpar todos os leads capturados?')) {
      localStorage.removeItem('toontales_captured_leads');
      loadData();
    }
  };

  const handleClearLogs = () => {
    hotmartApiService.clearLogs();
    loadData();
  };

  const totalRevenueEst = users.reduce((acc, u) => {
    if (u.plan === 'vitalicio') return acc + 485;
    if (u.plan === 'familiar') return acc + 297;
    if (u.plan === 'pessoal') return acc + 119;
    return acc;
  }, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative w-full max-w-5xl max-h-[92vh] rounded-[36px] bg-slate-900 border-4 border-amber-400 text-white shadow-2xl flex flex-col overflow-hidden"
      >
        {/* TOP BAR */}
        <div className="p-5 sm:p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-slate-950 shadow-lg font-black font-brand">
              <Crown className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-black font-brand text-amber-300">
                  Painel de Administração Master
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-bold">
                  Online
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Logado como: <strong className="text-slate-200">nogueiralfha@gmail.com</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onLogoutAdmin}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-rose-950 hover:text-rose-300 border border-slate-700 text-xs font-bold font-brand transition-colors"
            >
              Sair do Admin
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* TABS NAVIGATION */}
        <div className="flex flex-wrap gap-1 p-3 bg-slate-950/60 border-b border-slate-800/80 px-6">
          <button
            onClick={() => setActiveTab('metrics')}
            className={`px-4 py-2 rounded-xl font-black text-xs font-brand uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === 'metrics'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Métricas & Geral</span>
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`px-4 py-2 rounded-xl font-black text-xs font-brand uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === 'users'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Usuários & Famílias ({users.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('leads')}
            className={`px-4 py-2 rounded-xl font-black text-xs font-brand uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === 'leads'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <DollarSign className="w-3.5 h-3.5" />
            <span>Leads & Carrinho ({leads.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('webhooks')}
            className={`px-4 py-2 rounded-xl font-black text-xs font-brand uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === 'webhooks'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>APIs & Webhook Hotmart</span>
          </button>
          <button
            onClick={() => setActiveTab('catalog')}
            className={`px-4 py-2 rounded-xl font-black text-xs font-brand uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === 'catalog'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Headphones className="w-3.5 h-3.5" />
            <span>Catálogo (34 Eps)</span>
          </button>
        </div>

        {/* CONTENT AREA */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          
          {/* TAB 1: METRICS */}
          {activeTab === 'metrics' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 space-y-2">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-bold">
                    <span>Famílias / Alunos</span>
                    <Users className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-3xl font-black font-brand text-amber-300">
                    {users.length}
                  </div>
                  <p className="text-[11px] text-slate-400">Total de cadastros ativos</p>
                </div>

                <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 space-y-2">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-bold">
                    <span>Leads Capturados</span>
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-3xl font-black font-brand text-emerald-300">
                    {leads.length}
                  </div>
                  <p className="text-[11px] text-slate-400">Contatos prontos para WhatsApp</p>
                </div>

                <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 space-y-2">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-bold">
                    <span>Faturamento Estimado</span>
                    <DollarSign className="w-4 h-4 text-sky-400" />
                  </div>
                  <div className="text-3xl font-black font-brand text-sky-300">
                    R$ {totalRevenueEst.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </div>
                  <p className="text-[11px] text-slate-400">Base em planos ativos</p>
                </div>

                <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 space-y-2">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-bold">
                    <span>Episódios no Ar</span>
                    <Headphones className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="text-3xl font-black font-brand text-purple-300">
                    34 Episódios
                  </div>
                  <p className="text-[11px] text-slate-400">5 Temporadas bíblicas</p>
                </div>
              </div>

              {/* Quick Links & Shortcuts */}
              <div className="bg-slate-800/50 border border-slate-700/60 rounded-3xl p-6 space-y-4">
                <h3 className="font-brand font-black text-base text-amber-300">
                  Ações Rápidas do Administrador:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <a
                    href="https://app.hotmart.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-600 flex items-center justify-between text-xs font-bold transition-all"
                  >
                    <span>Painel da Hotmart</span>
                    <ExternalLink className="w-4 h-4 text-amber-400" />
                  </a>
                  <a
                    href="https://wa.me/5516997325572"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-600 flex items-center justify-between text-xs font-bold transition-all"
                  >
                    <span>WhatsApp de Suporte</span>
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                  </a>
                  <button
                    onClick={() => setActiveTab('webhooks')}
                    className="p-4 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-600 flex items-center justify-between text-xs font-bold transition-all text-left"
                  >
                    <span>Testar Compra Hotmart</span>
                    <Play className="w-4 h-4 text-purple-400" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: USERS */}
          {activeTab === 'users' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-brand font-black text-lg text-slate-100">
                  Famílias e Alunos Cadastrados
                </h3>
                <span className="text-xs text-slate-400">Total: {users.length} usuários</span>
              </div>

              <div className="space-y-3">
                {users.map((u) => (
                  <div
                    key={u.id}
                    className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-brand font-black text-sm text-white">{u.name}</span>
                        {u.role === 'admin' && (
                          <span className="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[10px] font-black uppercase">
                            Admin Master
                          </span>
                        )}
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                            u.plan === 'vitalicio'
                              ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30'
                              : u.plan === 'familiar'
                              ? 'bg-sky-500/20 text-sky-300 border border-sky-400/30'
                              : 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30'
                          }`}
                        >
                          Plano {u.plan}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300">
                        {u.email} {u.phone ? `• WhatsApp: ${u.phone}` : ''}
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Perfis infantis: {u.kids?.map((k) => `${k.name} (${k.age}a)`).join(', ') || 'Nenhum'}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                      {/* Change Plan Selector */}
                      <select
                        value={u.plan}
                        onChange={(e) => handleUpdatePlan(u.id, e.target.value as PlanType)}
                        className="px-2.5 py-1.5 rounded-xl bg-slate-900 border border-slate-600 text-xs font-bold text-slate-200 outline-none"
                      >
                        <option value="vitalicio">Vitalício (R$ 485)</option>
                        <option value="familiar">Familiar (R$ 297)</option>
                        <option value="pessoal">Pessoal (R$ 119)</option>
                        <option value="degustacao">Degustação</option>
                      </select>

                      {u.phone && (
                        <a
                          href={`https://wa.me/${u.phone.replace(/\D/g, '')}?text=Ol%C3%A1%20${encodeURIComponent(
                            u.name
                          )}!%20Aqui%20%C3%A9%20da%20equipe%20do%20Toon%20Tales%20Kids!`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold font-brand flex items-center gap-1.5 transition-colors"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: LEADS */}
          {activeTab === 'leads' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-brand font-black text-lg text-slate-100">
                    Leads & Carrinhos Abandonados
                  </h3>
                  <p className="text-xs text-slate-400">
                    Pais que preencheram o modal de compra antes de ir para a Hotmart.
                  </p>
                </div>
                {leads.length > 0 && (
                  <button
                    onClick={handleClearLeads}
                    className="px-3 py-1.5 rounded-xl bg-rose-900/40 hover:bg-rose-900/60 border border-rose-700/50 text-rose-300 text-xs font-bold flex items-center gap-1.5 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Limpar Leads</span>
                  </button>
                )}
              </div>

              {leads.length === 0 ? (
                <div className="p-8 rounded-2xl bg-slate-800/40 border border-slate-700 text-center text-slate-400 space-y-2">
                  <p className="text-sm font-bold">Nenhum lead registrado ainda.</p>
                  <p className="text-xs">
                    Quando os visitantes clicarem em "Comprar" no site, os dados aparecerão aqui em tempo real!
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {leads.map((lead) => (
                    <div
                      key={lead.id}
                      className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-brand font-black text-sm text-white">{lead.name}</span>
                          <span className="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[10px] font-bold">
                            {lead.planName} ({lead.planPrice})
                          </span>
                        </div>
                        <p className="text-xs text-slate-300">
                          {lead.email} • WhatsApp: <strong>{lead.phone}</strong>
                        </p>
                        <p className="text-[10px] text-slate-400">
                          Capturado em: {new Date(lead.createdAt).toLocaleString('pt-BR')}
                        </p>
                      </div>

                      <a
                        href={`https://wa.me/${lead.phone.replace(/\D/g, '')}?text=Ol%C3%A1%20${encodeURIComponent(
                          lead.name
                        )}!%20Vi%20que%20voc%C3%AA%20se%20interessou%20pelo%20Toon%20Tales%20Kids%20(${encodeURIComponent(
                          lead.planName
                        )}).%20Ficou%20com%20alguma%20d%C3%BAvida%20sobre%20as%20hist%C3%B3rias%20e%20o%20acesso%20das%20crian%C3%A7as?`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs font-brand uppercase tracking-wider flex items-center gap-2 shadow-md transition-all shrink-0"
                      >
                        <MessageCircle className="w-4 h-4 fill-current" />
                        <span>Chamar no WhatsApp</span>
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 4: WEBHOOKS & APIS */}
          {activeTab === 'webhooks' && (
            <div className="space-y-6">
              {/* Simulation Sandbox */}
              <div className="bg-slate-800/80 border-2 border-amber-400/40 rounded-3xl p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  <h3 className="font-brand font-black text-base text-amber-300">
                    Simulador de Venda Aprovada (Hotmart Webhook Sandbox)
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Teste como o sistema reage quando a Hotmart envia uma notificação de compra aprovada. O usuário será criado automaticamente e o plano liberado!
                </p>

                {simFeedback && (
                  <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-400 text-emerald-300 text-xs font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>{simFeedback}</span>
                  </div>
                )}

                <form onSubmit={handleRunSimulation} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <input
                    type="text"
                    required
                    value={simName}
                    onChange={(e) => setSimName(e.target.value)}
                    placeholder="Nome do Comprador"
                    className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-100 outline-none"
                  />
                  <input
                    type="email"
                    required
                    value={simEmail}
                    onChange={(e) => setSimEmail(e.target.value)}
                    placeholder="E-mail do Comprador"
                    className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-100 outline-none"
                  />
                  <select
                    value={simPlan}
                    onChange={(e) => setSimPlan(e.target.value as PlanType)}
                    className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-100 outline-none"
                  >
                    <option value="vitalicio">Vitalício Família (R$ 485)</option>
                    <option value="familiar">Familiar Anual (R$ 297)</option>
                    <option value="pessoal">Pessoal Anual (R$ 119)</option>
                  </select>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-xs font-brand uppercase tracking-wider shadow-md flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Simular Compra</span>
                  </button>
                </form>
              </div>

              {/* Webhook Logs */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-brand font-black text-sm text-slate-200">
                    Histórico de Webhooks e Transações ({webhookLogs.length})
                  </h4>
                  {webhookLogs.length > 0 && (
                    <button
                      onClick={handleClearLogs}
                      className="text-[11px] text-slate-400 hover:text-rose-300"
                    >
                      Limpar Logs
                    </button>
                  )}
                </div>

                {webhookLogs.length === 0 ? (
                  <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700 text-center text-xs text-slate-400">
                    Nenhuma transação recebida ainda.
                  </div>
                ) : (
                  <div className="space-y-2">
                    {webhookLogs.map((log) => (
                      <div
                        key={log.id}
                        className="p-3 rounded-xl bg-slate-800/70 border border-slate-700 flex items-center justify-between gap-3 text-xs"
                      >
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white">{log.buyerName}</span>
                            <span className="text-[10px] text-slate-400">({log.buyerEmail})</span>
                            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[9px] font-black uppercase">
                              {log.event}
                            </span>
                          </div>
                          <p className="text-[10px] text-slate-400">
                            Plano: <strong>{log.planAssigned}</strong> • Valor: <strong>{log.priceDisplay}</strong> • ID: {log.transactionId}
                          </p>
                        </div>
                        <span className="text-[10px] text-slate-500">
                          {new Date(log.timestamp).toLocaleTimeString('pt-BR')}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 5: CATALOG */}
          {activeTab === 'catalog' && (
            <div className="space-y-4">
              <h3 className="font-brand font-black text-lg text-slate-100">
                Visão Geral do Catálogo (34 Episódios • 5 Temporadas)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {ALL_EPISODES.map((ep) => (
                  <div
                    key={ep.id}
                    className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2"
                  >
                    <div className="flex items-center justify-between text-[11px] font-bold">
                      <span className="text-amber-400 uppercase">T{ep.seasonNumber} • Ep {ep.episodeNumber}</span>
                      <span className="text-slate-400">{ep.duration}</span>
                    </div>
                    <h4 className="font-brand font-black text-sm text-white line-clamp-1">{ep.title}</h4>
                    <p className="text-[11px] text-slate-300 line-clamp-2">{ep.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </motion.div>
    </div>
  );
};
