import type { ReactNode } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  revealFade,
  revealPrimary,
  revealSection,
  revealCard,
  staggerClass,
} from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weight Management",
  description:
    "Self-pay medical weight and metabolic care at LumaRose Health & Wellness—transparent visit pricing, clinical evaluation, and optional membership for ongoing support.",
};

const premiumTierShell = cn(
  "relative overflow-visible rounded-2xl border border-slate-200/65 bg-gray-100/40",
  "p-6 md:p-7",
  "shadow-[0_1px_2px_rgba(15,23,42,0.045),0_14px_42px_-10px_rgba(15,23,42,0.085)]",
  "transition-shadow duration-300 motion-reduce:transition-none",
  "hover:shadow-[0_2px_4px_rgba(15,23,42,0.05),0_18px_48px_-10px_rgba(15,23,42,0.095)] motion-reduce:hover:shadow-[0_1px_2px_rgba(15,23,42,0.045),0_14px_42px_-10px_rgba(15,23,42,0.085)]"
);

const infoPanelClass = cn(
  "rounded-2xl border border-slate-200/65 bg-gray-100/40 p-6 md:p-8",
  "shadow-[0_1px_2px_rgba(15,23,42,0.045),0_14px_42px_-10px_rgba(15,23,42,0.085)]",
  "transition-shadow duration-300 motion-reduce:transition-none",
  "hover:shadow-[0_2px_4px_rgba(15,23,42,0.05),0_18px_48px_-10px_rgba(15,23,42,0.095)] motion-reduce:hover:shadow-[0_1px_2px_rgba(15,23,42,0.045),0_14px_42px_-10px_rgba(15,23,42,0.085)]"
);

function FeatureRow({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3.5">
      <span
        className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-secondary/12 text-secondary"
        aria-hidden
      >
        <Check className="h-4 w-4" strokeWidth={2.35} aria-hidden />
      </span>
      <span className="min-w-0 text-sm leading-relaxed text-foreground md:text-base">
        {children}
      </span>
    </li>
  );
}

function NoteRow({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3.5">
      <span
        className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-secondary/12 text-secondary"
        aria-hidden
      >
        <Check className="h-4 w-4" strokeWidth={2.35} aria-hidden />
      </span>
      <span className="min-w-0 text-base leading-relaxed text-muted-foreground">
        {children}
      </span>
    </li>
  );
}

