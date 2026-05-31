import Image from "next/image";
import { ImageContainer } from "@/components/molecules/ImageContainer";
import type { HeroGridItem } from "../home.types";

interface HeroGridProps {
  items: HeroGridItem[];
}

export const HeroGrid = ({ items }: HeroGridProps) => {
  return (
    <div className="grid w-full grid-cols-12 items-center gap-8">
      {items.map((item, index) => (
        <div key={index} className={item.colSpan}>
          <div
            className={`group relative w-full transition-all duration-500 hover:scale-[1.02] hover:rotate-0 ${item.aspect} ${item.zIndex} ${item.rotate} `}
          >
            <ImageContainer className={`h-full w-full rounded-[3rem] ${item.containerClass}`}>
              <Image
                alt={item.alt}
                className="h-full w-full object-cover transition-all duration-700 group-hover:grayscale-0"
                fill
                src={item.src}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t transition-opacity ${item.gradientOpacity}`}
              />
              <div className={`absolute ${item.bottomPadding}`}>
                <p className="text-[10px] tracking-widest text-white">{item.label}</p>
              </div>
            </ImageContainer>
          </div>
        </div>
      ))}
    </div>
  );
};
