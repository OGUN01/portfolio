"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github, Eye, Lock } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card } from "./card"
import { Button } from "./button"
import { Badge } from "./badge"
import { ProjectModal } from "./project-modal"
import { MobileFrame } from "./mobile-frame"
import type { Project } from "@/types/project"
import type { MotionProps } from "framer-motion"

const tagColors = {
  Web: "bg-blue-500/10 text-blue-500",
  AI: "bg-purple-500/10 text-purple-500",
  Mobile: "bg-green-500/10 text-green-500",
  "Full Stack": "bg-orange-500/10 text-orange-500"
}

interface ProjectCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, keyof MotionProps> {
  project: Project
  featured?: boolean
  onView?: () => void
}

export function ProjectCard({ 
  project, 
  featured = false,
  onView,
  className,
  ...props 
}: ProjectCardProps) {
  const [showModal, setShowModal] = React.useState(false)
  const isMobileApp = project.tags.includes("Mobile")

  const handleViewClick = () => {
    setShowModal(true)
    onView?.()
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5 }}
        className={cn(
          "group relative overflow-hidden",
          featured ? "md:col-span-2" : "col-span-1",
          className
        )}
        {...props}
      >
        <Card className="h-full bg-muted/50 backdrop-blur-sm border-muted-foreground/20 transition-colors hover:bg-muted/70">
          <div className={cn(
            "grid gap-6",
            featured ? "md:grid-cols-2" : "grid-cols-1"
          )}>
            <div className={cn(
              "relative overflow-hidden rounded-lg",
              isMobileApp ? "aspect-video flex items-center justify-center bg-gradient-to-br from-zinc-900/90 to-zinc-950" : "aspect-video"
            )}>
              {isMobileApp ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent)] pointer-events-none" />
                  <MobileFrame
                    src={project.screenshots[0].url}
                    alt={project.screenshots[0].alt}
                    className="scale-[0.85] transform-gpu"
                  />
                </div>
              ) : (
                <>
                  <Image
                    src={project.screenshots[0].url}
                    alt={project.screenshots[0].alt}
                    fill
                    className="object-cover object-top scale-105 transition-transform duration-500 group-hover:scale-125"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0" />
                </>
              )}
              <div className="absolute bottom-4 left-4 flex gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className={cn("text-xs", tagColors[tag as keyof typeof tagColors])}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech.name} variant="outline" className="text-xs">
                    {tech.name}
                  </Badge>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.demoUrl ? (
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                ) : (
                  <Button size="sm" variant="secondary" disabled>
                    <Lock className="mr-2 h-4 w-4" />
                    Private Client
                  </Button>
                )}
                {project.codeUrl && (
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                )}
                {project.screenshots.length > 1 && (
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    onClick={handleViewClick}
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Screenshots
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      <ProjectModal
        project={project}
        open={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  )
}
