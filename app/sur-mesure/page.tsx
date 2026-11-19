import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Camera, CheckCircle2, FileText, Package } from 'lucide-react'
import { SiteFooter, SiteHeader } from '@/components/site-shell'
import { CtaBand, PageHeader, ProcessSteps } from '@/components/blocks'
import { Photo } from '@/components/photo'
import { photos } from '@/lib/catalogue'

export const metadata: Metadata = {
  title: 'Résistance chauffante sur mesure | Technique Résistances Maroc',
  description:
    'Faites fabriquer votre résistance chauffante sur mesure à Casablanca : d’après plan, photo ou échantillon, à l’unité ou en série.',
}

const startWith = [
  { icon: FileText, title: 'Un plan', description: 'Plan technique ou croquis coté de l’élément ou de la machine.' },
  { icon: Camera, title: 'Une photo', description: 'Photo de la pièce usée avec sa plaque signalétique si elle existe.' },
  { icon: Package, title: 'Un échantillon', description: 'Apportez-nous la pièce : nous la mesurons et la reproduisons.' },
]

export default function CustomPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenu" tabIndex={-1}>
        <PageHeader
          crumb="Sur mesure"
          title="Votre résistance"
          accent="fabriquée sur mesure"
          description="Une pièce introuvable, une machine unique, une puissance à adapter ? Nous fabriquons l’élément chauffant qu’il vous faut, à l’unité ou en série."
          image={photos.coil}
        />

        <section className="section">
          <div className="container">
            <div className="section-head center">
              <div>
                <span className="kicker">Pour commencer</span>
                <h2>Un seul de ces éléments suffit</h2>
              </div>
            </div>
            <div className="info-grid">
              {startWith.map(({ icon: Icon, title, description }) => (
                <div className="info-card" key={title}>
                  <Icon size={32} strokeWidth={1.8} />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-head center">
              <div>
                <span className="kicker">Notre méthode</span>
                <h2>De votre demande à la livraison</h2>
              </div>
            </div>
            <ProcessSteps />
          </div>
        </section>

        <section className="section">
          <div className="container split">
            <div className="split-photo"><Photo id={photos.tubular} sizes="(max-width: 900px) 100vw, 600px" /></div>
            <div>
              <span className="kicker">Ce que nous adaptons</span>
              <h2>Chaque détail selon votre besoin</h2>
              <ul className="check-list">
                <li><CheckCircle2 size={24} /><div><strong>Dimensions et forme</strong><span>Longueur, diamètre, cintrage, encombrement.</span></div></li>
                <li><CheckCircle2 size={24} /><div><strong>Puissance et tension</strong><span>Selon votre alimentation et la chaleur nécessaire.</span></div></li>
                <li><CheckCircle2 size={24} /><div><strong>Matériaux</strong><span>Selon le fluide chauffé et l’environnement.</span></div></li>
                <li><CheckCircle2 size={24} /><div><strong>Raccordement et fixation</strong><span>Sorties, bornes, bride, bouchon fileté, câbles.</span></div></li>
              </ul>
              <Link className="btn btn-red" href="/contact">Envoyer ma demande <ArrowRight size={18} /></Link>
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <SiteFooter />
    </>
  )
}
