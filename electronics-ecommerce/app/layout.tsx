import "./globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"
import SearchBar from "./components/SearchBar"
import DarkModeToggle from "./components/DarkModeToggle"
import { AuthProvider } from "./contexts/AuthContext"
import { CartProvider } from "./contexts/CartContext"
import CartIcon from "./components/CartIcon"
import UserMenu from "./components/UserMenu"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ElectKart - Your Electronics Destination",
  description: "Find the latest electronics and gadgets at ElectKart",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 transition-colors duration-300`}>
        <AuthProvider>
          <CartProvider>
            <header className="bg-white dark:bg-gray-800 shadow-md">
              <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <Link href="/" className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4 md:mb-0">
                    ElectKart
                  </Link>
                  <div className="flex items-center space-x-4">
                    <SearchBar />
                    <DarkModeToggle />
                    <CartIcon />
                    <UserMenu />
                  </div>
                </div>
                <nav className="mt-4">
                  <ul className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6 text-sm font-medium">
                    <li>
                      <Link
                        href="/"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        All Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/category/smartphones"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        Smartphones
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/category/laptops"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        Laptops
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/category/accessories"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        Accessories
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </header>
            <main className="container mx-auto mt-8 px-4">{children}</main>
            <footer className="bg-gray-800 dark:bg-gray-950 text-white mt-16 py-8">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">About ElectKart</h3>
                    <p className="text-gray-300 dark:text-gray-400">
                      Your ultimate destination for cutting-edge electronics and gadgets.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/about" className="text-gray-300 dark:text-gray-400 hover:text-white">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="text-gray-300 dark:text-gray-400 hover:text-white">
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link href="/faq" className="text-gray-300 dark:text-gray-400 hover:text-white">
                          FAQ
                        </Link>
                      </li>
                      <li>
                        <Link href="/privacy" className="text-gray-300 dark:text-gray-400 hover:text-white">
                          Privacy Policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <p className="text-gray-300 dark:text-gray-400">Email: shaikhkausarali771@gmail.com</p>
                    <p className="text-gray-300 dark:text-gray-400">Phone: 7021951058</p>
                    <p className="text-gray-300 dark:text-gray-400">
                      Gazdhar Bandh, Santacruz (West)
                      <br />
                      Mumbai 400054, Maharashtra
                    </p>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300 dark:text-gray-400">
                  © {new Date().getFullYear()} ElectKart. All rights reserved.
                </div>
              </div>
            </footer>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

