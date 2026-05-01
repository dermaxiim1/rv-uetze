export type EquineEvent = {
  id: string;
  title: string;
  cadence: string;
  desc: string;
  badge?: string;
};

export const EVENTS: EquineEvent[] = [
  {
    id: "sommerfest",
    title: "Sommerfest",
    cadence: "Mitte August",
    desc: "Jahres-Highlight für Mitglieder, Familien und Freunde. Zuletzt am 17.08.2024 — Buffet, Spiele, geselliges Beisammensein im Reiterstübchen.",
    badge: "Vereinsfest",
  },
  {
    id: "abzeichenlehrgang",
    title: "Abzeichenlehrgänge",
    cadence: "Mehrmals im Jahr",
    desc: "Vorbereitung und Prüfung von Reitabzeichen. Strukturierte Module für Anfänger und Fortgeschrittene.",
    badge: "Lehrgang",
  },
  {
    id: "externe-trainer",
    title: "Lehrgänge externer Trainer",
    cadence: "Nach Aushang",
    desc: "Gastreiter-Lehrgänge mit Trainern von außerhalb — Dressur, Springen, Vielseitigkeit.",
    badge: "Lehrgang",
  },
  {
    id: "voltigieren",
    title: "Voltigieren · wöchentlich",
    cadence: "Freitags 17–18 Uhr",
    desc: "Spielerischer Einstieg in den Reitsport für Kinder ab 6 Jahren. Grundsitz, Fahne und Stütz mit unseren Voltipferden.",
    badge: "Wöchentlich",
  },
  {
    id: "weihnachtsquadrille",
    title: "Weihnachtsquadrille",
    cadence: "Dezember",
    desc: "Traditioneller Auftritt der Reitschüler in der weihnachtlich geschmückten Halle — choreographiert und einstudiert.",
    badge: "Tradition",
  },
  {
    id: "schnupperstunde",
    title: "Schnupperstunde",
    cadence: "Jederzeit nach Vereinbarung",
    desc: "Erste Reitstunde, Voltigieren ausprobieren, oder beim Unterricht zuschauen — schreiben Sie uns einfach eine E-Mail.",
    badge: "Einstieg",
  },
];
