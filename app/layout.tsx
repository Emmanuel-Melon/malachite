import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Text, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/molecules/layout/footer";
import { Navbar } from "@/components/molecules/layout/navbar";
import { getSiteData } from "@/lib/data/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSerif = DM_Serif_Text({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Malachite Center for Mental Health",
  description:
    "Malachite Center for Mental Health provides comprehensive mental health services including workplace wellness programs, school-based services, clinical innovation, and evidence-based treatment approaches in Uganda.",
  keywords: [
    "mental health",
    "counseling",
    "therapy",
    "workplace wellness",
    "school outreach",
    "clinical services",
    "uganda",
    "kampala",
  ],
  authors: [{ name: "Malachite Center for Mental Health" }],
  creator: "Malachite Center for Mental Health",
  publisher: "Malachite Center for Mental Health",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const site = await getSiteData();
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dmSans.variable} ${dmSerif.variable} bg-background font-sans antialiased`}
      >
        <Navbar navLinks={site.navLinks} phoneNumber={site.phoneNumber} />
        <main className="py-12 pt-32 md:pt-40">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
        <Footer />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
