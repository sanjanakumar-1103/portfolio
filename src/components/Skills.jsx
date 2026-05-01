// components/Skills.jsx
import { motion } from 'framer-motion'
import RevealSection from './RevealSection'

const skillCategories = [
  {
    label: "Agentic AI & Enterprise AI",
    icon: "⚡",
    color: "#8b5cf6",
    items: [
      "Agentic AI",
      "LangChain",
      "LangGraph",
      "RAG",
      "FAISS",
      "Explainable AI"
    ]
  },

  {
    label: "AI / Machine Learning",
    icon: "✦",
    color: "#c084fc",
    items: [
      "NLP",
      "Transformers",
      "Sentence Transformers",
      "Model Fine-tuning",
      "Scikit-learn"
    ]
  },

  {
    label: "Backend & APIs",
    icon: "⚙",
    color: "#818cf8",
    items: [
      "FastAPI",
      "REST APIs",
      "Async Programming",
      "SQLite",
      "PostgreSQL"
    ]
  },

  {
    label: "Core CS",
    icon: "◈",
    color: "#a78bfa",
    items: [
      "Data Structures",
      "Hashing",
      "Inverted Indexing",
      "Search Optimization"
    ]
  },

  {
    label: "Frontend & Tools",
    icon: "{ }",
    color: "#f0abfc",
    items: [
      "React",
      "JavaScript",
      "HTML/CSS",
      "Git",
      "GitHub",
      "Postman"
    ]
  }
]
function SkillBadge({ skill, color, delay }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4, ease: 'backOut' }}
      whileHover={{ scale: 1.08, y: -2 }}
      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-mono"
      style={{
        background: `${color}12`,
        border: `1px solid ${color}25`,
        color: color,
      }}
    >
      {skill}
    </motion.span>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      
      {/* Background glow */}
      <div
        className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #c084fc, transparent)' }}
      />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <RevealSection>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-xs text-mauve/50 tracking-widest">04 /</span>
            <h2 className="font-display text-4xl md:text-5xl text-mist/90">
              Skills
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-mauve/20 to-transparent" />
          </div>
        </RevealSection>

        {/* Skills Grid */}
        <div className="space-y-8">
          {skillCategories.map((cat, catIdx) => (
            <RevealSection key={cat.label} delay={catIdx * 0.08}>
              
              <div className="glass rounded-2xl p-6 glass-hover">
                
                {/* CATEGORY HEADER WITH ICON */}
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="text-sm w-7 h-7 flex items-center justify-center rounded-lg"
                    style={{
                      background: `${cat.color}20`,
                      color: cat.color
                    }}
                  >
                    {cat.icon}
                  </span>

                  <span className="font-body text-sm font-medium text-mist/60 tracking-wide">
                    {cat.label}
                  </span>
                </div>

                {/* SKILLS */}
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill, i) => (
                    <SkillBadge
                      key={skill}
                      skill={skill}
                      color={cat.color}
                      delay={catIdx * 0.06 + i * 0.04}
                    />
                  ))}
                </div>

              </div>

            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}