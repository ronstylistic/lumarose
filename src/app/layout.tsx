import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Lumarose Medical Clinic",
  description: "Compassionate care for all your wellness needs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen">{children}</main>  
      </body>
    </html>
  );
}``