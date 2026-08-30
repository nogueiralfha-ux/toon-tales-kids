/**
 * AI Production Service - Toon Tales Kids
 * Motor de Produção Automatizada de Conteúdo Bíblico (Texto, Áudio Cinematográfico e Imagens 3D/LineArt)
 * Otimizado para Qualidade Máxima e Custo Mínimo (OpenAI TTS, ElevenLabs, GPT-4o-mini, Pollinations/Flux)
 */

export interface ApiKeysConfig {
  openaiApiKey?: string;
  elevenlabsApiKey?: string;
  geminiApiKey?: string;
  cloudflareR2Endpoint?: string;
}

export type TtsEngine = 'openai' | 'elevenlabs' | 'browser';

export interface VoiceMapping {
  characterType: string;
  openaiVoice: 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer';
  elevenlabsVoiceId: string;
  description: string;
}

export const CHARACTER_VOICE_MAP: Record<string, VoiceMapping> = {
  narrator: {
    characterType: 'narrator',
    openaiVoice: 'nova',
    elevenlabsVoiceId: 'JBFqnCBsd6RMkjVDRZzb', // George / Warm Deep Storyteller
    description: 'Voz calorosa, entusiasmada e envolvente de contadora de histórias',
  },
  god: {
    characterType: 'god',
    openaiVoice: 'onyx',
    elevenlabsVoiceId: 'JBFqnCBsd6RMkjVDRZzb', // George / Deep Reverent Voice
    description: 'Voz majestosa, profunda, solene e com eco sagrado de autoridade e amor',
  },
  david: {
    characterType: 'david',
    openaiVoice: 'echo',
    elevenlabsVoiceId: 'JBFqnCBsd6RMkjVDRZzb', // George
    description: 'Voz jovem, corajosa, alegre e cheia de fé',
  },
  esther: {
    characterType: 'esther',
    openaiVoice: 'shimmer',
    elevenlabsVoiceId: 'EXAVITQu4vr4xnSDxMaL', // Bella / Noble Queen
    description: 'Voz suave, nobre, doce e com firmeza e reverência',
  },
  noah: {
    characterType: 'noah',
    openaiVoice: 'fable',
    elevenlabsVoiceId: 'JBFqnCBsd6RMkjVDRZzb', // George
    description: 'Voz sábia, paciente e amorosa de um pai obediente a Deus',
  },
  daniel: {
    characterType: 'daniel',
    openaiVoice: 'alloy',
    elevenlabsVoiceId: 'JBFqnCBsd6RMkjVDRZzb', // George
    description: 'Voz serena, confiante e oradora de paz',
  },
};

const STORAGE_API_KEYS = 'toontales_ai_api_keys';

class AiProductionService {
  private apiKeys: ApiKeysConfig = {};
  private audioCache: Map<string, string> = new Map();

  constructor() {
    this.loadKeys();
  }

