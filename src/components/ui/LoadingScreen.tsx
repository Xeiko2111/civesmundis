import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const easeElegant = [0.16, 1, 0.3, 1] as const

/**
 * Pantalla de carga minimal: wordmark + línea de progreso, sin partículas
 * ni efectos gaming. Se muestra una sola vez por sesión de navegador.
 */
export function LoadingScreen() {
  const [visible, setVisible] = useState(() => {
    try {
      return !sessionStorage.getItem('cm-loaded')
    } catch {
      return true
    }
  })

  useEffect(() => {
    if (!visible) return
    const timer = setTimeout(() => {
      setVisible(false)
      try {
        sessionStorage.setItem('cm-loaded', '1')
      } catch {
        // sessionStorage no disponible: se mostrará de nuevo, sin problema
      }
    }, 1400)
    return () => clearTimeout(timer)
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
          transition={{ duration: 0.7, ease: easeElegant }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.5em' }}
            animate={{ opacity: 1, letterSpacing: '0.15em' }}
            transition={{ duration: 1, ease: easeElegant }}
            className="font-display text-sm uppercase text-white/80"
          >
            Cives Mundi
          </motion.p>
          <div className="mt-6 h-px w-40 overflow-hidden bg-white/10">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 1.1, ease: easeElegant }}
              className="h-full w-full bg-orange"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
