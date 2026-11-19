// Public URL of the site, used for the sitemap, canonical links and share images.
// Set NEXT_PUBLIC_SITE_URL once the final domain is connected (e.g. https://www.example.com).
// On Vercel, the production URL is detected automatically in the meantime.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : '') ||
  'http://localhost:3000'
).replace(/\/$/, '')

export const siteName = 'Technique Résistances Maroc'

// Demo mode (NEXT_PUBLIC_DEMO=1): shows content still waiting on the client (placeholder email,
// empty reference slots, "[à compléter]" legal fields) so they can review it. Leave it unset on
// the live site: unconfirmed content is then hidden instead of shown to visitors.
export const isDemo = process.env.NEXT_PUBLIC_DEMO === '1'
