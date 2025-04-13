
import React, { createContext, useState, ReactNode } from 'react';
import { translations, Translations } from '../locales/translations';

export type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<string>('fr'); // Français par défaut

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation '${key}' not found.`);
      return key;
    }
    return translations[key][language as keyof typeof translations[typeof key]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Export the useLanguage hook for backward compatibility
export { useLanguage } from '../hooks/useLanguageHook';
