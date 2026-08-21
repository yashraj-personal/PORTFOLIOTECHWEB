"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type Direction = "up" | "left" | "right" | "scale"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  /** Reveal direction/style */
  direction?: Direction
  /** Delay in ms before the reveal transition begins */
  delay?: number
  /** Render as a different element (defaults to div) */
  as?: "div" | "section" | "li" | "article"
}

const directionClass: Record<Direction, string> = {
  up: "",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
}

export function ScrollReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // If IntersectionObserver is unavailable, just show the content.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", directionClass[direction], visible && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
