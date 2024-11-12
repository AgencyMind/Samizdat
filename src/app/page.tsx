'use client'

import { useEffect } from 'react'
import { useAnimations } from '@/hooks/use-animations'

export default function Home() {
  const { initializeAnimations } = useAnimations()

  useEffect(() => {
    initializeAnimations()
  }, [initializeAnimations])

  return (
    <main>
      <div className="container"></div>
      <div className="crt-overlay"></div>
    </main>
  )
}

// 'use client'

// import { useEffect, useRef } from 'react'
// import { useAnimations } from '@/hooks/use-animations'

// export default function Home() {
//   const { startParticles, startScanline, startVerticalLines } = useAnimations()
//   const mainRef = useRef<HTMLElement>(null)

//   useEffect(() => {
//     if (!mainRef.current) return

//     // Create all necessary containers using more modern DOM manipulation
//     const containers = [
//       { id: 'particles-container', className: 'absolute inset-0 pointer-events-none z-10' },
//       { id: 'scanline-container', className: 'absolute inset-0 pointer-events-none z-20' },
//       { id: 'vertical-lines-container', className: 'absolute inset-0 pointer-events-none z-20' }
//     ] as const

//     // Create containers
//     const createdContainers = containers.map(({ id, className }) => {
//       const container = document.createElement('div')
//       container.id = id
//       container.className = className
//       mainRef.current?.appendChild(container)
//       return container
//     })

//     // Start all animations with proper type safety
//     const cleanups = [
//       startParticles(),
//       startScanline(),
//       startVerticalLines()
//     ].filter((cleanup): cleanup is () => void => typeof cleanup === 'function')

//     // Cleanup function
//     return () => {
//       // Stop animations
//       cleanups.forEach(cleanup => cleanup())
      
//       // Remove containers safely
//       createdContainers.forEach(container => {
//         container.remove()
//       })
//     }
//   }, [startParticles, startScanline, startVerticalLines])

//   return (
//     <main 
//       ref={mainRef} 
//       className="relative w-full h-[100dvh] overflow-hidden bg-black"
//     >
//       <div className="container relative z-0"></div>
//       <div className="crt-overlay z-30"></div>
//     </main>
//   )
// }