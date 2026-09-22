import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const easeElegant = [0.16, 1, 0.3, 1] as const

/**
 * Transición de página premium (~650ms): combinación de clip-path, escala
 * sutil y blur, en vez de un simple fade + translateY.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, scale: 1.015, filter: 'blur(10px)', clipPath: 'inset(4% 4% 4% 4%)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', clipPath: 'inset(0% 0% 0% 0%)' }}
      exit={{ opacity: 0, scale: 0.985, filter: 'blur(8px)' }}
      transition={{ duration: 0.65, ease: easeElegant }}
    >
      {children}
    </motion.main>
  )
}
