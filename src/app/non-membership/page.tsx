import type { ReactNode } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { revealCard, revealFade, revealPrimary, revealSection, staggerClass } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Non-Membership",
  description:
    "Self-pay, pay-per-visit virtual care and select concierge services at LumaRose Health & Wellness—transparent pricing without a monthly membership.",
};

const plans = [
  {
    name: "Virtual Primary & General Care",
    price: "$200",
    period: "/visit",
    description: "Appropriate for:",
    features: [
      "General medical concerns",
      "Preventive or wellness visits",
      "Stable chronic condition check-ins",
      "Routine lab review",
      "Medication review (non-controlled)",
      "Health guidance and education",
    ],
    notes:
      "Includes clinical evaluation, treatment planning, and patient education.",
  },
  {
    name: "Urgent Virtual Care (Non-Emergency)",
    price: "$175",
    period: "/visit",
    description: "For short-term or acute concerns, including:",
    features: [
      "Cold, flu, or respiratory symptoms",
      "Rashes, UTIs, gastrointestinal concerns",
      "Minor infections",
      "Medication-related questions",
    ],
    notes:
      "This service does not replace emergency or urgent in-person care.",
  },
];

const premiumPricingCard = cn(
  "relative flex flex-col overflow-visible rounded-2xl border border-slate-200/65 bg-gray-100/40",
  "gap-0 py-0 shadow-none",
  "shadow-[0_1px_2px_rgba(15,23,42,0.045),0_14px_42px_-10px_rgba(15,23,42,0.085)]",
  "transition-shadow duration-300 motion-reduce:transition-none",
  "hover:shadow-[0_2px_4px_rgba(15,23,42,0.05),0_18px_48px_-10px_rgba(15,23,42,0.095)] motion-reduce:hover:shadow-[0_1px_2px_rgba(15,23,42,0.045),0_14px_42px_-10px_rgba(15,23,42,0.085)]",
  revealCard
);

const infoPanelClass = cn(
  "rounded-2xl border border-slate-200/65 bg-gray-100/40 p-6 md:p-8",
  "shadow-[0_1px_2px_rgba(15,23,42,0.045),0_14px_42px_-10px_rgba(15,23,42,0.085)]",
  "transition-shadow duration-300 motion-reduce:transition-none",
  "hover:shadow-[0_2px_4px_rgba(15,23,42,0.05),0_18px_48px_-10px_rgba(15,23,42,0.095)] motion-reduce:hover:shadow-[0_1px_2px_rgba(15,23,42,0.045),0_14px_42px_-10px_rgba(15,23,42,0.085)]"
);

function CheckListRow({
  children,
  muted,
}: {
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <li className="flex gap-3.5">
      <span
        className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-secondary/12 text-secondary"
        aria-hidden
      >
        <Check className="h-4 w-4" strokeWidth={2.35} aria-hidden />
      </span>
      <span
        className={cn(
          "min-w-0 text-base leading-relaxed",
          muted ? "text-muted-foreground" : "text-foreground"
        )}
      >
        {children}
      </span>
    </li>
  );
}

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

