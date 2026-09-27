import { site, whatsappLink } from './config'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Feature from './components/Feature'
import Albums from './components/Albums'
import HowItWorks from './components/HowItWorks'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { WhatsAppIcon } from './components/Icons'

export default function App() {
  return (
    <div id="top">
      <Navbar />
      <main>
        <Hero />
        <Services />

        <Feature
          id="printing"
          eyebrow="Photo printing"
          title="Prints that look as good as the moment felt"
          text="From a handful of snapshots to hundreds of holiday photos, we print on professional photo paper with rich colour and sharp detail."
          points={[
            'Popular sizes from 10×15 cm to large posters',
            'Glossy, matte or silk finishes',
            'Colour-checked by hand before printing',
            'Bulk orders welcome',
          ]}
          mainImg="/images/printing-main.jpg"
          detailImg="/images/printing-detail.jpg"
          mainAlt="Freshly printed photos laid out on a table"
          detailAlt="Close-up of a photo print"
          cta="Order prints"
          message={`Hello ${site.name}! I'd like to order photo prints.`}
        />

        <Albums />

        <Feature
          id="cards"
          eyebrow="Business cards"
          title="Business cards that make an impression"
          text="Bring your own design or let us help you create one. We print crisp, professional cards that feel great in the hand."
          points={[
            'Design help available',
            'Premium thick card stock',
            'Matte, gloss and soft-touch finishes',
            'Small and large quantities',
          ]}
          mainImg="/images/cards-main.jpg"
          detailImg="/images/cards-detail.jpg"
          mainAlt="A stack of printed business cards"
          detailAlt="Close-up of a business card finish"
          cta="Order business cards"
          message={`Hello ${site.name}! I'd like to order business cards.`}
        />

        <HowItWorks />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />

      {/* Floating WhatsApp button */}
      <a
        href={whatsappLink(`Hello ${site.name}!`)}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed right-5 bottom-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lift transition hover:scale-105"
        style={{ marginBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  )
}
