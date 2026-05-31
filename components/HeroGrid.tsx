"use client";
import Image from "next/image";
import { ImageContainer } from "@/components/molecules/ImageContainer";

const HERO_ITEMS = [
  {
    src: "/father.jpg",
    alt: "clinical",
    label: "clinical",
    colSpan: "col-span-4",
    aspect: "aspect-[3/4]",
    rotate: "-rotate-3",
    zIndex: "z-10",
    containerClass: "",
    gradientOpacity: "from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90",
    bottomPadding: "bottom-6 left-6"
  },
  {
    src: "/family.jpg",
    alt: "excellence",
    label: "excellence",
    colSpan: "col-span-4",
    aspect: "aspect-square",
    rotate: "rotate-3",
    zIndex: "z-20",
    containerClass: "border-[12px] border-white shadow-2xl",
    gradientOpacity: "from-black/80 via-transparent to-transparent opacity-40",
    bottomPadding: "bottom-8 left-8"
  },
  {
    src: "/child.jpg",
    alt: "community",
    label: "community",
    colSpan: "col-span-4",
    aspect: "aspect-[3/4]",
    rotate: "-rotate-3",
    zIndex: "z-10",
    containerClass: "",
    gradientOpacity: "from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90",
    bottomPadding: "bottom-6 left-6"
  }
];

export const HeroGrid = () => {
  return (
    <div className="w-full grid grid-cols-12 gap-8 items-center">
      {HERO_ITEMS.map((item, index) => (
        <div key={index} className={item.colSpan}>
          <div 
            className={`
              group relative w-full transition-all duration-500 hover:rotate-0 hover:scale-[1.02]
              ${item.aspect} 
              ${item.zIndex} 
              ${item.rotate}
            `}
          >
            <ImageContainer className={`w-full h-full rounded-[3rem] ${item.containerClass}`}>
              <Image 
                src={item.src} 
                className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700" 
                alt={item.alt} 
                fill 
              />
              <div className={`absolute inset-0 bg-gradient-to-t transition-opacity ${item.gradientOpacity}`} />
              <div className={`absolute ${item.bottomPadding}`}>
                <p className="text-white text-[10px] tracking-widest uppercase">{item.label}</p>
              </div>
            </ImageContainer>
          </div>
        </div>
      ))}
    </div>
  );
};