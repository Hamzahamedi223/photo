import Reveal from './Reveal'
import { BagIcon, SparkIcon, UploadIcon } from './Icons'

const steps = [
  {
    icon: UploadIcon,
    title: 'Send your photos',
    text: 'Share your photos with us on WhatsApp, by email, or bring them to the studio on a USB drive or phone.',
  },
  {
    icon: SparkIcon,
    title: 'We print with care',
    text: 'We check every image, adjust colours where needed and print on premium paper or build your album.',
  },
  {
    icon: BagIcon,
    title: 'Pick up your prints',
    text: 'We let you know as soon as your order is ready — beautifully packed and ready to take home.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-ink-900 py-24 text-cream-100 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow !text-rose-300">How it works</p>
          <h2 className="mt-4 text-4xl font-medium !text-cream-50 sm:text-5xl">
            From your phone to your hands
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 120} className="relative text-center md:text-left">
              <div className="flex items-center justify-center gap-4 md:justify-start">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-rose-500/15 text-rose-300 ring-1 ring-rose-400/30">
                  <s.icon className="h-6 w-6" />
                </span>
                <span className="font-display text-5xl text-cream-50/15">0{i + 1}</span>
              </div>
              <h3 className="mt-6 text-2xl font-medium !text-cream-50">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-cream-200/70">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
