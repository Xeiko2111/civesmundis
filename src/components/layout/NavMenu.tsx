import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { FacebookIcon, TwitterIcon } from '@/components/ui/SocialIcons'
import { heroImages, projectImages } from '@/lib/images'

interface NavMenuProps {
  open: boolean
  onClose: () => void
}

const easeElegant = [0.16, 1, 0.3, 1] as const

export function NavMenu({ open, onClose }: NavMenuProps) {
  const { t } = useLanguage()
  const [hovered, setHovered] = useState(0)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (open) {
      window.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
      setHovered(0)
    }
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  const items = [
    { label: t.nav.cooperacion, to: '/cooperacion', desc: t.pages.cooperacion.description, image: projectImages['agrokolda'] },
    { label: t.nav.repoblacion, to: '/repoblacion-e-innovacion', desc: t.pages.repoblacion.description, image: heroImages.fondoHueco },
    { label: t.nav.actualidad, to: '/actualidad', desc: t.pages.actualidad.description, image: heroImages.fondoMemorias },
    { label: t.nav.transparencia, to: '/transparencia', desc: t.pages.transparencia.description, image: heroImages.mundoBg },
    { label: t.nav.nosotrxs, to: '/nosotrxs', desc: t.pages.nosotrxs.description, image: heroImages.socios },
    { label: t.nav.contacto, to: '/contacto', desc: '', image: heroImages.fondo35anos },
  ]

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          animate={{ clipPath: 'inset(0 0 0% 0)' }}
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.7, ease: easeElegant }}
          className="fixed inset-0 z-[70] overflow-y-auto bg-ink-950 text-white"
        >
          <button
            onClick={onClose}
            aria-label={t.nav.cerrar}
            className="fixed right-6 top-7 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-orange hover:text-orange md:right-10 md:top-9"
          >
            <X size={18} />
          </button>

          <div className="container-page grid min-h-[100svh] grid-cols-1 items-center py-28 lg:grid-cols-12">
            <nav className="lg:col-span-7">
              {items.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: easeElegant }}
                  onMouseEnter={() => setHovered(i)}
                  className="group border-b border-white/10 py-4 md:py-5"
                >
                  <Link to={item.to} onClick={onClose} className="flex items-baseline gap-4 md:gap-6">
                    <span className="font-display text-sm text-white/30 transition-colors group-hover:text-orange-corp">
                      0{i + 1}
                    </span>
                    <span className="font-display text-[10vw] leading-[1.02] text-white/40 transition-colors duration-300 group-hover:text-white lg:text-[3.4vw]">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="relative mt-16 hidden aspect-[4/5] overflow-hidden rounded-sm lg:col-span-5 lg:mt-0 lg:block">
              <AnimatePresence mode="wait">
                <motion.img
                  key={hovered}
                  src={items[hovered].image}
                  alt=""
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: easeElegant }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/90 to-transparent p-8">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={hovered}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-xs text-sm text-white/70"
                  >
                    {items[hovered].desc}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="container-page flex flex-col gap-6 border-t border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-5">
              <LanguageSwitcher minimal />
              <ThemeToggle />
              <div className="flex gap-3">
                <a
                  href="https://facebook.com/civesmundi"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="text-white/50 transition-colors hover:text-orange"
                >
                  <FacebookIcon size={14} />
                </a>
                <a
                  href="https://twitter.com/ongcivesmundi"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                  className="text-white/50 transition-colors hover:text-orange"
                >
                  <TwitterIcon size={14} />
                </a>
              </div>
            </div>
            <p className="text-xs uppercase tracking-widest text-white/30">Eduardo Saavedra 38, Soria · +34 975 23 31 69</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
