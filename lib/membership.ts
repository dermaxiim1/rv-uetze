export type PriceRow = {
  label: string;
  amount: string;
  detail?: string;
};

export type PriceGroup = {
  title: string;
  rows: PriceRow[];
  note?: string;
};

export const PRICE_GROUPS: PriceGroup[] = [
  {
    title: "Mitgliedschaft",
    rows: [
      {
        label: "Aufnahmegebühr",
        amount: "0 €",
        detail: "Aktuell wird keine Aufnahmegebühr erhoben",
      },
      {
        label: "Jahresbeitrag",
        amount: "auf Anfrage",
        detail: "Der aktuelle Beitrag wird vom Vorstand mitgeteilt",
      },
      {
        label: "Mitgliedsantrag",
        amount: "per E-Mail",
        detail: "Antragsformular kommt per E-Mail vom Vorstand",
      },
    ],
    note: "Konkrete Beiträge erhalten Sie per E-Mail an info@rv-uetze.de.",
  },
  {
    title: "Boxenmiete",
    rows: [
      {
        label: "Pensionsbox",
        amount: "auf Anfrage",
        detail: "Selbstversorger — Fütterung, Einstreu und Weidegang in Eigenregie",
      },
      {
        label: "Inklusive",
        amount: "✓",
        detail: "Außenfenster, beheizte Tränke, Solarium, Waschplatz, Paddock-Mitnutzung",
      },
    ],
    note: "Aktuell ist eine Box frei. Aktuelle Preise per E-Mail an info@rv-uetze.de.",
  },
];
