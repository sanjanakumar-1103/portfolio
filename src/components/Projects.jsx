// components/Projects.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import RevealSection from './RevealSection'

const projects = [
  {
    id: 1,
    title: 'NeuraSearch',
    subtitle: 'RAG-based Semantic Search Engine',
    description:
      'A retrieval-augmented generation engine that combines dense vector search with LLM generation to answer complex queries over large document corpora with high precision and explainability.',
    tags: ['RAG', 'FAISS', 'Sentence Transformers', 'Python', 'FastAPI'],
    accent: '#8b5cf6',
    accent2: '#c084fc',
    icon: '🔭',
    github: 'https://github.com/sanjanakumar-1103/neurasearch-rag',
    live: null,
  },
  {
    id: 2,
    title: 'AI Knowledge Assistant',
    subtitle: 'FastAPI + FAISS Intelligent QA System',
    description:
      'A production-grade knowledge assistant built on FastAPI with FAISS vector indexing. Supports real-time document ingestion, semantic chunking, and context-aware answer generation at scale.',
    tags: ['FastAPI', 'FAISS', 'OpenAI', 'REST API', 'PostgreSQL'],
    accent: '#7c3aed',
    accent2: '#a78bfa',
    icon: '🤖',
    github: 'https://github.com/sanjanakumar-1103/ai-knowledge-assistant',
    live: null,
  },
  {
  id: 3,
  title: 'Context-Aware Bengali Hate Speech Detection',
  subtitle: 'Explainable NLP System with BanglaBERT + MCP',

  description:
    'Built a hybrid NLP system using BanglaBERT and a custom Model Context Protocol (MCP) to detect Bengali hate speech. Integrates transformer-based predictions with rule-based context analysis (intent, severity, identity) to improve accuracy and provide explainable outputs.',

  tags: ['NLP', 'Transformers', 'BanglaBERT', 'PyTorch', 'Explainable AI'],

  accent: '#be185d',
  accent2: '#f0abfc',
  icon: '🌐',

  github: null,
  note: "Conference Paper (In Progress)",
},
 {
  id: 4,
  title: 'Language Bridge: OCR-Based Intelligent Translation System',

  subtitle: 'AI-Powered Document Translation with Semantic Validation',

  description:
    'Built an end-to-end AI pipeline that extracts text from academic documents using OCR (EasyOCR) and translates it into regional languages. Enhances translation reliability using embedding-based semantic validation with SentenceTransformers (cosine similarity via back-translation). Includes a Streamlit-based interface for document upload, translation, and history tracking, enabling accessible and context-preserving learning across languages.',

  tags: ['OCR', 'NLP', 'EasyOCR', 'SentenceTransformers', 'Streamlit'],

  accent: '#0ea5e9',
  accent2: '#c084fc',
  icon: '🔬',

  github: null,
  badge: '📜 Patent Filed',
  note: "Patent Pending"
},
]

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.23, 1, 0.32, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative glass glass-hover rounded-2xl p-7 cursor-default flex flex-col gap-5 overflow-hidden"
    >
      {/* Glow on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none rounded-2xl"
            style={{
              background: `radial-gradient(circle at 50% 0%, ${project.accent}18 0%, transparent 60%)`,
            }}
          />
        )}
      </AnimatePresence>

      {/* Top row */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
            style={{ background: `${project.accent}20`, border: `1px solid ${project.accent}30` }}
          >
            {project.icon}
          </div>
          <div>
            <h3 className="font-display text-xl text-mist/90 leading-tight">{project.title}</h3>
            <p className="font-mono text-xs text-mist/30 mt-0.5">{project.subtitle}</p>
          </div>
        </div>
        {project.badge && (
          <span className="flex-shrink-0 text-xs font-mono bg-amber-500/10 text-amber-300/70 border border-amber-400/20 px-2 py-0.5 rounded-full">
            {project.badge}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="font-body text-sm text-mist/40 leading-relaxed font-light flex-1">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Buttons */}
      <div className="flex items-center gap-3">
        {project.github ? (
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 glass rounded-full text-xs font-mono text-mist/50 hover:text-mist border border-white/5 hover:border-mauve/20 transition-all duration-300"
  >
    GitHub
  </a>
) : (
  <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-300 font-mono">
    {project.note || "Private / Research"}
  </span>
)}
        {project.live && (
          <a
            href={project.live}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${project.accent}30, ${project.accent2}20)`,
              border: `1px solid ${project.accent}30`,
              color: project.accent2,
            }}
            onClick={(e) => e.preventDefault()}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Live Demo
          </a>
        )}
      </div>

      {/* Shimmer line at top on hover */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-8 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }}
      />

      <div className="max-w-6xl mx-auto">
        <RevealSection>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs text-mauve/50 tracking-widest">03 /</span>
            <h2 className="font-display text-4xl md:text-5xl text-mist/90">Projects</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-mauve/20 to-transparent" />
          </div>
          <p className="font-body text-mist/30 text-sm mb-12 pl-10">
            Systems built to solve real problems, not demos.
          </p>
        </RevealSection>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
