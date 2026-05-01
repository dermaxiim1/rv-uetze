export type LessonOffering = {
  name: string;
  schedule: string;
  desc: string;
};

export const LESSONS: LessonOffering[] = [
  {
    name: "Dressur- & Springlehrgänge",
    schedule: "Wechselnde Termine übers Jahr",
    desc: "Lehrgänge mit externen Trainern in Dressur, Springen und Bodenarbeit. Termine werden per Aushang am Heulager und per E-Mail angekündigt.",
  },
  {
    name: "Hobby-Horse-Training",
    schedule: "14-täglich · Mittwoch 16:30–17:30",
    desc: "Hobby-Horse-Training mit Lena-Antje Wehrtmann. In den geraden Kalenderwochen — Einstieg jederzeit möglich.",
  },
  {
    name: "Sommerturnier",
    schedule: "3. Augustwochenende",
    desc: "Dressur- und Springprüfungen vom Führzügel bis Klasse L. Anmeldung via FN/NeOn — Ausschreibung und Zeitenplan vorab.",
  },
];
