export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Smartphone X",
    description: "The latest smartphone with advanced features.",
    price: 60000,
    image: "/placeholder.svg?height=300&width=300"
  },
  {
    id: 2,
    name: "Laptop Pro",
    description: "Powerful laptop for professionals.",
    price: 129999,
    image: "/placeholder.svg?height=300&width=300"
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    description: "High-quality sound with long battery life.",
    price: 1499,
    image: "/placeholder.svg?height=300&width=300"
  },
  {
    id: 4,
    name: "4K Smart TV",
    description: "Immersive viewing experience with smart features.",
    price: 27999,
    image: "/placeholder.svg?height=300&width=300"
  },
  {
    id: 5,
    name: "Digital Camera",
    description: "Capture memories with this high-resolution camera.",
    price: 149999,
    image: "/placeholder.svg?height=300&width=300"
  }
];

