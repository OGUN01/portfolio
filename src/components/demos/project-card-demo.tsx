"use client"

import { ProjectCard } from "@/components/ui/project-card"
import type { Project } from "@/types/project"

const sampleProject: Project = {
  id: "1",
  title: "Travel Planning Website",
  description: "A modern travel planning platform with AI-powered recommendations and real-time booking capabilities.",
  screenshots: [
    {
      url: "/projects/travel-planner-main.jpg", // You'll need to add this image
      alt: "Travel Planning Website Screenshot"
    }
  ],
  technologies: [
    { name: "Next.js", icon: "nextjs" },
    { name: "TypeScript", icon: "typescript" },
    { name: "TailwindCSS", icon: "tailwind" },
    { name: "OpenAI", icon: "openai" }
  ],
  tags: ["Web", "AI"],
  demoUrl: "https://travel-planner.example.com",
  codeUrl: "https://github.com/example/travel-planner",
  featured: true
}

export function ProjectCardDemo() {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-2 gap-6">
        <ProjectCard 
          project={sampleProject} 
          featured 
          onView={() => console.log("View project details")}
        />
      </div>
    </div>
  )
}
