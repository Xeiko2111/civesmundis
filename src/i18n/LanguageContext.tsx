import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { translations, type Lang, type TranslationShape } from './translations'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
  t: TranslationShape
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'civesmundi-lang'

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'es'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'es' || stored === 'en') return stored
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // localStorage no disponible: seguimos sin persistir el idioma
    }
  }, [lang])

  const setLang = (next: Lang) => setLangState(next)
  const toggleLang = () => setLangState((prev) => (prev === 'es' ? 'en' : 'es'))

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, toggleLang, t: translations[lang] }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage debe usarse dentro de <LanguageProvider>')
  return ctx
}
