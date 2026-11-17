import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, CheckCircle2, ChevronRight, ClipboardList, Plus } from 'lucide-react'
import { SiteFooter, SiteHeader } from '@/components/site-shell'
import { CtaBand, ProductCard } from '@/components/blocks'
import { ProductArt } from '@/components/product-art'
import { QuoteForm } from '@/components/quote-form'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { contact } from '@/lib/contact'
import { getProduct, productFamilies } from '@/lib/products'
import { siteUrl } from '@/lib/site'

export const dynamicParams = false

export function generateStaticParams() {
  return productFamilies.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps<'/produits/[slug]'>): Promise<Metadata> {
  const product = getProduct((await params).slug)
  if (!product) return {}
  return {
    title: `${product.title} sur mesure à Casablanca | Technique Résistances Maroc`,
    description: product.seo,
  }
}

export default async function ProductPage({ params }: PageProps<'/produits/[slug]'>) {
  const product = getProduct((await params).slug)
  if (!product) notFound()

  const index = productFamilies.indexOf(product)
  const related = product.related.map(getProduct).filter((p) => p !== undefined)
  const whatsappHref = `${contact.whatsappHref.split('?')[0]}?text=${encodeURIComponent(
    `Bonjour, je souhaite un devis pour : ${product.title}.`,
  )}`

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Produits', item: `${siteUrl}/produits` },
        { '@type': 'ListItem', position: 3, name: product.title, item: `${siteUrl}/produits/${product.slug}` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: product.faq.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ]

  return (
    <>
      <SiteHeader />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <section className="product-hero">
          <div className="container">
            <nav className="breadcrumb" aria-label="Fil d’Ariane">
              <Link href="/">Accueil</Link>
              <ChevronRight size={15} />
              <Link href="/produits">Produits</Link>
              <ChevronRight size={15} />
              <span>{product.title}</span>
            </nav>
            <div className="product-hero-grid">
              <div>
                <span className="kicker">Famille {String(index + 1).padStart(2, '0')} · Fabrication sur mesure</span>
                <h1>{product.title}</h1>
                <p className="product-hero-intro">{product.intro}</p>
                <ul className="product-tags product-hero-tags">
                  {product.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <div className="hero-actions">
                  <a className="btn btn-red" href="#devis">Demander un devis <ArrowRight size={18} /></a>
                  <a className="btn btn-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer">
                    <WhatsAppIcon size={20} /> WhatsApp
                  </a>
                </div>
              </div>
              <div className="product-hero-art">
                <ProductArt name={product.art} />
                <span>Illustration · photo du produit à venir</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="kicker">Gamme</span>
                <h2>Les types disponibles</h2>
              </div>
              <p>Chaque modèle est fabriqué selon vos dimensions, votre puissance et votre tension.</p>
            </div>
            <div className="info-grid">
              {product.variants.map(({ name, text }) => (
                <div className="info-card" key={name}>
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container product-details">
            <div>
              <span className="kicker">Utilisation</span>
              <h2>Applications courantes</h2>
              <ul className="check-list">
                {product.applications.map((a) => (
                  <li key={a}><CheckCircle2 size={24} /><div><strong>{a}</strong></div></li>
                ))}
              </ul>
              <h3 className="product-sectors-title">Secteurs concernés</h3>
              <ul className="product-tags">
                {product.sectors.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <aside className="quote-checklist">
              <ClipboardList size={34} />
              <h2>Pour votre devis, indiquez-nous</h2>
              <ul>
                {product.quoteInfo.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <p>Vous n’avez pas toutes les informations ? Une photo de la pièce suffit pour commencer.</p>
            </aside>
          </div>
        </section>

        <section className="section">
          <div className="container product-faq-quote">
            <div>
              <span className="kicker">Questions fréquentes</span>
              <h2>Vous vous demandez peut-être…</h2>
              <div className="faq">
                {product.faq.map(({ q, a }) => (
                  <details key={q}>
                    <summary>{q}<Plus size={20} /></summary>
                    <p>{a}</p>
                  </details>
                ))}
              </div>
            </div>
            <div id="devis">
              <QuoteForm defaultProduct={product.title} />
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="kicker">À voir aussi</span>
                <h2>Produits associés</h2>
              </div>
              <p>
                <Link className="link-arrow" href="/produits">Voir tout le catalogue <ArrowRight size={16} /></Link>
              </p>
            </div>
            <div className="product-grid product-grid-3">
              {related.map((p) => <ProductCard product={p} key={p.slug} />)}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <SiteFooter />
    </>
  )
}
