import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, SUPPORTED_LANGUAGES, translations, TranslationKey } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey, defaultText?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'toontales_user_language';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language;
      if (saved && (saved === 'pt' || saved === 'en' || saved === 'es')) {
        return saved;
      }
      // Detecção de idioma do navegador do usuário
      const navLang = navigator.language.slice(0, 2).toLowerCase();
      if (navLang === 'es') return 'es';
      if (navLang === 'en') return 'en';
      return 'pt';
    } catch {
      return 'pt';
    }
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    } catch {
      // Ignora erro em ambientes restritos de storage
    }
  };

  useEffect(() => {
    try {
      document.documentElement.lang = language;
    } catch {
      // noop
    }
  }, [language]);

  const t = (key: TranslationKey, defaultText?: string): string => {
    const langDict = translations[language] || translations.pt;
    if (key in langDict) {
      return langDict[key];
    }
    const ptFallback = translations.pt[key];
    if (ptFallback) {
      return ptFallback;
    }
    return defaultText || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
