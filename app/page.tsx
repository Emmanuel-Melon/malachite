import { Hero } from "@/components/hero";
import { OurPrograms } from "@/components/our-programs";
import { MentalHealthApproach } from "@/components/mental-health-approach";
import { OurObjectives } from "@/components/our-objectives";
import { ValuesSection } from "@/components/about/ValuesSection";


export default function Home() {
  return (
    <section>
      <Hero />
      <OurPrograms />
      <ValuesSection />
      <MentalHealthApproach />
      <OurObjectives />
    </section>
  );
}
