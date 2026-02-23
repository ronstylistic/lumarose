import { Metadata } from "next";
import FAQPageContent from "./FAQPageContent";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Explore transparent membership plans for virtual primary care, preventive medicine, chronic disease management, and weight management at LumaRose Health & Wellness.",
};

export default function FAQPage() {
  return <FAQPageContent />;
}
