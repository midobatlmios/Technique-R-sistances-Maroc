'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'
import Link from 'next/link'
import { AlertCircle, ArrowRight, CheckCircle2, Loader2, Paperclip } from 'lucide-react'
import { contact } from '@/lib/contact'
import { machineTypes, productFamilies } from '@/lib/catalogue'

const MAX_FILE_BYTES = 4 * 1024 * 1024

type Sent = { reference: string; summary: string; name: string }

export function QuoteForm({ defaultProduct = '' }: { defaultProduct?: string }) {
  const [sent, setSent] = useState<Sent | null>(null)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [fileName, setFileName] = useState('')
  const startedAt = useRef(0)

  useEffect(() => {
    startedAt.current = Date.now()
  }, [sent])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (sending) return
    setError('')

    const data = new FormData(event.currentTarget)
    const get = (key: string) => String(data.get(key) ?? '').trim()

    const file = data.get('fichier')
    if (file instanceof File && file.size > MAX_FILE_BYTES) {
      setError('Le fichier joint dépasse 4 Mo. Merci de joindre un fichier plus léger.')
      return
    }
    data.set('started_at', String(startedAt.current))

    setSending(true)
    try {
      const res = await fetch('/api/devis', { method: 'POST', body: data })
      const result = (await res.json().catch(() => ({}))) as { ok?: boolean; reference?: string; message?: string }
      if (!res.ok || !result.ok || !result.reference) {
        setError(result.message || 'L’envoi a échoué. Merci de réessayer ou de nous contacter par téléphone ou WhatsApp.')
        return
      }

      const lines = [
        `Demande de devis ${result.reference}`,
        `Nom : ${get('nom')}${get('entreprise') ? ` (${get('entreprise')})` : ''}`,
        `Produit : ${get('besoin') || 'non précisé'}`,
        get('dimensions') && `Dimensions : ${get('dimensions')}`,
        get('tension') && `Tension : ${get('tension')}`,
        get('puissance') && `Puissance : ${get('puissance')}`,
        get('quantite') && `Quantité : ${get('quantite')}`,
        get('message') && `Projet : ${get('message')}`,
      ].filter(Boolean)
      setSent({ reference: result.reference, summary: lines.join('\n'), name: get('nom').split(' ')[0] })
    } catch {
      setError('Connexion impossible. Vérifiez votre réseau ou contactez-nous par téléphone ou WhatsApp.')
    } finally {
      setSending(false)
    }
  }

  if (sent) {
    const whatsappHref = `${contact.whatsappHref.split('?')[0]}?text=${encodeURIComponent(sent.summary)}`
    return (
      <div className="quote-form quote-sent" role="status">
        <CheckCircle2 size={38} strokeWidth={1.6} />
        <strong>Merci{sent.name ? ` ${sent.name}` : ''}, votre demande a bien été envoyée.</strong>
        <p>
          Référence <b>{sent.reference}</b>. Notre équipe étudie votre besoin et revient vers vous
          sous 48h ouvrées.
        </p>
        <p>Besoin d’une réponse plus rapide ? Écrivez-nous aussi sur WhatsApp :</p>
        <div className="quote-sent-actions">
          <a className="btn btn-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer">
            Envoyer sur WhatsApp <ArrowRight size={16} />
          </a>
          <button type="button" className="text-button" onClick={() => { setSent(null); setFileName('') }}>
            Nouvelle demande
          </button>
        </div>
      </div>
    )
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit} aria-busy={sending}>
      <div className="form-heading">
        <strong>Demande de devis</strong>
        <span>Réponse sous 48h ouvrées</span>
      </div>
      <div className="form-row">
        <label>Votre nom *<input name="nom" placeholder="Nom et prénom" autoComplete="name" maxLength={120} required /></label>
        <label>Entreprise<input name="entreprise" placeholder="Nom de l’entreprise" autoComplete="organization" maxLength={120} /></label>
      </div>
      <div className="form-row">
        <label>Email professionnel *<input type="email" name="email" placeholder="vous@entreprise.ma" autoComplete="email" maxLength={160} required /></label>
        <label>Téléphone *<input type="tel" name="telephone" placeholder="06 00 00 00 00" autoComplete="tel" maxLength={40} required /></label>
      </div>
      <label>
        Type de produit
        <select name="besoin" defaultValue={defaultProduct}>
          <option value="" disabled>Sélectionner un produit ou une machine</option>
          <optgroup label="Résistances et articles chauffants">
            {productFamilies.map(({ title }) => <option key={title}>{title}</option>)}
          </optgroup>
          <optgroup label="Machines et équipements">
            {machineTypes.map((type) => <option key={type}>{type}</option>)}
          </optgroup>
          <option>Autre besoin / je ne sais pas</option>
        </select>
      </label>
      <div className="form-row form-row-4">
        <label>Dimensions<input name="dimensions" placeholder="Ø, longueur…" maxLength={160} /></label>
        <label>Tension<input name="tension" placeholder="230 V, 400 V…" maxLength={60} /></label>
        <label>Puissance<input name="puissance" placeholder="kW / W" maxLength={60} /></label>
        <label>Quantité<input name="quantite" type="number" min={1} placeholder="1" /></label>
      </div>
      <label>
        Décrivez votre projet *
        <textarea name="message" placeholder="Application, fluide ou matière à chauffer, température visée…" rows={4} maxLength={4000} required />
      </label>
      <label className="file-input">
        <Paperclip size={15} />
        <span>{fileName || 'Joindre un plan ou une photo (PDF, JPG, PNG · 4 Mo max)'}</span>
        <input
          type="file"
          name="fichier"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={(event) => setFileName(event.target.files?.[0]?.name ?? '')}
        />
      </label>
      {/* Honeypot: hidden from people, filled in by spam bots. */}
      <div className="hp-field" aria-hidden="true">
        <label>Site web<input name="site_web" tabIndex={-1} autoComplete="off" /></label>
      </div>
      {error && (
        <p className="form-error" role="alert">
          <AlertCircle size={18} /> {error}
        </p>
      )}
      <button className="btn btn-red submit" type="submit" disabled={sending}>
        {sending ? (<>Envoi en cours <Loader2 size={16} className="spin" /></>) : (<>Envoyer ma demande <ArrowRight size={16} /></>)}
      </button>
      <small className="form-note">
        Vos informations sont utilisées uniquement pour répondre à votre demande. Voir notre{' '}
        <Link href="/confidentialite">politique de confidentialité</Link>.
      </small>
    </form>
  )
}
