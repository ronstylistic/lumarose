import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="w-full bg-background py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-semibold text-primary text-center mb-16">
          Contact & Location
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT CARD */}
          <div className="rounded-xl p-10 bg-gray-100">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Get In Touch
            </h3>

            <p className="text-foreground mb-6 leading-relaxed">
              We look forward to hearing from you. Please use the form or the
              information below to reach us.
            </p>

            <div className="space-y-3 text-foreground">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <span className="text-secondary">
                  info@lumarosehealth.org
                </span>
              </p>
              <p>
                <span className="font-semibold">Phone:</span> (555) 123-4567
              </p>
              <p>
                <span className="font-semibold">Address:</span> 123 Wellness Way,
                Suite 100, MedTech City, CA 90210
              </p>
            </div>

            <Button className="mt-8 w-full bg-primary text-white hover:bg-primary/90 py-6 text-sm tracking-wide shadow-md">
              SCHEDULE A CALL
            </Button>
          </div>

          <ContactForm />
          
        </div>
      </div>
    </section>
  );
}
