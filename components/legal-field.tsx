import { isTodo } from '@/lib/legal'

// Shows a legal value, or a visible highlight when the client still has to provide it.
export function LegalField({ value }: { value: string }) {
  return isTodo(value) ? <mark className="legal-todo">{value}</mark> : <>{value}</>
}
