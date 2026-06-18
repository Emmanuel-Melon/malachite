import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import { MyButton } from "@/components/atoms/button";
import { InfoBlock } from "@/components/molecules/InfoBlock";
import { OverlappingImages } from "@/components/molecules/OverlappingImages";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { Section } from "@/components/organisms/section";
import { getObjectives } from "../data";
import { ObjectiveIconName } from "../home.types";

const iconMap: Record<ObjectiveIconName, LucideIcon> = {
  "bar-chart-3": BarChart3,
  "flask-conical": FlaskConical,
  "graduation-cap": GraduationCap,
  "heart-handshake": HeartHandshake,
};

export const OurObjectives = async () => {
  const objectives = await getObjectives();

  return (
    <Section>
      <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24">
        <div className="order-2 w-full space-y-8 lg:order-1 lg:w-1/2">
          <SectionHeader label="Our Objectives" title="Our focus" gradientText="with purpose." />
          <p className="text-muted-foreground text-lg leading-relaxed">
            We strive to bridge the gap in mental health care through a four-pillared approach to
            treatment, training, and documentation.
          </p>
          <div className="grid gap-8">
            {objectives.map((obj) => (
              <InfoBlock
                key={obj.id}
                icon={iconMap[obj.iconName]}
                title={obj.title}
                description={obj.description}
              />
            ))}
          </div>
          <div className="flex items-center gap-8">
            <MyButton size="lg" asChild>
              <Link href="/about">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </MyButton>
          </div>
        </div>

        <div className="order-1 w-full lg:order-2 lg:w-1/2">
          <OverlappingImages
            backImage="/family.jpg"
            backAlt="Our Mission"
            frontImage="/painter.jpg"
            frontAlt="Making Impact"
          />
        </div>
      </div>
    </Section>
  );
};
