"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"

export default function SearchBar() {
  const [query, setQuery] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
      />
      <Search
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300"
        size={20}
      />
    </form>
  )
}

