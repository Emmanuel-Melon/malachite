"use client";
import React, { useState, useEffect } from 'react';
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
    { name: "contact", href: "/contact" },
    { name: "programs", href: "/programs" },
    { name: "about", href: "/about" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 border-b",
          scrolled
            ? "bg-background/80 backdrop-blur-lg border-border/40 py-3 shadow-sm"
            : "bg-background border-transparent py-5"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center group">
            <span className="
              inline-flex items-center justify-center
              px-5 h-10
              bg-[#fcfcfd] 
              text-[#36395a] 
              text-lg tracking-tighter
              rounded-lg
              shadow-[rgba(45,35,66,0.3)_0_2px_4px,rgba(45,35,66,0.2)_0_7px_13px_-3px,#d6d6e7_0_-2px_0_inset]
              transition-all duration-150
              group-hover:shadow-[rgba(45,35,66,0.3)_0_4px_8px,rgba(45,35,66,0.2)_0_7px_13px_-3px,#d6d6e7_0_-2px_0_inset]
              group-hover:-translate-y-0.5
              group-active:shadow-[#d6d6e7_0_2px_5px_inset]
              group-active:translate-y-0.5
            ">
              malachite
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] tracking-[.25em] text-muted-foreground hover:text-primary transition-colors uppercase font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-2 pr-8 border-r border-border/40">
              <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center">
                <Phone className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="text-sm font-semibold tracking-tight">+256757356691</span>
            </div>
            <MyButton size="sm" className="rounded-md shadow-[rgba(45,35,66,0.3)_0_2px_4px,rgba(45,35,66,0.2)_0_7px_13px_-3px,#000000_0_-2px_0_inset]">
              get in touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </MyButton>
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <div className={cn(
        "fixed inset-0 bg-background z-[60] lg:hidden flex flex-col transition-all duration-500 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="p-6 flex justify-between items-center border-b border-border/40">
          <span className="text-2xl tracking-tighter bg-[#fcfcfd] px-4 py-1.5 rounded-lg shadow-[rgba(45,35,66,0.2)_0_2px_4px,#d6d6e7_0_-2px_0_inset]">malachite</span>
          <button onClick={() => setIsOpen(false)} className="p-2 border border-border/40 rounded-xl">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col p-8 gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-5xl tracking-tighter hover:text-primary transition-colors border-b border-border/10 pb-4"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="mt-auto p-8 space-y-6">
          <div className="p-6 rounded-2xl bg-secondary/30 border border-border/40 shadow-inner">
            <p className="text-[10px] tracking-[.4em] text-primary mb-2 uppercase font-mono">emergency support</p>
            <p className="text-3xl tracking-tight">+256757356691</p>
          </div>
          <MyButton className="w-full py-8 text-lg rounded-xl shadow-[rgba(45,35,66,0.3)_0_2px_4px,rgba(45,35,66,0.2)_0_7px_13px_-3px,#000000_0_-2px_0_inset]">
            book appointment
          </MyButton>
        </div>
      </div>
    </>
  );
};