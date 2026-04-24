// components/Contact.jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import RevealSection from './RevealSection'
import emailjs from '@emailjs/browser'

const socials = [
  {
    label: 'Email',
    value: 'sanjanakumar0330@gmail.com',
    href: 'mailto:sanjanakumar0330@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    color: '#c084fc',
  },
  {
    label: 'GitHub',
    value: 'github.com/sanjana-s',
    href: 'https://github.com/sanjanakumar-1103',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    color: '#a78bfa',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/sanjana-s',
    href: 'https://www.linkedin.com/in/sanjanas03',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    color: '#818cf8',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

 const handleSubmit = (e) => {
  e.preventDefault()

  emailjs.send(
    'service_4prpdg6',        // ✅ your service ID
    'template_utky6ux',       // 🔁 paste your template ID here
    {
      name: form.name,
      email: form.email,
      message: form.message,
    },
    'moDfO2t-D3QRJ_cgC'         // 🔁 paste your public key
  )
  .then(() => {
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  })
  .catch((err) => {
    console.error('FAILED...', err)
  })
}

  return (
    <section id="contact" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-64 rounded-full blur-3xl opacity-8 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }}
      />

      <div className="max-w-6xl mx-auto">
        <RevealSection>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs text-mauve/50 tracking-widest">06 /</span>
            <h2 className="font-display text-4xl md:text-5xl text-mist/90">Let's Connect</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-mauve/20 to-transparent" />
          </div>
          <p className="font-body text-mist/30 text-sm mb-12 pl-10">
            Let's build something remarkable together.
          </p>
        </RevealSection>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: socials */}
          <RevealSection delay={0.1}>
            <div className="space-y-4">
              <p className="font-body text-mist/50 text-base leading-relaxed font-light mb-8">
                Whether you're looking to collaborate on AI research, build intelligent systems, or just want to say hello — I'd love to connect.
              </p>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 glass glass-hover rounded-xl group transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{ background: `${s.color}15`, color: s.color }}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <p className="font-mono text-xs text-mist/30 tracking-wider mb-0.5">{s.label}</p>
                    <p className="font-body text-sm text-mist/60 group-hover:text-mist transition-colors">{s.value}</p>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-mist/30">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </RevealSection>

          {/* Right: form */}
          <RevealSection delay={0.2}>
            <div className="glass rounded-2xl p-7 relative overflow-hidden">
              {/* Top glow line */}
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(192,132,252,0.4), transparent)' }}
              />

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(192,132,252,0.3)' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <p className="font-display text-2xl gradient-text mb-2">Message Sent!</p>
                  <p className="font-body text-sm text-mist/40">I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="font-mono text-xs text-mist/30 tracking-wider block mb-2">YOUR NAME</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Ada Lovelace"
                      className="w-full bg-white/3 border border-white/6 rounded-xl px-4 py-3 font-body text-sm text-mist/70 placeholder-mist/20 focus:outline-none focus:border-mauve/30 focus:bg-white/5 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-mist/30 tracking-wider block mb-2">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="ada@example.com"
                      className="w-full bg-white/3 border border-white/6 rounded-xl px-4 py-3 font-body text-sm text-mist/70 placeholder-mist/20 focus:outline-none focus:border-mauve/30 focus:bg-white/5 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-mist/30 tracking-wider block mb-2">MESSAGE</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="I'd love to collaborate on..."
                      className="w-full bg-white/3 border border-white/6 rounded-xl px-4 py-3 font-body text-sm text-mist/70 placeholder-mist/20 focus:outline-none focus:border-mauve/30 focus:bg-white/5 transition-all duration-300 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-body text-sm font-medium text-white transition-all duration-300 relative overflow-hidden group"
                    style={{
                      background: 'linear-gradient(135deg, #7c3aed, #c084fc)',
                      boxShadow: '0 0 30px rgba(139,92,246,0.3)',
                    }}
                  >
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: 'linear-gradient(135deg, #8b5cf6, #f0abfc)' }}
                    />
                    <span className="relative">Send Message →</span>
                  </button>
                </form>
              )}
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  )
}
