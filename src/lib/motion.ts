import { cn } from "@/lib/utils";

/**
 * Site-wide scroll/enter animations. All use `motion-safe:` so
 * `prefers-reduced-motion` disables them (ui-ux-pro-max).
 *
 * - **Primary** (700ms, slide 4): page headers, hero titles, primary CTA bands
 * - **Card** (500ms, slide 3): pricing/service cards, info panels, section blocks
 * - **Item** (500ms, slide 2): dense list rows (included/excluded cells)
 * - **Fade** (700ms): footnotes/disclaimers without vertical slide
 * - **Hero** variants match primary timing for a coherent first screen
 */

export const revealPrimary = cn(
  "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4",
  "motion-safe:duration-700 motion-safe:fill-mode-both"
);

/** Hero subtitle, body copy, and primary button row (same 700ms as title). */
export const revealHeroBody = cn(
  "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3",
  "motion-safe:duration-700 motion-safe:fill-mode-both"
);

/** Hero trust / disclaimer panel — fade only, no slide. */
export const revealHeroPanel = cn(
  "motion-safe:animate-in motion-safe:fade-in",
  "motion-safe:duration-700 motion-safe:fill-mode-both"
);

/** Cards, grids, two-column sections, mid-page section intros. */
export const revealCard = cn(
  "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3",
  "motion-safe:duration-500 motion-safe:fill-mode-both"
);

/** Alias: same motion as cards, for semantic use on section columns. */
export const revealSection = revealCard;

/** Smaller stacked panels (e.g. included/excluded rows). */
export const revealItem = cn(
  "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2",
  "motion-safe:duration-500 motion-safe:fill-mode-both"
);

/** Muted closing copy below main content. */
export const revealFade = cn(
  "motion-safe:animate-in motion-safe:fade-in",
  "motion-safe:duration-700 motion-safe:fill-mode-both"
);

/** Stagger delays for sibling `revealCard` / `revealItem` elements. */
export const STAGGER_DELAYS = [
  "",
  "motion-safe:delay-75",
  "motion-safe:delay-150",
  "motion-safe:delay-200",
  "motion-safe:delay-300",
  "motion-safe:delay-500",
] as const;

export function staggerClass(index: number): string {
  const i = Math.min(Math.max(0, index), STAGGER_DELAYS.length - 1);
  return STAGGER_DELAYS[i] ?? "";
}
