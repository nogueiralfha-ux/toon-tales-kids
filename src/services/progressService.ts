import { supabase, isSupabaseConfigured } from '../lib/supabaseClient';

export interface ProgressData {
  episodeId: string;
  progressPercent: number;
  lastPositionSec: number;
  status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';
  completedAt?: string;
  lastPlayedAt?: string;
}

const STORAGE_PROGRESS_PREFIX = 'toontales_user_progress_';

// Debounce timer map
const debounceTimers: Record<string, any> = {};

export const progressService = {
  // Save progress with debounce
  saveProgress(
    userId: string,
    episodeId: string,
    progressPercent: number,
    lastPositionSec: number,
    forceImmediate: boolean = false
  ): Promise<boolean> {
    const key = `${userId}_${episodeId}`;
    const isCompleted = progressPercent >= 90;
    const status = isCompleted ? 'COMPLETED' : progressPercent > 0 ? 'IN_PROGRESS' : 'NOT_STARTED';

    // Update local cache immediately
    try {
      const localKey = `${STORAGE_PROGRESS_PREFIX}${userId}`;
      const existing: Record<string, ProgressData> = JSON.parse(localStorage.getItem(localKey) || '{}');
      existing[episodeId] = {
        episodeId,
        progressPercent,
        lastPositionSec,
        status,
        lastPlayedAt: new Date().toISOString(),
        completedAt: isCompleted ? (existing[episodeId]?.completedAt || new Date().toISOString()) : undefined,
      };
      localStorage.setItem(localKey, JSON.stringify(existing));
    } catch {}

    const executeSave = async (): Promise<boolean> => {
      // 1. Try Next.js API route
      try {
        const res = await fetch('/api/progress', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId,
            episodeId,
            progressPercent,
            lastPositionSec,
            status,
          }),
        });
        if (res.ok) return true;
      } catch {}

      // 2. Direct Supabase if configured
      if (isSupabaseConfigured()) {
        try {
          const { error } = await supabase.from('learning_progress').upsert(
            {
              userId,
              episodeId,
              progressPercent,
              lastPositionSec,
              status,
              lastPlayedAt: new Date().toISOString(),
              completedAt: isCompleted ? new Date().toISOString() : null,
            },
            { onConflict: 'userId,episodeId' }
          );
          if (!error) return true;
        } catch (err) {
          console.warn('[ProgressService] Supabase save notice:', err);
        }
      }

      return true;
    };

    if (forceImmediate) {
      if (debounceTimers[key]) clearTimeout(debounceTimers[key]);
      return executeSave();
    }

    return new Promise((resolve) => {
      if (debounceTimers[key]) clearTimeout(debounceTimers[key]);
      debounceTimers[key] = setTimeout(async () => {
        const ok = await executeSave();
        resolve(ok);
      }, 3000); // 3 seconds debounce
    });
  },

  // Get progress for a single episode
  async getEpisodeProgress(userId: string, episodeId: string): Promise<ProgressData | null> {
    // Check local cache
    try {
      const localKey = `${STORAGE_PROGRESS_PREFIX}${userId}`;
      const existing: Record<string, ProgressData> = JSON.parse(localStorage.getItem(localKey) || '{}');
      if (existing[episodeId]) {
        return existing[episodeId];
      }
    } catch {}

    if (isSupabaseConfigured()) {
      try {
        const { data, error } = await supabase
          .from('learning_progress')
          .select('*')
          .eq('userId', userId)
          .eq('episodeId', episodeId)
          .single();

        if (!error && data) {
          return {
            episodeId: data.episodeId,
            progressPercent: data.progressPercent,
            lastPositionSec: data.lastPositionSec,
            status: data.status,
            completedAt: data.completedAt,
            lastPlayedAt: data.lastPlayedAt,
          };
        }
      } catch {}
    }

    return null;
  },

  // Get all progress for a user
  async getUserProgress(userId: string): Promise<Record<string, ProgressData>> {
    let result: Record<string, ProgressData> = {};

    try {
      const localKey = `${STORAGE_PROGRESS_PREFIX}${userId}`;
      result = JSON.parse(localStorage.getItem(localKey) || '{}');
    } catch {}

    if (isSupabaseConfigured()) {
      try {
        const { data, error } = await supabase
          .from('learning_progress')
          .select('*')
          .eq('userId', userId);

        if (!error && data && data.length > 0) {
          data.forEach((item: any) => {
            result[item.episodeId] = {
              episodeId: item.episodeId,
              progressPercent: item.progressPercent,
              lastPositionSec: item.lastPositionSec,
              status: item.status,
              completedAt: item.completedAt,
              lastPlayedAt: item.lastPlayedAt,
            };
          });
        }
      } catch {}
    }

    return result;
  },
};
