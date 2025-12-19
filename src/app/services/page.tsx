import Services from "@/components/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore personalized healthcare services at LumaRose Health.",
};

export default function Page() {
  return (
    <Services />
  );
}
