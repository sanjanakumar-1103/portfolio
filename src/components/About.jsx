// components/About.jsx
import RevealSection from './RevealSection'

const highlights = [
  { icon: '🧠', label: 'AI / ML Systems' },
  { icon: '⚡', label: 'FastAPI Backend' },
  { icon: '🔍', label: 'RAG Pipelines' },
  { icon: '📄', label: 'Patent Filed' },
]

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #c084fc, transparent)' }}
      />

      <div className="max-w-6xl mx-auto">
        <RevealSection>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-xs text-mauve/50 tracking-widest">01 /</span>
            <h2 className="font-display text-4xl md:text-5xl text-mist/90">About Me</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-mauve/20 to-transparent" />
          </div>
        </RevealSection>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <RevealSection delay={0.1}>
            <div className="space-y-5">
              <p className="font-body text-mist/50 leading-relaxed font-light">
  I'm an MCA student focused on building intelligent, real-world applications at the intersection of AI and backend development. I enjoy turning ideas into functional systems that solve practical problems.

  <br /><br />

  My work spans machine learning, NLP, and backend development — from building context-aware AI models to developing APIs and complete application workflows.

  <br /><br />

  Currently, I'm exploring ways to make AI systems more interpretable and useful, while actively seeking internship opportunities where I can contribute to impactful projects.
</p>

              {/* Highlight chips */}
              <div className="flex flex-wrap gap-3 pt-2">
                {highlights.map((h) => (
                  <span
                    key={h.label}
                    className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-mist/60 border border-mauve/10"
                  >
                    <span>{h.icon}</span>
                    <span className="font-body">{h.label}</span>
                  </span>
                ))}
              </div>
            </div>
          </RevealSection>

          {/* Visual card */}
          <RevealSection delay={0.25}>
            <div className="relative">
              {/* Decorative frame */}
              <div className="glass rounded-2xl p-8 glow-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-20"
                  style={{ background: 'radial-gradient(circle, #c084fc, transparent)' }}
                />
                <div className="space-y-6 relative z-10">
                  {/* Quick stats */}
                  {[
                    { label: 'Projects Built', value: '4+', sub: 'AI-native systems' },
                    { label: 'Patent Filed', value: '01', sub: 'Language Bridge (OCR)' },
                    { label: 'Focus Area', value: 'AI Systems', sub: 'Backend + intelligent applications' }
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between border-b border-white/5 pb-5 last:border-0 last:pb-0">
                      <div>
                        <p className="font-mono text-xs text-mist/30 tracking-wider uppercase mb-1">{stat.label}</p>
                        <p className="font-display text-3xl gradient-text-2">{stat.value}</p>
                      </div>
                      <p className="font-body text-xs text-mist/30 text-right max-w-[120px]">{stat.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating glow dot */}
              <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-mauve/60 blur-sm animate-pulse-slow" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-blush/40 blur-sm animate-float" />
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  )
}
