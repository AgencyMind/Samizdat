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