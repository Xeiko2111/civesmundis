import clsx from 'clsx'
import { ImageOff } from 'lucide-react'

interface PlaceholderImageProps {
  label: string
  className?: string
}

/**
 * Placeholder claramente identificado para fotografías reales aún no
 * disponibles. Nunca se inventa una fotografía: se marca explícitamente
 * qué falta, tal y como pide el brief de contenido.
 */
export function PlaceholderImage({ label, className }: PlaceholderImageProps) {
  return (
    <div
      className={clsx(
        'relative flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-ink-100 to-ink-200 text-ink-500',
        className,
      )}
    >
      <ImageOff size={28} strokeWidth={1.5} />
      <p className="max-w-[80%] text-center text-xs font-medium uppercase tracking-wider">
        Imagen pendiente — {label}
      </p>
    </div>
  )
}
