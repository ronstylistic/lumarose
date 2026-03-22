import type { ReactNode } from "react";
import Link from "next/link";
import { Check, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  revealCard,
  revealFade,
  revealItem,
  revealPrimary,
  revealSection,
  staggerClass,
} from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "College Care",
  description:
    "Explore transparent membership plans for virtual primary care, preventive medicine, chronic disease management, and weight management at LumaRose Health & Wellness.",
};

const includes = [
  "Virtual primary care visits",
  "Acute care visits for common student health concerns (colds, sinus infections, uncomplicated UTIs, minor skin conditions)",
  "Birth control management for non-invasive methods only; routine medication refills included",
  "General emotional wellness check-ins as part of primary care support (not therapy or psychiatric care)",
  "Preventive care guidance and health education",
  "Secure messaging with your provider",
];

type CollegeCarePlan = {
  name: string;
  price?: string;
  period?: string;
  popular?: boolean;
  features: string[];
  richPricing?: {
    entryLabel: string;
    entryPrice: string;
    entryIncludes: string;
    ongoingLabel: string;
    ongoingPrice: string;
    ongoingPeriod: string;
  };
  tagline?: string;
  cta?: { label: string; href: string };
  /** Rich layout for the 6-month semester-style plan */
  sixMonthLayout?: {
    /** Optional top-of-card pill; omit when the same copy is shown as a bottom badge */
    headerBadge?: string;
    priceMain: string;
    priceCadence: string;
    equivNote: string;
    closingLine: string;
    cta: { label: string; href: string };
  };
  /** Annual paid-in-full tier (headline price + monthly equiv + CTA) */
  annualPaidFullLayout?: {
    priceMain: string;
    priceCadence: string;
    equivNote: string;
    valueLine: string;
    cta: { label: string; href: string };
  };
};

const plans: CollegeCarePlan[] = [
  {
    name: "Monthly Plan",
    richPricing: {
      entryLabel: "Start today",
      entryPrice: "$135",
      entryIncludes: "Includes enrollment + your first month",
      ongoingLabel: "After your first month",
      ongoingPrice: "$75",
      ongoingPeriod: "/ month",
    },
    features: [
      "Up to 3 visits per month",
      "STD testing & treatment",
      "Birth control (start or refill)",
      "Sick visits (UTI, cold, sinus, etc.)",
      "Secure messaging with your provider",
      "Initial labs included (when appropriate)",
    ],
    tagline: "Best for getting started",
    cta: { label: "Get Started Today", href: "/book" },
  },
  {
    name: "Annual Plan",
    popular: true,
    annualPaidFullLayout: {
      priceMain: "$840",
      priceCadence: "/year",
      equivNote: "(Only $70/month)",
      valueLine: "Best value + peace of mind",
      cta: { label: "Get Best Value", href: "/book" },
    },
    features: [
      "Save money with one simple payment",
      "Full year of access and support",
      "Same full services and benefits",
      "Initial labs included (when appropriate)",
    ],
  },
  {
    name: "6-Month Plan",
    sixMonthLayout: {
      priceMain: "$450",
      priceCadence: "every 6 months",
      equivNote: "(Just $75/month)",
      closingLine: "Perfect for the semester",
      cta: { label: "Choose 6-Month Plan", href: "/book" },
    },
    features: [
      "Full access to all services",
      "No monthly billing — pay once, relax",
      "Consistent care all semester",
      "Initial labs included (when appropriate)",
    ],
  },
];

const premiumSurfaceClass = cn(
  "relative overflow-visible rounded-2xl border border-slate-200/65 bg-gray-100/40",
  "shadow-[0_1px_2px_rgba(15,23,42,0.045),0_14px_42px_-10px_rgba(15,23,42,0.085)]",
  "transition-shadow duration-300 motion-reduce:transition-none",
  "hover:shadow-[0_2px_4px_rgba(15,23,42,0.05),0_18px_48px_-10px_rgba(15,23,42,0.095)] motion-reduce:hover:shadow-[0_1px_2px_rgba(15,23,42,0.045),0_14px_42px_-10px_rgba(15,23,42,0.085)]"
);

