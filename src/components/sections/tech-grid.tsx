"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const technologies = [
  {
    name: "LangChain",
    category: "AI Framework",
    gradient: "from-green-500/10 to-emerald-500/10"
  },
  {
    name: "AutoGen",
    category: "Agent Framework",
    gradient: "from-blue-500/10 to-indigo-500/10"
  },
  {
    name: "OpenAI",
    category: "AI Models",
    gradient: "from-purple-500/10 to-pink-500/10"
  },
  {
    name: "Anthropic",
    category: "AI Models",
    gradient: "from-orange-500/10 to-red-500/10"
  },
  {
    name: "Vector Databases",
    category: "Data Storage",
    gradient: "from-yellow-500/10 to-amber-500/10"
  },
  {
    name: "React/Next.js",
    category: "Frontend",
    gradient: "from-sky-500/10 to-cyan-500/10"
  },
  {
    name: "Python",
    category: "Backend",
    gradient: "from-indigo-500/10 to-violet-500/10"
  },
  {
    name: "TypeScript",
    category: "Language",
    gradient: "from-blue-500/10 to-sky-500/10"
  }
]

export function TechGrid() {
  return (
    <section className="py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80 font-cal tracking-tight">
            Technologies & Frameworks
          </h2>
          <p className="text-base text-muted-foreground/70 max-w-lg mx-auto">
            Clean, minimal grid showing our tech expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`relative group overflow-hidden backdrop-blur-sm border-white/[0.08] bg-gradient-to-br ${tech.gradient}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-black/[0.8] to-black/[0.6] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-6">
                  <h3 className="text-lg font-medium text-white/90 mb-1">{tech.name}</h3>
                  <p className="text-sm text-white/60">{tech.category}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
