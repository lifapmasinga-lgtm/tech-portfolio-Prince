'use client'

import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { profile } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

export function buildHireMeMailto() {
  const subject = encodeURIComponent(`Hiring enquiry for ${profile.name}`)
  const body = encodeURIComponent(
    `Hi ${profile.name},\n\nI came across your portfolio and downloaded your CV. I'd love to talk about an opportunity with you.\n\nRole:\nCompany:\nBest time to chat:\n\nKind regards,\n`,
  )
  return `mailto:${profile.email}?subject=${subject}&body=${body}`
}

export function HireMeButton({ className, size = 'default' }: { className?: string; size?: 'default' | 'lg' }) {
  function handleClick() {
    const link = document.createElement('a')
    link.href = profile.cvPath
    link.download = profile.cvFileName
    document.body.appendChild(link)
    link.click()
    link.remove()
    window.setTimeout(() => {
      window.location.href = buildHireMeMailto()
    }, 400)
  }

  return (
    <Button
      onClick={handleClick}
      size={size}
      className={cn('rounded-full px-5 shadow-sm shadow-primary/30', className)}
    >
      <Download aria-hidden="true" />
      Hire me
    </Button>
  )
}
