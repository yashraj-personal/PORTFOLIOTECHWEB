"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
  Trophy,
  ShieldCheck,
  Award,
  FolderGit2,
  Star,
  MapPin,
  GraduationCap,
  Bug,
  Terminal,
  Sparkles,
  Phone,
} from "lucide-react"
import { SteamIcon } from "@/components/icons/steam-icon"
import { BrowserStatsWindow } from "@/components/browser-stats-window"

const counters = [
  { id: 1, label: "Public repos", value: 50, icon: FolderGit2, suffix: "+" },
  { id: 2, label: "Certifications", value: 2, icon: Award, suffix: "" },
  { id: 3, label: "Secondary score", value: 89, icon: GraduationCap, suffix: "%" },
  { id: 4, label: "Hackathon rounds cleared", value: 1, icon: Trophy, suffix: "" },
]

const skillLevels = [
  { name: "Python", level: 82 },
  { name: "Cybersecurity fundamentals", level: 74 },
  { name: "Linux / CLI", level: 78 },
  { name: "Machine Learning (Scikit-Learn)", level: 68 },
  { name: "C++", level: 60 },
  { name: "SQL", level: 65 },
]

const languageStats = [
  { name: "Python", percent: 46, color: "bg-primary" },
  { name: "JavaScript / HTML / CSS", percent: 28, color: "bg-yellow-500" },
  { name: "C++", percent: 16, color: "bg-blue-500" },
  { name: "Shell / SQL", percent: 10, color: "bg-purple-500" },
]

const timeline = [
  {
    id: 1,
    year: "2024",
    title: "Started AI/ML certification",
    detail: "Vishlesan i-Hub, IIT Patna — Certification in Artificial Intelligence and Machine Learning.",
    icon: Award,
  },
  {
    id: 2,
    year: "2025",
    title: "Scored 89% in Secondary School (CBSE)",
    detail: "Moved into Class 12 with PCM + Computer Science.",
    icon: GraduationCap,
  },
  {
    id: 3,
    year: "2025",
    title: "Responsible disclosure",
    detail: "Discovered and reported a security bug in an online learning platform.",
    icon: Bug,
  },
  {
    id: 4,
    year: "2026",
    title: "National hackathon selection round",
    detail: "Cleared the selection round of a national hackathon with an AI-powered prediction model.",
    icon: Trophy,
  },
  {
    id: 5,
    year: "2026",
    title: "Started Google Cybersecurity path",
    detail: "Foundations of Cybersecurity — Google / Coursera, in progress.",
    icon: ShieldCheck,
  },
]

function useCountUp(target: number, active: boolean, duration = 1200) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let start: number | null = null
    let frameId: number

    function step(timestamp: number) {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setValue(Math.floor(progress * target))
      if (progress < 1) {
        frameId = requestAnimationFrame(step)
      } else {
        setValue(target)
      }
    }

    frameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frameId)
  }, [active, target, duration])

  return value
}

function CounterCard({
  icon: Icon,
  label,
  value,
  suffix,
  active,
  delay,
}: {
  icon: typeof Trophy
  label: string
  value: number
  suffix: string
  active: boolean
  delay: number
}) {
  const count = useCountUp(value, active)
  return (
    <div
      className="rounded-xl border border-border/60 bg-card/40 glass p-6 text-center hover-lift animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <p className="text-3xl font-bold tracking-tight text-foreground">
        {count}
        {suffix}
      </p>
      <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
    </div>
  )
}

