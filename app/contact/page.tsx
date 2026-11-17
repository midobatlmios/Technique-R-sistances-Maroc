import type { Metadata } from 'next'
import { Mail, MapPin, Phone, Smartphone } from 'lucide-react'
import { SiteFooter, SiteHeader } from '@/components/site-shell'
import { PageHeader } from '@/components/blocks'
import { QuoteForm } from '@/components/quote-form'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { contact } from '@/lib/contact'
import { photos } from '@/lib/catalogue'
import { getProduct } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Contact et devis | Technique Résistances Maroc, Tit Mellil',
  description:
    'Demandez un devis pour votre résistance chauffante ou machine industrielle. Téléphone, WhatsApp et formulaire. Tit Mellil, Casablanca.',
}

export default async function ContactPage({ searchParams }: PageProps<'/contact'>) {
  const { produit } = await searchParams
  const defaultProduct = typeof produit === 'string' ? getProduct(produit)?.title : undefined

  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          crumb="Contact"
          title="Demande de"
          accent="devis gratuit"
          description="Décrivez votre besoin ou joignez un plan : notre équipe vous répond sous 48h ouvrées."
          image={photos.coil}
        />

        <section className="section section-alt">
          <div className="container contact-layout">
            <aside className="contact-card">
              <h2>Nous joindre</h2>
              <p>Une question rapide ? Appelez-nous ou écrivez-nous sur WhatsApp.</p>
              <div className="contact-line">
                <span><Phone size={20} /></span>
                <div><small>Téléphone fixe</small><a href={contact.phoneHref}>{contact.phoneDisplay}</a></div>
              </div>
              <div className="contact-line">
                <span><Smartphone size={20} /></span>
                <div><small>Mobile</small><a href={contact.mobileHref}>{contact.mobileDisplay}</a></div>
              </div>
              <div className="contact-line">
                <span><Mail size={20} /></span>
                <div><small>Email</small><a href={`mailto:${contact.email}`}>{contact.email}</a></div>
              </div>
              <div className="contact-line">
                <span><MapPin size={20} /></span>
                <div><small>Atelier</small><a href={contact.mapsHref} target="_blank" rel="noreferrer">{contact.address}, Maroc</a></div>
              </div>
              <a className="btn btn-whatsapp" href={contact.whatsappHref} target="_blank" rel="noreferrer">
                <WhatsAppIcon size={20} /> Écrire sur WhatsApp
              </a>
            </aside>
            <QuoteForm defaultProduct={defaultProduct} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
