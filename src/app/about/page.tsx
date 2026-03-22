import { ServicesInclude } from "@/components/ServicesIncluded";
import { Button } from "@/components/ui/button";
import {
  revealFade,
  revealPrimary,
  revealSection,
} from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet LumaRose Health & Wellness—virtual, nurse practitioner–led primary care focused on trust, prevention, and care that fits your life.",
};

const bioCardClass = cn(
  "rounded-2xl border border-slate-200/65 bg-gray-100/40 p-8 md:p-10",
  "shadow-[0_1px_2px_rgba(15,23,42,0.045),0_14px_42px_-10px_rgba(15,23,42,0.085)]",
  "transition-shadow duration-300 motion-reduce:transition-none",
  "hover:shadow-[0_2px_4px_rgba(15,23,42,0.05),0_18px_48px_-10px_rgba(15,23,42,0.095)] motion-reduce:hover:shadow-[0_1px_2px_rgba(15,23,42,0.045),0_14px_42px_-10px_rgba(15,23,42,0.085)]"
);

export default function AboutPage() {
  return (
    <>
      <section
        className="relative overflow-x-hidden bg-gradient-to-b from-background via-muted/25 to-background py-24 md:py-28"
        aria-labelledby="about-heading"
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-6 md:px-8">
          <header
            className={cn(
              "mx-auto mb-14 max-w-3xl text-center md:mb-20",
              revealPrimary
            )}
          >
            <h1
              id="about-heading"
              className="text-balance text-4xl font-semibold tracking-tight text-primary md:text-5xl"
            >
              About LumaRose Health &amp; Wellness
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
              Personalized, nurse practitioner–led virtual primary care built
              on trust, intention, and clinical excellence.
            </p>
          </header>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-16">
            <div
              className={cn(
                "min-w-0 space-y-6 md:space-y-7",
                revealSection,
                "motion-safe:delay-75"
              )}
            >
              <h2 className="text-3xl font-semibold tracking-tight text-primary md:text-[1.75rem]">
                The LumaRose experience
              </h2>

              <p className="text-pretty text-base leading-relaxed text-foreground md:text-lg">
                At LumaRose Health &amp; Wellness, care is designed to feel
                supportive, collaborative, and respectful. Patients are listened
                to, involved in their care decisions, and treated as active
                participants in their health—not passive recipients.
              </p>

              <p className="text-pretty text-base leading-relaxed text-foreground md:text-lg">
                We believe patients deserve care that is clear, approachable, and
                never talked over. Medical recommendations are explained in a way
                that is easy to understand, with time for questions and thoughtful
                discussion. Nothing is rushed. Nothing is one-size-fits-all.
              </p>

              <p className="text-pretty text-base leading-relaxed text-foreground md:text-lg">
                Our approach is rooted in trust, education, and partnership. We
                focus on helping patients feel confident in their care plans,
                informed about their options, and supported through each step of
                their health journey.
              </p>

              <p className="text-pretty text-base leading-relaxed text-foreground md:text-lg">
                LumaRose is a judgment-free space. We meet patients where they
                are and work together to create realistic, sustainable plans that
                align with their goals, values, and season of life.
              </p>

              <ServicesInclude />
            </div>

            <aside
              className={cn(
                bioCardClass,
                revealSection,
                "motion-safe:delay-150"
              )}
            >
              <div className="relative mx-auto mb-8 aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-2xl border border-slate-200/80 shadow-md md:mb-10">
                <Image
                  src="/images/founder.jpg"
                  alt="Portrait of Shameka Crump, FNP-C, founder of LumaRose Health & Wellness"
                  fill
                  className="object-cover object-top"
                  /* Never wider than max-w-[280px] — avoids downloading a full-viewport src */
                  sizes="280px"
                  quality={72}
                  priority
                />
              </div>

              <h2 className="text-center text-2xl font-semibold tracking-tight text-primary md:text-3xl">
                Shameka Crump, FNP-C
              </h2>

              <p className="mt-2 text-center text-base font-medium text-secondary">
                Founder &amp; lead nurse practitioner
              </p>

              <div className="mt-8 space-y-5 text-pretty text-base leading-relaxed text-foreground md:space-y-6 md:text-[1.0625rem]">
                <p>
                  Shameka Crump, FNP-C, is the founder of LumaRose Health &amp;
                  Wellness, a virtual, nurse practitioner–led practice dedicated
                  to personalized, preventive, and lifestyle-centered care.
                </p>

                <p>
                  In addition to her clinical practice, Shameka has served in
                  executive leadership roles, including vice president positions
                  within a large global healthcare organization, where she helped
                  lead clinical operations, provider teams, and care delivery
                  across multiple settings. This experience gives her a unique
                  perspective—allowing her to understand both the clinical and
                  operational sides of healthcare and thoughtfully navigate care
                  on behalf of her patients.
                </p>

                <p>
                  With extensive experience spanning preventive and primary care,
                  chronic disease management, weight management, sexual health,
                  wound care, addiction medicine, and mental health support,
                  Shameka is known for her ability to manage medical complexity
                  while maintaining a compassionate, patient-centered approach.
                </p>

                <p>
                  She believes healthcare should feel personal, accessible, and
                  empowering—rather than rushed or one-size-fits-all. Every care
                  plan is thoughtfully tailored to each patient&apos;s goals,
                  health history, and season of life.
                </p>

                <p>
                  At LumaRose, the focus is on building long-term wellness through
                  clarity, trust, and evidence-based medical care.
                </p>
              </div>

              <div className="mt-8 border-t border-primary/70 pt-8 text-center">
                <p className="text-pretty text-base font-medium italic leading-relaxed text-secondary md:text-lg">
                  Care rooted in experience. Guided by intention. Designed for
                  your life.
                </p>
              </div>
            </aside>
          </div>

          <p
            className={cn(
              "mx-auto mt-16 max-w-3xl border-t border-primary/70 pt-8 text-center text-sm leading-relaxed text-muted-foreground md:mt-20",
              revealFade,
              "motion-safe:delay-100"
            )}
          >
            LumaRose Health &amp; Wellness provides virtual care for adults 18+.
            Services are individualized and based on clinical appropriateness.
          </p>
        </div>
      </section>

      <section
        className="relative isolate overflow-hidden bg-primary py-16"
        aria-labelledby="about-cta-heading"
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
              id="about-cta-heading"
              className="text-balance text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl md:leading-tight"
            >
              Ready to get to know your care team?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/90 md:text-lg">
              Explore our services or book a visit—we&apos;re here when
              you&apos;re ready.
            </p>
            <div className="mt-10 flex flex-col items-stretch gap-4 sm:mt-12 sm:flex-row sm:justify-center sm:gap-5">
              <Button
                size="lg"
                asChild
                className={cn(
                  "min-h-12 w-full rounded-full border-0 bg-white px-8 text-base font-semibold text-primary",
                  "shadow-md shadow-black/20 ring-1 ring-white/40",
                  "transition-[box-shadow,background-color] duration-300 motion-reduce:transition-none",
                  "hover:bg-white hover:text-primary hover:shadow-lg hover:shadow-black/25 motion-safe:hover:shadow-xl",
                  "sm:w-auto sm:min-w-[min(100%,14rem)] sm:px-10"
                )}
              >
                <Link
                  href="/book"
                  className="text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  Book a visit
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className={cn(
                  "min-h-12 w-full rounded-full border-2 border-white/50 bg-transparent px-8 text-base font-semibold text-white",
                  "shadow-none transition-[background-color,border-color,box-shadow] duration-300 motion-reduce:transition-none",
                  "hover:border-white/80 hover:bg-white/10 hover:text-white hover:shadow-sm hover:shadow-black/10",
                  "sm:w-auto sm:min-w-[min(100%,14rem)] sm:px-10"
                )}
              >
                <Link
                  href="/services"
                  className="text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  View services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
