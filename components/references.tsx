'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Building2, Pause, Play } from 'lucide-react'
import { visibleReferences as references } from '@/lib/references'

// Infinite logo carousel: two identical groups slide left together, so the loop is seamless.
// The second group is decorative and hidden from screen readers.
function Group({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="ref-group" aria-hidden={hidden || undefined}>
      {references.map((ref) => (
        <li className="ref-item" key={ref.name} title={ref.name}>
          {ref.logo ? (
            <Image src={ref.logo} alt={hidden ? '' : ref.name} width={180} height={72} />
          ) : (
            <span className="ref-placeholder">
              <Building2 size={22} strokeWidth={1.6} />
              {ref.name}
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}

export function ReferencesMarquee() {
  const [paused, setPaused] = useState(false)
  return (
    <>
      <div className={`ref-marquee${paused ? ' is-paused' : ''}`}>
        <div className="ref-track">
          <Group />
          <Group hidden />
        </div>
      </div>
      <div className="container ref-controls">
        <button type="button" className="ref-toggle" aria-pressed={paused} onClick={() => setPaused((v) => !v)}>
          {paused ? <Play size={16} /> : <Pause size={16} />}
          {paused ? 'Reprendre le défilement' : 'Mettre en pause le défilement'}
        </button>
      </div>
    </>
  )
}
