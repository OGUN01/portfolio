"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Github, Linkedin, Twitter, Send, Sparkles } from "lucide-react"
import { useState, FormEvent } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:harshsharmacop@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  const handleConsultation = () => {
    window.open("https://wa.me/916375709961?text=Hi, I'd like to schedule a consultation.", "_blank");
  };

  return (
    <section id="contact" className="relative py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80 font-cal tracking-tight">
            Get in Touch
          </h2>
          <p className="text-base text-muted-foreground/70 max-w-lg mx-auto font-sans">
            Have a project in mind? Let&apos;s discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="relative p-8 rounded-2xl bg-[#0A0A0A]/80 border border-white/[0.08] backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent rounded-2xl" />
              <div className="relative space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/60 pl-1">Name</label>
                    <Input 
                      type="text" 
                      placeholder="John Doe" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12 bg-[#111111]/80 border-white/[0.08] rounded-xl text-sm focus:border-white/20 hover:border-white/10 transition-colors" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/60 pl-1">Email</label>
                    <Input 
                      type="email" 
                      placeholder="john@example.com" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12 bg-[#111111]/80 border-white/[0.08] rounded-xl text-sm focus:border-white/20 hover:border-white/10 transition-colors" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60 pl-1">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project..." 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-[160px] bg-[#111111]/80 border-white/[0.08] rounded-xl text-sm focus:border-white/20 hover:border-white/10 transition-colors resize-none" 
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full h-12 bg-[#1a1a1a] hover:bg-[#222222] border border-white/[0.08] rounded-xl text-sm font-medium group transition-all duration-300 text-white"
                >
                  <span className="flex items-center gap-2">
                    Send Message
                    <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Right Column: Pricing + Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Pricing Card */}
            <div className="relative p-8 rounded-2xl bg-[#0A0A0A]/90 border border-white/[0.08] backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent rounded-2xl" />
              <div className="absolute -right-24 -top-24 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl" />
              <div className="absolute -left-24 -bottom-24 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-5 h-5 text-blue-400/80" />
                  <h3 className="text-xl font-semibold text-white/90">
                    Private Consultation
                  </h3>
                </div>
                
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-bold text-white">
                    40-60%
                  </span>
                  <span className="text-white/60">cheaper than market</span>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    "Personalized project assessment",
                    "Detailed cost breakdown",
                    "Timeline planning",
                    "Technical architecture review"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 text-white/80">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1a1a1a] border border-white/[0.08] flex items-center justify-center">
                        <Sparkles className="w-3.5 h-3.5 text-blue-400/80" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={handleConsultation}
                  className="w-full h-12 bg-[#1a1a1a] hover:bg-[#222222] border border-white/[0.08] rounded-xl text-sm font-medium group transition-all duration-300 text-white"
                >
                  <span className="flex items-center gap-2">
                    Schedule Consultation
                    <Sparkles className="w-4 h-4 transition-all duration-300 group-hover:rotate-12" />
                  </span>
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                { 
                  icon: Mail, 
                  label: "Email", 
                  value: "harshsharmacop@gmail.com", 
                  href: "mailto:harshsharmacop@gmail.com",
                  hoverText: "Send me an email"
                },
                { 
                  icon: Phone, 
                  label: "WhatsApp", 
                  value: "+91 6375709961", 
                  href: "https://wa.me/916375709961",
                  hoverText: "Chat on WhatsApp"
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="relative p-4 rounded-2xl bg-[#0A0A0A]/80 border border-white/[0.08] backdrop-blur-sm group hover:border-white/10 transition-colors duration-300"
                  title={item.hoverText}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent rounded-2xl" />
                  <div className="relative flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-white/[0.08] flex items-center justify-center mb-3">
                      <item.icon className="w-4 h-4 text-white/60" />
                    </div>
                    <p className="text-sm font-medium text-white/40 mb-1">{item.label}</p>
                    <a 
                      href={item.href} 
                      className="text-sm text-white/80 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 justify-center">
              {[
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-[#0A0A0A]/80 border border-white/[0.08] flex items-center justify-center group hover:border-white/10 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4 text-white/60 group-hover:text-white/80 transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
