import { AboutHeader } from "@/components/about/AboutHeader";
import { TeamSection } from "@/components/about/TeamSection";
import { CorporateCulture } from '@/components/about/Culture';
import { Separator } from "@/components/molecules/separator";

export default function AboutPage() {
  return (
    <div className="space-y-24 md:space-y-0">
      <AboutHeader 
        headerLabel="our story"
        headerTitle="pioneering the future of"
        headerGradientText="mental wellness."
        statementLabel="The Vision"
        statementText="founded in 2026, malachite medical centre was born from a vision to bridge the gap between clinical excellence and compassionate community support. our mission is to provide accessible, evidence-based mental health services that empower individuals to achieve sustainable recovery and independence."
        imageSrc="/tina.png"
        imageAlt="Christina Angela Ntulo"
        founderRole="Founder & CEO"
        founderName={<>Christina <br /> Angela Ntulo</>}
      />
      <Separator />
      <TeamSection />
      <Separator />
      <CorporateCulture />
    </div>
  );
}