"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section 
      id="about" 
      className="relative min-h-screen py-24 px-4 md:px-6 flex items-center"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-400 mb-8">
            I&apos;m a passionate developer specializing in creating modern web applications
            and digital experiences. With expertise in web development, app creation,
            and AI solutions, I bring ideas to life through clean code and intuitive design.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { title: "Web Development", value: "5+ Years" },
              { title: "Projects Completed", value: "50+" },
              { title: "Satisfied Clients", value: "30+" },
            ].map((stat) => (
              <div key={stat.title} className="p-4 rounded-lg bg-muted/50">
                <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
