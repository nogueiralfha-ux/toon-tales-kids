import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Resolve environment variables across Next.js (process.env) and Vite (import.meta.env)
const getEnvVar = (key: string, viteKey?: string): string => {
  // Check process.env (Next.js / Node.js)
  if (typeof process !== 'undefined' && process.env && process.env[key]) {
    return process.env[key] as string;
  }
  // Check import.meta.env (Vite)
  if (typeof import.meta !== 'undefined' && (import.meta as any).env) {
    if (viteKey && (import.meta as any).env[viteKey]) {
      return (import.meta as any).env[viteKey];
    }
    if ((import.meta as any).env[key]) {
      return (import.meta as any).env[key];
    }
  }
  // Check window.__ENV__ if injected dynamically
  if (typeof window !== 'undefined' && (window as any).__ENV__ && (window as any).__ENV__[key]) {
    return (window as any).__ENV__[key];
  }
  return '';
};

export const SUPABASE_URL =
  getEnvVar('NEXT_PUBLIC_SUPABASE_URL', 'VITE_SUPABASE_URL') ||
  'https://demo-toontales.supabase.co';

export const SUPABASE_ANON_KEY =
  getEnvVar('NEXT_PUBLIC_SUPABASE_ANON_KEY', 'VITE_SUPABASE_ANON_KEY') ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.dummy_anon_key_for_toontales_kids_preview';

export const isSupabaseConfigured = (): boolean => {
  return (
    SUPABASE_URL !== '' &&
    !SUPABASE_URL.includes('demo-toontales') &&
    SUPABASE_ANON_KEY !== '' &&
    !SUPABASE_ANON_KEY.includes('dummy_anon_key')
  );
};

// Create Supabase client singleton
export const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    storageKey: 'toontales_supabase_auth_token',
  },
});

export default supabase;