export default function NonMembershipPage() {
  return (
    <>
      <section
        className="relative overflow-x-hidden bg-gradient-to-b from-background via-muted/25 to-background py-24 md:py-28"
        aria-labelledby="non-membership-heading"
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
              id="non-membership-heading"
              className="text-balance text-4xl font-semibold tracking-tight text-primary md:text-5xl"
            >
              Non-Membership Services &amp; Pricing
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base font-medium leading-relaxed text-foreground md:text-lg">
              Flexible care without a monthly commitment.
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
              LumaRose Health &amp; Wellness offers self-pay medical visits for
              patients seeking one-time or occasional care. This option is ideal
              for individuals who want high-quality, personalized care without
              enrolling in a membership plan.
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
              Visits are provided through secure virtual care and select in-home
              concierge services.
            </p>
          </header>

          <div
            className={cn(
              "mt-20 lg:mt-24",
              revealSection,
              "motion-safe:delay-100"
            )}
          >
            <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight text-primary md:mb-12 md:text-4xl">
              Virtual Visit Pricing
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-9 lg:gap-10">
              {plans.map((plan, i) => (
                <Card
                  key={plan.name}
                  className={cn(premiumPricingCard, staggerClass(i))}
                >
                  <CardHeader className="space-y-4 px-6 pb-2 pt-6">
                    <h3 className="text-xl font-semibold tracking-tight text-primary md:text-[1.35rem]">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl font-bold tabular-nums tracking-tight text-foreground md:text-[2.5rem]">
                        {plan.price}
                      </span>
                      <span className="text-base text-muted-foreground">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">
                      {plan.description}
                    </p>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col px-6 pb-8 pt-2">
                    <ul className="mb-6 space-y-3.5">
                      {plan.features.map((feature) => (
                        <FeatureRow key={feature}>{feature}</FeatureRow>
                      ))}
                    </ul>
                    {plan.notes && (
                      <p className="mt-auto border-t border-primary/70 pt-6 text-sm leading-relaxed text-muted-foreground">
                        {plan.notes}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-20 space-y-20 lg:mt-24 lg:space-y-24">
            <div className={cn(revealSection, "motion-safe:delay-75")}>
            <ServiceColumn
              title="Sexual Health Services"
              tagline="Confidential, inclusive care"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-9">
                <Card className={cn(premiumPricingCard, staggerClass(0))}>
                  <CardHeader className="space-y-4 px-6 pb-2 pt-6">
                    <h3 className="text-lg font-semibold tracking-tight text-primary md:text-xl">
                      Sexual Health Visit
                    </h3>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl font-bold tabular-nums tracking-tight text-foreground md:text-[2.5rem]">
                        $175
                      </span>
                      <span className="text-base text-muted-foreground">
                        /visit
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">
                      Includes:
                    </p>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col px-6 pb-8 pt-2">
                    <ul className="space-y-3.5">
                      {[
                        "Sexual health risk assessment and counseling",
                        "Evaluation of symptoms or exposure concerns",
                        "STD / STI testing coordination",
                        "Treatment for select STDs / STIs when clinically appropriate",
                        "Preventive education and guidance",
                      ].map((feature) => (
                        <FeatureRow key={feature}>{feature}</FeatureRow>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className={cn(premiumPricingCard, staggerClass(1))}>
                  <CardHeader className="space-y-4 px-6 pb-2 pt-6">
                    <h3 className="text-lg font-semibold tracking-tight text-primary md:text-xl">
                      Follow-Up Sexual Health Visit
                    </h3>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl font-bold tabular-nums tracking-tight text-foreground md:text-[2.5rem]">
                        $125
                      </span>
                      <span className="text-base text-muted-foreground">
                        /visit
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">
                      Includes:
                    </p>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col px-6 pb-8 pt-2">
                    <ul className="mb-6 space-y-3.5">
                      {[
                        "Review of results",
                        "Treatment follow-up or symptom reassessment",
                        "Additional counseling as needed",
                      ].map((feature) => (
                        <FeatureRow key={feature}>{feature}</FeatureRow>
                      ))}
                    </ul>
                    <p className="mt-auto border-t border-primary/70 pt-6 text-sm leading-relaxed text-muted-foreground">
                      Lab fees are billed separately by third-party laboratories.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </ServiceColumn>
            </div>

            <div
              className={cn(
                "grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10",
                revealSection,
                "motion-safe:delay-100"
              )}
            >
              <ServiceColumn
                title="Prescription Refill Services"
                tagline="Non-controlled medications only"
              >
                <Card className={cn(premiumPricingCard, staggerClass(0))}>
                  <CardHeader className="space-y-6 px-6 pb-2 pt-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                      <h3 className="text-lg font-semibold tracking-tight text-primary md:text-xl">
                        Single Medication Refill
                      </h3>
                      <div className="flex shrink-0 items-baseline gap-1.5">
                        <span className="text-3xl font-bold tabular-nums text-foreground md:text-4xl">
                          $100
                        </span>
                        <span className="text-base text-muted-foreground">
                          /visit
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 border-t border-primary/70 pt-6 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                      <h3 className="text-lg font-semibold tracking-tight text-primary md:text-xl">
                        Multiple Medication Review &amp; Refill
                      </h3>
                      <div className="flex shrink-0 items-baseline gap-1.5">
                        <span className="text-3xl font-bold tabular-nums text-foreground md:text-4xl">
                          $150
                        </span>
                        <span className="text-base text-muted-foreground">
                          /visit
                        </span>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">
                      Includes:
                    </p>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col px-6 pb-8 pt-2">
                    <ul className="mb-6 space-y-3.5">
                      {[
                        "Clinical review of current medication(s)",
                        "Assessment for safety, appropriateness, and ongoing need",
                        "Refill authorization when clinically appropriate",
                      ].map((feature) => (
                        <FeatureRow key={feature}>{feature}</FeatureRow>
                      ))}
                    </ul>
                    <p className="mt-auto border-t border-primary/70 pt-6 text-sm leading-relaxed text-muted-foreground">
                      Prescription quantity and duration are determined by
                      clinical judgment. Controlled substances are not
                      prescribed.
                    </p>
                  </CardContent>
                </Card>
              </ServiceColumn>

              <ServiceColumn
                title="In-Home Concierge Medical Visits"
                tagline="Houston area only"
              >
                <div className="space-y-8">
                  <Card className={cn(premiumPricingCard, staggerClass(0))}>
                    <CardHeader className="space-y-6 px-6 pb-2 pt-6">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                        <h3 className="text-lg font-semibold tracking-tight text-primary md:text-xl">
                          In-Home Medical Visit (≤20 miles)
                        </h3>
                        <div className="flex shrink-0 items-baseline gap-1.5">
                          <span className="text-3xl font-bold tabular-nums text-foreground md:text-4xl">
                            $250
                          </span>
                          <span className="text-base text-muted-foreground">
                            /visit
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 border-t border-primary/70 pt-6 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                        <h3 className="text-lg font-semibold tracking-tight text-primary md:text-xl">
                          Extended Distance or Complex Visit
                        </h3>
                        <div className="flex shrink-0 flex-col items-start gap-1 sm:items-end">
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-3xl font-bold tabular-nums text-foreground md:text-4xl">
                              $300
                            </span>
                            <span className="text-base text-muted-foreground">
                              /visit
                            </span>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            + (quoted prior to visit)
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="px-6 pb-8 pt-2">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        In-home services are limited and subject to availability
                        and clinical appropriateness.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className={cn(premiumPricingCard, staggerClass(1))}>
                    <CardHeader className="space-y-4 px-6 pb-8 pt-6">
                      <h3 className="text-lg font-semibold tracking-tight text-primary md:text-xl">
                        College Care – Non-Membership
                      </h3>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-4xl font-bold tabular-nums tracking-tight text-foreground md:text-[2.5rem]">
                          $95
                        </span>
                        <span className="text-base text-muted-foreground">
                          /visit
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">
                        Flat rate for all services (excluding weight management).{" "}
                        <span className="italic">
                          Exclusively for currently enrolled college students.
                        </span>
                      </p>
                    </CardHeader>
                  </Card>
                </div>
              </ServiceColumn>
            </div>
          </div>

          <div className="mt-20 lg:mt-24 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            <div className={cn(infoPanelClass, revealSection, "motion-safe:delay-75")}>
              <h2 className="mb-6 text-2xl font-semibold tracking-tight text-primary md:mb-8 md:text-3xl">
                Who Non-Membership Care Is For
              </h2>
              <ul className="space-y-4">
                {[
                  "Patients seeking care for a specific or short-term concern",
                  "Individuals who prefer pay-per-visit care",
                  "Those exploring LumaRose before choosing a membership",
                  "Patients who do not require ongoing follow-up or continuous access",
                ].map((item) => (
                  <CheckListRow key={item}>{item}</CheckListRow>
                ))}
              </ul>
            </div>

            <div
              className={cn(
                infoPanelClass,
                revealSection,
                "motion-safe:delay-150"
              )}
            >
              <h2 className="mb-6 text-2xl font-semibold tracking-tight text-primary md:mb-8 md:text-3xl">
                Important Notes
              </h2>
              <ul className="space-y-3.5">
                {[
                  "All services are self-pay and non-membership",
                  "Pricing is confirmed prior to your visit",
                  "Labs, imaging, medications, and supplies are not included unless stated",
                  "Non-membership care does not include ongoing access outside the scheduled visit",
                  "Controlled substances are not prescribed",
                  "Concierge and in-home services are subject to availability",
                  "This practice does not replace emergency care",
                ].map((item) => (
                  <CheckListRow key={item} muted>
                    {item}
                  </CheckListRow>
                ))}
              </ul>
            </div>
          </div>

          <p
            className={cn(
              "mt-16 max-w-4xl border-t border-primary/70 pt-8 text-sm leading-relaxed text-muted-foreground md:mt-20",
              revealFade,
              "motion-safe:delay-150"
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
        aria-labelledby="non-membership-cta-heading"
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
              id="non-membership-cta-heading"
              className="text-balance text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl md:leading-tight"
            >
              Ready to Schedule?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/90 md:text-lg">
              Book a non-membership visit online to determine if this care
              option is right for you.
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
                  Book a Non-Membership Visit
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceColumn({
  title,
  tagline,
  children,
}: {
  title: string;
  tagline?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-primary">
          {title}
        </h2>
        {tagline && (
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
            {tagline}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}
