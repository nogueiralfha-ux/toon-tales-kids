import { SoundEffect, SoundProvider, SoundLicense } from './SoundProvider';

export class FreesoundProvider implements SoundProvider {
  private apiKey: string | undefined;
  private baseUrl = 'https://freesound.org/apiv2';

  constructor() {
    this.apiKey = process.env.FREESOUND_API_KEY;
  }

  private isCommercialSafe(licenseUrl: string): boolean {
    return licenseUrl.includes('creativecommons.org/publicdomain/zero') || 
           (licenseUrl.includes('creativecommons.org/licenses/by/') && !licenseUrl.includes('nc'));
  }

  private mapLicenseInfo(licenseUrl: string): SoundLicense {
    let name = 'Unknown License';
    if (licenseUrl.includes('zero')) name = 'CC0 (Public Domain)';
    else if (licenseUrl.includes('by/')) name = 'CC BY (Attribution)';
    else if (licenseUrl.includes('nc')) name = 'CC BY-NC (Non-Commercial)';

    return {
      name,
      url: licenseUrl,
      isCommercialSafe: this.isCommercialSafe(licenseUrl)
    };
  }

  async searchSounds(query: string, tags?: string[]): Promise<SoundEffect[]> {
    if (!this.apiKey) {
      console.warn('Freesound não configurado. Retornando biblioteca interna vazia de fallback.');
      return [];
    }

    // Force commercial-safe licenses at the API level
    // https://freesound.org/docs/api/resources_apiv2.html#text-search
    const licenseFilter = `license:"Creative Commons 0" OR license:"Attribution"`;
    let filter = `f=${licenseFilter}`;
    if (tags && tags.length > 0) {
      filter += ` tag:(${tags.join(' OR ')})`;
    }

    const fields = 'id,name,previews,duration,license,tags';
    const searchUrl = `${this.baseUrl}/search/text/?query=${encodeURIComponent(query)}&filter=${encodeURIComponent(licenseFilter)}&fields=${fields}&token=${this.apiKey}`;

    try {
      const response = await fetch(searchUrl);
      if (!response.ok) {
        throw new Error(`Freesound API Error: ${response.statusText}`);
      }

      const data = await response.json();
      
      const results: SoundEffect[] = [];
      for (const item of data.results) {
        results.push({
          id: String(item.id),
          name: item.name,
          previewUrl: item.previews['preview-hq-mp3'] || item.previews['preview-lq-mp3'],
          durationSec: item.duration,
          license: this.mapLicenseInfo(item.license),
          provider: 'freesound',
          tags: item.tags
        });
      }

      return results;
    } catch (error) {
      console.error('Erro na integração do Freesound:', error);
      return [];
    }
  }

  async getSound(id: string): Promise<SoundEffect> {
    if (!this.apiKey) {
      throw new Error('Freesound API Key not configured.');
    }

    const fields = 'id,name,previews,duration,license,tags';
    const url = `${this.baseUrl}/sounds/${id}/?fields=${fields}&token=${this.apiKey}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Freesound API Error: ${response.statusText}`);
    }

    const item = await response.json();
    return {
      id: String(item.id),
      name: item.name,
      previewUrl: item.previews['preview-hq-mp3'] || item.previews['preview-lq-mp3'],
      durationSec: item.duration,
      license: this.mapLicenseInfo(item.license),
      provider: 'freesound',
      tags: item.tags
    };
  }
}
