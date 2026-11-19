'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react'
import { ProductArt, type ArtKey } from '@/components/product-art'
import type { ProductPhoto } from '@/lib/product-photos'

// Product page gallery: the photos (one per angle) plus the technical drawing as the last
// slide. Swipeable track with a counter on phones, thumbnails on larger screens, and a
// full-screen viewer for the photos.
export function ProductGallery({ photos, art, title }: { photos: ProductPhoto[]; art: ArtKey; title: string }) {
  const track = useRef<HTMLDivElement>(null)
  const dialog = useRef<HTMLDialogElement>(null)
  const [active, setActive] = useState(0)
  const [zoomed, setZoomed] = useState(0)
  const total = photos.length + 1 // + the drawing

  const goTo = useCallback((index: number) => {
    const el = track.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setActive(index)
    el.scrollTo({ left: index * el.clientWidth, behavior: reduce ? 'auto' : 'smooth' })
  }, [])

  // The track is the source of truth: swiping or clicking a thumbnail both end up here.
  useEffect(() => {
    const el = track.current
    if (!el) return
    const onScroll = () => setActive(Math.round(el.scrollLeft / el.clientWidth))
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const openViewer = (index: number) => {
    setZoomed(index)
    dialog.current?.showModal()
  }
  const step = (delta: number) => setZoomed((i) => (i + delta + photos.length) % photos.length)

  const onTrackKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); goTo(Math.min(active + 1, total - 1)) }
    if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(Math.max(active - 1, 0)) }
  }

  return (
    <div className="gallery">
      <div className="gallery-stage">
        <div
          className="gallery-track"
          ref={track}
          tabIndex={0}
          role="region"
          aria-roledescription="carrousel"
          aria-label={`Photos : ${title}`}
          onKeyDown={onTrackKey}
        >
          {photos.map((p, i) => (
            <button
              type="button"
              className="gallery-slide"
              key={p.src}
              onClick={() => openViewer(i)}
              aria-label={`Agrandir : ${p.alt}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 900px) 100vw, 560px"
                preload={i === 0}
                className="gallery-img"
              />
              <span className="gallery-expand" aria-hidden="true"><Expand size={18} /></span>
            </button>
          ))}
          <div className="gallery-slide gallery-drawing">
            <ProductArt name={art} />
            <span className="gallery-drawing-note">Schéma · cotes selon votre plan</span>
          </div>
        </div>
        <span className="gallery-count" aria-live="polite">{active + 1} / {total}</span>
      </div>

      <div className="gallery-thumbs" role="group" aria-label="Choisir une vue">
        {photos.map((p, i) => (
          <button
            type="button"
            key={p.src}
            className="gallery-thumb"
            aria-current={active === i}
            aria-label={`Vue ${i + 1} : ${p.alt}`}
            onClick={() => goTo(i)}
          >
            <Image src={p.src} alt="" fill sizes="120px" className="gallery-img" />
          </button>
        ))}
        <button
          type="button"
          className="gallery-thumb gallery-thumb-drawing"
          aria-current={active === photos.length}
          aria-label="Voir le schéma"
          onClick={() => goTo(photos.length)}
        >
          <ProductArt name={art} />
          <span>Schéma</span>
        </button>
      </div>

      <dialog
        ref={dialog}
        className="viewer"
        aria-label={`Photos agrandies : ${title}`}
        onClick={(e) => { if (e.target === e.currentTarget) dialog.current?.close() }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') step(1)
          if (e.key === 'ArrowLeft') step(-1)
        }}
      >
        {photos[zoomed] && (
          <figure className="viewer-figure">
            <div className="viewer-img">
              <Image src={photos[zoomed].src} alt={photos[zoomed].alt} fill sizes="100vw" loading="eager" />
            </div>
            <figcaption>
              <span>{photos[zoomed].alt}</span>
              <span className="viewer-count">{zoomed + 1} / {photos.length}</span>
            </figcaption>
          </figure>
        )}
        <button type="button" className="viewer-btn viewer-close" aria-label="Fermer" onClick={() => dialog.current?.close()}>
          <X size={22} />
        </button>
        {photos.length > 1 && (
          <>
            <button type="button" className="viewer-btn viewer-prev" aria-label="Photo précédente" onClick={() => step(-1)}>
              <ChevronLeft size={26} />
            </button>
            <button type="button" className="viewer-btn viewer-next" aria-label="Photo suivante" onClick={() => step(1)}>
              <ChevronRight size={26} />
            </button>
          </>
        )}
      </dialog>
    </div>
  )
}
