import { useLang } from '../i18n'
import Reveal from './Reveal'
import { AlbumIcon, ArrowIcon, CardIcon, PrintIcon } from './Icons'

const services = [
  { id: 'printing', icon: PrintIcon, img: '/images/service-printing.jpg' },
  { id: 'albums', icon: AlbumIcon, img: '/images/service-albums.jpg' },
  { id: 'cards', icon: CardIcon, img: '/images/service-cards.jpg' },
]

export default function Services() {
  const { t } = useLang()
  const s = t.services

  return (
    <section id="services" className="bg-cream-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{s.eyebrow}</p>
          <h2 className="mt-4 text-4xl font-medium sm:text-5xl">{s.title}</h2>
          <p className="mt-5 text-lg text-ink-500">{s.text}</p>
        </Reveal>

        <div className="mt-16 grid gap-7 md:grid-cols-3">
          {services.map((item, i) => (
            <Reveal
              key={item.id}
              as="a"
              href={`#${item.id}`}
              delay={i * 110}
              className="group flex flex-col overflow-hidden rounded-4xl bg-cream-100 shadow-soft transition-shadow duration-300 hover:shadow-lift"
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt=""
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-blush-100 text-rose-600">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-2xl font-medium">{s.items[item.id].title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink-500">{s.items[item.id].text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-rose-600">
                  {s.more}
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
