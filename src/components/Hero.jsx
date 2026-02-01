import { motion } from 'framer-motion'
import { personal } from '../data/personal'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 pt-20 pb-16"
    >
      <div className="max-w-5xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-amber-400/90 text-sm font-medium tracking-wide uppercase mb-2"
        >
          {personal.location}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100 tracking-tight"
        >
          {personal.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-4 text-lg sm:text-xl text-gray-400 max-w-2xl"
        >
          B.Tech in AI & Data Science · Honours in Applied Cybersecurity · Aerodynamics Lead, Orion Racing India
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 hover:bg-amber-500/30 transition-colors text-sm font-medium"
          >
            Get in touch
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center px-5 py-2.5 rounded-lg border border-dark-border text-gray-400 hover:text-gray-200 hover:border-gray-500 transition-colors text-sm font-medium"
          >
            {personal.email}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
