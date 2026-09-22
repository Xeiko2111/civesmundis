import { motion, useTransform, type MotionValue } from 'framer-motion'
import type { ReactNode } from 'react'

interface StatFrameProps {
  progress: MotionValue<number>
  range: [number, number, number, number]
  children: ReactNode
}

/**
 * Un fotograma dentro de la secuencia de estadísticas: aparece, se mantiene
 * y desaparece según el progreso de scroll del contenedor pinneado padre.
 */
export function StatFrame({ progress, range, children }: StatFrameProps) {
  const opacity = useTransform(progress, range, [0, 1, 1, 0])
  const scale = useTransform(progress, range, [0.85, 1, 1, 0.92])

  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-0 flex flex-col items-center justify-center text-center">
      {children}
    </motion.div>
  )
}
