import Link from "next/link"

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-6 dark:text-emerald-400">Contact Us</h1>
      <p className="mb-6 dark:text-gray-300">
        We're here to help! If you have any questions, concerns, or feedback, please don't hesitate to reach out to us.
      </p>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-2 dark:text-pink-400">Customer Support</h2>
          <p className="dark:text-gray-300">Email: shaikhkausarali771@gmail.com</p>
          <p className="dark:text-gray-300">Phone: 7021951058</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 dark:text-pink-400">Business Inquiries</h2>
          <p className="dark:text-gray-300">Email: business@electkart.com</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 dark:text-pink-400">Office Address</h2>
          <p className="dark:text-gray-300">
            ElectKart Headquarters
            <br />
            Gazdhar Bandh, Santacruz (West)
            <br />
            Mumbai 400054
            <br />
            Maharashtra, India
          </p>
        </div>
      </div>
      <div className="mt-8">
        <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

