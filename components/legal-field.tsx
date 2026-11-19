import { isTodo, showLegal } from '@/lib/legal'

// Shows a legal value, or a visible highlight (demo mode only) when the client still has to provide it.
export function LegalField({ value }: { value: string }) {
  return isTodo(value) ? <mark className="legal-todo">{value}</mark> : <>{value}</>
}

// A label/value row of the legal list, left out on the live site while the value is missing.
export function LegalRow({ label, value }: { label: string; value: string }) {
  if (!showLegal(value)) return null
  return (
    <>
      <dt>{label}</dt>
      <dd><LegalField value={value} /></dd>
    </>
  )
}
