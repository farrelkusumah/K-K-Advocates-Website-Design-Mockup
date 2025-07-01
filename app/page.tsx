"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { EB_Garamond } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroCarousel from "@/components/hero-carousel"
import { practiceAreas, latestUpdates } from "@/lib/data"
import { useHorizontalScroll } from "@/hooks/use-horizontal-scroll"

const ebGaramond = EB_Garamond({ subsets: ["latin"] })

export default function HomePage() {
  const practiceAreasScrollRef = useHorizontalScroll()
  const updatesScrollRef = useHorizontalScroll()

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section - Full Viewport Height */}
      <section className="min-h-screen flex items-center bg-background-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1
                className={`text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-6 ${ebGaramond.className}`}
              >
                Strategic legal counsel
                <br />
                for bold innovators.
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed">
                We partner with business and creators to protect innovation and navigate legal challenges, locally and
                across borders
              </p>
            </div>
            <div className="flex justify-center">
              <HeroCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-full max-w-md h-64 bg-background-primary rounded-lg shadow-sm"></div>
            </div>
            <div>
              <h2 className={`text-3xl font-bold text-text-primary mb-6 ${ebGaramond.className}`}>About Us</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                K&K Advocates is a full-service law firm specializing in Intellectual Property, Corporate & Technology,
                and Dispute Resolution. With landmark IP cases and deep regulatory engagement, we offer clear, practical
                legal strategies tailored to your business.
              </p>
              <Link href="/about" className="text-text-accent hover:text-primary-700 font-medium transition-colors">
                read more...
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-20 bg-background-tertiary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/practice-areas" className="block mb-12 group">
            <h2
              className={`text-3xl font-bold text-text-primary group-hover:text-text-accent transition-colors ${ebGaramond.className}`}
            >
              Our Practice Areas
            </h2>
          </Link>
          <div className="relative">
            <div
              ref={practiceAreasScrollRef}
              className="overflow-x-auto scrollbar-hide select-none"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="flex space-x-6 pb-4" style={{ width: "max-content" }}>
                {practiceAreas.map((area) => (
                  <Card
                    key={area.id}
                    className="border border-tertiary-200 shadow-lg hover:shadow-xl transition-shadow flex-shrink-0 w-80 cursor-pointer bg-background-primary"
                  >
                    <CardContent className="p-0">
                      <div className="w-full h-48 bg-tertiary-300 rounded-t-lg"></div>
                      <div className="p-6">
                        <h3 className={`text-xl font-bold text-text-primary mb-3 ${ebGaramond.className}`}>
                          {area.title}
                        </h3>
                        <p className="text-text-secondary text-sm leading-relaxed">{area.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-20 bg-background-quaternary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className={`text-3xl font-bold text-text-primary ${ebGaramond.className}`}>Latest Updates</h2>
            <Link href="/insights" className="text-text-accent hover:text-primary-700 font-medium transition-colors">
              More Updates...
            </Link>
          </div>
          <div className="relative">
            <div
              ref={updatesScrollRef}
              className="overflow-x-auto scrollbar-hide select-none"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="flex space-x-6 pb-4" style={{ width: "max-content" }}>
                {latestUpdates.map((update) => (
                  <Card
                    key={update.id}
                    className="bg-background-primary border border-tertiary-200 shadow-lg hover:shadow-xl transition-shadow flex-shrink-0 w-80 cursor-pointer"
                  >
                    <CardContent className="p-0">
                      <div className="w-full h-32 bg-background-primary rounded-t-lg border-b border-tertiary-200"></div>
                      <div className="p-6">
                        <div className="text-xs text-text-muted mb-2">{update.date}</div>
                        <h3 className={`text-xl font-bold text-text-primary mb-3 ${ebGaramond.className}`}>
                          {update.title}
                        </h3>
                        <p className="text-text-secondary text-sm leading-relaxed mb-4">{update.excerpt}</p>
                        <Link
                          href={`/insights/${update.slug}`}
                          className="text-text-accent hover:text-primary-700 text-sm font-medium transition-colors"
                        >
                          Read more...
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
