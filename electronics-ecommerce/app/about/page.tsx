import Link from "next/link"

export default function About() {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">About ElectKart</h1>
      <p className="mb-4">
        ElectKart is your ultimate destination for cutting-edge electronics and gadgets. We are passionate about
        bringing the latest technology to our customers, ensuring they stay ahead in the digital world.
      </p>
      <p className="mb-4">
        Founded in 2023, ElectKart has quickly become a trusted name in the online electronics retail space. Our team of
        tech enthusiasts carefully curates our product selection, bringing you only the best and most innovative items
        on the market.
      </p>
      <p className="mb-4">At ElectKart, we believe in:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Quality: We offer only the highest quality products from reputable brands.</li>
        <li>Innovation: Our selection focuses on the latest and most innovative tech products.</li>
        <li>Customer Satisfaction: We strive to provide an excellent shopping experience and after-sales support.</li>
        <li>Affordability: We aim to make cutting-edge technology accessible to everyone.</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Our Technology Stack</h2>
      <p className="mb-4">
        ElectKart is built using modern web technologies to ensure a fast, responsive, and user-friendly experience:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>React: A JavaScript library for building user interfaces</li>
        <li>Next.js: A React framework for production-grade applications</li>
        <li>TypeScript: A typed superset of JavaScript for improved developer experience and code quality</li>
        <li>Tailwind CSS: A utility-first CSS framework for rapid UI development</li>
        <li>Vercel: A cloud platform for static and serverless deployment</li>
      </ul>
      <p className="mb-4">
        This combination of technologies allows us to create a fast, scalable, and maintainable e-commerce platform that
        provides an excellent user experience across all devices.
      </p>
      <p>
        Thank you for choosing ElectKart for all your electronics needs. We're excited to be part of your tech journey!
      </p>
      <div className="mt-8">
        <Link href="/" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

