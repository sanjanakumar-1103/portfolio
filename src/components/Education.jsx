import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.section
    id="education"
      className="section-padding relative z-10 flex flex-col items-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Section Header (matches About/Projects style) */}
      <div className="w-full max-w-5xl flex items-center gap-4 mb-12 px-4">
        <span className="text-mauve/50 text-sm font-mono">02
         /</span>

        <h2 className="font-display text-3xl md:text-4xl text-mist tracking-wide">
          Education
        </h2>

        <div className="flex-1 h-px bg-white/10" />
      </div>

      {/* Card */}
      <motion.div
        className="glass glow-border max-w-2xl w-full p-8 rounded-3xl text-left space-y-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* MCA */}
        <div className="space-y-1">
          <h3 className="font-display text-lg text-mist">
            Master of Computer Applications (MCA)
          </h3>
          <p className="text-sm text-mist/50 font-mono">
            Vellore Institute of Technology • 2025 – Present
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5" />

        {/* BCA */}
        <div className="space-y-1">
          <h3 className="font-display text-lg text-mist">
            Bachelor of Computer Applications (BCA)
          </h3>
          <p className="text-sm text-mist/50 font-mono">
            Vellore Institute of Technology • 2022 – 2025
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}