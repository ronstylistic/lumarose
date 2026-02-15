import { ServicesInclude } from "@/components/ServicesIncluded";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description: "Explore transparent membership plans for virtual primary care, preventive medicine, chronic disease management, and weight management at LumaRose Health & Wellness.",
};

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
                The LumaRose Experience
              </h2>

              <p className="text-foreground leading-relaxed">
                At LumaRose Health & Wellness, care is designed to feel supportive, collaborative, and respectful. Patients are listened to, involved in their care decisions, and treated as active participants in their health, not passive recipients.
              </p>

              <p className="text-foreground leading-relaxed">
                We believe patients deserve care that is clear, approachable, and never talked over. Medical recommendations are explained in a way that is easy to understand, with time for questions and thoughtful discussion. Nothing is rushed. Nothing is one size fits all.
              </p>

              <p className="text-foreground leading-relaxed">
                Our approach is rooted in trust, education, and partnership. We focus on helping patients feel confident in their care plans, informed about their options, and supported through each step of their health journey.
              </p>

              <p className="text-foreground leading-relaxed">
                LumaRose is a judgment free space. We meet patients where they are and work together to create realistic, sustainable plans that align with their goals, values, and season of life.
              </p>

              <p className="text-foreground leading-relaxed">
                LumaRose is a judgment free space. We meet patients where they are and work together to create realistic, sustainable plans that align with their goals, values, and season of life.
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
                Founder & Lead Nurse Practitioner
              </p>

              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                 Shameka Crump, FNP C is the founder of LumaRose Health & Wellness, a virtual, nurse practitioner led practice dedicated to personalized, preventive, and lifestyle centered care.
                </p>

                <p>
                  In addition to her clinical practice, Shameka has served in executive leadership roles, including Vice President positions within a large global healthcare organization, where she helped lead clinical operations, provider teams, and care delivery across multiple settings. This experience gives her a unique perspective, allowing her to understand both the clinical and operational sides of healthcare and thoughtfully navigate care on behalf of her patients.
                </p>

                <p>
                  With extensive experience spanning preventive and primary care, chronic disease management, weight management, sexual health, wound care, addiction medicine, and mental health support, Shameka is known for her ability to manage medical complexity while maintaining a compassionate, patient centered approach.
                </p>

                <p>
                  She believes healthcare should feel personal, accessible, and empowering rather than rushed or one size fits all. Every care plan is thoughtfully tailored to each patient’s goals, health history, and season of life.
                </p>

                 <p>
                  At LumaRose, the focus is on building long term wellness through clarity, trust, and evidence based medical care.
                  </p>
              </div>

              {/* Signature */}
              <div className="mt-8 pt-6 border-t border-border text-center">
                <p className="italic text-secondary font-medium">
                  Care rooted in experience. Guided by intention. Designed for your life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

