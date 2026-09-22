import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { heroImages } from '@/lib/images'
import { useLanguage } from '@/i18n/LanguageContext'

const easeElegant = [0.16, 1, 0.3, 1] as const

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const { t } = useLanguage()

  // La imagen entra ampliada y se aleja (zoom-out) mientras se hace scroll,
  // en vez de un simple parallax hacia arriba.
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.35, 1])
  const overlay = useTransform(scrollYProgress, [0, 1], [0.35, 0.85])
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const lines = t.hero.title.split(' ')

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[720px] w-full overflow-hidden bg-ink-950">
      <motion.div style={{ scale: imgScale }} className="absolute inset-0">
        <img
          src={heroImages.fondo35anos}
          alt="Niñas y niños de una comunidad con la que trabaja Cives Mundi"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <motion.div style={{ opacity: overlay }} className="absolute inset-0 bg-ink-950" />

      <motion.div style={{ y: titleY, opacity: titleOpacity }} className="absolute inset-0 flex flex-col justify-center">
        <div className="container-page">
          {lines.map((line, i) => (
            <div key={line} className="overflow-hidden">
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1, delay: 0.15 + i * 0.12, ease: easeElegant }}
                className="font-display text-[16vw] leading-[0.86] text-white md:text-[13vw]"
              >
                {line}
              </motion.h1>
            </div>
          ))}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: easeElegant }}
            className="mt-8 max-w-md text-lg text-white/70 md:text-xl"
          >
            {t.hero.tagline} <span className="text-white/40">{t.hero.subtitle}</span>
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute inset-x-0 bottom-0 mix-blend-difference"
      >
        <div className="container-page flex items-center justify-between py-8 text-[11px] font-semibold uppercase tracking-[0.3em] text-white">
          <span>{t.hero.eyebrow}</span>
          <span className="hidden sm:inline">Soria · España</span>
        </div>
      </motion.div>
    </section>
  )
}
