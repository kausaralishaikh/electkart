import { useState } from "react"
import { Star } from "lucide-react"

interface ReviewFormProps {
  productId: number
  onSubmit: (review: { rating: number; comment: string }) => void
}

export function ReviewForm({ productId, onSubmit }: ReviewFormProps) {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ rating, comment })
    setRating(0)
    setComment("")
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-4">
        <label className="block mb-2">Rating:</label>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((value) => (
            <button key={value} type="button" onClick={() => setRating(value)} className="mr-1">
              <Star className={value <= rating ? "text-yellow-400 fill-current" : "text-gray-300"} size={24} />
            </button>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="comment" className="block mb-2">
          Comment:
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          rows={4}
          required
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
        Submit Review
      </button>
    </form>
  )
}

