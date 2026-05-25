"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col font-sans">
      
      {/* 5-colour stripe top header line */}
      <div className="h-[6px] w-full bg-linear-to-r from-hs-purple via-hs-green via-hs-pink via-hs-blue to-hs-yellow" />

      <Header />

      <Breadcrumb title="About Us" />

      {/* STATS & INTRO GRID */}
      <section className="py-20 px-4 md:px-8 bg-white text-[#0A0A0A] border-b border-black/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Stats Card */}
          <div className="lg:col-span-4 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-hs-pink text-white p-12 text-center flex flex-col justify-center min-h-[300px] w-full max-w-[320px] clip-slanted relative overflow-hidden"
              style={{ backgroundImage: "url('/img/zoom-count-bg.jpg')", backgroundSize: "cover" }}
            >
              {/* Highlight background stripe */}
              <div className="absolute top-0 left-0 w-full h-[6px] bg-hs-yellow" />
              <span className="font-condensed text-xs uppercase tracking-widest text-white/70">established</span>
              <span className="font-display text-5xl font-black mt-1">1993</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-white/50 mt-4">over</span>
              <span className="font-display text-7xl font-black leading-none my-1">30</span>
              <span className="font-condensed text-base font-bold uppercase tracking-wider text-white/80">Years Experience</span>
            </motion.div>
          </div>

          {/* Right: Info */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-hs-pink" />
              <span className="font-condensed font-bold text-xs uppercase tracking-widest text-hs-pink">Who We Are</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black leading-[0.9] uppercase text-black">
              About Our <span className="text-hs-orange">Group.</span>
            </h2>

            <p className="text-black/70 text-base leading-relaxed">
              Established in 1993, we have been designing, manufacturing and installing signage and vehicle graphics for over 30 years. Our in-house sales, design, manufacturing and installation teams offer a professional service that is great value and second to none. Our dust free installation bays ensure we get the best fit for your vehicle graphics and signage, every time.
            </p>

            <p className="text-black/70 text-base leading-relaxed">
              Our dedication to quality and customer service has made us one of Hertfordshire's leading sign and print providers, with a wide range of corporate clients including The Galleria, Mitsubishi Electric, and Hertfordshire County Council.
            </p>
            
            <a 
              href="/contact-us"
              className="text-[#0A0A0A] hover:text-hs-orange font-condensed text-sm font-bold uppercase tracking-widest border-b-2 border-black hover:border-hs-orange pb-1 w-fit transition-all mt-2"
            >
              Get Directions &amp; Contact Us →
            </a>
          </div>

        </div>
      </section>

      {/* ACCREDITATIONS & VIDEO MOCKUP */}
      <section className="py-20 px-4 md:px-8 bg-zinc-950 text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Certifications Checklist */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h3 className="text-3xl md:text-4xl font-black uppercase text-white leading-none">
              Fully Compliant &amp; <span className="text-hs-orange">Safe</span>
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Herts Signs Group is dedicated to safe working practices. We are fully accredited and validated across all project safety standards:
            </p>

            <ul className="flex flex-col gap-3 font-semibold text-sm text-white/80">
              {[
                "Comprehensive Project Risk Assessment",
                "Full £10M Public Liability Coverage",
                "COSHH Assessment Compliance",
                "Strict Environmental Inks Policy",
                "Health & Safety Audited Installer Teams"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="p-1 rounded-full bg-hs-green/20 text-hs-green">
                    <Check size={16} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Youtube Player Mockup */}
          <div className="lg:col-span-6">
            <div className="relative group overflow-hidden border border-white/10 bg-zinc-900 aspect-video flex items-center justify-center cursor-pointer">
              {/* Vido banner overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-500" 
                style={{ backgroundImage: "url('/img/herts-video.png')" }}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
              
              {/* Play button */}
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="relative z-10 w-20 h-20 rounded-full bg-hs-orange hover:bg-hs-pink flex items-center justify-center text-white shadow-xl transition-colors"
              >
                <span className="border-y-[10px] border-y-transparent border-l-[18px] border-l-white ml-1.5" />
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* THREE VALUE BLOCKS */}
      <section className="py-20 px-4 md:px-8 bg-white text-[#0A0A0A] border-b border-black/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "What makes us different?",
              desc: "There are lots of sign makers out there, so what sets Herts Signs apart from the rest? Coupled with a bespoke Job Management and Tracking System, we aim to get your work done efficiently, safely and above all, on time."
            },
            {
              title: "Professional Installation",
              desc: "We have a team of Avery approved fitters, with over 50 years of experience in signwriting and signage installation between them. Whether it's a simple van design to a complex illuminated shop fascia, we can install it safely and efficiently for you."
            },
            {
              title: "Nationwide Coverage",
              desc: "We are now expanding in our operations nationwide with a large team of professional installers fully equipped, who specialise in nationwide installation from a sign system to large wall coverings 24 hours a day."
            }
          ].map((block, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-hs-light border border-black/5 p-8 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300"
            >
              <span className="font-display text-4xl text-hs-orange font-black">0{idx + 1}</span>
              <h4 className="text-2xl font-black uppercase text-black">{block.title}</h4>
              <p className="text-black/60 text-sm leading-relaxed">{block.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />

    </div>
  );
}
