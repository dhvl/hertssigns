"use client";

import React from "react";
import { Phone } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function ShopSignage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col font-sans">
      
      {/* 5-colour stripe top header line */}
      <div className="h-[6px] w-full bg-linear-to-r from-hs-purple via-hs-green via-hs-pink via-hs-blue to-hs-yellow" />

      <Header />

      <Breadcrumb title="Shop Signage" />

      {/* SUBNAV BAR */}
      <div className="bg-[#0A0A0A] border-b border-white/10 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-6 font-condensed text-sm font-bold uppercase tracking-wider text-white/50">
          <a href="/shop-signage" className="text-white hover:text-hs-pink">Shop Signage</a>
          <span className="text-white/20">|</span>
          <a href="/vehicle-graphics" className="hover:text-white transition-colors">Vehicles</a>
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
              src="/img/gallery/signage/BuiltUpLetteringWithInternalIllumination_TheShop.jpg" 
              alt="Stainless steel shop signage internal illumination" 
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          {/* Right Column: Description */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-hs-pink" />
              <span className="font-condensed font-bold text-xs uppercase tracking-widest text-hs-pink">Fascias &amp; Displays</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black uppercase leading-[0.9] text-black">
              Premium Shopfronts &amp; <span className="text-hs-orange">Custom Letters</span>
            </h2>

            <div className="font-sans text-black/70 text-base leading-relaxed flex flex-col gap-4">
              <p>
                From a simple alloy poster frame to a large commercial sign tray, we ensure a premium-grade product is supplied at all times. Working direct with leading fabricators of stainless steel and alloy, we provide value-engineered signage solutions for shopfronts.
              </p>
              <p>
                We design, manufacture, and install bespoke stainless steel, alloy, and acrylic dimensional letters. Choosing high-integrity metals guarantees a far longer life for external installations.
              </p>
              <p>
                If you require illuminated signage, our design studio can demonstrate the benefits of various LED systems, including showing how colors shift at night inside our darkroom setup.
              </p>
            </div>
            
            <a 
              href="tel:01707257575" 
              className="bg-hs-orange hover:bg-hs-pink text-white font-condensed font-bold text-base tracking-widest uppercase px-6 py-4.5 clip-slanted w-fit flex items-center gap-2 mt-4 transition-colors"
            >
              <Phone size={18} />
              Call sales on 01707 257 575
            </a>
          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16 px-4 md:px-8 bg-zinc-950 text-white border-b border-white/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-black uppercase text-white leading-tight">Discuss your Shop Signage project</h3>
            <p className="text-white/60 text-sm">We provide full survey services across Welwyn, Hatfield, and Hertfordshire.</p>
          </div>
          <a 
            href="/contact-us" 
            className="bg-hs-orange hover:bg-hs-pink text-white font-condensed font-bold text-base tracking-widest uppercase px-8 py-4 clip-slanted transition-colors"
          >
            Contact us →
          </a>
        </div>
      </section>

      <Footer />

    </div>
  );
}
