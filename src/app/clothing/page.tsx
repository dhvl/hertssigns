"use client";

import React, { useState } from "react";
import { Phone, ChevronDown, Check } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function Clothing() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(1);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqItems = [
    {
      title: "What's the difference between vinyl, digital, and embroidery?",
      content: "Vinyl: Heat-activated vinyl material is precision-cut by a plotter and then heat-pressed onto the garment. Best suited for simple text or 1-2 color logos.\n\nDigital: Designs are printed in full color onto high-grade heat-activated vinyl media and then heat-pressed. Perfect for complex multicolored logos or photographs.\n\nEmbroidery: Stitches the design directly onto the garment fabric using colored industrial threads. Highly durable and gives a premium, long-lasting corporate feel."
    },
    {
      title: "How do I know what process suits my job?",
      content: "This depends entirely on the design, quantity, and garment. T-shirts and high-visibility vests work exceptionally well with heat-pressed vinyl or digital print. Polo shirts, jackets, fleeces, and caps are best suited for embroidery. We will recommend the best process upon reviewing your artwork."
    },
    {
      title: "What clothing brands do you offer?",
      content: "We supply a vast range of standard polo shirts, hoodies, sweatshirts, high-vis safety wear, and corporate hospitality shirts from leading quality manufacturers. We can customize quotes to fit your specific staff size and budget requirements."
    },
    {
      title: "How do I send my files?",
      content: "Please send your artwork as a high-resolution vector PDF with all fonts outlined (outlines/curves). If your artwork contains raster images, they should be embedded and have a minimum resolution of 300dpi."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col font-sans">
      
      {/* 5-colour stripe top header line */}
      <div className="h-[6px] w-full bg-linear-to-r from-hs-purple via-hs-green via-hs-pink via-hs-blue to-hs-yellow" />

      <Header />

      <Breadcrumb title="Herts Clothing &amp; Workwear" />

      {/* SUBNAV BAR */}
      <div className="bg-[#0A0A0A] border-b border-white/10 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-6 font-condensed text-sm font-bold uppercase tracking-wider text-white/50">
          <a href="/clothing" className="text-white hover:text-hs-pink">Clothing</a>
          <span className="text-white/20">|</span>
          <a href="/printing" className="hover:text-white transition-colors">Printing</a>
          <span className="text-white/20">|</span>
          <a href="/exhibitions" className="hover:text-white transition-colors">Exhibitions</a>
          <span className="text-white/20">|</span>
          <a href="/#capabilities" className="hover:text-white transition-colors">Capabilities</a>
        </div>
      </div>

      {/* INTRODUCTION SECTION */}
      <section className="py-20 px-4 md:px-8 bg-white text-[#0A0A0A] border-b border-black/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-5 relative group overflow-hidden border border-black/10 bg-hs-light">
            <img 
              src="/img/clothing-main.webp" 
              alt="Herts Custom Printed Clothing &amp; Workwear" 
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          {/* Right Column: Description */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-hs-pink" />
              <span className="font-condensed font-bold text-xs uppercase tracking-widest text-hs-pink">Custom T-Shirt Printing &amp; Uniforms</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black uppercase leading-[0.9] text-black">
              Corporate Workwear &amp; <span className="text-hs-orange">Staff Uniforms</span>
            </h2>

            <div className="font-sans text-black/70 text-base leading-relaxed flex flex-col gap-4">
              <p>
                First impressions are key. The way your team is presented to customers is vital to securing contracts and ensuring repeat business. Professional, custom-branded corporate workwear is at the heart of this.
              </p>
              <p>
                Herts Clothing offers a complete range of uniforms, embroidery polo shirts, high-visibility safety clothing, and PPE solutions. We tailor garments to ensure they are both practical for your daily duties and consistent with your brand guidelines.
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

      {/* BRANDING EXPLAINED ACCORDION */}
      <section className="py-20 px-4 md:px-8 bg-zinc-950 text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-hs-pink" />
              <span className="font-condensed font-bold text-xs uppercase tracking-widest text-hs-pink">Uniform Guide</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black uppercase text-white leading-none">
              Branding <span className="text-hs-orange">Explained</span>
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              We help you choose between embroidery, screen printing, and transfer vinyl depending on your logo setup and garment needs.
            </p>
            <div className="overflow-hidden border border-white/10 bg-zinc-900 aspect-video hidden lg:block">
              <img 
                src="/img/1_clothing-back-min.webp" 
                alt="Embroidery and Print Detail" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-4">
            {faqItems.map((item, idx) => {
              const isOpen = openAccordion === idx;
              return (
                <div key={idx} className="border border-white/10 bg-zinc-900 overflow-hidden transition-all duration-300">
                  <button 
                    onClick={() => toggleAccordion(idx)}
                    className="w-full text-left p-6 flex justify-between items-center hover:bg-zinc-800 transition-colors"
                  >
                    <span className="font-bold text-lg uppercase tracking-wide text-white">{item.title}</span>
                    <ChevronDown size={20} className={`text-hs-orange transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="p-6 pt-0 border-t border-white/5 text-white/70 text-sm leading-relaxed whitespace-pre-line">
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CLOTHING SERVICES BLOCKS */}
      <section className="py-20 px-4 md:px-8 bg-white text-[#0A0A0A] border-b border-black/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Block 1 */}
          <div className="bg-hs-light border border-black/5 p-8 flex flex-col gap-6 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-hs-orange/10 flex items-center justify-center rounded-lg text-hs-orange">
              <img src="/img/001-shirt.webp" alt="Workwear Icon" className="w-10 h-10 object-contain" />
            </div>
            <h4 className="text-2xl font-black uppercase text-black">Corporate Workwear</h4>
            <p className="text-black/60 text-sm leading-relaxed">
              Wear your style with pride. We excel in custom embroidery, screen printing, and transfer branding to give your team uniforms an immaculate professional look.
            </p>
          </div>

          {/* Block 2 */}
          <div className="bg-hs-light border border-black/5 p-8 flex flex-col gap-6 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-hs-orange/10 flex items-center justify-center rounded-lg text-hs-orange">
              <img src="/img/002-id-card.webp" alt="Merchandise Icon" className="w-10 h-10 object-contain" />
            </div>
            <h4 className="text-2xl font-black uppercase text-black">Merchandise</h4>
            <p className="text-black/60 text-sm leading-relaxed">
              From personalized bags and event wear to custom printed lanyards and caps, we support all promotional print needs to maximize your event exposure.
            </p>
          </div>

          {/* Block 3 */}
          <div className="bg-hs-light border border-black/5 p-8 flex flex-col gap-6 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-hs-orange/10 flex items-center justify-center rounded-lg text-hs-orange">
              <img src="/img/tea.webp" alt="Mugs Icon" className="w-10 h-10 object-contain" />
            </div>
            <h4 className="text-2xl font-black uppercase text-black">Mugs &amp; Gift Items</h4>
            <p className="text-black/60 text-sm leading-relaxed">
              Make a distinct mark on clients. Gift personalized office accessories, diaries, engraved tags, customized mugs, and other corporate giveaways.
            </p>
          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16 px-4 md:px-8 bg-zinc-900 text-white border-b border-white/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-black uppercase text-white leading-tight">Order your branded clothing</h3>
            <p className="text-white/60 text-sm">We provide high-quality stitching and heat-press transfers in Welwyn Garden City.</p>
          </div>
          <a 
            href="/contact-us" 
            className="bg-hs-orange hover:bg-hs-pink text-white font-condensed font-bold text-base tracking-widest uppercase px-8 py-4 clip-slanted transition-colors"
          >
            Get a Uniform Quote →
          </a>
        </div>
      </section>

      <Footer />

    </div>
  );
}
