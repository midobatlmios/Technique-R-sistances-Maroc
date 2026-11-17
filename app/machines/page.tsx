import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { SiteFooter, SiteHeader } from '@/components/site-shell'
import { CtaBand, PageHeader, ProcessSteps } from '@/components/blocks'
import { machines, photo, photos } from '@/lib/catalogue'

export const metadata: Metadata = {
  title: 'Machines : fours industriels, réchauffeurs RLT, emballage | Technique Résistances Maroc',
  description:
    'Fours industriels, réchauffeurs en ligne RLT et machines d’emballage fabriqués sur mesure à Casablanca par Technique Résistances Maroc.',
}

export default function MachinesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          crumb="Machines"
          title="Machines et"
          accent="équipements industriels"
          description="Fours, réchauffeurs en ligne et machines d’emballage conçus autour de votre production, avec leurs éléments chauffants fabriqués dans notre atelier."
          image={photos.furnace}
        />

        <section className="section">
          <div className="container machine-rows">
            {machines.map((m, index) => (
              <article className="machine-row" key={m.title}>
                <div className="machine-row-photo" style={{ backgroundImage: `url(${photo(m.photo, 1200)})` }} />
                <div>
                  <span className="kicker">Équipement {String(index + 1).padStart(2, '0')}</span>
                  <h2>{m.title}</h2>
                  <p>{m.description}</p>
                  <ul className="check-list">
                    {m.points.map((point) => (
                      <li key={point}>
                        <CheckCircle2 size={24} />
                        <div><strong>{point}</strong></div>
                      </li>
                    ))}
                  </ul>
                  <Link className="btn btn-red" href="/contact">Étudier mon projet <ArrowRight size={18} /></Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-head center">
              <div>
                <span className="kicker">Votre projet</span>
                <h2>Une machine conçue pour votre process</h2>
              </div>
              <p>Chaque machine est étudiée avec vous, de la première demande à la mise en service.</p>
            </div>
            <ProcessSteps />
          </div>
        </section>

        <CtaBand title="Un projet de machine ?" text="Décrivez votre process : nous étudions la solution adaptée." />
      </main>
      <SiteFooter />
    </>
  )
}
