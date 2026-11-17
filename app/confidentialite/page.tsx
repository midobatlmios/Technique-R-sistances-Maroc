import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteFooter, SiteHeader } from '@/components/site-shell'
import { PageHeader } from '@/components/blocks'
import { LegalField } from '@/components/legal-field'
import { contact } from '@/lib/contact'
import { company, host, lastUpdated } from '@/lib/legal'
import { photos } from '@/lib/catalogue'

export const metadata: Metadata = {
  title: 'Politique de confidentialité | Technique Résistances Maroc',
  description:
    'Comment Technique Résistances Maroc utilise et protège les données envoyées via le formulaire de devis, conformément à la loi 09-08.',
}

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          crumb="Confidentialité"
          title="Politique de"
          accent="confidentialité"
          description="Comment nous utilisons et protégeons les informations que vous nous transmettez."
          image={photos.pipes}
        />
        <section className="section">
          <div className="container legal-content">
            <p className="legal-intro">
              {company.name} attache une grande importance à la protection de vos données personnelles. Cette
              politique explique quelles données nous collectons, pourquoi, et quels sont vos droits, conformément
              à la loi n° 09-08 relative à la protection des personnes physiques à l’égard du traitement des données
              à caractère personnel.
            </p>

            <h2>Responsable du traitement</h2>
            <p>
              {company.name}, {company.address}. Contact :{' '}
              <a href={`mailto:${contact.email}`}>{contact.email}</a> · <a href={contact.phoneHref}>{contact.phoneDisplay}</a>.
            </p>

            <h2>Données collectées</h2>
            <p>Lorsque vous utilisez le formulaire de demande de devis, nous recevons :</p>
            <ul>
              <li>votre nom, le nom de votre entreprise, votre email et votre téléphone ;</li>
              <li>les informations sur votre besoin (produit, dimensions, tension, puissance, quantité, description) ;</li>
              <li>le fichier que vous joignez éventuellement (plan ou photo).</li>
            </ul>
            <p>
              Nous recevons également les informations que vous nous transmettez directement par téléphone, email ou
              WhatsApp.
            </p>

            <h2>Pourquoi nous utilisons ces données</h2>
            <ul>
              <li>étudier votre demande et vous adresser un devis ;</li>
              <li>vous recontacter au sujet de votre projet ;</li>
              <li>assurer le suivi commercial de nos échanges.</li>
            </ul>
            <p>
              Ces traitements reposent sur votre consentement, exprimé en envoyant le formulaire, et sur les mesures
              précontractuelles prises à votre demande. Vos données ne sont jamais vendues ni utilisées à des fins
              publicitaires.
            </p>

            <h2>Qui a accès à vos données</h2>
            <p>
              Vos données sont destinées uniquement aux équipes de {company.name}. Pour faire fonctionner le site, nous
              faisons appel à des prestataires techniques qui n’utilisent pas vos données pour leur propre compte :
            </p>
            <ul>
              <li>{host.name}, pour l’hébergement du site ;</li>
              <li>Resend, pour l’acheminement des emails générés par le formulaire.</li>
            </ul>
            <p>
              Ces prestataires peuvent traiter les données sur des serveurs situés hors du Maroc, notamment aux
              États-Unis, avec des garanties de sécurité adaptées.
            </p>

            <h2>Durée de conservation</h2>
            <p>
              Vos données sont conservées le temps nécessaire au traitement de votre demande et au suivi de notre
              relation commerciale, et au maximum 3 ans après notre dernier échange, sauf obligation légale de
              conservation plus longue (par exemple pour les documents comptables).
            </p>

            <h2>Vos droits</h2>
            <p>
              Conformément à la loi 09-08, vous disposez d’un droit d’accès, de rectification et d’opposition au
              traitement de vos données. Pour l’exercer, écrivez-nous à{' '}
              <a href={`mailto:${contact.email}`}>{contact.email}</a> en précisant votre demande.
            </p>
            <p>
              Vous pouvez également adresser une réclamation à la Commission Nationale de contrôle de la protection
              des Données à caractère Personnel (CNDP) :{' '}
              <a href="https://www.cndp.ma" target="_blank" rel="noreferrer">www.cndp.ma</a>.
            </p>
            <p>
              Déclaration auprès de la CNDP : <LegalField value={company.cndp} />.
            </p>

            <h2>Cookies et mesure d’audience</h2>
            <p>
              Ce site n’utilise pas de cookies publicitaires. Une mesure d’audience anonyme peut être utilisée pour
              connaître la fréquentation des pages, sans identifier les visiteurs.
            </p>
            <p>
              Les liens WhatsApp et Google Maps vous redirigent vers des services tiers, soumis à leurs propres
              politiques de confidentialité.
            </p>
            <p>
              Les pages d’accueil et de contact affichent une carte Google Maps intégrée. Lors de son chargement,
              Google peut collecter des données techniques (adresse IP, cookies) selon sa propre politique de
              confidentialité.
            </p>

            <h2>Sécurité</h2>
            <p>
              Le site est accessible en connexion sécurisée (HTTPS) et l’accès aux demandes reçues est limité aux
              personnes chargées de les traiter.
            </p>

            <p className="legal-updated">
              Dernière mise à jour : {lastUpdated}. Voir aussi nos <Link href="/mentions-legales">mentions légales</Link>.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
