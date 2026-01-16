export default function FounderWelcome() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white border-primary border-2 p-10 md:p-14 text-center">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
            Welcome to LumaRose Health & Wellness
          </h2>

          {/* Message */}
          <p className="text-base md:text-lg text-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            LumaRose was created to offer thoughtful, personalized care grounded in experience, trust, and
intention. I look forward to partnering with you in your health journey.
          </p>

          {/* Signature */}
          <div className="text-sm md:text-base text-muted-foreground">
            <span className="block font-medium text-foreground">
              — Shameka Crump, FNP-C
            </span>
            <span className="block mt-1">
              Founder, LumaRose Health & Wellness
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
