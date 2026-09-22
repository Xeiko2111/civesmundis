export interface Contraparte {
  name: string
  country: string
}

// Contrapartes documentadas en la auditoría (listado "+28 países")
export const contrapartes: Contraparte[] = [
  { name: 'ACT DMK', country: 'Mauritania' },
  { name: 'ALCESDAM', country: 'Líbano' },
  { name: 'Altervida', country: 'Paraguay' },
  { name: 'APEB', country: 'Bangladesh' },
  { name: 'Apsara', country: 'Camboya' },
  { name: 'Asoc Gabes Tunisie', country: 'Túnez' },
  { name: 'BPKS', country: 'Filipinas' },
  { name: 'CEDAC', country: 'Camboya' },
  { name: 'CEDESO', country: 'Ecuador' },
  { name: 'CEEDESUR', country: 'Perú' },
  { name: 'CEFODEC', country: 'Haití' },
  { name: 'CEHA', country: 'Haití' },
  { name: 'CIRD', country: 'Paraguay' },
  { name: 'Cives Mundi Perú', country: 'Perú' },
  { name: 'FONAKISE', country: 'Senegal' },
  { name: 'Fundación Asistencia a Madres Marginadas', country: 'Filipinas' },
  { name: 'Fundación Ernesto Sabato', country: 'Argentina' },
  { name: 'Fundación Vida Silvestre', country: 'Argentina' },
  { name: 'Fundar Galápagos', country: 'Ecuador' },
  { name: 'Fundlider', country: 'Paraguay' },
  { name: 'FUSADI', country: 'Haití' },
  { name: 'HABURAS', country: 'Timor Oriental' },
  { name: 'Haribon', country: 'Filipinas' },
  { name: 'Kiwakkuki', country: 'Tanzania' },
  { name: 'Mama Malta', country: 'Malta' },
  { name: 'Mipros', country: 'Haití' },
  { name: 'Nabaa', country: 'Líbano' },
  { name: 'Observatorio de Manila', country: 'Filipinas' },
  { name: 'OWYBT', country: 'Camboya' },
  { name: 'PWO', country: 'Filipinas' },
  { name: 'RADI', country: 'Mauritania' },
  { name: 'Recoft', country: 'Tailandia' },
  { name: 'STIPA', country: 'Bangladesh' },
  { name: 'Tenmiya', country: 'Mauritania' },
]

export const countriesWorked = [
  'Mauritania', 'Haití', 'Senegal', 'Líbano', 'Camboya', 'Timor Oriental',
  'Paraguay', 'Colombia', 'Bangladesh', 'Filipinas', 'Etiopía', 'Argelia',
  'Túnez', 'Tanzania', 'Perú', 'Ecuador', 'Argentina', 'Malta', 'Tailandia',
  'España',
]

export const globalStats = {
  countries: 22,
  projects: 153,
  contrapartes: 34,
  years: 1987,
}

// Agrupación geográfica (continente) de los países reales en los que trabaja
// Cives Mundi, usada para la sección interactiva del mundo.
export const continents: Record<string, string[]> = {
  África: ['Mauritania', 'Senegal', 'Etiopía', 'Tanzania', 'Argelia', 'Túnez'],
  América: ['Haití', 'Paraguay', 'Colombia', 'Perú', 'Ecuador', 'Argentina'],
  Asia: ['Camboya', 'Timor Oriental', 'Filipinas', 'Bangladesh', 'Tailandia', 'Líbano'],
  Europa: ['España', 'Malta'],
}
