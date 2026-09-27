import { useCallback, useEffect, useState } from 'react'
import { useLang } from '../i18n'
import Reveal from './Reveal'
import { ArrowIcon, CloseIcon } from './Icons'

const photos = Array.from({ length: 9 }, (_, i) => `/images/gallery-${i + 1}.jpg`)

export default function Gallery() {
  const { lang, t } = useLang()
  const g = t.gallery
  const [active, setActive] = useState(null)

  const close = useCallback(() => setActive(null), [])
  const step = useCallback(
    (d) => setActive((i) => (i === null ? i : (i + d + photos.length) % photos.length)),
    [],
  )

  useEffect(() => {
    if (active === null) return
    // In right-to-left mode, "next" sits on the left.
    const forward = lang === 'ar' ? 'ArrowLeft' : 'ArrowRight'
    const back = lang === 'ar' ? 'ArrowRight' : 'ArrowLeft'
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === forward) step(1)
      if (e.key === back) step(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active, close, step, lang])

  return (
    <section id="gallery" className="bg-cream-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{g.eyebrow}</p>
          <h2 className="mt-4 text-4xl font-medium sm:text-5xl">{g.title}</h2>
          <p className="mt-5 text-lg text-ink-500">{g.text}</p>
        </Reveal>

        <div className="mt-14 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
          {photos.map((src, i) => (
            <Reveal key={src} delay={(i % 3) * 80} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group block w-full overflow-hidden rounded-3xl shadow-soft"
                aria-label={g.open(g.alt(i + 1))}
              >
                <img
                  src={src}
                  alt={g.alt(i + 1)}
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
            src={photos[active]}
            alt={g.alt(active + 1)}
            className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-lift"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            onClick={close}
            aria-label={g.close}
            className="absolute end-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 hover:bg-cream-50/20"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(-1) }}
            aria-label={g.prev}
            className="absolute start-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 hover:bg-cream-50/20 sm:start-6"
          >
            <ArrowIcon className="h-5 w-5 rotate-180 rtl:rotate-0" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(1) }}
            aria-label={g.next}
            className="absolute end-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 hover:bg-cream-50/20 sm:end-6"
          >
            <ArrowIcon className="h-5 w-5 rtl:rotate-180" />
          </button>
        </div>
      )}
    </section>
  )
}
