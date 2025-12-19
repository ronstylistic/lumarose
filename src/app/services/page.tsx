import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore personalized healthcare services at LumaRose Health.",
};

import {
  ShieldPlus,
  FlaskConical,
  HeartPulse,
  Syringe,
} from "lucide-react";

const services = [
  {
    title: "Preventative Medicine",
    description:
      "Personalized plans focused on optimizing long-term health and preventing illness.",
    icon: ShieldPlus,
  },
  {
    title: "Nutrient Optimization",
    description:
      "Evidence-based nutrient protocols designed for energy, wellness, and longevity.",
    icon: FlaskConical,
  },
  {
    title: "Regenerative Therapies",
    description:
      "Advanced treatments that promote natural healing and restore balance.",
    icon: HeartPulse,
  },
  {
    title: "Weight Management",
    description:
      "Tailored weight-loss solutions supported by modern science and holistic methods.",
    icon: Syringe,
  },
];

export default function Page() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-3">
            Our Services
          </h2>
          <p className="text-muted-foreground">
            Thoughtfully designed care that supports your health at every stage.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="
                group
                bg-white
                border border-primary
                rounded-2xl
                p-6
                text-center
                transition
                hover:-translate-y-1
                hover:shadow-lg
                hover:border-primary/40
              "
            >
              {/* Icon */}
              <div className="
                mx-auto mb-5
                flex h-14 w-14 items-center justify-center
                rounded-xl
                bg-primary/10
                text-primary
                transition
                group-hover:bg-primary/20
              ">
                <Icon className="h-6 w-6" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2 text-primary">
                {title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>

              {/* Subtle CTA */}
              <span className="
                mt-4 inline-block text-sm font-medium
                text-primary
                opacity-0
                transition
                group-hover:opacity-100
              ">
                Learn more →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
