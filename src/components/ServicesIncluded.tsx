import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const panelClass = cn(
  "mt-10 rounded-2xl border border-slate-200/65 bg-gray-100/40 p-6 md:mt-12 md:p-7",
  "shadow-[0_1px_2px_rgba(15,23,42,0.045),0_14px_42px_-10px_rgba(15,23,42,0.085)]",
  "transition-shadow duration-300 motion-reduce:transition-none",
  "hover:shadow-[0_2px_4px_rgba(15,23,42,0.05),0_18px_48px_-10px_rgba(15,23,42,0.095)] motion-reduce:hover:shadow-[0_1px_2px_rgba(15,23,42,0.045),0_14px_42px_-10px_rgba(15,23,42,0.085)]"
);

export function ServicesInclude() {
  return (
    <div className={panelClass}>
      <h3 className="mb-5 text-lg font-semibold tracking-tight text-primary md:text-xl">
        Services include
      </h3>

      <ul className="space-y-3.5">
        {[
          "Virtual primary care",
          "Chronic disease management (hypertension, diabetes, obesity, and more)",
          "Weight loss & metabolic health programs",
          "Preventive care & wellness planning",
          "Sexual health testing & treatment",
          "Post-operative wound care",
          "Urgent non-emergency telehealth visits",
        ].map((service) => (
          <li key={service} className="flex gap-3.5">
            <span
              className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-secondary/12 text-secondary"
              aria-hidden
            >
              <Check className="h-4 w-4" strokeWidth={2.35} aria-hidden />
            </span>
            <span className="min-w-0 text-base leading-relaxed text-foreground">
              {service}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
