import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Gauge, ShieldCheck, Wrench } from 'lucide-react'
import { SiteFooter, SiteHeader } from '@/components/site-shell'
import { CtaBand, PageHeader } from '@/components/blocks'
import { Photo } from '@/components/photo'
import { photos } from '@/lib/catalogue'

export const metadata: Metadata = {
  title: 'L’entreprise | Technique Résistances Maroc, fabricant depuis 2006',
  description:
    'Technique Résistances Maroc conçoit et fabrique des résistances chauffantes et des machines industrielles à Tit Mellil, Casablanca, depuis 2006.',
}

const values = [
  { icon: Wrench, title: 'Savoir-faire', description: 'Conception et fabrication d’éléments chauffants depuis 2006.' },
  { icon: Gauge, title: 'Sur mesure', description: 'Chaque pièce adaptée à votre machine, votre fluide et votre température.' },
  { icon: ShieldCheck, title: 'Fiabilité', description: 'Des éléments conçus pour durer dans des conditions industrielles.' },
]

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenu" tabIndex={-1}>
        <PageHeader
          crumb="L’entreprise"
          title="Fabricant marocain"
          accent="depuis 2006"
          description="Technique Résistances Maroc conçoit et fabrique des résistances chauffantes, commercialise des articles chauffants et accessoires, et réalise des machines industrielles sur mesure."
          image={photos.welding}
        />

        <section className="section">
          <div className="container split">
            <div className="split-photo">
              <Photo id={photos.furnaceWorker} sizes="(max-width: 900px) 100vw, 600px" />
              <div className="split-badge">
                <strong>2006</strong>
                <span>Création de l’entreprise</span>
              </div>
            </div>
            <div>
              <span className="kicker">Notre histoire</span>
              <h2>Le chauffage industriel, notre métier</h2>
              <p className="split-lead">
                Créée fin 2006 à Tit Mellil, Technique Résistances Maroc accompagne les industriels
                marocains dans tous leurs besoins de chauffage électrique : de la simple résistance de
                remplacement à la machine complète.
              </p>
              <ul className="check-list">
                <li><CheckCircle2 size={24} /><div><strong>Conception et fabrication</strong><span>Résistances chauffantes réalisées dans notre atelier.</span></div></li>
                <li><CheckCircle2 size={24} /><div><strong>Commercialisation</strong><span>Articles chauffants, accessoires, régulation et consommables.</span></div></li>
                <li><CheckCircle2 size={24} /><div><strong>Machines industrielles</strong><span>Fours, réchauffeurs RLT et machines d’emballage sur mesure.</span></div></li>
              </ul>
              <Link className="btn btn-red" href="/contact">Nous contacter <ArrowRight size={18} /></Link>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-head center">
              <div>
                <span className="kicker">Nos engagements</span>
                <h2>Ce qui nous distingue</h2>
              </div>
            </div>
            <div className="info-grid">
              {values.map(({ icon: Icon, title, description }) => (
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
