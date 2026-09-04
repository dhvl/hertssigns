"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col font-sans">
      
      <div className="h-[6px] w-full bg-linear-to-r from-hs-purple via-hs-green via-hs-pink via-hs-blue to-hs-yellow" />

      <Header />

      <Breadcrumb title="Privacy Policy" />

      <section className="py-20 px-4 md:px-8 bg-white text-[#0A0A0A] border-b border-black/10">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          <h2 className="text-3xl font-black uppercase text-black">Privacy Policy</h2>
          <p className="text-black/60 text-sm leading-relaxed">
            Herts Signs Group is committed to protecting your privacy. This policy outlines how we handle personal data collected from users of our website and business services.
          </p>

          <h3 className="text-xl font-bold uppercase mt-4">1. Data Collection</h3>
          <p className="text-black/60 text-sm leading-relaxed">
            We collect personal details such as names, email addresses, and phone numbers when voluntarily submitted through our quote request and contact forms.
          </p>

          <h3 className="text-xl font-bold uppercase mt-4">2. Use of Data</h3>
          <p className="text-black/60 text-sm leading-relaxed">
            Collected data is strictly used to process custom print specifications, provide installation quotes, and correspond with customers. We never sell or share your data with third-party advertisers.
          </p>

          <h3 className="text-xl font-bold uppercase mt-4">3. Security</h3>
          <p className="text-black/60 text-sm leading-relaxed">
            We apply industry-standard security measures to safeguard all stored records and contact form entries from unauthorized access.
          </p>
        </div>
      </section>

      <Footer />

    </div>
  );
}
