"use client"

import { motion } from 'framer-motion'
import { ThemeSwitch } from '@/components/ui/theme-switch'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Squares } from '@/components/ui/squares-background'

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-background">
      {/* Theme Switch */}
      <motion.div 
        className="absolute right-4 top-4 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <ThemeSwitch />
      </motion.div>

      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <Squares 
          direction="diagonal"
          speed={0.3}
          squareSize={50}
          borderColor="rgba(255,255,255,0.1)" 
          hoverFillColor="rgba(255,255,255,0.05)"
          className="opacity-50 dark:opacity-100 transition-opacity duration-500"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="text-center">
          <motion.h1 
            className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Crafting Digital Excellence
          </motion.h1>
          
          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Web Development • App Creation • AI Solutions
          </motion.p>
          
          <motion.div 
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild>
              <Link href="#projects">
                View Projects
              </Link>
            </Button>
            <Button variant="ghost" asChild className="group">
              <Link href="#contact" className="flex items-center gap-x-2">
                Contact Me 
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
