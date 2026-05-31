import { MyCard } from "@/components/atoms/card";
import { CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export const TestimonialCard = ({
  quote,
  author,
  role,
}: TestimonialCardProps) => {
  return (
    <MyCard className="group">
      <CardContent className="flex flex-col gap-8 pt-6">
        <blockquote className="text-foreground text-lg leading-relaxed lowercase italic">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <div className="flex items-center gap-4 pt-4 border-t border-border">
          <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
            <span className="text-sm font-bold text-primary">
              {author.charAt(0)}
            </span>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-tight text-foreground">
              {author}
            </h4>
            <p className="text-[11px] tracking-wider text-muted-foreground uppercase font-bold mt-0.5">
              {role}
            </p>
          </div>
        </div>
      </CardContent>
    </MyCard>
  );
};