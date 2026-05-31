import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export const Textarea = ({ className, ...props }: ComponentPropsWithoutRef<"textarea">) => {
  return (
    <textarea
      {...props}
      className={cn(
        "border-border/60 focus:border-primary placeholder:text-muted-foreground/30 w-full resize-none border-b bg-transparent py-3 text-lg transition-all outline-none",
        className,
      )}
    />
  );
};
