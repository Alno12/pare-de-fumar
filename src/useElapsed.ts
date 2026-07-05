import { useEffect, useState } from 'react'

export function useElapsedMs(sinceISO: string) {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const elapsed = Math.max(0, now - new Date(sinceISO).getTime())
  return elapsed
}
