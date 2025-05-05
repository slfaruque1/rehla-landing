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
    { src: 'tea-man.jpg', className: 'top-4 left-4 rotate-[-6deg]' },
    { src: 'camel-alone.jpg', className: 'top-6 right-6 rotate-3' },
    { src: 'jeep-journey.jpg', className: 'bottom-6 left-6 rotate-2' },
    { src: 'hero-tomb.jpg', className: 'bottom-8 right-6 rotate-[-4deg]' },
  ]

  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Polaroid-style images positioned inside the hero */}
        {images.map((img, index) => (
          <img
            key={index}
            src={`/${img.src}`}
            alt=""
            className={`absolute w-28 md:w-36 shadow-lg border-4 border-white ${img.className}`}
            style={{ zIndex: 1 }}
          />
        ))}

        {/* Hero Content */}
        <div className="relative z-10 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Hidden Destinations with <span className="text-[#f1c27d]">Rehla</span>
          </h1>
          <p className="text-lg text-white font-semibold mb-6">
            Explore off-the-grid, culturally rich, and eco-conscious journeys across the MENA region.
          </p>

          {submitted ? (
            <p className="text-[#f1c27d] font-semibold">Thanks! You’ve joined the waitlist.</p>
          ) : (
            <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 mb-4 border border-gray-500 rounded-xl bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f1c27d]"
              />
              <button
                type="submit"
                className="w-full bg-[#f1c27d] hover:bg-[#d9a867] text-black font-semibold py-3 rounded-xl transition-colors"
              >
                Join the Waitlist
              </button>
            </form>
          )}

          <p className="text-sm text-gray-400 mt-4">No spam. Just soulful travel updates.</p>
        </div>
      </section>

      {/* About Rehla Section */}
      <section className="bg-gradient-to-b from-black to-[#0a0a0a] py-20 px-6 border-t border-gray-800">
        <div className="max-w-2xl mx-auto bg-[#111] rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-white mb-6 text-center">What is Rehla?</h2>
          <p className="text-white text-lg leading-relaxed text-center">
            <strong>Rehla</strong> is more than a travel platform — it’s a movement. 
            We help you discover hidden destinations across the MENA region that honour culture, sustainability, and soul. 
            Whether it's ancient deserts, quiet villages, or vibrant traditions, Rehla brings you closer to the places that matter — 
            and the people who make them unforgettable.
          </p>
        </div>
      </section>
    </main>
  )
}
