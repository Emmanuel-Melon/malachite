import * as React from "react";
import { cn } from "@/lib/utils";

const sizeVariants = {
  sm: "text-2xl sm:text-3xl md:text-4xl leading-tight",
  md: "text-3xl sm:text-4xl md:text-5xl md:leading-[0.85] lg:text-6xl",
  lg: "text-4xl leading-[0.9] sm:text-5xl md:text-6xl md:leading-[0.85] lg:text-7xl",
  xl: "text-5xl leading-[0.8] tracking-tighter md:text-8xl lg:text-[110px]",
};

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type GradientHeadingProps<T extends HeadingElement> = {
  as?: T;
  title: React.ReactNode;
  gradientText: React.ReactNode;
  size?: keyof typeof sizeVariants;
} & React.ComponentPropsWithoutRef<T>;

export const GradientHeading = <T extends HeadingElement = "h2">({
  as,
  title,
  gradientText,
  size = "lg",
  className,
  ...props
}: GradientHeadingProps<T>) => {
  const Component = as || "h2";

  return (
    <Component
      className={cn("text-foreground tracking-tighter", sizeVariants[size], className)}
      {...props}
    >
      {title} <br />
      <span className="from-primary to-primary animate-gradient-x bg-gradient-to-r via-orange-500 bg-[length:200%_auto] bg-clip-text text-transparent">
        {gradientText}
      </span>
    </Component>
  );
};
