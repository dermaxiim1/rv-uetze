export type EquineEvent = {
  id: string;
  title: string;
  cadence: string;
  desc: string;
  badge?: string;
};

export const EVENTS: EquineEvent[] = [
  {
    id: "sommerturnier",
    title: "Sommerturnier",
    cadence: "3. Augustwochenende",
    desc: "Dressur- und Springprüfungen vom Führzügel bis Klasse L. Optimale Wettkampfbedingungen, professionelle Organisation und liebevolle Verpflegung. Nächster Termin: 14.–16. August 2026.",
    badge: "Tradition",
  },
  {
    id: "wbo-tag",
    title: "WBO-Regionaltag",
    cadence: "31. Mai 2026",
    desc: "Regionalwertungsturnier nach WBO. Unbürokratischer Einstieg in den Turniersport für junge Pferde, junge Reiter und Wiedereinsteiger.",
  },
  {
    id: "reiterrallye",
    title: "Reiterrallye",
    cadence: "1. Mai 2026",
    desc: "Geländetag mit Stationsritten durch den Beerbusch — Spaß und Abenteuer für Reiter aller Altersklassen.",
  },
  {
    id: "lehrgaenge",
    title: "Lehrgänge übers Jahr",
    cadence: "verschiedene Termine",
    desc: "Dressur, Springen und Bodenarbeit mit externen Trainern. Aktuelle Termine via Aushang am Heulager und auf der Vereinsseite.",
  },
  {
    id: "gemeinschaft",
    title: "Vereinsleben",
    cadence: "ganzjährig",
    desc: "Gemeinsame Ausritte, Flohmärkte, Grünkohl-Essen und der traditionelle Weihnachtsritt — kleiner Verein, große Gemeinschaft.",
  },
];
