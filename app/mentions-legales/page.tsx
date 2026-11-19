import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteFooter, SiteHeader } from '@/components/site-shell'
import { PageHeader } from '@/components/blocks'
import { LegalRow } from '@/components/legal-field'
import { contact, publicEmail } from '@/lib/contact'
import { company, host, lastUpdated } from '@/lib/legal'
import { photos } from '@/lib/catalogue'

export const metadata: Metadata = {
  title: 'Mentions légales | Technique Résistances Maroc',
  description: 'Mentions légales du site de Technique Résistances Maroc : éditeur, hébergement, propriété intellectuelle.',
}

export default function LegalNoticePage() {
  return (
    <>
      <SiteHeader />
      <main id="contenu" tabIndex={-1}>
        <PageHeader
          crumb="Mentions légales"
          title="Mentions"
          accent="légales"
          description="Informations sur l’éditeur et l’hébergeur du site."
          image={photos.pipes}
        />
        <section className="section">
          <div className="container legal-content">
            <h2>Éditeur du site</h2>
            <dl className="legal-list">
              <dt>Raison sociale</dt><dd>{company.name}</dd>
              <LegalRow label="Forme juridique" value={company.legalForm} />
              <LegalRow label="Capital social" value={company.capital} />
              <dt>Siège social</dt><dd>{company.address}</dd>
              <LegalRow label="Registre du commerce" value={company.rc} />
              <LegalRow label="ICE" value={company.ice} />
              <LegalRow label="Identifiant fiscal" value={company.ifNumber} />
              <dt>Téléphone</dt><dd><a href={contact.phoneHref}>{contact.phoneDisplay}</a></dd>
              {publicEmail && <><dt>Email</dt><dd><a href={`mailto:${publicEmail}`}>{publicEmail}</a></dd></>}
              <LegalRow label="Directeur de la publication" value={company.director} />
            </dl>

            <h2>Hébergement</h2>
            <p>
              Le site est hébergé par {host.name}, {host.address}{' '}
              (<a href={host.url} target="_blank" rel="noreferrer">{host.url.replace('https://', '')}</a>).
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              Les textes, le logo, la charte graphique et la structure de ce site sont la propriété de {company.name}.
              Toute reproduction, totale ou partielle, sans autorisation écrite préalable est interdite.
            </p>
            <p>
              Certaines photographies proviennent de la banque d’images Unsplash et sont utilisées conformément à
              sa licence. Les illustrations des produits sont fournies à titre indicatif.
            </p>

            <h2>Responsabilité</h2>
            <p>
              Les informations publiées sur ce site sont données à titre indicatif. Les caractéristiques techniques
              définitives de chaque produit sont confirmées dans le devis. {company.name} ne saurait être tenue
              responsable d’une erreur ou d’une omission dans le contenu du site.
            </p>
            <p>
              Le site contient des liens vers des services tiers (WhatsApp, Google Maps). {company.name} n’est pas
              responsable de leur contenu ni de leur fonctionnement.
            </p>

            <h2>Données personnelles</h2>
            <p>
              Le traitement des données collectées via le formulaire de devis est décrit dans notre{' '}
              <Link href="/confidentialite">politique de confidentialité</Link>.
            </p>

            <h2>Droit applicable</h2>
            <p>
              Le présent site et ses mentions légales sont soumis au droit marocain. En cas de litige, les tribunaux
              de Casablanca sont seuls compétents.
            </p>

            <p className="legal-updated">Dernière mise à jour : {lastUpdated}.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
