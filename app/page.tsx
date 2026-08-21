import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProjectsGrid } from "@/components/projects-grid"
import { SkillsCerts } from "@/components/skills-certs"
import { Workbench } from "@/components/workbench"
import { Footer } from "@/components/footer"
import { CursorGlow } from "@/components/cursor-glow"
import { ScrollReveal } from "@/components/scroll-reveal"
import { TechMarquee } from "@/components/tech-marquee"
import { ThreeBackground } from "@/components/three-background"
import { generateWebsiteStructuredData, generatePersonStructuredData } from "@/lib/structured-data"

export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yashraj.dev'
  const websiteStructuredData = generateWebsiteStructuredData(baseUrl)
  const personStructuredData = generatePersonStructuredData()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
      />
      <main className="relative min-h-screen overflow-hidden scanlines">
        <CursorGlow />
        <ThreeBackground />

        {/* Animated aurora glows in the background */}
        <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden" aria-hidden="true">
          <div className="animate-aurora absolute -top-32 -left-24 h-[38rem] w-[38rem] rounded-full bg-primary/10 blur-3xl" />
          <div
            className="animate-aurora absolute top-1/3 -right-24 h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-3xl"
            style={{ animationDelay: "5s" }}
          />
        </div>

        <div className="relative z-10">
          <Header />
          <HeroSection />
          <TechMarquee />
          <ScrollReveal>
            <ProjectsGrid />
          </ScrollReveal>
          <ScrollReveal direction="scale">
            <SkillsCerts />
          </ScrollReveal>
          <ScrollReveal>
            <Workbench />
          </ScrollReveal>
          <Footer />
        </div>
      </main>
    </>
  )
}
