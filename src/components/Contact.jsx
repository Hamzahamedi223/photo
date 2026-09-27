import { useState } from 'react'
import { site, whatsappLink } from '../config'
import { useLang } from '../i18n'
import Reveal from './Reveal'
import { ClockIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from './Icons'

// There is no server behind this site, so the form builds a ready-to-send
// WhatsApp message with the customer's request instead.
export default function Contact() {
  const { t } = useLang()
  const c = t.contact
  // `service` is an index into c.options so it survives a language switch.
  const [form, setForm] = useState({ name: '', service: 0, message: '' })
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    const text = [
      t.wa.hello,
      form.name && c.myName(form.name),
      c.interested(c.options[form.service]),
      form.message,
    ]
      .filter(Boolean)
      .join('\n')
    window.open(whatsappLink(text), '_blank', 'noopener')
  }

  const field =
    'mt-2 w-full rounded-2xl border border-ink-900/10 bg-cream-50 px-4 py-3.5 text-ink-900 placeholder:text-ink-400 transition focus:border-rose-400 focus:ring-4 focus:ring-blush-100 focus:outline-none'

  return (
    <section id="contact" className="bg-cream-100 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">{c.eyebrow}</p>
          <h2 className="mt-4 text-4xl font-medium sm:text-5xl">{c.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-500">{c.text}</p>

          <ul className="mt-10 space-y-6">
            <li className="flex gap-4">
              <Badge><PhoneIcon className="h-5 w-5" /></Badge>
              <div>
                <p className="text-sm text-ink-400">{c.phone}</p>
                <a href={whatsappLink()} target="_blank" rel="noreferrer" dir="ltr" className="font-medium text-ink-900 hover:text-rose-600">
                  {site.phoneDisplay}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Badge><MailIcon className="h-5 w-5" /></Badge>
              <div>
                <p className="text-sm text-ink-400">{c.email}</p>
                <a href={`mailto:${site.email}`} dir="ltr" className="font-medium text-ink-900 hover:text-rose-600">
                  {site.email}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Badge><PinIcon className="h-5 w-5" /></Badge>
              <div>
                <p className="text-sm text-ink-400">{c.studio}</p>
                <p className="font-medium text-ink-900">{c.address}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Badge><ClockIcon className="h-5 w-5" /></Badge>
              <div>
                <p className="text-sm text-ink-400">{c.hoursLabel}</p>
                {c.hours.map((h) => (
                  <p key={h.days} className="font-medium text-ink-900">
                    {h.days} — <span className="font-normal text-ink-500">{h.time}</span>
                  </p>
                ))}
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={onSubmit} className="rounded-4xl bg-cream-50 p-7 shadow-soft sm:p-10">
            <h3 className="text-2xl font-medium">{c.formTitle}</h3>
            <p className="mt-2 text-sm text-ink-500">{c.formNote}</p>

            <label className="mt-7 block text-sm font-medium text-ink-700">
              {c.name}
              <input className={field} value={form.name} onChange={update('name')} placeholder={c.namePlaceholder} autoComplete="name" />
            </label>

            <label className="mt-5 block text-sm font-medium text-ink-700">
              {c.interest}
              <select className={field} value={form.service} onChange={update('service')}>
                {c.options.map((o, i) => <option key={i} value={i}>{o}</option>)}
              </select>
            </label>

            <label className="mt-5 block text-sm font-medium text-ink-700">
              {c.message}
              <textarea
                className={`${field} min-h-32 resize-y`}
                value={form.message}
                onChange={update('message')}
                placeholder={c.messagePlaceholder}
                required
              />
            </label>

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-whatsapp px-7 py-4 font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:brightness-95"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {c.submit}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function Badge({ children }) {
  return (
    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blush-100 text-rose-600">
      {children}
    </span>
  )
}
