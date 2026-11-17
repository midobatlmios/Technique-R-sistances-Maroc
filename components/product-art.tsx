// Technical line drawings for each product family (placeholder until the client's own product photos arrive).
import type { ReactNode } from 'react'

const K = '#1b1b1b' // outline
const M = '#d9d9d5' // metal fill
const L = '#f2f2ef' // light fill
const R = '#dc0103' // heat / accent

export type ArtKey =
  | 'collier'
  | 'thermoplongeur'
  | 'blindee'
  | 'cartouche'
  | 'barillet'
  | 'formable'
  | 'infrarouge'
  | 'silicone'
  | 'isolation'
  | 'accessoires'
  | 'consommables'

const art: Record<ArtKey, ReactNode> = {
  collier: (
    <>
      <path d="M40 62 v34 a60 18 0 0 0 120 0 v-34" fill={M} stroke={K} strokeWidth="2.5" />
      <ellipse cx="100" cy="62" rx="60" ry="18" fill={L} stroke={K} strokeWidth="2.5" />
      <ellipse cx="100" cy="62" rx="48" ry="13" fill="#fff" stroke={K} strokeWidth="2" />
      <path d="M50 74 v30 M62 78 v32 M138 78 v32 M150 74 v30" stroke={R} strokeWidth="2" opacity=".7" />
      <rect x="88" y="96" width="24" height="26" rx="2" fill="#fff" stroke={K} strokeWidth="2.5" />
      <path d="M95 96 v26 M105 96 v26" stroke={K} strokeWidth="2" />
      <circle cx="100" cy="128" r="3" fill={K} />
      <path d="M78 112 l-6 22 M122 112 l6 22" stroke={R} strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  thermoplongeur: (
    <>
      <path d="M74 20 h52 l10 14 -10 14 h-52 l-10 -14z" fill={M} stroke={K} strokeWidth="2.5" />
      <rect x="82" y="48" width="36" height="12" fill={L} stroke={K} strokeWidth="2.5" />
      <path d="M86 60 v62 a6 6 0 0 0 12 0 v-62 M102 60 v70 a6 6 0 0 0 12 0 v-70" fill="none" stroke={K} strokeWidth="5" strokeLinecap="round" />
      <path d="M86 60 v62 a6 6 0 0 0 12 0 v-62 M102 60 v70 a6 6 0 0 0 12 0 v-70" fill="none" stroke={R} strokeWidth="2" strokeLinecap="round" />
      <path d="M100 20 v-8 M92 12 h16" stroke={K} strokeWidth="2.5" />
      <path d="M40 92 q10 -6 20 0 t20 0 M120 92 q10 -6 20 0 t20 0" fill="none" stroke="#6aa6d8" strokeWidth="2.5" />
    </>
  ),
  blindee: (
    <>
      <path d="M30 60 h120 a20 20 0 0 1 0 40 h-120" fill="none" stroke={K} strokeWidth="9" strokeLinecap="round" />
      <path d="M30 60 h120 a20 20 0 0 1 0 40 h-120" fill="none" stroke={M} strokeWidth="5" strokeLinecap="round" />
      {Array.from({ length: 11 }, (_, i) => (
        <rect key={i} x={46 + i * 9} y="47" width="4" height="26" rx="1" fill={L} stroke={K} strokeWidth="1.6" />
      ))}
      <path d="M60 100 h80" stroke={R} strokeWidth="3" strokeDasharray="6 6" />
      <path d="M26 60 h-8 M26 100 h-8" stroke={K} strokeWidth="4" strokeLinecap="round" />
      <path d="M18 60 l-8 -6 M18 100 l-8 6" stroke={R} strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
  cartouche: (
    <>
      <rect x="22" y="62" width="120" height="26" rx="4" fill={M} stroke={K} strokeWidth="2.5" />
      <ellipse cx="22" cy="75" rx="4" ry="13" fill={L} stroke={K} strokeWidth="2.5" />
      <path d="M40 75 h90" stroke={R} strokeWidth="2.5" strokeDasharray="4 5" />
      <path d="M142 68 c18 0 22 -18 40 -22 M142 82 c20 2 26 20 42 24" fill="none" stroke={K} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M142 68 c18 0 22 -18 40 -22" fill="none" stroke={R} strokeWidth="1.5" />
      <rect x="40" y="104" width="60" height="18" rx="3" fill={L} stroke={K} strokeWidth="2" />
      <rect x="54" y="108" width="32" height="10" rx="2" fill={M} stroke={K} strokeWidth="1.5" />
    </>
  ),
  barillet: (
    <>
      <rect x="56" y="40" width="88" height="70" rx="6" fill={M} stroke={K} strokeWidth="2.5" />
      <ellipse cx="100" cy="40" rx="44" ry="10" fill={L} stroke={K} strokeWidth="2.5" />
      <path d="M58 56 h84 M58 72 h84 M58 88 h84" stroke={R} strokeWidth="2" opacity=".75" />
      <path d="M74 110 v14 h52 v-14" fill={L} stroke={K} strokeWidth="2.5" />
      <path d="M86 30 v-12 M114 30 v-12" stroke={K} strokeWidth="4" strokeLinecap="round" />
      <circle cx="86" cy="16" r="3" fill={R} />
      <circle cx="114" cy="16" r="3" fill={R} />
    </>
  ),
  formable: (
    <>
      <path d="M20 108 c0 -40 30 -40 30 0 s30 40 30 0 s30 -40 30 0" fill="none" stroke={K} strokeWidth="8" strokeLinecap="round" />
      <path d="M20 108 c0 -40 30 -40 30 0 s30 40 30 0 s30 -40 30 0" fill="none" stroke={M} strokeWidth="4" strokeLinecap="round" />
      <g fill="none" stroke={R} strokeWidth="2.5">
        {Array.from({ length: 9 }, (_, i) => (
          <ellipse key={i} cx={128 + i * 6} cy="60" rx="5" ry="16" />
        ))}
      </g>
      <path d="M118 60 h6 M182 60 h8" stroke={K} strokeWidth="2.5" />
    </>
  ),
  infrarouge: (
    <>
      <path d="M24 46 h152 l-14 22 h-124z" fill={L} stroke={K} strokeWidth="2.5" />
      <rect x="30" y="76" width="140" height="22" rx="11" fill="#fff6f0" stroke={K} strokeWidth="2.5" />
      <path d="M40 87 l5 -6 5 12 5 -12 5 12 5 -12 5 12 5 -12 5 12 5 -12 5 12 5 -12 5 12 5 -12 5 12 5 -12 5 12 5 -12 5 12 5 -12 5 12 5 -12 5 6" fill="none" stroke={R} strokeWidth="2" />
      <rect x="20" y="78" width="14" height="18" rx="2" fill={M} stroke={K} strokeWidth="2" />
      <rect x="166" y="78" width="14" height="18" rx="2" fill={M} stroke={K} strokeWidth="2" />
      <path d="M60 108 v14 M100 108 v18 M140 108 v14" stroke={R} strokeWidth="2.5" strokeLinecap="round" opacity=".6" />
    </>
  ),
  silicone: (
    <>
      <path d="M36 54 l104 -18 l34 46 l-104 18z" fill="#f7d8d4" stroke={K} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M52 62 l84 -14 M58 70 l84 -14 M64 78 l84 -14 M70 86 l84 -14" stroke={R} strokeWidth="2" opacity=".8" />
      <path d="M70 100 c-6 16 -24 18 -40 22 M78 98 c-2 18 -14 24 -28 30" fill="none" stroke={K} strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  isolation: (
    <>
      <path d="M30 48 h120 a22 22 0 0 1 22 22 v20 a22 22 0 0 1 -22 22 h-120z" fill="#e9e6df" stroke={K} strokeWidth="2.5" />
      <path d="M30 70 h142 M30 90 h142 M60 48 v64 M90 48 v64 M120 48 v64" stroke={K} strokeWidth="1.4" strokeDasharray="3 4" />
      <rect x="44" y="40" width="10" height="80" rx="2" fill={R} />
      <rect x="132" y="40" width="10" height="80" rx="2" fill={R} />
    </>
  ),
  accessoires: (
    <>
      <rect x="30" y="36" width="64" height="64" rx="6" fill={L} stroke={K} strokeWidth="2.5" />
      <circle cx="62" cy="68" r="20" fill="#fff" stroke={K} strokeWidth="2.5" />
      <path d="M62 68 l10 -12" stroke={R} strokeWidth="3" strokeLinecap="round" />
      <circle cx="62" cy="68" r="3" fill={K} />
      <path d="M94 68 c20 0 20 40 50 40 h20" fill="none" stroke={K} strokeWidth="2.5" />
      <rect x="160" y="102" width="26" height="12" rx="6" fill={M} stroke={K} strokeWidth="2" />
      <rect x="112" y="30" width="56" height="34" rx="4" fill={K} />
      <rect x="118" y="36" width="44" height="14" rx="2" fill="#2e2e2e" />
      <text x="140" y="47" textAnchor="middle" fontFamily="monospace" fontSize="11" fill={R}>230°</text>
    </>
  ),
  consommables: (
    <>
      <rect x="54" y="44" width="40" height="84" rx="6" fill={R} stroke={K} strokeWidth="2.5" />
      <rect x="62" y="30" width="24" height="16" rx="3" fill={M} stroke={K} strokeWidth="2.5" />
      <rect x="68" y="22" width="12" height="10" rx="2" fill={K} />
      <rect x="58" y="70" width="32" height="30" fill="#fff" stroke={K} strokeWidth="1.5" />
      <path d="M64 80 h20 M64 88 h14" stroke={K} strokeWidth="2" />
      <path d="M112 70 h48 l14 10 v24 l-14 10 h-48z" fill={L} stroke={K} strokeWidth="2.5" />
      <rect x="174" y="86" width="10" height="12" fill={M} stroke={K} strokeWidth="2" />
      <path d="M122 92 h32" stroke={R} strokeWidth="3" />
    </>
  ),
}

export function ProductArt({ name }: { name: ArtKey }) {
  return (
    <svg viewBox="0 0 200 150" role="img" aria-hidden="true" strokeLinejoin="round">
      {art[name]}
    </svg>
  )
}
