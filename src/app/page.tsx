// 'use client'

// import { useEffect } from 'react'
// import { useAnimations } from '@/hooks/use-animations'

// export default function Home() {
//   const { initializeAnimations } = useAnimations()

//   useEffect(() => {
//     initializeAnimations()
//   }, [initializeAnimations])

//   return (
//     <main>
//       <div className="container"></div>
//       <div className="crt-overlay"></div>
//     </main>
//   )
// }

'use client'

import { useEffect, useRef } from 'react'
import { useAnimations } from '../hooks/use-animations'

export default function Home() {
  const { initializeAnimations } = useAnimations()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      const cleanup = initializeAnimations()
      return () => {
        if (cleanup) {
          cleanup()
        }
      }
    }
  }, [initializeAnimations])

  return (
    <main>
      <div ref={containerRef} className="container w-screen"></div>
      <div className="crt-overlay"></div>
    </main>
  )
}