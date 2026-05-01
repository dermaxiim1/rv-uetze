# Pferdehof-Template (Hofgarten)

Ein-Seiter-Template für Reiterhöfe, Reitvereine und Pensionsställe. Aktuell live als Webseite des **Reiterverein Kronsberg e. V.** (Hannover-Laatzen) — gleichzeitig Vorlage für weitere Höfe.

**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind 4 · shadcn/ui · Vercel.

## Schnellstart

```bash
npm install
npm run dev      # http://localhost:3000
```

## Wofür das Template gut ist

- Klassische Landing-Page mit Hero + bis zu 11 modularen Sektionen (Verein, Reitanlage, Stallungen, Schulpferde, Unterricht, Mitgliedschaft, Veranstaltungen, Team, Reviews, Galerie, Kontakt).
- Editorial-Look (Fraunces Serif + Source Sans), gedämpfte „Hofgarten"-Palette aus Cream/Forest/Saddle.
- SEO + JSON-LD (`SportsClub` / `LocalBusiness`), dynamische `icon.png` & `opengraph-image.png` über `next/og`, automatische `sitemap.xml` / `robots.txt`.
- Auto-Deploy auf Vercel, kein extra Backend.

## Eigenen Hof aufsetzen

Das Repo ist als **GitHub Template** markiert. Auf der Repo-Seite oben rechts „Use this template" → neues Repo erzeugen, lokal klonen, dann:

1. **`lib/site.ts`** — die zentrale Konfiguration: Name, Kontakt, Adresse, Sektion-Headlines, Hero-Copy, Sektion-Toggles (`SITE.sections`).
2. **`lib/horses.ts`, `lib/facilities.ts`, `lib/team.ts`, `lib/membership.ts`, `lib/events.ts`, `lib/reviews.ts`, `lib/gallery.ts`, `lib/pension-features.ts`, `lib/lessons.ts`** — Listen-Inhalte je Sektion.
3. **`public/images/`** — Bilder ersetzen (gleiche Dateinamen oder Pfade in den Listen anpassen).
4. **`app/globals.css`** — Brand-Palette (`--paper`, `--ink`, `--forest`, `--saddle`, `--cream`, `--hay`).
5. **`lib/theme.ts`** — Hex-Spiegel der Palette für `next/og`-generierte Bilder (Favicon, OG).

Schritt-für-Schritt-Anleitung in [`TEMPLATE-USAGE.md`](./TEMPLATE-USAGE.md).

## Struktur

```
app/
  layout.tsx              SEO-Metadata, Fonts, Header/Footer
  page.tsx                Sektions-Komposition (rendert nach SITE.sections)
  icon.tsx                Dynamisches Favicon (next/og)
  opengraph-image.tsx     OG-Image (next/og)
  apple-icon.tsx          iOS-Icon
  robots.ts / sitemap.ts  SEO
  (legal)/                Impressum, Datenschutz

components/
  layout/                 Header, Footer, Mobile-Nav
  sections/               13 Sektionen — alle SITE-getrieben
  ui/                     SectionHeading, SectionLabel, StampBadge, …

lib/
  site.ts                 Identität + Sektion-Copy + Visibility-Toggles
  theme.ts                Hex-Farben für next/og
  horses.ts               Schulpferd-Liste
  facilities.ts           Anlagen-Liste
  team.ts                 Vorstand & Personal
  membership.ts           Beitragstabelle
  events.ts               Veranstaltungs-Kalender
  reviews.ts              Stimmen
  gallery.ts              Galerie-Bilder
  pension-features.ts     Box-/Stall-Features
  lessons.ts              Unterrichtsangebote
  json-ld.ts              SEO-Strukturdaten (leitet aus SITE/FACILITIES/TEAM ab)
```

## Deployment

Vercel-Standard:

```bash
vercel --prod
```

Oder Repo mit Vercel verbinden — jeder Push auf `main` deployt automatisch.
