// components/Experience.jsx
import { motion } from 'framer-motion'
import RevealSection from './RevealSection'

const experiences = [
  {
    year: "2026",
    title: "Agentic Enterprise AI Systems",
    subtitle: "LangChain • LangGraph • Enterprise Finance Automation",

    description:
      "Designed and built an enterprise-grade Agentic Enterprise Finance Assistant using LangChain, LangGraph, FastAPI, and FAISS-based RAG. Engineered multi-agent compliance workflows for expense governance, policy-aware financial analysis, explainable recommendations, and audit-grade enterprise traceability.",

    highlights: [
      "LangChain + LangGraph",
      "Enterprise AI",
      "RAG + FAISS",
      "Compliance Automation",
      "Explainable AI",
      "Financial Governance"
    ],

    color: "#7c3aed",
  },

  {
    year: "2026",
    title: "RAG Systems Engineering",
    subtitle: "AI Research & Retrieval-Augmented Systems",

    description:
      "Designed and implemented end-to-end Retrieval-Augmented Generation pipelines using FAISS and Sentence Transformers. Built scalable semantic retrieval systems with chunking optimization, indexing strategies, and explainable search architectures for large document collections.",

    highlights: [
      "FAISS Vector Indexing",
      "Semantic Chunking",
      "RAG Architecture",
      "Search Optimization"
    ],

    color: "#8b5cf6",
  },

  {
    year: "2026",
    title: "Backend API Development",
    subtitle: "FastAPI • Async Systems • Scalable Architecture",

    description:
      "Built production-grade backend systems using FastAPI with async request handling, modular API design, schema validation, database integration, and performance-focused architecture for AI-powered enterprise systems.",

    highlights: [
      "FastAPI",
      "REST APIs",
      "Async Architecture",
      "PostgreSQL",
      "Scalable Backend"
    ],

    color: "#a78bfa",
  },

  {
    year: "2025",
    title: "Language Bridge — Patent Pending",
    subtitle: "AI-Powered OCR Translation System",

    description:
      "Designed an OCR-based multilingual document translation pipeline using EasyOCR and translation APIs, enhanced with semantic validation via SentenceTransformers to preserve contextual meaning. Built for improving educational accessibility across regional languages.",

    highlights: [
      "Patent Pending",
      "OCR + Translation Pipeline",
      "Semantic Validation",
      "Streamlit Interface"
    ],

    color: "#c084fc",
  },

  {
    year: "2025",
    title: "NLP Research",
    subtitle: "Context-Aware Bengali Hate Speech Detection",

    description:
      "Developed a hybrid NLP system using BanglaBERT and a custom Model Context Protocol (MCP) framework to detect Bengali hate speech. Combined transformer-based predictions with rule-based contextual reasoning to improve explainability, severity analysis, and classification reliability.",

    highlights: [
      "BanglaBERT",
      "Explainable AI",
      "Context-Aware NLP",
      "Conference Paper (In Progress)"
    ],

    color: "#f0abfc",
  },
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
