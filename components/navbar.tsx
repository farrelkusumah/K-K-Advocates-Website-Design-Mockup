"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, LogOut } from "lucide-react";
import { EB_Garamond } from "next/font/google";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";

const ebGaramond = EB_Garamond({ subsets: ["latin"] });

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("kk_auth");
    window.location.reload();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <Image
              src="/logo.png"
              alt="K&K Advocates"
              width={120}
              height={48}
              className="h-8 sm:h-10 w-auto"
              crossOrigin="anonymous"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <Link
              href="/"
              className={`relative group text-text-primary ${
                pathname === "/about"
                  ? "text-text-accent font-semibold"
                  : "hover:text-text-accent"
              } transition-colors font-medium text-sm lg:text-base`}
            >
              Home
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-text-accent transform transition-transform duration-300 ease-out origin-left ${pathname === "/" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
            </Link>
            <Link
              href="/about"
              className={`relative group text-text-primary ${
                pathname === "/about"
                  ? "text-text-accent font-semibold"
                  : "hover:text-text-accent"
              } transition-colors font-medium text-sm lg:text-base`}
            >
              About
              <div
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-text-accent transform transition-transform duration-300 ease-out origin-left ${
                  pathname === "/about"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
            <Link
              href="/practice-areas"
              className={`relative group text-text-primary ${
                pathname === "/practice-areas"
                  ? "text-text-accent font-semibold"
                  : "hover:text-text-accent"
              } transition-colors font-medium text-sm lg:text-base`}
            >
              Practice Areas
              <div
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-text-accent transform transition-transform duration-300 ease-out origin-left ${
                  pathname === "/practice-areas"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
            <Link
              href="/"
              className={`relative group text-text-primary ${
                pathname === "/insights"
                  ? "text-text-accent font-semibold"
                  : "hover:text-text-accent"
              } transition-colors font-medium text-sm lg:text-base`}
            >
              Insights
              <div
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-text-accent transform transition-transform duration-300 ease-out origin-left ${
                  pathname === "/insights"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
            {/* <Link
              href="/"
              className={`relative group text-text-primary ${
                pathname === "/contact"
                  ? "text-text-accent font-semibold"
                  : "hover:text-text-accent"
              } transition-colors font-medium text-sm lg:text-base`}
            >
              Contact
              <div
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-text-accent transform transition-transform duration-300 ease-out origin-left ${
                  pathname === "/contact"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link> */}
            <Link
              href="/"
              className={`relative group text-text-primary ${
                pathname === "/achievements"
                  ? "text-text-accent font-semibold"
                  : "hover:text-text-accent"
              } transition-colors font-medium text-sm lg:text-base`}
            >
              Achievements
              <div
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-text-accent transform transition-transform duration-300 ease-out origin-left ${
                  pathname === "/achievements"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
            <Button
              onClick={handleLogout}
              variant="outline"
              size="icon"
              className="text-text-secondary hover:text-text-accent border-0 hover:border-0 bg-transparent hover:bg-gray-100"
              title="Logout"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              onClick={handleLogout}
              variant="outline"
              size="icon"
              className="text-text-secondary hover:text-text-accent border-0 hover:border-0 bg-transparent hover:bg-gray-100"
              title="Logout"
            >
              <LogOut className="h-4 w-4" />
            </Button>
            <button
              onClick={toggleMenu}
              className="text-text-primary hover:text-text-accent transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link
                href="/"
                className="block px-3 py-2 text-text-primary hover:text-text-accent transition-colors font-medium"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-text-primary hover:text-text-accent transition-colors font-medium"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href="/practice-areas"
                className="block px-3 py-2 text-text-primary hover:text-text-accent transition-colors font-medium"
                onClick={closeMenu}
              >
                Practice Areas
              </Link>
              <Link
                href="/insights"
                className="block px-3 py-2 text-text-primary hover:text-text-accent transition-colors font-medium"
                onClick={closeMenu}
              >
                Insights
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-text-primary hover:text-text-accent transition-colors font-medium"
                onClick={closeMenu}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  size="sm"
                  className="w-full text-text-secondary hover:text-text-accent border-gray-300 hover:border-text-accent bg-transparent"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
