import { ValuesSection } from "@/app/feature/about/components/ValuesSection";
import { Separator } from "@/components/molecules/separator";
import type { Partner, SiteData } from "@/lib/data/shared.types";
import { MentalHealthApproach } from "../components/MentalHealthApproach";
import { OurObjectives } from "../components/OurObjectives";
import { OurPrograms } from "../components/OurPrograms";
import { Testimonials } from "../components/Testimoials";
import { UpcomingEvents } from "../components/UpcomingEvents";
import { Hero } from "../components/hero";
import { Partners } from "../components/partners";
import type { HeroData, HeroGridItem, Testimonial } from "../home.types";

interface HomeViewProps {
  hero: HeroData;
  partners: Partner[];
  site: SiteData;
  testimonials: Testimonial[];
  gridItems: HeroGridItem[];
}

export const HomeView = ({ hero, partners, site, testimonials, gridItems }: HomeViewProps) => {
  return (
    <section>
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
      <Separator />
      <ValuesSection />
      <Separator />
      <OurPrograms />
      <Separator />
      <OurObjectives />
      <Separator />
      <UpcomingEvents />
      <Separator />
      <Testimonials testimonials={testimonials} />
    </section>
  );
};
