'use client'
import { useState } from 'react'

export default function Home() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    const formData = new FormData(form)

    const response = await fetch('https://formsubmit.co/sharminfaruque2@gmail.com', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    })

    if (response.ok) {
      setSubmitted(true)
      form.reset()
    }
  }

  return (
    <main className="min-h-screen text-white">
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/hero-tomb.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
        {/* Content */}
        <div className="z-10 text-center px-4 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Hidden Destinations with <span className="text-green-300">Rehla</span>
          </h1>
          <p className="text-lg text-gray-200 mb-6">
            Explore off-the-grid, culturally rich, and eco-conscious journeys across the MENA region.
          </p>

          {submitted ? (
            <p className="text-green-400 font-semibold">Thanks! You’ve joined the waitlist.</p>
          ) : (
            <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors"
              >
                Join the Waitlist
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Gallery Section */}
      <section className="bg-white py-12 px-4">
        <h2 className="text-2xl text-center font-bold text-gray-800 mb-6">Experience the Rehla Spirit</h2>
        <div className="flex overflow-x-auto space-x-4 pb-4">
          {[
            'tea-man.jpg',
            'camel-alone.jpg',
            'desert-teaset.jpg',
            'interior-sitting.jpg',
            'jeep-journey.jpg',
          ].map((img, index) => (
            <img
              key={index}
              src={`/${img}`}
              alt="Rehla destination"
              className="w-72 h-48 object-cover rounded-xl shadow-md flex-shrink-0"
            />
          ))}
        </div>
      </section>
    </main>
  )
}



