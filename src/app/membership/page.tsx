import type { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Metadata } from "next";
import { revealCard, revealPrimary, staggerClass } from "@/lib/motion";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Explore transparent membership plans for virtual primary care, preventive medicine, chronic disease management, and weight management at LumaRose Health & Wellness.",
};

const plans = [
  {
    name: "Essential Wellness",
    price: "$125",
    enrollmentFee: "$99",
    enrollmentFeePeriod: "one time enrollment fee",
    period: "/month",
    description:
      "Great for preventive care and occasional health needs.",
    features: [
      "Sick visits when needed",
      "Preventive care planning",
      "Review of your health history",
      "Lifestyle and wellness guidance",
      "Medication refills when appropriate",
      "Secure messaging during business hours",
    ],
    notes: [
      "Annual labs included",
      "Personalized supplement recommendations included",
      "Prescriptions provided when appropriate"
    ],
  },
  {
    name: "Everyday Care",
    price: "$200",
    enrollmentFee: "$99",
    enrollmentFeePeriod: "one time enrollment fee",
    period: "/month",
    popular: true,
    description:
      "Best for patients who want ongoing support and regular access to care.",
    features: [
      "Monthly virtual visits",
      "Sick visits when needed",
      "Ongoing support for chronic conditions",
      "Medication adjustments when needed",
      "Priority messaging during business hours",
      "Continued care and follow up"
    ],
    notes: [
      "Annual labs included",
      "Personalized supplement recommendations included",
      "Prescriptions provided when appropriate"
    ],
  },
  {
    name: "Advanced Health + Weight Management",
    price: "$275",
    enrollmentFee: "$99",
    enrollmentFeePeriod: "one time enrollment fee",
    period: "/month",
    description:
      "Best for patients focused on weight loss, metabolic health, and long term results.",
    features: [
      "Monthly weight management visits",
      "Personalized weight loss plan",
      "Lifestyle and nutrition guidance",
      "Medication and GLP 1 management when appropriate",
      "Ongoing monitoring and plan adjustments",
      "Priority support and follow up",
    ],
    notes: [
      "Annual labs included",
      "Personalized supplement recommendations included",
      "Prescriptions provided when appropriate"
    ],
  },
  {
    name: "Concierge Advanced (VIP)",
    price: "$399",
    enrollmentFee: "$99",
    enrollmentFeePeriod: "one time enrollment fee",
    period: "/month",
    description:
      "For patients who want a higher level, more personalized care experience.",
    features: [
      "Monthly visits with extended support",
      "Sick visits when needed",
      "Same day appointments when available",
      "Priority scheduling",
      "24/7 urgent messaging for urgent needs",
      "Personalized care plan and coordination",
      "High touch ongoing support"
    ],
    notes: [
      "Annual labs included",
      "Personalized supplement recommendations included",
      "Prescriptions provided when appropriate"
    ]
  },
];

function ListRow({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3.5">
      <span
        className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-secondary/12 text-secondary"
        aria-hidden
      >
        <Check className="h-4 w-4" strokeWidth={2.35} aria-hidden />
      </span>
      <span className="min-w-0 text-base leading-relaxed text-foreground">
        {children}
      </span>
    </li>
  );
}

export default function Page() {
  return (
    <section
      className="relative overflow-x-hidden bg-gradient-to-b from-background via-muted/25 to-background py-24 md:py-28"
      aria-labelledby="membership-heading"
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
            id="membership-heading"
            className="text-balance text-4xl font-semibold tracking-tight text-primary md:text-5xl"
          >
            Membership Plans
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
            Simple, transparent pricing designed around your health needs — no
            insurance hassles, no hidden fees.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 pt-5 md:grid-cols-2 md:gap-9 md:pt-6 lg:gap-10">
          {plans.map((plan, planIndex) => (
            <Card
              key={plan.name}
              className={cn(
                "relative flex flex-col overflow-visible rounded-2xl border border-slate-200/65 bg-gray-100/40",
                /* Layered shadow: crisp contact + soft lift (same family as before, slightly smoother falloff) */
                "shadow-[0_1px_2px_rgba(15,23,42,0.045),0_14px_42px_-10px_rgba(15,23,42,0.085)]",
                "transition-shadow duration-300 motion-reduce:transition-none",
                "hover:shadow-[0_2px_4px_rgba(15,23,42,0.05),0_18px_48px_-10px_rgba(15,23,42,0.095)] motion-reduce:hover:shadow-[0_1px_2px_rgba(15,23,42,0.045),0_14px_42px_-10px_rgba(15,23,42,0.085)]",
                revealCard,
                staggerClass(planIndex),
                plan.popular &&
                  cn(
                    "z-[1] border-2 border-primary/55",
                    /* Preserve rose-tinted elevation + slate depth */
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

              <CardHeader
                className={cn(
                  "space-y-4 px-6 pb-2 pt-6",
                  plan.popular && "pt-6"
                )}
              >
                <h2 className="text-xl font-semibold tracking-tight text-primary md:text-[1.35rem]">
                  {plan.name}
                </h2>

                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-bold tabular-nums tracking-tight text-foreground md:text-[2.5rem]">
                    {plan.price}
                  </span>
                  <span className="text-base text-muted-foreground">
                    {plan.period}
                  </span>
                </div>

                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-bold tabular-nums tracking-tight text-foreground md:text-[2.5rem]">
                    {plan.enrollmentFee}
                  </span>
                  <span className="text-base text-muted-foreground">
                    {plan.enrollmentFeePeriod}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col px-6 pb-8 pt-2">
                <ul className="mb-8 space-y-3.5">
                  {plan.features.map((feature) => (
                    <ListRow key={feature}>{feature}</ListRow>
                  ))}
                </ul>

                {plan.notes && (
                  <div className="mt-8 border-t border-primary/70 pt-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary/90">
                      Important Notes:
                    </p>
                    <ul className="space-y-3.5">
                      {plan.notes.map((note) => (
                        <ListRow key={note}>{note}</ListRow>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
