import { CheckCircle } from "lucide-react";

export function ServicesInclude() {
  return (
    <div className="mt-8">
      <h3 className="font-semibold text-foreground mb-4">
        Services Include:
      </h3>

      <ul className="space-y-3">
        {[
          "Virtual primary care",
          "Chronic disease management (hypertension, diabetes, obesity, and more)",
          "Weight loss & metabolic health programs",
          "Preventive care & wellness planning",
          "Sexual health testing & treatment",
          "Post-operative wound care",
          "Urgent non-emergency telehealth visits",
        ].map((service) => (
          <li key={service} className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
            <span className="text-muted-foreground">
              {service}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
