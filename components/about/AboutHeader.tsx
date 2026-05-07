import Image from "next/image";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { ImageContainer } from "@/components/molecules/ImageContainer";
import { Statement } from "@/components/molecules/Statement";

export const AboutHeader = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <SectionHeader
              label="our story"
              title="pioneering the future of"
              gradientText="mental wellness."
            />

            <div className="mt-12 md:mt-16">
              <Statement 
                text="founded in 2026, malachite medical centre was born from a vision to bridge the gap between clinical excellence and compassionate community support. our mission is to provide accessible, evidence-based mental health services that empower individuals to achieve sustainable recovery and independence." 
                label="The Vision"
              />
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] relative group">
              <ImageContainer className="w-full h-full border-[12px] border-white shadow-2xl">
                <Image
                  src="/tina.png"
                  alt="Christina Angelo Ntulo"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-primary/10 to-transparent flex flex-col justify-end p-8 md:p-10">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[10px] tracking-[.5em] text-white/90 uppercase font-bold mb-2">
                      Founder & CEO
                    </p>
                    <h3 className="text-3xl md:text-4xl tracking-tighter text-white font-semibold leading-tight">
                      Christina <br /> Angelo Ntulo
                    </h3>
                    <div className="h-1 w-12 bg-white mt-4 rounded-full" />
                  </div>
                </div>
              </ImageContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};