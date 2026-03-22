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
    price: "$175",
    period: "/month",
    description:
      "Ideal for: Generally healthy adults seeking preventive care and occasional clinical guidance.",
    features: [
      "Virtual visit every 3 months",
      "Preventive care planning, which may include",
      "Review of personal and family health history",
      "Age-appropriate preventive screening recommendations",
      "Lifestyle and wellness guidance based on individual health goals",
      "Review of routine lab results when applicable",
      "Medication refills (when clinically appropriate)",
      "Chronic condition check-ins (stable conditions only)",
      "Secure messaging during business hours",
      "Access to member-preferred lab pricing",
    ],
    notes: [
      "Additional visits may be scheduled at standard visit rates",
      "Labs, imaging, and medications are not included in the membership fee",
    ],
  },
  {
    name: "Everyday Care",
    price: "$225",
    period: "/month",
    popular: true,
    description:
      "Ideal for: Patients managing ongoing or chronic health concerns who benefit from regular follow-up.",
    features: [
      "Includes everything in Essential Wellness, plus:",
      "One virtual visit per month",
      "Chronic disease management (for conditions appropriate for virtual care)",
      "Urgent virtual visits for acute concerns (sick visits, when clinically appropriate)",
      "STD testing and treatment visits (labs billed separately)",
      "Same-day priority messaging during business hours",
      "Direct clinical access to your nurse practitioner (within the scope of scheduled visits and secure messaging)",
    ],
  },
  {
    name: "Advanced Health + Weight Management",
    price: "$299",
    period: "/month",
    description:
      "Ideal for: Patients focused on medically guided weight management and metabolic health.",
    features: [
      "Includes everything in Everyday Care, plus:",
      "Monthly weight-management-focused visits",
      "Lifestyle and behavior education related to weight goals",
      "Lab interpretation related to weight management",
      "Medication adjustment visits (when clinically appropriate)",
      "GLP-1 or peptide therapy management (when clinically appropriate and prescribed)",
    ],
    notes: [
      "Medications, labs, supplements, and pharmacy fees are billed separately and are not included in membership fees.",
    ],
  },
  {
    name: "Concierge Advanced (VIP)",
    price: "$449",
    period: "/month",
    description:
      "Ideal for: Executives, busy parents, and patients seeking a higher-touch care experience.",
    features: [
      "Includes everything in Advanced Health + Weight Management, plus:",
      "24/7 urgent text access (urgent issues only; not for emergencies)",
      "Same-day telehealth appointments (when available)",
      "Priority scheduling",
      "Up to two home visits per year (within 20 miles of Houston, when clinically appropriate)",
      "Personalized care blueprint a customized care summary outlining health priorities, preventive focus areas, and recommended follow-up.",
    ],
    availability: "This tier is available to Houston-area patients only.",
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

                {plan.availability && (
                  <div
                    className={cn(
                      "border-t border-primary/70 pt-6",
                      plan.notes ? "mt-6" : "mt-8"
                    )}
                  >
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary/90">
                      Availability:
                    </p>
                    <p className="text-base leading-relaxed text-foreground">
                      {plan.availability}
                    </p>
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
