"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function ContactUs() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [formError, setFormError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormError("Please fill in all required fields (*).");
      return;
    }
    setFormError("");
    setFormSubmitted(true);
    // Reset form fields
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col font-sans">
      
      {/* 5-colour stripe top header line */}
      <div className="h-[6px] w-full bg-linear-to-r from-hs-purple via-hs-green via-hs-pink via-hs-blue to-hs-yellow" />

      <Header />

      <Breadcrumb title="Contact Us" />

      {/* CONTACT INFO GRID */}
      <section className="py-20 px-4 md:px-8 bg-white text-[#0A0A0A] border-b border-black/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-hs-pink" />
              <span className="font-condensed font-bold text-xs uppercase tracking-widest text-hs-pink">Get in Touch</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black uppercase leading-none text-black">
              Send Us a <span className="text-hs-orange">Message.</span>
            </h2>

            <p className="text-black/60 text-sm leading-relaxed max-w-lg mb-4">
              Have a signwriting or print query? Complete our quick quotation form below, and our Hatfield sales division will reach out within 1 business day.
            </p>

            {formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-hs-green/10 border border-hs-green/30 p-6 text-hs-green font-condensed font-bold uppercase tracking-wider text-center"
              >
                Thank you! Your message has been successfully sent. We'll be in touch soon.
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {formError && (
                  <div className="bg-hs-pink/10 border border-hs-pink/30 p-4 text-hs-pink text-sm font-semibold">
                    {formError}
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-condensed text-xs uppercase font-bold tracking-wider text-black/50">Your Name *</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="bg-hs-light border border-black/10 focus:border-hs-orange outline-none p-4 font-condensed text-sm tracking-wider uppercase text-black transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-condensed text-xs uppercase font-bold tracking-wider text-black/50">Email Address *</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="bg-hs-light border border-black/10 focus:border-hs-orange outline-none p-4 font-condensed text-sm tracking-wider uppercase text-black transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-condensed text-xs uppercase font-bold tracking-wider text-black/50">Mobile Number</label>
                  <input 
                    type="text" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 07123 456789"
                    className="bg-hs-light border border-black/10 focus:border-hs-orange outline-none p-4 font-condensed text-sm tracking-wider uppercase text-black transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-condensed text-xs uppercase font-bold tracking-wider text-black/50">Here goes your message *</label>
                  <textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your project size, colors, timeline..."
                    rows={5}
                    className="bg-hs-light border border-black/10 focus:border-hs-orange outline-none p-4 font-condensed text-sm tracking-wider uppercase text-black transition-colors resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="bg-[#0A0A0A] hover:bg-hs-orange text-white hover:text-white font-condensed font-bold text-base tracking-widest uppercase p-4 clip-slanted w-full md:w-fit px-8 mt-2 transition-colors cursor-pointer"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact info */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-[#0A0A0A]">
            <h3 className="text-3xl font-black uppercase tracking-tight">Showroom &amp; Studio</h3>
            
            <div className="flex items-start gap-4">
              <div className="text-hs-orange mt-1">
                <MapPin size={20} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-condensed font-bold text-xs uppercase text-black/50 tracking-widest">Office Address</span>
                <p className="font-sans text-sm text-black/70 leading-relaxed font-semibold">
                  6, Blenheim Court, Welwyn Garden City, AL7 1AD, Hertfordshire
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-hs-orange mt-1">
                <Phone size={20} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-condensed font-bold text-xs uppercase text-black/50 tracking-widest">Phone Enquiries</span>
                <a href="tel:01707257575" className="font-display text-3xl font-black text-[#0A0A0A] hover:text-hs-orange transition-colors">
                  01707 257 575
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-hs-orange mt-1">
                <Mail size={20} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-condensed font-bold text-xs uppercase text-black/50 tracking-widest">Electronic Mail</span>
                <a href="mailto:sales@hertssigns.co.uk" className="font-sans text-sm text-black/75 hover:text-hs-orange transition-colors underline font-semibold">
                  sales@hertssigns.co.uk
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-hs-orange mt-1">
                <Clock size={20} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-condensed font-bold text-xs uppercase text-black/50 tracking-widest">Opening Hours</span>
                <p className="font-sans text-sm text-black/70 font-semibold">
                  Monday to Friday: 9:00 AM - 5:30 PM<br />
                  Saturday &amp; Sunday: Closed
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* MAP EMBED FRAME */}
      <section className="bg-zinc-950 border-b border-white/10">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2467.1615226893396!2d-0.19092399999999998!3d51.80320919999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48763c7e41e09d75%3A0xac82b691543a2aa!2sHerts%20Signs%20%26%20Graphics%20Ltd!5e0!3m2!1sen!2sin!4v1728204382862!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }} 
          allowFullScreen 
          loading="lazy"
        />
      </section>

      <Footer />

    </div>
  );
}
