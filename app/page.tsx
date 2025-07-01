"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { EB_Garamond } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroCarousel from "@/components/hero-carousel"
import { latestUpdates } from "@/lib/data"
import { useHorizontalScroll } from "@/hooks/use-horizontal-scroll"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"

const ebGaramond = EB_Garamond({ subsets: ["latin"] })

// Simplified practice areas - only categories
const practiceAreaCategories = [
  {
    id: 1,
    title: "Intellectual Property",
    description: "Comprehensive IP protection including patents, trademarks, copyrights, and trade secrets.",
    image: "/practice-area-ip.jpg",
    link: "/practice-areas",
  },
  {
    id: 2,
    title: "Corporate & Technology",
    description: "Corporate law, M&A, technology transactions, and regulatory compliance.",
    image: "/practice-area-corporate.jpg",
    link: "/practice-areas",
  },
  {
    id: 3,
    title: "Dispute Resolution",
    description: "Litigation, arbitration, and alternative dispute resolution services.",
    image: "/practice-area-dispute.jpg",
    link: "/practice-areas",
  },
]

export default function HomePage() {
  const updatesScrollRef = useHorizontalScroll()

  // Scroll animations
  const heroAnimation = useScrollAnimation(0.1)
  const aboutAnimation = useScrollAnimation(0.2)
  const practiceAreasAnimation = useScrollAnimation(0.2)
  const updatesAnimation = useScrollAnimation(0.2)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const day = date.getDate().toString()
    const month = date.toLocaleDateString("en-US", { month: "short" }).toUpperCase()
    return { day, month }
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section - Full Viewport Height with centered content */}
      <section
        ref={heroAnimation.ref}
        className={`h-screen flex items-center justify-center bg-white transition-all duration-1000 ease-out ${
          heroAnimation.isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center w-full">
            <div
              className={`text-center lg:text-left transition-all duration-1200 ease-out delay-300 ${
                heroAnimation.isVisible ? "opacity-100 transform translate-x-0" : "opacity-0 transform -translate-x-8"
              }`}
            >
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
            <div
              className={`flex justify-center transition-all duration-1200 ease-out delay-500 ${
                heroAnimation.isVisible ? "opacity-100 transform translate-x-0" : "opacity-0 transform translate-x-8"
              }`}
            >
              <HeroCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        ref={aboutAnimation.ref}
        className={`py-16 sm:py-20 transition-all duration-1000 ease-out ${
          aboutAnimation.isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-12"
        }`}
        style={{ backgroundColor: "#faf9f6" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div
              className={`flex justify-center order-2 lg:order-1 transition-all duration-1200 ease-out delay-300 ${
                aboutAnimation.isVisible ? "opacity-100 transform translate-x-0" : "opacity-0 transform -translate-x-8"
              }`}
            >
              <div className="w-full max-w-md h-48 sm:h-64 relative rounded-lg overflow-hidden shadow-sm bg-white flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="K&K Advocates"
                  width={200}
                  height={80}
                  className="h-16 sm:h-20 w-auto"
                  crossOrigin="anonymous"
                />
              </div>
            </div>
            <div
              className={`order-1 lg:order-2 transition-all duration-1200 ease-out delay-500 ${
                aboutAnimation.isVisible ? "opacity-100 transform translate-x-0" : "opacity-0 transform translate-x-8"
              }`}
            >
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
                className="text-text-accent hover:text-primary-700 font-medium transition-all duration-500 ease-out text-sm sm:text-base lg:text-lg hover:font-bold"
              >
                read more...
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section
        ref={practiceAreasAnimation.ref}
        className={`py-16 sm:py-20 transition-all duration-1000 ease-out ${
          practiceAreasAnimation.isVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-12"
        }`}
        style={{ backgroundColor: "#eff4f1" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <Link
            href="/practice-areas"
            className={`block mb-8 sm:mb-12 group transition-all duration-1000 ease-out delay-300 ${
              practiceAreasAnimation.isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-8"
            }`}
          >
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary group-hover:text-text-accent transition-all duration-500 ease-out ${ebGaramond.className}`}
            >
              Our Practice Areas
            </h2>
          </Link>

          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 transition-all duration-1200 ease-out delay-500 ${
              practiceAreasAnimation.isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-8"
            }`}
          >
            {practiceAreaCategories.map((area) => (
              <Link key={area.id} href={area.link}>
                <Card className="bg-white border border-gray-200 shadow-lg cursor-pointer h-full">
                  <CardContent className="p-0">
                    <div className="w-full h-40 sm:h-48 relative rounded-t-lg overflow-hidden">
                      <Image
                        src={area.image || "/placeholder.svg"}
                        alt={area.title}
                        fill
                        className="object-cover"
                        crossOrigin="anonymous"
                      />
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3
                        className={`text-lg sm:text-xl font-bold text-text-primary mb-2 sm:mb-3 ${ebGaramond.className}`}
                      >
                        {area.title}
                      </h3>
                      <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-3">{area.description}</p>
                      <p className="text-text-accent text-xs sm:text-sm font-medium hover:font-bold transition-all duration-200 ease-out">
                        Read more ...
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section
        ref={updatesAnimation.ref}
        className={`py-16 sm:py-20 transition-all duration-1000 ease-out ${
          updatesAnimation.isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-12"
        }`}
        style={{ backgroundColor: "#faf9f6" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div
            className={`flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4 transition-all duration-1000 ease-out delay-300 ${
              updatesAnimation.isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
            }`}
          >
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary ${ebGaramond.className}`}>
              Latest Updates
            </h2>
            <Link
              href="/insights"
              className="text-text-accent hover:text-primary-700 hover:font-bold font-medium transition-all duration-500 ease-out text-sm sm:text-base lg:text-lg hover:underline"
            >
              More Updates...
            </Link>
          </div>
          <div
            className={`relative transition-all duration-1200 ease-out delay-500 ${
              updatesAnimation.isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
            }`}
          >
            <div
              ref={updatesScrollRef}
              className="overflow-x-auto scrollbar-hide select-none"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="flex space-x-4 sm:space-x-6 pb-4" style={{ width: "max-content" }}>
                {latestUpdates.map((update) => {
                  const { day, month } = formatDate(update.date)
                  return (
                    <Card
                      key={update.id}
                      className="bg-white border border-tertiary-200 shadow-lg hover:shadow-xl transition-all duration-500 ease-out flex-shrink-0 w-72 sm:w-80 group hover:scale-105 hover:-translate-y-2"
                    >
                      <CardContent className="p-0">
                        <div className="w-full h-24 sm:h-32 relative rounded-t-lg border-b border-tertiary-200 overflow-hidden">
                          <Image
                            src={update.image || "/placeholder.svg"}
                            alt={update.title}
                            fill
                            className="object-cover"
                            crossOrigin="anonymous"
                          />
                          {/* Date overlay on photo */}
                          <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm rounded px-2 py-1 text-center transition-all duration-300 ease-out group-hover:bg-white group-hover:shadow-md">
                            <div className="text-lg font-bold text-text-primary leading-none">{day}</div>
                            <div className="text-xs text-text-secondary uppercase leading-none">{month}</div>
                          </div>
                        </div>
                        <div className="p-4 sm:p-6">
                          <h3
                            className={`text-lg sm:text-xl font-bold text-text-primary mb-2 sm:mb-3 ${ebGaramond.className}`}
                          >
                            {update.title}
                          </h3>
                          {/* Excerpt shown only on hover */}
                          <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out max-h-0 group-hover:max-h-20 overflow-hidden">
                            {update.excerpt}
                          </p>
                          <Link
                            href={`${update.link}`}
                            className="text-text-accent hover:text-primary-700 text-xs sm:text-sm font-medium transition-all duration-500 ease-out hover:underline"
                          >
                            Read more...
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
