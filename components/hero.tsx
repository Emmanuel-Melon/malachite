"use client";
import {
  Users, Twitter, Instagram, Linkedin, Youtube,
  MessageSquareText,
  MessageSquare
} from "lucide-react";
import { MyButton } from "@/components/atoms/button";
import Image from "next/image";
import { ImageContainer } from "@/components/molecules/ImageContainer";
import { SocialLink } from "@/components/atoms/SocialLink";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { MyCard } from "./atoms/card";
import { IconContainer } from "./atoms/IconContainer";
import { HeroGrid } from "./HeroGrid";

const socials = [
  {
    href: "https://wa.me/256703349394",
    icon: MessageSquare
  },
  {
    href: "https://x.com/malachitecenter",
    icon: Twitter
  },
  {
    href: "https://instagram.com/malachitecenter",
    icon: Instagram
  },
  {
    href: "https://linkedin.com/company/malachite-center",
    icon: Linkedin
  },
  {
    href: "https://youtube.com/@MalachiteMediaUg",
    icon: Youtube
  }
];

export const Hero = () => {
  const [activeSubtitle, setActiveSubtitle] = useState(0);
  const subtitles = [
    "We offer you a safe space to explore and learn",
    "Discover a path to mental well-being",
    "We are committed to support your journey to mental well-being"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSubtitle((current) => (current + 1) % subtitles.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [subtitles.length]);

  return (
    <section className="relative overflow-hidden font-sans">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-[-10%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">

          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-6">
              <div className="relative h-6 overflow-hidden">
                {subtitles.map((text, i) => (
                  <h3
                    key={i}
                    className={cn(
                      "absolute top-0 left-0 whitespace-nowrap tracking-[.4em] text-sm md:text-xl font-bold transition-all duration-700 ease-in-out",
                      activeSubtitle === i
                        ? "translate-y-0 opacity-100"
                        : "translate-y-full opacity-0"
                    )}
                  >
                    {text}
                  </h3>
                ))}
              </div>

              <h1 className="text-5xl md:text-8xl lg:text-[110px] tracking-tighter leading-[0.8] text-foreground">
                hope, healing, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-primary bg-[length:200%_auto] animate-gradient-x italic">
                  and restoration.
                </span>
              </h1>
            </div>

            <div className="space-y-10">
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed lowercase">
                redefine your path to sustained well-being with personalized recovery and integrated community support.
              </p>

              <div className="flex flex-wrap items-center gap-8">
                <div className="flex flex-wrap gap-4">
                  <MyButton variant="default" size="lg" className="px-8">
                    view programs
                  </MyButton>
                </div>

                <div className="flex items-center gap-4 border-l border-border/60 pl-8 hidden md:flex">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {socials.map((social, index) => (
                      <SocialLink
                        key={index}
                        href={social.href}
                        icon={social.icon}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 lg:pt-12 relative">
            <div className="absolute inset-0 bg-secondary/40 rounded-3xl rotate-6 scale-95 translate-y-2 -z-20" />
            <div className="absolute inset-0 bg-secondary/90 rounded-3xl rotate-3 scale-[0.98] translate-y-1 -z-10" />

            <MyCard className="relative z-10 border-none bg-foreground text-background p-8 md:p-10 shadow-2xl">
              <div className="space-y-8">
                <p className="text-2xl md:text-3xl font-medium leading-tight tracking-tight italic">
                  "empowering individuals to reach their full potential through sustainable recovery and clinical innovation."
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-background/10">
                  <IconContainer
                    icon={Users}
                    variant="ghost"
                    className="bg-background/10 rounded-xl"
                    iconClassName="text-background"
                  />
                  <div>
                    <p className="text-[10px] tracking-[.3em] opacity-60 uppercase font-bold">
                      Founder
                    </p>
                    <p className="tracking-tight text-lg">
                      Christina Angela Ntulo
                    </p>
                  </div>
                </div>
              </div>
            </MyCard>
          </div>
        </div>

        <div className="relative mt-24 hidden md:block">
          <HeroGrid />
        </div>
      </div>
    </section>
  );
};
