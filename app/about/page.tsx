"use client"

import { EB_Garamond } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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

      {/* Hero Section - Full Viewport Height */}
      <section className="min-h-screen flex items-center justify-center bg-background-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-4xl lg:text-5xl font-bold text-text-primary mb-6 ${ebGaramond.className}`}>
            About K&K Advocates
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            Trusted legal partner for innovation-driven businesses, specializing in IP, Corporate & Tech, and Dispute
            Resolution.
          </p>
          <Button
            onClick={scrollToAboutSection}
            variant="outline"
            className="border-text-accent text-text-accent hover:bg-text-accent hover:text-white transition-colors bg-transparent"
          >
            Read our story
          </Button>
        </div>
      </section>

      {/* About Us Content */}
      <section id="about-content" className="py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className={`text-3xl font-bold text-text-primary mb-6 ${ebGaramond.className}`}>About Us</h2>
            </div>
            <div className="space-y-6">
              <p className="text-text-secondary leading-relaxed">
                K&K Advocates is a proud Indonesian firm with practices that cover Intellectual Property (IP), Corporate
                & Technology, and Dispute Resolution. Over the years we have expanded our services to include a wide
                range of legal matters, from corporate restructuring to complex litigation, from across different
                industries. Our growing corporate practice covers investments, government procurement, and transactions
                in many commercial sectors, including Technology, Media, and Telecommunications (TMT). In the field of
                dispute resolution, we have successfully represented clients in various general litigation, arbitration,
                bankruptcy, and IP litigation and enforcement cases.
              </p>

              <p className="text-text-secondary leading-relaxed">
                We have assisted multinational and local clients on several landmark cases related to copyright, patent,
                and trademark, from registration to enforcement and dispute resolution. In technology, we have been
                involved in various transactions and have been at the forefront of developing the regulatory framework.
              </p>

              <p className="text-text-secondary leading-relaxed">
                Adopting a holistic approach that covers the entire regulatory and enforcement spectrum, we go beyond
                conventional legal services. We have been instrumental in the development of a stronger regulatory
                infrastructure in the country through our Government Relations program, especially for the emerging
                Information Technology (IT) sector.
              </p>

              <p className="text-text-secondary leading-relaxed">
                With a growing team of experienced attorneys with a wide range of expertise, K&K Advocates will continue
                to use such well-rounded approach in advising leading companies in the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-background-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-text-primary text-center mb-12 ${ebGaramond.className}`}>
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.id} className="bg-background-secondary border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <h3 className={`text-xl font-bold text-text-primary mb-4 ${ebGaramond.className}`}>{value.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-text-primary text-center mb-12 ${ebGaramond.className}`}>
            Our Approach
          </h2>
          <div className="space-y-12">
            {approaches.map((approach, index) => (
              <div key={approach.id} className="text-center max-w-4xl mx-auto">
                <h3 className={`text-2xl font-bold text-text-primary mb-4 ${ebGaramond.className}`}>
                  {approach.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
