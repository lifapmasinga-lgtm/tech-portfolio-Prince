'use client'

import { Mail, MapPin, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { profile } from '@/lib/portfolio-data'
import { HireMeButton } from '../hire-me-button'
import { SectionHeading } from '../section-heading'

const inputClass =
  'w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none transition focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40'

export function ContactSection() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${data.get('email')})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section>
      <SectionHeading
        eyebrow="Contact"
        title="Let's work together"
        description="Have a role, project or question in mind? Send a message or grab my CV."
      />
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="flex flex-col gap-4 rounded-3xl bg-primary p-6 text-primary-foreground lg:col-span-2">
          <h3 className="font-serif text-2xl font-semibold">Get in touch</h3>
          <p className="leading-relaxed opacity-90">{profile.availability}.</p>
          <a href={`mailto:${profile.email}`} className="flex items-center gap-3 underline-offset-4 hover:underline">
            <Mail className="size-5" aria-hidden="true" />
            {profile.email}
          </a>
          <p className="flex items-center gap-3">
            <MapPin className="size-5" aria-hidden="true" />
            {profile.location}
          </p>
          <div className="mt-auto pt-4">
            <HireMeButton className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" />
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-3xl border bg-card p-6 lg:col-span-3">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 text-sm font-medium">
              Name
              <input name="name" required maxLength={80} autoComplete="name" className={inputClass} />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-medium">
              Email
              <input name="email" type="email" required maxLength={120} autoComplete="email" className={inputClass} />
            </label>
          </div>
          <label className="flex flex-col gap-1.5 text-sm font-medium">
            Message
            <textarea name="message" required maxLength={2000} rows={5} className={inputClass} />
          </label>
          <Button type="submit" size="lg" className="self-start rounded-full px-6">
            <Send aria-hidden="true" />
            Send message
          </Button>
        </form>
      </div>
    </section>
  )
}
