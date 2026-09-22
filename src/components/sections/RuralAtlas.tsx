import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ruralInitiatives } from '@/data/projects'
import { getProjectImage } from '@/lib/images'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'

/**
 * "Atlas de innovación rural": las 12 iniciativas reales se recorren en
 * scroll horizontal dentro de un contenedor pinneado vertical, unidas por
 * una línea de tiempo continua — nunca una cuadrícula de tarjetas.
 */
export function RuralAtlas() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  const n = ruralInitiatives.length
  const panelWidth = 78 // vw por panel
  const trackWidth = n * panelWidth
  const x = useTransform(scrollYProgress, [0, 1], ['0vw', `-${trackWidth - 100}vw`])
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section ref={ref} className="relative bg-ink-950" style={{ height: `${n * 90}vh` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden pt-24">
        <div className="container-page mb-10 flex items-baseline justify-between">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-orange-corp">Atlas de innovación rural</p>
          <p className="hidden text-xs uppercase tracking-widest text-white/40 md:block">Desplázate para recorrer las 12 iniciativas</p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-white/10" />
          <motion.div
            style={{ scaleX: lineScale }}
            className="absolute left-0 top-1/2 h-px w-full origin-left -translate-y-1/2 bg-orange-corp/60"
          />

          <motion.div style={{ x }} className="flex w-max gap-16 pl-6 md:pl-[6vw]">
            {ruralInitiatives.map((initiative, i) => {
              const image = getProjectImage(initiative.image)
              return (
                <div
                  key={initiative.slug}
                  id={initiative.slug}
                  style={{ width: `${panelWidth}vw` }}
                  className="flex shrink-0 flex-col gap-8 md:flex-row md:items-center"
                >
                  <div className="md:w-1/2">
                    <span className="font-display text-sm text-orange-corp">{String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}</span>
                    <h2 className="mt-4 font-display text-4xl leading-[1.02] text-white md:text-5xl">{initiative.name}</h2>
                    <p className="mt-3 text-base text-orange-corp/90">{initiative.tagline}</p>
                    <p className="mt-6 max-w-md text-white/70">{initiative.description}</p>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden md:w-1/2">
                    {image ? (
                      <img src={image} alt={initiative.name} className="h-full w-full object-cover" />
                    ) : (
                      <PlaceholderImage label={initiative.name} />
                    )}
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
