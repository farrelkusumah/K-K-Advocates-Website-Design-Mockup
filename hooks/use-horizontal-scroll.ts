"use client"

import { useRef, useEffect, useState } from "react"

export function useHorizontalScroll() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  useEffect(() => {
    const element = scrollRef.current
    if (!element) return

    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true)
      setStartX(e.pageX - element.offsetLeft)
      setScrollLeft(element.scrollLeft)
      element.style.cursor = "grabbing"
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      if (element) {
        element.style.cursor = "grab"
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      e.preventDefault()
      const x = e.pageX - element.offsetLeft
      const walk = (x - startX) * 2
      element.scrollLeft = scrollLeft - walk
    }

    const handleMouseLeave = () => {
      setIsDragging(false)
      if (element) {
        element.style.cursor = "grab"
      }
    }

    element.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mousemove", handleMouseMove)
    element.addEventListener("mouseleave", handleMouseLeave)

    // Set initial cursor
    element.style.cursor = "grab"

    return () => {
      element.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mousemove", handleMouseMove)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isDragging, startX, scrollLeft])

  return scrollRef
}
