export type LessonOffering = {
  name: string;
  schedule: string;
  desc: string;
};

export const LESSONS: LessonOffering[] = [
  {
    name: "Reiten",
    schedule: "Mo–Fr nachmittags & abends",
    desc: "Reitunterricht für Anfänger und Fortgeschrittene auf vereinseigenen Schulpferden. Dressur- und Springstunden für Privatreiter — individuelle Vereinbarungen jederzeit möglich.",
  },
  {
    name: "Voltigieren",
    schedule: "Freitags 17–18 Uhr",
    desc: "Spielerisch und ohne Zwang in den Reitsport — für Kinder ab sechs Jahren. Umgang mit dem Pferd, Gleichgewicht auf dem Pferderücken, Grundsitz und Stütz.",
  },
  {
    name: "Schnupperstunde",
    schedule: "Nach Vereinbarung",
    desc: "Zuschauen oder selbst ausprobieren — eine erste Reit- oder Voltistunde, ohne Verpflichtung. Schreiben Sie uns einfach eine kurze Nachricht.",
  },
];
