"use client"

import type React from "react"

import { useState, useEffect } from "react"
import PasswordProtection, { checkAuthentication } from "./password-protection"

interface AuthWrapperProps {
  children: React.ReactNode
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check authentication status on mount
    const checkAuth = () => {
      const authenticated = checkAuthentication()
      setIsAuthenticated(authenticated)
      setIsLoading(false)
    }

    // Small delay to prevent flash
    const timer = setTimeout(checkAuth, 100)
    return () => clearTimeout(timer)
  }, [])

  const handleAuthenticated = () => {
    setIsAuthenticated(true)
  }

  // Show loading state briefly to prevent flash
  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-text-accent border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  // Show password protection if not authenticated
  if (!isAuthenticated) {
    return <PasswordProtection onAuthenticated={handleAuthenticated} />
  }

  // Show main content if authenticated
  return <>{children}</>
}
