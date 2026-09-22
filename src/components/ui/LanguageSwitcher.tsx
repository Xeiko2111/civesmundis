import clsx from 'clsx'
import { useLanguage } from '@/i18n/LanguageContext'

interface LanguageSwitcherProps {
  dark?: boolean
  minimal?: boolean
}

export function LanguageSwitcher({ dark, minimal }: LanguageSwitcherProps) {
  const { lang, setLang } = useLanguage()

  if (minimal) {
    return (
      <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-white" role="group" aria-label="ES / EN">
        {(['es', 'en'] as const).map((option, i) => (
          <span key={option} className="flex items-center gap-1.5">
            {i > 0 && <span className="opacity-40">/</span>}
            <button
              onClick={() => setLang(option)}
              aria-pressed={lang === option}
              className={clsx('transition-opacity', lang === option ? 'opacity-100' : 'opacity-40 hover:opacity-70')}
            >
              {option}
            </button>
          </span>
        ))}
      </div>
    )
  }

  return (
    <div
      className={clsx(
        'inline-flex items-center rounded-full border p-0.5 text-xs font-semibold tracking-wide',
        dark ? 'border-ink-200 text-ink-500' : 'border-white/30 text-white/70',
      )}
      role="group"
      aria-label="Selector de idioma / Language switcher"
    >
      {(['es', 'en'] as const).map((option) => (
        <button
          key={option}
          onClick={() => setLang(option)}
          aria-pressed={lang === option}
          className={clsx(
            'rounded-full px-2.5 py-1 uppercase transition-colors duration-300',
            lang === option ? (dark ? 'bg-ink-900 text-white' : 'bg-white text-ink-900') : 'hover:text-orange',
          )}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
