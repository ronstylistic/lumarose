import { Mail, Phone, MapPin, Calendar, Printer } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const ADDRESS =
  "1000 Main Street Suite 2300 Houston, TX 77002";
const EMAIL_ADDRESS = "care@lumarosewellness.com";
const PHONE_NUMBER = "+1 346 623 2689";  
const FAX_NUMBER = "+1 281 476 7787";
const MAP_QUERY =
  "1000+Main+Street+Suite+2300+Houston+TX+77002";

export default function Contact() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-3">
            Contact Us
          </h2>
          <p className="text-muted-foreground">
            Connect with us virtually. We are here to support your health journey.
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
                Schedule a consultation or reach out with general questions. Our care team is happy to assist you.
              </p>

              <div className="space-y-5 text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-secondary" />
                  <span>{EMAIL_ADDRESS}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-secondary" />
                  <span>{PHONE_NUMBER}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Printer className="h-5 w-5 text-secondary" />
                  <span>{FAX_NUMBER}</span>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-secondary mt-0.5" />
                  <span>{ADDRESS}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm /> 
        </div>
      </div>

      <div className="max-w-7xl mt-16 mx-auto px-6">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-primary mb-6">
            What Happens Next
            </h2>

            <p className="text-foreground leading-relaxed">
              After you contact us or schedule a visit, you will receive an invitation to secure messaging through Spruce. This allows you to communicate safely and confidentially with our care team.
            </p>

            <p className="text-foreground leading-relaxed">
              You will also receive a patient portal link to complete registration, intake forms, and required consents before your visit.
            </p>

            <p className="text-foreground leading-relaxed">
              All communication is secure and designed to keep your care organized, private, and stress free.
            </p>

            
            <p className="text-foreground leading-relaxed">
              Please note: Medical questions and care related communication are handled through secure messaging after registration and not through the contact form.
            </p>
        </div>
      </div>
      
       <div className="max-w-7xl mt-20 mx-auto px-6">

          <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-3">
           Administrative Location
          </h2>
        

         <p className="text-foreground leading-relaxed mb-3">
            This address is used for administrative and correspondence purposes only. All patient visits and care are provided virtually.
          </p>

          <p className="text-foreground leading-relaxed mb-3 font-bold">{ADDRESS}</p>

          {/* Static Google Map */}
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden bg-gray-100 shadow-sm group"
          >
            <img
              src={`https://maps.googleapis.com/maps/api/staticmap?center=${MAP_QUERY}&zoom=15&size=800x450&scale=2&maptype=roadmap&markers=color:0x94526E|${MAP_QUERY}&key=${process.env.GOOGLE_MAPS_API_KEY}`}
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
       </div>
      
    </section>
  );
}
