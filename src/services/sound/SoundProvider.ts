export interface SoundLicense {
  name: string;
  url: string;
  isCommercialSafe: boolean; // True for CC0 and CC BY
}

export interface SoundEffect {
  id: string;
  name: string;
  previewUrl: string;
  durationSec: number;
  license: SoundLicense;
  provider: 'freesound' | 'internal' | 'elevenlabs';
  tags?: string[];
}

export interface SoundProvider {
  /**
   * Search for sounds based on text query. Should filter for commercial safety if possible.
   */
  searchSounds(query: string, tags?: string[]): Promise<SoundEffect[]>;
  
  /**
   * Fetch full details for a specific sound ID
   */
  getSound(id: string): Promise<SoundEffect>;
}
