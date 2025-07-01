"use client"

import type React from "react"

import { useState, useEffect } from "react"
import PasswordProtection from "./password-protection"

interface AuthWrapperProps {
  children: React.ReactNode
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check authentication status on mount
    const checkAuth = () => {
      try {
        const authData = localStorage.getItem("kk_auth")
        if (authData) {
          const { authenticated, timestamp } = JSON.parse(authData)
          const now = Date.now()
          const twelveHours = 12 * 60 * 60 * 1000 // 12 hours in milliseconds

          // Check if authentication is still valid (within 12 hours)
          if (authenticated && now - timestamp < twelveHours) {
            setIsAuthenticated(true)
          } else {
            // Clear expired authentication
            localStorage.removeItem("kk_auth")
            setIsAuthenticated(false)
          }
        } else {
          setIsAuthenticated(false)
        }
      } catch (error) {
        console.error("Error checking authentication:", error)
        localStorage.removeItem("kk_auth")
        setIsAuthenticated(false)
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [])

  const handleAuthenticate = () => {
    setIsAuthenticated(true)
  }

  // Show loading state briefly
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-text-accent mx-auto mb-4"></div>
          <p className="text-text-secondary">Loading...</p>
        </div>
      </div>
    )
  }

  // Show password protection if not authenticated
  if (!isAuthenticated) {
    return <PasswordProtection onAuthenticate={handleAuthenticate} />
  }

  // Show main content if authenticated
  return <>{children}</>
}
