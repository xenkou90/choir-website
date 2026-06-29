import { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-black py-24 px-6 md:px-70">

      {/* Section header */}
      <span className="text-xs tracking-widest uppercase text-orange-400">
        Get In Touch
      </span>
      <h2 className="font-serif text-white text-5xl font-bold mt-4 mb-16">
        Contact Us
      </h2>

      {submitted ? (
        <div className="border border-orange-400/30 p-12 text-center">
          <span className="font-serif text-white text-3xl">Thank you for reaching out.</span>
          <p className="text-white/40 text-sm mt-4">We will get back to you as soon as possible.</p>
        </div>
      ) : (
        <div className="max-w-2xl flex flex-col gap-6">

          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-xs tracking-widest uppercase text-white/40">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="bg-transparent border border-white/10 text-white text-sm px-4 py-3 outline-none focus:border-orange-400 transition-colors placeholder:text-white/20"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-xs tracking-widest uppercase text-white/40">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="bg-transparent border border-white/10 text-white text-sm px-4 py-3 outline-none focus:border-orange-400 transition-colors placeholder:text-white/20"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-xs tracking-widest uppercase text-white/40">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message..."
              rows={6}
              className="bg-transparent border border-white/10 text-white text-sm px-4 py-3 outline-none focus:border-orange-400 transition-colors placeholder:text-white/20 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="border border-orange-400 text-orange-400 text-xs tracking-widest uppercase px-8 py-4 w-fit hover:bg-orange-400 hover:text-black transition-all"
          >
            Send Message
          </button>

        </div>
      )}

    </section>
  )
}

export default Contact