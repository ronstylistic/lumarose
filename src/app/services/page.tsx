import type { ReactNode } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { revealCard, revealFade, revealPrimary, revealSection } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Care Services",
  description:
    "Explore transparent membership plans for virtual primary care, preventive medicine, chronic disease management, and weight management at LumaRose Health & Wellness.",
};

const premiumCardClass = cn(
  "relative flex flex-col overflow-visible rounded-2xl border border-slate-200/65 bg-gray-100/40 p-6 md:p-7",
  "shadow-[0_1px_2px_rgba(15,23,42,0.045),0_14px_42px_-10px_rgba(15,23,42,0.085)]",
  "transition-shadow duration-300 motion-reduce:transition-none",
  "hover:shadow-[0_2px_4px_rgba(15,23,42,0.05),0_18px_48px_-10px_rgba(15,23,42,0.095)] motion-reduce:hover:shadow-[0_1px_2px_rgba(15,23,42,0.045),0_14px_42px_-10px_rgba(15,23,42,0.085)]",
  revealCard
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

export default function Page() {
  return (
    <section
      className="relative overflow-x-hidden bg-gradient-to-b from-background via-muted/25 to-background py-24 md:py-28"
      aria-labelledby="services-heading"
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
            id="services-heading"
            className="text-balance text-4xl font-semibold tracking-tight text-primary md:text-5xl"
          >
            Care Services
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
            Personalized, evidence-based virtual care designed to support
            prevention, chronic health needs, and long-term wellness.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
            LumaRose Health &amp; Wellness provides virtual care led by a
            board-certified Family Nurse Practitioner, with a focus on preventive
            care, chronic disease management, weight management, and
            whole-person wellness.
          </p>
        </header>

        <h2
          className={cn(
            "mb-10 text-center text-3xl font-semibold tracking-tight text-primary md:mb-12 md:text-4xl",
            revealSection,
            "motion-safe:delay-75"
          )}
        >
          What We Treat &amp; Support
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-9 lg:grid-cols-3 lg:gap-10">
          <ServiceCard
            title="Preventive & Primary Care"
            description="Proactive care focused on early detection, long-term health, and overall wellness."
            items={[
              "Annual wellness visits",
              "Preventive screening guidance",
              "Medication review and optimization",
              "Lifestyle and wellness counseling",
            ]}
          />

          <ServiceCard
            title="Chronic Disease Management"
            description="Ongoing support for long-term and complex medical conditions."
            items={[
              "Hypertension",
              "Diabetes and metabolic conditions",
              "Thyroid disorders",
              "High cholesterol",
              "Other chronic health concerns",
            ]}
          />

          <ServiceCard
            title="Nutrition & Lifestyle Support"
            description="Evidence-based guidance to support energy, balance, and sustainable wellness."
            items={[
              "Nutrition education (no meal plans)",
              "Lifestyle habit assessment",
              "Metabolic health support",
              "Lab review related to wellness goals",
            ]}
          />

          <ServiceCard
            title="Weight Management Support"
            description="Medically guided weight management focused on safety and sustainability."
            items={[
              "Medical evaluation for weight concerns",
              "Ongoing monitoring and progress support",
              "Lifestyle and behavior education",
              "GLP-1–based therapy when clinically appropriate",
            ]}
            note="Medications, labs, and supplements are billed separately when applicable."
          />

          <ServiceCard
            title="Urgent & Episodic Care"
            description="Virtual care for short-term or acute concerns for established patients."
            items={[
              "Minor illness or symptom evaluation",
              "Medication questions",
              "Short-term medical concerns",
            ]}
          />

          <ServiceCard
            title="Sexual Health & STD Care"
            description="Confidential virtual visits for evaluation, testing guidance, and treatment when clinically appropriate."
            items={[
              "STD evaluation and counseling",
              "Routine and symptom-based STD testing",
              "Treatment when clinically appropriate",
              "PrEP evaluation and ongoing monitoring (when applicable)",
              "Confidential, judgment-free care",
            ]}
            note="Laboratory testing is billed separately"
          />
        </div>

        <div className="mt-16 flex flex-col gap-12 lg:mt-20 lg:flex-row lg:gap-16">
          <div
            className={cn("flex-1 lg:max-w-xl", revealSection, "motion-safe:delay-100")}
          >
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-primary md:text-3xl">
              How Care Is Delivered
            </h2>
            <ul className="space-y-3">
              {[
                "Secure, HIPAA-compliant virtual visits",
                "Individualized care plans",
                "Clear communication and follow-up",
                "Judgment-free, patient-centered care",
              ].map((item) => (
                <CheckListRow key={item} muted>
                  {item}
                </CheckListRow>
              ))}
            </ul>
          </div>

          <div
            className={cn("flex-1", revealSection, "motion-safe:delay-150")}
          >
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-primary md:mb-6 md:text-3xl">
              Choosing Your Care Option
            </h2>
            <p className="mb-6 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              LumaRose offers both membership-based care and non-membership
              visits, allowing you to choose the level of continuity and support
              that fits your needs.
            </p>

            <ul className="mb-8 max-w-3xl space-y-3">
              <CheckListRow>
                <span>
                  <strong className="font-semibold text-foreground">
                    Membership Care:
                  </strong>{" "}
                  Ongoing support and continuity of care
                </span>
              </CheckListRow>
              <CheckListRow>
                <span>
                  <strong className="font-semibold text-foreground">
                    Non-Membership Care:
                  </strong>{" "}
                  One-time or occasional visits without a monthly commitment
                </span>
              </CheckListRow>
            </ul>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button
                size="lg"
                asChild
                className="min-h-12 rounded-full bg-primary px-8 font-semibold text-white shadow-md transition-colors duration-200 hover:bg-primary/90 hover:text-white"
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
                asChild
                className="min-h-12 rounded-full bg-secondary px-8 font-semibold text-white shadow-md transition-colors duration-200 hover:bg-secondary/90 hover:text-white"
              >
                <Link
                  href="/non-membership"
                  className="text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  View Non-Membership Services
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <p
          className={cn(
            "mt-10 max-w-4xl text-xs leading-relaxed text-muted-foreground md:mt-12",
            revealFade,
            "motion-safe:delay-100"
          )}
        >
          All services are provided based on clinical appropriateness. Not all
          services are suitable for every patient.
        </p>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  description,
  items,
  note,
}: {
  title: string;
  description: string;
  items: string[];
  note?: string;
}) {
  return (
    <div className={premiumCardClass}>
      <h3 className="mb-2 text-xl font-semibold tracking-tight text-primary">
        {title}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground md:text-base">
        {description}
      </p>
      <ul className="flex flex-1 flex-col space-y-3">
        {items.map((item) => (
          <CheckListRow key={item}>{item}</CheckListRow>
        ))}
      </ul>
      {note && (
        <p className="mt-4 border-t border-primary/70 pt-4 text-xs leading-relaxed text-muted-foreground">
          {note}
        </p>
      )}
    </div>
  );
}
