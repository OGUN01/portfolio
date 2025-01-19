"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "@/components/ui/project-card"
import type { Project } from "@/types/project"

const projects: Project[] = [
  {
    id: "1",
    title: "AI Travel Itinerary Planner",
    description: "A smart travel planning platform that generates personalized itineraries using AI. Features real-time weather integration, transport suggestions, and local event recommendations.",
    screenshots: [
      {
        url: "/projects/itinerary-generation/1.png",
        alt: "AI Travel Itinerary Planner Main Interface"
      },
      {
        url: "/projects/itinerary-generation/2.png",
        alt: "Itinerary Details View"
      },
      {
        url: "/projects/itinerary-generation/3.png",
        alt: "Weather Integration"
      },
      {
        url: "/projects/itinerary-generation/4.png",
        alt: "Transport Options"
      },
      {
        url: "/projects/itinerary-generation/5.png",
        alt: "Local Events"
      }
    ],
    technologies: [
      { name: "Next.js", icon: "nextjs" },
      { name: "FastAPI", icon: "python" },
      { name: "Gemini AI", icon: "google" },
      { name: "LangGraph", icon: "graph" },
      { name: "WeatherAPI", icon: "cloud" }
    ],
    tags: ["Web", "AI", "Full Stack"],
    demoUrl: "https://itinerary-frontend-two.vercel.app/",
    codeUrl: "https://github.com/OGUN01/itinerary-frontend",
    featured: true
  },
  {
    id: "2",
    title: "IQ7 Smart Locks",
    description: "A modern, responsive website for IQ7 Smart Locks showcasing innovative security solutions. Features interactive product displays, dynamic filtering, and seamless WhatsApp integration for customer support.",
    screenshots: [
      {
        url: "/projects/iq7/1.png",
        alt: "IQ7 Smart Locks Hero Section"
      },
      {
        url: "/projects/iq7/2.png",
        alt: "Smart Features Showcase"
      },
      {
        url: "/projects/iq7/3.png",
        alt: "Product Grid"
      },
      {
        url: "/projects/iq7/4.png",
        alt: "Testimonials Section"
      },
      {
        url: "/projects/iq7/5.png",
        alt: "Trusted Partners"
      }
    ],
    technologies: [
      { name: "Next.js 14", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "TailwindCSS", icon: "tailwind" },
      { name: "Framer Motion", icon: "framer" },
      { name: "GSAP", icon: "gsap" }
    ],
    tags: ["Web"],
    demoUrl: "https://iq-7.vercel.app/",
    codeUrl: "https://github.com/OGUN01/IQ7",
    featured: false
  },
  {
    id: "3",
    title: "Flirt Genie",
    description: "A sophisticated AI-powered dating assistant mobile app that helps users craft perfect responses for dating app conversations. Features context analysis, multiple conversation styles, and advanced API key management.",
    screenshots: [
      {
        url: "/projects/flirt_genie/1.jpg",
        alt: "Flirt Genie Main Interface"
      },
      {
        url: "/projects/flirt_genie/2.jpg",
        alt: "Response Generation"
      },
      {
        url: "/projects/flirt_genie/3.jpg",
        alt: "Conversation Styles"
      },
      {
        url: "/projects/flirt_genie/4.jpg",
        alt: "API Key Management"
      },
      {
        url: "/projects/flirt_genie/5.jpg",
        alt: "Settings and Preferences"
      }
    ],
    technologies: [
      { name: "React Native", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "OpenAI", icon: "openai" },
      { name: "AsyncStorage", icon: "database" },
      { name: "TailwindCSS", icon: "tailwind" }
    ],
    tags: ["Mobile", "AI"],
    codeUrl: "https://github.com/OGUN01/dating-assistant-app",
    featured: false
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in web development, mobile apps, and AI solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={project.featured}
              onView={() => console.log(`View ${project.title}`)}
              className={project.featured ? "md:col-span-2" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
