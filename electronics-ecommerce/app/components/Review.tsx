import { Star } from "lucide-react"

export interface ReviewType {
  id: number
  userId: string
  userName: string
  rating: number
  comment: string
  date: string
}

export function Review({ review }: { review: ReviewType }) {
  return (
    <div className="border-b border-gray-200 pb-4 mb-4">
      <div className="flex items-center mb-2">
        <div className="flex mr-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"} size={16} />
          ))}
        </div>
        <span className="font-semibold">{review.userName}</span>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-2">{review.comment}</p>
      <span className="text-sm text-gray-500">{review.date}</span>
    </div>
  )
}

