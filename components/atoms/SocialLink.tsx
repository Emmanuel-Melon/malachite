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
    <Link href={href} className="group flex items-center gap-3 transition-all" aria-label={label}>
      <IconContainer
        icon={Icon}
        variant="default"
        className="h-12 w-12 rounded-xl"
        iconClassName="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300"
      />
      {label && (
        <span className="text-muted-foreground group-hover:text-primary text-[10px] tracking-[0.3em] transition-colors duration-300">
          {label}
        </span>
      )}
    </Link>
  );
};
