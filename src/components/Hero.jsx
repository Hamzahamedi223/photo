import { whatsappLink } from '../config'
import { useLang } from '../i18n'
import { ArrowIcon, WhatsAppIcon } from './Icons'

export default function Hero() {
  const { t } = useLang()
  const h = t.hero

  return (
    <section className="grain relative overflow-hidden">
      {/* soft blush glow */}
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-blush-200/60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-12rem] left-[-8rem] h-[28rem] w-[28rem] rounded-full bg-blush-100 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pt-10 pb-20 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:pt-16 lg:pb-28">
        <div className="max-w-xl">
          <p className="eyebrow">{h.eyebrow}</p>
          <h1 className="mt-5 text-5xl leading-[1.05] font-medium sm:text-6xl lg:text-7xl">
            {h.title1}
            <br />
            <span className="text-gradient-rose italic">{h.title2}</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-500">{h.text}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={whatsappLink(t.wa.orderPrints)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-ink-900 px-7 py-4 font-medium text-cream-50 shadow-soft transition hover:-translate-y-0.5 hover:bg-rose-600 hover:shadow-lift"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {h.cta}
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-7 py-4 font-medium text-ink-900 transition hover:border-rose-400 hover:text-rose-600"
            >
              {h.explore}
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-ink-900/10 pt-8">
            {h.stats.map(([a, b]) => (
              <div key={a}>
                <dt className="font-display text-xl text-ink-900">{a}</dt>
                <dd className="mt-1 text-sm text-ink-500">{b}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Stacked prints collage */}
        <div className="relative mx-auto h-[26rem] w-full max-w-lg sm:h-[32rem]">
          <div className="absolute top-2 right-2 w-[62%] rotate-[5deg] rounded-2xl bg-white p-3 pb-10 shadow-lift sm:right-4">
            <img
              src="/images/hero-album.jpg"
              alt={h.albumAlt}
              className="aspect-[4/5] w-full rounded-lg object-cover"
            />
          </div>
          <div className="absolute bottom-2 left-0 w-[64%] -rotate-[4deg] rounded-2xl bg-white p-3 pb-10 shadow-lift">
            <img
              src="/images/hero-prints.jpg"
              alt={h.printsAlt}
              className="aspect-[4/5] w-full rounded-lg object-cover"
            />
            <p className="absolute bottom-3 left-0 w-full text-center font-display text-sm text-ink-500 italic">
              {h.caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
