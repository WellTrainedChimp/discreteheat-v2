import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/server/Navbar";
import Footer from "@/components/server/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.discreteheat.com"),
  title: "ThermaSkirt Home | DiscreteHeat",
  description: "UK manufacturer of ThermaSkirt skirting board heating systems. Over 85,000 systems installed across residential, social housing, healthcare, and commercial applications.",
  alternates: {
    canonical: "https://www.discreteheat.com",
  },
  openGraph: {
    images: [
      {
        url: "https://www.discreteheat.com/MediaHandler.ashx?id=c287107e-ac14-4abc-b282-8676388df56c",
        width: 1200,
        height: 630,
        alt: "ThermaSkirt skirting board heating by DiscreteHeat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} antialiased`}>
        {/* Global Noise Overlay */}
        <svg
          className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-5 mix-blend-overlay"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
