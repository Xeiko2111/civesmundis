import { useState } from 'react'

interface FlipCardProps {
  image: string
  name: string
  role: string
}

/**
 * Flip card (al estilo ReactBits): la tarjeta gira 180° en 3D al pasar el
 * cursor o al tocarla, revelando el nombre y el cargo en la cara trasera.
 */
export function FlipCard({ image, name, role }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className="group aspect-[4/5] cursor-pointer"
      style={{ perspective: '1400px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        className="relative h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [transform-style:preserve-3d]"
        style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        {/* Cara frontal: foto */}
        <div className="absolute inset-0 overflow-hidden bg-ink-100 [backface-visibility:hidden]">
          <img src={image} alt={name} className="h-full w-full object-cover grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
        </div>

        {/* Cara trasera: nombre y cargo */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-ink-950 p-6 text-center [backface-visibility:hidden]"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <span className="h-6 w-[3px] bg-orange-corp" />
          <p className="font-display text-2xl text-white">{name}</p>
          <p className="text-sm text-white/60">{role}</p>
        </div>
      </div>
    </div>
  )
}
