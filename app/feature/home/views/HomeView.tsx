import { ValuesSection } from "@/app/feature/home/components/ValuesSection";
import { Separator } from "@/components/atoms/separator";
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
      <Partners items={partners} />
      <MentalHealthApproach />
      <ValuesSection />
      <OurPrograms />
      <Separator />
      <OurObjectives />
      <Separator />
      <UpcomingEvents events={events} />
      <Separator />
      <Testimonials testimonials={testimonials} />
    </section>
  );
};
