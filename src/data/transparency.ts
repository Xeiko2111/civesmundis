export interface DocumentItem {
  year: number
  name: string
  type: string
}

// Auditorías contables documentadas: 2005–2024 (años pares e impares)
export const audits: DocumentItem[] = Array.from({ length: 2024 - 2005 + 1 }, (_, i) => {
  const year = 2005 + i
  return { year, name: `Auditoría de Cuentas ${year}`, type: 'Auditoría' }
}).reverse()

export const memories: DocumentItem[] = [
  { year: 2024, name: 'Memoria de Actividades 2024', type: 'Memoria' },
]

export const evaluations: DocumentItem[] = [
  { year: 2024, name: 'Social Entrepreneurship Finance Tools and Support in Europe', type: 'Evaluación' },
  { year: 2023, name: 'AgrEau', type: 'Evaluación' },
  { year: 2023, name: 'Empoderamiento económico de refugiadas palestinas del Líbano', type: 'Evaluación' },
  { year: 2022, name: 'ENERCO Senegal', type: 'Evaluación' },
  { year: 2022, name: 'Food and Biodiversity', type: 'Evaluación' },
  { year: 2021, name: 'Youth Voice', type: 'Evaluación' },
  { year: 2021, name: 'Female Migrant Workers', type: 'Evaluación' },
  { year: 2020, name: 'Desarrollo para Todos', type: 'Evaluación' },
  { year: 2020, name: 'Proyectos de Haití, Paraguay, Camboya, Filipinas, Colombia, Argelia y Túnez', type: 'Evaluación' },
]
