"use client"

import { useRef, useEffect } from "react"

interface SquaresProps {
  direction?: "right" | "left" | "up" | "down" | "diagonal"
  speed?: number
  borderColor?: string
  squareSize?: number
  hoverFillColor?: string
  className?: string
}

export function Squares({
  direction = "right",
  speed = 1,
  borderColor = "#333",
  squareSize = 40,
  hoverFillColor = "#222",
  className,
}: SquaresProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const requestRef = useRef<number>()
  const mousePos = useRef<{ x: number; y: number } | null>(null)
  const gridOffset = useRef({ x: 0, y: 0 })
  const lastDrawnHover = useRef<{ x: number; y: number } | null>(null)
  const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    canvas.style.background = "#0a0a0a"

    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }

    const getGridPosition = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect()
      const x = (clientX - rect.left)
      const y = (clientY - rect.top)
      
      const gridX = Math.floor((x + (gridOffset.current.x % squareSize)) / squareSize)
      const gridY = Math.floor((y + (gridOffset.current.y % squareSize)) / squareSize)
      
      return { gridX, gridY }
    }

    const drawSquare = (x: number, y: number, isHovered: boolean) => {
      // Draw base square
      ctx.strokeStyle = borderColor
      ctx.lineWidth = 1
      ctx.strokeRect(x, y, squareSize, squareSize)

      if (isHovered) {
        // Fill with base color
        ctx.fillStyle = hoverFillColor
        ctx.fillRect(x, y, squareSize, squareSize)

        // Add highlight
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'
        ctx.fillRect(x, y, squareSize, squareSize)

        // Enhanced border
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)'
        ctx.lineWidth = 2
        ctx.strokeRect(x, y, squareSize, squareSize)
      }
    }

    const drawGrid = () => {
      if (!ctx || !canvas) return

      // Only clear and redraw if necessary
      const currentHover = mousePos.current 
        ? getGridPosition(mousePos.current.x, mousePos.current.y)
        : null

      const hasHoverChanged = 
        (currentHover?.gridX !== lastDrawnHover.current?.x ||
         currentHover?.gridY !== lastDrawnHover.current?.y)

      if (!hasHoverChanged && !gridOffset.current.x && !gridOffset.current.y) {
        return // Skip redraw if nothing changed
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize

      // Pre-calculate hover position
      const hoveredPos = mousePos.current 
        ? getGridPosition(mousePos.current.x, mousePos.current.y)
        : null

      if (hoveredPos) {
        lastDrawnHover.current = { x: hoveredPos.gridX, y: hoveredPos.gridY }
      } else {
        lastDrawnHover.current = null
      }

      // Draw grid with optimized batching
      for (let x = startX; x < canvas.width / dpr + squareSize; x += squareSize) {
        for (let y = startY; y < canvas.height / dpr + squareSize; y += squareSize) {
          const drawX = x - (gridOffset.current.x % squareSize)
          const drawY = y - (gridOffset.current.y % squareSize)
          
          const currentGridX = Math.floor(x / squareSize)
          const currentGridY = Math.floor(y / squareSize)

          const isHovered = !!hoveredPos && 
            currentGridX === hoveredPos.gridX && 
            currentGridY === hoveredPos.gridY

          drawSquare(drawX, drawY, isHovered)
        }
      }

      // Add vignette (only if we're actually redrawing)
      const gradient = ctx.createRadialGradient(
        canvas.width / (2 * dpr),
        canvas.height / (2 * dpr),
        0,
        canvas.width / (2 * dpr),
        canvas.height / (2 * dpr),
        Math.max(canvas.width, canvas.height) / (1.5 * dpr)
      )
      gradient.addColorStop(0, "rgba(10, 10, 10, 0)")
      gradient.addColorStop(1, "#0a0a0a")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr)
    }

    const updateAnimation = () => {
      const effectiveSpeed = Math.max(speed, 0.1)

      switch (direction) {
        case "right":
          gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize
          break
        case "left":
          gridOffset.current.x = (gridOffset.current.x + effectiveSpeed + squareSize) % squareSize
          break
        case "up":
          gridOffset.current.y = (gridOffset.current.y + effectiveSpeed + squareSize) % squareSize
          break
        case "down":
          gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize
          break
        case "diagonal":
          gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize
          gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize
          break
      }

      drawGrid()
      requestRef.current = requestAnimationFrame(updateAnimation)
    }

    const handleMouseMove = (event: MouseEvent) => {
      mousePos.current = {
        x: event.clientX,
        y: event.clientY
      }
    }

    const handleMouseLeave = () => {
      mousePos.current = null
      lastDrawnHover.current = null
    }

    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize()
    })

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)
    resizeObserver.observe(canvas)

    updateCanvasSize()
    requestRef.current = requestAnimationFrame(updateAnimation)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      resizeObserver.disconnect()
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [direction, speed, borderColor, hoverFillColor, squareSize, dpr])

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full border-none block ${className}`}
      style={{ touchAction: "none" }}
    />
  )
}
