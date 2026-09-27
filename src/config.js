// ------------------------------------------------------------------
// Memory Print — business details
// Edit the values below to change them everywhere on the site.
// ------------------------------------------------------------------
export const site = {
  name: 'Memory Print',
  tagline: 'Your Moments, Our Prints.',

  // WhatsApp number in international format, digits only (no +, spaces or dashes).
  // Tunisia (+216) + 22 398 788
  whatsapp: '21622398788',
  phoneDisplay: '+216 22 398 788',

  email: 'photomahdia@outlook.fr',
  address: 'Mahdia, Tunisia',
  hours: [{ days: 'Every day', time: 'Open 24/7' }],

  // Leave empty ('') to hide a social icon.
  instagram: '',
  facebook: 'https://www.facebook.com/profile.php?id=61594842781547',
}

export function whatsappLink(message = '') {
  const text = message ? `?text=${encodeURIComponent(message)}` : ''
  return `https://wa.me/${site.whatsapp}${text}`
}
