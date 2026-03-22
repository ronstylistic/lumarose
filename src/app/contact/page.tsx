import { Mail, MapPin, Phone, Printer } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { revealFade, revealPrimary, revealSection } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach LumaRose Health & Wellness—email, phone, administrative address, and a secure inquiry form for general questions.",
};

const ADDRESS =
  "1000 Main Street Suite 2300, Houston, TX 77002";
const EMAIL_ADDRESS = "care@lumarosewellness.com";
const PHONE_DISPLAY = "(346) 623-2689";
const PHONE_TEL = "+13466232689";
const FAX_DISPLAY = "(281) 476-7787";
const MAP_QUERY =
  "1000+Main+Street+Suite+2300+Houston+TX+77002";

const contactCardClass = cn(
  "flex h-full flex-col rounded-2xl border border-slate-200/65 bg-gray-100/40 p-8 md:p-9",
  "shadow-[0_1px_2px_rgba(15,23,42,0.045),0_14px_42px_-10px_rgba(15,23,42,0.085)]",
  "transition-shadow duration-300 motion-reduce:transition-none",
  "hover:shadow-[0_2px_4px_rgba(15,23,42,0.05),0_18px_48px_-10px_rgba(15,23,42,0.095)] motion-reduce:hover:shadow-[0_1px_2px_rgba(15,23,42,0.045),0_14px_42px_-10px_rgba(15,23,42,0.085)]"
);

const linkBase =
  "font-medium text-foreground underline-offset-2 transition-colors hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm";

function ContactIconWell({ children }: { children: ReactNode }) {
  return (
    <span
      className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary/12 text-secondary"
      aria-hidden
    >
      {children}
    </span>
  );
}

