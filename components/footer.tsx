import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  Phone,
  MapPin,
  type LucideIcon
} from "lucide-react";
import { MyButton } from "@/components/atoms/button";
import { IconContainer } from "@/components/atoms/IconContainer";
import { MyCard } from "@/components/atoms/card";
import { SocialLink } from "@/components/atoms/SocialLink";
import { Indicator } from "@/components/atoms/Indicator";
import { Statement } from "./molecules/Statement";

interface ContactItem {
  icon: LucideIcon;
  label: string;
  value: string;
}

const contactData: ContactItem[] = [
  {
    icon: MapPin,
    label: "visit us",
    value: "672 Wamala Rd, Kampala"
  },
  {
    icon: Phone,
    label: "call us",
    value: "+256757356691"
  }
];

const socials = [
  { href: "Facebook", icon: Facebook },
  { href: "Twitter", icon: Twitter },
  { href: "Instagram", icon: Instagram },
  { href: "LinkedIn", icon: Linkedin }
];

const footerNavigation = [
  {
    title: "company",
    links: [
      { label: "about us", href: "/about" },
      { label: "contact", href: "/contact" },
    ],
  },
];

export const ContactInfo = () => {
  return (
    <div className="space-y-8">
      {contactData.map((item, index) => (
        <div key={index} className="relative flex flex-row items-center gap-6 group">
          <IconContainer
            icon={item.icon}
            variant="ghost"
            className="w-12 h-12 shrink-0 rounded-xl"
            iconClassName="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
          />
          <div className="space-y-0.5">
            <div className="inline-flex items-center gap-2">
              <Indicator activeDot="right" variant="secondary" />
              <span className="text-[10px] tracking-[.4em] uppercase font-bold text-muted-foreground/60">
                {item.label}
              </span>
            </div>
            <h2 className="text-lg tracking-tighter leading-tight text-muted-foreground transition-colors group-hover:text-foreground">
              {item.value}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/40 relative overflow-hidden font-sans">
      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-20">
          
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-6">
              <Link href="/" className="inline-block group">
                <h2 className="text-4xl tracking-tighter leading-[0.9] lowercase">
                  malachite <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600 italic">
                    medical centre
                  </span>
                </h2>
              </Link>
              <Statement
                text={
                  <>
                    empowering individuals to reach their full potential through <span className="text-primary">sustainable recovery</span> and clinical innovation.
                  </>
                }
                label="Our Mission"
              />
            </div>

            <div className="flex flex-wrap gap-4">
              {socials.map((social) => (
                <SocialLink key={social.href} href={social.href} icon={social.icon} />
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="pt-2">
              <ContactInfo />
            </div>

            {footerNavigation.map((group) => (
              <div key={group.title} className="space-y-8">
                <div className="inline-flex items-center gap-3">
                  <Indicator variant="secondary" activeDot="right" />
                  <h3 className="tracking-[.4em] uppercase text-xs font-bold">
                    {group.title}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-0 hover:gap-3 text-muted-foreground hover:text-foreground transition-all duration-300 lowercase text-lg italic"
                      >
                        <ArrowRight className="w-0 group-hover:w-5 h-5 opacity-0 group-hover:opacity-100 transition-all text-primary" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="md:col-span-2 pt-8">
              <MyCard
                className="p-8 flex flex-col md:flex-row items-center justify-between gap-8 bg-foreground text-background border-none rounded-[2rem]"
              >
                <div className="space-y-1 text-center md:text-left">
                  <p className="text-2xl tracking-tighter">ready to start your journey?</p>
                  <p className="text-sm opacity-60">get in touch with our specialist team today.</p>
                </div>
                <MyButton size="lg" className="rounded-full bg-background text-foreground hover:bg-background/90 px-8">
                  contact us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </MyButton>
              </MyCard>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-primary/5 blur-[100px] rounded-full -z-10" />
    </footer>
  );
};