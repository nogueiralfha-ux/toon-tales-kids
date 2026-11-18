import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { SUPPORTED_LANGUAGES, Language } from '../i18n/translations';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LanguageSelectorProps {
  variant?: 'pill' | 'compact' | 'minimal';
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  variant = 'pill',
  className = '',
}) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentOption = SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      {/* Selector Trigger Button */}
      {variant === 'pill' && (
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-slate-800 text-xs font-black font-brand tracking-wider uppercase border-2 border-amber-300 hover:border-amber-400 shadow-xs hover:shadow-md transition-all active:scale-95 group"
          aria-label="Selecionar idioma / Select language"
        >
          <span className="text-base leading-none select-none">{currentOption.flag}</span>
          <span className="text-slate-800 font-extrabold">{currentOption.code.toUpperCase()}</span>
          <ChevronDown
            className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${
              isOpen ? 'rotate-180 text-orange-500' : 'group-hover:text-orange-500'
            }`}
          />
        </button>
      )}

      {variant === 'compact' && (
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-300 text-slate-800 text-sm font-bold shadow-xs active:scale-95 transition-all"
          aria-label="Idioma / Language"
        >
          <span className="text-base">{currentOption.flag}</span>
        </button>
      )}

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-48 rounded-2xl bg-white border-2 border-amber-200 shadow-xl shadow-slate-900/10 py-1.5 z-50 overflow-hidden ring-1 ring-black/5"
          >
            <div className="px-3 py-1.5 border-b border-amber-100 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-amber-900 bg-amber-50/60 font-brand">
              <Globe className="w-3 h-3 text-amber-600" />
              <span>Idioma • Language</span>
            </div>

            <div className="p-1 space-y-0.5">
              {SUPPORTED_LANGUAGES.map((option) => {
                const isSelected = option.code === language;
                return (
                  <button
                    key={option.code}
                    onClick={() => handleSelect(option.code)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs font-brand rounded-xl transition-all ${
                      isSelected
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white font-black shadow-xs'
                        : 'text-slate-700 hover:bg-amber-50 hover:text-orange-600 font-bold'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base leading-none">{option.flag}</span>
                      <span>{option.nativeName}</span>
                    </div>
                    {isSelected && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
