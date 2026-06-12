'use client'

import { useEffect } from 'react'

export default function MotionEnhancer() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const selectors = [
      'main > section',
      'main article',
      'main .rounded-2xl',
      'main .rounded-3xl',
    ].join(',')

    const targets = Array.from(document.querySelectorAll<HTMLElement>(selectors))
    document.body.classList.add('motion-enhanced')

    targets.forEach((target, index) => {
      target.classList.add('motion-reveal')
      if (target.tagName.toLowerCase() === 'section') {
        target.classList.add('motion-section')
      } else {
        target.classList.add('motion-surface')
      }
      target.style.setProperty('--motion-delay', `${Math.min(index % 6, 5) * 55}ms`)
    })

    const surfaces = targets.filter((target) => target.classList.contains('motion-surface'))

    const handlePointerMove = (event: PointerEvent) => {
      const target = event.currentTarget as HTMLElement
      const rect = target.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 8

      target.style.setProperty('--motion-x', `${x.toFixed(2)}px`)
      target.style.setProperty('--motion-y', `${y.toFixed(2)}px`)
    }

    const handlePointerLeave = (event: PointerEvent) => {
      const target = event.currentTarget as HTMLElement
      target.style.removeProperty('--motion-x')
      target.style.removeProperty('--motion-y')
    }

    surfaces.forEach((surface) => {
      surface.addEventListener('pointermove', handlePointerMove)
      surface.addEventListener('pointerleave', handlePointerLeave)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.12,
      },
    )

    targets.forEach((target) => observer.observe(target))

    return () => {
      observer.disconnect()
      document.body.classList.remove('motion-enhanced')
      surfaces.forEach((surface) => {
        surface.removeEventListener('pointermove', handlePointerMove)
        surface.removeEventListener('pointerleave', handlePointerLeave)
        surface.style.removeProperty('--motion-x')
        surface.style.removeProperty('--motion-y')
      })
      targets.forEach((target) => {
        target.classList.remove('motion-reveal', 'motion-section', 'motion-surface', 'is-visible')
        target.style.removeProperty('--motion-delay')
      })
    }
  }, [])

  return null
}
