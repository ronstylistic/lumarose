import { ServicesInclude } from "@/components/ServicesIncluded";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-white py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-primary mb-6">
            About LumaRose Health & Wellness
          </h1>

          <p className="text-muted-foreground mx-auto">
            Personalized, nurse practitioner–led virtual primary care built on
            trust, intention, and clinical excellence.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* LEFT COLUMN — ABOUT LUMAROSE */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-primary">
                The LumaRose Approach
              </h2>

              <p className="text-foreground leading-relaxed">
                LumaRose Health & Wellness is a nurse practitioner–led virtual
                primary care clinic providing personalized, membership-based
                telehealth services for adults 18 and older. We specialize in
                preventive care, chronic disease management, weight loss and
                metabolic health, sexual health services, and urgent virtual
                visits delivered with intention, continuity, and clinical
                excellence.
              </p>

              <p className="text-foreground leading-relaxed">
                Our modern telehealth model offers patients direct access to a
                consistent provider, longer visit times, and proactive care
                planning. Unlike traditional primary care, we focus on
                prevention, education, and long-term health outcomes—not rushed
                appointments.
              </p>

              <p className="text-foreground leading-relaxed">
                What sets LumaRose apart is our advanced clinical foundation.
                With deep experience in post-acute care, skilled nursing, home
                health, hospice, and complex wound management, we bring a higher
                level of clinical insight to virtual primary care. This allows
                us to recognize early warning signs, manage medically complex
                patients, and support healing and stabilization across chronic
                conditions.
              </p>

              <p className="text-foreground leading-relaxed">
                LumaRose Health & Wellness is designed for individuals seeking
                accessible online primary care, expert nurse practitioner care,
                and a trusted healthcare partner who listens.
              </p>

              {/* Services List */}
             <ServicesInclude />
            </div>

            {/* RIGHT COLUMN — PRACTITIONER BIO */}
            <div className="bg-gray-100 p-8 md:p-10 shadow-sm">
              {/* Optional Photo */}
              <div className="flex justify-center mb-8">
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-secondary/30">
                  <Image
                    src="/images/founder.jpg" // replace if needed
                    alt="Shameka Crump, FNP-C"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-primary mb-2 text-center">
                Shameka Crump, FNP-C
              </h2>

              <p className="text-secondary text-center font-medium mb-6">
                Board-Certified Family Nurse Practitioner
              </p>

              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  Shameka Crump, FNP-C is the founder of LumaRose Health & Wellness,
                  a virtual, nurse practitioner–led practice focused on
                  personalized, preventive, and lifestyle-centered care.
                </p>

                <p>
                  With over 17 years of clinical experience, she brings extensive
                  expertise across preventive and primary care, chronic disease
                  management, weight management, wound care, addiction medicine,
                  and mental health support. Her background allows her to care
                  for patients with both medical complexity and compassion.
                </p>

                <p>
                  Shameka believes healthcare should feel personal, accessible,
                  and empowering—not rushed or one-size-fits-all. Every care
                  plan is thoughtfully tailored to each patient’s goals, health
                  history, and season of life.
                </p>

                <p>
                  At LumaRose, the focus is on building long-term wellness
                  through clarity, trust, and evidence-based medical care.
                </p>
              </div>

              {/* Signature */}
              <div className="mt-8 pt-6 border-t border-border text-center">
                <p className="italic text-secondary font-medium">
                  Care rooted in experience. Guided by intention. Designed for
                  your life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

