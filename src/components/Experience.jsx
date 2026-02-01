import { motion } from 'framer-motion'
import { experience } from '../data/experience'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

export default function Experience() {
  return (
    <section id="experience" className="px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className="text-2xl sm:text-3xl font-semibold text-gray-100 mb-10"
        >
          Experience
        </motion.h2>
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="space-y-8"
        >
          {experience.map((job) => (
            <motion.li
              key={job.id}
              variants={item}
              whileHover={{ y: -2 }}
              className="rounded-xl border border-dark-border bg-dark-surface/50 p-6 hover:border-amber-500/20 transition-colors"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-100">{job.role}</h3>
                  <p className="text-amber-400/90 text-sm font-medium">{job.company}</p>
                </div>
                <span className="text-sm text-gray-500">{job.period}</span>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-4">{job.type}</p>
              <ul className="space-y-2 text-gray-400 text-sm leading-relaxed">
                {(job.responsibilities ?? job.contributions ?? job.work).map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-amber-500/70 shrink-0">·</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
