"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight, X } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function VehicleGraphics() {
  const [selectedImage, setSelectedImage] = useState<{
    title: string;
    category: string;
    img: string;
    desc: string;
  } | null>(null);

  const galleryItems = [
    {
      title: "B3 Living",
      category: "Vehicle Graphics, Wrap, Vinyl Cut",
      img: "/img/gallery/vehicle-Graphics/b3-Living.jpg",
      desc: "Vinyl part wrap and graphics, installed to Ford Transit Connect."
    },
    {
      title: "Jelly Belly",
      category: "Vehicle Graphics, Wrap, Digital Print",
      img: "/img/gallery/vehicle-Graphics/Best-imports.jpg",
      desc: "Full vehicle wrap with digitally printed graphics, installed to London Taxi."
    },
    {
      title: "Bird & Davis Ltd",
      category: "Vehicle Graphics, Vinyl Cut, Digital Print",
      img: "/img/gallery/vehicle-Graphics/BirdAndDavis.jpg",
      desc: "Cut Vinyl and Digitally Printed vinyl graphics installed to Vauxhall Luton van."
    },
    {
      title: "Bruce Moore",
      category: "Vehicle Graphics, Vinyl Cut, Digital Print",
      img: "/img/gallery/vehicle-Graphics/bruce-moore1.jpg",
      desc: "Cut Vinyl and Digitally Printed vinyl graphics installed to motorcycle and sidecar."
    },
    {
      title: "Discount Home Appliances",
      category: "Vehicle Graphics, Vinyl Cut",
      img: "/img/gallery/vehicle-Graphics/DiscountHomeAppliances.jpg",
      desc: "Cut Vinyl graphics installed to Vauxhall Luton van."
    },
    {
      title: "Hertfordshire Fire and Rescue",
      category: "Vehicle Graphics, Vinyl Cut, Digital Print",
      img: "/img/gallery/vehicle-Graphics/FireServiceAudi01.jpg",
      desc: "Cut Vinyl and digital graphics installed to Audi A3 Sportback."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col font-sans">
      
      {/* 5-colour stripe top header line */}
      <div className="h-[6px] w-full bg-linear-to-r from-hs-purple via-hs-green via-hs-pink via-hs-blue to-hs-yellow" />

      <Header />

      <Breadcrumb title="Vehicle Graphics" />

      {/* SUBNAV BAR */}
      <div className="bg-[#0A0A0A] border-b border-white/10 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-6 font-condensed text-sm font-bold uppercase tracking-wider text-white/50">
          <a href="/vehicle-graphics" className="text-white hover:text-hs-pink">Vehicles Overview</a>
          <span className="text-white/20">|</span>
          <a href="/#capabilities" className="hover:text-white transition-colors">Other Services</a>
          <span className="text-white/20">|</span>
          <a href="/contact-us" className="hover:text-white transition-colors">Get survey</a>
        </div>
      </div>

      {/* OVERVIEW CONTENT BLOCK */}
      <section className="py-20 px-4 md:px-8 bg-white text-[#0A0A0A] border-b border-black/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Scaled Vehicle Graphics Details */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-hs-pink" />
              <span className="font-condensed font-bold text-xs uppercase tracking-widest text-hs-pink">Fleet branding</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black uppercase leading-[0.9] text-black">
              Raise Your Company Profile &amp; <span className="text-hs-orange">Brand identity</span> Today
            </h2>

            <div className="font-sans text-black/70 text-base leading-relaxed flex flex-col gap-4">
              <p>
                Dealing direct with one of the worlds most dedicated manufacturers of adhesive vinyl, we have a partnership with direct support to offer a true guarantee on all vinyl applications from vehicles to main signs.
              </p>
              <p>
                There are four different types of vinyls on the market and we ensure you are given the right product for the term required from a simple exhibition graphic to a full vehicle body wrap. This is where our qualified team show you the difference between monomeric, polymeric, cast and super cast vinyls.
              </p>
              <p>
                Our vehicle livery design team have a full range of scaled computerised line drawings of all manufactured vehicles on the road today to accurately show your design to scale. This is a completely free service when having your vehicle sign written by our avery approved fitting team in our under cover fitting bay that ensures your vehicle is sign written when we say it will regardless of weather.
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

          {/* Right Side: Showcase Image Block */}
          <div className="lg:col-span-5 relative group overflow-hidden border border-black/10 bg-hs-light">
            <img 
              src="/img/gallery/vehicle-Graphics/FormulaStudent01.jpg" 
              alt="Herts Signs Vehicle Graphics Formula Student Showcase" 
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-20 px-4 md:px-8 bg-zinc-950 text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-hs-orange" />
            <span className="font-condensed font-bold text-xs uppercase tracking-widest text-hs-orange">recent work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-12 uppercase tracking-tight">Image Gallery</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryItems.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => setSelectedImage(item)}
                className="group relative cursor-pointer overflow-hidden border border-white/10 bg-zinc-900"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-950">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold uppercase tracking-tight text-white group-hover:text-hs-orange transition-colors">{item.title}</h4>
                  <p className="text-white/40 font-condensed text-xs font-bold uppercase tracking-wider mt-1">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8"
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0A0A0A] max-w-4xl w-full border border-white/10 text-white flex flex-col relative"
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-hs-orange hover:bg-hs-pink p-2 text-white transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="aspect-[4/3] bg-black">
                  <img src={selectedImage.img} alt={selectedImage.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col justify-center gap-4">
                  <span className="font-condensed text-xs uppercase font-bold tracking-widest text-hs-pink">{selectedImage.category}</span>
                  <h3 className="text-3xl font-black uppercase leading-tight">{selectedImage.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{selectedImage.desc}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />

    </div>
  );
}
