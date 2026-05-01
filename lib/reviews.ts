export type Review = {
  text: string;
  author: string;
  detail: string;
};

// Repräsentative Stimmen — durch echte O-Töne ersetzen, sobald sie vorliegen.
export const REVIEWS: Review[] = [
  {
    text: "Mein Sohn fing hier mit sechs an zu voltigieren. Heute reitet er Dressur — und immer noch im selben Verein.",
    author: "Familie K.",
    detail: "Mitglieder seit 2014",
  },
  {
    text: "Die Schulpferde sind das Herzstück. Polly und Pebbles haben unsere Tochter durch ihre erste Saison getragen — geduldig und immer freundlich.",
    author: "Anke S.",
    detail: "Mutter einer Reitschülerin",
  },
  {
    text: "Direkt aus dem Stall in die Leinemasch. Wer einmal dort lange Ausritte gemacht hat, will woanders nicht mehr reiten.",
    author: "Klaus M.",
    detail: "Boxenpächter",
  },
  {
    text: "Bei den Lehrgängen externer Trainer trifft man immer auf neues Wissen. Und im Reiterstübchen kennt jeder jeden.",
    author: "Stephan R.",
    detail: "Aktivmitglied · Vielseitigkeit",
  },
];
