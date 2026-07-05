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
          className="-my-2 flex min-h-11 items-center rounded-lg px-2 text-sm text-slate-500 underline transition hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-emerald-400 dark:focus-visible:ring-offset-slate-900"
        >
          Editar dados
        </button>
      </header>

      {isFutureQuitDate && (
        <div className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-center dark:bg-emerald-900/30">
          <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
            Sua jornada começa em breve — você decidiu parar. Isso já é o primeiro passo. 💚
          </p>
          <p className="mt-1 text-xs text-emerald-700/80 dark:text-emerald-300/80">
            O contador vai começar a andar sozinho quando a data chegar. Até lá, aproveite para se preparar.
          </p>
        </div>
      )}

      <div className="mt-6">
        <TimeCounter quitDateISO={profile.quitDateISO} />
      </div>

      <p className="mt-6 text-center text-base italic text-slate-500 dark:text-slate-400">
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
