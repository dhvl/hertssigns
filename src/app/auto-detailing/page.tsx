"use client";

import React from "react";
import { Phone } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function AutoDetailing() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col font-sans">
      
      {/* 5-colour stripe top header line */}
      <div className="h-[6px] w-full bg-linear-to-r from-hs-purple via-hs-green via-hs-pink via-hs-blue to-hs-yellow" />

      <Header />

      <Breadcrumb title="Auto Detailing" />

      {/* SUBNAV BAR */}
      <div className="bg-[#0A0A0A] border-b border-white/10 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-6 font-condensed text-sm font-bold uppercase tracking-wider text-white/50">
          <a href="/auto-detailing" className="text-white hover:text-hs-pink">Auto Detailing</a>
          <span className="text-white/20">|</span>
          <a href="/vehicle-graphics" className="hover:text-white transition-colors">Vehicles</a>
          <span className="text-white/20">|</span>
          <a href="/window-films" className="hover:text-white transition-colors">Window Films</a>
          <span className="text-white/20">|</span>
          <a href="/#capabilities" className="hover:text-white transition-colors">Capabilities</a>
        </div>
      </div>

      {/* DETAILED CONTENT */}
      <section className="py-20 px-4 md:px-8 bg-white text-[#0A0A0A] border-b border-black/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-5 relative group overflow-hidden border border-black/10 bg-hs-light">
            <img 
              src="/img/autodetailing.jpg" 
              alt="Auto Detailing Machine Polishing" 
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          {/* Right Column: Description */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-hs-pink" />
              <span className="font-condensed font-bold text-xs uppercase tracking-widest text-hs-pink">Preparation &amp; Polish</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black uppercase leading-[0.9] text-black">
              Scratch Repair to <span className="text-hs-orange">Machine Polishing</span>
            </h2>

            <div className="font-sans text-black/70 text-base leading-relaxed flex flex-col gap-4">
              <p>
                Herts Signs' professional auto detailing service prepares your vehicle prior to signwriting or wrapping, giving it a fresh, immaculate surface that guarantees the absolute best graphics adhesion and finish.
              </p>
              <p>
                From minor scratch repair and swirl removal to professional machine polishing and paint protection, our vehicle prep team ensures your branding sits on a flawless exterior.
              </p>
            </div>
            
            <a 
              href="tel:01707275277" 
              className="bg-hs-orange hover:bg-hs-pink text-white font-condensed font-bold text-base tracking-widest uppercase px-6 py-4.5 clip-slanted w-fit flex items-center gap-2 mt-4 transition-colors"
            >
              <Phone size={18} />
              Call sales on 01707 275 277
            </a>
          </div>

        </div>
      </section>

      {/* THREE-STEP PROCESSING STAGES */}
      <section className="py-20 px-4 md:px-8 bg-zinc-950 text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col gap-3 text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-black uppercase text-white">Our Detailing Process</h3>
            <p className="text-white/60 text-sm">We restore and refine the vehicle's paintwork in three distinct phases to ensure perfect graphics adhesion and look.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Step 1 */}
            <div className="bg-zinc-900 border border-white/5 p-6 flex flex-col gap-4 hover:border-hs-orange/30 transition-all">
              <div className="overflow-hidden bg-black aspect-video border border-white/10">
                <img 
                  src="/img/gallery/vehicle-Graphics/Gills_Before.jpg" 
                  alt="Detailing Stage 1: Before" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-condensed font-bold text-xs uppercase tracking-widest text-hs-pink">Step 01</span>
                <h4 className="text-xl font-bold uppercase text-white">Before Restoration</h4>
                <p className="text-white/50 text-xs leading-relaxed">
                  Oxidized paintwork, swirls, and surface scratches that create poor surface tension.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-zinc-900 border border-white/5 p-6 flex flex-col gap-4 hover:border-hs-orange/30 transition-all">
              <div className="overflow-hidden bg-black aspect-video border border-white/10">
                <img 
                  src="/img/gallery/vehicle-Graphics/Gills_During.jpg" 
                  alt="Detailing Stage 2: During" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-condensed font-bold text-xs uppercase tracking-widest text-hs-pink">Step 02</span>
                <h4 className="text-xl font-bold uppercase text-white">During Correction</h4>
                <p className="text-white/50 text-xs leading-relaxed">
                  Precision machine polishing and scratch repair stages using premium compounds.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-zinc-900 border border-white/5 p-6 flex flex-col gap-4 hover:border-hs-orange/30 transition-all">
              <div className="overflow-hidden bg-black aspect-video border border-white/10">
                <img 
                  src="/img/gallery/vehicle-Graphics/Gills_After.jpg" 
                  alt="Detailing Stage 3: After" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-condensed font-bold text-xs uppercase tracking-widest text-hs-pink">Step 03</span>
                <h4 className="text-xl font-bold uppercase text-white">After Polish</h4>
                <p className="text-white/50 text-xs leading-relaxed">
                  Flawless mirror finish ready for high-durability signwriting or wrap installation.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16 px-4 md:px-8 bg-zinc-900 text-white border-b border-white/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-black uppercase text-white leading-tight">Prepare your vehicle for graphics</h3>
            <p className="text-white/60 text-sm">We provide expert detailing services at our dust-free facility in Welwyn.</p>
          </div>
          <a 
            href="/contact-us" 
            className="bg-hs-orange hover:bg-hs-pink text-white font-condensed font-bold text-base tracking-widest uppercase px-8 py-4 clip-slanted transition-colors"
          >
            Book a session →
          </a>
        </div>
      </section>

      <Footer />

    </div>
  );
}
