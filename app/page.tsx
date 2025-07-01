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

      {/* Hero Section - Full Viewport Height with centered content */}
      <section className="h-screen flex items-center justify-center bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center w-full">
            <div className="text-center lg:text-left">
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-4 sm:mb-6 lg:mb-8 ${ebGaramond.className}`}
              >
                Strategic legal counsel
                <br />
                for bold innovators.
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-text-secondary leading-relaxed">
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
      <section className="py-16 sm:py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-md h-48 sm:h-64 bg-white rounded-lg shadow-sm"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h2
                className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-4 sm:mb-6 ${ebGaramond.className}`}
              >
                About Us
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4 text-sm sm:text-base lg:text-lg">
                K&K Advocates is a full-service law firm specializing in Intellectual Property, Corporate & Technology,
                and Dispute Resolution. With landmark IP cases and deep regulatory engagement, we offer clear, practical
                legal strategies tailored to your business.
              </p>
              <Link
                href="/about"
                className="text-text-accent hover:text-primary-700 font-medium transition-colors text-sm sm:text-base lg:text-lg"
              >
                read more...
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-16 sm:py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <Link href="/practice-areas" className="block mb-8 sm:mb-12 group">
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary group-hover:text-text-accent transition-colors ${ebGaramond.className}`}
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
              <div className="flex space-x-4 sm:space-x-6 pb-4" style={{ width: "max-content" }}>
                {practiceAreas.map((area) => (
                  <Card
                    key={area.id}
                    className="border border-tertiary-200 shadow-lg hover:shadow-xl transition-shadow flex-shrink-0 w-72 sm:w-80 cursor-pointer bg-white"
                  >
                    <CardContent className="p-0">
                      <div className="w-full h-40 sm:h-48 bg-tertiary-300 rounded-t-lg"></div>
                      <div className="p-4 sm:p-6">
                        <h3
                          className={`text-lg sm:text-xl font-bold text-text-primary mb-2 sm:mb-3 ${ebGaramond.className}`}
                        >
                          {area.title}
                        </h3>
                        <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">{area.description}</p>
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
      <section className="py-16 sm:py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary ${ebGaramond.className}`}>
              Latest Updates
            </h2>
            <Link
              href="/insights"
              className="text-text-accent hover:text-primary-700 font-medium transition-colors text-sm sm:text-base lg:text-lg"
            >
              More Updates...
            </Link>
          </div>
          <div className="relative">
            <div
              ref={updatesScrollRef}
              className="overflow-x-auto scrollbar-hide select-none"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="flex space-x-4 sm:space-x-6 pb-4" style={{ width: "max-content" }}>
                {latestUpdates.map((update) => (
                  <Card
                    key={update.id}
                    className="bg-white border border-tertiary-200 shadow-lg hover:shadow-xl transition-shadow flex-shrink-0 w-72 sm:w-80 cursor-pointer"
                  >
                    <CardContent className="p-0">
                      <div className="w-full h-24 sm:h-32 bg-gray-100 rounded-t-lg border-b border-tertiary-200"></div>
                      <div className="p-4 sm:p-6">
                        <div className="text-xs text-text-muted mb-2">{update.date}</div>
                        <h3
                          className={`text-lg sm:text-xl font-bold text-text-primary mb-2 sm:mb-3 ${ebGaramond.className}`}
                        >
                          {update.title}
                        </h3>
                        <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                          {update.excerpt}
                        </p>
                        <Link
                          href={`/insights/${update.slug}`}
                          className="text-text-accent hover:text-primary-700 text-xs sm:text-sm font-medium transition-colors"
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
