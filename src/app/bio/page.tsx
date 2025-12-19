import FounderLetter from "@/components/FounderLetter";

export default function AboutPage() {
  return (
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-3">
             Bio
            </h2>
            <p className="text-muted-foreground">
              Thoughtfully designed care that supports your health at every stage.
            </p>
          </div>

          <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gray-100/40 p-8 md:p-12 shadow-sm border border-primary">
        
          <div className="space-y-6 text-foreground leading-relaxed">
            <p className="text-lg font-medium">
             Shameka Crump, FNP-C
            </p>

            <p>
              is the founder of LumaRose Health & Wellness, a virtual, nurse
              practitioner–led practice focused on personalized, preventive,
              and lifestyle-centered care.
            </p>

            <p>
              With over 17 years of clinical experience, she brings extensive
              expertise across preventive and primary care, chronic disease
              management, weight management, wound care, addiction medicine,
              and mental health support. Her background allows her to care for
              patients with both medical complexity and compassion—meeting them
              where they are and guiding them toward sustainable health.
            </p>

            <p>
              Shameka believes healthcare should feel personal, accessible, and
              empowering—not rushed or one-size-fits-all. Every care plan is
              thoughtfully tailored to the individual, honoring each patient’s
              goals, health history, and season of life.
            </p>

            <p>
              At LumaRose, the focus is on building long-term wellness through
              clarity, trust, and evidence-based medical care.
            </p>
            
          </div>

          {/* Signature */}
          <div className="mt-10 pt-6 border-t border-border">

            <p className="text-secondary font-medium italic">
              Care rooted in experience. Guided by intention. Designed for your
              life.
            </p>

            <p className="font-medium text-foreground">
              Warmly,
            </p>
            
          </div>
        </div>

        </div>
      </div>
      </section>
  );
}
