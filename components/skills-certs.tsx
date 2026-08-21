"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ShieldCheck, BrainCircuit, Terminal, Award, Bug, Trophy } from "lucide-react"

const skillGroups = [
  {
    id: "security",
    label: "Cybersecurity",
    icon: ShieldCheck,
    items: ["Linux (CLI)", "Permission Analysis", "Vulnerability Reporting", "Threat Modeling"],
  },
  {
    id: "ai",
    label: "AI / Machine Learning",
    icon: BrainCircuit,
    items: ["Python", "NumPy", "Pandas", "Scikit-Learn"],
  },
  {
    id: "dev",
    label: "Development",
    icon: Terminal,
    items: ["C++", "SQL", "Git", "VS Code"],
  },
]

const certifications = [
  {
    id: 1,
    title: "Foundations of Cybersecurity",
    issuer: "Google / Coursera",
    date: "2026 — Present",
  },
  {
    id: 2,
    title: "Certification in Artificial Intelligence & Machine Learning",
    issuer: "Vishlesan i-Hub, IIT Patna",
    date: "2024 — 2025",
  },
]

const highlights = [
  {
    id: 1,
    title: "National hackathon selection round",
    excerpt: "Cleared the selection round of a national hackathon with an AI-powered prediction model.",
    category: "achievement",
    icon: Trophy,
    color: "from-primary/20 to-emerald-500/20",
  },
  {
    id: 2,
    title: "Mobile Privacy & Security Analysis",
    excerpt:
      "Built a security proof-of-concept exposing how malicious apps silently bypass permission prompts to access storage, photos, and live camera/video feeds.",
    category: "security",
    icon: ShieldCheck,
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 3,
    title: "Responsible disclosure",
    excerpt: "Discovered and responsibly reported a security bug in an online learning platform.",
    category: "disclosure",
    icon: Bug,
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    id: 4,
    title: "Self-taught Linux",
    excerpt: "Practical, hands-on command-line experience gained outside the classroom, by choice.",
    category: "systems",
    icon: Terminal,
    color: "from-blue-500/20 to-cyan-500/20",
  },
]

export function SkillsCerts() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="notes" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 space-y-3 animate-fade-in-up">
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
            Skill Tree
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Skills &amp; Certifications</h2>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Tools, credentials, and the field notes worth bragging about.
          </p>
        </div>

        {/* Skill groups */}
        <div className="mb-10 grid gap-5 sm:grid-cols-3">
          {skillGroups.map((group, index) => (
            <div
              key={group.id}
              className="rounded-xl border border-border/60 bg-card/40 glass p-6 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 100 + 100}ms` }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 text-primary">
                  <group.icon className="h-4 w-4" />
                </div>
                <h3 className="font-mono text-sm font-semibold tracking-tight">{group.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border/80 bg-secondary/60 px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-10 rounded-xl border border-border/60 bg-card/40 glass p-6 sm:p-7 animate-fade-in-up stagger-2">
          <div className="mb-5 flex items-center gap-3">
            <Award className="h-4 w-4 text-primary" />
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Certifications</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((cert) => (
              <div key={cert.id} className="rounded-lg border border-border/50 bg-secondary/20 p-4">
                <p className="mb-1 text-sm font-semibold tracking-tight">{cert.title}</p>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                <p className="mt-2 font-mono text-xs text-primary">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="grid gap-5 md:grid-cols-2">
          {highlights.map((note, index) => (
            <article
              key={note.id}
              className={cn(
                "group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-card/40 glass p-6 sm:p-7 transition-all duration-400 hover:border-primary/40 hover:bg-card/60 active:scale-[0.99] hover-lift animate-fade-in-up",
                expanded === note.id && "border-primary/50 bg-card/70",
              )}
              style={{ animationDelay: `${index * 100 + 300}ms` }}
              onClick={() => setExpanded(expanded === note.id ? null : note.id)}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                  note.color,
                )}
              />
              <div className="relative z-10">
                <div className="mb-4 sm:mb-5 flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2 rounded-lg border border-border/80 bg-secondary/60 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors group-hover:border-primary/50 group-hover:text-foreground">
                    <note.icon className="h-3.5 w-3.5" />
                    {note.category}
                  </span>
                </div>
                <h3 className="mb-3 text-lg sm:text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-gradient">
                  {note.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{note.excerpt}</p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-transparent transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
