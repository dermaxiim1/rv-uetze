import Link from "next/link";

import { MobileNav } from "@/components/layout/mobile-nav";
import { SITE } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-14">
        <Link href="/" className="font-serif text-xl tracking-tight text-ink lg:text-2xl">
          {SITE.name}
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {SITE.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-ink transition-colors hover:text-forest"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${SITE.contact.phoneTel}`}
            className="hidden rounded-full bg-forest px-5 py-2.5 text-xs font-medium tracking-[0.04em] text-cream transition-all hover:-translate-y-px hover:bg-forest-deep md:inline-block"
          >
            Anrufen
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
