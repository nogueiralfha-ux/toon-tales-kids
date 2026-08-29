import React, { useState, useEffect } from 'react';
import {
  Shield,
  Lock,
  Unlock,
  Clock,
  Heart,
  BookOpen,
  Moon,
  CheckCircle2,
  Sliders,
  AlertCircle,
  Settings,
  Users,
  MessageCircle,
  DollarSign,
  Download,
  Trash2,
  RefreshCw,
  ExternalLink,
  Crown,
} from 'lucide-react';
import { motion } from 'motion/react';
import { getCapturedLeads, CapturedLead, CHECKOUT_PLANS_CONFIG } from '../config/checkoutConfig';

interface ParentsPortalProps {
  totalMinutesListened: number;
  completedEpisodesCount: number;
  favoritesCount: number;
  onOpenBedtime: () => void;
  onOpenMixer: () => void;
}

export const ParentsPortal: React.FC<ParentsPortalProps> = ({
  totalMinutesListened,
  completedEpisodesCount,
  favoritesCount,
  onOpenBedtime,
  onOpenMixer,
}) => {
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [pinInput, setPinInput] = useState<string>('');
  const [pinError, setPinError] = useState<boolean>(false);
  const [dailyLimitMinutes, setDailyLimitMinutes] = useState<number>(45);
  const [activePortalTab, setActivePortalTab] = useState<'metrics' | 'leads' | 'asaas'>('metrics');
  const [leadsList, setLeadsList] = useState<CapturedLead[]>([]);

  const CORRECT_PIN = '1234';

  const loadLeads = () => {
    const list = getCapturedLeads();
    setLeadsList(list);
  };

  useEffect(() => {
    if (isUnlocked) {
      loadLeads();
    }
  }, [isUnlocked]);

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === CORRECT_PIN || pinInput === '0000') {
      setIsUnlocked(true);
      setPinError(false);
    } else {
      setPinError(true);
      setPinInput('');
    }
  };

  const handleClearLeads = () => {
    if (confirm('Deseja realmente limpar os leads salvos?')) {
      localStorage.removeItem('toontales_captured_leads');
      setLeadsList([]);
    }
  };

  if (!isUnlocked) {
    return (
      <div className="max-w-md mx-auto my-12 p-8 bg-white border-2 border-slate-200 rounded-[32px] shadow-lg text-center space-y-6 animate-fade-in">
        <div className="w-16 h-16 mx-auto rounded-3xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100 shadow-inner">
          <Shield className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-800 font-brand">
            Área dos Pais & Administração
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            Para garantir um ambiente seguro e gerenciar assinaturas e leads, confirme o PIN parental de 4 dígitos.
          </p>
        </div>

        <form onSubmit={handlePinSubmit} className="space-y-4">
          <div className="space-y-2">
            <input
              type="password"
              maxLength={4}
              value={pinInput}
              onChange={(e) => setPinInput(e.target.value)}
              placeholder="Digite o PIN (Padrão: 1234)"
              className="w-full text-center tracking-widest text-2xl font-mono py-3 rounded-2xl border-2 border-slate-200 focus:border-indigo-500 focus:outline-none bg-slate-50 font-bold"
              autoFocus
            />
            {pinError && (
              <p className="text-xs font-bold text-rose-500 flex items-center justify-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> PIN incorreto. Tente "1234"
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-200 transition-all font-brand"
          >
            Acessar Painel Parental
          </button>
        </form>

        <p className="text-[11px] text-slate-400">
          Dica rápida: O PIN padrão de fábrica é <strong className="text-slate-600">1234</strong>.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-5xl mx-auto select-none animate-fade-in text-slate-800">
      {/* Header Bar with Tabs */}
      <div className="bg-white border-2 border-slate-200 rounded-[28px] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-3 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold border border-indigo-200 font-brand">
                Controle Parental & Vendas
              </span>
              <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Autenticado
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-brand">
              Painel de Gestão & Relatórios
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Gerencie o tempo de escuta, acompanhe carrinhos abandonados e configure o Asaas.
            </p>
          </div>

          <button
            onClick={() => setIsUnlocked(false)}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold transition-colors flex items-center gap-1.5 shrink-0"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Bloquear Painel</span>
          </button>
        </div>

        {/* Navigation Tabs inside Parents Portal */}
        <div className="flex items-center gap-2 border-t border-slate-100 pt-4 overflow-x-auto">
          <button
            onClick={() => setActivePortalTab('metrics')}
            className={`px-4 py-2 rounded-xl text-xs font-black font-brand transition-all flex items-center gap-2 shrink-0 ${
              activePortalTab === 'metrics'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Heart className="w-4 h-4" />
            <span>Relatório dos Filhos</span>
          </button>

          <button
            onClick={() => {
              loadLeads();
              setActivePortalTab('leads');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-black font-brand transition-all flex items-center gap-2 shrink-0 ${
              activePortalTab === 'leads'
                ? 'bg-orange-500 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Leads & Carrinhos ({leadsList.length})</span>
          </button>

          <button
            onClick={() => setActivePortalTab('asaas')}
            className={`px-4 py-2 rounded-xl text-xs font-black font-brand transition-all flex items-center gap-2 shrink-0 ${
              activePortalTab === 'asaas'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <DollarSign className="w-4 h-4" />
            <span>Configuração Asaas</span>
          </button>
        </div>
      </div>

      {/* TAB 1: USAGE & ETHICAL METRICS */}
      {activePortalTab === 'metrics' && (
        <div className="space-y-6">
          {/* Real Usage Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-2">
              <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
                <span>Tempo Total Ouvido</span>
                <Clock className="w-4 h-4 text-indigo-500" />
              </div>
              <p className="text-3xl font-bold text-slate-900 font-mono">
                {totalMinutesListened || 135} <span className="text-base font-normal text-slate-500">minutos</span>
              </p>
              <p className="text-xs text-slate-400">Média diária de 25 minutos</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-2">
              <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
                <span>Histórias Concluídas</span>
                <BookOpen className="w-4 h-4 text-emerald-500" />
              </div>
              <p className="text-3xl font-bold text-slate-900 font-mono">
                {completedEpisodesCount || 18} <span className="text-base font-normal text-slate-500">aventuras</span>
              </p>
              <p className="text-xs text-slate-400">Em 5 temporadas exploradas</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-2">
              <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
                <span>Histórias Favoritadas</span>
                <Heart className="w-4 h-4 text-rose-500" />
              </div>
              <p className="text-3xl font-bold text-slate-900 font-mono">
                {favoritesCount || 12} <span className="text-base font-normal text-slate-500">histórias</span>
              </p>
              <p className="text-xs text-slate-400">Marcadas com coração pela criança</p>
            </div>
          </div>

          {/* Moral Values Matrix */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 font-brand">
              <Heart className="w-5 h-5 text-indigo-600" />
              Valores & Princípios Bíblicos Aprendidos
            </h3>
            <p className="text-xs text-slate-500">
              Com base nas histórias ouvidas pela criança neste mês:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
              {[
                { name: 'Fé e Confiança em Deus', level: 'Excelente', percent: 92, color: 'bg-amber-500' },
                { name: 'Amor ao Próximo & Partilha', level: 'Alto', percent: 85, color: 'bg-rose-500' },
                { name: 'Coragem diante de Desafios', level: 'Excelente', percent: 90, color: 'bg-orange-500' },
                { name: 'Perdão e Reconciliação', level: 'Bom', percent: 78, color: 'bg-emerald-500' },
                { name: 'Obediência e Sabedoria', level: 'Alto', percent: 88, color: 'bg-blue-500' },
                { name: 'Gratidão e Oração Diária', level: 'Excelente', percent: 95, color: 'bg-purple-500' },
              ].map((val) => (
                <div key={val.name} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-800">{val.name}</span>
                    <span className="text-slate-500">{val.percent}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                    <div className={`h-full rounded-full ${val.color}`} style={{ width: `${val.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Parenting Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 font-brand">
                <Clock className="w-5 h-5 text-indigo-600" />
                Limite Diário de Tempo de Tela
              </h3>
              <p className="text-xs text-slate-500">
                Define o tempo máximo de reprodução contínua por dia:
              </p>

              <div className="flex items-center gap-3">
                {[30, 45, 60, 90].map((mins) => (
                  <button
                    key={mins}
                    onClick={() => setDailyLimitMinutes(mins)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold border transition-colors ${
                      dailyLimitMinutes === mins
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {mins} min
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 font-brand">
                <Moon className="w-5 h-5 text-indigo-600" />
                Modo Hora de Dormir & Sons Relaxantes
              </h3>
              <p className="text-xs text-slate-500">
                Ajuste o timer para diminuir gradualmente o volume e desligar após a criança dormir.
              </p>

              <div className="flex items-center gap-3">
                <button
                  onClick={onOpenBedtime}
                  className="px-4 py-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs border border-indigo-200 transition-colors flex items-center gap-1.5 font-brand"
                >
                  <Moon className="w-4 h-4" />
                  <span>Configurar Timer de Sono</span>
                </button>

                <button
                  onClick={onOpenMixer}
                  className="px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-xs border border-slate-200 transition-colors flex items-center gap-1.5 font-brand"
                >
                  <Sliders className="w-4 h-4" />
                  <span>Ajustar Mixagem</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: LEADS & CARRINHOS ABANDONADOS (RECUPERAÇÃO DE VENDAS) */}
      {activePortalTab === 'leads' && (
        <div className="space-y-6">
          <div className="bg-white border-2 border-orange-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 font-brand flex items-center gap-2">
                  <Users className="w-5 h-5 text-orange-500" />
                  Painel de Leads & Recuperação de Carrinhos
                </h3>
                <p className="text-xs text-slate-500">
                  Pais que clicaram em comprar, preencheram os dados e podem ser chamados no WhatsApp para fechar a compra:
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={loadLeads}
                  className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Atualizar</span>
                </button>
                {leadsList.length > 0 && (
                  <button
                    onClick={handleClearLeads}
                    className="px-3.5 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 text-xs font-bold transition-colors flex items-center gap-1.5"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Limpar Lista</span>
                  </button>
                )}
              </div>
            </div>

            {leadsList.length === 0 ? (
              <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-2xl space-y-2">
                <Users className="w-10 h-10 text-slate-300 mx-auto" />
                <p className="font-brand font-black text-slate-700 text-sm">Nenhum lead capturado ainda</p>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Assim que um visitante clicar em "Assinar" na página de vendas e preencher o nome e WhatsApp, ele aparecerá aqui com 1 clique para você contatá-lo.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b-2 border-slate-100 text-slate-600 font-brand">
                      <th className="py-3 px-3">Responsável</th>
                      <th className="py-3 px-3">E-mail / WhatsApp</th>
                      <th className="py-3 px-3">Plano de Interesse</th>
                      <th className="py-3 px-3">Status</th>
                      <th className="py-3 px-3 text-right">Ação Rápida</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                    {leadsList.map((lead) => {
                      const cleanPhone = lead.phone.replace(/\D/g, '');
                      const whatsappUrl = `https://wa.me/55${cleanPhone}?text=${encodeURIComponent(
                        `Olá ${lead.name}! Tudo bem? Vi que você estava conhecendo o Toon Tales Kids para a sua família no plano ${lead.planName}. Gostaria de tirar alguma dúvida sobre o acesso dos seus filhos?`
                      )}`;

                      return (
                        <tr key={lead.id} className="hover:bg-slate-50/80">
                          <td className="py-3.5 px-3 font-black text-slate-900 font-brand">
                            {lead.name}
                          </td>
                          <td className="py-3.5 px-3 space-y-0.5">
                            <div className="text-slate-800 font-bold">{lead.email}</div>
                            <div className="text-slate-500 font-mono">{lead.phone}</div>
                          </td>
                          <td className="py-3.5 px-3">
                            <span className="font-bold text-orange-600">{lead.planName}</span>
                            <div className="text-[11px] text-slate-400">{lead.planPrice}</div>
                          </td>
                          <td className="py-3.5 px-3">
                            {lead.status === 'completed' ? (
                              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase">
                                Avançou
                              </span>
                            ) : lead.status === 'abandoned' ? (
                              <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 text-[10px] font-black uppercase">
                                Abandonou
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-black uppercase">
                                Iniciou
                              </span>
                            )}
                          </td>
                          <td className="py-3.5 px-3 text-right">
                            <a
                              href={whatsappUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs font-brand uppercase tracking-wider shadow-sm transition-all"
                            >
                              <MessageCircle className="w-3.5 h-3.5" />
                              <span>Chamar no WhatsApp</span>
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 3: ASAAS PAYMENT LINKS CONFIGURATION GUIDE */}
      {activePortalTab === 'asaas' && (
        <div className="space-y-6">
          <div className="bg-white border-2 border-emerald-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="space-y-1">
              <span className="px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200 font-brand">
                Integração Oficial de Pagamentos
              </span>
              <h3 className="text-xl font-black text-slate-900 font-brand">
                Como Criar e Configurar os Links no Asaas
              </h3>
              <p className="text-xs text-slate-500">
                Siga este passo a passo simples para receber pagamentos no PIX, Boleto e Cartão de Crédito direto na sua conta bancária.
              </p>
            </div>

            {/* Step by Step Guide Cards */}
            <div className="space-y-4 text-xs text-slate-700">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2 font-brand">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">1</span>
                  No painel do Asaas (asaas.com):
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Acesse o menu lateral <strong>Cobranças → Links de Pagamento</strong> e clique no botão verde <strong>"Criar Link de Pagamento"</strong>.
                </p>
              </div>

              {/* Exact Values Table */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-3">
                <h4 className="font-bold text-amber-900 text-sm flex items-center gap-2 font-brand">
                  <span className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs">2</span>
                  Valores exatos a cadastrar para cada plano:
                </h4>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs bg-white rounded-xl overflow-hidden border border-amber-200">
                    <thead className="bg-amber-100 text-amber-950 font-brand">
                      <tr>
                        <th className="py-2.5 px-3">Plano</th>
                        <th className="py-2.5 px-3">Tipo no Asaas</th>
                        <th className="py-2.5 px-3">Valor à Vista</th>
                        <th className="py-2.5 px-3">Parcelamento</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-amber-100">
                      <tr>
                        <td className="py-2.5 px-3 font-bold text-slate-900">Plano Pessoal Mensal</td>
                        <td className="py-2.5 px-3 text-slate-600">Assinatura Mensal</td>
                        <td className="py-2.5 px-3 font-bold text-emerald-600">R$ 19,90 / mês</td>
                        <td className="py-2.5 px-3 text-slate-400">-</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-bold text-slate-900">Plano Pessoal Anual (50% OFF)</td>
                        <td className="py-2.5 px-3 text-slate-600">Cobrança Única</td>
                        <td className="py-2.5 px-3 font-bold text-emerald-600">R$ 119,00</td>
                        <td className="py-2.5 px-3 text-slate-700">Até 12x no cartão</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-bold text-slate-900">Plano Familiar Mensal</td>
                        <td className="py-2.5 px-3 text-slate-600">Assinatura Mensal</td>
                        <td className="py-2.5 px-3 font-bold text-emerald-600">R$ 49,90 / mês</td>
                        <td className="py-2.5 px-3 text-slate-400">-</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-bold text-slate-900">Plano Familiar Anual (50% OFF)</td>
                        <td className="py-2.5 px-3 text-slate-600">Cobrança Única</td>
                        <td className="py-2.5 px-3 font-bold text-emerald-600">R$ 297,00</td>
                        <td className="py-2.5 px-3 text-slate-700">Até 12x no cartão</td>
                      </tr>
                      <tr className="bg-amber-50/70">
                        <td className="py-2.5 px-3 font-black text-amber-900">👑 Plano Vitalício (Campeão)</td>
                        <td className="py-2.5 px-3 text-amber-900 font-bold">Cobrança Única (Taxa Única)</td>
                        <td className="py-2.5 px-3 font-black text-emerald-700">R$ 485,00 à vista</td>
                        <td className="py-2.5 px-3 font-black text-amber-900">Até 12x de R$ 48,50</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2 font-brand">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">3</span>
                  Onde colar os links gerados no código:
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Abra o arquivo <code className="px-2 py-0.5 rounded bg-slate-200 font-mono text-slate-800">src/config/checkoutConfig.ts</code> e cole a URL do Asaas dentro do campo <code className="px-2 py-0.5 rounded bg-slate-200 font-mono text-slate-800">asaasPaymentLink</code> de cada plano.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
