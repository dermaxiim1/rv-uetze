/**
 * SITE — die zentrale Konfiguration für den RFU.
 * Heading-Konvention: jede Sektion hat ein dreiteiliges Heading
 * `{ before, em, after }`.
 */

export type SiteHourBlock = {
  readonly dayLabel: string;
  readonly note: string;
};

export type SectionHeadingParts = {
  readonly before: string;
  readonly em: string;
  readonly after: string;
};

export const SITE = {
  // ====================================================================
  // IDENTITY
  // ====================================================================
  name: "Reit- und Fahrverein Uetze und Umgebung e.V.",
  shortName: "RFU",
  tagline: "Reit- und Fahrverein in Uetze-Katensen · am Beerbusch zuhause",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://rv-uetze.vercel.app"),
  description:
    "Reit- und Fahrverein Uetze und Umgebung e.V. — seit 1974 in Uetze-Katensen. 18 Pensionsboxen mit Solarium und Waschplatz, Reithalle und Außenplatz, direkter Zugang zum Wald Beerbusch. Persönlicher Verein mit ca. 120 Mitgliedern.",
  owner: "Dr. Christina Schleifer · 1. Vorsitzende",
  region: "Uetze-Katensen · Region Hannover",
  founded: "1974",

  // ====================================================================
  // SEO
  // ====================================================================
  keywords: [
    "Reit- und Fahrverein Uetze",
    "Reitverein Uetze",
    "Pensionsstall Uetze",
    "Boxen mieten Uetze",
    "Reithalle Katensen",
    "Reitanlage Beerbusch",
    "Sommerturnier Uetze",
    "Reitverein Region Hannover",
    "Hobby-Horse Uetze",
    "Reitturnier Niedersachsen",
  ],
  sports: ["Equestrian", "Dressage", "Show Jumping", "Driving"],
  addressRegion: "Niedersachsen",

  // ====================================================================
  // CONTACT & ADDRESS
  // ====================================================================
  contact: {
    phone: "",
    phoneTel: "",
    phoneLabel: "",
    email: "info@rv-uetze.de",
    contactForm: "/kontakt",
  },

  address: {
    street: "Am Wolfsbusch 2",
    postalCode: "31311",
    city: "Uetze-Katensen",
    region: "Region Hannover",
    googleMapsQuery: "Am+Wolfsbusch+2,+31311+Uetze",
    geo: { lat: 52.4727, lng: 10.2167 },
    transit: "Postanschrift Vorstand: Putjebusch 4, 31311 Uetze/Katensen",
  },

  visitNote: [
    { dayLabel: "Boxenanfrage", note: "Per E-Mail an info@rv-uetze.de" },
    { dayLabel: "Vorstand", note: "Dr. Christina Schleifer" },
  ] satisfies readonly SiteHourBlock[],

  nav: [
    { href: "#verein", label: "Der Verein" },
    { href: "#reitanlage", label: "Anlage" },
    { href: "#stallungen", label: "Boxen" },
    { href: "#mitgliedschaft", label: "Mitgliedschaft" },
    { href: "#veranstaltungen", label: "Turnier" },
    { href: "#anfahrt", label: "Anfahrt" },
  ] as const,

  // ====================================================================
  // SECTION VISIBILITY
  // ====================================================================
  sections: {
    about: true,
    facilities: true,
    pension: true,
    horses: false, // RVU hat keine Schulpferde
    lessons: true,
    membership: true,
    events: true,
    team: true,
    reviews: false,
    gallery: false, // bis Fotos vorliegen
    contact: true,
  },

  // ====================================================================
  // HERO
  // ====================================================================
  hero: {
    image: "/images/hero/anlage.jpg",
    imageAlt: "Reitanlage in Uetze-Katensen am Beerbusch",
    title: {
      line1: "Pensionsboxen,",
      em: "Sommerturnier",
      line2After: "und Reitwege",
      line3: "am Beerbusch.",
    },
    body: "Der Reit- und Fahrverein Uetze und Umgebung e.V. — am Ortsrand von Katensen, mit direktem Zugang zum Beerbusch. 18 helle Pensionsboxen mit Solarium und Waschplatz, Reithalle, getrennte Paddocks und ein Sommerturnier mit Tradition.",
    secondaryCtaLabel: "Boxen-Anfrage senden",
    badge: { big: "RFU", small: "in Katensen seit 1974" },
    scrollHint: "Mehr erfahren",
    stats: [
      "ca. 120 Mitglieder",
      "18 Pensionsboxen",
      "Solarium & Waschplatz",
      "Direkt am Beerbusch",
    ],
  },

  // ====================================================================
  // SECTION HEADINGS & COPY
  // ====================================================================
  about: {
    eyebrow: "Der Verein",
    heading: {
      before: "Klein, persönlich,",
      em: "und intensiv",
      after: ".",
    } satisfies SectionHeadingParts,
    paragraphs: [
      "Der Reit- und Fahrverein Uetze und Umgebung e.V. wurde zunächst in Uetze gegründet, ist aber bereits seit dem Umzug auf das Vereinsgelände im Jahr 1974 in Katensen ansässig. In herrlicher Lage, am Ortsrand des kleinen Dorfes, liegt unsere Reitanlage.",
      "Direkt angrenzend an den Wald „Beerbusch“ mit seinen ausgedehnten Reitwegen — wir finden hier alles, um unser Hobby in vollen Zügen genießen zu können.",
      "Wir sind ein kleiner und persönlicher Verein mit ca. 120 Mitgliedern. Diese Größe erlaubt intensive Trainings­möglichkeiten und einen direkten Draht in den Vorstand — egal ob es um Boxenanfragen, Turnierteilnahmen oder den nächsten Arbeitseinsatz geht.",
      "Über das Jahr hinweg organisieren wir Lehrgänge in verschiedenen Disziplinen, gemeinsame Ausritte, Flohmärkte, Grünkohl-Essen und Weihnachtsritte — und im August unser Sommerturnier mit Dressur- und Springprüfungen vom Führzügel bis zur Klasse L.",
    ],
    quote: {
      text: "Optimale Wettkampfbedingungen, professionelle Organisation und liebevolle Verpflegung.",
      attribution: "Über unser Sommerturnier",
    },
  },

  facilities: {
    eyebrow: "Die Anlage",
    heading: {
      before: "Halle, Plätze",
      em: "und der Wald",
      after: ".",
    } satisfies SectionHeadingParts,
    intro:
      "Klassische Reithalle, Außenanlagen und 18 helle Pensionsboxen mit Solarium und Waschplatz — und vor der Tür der Beerbusch mit Reitwegen ins Grüne.",
  },

  pension: {
    eyebrow: "Boxenvermietung",
    heading: {
      before: "18 Boxen,",
      em: "selbstorganisiert",
      after: ".",
    } satisfies SectionHeadingParts,
    contactNote: {
      prefix:
        "Aktuell ist eine Box frei. Anfragen für Boxen und aktuelle Preise gerne per E-Mail an ",
      join: "",
      suffix: ".",
    },
  },

  horses: {
    eyebrow: "",
    heading: { before: "", em: "", after: "" } satisfies SectionHeadingParts,
    intro: "",
  },

  lessons: {
    eyebrow: "Training & Lehrgänge",
    heading: {
      before: "Lehrgänge",
      em: "übers Jahr",
      after: ".",
    } satisfies SectionHeadingParts,
    intro:
      "Über das Jahr hinweg verschiedene Lehrgänge in Dressur, Springen und Bodenarbeit — durchgeführt von externen Trainern. Hobby-Horse-Training neu im Programm.",
    primaryCtaLabel: "Termine erfragen",
    note: "Konkrete Lehrgangstermine via Aushang am Heulager oder per E-Mail",
  },

  membership: {
    eyebrow: "Mitgliedschaft",
    heading: {
      before: "Aktuell keine",
      em: "Aufnahmegebühr",
      after: ".",
    } satisfies SectionHeadingParts,
    intro:
      "Wir freuen uns über neue Mitglieder. Aktuell wird keine Aufnahmegebühr erhoben — der aktuelle Jahresbeitrag und der Mitgliedsantrag werden vom Vorstand zugeschickt.",
    contactNote: {
      prefix: "Mitgliedschaft anfragen — kurze E-Mail an ",
      join: "",
      suffix: " genügt.",
    },
  },

  events: {
    eyebrow: "Veranstaltungen",
    heading: {
      before: "Turnier, Reiterrallye",
      em: "und Stallfeste",
      after: ".",
    } satisfies SectionHeadingParts,
    intro:
      "Lehrgänge übers Jahr, gemeinsame Ausritte und das traditionelle Sommerturnier am dritten August­wochenende — bei optimalen Wettkampf­bedingungen mit liebevoller Verpflegung.",
  },

  team: {
    eyebrow: "Vorstand & Trainer",
    heading: {
      before: "Persönlicher",
      em: "Verein",
      after: ".",
    } satisfies SectionHeadingParts,
  },

  reviews: {
    eyebrow: "",
    heading: { before: "", em: "", after: "" } satisfies SectionHeadingParts,
  },

  gallery: {
    eyebrow: "",
    heading: { before: "", em: "", after: "" } satisfies SectionHeadingParts,
  },

  contactSection: {
    eyebrow: "Anfahrt & Kontakt",
    heading: {
      before: "Direkt am",
      em: "Beerbusch",
      after: ".",
    } satisfies SectionHeadingParts,
    byCar: {
      label: "Mit dem Auto",
      desc: "Vereinsgelände Am Wolfsbusch 2 in 31311 Uetze, Ortsteil Katensen. Aus Hannover über die A2 (Ausfahrt Lehrte) oder A7 (Ausfahrt Mellendorf) Richtung Uetze — am Ortsrand von Katensen führt der Weg direkt am Beerbusch vorbei.",
    },
    byTransit: {
      label: "Postanschrift",
      desc: "Dr. Christina Schleifer · Putjebusch 4 · 31311 Uetze/Katensen — Boxenanfragen und Mitgliedschaft am besten per E-Mail an info@rv-uetze.de.",
    },
    ctaLabel: "E-Mail schreiben",
  },

  footer: {
    tagline:
      "Reit- und Fahrverein in Uetze-Katensen · seit 1974 am Beerbusch · ca. 120 Mitglieder.",
    addressLabel: "Vereinsgelände",
    contactLabel: "Kontakt",
    infoLabel: "Information",
  },
} as const;
