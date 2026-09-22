import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import { StatFrame } from '@/components/ui/StatFrame'
import { globalStats } from '@/data/countries'
import { useLanguage } from '@/i18n/LanguageContext'

/**
 * Secuencia de estadísticas pinneada: los números se suceden a pantalla
 * completa mientras se hace scroll, en vez de tres tarjetas fijas.
 */
export function StickyStats() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const { t } = useLanguage()

  const stats = [
    { value: globalStats.countries, suffix: '+', label: t.global.countries },
    { value: globalStats.projects, suffix: '', label: t.global.projects },
    { value: globalStats.contrapartes, suffix: '+', label: t.global.contrapartes },
  ]

  const n = stats.length
  const pad = 0.08

  return (
    <section ref={ref} className="relative bg-ink-950 text-white" style={{ height: `${n * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {stats.map((stat, i) => {
          const start = i / n
          const end = (i + 1) / n
          const range: [number, number, number, number] = [start, start + pad / n, end - pad / n, end]
          return (
            <StatFrame key={stat.label} progress={scrollYProgress} range={range}>
              <span className="font-display text-[26vw] leading-none text-white md:text-[16vw]">
                {stat.value}
                <span className="text-orange-corp">{stat.suffix}</span>
              </span>
              <span className="mt-4 text-sm font-semibold uppercase tracking-[0.4em] text-white/60">{stat.label}</span>
            </StatFrame>
          )
        })}
      </div>
    </section>
  )
}
