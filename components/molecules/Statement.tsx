import React from 'react';
import { cn } from "@/lib/utils";

interface StatementProps {
  text: React.ReactNode;
  label?: string;
  className?: string;
}

export const Statement = ({ 
  text, 
  label, 
  className 
}: StatementProps) => {
  return (
    <div className={cn("relative pl-8 max-w-sm", className)}>
      <div className="absolute left-0 top-1.5 bottom-1.5 w-1.5 rounded-full bg-gradient-to-b from-primary via-primary/50 to-transparent" />
      
      <p className="text-xl leading-relaxed text-foreground/90 font-medium tracking-tight lowercase">
        {text}
      </p>
      
      <div className="mt-4 flex items-center gap-2">
        <div className="h-px w-8 bg-border" />
        <span className="text-[10px] tracking-[.3em] text-muted-foreground font-bold">
          {label}
        </span>
      </div>
    </div>
  );
};