function CheckListRow({
  children,
  textClassName,
  iconBoxClassName,
}: {
  children: ReactNode;
  textClassName?: string;
  iconBoxClassName?: string;
}) {
  return (
    <li className="flex gap-3.5">
      <span
        className={cn(
          "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-secondary/15 text-secondary",
          iconBoxClassName
        )}
        aria-hidden
      >
        <Check className="h-4 w-4" strokeWidth={2.35} aria-hidden />
      </span>
      <span
        className={cn(
          "min-w-0 text-base leading-relaxed text-foreground",
          textClassName
        )}
      >
        {children}
      </span>
    </li>
  );
}

function StandardPlanPrice({ price, period }: { price: string; period: string }) {
  return (
    <div className="space-y-1">
      <p className="text-4xl font-bold tabular-nums tracking-tight text-slate-900 md:text-[2.5rem]">
        {price}
      </p>
      <p className="text-base font-medium leading-snug text-slate-600 md:text-lg">
        {period}
      </p>
    </div>
  );
}

function PlanPriceEquivPanel({
  layout,
}: {
  layout: {
    priceMain: string;
    priceCadence: string;
    equivNote: string;
  };
}) {
  return (
    <div className="space-y-2">
      <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <span className="text-4xl font-bold tabular-nums tracking-tight text-slate-900 md:text-[2.5rem]">
          {layout.priceMain}
        </span>
        <span className="text-lg font-semibold text-slate-700 md:text-xl">
          {layout.priceCadence}
        </span>
      </p>
      <p className="text-base leading-snug text-slate-600/70 md:text-lg">
        {layout.equivNote}
      </p>
    </div>
  );
}

