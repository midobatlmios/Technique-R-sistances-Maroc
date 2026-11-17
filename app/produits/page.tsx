import type { Metadata } from 'next'
import { FileText, Ruler, Zap } from 'lucide-react'
import { SiteFooter, SiteHeader } from '@/components/site-shell'
import { CtaBand, PageHeader, ProductGrid } from '@/components/blocks'
import { photos } from '@/lib/catalogue'

export const metadata: Metadata = {
  title: 'Produits : colliers, cartouches, thermoplongeurs | Technique Résistances Maroc',
  description:
    'Colliers chauffants, thermoplongeurs, résistances blindées et à ailettes, cartouches, infrarouge, silicone, régulation : 11 familles de produits fabriqués à Casablanca.',
}

const requestInfo = [
  { icon: Ruler, title: 'Dimensions', description: 'Diamètre, longueur, forme et type de fixation de l’élément.' },
  { icon: Zap, title: 'Caractéristiques électriques', description: 'Tension d’alimentation (230 V, 400 V…) et puissance souhaitée.' },
  { icon: FileText, title: 'Application', description: 'Ce qui est chauffé (air, eau, huile, moule…), la température et la quantité.' },
]

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          crumb="Produits"
          title="Nos résistances"
          accent="et articles chauffants"
          description="11 familles de produits pour chauffer l’air, les liquides et les surfaces, en standard ou fabriqués sur mesure d’après votre plan."
          image={photos.tubular}
        />

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="kicker">Catalogue</span>
                <h2>Choisissez votre famille de produits</h2>
              </div>
              <p>
                Chaque élément peut être adapté en dimensions, puissance, tension et type de
                raccordement. Cliquez sur un produit pour demander un devis.
              </p>
            </div>
            <ProductGrid />
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-head center">
              <div>
                <span className="kicker">Préparer votre demande</span>
                <h2>Les informations utiles pour un devis rapide</h2>
              </div>
              <p>Pas toutes les réponses ? Une photo de la pièce à remplacer suffit souvent pour commencer.</p>
            </div>
            <div className="info-grid">
              {requestInfo.map(({ icon: Icon, title, description }) => (
                <div className="info-card" key={title}>
                  <Icon size={32} strokeWidth={1.8} />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <SiteFooter />
    </>
  )
}
