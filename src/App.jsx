import { whatsappLink } from './config'
import { useLang } from './i18n'
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
  const { t } = useLang()

  return (
    <div id="top">
      <Navbar />
      <main>
        <Hero />
        <Services />

        <Feature
          id="printing"
          {...t.printing}
          mainImg="/images/printing-main.jpg"
          detailImg="/images/printing-detail.jpg"
          message={t.wa.orderPrints}
        />

        <Albums />

        <Feature
          id="cards"
          {...t.cards}
          mainImg="/images/cards-main.jpg"
          detailImg="/images/cards-detail.jpg"
          message={t.wa.cards}
        />

        <HowItWorks />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />

      {/* Floating WhatsApp button */}
      <a
        href={whatsappLink(t.wa.hello)}
        target="_blank"
        rel="noreferrer"
        aria-label={t.wa.chat}
        className="fixed end-5 bottom-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lift transition hover:scale-105"
        style={{ marginBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  )
}
