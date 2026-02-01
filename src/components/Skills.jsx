import { motion } from 'framer-motion'
import { technicalDomains, engineeringDomains, languages } from '../data/skills'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
}

function SkillCard({ title, items }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -2 }}
      className="rounded-xl border border-dark-border bg-dark-surface/50 p-5 hover:border-amber-500/30 transition-colors"
    >
      <h3 className="text-sm font-medium text-amber-400/90 uppercase tracking-wide mb-3">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <li
            key={skill}
            className="px-3 py-1.5 rounded-md bg-dark-bg border border-dark-border text-gray-300 text-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className="text-2xl sm:text-3xl font-semibold text-gray-100 mb-10"
        >
          Skills &amp; Domains
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <SkillCard title="Technical" items={technicalDomains} />
          <SkillCard title="Engineering & Motorsport" items={engineeringDomains} />
          <SkillCard title="Languages" items={languages} />
        </motion.div>
      </div>
    </section>
  )
}
