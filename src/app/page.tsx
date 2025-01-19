"use client"

import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Services } from '@/components/sections/services'
import { Projects } from '@/components/sections/projects'
import { QuickConnect } from '@/components/sections/quick-connect'
import { Contact } from '@/components/sections/contact'
import { ExpertiseGrid } from "@/components/sections/expertise-grid"
import { TechGrid } from "@/components/sections/tech-grid"
import { ProjectCategories } from "@/components/sections/project-categories"
import { Squares } from '@/components/ui/squares-background'
import { AnimeNavBarDemo } from '@/components/demos/anime-navbar-demo'
import { TestimonialsSectionDemo } from '@/components/demos/testimonials-demo'

export default function Home() {
  return (
    <main className="relative bg-background text-foreground">
      {/* Background Effect */}
      <div className="fixed inset-0 -z-10">
        <Squares 
          direction="diagonal"
          speed={0.1} 
          squareSize={60}
          borderColor="rgba(255, 255, 255, 0.3)" 
          hoverFillColor="rgba(255, 255, 255, 0.1)" 
          className="opacity-90" 
        />
      </div>
      
      {/* Navigation */}
      <AnimeNavBarDemo />
      
      {/* Content Sections */}
      <div className="relative z-10 space-y-16">
        <div id="home">
          <Hero />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="expertise">
          <ExpertiseGrid />
        </div>
        <div id="tech">
          <TechGrid />
        </div>
        <div id="services">
          <Services />
        </div>
        <div>
          <TestimonialsSectionDemo />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </main>
  )
}
