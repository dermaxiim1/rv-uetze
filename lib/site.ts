/**
 * SITE — die zentrale Konfiguration des Templates.
 *
 * Beim Rebranding für einen anderen Reiterhof: nur diese Datei
 * (plus die Listen-Dateien lib/horses.ts, lib/facilities.ts, lib/team.ts,
 * lib/membership.ts, lib/events.ts, lib/reviews.ts, lib/gallery.ts,
 * lib/pension-features.ts, lib/lessons.ts und die Bilder unter public/)
 * anfassen.
 *
 * Heading-Konvention: jede Sektion hat ein dreiteiliges Heading
 * `{ before, em, after }`, das so gerendert wird:
 *
 *   {before}
 *   <em>{em}</em>
 *   {after}
 *
 * `em` wird italic + Akzentfarbe gesetzt. Mit "<br/>" lassen sich Zeilen-
 * umbrüche im Heading erzwingen — siehe Beispiele unten.
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
  name: "Reiterverein Kronsberg e.V.",
  shortName: "RVK",
  tagline: "Reiterverein seit über 70 Jahren · Hannover-Laatzen",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://reiterverein-kronsberg.vercel.app"),
  description:
    "Reiterverein Kronsberg e.V. — seit über 70 Jahren in Hannover-Laatzen, direkt an der Leinemasch. Reitunterricht auf vereinseigenen Schulpferden, Voltigieren ab 6 Jahren, 23 Innen- und Außenboxen für Einsteller.",
  owner: "Stephanie Nevado Navarro · 1. Vorsitzende",
  region: "Hannover-Laatzen · Leinemasch",
  founded: "1953",

  // ====================================================================
  // SEO
  // ====================================================================
  keywords: [
    "Reiterverein Kronsberg",
    "RVK",
    "Reitunterricht Hannover",
    "Reitunterricht Laatzen",
    "Voltigieren Hannover",
    "Schulpferd Hannover",
    "Reitstunde Anfänger",
    "Boxen mieten Laatzen",
    "Pensionsstall Hannover",
    "Reitverein Niedersachsen",
  ],
  /** Sport-Disziplinen für JSON-LD (schema.org SportsClub).
   *  Englische schema.org-Werte: Equestrian, Dressage, Show Jumping, Vaulting … */
  sports: ["Equestrian", "Dressage", "Show Jumping", "Vaulting"],
  /** Bundesland für JSON-LD addressRegion. */
  addressRegion: "Niedersachsen",

  // ====================================================================
  // CONTACT & ADDRESS
  // ====================================================================
  contact: {
    phone: "0179 6697138",
    phoneTel: "+491796697138",
    phoneLabel: "Boxen-Anfragen · Frau Nevado-Navarro",
    email: "info@reiterverein-kronsberg.de",
    contactForm: "/kontakt",
  },

  address: {
    street: "Hildesheimer Straße 2a",
    postalCode: "30880",
    city: "Laatzen",
    region: "Region Hannover",
    googleMapsQuery: "Hildesheimer+Stra%C3%9Fe+2a,+30880+Laatzen",
    geo: { lat: 52.3145, lng: 9.7935 },
    transit: "Stadtbahn 1/2 — Haltestelle Am Brabrinke",
  },

  visitNote: [
    { dayLabel: "Schnupperstunden", note: "Nach Vereinbarung" },
    { dayLabel: "Boxen-Besichtigung", note: "Telefonisch absprechen" },
  ] satisfies readonly SiteHourBlock[],

  nav: [
    { href: "#verein", label: "Der Verein" },
    { href: "#reitanlage", label: "Reitanlage" },
    { href: "#schulpferde", label: "Schulpferde" },
    { href: "#unterricht", label: "Unterricht" },
    { href: "#mitgliedschaft", label: "Mitgliedschaft" },
    { href: "#anfahrt", label: "Anfahrt" },
  ] as const,

  // ====================================================================
  // SECTION VISIBILITY (false = Sektion wird nicht gerendert)
  // ====================================================================
  sections: {
    about: true,
    facilities: true,
    pension: true, // Einsteller-Boxen — bei reinem Reitschulbetrieb auf false
    horses: true,
    lessons: true, // Reitunterricht / Voltigieren
    membership: true,
    events: true,
    team: true,
    reviews: true,
    gallery: true,
    contact: true,
  },

  // ====================================================================
  // HERO
  // ====================================================================
  hero: {
    image: "/images/hero/anlage.jpg",
    imageAlt: "Pferd galoppiert auf der Koppel im Abendlicht",
    title: {
      line1: "Reitunterricht,",
      em: "Voltigieren",
      line2After: "und Boxen",
      line3: "seit über 70 Jahren.",
    },
    body: "Der Reiterverein Kronsberg e.V. — südlich von Hannover, direkt an der Leinemasch. Reitstunden auf vereinseigenen Schulpferden, Voltigieren ab sechs Jahren und 23 Boxen für Einsteller.",
    secondaryCtaLabel: "Schnupperstunde anfragen",
    badge: { big: "RVK", small: "Reiterverein · seit 1953" },
    scrollHint: "Mehr erfahren",
    stats: [
      "~150 Mitglieder",
      "7 Schulpferde & Ponys",
      "Halle 43 × 20 m",
      "Direkt an der Leinemasch",
    ],
  },

  // ====================================================================
  // SECTION HEADINGS & COPY
  // ====================================================================
  about: {
    eyebrow: "Der Verein",
    heading: {
      before: "Seit über 70 Jahren",
      em: "für Pferd und Reiter",
      after: ".",
    } satisfies SectionHeadingParts,
    paragraphs: [
      "Der Reiterverein Kronsberg e. V. (RVK) ist seit 70 Jahren im südlichen Teil Hannovers beheimatet — direkt hinter der Stadtgrenze zwischen Hannover und Laatzen, unweit der Hildesheimer Straße, an der idyllischen Leinemasch.",
      "Zurzeit zählen wir rund 150 Mitglieder aller Altersgruppen und sind fester Bestandteil des Laatzener Vereinslebens. Unsere Mitglieder stammen aus Laatzen und Hannover, aber auch aus Sarstedt und der Region Hildesheim.",
      "Bei uns fühlen sich Reiter aller Disziplinen wohl — Springen, Dressur, Freizeitreiten für Anfänger und Fortgeschrittene — sowie der voltigierende Nachwuchs ab sechs Jahren.",
      "Wir bieten Reit- und Voltigierunterricht auf insgesamt sieben vereinseigenen Schulpferden und Schulponys, sowie die Unterbringung Ihres eigenen Pferdes inklusive Weidedienst. Darüber hinaus bietet der RVK Abzeichenlehrgänge und Lehrgänge externer Trainer an.",
    ],
    quote: {
      text: "Riskieren Sie einen kleinen Blick auf unsere Themen- und Bilderseiten — den Stall, den Unterricht, das bunte Vereinsleben. Sie können auch gerne einfach vorbeikommen und sich umschauen.",
      attribution: "Vorstand des RVK",
    },
  },

  facilities: {
    eyebrow: "Die Reitanlage",
    heading: {
      before: "Halle, Plätze",
      em: "und ein Stübchen",
      after: ".",
    } satisfies SectionHeadingParts,
    intro:
      "Vereinsanlage mit klassischer Reithalle, großzügigem Außenplatz und einem Aufenthaltsraum, der den Verein im wahrsten Sinne zusammenhält.",
  },

  pension: {
    eyebrow: "Stallungen & Weiden",
    heading: {
      before: "Was eine",
      em: "Box bei uns",
      after: "enthält.",
    } satisfies SectionHeadingParts,
    contactNote: {
      prefix: "Sie interessieren sich für eine Box? Frau Nevado-Navarro erreichen Sie unter ",
      join: " — oder per E-Mail an ",
      suffix: ".",
    },
  },

  horses: {
    eyebrow: "Unsere Schulpferde",
    heading: {
      before: "Vereinseigen.",
      em: "Lehrer auf vier Beinen",
      after: ".",
    } satisfies SectionHeadingParts,
    intro:
      "Vom Volti-Pony bis zum Hannoveraner Wallach — sieben vereinseigene Schulpferde und Ponys, die jeden Tag im Reit- und Voltiunterricht im Einsatz sind.",
  },

  lessons: {
    eyebrow: "Unterricht",
    heading: {
      before: "Anfänger oder",
      em: "Routinier",
      after: ".",
    } satisfies SectionHeadingParts,
    intro:
      "Dem RVK liegt die Basisausbildung besonders am Herzen. Erfahrene Trainer und Ausbilder, qualifizierter und individueller Unterricht — auf unseren vereinseigenen Schulpferden.",
    primaryCtaLabel: "Schnupperstunde anfragen",
    note: "Hallenplan und genaue Zeiten auf Anfrage",
  },

  membership: {
    eyebrow: "Mitgliedschaft & Preise",
    heading: {
      before: "Klar geregelt,",
      em: "familiär gelebt",
      after: ".",
    } satisfies SectionHeadingParts,
    intro:
      "Sie möchten dem RVK beitreten? Hier finden Sie unsere aktuellen Beiträge im Überblick. Die Aufnahmegebühr wird sofort, der Jahresbeitrag jährlich zum 1.1. im Voraus fällig.",
    contactNote: {
      prefix: "Den Aufnahmeantrag senden wir Ihnen gerne zu — kurzer Anruf bei ",
      join: " oder eine E-Mail an ",
      suffix: " genügt.",
    },
  },

  events: {
    eyebrow: "Veranstaltungen",
    heading: {
      before: "Im Kalender",
      em: "eines Jahres",
      after: ".",
    } satisfies SectionHeadingParts,
    intro:
      "Lehrgänge, Vereinstage und Stallfeste — offen für Mitglieder, Einsteller und Gäste. Termine erfragen Sie bitte direkt.",
  },

  team: {
    eyebrow: "Das Team",
    heading: {
      before: "Persönlich.",
      em: "Im besten Sinne.",
      after: "",
    } satisfies SectionHeadingParts,
  },

  reviews: {
    eyebrow: "Was Einsteller sagen",
    heading: {
      before: "Stimmen vom",
      em: "Stallgang",
      after: ".",
    } satisfies SectionHeadingParts,
  },

  gallery: {
    eyebrow: "Eindrücke",
    heading: {
      before: "Vom Hof in den",
      em: "Wald",
      after: ".",
    } satisfies SectionHeadingParts,
  },

  contactSection: {
    eyebrow: "Anfahrt & Kontakt",
    heading: {
      before: "So finden",
      em: "Sie zu uns",
      after: ".",
    } satisfies SectionHeadingParts,
    byCar: {
      label: "Mit dem Auto",
      desc: "Aus Hannover kommend auf der Hildesheimer Straße in Richtung Laatzen. Nach der Wilkenburger Straße sind es noch ca. 200 m. Die Einfahrt zum RVK befindet sich direkt hinter der Tankstelle rechts.",
    },
    byTransit: {
      label: "Mit der Stadtbahn",
      desc: "Linie 1 oder 2 bis zur Haltestelle „Am Brabrinke“. Von dort etwa 100 Meter stadtauswärts gehen — direkt hinter der Tankstelle rechts ist der Zugang.",
    },
    ctaLabel: "Jetzt anrufen",
  },

  footer: {
    tagline:
      "Reitsportverein in Hannover-Laatzen, direkt an der Leinemasch. Reitunterricht, Voltigieren und Boxen für Einsteller — seit über 70 Jahren.",
    addressLabel: "Adresse",
    contactLabel: "Kontakt",
    infoLabel: "Information",
  },
} as const;
