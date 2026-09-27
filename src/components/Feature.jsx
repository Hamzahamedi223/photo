import { whatsappLink } from '../config'
import Reveal from './Reveal'
import { CheckIcon, WhatsAppIcon } from './Icons'

// A two-column service section: overlapping photos on one side, details on the other.
export default function Feature({
  id,
  eyebrow,
  title,
  text,
  points,
  mainImg,
  detailImg,
  mainAlt,
  detailAlt,
  cta,
  message,
  reverse = false,
  tint = 'bg-cream-100',
  children,
}) {
  return (
    <section id={id} className={`${tint} py-24 lg:py-32`}>
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className={`relative ${reverse ? 'lg:order-2' : ''}`}>
          <img
            src={mainImg}
            alt={mainAlt}
            loading="lazy"
            className="aspect-[4/5] w-[85%] rounded-4xl object-cover shadow-lift"
          />
          {detailImg && (
            <img
              src={detailImg}
              alt={detailAlt}
              loading="lazy"
              className="absolute right-0 -bottom-8 aspect-square w-[45%] rounded-3xl border-8 border-cream-50 object-cover shadow-lift"
            />
          )}
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-4 text-4xl font-medium sm:text-5xl">{title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-500">{text}</p>

          <ul className="mt-8 space-y-3.5">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-ink-700">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blush-100 text-rose-600">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                {p}
              </li>
            ))}
          </ul>

          {children}

          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-ink-900 px-7 py-4 font-medium text-cream-50 shadow-soft transition hover:-translate-y-0.5 hover:bg-rose-600"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {cta}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
