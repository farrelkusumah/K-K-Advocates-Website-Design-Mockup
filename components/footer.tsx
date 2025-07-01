import { EB_Garamond } from "next/font/google"
import { Button } from "@/components/ui/button"

const ebGaramond = EB_Garamond({ subsets: ["latin"] })

export default function Footer() {
  return (
    <footer className="py-16 sm:py-20 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Contact Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-2xl sm:text-3xl font-bold text-text-primary mb-6 sm:mb-8 ${ebGaramond.className}`}>
            Need Legal Assistance?
          </h2>
          <Button className="bg-text-accent hover:bg-primary-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-none font-medium transition-colors text-sm sm:text-base">
            Contact Us!
          </Button>
        </div>

        {/* Footer Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          <div>
            <h3 className={`text-base sm:text-lg font-bold text-text-primary mb-3 sm:mb-4 ${ebGaramond.className}`}>
              K&K Advocates
            </h3>
            <p className="text-text-secondary text-sm sm:text-base mb-1 sm:mb-2">+62 21 29023531</p>
            <p className="text-text-secondary text-sm sm:text-base">office@kk-advocates.com</p>
          </div>
          <div>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              KMO Building, 4th floor, Suite 29 Jl Raya Mas
              <br />
              No.1 Kelurahan Rawa Jateng, Selatan Old Jakarta,
              <br />
              Indonesia 12930
            </p>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-xs sm:text-sm text-center">© 2024 K&K Advocates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
