export type GalleryImage = {
  src: string;
  alt: string;
  className: string;
};

// Platzhalter — finale Fotos später (Halle, Plätze, Pferde, Wald, Solarium)
export const GALLERY: GalleryImage[] = [
  {
    src: "/images/gallery/halle.jpg",
    alt: "Reithalle 20 × 40 m bei Tageslicht",
    className: "col-span-12 row-span-2 sm:col-span-6 lg:col-span-5 lg:row-span-4",
  },
  {
    src: "/images/gallery/ebbe-flut.jpg",
    alt: "Ebbe-Flut-Platz mit Reiter im Galopp",
    className: "col-span-6 row-span-2 lg:col-span-4",
  },
  {
    src: "/images/gallery/dressurplatz.jpg",
    alt: "Dressurplatz im Sommer",
    className: "col-span-6 row-span-2 lg:col-span-3 lg:row-span-3",
  },
  {
    src: "/images/gallery/wald.jpg",
    alt: "Reitweg im angrenzenden Wald",
    className: "col-span-6 row-span-2 lg:col-span-4",
  },
  {
    src: "/images/gallery/fuehranlage.jpg",
    alt: "Führanlage mit acht Plätzen",
    className: "col-span-6 row-span-2 lg:col-span-3 lg:row-span-3",
  },
  {
    src: "/images/gallery/solarium.jpg",
    alt: "Pferdesolarium nach dem Training",
    className: "col-span-6 row-span-2 lg:col-span-4",
  },
  {
    src: "/images/gallery/weide.jpg",
    alt: "Weidegang im Sommer",
    className: "col-span-12 row-span-2 sm:col-span-6 lg:col-span-4",
  },
];
