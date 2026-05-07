"use client";
import { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { MyButton } from "@/components/atoms/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

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

  const navLinks = [
    { name: "about", href: "/about" },
    { name: "programs", href: "/programs" },
    { name: "contact", href: "/contact" },
  ];

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
          <Link href="/" className="group">
            <span className="text-2xl md:text-3xl tracking-tighter font-medium transition-colors">
              malachite
              <span className="text-primary italic opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-0.5">.</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[10px] tracking-[.4em] text-muted-foreground hover:text-foreground transition-all uppercase font-bold"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <a href="tel:+256757356691" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center group-hover:border-primary transition-colors">
                <Phone className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm font-bold tracking-tight">+256757356691</span>
            </a>
            
            <MyButton variant="default">
              get in touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </MyButton>
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(true)}
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
          <span className="text-2xl tracking-tighter font-medium">malachite</span>
          <button 
            onClick={() => setIsOpen(false)} 
            className="w-12 h-12 flex items-center justify-center border border-border/40 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col p-10 gap-10 mt-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-6xl tracking-tighter hover:text-primary transition-colors lowercase italic"
            >
              {link.name}
            </Link>
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