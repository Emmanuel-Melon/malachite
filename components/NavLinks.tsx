import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

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
      className="group flex items-center gap-2 tracking-[.4em] text-muted-foreground hover:text-foreground transition-all duration-300 font-semibold"
    >
      <Icon className="w-3.5 h-3.5 text-muted-foreground/60 group-hover:text-primary transition-colors duration-300 shrink-0" />
      <span>{name}</span>
    </Link>
  );
};

export const MobileNavLink = ({ name, href, icon: Icon, onClick }: NavLinkProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group flex items-center gap-4 text-5xl tracking-tighter hover:text-primary transition-colors lowercase italic"
    >
      <Icon className="w-8 h-8 text-muted-foreground/40 group-hover:text-primary group-hover:scale-110 transition-all duration-300 shrink-0" />
      <span>{name}</span>
    </Link>
  );
};