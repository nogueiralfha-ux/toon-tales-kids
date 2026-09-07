import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient';
import { authService, UserAccount, KidProfile, PlanType, AppModule } from '../services/authService';

export interface AuthContextType {
  user: UserAccount | null;
  session: any | null;
  activeKid: KidProfile | null;
  kids: KidProfile[];
  loading: boolean;
  isConfigured: boolean;
  signInParent: (email: string, password?: string) => Promise<{ success: boolean; message?: string }>;
  signUpParent: (data: {
    name: string;
    email: string;
    password?: string;
    phone?: string;
    kidName?: string;
    kidAge?: number;
    plan?: PlanType;
    modules?: AppModule[];
  }) => Promise<{ success: boolean; message?: string }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ success: boolean; message?: string }>;
  switchActiveChild: (kidId: string) => void;
  addChildProfile: (kid: Omit<KidProfile, 'id' | 'xp' | 'completedEpisodes'>) => KidProfile | null;
  updateChildXp: (amount: number, reason?: string) => void;
  markEpisodeCompletedForActiveChild: (episodeId: string) => void;
  hasModuleAccess: (module: AppModule) => boolean;
  updateUserPlan: (newPlan: PlanType, status?: 'active' | 'pending' | 'expired') => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserAccount | null>(() => authService.getCurrentUser());
  const [session, setSession] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const configured = isSupabaseConfigured();

  // Load active kid from user
  const activeKid: KidProfile | null =
    user && user.kids && user.kids.length > 0
      ? user.kids.find((k) => k.id === user.activeKidId) || user.kids[0]
      : null;

  const kids: KidProfile[] = user?.kids || [];

  // Initialize Supabase Auth listener
  useEffect(() => {
    let mounted = true;

    async function initAuth() {
      if (configured) {
        try {
          const { data, error } = await supabase.auth.getSession();
          if (!error && data?.session && mounted) {
            setSession(data.session);
            // If logged in via Supabase, attempt to sync/load user profile
            const sbUser = data.session.user;
            if (sbUser) {
              const localUser = authService.getCurrentUser();
              if (localUser && localUser.email.toLowerCase() === sbUser.email?.toLowerCase()) {
                setUser(localUser);
              } else {
                // Construct user account from Supabase Auth metadata
                const meta = sbUser.user_metadata || {};
                const defaultKid: KidProfile = {
                  id: 'kid-' + sbUser.id.substring(0, 8),
                  name: meta.kidName || 'Aventureiro',
                  age: meta.kidAge || 6,
                  avatarType: 'david',
                  avatarColor: 'from-amber-500 to-orange-600',
                  favoriteCharacter: 'david',
                  xp: 150,
                  completedEpisodes: [],
                };
                const newUserAcc: UserAccount = {
                  id: sbUser.id,
                  name: meta.name || sbUser.email?.split('@')[0] || 'Responsável',
                  email: sbUser.email || '',
                  role: 'parent',
                  plan: 'vitalicio',
                  planStatus: 'active',
                  unlockedModules: ['biblical', 'labkids', 'school'],
                  createdAt: sbUser.created_at || new Date().toISOString(),
                  kids: [defaultKid],
                  activeKidId: defaultKid.id,
                };
                setUser(newUserAcc);
                authService.setCurrentUser(newUserAcc);
              }
            }
          }
        } catch (err) {
          console.warn('[Supabase Auth] Session fetch notice:', err);
        }
      }

      // Fallback: check local storage session
      if (!user) {
        const local = authService.getCurrentUser();
        if (local && mounted) {
          setUser(local);
        }
      }

      if (mounted) {
        setLoading(false);
      }
    }

    initAuth();

    // Subscribe to auth state changes
    if (configured) {
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange(async (_event, newSession) => {
        if (!mounted) return;
        setSession(newSession);
        if (!newSession) {
          setUser(null);
          authService.logout();
        }
      });

      return () => {
        mounted = false;
        subscription.unsubscribe();
      };
    } else {
      setLoading(false);
      return () => {
        mounted = false;
      };
    }
  }, [configured]);

  // Sign In Parent
  const signInParent = async (email: string, password?: string): Promise<{ success: boolean; message?: string }> => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password?.trim() || '';

    // If Supabase is configured, authenticate with Supabase Auth
    if (configured && cleanPassword) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: cleanEmail,
          password: cleanPassword,
        });

        if (error) {
          // Fallback to local auth if Supabase user not found but exists locally
          const localRes = authService.login(cleanEmail, cleanPassword);
          if (localRes.success && localRes.user) {
            setUser(localRes.user);
            return { success: true };
          }
          return { success: false, message: error.message || 'Erro ao realizar login.' };
        }

        if (data.user) {
          setSession(data.session);
          const localUser = authService.login(cleanEmail, cleanPassword);
          if (localResIsValid(localUser)) {
            setUser(localUser.user!);
          } else {
            const meta = data.user.user_metadata || {};
            const defaultKid: KidProfile = {
              id: 'kid-' + data.user.id.substring(0, 8),
              name: meta.kidName || 'Aventureiro',
              age: meta.kidAge || 6,
              avatarType: 'david',
              avatarColor: 'from-amber-500 to-orange-600',
              favoriteCharacter: 'david',
              xp: 150,
              completedEpisodes: [],
            };
            const newUser: UserAccount = {
              id: data.user.id,
              name: meta.name || cleanEmail.split('@')[0],
              email: cleanEmail,
              role: cleanEmail === 'nogueiralfha@gmail.com' ? 'admin' : 'parent',
              plan: 'vitalicio',
              planStatus: 'active',
              unlockedModules: ['biblical', 'labkids', 'school'],
              createdAt: data.user.created_at,
              kids: [defaultKid],
              activeKidId: defaultKid.id,
            };
            setUser(newUser);
            authService.setCurrentUser(newUser);
          }
          return { success: true };
        }
      } catch (err: any) {
        console.warn('[Supabase Auth] Fallback to local auth:', err);
      }
    }

    // Default Local Auth Service
    const res = authService.login(cleanEmail, cleanPassword);
    if (res.success && res.user) {
      setUser(res.user);
      return { success: true };
    }
    return { success: false, message: res.message || 'E-mail ou senha incorretos.' };
  };

  function localResIsValid(res: { success: boolean; user?: UserAccount }) {
    return res.success && res.user;
  }

  // Sign Up Parent
  const signUpParent = async (data: {
    name: string;
    email: string;
    password?: string;
    phone?: string;
    kidName?: string;
    kidAge?: number;
    plan?: PlanType;
    modules?: AppModule[];
  }): Promise<{ success: boolean; message?: string }> => {
    const cleanEmail = data.email.trim().toLowerCase();
    const cleanPassword = data.password || '123456';

    if (configured) {
      try {
        const { data: authData, error } = await supabase.auth.signUp({
          email: cleanEmail,
          password: cleanPassword,
          options: {
            data: {
              name: data.name,
              phone: data.phone,
              kidName: data.kidName || 'Aventureiro',
              kidAge: data.kidAge || 6,
              plan: data.plan || 'vitalicio',
            },
          },
        });

        if (error && !error.message.includes('already registered')) {
          console.warn('[Supabase Auth SignUp Notice]:', error.message);
        }

        if (authData?.session) {
          setSession(authData.session);
        }
      } catch (err) {
        console.warn('[Supabase SignUp Error]:', err);
      }
    }

    // Register locally / in database
    const localRes = authService.register(data);
    if (localRes.success && localRes.user) {
      setUser(localRes.user);
      return { success: true };
    }

    return { success: false, message: localRes.message || 'Erro ao cadastrar.' };
  };

  // Sign Out
  const signOut = async () => {
    if (configured) {
      try {
        await supabase.auth.signOut();
      } catch (err) {
        console.warn('[Supabase SignOut Error]:', err);
      }
    }
    authService.logout();
    setUser(null);
    setSession(null);
  };

  // Reset Password
  const resetPassword = async (email: string): Promise<{ success: boolean; message?: string }> => {
    const cleanEmail = email.trim().toLowerCase();
    if (configured) {
      try {
        const { error } = await supabase.auth.resetPasswordForEmail(cleanEmail, {
          redirectTo: typeof window !== 'undefined' ? `${window.location.origin}/#reset-password` : undefined,
        });
        if (error) {
          return { success: false, message: error.message };
        }
        return { success: true, message: 'Link de redefinição enviado para seu e-mail!' };
      } catch (err: any) {
        return { success: false, message: err.message || 'Erro ao enviar e-mail de redefinição.' };
      }
    }
    return {
      success: true,
      message: 'Instruções de redefinição enviadas para seu e-mail (Modo demonstração).',
    };
  };

  // Switch Active Child
  const switchActiveChild = (kidId: string) => {
    if (!user) return;
    authService.switchActiveKid(user.id, kidId);
    setUser({ ...user, activeKidId: kidId });
  };

  // Add Child Profile
  const addChildProfile = (kid: Omit<KidProfile, 'id' | 'xp' | 'completedEpisodes'>): KidProfile | null => {
    if (!user) return null;
    const newKid = authService.addKidProfile(user.id, kid);
    if (newKid) {
      const updatedUser = authService.getCurrentUser();
      setUser(updatedUser);
    }
    return newKid;
  };

  // Update Child XP
  const updateChildXp = (amount: number) => {
    if (!user || !activeKid) return;
    const updatedKids = user.kids.map((k) => {
      if (k.id === activeKid.id) {
        return { ...k, xp: Math.max(0, k.xp + amount) };
      }
      return k;
    });
    const updatedUser = { ...user, kids: updatedKids };
    authService.saveUsers(
      authService.getUsers().map((u) => (u.id === user.id ? updatedUser : u))
    );
    authService.setCurrentUser(updatedUser);
    setUser(updatedUser);
  };

  // Mark Episode Completed For Active Child
  const markEpisodeCompletedForActiveChild = (episodeId: string) => {
    if (!user || !activeKid) return;
    if (activeKid.completedEpisodes.includes(episodeId)) return;

    const updatedEpisodes = [...activeKid.completedEpisodes, episodeId];
    const updatedKids = user.kids.map((k) => {
      if (k.id === activeKid.id) {
        return {
          ...k,
          completedEpisodes: updatedEpisodes,
          xp: k.xp + 100, // Recompensa padrão de conclusão
        };
      }
      return k;
    });

    const updatedUser = { ...user, kids: updatedKids };
    authService.saveUsers(
      authService.getUsers().map((u) => (u.id === user.id ? updatedUser : u))
    );
    authService.setCurrentUser(updatedUser);
    setUser(updatedUser);
  };

  // Check module access
  const hasModuleAccess = (module: AppModule): boolean => {
    return authService.hasModuleAccess(user, module);
  };

  // Update User Plan
  const updateUserPlan = (newPlan: PlanType, status: 'active' | 'pending' | 'expired' = 'active') => {
    if (!user) return;
    authService.updateUserPlan(user.id, newPlan, status);
    const updated = authService.getCurrentUser();
    setUser(updated);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        activeKid,
        kids,
        loading,
        isConfigured: configured,
        signInParent,
        signUpParent,
        signOut,
        resetPassword,
        switchActiveChild,
        addChildProfile,
        updateChildXp,
        markEpisodeCompletedForActiveChild,
        hasModuleAccess,
        updateUserPlan,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser utilizado dentro de um AuthProvider');
  }
  return context;
};
