import type { Metadata } from 'next'
import { SiteFooter, SiteHeader } from '@/components/site-shell'
import { CtaBand, PageHeader, SectorGrid } from '@/components/blocks'
import { photos } from '@/lib/catalogue'

export const metadata: Metadata = {
  title: 'Secteurs : plasturgie, traitement de surface, agroalimentaire | Technique Résistances Maroc',
  description:
    'Résistances chauffantes pour la plasturgie, le traitement de surface, les presses, les métiers de bouche et l’emballage industriel au Maroc.',
}

export default function SectorsPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenu" tabIndex={-1}>
        <PageHeader
          crumb="Secteurs"
          title="Les secteurs"
          accent="que nous équipons"
          description="Des solutions de chauffage pour toutes les industries dont la production dépend d’une température maîtrisée."
          image={photos.pipes}
        />

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="kicker">Applications</span>
                <h2>Votre secteur, nos solutions</h2>
              </div>
              <p>
                Pour chaque secteur, les produits les plus utilisés. Votre application n’est pas
                listée ? Nous étudions tous les besoins.
              </p>
            </div>
            <SectorGrid light />
          </div>
        </section>

        <CtaBand title="Votre secteur n’est pas listé ?" text="Expliquez-nous votre application : nous trouverons la solution de chauffe." />
      </main>
      <SiteFooter />
    </>
  )
}
