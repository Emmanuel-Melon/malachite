import { AboutHeader } from "@/components/about/AboutHeader";
import { TeamSection } from "@/components/about/TeamSection";
import { CorporateCulture } from '@/components/about/Culture';
import { Separator } from "@/components/molecules/separator";

export default function AboutPage() {
  return (
    <section>
      <AboutHeader />
      <TeamSection />
      <Separator />
      <CorporateCulture />
    </section>
  );
};