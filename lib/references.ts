// Client references shown in the "Nos références" carousel on the home page.
// To add a client: put its logo in public/references/ (SVG or transparent PNG, ideally ~300×120)
// and add a line below, e.g. { name: 'Nom du client', logo: '/references/nom-client.png' }.
// Only add clients who agreed to be shown on the site.
export type Reference = { name: string; logo?: string }

export const references: Reference[] = [
  // Placeholders until the client provides real logos (entries without `logo` render as an empty slot).
  { name: 'Logo client 1' },
  { name: 'Logo client 2' },
  { name: 'Logo client 3' },
  { name: 'Logo client 4' },
  { name: 'Logo client 5' },
  { name: 'Logo client 6' },
  { name: 'Logo client 7' },
  { name: 'Logo client 8' },
]
