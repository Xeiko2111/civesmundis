import { motion } from 'framer-motion'

interface SplitTextProps {
  text: string
  className?: string
  by?: 'word' | 'char'
  delay?: number
  stagger?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

const easeElegant = [0.16, 1, 0.3, 1] as const

/**
 * Reveal de texto palabra a palabra (o carácter a carácter) al entrar en viewport.
 * Inspirado en los patrones "Split Text" / "Blur Text" de ReactBits, escrito a medida.
 */
export function SplitText({ text, className, by = 'word', delay = 0, stagger = 0.04, as = 'span' }: SplitTextProps) {
  const pieces = by === 'word' ? text.split(' ') : text.split('')
  const Tag = as

  return (
    <Tag className={className}>
      <motion.span
        className="inline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
        }}
        aria-label={text}
      >
        {pieces.map((piece, i) => (
          <motion.span
            key={i}
            className="inline-block will-change-transform"
            variants={{
              hidden: { opacity: 0, y: '0.5em', filter: 'blur(6px)' },
              visible: {
                opacity: 1,
                y: '0em',
                filter: 'blur(0px)',
                transition: { duration: 0.65, ease: easeElegant },
              },
            }}
            aria-hidden="true"
          >
            {piece}
            {by === 'word' && i < pieces.length - 1 ? ' ' : ''}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  )
}
