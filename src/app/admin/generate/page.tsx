"use client";

import { useMemo, useState } from 'react';
import { aiProductionService } from '../../../services/aiProductionService';

type StoryScene = {
  title: string;
  narration: string;
  dialogues: { character: string; line: string }[];
};

type StoryQuiz = {
  question: string;
  options: string[];
  answer: number;
};

type GeneratedStory = {
  title: string;
  subtitle: string;
  biblicalVerse: string;
  moralLesson: string;
  scenes: StoryScene[];
  quiz: StoryQuiz[];
};

const presets = [
  {
    label: 'Davi e Golias',
    theme: 'Davi e a coragem contra o gigante Golias',
    moral: 'Confiar em Deus mesmo quando os desafios parecem grandes',
  },
  {
    label: 'Noé e a arca',
    theme: 'Noé e a grande arca em meio às águas da justiça',
    moral: 'Obedecer a Deus mesmo quando a missão parece difícil',
  },
  {
    label: 'Daniel na cova',
    theme: 'Daniel orando com coragem na cova dos leões',
    moral: 'Continuar em oração e fé quando tudo parece difícil',
  },
  {
    label: 'A Criação',
    theme: 'A criação do mundo e a maravilha das coisas feitas por Deus',
    moral: 'Valorizar a criação de Deus e agradecer pela Sua obra',
  },
];

