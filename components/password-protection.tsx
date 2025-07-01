"use client"

import type React from "react"

import { useState } from "react"
import { EB_Garamond } from "next/font/google"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"
import Image from "next/image"

const ebGaramond = EB_Garamond({ subsets: ["latin"] })

interface PasswordProtectionProps {
  onAuthenticate: () => void
}

export default function PasswordProtection({ onAuthenticate }: PasswordProtectionProps) {
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate loading delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (password === "kkadvocates") {
      // Store authentication with timestamp
      const authData = {
        authenticated: true,
        timestamp: Date.now(),
      }
      localStorage.setItem("kk_auth", JSON.stringify(authData))
      onAuthenticate()
    } else {
      setError("Incorrect password. Please try again.")
      setPassword("")
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.png"
              alt="K&K Advocates"
              width={200}
              height={80}
              className="h-16 w-auto"
              crossOrigin="anonymous"
            />
          </div>
          <h1 className={`text-2xl sm:text-3xl font-bold text-text-primary mb-2 ${ebGaramond.className}`}>
            Welcome to K&K Advocates
          </h1>
          <p className="text-text-secondary text-sm sm:text-base">Please enter the password to access the website</p>
        </div>

        {/* Password Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pr-10 h-12 text-base"
              required
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
              disabled={isLoading}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center bg-red-50 p-3 rounded-md border border-red-200">
              {error}
            </div>
          )}

          <Button
            type="submit"
            className="w-full h-12 bg-text-accent hover:bg-primary-700 text-white font-medium transition-colors text-base"
            disabled={isLoading}
          >
            {isLoading ? "Verifying..." : "Enter Website"}
          </Button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-xs">© 2024 K&K Advocates. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
