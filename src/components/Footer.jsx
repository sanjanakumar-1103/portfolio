// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-xl gradient-text tracking-wider">Sanjana S</p>
        <p className="font-mono text-xs text-mist/20 tracking-widest text-center">
          Built with React · Vite · Tailwind · Framer Motion
        </p>
        <p className="font-body text-xs text-mist/20">
          © {new Date().getFullYear()} · All rights reserved
        </p>
      </div>
    </footer>
  )
}
