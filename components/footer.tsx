import { Github, Linkedin, Mail, ExternalLink, Heart, Instagram, Send, MessageCircle, Phone } from "lucide-react"
import { SteamIcon } from "./icons/steam-icon"
import { ContactForm } from "./contact-form"

const socialLinks = [
  { label: "GitHub", href: "https://github.com/yashraj-personal", handle: "@yashraj-personal", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yash-raj-2368b13a1",
    handle: "/in/yash-raj",
    icon: Linkedin,
  },
  { label: "Instagram", href: "https://www.instagram.com/yash.raj_3189", handle: "@yash.raj_3189", icon: Instagram },
  { label: "Steam", href: "https://steamcommunity.com/id/SOULCHIP456", handle: "SOULCHIP456", icon: SteamIcon },
  { label: "Telegram", href: "https://t.me/UNSEEN_SINISTER", handle: "@UNSEEN_SINISTER", icon: Send },
  { label: "WhatsApp", href: "https://wa.me/919060170251", handle: "+91 90601 70251", icon: MessageCircle },
  { label: "Call", href: "tel:+919060170251", handle: "+91 90601 70251", icon: Phone },
  { label: "Email", href: "mailto:yashraj.contactt@gmail.com", handle: "yashraj.contactt@gmail.com", icon: Mail },
]

export function Footer() {
  return (
    <footer id="connect" className="border-t border-border/30 px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:gap-16 lg:grid-cols-2">
          {/* Left column */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">Connect</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
                {"Let's build something "}
                <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text ">together</span>
              </h2>
            </div>
            <p className="max-w-md text-base sm:text-lg text-muted-foreground leading-relaxed">
              Always interested in collaborations, interesting problems, and conversations about code, security, and
              everything in between.
            </p>

            <ContactForm />
          </div>

          {/* Right column - Links */}
          <div className="space-y-6 lg:text-right animate-fade-in-up stagger-2">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-muted-foreground">
              Find me elsewhere
            </p>
            <div className="space-y-2">
              {socialLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" && link.label !== "Call" ? "_blank" : undefined}
                  rel={link.label !== "Email" && link.label !== "Call" ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-transparent p-4 transition-all duration-300 lg:flex-row-reverse active:bg-secondary/30 hover:border-border/50 hover:bg-card/50 glass animate-fade-in"
                  style={{ animationDelay: `${index * 100 + 400}ms` }}
                >
                  <div className="flex items-center gap-3 lg:flex-row-reverse">
                    <link.icon className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                    <span className="font-mono text-sm font-medium transition-colors group-hover:text-gradient">
                      {link.label}
                    </span>
                    {link.label !== "Email" && link.label !== "Call" && (
                      <ExternalLink className="h-3 w-3 text-muted-foreground/50 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
                    )}
                  </div>
                  <span className="font-mono text-xs text-muted-foreground truncate">{link.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 flex flex-col items-center justify-between gap-6 border-t border-border/30 pt-8 sm:pt-10 sm:flex-row animate-fade-in stagger-4">
          <div className="flex items-center gap-2.5 font-mono text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span>Forged with</span>
            <Heart className="h-3.5 w-3.5 text-destructive animate-pulse" />
            <span>& code</span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.slice(0, 4).map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-muted-foreground/50 transition-all duration-300 hover:text-primary hover:scale-110"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <p className="font-mono text-xs text-muted-foreground text-center sm:text-right">
            © {new Date().getFullYear()} Yash Raj — All experiments reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
