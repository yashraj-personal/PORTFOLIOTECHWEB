import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { CodeRain } from "@/components/code-rain"
import "./globals.css"

// Configure fonts with proper options
const geist = Geist({
  subsets: ["latin"],
  variable: '--font-geist',
  display: 'swap',
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-geist-mono',
  display: 'swap',
})
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://yashraj.dev'),
  title: {
    default: "Yash Raj — Cybersecurity & AI Lab",
    template: "%s | Yash Raj",
  },
  description:
    "Breaking systems to understand them, building defenses to protect them. Portfolio of Yash Raj — cybersecurity enthusiast and AI/ML explorer from Gaya, Bihar.",
  keywords: ["Cybersecurity", "Ethical Hacking", "Machine Learning", "Python", "Linux", "AI", "Yash Raj"],
  authors: [{ name: "Yash Raj", url: "https://github.com/yashraj-personal" }],
  creator: "Yash Raj",
  publisher: "Yash Raj",
  generator: "v0.app",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Yash Raj — Cybersecurity & AI Lab",
    description: "Breaking systems to understand them, building defenses to protect them. Portfolio of Yash Raj.",
    siteName: "Yash Raj",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yash Raj — Cybersecurity & AI Lab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Raj — Cybersecurity & AI Lab",
    description: "Breaking systems to understand them, building defenses to protect them.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} storageKey="theme-mode">
          <CodeRain />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
