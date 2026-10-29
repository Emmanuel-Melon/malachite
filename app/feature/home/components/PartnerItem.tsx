"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Partner } from "@/lib/data/shared.types";
import { fadeUp } from "@/lib/motion";

interface PartnerItemProps {
  partner: Partner;
}

export const PartnerItem = ({ partner }: PartnerItemProps) => {
  return (
    // Increased height (h-32) and added a subtle hover-lift effect
    <motion.div
      className="group border-border/30 flex h-full min-h-40 items-center justify-center border-r border-b p-6 md:p-10"
      variants={fadeUp}
    >
      {partner.imagePath ? (
        <div className="relative h-full w-full opacity-90">
          <Image
            src={partner.imagePath}
            alt={partner.name}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 160px, (max-width: 1024px) 220px, 280px"
          />
        </div>
      ) : (
        // Made text larger and more prominent for better visual balance
        <span className="text-foreground/80 group-hover:text-primary px-2 text-center text-lg font-semibold transition-colors md:text-xl">
          {partner.name}
        </span>
      )}
    </motion.div>
  );
};
