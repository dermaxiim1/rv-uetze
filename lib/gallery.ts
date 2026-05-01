export type GalleryImage = {
  src: string;
  alt: string;
  className: string;
};

// Gallery-Sektion ist via SITE.sections.gallery = false ausgeschaltet,
// bis echte Fotos vom RFU vorliegen. Beispiel-Eintragsstruktur als
// Referenz unten erhalten.
export const GALLERY: GalleryImage[] = [];
