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
        className="w-10 h-10 rounded-full border-border/60 hover:bg-secondary/20 transition-all duration-300 active:scale-95"
        onClick={onPrev}
        aria-label={prevLabel}
      >
        <ArrowLeft className="w-4 h-4 text-muted-foreground" />
      </MyButton>
      <MyButton
        variant="outline"
        size="icon"
        className="w-10 h-10 rounded-full border-border/60 hover:bg-secondary/20 transition-all duration-300 active:scale-95"
        onClick={onNext}
        aria-label={nextLabel}
      >
        <ArrowRight className="w-4 h-4 text-muted-foreground" />
      </MyButton>
      <span className="text-[10px] font-mono tracking-widest text-muted-foreground/60 ml-2">
        {String(page + 1).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
      </span>
    </div>
  );
};