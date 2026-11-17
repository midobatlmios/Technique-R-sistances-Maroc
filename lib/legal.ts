// Legal information shown on /mentions-legales and /confidentialite.
// Values marked TODO must be provided by the client before launch (see their registration documents).
const TODO = '[à compléter]'

export const company = {
  name: 'Technique Résistances Maroc',
  legalForm: TODO, // e.g. SARL
  capital: TODO, // e.g. 100 000 MAD
  address: 'Tit Mellil, Casablanca, Maroc', // full street address: TODO
  rc: TODO, // Registre du commerce (number + city)
  ice: TODO, // Identifiant Commun de l'Entreprise
  ifNumber: TODO, // Identifiant fiscal
  director: TODO, // Directeur de la publication (legal representative)
  cndp: TODO, // CNDP declaration / authorization number for the quote form (loi 09-08)
}

// Update when the site moves to its final host (planned: Netlify, in the client's name).
export const host = {
  name: 'Vercel Inc.',
  address: '440 N Barranca Ave #4133, Covina, CA 91723, États-Unis',
  url: 'https://vercel.com',
}

export const lastUpdated = 'novembre 2026'

export const isTodo = (value: string) => value === TODO
