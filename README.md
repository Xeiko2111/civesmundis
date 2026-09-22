# Cives Mundi — Web

Rediseño completo de la web de Cives Mundi (ONGD, Soria). React + TypeScript + Vite + Tailwind CSS + Framer Motion.

## Puesta en marcha

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

Build de producción:

```bash
npm run build
npm run preview
```

> Nota: este proyecto se ha generado en un entorno sin acceso a internet para instalar
> dependencias, por lo que **no se ha podido ejecutar `npm install` ni verificar el build
> en esta máquina**. El código ha sido escrito y revisado a mano con cuidado, pero al
> primer `npm install && npm run dev` en tu máquina puede aparecer algún ajuste menor de
> tipos o de versión de alguna dependencia — son fáciles de resolver (revisa la consola de
> Vite/TypeScript, suele ser un import o una versión de paquete).

## Arquitectura

```
src/
  components/
    layout/      Navbar, Footer, Layout, transiciones, scroll progress
    sections/    Bloques grandes reutilizados en páginas (Hero, ThreeAreas, etc.)
    ui/          Piezas atómicas: Reveal, SplitText, Counter, Marquee, ProjectCard...
  pages/         Una página por ruta
  data/          Contenido real separado del código (projects, news, team, funders...)
  lib/           Registro de imágenes, formateo de fechas
  hooks/         Hooks compartidos
  assets/images/ Imágenes reales de Cives Mundi (extraídas de la home actual)
```

## Contenido y datos (pensado para conectar un CMS más adelante)

Todo el contenido vive en `src/data/*.ts`, tipado con TypeScript:

- `projects.ts` — proyectos activos, histórico de cooperación, 12 iniciativas de repoblación/innovación
- `news.ts` — noticias (Actualidad)
- `events.ts` — eventos (Presura, etc.)
- `team.ts` — equipo de Cives Mundi
- `funders.ts` — financiadores
- `countries.ts` — contrapartes y estadísticas globales (países, proyectos, contrapartes)
- `transparency.ts` — auditorías (2005–2024), memorias, evaluaciones

Sustituir estos archivos por llamadas a un CMS (o API) es directo: solo hay que
mantener la misma forma (`interface`) que ya usan los componentes.

## Imágenes

Se han incorporado todas las imágenes reales que enviaste (fondos, financiadores, algunas
fotografías de proyectos, logo). Viven en `src/assets/images/` y se referencian desde
`src/lib/images.ts`.

**Fotografías que aún no están disponibles** (proyectos concretos, noticias, equipo
individual) se muestran con un componente `<PlaceholderImage />` claramente identificado
como "Imagen pendiente", tal y como pediste — nunca se ha inventado o simulado una
fotografía real. A medida que me envíes las imágenes de cada sección, las sustituyo
directamente en `src/assets/images/` y quito el placeholder correspondiente.

## Sistema de diseño

- Colores de identidad (`tailwind.config.ts`): naranja `#FF9B16` / `#FF9108` / `#FF6600`,
  azul `#0083D7`, negro `#2D2D2D`. Usados como acento; el resto de la interfaz usa blancos,
  grises y un azul muy oscuro (`ink-950` / `blue-deep`).
- Tipografía: **Fraunces** (display/editorial) + **Inter** (texto), cargadas desde Google
  Fonts en `index.html`.
- Animaciones con Framer Motion: reveal al hacer scroll, texto palabra a palabra, contador
  animado, parallax en el hero, marquee de financiadores, cursor personalizado en desktop,
  transición de página. Todas usan `transform`/`opacity` y respetan
  `prefers-reduced-motion`.

## Páginas incluidas

Inicio · Cooperación (activos + histórico filtrable + contrapartes) · Repoblación e
Innovación Social (12 iniciativas, storytelling vertical) · Actualidad (noticias + eventos)
· Detalle de noticia · Detalle de proyecto (plantilla reutilizable) · Transparencia
(memorias, auditorías, evaluaciones, financiadores, privacidad) · Nosotrxs (equipo +
identidad corporativa) · Contacto · Privacidad · 404.

## Próximos pasos sugeridos

1. `npm install` y revisar que todo carga correctamente.
2. Enviarme las imágenes que falten (proyectos, noticias, equipo) para sustituir los
   placeholders.
3. Conectar formulario de contacto a un backend/servicio de email real (actualmente simula
   el envío en el cliente).
4. Si se desea, añadir un mapa mundial interactivo en Cooperación/Contrapartes (de momento
   se muestra como listado/grid, según lo indicado de tener alternativa clara en cualquier
   dispositivo).
