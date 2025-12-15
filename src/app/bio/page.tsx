import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bio",
  description: "Explore personalized healthcare services at LumaRose Health.",
};

export default function Bio() {
  return (
    <div className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold text-rose-dark">Bio</h1>
      <p className="mt-6 text-rose">
        Reach out for appointments, inquiries, or urgent assistance.
      </p>
    </div>
  );
}
