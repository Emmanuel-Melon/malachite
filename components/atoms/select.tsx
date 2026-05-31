import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export const Select = ({ className, ...props }: ComponentPropsWithoutRef<"select">) => {
  return (
    <select
      {...props}
      className={cn(
        "border-border/60 focus:border-primary text-muted-foreground/60 w-full cursor-pointer appearance-none border-b bg-transparent py-3 text-lg lowercase italic transition-all outline-none",
        className,
      )}
    />
  );
};