export default function AdminGeneratePage() {
  const [theme, setTheme] = useState(presets[0].theme);
  const [childName, setChildName] = useState('Clara');
  const [moralLesson, setMoralLesson] = useState(presets[0].moral);
  const [targetAge, setTargetAge] = useState('6 a 12 anos');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [story, setStory] = useState<GeneratedStory | null>(null);

  const selectedPreset = useMemo(
    () => presets.find((preset) => preset.theme === theme) ?? presets[0],
    [theme]
  );

  const handlePresetSelect = (preset: (typeof presets)[number]) => {
    setTheme(preset.theme);
    setMoralLesson(preset.moral);
  };

  const handleGenerate = async () => {
    try {
      setIsGenerating(true);
      setError(null);

      const result = await aiProductionService.generateBibleStoryScript({
        theme,
        childName,
        moralLesson,
        targetAge,
        language: 'pt',
      });

      setStory(result);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Erro ao gerar a história bíblica.';
      setError(message);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fef3c7 0%, #f5f3ff 45%, #eff6ff 100%)',
      color: '#111827',
      padding: '32px 20px',
      fontFamily: 'Inter, Arial, sans-serif',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <header style={{ marginBottom: 28 }}>
          <p style={{ margin: 0, color: '#7c3aed', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Admin</p>
          <h1 style={{ margin: '8px 0 0', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Gerador de histórias bíblicas</h1>
        </header>

        <section style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 420px) 1fr', gap: 24 }}>
          <div style={{ background: 'rgba(255,255,255,0.78)', borderRadius: 20, boxShadow: '0 20px 50px rgba(15,23,42,0.08)', padding: 24, border: '1px solid rgba(148,163,184,0.22)' }}>
            <h2 style={{ marginTop: 0, fontSize: 24 }}>Configuração</h2>

            <div style={{ display: 'grid', gap: 16 }}>
              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: 8 }}>Tema</label>
                <textarea
                  value={theme}
                  onChange={(event) => setTheme(event.target.value)}
                  rows={3}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: 8 }}>Nome da criança</label>
                <input value={childName} onChange={(e) => setChildName(e.target.value)} style={inputStyle} />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: 8 }}>Lição moral</label>
                <textarea
                  value={moralLesson}
                  onChange={(event) => setMoralLesson(event.target.value)}
                  rows={3}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: 8 }}>Faixa etária</label>
                <select value={targetAge} onChange={(e) => setTargetAge(e.target.value)} style={inputStyle}>
                  <option>4 a 6 anos</option>
                  <option>6 a 12 anos</option>
                  <option>8 a 12 anos</option>
                  <option>10 a 14 anos</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: 8 }}>Predefinições</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {presets.map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => handlePresetSelect(preset)}
                      style={{
                        ...presetButtonStyle,
                        background: selectedPreset.label === preset.label ? '#7c3aed' : '#f3f4f6',
                        color: selectedPreset.label === preset.label ? '#fff' : '#111827',
                      }}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={handleGenerate}
                disabled={isGenerating}
                style={{
                  border: 'none',
                  borderRadius: 12,
                  padding: '14px 18px',
                  background: isGenerating ? '#a78bfa' : '#7c3aed',
                  color: '#fff',
                  fontWeight: 700,
                  cursor: isGenerating ? 'wait' : 'pointer',
                  fontSize: 16,
                }}
              >
                {isGenerating ? 'Gerando história...' : 'Gerar história'}
              </button>

              {error && (
                <div style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c', borderRadius: 12, padding: 12 }}>
                  {error}
                </div>
              )}
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.8)', borderRadius: 20, boxShadow: '0 20px 50px rgba(15,23,42,0.08)', padding: 24, border: '1px solid rgba(148,163,184,0.22)' }}>
            {story ? (
              <div style={{ display: 'grid', gap: 20 }}>
                <div>
                  <p style={{ margin: 0, color: '#7c3aed', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Resultado gerado</p>
                  <h2 style={{ margin: '8px 0 4px', fontSize: 32 }}>{story.title}</h2>
                  <p style={{ margin: 0, color: '#4b5563', fontSize: 18 }}>{story.subtitle}</p>
                  <p style={{ marginTop: 12, fontWeight: 600, color: '#0f172a' }}>Versículo: {story.biblicalVerse}</p>
                </div>

                <div style={{ background: '#f8fafc', borderRadius: 16, padding: 18, border: '1px solid #e2e8f0' }}>
                  <strong>Lição moral:</strong>
                  <p style={{ margin: '8px 0 0' }}>{story.moralLesson}</p>
                </div>

                <div style={{ display: 'grid', gap: 18 }}>
                  {story.scenes.map((scene, index) => (
                    <article key={`${scene.title}-${index}`} style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 16, padding: 18 }}>
                      <h3 style={{ marginTop: 0, marginBottom: 8 }}>{index + 1}. {scene.title}</h3>
                      <p style={{ margin: '0 0 12px', lineHeight: 1.6, color: '#374151' }}>{scene.narration}</p>

                      <div style={{ display: 'grid', gap: 8 }}>
                        {scene.dialogues.map((dialogue, dialogueIndex) => (
                          <div key={`${scene.title}-${dialogue.character}-${dialogueIndex}`} style={{ padding: '10px 12px', borderRadius: 12, background: '#f5f3ff' }}>
                            <strong style={{ color: '#6d28d9' }}>{dialogue.character}:</strong> {dialogue.line}
                          </div>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>

                <div style={{ background: '#fff7ed', borderRadius: 16, padding: 18, border: '1px solid #fed7aa' }}>
                  <h3 style={{ marginTop: 0, marginBottom: 12 }}>Quiz</h3>
                  <div style={{ display: 'grid', gap: 16 }}>
                    {story.quiz.map((question, index) => (
                      <div key={`${question.question}-${index}`}>
                        <p style={{ margin: '0 0 8px', fontWeight: 700 }}>{index + 1}. {question.question}</p>
                        <ul style={{ paddingLeft: 20, margin: 0, display: 'grid', gap: 6 }}>
                          {question.options.map((option, itemIndex) => (
                            <li key={`${option}-${itemIndex}`} style={{ color: itemIndex === question.answer ? '#166534' : '#374151', fontWeight: itemIndex === question.answer ? 700 : 500 }}>
                              {option}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ display: 'grid', placeItems: 'center', minHeight: 420, textAlign: 'center', color: '#4b5563' }}>
                <div>
                  <div style={{ fontSize: 56, marginBottom: 12 }}>✨</div>
                  <h2 style={{ margin: '0 0 8px' }}>Pronto para criar uma nova história</h2>
                  <p style={{ margin: 0 }}>Configure o tema e clique em “Gerar história” para produzir a narrativa completa com cenas e quiz.</p>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  borderRadius: 12,
  border: '1px solid #d1d5db',
  background: '#fff',
  padding: '12px 14px',
  fontSize: 15,
  color: '#111827',
  boxSizing: 'border-box',
};

const presetButtonStyle: React.CSSProperties = {
  border: 'none',
  borderRadius: 999,
  padding: '8px 12px',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'all 0.2s ease',
};
