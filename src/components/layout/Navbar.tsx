import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { NavMenu } from './NavMenu'
import { decor } from '@/lib/images'
import { useLanguage } from '@/i18n/LanguageContext'

/**
 * Navbar flotante: transparente sobre la cabecera oscura de cada página y,
 * al hacer scroll, se recoge en una cápsula de cristal (negro translúcido +
 * blur) para seguir siendo legible sobre cualquier fondo claro.
 */
export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { t } = useLanguage()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-5">
        <div
          className={`flex w-full max-w-6xl items-center justify-between transition-all duration-500 ${
            scrolled
              ? 'rounded-full border border-white/10 bg-ink-950/55 px-6 py-3 shadow-lg shadow-black/20 backdrop-blur-xl'
              : 'px-2 py-3'
          }`}
        >
          <Link to="/" className="relative z-10 flex items-center">
            <img src={decor.logoInverse} alt="Cives Mundi" className="h-9 w-auto md:h-10" />
          </Link>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <LanguageSwitcher minimal />
              <ThemeToggle />
            </div>

            <button
              onClick={() => setOpen(true)}
              data-cursor="MENÚ"
              className="group relative z-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white"
            >
              <span className="hidden sm:inline">{t.nav.menu}</span>
              <span className="flex h-8 w-8 flex-col items-center justify-center gap-[5px]">
                <span className="h-px w-5 bg-white transition-all duration-300 group-hover:w-6" />
                <span className="h-px w-5 bg-white transition-all duration-300" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <NavMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}
