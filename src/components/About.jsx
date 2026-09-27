import { site } from '../config'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="grain relative overflow-hidden bg-blush-50 py-24 lg:py-32">
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <img
            src="/images/about.jpg"
            alt="Inside the Memory Print studio"
            loading="lazy"
            className="aspect-[5/4] w-full rounded-4xl object-cover shadow-lift"
          />
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow">About us</p>
          <h2 className="mt-4 text-4xl font-medium sm:text-5xl">
            A small studio with a big love for printed photos
          </h2>
          <p className="mt-6text-lg leading-relaxed text-ink-500">
            Our phones are full of photos we never look at again. At {site.name}, we believe the
            best moments deserve to be held, framed, shared and passed on.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">
            We're a local studio, so every order is handled by real people who care about colour,
            paper and finish — and who are happy to help you choose.
          </p>
          <p className="mt-8 font-display text-2xl text-rose-600 italic">— The {site.name} team</p>
        </Reveal>
      </div>
    </section>
  )
}
