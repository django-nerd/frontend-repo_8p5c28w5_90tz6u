import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('Sending...')
    try {
      // Demo-only: simulate send
      await new Promise((r) => setTimeout(r, 900))
      setStatus('Thanks — we’ll be in touch within 24 hours.')
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="bg-[#0b0f14] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-white text-3xl sm:text-4xl font-semibold">Let’s build something exceptional</h2>
          <p className="mt-3 text-white/60">Tell us about your goals, timeline, and what success looks like. We’ll reply with a tailored plan.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <input required placeholder="Your name" className="rounded-md bg-white/[0.04] border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-600" />
          <input type="email" required placeholder="Email" className="rounded-md bg-white/[0.04] border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-600" />
          <input placeholder="Company" className="rounded-md bg-white/[0.04] border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-600" />
          <input placeholder="Budget range" className="rounded-md bg-white/[0.04] border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-600" />
          <textarea placeholder="What are you looking to build?" rows={5} className="md:col-span-2 rounded-md bg-white/[0.04] border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-600" />
          <div className="md:col-span-2 flex items-center gap-4">
            <button className="inline-flex items-center rounded-md bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3">Send message</button>
            <span className="text-white/60 text-sm">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}
