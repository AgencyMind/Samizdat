'use client'

import { useEffect } from 'react'
import { useAnimations } from '@/hooks/use-animations'

export default function Home() {
  const { startParticles, startScanline, startVerticalLines } = useAnimations()

  useEffect(() => {
    // Create all necessary containers
    const containers = [
      { id: 'particles-container', className: 'absolute inset-0 pointer-events-none' },
      { id: 'scanline-container', className: 'absolute inset-0 pointer-events-none' },
      { id: 'vertical-lines-container', className: 'absolute inset-0 pointer-events-none' }
    ]

    containers.forEach(({ id, className }) => {
      if (!document.getElementById(id)) {
        const container = document.createElement('div')
        container.id = id
        container.className = className
        document.querySelector('main')?.appendChild(container)
      }
    })

    // Start all animations
    const cleanupParticles = startParticles()
    const cleanupScanline = startScanline()
    const cleanupVerticalLines = startVerticalLines()

    // Cleanup function
    return () => {
      // Stop animations
      cleanupParticles?.()
      cleanupScanline?.()
      cleanupVerticalLines?.()

      // Remove containers
      containers.forEach(({ id }) => {
        const container = document.getElementById(id)
        if (container?.parentNode) {
          container.parentNode.removeChild(container)
        }
      })
    }
  }, [startParticles, startScanline, startVerticalLines])

  return (
    <main className="relative w-full h-screen overflow-hidden">
      <div className="container"></div>
      <div className="crt-overlay"></div>
    </main>
  )
}