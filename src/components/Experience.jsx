// components/Experience.jsx
import RevealSection from './RevealSection'

const experiences = [
  {
    year: '2026',
    title: 'Research Engineer Intern',
    subtitle: 'TNQ Tech · R&D Department · June 2026 – December 2026',
    description:
      'Internship focused on diagnosing and improving Docling-based PDF table extraction, validating outputs against source documents, and exploring complementary vision-language approaches.',
    bullets: [
      'Diagnosed failure modes in a Docling-based PDF table-extraction pipeline — missing cells, incorrect table boundaries, reading-order errors, and cross-page tables — by validating extracted tables against source PDFs using PyMuPDF text-layer and coordinate analysis.',
      'Classified tables into Simple and Complex cases and identified practical extraction and reading-order exceptions.',
      'Investigated multi-page continuous tables, including detection, merging, reconstruction, and validation of table structure.',
      'Used JSON comparison outputs and HTML-based QA visualizations to inspect manuscript-vs-PDF extraction differences, including table structure and cell/row alignment.',
      'Explored whether a Vision-Language Model could complement traditional extraction by setting up a local CPU environment for Granite-Docling-258M and running an initial synthetic smoke test (exploratory, not production).',
    ],
    highlights: [
      'Docling',
      'PyMuPDF',
      'PDF Table Extraction',
      'QA & Validation',
      'Granite-Docling-258M',
    ],
    color: '#7c3aed',
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
            <span className="font-mono text-xs text-mauve/50 tracking-widest">03 /</span>
            <h2 className="font-display text-4xl md:text-5xl text-mist/90">Experience</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-mauve/20 to-transparent" />
          </div>
        </RevealSection>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-mauve/30 via-mauve/10 to-transparent hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <RevealSection key={i} delay={i * 0.1}>
                <div className={`flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1">
                    <div className="glass glass-hover rounded-2xl p-7 relative overflow-hidden">
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
                        <div
                          className="hidden md:flex w-4 h-4 rounded-full border-2 flex-shrink-0 mt-1"
                          style={{ borderColor: exp.color, boxShadow: `0 0 12px ${exp.color}60` }}
                        />
                      </div>

                      <p className="font-body text-sm text-mist/45 leading-relaxed font-light mb-4">
                        {exp.description}
                      </p>

                      {exp.bullets && (
                        <ul className="space-y-2.5 mb-5 list-disc pl-5 marker:text-mauve/40">
                          {exp.bullets.map((bullet) => (
                            <li key={bullet.slice(0, 48)} className="font-body text-sm text-mist/45 leading-relaxed font-light">
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}

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
