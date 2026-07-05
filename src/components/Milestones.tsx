import { MILESTONES } from '../milestones'
import { useElapsedMs } from '../useElapsed'

interface Props {
  quitDateISO: string
}

export function Milestones({ quitDateISO }: Props) {
  const elapsedMinutes = useElapsedMs(quitDateISO) / 1000 / 60

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
        Sua recuperação de saúde
      </h2>
      <ol className="mt-4 space-y-3">
        {MILESTONES.map((milestone) => {
          const reached = elapsedMinutes >= milestone.minutesFromQuit
          return (
            <li key={milestone.title} className="flex items-start gap-3">
              <span
                className={`mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                  reached
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-200 text-slate-500 dark:bg-slate-700 dark:text-slate-400'
                }`}
              >
                {reached ? '✓' : ''}
              </span>
              <div>
                <p
                  className={`font-medium ${
                    reached
                      ? 'text-slate-900 dark:text-slate-50'
                      : 'text-slate-400 dark:text-slate-500'
                  }`}
                >
                  {milestone.title}
                </p>
                <p
                  className={`text-sm ${
                    reached
                      ? 'text-slate-600 dark:text-slate-300'
                      : 'text-slate-400 dark:text-slate-500'
                  }`}
                >
                  {milestone.description}
                </p>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
