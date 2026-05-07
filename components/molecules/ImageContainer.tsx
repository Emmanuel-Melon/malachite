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
  borderColor,
}: ImageContainerProps) => {
  return (
    <div
      className={cn(
        "relative rounded-[4.5rem] overflow-hidden bg-background",
        "border-[12px] border-white shadow-2xl",
        borderColor,
        "shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)]",
        className
      )}
    >
      <div className="relative w-full h-full rounded-[3.2rem] overflow-hidden">
        {children}
      </div>
    </div>
  );
};