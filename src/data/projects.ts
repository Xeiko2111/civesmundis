export type ProjectArea = 'cooperacion' | 'repoblacion' | 'innovacion'
export type ProjectStatus = 'activo' | 'finalizado'

export interface Project {
  slug: string
  name: string
  area: ProjectArea
  status: ProjectStatus
  country: string
  location?: string
  summary: string
  description: string
  generalObjective?: string
  specificObjective?: string
  organizations?: string[]
  funders?: string[]
  duration?: string
  budget?: string
  beneficiaries?: string
  image?: string
  imagePosition?: 'top' | 'center' | 'bottom'
  featured?: boolean
}

// Proyectos activos ("En Acción") — contenido real documentado en la auditoría
export const activeProjects: Project[] = [
  {
    slug: 'commau',
    name: 'COMMAU',
    area: 'cooperacion',
    status: 'activo',
    country: 'Mauritania',
    location: 'Gorgol, Guidimakha',
    summary: 'Aumentar la productividad y los ingresos de pequeños y pequeñas productoras.',
    description:
      'Proyecto de cooperación al desarrollo centrado en el fortalecimiento agrícola de comunidades rurales de Mauritania, orientado a incrementar la productividad y los ingresos de pequeños y pequeñas productoras en las regiones de Gorgol y Guidimakha.',
    organizations: ['Cives Mundi', 'RADI'],
    image: 'commau',
    // Foto de plano general (persona en el centro del encuadre, no en la
    // parte superior): con el recorte "top" que usan el resto de proyectos
    // se quedaba fuera de la imagen, así que aquí se centra en su lugar.
    imagePosition: 'center',
    featured: true,
  },
  {
    slug: 'pti-haiti',
    name: 'PTI-Haití',
    area: 'cooperacion',
    status: 'activo',
    country: 'Haití',
    location: 'Departamento Sudeste',
    summary: 'Aumentar la productividad agrícola y los ingresos de pequeños productores y productoras.',
    description:
      'Proyecto de Transferencia e Innovación Productiva dirigido a comunidades agrícolas del Departamento Sudeste de Haití, con el objetivo de aumentar la productividad agrícola y mejorar los ingresos familiares.',
    organizations: ['Cives Mundi', 'CEFODEC'],
    image: 'radi-aecid',
    featured: true,
  },
  {
    slug: 'beydari-kolda',
    name: 'BEYDARI-KOLDA',
    area: 'cooperacion',
    status: 'activo',
    country: 'Senegal',
    location: 'Región de Kolda',
    summary: 'Mejora de la situación alimentaria y nutricional de las personas más vulnerables.',
    description:
      'Iniciativa centrada en la mejora de la situación alimentaria y nutricional de las personas más vulnerables en la región de Kolda, Senegal, mediante el fortalecimiento de capacidades productivas locales.',
    organizations: ['Cives Mundi', 'FONAKISE'],
    image: 'agrokolda',
    featured: true,
  },
  {
    slug: 'agricultura-sostenible-seguridad-alimentaria',
    name: 'Agricultura Sostenible y Seguridad Alimentaria',
    area: 'cooperacion',
    status: 'activo',
    country: 'Haití',
    location: 'Cayes-Jacmel',
    summary: 'Fortalecimiento agrícola para la seguridad alimentaria en la zona rural de Cayes-Jacmel.',
    description:
      'Proyecto de fortalecimiento agrícola orientado a garantizar la seguridad alimentaria de las comunidades rurales de la zona de Cayes-Jacmel, Haití, a través de prácticas sostenibles de producción.',
    organizations: ['Cives Mundi', 'Mipros'],
    image: 'batey-ninos',
  },
]

