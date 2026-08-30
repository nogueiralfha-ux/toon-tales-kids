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
  Calculator,
  Zap,
  Layers,
  Database,
  Cloud,
  Check,
  Printer,
  Download,
  FileText,
  Palette,
  BookOpen,
} from 'lucide-react';
import { motion } from 'motion/react';
import { authService, UserAccount, PlanType } from '../services/authService';
import { hotmartApiService, WebhookLogItem } from '../services/hotmartApiService';
import { getCapturedLeads, CapturedLead } from '../config/checkoutConfig';
import { ALL_EPISODES, BIBLE_SEASONS } from '../data/catalog';
import { aiProductionService, ApiKeysConfig, CHARACTER_VOICE_MAP } from '../services/aiProductionService';

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
  const [activeTab, setActiveTab] = useState<'metrics' | 'users' | 'leads' | 'webhooks' | 'finance' | 'pdf_factory' | 'catalog'>('metrics');
  const [users, setUsers] = useState<UserAccount[]>([]);
  const [leads, setLeads] = useState<CapturedLead[]>([]);
  const [webhookLogs, setWebhookLogs] = useState<WebhookLogItem[]>([]);

  // Financial Calculator & API Simulator state
  const [calcPages, setCalcPages] = useState<number>(16);
  const [calcAudio, setCalcAudio] = useState<boolean>(true);
  const [calcChars, setCalcChars] = useState<number>(2500);
  const [calcExchangeRate, setCalcExchangeRate] = useState<number>(6.00);
  const [calcSalePrice, setCalcSalePrice] = useState<number>(119);
  const [calcMonthlySales, setCalcMonthlySales] = useState<number>(100);

  // Simulation form state
  const [simName, setSimName] = useState<string>('Carlos Eduardo');
  const [simEmail, setSimEmail] = useState<string>('carlos.teste@gmail.com');
  const [simPhone, setSimPhone] = useState<string>('5511999887766');
  const [simPlan, setSimPlan] = useState<PlanType>('vitalicio');
  const [simFeedback, setSimFeedback] = useState<string | null>(null);

  // API Keys state
  const [apiKeys, setApiKeys] = useState<ApiKeysConfig>(() => aiProductionService.getKeys());
  const [apiKeyFeedback, setApiKeyFeedback] = useState<string | null>(null);

  // Live Speech Synthesis Test
  const [testSpeechText, setTestSpeechText] = useState<string>(
    'Bem-vindos ao Toon Tales Kids! Histórias bíblicas em áudio 3D que ensinam valores eternos!'
  );
  const [testTtsProvider, setTestTtsProvider] = useState<'openai' | 'elevenlabs'>('openai');
  const [testSpeechVoice, setTestSpeechVoice] = useState<'nova' | 'onyx' | 'echo' | 'fable' | 'shimmer'>('nova');
  const [isGeneratingVoice, setIsGeneratingVoice] = useState<boolean>(false);
  const [voiceAudioUrl, setVoiceAudioUrl] = useState<string | null>(null);
  const [voiceError, setVoiceError] = useState<string | null>(null);

  // Live Story Script Generation Test
  const [storyTheme, setStoryTheme] = useState<string>('Davi e a Coragem contra o Gigante');
  const [storyChildName, setStoryChildName] = useState<string>('Clara');
  const [storyMoral, setStoryMoral] = useState<string>('Confiar em Deus diante de qualquer desafio');
  const [isGeneratingStory, setIsGeneratingStory] = useState<boolean>(false);
  const [storyResult, setStoryResult] = useState<any | null>(null);
  const [storyError, setStoryError] = useState<string | null>(null);

  // PDF & Coloring Factory State
  const [pdfTheme, setPdfTheme] = useState<string>('Sansão com cabelos longos empurrando as colunas de pedra do templo, herói bíblico vitorioso');
  const [pdfType, setPdfType] = useState<'line_art' | '3d_pixar'>('line_art');
  const [pdfTitle, setPdfTitle] = useState<string>('Sansão: A Força que Vem do Senhor');
  const [pdfSubtitle, setPdfSubtitle] = useState<string>('Pinte o herói bíblico e lembre-se que Deus é a nossa verdadeira força!');
  const [pdfVerseRef, setPdfVerseRef] = useState<string>('Juízes 16:28');
  const [pdfVerseText, setPdfVerseText] = useState<string>('Ó Soberano Senhor, lembra-te de mim! Dá-me forças uma vez mais!');
  const [pdfPageNum, setPdfPageNum] = useState<number>(101);
  const [isGeneratingPdfArt, setIsGeneratingPdfArt] = useState<boolean>(false);
  const [pdfArtUrl, setPdfArtUrl] = useState<string>(() =>
    aiProductionService.getGeneratedImageUrl('Samson with long hair pushing temple stone pillars, biblical hero', 'line_art')
  );

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

  const handleSaveApiKeys = (e: React.FormEvent) => {
    e.preventDefault();
    aiProductionService.saveKeys(apiKeys);
    setApiKeyFeedback('Chaves de API salvas com sucesso! 🔑');
    setTimeout(() => setApiKeyFeedback(null), 3500);
  };

  const handleTestSpeech = async () => {
    setIsGeneratingVoice(true);
    setVoiceError(null);
    setVoiceAudioUrl(null);
    try {
      let url = '';
      if (testTtsProvider === 'elevenlabs') {
        url = await aiProductionService.synthesizeSpeechElevenLabs(testSpeechText);
      } else {
        url = await aiProductionService.synthesizeSpeechOpenAi(testSpeechText, testSpeechVoice);
      }
      setVoiceAudioUrl(url);
      const audio = new Audio(url);
      audio.play();
    } catch (err: any) {
      setVoiceError(err.message || 'Erro ao gerar voz');
    } finally {
      setIsGeneratingVoice(false);
    }
  };

  const handleTestStory = async () => {
    setIsGeneratingStory(true);
    setStoryError(null);
    setStoryResult(null);
    try {
      const result = await aiProductionService.generateBibleStoryScript({
        theme: storyTheme,
        childName: storyChildName,
        moralLesson: storyMoral,
      });
      setStoryResult(result);
    } catch (err: any) {
      setStoryError(err.message || 'Erro ao gerar história');
    } finally {
      setIsGeneratingStory(false);
    }
  };

  const handleGeneratePdfArt = () => {
    setIsGeneratingPdfArt(true);
    try {
      const url = aiProductionService.getGeneratedImageUrl(pdfTheme, pdfType);
      setPdfArtUrl(url);
    } finally {
      setTimeout(() => setIsGeneratingPdfArt(false), 600);
    }
  };

  const handlePrintPdfSheet = () => {
    window.print();
  };

  const totalRevenueEst = users.reduce((acc, u) => {
    if (u.plan === 'vitalicio') return acc + 1987;
    if (u.plan === 'familiar') return acc + 997;
    if (u.plan === 'pessoal') return acc + 299;
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
            onClick={() => setActiveTab('finance')}
            className={`px-4 py-2 rounded-xl font-black text-xs font-brand uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === 'finance'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Calculadora & APIs</span>
          </button>
          <button
            onClick={() => setActiveTab('pdf_factory')}
            className={`px-4 py-2 rounded-xl font-black text-xs font-brand uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === 'pdf_factory'
                ? 'bg-gradient-to-r from-orange-400 to-amber-400 text-slate-950 shadow-md scale-105'
                : 'text-orange-300 hover:text-white hover:bg-slate-800 border border-orange-500/30'
            }`}
          >
            <Printer className="w-3.5 h-3.5" />
            <span>🎨 Fábrica de PDFs A4</span>
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

          {/* TAB 5: FINANCE & API CALCULATOR */}
          {activeTab === 'finance' && (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gradient-to-r from-emerald-950/60 to-slate-950 p-5 rounded-2xl border border-emerald-500/30">
                <div>
                  <h3 className="font-brand font-black text-lg text-emerald-300 flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-emerald-400" />
                    Calculadora de Custos de APIs & Simulador de Margem
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Simule o custo exato de produção por história e projete o seu faturamento com mais de 95% de margem líquida.
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-emerald-900/40 px-3 py-1.5 rounded-xl border border-emerald-400/30 shrink-0">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span className="text-xs font-bold text-amber-200 font-brand">Margem Média: 96%</span>
                </div>
              </div>

              {/* Official API Rates Reference Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">Roteiro / Texto</span>
                    <span className="px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 text-[10px] font-bold">OpenAI</span>
                  </div>
                  <h4 className="font-black text-sm text-white font-brand">GPT-4o-mini</h4>
                  <p className="text-xs font-bold text-emerald-400">$ 0,15 / $ 0,60 <span className="text-[10px] text-slate-400 font-normal">por 1M tokens</span></p>
                  <p className="text-[11px] text-slate-400 leading-tight">~R$ 0,01 por roteiro de 16 cenas completas.</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">Imagens 3D</span>
                    <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold">Google Cloud</span>
                  </div>
                  <h4 className="font-black text-sm text-white font-brand">Imagen 3</h4>
                  <p className="text-xs font-bold text-emerald-400">$ 0,03 <span className="text-[10px] text-slate-400 font-normal">por imagem gerada</span></p>
                  <p className="text-[11px] text-slate-400 leading-tight">16 imagens = $ 0,48 (~R$ 2,88 por livro).</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-purple-400 uppercase tracking-wider">Voz & Efeitos</span>
                    <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-bold">ElevenLabs</span>
                  </div>
                  <h4 className="font-black text-sm text-white font-brand">Multilingual v2</h4>
                  <p className="text-xs font-bold text-emerald-400">$ 0,10 <span className="text-[10px] text-slate-400 font-normal">por 1.000 caracteres</span></p>
                  <p className="text-[11px] text-slate-400 leading-tight">~R$ 1,50 por narração infantil expressiva.</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-orange-400 uppercase tracking-wider">Storage Áudios</span>
                    <span className="px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 text-[10px] font-bold">Cloudflare</span>
                  </div>
                  <h4 className="font-black text-sm text-white font-brand">Cloudflare R2</h4>
                  <p className="text-xs font-bold text-emerald-400">$ 0,015 / GB <span className="text-[10px] text-emerald-300 font-normal">(Zero Egress)</span></p>
                  <p className="text-[11px] text-slate-400 leading-tight">Tráfego de download 100% grátis e ilimitado.</p>
                </div>
              </div>

              {/* Interactive Simulator Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-950/80 p-5 sm:p-6 rounded-3xl border border-slate-800">
                {/* Inputs Left Column */}
                <div className="lg:col-span-6 space-y-4">
                  <h4 className="font-brand font-black text-sm text-amber-300 uppercase tracking-wider flex items-center gap-2">
                    <Sliders className="w-4 h-4" />
                    1. Parâmetros de Produção & Venda
                  </h4>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <label className="text-slate-300">Número de Cenas / Imagens no Livro:</label>
                        <span className="text-amber-400 font-brand">{calcPages} páginas</span>
                      </div>
                      <input
                        type="range"
                        min="8"
                        max="32"
                        step="2"
                        value={calcPages}
                        onChange={(e) => setCalcPages(Number(e.target.value))}
                        className="w-full accent-amber-400 cursor-pointer"
                      />
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-slate-700">
                      <div>
                        <p className="text-xs font-bold text-white">Incluir Narração em Áudio 3D?</p>
                        <p className="text-[10px] text-slate-400">Locução profissional ElevenLabs Multilingual</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setCalcAudio(!calcAudio)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold font-brand transition-all ${
                          calcAudio
                            ? 'bg-emerald-500 text-slate-950 shadow-sm'
                            : 'bg-slate-700 text-slate-400'
                        }`}
                      >
                        {calcAudio ? 'SIM (Ativado)' : 'NÃO (Apenas Texto)'}
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-400 mb-1">
                          Câmbio Dólar (USD / BRL)
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-2 text-xs text-slate-400 font-bold">R$</span>
                          <input
                            type="number"
                            step="0.10"
                            value={calcExchangeRate}
                            onChange={(e) => setCalcExchangeRate(Number(e.target.value))}
                            className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-bold text-white focus:outline-none focus:border-amber-400"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-400 mb-1">
                          Preço de Venda do Livro / Plano
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-2 text-xs text-slate-400 font-bold">R$</span>
                          <input
                            type="number"
                            step="5"
                            value={calcSalePrice}
                            onChange={(e) => setCalcSalePrice(Number(e.target.value))}
                            className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-bold text-white focus:outline-none focus:border-amber-400"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <label className="text-slate-300">Volume de Vendas / Assinaturas por Mês:</label>
                        <span className="text-emerald-400 font-brand">{calcMonthlySales} vendas/mês</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="1000"
                        step="10"
                        value={calcMonthlySales}
                        onChange={(e) => setCalcMonthlySales(Number(e.target.value))}
                        className="w-full accent-emerald-400 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* Outputs Right Column */}
                <div className="lg:col-span-6 space-y-4 bg-slate-900/90 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
                  <div>
                    <h4 className="font-brand font-black text-sm text-emerald-300 uppercase tracking-wider mb-3">
                      2. Resultado Financeiro & Margens
                    </h4>

                    {/* Cost Breakdown */}
                    <div className="space-y-2 text-xs border-b border-slate-800 pb-3">
                      <div className="flex justify-between text-slate-400">
                        <span>Texto GPT-4o-mini:</span>
                        <span className="text-white font-mono">$ {(((calcPages * 200) / 1000000) * 0.60).toFixed(4)} USD</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Imagens Imagen 3 ({calcPages}x $0.03):</span>
                        <span className="text-white font-mono">$ {(calcPages * 0.03).toFixed(2)} USD</span>
                      </div>
                      {calcAudio && (
                        <div className="flex justify-between text-slate-400">
                          <span>Locução ElevenLabs (~{calcChars} chars):</span>
                          <span className="text-white font-mono">$ {((calcChars / 1000) * 0.10).toFixed(2)} USD</span>
                        </div>
                      )}
                      <div className="flex justify-between text-slate-400">
                        <span>Storage Cloudflare R2 + Buffer (8%):</span>
                        <span className="text-white font-mono">$ {(0.015 + (calcPages * 0.03 + (calcAudio ? 0.25 : 0)) * 0.08).toFixed(2)} USD</span>
                      </div>
                    </div>

                    {/* Totals Box */}
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                        <span className="text-[10px] text-slate-400 font-bold uppercase">Custo de Produção</span>
                        <p className="text-base font-black text-rose-400 font-brand">
                          R$ {((((calcPages * 200) / 1000000) * 0.60 + calcPages * 0.03 + (calcAudio ? 0.25 : 0) + 0.015 + (calcPages * 0.03 + (calcAudio ? 0.25 : 0)) * 0.08) * calcExchangeRate).toFixed(2)}
                        </p>
                        <span className="text-[9px] text-slate-400">
                          ($ {(((calcPages * 200) / 1000000) * 0.60 + calcPages * 0.03 + (calcAudio ? 0.25 : 0) + 0.015 + (calcPages * 0.03 + (calcAudio ? 0.25 : 0)) * 0.08).toFixed(2)} USD)
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40">
                        <span className="text-[10px] text-emerald-300 font-bold uppercase">Lucro Líquido / Unidade</span>
                        <p className="text-base font-black text-emerald-300 font-brand">
                          R$ {(calcSalePrice - (((calcPages * 200) / 1000000) * 0.60 + calcPages * 0.03 + (calcAudio ? 0.25 : 0) + 0.015 + (calcPages * 0.03 + (calcAudio ? 0.25 : 0)) * 0.08) * calcExchangeRate).toFixed(2)}
                        </p>
                        <span className="text-[9px] text-emerald-400 font-bold">
                          {calcSalePrice > 0 ? (((calcSalePrice - (((calcPages * 200) / 1000000) * 0.60 + calcPages * 0.03 + (calcAudio ? 0.25 : 0) + 0.015 + (calcPages * 0.03 + (calcAudio ? 0.25 : 0)) * 0.08) * calcExchangeRate)) / calcSalePrice * 100).toFixed(1) : 0}% de margem
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Monthly Projection */}
                  <div className="mt-3 p-3.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-amber-300 font-black uppercase tracking-wider">
                        Projeção Mensal ({calcMonthlySales} vendas)
                      </span>
                      <p className="text-lg font-black text-amber-300 font-brand">
                        R$ {((calcSalePrice - (((calcPages * 200) / 1000000) * 0.60 + calcPages * 0.03 + (calcAudio ? 0.25 : 0) + 0.015 + (calcPages * 0.03 + (calcAudio ? 0.25 : 0)) * 0.08) * calcExchangeRate) * calcMonthlySales).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black font-brand">
                      Lucro Líquido
                    </span>
                  </div>
                </div>
              </div>

              {/* Where to Store Audio Recordings Guide */}
              <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-3">
                <h4 className="font-brand font-black text-sm text-sky-300 flex items-center gap-2">
                  <Cloud className="w-4 h-4" />
                  Onde Guardar os Minutos de Áudio? (Cloudflare R2 vs AWS S3)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-emerald-500/30 space-y-1.5">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold">
                      <Check className="w-4 h-4" />
                      <span>Opção Recomendada: Cloudflare R2</span>
                    </div>
                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      <strong>Taxa de saída ZERO ($0 Egress):</strong> Mesmo com 100.000 crianças escutando áudios todo dia, você não paga nada por tráfego de download. Custa apenas $0,015 por GB armazenado (1 GB guarda ~30 horas de áudio MP3).
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-700 space-y-1.5">
                    <div className="flex items-center gap-2 text-slate-300 font-bold">
                      <Database className="w-4 h-4" />
                      <span>Fase Atual: Local / Servidor Vercel CDN</span>
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      Para as 34 histórias do catálogo atual, o motor Web Audio já carrega os episódios instantaneamente em memória no navegador da criança, com custo de servidor igual a zero.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. CONFIGURAÇÃO DE CHAVES DE API EM TEMPO REAL */}
              <div className="p-5 sm:p-6 rounded-3xl bg-slate-900 border-2 border-amber-400/40 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-black uppercase font-brand border border-amber-400/30">
                      Conexão de Produção
                    </span>
                    <h4 className="text-base sm:text-lg font-black font-brand text-white flex items-center gap-2">
                      <Zap className="w-5 h-5 text-amber-400" />
                      Chaves de API das Inteligências Artificiais
                    </h4>
                  </div>
                  {apiKeyFeedback && (
                    <span className="px-3 py-1 rounded-xl bg-emerald-500 text-slate-950 text-xs font-black font-brand animate-bounce">
                      {apiKeyFeedback}
                    </span>
                  )}
                </div>

                <form onSubmit={handleSaveApiKeys} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-bold flex items-center justify-between">
                      <span>OpenAI API Key (Áudio TTS + GPT-4o-mini):</span>
                      <span className="text-[10px] text-emerald-400 font-normal">Recomendado ($0.015/1k)</span>
                    </label>
                    <input
                      type="password"
                      placeholder="sk-proj-..."
                      value={apiKeys.openaiApiKey || ''}
                      onChange={(e) => setApiKeys({ ...apiKeys, openaiApiKey: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white font-mono focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-bold flex items-center justify-between">
                      <span>ElevenLabs API Key (Vozes Emocionais):</span>
                      <span className="text-[10px] text-purple-400 font-normal">Opcional</span>
                    </label>
                    <input
                      type="password"
                      placeholder="xi-..."
                      value={apiKeys.elevenlabsApiKey || ''}
                      onChange={(e) => setApiKeys({ ...apiKeys, elevenlabsApiKey: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white font-mono focus:outline-none focus:border-purple-400"
                    />
                  </div>

                  <div className="md:col-span-2 flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black font-brand uppercase text-xs tracking-wider transition-all shadow-md active:scale-95"
                    >
                      Salvar Chaves de API
                    </button>
                  </div>
                </form>

                {/* Live Audio Synthesis Test Lab */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h5 className="font-brand font-black text-xs text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Headphones className="w-4 h-4" />
                      Laboratório de Teste de Áudio ({testTtsProvider === 'openai' ? 'OpenAI TTS - $0,015/1k' : 'ElevenLabs'})
                    </h5>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => setTestTtsProvider('openai')}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-bold font-brand transition-all ${
                          testTtsProvider === 'openai'
                            ? 'bg-amber-400 text-slate-950 shadow-sm'
                            : 'bg-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        OpenAI TTS (Recomendado)
                      </button>
                      <button
                        type="button"
                        onClick={() => setTestTtsProvider('elevenlabs')}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-bold font-brand transition-all ${
                          testTtsProvider === 'elevenlabs'
                            ? 'bg-purple-500 text-white shadow-sm'
                            : 'bg-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        ElevenLabs
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <input
                        type="text"
                        value={testSpeechText}
                        onChange={(e) => setTestSpeechText(e.target.value)}
                        placeholder="Digite um texto bíblico para testar a voz..."
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div className="flex gap-2">
                      {testTtsProvider === 'openai' ? (
                        <select
                          value={testSpeechVoice}
                          onChange={(e: any) => setTestSpeechVoice(e.target.value)}
                          className="px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs font-bold focus:outline-none focus:border-amber-400 flex-1 min-w-0"
                        >
                          <option value="nova">Nova (Narradora Infantil)</option>
                          <option value="onyx">Onyx (Voz de Deus / Solene)</option>
                          <option value="echo">Echo (Davi / Menino Valente)</option>
                          <option value="shimmer">Shimmer (Rainha Ester)</option>
                          <option value="fable">Fable (Noé / Patriarca)</option>
                        </select>
                      ) : (
                        <div className="px-3 py-2 rounded-xl bg-slate-800 border border-purple-500/40 text-purple-300 text-xs font-bold flex-1 flex items-center justify-center">
                          Voz Multilingual v2
                        </div>
                      )}

                      <button
                        type="button"
                        onClick={handleTestSpeech}
                        disabled={isGeneratingVoice}
                        className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 font-black font-brand text-xs uppercase tracking-wider transition-all shrink-0 flex items-center gap-1.5 shadow-md active:scale-95"
                      >
                        {isGeneratingVoice ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                        <span>Ouvir</span>
                      </button>
                    </div>
                  </div>

                  {voiceError && (
                    <p className="text-xs text-rose-400 font-bold bg-rose-950/50 p-2.5 rounded-xl border border-rose-800">
                      ⚠️ {voiceError}
                    </p>
                  )}

                  {voiceAudioUrl && (
                    <div className="flex items-center gap-3 p-2 bg-slate-900 rounded-xl border border-emerald-500/40">
                      <span className="text-[11px] text-emerald-400 font-bold">Áudio Gerado com Sucesso:</span>
                      <audio controls src={voiceAudioUrl} className="h-8 flex-1" autoPlay />
                    </div>
                  )}
                </div>

                {/* Live Story Script Generation Lab */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <h5 className="font-brand font-black text-xs text-sky-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-sky-400" />
                      Laboratório de Roteiros Bíblicos com GPT-4o-mini (Custo: $0,001 / livro)
                    </h5>
                    <span className="text-[10px] text-slate-400">Geração de Roteiro + Quiz</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <input
                      type="text"
                      value={storyTheme}
                      onChange={(e) => setStoryTheme(e.target.value)}
                      placeholder="Tema bíblico (Ex: Jonas e o Peixe)"
                      className="px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:border-sky-400"
                    />
                    <input
                      type="text"
                      value={storyChildName}
                      onChange={(e) => setStoryChildName(e.target.value)}
                      placeholder="Nome da Criança (Ex: Clara)"
                      className="px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:border-sky-400"
                    />
                    <button
                      type="button"
                      onClick={handleTestStory}
                      disabled={isGeneratingStory}
                      className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:opacity-50 text-slate-950 font-black font-brand text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-md"
                    >
                      {isGeneratingStory ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5" />}
                      <span>Gerar Roteiro IA</span>
                    </button>
                  </div>

                  {storyError && (
                    <p className="text-xs text-rose-400 font-bold bg-rose-950/50 p-2.5 rounded-xl border border-rose-800">
                      ⚠️ {storyError}
                    </p>
                  )}

                  {storyResult && (
                    <div className="p-3 bg-slate-900 rounded-xl border border-sky-500/40 space-y-2 text-xs">
                      <div className="flex items-center justify-between text-sky-300 font-bold">
                        <span>{storyResult.title} — {storyResult.subtitle}</span>
                        <span className="text-[10px] text-amber-400 font-mono">{storyResult.biblicalVerse}</span>
                      </div>
                      <p className="text-slate-300 text-[11px] italic">"{storyResult.moralLesson}"</p>
                      <pre className="p-2 bg-slate-950 rounded-lg text-[10px] text-emerald-400 font-mono overflow-x-auto max-h-36">
                        {JSON.stringify(storyResult, null, 2)}
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5.5: FÁBRICA DE PDFS & DESENHOS A4 */}
          {activeTab === 'pdf_factory' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-orange-500/20 p-5 rounded-3xl border border-orange-400/30">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-orange-500 text-slate-950 text-[10px] font-black uppercase font-brand">
                      Produção Digital $0
                    </span>
                    <h3 className="font-brand font-black text-lg sm:text-xl text-white flex items-center gap-2">
                      <Palette className="w-5 h-5 text-orange-400" />
                      Fábrica de PDFs & Páginas A4 para Colorir
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Gere desenhos em <strong>Line Art (contorno preto para colorir)</strong> ou <strong>ilustrações 3D Pixar</strong> de qualquer herói bíblico e exporte em folha A4 oficial para imprimir ou vender como bônus!
                  </p>
                </div>

                <button
                  onClick={handlePrintPdfSheet}
                  className="px-5 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black font-brand text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 shrink-0 active:scale-95 transition-all"
                >
                  <Printer className="w-4 h-4" />
                  <span>Imprimir Folha A4 / Salvar PDF</span>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left Controls Column */}
                <div className="lg:col-span-5 space-y-4 bg-slate-950/80 p-5 rounded-3xl border border-slate-800">
                  <h4 className="font-brand font-black text-xs text-amber-300 uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    1. Configurar Nova Página
                  </h4>

                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="block text-slate-300 font-bold mb-1">
                        Tema da Cena Bíblica (Comando para IA):
                      </label>
                      <textarea
                        rows={3}
                        value={pdfTheme}
                        onChange={(e) => setPdfTheme(e.target.value)}
                        placeholder="Ex: Moisés estendendo o cajado e abrindo o Mar Vermelho, peixes e paredes de água"
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400 resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-bold mb-1">
                        Estilo Visual da Arte:
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setPdfType('line_art')}
                          className={`p-2.5 rounded-xl text-left border transition-all ${
                            pdfType === 'line_art'
                              ? 'bg-amber-400/20 border-amber-400 text-amber-300 font-black'
                              : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                          }`}
                        >
                          <span className="block font-brand text-xs">🎨 Line Art P&B</span>
                          <span className="text-[10px] opacity-80">Desenho para colorir</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setPdfType('3d_pixar')}
                          className={`p-2.5 rounded-xl text-left border transition-all ${
                            pdfType === '3d_pixar'
                              ? 'bg-amber-400/20 border-amber-400 text-amber-300 font-black'
                              : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                          }`}
                        >
                          <span className="block font-brand text-xs">🌟 3D Pixar Colorido</span>
                          <span className="text-[10px] opacity-80">Capa & Ilustração</span>
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="col-span-2">
                        <label className="block text-slate-300 font-bold mb-1">Título da Folha:</label>
                        <input
                          type="text"
                          value={pdfTitle}
                          onChange={(e) => setPdfTitle(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-300 font-bold mb-1">Página #:</label>
                        <input
                          type="number"
                          value={pdfPageNum}
                          onChange={(e) => setPdfPageNum(Number(e.target.value))}
                          className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-300 font-bold mb-1">Instrução para a Criança:</label>
                      <input
                        type="text"
                        value={pdfSubtitle}
                        onChange={(e) => setPdfSubtitle(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <label className="block text-slate-300 font-bold mb-1">Ref. Bíblica:</label>
                        <input
                          type="text"
                          value={pdfVerseRef}
                          onChange={(e) => setPdfVerseRef(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                        />
                      </div>
                      <div className="col-span-2">
                        <label className="block text-slate-300 font-bold mb-1">Texto do Versículo:</label>
                        <input
                          type="text"
                          value={pdfVerseText}
                          onChange={(e) => setPdfVerseText(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleGeneratePdfArt}
                      disabled={isGeneratingPdfArt}
                      className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 disabled:opacity-50 text-slate-950 font-black font-brand text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all mt-2"
                    >
                      {isGeneratingPdfArt ? (
                        <RefreshCw className="w-4 h-4 animate-spin" />
                      ) : (
                        <Sparkles className="w-4 h-4" />
                      )}
                      <span>{isGeneratingPdfArt ? 'Gerando Desenho com IA...' : '✨ Gerar Nova Arte com IA (Custo $0)'}</span>
                    </button>
                  </div>
                </div>

                {/* Right Preview Column: Realistic A4 Printable Sheet */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                      Pré-visualização Oficial em Folha A4
                    </span>
                    <a
                      href={pdfArtUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-sky-400 hover:underline flex items-center gap-1 font-bold"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Abrir Imagem Original</span>
                    </a>
                  </div>

                  {/* The A4 Printable Paper */}
                  <div className="bg-white border-4 border-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-900 font-sans space-y-4 min-h-[560px] flex flex-col justify-between">
                    {/* Header */}
                    <div className="border-b-2 border-slate-900 pb-2.5 flex items-center justify-between">
                      <span className="text-xs font-black font-brand tracking-wider text-slate-900">
                        TOON TALES KIDS • CADERNO DE ATIVIDADES BÍBLICAS
                      </span>
                      <span className="text-xs font-black font-brand px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-300">
                        PÁGINA #{pdfPageNum}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="text-center space-y-0.5">
                      <h4 className="text-lg sm:text-xl font-black font-brand text-slate-950 uppercase tracking-tight">
                        {pdfTitle}
                      </h4>
                      <p className="text-xs font-bold text-slate-600">
                        {pdfSubtitle}
                      </p>
                    </div>

                    {/* Image Area */}
                    <div className="flex-1 min-h-[280px] max-h-[360px] flex items-center justify-center p-2 border-2 border-dashed border-slate-300 rounded-xl bg-slate-50/60 overflow-hidden">
                      <img
                        src={pdfArtUrl}
                        alt={pdfTitle}
                        className="max-h-[340px] w-auto object-contain mx-auto transition-all"
                      />
                    </div>

                    {/* Verse Box */}
                    <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-300 text-center space-y-0.5">
                      <span className="text-[11px] font-black text-amber-900 uppercase font-brand">
                        📖 Versículo para Memorizar: {pdfVerseRef}
                      </span>
                      <p className="text-xs font-serif italic text-amber-950 font-medium">
                        "{pdfVerseText}"
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-slate-300 pt-2 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                      <span>Nome do Pequeno Aluno: ___________________________</span>
                      <span>Data: ___/___/______</span>
                    </div>
                  </div>

                  <button
                    onClick={handlePrintPdfSheet}
                    className="w-full py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-amber-300 font-brand font-black text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 active:scale-95 transition-all"
                  >
                    <Printer className="w-4 h-4 text-amber-400" />
                    <span>Imprimir Esta Página A4 ou Salvar em PDF</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: CATALOG */}
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
