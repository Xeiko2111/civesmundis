export interface EventItem {
  slug: string
  name: string
  date: string
  endDate?: string
  location: string
  description: string
  status: 'realizado' | 'proximo'
}

export const events: EventItem[] = [
  {
    slug: 'presura-22',
    name: 'PRESURA*22',
    date: '2022-11-04',
    endDate: '2022-11-06',
    location: 'Sigüenza, Guadalajara',
    description:
      '6ª edición de Presura, la Feria Nacional para la Repoblación de la España Rural. Punto de encuentro entre la España rural y urbana.',
    status: 'realizado',
  },
]
