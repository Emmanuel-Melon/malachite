import React from 'react';
import { SectionHeader } from "@/components/molecules/SectionHeader";

const PARTNERS = [
  { name: "Hillcrest International", category: "Education" },
  { name: "Standard Chartered", category: "Corporate" },
  { name: "Greenhill Academy", category: "Education" },
  { name: "Nile Breweries", category: "Corporate" },
  { name: "Gems Cambridge", category: "Education" },
  { name: "Absa Bank", category: "Corporate" },
];

export const Partners = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Context */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeader 
              label="Trust & Impact"
              title="Partnering with"
              gradientText="leading institutions."
            />
            <p className="text-muted-foreground text-lg leading-relaxed lowercase italic">
              we are proud to support the mental wellbeing of students, educators, and professionals across east africa's premier organizations.
            </p>
          </div>

          {/* Right Side: Minimalist Logo Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
              {PARTNERS.map((partner, index) => (
                <div 
                  key={index}
                  className="group relative h-32 md:h-40 flex flex-col items-center justify-center p-6 rounded-[2.5rem] border border-border/40 bg-secondary/10 transition-all duration-500 hover:border-primary/40 hover:bg-transparent hover:-translate-y-1"
                >
                  {/* Category Tag */}
                  <span className="absolute top-4 text-[8px] tracking-[.4em] uppercase opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all font-bold">
                    {partner.category}
                  </span>
                  
                  {/* Partner Name Placeholder (Swap for <Image /> later) */}
                  <span className="text-sm md:text-base font-medium tracking-tighter text-muted-foreground group-hover:text-foreground transition-colors text-center uppercase">
                    {partner.name}
                  </span>

                  {/* Subtle Accent Dot */}
                  <div className="absolute bottom-4 w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};