export default function ContactPage() {
  const mapSrc = `https://maps.googleapis.com/maps/api/staticmap?center=${MAP_QUERY}&zoom=15&size=800x450&scale=2&maptype=roadmap&markers=color:0x94526E|${MAP_QUERY}&key=${process.env.GOOGLE_MAPS_API_KEY ?? ""}`;

  return (
    <>
      <section
        className="relative overflow-x-hidden bg-gradient-to-b from-background via-muted/25 to-background py-24 md:py-28"
        aria-labelledby="contact-heading"
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-6 md:px-8">
          <header
            className={cn(
              "mx-auto mb-14 max-w-3xl text-center md:mb-16",
              revealPrimary
            )}
          >
            <h1
              id="contact-heading"
              className="text-balance text-4xl font-semibold tracking-tight text-primary md:text-5xl"
            >
              Contact us
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
              Connect with us virtually. We&apos;re here to support your health
              journey.
            </p>
          </header>

          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-12">
            <aside
              className={cn(
                contactCardClass,
                revealSection,
                "motion-safe:delay-75"
              )}
            >
              <h2 className="text-xl font-semibold tracking-tight text-primary md:text-2xl">
                Get in touch
              </h2>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                Schedule a consultation or reach out with general questions. Our
                care team is happy to assist you.
              </p>

              <ul className="mt-8 space-y-5 text-base">
                <li className="flex gap-4">
                  <ContactIconWell>
                    <Mail className="h-4 w-4" strokeWidth={2.35} aria-hidden />
                  </ContactIconWell>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Email
                    </p>
                    <a href={`mailto:${EMAIL_ADDRESS}`} className={linkBase}>
                      {EMAIL_ADDRESS}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <ContactIconWell>
                    <Phone className="h-4 w-4" strokeWidth={2.35} aria-hidden />
                  </ContactIconWell>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Phone
                    </p>
                    <a href={`tel:${PHONE_TEL}`} className={linkBase}>
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <ContactIconWell>
                    <Printer className="h-4 w-4" strokeWidth={2.35} aria-hidden />
                  </ContactIconWell>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Fax
                    </p>
                    <span className="text-foreground">{FAX_DISPLAY}</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <ContactIconWell>
                    <MapPin className="h-4 w-4" strokeWidth={2.35} aria-hidden />
                  </ContactIconWell>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Address
                    </p>
                    <p className="leading-relaxed text-foreground">{ADDRESS}</p>
                  </div>
                </li>
              </ul>
            </aside>

            <div
              className={cn(
                contactCardClass,
                revealSection,
                "motion-safe:delay-150"
              )}
            >
              <h2 className="text-xl font-semibold tracking-tight text-primary md:text-2xl">
                Send an inquiry
              </h2>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                For general questions only. Medical concerns are handled through
                secure messaging after you&apos;re registered.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>

          <div
            className={cn(
              "mx-auto mt-16 max-w-3xl text-center md:mt-20",
              revealSection,
              "motion-safe:delay-100"
            )}
          >
            <h2 className="text-3xl font-semibold tracking-tight text-primary md:text-4xl">
              What happens next
            </h2>
            <div className="mt-8 space-y-5 text-pretty text-base leading-relaxed text-foreground md:text-lg md:leading-relaxed">
              <p>
                After you contact us or schedule a visit, you&apos;ll receive an
                invitation to secure messaging through Spruce—so you can
                communicate safely and confidentially with our care team.
              </p>
              <p>
                You&apos;ll also receive a patient portal link to complete
                registration, intake forms, and required consents before your
                visit.
              </p>
              <p>
                All communication is secure and designed to keep your care
                organized, private, and stress-free.
              </p>
              <p className="rounded-xl border border-primary/25 bg-primary/5 px-5 py-4 text-left text-sm text-muted-foreground md:text-base">
                <span className="font-semibold text-foreground">Note:</span>{" "}
                Medical questions and care-related communication are handled
                through secure messaging after registration—not through this
                contact form.
              </p>
            </div>
          </div>

          <div
            className={cn(
              "mx-auto mt-16 max-w-4xl md:mt-20",
              revealSection,
              "motion-safe:delay-150"
            )}
          >
            <h2 className="text-center text-3xl font-semibold tracking-tight text-primary md:text-4xl">
              Administrative location
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-center text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              This address is for administrative and correspondence purposes
              only. All patient visits and care are provided virtually.
            </p>
            <p className="mt-4 text-center text-base font-semibold text-foreground md:text-lg">
              {ADDRESS}
            </p>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group relative mt-8 block cursor-pointer overflow-hidden rounded-2xl border border-slate-200/65 bg-muted/30 shadow-md",
                "transition-shadow duration-300 motion-reduce:transition-none",
                "hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- external Google Static Maps URL with API key */}
              <img
                src={mapSrc}
                alt="Map showing LumaRose administrative address in Houston, Texas—open in Google Maps for directions"
                width={800}
                height={450}
                loading="lazy"
                decoding="async"
                className="aspect-video w-full object-cover transition-transform duration-300 motion-reduce:transition-none group-hover:scale-[1.02] motion-reduce:group-hover:scale-100"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10 motion-reduce:transition-none"
                aria-hidden
              />
              <div className="absolute bottom-4 right-4 rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary shadow-md ring-1 ring-black/5">
                Get directions →
              </div>
            </a>
          </div>

          <p
            className={cn(
              "mx-auto mt-12 max-w-3xl border-t border-primary/70 pt-8 text-center text-sm leading-relaxed text-muted-foreground md:mt-16",
              revealFade,
              "motion-safe:delay-100"
            )}
          >
            LumaRose Health &amp; Wellness is a virtual practice. Response times
            may vary by business day; urgent medical needs are not appropriate
            for this form.
          </p>
        </div>
      </section>

      <section
        className="relative isolate overflow-hidden bg-primary py-16"
        aria-labelledby="contact-cta-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_-10%,rgba(255,255,255,0.14),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/[0.12]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <div className={revealPrimary}>
            <h2
              id="contact-cta-heading"
              className="text-balance text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl md:leading-tight"
            >
              Prefer to book directly?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/90 md:text-lg">
              Choose a time that works for you—no phone tag required.
            </p>
            <div className="mt-10 sm:mt-12">
              <Button
                size="lg"
                asChild
                className={cn(
                  "min-h-12 w-full rounded-full border-0 bg-white px-8 text-base font-semibold text-primary",
                  "shadow-md shadow-black/20 ring-1 ring-white/40",
                  "transition-[box-shadow,background-color] duration-300 motion-reduce:transition-none",
                  "hover:bg-white hover:text-primary hover:shadow-lg hover:shadow-black/25 motion-safe:hover:shadow-xl",
                  "sm:mx-auto sm:w-auto sm:min-w-[min(100%,16rem)] sm:px-10"
                )}
              >
                <Link
                  href="/book"
                  className="text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  Book a visit
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
