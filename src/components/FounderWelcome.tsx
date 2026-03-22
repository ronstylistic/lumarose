import Link from "next/link";
import { Button } from "@/components/ui/button";
import FounderPortrait from "@/components/FounderPortrait";
import { Award, Clock, Stethoscope } from "lucide-react";
import { revealPrimary } from "@/lib/motion";
import { cn } from "@/lib/utils";

const MESSAGE =
  "LumaRose Health & Wellness was created to offer thoughtful, personalized care grounded in experience, trust, and intention. I look forward to partnering with you in your health journey.";

const CREDENTIALS = [
  {
    icon: Award,
    label: "Board-certified FNP-C",
  },
  {
    icon: Clock,
    label: "17+ years clinical experience",
  },
  {
    icon: Stethoscope,
    label: "Virtual primary & preventive care",
  },
] as const;

export default function FounderWelcome() {
  return (
    <section
      className="bg-gradient-to-b from-gray-100/30 via-background to-gray-100/40 py-16"
      aria-labelledby="founder-welcome-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={cn(
            "overflow-hidden rounded-2xl bg-card",
            "shadow-[0_24px_64px_-16px_rgba(148,82,110,0.12),0_12px_24px_-8px_rgba(15,23,42,0.06)]",
            revealPrimary
          )}
        >
          <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
            {/* Visual anchor — swap /images/founder.jpg when available */}
            <div className="relative aspect-[4/3] min-h-[240px] lg:aspect-auto lg:min-h-[420px]">
              <FounderPortrait />
              <div
                className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-card/40"
                aria-hidden
              />
            </div>

            <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12 lg:pl-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                From the founder
              </p>
              <h2
                id="founder-welcome-heading"
                className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
              >
                Welcome to LumaRose Health & Wellness
              </h2>

              <ul
                className="mt-6 flex flex-wrap gap-2"
                aria-label="Provider credentials"
              >
                {CREDENTIALS.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full bg-primary/[0.08] px-3.5 py-2 text-xs font-medium text-foreground transition-colors duration-200 hover:bg-primary/[0.12]"
                  >
                    <Icon
                      className="h-4 w-4 shrink-0 text-primary"
                      aria-hidden
                    />
                    {label}
                  </li>
                ))}
              </ul>

              <p className="mt-8 max-w-prose text-pretty text-base leading-relaxed text-foreground md:text-lg">
                {MESSAGE}
              </p>

              <div className="mt-10 pt-2">
                <div
                  className="mb-6 h-px max-w-[4.5rem] bg-gradient-to-r from-primary/35 via-primary/20 to-transparent"
                  aria-hidden
                />
                <p className="text-base font-semibold text-foreground">
                  — Shameka Crump, FNP-C
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Founder, LumaRose Health & Wellness
                </p>
              </div>

              <div className="mt-8">
                <Button
                  size="lg"
                  asChild
                  className="min-h-12 w-full rounded-md px-8 font-semibold text-white hover:text-white sm:w-auto"
                >
                  <Link
                    href="/about"
                    className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                  >
                    Meet your provider
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
