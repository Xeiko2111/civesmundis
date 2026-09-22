import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { heroImages, projectImages } from '@/lib/images'
import { useLanguage } from '@/i18n/LanguageContext'

const easeElegant = [0.16, 1, 0.3, 1] as const

/**
 * Accordion Gallery al estilo ReactBits: paneles redondeados en fila, con
 * pequeños huecos entre ellos; el panel activo se ensancha a color y muestra
 * su título con una barra vertical de acento, mientras los demás quedan
 * estrechos, en gris y oscurecidos.
 */
export function AccordionGallery() {
  const { t } = useLanguage()
  const [active, setActive] = useState(0)
  const [isFine, setIsFine] = useState(false)

  useEffect(() => {
    setIsFine(window.matchMedia('(hover: hover) and (pointer: fine)').matches)
  }, [])

  const areas = [
    {
      title: t.areas.cooperacionTitle,
      description: t.areas.cooperacionDesc,
      to: '/cooperacion',
      image: projectImages['agrokolda'],
    },
    {
      title: t.areas.repoblacionTitle,
      description: t.areas.repoblacionDesc,
      to: '/repoblacion-e-innovacion',
      image: heroImages.fondoHueco,
    },
    {
      title: t.areas.innovacionTitle,
      description: t.areas.innovacionDesc,
      to: '/repoblacion-e-innovacion',
      image: projectImages['pinares-lab'],
    },
  ]

  if (!isFine) {
    return (
      <div className="bg-ink-950 px-4 py-4">
        <div className="flex flex-col gap-3">
          {areas.map((area, i) => (
            <Link
              key={area.title}
              to={area.to}
              data-cursor="EXPLORAR"
              className="group relative flex min-h-[45vh] items-end overflow-hidden rounded-2xl bg-ink-900"
            >
              <img src={area.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="relative z-10 flex items-center gap-3 p-6">
                <span className="h-6 w-[3px] bg-orange-corp" />
                <span className="font-display text-xl font-semibold text-white">{area.title}</span>
              </div>
              <span className="absolute right-6 top-6 font-display text-xs text-orange-corp">0{i + 1}</span>
            </Link>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.p
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 max-w-xl px-2 text-white/60"
          >
            {areas[0].description}
          </motion.p>
        </AnimatePresence>
      </div>
    )
  }

  return (
    <section className="bg-ink-950 py-20 md:py-28">
      <div className="container-page">
        <div className="flex h-[62vh] min-h-[420px] max-h-[600px] w-full gap-3">
          {areas.map((area, i) => {
            const isActive = active === i
            return (
              <Link
                key={area.title}
                to={area.to}
                data-cursor="EXPLORAR"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                style={{ flexGrow: isActive ? 6 : 1, flexBasis: 0 }}
                className="group relative flex min-w-0 items-end overflow-hidden rounded-2xl bg-ink-900 transition-[flex-grow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                <img
                  src={area.image}
                  alt=""
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                    isActive ? 'scale-100 grayscale-0 brightness-100' : 'scale-105 grayscale brightness-[0.55]'
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500 ${
                    isActive ? 'from-black/75 via-black/10 to-transparent' : 'from-black/40 to-transparent'
                  }`}
                />

                <span className="absolute right-5 top-5 font-display text-xs text-orange-corp">0{i + 1}</span>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.4, delay: 0.2, ease: easeElegant }}
                      className="relative z-10 flex items-center gap-3 p-6 md:p-8"
                    >
                      <span className="h-6 w-[3px] shrink-0 bg-orange-corp" />
                      <span className="font-display text-lg font-semibold text-white md:text-2xl">{area.title}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Link>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={active}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: easeElegant }}
            className="mt-8 max-w-2xl text-white/60"
          >
            {areas[active].description}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  )
}
