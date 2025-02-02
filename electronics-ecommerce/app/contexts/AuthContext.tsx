"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"

interface User {
  id: string
  email: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = async (email: string, password: string) => {
    // In a real app, you would validate credentials with a backend
    // For this example, we'll just set a user if the email includes '@'
    if (email.includes("@") && password.length >= 6) {
      const user = { id: "1", email }
      setUser(user)
      localStorage.setItem("user", JSON.stringify(user))
    } else {
      throw new Error("Invalid email or password")
    }
  }

  const signup = async (email: string, password: string) => {
    // In a real app, you would create a new user in the backend
    // For this example, we'll just set a user if the email includes '@'
    if (email.includes("@") && password.length >= 6) {
      const user = { id: "1", email }
      setUser(user)
      localStorage.setItem("user", JSON.stringify(user))
    } else {
      throw new Error("Invalid email or password")
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return <AuthContext.Provider value={{ user, login, signup, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

