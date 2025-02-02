import Link from "next/link"
import { ProductCard } from "./components/ProductCard"
import { useState, useEffect } from "react"
import { fetchProducts } from "./utils/api"

export default function HomePage() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState("")

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts()
        setProducts(fetchedProducts)
      } catch (err) {
        console.error("Failed to fetch products:", err)
        setErrorMsg("Oops! We had trouble loading the products. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    loadProducts()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (errorMsg) {
    return <div>{errorMsg}</div>
  }

  const featuredProducts = products.slice(0, 4)
  const categories = Array.from(new Set(products.map((p) => p.category)))

  return (
    <div className="container mx-auto px-4">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-8 text-center dark:text-emerald-400">Welcome to ElectKart</h1>
        <p className="text-xl text-center text-gray-600 dark:text-pink-300 mb-8">
          Discover the latest in cutting-edge electronics and gadgets
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/category/${category}`}
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg p-6 text-center hover:from-blue-600 hover:to-blue-800 transition-colors dark:from-indigo-600 dark:to-purple-700 dark:hover:from-indigo-700 dark:hover:to-purple-800"
            >
              <h2 className="text-2xl font-semibold mb-2 capitalize">{category}</h2>
              <p>Explore our {category}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6 dark:text-emerald-400">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition-colors dark:bg-indigo-600 dark:hover:bg-indigo-700 inline-block"
          >
            View All Products
          </Link>
        </div>
      </section>
    </div>
  )
}

