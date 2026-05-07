import { cn } from "@/lib/utils";
import { Indicator } from '@/components/atoms/Indicator';

interface InfoBlockProps {
  title: string;
  description: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export const InfoBlock = ({ 
  title, 
  description, 
  className,
  titleClassName,
  descriptionClassName 
}: InfoBlockProps) => (
  <div className={cn("space-y-3 transition-all duration-300", className)}>
    <div className="flex items-center gap-4">
      <Indicator variant="secondary" activeDot="right"/>
      <h3 className={cn("text-xl md:text-2xl tracking-tight font-medium", titleClassName)}>
        {title}
      </h3>
    </div>
    <p className={cn("text-muted-foreground leading-relaxed pl-16 text-lg", descriptionClassName)}>
      {description}
    </p>
  </div>
);