"use client";

import React from "react";
import { Phone } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function Websites() {
  const projects = [
    {
      title: "Care Home",
      category: "Digital Design & Graphics",
      desc: "Interactive layouts and custom wall graphics design.",
      img: "/img/gallery/lg_format/lg_frmt_3.webp"
    },
    {
      title: "Health Barn Clinic",
      category: "Window Graphics & Branding",
      desc: "Full branding design including digital display integrations.",
      img: "/img/gallery/signage/uh_monolithCover.webp"
    },
    {
      title: "The Galleria",
      category: "Wayfinding & Signage System",
      desc: "Directional mapping and branding layout optimization.",
      img: "/img/gallery/signage/BrushedDibondPlusVinylGraphics_Galleria.webp"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col font-sans">
      
      {/* 5-colour stripe top header line */}
      <div className="h-[6px] w-full bg-linear-to-r from-hs-purple via-hs-green via-hs-pink via-hs-blue to-hs-yellow" />

      <Header />

      <Breadcrumb title="Websites &amp; SEO" />

      {/* SUBNAV BAR */}
      <div className="bg-[#0A0A0A] border-b border-white/10 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-6 font-condensed text-sm font-bold uppercase tracking-wider text-white/50">
          <a href="/websites" className="text-white hover:text-hs-pink">Websites</a>
          <span className="text-white/20">|</span>
          <a href="/design" className="hover:text-white transition-colors">Design</a>
          <span className="text-white/20">|</span>
          <a href="/#capabilities" className="hover:text-white transition-colors">Capabilities</a>
          <span className="text-white/20">|</span>
          <a href="/contact-us" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>

      {/* ONLINE PRESENCE SECTION */}
      <section className="py-20 px-4 md:px-8 bg-white text-[#0A0A0A] border-b border-black/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-5 relative group overflow-hidden border border-black/10 bg-hs-light">
            <img 
              src="/img/1_website-back-13.webp" 
              alt="Websites and Online Presence" 
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          {/* Right Column: Description */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-hs-pink" />
              <span className="font-condensed font-bold text-xs uppercase tracking-widest text-hs-pink">Digital Strategy &amp; Development</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black uppercase leading-[0.9] text-black">
              Websites &amp; <span className="text-hs-orange">Online Presence</span>
            </h2>

            <div className="font-sans text-black/70 text-base leading-relaxed flex flex-col gap-4">
              <p>
                Herts Signs Group has been a pioneer in branding and understands your strategic brand positioning. Our digital experts collaborate with you to build a striking online presence that reflects your premium brand.
              </p>
              <p>
                We don't just build visually stunning, mobile-responsive websites; we implement technical SEO and UI/UX excellence to increase engagement and drive qualified inquiries for your business. We help with your correct social media strategy, search engine optimization of your domain, and online advertising campaigns.
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

      {/* CORE WEB SERVICES BLOCKS */}
      <section className="py-20 px-4 md:px-8 bg-zinc-950 text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Block 1 */}
          <div className="bg-zinc-900 border border-white/5 p-8 flex flex-col gap-6 hover:border-hs-orange/30 transition-all">
            <div className="w-16 h-16 bg-hs-orange/10 flex items-center justify-center rounded-lg text-hs-orange">
              <img src="/img/001-ux.webp" alt="UI/UX Icon" className="w-10 h-10 object-contain inverted-icon" />
            </div>
            <h4 className="text-2xl font-bold uppercase text-white">UI/UX Design</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              It all starts with a great User Interface (UI) and perfect User Experience (UX). Our team maps out user paths and designs visually striking, intuitive layouts.
            </p>
          </div>

          {/* Block 2 */}
          <div className="bg-zinc-900 border border-white/5 p-8 flex flex-col gap-6 hover:border-hs-orange/30 transition-all">
            <div className="w-16 h-16 bg-hs-orange/10 flex items-center justify-center rounded-lg text-hs-orange">
              <img src="/img/002-digital-campaign.webp" alt="SEO Icon" className="w-10 h-10 object-contain inverted-icon" />
            </div>
            <h4 className="text-2xl font-bold uppercase text-white">Technical SEO</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Search Engine Optimisation. We optimize your website code, load speeds, metatags, and local schema data to ensure your business ranks high on Google, Bing, and Yahoo.
            </p>
          </div>

          {/* Block 3 */}
          <div className="bg-zinc-900 border border-white/5 p-8 flex flex-col gap-6 hover:border-hs-orange/30 transition-all">
            <div className="w-16 h-16 bg-hs-orange/10 flex items-center justify-center rounded-lg text-hs-orange">
              <img src="/img/003-data.webp" alt="Custom Dev Icon" className="w-10 h-10 object-contain inverted-icon" />
            </div>
            <h4 className="text-2xl font-bold uppercase text-white">Custom Development</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Functionality is key. We build responsive frontends, custom CMS databases, e-commerce stores, client portals, and bespoke database integrations.
            </p>
          </div>

        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="py-20 px-4 md:px-8 bg-white text-[#0A0A0A] border-b border-black/10">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col gap-3 text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-black uppercase text-black">Our Digital Projects</h3>
            <p className="text-black/60 text-sm">Case studies showcasing brand systems and website solutions designed and developed by our team.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <div key={idx} className="bg-hs-light border border-black/5 overflow-hidden hover:shadow-lg transition-all group">
                <div className="overflow-hidden bg-black aspect-[4/3] border-b border-black/10">
                  <img 
                    src={proj.img} 
                    alt={proj.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <span className="font-condensed font-bold text-xs uppercase tracking-widest text-hs-pink">{proj.category}</span>
                  <h4 className="text-xl font-bold uppercase text-black leading-tight">{proj.title}</h4>
                  <p className="text-black/60 text-xs leading-relaxed">{proj.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />

    </div>
  );
}
