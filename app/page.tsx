import { Hero } from "@/components/hero";
import { OurPrograms } from "@/components/our-programs";
import { MentalHealthApproach } from "@/components/mental-health-approach";
import { OurObjectives } from "@/components/our-objectives";
import { ValuesSection } from "@/components/about/ValuesSection";
import { Separator } from "@/components/molecules/separator";
import { Partners } from "@/components/partners";

export default function Home() {
  return (
    <section className="space-y-24 md:space-y-0">
      <Hero />
      <MentalHealthApproach />
      <Separator />
      <ValuesSection />
      <Separator />
      <Partners />
      <Separator />
      <OurPrograms />
      <Separator />
      <OurObjectives />
    </section>
  );
}
