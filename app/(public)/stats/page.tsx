import type { Metadata } from "next"
import { StatsPageContent } from "@/components/public/stats/stats-page-content"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yashraj.dev"

export const metadata: Metadata = {
  title: "Stats",
  description:
    "Live profile stats for Yash Raj — skills, certifications, hackathon milestones, and language breakdown.",
  keywords: ["stats", "profile", "cybersecurity", "hackathon", "skills"],
  openGraph: {
    title: "Stats — Yash Raj",
    description: "Live profile stats for Yash Raj — skills, certifications, and hackathon milestones.",
    url: `${baseUrl}/stats`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stats — Yash Raj",
    description: "Live profile stats for Yash Raj — skills, certifications, and hackathon milestones.",
  },
  alternates: {
    canonical: `${baseUrl}/stats`,
  },
}

export default function StatsPage() {
  return <StatsPageContent />
}
