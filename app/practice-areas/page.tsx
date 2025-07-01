"use client"

import { EB_Garamond } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const ebGaramond = EB_Garamond({ subsets: ["latin"] })

const practiceAreas = [
  {
    category: "Intellectual Property",
    items: [
      { id: "prosecution", title: "Prosecution", link: "/practice-areas/prosecution" },
      {
        id: "litigation-enforcement",
        title: "Litigation & Enforcement",
        link: "/practice-areas/litigation-enforcement",
      },
      { id: "commercial", title: "Commercial", link: "/practice-areas/commercial" },
    ],
  },
  {
    category: "Corporate & Technology",
    items: [
      { id: "general-corporate", title: "General Corporate", link: "/practice-areas/general-corporate" },
      {
        id: "technology-media-telecom",
        title: "Technology, Media, and Telecommunication",
        link: "/practice-areas/technology-media-telecom",
      },
    ],
  },
  {
    category: "Dispute Resolution",
    items: [{ id: "dispute-resolution", title: "Dispute Resolution", link: "/practice-areas/dispute-resolution" }],
  },
]

export default function PracticeAreasPage() {
  // Scroll animations
  const heroAnimation = useScrollAnimation(0.1)
  const contentAnimation = useScrollAnimation(0.2)

  const scrollToContent = () => {
    const contentSection = document.getElementById("practice-areas-content")
    if (contentSection) {
      contentSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroAnimation.ref}
        className={`h-screen flex flex-col justify-center items-center bg-slate-50 relative transition-all duration-1000 ease-out ${
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
              Our Practice Areas
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-text-secondary leading-relaxed max-w-4xl mx-auto">
              We partner with business and creators to protect innovation and navigate legal challenges, locally and
              across borders
            </p>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div
          className={`absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out delay-700 ${
            heroAnimation.isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-2 sm:translate-y-4"
          }`}
        >
          <button
            onClick={scrollToContent}
            className="text-text-accent hover:text-primary-700 font-medium transition-colors text-sm sm:text-base"
          >
            scroll down to explore more
          </button>
        </div>
      </section>

      {/* Practice Areas Content */}
      <section
        ref={contentAnimation.ref}
        id="practice-areas-content"
        className={`py-16 sm:py-20 bg-white transition-all duration-1000 ease-out ${
          contentAnimation.isVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-8 sm:translate-y-12"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {practiceAreas.map((category, categoryIndex) => (
            <div
              key={category.category}
              className={`mb-16 sm:mb-20 transition-all duration-1000 ease-out ${
                contentAnimation.isVisible
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-4 sm:translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + categoryIndex * 200}ms` }}
            >
              <h2
                className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary text-center mb-8 sm:mb-12 ${ebGaramond.className}`}
              >
                {category.category}
              </h2>

              <div
                className={`grid gap-6 sm:gap-8 ${
                  category.items.length === 3
                    ? "grid-cols-1 md:grid-cols-3"
                    : category.items.length === 2
                      ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
                      : "grid-cols-1 max-w-md mx-auto"
                }`}
              >
                {category.items.map((item, itemIndex) => (
                  <Link key={item.id} href={item.link}>
                    <Card
                      className={`bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 ease-out cursor-pointer h-full hover:scale-105 hover:-translate-y-2 ${
                        contentAnimation.isVisible
                          ? "opacity-100 transform translate-y-0"
                          : "opacity-0 transform translate-y-4 sm:translate-y-8"
                      }`}
                      style={{ transitionDelay: `${500 + categoryIndex * 200 + itemIndex * 100}ms` }}
                    >
                      <CardContent className="p-0">
                        <div className="w-full h-32 sm:h-40 bg-gray-300 rounded-t-lg"></div>
                        <div className="p-4 sm:p-6">
                          <h3 className={`text-lg sm:text-xl font-bold text-text-primary mb-2 ${ebGaramond.className}`}>
                            {item.title}
                          </h3>
                          <p className="text-text-accent text-xs sm:text-sm font-medium">Read more ...</p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
