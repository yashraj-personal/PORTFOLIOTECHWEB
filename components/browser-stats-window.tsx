"use client"

import { useMemo } from "react"
import { Lock, RotateCw, ArrowLeft, ArrowRight, GitCommitHorizontal, Flame, Bug } from "lucide-react"
import { cn } from "@/lib/utils"

const WEEKS = 30
const DAYS = 7

// Deterministic pseudo-activity so the heatmap looks the same on every render (no hydration mismatch).
function activityLevel(week: number, day: number) {
  const seed = (week * 13 + day * 7) % 17
  if (seed < 6) return 0
  if (seed < 10) return 1
  if (seed < 14) return 2
  return 3
}

const levelClass = [
  "bg-secondary/60",
  "bg-primary/25",
  "bg-primary/55",
  "bg-primary",
]

const readouts = [
  { label: "commits (est.) / week", value: "18", icon: GitCommitHorizontal },
  { label: "current streak", value: "9d", icon: Flame },
  { label: "bugs reported", value: "1", icon: Bug },
]

export function BrowserStatsWindow() {
  const grid = useMemo(
    () =>
      Array.from({ length: WEEKS }, (_, week) => Array.from({ length: DAYS }, (_, day) => activityLevel(week, day))),
    [],
  )

  return (
    <div className="overflow-hidden rounded-xl border border-border/60 bg-card/40 glass shadow-lg shadow-black/5 animate-fade-in-up">
      {/* Browser chrome */}
      <div className="flex items-center gap-3 border-b border-border/60 bg-secondary/30 px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
        </div>
        <div className="hidden items-center gap-2 text-muted-foreground/60 sm:flex">
          <ArrowLeft className="h-3.5 w-3.5" />
          <ArrowRight className="h-3.5 w-3.5" />
          <RotateCw className="h-3.5 w-3.5" />
        </div>
        <div className="flex flex-1 items-center gap-2 rounded-md border border-border/50 bg-background/60 px-3 py-1.5 font-mono text-[11px] text-muted-foreground">
          <Lock className="h-3 w-3 text-primary shrink-0" />
          <span className="truncate">yashraj.dev/stats</span>
        </div>
      </div>

      {/* "Page" content */}
      <div className="p-5 sm:p-6">
        <div className="mb-5 flex items-center justify-between">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Activity Feed</p>
          <span className="flex items-center gap-1.5 font-mono text-[10px] text-primary">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            live
          </span>
        </div>

        <div className="overflow-x-auto pb-1">
          <div className="flex gap-[3px]">
            {grid.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.map((level, di) => (
                  <span
                    key={di}
                    className={cn("h-2.5 w-2.5 rounded-[2px]", levelClass[level])}
                    title={`activity level ${level}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {readouts.map((r) => (
            <div
              key={r.label}
              className="flex items-center gap-3 rounded-lg border border-border/50 bg-secondary/20 px-4 py-3"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                <r.icon className="h-3.5 w-3.5" />
              </div>
              <div>
                <p className="text-base font-semibold leading-none tracking-tight text-foreground">{r.value}</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{r.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
