import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ClientEffects } from "@/components/ClientEffects";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hertssigns.co.uk"),
  title: "Herts Signs Group — Signage, Vehicle Wrapping & Printing | Hertfordshire",
  description: "Hertfordshire's signage, vehicle wrapping and printing specialists since 1993. Designed and made in-house, installed by our own team.",
  keywords: [
    "signage hertfordshire",
    "vehicle wrapping hertfordshire",
    "sign makers hertfordshire",
    "van graphics welwyn garden city",
    "shop signs hertfordshire",
    "large format printing hertfordshire",
    "herts signs group"
  ],
  alternates: {
    canonical: "https://www.hertssigns.co.uk/",
  },
  openGraph: {
    type: "website",
    url: "https://www.hertssigns.co.uk/",
    title: "Herts Signs Group — Signage, Vehicle Wrapping & Printing",
    description: "Hertfordshire's signage, vehicle wrapping and printing specialists since 1993. Call 01707 257 575.",
    images: [
      {
        url: "/img/logo.png",
        width: 1200,
        height: 630,
        alt: "Herts Signs Group Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Herts Signs Group — Signage, Vehicle Wrapping & Printing",
    description: "Hertfordshire's signage, vehicle wrapping and printing specialists since 1993.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <ClientEffects />
      </body>
    </html>
  );
}
