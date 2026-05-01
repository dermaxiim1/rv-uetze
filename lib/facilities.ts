export type Facility = {
  id: string;
  name: string;
  dimensions?: string;
  capacity?: string;
  blurb: string;
  icon: string;
};

export const FACILITIES: Facility[] = [
  {
    id: "reithalle",
    name: "Reithalle",
    blurb:
      "Klassische Reithalle für Dressur- und Springunterricht, Lehrgänge und Hobby-Horse-Training. Hallenplan via Aushang am Heulager.",
    icon: "Home",
  },
  {
    id: "stallungen",
    name: "Pensionsboxen",
    capacity: "18 Boxen",
    blurb:
      "Großzügige, helle und luftige Boxen mit Außenfenstern und beheizten Tränken. Aktuell ist eine Box frei.",
    icon: "Square",
  },
  {
    id: "solarium",
    name: "Solarium & Waschplatz",
    blurb:
      "Solarium und Waschplatz im Stallgebäude — für die Pflege nach Ausritt, Training oder Turnier, mit warmem und kaltem Wasser.",
    icon: "Coffee",
  },
  {
    id: "paddocks",
    name: "Paddocks",
    capacity: "2 separate Flächen",
    blurb:
      "Zwei großzügige, getrennte Paddocks für Stuten und Wallache, mit Heu-Raufen — auch im Winter Auslauf das ganze Jahr.",
    icon: "LandPlot",
  },
  {
    id: "weiden",
    name: "Sommerweiden",
    blurb:
      "Weiden direkt an die Anlage angrenzend. Weide- und Paddockgang werden von den Einstellern eigenverantwortlich organisiert — direkter Draht in den Vorstand.",
    icon: "Leaf",
  },
  {
    id: "beerbusch",
    name: "Beerbusch direkt vor der Tür",
    blurb:
      "Wald „Beerbusch" mit ausgedehnten Reitwegen — lange Ausritte ins Grüne, jederzeit aus dem Stall.",
    icon: "Trees",
  },
];
