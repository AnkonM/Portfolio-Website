"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced gradient orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute top-1/4 -left-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-primary/10 to-primary/5 blur-[150px] animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div 
          className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-[oklch(0.6_0.12_200)]/10 to-[oklch(0.5_0.1_180)]/5 blur-[130px] animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-primary/3 to-transparent blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Entrance animation wrapper */}
          <div 
            className={`transition-all duration-1000 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-muted-foreground text-sm font-mono tracking-wider uppercase mb-4">
              Software Engineer
            </p>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              <span className="text-gradient">Ankon</span>
              <br />
              <span className="text-foreground">Mukherjee</span>
            </h1>
          </div>

          <div 
            className={`transition-all duration-1000 delay-300 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-4">
              Focused on building{" "}
              <span className="text-foreground font-medium">scalable systems</span> and{" "}
              <span className="text-foreground font-medium">data-driven applications</span>.
            </p>
            
            <p className="text-lg text-muted-foreground/80 max-w-xl leading-relaxed mb-8">
              I craft robust backend architectures and efficient algorithms that power modern applications.
            </p>
          </div>

          <div 
            className={`flex items-center gap-6 transition-all duration-1000 delay-500 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300"
            >
              Get in touch
            </a>
            
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@example.com"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <a 
          href="#about" 
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
          aria-label="Scroll to about section"
        >
          <span className="text-xs font-mono uppercase tracking-wider">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
