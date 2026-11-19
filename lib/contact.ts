import { isDemo } from '@/lib/site'

// Coordonnées issues du catalogue client — à confirmer avant la mise en ligne.
export const contact = {
  phoneDisplay: '05 22 72 03 70',
  phoneHref: 'tel:+212522720370',
  mobileDisplay: '06 61 23 49 78',
  mobileHref: 'tel:+212661234978',
  whatsappHref:
    'https://wa.me/212661234978?text=' +
    encodeURIComponent('Bonjour, je souhaite un devis pour une résistance chauffante.'),
  email: 'contact@trm.ma',
  // Set to true once the client confirms the address above (it is a placeholder until then).
  emailConfirmed: false,
  // Link to the PDF catalogue (e.g. '/catalogue-trm.pdf' in public/). The button stays hidden while empty.
  catalogueUrl: '',
  address: 'Tit Mellil, Casablanca',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=Technique+R%C3%A9sistances+Maroc+Tit+Mellil',
  // Map shown on the site. For an exact pin, replace with the "Intégrer une carte" link from the
  // company's Google Maps listing (Partager → Intégrer une carte → copy the src="…" URL).
  mapsEmbed: 'https://www.google.com/maps?q=Technique+R%C3%A9sistances+Maroc+Tit+Mellil&output=embed',
}

// Email shown on the site: empty (hidden) until confirmed, except in demo mode.
export const publicEmail = contact.emailConfirmed || isDemo ? contact.email : ''
