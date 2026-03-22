"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  revealCard,
  revealFade,
  revealHeroBody,
  revealHeroPanel,
  revealItem,
  revealPrimary,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

export type ScrollRevealVariant =
  | "primary"
  | "card"
  | "fade"
  | "item"
  | "heroBody"
  | "heroPanel";

const VARIANT_REVEAL: Record<ScrollRevealVariant, string> = {
  primary: revealPrimary,
  card: revealCard,
  fade: revealFade,
  item: revealItem,
  heroBody: revealHeroBody,
  heroPanel: revealHeroPanel,
};

/** Initial state aligned with slide-in-from-bottom-* in motion.ts (motion-safe only). */
const VARIANT_HIDDEN: Record<ScrollRevealVariant, string> = {
  primary: "opacity-0 motion-safe:translate-y-4",
  card: "opacity-0 motion-safe:translate-y-3",
  fade: "opacity-0",
  item: "opacity-0 motion-safe:translate-y-2",
  heroBody: "opacity-0 motion-safe:translate-y-3",
  heroPanel: "opacity-0",
};

const DEFAULT_ROOT_MARGIN = "0px 0px -12% 0px";

type ScrollRevealProps = {
  variant: ScrollRevealVariant;
  className?: string;
  rootMargin?: string;
  children: ReactNode;
};

export default function ScrollReveal({
  variant,
  className,
  rootMargin = DEFAULT_ROOT_MARGIN,
  children,
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion === true || visible) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [prefersReducedMotion, visible, rootMargin]);

  if (prefersReducedMotion === true) {
    return <div className={cn("w-full", className)}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={cn(
        "w-full",
        className,
        visible ? VARIANT_REVEAL[variant] : VARIANT_HIDDEN[variant]
      )}
    >
      {children}
    </div>
  );
}
