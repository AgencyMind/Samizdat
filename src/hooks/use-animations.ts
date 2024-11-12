
'use client'

import { useCallback } from 'react'

// Define the type for the config object
interface ParticleConfig {
  spawnInterval: number
  probability: number
  minDuration: number
  maxDuration: number
  minSize: number
  maxSize: number
  maxTravelDistance: number
  glitchInterval: number
  glitchProbability: number
  fragmentSpread: number
  maxFragments: number
  baseOpacity: number
  colors: string[]
}

interface ScanlineConfig {
  duration: number
  interval: number
  fadeInTime: number
  fadeOutTime: number
}

interface Config {
  particles: ParticleConfig
  scanline: ScanlineConfig
}

const config: Config = {
  particles: {
    spawnInterval: 200,
    probability: 0.3,
    minDuration: 2000,
    maxDuration: 4000,
    minSize: 1,
    maxSize: 3,
    maxTravelDistance: 100,
    glitchInterval: 100,
    glitchProbability: 0.3,
    fragmentSpread: 2,
    maxFragments: 4,
    baseOpacity: 0.4,
    colors: ['red', 'green', 'blue', 'white'],
  },
  scanline: {
    duration: 4000,
    interval: 2000,
    fadeInTime: 400,
    fadeOutTime: 400,
  },
}

// Updated hook with explicit null checks
export const useAnimations = () => {
  const startParticles = useCallback(() => {
    const container = document.getElementById('particles-container')
    if (!container) return // Safeguard against null container

    const spawnParticle = () => {
      const particle = document.createElement('div')
      particle.classList.add('particle')
      particle.style.width = `${Math.random() * (config.particles.maxSize - config.particles.minSize) + config.particles.minSize}px`
      particle.style.height = particle.style.width
      particle.style.backgroundColor = config.particles.colors[Math.floor(Math.random() * config.particles.colors.length)]
      particle.style.opacity = `${config.particles.baseOpacity}`

      // Randomly position the particle
      particle.style.position = 'absolute'
      particle.style.top = `${Math.random() * container.clientHeight}px`
      particle.style.left = `${Math.random() * container.clientWidth}px`

      container.appendChild(particle)

      // Remove particle after duration
      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle)
        }
      }, Math.random() * (config.particles.maxDuration - config.particles.minDuration) + config.particles.minDuration)
    }

    // Set an interval to spawn particles based on probability
    const interval = setInterval(() => {
      if (Math.random() < config.particles.probability) {
        spawnParticle()
      }
    }, config.particles.spawnInterval)

    return () => clearInterval(interval) // Cleanup on unmount
  }, [])

  const startScanline = useCallback(() => {
    const container = document.getElementById('scanline-container')
    if (!container) return // Safeguard against null container

    const line = document.createElement('div')
    line.classList.add('scanline')
    container.appendChild(line)

    let startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      if (elapsed >= config.scanline.duration) {
        if (container.contains(line)) {
          container.removeChild(line)
        }
        return
      }

      // Animate the line based on elapsed time
      const progress = elapsed / config.scanline.duration
      line.style.opacity = progress < 0.5 ? `${(progress * 2).toFixed(2)}` : `${((1 - progress) * 2).toFixed(2)}`
      line.style.top = `${progress * 100}%`

      requestAnimationFrame(animate)
    }

    animate()
    setInterval(() => {
      if (!container.contains(line)) {
        container.appendChild(line)
        startTime = Date.now()
        requestAnimationFrame(animate)
      }
    }, config.scanline.interval)
  }, [])

  return {
    startParticles,
    startScanline,
  }
}
