"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Red Team Analyst Intern",
    company: "DeepCytes",
    period: "Recent",
    description: [
      "Conducted vulnerability analysis and reverse engineering using Ghidra",
      "Built APIs and data pipelines for security tooling",
      "Automated security workflows and testing procedures"
    ]
  },
  {
    title: "Aerodynamics Lead",
    company: "Orion Racing India",
    period: "Previous",
    description: [
      "Led a team of 10+ members in aerodynamic design and analysis",
      "Improved CFD simulation accuracy through iterative optimization",
      "Achieved P1 in Formula Student skidpad event"
    ]
  }
]

function TimelineItem({ 
  experience, 
  index, 
  isVisible 
}: { 
  experience: typeof experiences[0]
  index: number
  isVisible: boolean
}) {
  return (
    <div 
      className={`relative pl-8 pb-12 last:pb-0 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border">
        <div 
          className={`absolute top-0 left-0 w-full bg-primary transition-all duration-1000 ease-out ${
            isVisible ? "h-full" : "h-0"
          }`}
          style={{ transitionDelay: `${index * 200 + 300}ms` }}
        />
      </div>
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-background border-2 border-primary z-10" />

      <div className="glass-gradient rounded-xl p-6 transition-all duration-300 glow-gradient">
        <div className="flex items-center gap-2 mb-2">
          <Briefcase className="w-4 h-4 text-primary" />
          <span className="text-xs font-mono text-muted-foreground">
            {experience.period}
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
        <p className="text-primary font-medium mb-4">{experience.company}</p>
        
        <ul className="space-y-2">
          {experience.description.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function Experience() {
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
      id="experience" 
      className="py-32 relative"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div 
            className={`transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-4 mb-12">
              <span className="text-primary font-mono text-sm">03</span>
              <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
              <div className="flex-1 h-px bg-border ml-4" />
            </div>
          </div>

          <div className="relative">
            {experiences.map((experience, index) => (
              <TimelineItem 
                key={experience.title} 
                experience={experience} 
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
