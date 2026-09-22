import { Seo } from '@/components/Seo'
import { Reveal } from '@/components/ui/Reveal'

export default function PrivacidadPage() {
  return (
    <>
      <Seo title="Privacidad — Cives Mundi" description="Política de privacidad de ONGD Cives Mundi." />
      <section className="pb-28 pt-40">
        <div className="container-page max-w-3xl">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-orange">Documentación legal</span>
            <h1 className="mt-4 font-display text-display-md text-ink-900">Política de privacidad</h1>
          </Reveal>
          <Reveal delay={0.1} className="prose prose-ink mt-10 max-w-none text-ink-600">
            <p>
              ONGD Cives Mundi trata los datos personales facilitados a través de este sitio web con la finalidad de
              atender consultas, gestionar la relación con socios, voluntarios y colaboradores, y mantener informadas
              a las personas interesadas sobre las actividades de la organización.
            </p>
            <p className="mt-4">
              Los datos no se cederán a terceros salvo obligación legal. En cualquier momento puedes ejercer tus
              derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a{' '}
              <a href="mailto:civesmundi@civesmundi.es" className="font-medium text-orange">
                civesmundi@civesmundi.es
              </a>
              .
            </p>
            <p className="mt-4">
              Responsable del tratamiento: ONGD Cives Mundi, Eduardo Saavedra 38, 42004 Soria (España).
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
