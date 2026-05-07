import React from 'react';
import { cn } from "@/lib/utils";

interface IndicatorProps {
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'lg' | 'xl';
  activeDot?: 'left' | 'right';
  className?: string;
}

export const Indicator = ({ 
  variant = 'primary', 
  size = 'default', 
  activeDot = 'left',
  className 
}: IndicatorProps) => {
  const variants = {
    primary: {
      dot1: "bg-primary",
      dot2: "bg-primary/40"
    },
    secondary: {
      dot1: "bg-secondary",
      dot2: "bg-secondary/40"
    }
  };

  const sizes = {
    default: "w-1.5 h-1.5",
    lg: "w-2.5 h-2.5",
    xl: "w-4 h-4"
  };

  const offsets = {
    default: "-translate-y-0.5",
    lg: "-translate-y-1",
    xl: "-translate-y-1.5"
  };

  const activeVariant = variants[variant];
  const activeSize = sizes[size];
  const activeOffset = offsets[size];

  return (
    <div className={cn("flex gap-1.5 shrink-0 items-center", className)}>
      <div className={cn(
        "rounded-full transition-all duration-300", 
        activeSize, 
        activeVariant.dot1,
        activeDot === 'left' && activeOffset
      )} />
      <div className={cn(
        "rounded-full transition-all duration-300", 
        activeSize, 
        activeVariant.dot2,
        activeDot === 'right' && activeOffset
      )} />
    </div>
  );
};