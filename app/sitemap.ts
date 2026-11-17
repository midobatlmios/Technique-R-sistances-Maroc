import type { MetadataRoute } from 'next'
import { productFamilies } from '@/lib/products'
import { siteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number }[] = [
    { path: '', priority: 1 },
    { path: '/produits', priority: 0.9 },
    { path: '/contact', priority: 0.9 },
    { path: '/machines', priority: 0.8 },
    { path: '/sur-mesure', priority: 0.8 },
    { path: '/secteurs', priority: 0.7 },
    { path: '/qui-sommes-nous', priority: 0.6 },
    ...productFamilies.map((p) => ({ path: `/produits/${p.slug}`, priority: 0.8 })),
    { path: '/mentions-legales', priority: 0.2 },
    { path: '/confidentialite', priority: 0.2 },
  ]
  return pages.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: 'monthly',
    priority,
  }))
}
