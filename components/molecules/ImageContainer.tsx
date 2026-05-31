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
        "bg-background relative overflow-hidden rounded-[4.5rem]",
        "border-[12px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)]",
        borderColor,
        className,
      )}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[3.2rem]">{children}</div>
    </div>
  );
};
