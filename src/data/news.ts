export interface NewsItem {
  slug: string
  title: string
  date: string // ISO
  category: string
  excerpt: string
  author?: string
  featured?: boolean
}

// Noticias reales documentadas en la auditoría de contenido
export const news: NewsItem[] = [
  {
    slug: 'cives-mundi-busca-tecnic-proyectos-sede',
    title: 'Cives Mundi busca técnic@ de proyectos en sede',
    date: '2026-05-19',
    category: 'Empleo',
    excerpt:
      'Abrimos proceso de selección para incorporar a una persona técnica de proyectos en nuestra sede de Soria.',
    author: 'Roberto Ortega',
    featured: true,
  },
  {
    slug: 'cives-mundi-busca-personal-expatriado-senegal-mauritania',
    title: 'Cives Mundi busca personal expatriado para sus proyectos en Senegal y Mauritania',
    date: '2025-11-17',
    category: 'Empleo',
    excerpt:
      'Buscamos perfiles expatriados para reforzar nuestros equipos de terreno en Senegal y Mauritania.',
    author: 'Roberto Ortega',
    featured: true,
  },
  {
    slug: 'ferias-agricolas-syap-gorgol',
    title: 'Las ferias agrícolas del proyecto SYAP consolidan el liderazgo comunitario y dinamizan la economía local en el Gorgol',
    date: '2025-08-18',
    category: 'Cooperación',
    excerpt:
      'Las ferias agrícolas impulsadas por el proyecto SYAP refuerzan el liderazgo comunitario y la economía local en la región del Gorgol, Mauritania.',
    author: 'Roberto Ortega',
    featured: true,
  },
  {
    slug: 'entre-el-oasis-y-el-mercado-agroecologia-mauritania',
    title: "Entre el oasis y el mercado: agroecología y el debate sobre lo 'BIO' en Mauritania",
    date: '2025-08-11',
    category: 'Cooperación',
    excerpt:
      'Un recorrido por el debate sobre la agroecología y la certificación "BIO" en los oasis de Mauritania.',
    author: 'Roberto Ortega',
  },
  {
    slug: 'seleccion-pinares-lab',
    title: 'Comienza el proceso de selección para Pinares Lab, un laboratorio de innovación rural y creación colectiva',
    date: '2025-07-08',
    category: 'Innovación Social',
    excerpt:
      'Arranca la convocatoria de Pinares Lab, laboratorio de innovación rural impulsado desde El Hueco.',
    author: 'Roberto Ortega',
  },
  {
    slug: 'postales-de-resistencia-bar-elias',
    title: 'Postales (de resistencia) desde Bar Elias: imágenes que cuentan lo que no siempre se ve',
    date: '2025-06-02',
    category: 'Cooperación',
    excerpt: 'Un relato visual desde Bar Elias, Líbano, sobre las historias que no siempre llegan a los titulares.',
    author: 'Roberto Ortega',
  },
  {
    slug: 'inteligencia-colectiva-co-creacion-sostenibilidad-rural',
    title: 'Inteligencia colectiva, co-creación y sostenibilidad rural',
    date: '2025-05-14',
    category: 'Repoblación',
    excerpt: 'Reflexiones sobre los procesos de inteligencia colectiva aplicados a la sostenibilidad rural.',
    author: 'Roberto Ortega',
  },
  {
    slug: 'impacto-base-datos-cartografica-syap',
    title: 'Impacto y Beneficios de la Base de Datos Cartográfica en el Proyecto SYAP',
    date: '2025-04-22',
    category: 'Cooperación',
    excerpt: 'Cómo la cartografía digital está mejorando la toma de decisiones en el proyecto SYAP.',
    author: 'Roberto Ortega',
  },
  {
    slug: 'benarraba-hijos-de-las-nubes',
    title: "Benarrabá pone en marcha el proyecto 'Hijos de las Nubes'",
    date: '2025-03-10',
    category: 'Repoblación',
    excerpt: 'Un nuevo proyecto de dinamización rural arranca en Benarrabá.',
    author: 'Roberto Ortega',
  },
  {
    slug: 'agroecologia-sostenibilidad-kolda',
    title: 'Impulsando la Agroecología y la Sostenibilidad en Kolda',
    date: '2025-02-05',
    category: 'Cooperación',
    excerpt: 'Avances del proyecto agroecológico en la región senegalesa de Kolda.',
    author: 'Roberto Ortega',
  },
]

export const newsCategories = Array.from(new Set(news.map((n) => n.category)))
