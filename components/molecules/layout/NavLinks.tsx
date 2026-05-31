import Link from "next/link";

interface NavLinkProps {
  name: string;
  href: string;
  mobile?: boolean;
  onClick?: () => void;
}

export const DesktopNavLink = ({ name, href }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="group text-muted-foreground hover:text-foreground flex items-center gap-2 font-semibold tracking-[.4em] transition-all duration-300"
    >
      <span>{name}</span>
    </Link>
  );
};

export const MobileNavLink = ({ name, href, onClick }: NavLinkProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group hover:text-primary flex items-center gap-4 text-5xl tracking-tighter transition-colors"
    >
      <span>{name}</span>
    </Link>
  );
};
