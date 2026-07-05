import { useElapsedMs } from '../useElapsed'

interface Props {
  quitDateISO: string
}

function pad(n: number) {
  return n.toString().padStart(2, '0')
}

export function TimeCounter({ quitDateISO }: Props) {
  const elapsed = useElapsedMs(quitDateISO)

  const totalSeconds = Math.floor(elapsed / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  const label = `Você está sem fumar há ${days} ${days === 1 ? 'dia' : 'dias'}, ${hours} ${
    hours === 1 ? 'hora' : 'horas'
  } e ${minutes} ${minutes === 1 ? 'minuto' : 'minutos'}`

  return (
    <div
      role="timer"
      aria-label={label}
      className="rounded-2xl bg-emerald-600 px-6 py-8 text-white shadow-lg"
    >
      <p aria-hidden="true" className="text-center text-sm uppercase tracking-wide text-emerald-100">
        Você está sem fumar há
      </p>
      <div aria-hidden="true" className="mt-3 flex justify-center gap-3 sm:gap-6">
        <TimeBlock value={days} label="dias" />
        <TimeBlock value={pad(hours)} label="horas" />
        <TimeBlock value={pad(minutes)} label="min" />
        <TimeBlock value={pad(seconds)} label="seg" />
      </div>
    </div>
  )
}

function TimeBlock({ value, label }: { value: number | string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold tabular-nums sm:text-5xl">{value}</div>
      <div className="text-xs uppercase text-emerald-100">{label}</div>
    </div>
  )
}
