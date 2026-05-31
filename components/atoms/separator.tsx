import { cn } from "@/lib/utils";

interface SeparatorProps {
  className?: string;
  label?: string;
  showDots?: boolean;
}

export const Separator = ({ className, label, showDots = true }: SeparatorProps) => {
  return (
    <div
      className={cn(
        "relative my-0 hidden w-full items-center justify-center py-0 md:flex",
        className,
      )}
    >
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="border-border/40 w-full border-t" />
      </div>

      <div className="bg-background relative flex items-center gap-4 px-8">
        {showDots && (
          <div className="flex gap-1.5">
            <div className="bg-primary/20 h-1.5 w-1.5 rounded-full" />
            <div className="bg-primary/40 h-1.5 w-1.5 rounded-full" />
            <div className="bg-primary h-1.5 w-1.5 rounded-full" />
          </div>
        )}

        {label && (
          <span className="text-muted-foreground font-mono text-[10px] tracking-[0.5em]">
            {label}
          </span>
        )}

        {showDots && (
          <div className="flex gap-1.5">
            <div className="bg-primary h-1.5 w-1.5 rounded-full" />
            <div className="bg-primary/40 h-1.5 w-1.5 rounded-full" />
            <div className="bg-primary/20 h-1.5 w-1.5 rounded-full" />
          </div>
        )}
      </div>
    </div>
  );
};
