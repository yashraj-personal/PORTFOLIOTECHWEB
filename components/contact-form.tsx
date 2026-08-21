"use client"

import { useState, type FormEvent } from "react"
import { Loader2, Mail } from "lucide-react"

const RECIPIENT = "yashraj.contactt@gmail.com"

export function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSending, setIsSending] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) return

    setIsSending(true)

    const subject = `Portfolio inquiry from ${name}`
    const body = `${message}\n\n—\nFrom: ${name}\nReply-to: ${email}`

    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      RECIPIENT,
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Open Gmail's web compose in a new tab; fall back to the default mail client if it's blocked.
    const newWindow = window.open(gmailComposeUrl, "_blank", "noopener,noreferrer")
    if (!newWindow) {
      window.location.href = `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }

    window.setTimeout(() => setIsSending(false), 800)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 pt-2" aria-label="Contact form">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="contact-name" className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full rounded-lg border border-border/60 bg-card/40 px-3.5 py-2.5 font-mono text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary/60 focus:bg-card/70"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="contact-email" className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-lg border border-border/60 bg-card/40 px-3.5 py-2.5 font-mono text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary/60 focus:bg-card/70"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="contact-message" className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full resize-none rounded-lg border border-border/60 bg-card/40 px-3.5 py-2.5 font-mono text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary/60 focus:bg-card/70"
        />
      </div>

      <button
        type="submit"
        disabled={isSending}
        className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl border border-primary bg-primary/10 px-8 py-4 font-mono text-sm text-primary transition-all duration-500 hover:text-primary-foreground active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {isSending ? (
          <Loader2 className="relative z-10 h-4 w-4 animate-spin" />
        ) : (
          <Mail className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
        )}
        <span className="relative z-10">{isSending ? "opening gmail…" : "send a signal"}</span>
        <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 group-hover:translate-x-0" />
      </button>
      <p className="font-mono text-[11px] text-muted-foreground/70">Opens Gmail compose, addressed to {RECIPIENT}</p>
    </form>
  )
}
