import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export const Input = ({ className, ...props }: ComponentPropsWithoutRef<"input">) => {
  return (
    <input
      {...props}
      className={cn(
        "border-border/60 focus:border-primary placeholder:text-muted-foreground/30 w-full border-b bg-transparent py-3 text-lg transition-all outline-none",
        className,
      )}
    />
  );
};
