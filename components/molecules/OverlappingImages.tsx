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
  frontAlt = "foreground image",
}: OverlappingImagesProps) => {
  return (
    <div className={cn("relative hidden h-[500px] w-full md:h-[800px] lg:block", className)}>
      <div className="bg-primary/5 absolute top-1/2 left-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]" />

      <div className="absolute top-0 right-0 z-10 h-[70%] w-[80%] -rotate-3 transition-all duration-500 hover:scale-[1.02] hover:rotate-0">
        <ImageContainer className="h-full w-full overflow-hidden border-[12px] border-white shadow-2xl">
          <Image
            src={backImage}
            alt={backAlt}
            className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
            fill
          />
        </ImageContainer>
      </div>

      <div className="absolute bottom-4 left-0 z-20 h-[55%] w-[65%] rotate-3 transition-all duration-500 hover:translate-y-[-10px] hover:rotate-0">
        <ImageContainer className="h-full w-full overflow-hidden border-[12px] border-white shadow-2xl">
          <Image src={frontImage} alt={frontAlt} className="h-full w-full object-cover" fill />
        </ImageContainer>
      </div>
    </div>
  );
};
