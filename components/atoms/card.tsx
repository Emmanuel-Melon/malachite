import { ComponentPropsWithoutRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MyCardProps extends ComponentPropsWithoutRef<typeof Card> {
  asChild?: boolean;
  variant?: "light" | "dark";
}

export const MyCard = ({
  children,
  className = "",
  asChild = false,
  variant = "light",
  ...props
}: MyCardProps) => {
  const Component = asChild ? Slot : Card;

  const variants = {
    light: "bg-card border-border/40 text-card-foreground",
    dark: "bg-secondary border-border/40 text-secondary-foreground shadow-none",
  };

  return (
    <Component
      {...props}
      className={cn(
        "overflow-hidden border p-4 transition-all duration-150 md:p-8",
        "rounded-[2.5rem]",
        "shadow-[0_0_0.25em_rgba(67,71,85,0.27),0_0.25em_1em_rgba(90,125,188,0.05)]",
        "hover:shadow-[0_0_0.4em_rgba(67,71,85,0.3),0_0.3em_1.2em_rgba(90,125,188,0.08)]",
        "hover:border-border/60 hover:-translate-y-0.5",
        "active:translate-y-0.5",
        variants[variant],
        className,
      )}
    >
      {children}
    </Component>
  );
};
