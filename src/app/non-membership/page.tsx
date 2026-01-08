
export default function NonMembershipPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-primary mb-6">
            Non-Membership Services & Pricing
          </h1>

          <p className="text-foreground mb-6">
            Personalized Care—On Your Terms
          </p>

          <p className="text-muted-foreground max-w-3xl mx-auto">
            LumaRose offers flexible, self-pay medical care without a monthly
            commitment. These services are ideal for individuals seeking
            high-quality, professional healthcare on a one-time or occasional
            basis.
          </p>

          <p className="text-muted-foreground max-w-3xl mx-auto mt-4">
            All care is provided by a board-certified Family Nurse Practitioner
            with over 17 years of clinical experience through secure virtual
            visits and select in-home concierge services.
          </p>
        </div>
      </section>

      {/* WHO IT’S FOR */}
      {/* <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-primary mb-10">
            Who Non-Membership Care Is For
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              "Seeking care for a specific or short-term concern",
              "Interested in one-time or occasional visits without a subscription",
              "Exploring LumaRose before enrolling in a membership",
              "Looking for professional, high-quality care without ongoing commitment",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 bg-muted/40 p-5 rounded-xl"
              >
                <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                <p>{item}</p>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground max-w-3xl">
            We welcome patients of all genders, identities, orientations, and
            health backgrounds. All care is delivered confidentially,
            respectfully, and without judgment.
          </p>
        </div>
      </section>

      {/* WHAT’S INCLUDED */}
      {/* <section className="bg-muted/40 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-primary mb-12">
            What’s Included
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <IncludedCard
              title="Virtual Visits"
              text="One-time telehealth appointments focused on evaluation, treatment, and patient education."
            />
            <IncludedCard
              title="Preventive & Acute Care"
              text="Support for acute concerns, symptom evaluation, and preventive health guidance."
            />
            <IncludedCard
              title="Chronic Condition Support"
              text="Ongoing management and follow-up for stable chronic conditions requiring clinical oversight."
            />
            <IncludedCard
              title="Whole-Person Support"
              text="Care addressing weight, stress, mood, and overall wellness—because health is never one-dimensional."
            />
          </div>
        </div>
      </section> */}

      {/* SEXUAL HEALTH */}
      {/* // <section className="bg-white py-24">
      //   <div className="max-w-5xl mx-auto px-6">
      //     <h2 className="text-2xl font-semibold text-primary mb-4">
      //       Sexual & Reproductive Health
      //     </h2>

      //     <p className="text-muted-foreground mb-6">
      //       Confidential, inclusive, judgment-free care for adults of all
      //       identities.
      //     </p>

      //     <ul className="space-y-3">
      //       {[
      //         "Sexual health risk assessment and counseling",
      //         "STD / STI screening coordination",
      //         "Evaluation of symptoms or exposure concerns",
      //         "Treatment of select STDs / STIs",
      //         "Preventive guidance and safer-sex education",
      //         "Follow-up care and coordination",
      //       ].map((item) => (
      //         <li key={item} className="flex gap-3">
      //           <CheckCircle className="h-4 w-4 text-secondary mt-1" />
      //           <span>{item}</span>
      //         </li>
      //       ))}
      //     </ul>

      //     <p className="text-sm text-muted-foreground mt-4">
      //       Lab fees are billed separately by third-party laboratories.
      //     </p>
      //   </div>
      // </section>

      {/* WOUND CARE */}
      {/* // <section className="bg-muted/40 py-24">
      //   <div className="max-w-5xl mx-auto px-6">
      //     <h2 className="text-2xl font-semibold text-primary mb-4">
      //       Post-Operative Wound Care Support
      //     </h2>

      //     <p className="text-muted-foreground mb-6">
      //       Specialized support to promote healing and recovery following
      //       surgery, led by an experienced clinician with a strong background in
      //       wound care.
      //     </p>

      //     <ul className="space-y-3">
      //       {[
      //         "Virtual or in-home wound assessments",
      //         "Monitoring of healing progress",
      //         "Wound care education and dressing guidance",
      //         "Infection prevention support",
      //         "Care coordination with your surgical team",
      //       ].map((item) => (
      //         <li key={item} className="flex gap-3">
      //           <CheckCircle className="h-4 w-4 text-secondary mt-1" />
      //           <span>{item}</span>
      //         </li>
      //       ))}
      //     </ul>

      //     <p className="text-sm text-muted-foreground mt-4">
      //       These services support healing and do not replace surgical follow-up
      //       or emergency care.
      //     </p>
      //   </div>
      // </section> */}

      {/* WHAT TO EXPECT */}
      {/* // <section className="bg-white py-24">
      //   <div className="max-w-4xl mx-auto px-6">
      //     <h2 className="text-3xl font-semibold text-primary mb-6">
      //       What to Expect
      //     </h2>

      //     <ul className="space-y-3">
      //       {[
      //         "Confidential, inclusive, and respectful care",
      //         "Focused, one-on-one visits that prioritize quality",
      //         "Clear communication and patient education",
      //         "Evidence-based treatment plans tailored to your needs",
      //         "Secure follow-up guidance and care coordination",
      //       ].map((item) => (
      //         <li key={item} className="flex gap-3">
      //           <CheckCircle className="h-4 w-4 text-secondary mt-1" />
      //           <span>{item}</span>
      //         </li>
      //       ))}
      //     </ul>
      //   </div>
      // </section>

      // {/* CTA */}
      {/* <section className="bg-primary/5 py-28 text-center">
        <h2 className="text-3xl font-semibold text-primary mb-6">
          Ready to Schedule a Visit?
        </h2>

      //   <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
      //     Book online or contact us to determine if non-membership care is right
      //     for you.
      //   </p>

      //   <Button size="lg" className="bg-primary text-white px-10">
      //     <Link href="/book">Book a Non-Membership Visit</Link>
      //   </Button>

      //   <p className="text-xs text-muted-foreground mt-8 max-w-3xl mx-auto">
      //     LumaRose does not replace emergency care. If you are experiencing a
      //     medical emergency, please call 911 or go to the nearest emergency
      //     department.
      //   </p>
      // </section> */}
    </>
  );
}

/* ---------- COMPONENT ---------- */

function IncludedCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-border">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  );
}
