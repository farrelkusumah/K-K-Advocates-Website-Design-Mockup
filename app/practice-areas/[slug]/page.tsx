"use client"

import { EB_Garamond } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { practiceAreasData } from "@/lib/practice-areas-data"
import { notFound } from "next/navigation"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const ebGaramond = EB_Garamond({ subsets: ["latin"] })

interface PageProps {
  params: { slug: string }
}

export default function PracticeAreaDetailPage({ params }: PageProps) {
  const { slug } = params
  const practiceArea = practiceAreasData[slug]

  // Scroll animations
  const heroAnimation = useScrollAnimation(0.1)
  const overviewAnimation = useScrollAnimation(0.2)
  const capabilitiesAnimation = useScrollAnimation(0.2)

  if (!practiceArea) {
    // If the slug doesn't exist, show the default 404 page
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section - Full Viewport Height */}
      <section
        ref={heroAnimation.ref}
        className={`h-screen flex flex-col justify-center items-center bg-white relative transition-all duration-1000 ease-out ${
          heroAnimation.isVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-4 sm:translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center flex-1 flex items-center">
          <div
            className={`w-full transition-all duration-1200 ease-out delay-300 ${
              heroAnimation.isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-4 sm:translate-y-8"
            }`}
          >
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 sm:mb-8 ${ebGaramond.className}`}
            >
              {practiceArea.title}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-text-secondary leading-relaxed max-w-4xl mx-auto">
              {practiceArea.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section
        ref={overviewAnimation.ref}
        className={`py-16 sm:py-20 bg-white transition-all duration-1000 ease-out ${
          overviewAnimation.isVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-8 sm:translate-y-12"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary text-center mb-8 sm:mb-12 transition-all duration-1000 ease-out delay-300 ${ebGaramond.className} ${
              overviewAnimation.isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-4 sm:translate-y-8"
            }`}
          >
            Overview
          </h2>
          <div
            className={`max-w-4xl mx-auto transition-all duration-1200 ease-out delay-500 ${
              overviewAnimation.isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-4 sm:translate-y-8"
            }`}
          >
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base lg:text-lg">
              {practiceArea.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Clients & Capabilities Section */}
      <section
        ref={capabilitiesAnimation.ref}
        className={`py-16 sm:py-20 bg-white transition-all duration-1000 ease-out ${
          capabilitiesAnimation.isVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-8 sm:translate-y-12"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary text-center mb-8 sm:mb-12 transition-all duration-1000 ease-out delay-300 ${ebGaramond.className} ${
              capabilitiesAnimation.isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-4 sm:translate-y-8"
            }`}
          >
            Clients & Capabilities
          </h2>
          <div
            className={`max-w-6xl mx-auto transition-all duration-1200 ease-out delay-500 ${
              capabilitiesAnimation.isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-4 sm:translate-y-8"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 sm:gap-y-4">
              {practiceArea.capabilities.map((capability, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 ease-out ${
                    capabilitiesAnimation.isVisible
                      ? "opacity-100 transform translate-y-0"
                      : "opacity-0 transform translate-y-2 sm:translate-y-4"
                  }`}
                  style={{ transitionDelay: `${700 + index * 50}ms` }}
                >
                  <p className="text-text-secondary leading-relaxed text-sm sm:text-base lg:text-lg">{capability}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
