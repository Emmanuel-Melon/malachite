"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { MyButton } from "@/components/atoms/button";
import type { NavLink } from "@/lib/data/shared.types";
import { cn } from "@/lib/utils";

interface NavbarProps {
  navLinks: NavLink[];
}

export const Navbar = ({ navLinks }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-10">
        
        {/* Logo - Larger and clearer */}
        <Link href="/" className="relative h-10 w-48 transition-transform hover:opacity-90">
          <Image src="/logo.png" alt="Company Logo" fill className="object-contain" priority />
        </Link>

        {/* Desktop Links - Using your design language */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Button - Inspired by the "Join Us" style in the screenshot */}
        <div className="hidden lg:flex">
          <MyButton asChild className="rounded-full px-6">
            <Link href="/contact">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </MyButton>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2" onClick={() => setIsOpen(true)}>
          <Menu className="h-8 w-8 text-foreground" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 z-[100] bg-background p-10 transition-transform duration-300 lg:hidden",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex justify-between items-center mb-16">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={() => setIsOpen(false)}><X className="h-8 w-8" /></button>
        </div>
        <div className="flex flex-col gap-8 text-2xl font-medium">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};