import { motion, useTransform, type MotionValue } from 'framer-motion'

interface ScrollRevealWordProps {
  word: string
  progress: MotionValue<number>
  range: [number, number]
}

/**
 * Una palabra cuya opacidad y desenfoque están ligados directamente al
 * progreso de scroll del contenedor padre (técnica tipo Apple: el texto se
 * "ilumina" palabra a palabra mientras el usuario avanza).
 */
export function ScrollRevealWord({ word, progress, range }: ScrollRevealWordProps) {
  const opacity = useTransform(progress, range, [0.12, 1])
  const blur = useTransform(progress, range, [4, 0])
  const filter = useTransform(blur, (b) => `blur(${b}px)`)

  return (
    <motion.span style={{ opacity, filter }} className="inline-block">
      {word}{' '}
    </motion.span>
  )
}
