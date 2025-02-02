import { notFound } from "next/navigation"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { ImageGallery } from "../../components/ImageGallery"
import { Review } from "../../components/Review"
import { ReviewForm } from "../../components/ReviewForm"
import { fetchProduct } from "../../utils/api"
import { useState, useEffect } from "react"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<any>(null)
  const [reviews, setReviews] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState("")

  useEffect(() => {
    const loadProductAndReviews = async () => {
      try {
        const productData = await fetchProduct(Number(params.id))
        if (productData) {
          setProduct(productData)
          // TODO: Fetch real reviews from an API
          setReviews([
            {
              id: 1,
              userId: "1",
              userName: "John Doe",
              rating: 4,
              comment: "Great product! Very satisfied with the purchase.",
              date: "2023-05-15",
            },
            {
              id: 2,
              userId: "2",
              userName: "Jane Smith",
              rating: 5,
              comment: "Excellent quality and fast delivery. Highly recommended!",
              date: "2023-05-14",
            },
          ])
        } else {
          setErrorMsg("Product not found")
        }
      } catch (err) {
        console.error("Failed to fetch product:", err)
        setErrorMsg("Oops! We had trouble loading this product. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    loadProductAndReviews()
  }, [params.id])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (errorMsg) {
    return <div>{errorMsg}</div>
  }

  if (!product) {
    return notFound()
  }

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <ImageGallery images={product.images} />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-4 dark:text-emerald-400">{product.name}</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{product.description}</p>
            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold text-blue-600 dark:text-pink-400 mr-4">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-sm font-semibold px-2.5 py-0.5 rounded">
                In Stock
              </span>
            </div>
            <Link
              href="/cart"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 transition-colors flex items-center mb-4 w-fit"
            >
              <ShoppingCart className="mr-2" size={24} />
              Add to Cart
            </Link>
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4 dark:text-emerald-400">Product Details</h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>High-quality build</li>
                <li>Advanced features</li>
                <li>1-year warranty</li>
                <li>Free shipping</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 dark:text-emerald-400">Customer Reviews</h2>
          <ReviewForm productId={product.id} onSubmit={() => {}} />
          <div className="mt-8">
            {reviews.map((review) => (
              <Review key={review.id} review={review} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

