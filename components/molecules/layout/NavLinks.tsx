import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface NavLinkProps {
  name: string;
  href: string;
  icon: LucideIcon;
  mobile?: boolean;
  onClick?: () => void;
}

export const DesktopNavLink = ({ name, href, icon: Icon }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="group text-muted-foreground hover:text-foreground flex items-center gap-2 font-semibold tracking-[.4em] transition-all duration-300"
    >
      <Icon className="text-muted-foreground/60 group-hover:text-primary h-3.5 w-3.5 shrink-0 transition-colors duration-300" />
      <span>{name}</span>
    </Link>
  );
};

export const MobileNavLink = ({ name, href, icon: Icon, onClick }: NavLinkProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group hover:text-primary flex items-center gap-4 text-5xl tracking-tighter transition-colors"
    >
      <Icon className="text-muted-foreground/40 group-hover:text-primary h-8 w-8 shrink-0 transition-all duration-300 group-hover:scale-110" />
      <span>{name}</span>
    </Link>
  );
};
