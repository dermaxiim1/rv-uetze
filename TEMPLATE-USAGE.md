# Template-Anleitung — neuen Reiterhof aufsetzen

So wandelst du das Template Schritt für Schritt in eine fertige Webseite für einen anderen Hof.

## 0. Repo erzeugen

Auf GitHub auf das Template-Repo gehen → **„Use this template"** → **„Create a new repository"** → Name z. B. `pferdehof-musterhof`. Lokal klonen:

```bash
git clone git@github.com:<dein-user>/pferdehof-musterhof.git
cd pferdehof-musterhof
npm install
npm run dev
```

## 1. Identität (`lib/site.ts`)

Oben in der Datei den Identitäts-Block austauschen:

```ts
name: "Reitstall Musterhof",
shortName: "RM",
tagline: "Pensionsstall & Reitschule · Münster",
description: "...",
owner: "Vorname Nachname · Inhaber",
region: "Münster · Münsterland",
founded: "1985",
```

`url` braucht meistens nichts — Vercel füllt automatisch über `VERCEL_PROJECT_PRODUCTION_URL`. Wenn eine Custom-Domain dran ist, `NEXT_PUBLIC_SITE_URL` setzen (entweder als ENV-Var auf Vercel oder einmalig hier den Fallback ändern).

## 2. Kontakt + Adresse (`lib/site.ts`)

```ts
contact: {
  phone: "0123 4567890",
  phoneTel: "+491234567890",
  phoneLabel: "Anfragen · Vorname Nachname",
  email: "info@musterhof.de",
  contactForm: "/kontakt",
},
address: {
  street: "Musterweg 1",
  postalCode: "48149",
  city: "Münster",
  region: "NRW",
  googleMapsQuery: "Musterweg+1,+48149+Münster",
  geo: { lat: 51.9606, lng: 7.6261 },
  transit: "Bus 14 — Haltestelle Musterplatz",
},
```

`addressRegion` (Bundesland) für JSON-LD ggf. anpassen.

## 3. Sektion-Sichtbarkeit (`SITE.sections`)

Welche Sektionen soll der Hof haben? `false` → wird nicht gerendert.

```ts
sections: {
  about: true,
  facilities: true,
  pension: false,    // reiner Reitschulbetrieb? → false
  horses: true,
  lessons: true,
  membership: false, // kein Verein? → false
  events: true,
  team: true,
  reviews: true,
  gallery: true,
  contact: true,
},
```

## 4. Sektion-Headlines (`SITE.about` … `SITE.contactSection`)

Jede Sektion hat `eyebrow` (kleines Label oben), `heading: { before, em, after }` (zweizeiliger Display-Titel) und je nach Sektion noch `intro`, `paragraphs`, `quote`, `contactNote` etc.

Beispiel:

```ts
horses: {
  eyebrow: "Unsere Schulpferde",
  heading: {
    before: "Acht Pferde,",
    em: "ein Team",
    after: ".",
  },
  intro: "Vom Volti-Pony bis zum Hannoveraner — alle vereinseigen, alle täglich im Einsatz.",
},
```

## 5. Listen-Daten

Jede dieser Dateien ist ein einfaches Array — Einträge entfernen / hinzufügen / texten:

| Datei | Inhalt |
|---|---|
| `lib/horses.ts` | Schulpferde (Bild, Name, Rasse, Alter, Disziplin, Story) |
| `lib/facilities.ts` | Anlagen (Halle, Plätze, Stallungen, Weiden, Reiterstübchen) |
| `lib/team.ts` | Vorstand & Personal (Name, Rolle, Bio) |
| `lib/membership.ts` | Beitragstabelle (Aufnahme, Jahresbeitrag, Boxenmiete …) |
| `lib/events.ts` | Veranstaltungen (Lehrgänge, Stallfeste …) |
| `lib/reviews.ts` | Stimmen von Einstellern / Eltern / Mitgliedern |
| `lib/gallery.ts` | Galerie-Bilder |
| `lib/pension-features.ts` | Was eine Box bei euch enthält (Fütterung, Mistarbeit, Weide …) |
| `lib/lessons.ts` | Unterrichtsangebote (Reiten, Voltigieren, Schnupperstunde) |

