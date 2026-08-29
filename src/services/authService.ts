export interface KidProfile {
  id: string;
  name: string;
  age: number;
  avatarType: string;
  avatarColor: string;
  favoriteCharacter: string;
  xp: number;
  completedEpisodes: string[];
}

export type PlanType = 'vitalicio' | 'familiar' | 'pessoal' | 'degustacao';

export interface UserAccount {
  id: string;
  name: string;
  email: string;
  password?: string;
  phone?: string;
  role: 'admin' | 'parent' | 'ambassador';
  plan: PlanType;
  planStatus: 'active' | 'pending' | 'expired';
  createdAt: string;
  expiresAt?: string;
  kids: KidProfile[];
  activeKidId: string;
  notes?: string;
}

const STORAGE_USERS_KEY = 'toontales_registered_users';
const STORAGE_CURRENT_USER_KEY = 'toontales_active_session';

// Master Admin Seed
const MASTER_ADMIN: UserAccount = {
  id: 'admin-master',
  name: 'Administrador Master',
  email: 'nogueiralfha@gmail.com',
  password: 'missionario405',
  phone: '5516997325572',
  role: 'admin',
  plan: 'vitalicio',
  planStatus: 'active',
  createdAt: '2026-08-29T00:00:00.000Z',
  kids: [
    {
      id: 'kid-default',
      name: 'Clara',
      age: 7,
      avatarType: 'esther',
      avatarColor: 'from-pink-500 to-rose-600',
      favoriteCharacter: 'david',
      xp: 1250,
      completedEpisodes: ['t1e1', 't1e2', 't2e5'],
    },
    {
      id: 'kid-2',
      name: 'Theo',
      age: 5,
      avatarType: 'david',
      avatarColor: 'from-amber-500 to-orange-600',
      favoriteCharacter: 'david',
      xp: 840,
      completedEpisodes: ['t2e5'],
    },
  ],
  activeKidId: 'kid-default',
  notes: 'Conta Mestre Principal Toon Tales Kids',
};

// Initial demo users
const INITIAL_DEMO_USERS: UserAccount[] = [
  MASTER_ADMIN,
  {
    id: 'user-01',
    name: 'Mariana Silva',
    email: 'mariana.silva@exemplo.com',
    phone: '5511988887777',
    role: 'parent',
    plan: 'vitalicio',
    planStatus: 'active',
    createdAt: '2026-08-28T14:30:00.000Z',
    kids: [
      {
        id: 'kid-mariana-1',
        name: 'Lucas',
        age: 8,
        avatarType: 'paul',
        avatarColor: 'from-blue-500 to-indigo-600',
        favoriteCharacter: 'paul',
        xp: 950,
        completedEpisodes: ['t1e1', 't2e5'],
      },
    ],
    activeKidId: 'kid-mariana-1',
  },
  {
    id: 'user-02',
    name: 'Pr. Rodrigo Mendes',
    email: 'rodrigo.mendes@exemplo.com',
    phone: '5541999998888',
    role: 'parent',
    plan: 'familiar',
    planStatus: 'active',
    createdAt: '2026-08-29T10:15:00.000Z',
    kids: [
      {
        id: 'kid-rodrigo-1',
        name: 'Sofia',
        age: 6,
        avatarType: 'mary',
        avatarColor: 'from-purple-500 to-pink-600',
        favoriteCharacter: 'jesus',
        xp: 620,
        completedEpisodes: ['t3e1'],
      },
    ],
    activeKidId: 'kid-rodrigo-1',
  },
];

