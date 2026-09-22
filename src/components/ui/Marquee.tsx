import type { ReactNode } from 'react'
import clsx from 'clsx'

interface MarqueeProps {
  children: ReactNode
  className?: string
  speed?: 'slow' | 'normal'
  pauseOnHover?: boolean
  reverse?: boolean
}

/** Marquee infinito duplicando el contenido; pausa al hacer hover. */
export function Marquee({ children, className, speed = 'normal', pauseOnHover = true, reverse = false }: MarqueeProps) {
  return (
    <div className={clsx('group relative overflow-hidden', className)}>
      <div
        style={reverse ? { animationDirection: 'reverse' } : undefined}
        className={clsx(
          'flex w-max items-center gap-16',
          speed === 'slow' ? 'animate-marquee-slow' : 'animate-marquee',
          pauseOnHover && 'group-hover:[animation-play-state:paused]',
        )}
      >
        <div className="flex items-center gap-16">{children}</div>
        <div className="flex items-center gap-16" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
