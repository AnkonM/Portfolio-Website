"use client"

import { useEffect, useRef, useState } from "react"

export function About() {
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
      id="about" 
      className="py-32 relative"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div 
            className={`transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-4 mb-12">
              <span className="text-primary font-mono text-sm">01</span>
              <h2 className="text-3xl md:text-4xl font-bold">About</h2>
              <div className="flex-1 h-px bg-border ml-4" />
            </div>
          </div>

          <div 
            className={`transition-all duration-700 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid md:grid-cols-[2fr,1fr] gap-12">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I&apos;m a <span className="text-foreground font-medium">software engineering student</span> with 
                  hands-on experience in building backend systems, APIs, and data-driven platforms. My work 
                  sits at the intersection of robust system design and practical problem-solving.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I have a strong foundation in <span className="text-foreground font-medium">system design thinking</span> and 
                  building <span className="text-foreground font-medium">scalable solutions</span>. From architecting 
                  data pipelines to optimizing backend workflows, I focus on creating software that performs 
                  efficiently at scale.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I&apos;m not coding, I&apos;m likely exploring new technologies, contributing to 
                  open-source projects, or diving deep into system architecture patterns.
                </p>
              </div>

              <div className="space-y-8">
                <div className="glass-gradient rounded-xl p-6 glow-gradient">
                  <h3 className="text-sm font-mono text-primary uppercase tracking-wider mb-4">
                    Focus Areas
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Backend Systems
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      API Development
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Data Pipelines
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      System Design
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
