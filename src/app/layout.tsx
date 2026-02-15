import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://lumarosewellness.com"),

  alternates: {
    canonical: "https://lumarosewellness.com",
  },

  title: {
    default:
      "%s | LumaRose Health & Wellness",
    template: "%s | LumaRose Health & Wellness",
  },

  description:
    "LumaRose Health & Wellness provides personalized virtual primary care, preventive medicine, regenerative therapies, and medically supervised weight management programs.",

  keywords: [
    "Virtual primary care",
    "Weight management clinic",
    "Preventive medicine",
    "Regenerative medicine",
    "Telehealth services",
    "Concierge healthcare",
    "Online medical consultation",
    "LumaRose Health",
  ],

  authors: [
    {
      name: "LumaRose Health & Wellness",
      url: "https://lumarosewellness.com",
    },
  ],

  creator: "LumaRose Health & Wellness",
  publisher: "LumaRose Health & Wellness",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lumarosewellness.com",
    siteName: "LumaRose Health & Wellness",
    title:
      "Virtual Primary Care & Weight Management | LumaRose Health & Wellness",
    description:
      "Expert-led virtual healthcare focused on prevention, regenerative medicine, and sustainable weight management.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LumaRose Health & Wellness",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Virtual Primary Care & Weight Management | LumaRose Health & Wellness",
    description:
      "Personalized virtual care, preventive medicine, and weight management programs designed for modern living.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "LumaRose Health & Wellness",
              url: "https://lumarosewellness.com",
              logo:
                "https://lumarosewellness.com/images/logo.png",
              description:
                "Personalized virtual primary care, preventive medicine, regenerative therapies, and weight management.",
              areaServed: {
                "@type": "Country",
                name: "United States",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
