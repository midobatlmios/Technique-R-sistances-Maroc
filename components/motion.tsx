'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Elements that fade/slide in when they enter the viewport.
const REVEAL = [
  '.section-head',
  '.product-card',
  '.machine-card',
  '.step',
  '.sector-card',
  '.info-card',
  '.split > *',
  '.machine-row',
  '.cta-band .container > *',
  '.figure',
  '.faq details',
  '.contact-card',
  '.quote-form',
  '.quote-checklist',
  '.product-details > div',
  '.footer-grid > *',
].join(',')

function countUp(el: HTMLElement) {
  const text = el.dataset.final ?? el.textContent ?? ''
  el.dataset.final = text
  const match = text.match(/\d+/)
  if (!match) return
  const target = Number(match[0])
  const [before, after] = [text.slice(0, match.index), text.slice((match.index ?? 0) + match[0].length)]
  const duration = 1400
  const start = performance.now()
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / duration)
    const eased = 1 - Math.pow(1 - t, 3)
    el.textContent = `${before}${Math.round(target * eased)}${after}`
    if (t < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

export function Motion() {
  const pathname = usePathname()

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const root = document.documentElement
    if (reduced || !('IntersectionObserver' in window)) {
      root.classList.remove('motion')
      return
    }
    root.classList.add('motion')

    const items = [...document.querySelectorAll<HTMLElement>(REVEAL)].filter((el) => !el.classList.contains('is-visible'))
    items.forEach((el) => {
      el.classList.add('reveal')
      // Stagger siblings that share the same parent (cards in a grid, list items…).
      const siblings = [...(el.parentElement?.children ?? [])].filter((c) => c.matches(REVEAL))
      el.style.setProperty('--reveal-delay', `${Math.min(siblings.indexOf(el), 6) * 80}ms`)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          el.classList.add('is-visible')
          el.querySelectorAll<HTMLElement>('[data-count]').forEach(countUp)
          observer.unobserve(el)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  return null
}
