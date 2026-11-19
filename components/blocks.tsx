import Link from 'next/link'
import { ArrowRight, ChevronRight, Phone } from 'lucide-react'
import { ProductArt } from '@/components/product-art'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { contact } from '@/lib/contact'
import { processSteps, sectors } from '@/lib/catalogue'
import { Photo } from '@/components/photo'
import { productFamilies, type Product } from '@/lib/products'

export function PageHeader({
  title,
  accent,
  description,
  crumb,
  image,
}: {
  title: string
  accent?: string
  description: string
  crumb: string
  image: string
}) {
  return (
    <section className="page-header">
      <div className="page-header-bg"><Photo id={image} sizes="100vw" preload /></div>
      <div className="container">
        <nav className="breadcrumb" aria-label="Fil d’Ariane">
          <Link href="/">Accueil</Link>
          <ChevronRight size={15} />
          <span>{crumb}</span>
        </nav>
        <h1>
          {title} {accent && <span>{accent}</span>}
        </h1>
        <p>{description}</p>
      </div>
    </section>
  )
}

export function ProductCard({ product }: { product: Product }) {
  const { slug, title, detail, art, tags } = product
  const index = productFamilies.findIndex((p) => p.slug === slug)
  return (
    <Link className="product-card" href={`/produits/${slug}`}>
      <div className="product-art">
        <span className="product-num">{String(index + 1).padStart(2, '0')}</span>
        <ProductArt name={art} />
      </div>
      <div className="product-body">
        <h3>{title}</h3>
        <p>{detail}</p>
        <ul className="product-tags">
          {tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <span className="link-arrow">Voir le produit <ArrowRight size={16} /></span>
      </div>
    </Link>
  )
}

export function ProductGrid({ withCta = true }: { withCta?: boolean }) {
  return (
    <div className="product-grid">
      {productFamilies.map((product) => <ProductCard product={product} key={product.slug} />)}
      {withCta && (
        <div className="product-card product-card-cta">
          <h3>Un besoin spécifique ?</h3>
          <p>Envoyez-nous un plan ou une photo de la pièce à remplacer. Nous la fabriquons sur mesure.</p>
          <Link className="btn btn-red" href="/contact">Envoyer ma demande <ArrowRight size={18} /></Link>
        </div>
      )}
    </div>
  )
}

export function SectorGrid({ light = false }: { light?: boolean }) {
  return (
    <ol className={light ? 'sector-list sector-list-light' : 'sector-list'}>
      {sectors.map(({ title, description, products }, index) => (
        <li className="sector-row" key={title}>
          <span className="sector-num">{String(index + 1).padStart(2, '0')}</span>
          <div className="sector-text">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <p className="sector-uses"><span className="sr-only">Produits utilisés : </span>{products.join(' · ')}</p>
        </li>
      ))}
    </ol>
  )
}

export function ProcessSteps() {
  return (
    <div className="process">
      {processSteps.map(({ title, description }, index) => (
        <div className="step" key={title}>
          <span className="step-num">{String(index + 1).padStart(2, '0')}</span>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      ))}
    </div>
  )
}

export function CtaBand({
  title = 'Un besoin en chauffage industriel ?',
  text = 'Envoyez votre plan ou votre pièce à remplacer : réponse sous 48h ouvrées.',
}: {
  title?: string
  text?: string
}) {
  return (
    <section className="cta-band">
      <div className="container">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          <Link className="btn btn-dark" href="/contact">Demander un devis <ArrowRight size={18} /></Link>
          <a className="btn btn-outline-light" href={contact.phoneHref}><Phone size={18} /> {contact.phoneDisplay}</a>
          <a className="btn btn-whatsapp" href={contact.whatsappHref} target="_blank" rel="noreferrer"><WhatsAppIcon size={20} /> WhatsApp</a>
        </div>
      </div>
    </section>
  )
}
