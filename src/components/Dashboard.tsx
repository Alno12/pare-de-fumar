import { useMemo } from 'react'
import type { QuitProfile } from '../types'
import { TimeCounter } from './TimeCounter'
import { StatsGrid } from './StatsGrid'
import { Milestones } from './Milestones'
import { CravingHelper } from './CravingHelper'
import { MOTIVATIONAL_QUOTES } from '../tips'

interface Props {
  profile: QuitProfile
  onReset: () => void
}

export function Dashboard({ profile, onReset }: Props) {
  const quote = useMemo(
    () => MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)],
    [],
  )

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 pb-28">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
          🚭 Parar de Fumar
        </h1>
        <button
          type="button"
          onClick={onReset}
          className="text-sm text-slate-500 underline hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
        >
          Editar dados
        </button>
      </header>

      <div className="mt-6">
        <TimeCounter quitDateISO={profile.quitDateISO} />
      </div>

      <p className="mt-6 text-center text-lg italic text-slate-600 dark:text-slate-300">
        "{quote}"
      </p>

      {profile.motivo && (
        <p className="mt-2 text-center text-sm text-slate-500 dark:text-slate-400">
          Seu motivo: <span className="font-medium">{profile.motivo}</span>
        </p>
      )}

      <div className="mt-8">
        <StatsGrid profile={profile} />
      </div>

      <div className="mt-8">
        <Milestones quitDateISO={profile.quitDateISO} />
      </div>

      <CravingHelper />
    </div>
  )
}
