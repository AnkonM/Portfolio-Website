import { motion } from 'framer-motion'

/**
 * No verified standalone projects in CV — section kept minimal.
 * Can be extended when real project links/descriptions are available.
 */
export default function Projects() {
  return (
    <section id="projects" className="px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className="text-2xl sm:text-3xl font-semibold text-gray-100 mb-6"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-gray-400 text-base leading-relaxed"
        >
          Work from academic programmes, Orion Racing India, and DeepCytes UK is reflected in Experience and Education. Project details and repositories can be shared on request.
        </motion.p>
      </div>
    </section>
  )
}