export const authService = {
  getUsers(): UserAccount[] {
    try {
      const stored = localStorage.getItem(STORAGE_USERS_KEY);
      if (!stored) {
        localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(INITIAL_DEMO_USERS));
        return INITIAL_DEMO_USERS;
      }
      const users: UserAccount[] = JSON.parse(stored);
      // Ensure admin exists
      if (!users.some((u) => u.email.toLowerCase() === 'nogueiralfha@gmail.com')) {
        users.push(MASTER_ADMIN);
        localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));
      }
      return users;
    } catch {
      return INITIAL_DEMO_USERS;
    }
  },

  saveUsers(users: UserAccount[]) {
    try {
      localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));
    } catch {}
  },

  getCurrentUser(): UserAccount | null {
    try {
      const stored = localStorage.getItem(STORAGE_CURRENT_USER_KEY);
      if (!stored) {
        // Return default guest parent profile if not logged in
        return null;
      }
      return JSON.parse(stored);
    } catch {
      return null;
    }
  },

  setCurrentUser(user: UserAccount | null) {
    try {
      if (user) {
        localStorage.setItem(STORAGE_CURRENT_USER_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(STORAGE_CURRENT_USER_KEY);
      }
    } catch {}
  },

  login(email: string, password?: string): { success: boolean; user?: UserAccount; message?: string } {
    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password?.trim() || '';

    // Check Master Admin
    if (cleanEmail === 'nogueiralfha@gmail.com') {
      if (cleanPassword === 'missionario405') {
        this.setCurrentUser(MASTER_ADMIN);
        return { success: true, user: MASTER_ADMIN };
      } else {
        return { success: false, message: 'Senha de administrador incorreta.' };
      }
    }

    const users = this.getUsers();
    const found = users.find((u) => u.email.toLowerCase() === cleanEmail);

    if (!found) {
      return { success: false, message: 'E-mail não cadastrado. Crie sua conta gratuitamente!' };
    }

    if (found.password && cleanPassword && found.password !== cleanPassword) {
      return { success: false, message: 'Senha incorreta.' };
    }

    this.setCurrentUser(found);
    return { success: true, user: found };
  },

  register(data: {
    name: string;
    email: string;
    password?: string;
    phone?: string;
    kidName?: string;
    kidAge?: number;
    plan?: PlanType;
  }): { success: boolean; user?: UserAccount; message?: string } {
    const cleanEmail = data.email.trim().toLowerCase();
    const users = this.getUsers();

    if (users.some((u) => u.email.toLowerCase() === cleanEmail)) {
      return { success: false, message: 'Este e-mail já possui uma conta. Faça login!' };
    }

    const newKidId = 'kid-' + Date.now();
    const newKid: KidProfile = {
      id: newKidId,
      name: data.kidName?.trim() || 'Aventureiro',
      age: data.kidAge || 6,
      avatarType: 'david',
      avatarColor: 'from-amber-500 to-orange-600',
      favoriteCharacter: 'david',
      xp: 150,
      completedEpisodes: [],
    };

    const newUser: UserAccount = {
      id: 'user-' + Date.now(),
      name: data.name.trim(),
      email: cleanEmail,
      password: data.password || '123456',
      phone: data.phone || '',
      role: 'parent',
      plan: data.plan || 'vitalicio',
      planStatus: 'active',
      createdAt: new Date().toISOString(),
      kids: [newKid],
      activeKidId: newKidId,
    };

    users.push(newUser);
    this.saveUsers(users);
    this.setCurrentUser(newUser);

    return { success: true, user: newUser };
  },

  logout() {
    this.setCurrentUser(null);
  },

  updateUserPlan(userId: string, newPlan: PlanType, status: 'active' | 'pending' | 'expired' = 'active') {
    const users = this.getUsers();
    const updated = users.map((u) => {
      if (u.id === userId) {
        return { ...u, plan: newPlan, planStatus: status };
      }
      return u;
    });
    this.saveUsers(updated);

    const current = this.getCurrentUser();
    if (current && current.id === userId) {
      this.setCurrentUser({ ...current, plan: newPlan, planStatus: status });
    }
  },

  addKidProfile(userId: string, kid: Omit<KidProfile, 'id' | 'xp' | 'completedEpisodes'>): KidProfile | null {
    const users = this.getUsers();
    const user = users.find((u) => u.id === userId);
    if (!user) return null;

    const newKid: KidProfile = {
      ...kid,
      id: 'kid-' + Date.now(),
      xp: 0,
      completedEpisodes: [],
    };

    user.kids.push(newKid);
    this.saveUsers(users);

    const current = this.getCurrentUser();
    if (current && current.id === userId) {
      this.setCurrentUser({ ...user });
    }

    return newKid;
  },

  switchActiveKid(userId: string, kidId: string) {
    const users = this.getUsers();
    const user = users.find((u) => u.id === userId);
    if (!user) return;

    user.activeKidId = kidId;
    this.saveUsers(users);

    const current = this.getCurrentUser();
    if (current && current.id === userId) {
      this.setCurrentUser({ ...user });
    }
  },
};
