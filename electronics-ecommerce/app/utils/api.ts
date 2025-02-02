import { products, type Product } from "../data/products"

export async function fetchProducts(): Promise<Product[]> {
  // In a real application, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 500) // Simulate network delay
  })
}

export async function searchProducts(query: string): Promise<Product[]> {
  const allProducts = await fetchProducts()
  return allProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()),
  )
}

export async function fetchProduct(id: number): Promise<Product | null> {
  const allProducts = await fetchProducts()
  return allProducts.find((p) => p.id === id) || null
}

