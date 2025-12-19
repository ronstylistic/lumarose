import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const ADDRESS =
  "123 Wellness Way, Suite 100, MedTech City, CA 90210";

const MAP_QUERY =
  "123+Wellness+Way+Suite+100+MedTech+City+CA+90210";

export default function Contact() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-3">
            Contact Us
          </h2>
          <p className="text-muted-foreground">
            Visit us in person or connect virtually — we’re here to support your
            health journey.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Contact Card */}
          <div className="bg-gray-100 shadow-sm p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-6">
                Get in Touch
              </h3>

              <p className="text-muted-foreground mb-8">
                Schedule a consultation or reach out directly. Our care team is
                happy to assist you.
              </p>

              <div className="space-y-5 text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-secondary" />
                  <span>info@lumarosehealth.org</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-secondary" />
                  <span>(555) 123-4567</span>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-secondary mt-0.5" />
                  <span>{ADDRESS}</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-white w-full">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule a Call
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm /> 
        </div>
      </div>


       <div className="max-w-7xl mt-30 mx-auto px-6">

          <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-3">
           Our Location
          </h2>
        </div>

          {/* Static Google Map */}
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden bg-gray-100 shadow-sm group"
          >
            <img
              src={`https://maps.googleapis.com/maps/api/staticmap?center=${MAP_QUERY}&zoom=15&size=800x450&scale=2&maptype=roadmap&markers=color:0x94526E|${MAP_QUERY}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
              alt="LumaRose Health & Wellness location map"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />


            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />

            {/* Get Directions Badge */}
            <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full text-sm font-medium shadow">
              Get Directions →
            </div>
          </a>
       </div>
      
    </section>
  );
}
