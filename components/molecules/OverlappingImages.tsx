import Image from "next/image";
import { ImageContainer } from "@/components/molecules/ImageContainer";
import { cn } from "@/lib/utils";

interface OverlappingImagesProps {
  backImage: string;
  frontImage: string;
  className?: string;
  backAlt?: string;
  frontAlt?: string;
}

export const OverlappingImages = ({
  backImage,
  frontImage,
  className,
  backAlt = "background image",
  frontAlt = "foreground image"
}: OverlappingImagesProps) => {
  return (
    <div className={cn("relative h-[500px] md:h-[800px] w-full", className)}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[100px] rounded-full -z-10" />

      <div className="absolute top-0 right-0 w-[80%] h-[70%] z-10 transition-transform duration-500 hover:scale-[1.02]">
        <ImageContainer className="w-full h-full border-[12px] border-white shadow-2xl overflow-hidden">
          <Image
            src={backImage}
            alt={backAlt}
            className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
            fill
          />
        </ImageContainer>
      </div>

      <div className="absolute bottom-4 left-0 w-[65%] h-[55%] z-20 transition-transform duration-500 hover:translate-y-[-10px]">
        <ImageContainer className="w-full h-full border-[12px] border-white shadow-2xl overflow-hidden">
          <Image
            src={frontImage}
            alt={frontAlt}
            className="w-full h-full object-cover"
            fill
          />
        </ImageContainer>
      </div>
    </div>
  );
};