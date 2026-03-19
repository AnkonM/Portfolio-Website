"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown, ExternalLink, Folder } from "lucide-react"

const projects = [
  {
    title: "Prompt Lab",
    description: "A scalable prompt experimentation platform for testing and optimizing AI prompts at scale.",
    longDescription: "Built with a focus on system design, backend workflows, and optimization. Features include versioning, A/B testing, scoring systems, and batch experimentation capabilities.",
    tech: ["Python", "Flask", "PostgreSQL", "Redis", "Docker"],
    features: [
      "Prompt versioning and history tracking",
      "A/B testing framework for prompt comparison",
      "Automated scoring and evaluation metrics",
      "Batch experimentation for large-scale testing"
    ],
    status: "Ongoing",
    link: "#"
  },
  {
    title: "Cyber Threat Mapping Platform",
    description: "Backend system for cyber threat intelligence with real-time data processing and analysis.",
    longDescription: "A comprehensive threat intelligence platform featuring APIs for data ingestion and integrated OSINT pipelines for real-time threat analysis.",
    tech: ["Python", "APIs", "Git", "CI/CD", "Linux"],
    features: [
      "RESTful APIs for threat data ingestion",
      "OSINT integration for intelligence gathering",
      "Real-time data processing pipeline",
      "CI workflows for automated deployment"
    ],
    status: "Completed",
    link: "#"
  }
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`group transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 glow">
        <div className="p-8">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Folder className="w-5 h-5 text-primary" />
              </div>
              <span className={`text-xs font-mono px-2 py-1 rounded-full ${
                project.status === "Ongoing" 
                  ? "bg-primary/10 text-primary" 
                  : "bg-muted text-muted-foreground"
              }`}>
                {project.status}
              </span>
            </div>
            <a 
              href={project.link}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label={`View ${project.title} project`}
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>

          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span 
                key={tech}
                className="text-xs font-mono px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Expandable details */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? "Hide" : "Show"} details</span>
            <ChevronDown 
              className={`w-4 h-4 transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`} 
            />
          </button>

          <div 
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pt-6 border-t border-border">
              <p className="text-muted-foreground mb-4">
                {project.longDescription}
              </p>
              
              <h4 className="text-sm font-mono text-primary uppercase tracking-wider mb-3">
                Key Features
              </h4>
              <ul className="space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="projects" 
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
              <span className="text-primary font-mono text-sm">02</span>
              <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
              <div className="flex-1 h-px bg-border ml-4" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
