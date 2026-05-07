import { Briefcase, School, Users2, Megaphone } from "lucide-react";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { FocusItem } from "@/components/molecules/FocusItem";

const programTeasers = [
  {
    icon: Briefcase,
    title: "workplace mental health",
    description: "targeted solutions for corporate environments, focusing on productivity and employee well-being."
  },
  {
    icon: School,
    title: "school-based services",
    description: "supporting adolescent development through emotional literacy and school-wide mental health advocacy."
  },
  {
    icon: Users2,
    title: "individuals & groups",
    description: "tailored therapeutic interventions for depression, anxiety, and complex recovery journeys."
  },
  {
    icon: Megaphone,
    title: "awareness & outreach",
    description: "utilizing digital media and community series to bridge the gap in mental health literacy."
  }
];

export const ProgramOverview = () => {
  return (
    <section className="py-24 bg-background font-sans overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-32">
            <SectionHeader
              label="OUR OFFERINGS"
              title="Tailored mental"
              gradientText="health programs."
            />

            <div className="space-y-8">
              <p className="text-muted-foreground text-xl leading-relaxed lowercase italic">
                we provide evidence-based services designed for specific environments—from the boardroom to the classroom.
              </p>
              
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-y-12">
              {programTeasers.map((program, index) => (
                <div 
                  key={index} 
                  className="group relative last:pb-0"
                >
                  <FocusItem 
                    icon={program.icon} 
                    title={program.title} 
                    description={program.description} 
                  />

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};