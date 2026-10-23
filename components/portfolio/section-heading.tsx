export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
      <h2 className="mt-2 font-serif text-3xl font-semibold text-balance md:text-4xl">{title}</h2>
      {description && <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">{description}</p>}
    </div>
  )
}
