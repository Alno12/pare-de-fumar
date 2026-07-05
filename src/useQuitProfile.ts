import { useEffect, useState } from 'react'
import type { QuitProfile } from './types'

const STORAGE_KEY = 'pare-de-fumar:profile'

export function useQuitProfile() {
  const [profile, setProfile] = useState<QuitProfile | null>(() => {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    try {
      return JSON.parse(raw) as QuitProfile
    } catch {
      return null
    }
  })

  useEffect(() => {
    if (profile) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile))
    } else {
      localStorage.removeItem(STORAGE_KEY)
    }
  }, [profile])

  return { profile, setProfile }
}
