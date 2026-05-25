"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col font-sans">
      
      <div className="h-[6px] w-full bg-linear-to-r from-hs-purple via-hs-green via-hs-pink via-hs-blue to-hs-yellow" />

      <Header />

      <Breadcrumb title="Terms &amp; Conditions" />

      <section className="py-20 px-4 md:px-8 bg-white text-[#0A0A0A] border-b border-black/10">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          <h2 className="text-3xl font-black uppercase text-black">Terms &amp; Conditions</h2>
          <p className="text-black/60 text-sm leading-relaxed">
            Please read these terms and conditions carefully before using services provided by Herts Signs Group.
          </p>

          <h3 className="text-xl font-bold uppercase mt-4">1. Quotations and Ordering</h3>
          <p className="text-black/60 text-sm leading-relaxed">
            All prices quoted are valid for 30 days unless otherwise stated. Orders are confirmed only after design proof approval and deposit settlement (where applicable).
          </p>

          <h3 className="text-xl font-bold uppercase mt-4">2. Design Proofing</h3>
          <p className="text-black/60 text-sm leading-relaxed">
            Customers are responsible for thoroughly checking design proofs (spelling, sizing, orientation) before manufacturing. Herts Signs Group holds no liability for errors approved on final client proofs.
          </p>

          <h3 className="text-xl font-bold uppercase mt-4">3. Installation Services</h3>
          <p className="text-black/60 text-sm leading-relaxed">
            Vehicle graphics installations require a clean vehicle. Signage installation schedules are subject to local weather conditions and access availability.
          </p>
        </div>
      </section>

      <Footer />

    </div>
  );
}
