import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export const Label = ({ className, ...props }: ComponentPropsWithoutRef<"label">) => {
  return (
    <label
      {...props}
      className={cn(
        "text-muted-foreground block text-[10px] font-bold tracking-[.4em] uppercase",
        className,
      )}
    />
  );
};
