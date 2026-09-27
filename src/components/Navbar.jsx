import { useEffect, useState } from 'react'
import { site, whatsappLink } from '../config'
import { languages, useLang } from '../i18n'
import { CloseIcon, MenuIcon, WhatsAppIcon } from './Icons'

const sections = ['services', 'printing', 'albums', 'cards', 'gallery', 'contact']

export default function Navbar() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-cream-100/90 shadow-[0_1px_0_rgb(105_70_60/0.08)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src="/logo-mark.svg" alt="" className="h-9 w-9" />
          <span className="font-display text-xl font-semibold tracking-tight text-ink-900">
            {site.name}
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="text-sm font-medium text-ink-700 transition-colors hover:text-rose-600"
              >
                {t.nav[id]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <a
            href={whatsappLink(t.wa.orderPrints)}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-sm font-medium text-cream-50 transition hover:bg-rose-600 sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {t.nav.order}
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-900 hover:bg-blush-100 lg:hidden"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-blush-100 bg-cream-100 px-5 pb-10 lg:hidden">
          <ul className="flex flex-col py-4">
            {sections.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="block border-b border-blush-100 py-4 font-display text-2xl text-ink-900"
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink(t.wa.orderPrints)}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-ink-900 px-5 py-3.5 font-medium text-cream-50"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {t.nav.orderWhatsapp}
          </a>
        </div>
      )}
    </header>
  )
}

function LanguageSwitcher() {
  const { lang, setLang, t } = useLang()

  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className="inline-flex rounded-full bg-ink-900/5 p-1 text-sm font-medium"
    >
      {languages.map((l) => (
        <button
          key={l.code}
          type="button"
          lang={l.code}
          title={l.name}
          aria-pressed={lang === l.code}
          onClick={() => setLang(l.code)}
          className={`rounded-full px-3 py-1.5 transition ${
            lang === l.code
              ? 'bg-cream-50 text-ink-900 shadow-soft'
              : 'text-ink-500 hover:text-ink-900'
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}
