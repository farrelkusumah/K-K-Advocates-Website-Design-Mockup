"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { EB_Garamond } from "next/font/google"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff, Lock } from "lucide-react"
import Image from "next/image"

const ebGaramond = EB_Garamond({ subsets: ["latin"] })

const CORRECT_PASSWORD = "kkadvocates"
const AUTH_TIMEOUT = 12 * 60 * 60 * 1000 // 12 hours in milliseconds
const AUTH_KEY = "kk_advocates_auth"

interface PasswordProtectionProps {
  onAuthenticated: () => void
}

export default function PasswordProtection({ onAuthenticated }: PasswordProtectionProps) {
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Animate in after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate loading for better UX
    await new Promise((resolve) => setTimeout(resolve, 500))

    if (password === CORRECT_PASSWORD) {
      // Store authentication with timestamp
      const authData = {
        authenticated: true,
        timestamp: Date.now(),
      }
      localStorage.setItem(AUTH_KEY, JSON.stringify(authData))
      onAuthenticated()
    } else {
      setError("Incorrect password. Please try again.")
      setPassword("")
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div
        className={`w-full max-w-md transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 transform translate-y-0 scale-100" : "opacity-0 transform translate-y-8 scale-95"
        }`}
      >
        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <div
              className={`flex justify-center mb-6 transition-all duration-1200 ease-out delay-300 ${
                isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
              }`}
            >
              <Image src="/logo.png" alt="K&K Advocates" width={180} height={60} className="h-12 w-auto" priority />
            </div>
            <div
              className={`transition-all duration-1200 ease-out delay-500 ${
                isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
              }`}
            >
              <CardTitle className={`text-2xl sm:text-3xl font-bold text-text-primary mb-2 ${ebGaramond.className}`}>
                Access Required
              </CardTitle>
              <p className="text-text-secondary text-sm sm:text-base">
                Please enter the password to access K&K Advocates website
              </p>
            </div>
          </CardHeader>

          <CardContent
            className={`transition-all duration-1200 ease-out delay-700 ${
              isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-text-primary">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 text-text-tertiary" />
                  </div>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="pl-10 pr-10 h-12 text-base"
                    required
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center hover:text-text-primary transition-colors"
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-text-tertiary" />
                    ) : (
                      <Eye className="h-4 w-4 text-text-tertiary" />
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <div className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-md p-3 animate-in fade-in-0 slide-in-from-top-1">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                className="w-full h-12 bg-text-accent hover:bg-primary-700 text-white font-medium transition-all duration-300 ease-out hover:scale-105"
                disabled={isLoading || !password}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Verifying...</span>
                  </div>
                ) : (
                  "Access Website"
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-text-tertiary">
                Access will be granted for 12 hours after successful authentication
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Utility function to check authentication
export function checkAuthentication(): boolean {
  if (typeof window === "undefined") return false

  try {
    const authData = localStorage.getItem(AUTH_KEY)
    if (!authData) return false

    const { authenticated, timestamp } = JSON.parse(authData)
    const now = Date.now()

    // Check if authentication has expired (12 hours)
    if (now - timestamp > AUTH_TIMEOUT) {
      localStorage.removeItem(AUTH_KEY)
      return false
    }

    return authenticated === true
  } catch (error) {
    localStorage.removeItem(AUTH_KEY)
    return false
  }
}

// Utility function to clear authentication
export function clearAuthentication(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(AUTH_KEY)
  }
}
