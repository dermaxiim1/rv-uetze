import { FACILITIES } from "./facilities";
import { SITE } from "./site";
import { TEAM } from "./team";

const amenityFromFacility = (f: (typeof FACILITIES)[number]) => {
  const detail = f.dimensions ?? f.capacity;
  return {
    "@type": "LocationFeatureSpecification" as const,
    name: detail ? `${f.name} ${detail}` : f.name,
  };
};

const isBoardMember = (m: (typeof TEAM)[number]) =>
  /vorsitzend/i.test(m.role) || /vorstand/i.test(m.role);

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["SportsClub", "SportsActivityLocation", "LocalBusiness"],
  name: SITE.name,
  alternateName: SITE.shortName,
  description: SITE.description,
  url: SITE.url,
  telephone: SITE.contact.phone,
  email: SITE.contact.email,
  foundingDate: SITE.founded,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    postalCode: SITE.address.postalCode,
    addressLocality: SITE.address.city,
    addressRegion: SITE.addressRegion,
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.address.geo.lat,
    longitude: SITE.address.geo.lng,
  },
  sport: SITE.sports,
  amenityFeature: FACILITIES.map(amenityFromFacility),
  member: TEAM.filter(isBoardMember).map((m) => ({
    "@type": "Person" as const,
    name: m.name,
    jobTitle: m.role,
  })),
} as const;
