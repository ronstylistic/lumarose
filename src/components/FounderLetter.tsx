export default function FounderLetter() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gray-100/40 p-8 md:p-12 shadow-sm border border-primary">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8">
            A Welcome from the Founder
          </h2>

          {/* Letter Content */}
          <div className="space-y-6 text-foreground leading-relaxed">
            <p className="text-lg font-medium">
              Welcome to LumaRose Health & Wellness.
            </p>

            <p>
              I created LumaRose with a simple belief: healthcare should feel
              personal, thoughtful, and rooted in trust. After more than 17 years
              in healthcare, I have seen firsthand how rushed systems,
              fragmented care, and one-size-fits-all approaches can leave
              patients feeling unheard and unsupported.
            </p>

            <p>
              At LumaRose, I take a different approach. I focus on listening
              first, educating clearly, and partnering with you to create a care
              plan that fits your life—not just your diagnosis. Whether your
              goal is prevention, managing a chronic condition, improving
              overall wellness, or navigating complex health concerns, my
              commitment is to provide care that is both compassionate and
              clinically sound.
            </p>

            <p>
              This practice was built to offer a calm, supportive space where
              your health concerns are taken seriously and your time is
              respected. Every visit is intentional, every plan is
              personalized, and every patient relationship is valued.
            </p>

            <p>
              Thank you for trusting me with your care. I look forward to
              supporting you on your journey toward better health.
            </p>
          </div>

          {/* Signature */}
          <div className="mt-10 pt-6 border-t border-border">
            <p className="font-medium text-foreground">
              Warmly,
            </p>
            <p className="mt-2 font-semibold text-foreground">
              Shameka Crump, FNP-C
            </p>
            <p className="text-sm text-muted-foreground">
              Founder, LumaRose Health & Wellness
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
