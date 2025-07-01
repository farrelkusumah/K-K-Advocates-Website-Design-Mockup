"use client"

import { EB_Garamond } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

const ebGaramond = EB_Garamond({ subsets: ["latin"] })

const values = [
  {
    id: 1,
    title: "Integrity",
    description: "We maintain the highest ethical standards in all our professional dealings.",
  },
  {
    id: 2,
    title: "Trust",
    description: "Building lasting relationships through transparency and reliability.",
  },
  {
    id: 3,
    title: "Loyalty",
    description: "Committed to our clients' success and long-term partnerships.",
  },
  {
    id: 4,
    title: "Service Excellence",
    description: "Delivering exceptional legal services that exceed expectations.",
  },
]

const approaches = [
  {
    id: 1,
    title: "Transparency",
    description: "We keep our clients continually well informed from a beginning to the end",
  },
  {
    id: 2,
    title: "Cost Awareness & Commercial Viability",
    description: "We ensure that cost and objective are well balanced towards best solutions",
  },
  {
    id: 3,
    title: "Accessible & Responsive",
    description: "We are always there to provide accessible and timely solutions for the clients",
  },
  {
    id: 4,
    title: "Service Excellence",
    description: "We combine prompt and proactive response with high integrity in providing services",
  },
]

export default function AboutPage() {
  const scrollToAboutSection = () => {
    const aboutSection = document.getElementById("about-content")
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section - Full Viewport Height with centered content */}
      <section className="h-screen flex flex-col justify-center items-center bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center flex-1 flex items-center">
          <div className="w-full">
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 sm:mb-8 ${ebGaramond.className}`}
            >
              About K&K Advocates
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-text-secondary leading-relaxed max-w-4xl mx-auto">
              Trusted legal partner for innovation-driven businesses, specializing in IP, Corporate & Tech, and Dispute
              Resolution.
            </p>
          </div>
        </div>

        {/* Read our story button at bottom */}
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAboutSection}
            className="text-text-accent hover:text-primary-700 font-medium transition-colors text-sm sm:text-base"
          >
            Read our story
          </button>
        </div>
      </section>

      {/* About Us Content */}
      <section id="about-content" className="py-16 sm:py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            <div>
              <h2
                className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-4 sm:mb-6 ${ebGaramond.className}`}
              >
                About Us
              </h2>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-text-secondary leading-relaxed text-sm sm:text-base lg:text-lg">
                K&K Advocates is a proud Indonesian firm with practices that cover Intellectual Property (IP), Corporate
                & Technology, and Dispute Resolution. Over the years we have expanded our services to include a wide
                range of legal matters, from corporate restructuring to complex litigation, from across different
                industries. Our growing corporate practice covers investments, government procurement, and transactions
                in many commercial sectors, including Technology, Media, and Telecommunications (TMT). In the field of
                dispute resolution, we have successfully represented clients in various general litigation, arbitration,
                bankruptcy, and IP litigation and enforcement cases.
              </p>

              <p className="text-text-secondary leading-relaxed text-sm sm:text-base lg:text-lg">
                We have assisted multinational and local clients on several landmark cases related to copyright, patent,
                and trademark, from registration to enforcement and dispute resolution. In technology, we have been
                involved in various transactions and have been at the forefront of developing the regulatory framework.
              </p>

              <p className="text-text-secondary leading-relaxed text-sm sm:text-base lg:text-lg">
                Adopting a holistic approach that covers the entire regulatory and enforcement spectrum, we go beyond
                conventional legal services. We have been instrumental in the development of a stronger regulatory
                infrastructure in the country through our Government Relations program, especially for the emerging
                Information Technology (IT) sector.
              </p>

              <p className="text-text-secondary leading-relaxed text-sm sm:text-base lg:text-lg">
                With a growing team of experienced attorneys with a wide range of expertise, K&K Advocates will continue
                to use such well-rounded approach in advising leading companies in the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 sm:py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary text-center mb-8 sm:mb-12 ${ebGaramond.className}`}
          >
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value) => (
              <Card key={value.id} className="bg-white border-0 shadow-lg text-center">
                <CardContent className="p-6 sm:p-8">
                  <h3 className={`text-lg sm:text-xl font-bold text-text-primary mb-3 sm:mb-4 ${ebGaramond.className}`}>
                    {value.title}
                  </h3>
                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 sm:py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary text-center mb-8 sm:mb-12 ${ebGaramond.className}`}
          >
            Our Approach
          </h2>
          <div className="space-y-8 sm:space-y-12">
            {approaches.map((approach, index) => (
              <div key={approach.id} className="text-center max-w-4xl mx-auto">
                <h3 className={`text-xl sm:text-2xl font-bold text-text-primary mb-3 sm:mb-4 ${ebGaramond.className}`}>
                  {approach.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm sm:text-base lg:text-lg">
                  {approach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
