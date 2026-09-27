import { createContext, useContext, useEffect, useState } from 'react'
import { site } from './config'

// ------------------------------------------------------------------
// All site copy, in French and Arabic.
// Edit the text below to change it on the site.
// ------------------------------------------------------------------
const n = site.name

export const translations = {
  fr: {
    meta: {
      title: `${n} — Vos moments, nos tirages.`,
      description: `${n} est un studio local d'impression photo à Mahdia. Envoyez-nous vos photos : tirages haut de gamme, albums faits main et cartes de visite professionnelles.`,
    },
    tagline: 'Vos moments, nos tirages.',
    wa: {
      hello: `Bonjour ${n} !`,
      orderPrints: `Bonjour ${n} ! Je souhaite commander des tirages photo.`,
      album: `Bonjour ${n} ! Je souhaite créer un album photo.`,
      cards: `Bonjour ${n} ! Je souhaite commander des cartes de visite.`,
      chat: 'Discutez avec nous sur WhatsApp',
    },
    nav: {
      services: 'Services',
      printing: 'Impression',
      albums: 'Albums',
      cards: 'Cartes de visite',
      gallery: 'Galerie',
      contact: 'Contact',
      order: 'Commander',
      orderWhatsapp: 'Commander sur WhatsApp',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
      language: 'Langue',
    },
    hero: {
      eyebrow: "Studio local d'impression photo",
      title1: 'Vos moments,',
      title2: 'nos tirages.',
      text: 'Envoyez-nous vos photos et nous les transformons en tirages haut de gamme, albums photo faits main et cartes de visite professionnelles — réalisés avec soin, prêts à être tenus entre vos mains.',
      cta: 'Envoyez vos photos',
      explore: 'Découvrir nos services',
      stats: [
        ['Premium', 'papier photo'],
        ['Fait main', 'albums'],
        ['Rapide', 'délais courts'],
      ],
      albumAlt: 'Un album photo fait main ouvert',
      printsAlt: 'Une pile de photos fraîchement imprimées',
      caption: 'faits pour durer',
    },
    services: {
      eyebrow: 'Nos services',
      title: 'Trois façons de garder un souvenir',
      text: "Tout est imprimé et finalisé dans notre studio, avec l'attention que vos photos méritent.",
      more: 'En savoir plus',
      items: {
        printing: {
          title: 'Impression photo',
          text: 'Des tirages éclatants et fidèles sur papier premium — du petit format aux grands formats muraux, brillant ou mat.',
        },
        albums: {
          title: 'Albums photo',
          text: "Des albums faits main pour les mariages, les naissances, les voyages et toutes les histoires qui méritent d'être gardées, conçus page par page.",
        },
        cards: {
          title: 'Cartes de visite',
          text: 'Des cartes professionnelles à l’impression nette et aux finitions élégantes, pour une première impression qui dure.',
        },
      },
    },
    printing: {
      eyebrow: 'Impression photo',
      title: 'Des tirages aussi beaux que le moment vécu',
      text: "D'une poignée de clichés à des centaines de photos de vacances, nous imprimons sur papier photo professionnel aux couleurs riches et aux détails nets.",
      points: [
        'Formats courants, du 10×15 cm aux grands posters',
        'Finitions brillante, mate ou satinée',
        'Couleurs vérifiées à la main avant impression',
        'Commandes en grande quantité bienvenues',
      ],
      mainAlt: 'Des photos fraîchement imprimées sur une table',
      detailAlt: "Gros plan sur un tirage photo",
      cta: 'Commander des tirages',
    },
    albums: {
      eyebrow: 'Albums photo',
      title: "Des albums faits main pour les histoires qu'on aime raconter",
      text: "Choisissez vos photos : nous concevons, imprimons et relions un album aussi unique que le jour lui-même. Chaque album est assemblé à la main dans notre studio.",
      points: [
        'Mise en page personnalisée, conçue avec vous',
        'Couvertures rigides, en lin ou effet cuir',
        'Pages épaisses à plat qui durent des années',
        'Texte ou prénoms personnalisés sur la couverture',
      ],
      mainAlt: 'Un album photo fait main ouvert sur une table',
      cta: 'Créer votre album',
      themesTitle: 'Un album pour chaque moment',
      themes: {
        wedding: 'Mariage',
        baby: 'Bébé',
        family: 'Famille',
        travel: 'Voyage',
        birthday: 'Anniversaire',
        occasions: 'Occasions',
      },
      themeAlt: (name) => `Album photo ${name}`,
    },
    cards: {
      eyebrow: 'Cartes de visite',
      title: 'Des cartes de visite qui marquent les esprits',
      text: 'Apportez votre propre design ou laissez-nous vous aider à le créer. Nous imprimons des cartes nettes et professionnelles, agréables au toucher.',
      points: [
        'Aide à la conception disponible',
        'Papier cartonné épais haut de gamme',
        'Finitions mate, brillante ou soft-touch',
        'Petites et grandes quantités',
      ],
      mainAlt: 'Une pile de cartes de visite imprimées',
      detailAlt: "Gros plan sur la finition d'une carte de visite",
      cta: 'Commander des cartes de visite',
    },
    how: {
      eyebrow: 'Comment ça marche',
      title: 'De votre téléphone à vos mains',
      steps: [
        {
          title: 'Envoyez vos photos',
          text: 'Partagez vos photos avec nous sur WhatsApp, par e-mail, ou apportez-les au studio sur clé USB ou sur votre téléphone.',
        },
        {
          title: 'Nous imprimons avec soin',
          text: 'Nous vérifions chaque image, ajustons les couleurs si nécessaire et imprimons sur papier premium ou réalisons votre album.',
        },
        {
          title: 'Récupérez vos tirages',
          text: 'Nous vous prévenons dès que votre commande est prête — joliment emballée et prête à emporter.',
        },
      ],
    },
    gallery: {
      eyebrow: 'Galerie',
      title: 'Quelques-unes de nos réalisations',
      text: "Touchez une photo pour l'agrandir.",
      alt: (i) => `Exemple de notre travail ${i}`,
      open: (alt) => `Ouvrir : ${alt}`,
      close: 'Fermer',
      prev: 'Photo précédente',
      next: 'Photo suivante',
    },
    about: {
      alt: `L'intérieur du studio ${n}`,
      eyebrow: 'À propos',
      title: 'Un petit studio avec un grand amour pour les photos imprimées',
      p1: `Nos téléphones sont remplis de photos que nous ne regardons plus jamais. Chez ${n}, nous pensons que les plus beaux moments méritent d'être tenus, encadrés, partagés et transmis.`,
      p2: 'Nous sommes un studio local : chaque commande est traitée par de vraies personnes attentives à la couleur, au papier et aux finitions — et toujours ravies de vous conseiller.',
      sign: `— L'équipe ${n}`,
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Imprimons vos souvenirs',
      text: 'Dites-nous ce que vous avez en tête — nous répondons généralement en quelques heures.',
      phone: 'Téléphone / WhatsApp',
      email: 'E-mail',
      studio: 'Studio',
      address: 'Mahdia, Tunisie',
      hoursLabel: "Horaires d'ouverture",
      hours: [{ days: 'Tous les jours', time: 'Ouvert 24h/24, 7j/7' }],
      formTitle: 'Envoyez-nous une demande',
      formNote: 'Cela ouvre WhatsApp avec votre message prêt à être envoyé.',
      name: 'Votre nom',
      namePlaceholder: 'Ex. : Sarra Ben Ali',
      interest: "Qu'est-ce qui vous intéresse ?",
      options: ['Impression photo', 'Album photo', 'Cartes de visite', 'Autre chose'],
      message: 'Message',
      messagePlaceholder: 'Ex. : 40 tirages en 10×15, finition mate…',
      submit: 'Envoyer via WhatsApp',
      myName: (name) => `Je m'appelle ${name}.`,
      interested: (s) => `Je suis intéressé(e) par : ${s}.`,
    },
    footer: {
      rights: 'Tous droits réservés.',
    },
  },

  ar: {
    meta: {
      title: `${n} — لحظاتك، نطبعها بحب.`,
      description: `${n} استوديو محلي لطباعة الصور في المهدية. أرسل لنا صورك: طباعة فاخرة، ألبومات مصنوعة يدويًا وبطاقات أعمال احترافية.`,
    },
    tagline: 'لحظاتك، نطبعها بحب.',
    wa: {
      hello: `مرحبًا ${n}!`,
      orderPrints: `مرحبًا ${n}! أرغب في طلب طباعة صور.`,
      album: `مرحبًا ${n}! أرغب في إنشاء ألبوم صور.`,
      cards: `مرحبًا ${n}! أرغب في طلب بطاقات أعمال.`,
      chat: 'تحدث معنا عبر واتساب',
    },
    nav: {
      services: 'الخدمات',
      printing: 'الطباعة',
      albums: 'الألبومات',
      cards: 'بطاقات الأعمال',
      gallery: 'المعرض',
      contact: 'اتصل بنا',
      order: 'اطلب الآن',
      orderWhatsapp: 'اطلب عبر واتساب',
      openMenu: 'فتح القائمة',
      closeMenu: 'إغلاق القائمة',
      language: 'اللغة',
    },
    hero: {
      eyebrow: 'استوديو محلي لطباعة الصور',
      title1: 'لحظاتك،',
      title2: 'نطبعها بحب.',
      text: 'أرسل لنا صورك وسنحوّلها إلى مطبوعات فاخرة وألبومات صور مصنوعة يدويًا وبطاقات أعمال احترافية — بعناية واهتمام، جاهزة لتحملها بين يديك.',
      cta: 'أرسل صورك',
      explore: 'اكتشف خدماتنا',
      stats: [
        ['جودة عالية', 'ورق صور فاخر'],
        ['صنع يدوي', 'ألبومات'],
        ['سرعة', 'في التنفيذ'],
      ],
      albumAlt: 'ألبوم صور مصنوع يدويًا ومفتوح',
      printsAlt: 'مجموعة من الصور المطبوعة حديثًا',
      caption: 'صُنعت لتدوم',
    },
    services: {
      eyebrow: 'ماذا نقدّم',
      title: 'ثلاث طرق للاحتفاظ بذكرياتك',
      text: 'كل شيء يُطبع ويُجهَّز في الاستوديو الخاص بنا، بالعناية التي تستحقها صورك.',
      more: 'اعرف المزيد',
      items: {
        printing: {
          title: 'طباعة الصور',
          text: 'مطبوعات بألوان زاهية وواقعية على ورق فاخر — من الأحجام الصغيرة إلى الأحجام الكبيرة للجدران، لامعة أو مطفية.',
        },
        albums: {
          title: 'ألبومات الصور',
          text: 'ألبومات مصنوعة يدويًا للأعراس والمواليد والسفر وكل قصة تستحق أن تُحفظ، مصممة صفحة بصفحة.',
        },
        cards: {
          title: 'بطاقات الأعمال',
          text: 'بطاقات احترافية بطباعة دقيقة وتشطيبات أنيقة تترك انطباعًا أوّل لا يُنسى.',
        },
      },
    },
    printing: {
      eyebrow: 'طباعة الصور',
      title: 'مطبوعات بجمال اللحظة التي عشتها',
      text: 'من بضع لقطات إلى مئات صور العطلات، نطبع على ورق صور احترافي بألوان غنية وتفاصيل واضحة.',
      points: [
        'أحجام شائعة من 10×15 سم إلى الملصقات الكبيرة',
        'تشطيب لامع أو مطفي أو حريري',
        'مراجعة الألوان يدويًا قبل الطباعة',
        'نرحّب بالطلبات بالجملة',
      ],
      mainAlt: 'صور مطبوعة حديثًا على طاولة',
      detailAlt: 'صورة مقرّبة لصورة مطبوعة',
      cta: 'اطلب طباعة صور',
    },
    albums: {
      eyebrow: 'ألبومات الصور',
      title: 'ألبومات مصنوعة يدويًا لقصص تحب أن ترويها',
      text: 'اختر صورك وسنصمم ألبومك ونطبعه ونجلّده ليكون مميزًا مثل ذلك اليوم نفسه. كل ألبوم يُجمَّع يدويًا في الاستوديو الخاص بنا.',
      points: [
        'تصميم صفحات مخصص بالتعاون معك',
        'أغلفة صلبة أو من الكتان أو بمظهر الجلد',
        'صفحات سميكة تنفتح بشكل مسطّح وتدوم لسنوات',
        'نص أو أسماء مخصصة على الغلاف',
      ],
      mainAlt: 'ألبوم صور مصنوع يدويًا ومفتوح على طاولة',
      cta: 'ابدأ ألبومك',
      themesTitle: 'ألبوم لكل مناسبة',
      themes: {
        wedding: 'زفاف',
        baby: 'مولود',
        family: 'عائلة',
        travel: 'سفر',
        birthday: 'عيد ميلاد',
        occasions: 'مناسبات',
      },
      themeAlt: (name) => `ألبوم صور ${name}`,
    },
    cards: {
      eyebrow: 'بطاقات الأعمال',
      title: 'بطاقات أعمال تترك أثرًا',
      text: 'أحضر تصميمك الخاص أو دعنا نساعدك في إنشائه. نطبع بطاقات احترافية وواضحة بملمس رائع.',
      points: [
        'مساعدة في التصميم متوفرة',
        'ورق مقوّى سميك وفاخر',
        'تشطيب مطفي أو لامع أو ناعم الملمس',
        'كميات صغيرة وكبيرة',
      ],
      mainAlt: 'مجموعة من بطاقات الأعمال المطبوعة',
      detailAlt: 'صورة مقرّبة لتشطيب بطاقة أعمال',
      cta: 'اطلب بطاقات أعمال',
    },
    how: {
      eyebrow: 'كيف نعمل',
      title: 'من هاتفك إلى يديك',
      steps: [
        {
          title: 'أرسل صورك',
          text: 'شارك صورك معنا عبر واتساب أو البريد الإلكتروني، أو أحضرها إلى الاستوديو على مفتاح USB أو على هاتفك.',
        },
        {
          title: 'نطبع بعناية',
          text: 'نراجع كل صورة ونعدّل الألوان عند الحاجة، ثم نطبعها على ورق فاخر أو نجهّز ألبومك.',
        },
        {
          title: 'استلم مطبوعاتك',
          text: 'نُعلمك فور جاهزية طلبك — مغلّفًا بأناقة وجاهزًا لتأخذه معك.',
        },
      ],
    },
    gallery: {
      eyebrow: 'المعرض',
      title: 'نماذج من أعمالنا',
      text: 'اضغط على أي صورة لتكبيرها.',
      alt: (i) => `نموذج من أعمالنا ${i}`,
      open: (alt) => `فتح: ${alt}`,
      close: 'إغلاق',
      prev: 'الصورة السابقة',
      next: 'الصورة التالية',
    },
    about: {
      alt: `داخل استوديو ${n}`,
      eyebrow: 'من نحن',
      title: 'استوديو صغير بحبّ كبير للصور المطبوعة',
      p1: `هواتفنا مليئة بصور لا ننظر إليها مجددًا. في ${n}، نؤمن بأن أجمل اللحظات تستحق أن تُلمس وتُؤطَّر وتُشارك وتنتقل من جيل إلى جيل.`,
      p2: 'نحن استوديو محلي، لذا يتولى كل طلب أشخاص حقيقيون يهتمون بالألوان والورق والتشطيب — ويسعدهم دائمًا مساعدتك في الاختيار.',
      sign: `— فريق ${n}`,
    },
    contact: {
      eyebrow: 'اتصل بنا',
      title: 'لنطبع ذكرياتك معًا',
      text: 'أخبرنا بما تفكر فيه — عادةً نرد خلال ساعات قليلة.',
      phone: 'الهاتف / واتساب',
      email: 'البريد الإلكتروني',
      studio: 'الاستوديو',
      address: 'المهدية، تونس',
      hoursLabel: 'أوقات العمل',
      hours: [{ days: 'كل يوم', time: 'مفتوح 24/7' }],
      formTitle: 'أرسل لنا طلبك',
      formNote: 'سيفتح واتساب مع رسالتك جاهزة للإرسال.',
      name: 'اسمك',
      namePlaceholder: 'مثال: سارة بن علي',
      interest: 'ما الخدمة التي تهمك؟',
      options: ['طباعة الصور', 'ألبوم صور', 'بطاقات أعمال', 'شيء آخر'],
      message: 'الرسالة',
      messagePlaceholder: 'مثال: 40 صورة بحجم 10×15، تشطيب مطفي…',
      submit: 'أرسل عبر واتساب',
      myName: (name) => `اسمي ${name}.`,
      interested: (s) => `أنا مهتم بـ: ${s}.`,
    },
    footer: {
      rights: 'جميع الحقوق محفوظة.',
    },
  },
}

export const languages = [
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'ar', label: 'عربي', name: 'العربية' },
]

const STORAGE_KEY = 'lang'

function initialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && translations[saved]) return saved
  } catch {
    // storage unavailable — fall through
  }
  return navigator.language?.startsWith('ar') ? 'ar' : 'fr'
}

const LangContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLang)
  const t = translations[lang]

  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // ignore
    }
  }, [lang, t])

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
