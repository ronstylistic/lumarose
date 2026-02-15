import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book an appointment",
  description: "Explore transparent membership plans for virtual primary care, preventive medicine, chronic disease management, and weight management at LumaRose Health & Wellness.",
};

export default function Page() {
  return (
     <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-3">
            Book an Appointment
          </h2>
        </div>


            <iframe src="https://drchrono.com/scheduling/offices/dGhpcyBpcyAxNiBjaGFyc_tz9UWb6JvSpwcGgyD7fDQ=" width="100%" height="1000px" frameBorder="0"></iframe>
      </div>
    </section>
   
  );
}
