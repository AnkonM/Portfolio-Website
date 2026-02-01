import { personal } from '../data/personal'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-dark-border px-4 sm:px-6 py-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © {year} {personal.name}. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href={`mailto:${personal.email}`}
            className="text-sm text-gray-500 hover:text-amber-400/90 transition-colors"
          >
            Email
          </a>
          <a
            href={`tel:${personal.phone.replace(/\s/g, '')}`}
            className="text-sm text-gray-500 hover:text-amber-400/90 transition-colors"
          >
            Phone
          </a>
        </div>
      </div>
    </footer>
  )
}
