import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership",
  description: "Explore transparent membership plans for virtual primary care, preventive medicine, chronic disease management, and weight management at LumaRose Health & Wellness.",
};

const plans = [
  {
    name: "Essential Wellness",
    price: "$149",
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
      "Access to member-preferred lab pricing"
    ],
    notes: [
      "Additional visits may be scheduled at standard visit rates",
      "Labs, imaging, and medications are not included in the membership fee"
    ],
  },
  {
    name: "Everyday Care",
    price: "$199",
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
    price: "$249",
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
      "Medications, labs, supplements, and pharmacy fees are billed separately and are not included in membership fees."
    ],
  },
  {
    name: "Concierge Advanced (VIP)",
    price: "$349",
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
    availability: "This tier is available to Houston-area patients only."
  },
];

export default function Page() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
           <h1 className="text-4xl md:text-5xl font-semibold text-primary mb-3">
             Membership Plans
            </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Simple, transparent pricing designed around your health needs —
            no insurance hassles, no hidden fees.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`
                relative
                flex flex-col
                bg-gray-100/40
                shadow-lg
                border-0
              `}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-4 py-1 rounded-full tracking-wide">
                  Most Popular
                </span>
              )}

              <CardHeader className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">
                  {plan.name}
                </h3>

                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">
                    {plan.period}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary mt-0.5" />
                      <span className="text-sm text-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {plan.notes && (
                  <><p className="text-xs text-muted-foreground mt-4 mb-2">
                    Important Notes:
                  </p><ul className="space-y-3 mb-3">
                      {plan.notes.map((note) => (
                        <li key={note} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-secondary mt-0.5" />
                          <span className="text-sm text-foreground">
                            {note}
                          </span>
                        </li>
                      ))}
                    </ul></>
                )}

                {plan.availability && (
                  <><p className="text-xs text-muted-foreground mt-4 mb-2">
                    Availability:
                  </p>
                  <p className="text-sm text-foreground">{plan.availability}</p>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
