"use client"

import * as React from "react"
import { Home, FileText, CreditCard, Info, Lightbulb } from "lucide-react"
import { AnimeNavBar } from "@/components/ui/anime-navbar"

const items = [
  {
    name: "Home",
    url: "home",
    icon: Home,
  },
  {
    name: "Projects",
    url: "projects",
    icon: FileText,
  },
  {
    name: "Expertise",
    url: "expertise",
    icon: Lightbulb,
  },
  {
    name: "About",
    url: "services", // Changed to match services section
    icon: Info,
  },
  {
    name: "Contact",
    url: "contact",
    icon: CreditCard,
  },
]

export function AnimeNavBarDemo() {
  return <AnimeNavBar items={items} />
}

export default AnimeNavBarDemo
