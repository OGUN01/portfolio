"use client"

import { TestimonialsMarquee } from "@/components/ui/testimonials-marquee"

const testimonials = [
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
];

export function TestimonialsWithMarquee() {
  return (
    <section className="py-24 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear what clients have to say about their experience working with me.
          </p>
        </div>
        <div className="relative">
          <TestimonialsMarquee testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}
