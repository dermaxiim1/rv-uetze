export type Review = {
  text: string;
  author: string;
  detail: string;
};

// Reviews-Sektion ist via SITE.sections.reviews = false ausgeschaltet.
export const REVIEWS: Review[] = [];
