import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, X } from 'lucide-react'
import { continents, contrapartes } from '@/data/countries'
import { allCooperationProjects } from '@/data/projects'
import { heroImages } from '@/lib/images'
import { useLanguage } from '@/i18n/LanguageContext'

// Posición aproximada (en % sobre la imagen del mapamundi) de cada región,
// estimada visualmente sobre la propia fotografía satelital real.
const hotspots: { continent: string; left: number; top: number }[] = [
  { continent: 'América', left: 21, top: 58 },
  { continent: 'Europa', left: 45, top: 26 },
  { continent: 'África', left: 52, top: 60 },
  { continent: 'Asia', left: 68, top: 44 },
]

/**
 * Mapamundi estático (sin zoom ni arrastre, para evitar los problemas de
 * scroll que causaba) tratado con un degradado dúotono naranja/azul en vez
 * de mostrar la fotografía satelital tal cual. Al pulsar un punto aparece
 * una tarjeta flotante justo encima con los proyectos reales de esa región.
 */
export function WorldMapExplorer() {
  const { t } = useLanguage()
  const [active, setActive] = useState<string | null>(null)

  const activeHotspot = hotspots.find((h) => h.continent === active)
  const activeCountries = active ? continents[active] : []
  const filteredProjects = active ? allCooperationProjects.filter((p) => activeCountries.includes(p.country)) : []
  const filteredPartners = active ? contrapartes.filter((c) => activeCountries.includes(c.country)) : []
  const popoverAbove = activeHotspot ? activeHotspot.top > 42 : false
  const popoverAlignX = activeHotspot ? (activeHotspot.left < 28 ? 'left' : activeHotspot.left > 68 ? 'right' : 'center') : 'center'

  return (
    <section className="relative overflow-hidden bg-ink-950 py-28 text-white md:py-40">
      <div className="container-page">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-corp">{t.worldMap.eyebrow}</span>
        <h2 className="mt-4 max-w-2xl font-display text-display-md">{t.worldMap.title}</h2>
        <p className="mt-5 max-w-xl text-white/60">{t.worldMap.body}</p>
      </div>

      <div className="container-page mt-14">
        <div className="relative aspect-[1920/727] w-full overflow-hidden bg-ink-950">
          <img
            src={heroImages.mundoBg}
            alt="Mapa mundial"
            className="pointer-events-none h-full w-full select-none object-cover"
            style={{ filter: 'saturate(0.85) contrast(1.05) brightness(0.9)' }}
            draggable={false}
          />
          {/* Viñeta: el mapa se difumina hacia el fondo oscuro de la sección por los bordes,
              en vez de terminar en un recuadro con canto duro. */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at center, transparent 45%, #0A0A0C 100%), linear-gradient(to right, #0A0A0C 0%, transparent 14%, transparent 86%, #0A0A0C 100%), linear-gradient(to bottom, #0A0A0C 0%, transparent 18%, transparent 82%, #0A0A0C 100%)',
            }}
          />

          {hotspots.map((h) => (
            <button
              key={h.continent}
              onClick={() => setActive(active === h.continent ? null : h.continent)}
              data-cursor="VER"
              style={{ left: `${h.left}%`, top: `${h.top}%` }}
              className="group absolute -translate-x-1/2 -translate-y-1/2"
            >
              <span
                className={`block h-3.5 w-3.5 rounded-full border-2 transition-all duration-300 ${
                  active === h.continent
                    ? 'scale-150 border-orange-corp bg-orange-corp'
                    : 'border-white bg-white/20 group-hover:scale-125 group-hover:bg-orange-corp'
                }`}
              />
              {active !== h.continent && (
                <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold uppercase tracking-widest text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {h.continent}
                </span>
              )}
            </button>
          ))}

          {activeHotspot && active && (
            <div
              style={{
                left: `${activeHotspot.left}%`,
                top: `${activeHotspot.top}%`,
                marginTop: popoverAbove ? '-18px' : '18px',
                transform: `translate(${popoverAlignX === 'left' ? '0%' : popoverAlignX === 'right' ? '-100%' : '-50%'}, ${
                  popoverAbove ? '-100%' : '0'
                })`,
              }}
              className="absolute z-20 w-[280px] max-w-[80vw] border border-white/15 bg-ink-950/90 p-5 shadow-2xl shadow-black/50 backdrop-blur-md"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-display text-lg text-white">{active}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-widest text-white/40">{activeCountries.join(' · ')}</p>
                </div>
                <button onClick={() => setActive(null)} aria-label="Cerrar" className="shrink-0 text-white/40 hover:text-white">
                  <X size={16} />
                </button>
              </div>

              <div className="mt-3 flex gap-6 text-xs text-white/50">
                <span>
                  {t.worldMap.projectsLabel}: <span className="text-white">{filteredProjects.length}</span>
                </span>
                <span>
                  {t.worldMap.partnersLabel}: <span className="text-white">{filteredPartners.length}</span>
                </span>
              </div>

              <div className="scroll-orange mt-4 max-h-56 overflow-y-auto pr-2">
                {filteredProjects.slice(0, 8).map((p) => (
                  <Link
                    key={p.slug}
                    to={`/proyectos/${p.slug}`}
                    data-cursor="VER PROYECTO"
                    className="group flex items-center justify-between gap-3 border-t border-white/10 py-3 first:border-t-0"
                  >
                    <span className="min-w-0">
                      <span className="block truncate text-xs uppercase tracking-widest text-white/40">{p.country}</span>
                      <span className="mt-0.5 block truncate font-display text-sm text-white transition-colors group-hover:text-orange-corp">
                        {p.name}
                      </span>
                    </span>
                    <ArrowUpRight size={16} className="shrink-0 text-white/30 transition-colors group-hover:text-orange-corp" />
                  </Link>
                ))}
                {filteredProjects.length === 0 && <p className="py-3 text-sm text-white/40">—</p>}
              </div>
            </div>
          )}
        </div>

        {!active && <p className="mt-6 text-sm text-white/40">{t.worldMap.selectPrompt}</p>}
      </div>
    </section>
  )
}
