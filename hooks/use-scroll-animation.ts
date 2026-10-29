"use client";

import { useReducedMotion } from "framer-motion";
import { viewportOnce } from "@/lib/motion";

export const useScrollAnimation = () => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return {};

  return {
    initial: "hidden",
    whileInView: "visible",
    viewport: viewportOnce,
  } as const;
};
