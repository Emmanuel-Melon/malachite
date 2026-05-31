import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.ComponentPropsWithoutRef<"section"> {
  containerClassName?: string;
}

export const Section = ({ children, className, containerClassName, ...props }: SectionProps) => {
  return (
    <section
      className={cn("bg-background relative overflow-hidden py-24 font-sans", className)}
      {...props}
    >
      <div className={cn("relative z-10 container mx-auto px-4", containerClassName)}>
        {children}
      </div>
    </section>
  );
};
