import { Crown, Users, RefreshCcw, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

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

        {/* Value Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-14 ">
          {/* Card 1 */}
          <div
            className="
              bg-white/40 rounded-2xl p-6 shadow-sm
              animate-in fade-in slide-in-from-bottom-4
              duration-700 delay-150
            "
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center
                  rounded-xl
                  bg-secondary/15
                  text-secondary
                  shrink-0">
                <Crown className="h-6 w-6" />
              </div>
              <p className="text-foreground leading-relaxed">
                Meaningful, unhurried visits that prioritize understanding—not
                rushed appointments.
              </p>
            </div>

            
          </div>

          {/* Card 2 */}
          <div
            className="
              bg-gray-100/40 rounded-2xl p-6 shadow-sm
              animate-in fade-in slide-in-from-bottom-4
              duration-700 delay-300
            "
          >
            <div className="flex items-start gap-4">
              <div className="
                  flex h-12 w-12 items-center justify-center
                  rounded-xl
                  bg-secondary/15
                  text-secondary
                  shrink-0
                ">
                <Users className="h-6 w-6" />
              </div>
              <p className="text-foreground leading-relaxed">
                Continuity of care that allows for deeper insight into your
                health over time.
              </p>
            </div>


          </div>

          {/* Card 3 */}
          <div
            className="
              bg-gray-100/40 rounded-2xl p-6 shadow-sm
              animate-in fade-in slide-in-from-bottom-4
              duration-700 delay-500
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
                  <RefreshCcw className="h-6 w-6" />
                </div>

                {/* Text */}
                <p className="text-foreground leading-relaxed">
                 Proactive health support focused on prevention, education, and
                long-term wellness.
                </p>
              </div>
            
          </div>
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
