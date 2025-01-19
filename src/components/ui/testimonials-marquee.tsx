"use client"

import React from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import Image from 'next/image'

interface Testimonial {
  content: string
  author: string
  role: string
  company?: string
  image: string
}

interface TestimonialsMarqueeProps {
  testimonials: Testimonial[]
  speed?: number
  direction?: 'left' | 'right'
  className?: string
}

const defaultTestimonials: Testimonial[] = [
  {
    content: "Harsh delivered an exceptional e-commerce platform for my business. His attention to detail and understanding of modern web technologies resulted in a fast, user-friendly site that's helped increase our online sales by 40%.",
    author: "Rajesh Patel",
    role: "Founder",
    company: "TrendCart India",
    image: "/testimonials/business-man-1.jpg"
  },
  {
    content: "Working with Harsh was a game-changer for our startup. He developed a robust project management tool that perfectly matched our requirements. His expertise in full-stack development and problem-solving skills are impressive.",
    author: "Priya Sharma",
    role: "CTO",
    company: "TechSolutions Bangalore",
    image: "/testimonials/tech-woman-1.jpg"
  },
  {
    content: "The AI-powered chatbot Harsh built for our customer service has reduced response times by 60%. His deep understanding of both AI and web development created a seamless integration that our customers love.",
    author: "Amit Verma",
    role: "Head of Digital",
    company: "ServiceFirst Technologies",
    image: "/testimonials/tech-man-1.jpg"
  },
  {
    content: "Harsh's portfolio website design for our agency was outstanding. The animations and responsive design showcased our work beautifully. His creative approach and technical skills are exactly what we needed.",
    author: "Neha Gupta",
    role: "Creative Director",
    company: "DesignHub Mumbai",
    image: "/testimonials/creative-woman-1.jpg"
  },
  {
    content: "The custom CRM system Harsh developed streamlined our entire operation. His ability to understand complex business requirements and translate them into efficient solutions is remarkable.",
    author: "Vikram Singh",
    role: "Operations Manager",
    company: "CloudServe India",
    image: "/testimonials/business-man-2.jpg"
  },
  {
    content: "Our mobile app's performance improved significantly after Harsh's optimization work. His expertise in React Native and state management helped create a smoother, faster user experience.",
    author: "Ananya Reddy",
    role: "Product Manager",
    company: "MobileFirst Solutions",
    image: "/testimonials/tech-woman-2.jpg"
  }
]

export function TestimonialsMarquee({
  testimonials = defaultTestimonials,
  speed = 25, 
  direction = 'left',
  className = '',
}: TestimonialsMarqueeProps) {
  const controls = useAnimationControls()
  const [isHovered, setIsHovered] = React.useState(false)

  React.useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: direction === 'left' ? '-50%' : '0%',
        transition: {
          duration: speed,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0
        }
      })
    } else {
      controls.stop()
    }
  }, [controls, direction, speed, isHovered])

  return (
    <div 
      className={`w-full overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex gap-4 py-4"
        animate={controls}
        initial={{ x: direction === 'left' ? '0%' : '-50%' }}
        style={{ 
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'subpixel-antialiased',
          perspective: '1000px',
          transform: 'translate3d(0,0,0)'
        }}
      >
        {[...testimonials, ...testimonials].map((testimonial, idx) => (
          <motion.div
            key={idx}
            className="flex-shrink-0 w-[380px] bg-[#0A0A0A]/90 backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 relative group transform transition-all duration-300 hover:scale-[1.02] hover:border-white/20"
            style={{ 
              willChange: 'transform, opacity',
              transform: 'translate3d(0,0,0)',
              transformStyle: 'preserve-3d'
            }}
            whileHover={{
              y: -2,
              transition: { duration: 0.2 }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent rounded-2xl" />
            <div className="relative space-y-4">
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                    sizes="48px"
                    priority
                    loading="eager"
                  />
                </div>
                <div>
                  <p className="font-medium text-white">{testimonial.author}</p>
                  <p className="text-sm text-white/60">
                    {testimonial.role}
                    {testimonial.company && ` • ${testimonial.company}`}
                  </p>
                </div>
              </div>
              <p className="text-base text-white/80 leading-relaxed">
                {testimonial.content}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
