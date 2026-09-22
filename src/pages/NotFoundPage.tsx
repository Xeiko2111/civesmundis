import { Link } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import { MagneticButton } from '@/components/ui/MagneticButton'

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Página no encontrada — Cives Mundi" />
      <section className="flex min-h-[70vh] flex-col items-center justify-center pt-24 text-center">
        <p className="font-display text-display-xl text-ink-200">404</p>
        <h1 className="mt-4 font-display text-2xl text-ink-900">Esta página no existe</h1>
        <p className="mt-3 max-w-sm text-ink-500">
          Puede que el contenido se haya movido. Vuelve al inicio para seguir explorando.
        </p>
        <div className="mt-8">
          <MagneticButton to="/">Volver al inicio</MagneticButton>
        </div>
        <Link to="/contacto" className="mt-6 text-sm text-ink-400 hover:text-orange">
          ¿Crees que es un error? Contáctanos
        </Link>
      </section>
    </>
  )
}
