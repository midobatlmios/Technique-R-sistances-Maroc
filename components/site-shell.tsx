'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, Clock, FileDown, Mail, MapPin, Menu, Navigation as RouteIcon, Phone, X } from 'lucide-react'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { contact } from '@/lib/contact'

const logoRed = '/logo-red.png'
const logoWhite = '/logo-white.png'

const links = [
  ['Produits', '/produits'],
  ['Machines', '/machines'],
  ['Sur mesure', '/sur-mesure'],
  ['Secteurs', '/secteurs'],
  ['L’entreprise', '/qui-sommes-nous'],
  ['Contact', '/contact'],
] as const

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="utility-bar">
        <div className="container">
          <div className="utility-left">
            <span><MapPin size={15} /> {contact.address}</span>
            <span><Clock size={15} /> Réponse aux devis sous 48h</span>
          </div>
          <div className="utility-right">
            <a href={contact.phoneHref}><Phone size={15} /> {contact.phoneDisplay}</a>
            <a href={`mailto:${contact.email}`}><Mail size={15} /> {contact.email}</a>
            <Link className="utility-catalogue" href="/contact"><FileDown size={15} /> Catalogue PDF</Link>
          </div>
        </div>
      </div>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="container header-inner">
          <Link className="brand" href="/" aria-label="Technique Résistances Maroc, accueil">
            <Image src={logoRed} alt="" width={782} height={822} priority style={{ height: 'auto' }} />
            <span className="brand-name">
              <strong>Technique Résistances</strong>
              <small>Maroc</small>
            </span>
          </Link>
          <nav id="main-nav" className={`main-nav${open ? ' open' : ''}`} aria-label="Navigation principale">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href || pathname.startsWith(`${href}/`) ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <Link className="btn btn-red" href="/contact">Devis gratuit</Link>
            <button
              className="burger"
              type="button"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-controls="main-nav"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export function FloatingContact() {
  return (
    <div className="floating-contact">
      <a className="floating-call" href={contact.phoneHref} aria-label={`Appeler le ${contact.phoneDisplay}`}>
        <Phone size={22} />
      </a>
      <a className="floating-whatsapp" href={contact.whatsappHref} target="_blank" rel="noreferrer" aria-label="Écrire sur WhatsApp">
        <WhatsAppIcon size={26} />
        <span>WhatsApp</span>
      </a>
    </div>
  )
}

export function SiteFooter() {
  return (
    <>
      <FloatingContact />
      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Image src={logoWhite} alt="Technique Résistances Maroc" width={773} height={845} style={{ height: 'auto' }} />
            <p>
              Conception et fabrication de résistances chauffantes et de machines industrielles sur
              mesure, à Tit Mellil depuis 2006.
            </p>
          </div>
          <div>
            <h4>Produits</h4>
            <ul className="footer-links">
              <li><Link href="/produits/colliers-chauffants">Colliers chauffants</Link></li>
              <li><Link href="/produits/cartouches-chauffantes">Cartouches chauffantes</Link></li>
              <li><Link href="/produits/thermoplongeurs">Thermoplongeurs</Link></li>
              <li><Link href="/produits/resistances-blindees-ailettes">Résistances blindées</Link></li>
              <li><Link href="/produits/infrarouge-quartz">Infrarouge et quartz</Link></li>
              <li><Link href="/produits/accessoires-regulation">Accessoires et régulation</Link></li>
            </ul>
          </div>
          <div>
            <h4>Entreprise</h4>
            <ul className="footer-links">
              {links.map(([label, href]) => (
                <li key={href}><Link href={href}>{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul className="footer-links footer-contact">
              <li><MapPin size={16} /> {contact.address}, Maroc</li>
              <li><Phone size={16} /> <a href={contact.phoneHref}>{contact.phoneDisplay}</a></li>
              <li><Phone size={16} /> <a href={contact.mobileHref}>{contact.mobileDisplay}</a></li>
              <li><Mail size={16} /> <a href={`mailto:${contact.email}`}>{contact.email}</a></li>
              <li><RouteIcon size={16} /> <a href={contact.mapsHref} target="_blank" rel="noreferrer">Voir l’itinéraire</a></li>
              <li><ArrowRight size={16} /> <Link href="/contact">Demander un devis</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <span>© {new Date().getFullYear()} Technique Résistances Maroc. Tous droits réservés.</span>
            <span className="footer-legal">
              <Link href="/mentions-legales">Mentions légales</Link>
              <Link href="/confidentialite">Confidentialité</Link>
              <span>Fabriqué au Maroc</span>
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}
