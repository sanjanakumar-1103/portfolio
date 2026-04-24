// components/Hero.jsx
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const TYPING_WORDS = ["AI & Backend",
  "Intelligent Systems",
  "Scalable Solutions",
  "Real-World Applications"]

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const word = TYPING_WORDS[wordIdx]

    if (!deleting && displayed.length < word.length) {
      timeoutRef.current = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === word.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => setDisplayed(word.slice(0, displayed.length - 1)), 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setWordIdx((i) => (i + 1) % TYPING_WORDS.length)
    }

    return () => clearTimeout(timeoutRef.current)
  }, [displayed, deleting, wordIdx])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, #c084fc, transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, #f0abfc, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
          <span className="font-mono text-xs text-mist/50 tracking-wider">Open to Building Real-World Software & AI Systems</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="font-display text-6xl sm:text-7xl md:text-8xl font-light leading-none mb-4"
        >
          <span className="gradient-text glow-text">Sanjana S</span>
          
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-body text-lg md:text-xl text-mist/40 max-w-xl mx-auto mb-6 font-light"
        >
          Building things that (usually) work.<br></br>
          Still learning, still building, still breaking things
        </motion.p>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-12 h-10"
        >
          <span className="font-mono text-sm text-mist/30">Focused on  →</span>
          <span className="font-mono text-sm font-medium text-mauve">
            {displayed}
            <span className="inline-block w-0.5 h-4 bg-mauve ml-0.5 animate-pulse" />
          </span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="group relative px-8 py-3.5 rounded-full font-body text-sm font-medium tracking-wide overflow-hidden"
          >
            <span
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #c084fc)',
                boxShadow: '0 0 30px rgba(139,92,246,0.4)',
              }}
            />
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(135deg, #8b5cf6, #f0abfc)' }}
            />
            <span className="relative text-white">View Projects</span>
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="group px-8 py-3.5 rounded-full font-body text-sm font-medium tracking-wide glass glow-border text-mist/70 hover:text-mist transition-all duration-300 hover:border-mauve/30"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-mist/20 tracking-widest">SCROLL</span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-mauve/40 to-transparent"
            animate={{ scaleY: [0, 1], opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
