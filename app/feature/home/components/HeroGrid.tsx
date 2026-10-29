import Image from "next/image";
import { ImageContainer } from "@/components/molecules/ImageContainer";
import type { HeroGridItem } from "../home.types";

interface HeroGridProps {
  items: HeroGridItem[];
}

export const HeroGrid = ({ items }: HeroGridProps) => {
  return (
    <div className="grid w-full grid-cols-3 items-center gap-8">
      {items.map((item, index) => (
        <div key={index} className="w-full">
          <div className="group relative w-full aspect-[3/4] min-h-[300px] transition-all duration-500 hover:scale-[1.02] hover:rotate-0">
            <ImageContainer className="h-full w-full rounded-[3rem]">
              <Image
                alt={item.alt}
                className="h-full w-full object-cover transition-all duration-700 group-hover:grayscale-0"
                fill
                src={item.src}
                priority={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6">
                <p className="text-[10px] tracking-widest text-white">{item.label}</p>
              </div>
            </ImageContainer>
          </div>
        </div>
      ))}
    </div>
  );
};
