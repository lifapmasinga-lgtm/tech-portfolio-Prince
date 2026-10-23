'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onSystemChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem('theme')) return
      document.documentElement.classList.toggle('dark', e.matches)
      setIsDark(e.matches)
    }
    media.addEventListener('change', onSystemChange)
    return () => media.removeEventListener('change', onSystemChange)
  }, [])

  function toggle() {
    const next = !isDark
    document.documentElement.classList.toggle('dark', next)
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (next === systemDark) localStorage.removeItem('theme')
    else localStorage.setItem('theme', next ? 'dark' : 'light')
    setIsDark(next)
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="rounded-full"
    >
      {isDark ? <Sun /> : <Moon />}
    </Button>
  )
}
