"use client"

import { motion } from "framer-motion"
import { Bot, Code2, Cpu } from "lucide-react"
import { Card } from "@/components/ui/card"

const expertiseAreas = [
  {
    title: "AI Agents & Systems",
    icon: Bot,
    stats: "15+ Projects",
    points: [
      "Specialized in Multi-Agent Architecture",
      "LangChain & AutoGen Expert",
      "Advanced Agent Development"
    ],
    gradient: "from-blue-500/10 to-purple-500/10"
  },
  {
    title: "Integration Solutions",
    icon: Code2,
    stats: "10+ Solutions",
    points: [
      "Custom API Development",
      "Cross-Platform Solutions",
      "Seamless System Integration"
    ],
    gradient: "from-emerald-500/10 to-cyan-500/10"
  },
  {
    title: "AI Applications",
    icon: Cpu,
    stats: "12+ Apps",
    points: [
      "Mobile & Web Solutions",
      "Real-time Processing",
      "Intelligent Systems"
    ],
    gradient: "from-orange-500/10 to-red-500/10"
  }
]

export function ExpertiseGrid() {
  return (
    <section id="expertise" className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h2 className="mb-4 text-3xl font-bold">Our Expertise</h2>
        <p className="text-muted-foreground">Delivering cutting-edge AI solutions across multiple domains</p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {expertiseAreas.map((area, index) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="group relative h-full overflow-hidden border-primary/10 bg-background/50 p-8 backdrop-blur-sm">
              {/* Background Gradient */}
              <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${area.gradient} opacity-0 transition-opacity group-hover:opacity-100`} />
              
              {/* Icon */}
              <div className="mb-6 flex items-center gap-4">
                <span className="relative flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-background/50">
                  <area.icon className="h-6 w-6 text-primary" />
                  <span className="absolute inset-0 rounded-lg bg-primary/10 opacity-0 blur transition-opacity group-hover:opacity-100" />
                </span>
                <div>
                  <h3 className="font-semibold">{area.title}</h3>
                  <p className="text-sm text-primary">{area.stats}</p>
                </div>
              </div>

              {/* Points */}
              <ul className="space-y-3 text-muted-foreground">
                {area.points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary/50" />
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
