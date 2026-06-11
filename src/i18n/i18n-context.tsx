import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { STRINGS, type Dict, type Lang } from './strings';

const STORAGE_KEY = 'glossary-lang';

interface I18nValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  /** Strings for the active language. */
  t: Dict;
}

const I18nContext = createContext<I18nValue | null>(null);

function readLang(): Lang {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'vi' ? 'vi' : 'en';
  } catch {
    return 'en';
  }
}

function persist(lang: Lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* ignore */
  }
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => readLang());

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    persist(next);
    setLangState(next);
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => {
      const next = prev === 'en' ? 'vi' : 'en';
      persist(next);
      return next;
    });
  }, []);

  return (
    <I18nContext.Provider value={{ lang, setLang, toggleLang, t: STRINGS[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within <I18nProvider>');
  return ctx;
}
