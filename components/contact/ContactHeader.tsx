import { SectionHeader } from "@/components/molecules/SectionHeader";
import { Statement } from "../molecules/Statement";

export const ContactHeader = () => {
  return (
    <section className="relative pb-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <SectionHeader 
            label="get in touch"
            title="start your journey to"
            gradientText="restoration."
          />
          <Statement text="our specialist team is ready to provide the support and guidance you need. reach out today for a confidential consultation." />
        </div>
      </div>
    </section>
  );
};
