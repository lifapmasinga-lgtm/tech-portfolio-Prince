import { experience } from '@/lib/portfolio-data'
import { SectionHeading } from '../section-heading'

export function ExperienceSection() {
  return (
    <section>
      <SectionHeading
        eyebrow="Experience"
        title="Programs, certifications & virtual experience"
        description="Structured programmes that sharpened my security, AI and career-readiness skills."
      />
      <ol className="relative flex flex-col gap-6 border-l-2 border-primary/30 pl-8">
        {experience.map((item) => (
          <li key={item.title} className="relative">
            <span
              className="absolute -left-[41px] top-6 size-4 rounded-full border-4 border-background bg-primary"
              aria-hidden="true"
            />
            <div className="rounded-3xl border bg-card p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  {item.status}
                </span>
              </div>
              <p className="mt-3 leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
