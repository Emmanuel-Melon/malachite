import { cn } from "@/lib/utils";

interface SeparatorProps {
  className?: string;
  label?: string;
  showDots?: boolean;
}

export const Separator = ({ 
  className, 
  label, 
  showDots = true 
}: SeparatorProps) => {
  return (
    <div className={cn(
      "relative w-full py-16 md:py-24 hidden md:flex items-center justify-center", 
      className
    )}>
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-border/40" />
      </div>
      
      <div className="relative flex items-center gap-4 bg-background px-8">
        {showDots && (
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </div>
        )}
        
        {label && (
          <span className="text-[10px] font-mono tracking-[0.5em] text-muted-foreground uppercase">
            {label}
          </span>
        )}

        {showDots && (
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
          </div>
        )}
      </div>
    </div>
  );
};