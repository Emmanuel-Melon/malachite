import React from "react";
import { cn } from "@/lib/utils";

interface IndicatorProps {
  variant?: "primary" | "secondary";
  size?: "default" | "lg" | "xl";
  layout?: "row" | "grid";
  isAnimating?: boolean;
  className?: string;
}

export const Indicator = ({
  variant = "primary",
  size = "default",
  layout = "row",
  isAnimating = true,
  className,
}: IndicatorProps) => {
  const variants = {
    primary: "bg-primary",
    secondary: "bg-secondary",
  };

  const sizes = {
    default: "w-1.5 h-1.5",
    lg: "w-2.5 h-2.5",
    xl: "w-4 h-4",
  };

  const activeVariant = variants[variant];
  const activeSize = sizes[size];

  if (layout === "grid") {
    return (
      <div className={cn("grid grid-cols-2 gap-1 shrink-0 w-fit", className)}>
        <div className={cn("rounded-full", activeSize, activeVariant, isAnimating && "animate-bounce")} />
        <div className={cn("rounded-full opacity-40", activeSize, activeVariant, isAnimating && "animate-bounce [animation-delay:-0.1s]")} />
        <div className={cn("rounded-full opacity-40", activeSize, activeVariant, isAnimating && "animate-bounce [animation-delay:-0.2s]")} />
        <div className={cn("rounded-full", activeSize, activeVariant, isAnimating && "animate-bounce [animation-delay:-0.3s]")} />
      </div>
    );
  }

  return (
    <div className={cn("flex shrink-0 items-center gap-1.5", className)}>
      <div
        className={cn("rounded-full", activeSize, activeVariant, isAnimating && "animate-bounce")}
      />
      <div
        className={cn(
          "rounded-full opacity-40",
          activeSize,
          activeVariant,
          isAnimating && "animate-bounce [animation-delay:-0.15s]",
        )}
      />
    </div>
  );
};