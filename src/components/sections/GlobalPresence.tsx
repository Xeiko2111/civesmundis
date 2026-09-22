import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { countriesWorked } from '@/data/countries'
import { Reveal } from '@/components/ui/Reveal'
import { Marquee } from '@/components/ui/Marquee'
import { heroImages } from '@/lib/images'
import { useLanguage } from '@/i18n/LanguageContext'

/**
 * Presencia global sin cuadrícula de chips ni contadores repetidos (la
 * secuencia numérica ya vive en StickyStats): un marquee tipográfico a dos
 * velocidades con los países reales en los que trabaja Cives Mundi.
 */
export function GlobalPresence() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-blue-deep py-28 text-white md:py-40">
      <img src={heroImages.mundoBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-deep via-blue-deep/95 to-blue-deep" />

      <div className="container-page relative">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-corp">{t.global.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-display-md">{t.global.title}</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-white/70">{t.global.body}</p>
          </Reveal>
          <Reveal delay={0.3} className="mt-8">
            <Link
              to="/cooperacion#contrapartes"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-orange-corp"
            >
              {t.global.cta}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>

      <div className="relative mt-20 space-y-2 border-y border-white/10 py-6">
        <Marquee speed="slow" pauseOnHover={false}>
          {countriesWorked.map((country) => (
            <span key={country} className="mx-4 font-display text-4xl text-white/20 md:text-6xl">
              {country} <span className="text-orange-corp/40">·</span>
            </span>
          ))}
        </Marquee>
        <Marquee speed="normal" pauseOnHover={false} reverse>
          {countriesWorked
            .slice()
            .reverse()
            .map((country) => (
              <span key={country} className="mx-4 font-display text-4xl text-white/40 md:text-6xl">
                {country} <span className="text-orange-corp/50">·</span>
              </span>
            ))}
        </Marquee>
      </div>
    </section>
  )
}
