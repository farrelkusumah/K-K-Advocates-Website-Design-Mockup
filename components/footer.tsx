import { EB_Garamond } from "next/font/google"
import { Button } from "@/components/ui/button"

const ebGaramond = EB_Garamond({ subsets: ["latin"] })

export default function Footer() {
  return (
    <>
      {/* Contact Section */}
      <section className="py-16 bg-background-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl font-bold text-text-primary mb-8 ${ebGaramond.className}`}>
            Need Legal Assistance?
          </h2>
          <Button className="bg-text-accent hover:bg-primary-700 text-text-light px-8 py-3 rounded-none font-medium transition-colors">
            Contact Us!
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background-quaternary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className={`font-bold text-text-primary mb-2 ${ebGaramond.className}`}>K&K Advocates</h3>
              <p className="text-text-secondary text-sm mb-1">+62 21 29023531</p>
              <p className="text-text-secondary text-sm">office@kk-advocates.com</p>
            </div>
            <div>
              <p className="text-text-secondary text-sm leading-relaxed">
                KMO Building, 4th floor, Suite 29 Jl Raya Mas
                <br />
                No.1 Kelurahan Rawa Jateng, Selatan Old Jakarta,
                <br />
                Indonesia 12930
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
