'use client'
import { useState } from 'react'

export default function Home() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    const formData = new FormData(form)

    const response = await fetch('https://formspree.io/f/myzwwked', {
      method: 'POST',
      headers: {
        Accept: 'application/json'
      },
      body: formData
    })

    if (response.ok) {
      setSubmitted(true)
      form.reset()
    }
  }

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Discover Hidden Destinations with <span className="text-green-600">Rehla</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Rehla helps you find off-the-grid, eco-conscious, and culturally rich travel experiences across the MENA region.
        </p>

        {submitted ? (
          <p className="text-green-700 font-semibold">Thanks! You’ve joined the waitlist.</p>
        ) : (
          <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors"
            >
              Join the Waitlist
            </button>
          </form>
        )}

        <p className="text-sm text-gray-400 mt-4">
          No spam. Just soulful travel updates.
        </p>
      </div>
    </main>
  )
}

