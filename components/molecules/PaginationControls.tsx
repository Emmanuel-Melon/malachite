import { ArrowLeft, ArrowRight } from "lucide-react";
import { MyButton } from "@/components/atoms/button";

interface PaginationControlsProps {
  page: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
  prevLabel?: string;
  nextLabel?: string;
}

export const PaginationControls = ({
  page,
  totalPages,
  onNext,
  onPrev,
  prevLabel = "Previous",
  nextLabel = "Next",
}: PaginationControlsProps) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center gap-3 pt-2">
      <MyButton
        variant="outline"
        size="icon"
        className="border-border/60 hover:bg-secondary/20 h-10 w-10 rounded-full transition-all duration-300 active:scale-95"
        onClick={onPrev}
        aria-label={prevLabel}
      >
        <ArrowLeft className="text-muted-foreground h-4 w-4" />
      </MyButton>
      <MyButton
        variant="outline"
        size="icon"
        className="border-border/60 hover:bg-secondary/20 h-10 w-10 rounded-full transition-all duration-300 active:scale-95"
        onClick={onNext}
        aria-label={nextLabel}
      >
        <ArrowRight className="text-muted-foreground h-4 w-4" />
      </MyButton>
      <span className="text-muted-foreground/60 ml-2 text-[10px] tracking-widest">
        {String(page + 1).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
      </span>
    </div>
  );
};
