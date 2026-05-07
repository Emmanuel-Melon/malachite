import { Building2, GraduationCap, ArrowRight } from "lucide-react";
import { MyButton } from "@/components/atoms/button";
import { SectionHeader } from './molecules/SectionHeader';
import { OverlappingImages } from './molecules/OverlappingImages';
import { FocusItem } from "./molecules/FocusItem";
import Link from 'next/link';

export const OurPrograms = () => {
  const programs = [
    {
      id: "workplace",
      icon: Building2,
      title: "Workplace Wellness",
      description: "Supporting leadership teams to understand the critical impact of mental health on organizational objectives and productivity."
    },
    {
      id: "school",
      icon: GraduationCap,
      title: "School Outreach",
      description: "Offering counseling services and emotional literacy programs tailored for students and educators in need of support."
    }
  ];

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          <div className="w-full lg:w-1/2 order-2 lg:order-1 space-y-10">
            <SectionHeader
              label="OUR PROGRAMS"
              title="Support for every"
              gradientText="environment."
            />

            <div className="grid gap-8">
              {programs.map((program) => (
                <FocusItem 
                  key={program.id}
                  icon={program.icon}
                  title={program.title}
                  description={program.description}
                />
              ))}
            </div>

            <div className="flex items-center gap-8">
              <MyButton size="lg" asChild>
                <Link href="/programs">
                  Explore Programs
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </MyButton>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <OverlappingImages
              backImage="/image3.webp"
              backAlt="Community Support"
              frontImage="/image4.jpeg"
              frontAlt="Mental Health Coaching"
              className="h-[500px] md:h-[700px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};