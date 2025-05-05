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

  const images = [
    { src: 'tea-man.jpg', className: 'top-10 left-10 rotate-[-6deg]' },
    { src: 'camel-alone.jpg', className: 'top-32 right-10 rotate-3' },
    { src: 'desert-teaset.jpg', className: 'bottom-10 left-16 rotate-2' },
    { src: 'interior-sitting.jpg', className: 'bottom-20 right-20 rotate-[-3deg]' },
    { src: 'jeep-journey.jpg', className: 'top-1/2 left-5 rotate-2' },
    { src: 'hero-tomb.jpg', className: 'bottom-1/3 right-10 rotate-[-5deg]' },
  ]

  return (
    <main className="relative min-h-screen bg-white text-white overflow-hidden">
      {/* Polaroid background images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={`/${img.src}`}
          alt=""
          className={`absolute w-32 md:w-40 shadow-lg border-4 border-white ${img.className} hidden sm:block`}
          style={{ zIndex: 1 }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-300">
          Discover Hidden Destinations with <span className="text-white">Rehla</span>
        </h1>
        <p className="text-lg text-gray-300 mb-6 max-w-xl">
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



