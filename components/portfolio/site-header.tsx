'use client'

import { tabs, type TabId } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'
import { HireMeButton } from './hire-me-button'
import { ThemeToggle } from './theme-toggle'

export function SiteHeader({ active, onSelect }: { active: TabId; onSelect: (id: TabId) => void }) {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <button
          type="button"
          onClick={() => onSelect('home')}
          className="flex items-center gap-2 font-serif text-xl font-semibold"
        >
          <span className="flex size-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            PL
          </span>
          <span className="hidden sm:inline">Masinga PL</span>
        </button>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <HireMeButton />
        </div>
      </div>
      <nav aria-label="Portfolio sections" className="mx-auto max-w-6xl overflow-x-auto px-4 pb-3 md:px-6">
        <ul role="tablist" className="flex w-max gap-1 rounded-full bg-muted p-1">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                type="button"
                role="tab"
                aria-selected={active === tab.id}
                onClick={() => onSelect(tab.id)}
                className={cn(
                  'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
                  active === tab.id
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
