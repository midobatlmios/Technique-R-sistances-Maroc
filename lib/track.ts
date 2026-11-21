// Click tracking: counts calls, WhatsApp messages, itinerary requests and quotes, to show
// the client what the site brings in. Uses Umami (cookieless, no consent banner needed, free
// cloud plan, works on any host). It is switched on by NEXT_PUBLIC_UMAMI_WEBSITE_ID; without
// it nothing is loaded and track() does nothing (in development it only logs to the console).

export const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID ?? ''
export const umamiScriptSrc = process.env.NEXT_PUBLIC_UMAMI_SRC || 'https://cloud.umami.is/script.js'

export type TrackEvent = 'appel' | 'whatsapp' | 'itineraire' | 'email' | 'clic-devis' | 'devis-envoye'

declare global {
  interface Window {
    umami?: { track: (event: string, data?: Record<string, string | number>) => void }
  }
}

export function track(event: TrackEvent, data: Record<string, string | number> = {}) {
  if (typeof window === 'undefined') return
  const payload = { page: window.location.pathname, ...data }
  if (process.env.NODE_ENV === 'development') console.info('[track]', event, payload)
  window.umami?.track(event, payload)
}
