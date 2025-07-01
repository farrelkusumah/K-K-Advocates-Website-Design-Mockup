"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

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

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX)
    setScrollLeft(currentSlide)
    setIsAutoPlaying(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX
    const walk = (startX - x) / 100 // Adjust sensitivity
    const newSlide = Math.round(scrollLeft + walk)
    if (newSlide >= 0 && newSlide < heroImages.length) {
      setCurrentSlide(newSlide)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <div className="relative w-full h-48 sm:h-64 lg:h-80 overflow-hidden rounded-lg group">
      {/* Images Container */}
      <div
        ref={containerRef}
        className="flex transition-transform duration-700 ease-out h-full cursor-grab active:cursor-grabbing"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => {
          setIsAutoPlaying(true)
          handleMouseLeave()
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
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
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-text-primary rounded-full p-1.5 sm:p-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out hover:scale-110"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-text-primary rounded-full p-1.5 sm:p-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out hover:scale-110"
        aria-label="Next image"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Clickable Indicators */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ease-out cursor-pointer ${
              index === currentSlide ? "bg-white scale-110" : "bg-white/50 hover:bg-white/75 hover:scale-105"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
