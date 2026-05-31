import Image from "next/image";
import { ImageContainer } from "@/components/molecules/ImageContainer";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { Statement } from "@/components/molecules/Statement";

interface AboutHeaderProps {
  headerLabel: string;
  headerTitle: string;
  headerGradientText: string;
  statementText: string;
  statementLabel: string;
  imageSrc: string;
  imageAlt: string;
  founderRole: string;
  founderName: React.ReactNode;
}

export const AboutHeader = ({
  headerLabel,
  headerTitle,
  headerGradientText,
  statementText,
  statementLabel,
  imageSrc,
  imageAlt,
  founderRole,
  founderName,
}: AboutHeaderProps) => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader
              label={headerLabel}
              title={headerTitle}
              gradientText={headerGradientText}
            />

            <div className="mt-12 md:mt-16">
              <Statement text={statementText} label={statementLabel} />
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="group relative aspect-[4/5]">
              <ImageContainer className="h-full w-full border-[12px] border-white shadow-2xl">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="from-primary/40 via-primary/10 absolute inset-0 flex flex-col justify-end bg-gradient-to-t to-transparent p-8 md:p-10">
                  <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                    <p className="mb-2 text-[10px] font-bold tracking-[.5em] text-white/90 uppercase">
                      {founderRole}
                    </p>
                    <h3 className="text-3xl leading-tight font-semibold tracking-tighter text-white md:text-4xl">
                      {founderName}
                    </h3>
                    <div className="mt-4 h-1 w-12 rounded-full bg-white" />
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
