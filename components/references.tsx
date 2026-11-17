import Image from 'next/image'
import { Building2 } from 'lucide-react'
import { references } from '@/lib/references'

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
  return (
    <div className="ref-marquee">
      <div className="ref-track">
        <Group />
        <Group hidden />
      </div>
    </div>
  )
}
