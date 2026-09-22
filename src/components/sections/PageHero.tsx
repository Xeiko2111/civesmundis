import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Reveal } from '@/components/ui/Reveal'

interface PageHeroProps {
  eyebrow: string
  title: string
  description?: string
  image?: string
}

const easeElegant = [0.16, 1, 0.3, 1] as const

/**
 * Cabecera interior con el mismo lenguaje cinematográfico del Hero de home:
 * zoom-out de imagen + título editorial en líneas reveladas por máscara,
 * en vez de un simple fade-in sobre una franja de altura fija.
 */
export function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.2, 1])
  const lines = title.split(' ')

  return (
    <section ref={ref} className="relative flex min-h-[72vh] items-end overflow-hidden bg-ink-950 pt-32">
      {image && (
        <>
          <motion.div style={{ scale: imgScale }} className="absolute inset-0">
            <img src={image} alt="" className="h-full w-full object-cover opacity-45" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/40" />
        </>
      )}
      <div className="container-page relative pb-20">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-corp">{eyebrow}</span>
        </Reveal>

        <div className="mt-5">
          {lines.map((line, i) => (
            <div key={line} className="overflow-hidden">
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, delay: 0.1 + i * 0.08, ease: easeElegant }}
                className="font-display text-[9vw] leading-[0.95] text-white md:text-display-lg"
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </div>

        {description && (
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-2xl text-lg text-white/70">{description}</p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
