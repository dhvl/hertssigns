"use client";

import React from "react";
import { Phone } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function Exhibitions() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col font-sans">
      
      {/* 5-colour stripe top header line */}
      <div className="h-[6px] w-full bg-linear-to-r from-hs-purple via-hs-green via-hs-pink via-hs-blue to-hs-yellow" />

      <Header />

      <Breadcrumb title="Exhibition Displays" />

      {/* SUBNAV BAR */}
      <div className="bg-[#0A0A0A] border-b border-white/10 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-6 font-condensed text-sm font-bold uppercase tracking-wider text-white/50">
          <a href="/exhibitions" className="text-white hover:text-hs-pink">Exhibitions</a>
          <span className="text-white/20">|</span>
          <a href="/shop-signage" className="hover:text-white transition-colors">Shop Signage</a>
          <span className="text-white/20">|</span>
          <a href="/printing" className="hover:text-white transition-colors">Printing</a>
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
              src="/img/herts-exhibitions-min.png" 
              alt="Herts Exhibition Displays" 
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          {/* Right Column: Description */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-hs-pink" />
              <span className="font-condensed font-bold text-xs uppercase tracking-widest text-hs-pink">Exhibition Displays &amp; stands</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black uppercase leading-[0.9] text-black">
              Herts Exhibition <span className="text-hs-orange">Display Solutions</span>
            </h2>

            <div className="font-sans text-black/70 text-base leading-relaxed flex flex-col gap-4">
              <p>
                Herts Signs Group provides professional exhibition display solutions in partnership with industry leaders to deliver cost-effective and striking results. For over 15 years, we have been supplying high-quality exhibition stands, modular displays, and banner solutions across the UK and Europe.
              </p>
              <p>
                Our dedicated team of expert stand builders and installers possess the technical skills and experience to deliver premium quality exhibition stands on time—every time.
              </p>
              <p>
                We offer a <strong>FREE structural and creative design service</strong> for all exhibition planning, ensuring your brand makes a powerful, lasting impression at any event.
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

      {/* CALL TO ACTION */}
      <section className="py-16 px-4 md:px-8 bg-zinc-950 text-white border-b border-white/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-black uppercase text-white leading-tight">Plan your exhibition stand</h3>
            <p className="text-white/60 text-sm">Get in touch for a free structural design draft and event quote.</p>
          </div>
          <a 
            href="/contact-us" 
            className="bg-hs-orange hover:bg-hs-pink text-white font-condensed font-bold text-base tracking-widest uppercase px-8 py-4 clip-slanted transition-colors"
          >
            Contact our design team →
          </a>
        </div>
      </section>

      <Footer />

    </div>
  );
}
