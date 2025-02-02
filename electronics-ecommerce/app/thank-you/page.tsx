"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function ThankYou() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get("orderId")

  return (
    <div className="max-w-4xl mx-auto mt-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
      <p className="mb-4">Your order has been successfully placed and is being processed.</p>
      {orderId && (
        <p className="mb-4">
          Your order ID is: <strong>{orderId}</strong>
        </p>
      )}
      <p className="mb-8">
        We'll send you an email with your order details and tracking information once it's shipped.
      </p>
      <Link href="/" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Continue Shopping
      </Link>
    </div>
  )
}

