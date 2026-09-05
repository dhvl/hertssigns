import type { Metadata } from "next";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ClientEffects } from "@/components/ClientEffects";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hertssigns.co.uk"),
  title: {
    default: "Signage & Printing Services in Hertfordshire | Herts Signs Group",
    template: "%s | Herts Signs Group",
  },
  description:
    "Hertfordshire's leading signage, vehicle wrapping, large format printing, and window film specialists since 1993. Designed & made in-house, installed across Welwyn Garden City, Hatfield, St Albans, Stevenage & London. Call 01707 257 575.",
  keywords: [
    "signage hertfordshire",
    "sign makers hertfordshire",
    "vehicle graphics hertfordshire",
    "van wrapping welwyn garden city",
    "shop signs hertfordshire",
    "shopfront signage hatfield",
    "large format printing hertfordshire",
    "window manifestation films",
    "car decals st albans",
    "fleet vehicle livery uk",
    "illuminated 3d signs",
    "commercial printing welwyn",
    "herts signs group",
  ],
  authors: [{ name: "Herts Signs Group", url: "https://www.hertssigns.co.uk" }],
  creator: "Herts Signs Group",
  publisher: "Herts Signs & Graphics Ltd",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "https://www.hertssigns.co.uk/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.hertssigns.co.uk/",
    siteName: "Herts Signs Group",
    title: "Signage, Vehicle Wrapping & Printing in Hertfordshire | Herts Signs",
    description:
      "Specialist sign makers, vehicle wrappers, and large format printers in Hertfordshire since 1993. Call 01707 257 575 for a bespoke quote.",
    images: [
      {
        url: "/img/van-hero.png",
        width: 1200,
        height: 630,
        alt: "Herts Signs Group - Signage, Vehicle Wrapping & Printing in Hertfordshire",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@hertssigns",
    creator: "@hertssigns",
    title: "Signage, Vehicle Wrapping & Printing in Hertfordshire | Herts Signs",
    description:
      "Hertfordshire's signage, vehicle wrapping and printing specialists since 1993. Call 01707 257 575.",
    images: ["/img/van-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
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
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta name="geo.region" content="GB-HRT" />
        <meta name="geo.placename" content="Welwyn Garden City, Hertfordshire" />
        <meta name="geo.position" content="51.8021;-0.1983" />
        <meta name="ICBM" content="51.8021, -0.1983" />
        <JsonLd />
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-7QW2SN6J1Q"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7QW2SN6J1Q', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
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
