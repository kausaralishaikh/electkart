"use client"

import { useState, useEffect } from "react"
import { fetchProducts } from "../../utils/api"
import { ProductCard } from "../../components/ProductCard"
import { notFound } from "next/navigation"
import type { Product } from "../../data/products"

export default function CategoryPage({ params }: { params: { category: string } }) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  //const api = useApi()

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const allProducts = await fetchProducts()
        const categoryProducts = allProducts.filter((p) => p.category.toLowerCase() === params.category.toLowerCase())
        setProducts(categoryProducts)
      } catch (err) {
        console.error("Failed to fetch products:", err)
        setError("Failed to fetch products")
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [params.category])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (products.length === 0) return notFound()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 capitalize">{params.category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

