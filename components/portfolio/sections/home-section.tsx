import { Award, BrainCircuit, Code2, ShieldCheck, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { experience, languages, profile, skillGroups, type TabId } from '@/lib/portfolio-data'
import { HireMeButton } from '../hire-me-button'

const floatingCards = [
  { icon: Code2, title: 'Java & Python', text: 'OOP · Concurrency', className: 'left-0 top-4', delay: '0s' },
  { icon: BrainCircuit, title: 'Data & ML', text: 'Pandas · EDA · Models', className: 'right-0 top-1/3', delay: '1.5s' },
  { icon: ShieldCheck, title: 'CyberSec + AI', text: 'MWR · CAPACITI · Google', className: 'bottom-2 left-6', delay: '3s' },
]

export function HomeSection({ onNavigate }: { onNavigate: (id: TabId) => void }) {
  return (
    <div className="flex flex-col gap-20">
      <section className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
            <Sparkles className="size-4" aria-hidden="true" />
            {profile.availability}
          </p>
          <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight text-balance md:text-6xl">
            {'Hi, I’m '}
            <span className="text-primary">{profile.name}</span>
          </h1>
          <p className="mt-2 text-lg font-medium text-muted-foreground">{profile.role}</p>
          <p className="mt-6 max-w-xl leading-relaxed text-pretty">{profile.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <HireMeButton size="lg" />
            <Button size="lg" variant="outline" className="rounded-full px-5" onClick={() => onNavigate('projects')}>
              View projects
            </Button>
          </div>
        </div>

        <div className="relative mx-auto h-[380px] w-full max-w-md" aria-label="Profile highlights">
          <div className="absolute inset-0 m-auto flex size-56 items-center justify-center rounded-full bg-gradient-to-br from-primary/80 to-accent shadow-2xl shadow-primary/30">
            <div className="flex size-44 flex-col items-center justify-center rounded-full bg-card text-center">
              <span className="font-serif text-5xl font-semibold text-primary">PL</span>
              <span className="mt-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">Masinga</span>
            </div>
          </div>
          {floatingCards.map((card) => (
            <div
              key={card.title}
              className={`animate-float-soft absolute flex items-center gap-3 rounded-2xl border bg-card/95 p-3 pr-4 shadow-lg ${card.className}`}
              style={{ animationDelay: card.delay }}
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <card.icon className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-semibold">{card.title}</span>
                <span className="block text-xs text-muted-foreground">{card.text}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="home-skills" className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border bg-card p-6 lg:col-span-2">
          <h2 id="home-skills" className="font-serif text-2xl font-semibold">
            Technical skills
          </h2>
          <dl className="mt-6 grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <dt className="text-sm font-semibold text-primary">{group.title}</dt>
                <dd className="mt-2 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="rounded-3xl border bg-card p-6">
          <h2 className="font-serif text-2xl font-semibold">Languages I code in</h2>
          <ul className="mt-6 flex flex-col gap-4">
            {languages.map((lang) => (
              <li key={lang.name}>
                <div className="flex items-baseline justify-between">
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-xs text-muted-foreground">{lang.detail}</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-muted" aria-hidden="true">
                  <div className="h-2 rounded-full bg-primary" style={{ width: `${lang.level}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="home-experience">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 id="home-experience" className="font-serif text-2xl font-semibold">
            Experience at a glance
          </h2>
          <Button variant="link" onClick={() => onNavigate('experience')}>
            See details
          </Button>
        </div>
        <ul className="grid gap-4 md:grid-cols-3">
          {experience.map((item) => (
            <li key={item.title} className="rounded-3xl border bg-card p-6">
              <Award className="size-6 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-semibold leading-snug">{item.title}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{item.status}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
