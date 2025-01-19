"use client"

import * as React from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { MobileFrame } from "./mobile-frame"
import type { Project } from "@/types/project"

interface ProjectModalProps {
  project: Project
  open: boolean
  onClose: () => void
}

export function ProjectModal({ project, open, onClose }: ProjectModalProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const isMobileApp = project.tags.includes("Mobile")

  const nextImage = () => {
    setCurrentIndex((prev) => 
      prev === project.screenshots.length - 1 ? 0 : prev + 1
    )
  }

  const previousImage = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? project.screenshots.length - 1 : prev - 1
    )
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className={`max-w-4xl p-0 overflow-hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${isMobileApp ? 'max-h-[90vh]' : ''}`}>
        <div className={`relative ${isMobileApp ? 'h-auto py-12' : 'h-[80vh]'}`}>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 z-50"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
          
          <div className="relative h-full">
            {isMobileApp ? (
              <div className="flex items-center justify-center gap-8">
                <MobileFrame
                  src={project.screenshots[currentIndex].url}
                  alt={project.screenshots[currentIndex].alt}
                />
              </div>
            ) : (
              <Image
                src={project.screenshots[currentIndex].url}
                alt={project.screenshots[currentIndex].alt}
                fill
                className="object-contain"
              />
            )}
            
            {project.screenshots.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2"
                  onClick={previousImage}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
