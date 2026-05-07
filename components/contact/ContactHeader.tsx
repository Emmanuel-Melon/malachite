import React from 'react';
import { SectionHeader } from "@/components/molecules/SectionHeader";

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
          <p className="mt-8 text-xl md:text-2xl text-muted-foreground leading-relaxed border-l-4 border-primary pl-6 max-w-2xl">
            our specialist team is ready to provide the support and guidance you need. reach out today for a confidential consultation.
          </p>
        </div>
      </div>
    </section>
  );
};
