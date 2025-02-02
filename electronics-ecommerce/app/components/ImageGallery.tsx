'use client'

import { useState } from 'react'

export function ImageGallery({ images }: { images: string[] }) {
  const [currentImage, setCurrentImage] = useState(0)

  return (
    <div>
      <div className="mb-4">
        <img src={images[currentImage]} alt="Product" className="w-full h-auto rounded-lg shadow-md" />
      </div>
      <div className="flex space-x-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-20 h-20 rounded-md overflow-hidden ${
              index === currentImage ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <img src={image} alt={`Product thumbnail ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}

