import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

interface ThemeToggleProps {
  className?: string
}

/** Interruptor de tema claro/oscuro para todo el sitio. */
export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Activar tema oscuro' : 'Activar tema claro'}
      className={className ?? 'flex h-8 w-8 items-center justify-center text-white transition-colors hover:text-orange-corp'}
    >
      {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  )
}
