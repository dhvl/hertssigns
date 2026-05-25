"use client";

import React, { useState } from "react";
import { 
  Plus, Minus, ArrowRight, Star, ChevronLeft, ChevronRight, 
  Car, Building, Layers, Store, Printer, Shirt, Palette, Home as HomeIcon
} from "lucide-react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  // Capabilities items
  const capabilities = [
    { num: "01", title: "Vehicle Graphics", desc: "Expert fleet wrapping, custom decals, & full digital wraps designed in-house.", icon: "Car" },
    { num: "02", title: "Interior Signage", desc: "Illuminated signs, bespoke architectural lettering, & corporate wall graphics.", icon: "Home" },
    { num: "03", title: "Exterior Signage", desc: "Premium shopfront fascias, durable pavement signs, & outdoor boards.", icon: "Building" },
    { num: "04", title: "Window Films", desc: "Frosting, manifestation, reflective privacy film, & solar control options.", icon: "Layers" },
    { num: "05", title: "Exhibition Stands", desc: "High-impact event setups, modular pop-up banner stands, & displays.", icon: "Store" },
    { num: "06", title: "Large Format", desc: "Giant PVC banners, architectural mesh, high-res posters, & blueprints.", icon: "Printer" },
    { num: "07", title: "Clothing & Merch", desc: "Corporate embroidery, high-grade vinyl screenprints, and giftware.", icon: "Shirt" },
    { num: "08", title: "Design Studio", desc: "Creative logos, architectural visualization layout, & brand strategy.", icon: "Palette" },
  ];

  // The Works (projects list)
  const works = [
    { title: "Sovereign Network Group", desc: "Signage, Cut Vinyl", img: "/img/signage-cut-viny.png" },
    { title: "T.J. Fire & Security", desc: "Car Wrapping", img: "/img/t-j-fire-security .jpg" },
    { title: "Hertfordshire Combat Centre", desc: "Signage supplied & installed", img: "/img/Hertfordshire Combat Centre sign supplied and installed.jpg" },
  ];

  // Active accordion key
  const [activeAccordion, setActiveAccordion] = useState("diff");

  const accordionItems = [
    {
      id: "diff",
      title: "What makes us different",
      content: "Established in 1993, we have been designing, manufacturing and installing signage and vehicle graphics for over 30 years. Our in-house sales, design, manufacturing and installation teams offer a professional service that is great value and second to none."
    },
    {
      id: "install",
      title: "Installation",
      content: "Our dust free installation bays ensure we get the best fit for your vehicle graphics and signage, every time. Our in house fitting bays allow us to signwrite and wrap multiple vehicles at once, all under the one roof."
    },
    {
      id: "automotive",
      title: "Automotive Wraps",
      content: "From simple decals to full digital wraps, our premium wrapping films preserve your paintwork and turn your fleet into mobile billboards."
    },
    {
      id: "web",
      title: "Web & Digital",
      content: "Create a cohesive digital footprint with our UI/UX design and custom web development services matching your physical brand presence."
    }
  ];

  // Testimonial slide index
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      quote: "Many thanks for your efficient service with signage and print over the past 16 years.",
      author: "Tim Stirling",
      role: "Client Review"
    },
    {
      quote: "The vehicle wrap looks incredible. Fantastic team to work with, highly recommended!",
      author: "Local Business Owner",
      role: "Van Wrapping Client"
    },
    {
      quote: "Excellent shop front signage. The illuminated lettering makes our shop stand out day and night.",
      author: "Retail Store Hatfield",
      role: "Fascia Signage Client"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col font-sans">
      
      {/* 5-colour stripe top header line */}
      <div className="h-[6px] w-full bg-linear-to-r from-hs-purple via-hs-green via-hs-pink via-hs-blue to-hs-yellow" />

      <Header />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center py-16 px-4 md:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-hs-orange" />
              <span className="font-condensed font-bold text-xs uppercase tracking-widest text-hs-orange">
                Established 1993 • Hertfordshire
              </span>
            </div>

            <h1 className="text-[12vw] md:text-[6.5rem] leading-[0.85] font-black uppercase text-white">
              We Wrap.<br />
              We <span className="text-hs-orange">Paint.</span><br />
              We <span className="relative inline-block text-[#0A0A0A]">
                Install.
                <span className="absolute inset-0 text-transparent [-webkit-text-stroke:2px_white] z-[-1] translate-x-[2px] translate-y-[2px]">Install.</span>
                <span className="absolute inset-0 text-white select-none">Install.</span>
              </span>
            </h1>

            <p className="max-w-lg text-white/60 text-base md:text-lg leading-relaxed">
              Herts Signs Group — Hertfordshire's leading signage, vehicle wrapping & printing company. We design to attract, convert, and delight your customers.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <a 
                href="#contact" 
                className="bg-hs-orange hover:bg-hs-pink text-white font-condensed font-bold text-base tracking-widest uppercase px-8 py-4 clip-slanted transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Get in Touch →
              </a>
              <a 
                href="#works" 
                className="border border-white/20 hover:border-white/50 text-white font-condensed font-bold text-base tracking-widest uppercase px-8 py-4 transition-colors"
              >
                Our Works
              </a>
            </div>
          </div>

          {/* Hero Right Media */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="absolute inset-0 bg-radial from-transparent to-[#0A0A0A] z-10 pointer-events-none" />
            <div className="relative w-full max-w-[500px] h-[450px]">
              <img 
                src="/img/herts-van-web.png" 
                alt="Branded Wrapped Van mockup" 
                className="w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(255,69,0,0.25)] relative z-20"
              />
              <div className="absolute top-[40%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[350px] h-[350px] rounded-full bg-hs-orange/15 blur-3xl z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-white text-[#0A0A0A] py-12 px-4 md:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-black/10">
          <div className="flex flex-col items-center md:items-start pl-4">
            <span className="font-condensed text-xs uppercase tracking-wider text-black/50">Est</span>
            <span className="font-display text-4xl md:text-5xl font-black">1993</span>
          </div>
          <div className="flex flex-col items-center md:items-start pl-4">
            <span className="font-condensed text-xs uppercase tracking-wider text-black/50">Happy Clients</span>
            <span className="font-display text-4xl md:text-5xl font-black">4,873</span>
          </div>
          <div className="flex flex-col items-center md:items-start pl-4">
            <span className="font-condensed text-xs uppercase tracking-wider text-black/50">Wrapped Cars</span>
            <span className="font-display text-4xl md:text-5xl font-black">4,620</span>
          </div>
          <div className="flex flex-col items-center md:items-start pl-4">
            <span className="font-condensed text-xs uppercase tracking-wider text-black/50">Fitted Signs</span>
            <span className="font-display text-4xl md:text-5xl font-black">19,570</span>
          </div>
        </div>
      </section>

      {/* CAPABILITIES SECTION */}
      <section id="capabilities" className="py-20 px-4 md:px-8 bg-white text-[#0A0A0A] border-b border-black/10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-hs-orange" />
            <span className="font-condensed font-bold text-xs uppercase tracking-widest text-hs-orange">Our Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-12 tracking-tight">Capabilities</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-black/10">
            {capabilities.map((c, i) => {
              const IconComponent = (() => {
                switch(c.icon) {
                  case "Car": return Car;
                  case "Home": return HomeIcon;
                  case "Building": return Building;
                  case "Layers": return Layers;
                  case "Store": return Store;
                  case "Printer": return Printer;
                  case "Shirt": return Shirt;
                  case "Palette": return Palette;
                  default: return Star;
                }
              })();

              return (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, type: "spring", stiffness: 60 }}
                  whileHover={{ scale: 1.02, backgroundColor: "#0A0A0A", color: "#FFFFFF", zIndex: 10 }}
                  className="border-r border-b border-black/10 p-8 flex flex-col justify-between min-h-[280px] group transition-all duration-300 relative cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <span className="font-condensed text-[#0A0A0A]/40 group-hover:text-white/40 text-sm font-bold tracking-wider">{c.num}</span>
                    <motion.div 
                      whileHover={{ rotate: 15, scale: 1.15 }}
                      className="text-hs-orange p-2 rounded-lg bg-hs-orange/10 group-hover:bg-white/10 group-hover:text-white transition-colors"
                    >
                      <IconComponent size={24} />
                    </motion.div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-2xl font-black leading-[0.9] uppercase group-hover:text-hs-orange transition-colors duration-300">{c.title}</h3>
                    <p className="text-sm text-black/60 group-hover:text-white/60 leading-snug mt-3 transition-colors duration-300">
                      {c.desc}
                    </p>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span className="text-hs-orange font-condensed font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
                        View Service <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* THE WORKS (PORTFOLIO SECTION) */}
      <section id="works" className="py-20 px-4 md:px-8 bg-[#0A0A0A] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white">The Works</h2>
            <div className="flex flex-wrap gap-2 font-condensed text-xs uppercase font-bold tracking-wider">
              <span className="border border-white/20 bg-white text-[#0A0A0A] px-4 py-2 cursor-pointer">All</span>
              <span className="border border-white/20 hover:bg-white/10 px-4 py-2 cursor-pointer transition-colors text-white/80">Signage</span>
              <span className="border border-white/20 hover:bg-white/10 px-4 py-2 cursor-pointer transition-colors text-white/80">Vehicles</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {works.map((w, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden bg-zinc-900 border border-white/10"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-950">
                  <img 
                    src={w.img} 
                    alt={w.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold uppercase tracking-tight text-white">{w.title}</h4>
                  <p className="text-hs-orange font-condensed text-xs font-bold uppercase tracking-wider mt-1">{w.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED / INTERACTIVE ACCORDIONS SECTION */}
      <section className="py-20 px-4 md:px-8 bg-white text-[#0A0A0A] border-b border-black/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column Content */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-hs-pink" />
              <span className="font-condensed font-bold text-xs uppercase tracking-widest text-hs-pink">In-House Production</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-[0.9]">
              Designed, Built &amp; <span className="text-hs-orange">Fitted</span> Under One Roof.
            </h2>
            <p className="text-black/60 text-base leading-relaxed max-w-md">
              From conception to completion, our experienced teams work together under a single management flow. This guarantees premium design compliance and precise installation quality.
            </p>
            <a 
              href="/contact-us" 
              className="text-[#0A0A0A] hover:text-hs-orange font-condensed text-sm font-bold uppercase tracking-widest border-b-2 border-black hover:border-hs-orange pb-1 w-fit transition-all"
            >
              See Fitting Process →
            </a>
          </div>

          {/* Right Column Accordions */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-black/10">
            {accordionItems.map((item) => {
              const isOpen = activeAccordion === item.id;
              return (
                <div key={item.id} className="py-6">
                  <button 
                    onClick={() => setActiveAccordion(isOpen ? "" : item.id)}
                    className="w-full flex items-center justify-between text-left font-condensed font-bold text-xl uppercase tracking-wider text-[#0A0A0A] hover:text-hs-orange transition-colors"
                  >
                    <span>{item.title}</span>
                    {isOpen ? <Minus size={20} className="text-hs-orange" /> : <Plus size={20} />}
                  </button>
                  {isOpen && (
                    <div className="mt-4 font-sans text-black/60 text-sm leading-relaxed max-w-xl transition-all duration-300">
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FULLY INSURED & ACCENTS */}
      <section className="py-20 px-4 md:px-8 bg-white text-[#0A0A0A] border-b border-black/10">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          
          <div className="max-w-xl flex flex-col gap-4">
            <h2 className="text-4xl md:text-5xl font-black leading-[0.9]">
              Fully Insured.<br />
              <span className="text-hs-orange">Properly</span> Covered.
            </h2>
            <p className="text-black/60 text-sm leading-relaxed">
              We strictly adhere to national safety regulations and carry fully validated corporate coverages, giving you complete reassurance while operating on height-sensitive or high-worth vehicle assets.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { val: "£10M", label: "Public Liability" },
              { val: "£5M", label: "Employers Liability" },
              { val: "SAFE", label: "Contractor Certified" },
              { val: "COSHH", label: "Chemical Regulations" },
              { val: "H&S", label: "Health & Safety Assured" },
              { val: "ENV", label: "Eco-Friendly Inks" }
            ].map((v, i) => (
              <div key={i} className="bg-[#0A0A0A] text-white p-6 flex flex-col items-center text-center justify-center min-h-[140px] clip-slanted-sm">
                <span className="font-display text-3xl font-black text-hs-orange">{v.val}</span>
                <span className="font-condensed text-[10px] uppercase font-bold tracking-widest text-white/50 mt-2">{v.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TESTIMONIALS SLIDER SECTION */}
      <section className="py-24 px-4 md:px-8 bg-zinc-950 text-white relative border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col gap-8 relative z-10">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-hs-orange" />
            <span className="font-condensed font-bold text-xs uppercase tracking-widest text-hs-orange">Testimonials</span>
          </div>

          {/* Testimonial Active Slide */}
          <div className="min-h-[160px]">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase font-display italic">
              "{testimonials[currentSlide].quote}"
            </h3>
            <div className="flex items-center gap-3 mt-6">
              <span className="h-[3px] w-6 bg-hs-pink" />
              <div className="flex flex-col">
                <span className="font-condensed text-sm font-bold uppercase tracking-wider">{testimonials[currentSlide].author}</span>
                <span className="text-white/40 text-xs font-semibold uppercase tracking-widest">{testimonials[currentSlide].role}</span>
              </div>
            </div>
          </div>

          {/* Slider navigation and index */}
          <div className="flex items-center justify-between mt-8 border-t border-white/10 pt-6">
            <div className="flex items-center gap-4">
              <button 
                onClick={prevSlide}
                className="border border-white/20 hover:border-white/50 p-3 hover:bg-white/5 transition-all text-white/80 hover:text-white"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextSlide}
                className="border border-white/20 hover:border-white/50 p-3 hover:bg-white/5 transition-all text-white/80 hover:text-white"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            <span className="font-display text-4xl font-black tracking-widest text-hs-orange">
              {String(currentSlide + 1).padStart(2, "0")}<span className="text-white/20">/</span>{String(testimonials.length).padStart(2, "0")}
            </span>
          </div>

        </div>
      </section>

      {/* PARTNER LOGO STRIPE (ORANGE) */}
      <section className="bg-hs-orange py-6 px-4 md:px-8 border-b border-black/10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 flex-wrap">
          <div className="flex items-center gap-2 text-white font-condensed font-black uppercase text-xs tracking-widest">
            <span>Accredited Partner</span>
            <span className="text-white/40">•</span>
            <span>Est 1993</span>
          </div>
          <div className="flex items-center gap-8 md:gap-16 flex-wrap">
            <span className="font-display text-lg tracking-wider text-white opacity-90">UNIVERSITY OF HERTS</span>
            <span className="font-display text-lg tracking-wider text-white opacity-90">THE GALLERIA</span>
            <span className="font-display text-[#0A0A0A] text-lg font-black tracking-widest">AVERY APPROVED</span>
          </div>
        </div>
      </section>

      {/* CONTACT / EMAIL FORM & DETAIL SPLIT */}
      <section id="contact" className="py-24 px-4 md:px-8 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Form Left Side */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <h2 className="text-5xl md:text-6xl font-black leading-[0.85] tracking-tight">
              Tell Us What<br />
              You'd Like to <span className="text-hs-orange">Make.</span>
            </h2>
            
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="bg-[#0A0A0A] border border-white/10 hover:border-white/30 focus:border-hs-orange outline-none p-4 font-condensed text-sm tracking-wider uppercase text-white transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="bg-[#0A0A0A] border border-white/10 hover:border-white/30 focus:border-hs-orange outline-none p-4 font-condensed text-sm tracking-wider uppercase text-white transition-colors"
                />
              </div>
              <textarea 
                placeholder="What project can we help you create? Tell us specifications or questions..." 
                rows={5}
                className="bg-[#0A0A0A] border border-white/10 hover:border-white/30 focus:border-hs-orange outline-none p-4 font-condensed text-sm tracking-wider uppercase text-white transition-colors resize-none"
              />
              <button 
                type="submit" 
                className="bg-hs-orange hover:bg-hs-pink text-white font-condensed font-bold text-base tracking-widest uppercase p-4 clip-slanted w-full md:w-fit px-8 mt-2 transition-colors cursor-pointer"
              >
                Send Request →
              </button>
            </form>
          </div>

          {/* Details Right Side */}
          <div className="lg:col-span-5 flex flex-col gap-12 font-condensed tracking-wider">
            
            <div className="flex flex-col gap-4">
              <span className="font-bold text-xs uppercase text-hs-pink tracking-widest">Office Address</span>
              <p className="font-sans text-sm text-white/60 leading-relaxed font-semibold">
                HERTS SIGNS &amp; GRAPHICS LTD<br />
                6 BLENHEIM COURT<br />
                WELWYN GARDEN CITY<br />
                AL7 1AD
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-bold text-xs uppercase text-hs-pink tracking-widest">Phone Call</span>
              <a href="tel:01707326000" className="font-display text-4xl font-black text-white hover:text-hs-orange transition-colors">
                01707 326 000
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-bold text-xs uppercase text-hs-pink tracking-widest">Electronic Mail</span>
              <a href="mailto:info@hertssigns.co.uk" className="font-sans text-sm text-white/60 hover:text-white transition-colors underline">
                INFO@HERTSSIGNS.CO.UK
              </a>
            </div>

          </div>

        </div>
      </section>

      <Footer />

    </div>
  );
}
