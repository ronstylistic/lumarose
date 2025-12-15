import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://lumarosehealth.org"),

  title: {
    default: "LumaRose Health & Wellness | Personalized Virtual Care",
    template: "%s | LumaRose Health & Wellness",
  },

  description:
    "LumaRose Health & Wellness offers personalized virtual primary care, preventive medicine, regenerative therapies, and weight management—designed for modern, balanced living.",

  keywords: [
    "LumaRose Health",
    "virtual primary care",
    "preventive medicine",
    "weight management",
    "regenerative medicine",
    "holistic wellness",
    "telehealth clinic",
    "concierge healthcare",
  ],

  authors: [
    {
      name: "LumaRose Health & Wellness",
      url: "https://lumarosehealth.org",
    },
  ],

  creator: "LumaRose Health & Wellness",
  publisher: "LumaRose Health & Wellness",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lumarosehealth.org",
    title: "LumaRose Health & Wellness | Personalized Virtual Care",
    description:
      "Personalized virtual care focused on prevention, regenerative medicine, and weight management.",
    siteName: "LumaRose Health & Wellness",
    images: [
      {
        url: "/og-image.jpg", // put this in /public
        width: 1200,
        height: 630,
        alt: "LumaRose Health & Wellness",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "LumaRose Health & Wellness | Personalized Virtual Care",
    description:
      "Virtual primary care, preventive medicine, and wellness services designed around you.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />  
      </body>
    </html>
  );
}``