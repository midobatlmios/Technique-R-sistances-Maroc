import { MapPin, Navigation as RouteIcon, Phone } from 'lucide-react'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { contact } from '@/lib/contact'

// Embedded Google Maps (no API key needed). Loaded lazily so it doesn't slow the page.
export function MapEmbed({ title = 'Localisation de Technique Résistances Maroc' }: { title?: string }) {
  return (
    <div className="map-frame">
      <iframe
        src={contact.mapsEmbed}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  )
}

export function MapSection() {
  return (
    <section className="section map-section">
      <div className="container map-layout">
        <div className="map-info">
          <span className="kicker">Nous trouver</span>
          <h2>Notre atelier à Tit Mellil</h2>
          <p>
            Venez nous rencontrer avec votre pièce ou votre plan : nous étudions votre besoin directement
            à l’atelier.
          </p>
          <ul className="map-lines">
            <li><MapPin size={20} /> {contact.address}, Maroc</li>
            <li><Phone size={20} /> <a href={contact.phoneHref}>{contact.phoneDisplay}</a></li>
          </ul>
          <div className="map-actions">
            <a className="btn btn-red" href={contact.mapsHref} target="_blank" rel="noreferrer">
              <RouteIcon size={18} /> Itinéraire
            </a>
            <a className="btn btn-whatsapp" href={contact.whatsappHref} target="_blank" rel="noreferrer">
              <WhatsAppIcon size={20} /> WhatsApp
            </a>
          </div>
        </div>
        <MapEmbed />
      </div>
    </section>
  )
}
