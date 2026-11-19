import Link from 'next/link'
import { ArrowRight, Wrench } from 'lucide-react'
import { contact } from '@/lib/contact'
import { SiteFooter, SiteHeader } from '@/components/site-shell'
import { CtaBand, ProcessSteps, ProductGrid, SectorGrid } from '@/components/blocks'
import { Embers } from '@/components/embers'
import { MapSection } from '@/components/map-section'
import { ReferencesMarquee } from '@/components/references'
import { visibleReferences } from '@/lib/references'
import { Photo } from '@/components/photo'
import { machines, photos } from '@/lib/catalogue'

const yearsOfExperience = new Date().getFullYear() - 2006

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="contenu" tabIndex={-1}>
        <section className="hero">
          <div className="hero-bg"><Photo id={photos.hero} sizes="100vw" preload /></div>
          <div className="hero-glow" aria-hidden="true" />
          <Embers />
          <div className="container">
            <div className="hero-content">
              <span className="hero-tag"><Wrench size={16} /> Fabricant marocain depuis 2006</span>
              <h1>
                <span className="hero-line">Résistances chauffantes</span>{' '}
                <span className="hero-line hero-accent">sur mesure</span>{' '}
                <span className="hero-line">pour l’industrie</span>
              </h1>
              <p className="hero-lead">
                Colliers, cartouches, thermoplongeurs, résistances blindées et machines industrielles,
                conçus et fabriqués dans notre atelier de Tit Mellil, Casablanca.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-red" href="/contact">Demander un devis <ArrowRight size={18} /></Link>
                <Link className="btn btn-outline-light" href="/produits">Voir nos produits</Link>
              </div>
              <p className="hero-note">
                Une résistance grillée et plus de référence ?{' '}
                <a href={contact.whatsappHref} target="_blank" rel="noreferrer">Envoyez-nous une photo sur WhatsApp</a>,
                nous la refaisons à l’identique.
              </p>
            </div>
          </div>
        </section>

        <section className="figures" aria-label="Chiffres clés">
          <div className="container">
            <div className="figure"><strong data-count>+{yearsOfExperience} ans</strong><span>d’expérience en chauffage industriel</span></div>
            <div className="figure"><strong data-count>11</strong><span>familles de produits</span></div>
            <div className="figure"><strong>1 pièce</strong><span>suffit pour lancer une fabrication</span></div>
            <div className="figure"><strong data-count>48h</strong><span>pour une réponse à votre devis</span></div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="kicker">Nos produits</span>
                <h2>Onze familles de résistances, un seul atelier</h2>
              </div>
              <p>
                Des éléments standards aux pièces fabriquées d’après votre plan : nous concevons
                la résistance adaptée à votre machine, votre fluide et votre température.
              </p>
            </div>
            <ProductGrid />
          </div>
        </section>

        <section className="section section-dark">
          <div className="container">
            <div className="section-head section-head-link">
              <div>
                <h2>Nous fabriquons aussi les machines</h2>
                <p>Fours, réchauffeurs et machines d’emballage, avec leurs résistances montées d’origine.</p>
              </div>
              <Link className="link-arrow" href="/machines">Toutes les machines <ArrowRight size={16} /></Link>
            </div>
            <div className="machine-grid">
              {machines.map((m) => (
                <Link className="machine-card" href="/machines" key={m.title}>
                  <div className="machine-photo"><Photo id={m.photo} sizes="(max-width: 900px) 100vw, 400px" /></div>
                  <div className="machine-body">
                    <h3>{m.title}</h3>
                    <p>{m.description}</p>
                    <span className="link-arrow">En savoir plus <ArrowRight size={16} /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split">
            <div className="split-photo">
              <Photo id={photos.furnaceWorker} sizes="(max-width: 900px) 100vw, 600px" />
              <div className="split-badge">
                <strong>2006</strong>
                <span>Atelier à Tit Mellil</span>
              </div>
            </div>
            <div>
              <h2>Votre pièce est introuvable ? Nous la refaisons.</h2>
              <p className="split-lead">
                Parce que nous fabriquons nous-mêmes, nous pouvons reproduire une pièce
                introuvable, adapter une puissance ou concevoir un élément pour une machine unique.
              </p>
              <dl className="fact-list">
                <div>
                  <dt>D’après plan ou échantillon</dt>
                  <dd>Envoyez la pièce usée, nous la reproduisons.</dd>
                </div>
                <div>
                  <dt>Conseil technique</dt>
                  <dd>Puissance, tension, matériaux : on vous aide à choisir.</dd>
                </div>
                <div>
                  <dt>Fabriqué au Maroc</dt>
                  <dd>Pas de délai d’importation : vous parlez directement à l’atelier.</dd>
                </div>
              </dl>
              <Link className="btn btn-outline" href="/qui-sommes-nous">Découvrir l’entreprise</Link>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-head section-head-solo">
              <h2>Une commande sur mesure, en quatre étapes</h2>
              <p>Un plan détaillé ou seulement la pièce à remplacer : les deux suffisent pour commencer.</p>
            </div>
            <ProcessSteps />
            <div className="section-foot">
              <Link className="btn btn-red" href="/sur-mesure">Comment ça marche <ArrowRight size={18} /></Link>
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <div className="container sectors-layout">
            <div className="sectors-intro">
              <h2>Les métiers que nous équipons</h2>
              <p>Des industriels et des professionnels dont le process dépend d’une chaleur fiable.</p>
              <Link className="link-arrow" href="/secteurs">Détail par secteur <ArrowRight size={16} /></Link>
            </div>
            <SectorGrid />
          </div>
        </section>

        {visibleReferences.length > 0 && (
        <section className="section references-section">
          <div className="container">
            <div className="section-head center">
              <div>
                <span className="kicker">Nos références</span>
                <h2>Ils nous font confiance</h2>
              </div>
              <p>Des industriels de toutes tailles comptent sur nos solutions de chauffage au quotidien.</p>
            </div>
          </div>
          <ReferencesMarquee />
        </section>
        )}

        <MapSection />

        <CtaBand />
      </main>
      <SiteFooter />
    </>
  )
}
