"use client"

import { useEffect, useRef } from "react"

const CHARS = "01アイウエオカキクケコサシスセソ$#{}<>/\\;:_+-=%&*ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

export function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    let columns = 0
    let drops: number[] = []
    const fontSize = 15

    function setup() {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      columns = Math.floor(width / fontSize)
      drops = Array.from({ length: columns }, () => Math.floor((Math.random() * height) / fontSize))
    }

    setup()

    const isDark = document.documentElement.classList.contains("dark")
    const glyphColor = isDark ? "rgba(52, 211, 153, 0.55)" : "rgba(16, 122, 87, 0.35)"

    let frame = 0
    let animationId: number

    function draw() {
      frame++
      // Slower cadence for a calmer, less cluttered feel
      if (frame % 2 === 0) {
        ctx!.clearRect(0, 0, width, height)
        ctx!.font = `${fontSize}px monospace`

        for (let i = 0; i < drops.length; i++) {
          const char = CHARS[Math.floor(Math.random() * CHARS.length)]
          const x = i * fontSize
          const y = drops[i] * fontSize

          ctx!.fillStyle = glyphColor
          ctx!.fillText(char, x, y)

          if (y > height && Math.random() > 0.975) {
            drops[i] = 0
          } else {
            drops[i]++
          }
        }
      }
      animationId = requestAnimationFrame(draw)
    }

    draw()

    function handleResize() {
      setup()
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.15] mix-blend-screen dark:opacity-[0.18]"
    />
  )
}
