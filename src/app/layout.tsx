import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ClientEffects } from "@/components/ClientEffects";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--f-display",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const inter = Inter({
  variable: "--f-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--f-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

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
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
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
