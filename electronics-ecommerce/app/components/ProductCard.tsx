import Link from "next/link"
import type { Product } from "../data/products"

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={product.images[0] || "/placeholder.svg"}
        alt={product.name}
        className="w-full h-48 sm:h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 dark:text-emerald-400">{product.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-2">{product.description}</p>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <span className="text-xl font-bold text-blue-600 dark:text-pink-400 mb-2 sm:mb-0">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          <Link
            href={`/products/${product.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 transition-colors w-full sm:w-auto text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

