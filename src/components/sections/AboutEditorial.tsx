import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import { ScrollRevealWord } from '@/components/ui/ScrollRevealWord'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { heroImages } from '@/lib/images'
import { useLanguage } from '@/i18n/LanguageContext'

/**
 * Manifiesto: el párrafo institucional se "ilumina" palabra a palabra
 * mientras se hace scroll (pin + scroll-linked opacity), en vez de una
 * card de texto con foto al lado.
 */
export function AboutEditorial() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const { t } = useLanguage()

  const words = t.about.body.split(' ')

  return (
    <section ref={ref} className="relative bg-white" style={{ height: '260vh' }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="container-page">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-orange">{t.about.eyebrow}</span>

          <p className="mt-8 max-w-4xl font-display text-3xl leading-snug text-ink-900 md:text-5xl md:leading-tight">
            {words.map((word, i) => {
              const start = i / words.length
              const end = Math.min(start + 1.4 / words.length, 1)
              return <ScrollRevealWord key={i} word={word} progress={scrollYProgress} range={[start, end]} />
            })}
          </p>

          <div className="mt-14 flex flex-wrap items-center gap-4">
            <MagneticButton to="/nosotrxs">{t.hero.cta1}</MagneticButton>
            <MagneticButton to="/transparencia" variant="outline">
              {t.hero.cta2}
            </MagneticButton>
          </div>
        </div>

        <img
          src={heroImages.fondoHueco}
          alt="El Hueco, espacio de innovación social de Cives Mundi en Soria"
          className="pointer-events-none absolute right-6 top-1/2 hidden h-[55%] w-[30%] -translate-y-1/2 rounded-sm object-cover opacity-90 shadow-2xl lg:block"
        />
      </div>
    </section>
  )
}
