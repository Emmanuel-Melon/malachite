"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Info, Layers, type LucideIcon, Mail, Menu, Phone, X } from "lucide-react";
import { MyButton } from "@/components/atoms/button";
import { ImageContainer } from "@/components/molecules/ImageContainer";
import type { NavLink } from "@/lib/data/shared.types";
import { cn } from "@/lib/utils";
import { DesktopNavLink, MobileNavLink } from "./NavLinks";

const navIconMap: Record<string, LucideIcon> = {
  info: Info,
  layers: Layers,
  mail: Mail,
};

interface NavbarProps {
  navLinks: NavLink[];
  phoneNumber: string;
}

export const Navbar = ({ navLinks, phoneNumber }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-500",
          scrolled
            ? "bg-background/80 border-border/40 border-b py-4 backdrop-blur-xl"
            : "bg-transparent py-8",
        )}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 md:px-10">
          <Link href="/" className="group flex min-h-[48px] items-center">
            {scrolled ? (
              <div className="animate-in fade-in zoom-in-95 relative h-10 w-10 overflow-hidden rounded-xl duration-300">
                <ImageContainer className="h-full w-full">
                  <Image
                    src="/logo.jpeg"
                    alt="Malachite Medical Centre"
                    fill
                    priority
                    className="object-cover"
                  />
                </ImageContainer>
              </div>
            ) : (
              <span className="animate-in fade-in slide-in-from-left-2 text-xl font-medium tracking-tighter transition-colors duration-300 md:text-2xl">
                malachite
                <span className="text-primary ml-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  .
                </span>
              </span>
            )}
          </Link>

          <div className="hidden items-center gap-12 lg:flex">
            {navLinks.map((link) => {
              const ResolvedIcon = navIconMap[link.icon] || Info;
              return (
                <DesktopNavLink
                  key={link.name}
                  name={link.name}
                  href={link.href}
                  icon={ResolvedIcon}
                />
              );
            })}
          </div>

          <div className="hidden items-center gap-8 lg:flex">
            <a href={`tel:${phoneNumber}`} className="group flex items-center gap-3">
              <div className="border-border/60 group-hover:border-primary flex h-10 w-10 items-center justify-center rounded-full border transition-colors">
                <Phone className="text-muted-foreground group-hover:text-primary h-3.5 w-3.5 transition-colors" />
              </div>
              <span className="text-sm font-bold tracking-tight">{phoneNumber}</span>
            </a>
          </div>

          <button
            className="text-foreground p-2 lg:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="h-8 w-8" />
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "bg-background fixed inset-0 z-[100] transition-all duration-700 ease-in-out lg:hidden",
          isOpen ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <div className="flex items-center justify-between p-8">
          <div className="flex items-center">
            <span className="text-xl font-medium tracking-tighter">malachite</span>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="border-border/40 flex h-12 w-12 items-center justify-center rounded-full border"
            aria-label="Close Menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-10 flex flex-col gap-10 p-10">
          {navLinks.map((link) => {
            const ResolvedIcon = navIconMap[link.icon] || Info;
            return (
              <MobileNavLink
                key={link.name}
                name={link.name}
                href={link.href}
                icon={ResolvedIcon}
                onClick={() => setIsOpen(false)}
              />
            );
          })}
        </div>

        <div className="absolute right-10 bottom-12 left-10 space-y-8">
          <div className="bg-border/40 h-[1px] w-full" />
          <div className="flex flex-col gap-6">
            <p className="text-muted-foreground text-xs font-bold tracking-[.4em]">
              ready to talk?
            </p>
            <MyButton className="h-16 w-full rounded-full text-lg" onClick={() => setIsOpen(false)}>
              book appointment
            </MyButton>
          </div>
        </div>
      </div>
    </>
  );
};
