import { Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { revealCard, revealSection, staggerClass } from "@/lib/motion";
import { cn } from "@/lib/utils";

const benefits = [
  {
    id: "unhurried",
    title: "Meaningful, unhurried visits",
    description:
      "Care that prioritizes understanding—not rushed appointments—so your concerns get real attention.",
  },
  {
    id: "continuity",
    title: "Continuity over time",
    description:
      "An ongoing relationship that builds deeper insight into your health and supports long-term progress.",
  },
  {
    id: "flexible",
    title: "Flexible ways to access care",
    description:
      "Membership supports consistent access; if you prefer flexibility, pay-per-visit options are also available.",
  },
] as const;

export default function MembershipCare() {
  return (
    <section
      className="bg-white py-16"
      aria-labelledby="membership-care-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={cn(
            "mx-auto mb-14 max-w-3xl text-center md:mb-16",
            revealSection
          )}
        >
          <h2
            id="membership-care-heading"
            className="mb-5 text-balance text-3xl font-semibold tracking-tight text-primary md:text-4xl"
          >
            Membership Care at LumaRose
          </h2>
          <p className="mx-auto max-w-prose text-pretty text-base leading-relaxed text-slate-600 md:text-[1.0625rem]">
            LumaRose offers a membership-based care model designed to support
            continuity, access, and personalized care over time.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:mb-14">
          {benefits.map(({ id, title, description }, index) => (
            <article
              key={id}
              className={cn(
                "rounded-xl bg-gray-100/40 p-6 md:rounded-2xl md:p-7",
                "shadow-[0_1px_2px_rgba(15,23,42,0.04),0_4px_16px_rgba(15,23,42,0.05)]",
                "transition-shadow duration-200 motion-reduce:transition-none",
                "hover:shadow-[0_4px_12px_rgba(15,23,42,0.06),0_8px_24px_rgba(148,82,110,0.06)]",
                revealCard,
                staggerClass(index)
              )}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary/15 text-secondary md:h-12 md:w-12 md:rounded-xl"
                  aria-hidden
                >
                  <Check className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2.35} />
                </div>
                <div className="min-w-0 text-left">
                  <h3 className="text-xl font-semibold leading-snug tracking-tight text-primary md:text-[1.35rem]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base">
                    {description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          className={cn(
            "flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center",
            revealSection,
            "motion-safe:delay-100"
          )}
        >
          <Button
            size="lg"
            asChild
            className="min-h-12 w-full rounded-full px-8 font-semibold text-white shadow-md transition-colors duration-200 hover:text-white sm:w-auto"
          >
            <Link
              href="/membership"
              className="text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Explore Membership Options
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="min-h-12 w-full rounded-full border-primary/25 px-8 font-medium text-primary transition-colors duration-200 hover:bg-primary/5 sm:w-auto"
          >
            <Link
              href="/non-membership"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Pay-per-visit options
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
