"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Database, Terminal, Brain, Server } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "C++", "SQL"]
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["APIs", "Flask", "REST"]
  },
  {
    title: "Tools",
    icon: Terminal,
    skills: ["Git", "Docker", "Linux"]
  },
  {
    title: "Concepts",
    icon: Brain,
    skills: ["DSA", "OOP", "SDLC"]
  },
  {
    title: "Big Data",
    icon: Database,
    skills: ["Hadoop", "MapReduce", "Spark"]
  }
]

export function Skills() {
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
      id="skills" 
      className="py-32 relative"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div 
            className={`transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-4 mb-12">
              <span className="text-primary font-mono text-sm">04</span>
              <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
              <div className="flex-1 h-px bg-border ml-4" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={category.title}
                  className={`glass-gradient rounded-xl p-6 hover:scale-105 transition-all duration-500 glow-gradient ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-sm font-mono text-primary uppercase tracking-wider mb-3">
                    {category.title}
                  </h3>
                  
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li 
                        key={skill} 
                        className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
