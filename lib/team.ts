export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
};

export const TEAM: TeamMember[] = [
  {
    id: "schleifer",
    name: "Dr. Christina Schleifer",
    role: "1. Vorsitzende",
    bio: "Erste Anlaufstelle für alle Vereinsangelegenheiten — Boxenanfragen, Mitgliedschaft, Turnierteilnahme. Postanschrift in Uetze/Katensen, Antworten auch per E-Mail.",
  },
  {
    id: "wehrtmann",
    name: "Lena-Antje Wehrtmann",
    role: "Hobby-Horse Trainerin",
    bio: "Leitet das Hobby-Horse-Training — 14-täglich (gerade Kalenderwochen) Mittwoch 16:30 bis 17:30 Uhr in der Reithalle.",
  },
  {
    id: "vorstand",
    name: "Erweiterter Vorstand",
    role: "Vereinsführung",
    bio: "Geführt von einem ehrenamtlich engagierten Team. Konkrete Ansprechpartner für Stallarbeit, Turnier und Veranstaltungen via Aushang am Heulager oder direkter E-Mail.",
  },
];
