import { useLang } from '../i18n'
import Feature from './Feature'
import Reveal from './Reveal'

const themes = ['wedding', 'baby', 'family', 'travel', 'birthday', 'occasions']

export default function Albums() {
  const { t } = useLang()
  const a = t.albums

  return (
    <>
      <Feature
        id="albums"
        tint="bg-blush-50"
        reverse
        eyebrow={a.eyebrow}
        title={a.title}
        text={a.text}
        points={a.points}
        mainImg="/images/albums-main.jpg"
        mainAlt={a.mainAlt}
        cta={a.cta}
        message={t.wa.album}
      />

      <section className="bg-blush-50 pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <h3 className="text-center text-2xl font-medium sm:text-3xl">{a.themesTitle}</h3>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {themes.map((id, i) => (
              <Reveal
                key={id}
                delay={i * 70}
                className="group relative overflow-hidden rounded-3xl shadow-soft"
              >
                <img
                  src={`/images/album-${id}.jpg`}
                  alt={a.themeAlt(a.themes[id])}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/0 to-transparent" />
                <span className="absolute start-4 bottom-4 font-display text-lg text-cream-50">
                  {a.themes[id]}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
