import { MyCard } from "@/components/atoms/card";
import { CardContent } from "@/components/ui/card";
import type { Testimonial } from "../home.types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <MyCard className="group">
      <CardContent className="flex flex-col gap-8 pt-6">
        <blockquote className="text-foreground text-lg leading-relaxed">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <div className="border-border flex items-center gap-4 border-t pt-4">
          <div className="bg-primary/10 group-hover:bg-primary/20 flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300">
            <span className="text-primary text-sm font-bold">{testimonial.author.charAt(0)}</span>
          </div>
          <div>
            <h4 className="text-foreground text-sm font-semibold tracking-tight">
              {testimonial.author}
            </h4>
            <p className="text-muted-foreground mt-0.5 text-[11px] font-bold tracking-wider">
              {testimonial.role}
            </p>
          </div>
        </div>
      </CardContent>
    </MyCard>
  );
};
