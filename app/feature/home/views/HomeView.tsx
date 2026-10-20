import { ValuesSection } from "@/app/feature/home/components/ValuesSection";
import { Separator } from "@/components/atoms/separator";
import { Reveal } from "@/components/atoms/Reveal";
import type { Partner, SiteData } from "@/lib/data/shared.types";
import { VIEW_LAYOUT_CLASS } from "@/lib/styles";
import { MentalHealthApproach } from "../components/MentalHealthApproach";
import { OurObjectives } from "../components/OurObjectives";
import { OurPrograms } from "../components/OurPrograms";
import { Testimonials } from "../components/Testimoials";
import { UpcomingEvents } from "../components/UpcomingEvents";
import { Hero } from "../components/hero";
import { Partners } from "../components/partners";
import type { Event, HeroData, HeroGridItem, Testimonial } from "../home.types";
import { SupportPathways } from "../components/SupportPathways";
import { FAQSection } from "../components/FAQSection";
import { YourPrivacyMatters } from "../components/YourPrivacyMatters";

interface HomeViewProps {
  hero: HeroData;
  partners: Partner[];
  site: SiteData;
  testimonials: Testimonial[];
  gridItems: HeroGridItem[];
  events: Event[];
}

export const HomeView = ({
  hero,
  partners,
  site,
  testimonials,
  gridItems,
  events,
}: HomeViewProps) => {
  return (
    <section className={VIEW_LAYOUT_CLASS}>
      <Hero
        {...hero}
        founder={{
          founderName: site.founderName,
          founderQuote: site.founderQuote,
          founderRole: site.founderRole,
        }}
        socials={site.socials}
        gridItems={gridItems}
      />
      <Reveal>
        <Separator />
      </Reveal>
      <Reveal>
        <SupportPathways />
      </Reveal>
      <Reveal>
        <Separator />
      </Reveal>
      <Reveal>
        <Partners items={partners} groupedBySponsor />
      </Reveal>
      <Reveal>
        <Separator />
      </Reveal>
      <Reveal>
        <MentalHealthApproach />
      </Reveal>
      <Reveal>
        <ValuesSection />
      </Reveal>
      <Reveal>
        <Separator />
      </Reveal>
      <Reveal>
        <OurPrograms />
      </Reveal>
      <Reveal>
        <Separator />
      </Reveal>
      <Reveal>
        <YourPrivacyMatters />
      </Reveal>
      <Reveal>
        <Separator />
      </Reveal>
      <Reveal>
        <OurObjectives />
      </Reveal>
      <Reveal>
        <Separator />
      </Reveal>
      <Reveal>
        <UpcomingEvents events={events} />
      </Reveal>
      <Reveal>
        <Separator />
      </Reveal>
      <Reveal>
        <Testimonials testimonials={testimonials} />
      </Reveal>
      <Reveal>
        <Separator />
      </Reveal>
      <Reveal>
        <FAQSection />
      </Reveal>
    </section>
  );
};
