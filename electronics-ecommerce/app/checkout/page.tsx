"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "../contexts/CartContext"
import { useAuth } from "../contexts/AuthContext"

export default function Checkout() {
  const { cart, clearCart } = useCart()
  const { user } = useAuth()
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("credit_card")

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Simulate order creation
    const order = {
      id: Math.random().toString(36).substr(2, 9),
      items: cart,
      total: total,
      paymentMethod: paymentMethod,
      date: new Date().toISOString(),
    }

    // Clear the cart and redirect to a thank you page
    clearCart()
    router.push(`/thank-you?orderId=${order.id}`)
  }

  if (!user) {
    router.push("/signin")
    return null
  }

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">
            Full Name
          </label>
          <input type="text" id="name" required className="w-full px-3 py-2 border rounded" />
        </div>
        <div>
          <label htmlFor="address" className="block mb-1">
            Address
          </label>
          <input type="text" id="address" required className="w-full px-3 py-2 border rounded" />
        </div>
        <div>
          <label htmlFor="city" className="block mb-1">
            City
          </label>
          <input type="text" id="city" required className="w-full px-3 py-2 border rounded" />
        </div>
        <div>
          <label htmlFor="zip" className="block mb-1">
            ZIP Code
          </label>
          <input type="text" id="zip" required className="w-full px-3 py-2 border rounded" />
        </div>
        <div>
          <label className="block mb-1">Payment Method</label>
          <div className="space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="credit_card"
                checked={paymentMethod === "credit_card"}
                onChange={() => setPaymentMethod("credit_card")}
                className="form-radio"
              />
              <span className="ml-2">Credit Card</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={() => setPaymentMethod("paypal")}
                className="form-radio"
              />
              <span className="ml-2">PayPal</span>
            </label>
          </div>
        </div>
        {paymentMethod === "credit_card" && (
          <div>
            <label htmlFor="card" className="block mb-1">
              Credit Card Number
            </label>
            <input type="text" id="card" required className="w-full px-3 py-2 border rounded" />
          </div>
        )}
        <div className="mt-6">
          <p className="text-xl font-semibold mb-4">Total: ₹{total.toLocaleString("en-IN")}</p>
          <button
            type="submit"
            disabled={isProcessing}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:bg-blue-300"
          >
            {isProcessing ? "Processing..." : "Place Order"}
          </button>
        </div>
      </form>
    </div>
  )
}

