'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import { track, umamiScriptSrc, umamiWebsiteId, type TrackEvent } from '@/lib/track'

// One listener for the whole site: every phone, WhatsApp, map and quote link is counted
// wherever it is (header, floating buttons, CTA band, product pages…) without tagging
// each button by hand.
function classify(link: HTMLAnchorElement): [TrackEvent, Record<string, string>] | null {
  const href = link.getAttribute('href') ?? ''
  if (href.startsWith('tel:')) return ['appel', { numero: href.slice(4) }]
  if (/wa\.me|whatsapp\.com/.test(href)) return ['whatsapp', {}]
  if (href.startsWith('mailto:')) return ['email', {}]
  if (/google\.[a-z.]+\/maps|maps\.app\.goo\.gl|goo\.gl\/maps/.test(href)) return ['itineraire', {}]
  if (href === '/contact' || href === '#devis') {
    const label = link.textContent?.trim().replace(/\s+/g, ' ') ?? ''
    if (/devis|demande/i.test(label)) return ['clic-devis', { bouton: label.slice(0, 40) }]
  }
  return null
}

export function ClickTracking() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.('a')
      if (!link) return
      const hit = classify(link)
      if (hit) track(hit[0], hit[1])
    }
    document.addEventListener('click', onClick, { capture: true })
    return () => document.removeEventListener('click', onClick, { capture: true })
  }, [])

  if (!umamiWebsiteId) return null
  return <Script src={umamiScriptSrc} data-website-id={umamiWebsiteId} strategy="afterInteractive" />
}
