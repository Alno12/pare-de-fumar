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

  // Quando a data de parada ainda não chegou, o usuário está se preparando
  // para parar — o contador zerado não deve parecer "sem progresso", e sim
  // um convite a celebrar a decisão já tomada.
  const isFutureQuitDate = useMemo(
    () => new Date(profile.quitDateISO).getTime() > Date.now(),
    [profile.quitDateISO],
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

      {isFutureQuitDate && (
        <p className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-center text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
          Sua jornada começa em breve — você decidiu parar. Isso já é o primeiro passo. 💚
        </p>
      )}

      <div className="mt-6">
        <TimeCounter quitDateISO={profile.quitDateISO} />
      </div>

      {isFutureQuitDate && (
        <p className="mt-2 text-center text-xs text-slate-500 dark:text-slate-400">
          O contador vai começar a andar sozinho quando a data chegar. Até lá, aproveite para se preparar.
        </p>
      )}

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
