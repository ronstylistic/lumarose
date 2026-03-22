import { Metadata } from "next";
import FAQPageContent from "./FAQPageContent";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers about LumaRose Health & Wellness—virtual care, membership, College Care, corporate wellness, labs, medications, and practice policies.",
};

export default function FAQPage() {
  return <FAQPageContent />;
}
