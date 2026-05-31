import Link from "next/link";
import { ArrowRight, Building2, GraduationCap, type LucideIcon } from "lucide-react";
import { MyButton } from "@/components/atoms/button";
import { InfoBlock } from "@/components/molecules/InfoBlock";
import { OverlappingImages } from "@/components/molecules/OverlappingImages";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { Section } from "@/components/organisms/section";
import { getHomePrograms } from "../data";
import type { HomeProgram } from "../home.types";

const iconMap: Record<HomeProgram["iconName"], LucideIcon> = {
  "building-2": Building2,
  "graduation-cap": GraduationCap,
};

export const OurPrograms = async () => {
  const programs = await getHomePrograms();

  return (
    <Section>
      <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24">
        <div className="order-2 w-full space-y-10 lg:order-1 lg:w-1/2">
          <SectionHeader
            label="Malachite's Programs"
            title="Support for every"
            gradientText="environment."
          />

          <div className="grid gap-8">
            {programs.map((program) => (
              <InfoBlock
                key={program.id}
                description={program.description}
                icon={iconMap[program.iconName]}
                title={program.title}
              />
            ))}
          </div>

          <div className="flex items-center gap-8">
            <MyButton asChild size="lg">
              <Link href="/programs">
                explore programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </MyButton>
          </div>
        </div>

        <div className="order-1 w-full lg:order-2 lg:w-1/2">
          <OverlappingImages
            backAlt="Community Support"
            backImage="/school.jpg"
            className="h-[500px] md:h-[700px]"
            frontAlt="Mental Health Coaching"
            frontImage="/corporate.jpg"
          />
        </div>
      </div>
    </Section>
  );
};
