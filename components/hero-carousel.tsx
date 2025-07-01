"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useHorizontalScroll } from "@/hooks/use-horizontal-scroll"

const heroImages = [
  {
    id: 1,
    src: "/hero-1.jpg",
    alt: "K&K Advocates Office Building",
  },
  {
    id: 2,
    src: "/hero-2.jpg",
    alt: "Legal Consultation",
  },
  {
    id: 3,
    src: "/hero-3.jpg",
    alt: "Professional Legal Services",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const scrollRef = useHorizontalScroll()

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume auto-play after 10 seconds
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <div className="relative w-full h-48 sm:h-64 lg:h-80 overflow-hidden rounded-lg group">
      {/* Images Container */}
      <div
        ref={scrollRef}
        className="flex transition-transform duration-500 ease-in-out h-full cursor-grab active:cursor-grabbing"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {heroImages.map((image, index) => (
          <div key={image.id} className="w-full h-full flex-shrink-0 relative">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              crossOrigin="anonymous"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-text-primary rounded-full p-1.5 sm:p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-text-primary rounded-full p-1.5 sm:p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Next image"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Indicators - Made smaller */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-110" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
