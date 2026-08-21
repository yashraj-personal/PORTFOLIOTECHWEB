const items = [
  "Linux",
  "Kali",
  "Python",
  "Bash",
  "Wireshark",
  "Burp Suite",
  "Nmap",
  "Metasploit",
  "PyTorch",
  "TensorFlow",
  "Ghidra",
  "Docker",
  "Git",
  "C",
  "Reverse Engineering",
  "OSINT",
]

export function TechMarquee() {
  // Duplicate the list so the loop is seamless when translated -50%.
  const loop = [...items, ...items]

  return (
    <section className="relative border-y border-border/60 bg-card/30 py-6" aria-label="Tools and technologies">
      <div className="marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
          {loop.map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-10 font-mono text-sm text-muted-foreground">
              <span className="transition-colors hover:text-primary">{item}</span>
              <span className="text-primary/40" aria-hidden="true">
                /
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
