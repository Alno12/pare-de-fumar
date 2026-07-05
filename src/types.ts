export interface QuitProfile {
  quitDateISO: string
  cigarettesPerDay: number
  cigarettesPerPack: number
  pricePerPack: number
  motivo: string
}

export interface Milestone {
  minutesFromQuit: number
  title: string
  description: string
}
