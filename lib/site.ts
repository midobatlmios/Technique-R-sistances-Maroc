// Public URL of the site, used for the sitemap, canonical links and share images.
// Set NEXT_PUBLIC_SITE_URL once the final domain is connected (e.g. https://www.example.com).
// On Vercel, the production URL is detected automatically in the meantime.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : '') ||
  'http://localhost:3000'
).replace(/\/$/, '')

export const siteName = 'Technique Résistances Maroc'
