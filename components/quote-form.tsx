'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2, Paperclip } from 'lucide-react'
import { contact } from '@/lib/contact'
import { machineTypes, productFamilies } from '@/lib/catalogue'

type Sent = { reference: string; summary: string; name: string }

export function QuoteForm({ defaultProduct = '' }: { defaultProduct?: string }) {
  const [sent, setSent] = useState<Sent | null>(null)
  const [fileName, setFileName] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const get = (key: string) => String(data.get(key) ?? '').trim()

    // Démo : aucune donnée n'est envoyée. Brancher ici l'envoi réel (email / API) avant la mise en ligne.
    const reference = `TRM-${Date.now().toString().slice(-6)}`
    const lines = [
      `Demande de devis ${reference}`,
      `Nom : ${get('nom')}${get('entreprise') ? ` (${get('entreprise')})` : ''}`,
      `Produit : ${get('besoin') || 'non précisé'}`,
      get('dimensions') && `Dimensions : ${get('dimensions')}`,
      get('tension') && `Tension : ${get('tension')}`,
      get('puissance') && `Puissance : ${get('puissance')}`,
      get('quantite') && `Quantité : ${get('quantite')}`,
      get('message') && `Projet : ${get('message')}`,
    ].filter(Boolean)

    setSent({ reference, summary: lines.join('\n'), name: get('nom').split(' ')[0] })
  }

  if (sent) {
    const whatsappHref = `${contact.whatsappHref.split('?')[0]}?text=${encodeURIComponent(sent.summary)}`
    return (
      <div className="quote-form quote-sent" role="status">
        <CheckCircle2 size={38} strokeWidth={1.6} />
        <strong>Merci{sent.name ? ` ${sent.name}` : ''}, votre demande est bien reçue.</strong>
        <p>
          Référence <b>{sent.reference}</b>. Notre équipe étudie votre besoin et revient vers vous
          sous 48h ouvrées.
        </p>
        <p>Pour aller plus vite, envoyez aussi votre demande sur WhatsApp :</p>
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
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <strong>Demande de devis</strong>
        <span>Réponse sous 48h ouvrées</span>
      </div>
      <div className="form-row">
        <label>Votre nom *<input name="nom" placeholder="Nom et prénom" autoComplete="name" required /></label>
        <label>Entreprise<input name="entreprise" placeholder="Nom de l’entreprise" autoComplete="organization" /></label>
      </div>
      <div className="form-row">
        <label>Email professionnel *<input type="email" name="email" placeholder="vous@entreprise.ma" autoComplete="email" required /></label>
        <label>Téléphone *<input type="tel" name="telephone" placeholder="06 00 00 00 00" autoComplete="tel" required /></label>
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
        <label>Dimensions<input name="dimensions" placeholder="Ø, longueur…" /></label>
        <label>Tension<input name="tension" placeholder="230 V, 400 V…" /></label>
        <label>Puissance<input name="puissance" placeholder="kW / W" /></label>
        <label>Quantité<input name="quantite" type="number" min={1} placeholder="1" /></label>
      </div>
      <label>
        Décrivez votre projet *
        <textarea name="message" placeholder="Application, fluide ou matière à chauffer, température visée…" rows={4} required />
      </label>
      <label className="file-input">
        <Paperclip size={15} />
        <span>{fileName || 'Joindre un plan ou une photo (PDF, JPG, PNG)'}</span>
        <input
          type="file"
          name="fichier"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={(event) => setFileName(event.target.files?.[0]?.name ?? '')}
        />
      </label>
      <button className="btn btn-red submit" type="submit">Envoyer ma demande <ArrowRight size={16} /></button>
      <small className="form-note">Vos informations sont utilisées uniquement pour répondre à votre demande.</small>
    </form>
  )
}
