export interface PracticeArea {
  id: number
  title: string
  description: string
  image: string
  slug: string
}

export interface Update {
  id: number
  title: string
  excerpt: string
  date: string
  image: string
  slug: string
}

export const practiceAreas: PracticeArea[] = [
  {
    id: 1,
    title: "Intellectual Property",
    description: "Comprehensive IP protection including patents, trademarks, copyrights, and trade secrets.",
    image: "/placeholder.svg?height=200&width=300",
    slug: "intellectual-property",
  },
  {
    id: 2,
    title: "Corporate & Technology",
    description: "Corporate law, M&A, technology transactions, and regulatory compliance.",
    image: "/placeholder.svg?height=200&width=300",
    slug: "corporate-technology",
  },
  {
    id: 3,
    title: "Dispute Resolution",
    description: "Litigation, arbitration, and alternative dispute resolution services.",
    image: "/placeholder.svg?height=200&width=300",
    slug: "dispute-resolution",
  },
  {
    id: 4,
    title: "Employment Law",
    description: "Employment contracts, workplace policies, and labor dispute resolution.",
    image: "/placeholder.svg?height=200&width=300",
    slug: "employment-law",
  },
  {
    id: 5,
    title: "Data Privacy",
    description: "GDPR compliance, data protection strategies, and privacy policy development.",
    image: "/placeholder.svg?height=200&width=300",
    slug: "data-privacy",
  },
  {
    id: 6,
    title: "International Trade",
    description: "Cross-border transactions, trade regulations, and international business law.",
    image: "/placeholder.svg?height=200&width=300",
    slug: "international-trade",
  },
]

export const latestUpdates: Update[] = [
  {
    id: 1,
    title: "New IP Regulations in Indonesia",
    excerpt: "Understanding the latest changes in intellectual property law and their impact on businesses.",
    date: "December 15, 2024",
    image: "/placeholder.svg?height=150&width=250",
    slug: "new-ip-regulations-indonesia",
  },
  {
    id: 2,
    title: "Corporate Governance Best Practices",
    excerpt: "Essential guidelines for maintaining effective corporate governance in modern businesses.",
    date: "December 10, 2024",
    image: "/placeholder.svg?height=150&width=250",
    slug: "corporate-governance-best-practices",
  },
  {
    id: 3,
    title: "Technology Transfer Agreements",
    excerpt: "Key considerations when drafting and negotiating technology transfer agreements.",
    date: "December 5, 2024",
    image: "/placeholder.svg?height=150&width=250",
    slug: "technology-transfer-agreements",
  },
  {
    id: 4,
    title: "Data Protection Compliance",
    excerpt: "Navigating the complex landscape of data protection laws in Southeast Asia.",
    date: "November 28, 2024",
    image: "/placeholder.svg?height=150&width=250",
    slug: "data-protection-compliance",
  },
  {
    id: 5,
    title: "Cross-Border M&A Trends",
    excerpt: "Analysis of recent trends in cross-border mergers and acquisitions in the region.",
    date: "November 20, 2024",
    image: "/placeholder.svg?height=150&width=250",
    slug: "cross-border-ma-trends",
  },
  {
    id: 6,
    title: "Employment Law Updates",
    excerpt: "Recent changes in employment legislation and their implications for employers.",
    date: "November 15, 2024",
    image: "/placeholder.svg?height=150&width=250",
    slug: "employment-law-updates",
  },
]
