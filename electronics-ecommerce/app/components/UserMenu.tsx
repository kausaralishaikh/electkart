"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { User } from "lucide-react"
import { useAuth } from "../contexts/AuthContext"

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    setIsOpen(false)
    router.push("/")
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
      >
        <User size={24} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1">
          {user ? (
            <>
              <Link
                href="/account"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Account
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/signin"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  )
}

