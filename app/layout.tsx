import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import { Motion } from '@/components/motion'
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
  title: 'Technique Résistances Maroc | Résistances chauffantes sur mesure à Casablanca',
  description:
    'Fabricant de résistances chauffantes, thermoplongeurs, colliers, cartouches et machines industrielles sur mesure à Tit Mellil, Casablanca, depuis 2006. Demandez votre devis.',
  icons: {
    icon: '/logo-red.png',
    apple: '/logo-red.png',
  },
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
        {children}
        <Motion />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
