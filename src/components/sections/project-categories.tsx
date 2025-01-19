"use client"

import { motion } from "framer-motion"
import { Bot, Code, Layout } from "lucide-react"
import { Card } from "@/components/ui/card"

const categories = [
  {
    title: "Agent Development",
    icon: Bot,
    points: [
      "Autonomous AI Agents",
      "Multi-Agent Systems",
      "Custom Agent Frameworks"
    ],
    gradient: "from-purple-500/10 to-indigo-500/10"
  },
  {
    title: "AI Integration",
    icon: Code,
    points: [
      "API Development",
      "Custom Solutions",
      "System Architecture"
    ],
    gradient: "from-blue-500/10 to-cyan-500/10"
  },
  {
    title: "Applications",
    icon: Layout,
    points: [
      "Web Applications",
      "Mobile Apps",
      "Desktop Software"
    ],
    gradient: "from-emerald-500/10 to-green-500/10"
  }
]

export function ProjectCategories() {
  return (
    <section className="container relative py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h2 className="mb-4 text-3xl font-bold">Project Categories</h2>
        <p className="text-muted-foreground">Comprehensive solutions across multiple domains</p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="group relative h-full overflow-hidden border-primary/10 bg-background/50 p-8 backdrop-blur-sm">
              {/* Background Gradient */}
              <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${category.gradient} opacity-0 transition-opacity group-hover:opacity-100`} />
              
              {/* Icon */}
              <div className="mb-6">
                <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-background/50">
                  <category.icon className="h-6 w-6 text-primary" />
                  <span className="absolute inset-0 rounded-lg bg-primary/10 opacity-0 blur transition-opacity group-hover:opacity-100" />
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-4 text-xl font-semibold">{category.title}</h3>

              {/* Points */}
              <ul className="space-y-3 text-muted-foreground">
                {category.points.map((point) => (
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
