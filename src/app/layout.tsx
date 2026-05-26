import type { Metadata } from "next";
import { Bebas_Neue, Barlow_Condensed, Inter } from "next/font/google";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hertssigns.co.uk"),
  title: "Signage & Printing Services in Hertfordshire - Herts Signs Group",
  description: "Herts Signs Group — Hertfordshire's leading signage, vehicle wrapping & printing company since 1993. Shop signs, vehicle graphics, large format printing & more. Call +44 1707 257 575.",
  keywords: ["signage hertfordshire", "vehicle wrapping hertfordshire", "sign makers hertfordshire", "car wrapping hatfield", "van graphics welwyn garden city", "shop signs hertfordshire", "large format printing hertfordshire", "vehicle graphics hertfordshire", "fleet graphics", "herts signs group"],
  alternates: {
    canonical: "https://www.hertssigns.co.uk/",
  },
  openGraph: {
    type: "website",
    url: "https://www.hertssigns.co.uk/",
    title: "Signage & Printing Services in Hertfordshire - Herts Signs Group",
    description: "Hertfordshire's leading signage, vehicle wrapping & printing company since 1993. Call +44 1707 257 575.",
    images: [
      {
        url: "/img/HS_Logo.png",
        width: 1200,
        height: 630,
        alt: "Herts Signs Group Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@hertssigns",
    title: "Signage & Printing Services in Hertfordshire - Herts Signs Group",
    description: "Hertfordshire's leading signage, vehicle wrapping & printing company since 1993. Call +44 1707 257 575.",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${bebasNeue.variable} ${barlowCondensed.variable} ${inter.variable} antialiased`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

