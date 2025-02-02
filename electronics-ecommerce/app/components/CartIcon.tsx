"use client"

import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { useCart } from "../contexts/CartContext"

export default function CartIcon() {
  const { cart } = useCart()

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <Link
      href="/cart"
      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 relative"
    >
      <ShoppingCart size={24} />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {itemCount}
        </span>
      )}
    </Link>
  )
}

