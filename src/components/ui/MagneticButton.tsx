import { useRef, useState, type ReactNode, type MouseEvent } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  to?: string
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'ghost' | 'outline'
}

/** Botón con efecto "magnético" sutil hacia el cursor. Solo para CTAs importantes. */
export function MagneticButton({ children, className, to, href, onClick, variant = 'primary' }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    setPos({ x: relX * 0.25, y: relY * 0.25 })
  }

  const reset = () => setPos({ x: 0, y: 0 })

  const styles = clsx(
    'inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300',
    variant === 'primary' && 'bg-orange text-white hover:bg-orange-vivid',
    variant === 'ghost' && 'text-ink-900 hover:text-orange',
    variant === 'outline' && 'border border-ink-300 text-ink-900 hover:border-orange hover:text-orange',
    className,
  )

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 12, mass: 0.3 }}
      className={styles}
      data-cursor={undefined}
    >
      {children}
    </motion.div>
  )

  if (to) return <Link to={to}>{content}</Link>
  if (href) return <a href={href}>{content}</a>
  return <button onClick={onClick}>{content}</button>
}
