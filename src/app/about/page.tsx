import FounderLetter from "@/components/FounderLetter";

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-white py-28 pb-0">
        <div className="max-w-5xl mx-auto px-6 text-center">
           <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-3">
             About Us
            </h2>

        
          <p className="text-muted-foreground">
            A healthcare practice built on trust, intention, and meaningful
            connection.
          </p>
        </div>
      </section>

      {/* Founder Letter */}
      <FounderLetter />
    </>
  );
}
