import {
  FlaskConical,
  HeartHandshake,
  GraduationCap,
  BarChart3,
  ArrowRight
} from "lucide-react";
import { MyButton } from "@/components/atoms/button";
import { SectionHeader } from './molecules/SectionHeader';
import { FocusItem } from './molecules/FocusItem';
import { OverlappingImages } from "./molecules/OverlappingImages";
import Link from "next/link";

const objectives = [
  {
    id: 1,
    icon: FlaskConical,
    title: "clinical innovation",
    description: "develop, test, and adapt therapeutic approaches for treating mental health problems.",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    id: 2,
    icon: HeartHandshake,
    title: "service delivery",
    description: "provide a wide range of mental health services including awareness, treatment, and referrals through outreach programs.",
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    id: 3,
    icon: GraduationCap,
    title: "capacity building",
    description: "train human resource professionals, business owners, teachers, and community workers on relevant mental health topics.",
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    id: 4,
    icon: BarChart3,
    title: "evidence & research",
    description: "conduct research and evaluations to document the effectiveness of the approaches developed.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  }
];

export const OurObjectives = () => {

  return (
    <section className="py-24 bg-background font-sans overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          <div className="w-full lg:w-1/2 order-2 lg:order-1 space-y-8">
            <SectionHeader
              label="Our Objectives"
              title="Our focus"
              gradientText="with purpose."
            />

            <p className="text-muted-foreground text-lg leading-relaxed lowercase">
              we strive to bridge the gap in mental health care through a four-pillared approach to treatment, training, and documentation.
            </p>

            <div className="grid gap-8">
              {objectives.map((obj) => (
                <FocusItem key={obj.id} description={obj.description} icon={obj.icon} title={obj.title} />
              ))}
            </div>

            <div className="flex items-center gap-8">
              <MyButton size="lg" asChild>
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </MyButton>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <OverlappingImages
              backImage="/woman.jpg"
              backAlt="Our Mission"
              frontImage="/couple.jpg"
              frontAlt="Making Impact"
            />
          </div>

        </div>
      </div>
    </section>
  );
};