  public loadKeys(): ApiKeysConfig {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_API_KEYS);
        if (saved) {
          this.apiKeys = JSON.parse(saved);
        }
      } catch (err) {
        console.error('Error loading AI keys:', err);
      }
    }
    return this.apiKeys;
  }

  public saveKeys(keys: Partial<ApiKeysConfig>) {
    this.apiKeys = { ...this.apiKeys, ...keys };
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_API_KEYS, JSON.stringify(this.apiKeys));
    }
  }

  public getKeys(): ApiKeysConfig {
    return this.apiKeys;
  }

  // -------------------------------------------------------------
  // 1. SÍNTESE DE ÁUDIO CINEMATOGRÁFICO DE BAIXO CUSTO (OPENAI TTS)
  // Custo: $0,015 por 1.000 caracteres (~R$ 0,10 por áudio de 5 min)
  // -------------------------------------------------------------
  public async synthesizeSpeechOpenAi(
    text: string,
    voice: 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer' = 'nova',
    speed: number = 0.95
  ): Promise<string> {
    const apiKey = this.apiKeys.openaiApiKey;
    if (!apiKey) {
      throw new Error('Chave da OpenAI não configurada. Adicione sua chave no Painel Admin.');
    }

    const cacheKey = `openai_${voice}_${speed}_${text.substring(0, 50)}`;
    if (this.audioCache.has(cacheKey)) {
      return this.audioCache.get(cacheKey)!;
    }

    const response = await fetch('https://api.openai.com/v1/audio/speech', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'tts-1', // tts-1 para máxima velocidade e menor custo ($0.015/1k)
        input: text,
        voice: voice,
        speed: speed,
        response_format: 'mp3',
      }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({ error: { message: response.statusText } }));
      throw new Error(err.error?.message || 'Erro ao gerar áudio com OpenAI TTS');
    }

    const blob = await response.blob();
    const audioUrl = URL.createObjectURL(blob);
    this.audioCache.set(cacheKey, audioUrl);
    return audioUrl;
  }

  // -------------------------------------------------------------
  // 2. SÍNTESE DE ÁUDIO ELEVENLABS (MÁXIMA EMOÇÃO)
  // Custo: ~$0,10 por 1.000 caracteres
  // -------------------------------------------------------------
  public async synthesizeSpeechElevenLabs(
    text: string,
    voiceId: string = '21m00Tcm4TlvDq8ikWAM'
  ): Promise<string> {
    const apiKey = this.apiKeys.elevenlabsApiKey;
    if (!apiKey) {
      throw new Error('Chave da ElevenLabs não configurada. Adicione sua chave no Painel Admin.');
    }

    const cacheKey = `eleven_${voiceId}_${text.substring(0, 50)}`;
    if (this.audioCache.has(cacheKey)) {
      return this.audioCache.get(cacheKey)!;
    }

    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
      method: 'POST',
      headers: {
        'xi-api-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: text,
        model_id: 'eleven_multilingual_v2',
        voice_settings: {
          stability: 0.50,
          similarity_boost: 0.85,
          style: 0.35,
          use_speaker_boost: true,
        },
      }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({ detail: response.statusText }));
      throw new Error(err.detail?.message || err.detail || 'Erro ao gerar áudio com ElevenLabs');
    }

    const blob = await response.blob();
    const audioUrl = URL.createObjectURL(blob);
    this.audioCache.set(cacheKey, audioUrl);
    return audioUrl;
  }

  // -------------------------------------------------------------
  // 3. GERAÇÃO DE ROTEIROS BÍBLICOS COM IA (GPT-4o-mini)
  // Custo: $0,15 / 1M tokens in, $0,60 / 1M tokens out (~R$ 0,005 por livro!)
  // -------------------------------------------------------------
  public async generateBibleStoryScript(params: {
    theme: string;
    childName?: string;
    moralLesson: string;
    targetAge?: string;
    language?: 'pt' | 'en' | 'es';
  }): Promise<{
    title: string;
    subtitle: string;
    biblicalVerse: string;
    moralLesson: string;
    scenes: {
      title: string;
      narration: string;
      dialogues: { character: string; line: string }[];
    }[];
    quiz: { question: string; options: string[]; answer: number }[];
  }> {
    const apiKey = this.apiKeys.openaiApiKey;
    if (!apiKey) {
      throw new Error('Chave da OpenAI não configurada para geração de histórias.');
    }

    const prompt = `
Atue como o Diretor Geral de Produção Infantil do Toon Tales Kids (audiolivros bíblicos 3D de alta qualidade para crianças).
Gere uma aventura bíblica infantil completa sobre o tema: "${params.theme}".
Criança homenageada / ouvinte: "${params.childName || 'Amiguinho'}".
Lição moral: "${params.moralLesson}".
Idade recomendada: "${params.targetAge || '6 a 12 anos'}".
Idioma: "${params.language || 'pt'}".

Retorne EXATAMENTE um objeto JSON válido com a estrutura:
{
  "title": "Título da História",
  "subtitle": "Subtítulo da História",
  "biblicalVerse": "Livro Cap:Versículo",
  "moralLesson": "Lição de fé explicada com carinho",
  "scenes": [
    {
      "title": "Cena 1",
      "narration": "Texto da narradora",
      "dialogues": [
        { "character": "god", "line": "Fala solene de Deus" },
        { "character": "david", "line": "Fala do herói" }
      ]
    }
  ],
  "quiz": [
    {
      "question": "Pergunta sobre a história",
      "options": ["Opção A", "Opção B", "Opção C"],
      "answer": 0
    }
  ]
}
`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'Você é o motor criativo oficial do Toon Tales Kids. Gere apenas JSON puro.' },
          { role: 'user', content: prompt },
        ],
        response_format: { type: 'json_object' },
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({ error: { message: response.statusText } }));
      throw new Error(err.error?.message || 'Erro ao gerar história com GPT-4o-mini');
    }

    const data = await response.json();
    const content = data.choices[0]?.message?.content;
    return JSON.parse(content);
  }

  // -------------------------------------------------------------
  // 4. GERAÇÃO DE IMAGENS 3D PIXAR & LINE ART PARA COLORIR
  // Custo: $0 com Pollinations AI / FLUX.1
  // -------------------------------------------------------------
  public getGeneratedImageUrl(prompt: string, type: '3d_pixar' | 'line_art' = '3d_pixar'): string {
    const fullPrompt = type === '3d_pixar'
      ? `3D Pixar Disney style animated cute biblical scene, ${prompt}, vibrant rich colors, cinematic lighting, 8k render, masterpiece`
      : `Coloring book page for kids, black and white line art, clear thick outlines, flat vector style, white background, no shading, ${prompt}`;

    const encodedPrompt = encodeURIComponent(fullPrompt);
    return `https://image.pollinations.ai/prompt/${encodedPrompt}?width=800&height=800&nologo=true&seed=${Math.floor(Math.random() * 100000)}`;
  }
}

export const aiProductionService = new AiProductionService();
