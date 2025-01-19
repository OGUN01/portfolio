"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { Card } from "@/components/ui/card"

export function QuickConnect() {
  const whatsappNumber = "+919876543210" // Replace with your actual WhatsApp number
  const message = "Hi, I&apos;m interested in discussing a custom AI solution..."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <section className="container relative py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--color-primary),0.08),transparent_70%)]" />
        <div className="absolute h-full w-full">
          <div className="absolute right-0 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
        </div>
      </div>

      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="mb-4 text-3xl font-bold">Looking for Custom AI Solutions?</h2>
          <p className="text-muted-foreground">Let&apos;s discuss your project directly.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="relative overflow-hidden border-primary/10 bg-background/50 p-8 backdrop-blur-sm">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(var(--color-primary),0.05),transparent_60%)]" />
            
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 rounded-lg border border-primary/20 bg-primary/10 px-6 py-4 transition-colors hover:bg-primary/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-background/50 shadow-inner">
                <MessageCircle className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
                <span className="absolute inset-0 rounded-full bg-primary/10 blur" />
              </span>
              
              <div className="flex flex-col items-start">
                <span className="font-semibold text-foreground">Chat with us on WhatsApp</span>
                <span className="text-sm text-muted-foreground">Get instant response & free consultation</span>
              </div>
            </motion.a>

            <div className="mt-6 flex flex-col gap-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <span className="inline-block h-1 w-1 rounded-full bg-primary/50" />
                Instant Response
              </p>
              <p className="flex items-center gap-2">
                <span className="inline-block h-1 w-1 rounded-full bg-primary/50" />
                Free Project Consultation
              </p>
              <p className="flex items-center gap-2">
                <span className="inline-block h-1 w-1 rounded-full bg-primary/50" />
                Custom AI Solution Discussion
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