export function StatsPageContent() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionRef} className="px-4 sm:px-6 pt-24 sm:pt-28 pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl">
        {/* Profile header */}
        <div className="mb-12 flex flex-col items-center gap-6 text-center sm:mb-16 sm:flex-row sm:items-start sm:gap-8 sm:text-left animate-fade-in-up">
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border-2 border-primary/40 sm:h-32 sm:w-32">
            <Image src="/images/yash-raj.jpg" alt="Portrait of Yash Raj" fill sizes="128px" className="object-cover" />
          </div>
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
              User Stats
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Yash Raj</h1>
            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
              {'"Breaking systems to understand them, building defenses to protect them."'}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs text-muted-foreground sm:justify-start">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                Gaya, Bihar, India
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="h-3.5 w-3.5 text-primary" />
                Class 12 · PCM + CS (CBSE)
              </span>
              <a
                href="tel:+919060170251"
                className="flex items-center gap-1.5 transition-colors hover:text-primary"
              >
                <Phone className="h-3.5 w-3.5 text-primary" />
                +91 90601 70251
              </a>
              <a
                href="https://steamcommunity.com/id/SOULCHIP456"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-primary"
              >
                <SteamIcon className="h-3.5 w-3.5 text-primary" />
                SOULCHIP456
              </a>
            </div>
          </div>
        </div>

        {/* Browser stats window */}
        <div className="mb-12 sm:mb-16">
          <BrowserStatsWindow />
        </div>

        {/* Counters */}
        <div className="mb-12 grid grid-cols-2 gap-4 sm:mb-16 sm:grid-cols-4">
          {counters.map((c, i) => (
            <CounterCard
              key={c.id}
              icon={c.icon}
              label={c.label}
              value={c.value}
              suffix={c.suffix}
              active={isVisible}
              delay={i * 100}
            />
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Skill proficiency */}
          <div
            className={cn(
              "rounded-xl border border-border/60 bg-card/40 glass p-6 sm:p-7 opacity-0",
              isVisible && "animate-fade-in-up stagger-2",
            )}
          >
            <div className="mb-6 flex items-center gap-2">
              <Terminal className="h-4 w-4 text-primary" />
              <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Skill Proficiency</h2>
            </div>
            <div className="space-y-5">
              {skillLevels.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between font-mono text-xs">
                    <span className="text-foreground">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-secondary/80">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                      style={{ width: isVisible ? `${skill.level}%` : "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Language breakdown */}
          <div
            className={cn(
              "rounded-xl border border-border/60 bg-card/40 glass p-6 sm:p-7 opacity-0",
              isVisible && "animate-fade-in-up stagger-3",
            )}
          >
            <div className="mb-6 flex items-center gap-2">
              <Star className="h-4 w-4 text-primary" />
              <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Code Language Mix (est.)
              </h2>
            </div>
            <div className="mb-5 flex h-3 w-full overflow-hidden rounded-full bg-secondary/60">
              {languageStats.map((lang) => (
                <div
                  key={lang.name}
                  className={cn(lang.color, "h-full transition-all duration-1000 ease-out")}
                  style={{ width: isVisible ? `${lang.percent}%` : "0%" }}
                />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3">
              {languageStats.map((lang) => (
                <div key={lang.name} className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                  <span className={cn("h-2 w-2 shrink-0 rounded-full", lang.color)} />
                  <span className="truncate">{lang.name}</span>
                  <span className="ml-auto text-foreground">{lang.percent}%</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-lg border border-border/50 bg-secondary/20 p-4">
              <p className="mb-1 flex items-center gap-2 font-mono text-xs text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Languages spoken
              </p>
              <p className="text-sm text-muted-foreground">Hindi &middot; English</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-12 sm:mt-16">
          <div className="mb-8 space-y-2 animate-fade-in-up">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Timeline</p>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Milestones</h2>
          </div>
          <div className="relative space-y-6 border-l border-border/60 pl-6 sm:pl-8">
            {timeline.map((item, index) => (
              <div
                key={item.id}
                className={cn(
                  "relative opacity-0",
                  isVisible && "animate-fade-in-up",
                )}
                style={{ animationDelay: `${index * 100 + 100}ms` }}
              >
                <span className="absolute -left-[31px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-background text-primary sm:-left-[39px]">
                  <item.icon className="h-3 w-3" />
                </span>
                <div className="rounded-xl border border-border/60 bg-card/40 glass p-5">
                  <div className="mb-1 flex items-center gap-3 font-mono text-xs text-muted-foreground">
                    <span className="text-primary">{item.year}</span>
                  </div>
                  <h3 className="mb-1 text-base font-semibold tracking-tight">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
