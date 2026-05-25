"use client";

import React, { useState } from "react";
import { Twitter, Facebook, Instagram, Youtube, Linkedin, Send } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed: ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-[#080808] text-white pt-16 pb-12 px-4 md:px-8 border-t border-white/10 select-none">
      <div className="w-[90%] mx-auto flex flex-col gap-12">
        
        {/* ROW 1: Logo Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 border-b border-white/5 pb-8">
          {/* Left logo */}
          <div className="flex justify-center md:justify-start">
            <a href="/">
              <img 
                src="/img/HS_Logo_white.png" 
                alt="Herts Signs" 
                className="h-12 w-auto object-contain" 
              />
            </a>
          </div>
          {/* Center logo (HCC Partner) */}
          <div className="flex justify-center">
            <img 
              src="/img/hcc_logo.png" 
              alt="Hertfordshire County Council Partner" 
              className="h-12 w-auto object-contain opacity-80" 
            />
          </div>
          {/* Right logo */}
          <div className="flex justify-center md:justify-end">
            <img 
              src="/img/avery.png" 
              alt="Avery Approved Installer" 
              className="h-12 w-auto object-contain opacity-80" 
            />
          </div>
        </div>

        {/* 5-colour stripe divider */}
        <div className="h-[2px] w-full bg-linear-to-r from-hs-purple via-hs-green via-hs-pink via-hs-blue to-hs-yellow" />

        {/* ROW 2: Column Info Lists */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 font-sans">
          
          {/* Col 1: Company Links */}
          <div className="flex flex-col gap-4">
            <span className="font-condensed text-base font-bold uppercase tracking-wider text-hs-orange">Company</span>
            <ul className="flex flex-col gap-2.5 text-sm text-white/60">
              <li><a href="/about-us" className="hover:text-hs-pink transition-colors">About Us</a></li>
              <li><a href="/contact-us" className="hover:text-hs-pink transition-colors">Contact Us</a></li>
              <li><a href="/websites" className="hover:text-hs-pink transition-colors">Websites</a></li>
              <li><a href="/window-films" className="hover:text-hs-pink transition-colors">Window Films</a></li>
            </ul>
          </div>

          {/* Col 2: Services Links */}
          <div className="flex flex-col gap-4">
            <span className="font-condensed text-base font-bold uppercase tracking-wider text-hs-orange">Services</span>
            <ul className="flex flex-col gap-2.5 text-sm text-white/60">
              <li><a href="/clothing#merchandise" className="hover:text-hs-pink transition-colors">Merchandise</a></li>
              <li><a href="/printing" className="hover:text-hs-pink transition-colors">Printing &amp; Large Format</a></li>
              <li><a href="/shop-signage" className="hover:text-hs-pink transition-colors">Shop Signage</a></li>
              <li><a href="/design" className="hover:text-hs-pink transition-colors">Graphic Design</a></li>
              <li><a href="/terms" className="hover:text-hs-pink transition-colors">Terms &amp; Conditions</a></li>
              <li><a href="/privacy" className="hover:text-hs-pink transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Col 3: Get In Touch Details */}
          <div className="flex flex-col gap-4">
            <span className="font-condensed text-base font-bold uppercase tracking-wider text-hs-orange">Get In Touch</span>
            <div className="flex flex-col gap-2.5 text-sm text-white/60">
              <p className="leading-relaxed">
                Serving Welwyn Garden City, Hatfield, St Albans, Stevenage, and surrounding Hertfordshire areas.
              </p>
              <a href="mailto:sales@hertssigns.co.uk" className="hover:text-white transition-colors underline">
                sales@hertssigns.co.uk
              </a>
              <p className="mt-1">
                Sales: <a href="tel:01707257575" className="hover:text-white font-bold text-white/80">+44 (0) 1707 257 575</a><br />
                Studio: <a href="tel:01707275277" className="hover:text-white font-bold text-white/80">+44 (0) 1707 275 277</a>
              </p>
            </div>
          </div>

          {/* Col 4: Newsletter */}
          <div className="flex flex-col gap-4">
            <span className="font-condensed text-base font-bold uppercase tracking-wider text-hs-orange">Newsletter</span>
            <p className="text-sm text-white/60 leading-relaxed">
              Subscribe to get updates on signwriting trends, compliance guidelines, and recent project completions.
            </p>
            <form onSubmit={handleSubscribe} className="flex bg-[#111111] border border-white/10 p-1 rounded-sm overflow-hidden mt-1">
              <input 
                type="email" 
                required
                placeholder="Enter email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent text-sm px-3 py-2 flex-grow focus:outline-hidden placeholder:text-white/30 text-white"
              />
              <button 
                type="submit"
                className="bg-hs-orange hover:bg-hs-pink text-white px-4 flex items-center justify-center transition-colors rounded-xs"
              >
                <Send size={16} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Line: Copyright and Socials */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-white/5 pt-8 mt-4 text-xs text-white/40">
          <div>
            &copy; 1993 - {new Date().getFullYear()} <strong>Herts Signs Group.</strong> All Rights Reserved. Designed by <a href="https://uixstudios.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">UiX Studios</a>.
          </div>
          <div className="flex items-center gap-4 text-white/60">
            <a href="https://www.twitter.com/hertssigns" target="_blank" rel="noopener noreferrer" className="hover:text-hs-pink transition-colors">
              <Twitter size={16} />
            </a>
            <a href="https://www.facebook.com/hertssigns" target="_blank" rel="noopener noreferrer" className="hover:text-hs-pink transition-colors">
              <Facebook size={16} />
            </a>
            <a href="https://www.instagram.com/HertsSigns/" target="_blank" rel="noopener noreferrer" className="hover:text-hs-pink transition-colors">
              <Instagram size={16} />
            </a>
            <a href="https://www.youtube.com/channel/UCd1a0o9B9Eke-_-l9dIwEFw" target="_blank" rel="noopener noreferrer" className="hover:text-hs-pink transition-colors">
              <Youtube size={16} />
            </a>
            <a href="https://www.linkedin.com/company/herts-signs-&-graphics-limited/" target="_blank" rel="noopener noreferrer" className="hover:text-hs-pink transition-colors">
              <Linkedin size={16} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
