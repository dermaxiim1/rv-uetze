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
    dimensions: "43 × 20 m",
    blurb:
      "Direkt über die Stallgasse erreichbar. Viel Licht, eigene Bewässerungsanlage. Schul- und Voltigierbetrieb sowie Dressur- und Springunterricht.",
    icon: "Home",
  },
  {
    id: "aussenplatz",
    name: "Außenreitplatz",
    dimensions: "60 × 30 m",
    blurb:
      "Großzügig direkt neben der Halle. Festes Dressurviereck und verschiedene Hindernisse — ideal zur Vorbereitung auf Prüfung oder Parcours.",
    icon: "LandPlot",
  },
  {
    id: "reiterstuebchen",
    name: "Reiterstübchen",
    blurb:
      "Großzügiger Aufenthaltsraum im oberen Stockwerk. Überblick über Halle und Außenplatz, gemütlich für Beisammensein, Klönen, Vereinsabende.",
    icon: "Coffee",
  },
  {
    id: "stallungen",
    name: "Stallungen",
    capacity: "23 + 4 Boxen",
    blurb:
      "23 Innen- und Außenboxen für Einsteller, 8–16 m² groß, luftig. Plus 4 Boxen für die vereinseigenen Schulpferde.",
    icon: "Square",
  },
  {
    id: "weiden",
    name: "Sommerweiden",
    blurb:
      "Werktags morgens raus, mittags rein. Harmonische Gruppen, gepflegte Flächen. Fester Weideplatz von Frühjahr bis Herbst möglich.",
    icon: "Leaf",
  },
  {
    id: "paddock",
    name: "Winterweiden & Paddocks",
    blurb:
      "Werktags Paddock, je nach Wetterlage zusätzlich Winterweide. Tägliche Bewegung das ganze Jahr.",
    icon: "Snowflake",
  },
  {
    id: "leinemasch",
    name: "Leinemasch direkt vor der Tür",
    blurb:
      "Naturschutzgebiet direkt am Außenplatz. Lange Ausritte ohne Asphalt, jederzeit aus dem Stall.",
    icon: "Trees",
  },
];
