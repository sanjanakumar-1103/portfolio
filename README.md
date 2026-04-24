# Sanjana S — Portfolio

A cinematic, premium personal portfolio built with React + Vite + Tailwind CSS + Framer Motion.

##  Features
- Cinematic loading screen
- Custom magnetic cursor with glow
- Particle field background with node connections
- Scroll progress indicator
- Typing animation (Hero section)
- Scroll-triggered section reveal animations
- Glassmorphism project cards
- Dark / Light theme toggle
- Fully responsive (mobile + desktop)
- Contact form UI (no backend)

##  Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

##  Project Structure
```
src/
├── App.jsx                  # Root component
├── main.jsx                 # Entry point
├── index.css                # Global styles + Tailwind
└── components/
    ├── Cursor.jsx            # Custom magnetic cursor
    ├── ParticleField.jsx     # Animated canvas particles
    ├── ScrollProgress.jsx    # Top progress bar
    ├── Loader.jsx            # Cinematic entry animation
    ├── Navbar.jsx            # Sticky navbar + mobile menu
    ├── RevealSection.jsx     # Scroll-triggered reveal wrapper
    ├── Hero.jsx              # Hero + typing animation
    ├── About.jsx             # About section
    ├── Projects.jsx          # Project cards (glassmorphism)
    ├── Skills.jsx            # Animated skill badges
    ├── Experience.jsx        # Timeline experience cards
    ├── Contact.jsx           # Contact form + socials
    └── Footer.jsx            # Footer
```

##  Customization
- Edit personal info in each component
- Add your real GitHub/LinkedIn URLs in `Contact.jsx`
- Update project GitHub links in `Projects.jsx`
- Tailwind palette configured in `tailwind.config.js`

##  Tech Stack
- React 18 + Vite 5
- Tailwind CSS 3
- Framer Motion 11
- Cormorant Garamond + DM Sans + JetBrains Mono (Google Fonts)

## 📦 Build for Production
```bash
npm run build
# Output in /dist — deploy to Vercel, Netlify, or GitHub Pages
```
