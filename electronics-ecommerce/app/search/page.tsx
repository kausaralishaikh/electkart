import { searchProducts } from "../utils/api"
import { ProductCard } from "../components/ProductCard"
import type { Product } from "../data/products"

export default async function SearchResults({ searchParams }: { searchParams: { q: string } }) {
  const query = searchParams.q

  if (!query) {
    return (
      <div className="max-w-4xl mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4 dark:text-emerald-400">Search Results</h1>
        <p className="text-xl text-gray-600 dark:text-pink-300">Please enter a search term to find products.</p>
      </div>
    )
  }

  try {
    const products: Product[] = await searchProducts(query)

    return (
      <div className="max-w-4xl mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4 dark:text-emerald-400">Search Results for "{query}"</h1>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-xl text-gray-600 dark:text-pink-300">
            No products found for "{query}". Please try a different search term.
          </p>
        )}
      </div>
    )
  } catch (error) {
    console.error("Search error:", error)
    return (
      <div className="max-w-4xl mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4 dark:text-emerald-400">Search Error</h1>
        <p className="text-xl text-red-600 dark:text-red-400">
          An error occurred while searching for products. Please try again later.
        </p>
      </div>
    )
  }
}

