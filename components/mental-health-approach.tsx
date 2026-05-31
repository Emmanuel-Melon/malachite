import {
  Search,
  Dumbbell,
  Crown,
  ArrowRight
} from "lucide-react";

import { MyButton } from "@/components/atoms/button";
import { SectionHeader } from "./molecules/SectionHeader";
import { ApproachCard } from "./ApproachCard";
import { Statement } from "./molecules/Statement";

const focusAreas = [
  {
    icon: Search,
    tag: "FOCUS 01",
    title: "Gain Insight",
    description:
      "Gaining insight into the mental condition to identify root causes and specific challenges."
  },
  {
    icon: Crown,
    tag: "FOCUS 02",
    title: "Develop Strategy",
    description:
      "Developing strategies to develop and maintain wellbeing, and building mental and spiritual muscle."
  },
  {
    icon: Dumbbell,
    tag: "FOCUS 03",
    title: "Sustainable Recovery",
    description:
      "Achieving a sustainable recovery through core activities including treatment, training, and research."
  },
];

export const MentalHealthApproach = () => {

  return (
    <section className="py-24 bg-background relative overflow-hidden font-sans">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          <div className="lg:col-span-5 space-y-10">
            <SectionHeader
              label="Our Approach"
              title="Three crucial"
              gradientText="areas of focus."
            />

            <div className="space-y-6">
              <Statement
                text="our approach involves three crucial areas of focus designed to empower individuals to live independent lives."
                label="The Approach"
              />

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 text-sm font-medium text-foreground/80 tracking-widest">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 border-2 border-background flex items-center justify-center"><Search className="w-4 h-4 text-blue-500" /></div>
                    <div className="w-8 h-8 rounded-full bg-amber-500/20 border-2 border-background flex items-center justify-center"><Crown className="w-4 h-4 text-amber-500" /></div>
                    <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center"><Dumbbell className="w-4 h-4 text-primary" /></div>
                  </div>
                  <span>Insight • Strategy • Recovery</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {focusAreas.map((item, index) => (
              <ApproachCard
                key={index}
                index={index}
                icon={item.icon}
                tag={item.tag}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};