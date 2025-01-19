"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Code, Smartphone, Brain, Network } from "lucide-react"

const services = [
  {
    title: "Web Development",
    description: "Creating responsive, modern websites and web applications using the latest technologies and best practices.",
    icon: Code
  },
  {
    title: "App Creation",
    description: "Building native and cross-platform mobile applications that deliver exceptional user experiences.",
    icon: Smartphone
  },
  {
    title: "AI Solutions",
    description: "Implementing cutting-edge AI and machine learning solutions to solve complex business problems.",
    icon: Brain
  },
  {
    title: "Multi-Agent Systems",
    description: "Specialized in developing advanced multi-agent architectures using LangChain and AutoGen for complex autonomous systems.",
    icon: Network
  }
]

export function Services() {
  return (
    <section 
      id="services" 
      className="relative min-h-screen py-24 px-4 md:px-6 flex items-center"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden backdrop-blur-sm border-white/[0.08] bg-black/20 h-full hover:translate-y-[-2px] transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-50" />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/[0.8] to-black/[0.4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative p-5">
                    <div className="mb-3 w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:border-white/[0.12] transition-colors duration-300">
                      <service.icon className="w-5 h-5 text-white/70 group-hover:text-white/90 transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-medium text-white/90 mb-2 group-hover:text-white transition-colors duration-300">{service.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed group-hover:text-white/80 transition-colors duration-300">{service.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
