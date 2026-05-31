"use client";
import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  ArrowRight, 
  Info, 
  Layers, 
  Mail 
} from "lucide-react";
import { MyButton } from "@/components/atoms/button";
import { ImageContainer } from "@/components/molecules/ImageContainer";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { DesktopNavLink, MobileNavLink } from './NavLinks';

const NAV_LINKS = [
  { name: "about", href: "/about", icon: Info },
  { name: "programs", href: "/programs", icon: Layers },
  { name: "contact", href: "/contact", icon: Mail },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/40 py-4"
            : "bg-transparent py-8"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between">
          
          <Link href="/" className="flex items-center group min-h-[48px]">
            {scrolled ? (
              <div className="relative w-10 h-10 overflow-hidden rounded-xl animate-in fade-in zoom-in-95 duration-300">
                <ImageContainer className="w-full h-full">
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
              <span className="text-xl md:text-2xl tracking-tighter font-medium transition-colors animate-in fade-in slide-in-from-left-2 duration-300">
                malachite
                <span className="text-primary italic opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-0.5">.</span>
              </span>
            )}
          </Link>

          <div className="hidden lg:flex items-center gap-12">
            {NAV_LINKS.map((link) => (
              <DesktopNavLink
                key={link.name}
                name={link.name}
                href={link.href}
                icon={link.icon}
              />
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <a href="tel:+256757356691" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center group-hover:border-primary transition-colors">
                <Phone className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm font-bold tracking-tight">+256757356691</span>
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      <div className={cn(
        "fixed inset-0 bg-background z-[100] lg:hidden transition-all duration-700 ease-in-out",
        isOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        <div className="p-8 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl tracking-tighter font-medium">malachite</span>
          </div>
          
          <button 
            onClick={() => setIsOpen(false)} 
            className="w-12 h-12 flex items-center justify-center border border-border/40 rounded-full"
            aria-label="Close Menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col p-10 gap-10 mt-10">
          {NAV_LINKS.map((link) => (
            <MobileNavLink
              key={link.name}
              name={link.name}
              href={link.href}
              icon={link.icon}
              onClick={() => setIsOpen(false)}
            />
          ))}
        </div>

        <div className="absolute bottom-12 left-10 right-10 space-y-8">
          <div className="h-[1px] bg-border/40 w-full" />
          <div className="flex flex-col gap-6">
            <p className="text-xs tracking-[.4em] uppercase text-muted-foreground font-bold">ready to talk?</p>
            <MyButton className="w-full h-16 rounded-full text-lg" onClick={() => setIsOpen(false)}>
              book appointment
            </MyButton>
          </div>
        </div>
      </div>
    </>
  );
};