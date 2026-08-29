import { AudioMixSettings, CharacterType, Scene, ScriptLine } from '../types';

class CinematicAudioEngine {
  private ctx: AudioContext | null = null;
  private isInitialized = false;

  // Master & Bus Gain Nodes
  private masterGain: GainNode | null = null;
  private voiceGain: GainNode | null = null;
  private musicGain: GainNode | null = null;
  private ambienceGain: GainNode | null = null;
  private sfxGain: GainNode | null = null;
  public analyser: AnalyserNode | null = null;

  // Active Soundscape Nodes
  private activeAmbienceOscillators: (OscillatorNode | AudioBufferSourceNode)[] = [];
  private activeMusicTimers: number[] = [];
  private currentAmbientType: string | null = null;
  private musicIntervalId: number | null = null;

  // Speech State
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private isSpeaking = false;
  private isPaused = false;
  private ptBrVoice: SpeechSynthesisVoice | null = null;

  // Settings
  private settings: AudioMixSettings = {
    master: 0.9,
    voice: 1.0,
    music: 0.20, // 15-25% as instructed in direction
    ambience: 0.35,
    sfx: 0.65,
    speechRate: 0.95,
    autoDucking: true,
    godVoiceReverb: true,
  };

  // Callbacks
  private onLineStartCallback: ((lineId: string, sceneId: number) => void) | null = null;
  private onLineEndCallback: ((lineId: string) => void) | null = null;
  private onPauseStartCallback: ((lineId: string, durationSec: number) => void) | null = null;
  private onPauseEndCallback: (() => void) | null = null;
  private onSceneChangeCallback: ((sceneId: number) => void) | null = null;
  private onPlaybackStateChangeCallback: ((isPlaying: boolean) => void) | null = null;
  private onEpisodeCompleteCallback: (() => void) | null = null;

  // Sequencer playback tracker
  private isPlayingEpisode = false;
  private currentSceneIndex = 0;
  private currentLineIndex = 0;
  private scenes: Scene[] = [];
  private pauseTimer: number | null = null;
  private currentPauseCompleteFn: (() => void) | null = null;
  private activeUtterances: Set<SpeechSynthesisUtterance> = new Set();

