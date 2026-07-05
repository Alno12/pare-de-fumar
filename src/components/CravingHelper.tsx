import { useState } from 'react'
import { CRAVING_TIPS } from '../tips'

export function CravingHelper() {
  const [open, setOpen] = useState(false)
  const [tip, setTip] = useState(CRAVING_TIPS[0])
  const [breathPhase, setBreathPhase] = useState<'inspire' | 'segure' | 'expire' | null>(null)

  function openHelper() {
    setTip(CRAVING_TIPS[Math.floor(Math.random() * CRAVING_TIPS.length)])
    setOpen(true)
  }

  function startBreathing() {
    const sequence: Array<{ phase: 'inspire' | 'segure' | 'expire'; duration: number }> = [
      { phase: 'inspire', duration: 4000 },
      { phase: 'segure', duration: 4000 },
      { phase: 'expire', duration: 6000 },
    ]
    let i = 0
    function next() {
      if (i >= sequence.length) {
        setBreathPhase(null)
        return
      }
      setBreathPhase(sequence[i].phase)
      setTimeout(() => {
        i += 1
        next()
      }, sequence[i].duration)
    }
    next()
  }

  return (
    <>
      <button
        type="button"
        onClick={openHelper}
        className="fixed bottom-6 right-6 rounded-full bg-rose-600 px-5 py-4 font-semibold text-white shadow-lg transition hover:bg-rose-700"
      >
        🆘 Estou com vontade
      </button>

      {open && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-xl dark:bg-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50">
              Vai passar. Respire.
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">{tip}</p>

            {breathPhase ? (
              <div
                className={`mx-auto mt-6 flex h-32 w-32 items-center justify-center rounded-full text-white font-semibold transition-all duration-[4000ms] ${
                  breathPhase === 'inspire'
                    ? 'scale-125 bg-emerald-500'
                    : breathPhase === 'segure'
                      ? 'scale-125 bg-amber-500'
                      : 'scale-90 bg-sky-500'
                }`}
              >
                {breathPhase === 'inspire' ? 'Inspire' : breathPhase === 'segure' ? 'Segure' : 'Expire'}
              </div>
            ) : (
              <button
                type="button"
                onClick={startBreathing}
                className="mt-6 w-full rounded-lg bg-emerald-600 py-2 font-medium text-white hover:bg-emerald-700"
              >
                Fazer exercício de respiração
              </button>
            )}

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-4 w-full rounded-lg border border-slate-300 py-2 font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              Já passou, fechar
            </button>
          </div>
        </div>
      )}
    </>
  )
}
