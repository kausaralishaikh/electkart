import Link from "next/link"

export default function FAQ() {
  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-6 dark:text-emerald-400">Frequently Asked Questions</h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2 dark:text-pink-400">What payment methods do you accept?</h2>
          <p className="dark:text-gray-300">We accept all major credit cards, debit cards, and PayPal.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 dark:text-pink-400">How long does shipping take?</h2>
          <p className="dark:text-gray-300">
            Shipping typically takes 3-5 business days for domestic orders and 7-14 business days for international
            orders.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 dark:text-pink-400">What is your return policy?</h2>
          <p className="dark:text-gray-300">
            We offer a 30-day return policy for most items. Please check our returns page for more details.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 dark:text-pink-400">Do you offer international shipping?</h2>
          <p className="dark:text-gray-300">
            Yes, we ship to most countries worldwide. Shipping costs and delivery times may vary depending on the
            destination.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 dark:text-pink-400">How can I track my order?</h2>
          <p className="dark:text-gray-300">
            Once your order is shipped, you will receive a tracking number via email. You can use this number to track
            your package on our website or the carrier's website.
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

