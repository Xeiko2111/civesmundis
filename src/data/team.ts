export interface TeamMember {
  slug: string
  name: string
  role: string
  bio?: string
  image: string
}

// Equipo real documentado en la auditoría ("Nosotrxs — Equipo de trabajo")
export const team: TeamMember[] = [
  {
    slug: 'joaquin-alcalde',
    name: 'Joaquín Alcalde',
    role: 'Gerente de Cives Mundi, CEO de El Hueco y Director de PRESURA',
    image: 'joaquin-alcalde',
  },
  {
    slug: 'ana-gomez',
    name: 'Ana Gómez',
    role: 'Responsable de Proyectos de Cooperación Internacional',
    image: 'ana-gomez',
  },
  {
    slug: 'ana-elizalde',
    name: 'Ana Elizalde',
    role: 'Responsable de Proyectos de Innovación Social',
    image: 'ana-elizalde',
  },
  {
    slug: 'gonzalo-gil',
    name: 'Gonzalo Gil',
    role: 'Responsable de Administración',
    image: 'gonzalo-gil',
  },
  {
    slug: 'jordan-fernandez',
    name: 'Jordan Fernández',
    role: 'Coordinador de El Hueco y Diseño Gráfico',
    image: 'jordan-fernandez',
  },
  {
    slug: 'jaime-diez',
    name: 'Jaime Díez',
    role: 'Informática y Diseño Gráfico',
    image: 'jaime-diez',
  },
]
