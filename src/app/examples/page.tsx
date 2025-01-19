"use client"

import { Squares } from "@/components/ui/squares-background"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ExamplesPage() {
  return (
    <div className="container mx-auto py-12 space-y-12">
      {/* Hero Example */}
      <section className="relative h-[500px] rounded-lg overflow-hidden">
        <Squares 
          direction="diagonal"
          speed={0.3}
          squareSize={50}
          borderColor="rgba(255,255,255,0.1)"
          hoverFillColor="rgba(255,255,255,0.05)"
        />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Hero Section Example</h1>
        </div>
      </section>

      {/* Card Grid Example */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {["right", "left", "up", "down", "diagonal"].map((direction) => (
          <Card key={direction} className="relative overflow-hidden p-6 min-h-[300px]">
            <div className="absolute inset-0">
              <Squares 
                direction={direction as "right" | "left" | "up" | "down" | "diagonal"}
                speed={0.5}
                squareSize={30}
                borderColor="rgba(100,100,100,0.2)"
                hoverFillColor="rgba(100,100,100,0.1)"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-4 capitalize">{direction} Direction</h3>
              <p className="text-muted-foreground mb-4">
                Interactive grid with {direction} movement
              </p>
              <Button variant="outline">Learn More</Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Loading State Example */}
      <div className="relative h-[200px] rounded-lg overflow-hidden bg-background/50">
        <Squares 
          direction="right"
          speed={2}
          squareSize={20}
          borderColor="rgba(var(--primary-rgb),0.3)"
          hoverFillColor="rgba(var(--primary-rgb),0.1)"
        />
        <div className="relative z-10 h-full flex items-center justify-center">
          <p className="text-lg font-medium">Loading State Example</p>
        </div>
      </div>
    </div>
  )
}
