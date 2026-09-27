import Feature from './Feature'
import Reveal from './Reveal'

const themes = [
  { name: 'Wedding', img: '/images/album-wedding.jpg' },
  { name: 'Baby', img: '/images/album-baby.jpg' },
  { name: 'Family', img: '/images/album-family.jpg' },
  { name: 'Travel', img: '/images/album-travel.jpg' },
  { name: 'Birthday', img: '/images/album-birthday.jpg' },
  { name: 'Occasions', img: '/images/album-occasions.jpg' },
]

export default function Albums() {
  return (
    <>
      <Feature
        id="albums"
        tint="bg-blush-50"
        reverse
        eyebrow="Photo albums"
        title="Handmade albums for the stories you tell twice"
        text="Choose your photos and we'll design, print and bind an album that feels as special as the day itself. Every album is assembled by hand in our studio."
        points={[
          'Custom layout designed with you',
          'Hardcover, linen and leather-look covers',
          'Thick lay-flat pages that last for years',
          'Personalised cover text or names',
        ]}
        mainImg="/images/albums-main.jpg"
        mainAlt="A handmade photo album open on a table"
        cta="Start your album"
        message="Hello Memory Print! I'd like to create a photo album."
      />

      <section className="bg-blush-50 pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <h3 className="text-center text-2xl font-medium sm:text-3xl">An album for every moment</h3>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {themes.map((t, i) => (
              <Reveal
                key={t.name}
                delay={i * 70}
                className="group relative overflow-hidden rounded-3xl shadow-soft"
              >
                <img
                  src={t.img}
                  alt={`${t.name} photo album`}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/0 to-transparent" />
                <span className="absolute bottom-4 left-4 font-display text-lg text-cream-50">
                  {t.name}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
