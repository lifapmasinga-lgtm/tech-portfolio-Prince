import { FolderGit2 } from 'lucide-react'
import { projects } from '@/lib/portfolio-data'
import { SectionHeading } from '../section-heading'

export function ProjectsSection() {
  return (
    <section>
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="A snapshot of projects across software engineering, data science and mobile delivery."
      />
      <ul className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <li
            key={project.title}
            className="group flex flex-col rounded-3xl border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
          >
            <div className="flex items-center justify-between">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                <FolderGit2 className="size-6" aria-hidden="true" />
              </span>
              <span className="font-serif text-3xl text-primary/40">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <h3 className="mt-5 text-lg font-semibold">{project.title}</h3>
            <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">{project.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
              {project.tags.map((tag) => (
                <li key={tag} className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}
