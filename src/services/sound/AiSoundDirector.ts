import { SoundEffect, SoundProvider } from './SoundProvider';
import { FreesoundProvider } from './FreesoundProvider';

// We can add InternalLibraryProvider here in the future
export class AiSoundDirector {
  private providers: SoundProvider[] = [];

  constructor() {
    // Register available providers
    this.providers.push(new FreesoundProvider());
    // this.providers.push(new InternalLibraryProvider()); 
  }

  /**
   * Concept: The AI analyzes the scene text and extracts keywords like 'earthquake', 'water', 'trumpet'
   */
  private async analyzeSceneForSoundKeywords(sceneText: string): Promise<string[]> {
    // TODO: Connect to Gemini/OpenAI to analyze the text and return English keywords.
    // For now, this is a conceptual mock implementation:
    const keywords: string[] = [];
    const lower = sceneText.toLowerCase();
    if (lower.includes('luz')) keywords.push('trumpet');
    if (lower.includes('terra seca') || lower.includes('terremoto')) keywords.push('earthquake rumble');
    if (lower.includes('mares') || lower.includes('água')) keywords.push('ocean waves');
    if (lower.includes('muito bom')) keywords.push('fanfare');
    if (lower.includes('vazio') || lower.includes('escuro')) keywords.push('dark ambient tension');
    
    return keywords;
  }

  /**
   * Automates the entire process: Text -> AI Analysis -> Search -> Safe Audio Effects
   */
  public async scoreScene(sceneText: string): Promise<SoundEffect[]> {
    console.log(`[AI Sound Director] Analisando roteiro da cena...`);
    
    const keywords = await this.analyzeSceneForSoundKeywords(sceneText);
    if (keywords.length === 0) {
      console.log(`[AI Sound Director] Nenhum efeito sonoro dramático necessário para esta cena.`);
      return [];
    }

    const selectedEffects: SoundEffect[] = [];

    // Search across all registered providers
    for (const keyword of keywords) {
      console.log(`[AI Sound Director] Buscando sons para: "${keyword}"...`);
      for (const provider of this.providers) {
        const results = await provider.searchSounds(keyword);
        if (results && results.length > 0) {
          // AI automatically picks the first safe result
          const bestMatch = results[0];
          selectedEffects.push(bestMatch);
          console.log(`[AI Sound Director] ↳ Efeito selecionado: ${bestMatch.name} (Licença: ${bestMatch.license.name})`);
          break; // Stop searching other providers if we found a good match
        }
      }
    }

    return selectedEffects;
  }
}