**Schema:** Jede Datei exportiert eine Type-Definition + ein Array — TypeScript meckert, wenn du Felder vergisst.

## 6. Bilder (`public/images/`)

Die existierenden Pfade behalten (Pfade in den Listen-Dateien zeigen darauf):

```
public/images/
  hero/anlage.jpg       → Hero-Bild (volle Breite, idealerweise Querformat 1920×1080+)
  horses/<id>.jpg       → ein Bild pro Schulpferd (Hochformat 4:5, ~1200×1500)
  gallery/01.jpg…       → Galerie (gemischte Formate, ~1600px lange Kante)
```

**Achtung:** Der Hero-Bildname kann frei bleiben — er wird in `SITE.hero.image` referenziert. Andere Pfade kommen aus den Listen-Dateien (`HORSES[i].image`, `GALLERY[i].src` etc.).

## 7. Brand-Palette (`app/globals.css` + `lib/theme.ts`)

Die Default-Palette ist „Hofgarten" (Cream + Forest + Saddle). Für anderen Hof in `app/globals.css` umstellen:

```css
:root {
  --paper:    #f5efe3;
  --ink:      #231c13;
  --forest:   #3f5a3a;   /* Akzentfarbe — Buttons, Italic-Em, Forest-Sektion */
  --saddle:   #8e6a3d;
  --cream:    #fbf6ea;
  --hay:      #d9c89a;
  /* … die abgeleiteten ink-soft, forest-deep, paper-dark mitziehen */
}
```

**Wichtig:** Dieselben Hex-Werte parallel in **`lib/theme.ts`** spiegeln — `next/og` (Favicon, OG-Image) versteht keine CSS-Variablen.

## 8. SEO

In `lib/site.ts`:

- `keywords: string[]` → relevante Such-Phrasen für die Region
- `sports: string[]` → schema.org-Werte (`Equestrian`, `Dressage`, `Show Jumping`, `Vaulting` …)
- `addressRegion: "Niedersachsen"` → Bundesland für JSON-LD

## 9. Legal

`app/(legal)/impressum/page.tsx` und `app/(legal)/datenschutz/page.tsx` ziehen Identität automatisch aus `SITE`. Vor Live-Schaltung:
- USt-ID, Vereinsregister-Nr. etc. ergänzen
- Datenschutzerklärung gegen aktuelle Vorlage gegenchecken

## 10. Deploy

```bash
gh repo create pferdehof-musterhof --public --source=. --push
```

Auf vercel.com → „Add New Project" → das Repo wählen → „Deploy". Ab jetzt deployt jeder Push auf `main` automatisch.

Custom-Domain: Vercel-Projekt → Settings → Domains → eintragen, dann beim Registrar A/CNAME wie von Vercel angegeben setzen. `NEXT_PUBLIC_SITE_URL` als ENV-Var auf die finale Domain setzen, sonst zeigen `<link rel="canonical">` und JSON-LD weiter auf die `vercel.app`-Subdomain.

## Smoke-Test vor Live-Schaltung

- [ ] `npm run build` läuft ohne TS-/Lint-Fehler durch
- [ ] Alle Sektionen rendern (oder sind bewusst per `SITE.sections` aus)
- [ ] Hero-Bild zeigt in beide Mobile/Desktop-Größen sauber
- [ ] Telefon-Link öffnet Anruf-Dialog am Handy
- [ ] Maps-Link springt auf richtige Adresse
- [ ] Favicon im Tab zeigt neuen `shortName`
- [ ] OG-Image über `https://www.opengraph.xyz/?url=https://<deine-domain>` geprüft
- [ ] JSON-LD über [Rich Results Test](https://search.google.com/test/rich-results) validiert
- [ ] Impressum/Datenschutz fachlich freigegeben
