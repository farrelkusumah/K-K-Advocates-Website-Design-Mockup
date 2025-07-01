"use client"

import { EB_Garamond } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { practiceAreasData } from "@/lib/practice-areas-data"
import { notFound } from "next/navigation"

const ebGaramond = EB_Garamond({ subsets: ["latin"] })

interface PageProps {
  params: { slug: string }
}

export default function PracticeAreaDetailPage({ params }: PageProps) {
  const { slug } = params
  const practiceArea = practiceAreasData[slug]

  if (!practiceArea) {
    // If the slug doesn't exist, show the default 404 page
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section - Full Viewport Height */}
      <section className="h-screen flex flex-col justify-center items-center bg-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center flex-1 flex items-center">
          <div className="w-full">
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
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary text-center mb-8 sm:mb-12 ${ebGaramond.className}`}
          >
            Overview
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base lg:text-lg">
              {practiceArea.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Clients & Capabilities Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary text-center mb-8 sm:mb-12 ${ebGaramond.className}`}
          >
            Clients & Capabilities
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 sm:gap-y-4">
              {practiceArea.capabilities.map((capability, index) => (
                <p key={index} className="text-text-secondary leading-relaxed text-sm sm:text-base lg:text-lg">
                  {capability}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
