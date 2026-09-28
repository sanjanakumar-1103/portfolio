// components/Loader.jsx
// Cinematic entry loader
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ onComplete }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-obsidian"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
      >
        {/* Glowing orb */}
        <div className="relative mb-8">
          <motion.div
            className="w-24 h-24 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(192,132,252,0.8) 0%, rgba(139,92,246,0.4) 40%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border border-mauve/30"
            animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border border-mauve/20"
            animate={{ scale: [1, 2.2], opacity: [0.4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut', delay: 0.3 }}
          />
        </div>

        {/* Name reveal */}
        <motion.p
          className="font-display text-3xl tracking-[0.3em] text-mist/80 uppercase mb-2"
          initial={{ opacity: 0, letterSpacing: '0.6em' }}
          animate={{ opacity: 1, letterSpacing: '0.3em' }}
          transition={{ delay: 0.3, duration: 1.2, ease: 'easeOut' }}
        >
          Sanjana Suthanthirakumar
        </motion.p>

        <motion.p
          className="font-mono text-xs tracking-widest text-mauve/50 uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Building Intelligent Systems
        </motion.p>

        {/* Loading bar */}
        <motion.div
          className="mt-10 w-48 h-px bg-white/5 rounded-full overflow-hidden"
        >
          <motion.div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #8b5cf6, #c084fc, #f0abfc)',
              boxShadow: '0 0 10px rgba(192,132,252,0.8)',
            }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            onAnimationComplete={onComplete}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
