export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
};

export const TEAM: TeamMember[] = [
  {
    id: "stephanie",
    name: "Stephanie Nevado Navarro",
    role: "1. Vorsitzende",
    bio: "Stephanie führt den Verein. Bei Fragen rund um Boxen, Mitgliedschaft und Vereinsleben ist sie die erste Anlaufstelle — telefonisch oder im Stallbüro.",
  },
  {
    id: "bettina",
    name: "Bettina Lachmann",
    role: "2. Vorsitzende",
    bio: "Unterstützt die Vereinsführung im Tagesgeschäft, organisiert Lehrgänge und hat einen Überblick über die kommenden Veranstaltungen.",
  },
  {
    id: "trainer",
    name: "Trainer & Ausbilder",
    role: "Reit- und Voltigierunterricht",
    bio: "Erfahrenes Trainer-Team, qualifiziert für Anfänger bis Fortgeschrittene. Reitstunden Mo–Fr nachmittags und abends, Voltigieren freitags 17–18 Uhr.",
  },
  {
    id: "stallpersonal",
    name: "Stallpersonal",
    role: "Pflege & Versorgung",
    bio: "Drei feste Hände, sehr um das Wohl der Pferde besorgt. Füttern dreimal täglich, Heu morgens und abends, Mo–Fr Misten und Einstreuen.",
  },
];
