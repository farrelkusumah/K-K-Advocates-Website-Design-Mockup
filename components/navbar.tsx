"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, LogOut } from "lucide-react"
import { clearAuthentication } from "./password-protection"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "People", href: "/people" },
  { name: "Practice Area", href: "/practice-areas" },
  { name: "Insights", href: "/insights" },
  { name: "Achievements", href: "/achievements" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLogout = () => {
    clearAuthentication()
    window.location.reload()
  }

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="K&K Advocates"
              width={140}
              height={48}
              className="h-8 sm:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-all duration-500 ease-out py-2 relative group ${
                  pathname === item.href
                    ? "text-navbar-active font-bold text-[15px]"
                    : "text-gray-700 hover:text-navbar-active text-sm"
                }`}
              >
                {item.name}
                {/* Active state line */}
                {pathname === item.href && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-navbar-active"></div>
                )}
                {/* Hover state line with animation */}
                {pathname !== item.href && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-navbar-active transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></div>
                )}
              </Link>
            ))}

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="text-gray-700 hover:text-red-600 transition-colors duration-300 p-2 rounded-md hover:bg-red-50"
              title="Logout"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-all duration-500 ease-out ${
                    pathname === item.href
                      ? "text-navbar-active font-bold text-[15px]"
                      : "text-gray-700 hover:text-navbar-active text-sm"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Logout Button */}
              <button
                onClick={handleLogout}
                className="text-gray-700 hover:text-red-600 transition-colors duration-300 text-sm font-medium text-left flex items-center space-x-2"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
