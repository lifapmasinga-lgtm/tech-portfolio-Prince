import { languages, skillGroups } from '@/lib/portfolio-data'
import { SectionHeading } from '../section-heading'

export function SkillsSection() {
  return (
    <section>
      <SectionHeading
        eyebrow="Skills"
        title="My toolkit"
        description="Languages, frameworks and environments I use to design, build and ship."
      />
      <div className="grid gap-5 lg:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-3xl border bg-card p-6">
            <h3 className="text-lg font-semibold">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="rounded-full border border-primary/30 bg-accent/60 px-3 py-1.5 text-sm text-accent-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-3xl border bg-card p-6">
        <h3 className="text-lg font-semibold">Coding languages</h3>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2">
          {languages.map((lang) => (
            <li key={lang.name}>
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-medium">{lang.name}</span>
                <span className="text-sm text-muted-foreground">{lang.detail}</span>
              </div>
              <div
                className="mt-2 h-2.5 rounded-full bg-muted"
                role="progressbar"
                aria-label={`${lang.name} proficiency`}
                aria-valuenow={lang.level}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="h-2.5 rounded-full bg-primary" style={{ width: `${lang.level}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
