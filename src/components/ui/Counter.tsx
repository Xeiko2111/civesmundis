import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

interface CounterProps {
  value: number
  className?: string
  suffix?: string
  prefix?: string
  duration?: number
}

/** Contador animado: cuenta desde 0 hasta `value` cuando entra en viewport. */
export function Counter({ value, className, suffix = '', prefix = '', duration = 1.6 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.6 })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 })

  useEffect(() => {
    if (isInView) motionValue.set(value)
  }, [isInView, motionValue, value])

  useEffect(() => {
    return spring.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(latest).toLocaleString('es-ES')}${suffix}`
      }
    })
  }, [spring, prefix, suffix])

  return (
    <motion.span ref={ref} className={className}>
      {prefix}0{suffix}
    </motion.span>
  )
}
