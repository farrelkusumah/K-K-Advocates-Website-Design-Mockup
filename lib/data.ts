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
  link?: string // Optional for updates that may not have an external link
}

export const practiceAreas: PracticeArea[] = [
  {
    id: 1,
    title: "Intellectual Property",
    description: "Comprehensive IP protection including patents, trademarks, copyrights, and trade secrets.",
    image: "/practice-area-ip.jpg",
    slug: "intellectual-property",
  },
  {
    id: 2,
    title: "Corporate & Technology",
    description: "Corporate law, M&A, technology transactions, and regulatory compliance.",
    image: "/practice-area-corporate.jpg",
    slug: "corporate-technology",
  },
  {
    id: 3,
    title: "Dispute Resolution",
    description: "Litigation, arbitration, and alternative dispute resolution services.",
    image: "/practice-area-dispute.jpg",
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
    title: "K&K Advocates Recognized in Hukumonline's 2025 Practice Leaders and Top 100 Indonesian Law Firms",
    excerpt:
      "We are pleased to announce that K&K Advocates has been recognized in Hukumonline's Practice Leaders 2025 and listed among the Top 100 Indonesian Law Firms 2025.",
    date: "June 23, 2025",
    image: "/latest-update-1.jpg",
    slug: "hukumonline-practice-leaders-2025",
    link:"https://www.kk-advocates.com/news/read/kk-advocates-hukumonline-2025-top-law-firm-recognition"
  },
  {
    id: 2,
    title: "Larangan Biaya Surcharge dalam Metode Pembayaran Non-Tunai",
    excerpt:
      "Understanding the prohibition of surcharge fees in non-cash payment methods and its implications for businesses.",
    date: "June 17, 2025",
    image: "/latest-update-2.jpg",
    slug: "larangan-biaya-surcharge-pembayaran-non-tunai",
    link: "https://www.kk-advocates.com/news/read/larangan-biaya-surcharge-pembayaran-non-tunai"
  },
  {
    id: 3,
    title: "K&K Advocates and Its Leading Practitioners Recognized in IP STARS 2025",
    excerpt:
      "Our firm and practitioners have been recognized in IP STARS 2025 for excellence in intellectual property law.",
    date: "June 9, 2025",
    image: "/latest-update-3.jpg",
    slug: "ip-stars-2025-recognition",
    link: "https://www.kk-advocates.com/news/read/kk-advocates-ip-stars-2025-trademark-patent-copyright-awards"
  },
  {
    id: 4,
    title: "K&K Advocates and Three Practitioners Recognized in IAM Patent 1000 2025",
    excerpt: "We are honored to be recognized in IAM Patent 1000 2025 along with three of our leading practitioners.",
    date: "June 9, 2025",
    image: "/latest-update-4.jpg",
    slug: "iam-patent-1000-2025",
    link : "https://www.kk-advocates.com/news/read/kk-advocates-recognized-iam-patent-1000-2025"
  },
  {
    id: 5,
    title: "Indonesia Remains In The Priority Watch List Insurmountable Issues Concerning Intellectual Property",
    excerpt:
      "Analysis of Indonesia's position on the Priority Watch List and ongoing intellectual property challenges.",
    date: "May 21, 2025",
    image: "/latest-update-5.jpg",
    slug: "indonesia-priority-watch-list-ip-issues",
    link: "https://www.kk-advocates.com/news/read/indonesia-priority-watch-list-intellectual-property-issues-2025"
  },
  {
    id: 6,
    title: "U.S. Chamber of Commerce Praises Indonesia Enforcing Intellectual Property Law",
    excerpt:
      "The U.S. Chamber of Commerce recognizes Indonesia's efforts in strengthening intellectual property law enforcement.",
    date: "May 5, 2025",
    image: "/latest-update-6.jpg",
    slug: "us-chamber-praises-indonesia-ip-enforcement",
    link : "https://www.kk-advocates.com/news/read/us-chamber-praises-indonesia-intellectual-property-law-enforcements"
  },
]
