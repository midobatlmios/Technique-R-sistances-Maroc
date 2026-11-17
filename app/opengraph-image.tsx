import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { contact } from '@/lib/contact'

// Preview card shown when the site is shared (WhatsApp, LinkedIn, Facebook…).
export const alt = 'Technique Résistances Maroc · Résistances chauffantes sur mesure depuis 2006'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const logo = await readFile(join(process.cwd(), 'public/logo-red.png'), 'base64')

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(120deg, #0d0d0d 0%, #151515 55%, #3a0506 100%)',
          color: '#fff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flex: 1, alignItems: 'center', padding: '0 70px', gap: 52 }}>
          <img src={`data:image/png;base64,${logo}`} width={200} height={210} alt="" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, flex: 1, minWidth: 0 }}>
            <div
              style={{
                display: 'flex',
                alignSelf: 'flex-start',
                background: '#dc0103',
                padding: '8px 18px',
                fontSize: 24,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: 'uppercase',
              }}
            >
              Fabricant marocain depuis 2006
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', fontSize: 58, fontWeight: 800, lineHeight: 1.05, textTransform: 'uppercase' }}>
              <span>Résistances chauffantes</span>
              <span style={{ color: '#ff3b3d' }}>sur mesure</span>
            </div>
            <div style={{ display: 'flex', fontSize: 25, color: '#cfcfcf' }}>
              Colliers · Cartouches · Thermoplongeurs · Machines industrielles
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: '#dc0103',
            padding: '24px 80px',
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          <span>Technique Résistances Maroc · Tit Mellil, Casablanca</span>
          <span>{contact.phoneDisplay}</span>
        </div>
      </div>
    ),
    size,
  )
}