// Histórico de proyectos de cooperación (archivo de mayor volumen del sitio)
export const historicalProjects: Project[] = [
  {
    slug: 'ale-askar-al-farah-libano',
    name: 'Reducción de la vulnerabilidad de la infancia refugiada siria',
    area: 'cooperacion',
    status: 'finalizado',
    country: 'Líbano',
    location: 'Asentamientos informales de Ale-Askar y Al Farah',
    summary: 'Reducir la vulnerabilidad de la infancia refugiada siria en asentamientos informales.',
    description:
      'Proyecto de protección de la infancia refugiada siria en los asentamientos informales de Ale-Askar y Al Farah, Líbano, con enfoque en reducción de vulnerabilidad y acceso a servicios básicos.',
    organizations: ['Cives Mundi', 'ALCESDAM'],
  },
  {
    slug: 'haqna-nuestros-derechos',
    name: '"Haqna" (Nuestros Derechos)',
    area: 'cooperacion',
    status: 'finalizado',
    country: 'Líbano',
    summary: 'Derechos de trabajadoras domésticas migrantes en el Líbano.',
    description:
      'Proyecto centrado en la defensa y promoción de los derechos de las trabajadoras domésticas migrantes en el Líbano, en colaboración con Nabaa.',
    organizations: ['Cives Mundi', 'Nabaa'],
  },
  {
    slug: 'agrokolda',
    name: 'AGROKOLDA',
    area: 'cooperacion',
    status: 'finalizado',
    country: 'Senegal',
    summary: 'Producción agrícola sostenible y asociaciones de pequeñas productoras.',
    description:
      'Proyecto de producción agrícola sostenible y fortalecimiento de asociaciones de pequeñas productoras en la región senegalesa.',
    organizations: ['Cives Mundi', 'FONAKISE'],
    image: 'agrokolda',
  },
  {
    slug: 'resiliecomerce',
    name: 'RESILIECOMERCE',
    area: 'cooperacion',
    status: 'finalizado',
    country: 'Mauritania',
    location: 'Sur de Mauritania',
    summary: 'Resiliencia y derecho a la alimentación en el sur de Mauritania.',
    description:
      'Proyecto orientado a fortalecer la resiliencia comunitaria y el derecho a la alimentación en el sur de Mauritania.',
    organizations: ['Cives Mundi', 'ACT DMK'],
  },
  {
    slug: 'ayune-mis-ojos',
    name: '"AYUNE" (Mis Ojos)',
    area: 'cooperacion',
    status: 'finalizado',
    country: 'Mauritania',
    summary: 'Proyecto de cooperación al desarrollo en Mauritania.',
    description: 'Proyecto documentado en el archivo histórico de Cives Mundi.',
    organizations: ['Cives Mundi'],
  },
  {
    slug: 'construyendo-resiliencia-etiopia',
    name: 'Construyendo Resiliencia',
    area: 'cooperacion',
    status: 'finalizado',
    country: 'Etiopía',
    summary: 'Proyecto de fortalecimiento de la resiliencia comunitaria en Etiopía.',
    description: 'Proyecto documentado en el archivo histórico de Cives Mundi.',
    organizations: ['Cives Mundi'],
  },
  {
    slug: 'women-food-citizenship',
    name: '"Women, Food and Citizenship"',
    area: 'cooperacion',
    status: 'finalizado',
    country: 'Camboya',
    summary: 'Proyecto sobre mujeres, alimentación y ciudadanía en Camboya.',
    description: 'Proyecto documentado en el archivo histórico de Cives Mundi.',
    organizations: ['Cives Mundi', 'CEDAC'],
  },
  {
    slug: 'food-and-biodiversity',
    name: '"Food and Biodiversity"',
    area: 'cooperacion',
    status: 'finalizado',
    country: 'Timor Oriental',
    summary: 'Proyecto sobre alimentación y biodiversidad en Timor Oriental.',
    description: 'Proyecto documentado en el archivo histórico de Cives Mundi.',
    organizations: ['Cives Mundi', 'HABURAS'],
    image: 'timor',
  },
  {
    slug: 'agricommerce-gorgol',
    name: '"Agricommerce"',
    area: 'cooperacion',
    status: 'finalizado',
    country: 'Mauritania',
    location: 'Gorgol',
    summary: 'Proyecto de comercio agrícola en la región de Gorgol, Mauritania.',
    description: 'Proyecto documentado en el archivo histórico de Cives Mundi.',
    organizations: ['Cives Mundi'],
  },
  {
    slug: 'chota-cultura',
    name: 'Chota Cultura',
    area: 'cooperacion',
    status: 'finalizado',
    country: 'Perú',
    summary: 'Proyecto de cooperación al desarrollo en Perú.',
    description: 'Proyecto documentado en el archivo histórico de Cives Mundi.',
    organizations: ['Cives Mundi', 'CEEDESUR'],
  },
  {
    slug: 'akarapua-fase-2',
    name: "AKARAPU'Â Fase II",
    area: 'cooperacion',
    status: 'finalizado',
    country: 'Paraguay',
    summary: 'Segunda fase del proyecto AKARAPU\'Â en Paraguay.',
    description: 'Proyecto documentado en el archivo histórico de Cives Mundi.',
    organizations: ['Cives Mundi', 'Altervida'],
  },
  {
    slug: 'akarapua',
    name: "AKARAPU'Â",
    area: 'cooperacion',
    status: 'finalizado',
    country: 'Paraguay',
    summary: 'Proyecto de cooperación al desarrollo en Paraguay.',
    description: 'Proyecto documentado en el archivo histórico de Cives Mundi.',
    organizations: ['Cives Mundi', 'CIRD'],
  },
  {
    slug: 'agua-es-vida',
    name: 'Jornadas de Sensibilización "Agua es Vida"',
    area: 'cooperacion',
    status: 'finalizado',
    country: 'España',
    summary: 'Sensibilización y educación al desarrollo en España.',
    description: 'Proyecto de sensibilización dirigido a la sociedad española sobre el acceso al agua.',
    organizations: ['Cives Mundi'],
  },
  {
    slug: 'sinima-iv',
    name: '"SINIMA" IV: Muestra de Cine de Oriente Medio y Magreb',
    area: 'cooperacion',
    status: 'finalizado',
    country: 'España',
    summary: 'Muestra de cine para la sensibilización y educación al desarrollo.',
    description: 'Cuarta edición de la muestra de cine SINIMA, dedicada a Oriente Medio y el Magreb.',
    organizations: ['Cives Mundi'],
  },
  {
    slug: 'jovenes-solidarios-cyl',
    name: 'Jóvenes Solidarios de Castilla y León',
    area: 'cooperacion',
    status: 'finalizado',
    country: 'España',
    summary: 'Programa de sensibilización dirigido a la juventud de Castilla y León.',
    description: 'Proyecto documentado en el archivo histórico de Cives Mundi.',
    organizations: ['Cives Mundi'],
  },
  {
    slug: 'iniciativas-autodesarrollo-discapacidad-bangladesh',
    name: 'Iniciativas de Autodesarrollo de las Personas con Discapacidad',
    area: 'cooperacion',
    status: 'finalizado',
    country: 'Bangladesh',
    summary: 'Iniciativas de autodesarrollo para personas con discapacidad en Bangladesh.',
    description: 'Proyecto documentado en el archivo histórico de Cives Mundi.',
    organizations: ['Cives Mundi', 'APEB'],
  },
  {
    slug: 'desarrollo-para-todos-bangladesh',
    name: 'Desarrollo para Todos',
    area: 'cooperacion',
    status: 'finalizado',
    country: 'Bangladesh',
    summary: 'Proyecto de desarrollo inclusivo en Bangladesh.',
    description: 'Proyecto documentado en el archivo histórico de Cives Mundi.',
    organizations: ['Cives Mundi', 'STIPA'],
  },
  {
    slug: 'commune-jacmel-vida-2',
    name: 'Commune de Jacmel por la Vida — II Etapa',
    area: 'cooperacion',
    status: 'finalizado',
    country: 'Haití',
    location: 'Jacmel',
    summary: 'Segunda etapa del proyecto Commune de Jacmel por la Vida.',
    description: 'Proyecto documentado en el archivo histórico de Cives Mundi, desarrollado en el municipio de Jacmel.',
    organizations: ['Cives Mundi', 'CEHA'],
  },
  {
    slug: 'fortalecimiento-wiwa-colombia',
    name: 'Fortalecimiento ambiental y cultural de comunidades indígenas WIWA',
    area: 'cooperacion',
    status: 'finalizado',
    country: 'Colombia',
    summary: 'Fortalecimiento ambiental y cultural de comunidades indígenas WIWA.',
    description: 'Proyecto documentado en el archivo histórico de Cives Mundi.',
    organizations: ['Cives Mundi'],
  },
  {
    slug: 'golden-landscapes-and-seascapes',
    name: 'Gobierno y Desarrollo Local de Paisajes Terrestres y Marinos Amenazados',
    area: 'cooperacion',
    status: 'finalizado',
    country: 'Filipinas',
    summary: 'Golden Landscapes and Seascapes: gobierno y desarrollo local de paisajes amenazados.',
    description: 'Proyecto documentado en el archivo histórico de Cives Mundi.',
    organizations: ['Cives Mundi', 'BPKS'],
  },
]

