import { About } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact-section";
import { EventsSection } from "@/components/sections/events-section";
import { FacilitiesSection } from "@/components/sections/facilities-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { Hero } from "@/components/sections/hero";
import { HorsesSection } from "@/components/sections/horses-section";
import { MembershipSection } from "@/components/sections/membership-section";
import { PensionSection } from "@/components/sections/pension-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { TeamSection } from "@/components/sections/team-section";
import { VielseitigkeitSection } from "@/components/sections/vielseitigkeit-section";
import { localBusinessJsonLd } from "@/lib/json-ld";
import { SITE } from "@/lib/site";

export default function HomePage() {
  const s = SITE.sections;
  return (
    <main>
      <Hero />
      {s.about && <About />}
      {s.facilities && <FacilitiesSection />}
      {s.pension && <PensionSection />}
      {s.horses && <HorsesSection />}
      {s.lessons && <VielseitigkeitSection />}
      {s.membership && <MembershipSection />}
      {s.events && <EventsSection />}
      {s.team && <TeamSection />}
      {s.reviews && <ReviewsSection />}
      {s.gallery && <GallerySection />}
      {s.contact && <ContactSection />}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
    </main>
  );
}
