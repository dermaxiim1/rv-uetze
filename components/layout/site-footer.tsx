import Link from "next/link";

import { SITE } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink px-6 pb-9 pt-20 text-cream lg:px-14">
      <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="flex size-12 items-center justify-center rounded-full border border-cream/30 font-serif text-lg italic"
            >
              {SITE.shortName}
            </span>
            <p className="font-serif text-2xl italic md:text-3xl">{SITE.name}</p>
          </div>
          <p className="mt-4 text-sm leading-relaxed opacity-80">{SITE.tagline}</p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed opacity-80">
            {SITE.footer.tagline}
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-serif text-base font-medium">{SITE.footer.addressLabel}</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>{SITE.address.street}</li>
            <li>
              {SITE.address.postalCode} {SITE.address.city}
            </li>
            <li>{SITE.address.region}</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-serif text-base font-medium">{SITE.footer.contactLabel}</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {SITE.contact.phoneTel && (
              <li>
                <a
                  href={`tel:${SITE.contact.phoneTel}`}
                  className="transition-opacity hover:opacity-100"
                >
                  {SITE.contact.phone}
                </a>
              </li>
            )}
            <li>
              <a
                href={`mailto:${SITE.contact.email}`}
                className="transition-opacity hover:opacity-100"
              >
                {SITE.contact.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-serif text-base font-medium">{SITE.footer.infoLabel}</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>
              <Link href="/impressum">Impressum</Link>
            </li>
            <li>
              <Link href="/datenschutz">Datenschutz</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1440px] flex-col items-start justify-between gap-2 border-t border-cream/10 pt-8 text-xs opacity-50 md:flex-row">
        <span>
          © {year} {SITE.name} · {SITE.owner}
        </span>
        <span>{SITE.address.city}</span>
      </div>
    </footer>
  );
}
