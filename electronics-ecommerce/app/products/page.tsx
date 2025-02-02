"use client"

import { useEffect, useState } from "react"
import { ProductCard } from "../components/ProductCard"
import { fetchProducts } from "../utils/api"
import type { Product } from "../data/products"

export default function Products() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts()
        setProducts(data)
        setLoading(false)
      } catch (err) {
        setError("Failed to fetch products")
        setLoading(false)
      }
    }
    loadProducts()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

