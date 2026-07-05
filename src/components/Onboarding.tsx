import { useState } from 'react'
import type { QuitProfile } from '../types'

interface Props {
  onSubmit: (profile: QuitProfile) => void
}

export function Onboarding({ onSubmit }: Props) {
  const [quitDateISO, setQuitDateISO] = useState(() => new Date().toISOString().slice(0, 16))
  const [cigarettesPerDay, setCigarettesPerDay] = useState(10)
  const [cigarettesPerPack, setCigarettesPerPack] = useState(20)
  const [pricePerPack, setPricePerPack] = useState(12)
  const [motivo, setMotivo] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onSubmit({ quitDateISO, cigarettesPerDay, cigarettesPerPack, pricePerPack, motivo })
  }

  return (
    <div className="mx-auto max-w-md px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-emerald-600 dark:text-emerald-400">
        Parar de Fumar
      </h1>
      <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
        Vamos acompanhar essa jornada com você. Leva menos de um minuto para começar.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
            Quando você parou (ou vai parar) de fumar?
          </label>
          <input
            type="datetime-local"
            value={quitDateISO}
            onChange={(e) => setQuitDateISO(e.target.value)}
            required
            className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100"
          />
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Pode ser no passado ou uma data futura em que você decidiu parar. Não existe resposta errada.
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
            Em média, quantos cigarros você fumava por dia?
          </label>
          <input
            type="number"
            min={1}
            value={cigarettesPerDay}
            onChange={(e) => setCigarettesPerDay(Number(e.target.value))}
            required
            placeholder="Ex: 10"
            className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100"
          />
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Um valor aproximado já ajuda. Você pode ajustar depois.
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
            Quantos cigarros vinham em cada maço?
          </label>
          <input
            type="number"
            min={1}
            value={cigarettesPerPack}
            onChange={(e) => setCigarettesPerPack(Number(e.target.value))}
            required
            placeholder="Ex: 20"
            className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
            Quanto custava o maço (R$)?
          </label>
          <input
            type="number"
            min={0}
            step="0.01"
            value={pricePerPack}
            onChange={(e) => setPricePerPack(Number(e.target.value))}
            required
            placeholder="Ex: 12,00"
            className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100"
          />
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Usamos isso só para mostrar quanto você está economizando.
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
            O que te motiva a parar? (opcional)
          </label>
          <textarea
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
            placeholder="Ex: quero mais saúde para minha família"
            className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100"
            rows={3}
          />
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Vamos te mostrar isso nos momentos difíceis, para lembrar por que você começou.
          </p>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700"
        >
          Começar minha jornada
        </button>
      </form>
    </div>
  )
}
