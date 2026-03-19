"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react"

const contactLinks = [
  {
    title: "Email",
    value: "ankon@example.com",
    href: "mailto:ankon@example.com",
    icon: Mail
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/ankon",
    href: "https://linkedin.com",
    icon: Linkedin
  },
  {
    title: "GitHub",
    value: "github.com/ankon",
    href: "https://github.com",
    icon: Github
  }
]

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-32 relative"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div 
            className={`transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="flex-1 h-px bg-border max-w-16" />
              <span className="text-primary font-mono text-sm">05</span>
              <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
              <div className="flex-1 h-px bg-border max-w-16" />
            </div>
          </div>

          <div 
            className={`transition-all duration-700 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
              I&apos;m always open to discussing new projects, opportunities, or just having a chat 
              about technology and software engineering.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {contactLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.title}
                    href={link.href}
                    target={link.title !== "Email" ? "_blank" : undefined}
                    rel={link.title !== "Email" ? "noopener noreferrer" : undefined}
                    className={`group glass rounded-xl p-6 hover:border-primary/30 transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </div>
                    
                    <h3 className="font-medium mb-1 text-left">{link.title}</h3>
                    <p className="text-sm text-muted-foreground text-left">{link.value}</p>
                  </a>
                )
              })}
            </div>

            <a
              href="mailto:ankon@example.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 text-lg"
            >
              Say Hello
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