export default function Page() {
  return (
    <>
      <section
        className="relative overflow-x-hidden bg-gradient-to-b from-background via-muted/25 to-background py-24 md:py-28"
        aria-labelledby="weight-management-heading"
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-6 md:px-8">
          <header
            className={cn(
              "mx-auto mb-16 max-w-3xl text-center md:mb-20",
              revealPrimary
            )}
          >
            <h1
              id="weight-management-heading"
              className="text-balance text-4xl font-semibold tracking-tight text-primary md:text-5xl"
            >
              Weight Loss Management
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base font-medium leading-relaxed text-foreground md:text-lg">
              Medical weight-loss and metabolic care built on transparency,
              clinical appropriateness, and personalized support.
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
              Our weight-loss and metabolic health services are offered as
              self-pay, non-membership care for patients who want medical
              guidance without a monthly commitment. Pricing is structured as a
              range to reflect differences in visit complexity, time, and
              clinical decision-making.
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
              Prescription medications, including GLP-1–based therapies, are not
              included in visit pricing and are prescribed only when clinically
              appropriate after evaluation.
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
              Your final fee is always reviewed and agreed upon before your visit
              begins.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-14">
            {/* Left: care intro + pricing tiers */}
            <div
              className={cn(revealSection, "motion-safe:delay-75 lg:col-span-1")}
            >
              <h2 className="text-3xl font-semibold tracking-tight text-primary">
                Weight Management Care
              </h2>
              <p className="mt-2 text-sm font-medium text-muted-foreground md:text-base">
                Non-membership
              </p>
              <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
                Medical weight-loss and metabolic care for patients seeking
                professional guidance without a monthly commitment.
              </p>
              <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
                These self-pay visits are ideal for individuals who want
                evaluation, treatment planning, and follow-up on an as-needed
                basis.
              </p>

              <div className="mt-10 flex flex-col gap-6 md:gap-7">
                <PricingTierCard
                  staggerIndex={0}
                  title="Initial Weight Management Evaluation"
                  price="$449"
                  items={[
                    "Review of medical history, medications, and weight-loss goals",
                    "Evaluation of metabolic health and contributing factors",
                    "Discussion of appropriate treatment options",
                    "Individualized care plan and next-step recommendations",
                  ]}
                />
                <PricingTierCard
                  staggerIndex={1}
                  title="Weight Management Follow-Up Visit"
                  price="$199"
                  items={[
                    "Progress review",
                    "Plan adjustments when indicated",
                    "Ongoing education and support",
                    "Medication review when clinically appropriate",
                  ]}
                />
              </div>
            </div>

            {/* Right: membership prompt + important notes */}
            <div className="flex flex-col gap-10 lg:gap-12">
              <div
                className={cn(
                  infoPanelClass,
                  revealSection,
                  "motion-safe:delay-100"
                )}
              >
                <h2 className="text-2xl font-semibold tracking-tight text-primary md:text-3xl">
                  Considering Ongoing Support?
                </h2>
                <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
                  If you are managing chronic conditions alongside weight loss or
                  require ongoing follow-up and medication management, a LumaRose
                  membership plan may provide more consistent support.
                </p>
                <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
                  Membership options are designed for patients who benefit from
                  continuity of care, regular follow-up, and a more proactive
                  approach to health management.
                </p>
                <div className="mt-8">
                  <Button
                    size="lg"
                    asChild
                    className="min-h-12 w-full rounded-full bg-primary px-8 font-semibold text-white shadow-md transition-colors duration-200 hover:bg-primary/90 hover:text-white sm:w-auto"
                  >
                    <Link
                      href="/membership"
                      className="text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      View Membership Options
                    </Link>
                  </Button>
                </div>
              </div>

              <div
                className={cn(
                  infoPanelClass,
                  revealSection,
                  "motion-safe:delay-150"
                )}
              >
                <h2 className="text-2xl font-semibold tracking-tight text-primary md:text-3xl">
                  Important Notes
                </h2>
                <ul className="mt-6 space-y-3.5">
                  {[
                    "All weight-loss services are self-pay and non-membership",
                    "Medications, labs, supplements, and pharmacy fees are not included",
                    "Prescriptions are provided only when clinically appropriate",
                    "Weight-loss outcomes vary by individual",
                    "Final pricing is confirmed prior to your visit",
                  ].map((item) => (
                    <NoteRow key={item}>{item}</NoteRow>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <p
            className={cn(
              "mt-16 max-w-4xl border-t border-primary/70 pt-8 text-sm leading-relaxed text-muted-foreground md:mt-20",
              revealFade,
              "motion-safe:delay-100"
            )}
          >
            LumaRose Health &amp; Wellness is a virtual, cash-based medical
            practice. Insurance is not required. Laboratory testing, imaging,
            and medications ordered through third-party providers are billed
            separately unless otherwise stated.
          </p>
        </div>
      </section>

      <section
        className="relative isolate overflow-hidden bg-primary py-16"
        aria-labelledby="weight-management-cta-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_-10%,rgba(255,255,255,0.14),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/[0.12]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <div className={revealPrimary}>
            <h2
              id="weight-management-cta-heading"
              className="text-balance text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl md:leading-tight"
            >
              Ready to Schedule a Visit?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/90 md:text-lg">
              Book a non-membership weight-loss visit to see if this care option
              is right for you.
            </p>
            <div className="mt-10 sm:mt-12">
              <Button
                size="lg"
                asChild
                className={cn(
                  "min-h-12 w-full rounded-full border-0 bg-white px-8 text-base font-semibold text-primary",
                  "shadow-md shadow-black/20 ring-1 ring-white/40",
                  "transition-[box-shadow,background-color] duration-300 motion-reduce:transition-none",
                  "hover:bg-white hover:text-primary hover:shadow-lg hover:shadow-black/25 motion-safe:hover:shadow-xl",
                  "sm:mx-auto sm:w-auto sm:min-w-[min(100%,18rem)] sm:px-10"
                )}
              >
                <Link
                  href="/book"
                  className="text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  Book a Weight Loss Visit
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PricingTierCard({
  title,
  price,
  items,
  staggerIndex,
}: {
  title: string;
  price: string;
  items: string[];
  staggerIndex: number;
}) {
  return (
    <div
      className={cn(
        premiumTierShell,
        revealCard,
        staggerClass(staggerIndex)
      )}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <h3 className="text-lg font-semibold tracking-tight text-primary md:text-xl">
          {title}
        </h3>
        <div className="flex shrink-0 items-baseline gap-1">
          <span className="text-3xl font-bold tabular-nums tracking-tight text-foreground md:text-4xl">
            {price}
          </span>
        </div>
      </div>
      <ul className="mt-6 space-y-3.5 border-t border-primary/70 pt-6">
        {items.map((item) => (
          <FeatureRow key={item}>{item}</FeatureRow>
        ))}
      </ul>
    </div>
  );
}
