'use client'

import { useCallback } from 'react'

const config = {
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
    verticalTravel: 40,
    probability: 0.7,
  },
  vertical: {
    duration: 6000,
    interval: 3000,
    fadeInTime: 500,
    fadeOutTime: 500,
    probability: 0.5,
  },
  rgbOffset: {
    x: 0.4,
    y: 0.4,
  },
  opacity: {
    red: 0.12,
    green: 0.12,
    blue: 0.12,
  },
}

export function useAnimations() {
  const createScanline = useCallback(() => {
    const container = document.querySelector('.container')
    if (!container) return

    if (Math.random() > 1 - config.scanline.probability) {
      const line = document.createElement('div')
      line.className = 'scanline'

      const top = Math.random() * 100
      line.style.top = `${top}%`

      const startTime = performance.now()

      function animate(currentTime: number) {
        const elapsed = currentTime - startTime

        if (elapsed >= config.scanline.duration) {
          container.removeChild(line)
          return
        }

        let opacity = 0
        if (elapsed < config.scanline.fadeInTime) {
          opacity = elapsed / config.scanline.fadeInTime
        } else if (
          elapsed >
          config.scanline.duration - config.scanline.fadeOutTime
        ) {
          opacity =
            (config.scanline.duration - elapsed) / config.scanline.fadeOutTime
        } else {
          opacity = 1
        }

        const progress = elapsed / config.scanline.duration
        const translateY = progress * config.scanline.verticalTravel

        line.style.opacity = opacity.toString()
        line.style.transform = `translateY(${translateY}px)`

        requestAnimationFrame(animate)
      }

      container.appendChild(line)
      requestAnimationFrame(animate)
    }
  }, [])

  const createVerticalLine = useCallback(() => {
    const container = document.querySelector('.container')
    if (!container) return

    if (Math.random() > 1 - config.vertical.probability) {
      const line = document.createElement('div')
      line.className = 'vertical-line'

      const left = Math.random() * 100
      line.style.left = `${left}%`

      const startTime = performance.now()

      function animate(currentTime: number) {
        const elapsed = currentTime - startTime

        if (elapsed >= config.vertical.duration) {
          container.removeChild(line)
          return
        }

        let opacity = 0
        if (elapsed < config.vertical.fadeInTime) {
          opacity = elapsed / config.vertical.fadeInTime
        } else if (
          elapsed >
          config.vertical.duration - config.vertical.fadeOutTime
        ) {
          opacity =
            (config.vertical.duration - elapsed) / config.vertical.fadeOutTime
        } else {
          opacity = 1
        }

        const progress = elapsed / config.vertical.duration
        const translateX = progress * window.innerWidth

        line.style.opacity = opacity.toString()
        line.style.transform = `translateX(${translateX}px)`

        requestAnimationFrame(animate)
      }

      container.appendChild(line)
      requestAnimationFrame(animate)
    }
  }, [])

  const createParticle = useCallback(() => {
    const container = document.querySelector('.container')
    if (!container) return

    if (Math.random() > 1 - config.particles.probability) {
      const particle = document.createElement('div')
      particle.className = 'particle'

      const width =
        config.particles.minSize +
        Math.random() * (config.particles.maxSize - config.particles.minSize)
      const height = width * (1 + Math.random() * 0.5)
      particle.style.width = `${width}px`
      particle.style.height = `${height}px`

      const xPos = Math.random() * window.innerWidth
      const xOffset = (Math.random() - 0.5) * 20
      particle.style.left = `${xPos + xOffset}px`
      particle.style.bottom = '0'

      const numFragments =
        2 + Math.floor(Math.random() * (config.particles.maxFragments - 1))
      for (let i = 0; i < numFragments; i++) {
        const fragment = document.createElement('div')
        const colorClass =
          config.particles.colors[
            Math.floor(Math.random() * config.particles.colors.length)
          ]
        fragment.className = `particle-fragment ${colorClass}`

        const offset = (Math.random() - 0.5) * config.particles.fragmentSpread
        fragment.style.transform = `translateX(${offset}px)`

        particle.appendChild(fragment)
      }

      container.appendChild(particle)

      const duration =
        config.particles.minDuration +
        Math.random() * (config.particles.maxDuration - config.particles.minDuration)
      const startTime = performance.now()
      let lastGlitchTime = startTime

      function animate(currentTime: number) {
        const elapsed = currentTime - startTime

        if (elapsed >= duration) {
          container.removeChild(particle)
          return
        }

        const progress = elapsed / duration
        const baseY = progress * config.particles.maxTravelDistance

        if (currentTime - lastGlitchTime > config.particles.glitchInterval) {
          if (Math.random() < config.particles.glitchProbability) {
            const glitchX = (Math.random() - 0.5) * 10
            const glitchY = (Math.random() - 0.5) * 10
            const rotate = (Math.random() - 0.5) * 30
            const skew = (Math.random() - 0.5) * 20

            particle.style.transform = `
              translate(${glitchX}px, ${-baseY + glitchY}px)
              rotate(${rotate}deg)
              skew(${skew}deg)
            `

            Array.from(particle.children).forEach((fragment) => {
              const offset =
                (Math.random() - 0.5) * config.particles.fragmentSpread
              ;(fragment as HTMLElement).style.transform = `translateX(${offset}px)`
            })

            if (Math.random() > 0.7) {
              const clip = `polygon(
                ${Math.random() * 20}% 0%,
                100% ${Math.random() * 20}%,
                ${80 + Math.random() * 20}% 100%,
                0% ${80 + Math.random() * 20}%
              )`
              particle.style.clipPath = clip
            }
          }
          lastGlitchTime = currentTime
        }

        let opacity = config.particles.baseOpacity
        if (progress < 0.2) {
          opacity *= progress * 5
        } else if (progress > 0.8) {
          opacity *= (1 - progress) * 5
        }
        particle.style.opacity = opacity.toString()

        requestAnimationFrame(animate)
      }

      requestAnimationFrame(animate)
    }
  }, [])

  const updateRGBSeparation = useCallback(() => {
    const style = document.createElement('style')
    style.textContent = `
      .scanline::before { transform: translateY(-${config.rgbOffset.y}px); }
      .scanline::after { transform: translateY(${config.rgbOffset.y}px); }
      .vertical-line::before { transform: translateX(-${config.rgbOffset.x}px); }
      .vertical-line::after { transform: translateX(${config.rgbOffset.x}px); }
    `
    document.head.appendChild(style)
  }, [])

  const initializeAnimations = useCallback(() => {
    setInterval(createScanline, config.scanline.interval)
    setInterval(createVerticalLine, config.vertical.interval)
    setInterval(createParticle, config.particles.spawnInterval)
    updateRGBSeparation()
  }, [createScanline, createVerticalLine, createParticle, updateRGBSeparation])

  return { initializeAnimations }
}