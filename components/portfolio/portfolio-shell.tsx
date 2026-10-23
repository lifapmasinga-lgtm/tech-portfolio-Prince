'use client'

import { useRef, useState } from 'react'
import { profile, tabs, type TabId } from '@/lib/portfolio-data'
import { BallerinaLoader } from './ballerina-loader'
import { ChatWidget } from './chat-widget'
import { SiteHeader } from './site-header'
import { AboutSection } from './sections/about-section'
import { ContactSection } from './sections/contact-section'
import { ExperienceSection } from './sections/experience-section'
import { HomeSection } from './sections/home-section'
import { ProjectsSection } from './sections/projects-section'
import { SkillsSection } from './sections/skills-section'

const LOADER_MS = 1100

export function PortfolioShell() {
  const [active, setActive] = useState<TabId>('home')
  const [loadingTab, setLoadingTab] = useState<TabId | null>(null)
  const timer = useRef<number | null>(null)

  function navigate(id: TabId) {
    if (id === active && !loadingTab) return
    if (timer.current) window.clearTimeout(timer.current)
    setLoadingTab(id)
    timer.current = window.setTimeout(() => {
      setActive(id)
      setLoadingTab(null)
      window.scrollTo({ top: 0 })
    }, LOADER_MS)
  }

  const loadingLabel = tabs.find((t) => t.id === loadingTab)?.label

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader active={loadingTab ?? active} onSelect={navigate} />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 md:px-6 md:py-16">
        {active === 'home' && <HomeSection onNavigate={navigate} />}
        {active === 'about' && <AboutSection />}
        {active === 'skills' && <SkillsSection />}
        {active === 'projects' && <ProjectsSection />}
        {active === 'experience' && <ExperienceSection />}
        {active === 'contact' && <ContactSection />}
      </main>
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        {`© ${new Date().getFullYear()} ${profile.name}. Designed with care.`}
      </footer>
      {loadingLabel && <BallerinaLoader label={loadingLabel} />}
      <ChatWidget />
    </div>
  )
}
