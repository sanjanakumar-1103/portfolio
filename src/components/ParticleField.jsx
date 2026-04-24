// components/ParticleField.jsx
// Animated starfield / particle canvas for atmosphere
import { useEffect, useRef } from 'react'

export default function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let W, H

    const particles = []
    const COUNT = 80

    const resize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }

    const randomColor = () => {
      const colors = [
        'rgba(139,92,246,',
        'rgba(192,132,252,',
        'rgba(240,171,252,',
        'rgba(224,215,255,',
        'rgba(196,181,253,',
      ]
      return colors[Math.floor(Math.random() * colors.length)]
    }

    class Particle {
      constructor() {
        this.reset()
      }
      reset() {
        this.x = Math.random() * (W || window.innerWidth)
        this.y = Math.random() * (H || window.innerHeight)
        this.size = Math.random() * 1.4 + 0.3
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3
        this.color = randomColor()
        this.alpha = Math.random() * 0.5 + 0.1
        this.alphaDir = Math.random() > 0.5 ? 0.003 : -0.003
      }
      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.alpha += this.alphaDir
        if (this.alpha <= 0.05 || this.alpha >= 0.6) this.alphaDir *= -1
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset()
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color + this.alpha + ')'
        ctx.fill()
      }
    }

    resize()
    for (let i = 0; i < COUNT; i++) particles.push(new Particle())

    // Draw connections between nearby particles
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(139,92,246,${0.06 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const loop = () => {
      ctx.clearRect(0, 0, W, H)
      drawConnections()
      particles.forEach(p => { p.update(); p.draw() })
      animId = requestAnimationFrame(loop)
    }

    loop()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} id="particle-canvas" />
}
