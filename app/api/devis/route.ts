// Receives the quote form and emails it to the company through Resend (https://resend.com).
// Env: RESEND_API_KEY, QUOTE_TO_EMAIL, QUOTE_FROM_EMAIL (see .env.example).
// Without RESEND_API_KEY (local demo), the request is validated and logged but no email is sent.

export const runtime = 'nodejs'

const MAX_FILE_BYTES = 4 * 1024 * 1024 // stays under hosting request limits
const ALLOWED_FILE_TYPES = ['application/pdf', 'image/jpeg', 'image/png']
const MIN_FILL_MS = 3000 // humans need more than 3 s to fill the form
const RATE_LIMIT = { max: 8, windowMs: 10 * 60 * 1000 }

// Best-effort, per-instance rate limit (enough to stop basic abuse on a small site).
const hits = new Map<string, number[]>()
function rateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT.windowMs)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > RATE_LIMIT.max
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const fail = (message: string, status = 400) => Response.json({ ok: false, message }, { status })

export async function POST(request: Request) {
  let data: FormData
  try {
    data = await request.formData()
  } catch {
    return fail('Formulaire invalide.')
  }
  const get = (key: string, max = 200) => String(data.get(key) ?? '').trim().slice(0, max)

  // Spam protection: honeypot field + minimum fill time + rate limit.
  if (get('site_web')) return Response.json({ ok: true, reference: 'TRM-000000' }) // silently drop bots
  const startedAt = Number(get('started_at'))
  if (!startedAt || Date.now() - startedAt < MIN_FILL_MS) return fail('Merci de réessayer dans quelques secondes.')
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local'
  if (rateLimited(ip)) return fail('Trop de demandes envoyées. Merci de nous appeler directement.', 429)

  const fields = {
    nom: get('nom', 120),
    entreprise: get('entreprise', 120),
    email: get('email', 160),
    telephone: get('telephone', 40),
    besoin: get('besoin', 120),
    dimensions: get('dimensions', 160),
    tension: get('tension', 60),
    puissance: get('puissance', 60),
    quantite: get('quantite', 20),
    message: get('message', 4000),
  }

  if (!fields.nom || !fields.email || !fields.telephone || !fields.message) {
    return fail('Merci de remplir les champs obligatoires.')
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) return fail('Adresse email invalide.')

  let attachment: { filename: string; content: string } | undefined
  const file = data.get('fichier')
  if (file instanceof File && file.size > 0) {
    if (file.size > MAX_FILE_BYTES) return fail('Le fichier joint dépasse 4 Mo.')
    if (!ALLOWED_FILE_TYPES.includes(file.type)) return fail('Fichier accepté : PDF, JPG ou PNG.')
    attachment = {
      filename: file.name.replace(/[^\w.\- ]+/g, '_').slice(0, 100),
      content: Buffer.from(await file.arrayBuffer()).toString('base64'),
    }
  }

  const reference = `TRM-${Date.now().toString().slice(-6)}`
  const rows: [string, string][] = [
    ['Nom', fields.nom],
    ['Entreprise', fields.entreprise],
    ['Email', fields.email],
    ['Téléphone', fields.telephone],
    ['Produit', fields.besoin],
    ['Dimensions', fields.dimensions],
    ['Tension', fields.tension],
    ['Puissance', fields.puissance],
    ['Quantité', fields.quantite],
  ]
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:640px;color:#1b1b1b">
      <div style="background:#dc0103;color:#fff;padding:18px 22px;font-size:20px;font-weight:bold">
        Nouvelle demande de devis · ${reference}
      </div>
      <table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:15px">
        ${rows
          .filter(([, v]) => v)
          .map(
            ([k, v]) =>
              `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#6b6b6b;width:140px">${k}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:bold">${esc(v)}</td></tr>`,
          )
          .join('')}
      </table>
      <div style="padding:14px 16px;background:#f4f4f2;font-size:15px;line-height:1.6;white-space:pre-wrap">${esc(fields.message)}</div>
      ${attachment ? `<p style="font-size:14px;color:#6b6b6b">Pièce jointe : ${esc(attachment.filename)}</p>` : ''}
      <p style="font-size:13px;color:#9a9a9a">Répondez directement à cet email pour contacter le client.</p>
    </div>`
  const text = [
    `Nouvelle demande de devis ${reference}`,
    ...rows.filter(([, v]) => v).map(([k, v]) => `${k} : ${v}`),
    '',
    fields.message,
  ].join('\n')

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.info(`[devis] RESEND_API_KEY absent : email non envoyé (mode démo).\n${text}`)
    return Response.json({ ok: true, reference, demo: true })
  }

  const to = process.env.QUOTE_TO_EMAIL
  if (!to) {
    console.error('[devis] QUOTE_TO_EMAIL manquant')
    return fail('Envoi momentanément indisponible. Merci de nous appeler.', 500)
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.QUOTE_FROM_EMAIL || 'Site TRM <onboarding@resend.dev>',
      to: to.split(',').map((s) => s.trim()),
      reply_to: fields.email,
      subject: `Demande de devis ${reference} · ${fields.besoin || 'Produit non précisé'} · ${fields.nom}`,
      html,
      text,
      attachments: attachment ? [attachment] : undefined,
    }),
  })

  if (!res.ok) {
    console.error('[devis] Resend error', res.status, await res.text())
    return fail('L’envoi a échoué. Merci de réessayer ou de nous contacter par téléphone ou WhatsApp.', 502)
  }

  return Response.json({ ok: true, reference })
}
