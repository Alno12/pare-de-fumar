import type { QuitProfile } from '../types'
import { useElapsedMs } from '../useElapsed'

interface Props {
  profile: QuitProfile
}

const MINUTES_OF_LIFE_PER_CIGARETTE = 11

export function StatsGrid({ profile }: Props) {
  const elapsed = useElapsedMs(profile.quitDateISO)
  const daysElapsed = elapsed / (1000 * 60 * 60 * 24)

  const cigarettesAvoided = daysElapsed * profile.cigarettesPerDay
  const moneySaved = (cigarettesAvoided / profile.cigarettesPerPack) * profile.pricePerPack
  const lifeRegainedMinutes = cigarettesAvoided * MINUTES_OF_LIFE_PER_CIGARETTE
  const lifeRegainedHours = lifeRegainedMinutes / 60

  const stats = [
    {
      label: 'Cigarros não fumados',
      value: Math.floor(cigarettesAvoided).toLocaleString('pt-BR'),
      emoji: '🚭',
    },
    {
      label: 'Dinheiro economizado',
      value: moneySaved.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
      emoji: '💰',
    },
    {
      label: 'Tempo de vida recuperado',
      value: `${lifeRegainedHours.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} h`,
      emoji: '⏳',
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800"
        >
          <div className="text-3xl">{stat.emoji}</div>
          <div className="mt-2 text-2xl font-bold text-slate-900 dark:text-slate-50">
            {stat.value}
          </div>
          <div className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
