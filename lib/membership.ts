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
    title: "Mitgliedsbeitrag · Erwachsene",
    rows: [
      { label: "Jahresbeitrag Einzelmitglied", amount: "108 €" },
      { label: "Aufnahmegebühr Einzel", amount: "90 €" },
      { label: "Jahresbeitrag Familie", amount: "170 €" },
      { label: "Aufnahmegebühr Familie", amount: "170 €" },
      { label: "Jahresbeitrag Passive Mitglieder", amount: "52 €", detail: "ohne Aufnahmegebühr" },
    ],
  },
  {
    title: "Mitgliedsbeitrag · Ermäßigt",
    rows: [
      { label: "Jahresbeitrag Einzel", amount: "54 €" },
      { label: "Aufnahmegebühr Einzel", amount: "45 €" },
    ],
    note: "Ermäßigt: Kinder, Jugendliche, Voltigierer, Studenten, Azubis, Um-/Schüler",
  },
  {
    title: "Monatlicher Beitrag",
    rows: [
      { label: "Voltigierer", amount: "30 €" },
      { label: "Schulreiter Unterricht", amount: "85 €" },
      { label: "Anlagennutzung Fremdreiter", amount: "47,60 €" },
      { label: "Reitbeteiligung Schulpferd", amount: "auf Anfrage" },
    ],
  },
  {
    title: "Aktivenumlage · jährlich",
    rows: [
      { label: "Boxenpächter", amount: "180 €" },
      { label: "Reiter, Reitbeteiligung, Voltigierer", amount: "90 €" },
    ],
    note: "Kann durch Arbeitsstunden (Bonuskarte) abgegolten werden — Aushang am Schwarzen Brett.",
  },
  {
    title: "Boxenmiete · monatlich",
    rows: [
      { label: "Box mit Stroheinstreu", amount: "400 €", detail: "Heu 2× tgl., Pellets/Hafer 3× tgl., Mo–Fr Misten + Einstreuen" },
      { label: "Box mit Leinenstroh", amount: "430 €", detail: "Heu 3× tgl., Pellets/Hafer 3× tgl., Mo–Fr Misten + ggf. Nachstreu" },
    ],
    note: "Zusätzlich: Weidepacht. Stand 02/2023, Änderungen vorbehalten.",
  },
];
