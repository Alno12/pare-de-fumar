import type { Milestone } from './types'

export const MILESTONES: Milestone[] = [
  {
    minutesFromQuit: 20,
    title: '20 minutos',
    description: 'Sua pressão arterial e frequência cardíaca começam a normalizar.',
  },
  {
    minutesFromQuit: 12 * 60,
    title: '12 horas',
    description: 'O nível de monóxido de carbono no sangue cai para o normal.',
  },
  {
    minutesFromQuit: 24 * 60,
    title: '1 dia',
    description: 'O risco de ataque cardíaco já começa a diminuir.',
  },
  {
    minutesFromQuit: 2 * 24 * 60,
    title: '2 dias',
    description: 'As terminações nervosas começam a se regenerar. Olfato e paladar melhoram.',
  },
  {
    minutesFromQuit: 3 * 24 * 60,
    title: '3 dias',
    description: 'A nicotina saiu do seu corpo. Respirar já é mais fácil.',
  },
  {
    minutesFromQuit: 14 * 24 * 60,
    title: '2 semanas',
    description: 'Sua circulação melhora e caminhar/exercitar-se fica mais fácil.',
  },
  {
    minutesFromQuit: 30 * 24 * 60,
    title: '1 mês',
    description: 'Tosse e falta de ar diminuem. Os cílios pulmonares se recuperam.',
  },
  {
    minutesFromQuit: 90 * 24 * 60,
    title: '3 meses',
    description: 'Função pulmonar aumenta em até 10%.',
  },
  {
    minutesFromQuit: 270 * 24 * 60,
    title: '9 meses',
    description: 'Menos infecções respiratórias e mais energia no dia a dia.',
  },
  {
    minutesFromQuit: 365 * 24 * 60,
    title: '1 ano',
    description: 'Risco de doença cardíaca cai para a metade em relação a quem fuma.',
  },
  {
    minutesFromQuit: 5 * 365 * 24 * 60,
    title: '5 anos',
    description: 'Risco de derrame se aproxima do de quem nunca fumou.',
  },
  {
    minutesFromQuit: 10 * 365 * 24 * 60,
    title: '10 anos',
    description: 'Risco de morte por câncer de pulmão cai quase à metade.',
  },
]
