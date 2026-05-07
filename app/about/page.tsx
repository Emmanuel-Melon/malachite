import { AboutHeader } from "@/components/about/AboutHeader";
import { TeamSection } from "@/components/about/TeamSection";
import { CorporateCulture } from '@/components/about/Culture';
import { Separator } from "@/components/molecules/separator";

export default function AboutPage() {
  return (
    <div className="space-y-24 md:space-y-0">
      <AboutHeader />
      <Separator />
      <TeamSection />
      <Separator />
      <CorporateCulture />
    </div>
  );
};