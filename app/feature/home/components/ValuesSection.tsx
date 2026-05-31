import Image from "next/image";
import { Handshake, Heart, type LucideIcon, ShieldCheck, Sparkles, Users } from "lucide-react";
import { ImageContainer } from "@/components/molecules/ImageContainer";
import { InfoBlock } from "@/components/molecules/InfoBlock";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { getCoreValues } from "../data";

const iconMap: Record<string, LucideIcon> = {
  heart: Heart,
  users: Users,
  sparkles: Sparkles,
  "shield-check": ShieldCheck,
  handshake: Handshake,
};

export const ValuesSection = async () => {
  const valuesData = await getCoreValues();
  return (
    <section>
      <div className="border-border/50 relative overflow-hidden rounded-[4.5rem] border bg-[#F9F7F4] p-8 md:p-12 lg:p-24">
        <div className="bg-primary/5 pointer-events-none absolute top-0 right-0 h-[50%] w-[50%] rounded-full blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[40%] w-[40%] rounded-full bg-orange-200/20 blur-[100px]" />

        <div className="relative z-10 grid items-center gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="group relative">
              <div className="absolute -inset-4 rounded-full bg-black/[0.02] opacity-50 blur-3xl transition-opacity group-hover:opacity-100" />

              <ImageContainer className="mx-auto aspect-square w-full max-w-md border-[16px] border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
                <Image
                  src="/family.jpg"
                  alt="our philosophy"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </ImageContainer>
            </div>
          </div>

          <div className="order-1 space-y-12 lg:order-2 lg:col-span-7">
            <SectionHeader
              label="Our Philosophy"
              title="A holistic approach to"
              gradientText="human potential."
            />

            <div className="grid gap-6">
              {valuesData.map((item) => (
                <InfoBlock
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  icon={iconMap[item.iconName]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
