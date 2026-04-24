// App.jsx — Root component
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

import Cursor from './components/Cursor'
import ParticleField from './components/ParticleField'
import ScrollProgress from './components/ScrollProgress'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Education from "./components/Education";

export default function App() {
  const [loading, setLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(true)
  const [loaderDone, setLoaderDone] = useState(false)

  // Toggle dark/light class on root html element
  useEffect(() => {
  const root = document.documentElement
  root.classList.add('dark')

  document.body.style.backgroundColor = '#070711'
  document.body.style.color = '#e0d7ff'
}, [])

  // Hide loader after animation completes
  const handleLoaderComplete = () => {
    setLoaderDone(true)
    // Small delay so exit animation plays
    setTimeout(() => setLoading(false), 900)
  }

  return (
    <>
      {/* Custom cursor — hidden on touch devices */}
      <Cursor />

      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Cinematic loader */}
      <AnimatePresence>{loading && !loaderDone && <Loader onComplete={handleLoaderComplete} />}</AnimatePresence>

      {/* Particle background */}
      <ParticleField />

      {/* Gradient background blobs (fixed, always present) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top-left blob */}
        <div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }}
        />
        {/* Bottom-right blob */}
        <div
          className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full opacity-8 blur-3xl"
          style={{ background: 'radial-gradient(circle, #c084fc 0%, transparent 70%)' }}
        />
        {/* Center subtle overlay */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-3 blur-3xl"
          style={{ background: 'radial-gradient(circle, #4c1d95 0%, transparent 60%)' }}
        />
      </div>

      {/* Main content */}
      {!loading && (
        <div className="relative z-10">
          <Navbar/>
          <main>
            <Hero />
            <About />
            <Education />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}
