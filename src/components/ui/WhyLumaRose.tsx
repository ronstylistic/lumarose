import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const reasons = [
  { id: "same-provider", text: "See the same trusted provider every visit" },
  { id: "messaging", text: "Direct messaging access when questions come up" },
  {
    id: "heard-addressed",
    text: "Visits where your concerns are fully heard and thoughtfully addressed",
  },
  {
    id: "visit-length",
    text: "Dedicated visit time typically lasting 30 to 45 minutes",
  },
  {
    id: "scheduling",
    text: "Flexible scheduling with evening and weekend availability",
  },
  {
    id: "ongoing-support",
    text: "Ongoing support that continues beyond your visit",
  },
] as const;

export default function WhyChooseLumaRose() {
  return (
    <section
      className="bg-white py-16"
      aria-labelledby="why-patients-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header — centered stack like reference */}
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <h2
            id="why-patients-heading"
            className="mb-5 text-3xl font-semibold tracking-tight text-primary md:text-4xl"
          >
            Why Patients Choose LumaRose?
          </h2>

          <p className="mx-auto max-w-prose text-pretty text-lg font-semibold leading-relaxed text-slate-900">
            You are not just another appointment here.
          </p>
          <p className="mx-auto mt-3 max-w-prose text-pretty text-base leading-relaxed text-slate-600 md:text-[1.0625rem]">
            At LumaRose, care is personal, accessible, and designed around your
            life.
          </p>
        </div>

        {/* Benefit cards — full-width column, subtle float shadow */}
        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          {reasons.map(({ id, text }) => (
            <div
              key={id}
              className={cn(
                "rounded-xl bg-gray-100/40 p-5 md:rounded-2xl md:p-6",
                "shadow-[0_1px_2px_rgba(15,23,42,0.04),0_4px_12px_rgba(15,23,42,0.05)]",
                "transition-shadow duration-200 motion-reduce:transition-none",
                "hover:shadow-[0_2px_4px_rgba(15,23,42,0.04),0_8px_28px_rgba(15,23,42,0.08)]"
              )}
            >
              {/* Icon + label centered as one unit; copy left-aligned for readable wraps */}
              <div className="flex items-center justify-start gap-4 md:gap-5">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary/15 text-secondary md:h-12 md:w-12 md:rounded-xl"
                  aria-hidden
                >
                  <Check className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2.5} />
                </div>

                <p className="min-w-0 max-w-md text-left text-base leading-relaxed text-slate-700 sm:max-w-lg md:max-w-xl md:text-[1.0625rem]">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
