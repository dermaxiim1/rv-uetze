export type Horse = {
  id: string;
  name: string;
  breed: string;
  age?: string;
  discipline: string;
  story: string;
  image: string;
};

// Der RFU hat keine vereinseigenen Schulpferde — Horses-Sektion ist via
// SITE.sections.horses = false ausgeschaltet.
export const HORSES: Horse[] = [];
