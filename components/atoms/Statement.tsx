import React from "react";
import { cn } from "@/lib/utils";

interface StatementProps {
  text: React.ReactNode;
  label?: string;
  className?: string;
}

export const Statement = ({ text, label, className }: StatementProps) => {
  return (
    <div className={cn("relative max-w-sm pl-8", className)}>
      <div className="from-primary via-primary/50 absolute top-1.5 bottom-1.5 left-0 w-1.5 rounded-full bg-gradient-to-b to-transparent" />

      <p className="text-foreground/90 text-xl leading-relaxed tracking-tight">{text}</p>

      <div className="mt-4 flex items-center gap-2">
        <div className="bg-border h-px w-8" />
        <span className="text-muted-foreground tracking-[.3em]">{label}</span>
      </div>
    </div>
  );
};
