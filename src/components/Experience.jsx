// components/Experience.jsx
import { motion } from 'framer-motion'
import RevealSection from './RevealSection'

const experiences = [
  {
    year: '2026',
    title: 'RAG Systems Engineering',
    subtitle: 'AI Research & Development',
    description:
      'Designed and implemented end-to-end Retrieval-Augmented Generation pipelines using FAISS and Sentence Transformers. Achieved sub-200ms retrieval latency on 100K+ document collections through chunking optimization and index tuning.',
    highlights: ['FAISS Vector Indexing', 'Semantic Chunking', 'RAG Architecture', 'Sub-200ms Retrieval'],
    color: '#8b5cf6',
  },
  {
    year: '2026',
    title: 'Backend API Development',
    subtitle: 'FastAPI & Scalable Architecture',
    description:
      'Built production-grade REST APIs with FastAPI, implementing async request handling, Pydantic schema validation, and PostgreSQL integration. Achieved 3× throughput improvements through async optimization and connection pooling.',
    highlights: ['FastAPI', 'Async Architecture', 'PostgreSQL', 'API Optimization'],
    color: '#a78bfa',
  },
  {
  year: '2025',
  title: 'Language Bridge — Patent Pending',
  subtitle: 'AI-Powered OCR Translation System',

  description:
    'Designed an OCR-based document translation pipeline using EasyOCR and translation APIs, with semantic validation via SentenceTransformers to preserve contextual meaning. Built for improving access to educational content across regional languages.',

  highlights: [
    'Patent Pending',
    'OCR + Translation Pipeline',
    'Semantic Validation',
    'Streamlit Interface'
  ],

  color: '#c084fc',
},
{
  year: '2025',
  title: 'NLP Research',
  subtitle: 'Bengali Hate Speech Detection',

  description:
    'Developed a hybrid NLP system using BanglaBERT and a custom context framework (MCP) to detect hate speech in Bengali text. Combined transformer predictions with rule-based context analysis to improve interpretability and classification reliability.',

  highlights: [
    'BanglaBERT',
    'Explainable AI',
    'Context-Aware NLP',
    'Conference Paper (In Progress)'
  ],

  color: '#f0abfc',
}
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute top-1/3 -left-32 w-80 h-80 rounded-full blur-3xl opacity-8 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }}
      />

      <div className="max-w-6xl mx-auto">
        <RevealSection>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-xs text-mauve/50 tracking-widest">05 /</span>
            <h2 className="font-display text-4xl md:text-5xl text-mist/90">Experience</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-mauve/20 to-transparent" />
          </div>
        </RevealSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-mauve/30 via-mauve/10 to-transparent hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <RevealSection key={i} delay={i * 0.1}>
                <div className={`flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Card */}
                  <div className="flex-1">
                    <div
                      className="glass glass-hover rounded-2xl p-7 relative overflow-hidden"
                    >
                      {/* Accent top border */}
                      <div
                        className="absolute top-0 left-0 right-0 h-px"
                        style={{ background: `linear-gradient(90deg, transparent, ${exp.color}60, transparent)` }}
                      />

                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <p className="font-mono text-xs tracking-widest mb-1"
                            style={{ color: exp.color + 'aa' }}>
                            {exp.year}
                          </p>
                          <h3 className="font-display text-2xl text-mist/90">{exp.title}</h3>
                          <p className="font-body text-sm text-mist/35 mt-0.5">{exp.subtitle}</p>
                        </div>
                        {/* Node dot for timeline */}
                        <div
                          className="hidden md:flex w-4 h-4 rounded-full border-2 flex-shrink-0 mt-1"
                          style={{ borderColor: exp.color, boxShadow: `0 0 12px ${exp.color}60` }}
                        />
                      </div>

                      <p className="font-body text-sm text-mist/45 leading-relaxed font-light mb-5">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((h) => (
                          <span
                            key={h}
                            className="tag"
                            style={{
                              background: `${exp.color}10`,
                              borderColor: `${exp.color}25`,
                              color: exp.color + 'cc',
                            }}
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for other side */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
