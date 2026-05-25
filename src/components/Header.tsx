"use client";

import React, { useState } from "react";
import { Phone, Menu } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="font-display text-2xl tracking-wider text-white">
            Herts Signs <span className="text-hs-pink">+</span> Graphics
          </span>
        </a>

        {/* Desktop Nav links */}
        <nav className="hidden lg:flex items-center gap-8 font-condensed text-[15px] font-bold tracking-wider uppercase text-white/80">
          <a href="/" className="hover:text-hs-pink transition-colors">Home</a>
          <a href="/about-us" className="hover:text-hs-pink transition-colors">About Us</a>
          <a href="/#capabilities" className="hover:text-hs-pink transition-colors">Capabilities</a>
          <a href="/#works" className="hover:text-hs-pink transition-colors">The Works</a>
          <a href="/contact-us" className="hover:text-hs-pink transition-colors">Contact</a>
        </nav>

        {/* Right Action button */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="tel:01707257575" 
            className="bg-hs-orange hover:bg-hs-pink text-white font-condensed font-bold text-sm tracking-wider uppercase px-5 py-2.5 flex items-center gap-2 clip-slanted-sm transition-colors"
          >
            <Phone size={16} />
            01707 257 575
          </a>
        </div>

        {/* Mobile hamburger menu */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white/80 hover:text-white"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0A] border-b border-white/10 px-6 py-4 flex flex-col gap-4 font-condensed text-lg uppercase font-bold tracking-wider">
          <a href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-hs-pink">Home</a>
          <a href="/about-us" onClick={() => setMobileMenuOpen(false)} className="hover:text-hs-pink">About Us</a>
          <a href="/#capabilities" onClick={() => setMobileMenuOpen(false)} className="hover:text-hs-pink">Capabilities</a>
          <a href="/#works" onClick={() => setMobileMenuOpen(false)} className="hover:text-hs-pink">The Works</a>
          <a href="/contact-us" onClick={() => setMobileMenuOpen(false)} className="hover:text-hs-pink">Contact</a>
          <a href="tel:01707257575" className="bg-hs-orange px-4 py-2 text-center text-sm font-bold flex items-center justify-center gap-2 clip-slanted-sm">
            <Phone size={14} />
            01707 257 575
          </a>
        </div>
      )}
    </header>
  );
}
