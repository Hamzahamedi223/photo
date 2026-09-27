import { useLang } from '../i18n'
import Reveal from './Reveal'

export default function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <section id="about" className="grain relative overflow-hidden bg-blush-50 py-24 lg:py-32">
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <img
            src="/images/about.jpg"
            alt={a.alt}
            loading="lazy"
            className="aspect-[5/4] w-full rounded-4xl object-cover shadow-lift"
          />
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow">{a.eyebrow}</p>
          <h2 className="mt-4 text-4xl font-medium sm:text-5xl">{a.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-500">{a.p1}</p>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">{a.p2}</p>
          <p className="mt-8 font-display text-2xl text-rose-600 italic">{a.sign}</p>
        </Reveal>
      </div>
    </section>
  )
}
