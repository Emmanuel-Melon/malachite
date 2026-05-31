import Image from "next/image";
import { ImageContainer } from "@/components/molecules/ImageContainer";
import { InfoBlock } from "@/components/molecules/InfoBlock"
import { SectionHeader } from "../molecules/SectionHeader";

const valuesData = [
  {
    title: "sustainable recovery",
    description: "we don't just treat symptoms; we build the foundations for long-term independence and mental resilience."
  },
  {
    title: "integrated community",
    description: "healing happens in connection. our programs bridge clinical care with real-world social integration."
  }
];

export const ValuesSection = () => {
  return (
    <section>
      <div className="relative rounded-[4.5rem] p-12 md:p-24 overflow-hidden border border-border/50 bg-[#F9F7F4]">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-orange-200/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-black/[0.02] blur-3xl rounded-full transition-opacity group-hover:opacity-100 opacity-50" />

              <ImageContainer className="aspect-square w-full max-w-md mx-auto border-[16px] border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
                <Image
                  src="/family.jpg"
                  alt="our philosophy"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </ImageContainer>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-12 order-1 lg:order-2">
            <SectionHeader
              label="Our Philosophy"
              title="a holistic approach to"
              gradientText="human potential."
            />

            <div className="grid gap-6">
              {valuesData.map((item, index) => (
                <InfoBlock
                  key={index}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};