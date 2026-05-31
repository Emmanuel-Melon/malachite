import { Crown, Dumbbell, type LucideIcon, Search } from "lucide-react";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { Statement } from "@/components/molecules/Statement";
import { getFocusAreas } from "../data";
import type { FocusArea } from "../home.types";
import { ApproachCard } from "./ApproachCard";

const iconMap: Record<FocusArea["iconName"], LucideIcon> = {
  search: Search,
  crown: Crown,
  dumbbell: Dumbbell,
};

export const MentalHealthApproach = async () => {
  const focusAreas = await getFocusAreas();

  return (
    <section className="bg-background relative overflow-hidden py-24 font-sans">
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid items-start gap-16 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-5">
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
                <div className="text-foreground/80 flex items-center gap-4 text-sm font-medium tracking-widest">
                  <div className="flex -space-x-2">
                    <div className="border-background flex h-8 w-8 items-center justify-center rounded-full border-2 bg-blue-500/20">
                      <Search className="h-4 w-4 text-blue-500" />
                    </div>
                    <div className="border-background flex h-8 w-8 items-center justify-center rounded-full border-2 bg-amber-500/20">
                      <Crown className="h-4 w-4 text-amber-500" />
                    </div>
                    <div className="bg-primary/20 border-background flex h-8 w-8 items-center justify-center rounded-full border-2">
                      <Dumbbell className="text-primary h-4 w-4" />
                    </div>
                  </div>
                  <span>Insight • Strategy • Recovery</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-7">
            {focusAreas.map((item, index) => (
              <ApproachCard
                key={index}
                index={index}
                icon={iconMap[item.iconName]}
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
