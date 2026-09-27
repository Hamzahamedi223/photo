import { useEffect, useState } from 'react'
import { site, whatsappLink } from '../config'
import { CloseIcon, MenuIcon, WhatsAppIcon } from './Icons'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#printing', label: 'Printing' },
  { href: '#albums', label: 'Albums' },
  { href: '#cards', label: 'Business Cards' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
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
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-ink-700 transition-colors hover:text-rose-600"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink(`Hello ${site.name}! I'd like to order some prints.`)}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-sm font-medium text-cream-50 transition hover:bg-rose-600 sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Order now
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-900 hover:bg-blush-100 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
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
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-blush-100 py-4 font-display text-2xl text-ink-900"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink(`Hello ${site.name}! I'd like to order some prints.`)}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-ink-900 px-5 py-3.5 font-medium text-cream-50"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Order on WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}
