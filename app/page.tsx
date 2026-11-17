import Link from 'next/link'
import { ArrowRight, CheckCircle2, Wrench } from 'lucide-react'
import { SiteFooter, SiteHeader } from '@/components/site-shell'
import { CtaBand, ProcessSteps, ProductGrid, SectorGrid } from '@/components/blocks'
import { Embers } from '@/components/embers'
import { MapSection } from '@/components/map-section'
import { ReferencesMarquee } from '@/components/references'
import { machines, photo, photos } from '@/lib/catalogue'

const yearsOfExperience = new Date().getFullYear() - 2006

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="hero-bg" style={{ backgroundImage: `url(${photo(photos.hero, 2200)})` }} />
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
              <ul className="hero-points">
                <li><CheckCircle2 size={18} /> À l’unité ou en série</li>
                <li><CheckCircle2 size={18} /> Fabrication d’après plan ou échantillon</li>
                <li><CheckCircle2 size={18} /> Livraison partout au Maroc</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="figures" aria-label="Chiffres clés">
          <div className="container">
            <div className="figure"><strong data-count>+{yearsOfExperience} ans</strong><span>d’expérience en chauffage industriel</span></div>
            <div className="figure"><strong data-count>11</strong><span>familles de produits</span></div>
            <div className="figure"><strong>Sur mesure</strong><span>selon votre plan ou votre pièce</span></div>
            <div className="figure"><strong data-count>48h</strong><span>pour une réponse à votre devis</span></div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="kicker">Nos produits</span>
                <h2>Toute la gamme du chauffage électrique industriel</h2>
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
            <div className="section-head">
              <div>
                <span className="kicker">Machines et équipements</span>
                <h2>Des équipements thermiques complets</h2>
              </div>
              <p>
                Au-delà des résistances, nous fabriquons des machines industrielles prêtes à
                être intégrées à votre production.
              </p>
            </div>
            <div className="machine-grid">
              {machines.map((m) => (
                <Link className="machine-card" href="/machines" key={m.title}>
                  <div className="machine-photo" style={{ backgroundImage: `url(${photo(m.photo, 900)})` }} />
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
            <div className="split-photo" style={{ backgroundImage: `url(${photo(photos.furnaceWorker, 1200)})` }}>
              <div className="split-badge">
                <strong>2006</strong>
                <span>Atelier à Tit Mellil</span>
              </div>
            </div>
            <div>
              <span className="kicker">Pourquoi TRM</span>
              <h2>Le savoir-faire d’un fabricant</h2>
              <p className="split-lead">
                Parce que nous fabriquons nous-mêmes, nous pouvons reproduire une pièce
                introuvable, adapter une puissance ou concevoir un élément pour une machine unique.
              </p>
              <ul className="check-list">
                <li>
                  <CheckCircle2 size={24} />
                  <div><strong>Fabrication d’après plan ou échantillon</strong><span>Envoyez la pièce usée, nous la reproduisons.</span></div>
                </li>
                <li>
                  <CheckCircle2 size={24} />
                  <div><strong>Conseil technique</strong><span>Puissance, tension, matériaux : on vous aide à choisir.</span></div>
                </li>
                <li>
                  <CheckCircle2 size={24} />
                  <div><strong>Un interlocuteur local</strong><span>Pièces sur mesure fabriquées au Maroc, sans délai d’importation.</span></div>
                </li>
              </ul>
              <Link className="btn btn-outline" href="/qui-sommes-nous">Découvrir l’entreprise</Link>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-head center">
              <div>
                <span className="kicker">Sur mesure</span>
                <h2>De votre demande à la livraison</h2>
              </div>
              <p>Une démarche simple, que vous ayez un plan détaillé ou seulement la pièce à remplacer.</p>
            </div>
            <ProcessSteps />
            <div className="section-foot">
              <Link className="btn btn-red" href="/sur-mesure">Comment ça marche <ArrowRight size={18} /></Link>
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="kicker">Secteurs</span>
                <h2>Ils chauffent avec nos solutions</h2>
              </div>
              <p>Nous équipons les industriels et les professionnels dont le process dépend d’une chaleur fiable.</p>
            </div>
            <SectorGrid />
          </div>
        </section>

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

        <MapSection />

        <CtaBand />
      </main>
      <SiteFooter />
    </>
  )
}
