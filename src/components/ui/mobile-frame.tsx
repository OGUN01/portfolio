"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface MobileFrameProps {
  src: string
  alt: string
  className?: string
}

export function MobileFrame({ src, alt, className }: MobileFrameProps) {
  return (
    <div className={cn("relative mx-auto w-[220px]", className)}>
      {/* Phone Frame */}
      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2rem] border-[12px] border-zinc-900 bg-zinc-900 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_8px_20px_-4px_rgba(0,0,0,0.3)] backdrop-blur-xl">
        {/* Screen Content */}
        <div className="absolute inset-0 overflow-hidden rounded-[1rem]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            quality={95}
            sizes="(max-width: 220px) 100vw, 220px"
            priority
          />
        </div>
        
        {/* Notch */}
        <div className="absolute left-1/2 top-0 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-zinc-900" />
        
        {/* Volume Buttons */}
        <div className="absolute -left-[12px] top-[80px] h-6 w-[2px] rounded-r bg-zinc-800" />
        <div className="absolute -left-[12px] top-[100px] h-6 w-[2px] rounded-r bg-zinc-800" />
        
        {/* Power Button */}
        <div className="absolute -right-[12px] top-[90px] h-8 w-[2px] rounded-l bg-zinc-800" />
        
        {/* Highlight Effects */}
        <div className="absolute inset-0 rounded-[1rem] ring-1 ring-white/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_50%)]" />
        
        {/* Inner Shadow */}
        <div className="absolute inset-0 rounded-[1rem] shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" />
      </div>
    </div>
  )
}
