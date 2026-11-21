import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { SiteFooter, SiteHeader } from '@/components/site-shell'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { contact } from '@/lib/contact'
import { productFamilies } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Page introuvable | Technique Résistances Maroc',
}

// Shown for any unknown URL (old links from the previous site, typos, removed pages).
// It points visitors back to the catalogue and to a person, instead of a dead end.
export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="contenu" tabIndex={-1}>
        <section className="not-found">
          <div className="container not-found-grid">
            <div>
              <p className="not-found-code">Erreur 404</p>
              <h1>Cette page a refroidi.</h1>
              <p className="not-found-lead">
                Le lien est peut-être ancien ou mal saisi. Le produit que vous cherchez est sûrement dans
                notre catalogue, sinon, demandez-le-nous directement.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-red" href="/produits">Voir les produits <ArrowRight size={18} /></Link>
                <Link className="btn btn-outline" href="/">Retour à l’accueil</Link>
              </div>
              <p className="not-found-help">
                Une question ?{' '}
                <a href={contact.phoneHref}><Phone size={16} /> {contact.phoneDisplay}</a>
                <a href={contact.whatsappHref} target="_blank" rel="noreferrer"><WhatsAppIcon size={17} /> WhatsApp</a>
              </p>
            </div>
            <nav className="not-found-links" aria-label="Familles de produits">
              <h2>Nos familles de produits</h2>
              <ul>
                {productFamilies.map((p, i) => (
                  <li key={p.slug}>
                    <Link href={`/produits/${p.slug}`}>
                      <span>{String(i + 1).padStart(2, '0')}</span>
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
