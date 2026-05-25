import type { Metadata } from "next";
import { Bebas_Neue, Barlow_Condensed, Inter } from "next/font/google";
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
  title: "Signage & Printing Services in Hertfordshire - Herts Signs",
  description: "Herts Signs Group — Hertfordshire's leading signage, vehicle wrapping & printing company since 1993.",
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
      </body>
    </html>
  );
}

