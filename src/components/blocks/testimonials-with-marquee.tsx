"use client"

import { cn } from "@/lib/utils"
import { TestimonialsMarquee } from "@/components/ui/testimonials-marquee"

const testimonials = [
  {
    author: {
      name: "Rajesh Patel",
      title: "Founder, TrendCart India",
    },
    text:
      "Harsh delivered an exceptional e-commerce platform for my business. His attention to detail and understanding of modern web technologies resulted in a fast, user-friendly site that's helped increase our online sales by 40%.",
    href: "",
  },
  {
    author: {
      name: "Priya Sharma",
      title: "CTO, TechSolutions Bangalore",
    },
    text:
      "Working with Harsh was a game-changer for our startup. He developed a robust project management tool that perfectly matched our requirements. His expertise in full-stack development and problem-solving skills are impressive.",
    href: "",
  },
  {
    author: {
      name: "Amit Verma",
      title: "Head of Digital, ServiceFirst Technologies",
    },
    text:
      "The AI-powered chatbot Harsh built for our customer service has reduced response times by 60%. His deep understanding of both AI and web development created a seamless integration that our customers love.",
    href: "",
  },
  {
    author: {
      name: "Neha Gupta",
      title: "Creative Director, DesignHub Mumbai",
    },
    text:
      "Harsh's portfolio website design for our agency was outstanding. The animations and responsive design showcased our work beautifully. His creative approach and technical skills are exactly what we needed.",
    href: "",
  },
  {
    author: {
      name: "Vikram Singh",
      title: "Operations Manager, CloudServe India",
    },
    text:
      "The custom CRM system Harsh developed streamlined our entire operation. His ability to understand complex business requirements and translate them into efficient solutions is remarkable.",
    href: "",
  },
  {
    author: {
      name: "Ananya Reddy",
      title: "Product Manager, MobileFirst Solutions",
    },
    text:
      "Our mobile app's performance improved significantly after Harsh's optimization work. His expertise in React Native and state management helped create a smoother, faster user experience.",
    href: "",
  },
  {
    author: {
      name: "Karthik Iyer",
      title: "Data Analytics Lead, InsightTech",
    },
    text:
      "The real-time analytics dashboard Harsh built gives us invaluable insights into our business metrics. His skills in data visualization and frontend development are top-notch.",
    href: "",
  },
  {
    author: {
      name: "Meera Krishnan",
      title: "Digital Marketing Head, WebGrowth",
    },
    text:
      "Harsh's work on our website's SEO and performance optimization resulted in a 50% increase in organic traffic. His technical expertise and attention to detail made a real difference.",
    href: "",
  },
]

export function TestimonialsWithMarquee() {
  return (
    <section id="testimonials" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-32">
        <h2 className="mx-auto max-w-4xl font-display text-4xl font-medium tracking-tight text-white sm:text-5xl">
          Trusted by clients across India
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg tracking-tight text-white/60">
          See what our clients say about our development and consulting services.
        </p>
      </div>
      <div className="relative">
        <TestimonialsMarquee 
          speed={30}
          className="mask-gradient-x"
          testimonials={[
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
          ]}
        />
      </div>
    </section>
  )
}
