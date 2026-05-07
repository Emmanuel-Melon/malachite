import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ImageContainerProps {
  children: ReactNode;
  className?: string;
  borderColor?: string;
}

export const ImageContainer = ({
  children,
  className,
  borderColor = "border-white",
}: ImageContainerProps) => {
  return (
    <div
      className={cn(
        "relative rounded-[4.5rem] overflow-hidden bg-background",
        "border-[12px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)]",
        borderColor,
        className
      )}
    >
      {/* The inner wrapper ensures the content (like Images) doesn't bleed over the thick borders */}
      <div className="relative w-full h-full rounded-[3.2rem] overflow-hidden">
        {children}
      </div>
    </div>
  );
};