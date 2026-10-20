"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Info, Layers, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import type { ContactItem, NavLink, SocialItem } from "@/lib/data/shared.types";
import { cn } from "@/lib/utils";

interface NavbarProps {
  navLinks: NavLink[];
  phoneNumber: string;
  socials: SocialItem[];
  contact: ContactItem[];
}

const navIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  info: Info,
  layers: Layers,
  mail: Mail,
};

export const Navbar = ({ navLinks, phoneNumber, socials, contact }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const address = contact.find((c) => c.icon === "map-pin")?.value;

  return (
    <header className="bg-background/80 border-border/40 fixed top-0 z-50 w-full border-b backdrop-blur-md">
      {/* Top bar - phone & logo */}
      <div className="border-border/30 border-b">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-3 md:px-10">
          <a href={`tel:${phoneNumber}`} className="text-muted-foreground flex items-center gap-2 text-sm tracking-wide transition-colors hover:text-foreground">
            <Phone className="h-4 w-4" />
            {phoneNumber}
          </a>
          <Link href="/" className="absolute left-1/2 top-3 -translate-x-1/2 transition-transform hover:opacity-90">
            <Image src="/logo.png" alt="Company Logo" width={448} height={128} className="h-32 w-[28rem] object-contain" priority />
          </Link>
          <div className="w-[200px]" />
        </div>
      </div>

      {/* Main nav - links & CTA */}
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-3 md:px-10">
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const Icon = navIconMap[link.icon];
            return (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary flex items-center gap-2 text-base font-medium tracking-wide transition-colors"
              >
                {Icon && <Icon className="h-4 w-4" />}
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {address && (
            <>
              <MapPin className="text-muted-foreground h-4 w-4" />
              <span className="text-muted-foreground text-sm tracking-wide">{address}</span>
            </>
          )}
        </div>

        <button className="p-2 lg:hidden" onClick={() => setIsOpen(true)}>
          <Menu className="text-foreground h-8 w-8" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "bg-background fixed inset-0 z-[100] p-10 transition-transform duration-300 lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="mb-16 flex items-center justify-between">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <X className="h-8 w-8" />
          </button>
        </div>
        <div className="flex flex-col gap-8 text-2xl font-medium">
          {navLinks.map((link) => {
            const Icon = navIconMap[link.icon];
            return (
              <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                {Icon && <Icon className="h-6 w-6" />}
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};
