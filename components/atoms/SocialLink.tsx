import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { IconContainer } from "@/components/atoms/IconContainer";

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label?: string;
}

export const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => {
  return (
    <Link 
      href={href} 
      className="group flex items-center gap-3 transition-all"
      aria-label={label}
    >
      <IconContainer
        icon={Icon}
        variant="default"
        className="w-12 h-12 rounded-xl"
        iconClassName="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300"
      />
      {label && (
        <span className="text-[10px] font-bold tracking-[0.3em] text-muted-foreground uppercase group-hover:text-primary transition-colors duration-300">
          {label}
        </span>
      )}
    </Link>
  );
};