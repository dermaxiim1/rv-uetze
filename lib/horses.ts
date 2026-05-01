export type Horse = {
  id: string;
  name: string;
  breed: string;
  age?: string;
  discipline: string;
  story: string;
  image: string;
};

// Echte RVK-Schulpferde (Stand Vereinsseite).
export const HORSES: Horse[] = [
  {
    id: "q7",
    name: "Q7",
    breed: "Hannoveraner Fuchswallach",
    age: "12 Jahre · über 170 cm",
    discipline: "Schulbetrieb · Volti-Hoffnung",
    story:
      "Q7 gehört zu den Größten in unserer Schulpferderiege. Frisch zum Jahresstart bei uns — wir wünschen ihm und uns viele schöne gemeinsame Momente.",
    image: "/images/horses/q7.jpg",
  },
  {
    id: "inka",
    name: "Inka",
    breed: "Stute",
    age: "8 Jahre",
    discipline: "Schul- & Voltipferd",
    story:
      "Seit knapp drei Jahren im Schulbetrieb. Wächst in ihre Rolle als Voltipferd hinein — ruhig, gelassen, mit dem nötigen Dickkopf.",
    image: "/images/horses/inka.jpg",
  },
  {
    id: "nevado",
    name: "Nevado",
    breed: "Appaloosa",
    age: "geboren 2013 in Italien",
    discipline: "Fortgeschrittene · Longe",
    story:
      "Hat im Verein ein neues Zuhause gefunden. Wird besonders mit fortgeschrittenen Reitern und an der Longe eingesetzt.",
    image: "/images/horses/nevado.jpg",
  },
  {
    id: "polly",
    name: "Polly",
    breed: "Schulpony",
    discipline: "Reit- & Voltistunden",
    story:
      "Bringt Erfahrung mit kleineren und jüngeren Reitschüler:innen mit. Hat in Pebbles eine gute Schulpony-Freundin gefunden — geduldig auch in den Voltistunden.",
    image: "/images/horses/polly.jpg",
  },
  {
    id: "pebbles",
    name: "Pebbles",
    breed: "Pony",
    discipline: "Reitstunden Anfänger",
    story:
      "Fleißiges Pony in Schritt und Trab — möchte alles richtig machen. Bequeme Gangarten und freundliches Wesen, beliebt bei Klein und Groß.",
    image: "/images/horses/pebbles.jpg",
  },
  {
    id: "bramble",
    name: "Bramble",
    breed: "Welsh-Cob",
    age: "4 Jahre",
    discipline: "Nachwuchs · in Ausbildung",
    story:
      "Als 3,5-Jähriger zu uns gekommen. Im Umgang ein Schatz, besonnen und freundlich. Lernt jetzt langsam die Atmosphäre des Schulpferdeunterrichts kennen.",
    image: "/images/horses/bramble.jpg",
  },
];
