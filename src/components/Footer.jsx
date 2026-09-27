import { site, whatsappLink } from '../config'
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './Icons'

export default function Footer() {
  const socials = [
    { href: site.instagram, label: 'Instagram', icon: InstagramIcon },
    { href: site.facebook, label: 'Facebook', icon: FacebookIcon },
    { href: whatsappLink(), label: 'WhatsApp', icon: WhatsAppIcon },
  ].filter((s) => s.href)

  return (
    <footer className="bg-ink-900 text-cream-200/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-14 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#top" className="flex items-center gap-2.5">
            <img src="/logo-mark.svg" alt="" className="h-9 w-9" />
            <span className="font-display text-xl font-semibold text-cream-50">{site.name}</span>
          </a>
          <p className="mt-3 font-display text-cream-200/60 italic">{site.tagline}</p>
        </div>

        <nav className="flex flex-wrap gap-x-7 gap-y-3 text-sm">
          {['Services', 'Printing', 'Albums', 'Cards', 'Gallery', 'Contact'].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-cream-50">
              {l}
            </a>
          ))}
        </nav>

        <div className="flex gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream-50/5 text-cream-100 ring-1 ring-cream-50/10 transition hover:bg-rose-500 hover:ring-rose-500"
            >
              <s.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-cream-50/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-cream-200/50 sm:px-8">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
