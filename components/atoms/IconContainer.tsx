import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconContainerProps {
  icon: LucideIcon;
  variant?: 'default' | 'outline' | 'custom' | 'dark' | 'ghost';
  className?: string;
  iconClassName?: string;
  bg?: string;
  color?: string;
}

export const IconContainer = ({
  icon: Icon,
  variant = 'default',
  className,
  iconClassName,
  bg,
  color,
}: IconContainerProps) => {
  const standardShadow = "shadow-[0_0_0.25em_rgba(67,71,85,0.27),0_0.25em_1em_rgba(90,125,188,0.05)]";
  const hoverShadow = "hover:shadow-[0_0_0.4em_rgba(67,71,85,0.3),0_0.3em_1.2em_rgba(90,125,188,0.08)]";

  const variants = {
    default: cn("bg-[#FCFCFD] text-primary", standardShadow),
    outline: "bg-transparent border border-border text-muted-foreground hover:border-primary/50",
    dark: "bg-secondary text-primary border border-border/40",
    ghost: "bg-transparent text-muted-foreground hover:bg-secondary/50 hover:text-foreground",
    custom: cn(bg, color),
  };

  return (
    <div
      className={cn(
        "w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-150 group cursor-default",
        "hover:-translate-y-0.5 hover:rotate-3",
        "active:translate-y-0.5",
        (variant === 'default' || variant === 'dark') && hoverShadow,
        variants[variant],
        className
      )}
    >
      <Icon 
        className={cn(
          "w-8 h-8 transition-all duration-300 group-hover:scale-110", 
          iconClassName
        )} 
      />
    </div>
  );
};