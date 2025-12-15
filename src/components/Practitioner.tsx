import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Practitioner() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-2">
            Meet Our Practitioner
          </h2>
          <p className="text-muted-foreground">
            Compassionate, personalized care guided by modern medicine.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 rounded-full border-4 border-secondary/30 overflow-hidden shadow-lg">
              <Image
                src="/images/practitioner.jpg" // replace with actual image path
                alt="Dr. Rana Clementer"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-1">
              Dr. Rana Clementer
            </h3>
            <p className="text-sm text-secondary mb-6">
              ND, PA-C
            </p>

            <p className="text-foreground leading-relaxed mb-4">
              At LumaRose Health, my passion is integrating{" "}
              <strong>cutting-edge medical technology</strong> with{" "}
              <strong>holistic wellness principles</strong> to help patients
              achieve optimal, sustainable health.
            </p>

            <p className="text-foreground leading-relaxed mb-6">
              My practice focuses on{" "}
              <strong>preventative medicine</strong>, personalized nutrient
              planning, and regenerative therapies—always centered around your
              unique needs and lifestyle.
            </p>

            {/* Contact Box */}
            <div className="bg-muted/40 rounded-xl p-5 mb-6">
              <p className="text-sm text-muted-foreground mb-2">
                Official Domain
              </p>
              <p className="text-sm font-medium mb-4">
                @lumarosehealth.org
              </p>

              <div className="flex flex-col sm:flex-row gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-secondary" />
                  info@lumarosehealth.org
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-secondary" />
                  (555) 123-4567
                </div>
              </div>
            </div>

            {/* CTA */}
            <Button size="lg" className="bg-primary text-white">
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
