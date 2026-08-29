import React, { useState } from 'react';
import { Scene, ScriptLine } from '../types';
import { audioEngine } from '../services/audioEngine';
import { Play, Volume2, Sparkles, BookOpen, Music, Shield, Info, Heart, Layers } from 'lucide-react';

interface ScriptTeleprompterProps {
  scenes: Scene[];
  currentSceneId: number;
  activeLineId: string | null;
  onSelectScene: (sceneIndex: number) => void;
}

export const ScriptTeleprompter: React.FC<ScriptTeleprompterProps> = ({
  scenes,
  currentSceneId,
  activeLineId,
  onSelectScene,
}) => {
  const [filterChar, setFilterChar] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'script' | 'direction' | 'theology'>('script');

  const getCharacterBadge = (char: string) => {
    switch (char) {
      case 'god':
        return {
          label: 'Voz de Deus',
          badge: 'bg-amber-500/20 text-amber-300 border-amber-400/40',
          desc: 'Majestosa, sábia, tranquila, poderosa e acolhedora (nunca assustadora).',
        };
      case 'child':
        return {
          label: 'Voz da Criança',
          badge: 'bg-sky-500/20 text-sky-300 border-sky-400/40',
          desc: 'Curiosa, alegre, espontânea, inocente e natural.',
        };
      case 'narrator':
      default:
        return {
          label: 'Narrador',
          badge: 'bg-indigo-500/20 text-indigo-300 border-indigo-400/40',
          desc: 'Quente, profunda, acolhedora, clara, emocional e segura (35–45 anos).',
        };
    }
  };

  const handlePlaySingleLine = (line: ScriptLine, scene: Scene) => {
    audioEngine.startSceneAtmosphere(scene);
    audioEngine.speakLine(line);
  };

  return (
    <div id="script-teleprompter" className="w-full bg-white border-2 border-slate-100 rounded-3xl p-5 sm:p-7 shadow-md">
      {/* Header with Navigation Tabs */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-2 border-slate-100 pb-5 mb-6">
        <div>
          <h3 className="text-xl font-black text-slate-900 flex items-center gap-2 font-brand">
            <BookOpen className="w-5 h-5 text-orange-500" />
            Roteiro Cinematográfico & Direção Vocal
          </h3>
          <p className="text-xs text-slate-500 font-semibold mt-0.5">
            Toon Tales Kids • Episódio 01: A Criação (Gênesis 1:1–31; 2:1–3)
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-2xl border-2 border-slate-200/80 self-stretch sm:self-auto">
          <button
            onClick={() => setActiveTab('script')}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'script' ? 'bg-orange-500 text-white shadow-sm font-extrabold' : 'text-slate-600 hover:text-orange-600'
            }`}
          >
            Roteiro Completo
          </button>
          <button
            onClick={() => setActiveTab('direction')}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'direction' ? 'bg-orange-500 text-white shadow-sm font-extrabold' : 'text-slate-600 hover:text-orange-600'
            }`}
          >
            Direção de Dublagem
          </button>
          <button
            onClick={() => setActiveTab('theology')}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'theology' ? 'bg-orange-500 text-white shadow-sm font-extrabold' : 'text-slate-600 hover:text-orange-600'
            }`}
          >
            Fidelidade Bíblica
          </button>
        </div>
      </div>

      {/* Tab 1: Script Teleprompter */}
      {activeTab === 'script' && (
        <div className="space-y-6">
          {/* Character Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs font-bold text-slate-600">
            <span>Filtrar voz:</span>
            <button
              onClick={() => setFilterChar('all')}
              className={`px-3.5 py-1.5 rounded-xl border-2 transition-all ${
                filterChar === 'all'
                  ? 'bg-orange-500 text-white border-orange-500 shadow-sm'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-orange-50/50'
              }`}
            >
              Todas as Falas
            </button>
            <button
              onClick={() => setFilterChar('narrator')}
              className={`px-3.5 py-1.5 rounded-xl border-2 transition-all ${
                filterChar === 'narrator'
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-indigo-50'
              }`}
            >
              Narrador
            </button>
            <button
              onClick={() => setFilterChar('god')}
              className={`px-3.5 py-1.5 rounded-xl border-2 transition-all ${
                filterChar === 'god'
                  ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-sm font-black'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-amber-50'
              }`}
            >
              Voz de Deus
            </button>
            <button
              onClick={() => setFilterChar('child')}
              className={`px-3.5 py-1.5 rounded-xl border-2 transition-all ${
                filterChar === 'child'
                  ? 'bg-sky-500 text-white border-sky-500 shadow-sm'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-sky-50'
              }`}
            >
              Voz da Criança
            </button>
          </div>

          {/* Scenes and Lines */}
          <div className="space-y-6 max-h-[620px] overflow-y-auto pr-2">
            {scenes.map((scene, sceneIdx) => {
              const isCurrentScene = scene.id === currentSceneId;
              const filteredLines = scene.lines.filter(
                (l) => filterChar === 'all' || l.character === filterChar
              );

              if (filteredLines.length === 0) return null;

              return (
                <div
                  key={scene.id}
                  id={`scene-script-${scene.id}`}
                  className={`rounded-3xl border-2 transition-all duration-300 p-5 ${
                    isCurrentScene
                      ? 'bg-orange-50/40 border-orange-300 ring-2 ring-orange-200 shadow-md'
                      : 'bg-slate-50/60 border-slate-100 hover:border-slate-200'
                  }`}
                >
                  {/* Scene Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-slate-200/60 pb-3 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-orange-500 text-white font-black text-xs flex items-center justify-center font-brand shadow-sm">
                        {scene.sceneNumber}
                      </span>
                      <div>
                        <h4 className="font-black text-slate-900 text-base font-brand">
                          {scene.title}
                        </h4>
                        <p className="text-xs text-slate-500 font-semibold">
                          {scene.subtitle} • <span className="text-orange-600 font-bold">{scene.biblicalRef}</span>
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectScene(sceneIdx)}
                      className="self-start sm:self-auto text-xs px-3.5 py-1.5 rounded-xl bg-white hover:bg-orange-50 text-slate-700 hover:text-orange-600 font-bold transition-colors border-2 border-slate-200 shadow-sm"
                    >
                      Pular para esta cena
                    </button>
                  </div>

                  {/* Scene Environment & Music Notes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs bg-white p-3.5 rounded-2xl border border-slate-200/80 mb-4 shadow-sm">
                    <div className="flex items-start gap-2 text-slate-700">
                      <Layers className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900">Ambiente:</strong> {scene.environmentSummary}
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-slate-700">
                      <Music className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900">Trilha Sonora:</strong> {scene.musicDescription}
                      </div>
                    </div>
                  </div>

                  {/* Lines */}
                  <div className="space-y-3">
                    {filteredLines.map((line) => {
                      const isActive = line.id === activeLineId;
                      const badgeInfo = getCharacterBadge(line.character);

                      return (
                        <div
                          key={line.id}
                          className={`p-4 rounded-2xl border-2 transition-all duration-200 flex items-start gap-3.5 ${
                            isActive
                              ? 'bg-amber-50/80 border-orange-400 shadow-md ring-2 ring-orange-200'
                              : 'bg-white border-slate-100 hover:border-slate-200 shadow-sm'
                          }`}
                        >
                          <button
                            onClick={() => handlePlaySingleLine(line, scene)}
                            title="Ouvir esta fala isolada"
                            className="mt-1 p-2.5 rounded-xl bg-slate-100 hover:bg-orange-500 hover:text-white text-slate-700 transition-all border border-slate-200 shrink-0 active:scale-95 shadow-sm"
                          >
                            <Play className="w-3.5 h-3.5 fill-current" />
                          </button>

                          <div className="flex-1 space-y-1.5">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className={`px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider border ${badgeInfo.badge}`}>
                                {line.characterLabel}
                              </span>

                              {line.pauseType && (
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200 font-semibold">
                                  [{line.pauseType}]
                                </span>
                              )}

                              {line.isInteractivePrompt && (
                                <span className="inline-flex items-center gap-1 text-[11px] font-black px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 border border-amber-500 shadow-sm animate-pulse">
                                  <Sparkles className="w-3 h-3 fill-current" />
                                  PERGUNTA INTERATIVA ({line.pauseSeconds}s pausa)
                                </span>
                              )}

                              {line.soundCue && (
                                <span className="text-[11px] text-sky-700 font-semibold italic flex items-center gap-1">
                                  <Sparkles className="w-3 h-3 text-sky-500" />
                                  {line.soundCue}
                                </span>
                              )}
                            </div>

                            <p className={`text-sm sm:text-base leading-relaxed ${
                              isActive ? 'text-slate-900 font-extrabold' : 'text-slate-800 font-medium'
                            }`}>
                              {line.text}
                            </p>

                            {line.interactiveOptions && line.interactiveOptions.length > 0 && (
                              <div className="bg-amber-50/70 border border-amber-200 p-2.5 rounded-xl space-y-1 mt-1">
                                <span className="text-[11px] font-bold text-amber-900 block">
                                  Opções oferecidas para a criança:
                                </span>
                                <div className="flex flex-wrap gap-1.5">
                                  {line.interactiveOptions.map((opt) => (
                                    <span key={opt} className="px-2.5 py-0.5 rounded-lg bg-white text-slate-700 text-xs font-semibold border border-amber-200 shadow-2xs">
                                      {opt}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {line.emotionGuide && (
                              <p className="text-xs text-orange-700 font-medium italic">
                                Interpretação: {line.emotionGuide}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 2: Dubbing & Voice Direction */}
      {activeTab === 'direction' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Narrator Direction Card */}
            <div className="bg-white border-2 border-indigo-200 rounded-3xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-700 border border-indigo-200 uppercase">
                  Narrador Principal
                </span>
                <span className="text-xs text-slate-500 font-bold">35–45 anos</span>
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-2 font-brand">Voz Quente & Acolhedora</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Profunda, calorosa, clara, emocional e segura. Semelhante à voz de um excelente narrador de audiolivros infantis de cinema.
              </p>
              <div className="space-y-1.5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                <div>• <strong>Mistério:</strong> Voz baixa e envolvente</div>
                <div>• <strong>Descoberta:</strong> Voz maravilhada</div>
                <div>• <strong>Aventura:</strong> Voz energética</div>
                <div>• <strong>Emoção:</strong> Calorosa e tranquila</div>
              </div>
            </div>

            {/* God's Voice Direction Card */}
            <div className="bg-white border-2 border-amber-200 rounded-3xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 uppercase">
                  Voz de Deus
                </span>
                <span className="text-xs text-slate-500 font-bold">Profunda & Serena</span>
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-2 font-brand">Majestade & Bondade</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Majestosa, sábia, calma, poderosa e segura. <strong>NÃO deve ser assustadora</strong>, sem gritos e sem ecos artificiais assustadores.
              </p>
              <div className="space-y-1.5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                <div>• Falas curtas, claras e impactantes</div>
                <div>• Sensação de autoridade, amor paternal e grandeza</div>
                <div>• A música recua para dar destaque total</div>
              </div>
            </div>

            {/* Child Voice Direction Card */}
            <div className="bg-white border-2 border-sky-200 rounded-3xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-800 border border-sky-200 uppercase">
                  Voz da Criança
                </span>
                <span className="text-xs text-slate-500 font-bold">PT-BR Natural</span>
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-2 font-brand">Espontânea & Alegre</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Curiosa, alegre, espontânea, inocente e genuína. Sem caricaturas ou afetações exageradas.
              </p>
              <div className="space-y-1.5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                <div>• Respostas às perguntas interativas (Cenas 4, 5, 7, 11)</div>
                <div>• Vinheta de encerramento Toon Tales Kids</div>
                <div>• Transmite identificação imediata para os pequenos ouvintes</div>
              </div>
            </div>
          </div>

          {/* Mixing & Pacing Guidelines */}
          <div className="bg-white border-2 border-slate-100 p-5 sm:p-6 rounded-3xl shadow-sm">
            <h4 className="font-bold text-slate-900 text-sm mb-3.5 flex items-center gap-2 font-brand">
              <Volume2 className="w-4 h-4 text-orange-500" />
              Diretrizes de Mixagem & Prioridade Sonora
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center text-xs">
              <div className="bg-slate-50 p-3.5 rounded-2xl border-2 border-slate-100">
                <span className="text-orange-600 font-bold block mb-1">1. Voz dos Personagens</span>
                <span className="text-slate-600">Elemento principal absoluto com 100% de clareza</span>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-2xl border-2 border-slate-100">
                <span className="text-orange-600 font-bold block mb-1">2. Efeitos Importantes</span>
                <span className="text-slate-600">Sutis, realistas e cinematográficos</span>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-2xl border-2 border-slate-100">
                <span className="text-orange-600 font-bold block mb-1">3. Trilha Sonora (15–25%)</span>
                <span className="text-slate-600">Ducking automático durante as falas</span>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-2xl border-2 border-slate-100">
                <span className="text-orange-600 font-bold block mb-1">4. Ambientes Naturais</span>
                <span className="text-slate-600">Imersão contínua em cada cena</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Biblical Fidelity (Genesis 1 & 2) */}
      {activeTab === 'theology' && (
        <div className="space-y-4">
          <div className="bg-amber-50 border-2 border-amber-200 p-5 rounded-3xl shadow-sm">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-2 font-brand">
              <Shield className="w-4 h-4 text-amber-600" />
              Compromisso com a Fidelidade Bíblica
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              O roteiro preserva integralmente os eventos descritos em <strong>Gênesis 1:1–31 e Gênesis 2:1–3</strong>. A adaptação para linguagem infantil mantém a reverência sagrada, o significado central e a verdade de que Deus criou o mundo por amor e confiou ao ser humano o cuidado de Sua criação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {scenes.map((s) => (
              <div key={s.id} className="bg-white border-2 border-slate-100 p-4 rounded-2xl shadow-sm">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="font-bold text-slate-900 font-brand">{s.title}</span>
                  <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-mono font-bold border border-amber-200">
                    {s.biblicalRef}
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed">{s.directorLesson}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
