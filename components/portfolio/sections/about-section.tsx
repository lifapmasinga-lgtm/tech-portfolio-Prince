import { BarChart3, Bot, Code2, Cpu } from 'lucide-react'
import { profile, services } from '@/lib/portfolio-data'
import { SectionHeading } from '../section-heading'

const icons = [Code2, BarChart3, Cpu, Bot]

export function AboutSection() {
  return (
    <section>
      <SectionHeading
        eyebrow="About"
        title="What I do"
        description={`I'm ${profile.name}, a developer who enjoys the space where solid engineering meets data and AI. I write object-oriented and concurrent Java, analyse data with Python and Pandas, and have built a security mindset through the MWR CyberSec virtual internship. I also bring real-world experience in customer interaction and stock control, so I understand the people behind the software.`}
      />
      <ul className="grid gap-5 sm:grid-cols-2">
        {services.map((service, i) => {
          const Icon = icons[i]
          return (
            <li key={service.title} className="rounded-3xl border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-primary/10">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{service.description}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