export const allCooperationProjects = [...activeProjects, ...historicalProjects]

export interface RuralInitiative {
  slug: string
  name: string
  tagline: string
  description: string
  image?: string
}

// Repoblación e Innovación Social — 12 iniciativas documentadas
export const ruralInitiatives: RuralInitiative[] = [
  {
    slug: 'el-hueco',
    name: 'El Hueco',
    tagline: 'Coworking y fomento del emprendimiento social',
    description:
      'Espacio de coworking y fomento del emprendimiento social en Soria, motor de toda la red de iniciativas de repoblación e innovación rural de Cives Mundi.',
    image: 'pinares-lab',
  },
  {
    slug: 'red-nacional-pueblos-acogedores',
    name: 'Red Nacional de Pueblos Acogedores',
    tagline: 'Trabajo a distancia para repoblar el territorio',
    description:
      'Red para facilitar el trabajo a distancia en pueblos y contribuir a dinamizar y repoblar zonas rurales de toda España.',
  },
  {
    slug: 'ruralcar',
    name: 'RuralCar App',
    tagline: 'Viajes compartidos adaptados al medio rural',
    description:
      'Plataforma de viajes compartidos adaptada al medio rural y pensada también para personas mayores o poco familiarizadas con la tecnología.',
  },
  {
    slug: 'comunal',
    name: 'Comunal',
    tagline: 'Desarrollo socioeconómico equilibrado',
    description:
      'Innovación social y desarrollo socioeconómico equilibrado en zonas rurales de Navarra.',
  },
  {
    slug: 'presura',
    name: 'Presura',
    tagline: 'Feria Nacional para la Repoblación de la España Rural',
    description:
      'Punto de encuentro entre la España rural y urbana. La 6ª edición, PRESURA*22, se celebró del 4 al 6 de noviembre de 2022 en Sigüenza (Guadalajara).',
  },
  {
    slug: 'g30-juventud-la-rioja',
    name: 'G30 Juventud La Rioja',
    tagline: '30 jóvenes frente al reto demográfico',
    description:
      'Grupo de 30 jóvenes —15 mujeres y 15 hombres— para idear propuestas estratégicas frente al reto demográfico.',
  },
  {
    slug: 'el-hueco-starter',
    name: 'El Hueco Starter',
    tagline: 'Concurso de ideas de negocio rural',
    description:
      'Concurso de ideas de negocio y emprendimiento social orientado a zonas escasamente pobladas.',
  },
  {
    slug: 'rural-proofing',
    name: 'Rural Proofing',
    tagline: 'Políticas públicas con perspectiva rural',
    description:
      'Mecanismo para revisar legislación y políticas desde una perspectiva rural.',
  },
  {
    slug: 'g100-nueva-ruralidad',
    name: 'G100 Nueva Ruralidad',
    tagline: 'Inteligencia colectiva para la ruralidad',
    description:
      'Proceso de co-creación de una Nueva Ruralidad mediante inteligencia colectiva.',
  },
  {
    slug: 'interreg-socent-spas',
    name: 'Interreg Socent Spas',
    tagline: 'Emprendimiento social en Europa poco poblada',
    description:
      'Proyecto Interreg sobre emprendimiento social en áreas poco pobladas de Castilla y León, Laponia, Brandeburgo y Gemer.',
  },
  {
    slug: 'razon-valley',
    name: 'Razón Valley',
    tagline: 'Tecnología y talento joven en zonas rurales',
    description:
      'Proyecto para acercar nuevas tecnologías y cultura a zonas rurales con despoblación y atraer talento joven.',
  },
  {
    slug: 'el-hueco-oxma',
    name: 'El Hueco Oxma',
    tagline: 'Antena rural en El Burgo de Osma',
    description:
      'Antena de El Hueco en El Burgo de Osma para fomentar la innovación rural y reunir emprendedores de la comarca.',
  },
]
