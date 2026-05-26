"use client";

import React, { useState } from "react";
import { Phone, ChevronDown, Check } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function Printing() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(1);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqItems = [
    {
      title: "What is Digital and Litho Print?",
      content: "Digital Print: This is a process similar to your printer at home, but on a larger industrial scale. It uses large-format inkjet technology to print lines of mixed color to produce the final image. It is highly cost-effective for short-run items.\n\nLitho Print: This is the traditional, high-quality print method. It uses custom physical plates for cyan, magenta, yellow, and black (CMYK) inks to build color, creating sharp divides and rich, dense colors for larger runs."
    },
    {
      title: "How do I know what process suits my job?",
      content: "Our standard print method is Litho for high-volume orders (such as business stationery, flyers, and booklets) to guarantee the best price per unit and maximum quality. For short runs, we use digital printing and will advise you accordingly."
    },
    {
      title: "What are all the paper weights?",
      content: "Paper weights range from light flyer papers (130gsm) to heavy luxury business cards (450gsm+). We have narrowed down the options on our product lines to the most popular, high-durability choices, and our design team will advise on what works best for your brand guidelines."
    },
    {
      title: "How should I send my files?",
      content: "Artwork should be supplied to size as a print-ready PDF with a 3mm bleed and crop marks. Ensure all fonts are converted to outlines (curves) and all embedded images have a minimum resolution of 300dpi."
    },
    {
      title: "What if I need my items designed?",
      content: "We offer a complete in-house graphic design and brand alignment service. Contact our Welwyn studio to discuss your project requirements and receive a bespoke design quote."
    }
  ];

  const projects = [
    {
      title: "Cereal Partners",
      category: "Wall Graphics",
      desc: "Digitally printed wall graphics to internal staff area.",
      img: "/img/gallery/lg_format/lg_frmt_01.jpg"
    },
    {
      title: "St George's Shopping Centre",
      category: "Family Area Displays",
      desc: "Digitally printed wall graphics for family zones.",
      img: "/img/gallery/lg_format/lg_frmt_00.jpg"
    },
    {
      title: "Care Home Installation",
      category: "Bespoke Wall Coverings",
      desc: "Digitally printed wall covering in a care home corridor.",
      img: "/img/gallery/lg_format/lg_frmt_3.jpg"
    },
    {
      title: "Health Barn Clinic",
      category: "Window Graphics",
      desc: "High-density digitally printed window graphics.",
      img: "/img/gallery/lg_format/lg_frmt_1.jpg"
    },
    {
      title: "Mather Marshall",
      category: "Office Wallpapers",
      desc: "Digitally printed wall covering in an estate agents office.",
      img: "/img/gallery/lg_format/lg_frmt_6.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col font-sans">
      
      {/* 5-colour stripe top header line */}
      <div className="h-[6px] w-full bg-linear-to-r from-hs-purple via-hs-green via-hs-pink via-hs-blue to-hs-yellow" />

      <Header />

      <Breadcrumb title="Large Format &amp; Print" />

      {/* SUBNAV BAR */}
      <div className="bg-[#0A0A0A] border-b border-white/10 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-6 font-condensed text-sm font-bold uppercase tracking-wider text-white/50">
          <a href="/printing" className="text-white hover:text-hs-pink">Printing</a>
          <span className="text-white/20">|</span>
          <a href="/clothing" className="hover:text-white transition-colors">Clothing</a>
          <span className="text-white/20">|</span>
          <a href="/exhibitions" className="hover:text-white transition-colors">Exhibitions</a>
          <span className="text-white/20">|</span>
          <a href="/#capabilities" className="hover:text-white transition-colors">Capabilities</a>
        </div>
      </div>

      {/* STATIONERY SECTION */}
      <section className="py-20 px-4 md:px-8 bg-white text-[#0A0A0A] border-b border-black/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-5 relative group overflow-hidden border border-black/10 bg-hs-light">
            <img 
              src="/img/1_stationary-back-min.png" 
              alt="Stationery Printing &amp; Branding" 
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          {/* Right Column: Description */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-hs-pink" />
              <span className="font-condensed font-bold text-xs uppercase tracking-widest text-hs-pink">Branding &amp; Corporate</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black uppercase leading-[0.9] text-black">
              Stationery Printing &amp; <span className="text-hs-orange">Branding</span>
            </h2>

            <div className="font-sans text-black/70 text-base leading-relaxed flex flex-col gap-4">
              <p>
                Herts Print is a one stop solution for all of your printed branding needs. Offering a wide range of printed products that can be tailored to suit most budgets, we assist on all corporate stationery and promotional printing.
              </p>
              <p>
                As part of the Herts Signs Group, we have been producing stationery branding and promotional printing for over two decades. We work together with you to ensure products adhere perfectly to your corporate brand guidelines.
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

      {/* PRINT EXPLAINED (ACCORDION) */}
      <section className="py-20 px-4 md:px-8 bg-zinc-950 text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-hs-pink" />
              <span className="font-condensed font-bold text-xs uppercase tracking-widest text-hs-pink">FAQ Guide</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black uppercase text-white leading-none">
              Print <span className="text-hs-orange">Explained</span>
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Print processes can sometimes be confusing. Here is our breakdown of common printing standards and how we help you choose the best route.
            </p>
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

      {/* LARGE FORMAT SECTION */}
      <section className="py-20 px-4 md:px-8 bg-white text-[#0A0A0A] border-b border-black/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Description */}
          <div className="lg:col-span-7 flex flex-col gap-6 order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-hs-pink" />
              <span className="font-condensed font-bold text-xs uppercase tracking-widest text-hs-pink">High-Impact Display</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black uppercase leading-[0.9] text-black">
              Large Format <span className="text-hs-orange">Printing</span>
            </h2>

            <div className="font-sans text-black/70 text-base leading-relaxed flex flex-col gap-4">
              <p>
                From big outdoor banners and bespoke decals to aluminum signs, metal display stands, and A-frames, we cover all your large format printing needs. We walk you through the options to select the ideal substrate and print coating.
              </p>
              <p>
                With over 25 years of experience in the signage industry, our technical installers and print experts guarantee striking print results for vinyl banners, exhibition backdrops, trade show graphics, and custom wall murals.
              </p>
            </div>
            
            <a 
              href="/contact-us" 
              className="bg-[#0A0A0A] hover:bg-hs-orange text-white font-condensed font-bold text-base tracking-widest uppercase px-8 py-4.5 clip-slanted w-fit transition-colors mt-2"
            >
              Get a Print Quote →
            </a>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-5 relative group overflow-hidden border border-black/10 bg-hs-light order-1 lg:order-2">
            <img 
              src="/img/1_large-format-printing-back-min.png" 
              alt="Large Format Printing" 
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

        </div>
      </section>

      {/* GALLERY/PROJECTS SECTION */}
      <section className="py-20 px-4 md:px-8 bg-zinc-950 text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col gap-3 text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-black uppercase text-white">Our Print Projects</h3>
            <p className="text-white/60 text-sm">A selection of large-format printed wall coverings, window graphics, and signage installations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <h4 className="text-xl font-bold uppercase text-white">{proj.title}</h4>
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
