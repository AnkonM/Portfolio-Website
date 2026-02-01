import { motion } from 'framer-motion'
import { personal } from '../data/personal'

const links = [
  { label: 'Email', href: `mailto:${personal.email}`, value: personal.email },
  { label: 'Phone', href: `tel:${personal.phone.replace(/\s/g, '')}`, value: personal.phone },
  { label: 'Location', href: null, value: personal.location },
]

export default function Contact() {
  return (
    <section id="contact" className="px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className="text-2xl sm:text-3xl font-semibold text-gray-100 mb-8"
        >
          Contact
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-6 sm:gap-10"
        >
          {links.map((link) => (
            <div key={link.label} className="flex flex-col gap-1">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{link.label}</span>
              {link.href ? (
                <a
                  href={link.href}
                  className="text-amber-400/90 hover:text-amber-400 transition-colors text-base sm:text-lg"
                >
                  {link.value}
                </a>
              ) : (
                <span className="text-gray-300 text-base sm:text-lg">{link.value}</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
