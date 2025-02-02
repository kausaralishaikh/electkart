"use client"

import { useCart } from "../contexts/CartContext"
import { useRouter } from "next/navigation"
import { useAuth } from "../contexts/AuthContext"

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart()
  const { user } = useAuth()
  const router = useRouter()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleCheckout = () => {
    if (!user) {
      router.push("/signin")
      return
    }
    router.push("/checkout")
  }

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center">
                  <img
                    src={item.images[0] || "/placeholder.svg"}
                    alt={item.name}
                    className="w-16 h-16 object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="font-semibold mr-4">₹{(item.price * item.quantity).toLocaleString("en-IN")}</p>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex justify-between items-center">
            <p className="text-xl font-semibold">Total: ₹{total.toLocaleString("en-IN")}</p>
            <div>
              <button onClick={clearCart} className="bg-red-500 text-white px-4 py-2 rounded mr-4 hover:bg-red-600">
                Clear Cart
              </button>
              <button onClick={handleCheckout} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

