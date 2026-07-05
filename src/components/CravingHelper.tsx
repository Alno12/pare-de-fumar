import { useEffect, useRef, useState } from 'react'
import { CRAVING_TIPS } from '../tips'

export function CravingHelper() {
  const [open, setOpen] = useState(false)
  const [tip, setTip] = useState(CRAVING_TIPS[0])
  const [breathPhase, setBreathPhase] = useState<'inspire' | 'segure' | 'expire' | null>(null)

  const sosButtonRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  function openHelper() {
    setTip(CRAVING_TIPS[Math.floor(Math.random() * CRAVING_TIPS.length)])
    setOpen(true)
  }

  function closeHelper() {
    setOpen(false)
    setBreathPhase(null)
    sosButtonRef.current?.focus()
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

  // Foco inicial ao abrir o modal.
  useEffect(() => {
    if (open) {
      closeButtonRef.current?.focus()
    }
  }, [open])

  // Fechar com Esc e prender o foco dentro do modal enquanto aberto.
  useEffect(() => {
    if (!open) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeHelper()
        return
      }

      if (event.key === 'Tab') {
        const container = dialogRef.current
        if (!container) return

        const focusable = Array.from(
          container.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
          ),
        ).filter((el) => !el.hasAttribute('disabled'))

        if (focusable.length === 0) return

        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        const active = document.activeElement

        if (event.shiftKey) {
          if (active === first || !container.contains(active)) {
            event.preventDefault()
            last.focus()
          }
        } else {
          if (active === last || !container.contains(active)) {
            event.preventDefault()
            first.focus()
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  return (
    <>
      <button
        ref={sosButtonRef}
        type="button"
        onClick={openHelper}
        aria-label="Pedir ajuda: estou com vontade de fumar"
        className="fixed bottom-6 right-6 rounded-full bg-rose-600 px-5 py-4 font-semibold text-white shadow-lg transition hover:bg-rose-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rose-300 focus-visible:ring-offset-2"
      >
        <span aria-hidden="true">🆘 </span>Estou com vontade
      </button>

      {open && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 p-4"
          onClick={closeHelper}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="craving-helper-title"
            className="animate-modal-in w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-xl dark:bg-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="craving-helper-title" className="text-xl font-bold text-slate-900 dark:text-slate-50">
              Vai passar. Respire.
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">{tip}</p>

            {breathPhase ? (
              <div
                role="status"
                aria-live="polite"
                className={`mx-auto mt-6 flex h-32 w-32 items-center justify-center rounded-full text-white font-semibold transition-all duration-[4000ms] motion-reduce:scale-100 motion-reduce:transition-none motion-reduce:duration-0 ${
                  breathPhase === 'inspire'
                    ? 'scale-125 bg-emerald-700'
                    : breathPhase === 'segure'
                      ? 'scale-125 bg-amber-700'
                      : 'scale-90 bg-sky-700'
                }`}
              >
                {breathPhase === 'inspire' ? 'Inspire' : breathPhase === 'segure' ? 'Segure' : 'Expire'}
              </div>
            ) : (
              <button
                type="button"
                onClick={startBreathing}
                className="mt-6 w-full rounded-lg bg-emerald-600 py-2 font-medium text-white transition hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300 focus-visible:ring-offset-2"
              >
                Fazer exercício de respiração
              </button>
            )}

            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeHelper}
              className="mt-4 w-full rounded-lg border border-slate-300 py-2 font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
            >
              Já passou, fechar
            </button>
          </div>
        </div>
      )}
    </>
  )
}
