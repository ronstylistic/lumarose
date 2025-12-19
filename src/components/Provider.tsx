import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Provider() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-2">
            Meet Our Provider
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 rounded-full border-4 border-secondary/30 overflow-hidden shadow-lg">
              <Image
                src="/images/logo.png" // replace with actual image path
                alt="Shameka Crump"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <h3 className="text-center md:text-left text-2xl font-semibold text-primary mb-1">
              Shameka Crump, FNP-C
            </h3>
            <p className="text-center md:text-left text-sm text-secondary mb-6">
              Founder | Family Nurse Practitioner
            </p>

            <p className="text-center md:text-left text-foreground leading-relaxed mb-4">
              Shameka Crump, FNP-C, is the founder of LumaRose Health & Wellness, a virtual, nurse practitioner–led practice focused on thoughtful, personalized, and evidence-based care.
            </p>

            <p className="text-center md:text-left text-foreground leading-relaxed mb-6">
              With over 17 years of clinical experience, Shameka brings extensive expertise across preventive and primary care, chronic disease management, weight management, wound care, addiction medicine, and mental health support. Her approach is grounded in listening, education, and collaboration—ensuring every patient feels heard, supported, and confident in their care.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
