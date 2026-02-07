import { CircleCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";


const reasons = [
  {
    text: "Meaningful, unhurried visits that prioritize understanding—not rushed appointments.",
    icon: CircleCheck,
  },
  {
    text: "Continuity of care that allows for deeper insight into your health over time.",
    icon: CircleCheck,
  },
  {
    text: "Patients who prefer flexibility may also choose pay-per-visit care options.",
    icon: CircleCheck,
  }
];


export default function MembershipCare() {
  return (
    <section className="bg-gray-100 py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className="
            max-w-3xl mb-16
            animate-in fade-in slide-in-from-bottom-4
            duration-700 text-center mx-auto
          "
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
            Membership Care at LumaRose
          </h2>

          <p className="text-muted-foreground leading-relaxed max-w-2xl mb-6">
           LumaRose offers a membership-based care model designed to support continuity, access, and personalized care over time.
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {reasons.map(({ text, icon: Icon }) => (
            <div
              key={text}
              className="
                group
                bg-white/40
                shadow-sm
                rounded-2xl
                p-6
                transition
                hover:bg-primary/20
              "
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="
                  flex h-12 w-12 items-center justify-center
                  rounded-xl
                  bg-secondary/15
                  text-secondary
                  shrink-0
                ">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Text */}
                <p className="text-foreground leading-relaxed">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Non-Membership Note */}
        <div
          className="
            max-w-3xl mb-6
            animate-in fade-in slide-in-from-bottom-4
            duration-700 delay-700
          "
        >
          <p className="text-muted-foreground leading-relaxed">
            Patients who prefer flexibility may also choose pay-per-visit care options.
          </p>
        </div>

        {/* CTA */}

        <Button className="bg-primary text-white hover:bg-secondary">
           <Link
            href="/membership">
              Explore Membership Options
          </Link>
        </Button>        
      </div>
    </section>
  );
}
