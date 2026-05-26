"use client";

import React from "react";
import { Phone } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function WindowFilms() {
  const projects = [
    {
      title: "University of Hertfordshire",
      category: "Etched Glass Manifestation",
      desc: "Etch effect vinyl to glass in main office zones.",
      img: "/img/gallery/window_films/WindowFilms_EtchManifestation_UH.jpg"
    },
    {
      title: "Residential Tinting",
      category: "Coloured Etch Film",
      desc: "Coloured etched films applied to home windows.",
      img: "/img/gallery/window_films/WindowFilms_ColouredEtch.jpg"
    },
    {
      title: "Global Sporting Connections",
      category: "Digital Print & Etch",
      desc: "Digitally printed window film backed with etch vinyl.",
      img: "/img/gallery/window_films/WindowFilms_DigitalFrosted Etch.jpg"
    },
    {
      title: "Swallow Dell School",
      category: "School Graphics & Etch",
      desc: "Digitally printed window graphics with etched vinyl border.",
      img: "/img/sd.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col font-sans">
      
      {/* 5-colour stripe top header line */}
      <div className="h-[6px] w-full bg-linear-to-r from-hs-purple via-hs-green via-hs-pink via-hs-blue to-hs-yellow" />

      <Header />

      <Breadcrumb title="Window Films &amp; Tinting" />

      {/* SUBNAV BAR */}
      <div className="bg-[#0A0A0A] border-b border-white/10 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-6 font-condensed text-sm font-bold uppercase tracking-wider text-white/50">
          <a href="/window-films" className="text-white hover:text-hs-pink">Window Films</a>
          <span className="text-white/20">|</span>
          <a href="/vehicle-graphics" className="hover:text-white transition-colors">Vehicles</a>
          <span className="text-white/20">|</span>
          <a href="/shop-signage" className="hover:text-white transition-colors">Shop Signage</a>
          <span className="text-white/20">|</span>
          <a href="/#capabilities" className="hover:text-white transition-colors">Capabilities</a>
        </div>
      </div>

      {/* VEHICLE TINTING SECTION */}
      <section className="py-20 px-4 md:px-8 bg-white text-[#0A0A0A] border-b border-black/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-5 relative group overflow-hidden border border-black/10 bg-hs-light">
            <img 
              src="/img/uh.jpg" 
              alt="Vehicle Window Tinting" 
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          {/* Right Column: Description */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-hs-pink" />
              <span className="font-condensed font-bold text-xs uppercase tracking-widest text-hs-pink">Privacy &amp; Protection</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black uppercase leading-[0.9] text-black">
              Vehicle Window <span className="text-hs-orange">Tinting</span>
            </h2>

            <div className="font-sans text-black/70 text-base leading-relaxed flex flex-col gap-4">
              <p>
                Window films come in a variety of materials, tints, and finishes depending on your goals. They add privacy, block harmful UV rays and solar heat, increase safety, or act as high-end branding embellishments.
              </p>
              <p>
                Herts Window Films offers a complete supply-and-fit service across Hertfordshire. Our specialist team advises on all legal tint limits and shades (from Light Smoke to Limo tints).
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

      {/* COMMERCIAL TINTING SECTION */}
      <section className="py-20 px-4 md:px-8 bg-zinc-950 text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Description */}
          <div className="lg:col-span-7 flex flex-col gap-6 order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-hs-pink" />
              <span className="font-condensed font-bold text-xs uppercase tracking-widest text-hs-pink">Solar &amp; Thermal Comfort</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black uppercase leading-[0.9] text-white">
              Commercial <span className="text-hs-orange">Office Tinting</span>
            </h2>

            <div className="font-sans text-white/70 text-base leading-relaxed flex flex-col gap-4">
              <p>
                We specialize in window tinting for commercial buildings, educational facilities, and local authorities. Applying the correct solar tint creates a comfortable working environment for staff, serving as a clean, low-maintenance alternative to blinds.
              </p>
              <p>
                Reduce air conditioning costs and prevent screen glare while maintaining a clean, uniform external appearance for your headquarters.
              </p>
            </div>
            
            <a 
              href="/contact-us" 
              className="bg-hs-orange hover:bg-hs-pink text-white font-condensed font-bold text-base tracking-widest uppercase px-8 py-4 clip-slanted w-fit transition-colors mt-2"
            >
              Request Office Tint Survey →
            </a>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-5 relative group overflow-hidden border border-white/10 bg-zinc-900 order-1 lg:order-2">
            <img 
              src="/img/commercialtint.jpg" 
              alt="Commercial Building Solar Tinting" 
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

        </div>
      </section>

      {/* ETCHED GLASS FILM SECTION */}
      <section className="py-20 px-4 md:px-8 bg-white text-[#0A0A0A] border-b border-black/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-5 relative group overflow-hidden border border-black/10 bg-hs-light">
            <img 
              src="/img/sd.jpg" 
              alt="Etched Glass Privacy Manifestation" 
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          {/* Right Column: Description */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-hs-pink" />
              <span className="font-condensed font-bold text-xs uppercase tracking-widest text-hs-pink">Etched Glass Vinyl</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black uppercase leading-[0.9] text-black">
              Etched Glass &amp; <span className="text-hs-orange">Manifestation</span>
            </h2>

            <div className="font-sans text-black/70 text-base leading-relaxed flex flex-col gap-4">
              <p>
                Add privacy and comply with building regulations without the high cost of custom sandblasted glass. Our frosted etched glass films offer several opacity levels and can be cut into logos, patterns, or simple safety bands.
              </p>
              <p>
                Ideal for meeting rooms, glass partitions, storefront doors, and office spaces.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* WINDOW FILMS GALLERY */}
      <section className="py-20 px-4 md:px-8 bg-zinc-950 text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col gap-3 text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-black uppercase text-white">Our Window Film Projects</h3>
            <p className="text-white/60 text-sm">Commercial office manifestations and school window wraps completed across Hertfordshire.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((proj, idx) => (
              <div key={idx} className="bg-zinc-900 border border-white/5 overflow-hidden hover:border-hs-orange/30 transition-all group">
                <div className="overflow-hidden bg-black aspect-[4/3] border-b border-white/10">
                  <img 
                    src={proj.img} 
                    alt={proj.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <span className="font-condensed font-bold text-xs uppercase tracking-widest text-hs-pink">{proj.category}</span>
                  <h4 className="text-lg font-bold uppercase text-white leading-tight">{proj.title}</h4>
                  <p className="text-white/50 text-xs leading-relaxed">{proj.desc}</p>
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