  constructor() {
    // Attempt voice discovery early
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const loadVoices = () => {
        this.selectBestVoice();
      };
      window.speechSynthesis.onvoiceschanged = loadVoices;
      loadVoices();
      // Retry voice load after short delay for Chromium
      window.setTimeout(loadVoices, 500);
      window.setTimeout(loadVoices, 1500);
    }
  }

  public initContext() {
    try {
      if (this.ctx && this.ctx.state !== 'closed') {
        if (this.ctx.state === 'suspended') {
          this.ctx.resume().catch(() => {});
        }
        return;
      }

      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;
      this.ctx = new AudioContextClass();

      if (this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }

      // Setup master routing tree
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.settings.master, this.ctx.currentTime);

      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 256;
      this.analyser.smoothingTimeConstant = 0.8;

      this.voiceGain = this.ctx.createGain();
      this.voiceGain.gain.setValueAtTime(this.settings.voice, this.ctx.currentTime);

      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.setValueAtTime(this.settings.music, this.ctx.currentTime);

      this.ambienceGain = this.ctx.createGain();
      this.ambienceGain.gain.setValueAtTime(this.settings.ambience, this.ctx.currentTime);

      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.setValueAtTime(this.settings.sfx, this.ctx.currentTime);

      // Connect buses to master -> analyser -> destination
      this.voiceGain.connect(this.masterGain);
      this.musicGain.connect(this.masterGain);
      this.ambienceGain.connect(this.masterGain);
      this.sfxGain.connect(this.masterGain);

      this.masterGain.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);

      this.isInitialized = true;
      this.selectBestVoice();
    } catch (e) {
      console.warn('AudioContext initialization note:', e);
    }
  }

  public testAudioSystem(): Promise<{ webAudio: boolean; speech: boolean }> {
    this.initContext();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }

    // Play instant pleasant musical fanfare
    this.playToonTalesOutroFanfare();

    return new Promise((resolve) => {
      let speechWorked = false;
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        try {
          window.speechSynthesis.cancel();
          window.speechSynthesis.resume();

          const testUtt = new SpeechSynthesisUtterance('Olá amiguinho! O som de Toon Tales Kids está funcionando!');
          testUtt.lang = 'pt-BR';
          if (this.ptBrVoice) testUtt.voice = this.ptBrVoice;
          testUtt.rate = 1.0;
          testUtt.pitch = 1.1;

          this.activeUtterances.add(testUtt);
          testUtt.onstart = () => {
            speechWorked = true;
          };
          testUtt.onend = () => {
            this.activeUtterances.delete(testUtt);
            resolve({ webAudio: true, speech: true });
          };
          testUtt.onerror = () => {
            this.activeUtterances.delete(testUtt);
            resolve({ webAudio: true, speech: false });
          };

          window.speechSynthesis.speak(testUtt);

          // Fallback timeout in case speech synth hangs
          setTimeout(() => {
            this.activeUtterances.delete(testUtt);
            resolve({ webAudio: true, speech: speechWorked });
          }, 3500);
        } catch {
          resolve({ webAudio: true, speech: false });
        }
      } else {
        resolve({ webAudio: true, speech: false });
      }
    });
  }

  private selectBestVoice() {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const voices = window.speechSynthesis.getVoices();
    // Prioritize natural PT-BR voices
    const ptVoices = voices.filter(v => v.lang.startsWith('pt') || v.lang.includes('BR') || v.lang.includes('pt-BR'));
    
    // Look for high quality modern Brazilian voices if available
    const premium = ptVoices.find(v => 
      v.name.includes('Google') || 
      v.name.includes('Natural') || 
      v.name.includes('Luciana') || 
      v.name.includes('Daniel') ||
      v.name.includes('Felipe') ||
      v.name.includes('Francisca') ||
      v.name.includes('Letícia')
    );

    this.ptBrVoice = premium || ptVoices[0] || voices[0] || null;
  }

  public updateSettings(newSettings: Partial<AudioMixSettings>) {
    this.settings = { ...this.settings, ...newSettings };
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    if (newSettings.master !== undefined && this.masterGain) {
      this.masterGain.gain.setTargetAtTime(this.settings.master, now, 0.1);
    }
    if (newSettings.voice !== undefined && this.voiceGain) {
      this.voiceGain.gain.setTargetAtTime(this.settings.voice, now, 0.1);
    }
    if (newSettings.music !== undefined && this.musicGain) {
      this.musicGain.gain.setTargetAtTime(this.settings.music, now, 0.1);
    }
    if (newSettings.ambience !== undefined && this.ambienceGain) {
      this.ambienceGain.gain.setTargetAtTime(this.settings.ambience, now, 0.1);
    }
    if (newSettings.sfx !== undefined && this.sfxGain) {
      this.sfxGain.gain.setTargetAtTime(this.settings.sfx, now, 0.1);
    }
  }

  public getSettings(): AudioMixSettings {
    return { ...this.settings };
  }

  // --- Dynamic Audio Ducking (Decreases music when speech is active) ---
  private duckMusic(duck: boolean) {
    if (!this.ctx || !this.musicGain || !this.settings.autoDucking) return;
    const now = this.ctx.currentTime;
    const target = duck ? this.settings.music * 0.45 : this.settings.music;
    this.musicGain.gain.setTargetAtTime(target, now, 0.25);
  }

  // --- Procedural Soundscape Generators ---
  public startSceneAtmosphere(scene: Scene) {
    this.initContext();
    if (!this.ctx || !this.ambienceGain || !this.musicGain) return;

    if (this.currentAmbientType === scene.ambientType) return;
    this.stopSceneAtmosphere();
    this.currentAmbientType = scene.ambientType;

    const now = this.ctx.currentTime;

    switch (scene.ambientType) {
      case 'deep_space':
        this.createDeepSpaceAmbience();
        this.startMusicChordLoop([55, 110, 164.81], 'sine', 6.0, 0.3);
        break;
      case 'ocean_waters':
        this.createOceanWavesAmbience(0.6);
        this.startMusicChordLoop([65.41, 130.81, 196.0, 261.63], 'triangle', 4.5, 0.35);
        break;
      case 'wind_sky':
        this.createWindSkyAmbience();
        this.startMusicChordLoop([174.61, 220.0, 261.63, 329.63], 'sine', 3.5, 0.4);
        break;
      case 'blooming_forest':
        this.createForestAmbience(true);
        this.startPastoralHarpLoop();
        break;
      case 'celestial_stars':
        this.createCelestialChimesAmbience();
        this.startMusicChordLoop([261.63, 329.63, 392.0, 493.88, 587.33], 'sine', 4.0, 0.45);
        break;
      case 'ocean_waves':
        this.createOceanWavesAmbience(0.8);
        this.startAquaticPlayLoop();
        break;
      case 'wildlife_forest':
        this.createForestAmbience(false);
        this.startAdventurePercussionLoop();
        break;
      case 'peaceful_garden':
        this.createGentleBreezeAmbience();
        this.startSacredPianoLoop();
        break;
      case 'triumphant_nature':
        this.createFullNatureAmbience();
        this.startTriumphantOrchestraLoop();
        break;
      case 'sabbath_peace':
        this.createGentleBreezeAmbience();
        this.startSabbathPeaceLoop();
        break;
      case 'warm_acoustic':
        this.createGentleBreezeAmbience();
        this.startWarmAcousticLoop();
        break;
      case 'toon_tales_jingle':
        this.playToonTalesOutroFanfare();
        break;
      default:
        this.createGentleBreezeAmbience();
        break;
    }
  }

  public stopSceneAtmosphere() {
    this.activeAmbienceOscillators.forEach(node => {
      try {
        node.stop();
        node.disconnect();
      } catch {
        // already stopped
      }
    });
    this.activeAmbienceOscillators = [];

    if (this.musicIntervalId) {
      window.clearInterval(this.musicIntervalId);
      this.musicIntervalId = null;
    }
    this.activeMusicTimers.forEach(id => window.clearTimeout(id));
    this.activeMusicTimers = [];
    this.currentAmbientType = null;
  }

  private createDeepSpaceAmbience() {
    if (!this.ctx || !this.ambienceGain) return;
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(48, this.ctx.currentTime);

    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(72, this.ctx.currentTime);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(140, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.35, this.ctx.currentTime);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.ambienceGain);

    osc1.start();
    osc2.start();
    this.activeAmbienceOscillators.push(osc1, osc2);
  }

  private createOceanWavesAmbience(intensity = 0.7) {
    if (!this.ctx || !this.ambienceGain) return;
    const bufferSize = this.ctx.sampleRate * 3;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let lastOut = 0.0;

    // Generate soothing pink noise
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (lastOut + 0.02 * white) / 1.02;
      lastOut = data[i];
      data[i] *= 3.5;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(320, this.ctx.currentTime);

    // LFO to simulate gentle ocean swell
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.frequency.setValueAtTime(0.18, this.ctx.currentTime); // Wave period ~5.5s
    lfoGain.gain.setValueAtTime(260, this.ctx.currentTime);

    lfo.connect(filter.frequency);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.4 * intensity, this.ctx.currentTime);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ambienceGain);

    noise.start();
    lfo.start();
    this.activeAmbienceOscillators.push(noise, lfo);
  }

  private createWindSkyAmbience() {
    if (!this.ctx || !this.ambienceGain) return;
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(450, this.ctx.currentTime);
    filter.Q.setValueAtTime(3.0, this.ctx.currentTime);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.25, this.ctx.currentTime);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ambienceGain);

    noise.start();
    this.activeAmbienceOscillators.push(noise);
  }

  private createForestAmbience(withBirds = true) {
    this.createWindSkyAmbience();
    if (withBirds) {
      // Periodically trigger birds chirping
      const birdTimer = window.setInterval(() => {
        if (this.currentAmbientType === 'blooming_forest' || this.currentAmbientType === 'triumphant_nature') {
          this.triggerBirdChirp();
        }
      }, 4000);
      this.musicIntervalId = birdTimer;
    }
  }

  private createCelestialChimesAmbience() {
    if (!this.ctx || !this.ambienceGain) return;
    this.createDeepSpaceAmbience();
    // Gentle periodic twinkle
    const chimesTimer = window.setInterval(() => {
      if (this.currentAmbientType === 'celestial_stars') {
        this.triggerStarChimes();
      }
    }, 3200);
    this.musicIntervalId = chimesTimer;
  }

  private createGentleBreezeAmbience() {
    this.createWindSkyAmbience();
  }

  private createFullNatureAmbience() {
    this.createOceanWavesAmbience(0.4);
    this.createForestAmbience(true);
  }

  // --- Musical Themes Loops ---
  private startMusicChordLoop(frequencies: number[], type: OscillatorType = 'sine', duration = 4.0, volume = 0.3) {
    if (!this.ctx || !this.musicGain) return;
    const playChord = () => {
      if (!this.ctx || !this.musicGain) return;
      const now = this.ctx.currentTime;
      const chordGain = this.ctx.createGain();
      chordGain.gain.setValueAtTime(0.001, now);
      chordGain.gain.linearRampToValueAtTime(volume, now + 1.2);
      chordGain.gain.linearRampToValueAtTime(0.001, now + duration - 0.2);
      chordGain.connect(this.musicGain);

      frequencies.forEach(f => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        osc.type = type;
        osc.frequency.setValueAtTime(f, now);
        osc.connect(chordGain);
        osc.start(now);
        osc.stop(now + duration);
      });
    };

    playChord();
    const interval = window.setInterval(playChord, duration * 1000 - 400);
    this.activeMusicTimers.push(interval);
  }

  private startPastoralHarpLoop() {
    // Gentle harp-like arpeggio (G Major: G3, B3, D4, G4, B4)
    const notes = [196.0, 246.94, 293.66, 392.0, 493.88];
    const playHarp = () => {
      notes.forEach((freq, idx) => {
        const timer = window.setTimeout(() => {
          this.playBellTone(freq, 1.8, 0.18);
        }, idx * 280);
        this.activeMusicTimers.push(timer);
      });
    };
    playHarp();
    const loop = window.setInterval(playHarp, 4800);
    this.activeMusicTimers.push(loop);
  }

  private startAquaticPlayLoop() {
    // Playful pentatonic pattern (C Major: C4, D4, E4, G4, A4)
    const notes = [261.63, 293.66, 329.63, 392.0, 440.0];
    const playAqua = () => {
      notes.forEach((freq, idx) => {
        const timer = window.setTimeout(() => {
          this.playBellTone(freq, 1.2, 0.15);
        }, idx * 220);
        this.activeMusicTimers.push(timer);
      });
    };
    playAqua();
    const loop = window.setInterval(playAqua, 3800);
    this.activeMusicTimers.push(loop);
  }

  private startAdventurePercussionLoop() {
    // Gentle rhythmic wood-chime pulse & joyful melody
    const notes = [220.0, 261.63, 329.63, 392.0];
    const playTheme = () => {
      notes.forEach((freq, idx) => {
        const timer = window.setTimeout(() => {
          this.playBellTone(freq, 1.4, 0.2);
        }, idx * 300);
        this.activeMusicTimers.push(timer);
      });
    };
    playTheme();
    const loop = window.setInterval(playTheme, 4200);
    this.activeMusicTimers.push(loop);
  }

  private startSacredPianoLoop() {
    // Deep sacred piano/strings chord (F maj9 -> C maj7)
    this.startMusicChordLoop([174.61, 220.0, 261.63, 329.63, 392.0], 'triangle', 5.5, 0.35);
  }

  private startTriumphantOrchestraLoop() {
    // Full harmonic glory
    this.startMusicChordLoop([130.81, 196.0, 261.63, 329.63, 392.0, 523.25], 'sine', 6.0, 0.45);
  }

  private startSabbathPeaceLoop() {
    // Peaceful rest chord (C maj9)
    this.startMusicChordLoop([130.81, 196.0, 246.94, 293.66, 329.63], 'sine', 7.0, 0.3);
  }

  private startWarmAcousticLoop() {
    // Warm chords (G -> Em -> C -> D)
    const chords = [
      [196.0, 246.94, 293.66, 392.0],
      [164.81, 196.0, 246.94, 329.63],
      [130.81, 164.81, 196.0, 261.63],
      [146.83, 220.0, 293.66, 369.99],
    ];
    let chordIdx = 0;
    const playNextChord = () => {
      if (!this.ctx || !this.musicGain) return;
      const notes = chords[chordIdx % chords.length];
      chordIdx++;
      notes.forEach((freq, idx) => {
        const timer = window.setTimeout(() => {
          this.playBellTone(freq, 2.2, 0.22);
        }, idx * 180);
        this.activeMusicTimers.push(timer);
      });
    };
    playNextChord();
    const loop = window.setInterval(playNextChord, 3200);
    this.activeMusicTimers.push(loop);
  }

  // --- Sound Effects & Foley Generator ---
  public triggerSoundEffect(sfxId: string) {
    this.initContext();
    if (!this.ctx || !this.sfxGain) return;

    switch (sfxId) {
      case 'light_burst':
        this.playLightBurst();
        break;
      case 'water_waves':
      case 'ocean_splash':
        this.playOceanSplash();
        break;
      case 'wind_sky':
        this.playWindGust();
        break;
      case 'nature_bloom':
        this.playNatureBloom();
        break;
      case 'star_chimes':
        this.triggerStarChimes();
        break;
      case 'birds_chirping':
        this.triggerBirdChirp();
        break;
      case 'lion_roar':
        this.playLionRoar();
        break;
      case 'horse_gallop':
        this.playHorseGallop();
        break;
      case 'celestial_harmony':
        this.playCelestialHarmony();
        break;
      case 'toon_tales_jingle':
        this.playToonTalesOutroFanfare();
        break;
      default:
        this.playBellTone(523.25, 1.5, 0.3);
        break;
    }
  }

  private playBellTone(freq: number, duration = 1.5, volume = 0.25) {
    if (!this.ctx || !this.sfxGain) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(volume, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + duration);
  }

  private playLightBurst() {
    if (!this.ctx || !this.sfxGain) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(1320, now + 1.8);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(300, now);
    filter.frequency.exponentialRampToValueAtTime(4500, now + 1.8);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.65, now + 1.0);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.8);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 2.8);

    // Complementary sparkle cascade
    [659.25, 880.0, 1046.5, 1318.51, 1567.98].forEach((f, idx) => {
      window.setTimeout(() => this.playBellTone(f, 2.0, 0.25), 800 + idx * 140);
    });
  }

  private playOceanSplash() {
    if (!this.ctx || !this.sfxGain) return;
    const now = this.ctx.currentTime;
    const bufferSize = this.ctx.sampleRate * 1.2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.25));
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(750, now);
    filter.frequency.exponentialRampToValueAtTime(280, now + 0.9);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    noise.start(now);
  }

  private playWindGust() {
    if (!this.ctx || !this.sfxGain) return;
    const now = this.ctx.currentTime;
    const bufferSize = this.ctx.sampleRate * 2.0;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(250, now);
    filter.frequency.linearRampToValueAtTime(650, now + 1.0);
    filter.frequency.linearRampToValueAtTime(200, now + 2.0);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.05, now);
    gain.gain.linearRampToValueAtTime(0.45, now + 0.9);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 2.0);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    noise.start(now);
  }

  private playNatureBloom() {
    [329.63, 392.0, 493.88, 587.33, 659.25, 783.99].forEach((f, i) => {
      window.setTimeout(() => this.playBellTone(f, 1.8, 0.2), i * 160);
    });
  }

  private triggerStarChimes() {
    const chimes = [783.99, 880.0, 987.77, 1174.66, 1318.51, 1567.98];
    for (let i = 0; i < 4; i++) {
      const freq = chimes[Math.floor(Math.random() * chimes.length)];
      window.setTimeout(() => {
        this.playBellTone(freq, 1.6, 0.2);
      }, i * 200);
    }
  }

  private triggerBirdChirp() {
    if (!this.ctx || !this.sfxGain) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(2200, now);
    osc.frequency.linearRampToValueAtTime(3200, now + 0.08);
    osc.frequency.linearRampToValueAtTime(2400, now + 0.16);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.25);
  }

  private playLionRoar() {
    if (!this.ctx || !this.sfxGain) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(80, now);
    osc.frequency.linearRampToValueAtTime(110, now + 0.5);
    osc.frequency.exponentialRampToValueAtTime(65, now + 1.8);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(220, now);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.4, now + 0.4);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 2.0);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 2.0);
  }

  private playHorseGallop() {
    [0, 150, 300, 600, 750, 900].forEach(delay => {
      window.setTimeout(() => {
        if (!this.ctx || !this.sfxGain) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.exponentialRampToValueAtTime(60, now + 0.08);

        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(now);
        osc.stop(now + 0.1);
      }, delay);
    });
  }

  private playCelestialHarmony() {
    [261.63, 329.63, 392.0, 523.25, 659.25].forEach(f => {
      this.playBellTone(f, 3.5, 0.25);
    });
  }

  public playToonTalesOutroFanfare() {
    // Joyful iconic fanfare for Toon Tales Kids (C - E - G - B - C5 - G5 with sparkles)
    const fanfareNotes = [261.63, 329.63, 392.0, 493.88, 523.25, 783.99];
    fanfareNotes.forEach((f, idx) => {
      window.setTimeout(() => {
        this.playBellTone(f, 2.2, 0.35);
      }, idx * 160);
    });
    window.setTimeout(() => {
      this.triggerStarChimes();
    }, 1100);
  }

  // --- Voice Synthesis Engine (PT-BR) ---
  public getAvailablePtVoices(): SpeechSynthesisVoice[] {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return [];
    const voices = window.speechSynthesis.getVoices();
    return voices.filter(v => v.lang.toLowerCase().startsWith('pt') || v.lang.toLowerCase().includes('br'));
  }

  private getBestVoiceForCharacter(character: CharacterType): SpeechSynthesisVoice | null {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return null;

    const ptVoices = voices.filter(v => 
      v.lang.toLowerCase().startsWith('pt') || 
      v.lang.toLowerCase().includes('br') || 
      v.lang.toLowerCase().includes('portuguese')
    );

    if (ptVoices.length === 0) {
      return null;
    }

    // Try finding specific voice characteristics
    if (character === 'god') {
      const maleVoice = ptVoices.find(v => 
        v.name.toLowerCase().includes('daniel') || 
        v.name.toLowerCase().includes('felipe') || 
        v.name.toLowerCase().includes('jorge') ||
        v.name.toLowerCase().includes('male') ||
        v.name.toLowerCase().includes('homem')
      );
      if (maleVoice) return maleVoice;
    }

    if (character === 'child') {
      const childFriendlyVoice = ptVoices.find(v => 
        v.name.toLowerCase().includes('luciana') || 
        v.name.toLowerCase().includes('letícia') || 
        v.name.toLowerCase().includes('maria') ||
        v.name.toLowerCase().includes('francisca') ||
        v.name.toLowerCase().includes('female') ||
        v.name.toLowerCase().includes('mulher')
      );
      if (childFriendlyVoice) return childFriendlyVoice;
    }

    // Preferred natural Portuguese voice
    const premiumVoice = ptVoices.find(v => 
      v.name.includes('Google') || 
      v.name.includes('Natural') || 
      v.name.includes('Luciana') || 
      v.name.includes('Daniel')
    );

    return premiumVoice || ptVoices[0];
  }

  public speakLine(
    line: ScriptLine,
    onComplete?: () => void
  ) {
    this.initContext();

    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      if (onComplete) onComplete();
      return;
    }

    this.duckMusic(true);
    this.isSpeaking = true;

    // Trigger associated sound cue if defined
    if (line.soundCue) {
      if (line.soundCue.includes('luz')) this.triggerSoundEffect('light_burst');
      else if (line.soundCue.includes('estrela')) this.triggerSoundEffect('star_chimes');
      else if (line.soundCue.includes('folha') || line.soundCue.includes('planta')) this.triggerSoundEffect('nature_bloom');
      else if (line.soundCue.includes('pássaro') || line.soundCue.includes('asa')) this.triggerSoundEffect('birds_chirping');
      else if (line.soundCue.includes('peixe') || line.soundCue.includes('splash')) this.triggerSoundEffect('ocean_splash');
      else if (line.soundCue.includes('animal') || line.soundCue.includes('leão')) this.triggerSoundEffect('lion_roar');
      else if (line.soundCue.includes('brilho')) this.triggerSoundEffect('toon_tales_jingle');
    }

    const cleanText = line.text.replace(/\[.*?\]/g, '').trim();

    const executeSpeak = () => {
      if (!this.isPlayingEpisode && !this.isSpeaking) return;

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'pt-BR';

      const characterVoice = this.getBestVoiceForCharacter(line.character);
      if (characterVoice) {
        utterance.voice = characterVoice;
        utterance.lang = characterVoice.lang || 'pt-BR';
      }

      // Configure distinct acoustic personality per character within safe browser bounds
      switch (line.character) {
        case 'narrator':
          utterance.pitch = 1.0;
          utterance.rate = Math.max(0.85, Math.min(1.2, this.settings.speechRate * 0.95));
          utterance.volume = this.settings.voice;
          break;
        case 'god':
          utterance.pitch = 0.85; // Deep & reverent
          utterance.rate = Math.max(0.80, Math.min(1.1, this.settings.speechRate * 0.88));
          utterance.volume = Math.min(1.0, this.settings.voice * 1.1);
          if (this.settings.godVoiceReverb) {
            this.playBellTone(130.81, 3.2, 0.18);
          }
          break;
        case 'child':
        case 'metusalem':
          utterance.pitch = 1.25; // Cheerful bright child formant
          utterance.rate = Math.max(0.9, Math.min(1.25, this.settings.speechRate * 1.05));
          utterance.volume = this.settings.voice;
          break;
        case 'enoque':
        case 'paulo':
          utterance.pitch = 0.95;
          utterance.rate = Math.max(0.85, Math.min(1.15, this.settings.speechRate * 0.96));
          utterance.volume = this.settings.voice;
          break;
        default:
          utterance.pitch = 1.0;
          utterance.rate = Math.max(0.85, Math.min(1.2, this.settings.speechRate));
          utterance.volume = this.settings.voice;
          break;
      }

      this.activeUtterances.add(utterance);

      let isLineFinished = false;
      let safetyWatchdog: number | null = null;
      let keepAliveTimer: number | null = null;

      const handleSpeechDone = () => {
        if (isLineFinished) return;
        isLineFinished = true;

        if (safetyWatchdog) {
          window.clearTimeout(safetyWatchdog);
          safetyWatchdog = null;
        }
        if (keepAliveTimer) {
          window.clearInterval(keepAliveTimer);
          keepAliveTimer = null;
        }

        this.activeUtterances.delete(utterance);
        this.isSpeaking = false;
        this.duckMusic(false);

        // Handle pause duration specified by script
        const pauseSec = line.pauseSeconds || 1.0;
        if (this.onPauseStartCallback) {
          this.onPauseStartCallback(line.id, pauseSec);
        }

        const finishPause = () => {
          if (this.pauseTimer) {
            window.clearTimeout(this.pauseTimer);
            this.pauseTimer = null;
          }
          this.currentPauseCompleteFn = null;
          if (this.onPauseEndCallback) this.onPauseEndCallback();
          if (this.onLineEndCallback) this.onLineEndCallback(line.id);
          if (onComplete) onComplete();
        };

        this.currentPauseCompleteFn = finishPause;
        this.pauseTimer = window.setTimeout(finishPause, pauseSec * 1000);
      };

      utterance.onend = () => {
        handleSpeechDone();
      };

      utterance.onerror = (e) => {
        const errType = (e as SpeechSynthesisErrorEvent)?.error;
        if (errType === 'interrupted' || errType === 'canceled') {
          // If cancelled intentionally because episode was paused/stopped, don't auto-advance
          if (!this.isPlayingEpisode || this.isPaused) {
            isLineFinished = true;
            this.activeUtterances.delete(utterance);
            this.isSpeaking = false;
            this.duckMusic(false);
            return;
          }
        }
        // If error occurred while playing, wait 1.2s before advancing to maintain narrative pacing
        window.setTimeout(() => {
          handleSpeechDone();
        }, 1200);
      };

      this.currentUtterance = utterance;

      try {
        window.speechSynthesis.resume();
        window.speechSynthesis.speak(utterance);

        // Chrome keep-alive pulse every 9 seconds for long paragraphs
        keepAliveTimer = window.setInterval(() => {
          if (!window.speechSynthesis.speaking) {
            if (keepAliveTimer) window.clearInterval(keepAliveTimer);
            return;
          }
          window.speechSynthesis.pause();
          window.speechSynthesis.resume();
        }, 9000);

        // Generous safety duration watchdog based on word count
        const wordCount = cleanText.split(/\s+/).length;
        const estimatedMs = Math.max(4000, wordCount * 650 + 5000);
        safetyWatchdog = window.setTimeout(() => {
          if (!isLineFinished) {
            handleSpeechDone();
          }
        }, estimatedMs);
      } catch {
        window.setTimeout(handleSpeechDone, 2000);
      }
    };

    // If speech synthesis is currently active or pending, clear safely before starting
    if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
      window.speechSynthesis.cancel();
      window.setTimeout(executeSpeak, 60);
    } else {
      executeSpeak();
    }
  }

  public skipCurrentPause() {
    if (this.currentPauseCompleteFn) {
      this.currentPauseCompleteFn();
    }
  }

  public cancelSpeech() {
    if (this.pauseTimer) {
      window.clearTimeout(this.pauseTimer);
      this.pauseTimer = null;
    }
    this.currentPauseCompleteFn = null;
    if (this.onPauseEndCallback) {
      this.onPauseEndCallback();
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    this.isSpeaking = false;
    this.duckMusic(false);
  }

  // --- Episode Playback Sequencer ---
  public startEpisode(
    scenes: Scene[],
    startSceneIndex = 0,
    startLineIndex = 0,
    callbacks?: {
      onLineStart?: (lineId: string, sceneId: number) => void;
      onLineEnd?: (lineId: string) => void;
      onPauseStart?: (lineId: string, durationSec: number) => void;
      onPauseEnd?: () => void;
      onSceneChange?: (sceneId: number) => void;
      onPlaybackStateChange?: (isPlaying: boolean) => void;
      onEpisodeComplete?: () => void;
    }
  ) {
    this.initContext();
    this.scenes = scenes;
    this.currentSceneIndex = startSceneIndex;
    this.currentLineIndex = startLineIndex;

    if (callbacks) {
      this.onLineStartCallback = callbacks.onLineStart || null;
      this.onLineEndCallback = callbacks.onLineEnd || null;
      this.onPauseStartCallback = callbacks.onPauseStart || null;
      this.onPauseEndCallback = callbacks.onPauseEnd || null;
      this.onSceneChangeCallback = callbacks.onSceneChange || null;
      this.onPlaybackStateChangeCallback = callbacks.onPlaybackStateChange || null;
      this.onEpisodeCompleteCallback = callbacks.onEpisodeComplete || null;
    }

    this.isPlayingEpisode = true;
    this.isPaused = false;
    if (this.onPlaybackStateChangeCallback) {
      this.onPlaybackStateChangeCallback(true);
    }

    this.playCurrentStep();
  }

  private playCurrentStep() {
    if (!this.isPlayingEpisode || this.isPaused) return;

    if (this.currentSceneIndex >= this.scenes.length) {
      this.isPlayingEpisode = false;
      this.stopSceneAtmosphere();
      if (this.onPlaybackStateChangeCallback) {
        this.onPlaybackStateChangeCallback(false);
      }
      if (this.onEpisodeCompleteCallback) {
        this.onEpisodeCompleteCallback();
      }
      return;
    }

    const currentScene = this.scenes[this.currentSceneIndex];
    if (this.currentLineIndex === 0) {
      this.startSceneAtmosphere(currentScene);
      if (this.onSceneChangeCallback) {
        this.onSceneChangeCallback(currentScene.id);
      }
    }

    if (this.currentLineIndex >= currentScene.lines.length) {
      // Advance to next scene
      this.currentSceneIndex++;
      this.currentLineIndex = 0;
      const sceneTransitionTimer = window.setTimeout(() => {
        this.playCurrentStep();
      }, 1500);
      this.activeMusicTimers.push(sceneTransitionTimer);
      return;
    }

    const currentLine = currentScene.lines[this.currentLineIndex];
    if (this.onLineStartCallback) {
      this.onLineStartCallback(currentLine.id, currentScene.id);
    }

    this.speakLine(currentLine, () => {
      if (!this.isPlayingEpisode || this.isPaused) return;
      this.currentLineIndex++;
      this.playCurrentStep();
    });
  }

  public pauseEpisode() {
    this.isPaused = true;
    this.cancelSpeech();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.pause();
    }
    if (this.onPlaybackStateChangeCallback) {
      this.onPlaybackStateChangeCallback(false);
    }
  }

  public resumeEpisode() {
    if (!this.isPlayingEpisode) return;
    this.isPaused = false;
    if (this.onPlaybackStateChangeCallback) {
      this.onPlaybackStateChangeCallback(true);
    }
    this.playCurrentStep();
  }

  public stopEpisode() {
    this.isPlayingEpisode = false;
    this.isPaused = false;
    this.cancelSpeech();
    this.stopSceneAtmosphere();
    if (this.onPlaybackStateChangeCallback) {
      this.onPlaybackStateChangeCallback(false);
    }
  }

  public jumpToScene(sceneIndex: number) {
    this.cancelSpeech();
    this.currentSceneIndex = Math.max(0, Math.min(sceneIndex, this.scenes.length - 1));
    this.currentLineIndex = 0;
    if (this.isPlayingEpisode) {
      this.playCurrentStep();
    } else {
      if (this.scenes[this.currentSceneIndex]) {
        this.startSceneAtmosphere(this.scenes[this.currentSceneIndex]);
        if (this.onSceneChangeCallback) {
          this.onSceneChangeCallback(this.scenes[this.currentSceneIndex].id);
        }
      }
    }
  }

  public getPlaybackStatus() {
    return {
      isPlaying: this.isPlayingEpisode && !this.isPaused,
      isPaused: this.isPaused,
      currentSceneIndex: this.currentSceneIndex,
      currentLineIndex: this.currentLineIndex,
    };
  }
}

export const audioEngine = new CinematicAudioEngine();
