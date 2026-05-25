"use client";

import React, { useState } from "react";
import { Phone, Check } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function Design() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    {
      title: "Design & Corporate ID",
      heading: "Design and Corporate ID",
      content: "From strategic planning to creative design, manufacturing, and national installation, we deliver bespoke sign and print solutions on time, every time. Our studio consists of highly creative designers capable of handling projects of any scale—from large-scale architectural consultancy and wayfinding projects to elegant business stationery and corporate branding.\n\nAs branding consultants, we treat every business project with strict confidentiality and proactive dedication, ensuring we provide true value-for-money and a premium creative service that helps your business stand out."
    },
    {
      title: "Advanced 3D Design",
      heading: "Advanced 3D Modeling & Rendering",
      content: "We provide a comprehensive 3D modeling and rendering service for architectural visualization, interior design, industrial products, signage, and high-end web graphics. Using industry-leading software and advanced technical skills, we create photorealistic 3D rendered artwork that brings your concepts to life with a level of detail that stays ahead of the competition."
    },
    {
      title: "Logo Design",
      heading: "Bespoke Brand & Logo Design",
      content: "Our expert graphic designers specialize in creating iconic new logos or modernizing existing brand identities. Whether you need a logo for digital use, vehicle graphics, or physical shop fascias, we ensure your branding is designed in a versatile vector format optimized for all physical and digital touchpoints."
    },
    {
      title: "Websites & Online Presence",
      heading: "Websites & Digital Presence",
      content: "Herts Signs Group has been a pioneer in branding and understands your strategic brand positioning. Our digital experts collaborate with you to build a striking online presence that reflects your premium brand. We don't just build visually stunning, mobile-responsive websites; we implement technical SEO and UI/UX excellence to increase engagement and drive qualified inquiries for your business."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col font-sans">
      
      {/* 5-colour stripe top header line */}
      <div className="h-[6px] w-full bg-linear-to-r from-hs-purple via-hs-green via-hs-pink via-hs-blue to-hs-yellow" />

      <Header />

      <Breadcrumb title="Design Services" />

      {/* SUBNAV BAR */}
      <div className="bg-[#0A0A0A] border-b border-white/10 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-6 font-condensed text-sm font-bold uppercase tracking-wider text-white/50">
          <a href="/design" className="text-white hover:text-hs-pink">Design</a>
          <span className="text-white/20">|</span>
          <a href="/websites" className="hover:text-white transition-colors">Websites</a>
          <span className="text-white/20">|</span>
          <a href="/printing" className="hover:text-white transition-colors">Printing</a>
          <span className="text-white/20">|</span>
          <a href="/#capabilities" className="hover:text-white transition-colors">Capabilities</a>
        </div>
      </div>

      {/* TABS SECTION */}
      <section className="py-20 px-4 md:px-8 bg-white text-[#0A0A0A] border-b border-black/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col gap-3 text-center max-w-2xl mx-auto mb-16">
            <span className="font-condensed font-bold text-xs uppercase tracking-widest text-hs-pink">Studio Services</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight text-black">
              A New Dimension <span className="text-hs-orange">in Design</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Tab Buttons (Left) */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {tabs.map((tab, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left p-6 font-condensed text-lg font-bold uppercase tracking-wider transition-all duration-300 border ${
                      isActive 
                        ? "bg-[#0A0A0A] text-white border-[#0A0A0A] shadow-lg translate-x-1" 
                        : "bg-hs-light text-black/60 border-black/5 hover:bg-black/5"
                    }`}
                  >
                    {tab.title}
                  </button>
                );
              })}
            </div>

            {/* Tab Panel Content (Right) */}
            <div className="lg:col-span-8 bg-hs-light border border-black/5 p-8 md:p-12 min-h-[350px] flex flex-col justify-between">
              <div className="flex flex-col gap-6">
                <h3 className="text-3xl font-black uppercase text-black leading-none">{tabs[activeTab].heading}</h3>
                <div className="h-[2px] w-12 bg-hs-orange" />
                <p className="text-black/70 text-base leading-relaxed whitespace-pre-line">
                  {tabs[activeTab].content}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <a 
                  href="/contact-us"
                  className="bg-hs-orange hover:bg-hs-pink text-white font-condensed font-bold text-sm tracking-widest uppercase px-6 py-3.5 clip-slanted transition-colors"
                >
                  Discuss your Brand Identity →
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16 px-4 md:px-8 bg-zinc-900 text-white border-b border-white/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-black uppercase text-white leading-tight">Need custom brand assets?</h3>
            <p className="text-white/60 text-sm">We provide high-resolution vector and 3D files suited for print &amp; web.</p>
          </div>
          <a 
            href="tel:01707275277" 
            className="bg-hs-orange hover:bg-hs-pink text-white font-condensed font-bold text-base tracking-widest uppercase px-8 py-4 clip-slanted transition-colors"
          >
            Call design studio →
          </a>
        </div>
      </section>

      <Footer />

    </div>
  );
}
