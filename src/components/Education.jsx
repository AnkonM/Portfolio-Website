import { motion } from 'framer-motion'
import { education } from '../data/education'

export default function Education() {
  return (
    <section id="education" className="px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className="text-2xl sm:text-3xl font-semibold text-gray-100 mb-6"
        >
          Education
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="rounded-xl border border-dark-border bg-dark-surface/50 p-6"
        >
          <h3 className="text-lg font-semibold text-gray-100">{education.institution}</h3>
          <div className="mt-6 space-y-6">
            {education.programmes.map((prog) => (
              <div key={prog.id} className="border-b border-dark-border last:border-0 last:pb-0 pb-6 last:pb-0">
                <p className="text-amber-400/90 font-medium">{prog.name}</p>
                <p className="text-sm text-gray-500 mt-1">{prog.period}</p>
                {prog.cgpa != null && (
                  <p className="text-sm text-gray-400 mt-1">CGPA: {prog.cgpa}</p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-dark-border">
            <p className="text-sm font-medium text-gray-400 mb-3">Semester-wise performance</p>
            <ul className="flex flex-wrap gap-3">
              {education.semesters.map((s) => (
                <li
                  key={s.sem}
                  className="px-3 py-1.5 rounded-md bg-dark-bg border border-dark-border text-gray-300 text-sm"
                >
                  Sem {s.sem}: {s.gpa}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