function RichPricingPanel({
  richPricing,
}: {
  richPricing: NonNullable<CollegeCarePlan["richPricing"]>;
}) {
  return (
    <div
      role="group"
      aria-label="Plan pricing summary"
      className="overflow-hidden rounded-0 bg-transparent"
    >
      {/* Block 1 — Entry (same flat surface as block 2) */}
      <div className="px-0 py-5 md:py-6">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
          {richPricing.entryLabel}
        </p>
        <p className="mt-2 text-3xl font-bold tabular-nums tracking-tight text-slate-900 md:text-[2.125rem]">
          {richPricing.entryPrice}
        </p>
        <p className="mt-2 max-w-[32ch] text-base leading-[1.65] text-slate-600 md:text-[1.0625rem]">
          {richPricing.entryIncludes}
        </p>
      </div>

      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/55 to-transparent"
        aria-hidden
      />

      {/* Block 2 — Long-term price (hero) */}
      <div className="px-0 py-6 md:py-7">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
          {richPricing.ongoingLabel}
        </p>
        <p className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
          <span className="text-4xl font-bold tabular-nums tracking-tight text-slate-900 md:text-[2.875rem] lg:text-[3rem]">
            {richPricing.ongoingPrice}
          </span>
          <span className="text-lg font-semibold tabular-nums tracking-tight text-slate-500 md:text-xl">
            {richPricing.ongoingPeriod}
          </span>
        </p>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <section
        className="relative overflow-x-hidden bg-gradient-to-b from-background via-muted/25 to-background py-24 md:py-28"
        aria-labelledby="college-care-heading"
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
              id="college-care-heading"
              className="text-balance text-4xl font-semibold tracking-tight text-primary md:text-5xl"
            >
              College Care
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
              Simple, virtual primary care for actively enrolled college students
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
              The LumaRose College Care Membership is a virtual, membership-based
              primary care option designed specifically for college students who
              need convenient, reliable access to care while balancing academics
              and life away from home.
            </p>
          </header>

          <div className="flex flex-col justify-between gap-12 md:flex-row md:gap-10">
            <div className={cn("flex-2", revealSection, "motion-safe:delay-100")}>
              <h2 className="mb-8 text-3xl font-semibold tracking-tight text-primary">
                Eligibility Requirements
              </h2>

              <ul className="max-w-3xl space-y-4">
                {[
                  "Be 18–25 years old",
                  "Be actively enrolled in an accredited college or university",
                  "Provide proof of current enrollment at the time of sign-up",
                ].map((item) => (
                  <CheckListRow key={item}>{item}</CheckListRow>
                ))}
              </ul>

              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Proof of enrollment is required to activate services and may be
                requested annually to maintain eligibility.
              </p>
            </div>

            <div className={cn("flex-1", revealSection, "motion-safe:delay-200")}>
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-primary">
                Enrollment Verification
              </h2>

              <ul className="max-w-3xl space-y-3">
                {[
                  "Current class schedule",
                  "Student ID with current term",
                  "Enrollment verification letter",
                  "Tuition receipt for the current academic term",
                ].map((item) => (
                  <CheckListRow key={item}>{item}</CheckListRow>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-20 flex flex-col justify-between gap-12 md:flex-row md:gap-10 lg:mt-24">
            <div className={cn("flex-2", revealSection, "motion-safe:delay-75")}>
              <h2 className="mb-10 text-3xl font-semibold tracking-tight text-primary md:mb-12">
                What’s Included
              </h2>

              <div className="grid grid-cols-1 gap-4 md:gap-5">
                {includes.map((text, i) => (
                  <IncludedItem key={text} text={text} staggerIndex={i} />
                ))}
              </div>
            </div>

            <div className={cn("flex-1", revealSection, "motion-safe:delay-150")}>
              <h2 className="mb-8 text-3xl font-semibold tracking-tight text-primary">
                Services Not Included
              </h2>

              <div className="grid grid-cols-1 gap-4">
                {[
                  "Weight-loss programs",
                  "GLP-1 medications",
                  "Complex chronic disease management",
                  "In-person or procedural services",
                ].map((item, i) => (
                  <ExcludedItem key={item} text={item} staggerIndex={i} />
                ))}
              </div>
            </div>
          </div>

          <div
            className={cn(
              "mt-20 max-w-3xl text-left lg:mt-24",
              revealSection,
              "motion-safe:delay-100"
            )}
          >
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-primary">
              Visit Structure
            </h2>

            <p className="mb-6 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
              Virtual visits are included as clinically appropriate and provided
              based on medical necessity and appropriate use, as determined by the
              provider.
            </p>

            <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
              This membership is intended for routine and acute student healthcare
              needs and is not designed for complex, high-frequency, or specialty
              medical care. Students requiring more comprehensive care may be
              recommended to transition to a standard adult membership plan.
            </p>
          </div>

          <div className={cn("mt-20 lg:mt-24", revealSection, "motion-safe:delay-75")}>
            <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight text-primary md:mb-12 md:text-4xl">
              Pricing Options
            </h2>

            <div className="grid grid-cols-1 gap-8 pt-5 md:grid-cols-3 md:gap-9 md:pt-6 lg:gap-10">
              {plans.map((plan, planIndex) => {
                const premiumMonthly = Boolean(plan.richPricing);
                const sixMonthRich = Boolean(plan.sixMonthLayout);
                const annualRich = Boolean(plan.annualPaidFullLayout);
                const premiumCard =
                  premiumMonthly || sixMonthRich || annualRich;
                const cta =
                  plan.cta ??
                  plan.sixMonthLayout?.cta ??
                  plan.annualPaidFullLayout?.cta;
                return (
                <Card
                  key={plan.name}
                  role="article"
                  aria-labelledby={`college-pricing-${planIndex}`}
                  className={cn(
                    "relative flex flex-col rounded-2xl border border-slate-200/65 bg-gray-100/40",
                    "transition-[box-shadow] duration-300 ease-out motion-reduce:transition-none",
                    "shadow-[0_1px_2px_rgba(15,23,42,0.045),0_14px_42px_-10px_rgba(15,23,42,0.085)]",
                    "hover:shadow-[0_2px_4px_rgba(15,23,42,0.05),0_18px_48px_-10px_rgba(15,23,42,0.095)] motion-reduce:hover:shadow-[0_1px_2px_rgba(15,23,42,0.045),0_14px_42px_-10px_rgba(15,23,42,0.085)]",
                    "overflow-visible",
                    revealCard,
                    staggerClass(planIndex),
                    plan.popular &&
                      !premiumMonthly &&
                      !annualRich &&
                      cn(
                        "z-[1] border-2 border-primary/55",
                        "shadow-[0_2px_6px_rgba(148,82,110,0.07),0_16px_46px_-10px_rgba(148,82,110,0.20),0_10px_28px_-12px_rgba(15,23,42,0.07)]",
                        "hover:shadow-[0_3px_8px_rgba(148,82,110,0.09),0_20px_52px_-10px_rgba(148,82,110,0.22),0_12px_30px_-12px_rgba(15,23,42,0.08)] motion-reduce:hover:shadow-[0_2px_6px_rgba(148,82,110,0.07),0_16px_46px_-10px_rgba(148,82,110,0.20),0_10px_28px_-12px_rgba(15,23,42,0.07)]"
                      )
                  )}
                >
                  {plan.popular && (
                    <span
                      className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-0 bg-primary px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_4px_14px_rgba(148,82,110,0.45),0_2px_6px_rgba(15,23,42,0.12)] outline-none ring-0"
                      aria-hidden
                    >
                      Most Popular
                    </span>
                  )}

                  {sixMonthRich && plan.sixMonthLayout?.headerBadge ? (
                    <span className="absolute left-1/2 top-0 z-20 max-w-[min(calc(100%-2rem),18rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border-0 bg-primary px-4 py-1.5 text-center text-sm font-semibold uppercase leading-snug tracking-wide text-white text-balance shadow-[0_4px_14px_rgba(148,82,110,0.45),0_2px_6px_rgba(15,23,42,0.12)] outline-none ring-0">
                      {plan.sixMonthLayout.headerBadge}
                    </span>
                  ) : null}

                  <CardHeader
                    className={cn(
                      "relative z-10 space-y-4 px-6 pb-2 pt-6",
                      (plan.popular ||
                        (sixMonthRich && plan.sixMonthLayout?.headerBadge)) &&
                        "pt-8"
                    )}
                  >
                    <h3
                      id={`college-pricing-${planIndex}`}
                      className="text-xl font-semibold tracking-tight text-primary md:text-[1.35rem]"
                    >
                      {plan.name}
                    </h3>

                    {plan.richPricing ? (
                      <RichPricingPanel richPricing={plan.richPricing} />
                    ) : plan.sixMonthLayout ? (
                      <PlanPriceEquivPanel layout={plan.sixMonthLayout} />
                    ) : plan.annualPaidFullLayout ? (
                      <PlanPriceEquivPanel layout={plan.annualPaidFullLayout} />
                    ) : plan.price && plan.period ? (
                      <StandardPlanPrice price={plan.price} period={plan.period} />
                    ) : null}
                  </CardHeader>

                  <CardContent
                    className={cn(
                      "relative z-10 flex flex-1 flex-col px-6 pb-8 pt-2",
                      premiumCard && "pt-1"
                    )}
                  >
                    <ul
                      className={cn(
                        "mb-8 space-y-3.5",
                        premiumCard && "space-y-4"
                      )}
                    >
                      {plan.features.map((feature) => (
                        <CheckListRow
                          key={feature}
                          textClassName={
                            premiumCard
                              ? "text-base leading-[1.65] text-foreground md:text-[1.0625rem]"
                              : "text-sm md:text-base"
                          }
                          iconBoxClassName={
                            premiumCard
                              ? "h-8 w-8 rounded-lg md:h-9 md:w-9 md:rounded-xl"
                              : undefined
                          }
                        >
                          {feature}
                        </CheckListRow>
                      ))}
                    </ul>

                    {plan.tagline && !premiumMonthly ? (
                      <p className="mb-5 text-sm font-semibold tracking-tight text-primary md:text-base">
                        {plan.tagline}
                      </p>
                    ) : null}

                    {plan.sixMonthLayout?.closingLine ? (
                      <div className="mb-5 flex justify-start md:mb-6">
                        <span className="inline-block max-w-full rounded-full border-0 bg-secondary px-4 py-1.5 text-left text-sm font-semibold uppercase leading-snug tracking-wide text-secondary-foreground text-balance shadow-md shadow-slate-900/12 dark:shadow-black/35 outline-none ring-0">
                          {plan.sixMonthLayout.closingLine}
                        </span>
                      </div>
                    ) : null}

                    {premiumMonthly && plan.tagline ? (
                      <div className="mb-5 flex justify-start md:mb-6">
                        <span className="inline-block max-w-full rounded-full border-0 bg-secondary px-4 py-1.5 text-left text-sm font-semibold uppercase leading-snug tracking-wide text-secondary-foreground text-balance shadow-md shadow-slate-900/12 dark:shadow-black/35 outline-none ring-0">
                          {plan.tagline}
                        </span>
                      </div>
                    ) : null}

                    {plan.annualPaidFullLayout?.valueLine ? (
                      <div className="mb-5 flex justify-start md:mb-6">
                        <span className="inline-block max-w-full rounded-full border-0 bg-secondary px-4 py-1.5 text-left text-sm font-semibold uppercase leading-snug tracking-wide text-secondary-foreground text-balance shadow-md shadow-slate-900/12 dark:shadow-black/35 outline-none ring-0">
                          {plan.annualPaidFullLayout.valueLine}
                        </span>
                      </div>
                    ) : null}

                    {cta ? (
                      <div className="mt-auto">
                        <Button
                          asChild
                          className={cn(
                            "w-full cursor-pointer font-semibold",
                            premiumCard
                              ? cn(
                                  "min-h-12 rounded-xl border-0 bg-primary px-4 py-3.5 text-primary-foreground",
                                  "text-balance text-[0.9375rem] leading-snug sm:min-h-12 sm:text-base",
                                  "shadow-md shadow-primary/30",
                                  "transition-[box-shadow,background-color] duration-200 ease-out",
                                  "hover:bg-[#7f445c] hover:shadow-lg hover:shadow-primary/35",
                                  "motion-reduce:transition-colors motion-reduce:hover:shadow-md"
                                )
                              : "h-12 rounded-lg text-base"
                          )}
                        >
                          <Link
                            href={cta.href}
                            className={cn(
                              "inline-flex min-h-12 w-full items-center justify-center text-center",
                              premiumCard &&
                                "rounded-[inherit] px-1 outline-none focus-visible:ring-[3px] focus-visible:ring-white/95 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                            )}
                          >
                            {cta.label}
                          </Link>
                        </Button>
                      </div>
                    ) : null}
                  </CardContent>
                </Card>
                );
              })}
            </div>
          </div>

          <p
            className={cn(
              "mt-16 max-w-4xl border-t border-primary/70 pt-8 text-sm leading-relaxed text-muted-foreground md:mt-20",
              revealFade,
              "motion-safe:delay-150"
            )}
          >
            LumaRose Health & Wellness is a virtual, cash-based medical practice.
            Insurance is not required. Laboratory testing, imaging, and
            medications ordered through third-party providers are not included and
            are billed separately.
          </p>
        </div>
      </section>

      <section
        className="relative isolate overflow-hidden bg-primary py-16"
        aria-labelledby="college-care-cta-heading"
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
          <div
            className={revealPrimary}
          >
            <h2
              id="college-care-cta-heading"
              className="text-balance text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl md:leading-tight"
            >
              Ready to Enroll?
            </h2>

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
                  Enroll in the College Care Membership
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function IncludedItem({
  text,
  staggerIndex,
}: {
  text: string;
  staggerIndex: number;
}) {
  return (
    <div
      className={cn(
        premiumSurfaceClass,
        "p-6 md:p-7",
        revealItem,
        staggerClass(staggerIndex)
      )}
    >
      <div className="flex items-start gap-4">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary/15 text-secondary md:h-12 md:w-12 md:rounded-xl"
          aria-hidden
        >
          <Check
            className="h-5 w-5 md:h-6 md:w-6"
            strokeWidth={2.35}
            aria-hidden
          />
        </div>
        <p className="text-pretty leading-relaxed text-foreground md:text-[1.0625rem]">
          {text}
        </p>
      </div>
    </div>
  );
}

function ExcludedItem({
  text,
  staggerIndex,
}: {
  text: string;
  staggerIndex: number;
}) {
  return (
    <div
      className={cn(
        premiumSurfaceClass,
        "flex gap-3.5 p-5 md:p-6",
        "border-red-200/35 hover:border-red-200/55",
        revealItem,
        staggerClass(staggerIndex)
      )}
    >
      <span
        className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-600"
        aria-hidden
      >
        <XCircle className="h-4 w-4" strokeWidth={2.35} aria-hidden />
      </span>
      <span className="min-w-0 text-base leading-relaxed text-foreground">
        {text}
      </span>
    </div>
  );
}
