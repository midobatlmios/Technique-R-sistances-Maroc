import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import { Motion } from '@/components/motion'
import { ClickTracking } from '@/components/click-tracking'
import { publicEmail } from '@/lib/contact'
import { siteName, siteUrl } from '@/lib/site'
import './globals.css'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Technique Résistances Maroc | Résistances chauffantes sur mesure à Casablanca',
  description:
    'Fabricant de résistances chauffantes, thermoplongeurs, colliers, cartouches et machines industrielles sur mesure à Tit Mellil, Casablanca, depuis 2006. Demandez votre devis.',
  openGraph: {
    siteName,
    locale: 'fr_MA',
    type: 'website',
  },
  icons: {
    icon: '/trm-icon.png',
    apple: '/trm-apple-icon.png',
  },
}

// Business details for Google (address, phone, map, knowledge panel).
const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}/#entreprise`,
  name: siteName,
  description:
    'Conception et fabrication de résistances chauffantes et de machines industrielles sur mesure depuis 2006.',
  url: siteUrl,
  logo: `${siteUrl}/logo-red.png`,
  image: `${siteUrl}/opengraph-image`,
  telephone: '+212522720370',
  ...(publicEmail && { email: publicEmail }),
  foundingDate: '2006',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tit Mellil',
    addressRegion: 'Casablanca-Settat',
    addressCountry: 'MA',
  },
  areaServed: { '@type': 'Country', name: 'Maroc' },
  knowsAbout: ['Résistances chauffantes', 'Thermoplongeurs', 'Colliers chauffants', 'Cartouches chauffantes', 'Fours industriels'],
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#dc0103',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
        {children}
        <Motion />
        <ClickTracking />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
