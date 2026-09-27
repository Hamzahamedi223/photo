import { useCallback, useEffect, useState } from 'react'
import Reveal from './Reveal'
import { ArrowIcon, CloseIcon } from './Icons'

const photos = Array.from({ length: 9 }, (_, i) => ({
  src: `/images/gallery-${i + 1}.jpg`,
  alt: `Example of our work ${i + 1}`,
}))

export default function Gallery() {
  const [active, setActive] = useState(null)

  const close = useCallback(() => setActive(null), [])
  const step = useCallback(
    (d) => setActive((i) => (i === null ? i : (i + d + photos.length) % photos.length)),
    [],
  )

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active, close, step])

  return (
    <section id="gallery" className="bg-cream-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Gallery</p>
          <h2 className="mt-4 text-4xl font-medium sm:text-5xl">A few things we've made</h2>
          <p className="mt-5 text-lg text-ink-500">Tap any photo to see it larger.</p>
        </Reveal>

        <div className="mt-14 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
          {photos.map((p, i) => (
            <Reveal key={p.src} delay={(i % 3) * 80} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group block w-full overflow-hidden rounded-3xl shadow-soft"
                aria-label={`Open ${p.alt}`}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-105"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-900/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <img
            src={photos[active].src}
            alt={photos[active].alt}
            className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-lift"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-5 right-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 hover:bg-cream-50/20"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(-1) }}
            aria-label="Previous photo"
            className="absolute left-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 hover:bg-cream-50/20 sm:left-6"
          >
            <ArrowIcon className="h-5 w-5 rotate-180" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(1) }}
            aria-label="Next photo"
            className="absolute right-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 hover:bg-cream-50/20 sm:right-6"
          >
            <ArrowIcon className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  )
}
