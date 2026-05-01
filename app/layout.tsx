import type { Metadata, Viewport } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SITE } from "@/lib/site";
import { THEME } from "@/lib/theme";

import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.owner }],
  keywords: [...SITE.keywords],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  alternates: { canonical: SITE.url },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: THEME.paper,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${fraunces.variable} ${sourceSans.variable}`}>
      <body className="min-h-screen bg-paper text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-cream focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-forest"
        >
          Zum Hauptinhalt springen
        </a>
        <SiteHeader />
        <div id="main">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
