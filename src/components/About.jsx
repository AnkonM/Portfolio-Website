import { motion } from 'framer-motion'
import { aboutSummary } from '../data/personal'

export default function About() {
  return (
    <section id="about" className="px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className="text-2xl sm:text-3xl font-semibold text-gray-100 mb-6"
        >
          About
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="prose prose-invert max-w-none text-gray-400 leading-relaxed"
        >
          <p className="text-base sm:text-lg">{aboutSummary}</p>
        </motion.div>
      </div>
    </section>
  )
}
