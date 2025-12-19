import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Essential Wellness",
    price: "$149",
    period: "/month",
    description:
      "Ideal for healthy adults who need occasional access and preventive support.",
    features: [
      "Virtual visit every 3 months",
      "Preventive care planning",
      "Messaging during business hours",
      "Medication refills",
      "Chronic condition check-ins",
      "Member-only lab pricing",
    ],
  },
  {
    name: "Everyday Care",
    price: "$199",
    period: "/month",
    popular: true,
    description:
      "Designed for patients with ongoing or chronic health needs.",
    features: [
      "Everything in Essential",
      "Monthly virtual visits",
      "Chronic disease management",
      "Urgent care (sick visits)",
      "STD testing & treatment",
      "Same-day priority messaging",
      "Direct access to your NP",
    ],
  },
  {
    name: "Advanced Health + Weight Management",
    price: "$249",
    period: "/month",
    description:
      "Comprehensive support for patients focused on sustainable weight loss.",
    features: [
      "Everything in Everyday Care",
      "GLP-1 / peptide programs (if used)",
      "Monthly weight-loss check-ins",
      "Nutrition & lifestyle counseling",
      "Lab interpretation for weight management",
      "Medication adjustment visits",
    ],
  },
  {
    name: "Concierge Advanced (VIP)",
    price: "$349",
    period: "/month",
    description:
      "Premium care for executives, busy parents, and high-touch clients.",
    features: [
      "Everything in Advanced",
      "24/7 urgent text access",
      "Up to 2 home visits/year (≤20 miles)",
      "Same-day telehealth appointments",
      "Priority scheduling",
      "Personalized care blueprint",
    ],
  },
];

export default function MembershipPlans() {
  return (
    <section className="bg-background py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
           <h2 className="text-3xl font-semibold text-primary mb-3">
             Membership Plans
            </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Simple, transparent pricing designed around your health needs —
            no insurance hassles, no hidden fees.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`
                relative
                flex flex-col
                rounded-2xl
                border
                ${
                  plan.popular
                    ? "border-primary shadow-lg"
                    : "border-muted"
                }
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

                <Button
                  className={`
                    mt-auto
                    w-full
                    ${
                      plan.popular
                        ? "bg-primary text-white hover:bg-primary/90"
                        : "bg-secondary text-white hover:bg-secondary/90"
                    }
                  `}
                >
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
