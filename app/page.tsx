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
      headers: { Accept: 'application/json' },
      body: formData,
    })

    if (response.ok) {
      setSubmitted(true)
      form.reset()
    }
  }

  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      {/* Scrolling image gallery in background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="flex w-[300%] animate-scrollGallery space-x-4 h-full">
          {[
            'tea-man.jpg',
            'camel-alone.jpg',
            'desert-teaset.jpg',
            'interior-sitting.jpg',
            'jeep-journey.jpg',
            'hero-tomb.jpg',
          ].map((img, index) => (
            <img
              key={index}
              src={`/${img}`}
              alt=""
              className="h-full w-auto object-cover flex-shrink-0"
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
      </div>

      {/* Main content over the gallery */}
      <div className="relative z-20 flex flex-col items-center justify-center h-screen px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover Hidden Destinations with <span className="text-green-300">Rehla</span>
        </h1>
        <p className="text-lg text-gray-200 mb-6 max-w-xl">
          Explore off-the-grid, culturally rich, and eco-conscious journeys across the MENA region.
        </p>

        {submitted ? (
          <p className="text-green-400 font-semibold">Thanks! You’ve joined the waitlist.</p>
        ) : (
          <form onSubmit={handleSubmit} className="w-full max-w-md">
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

        <p className="text-sm text-gray-400 mt-4">No spam. Just soulful travel updates.</p>
      </div>
    </main>
  )
}




