"use client";

import React, { useState } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { label: "About Us", href: "/about-us" },
    {
      label: "Signage",
      dropdown: [
        { label: "Vehicles & Wraps", href: "/vehicle-graphics" },
        { label: "Shop Signage", href: "/shop-signage" },
        { label: "Auto Detailing", href: "/auto-detailing" },
        { label: "Exhibitions & Stands", href: "/exhibitions" },
      ],
    },
    {
      label: "Printing",
      dropdown: [
        { label: "Large Format Printing", href: "/printing" },
        { label: "Stationery & Branding", href: "/printing#stationery" },
      ],
    },
    {
      label: "Clothing",
      dropdown: [
        { label: "Corporate Workwear", href: "/clothing" },
        { label: "Merchandise & Gifts", href: "/clothing#merchandise" },
      ],
    },
    {
      label: "Window Films",
      dropdown: [
        { label: "Vehicle Tinting", href: "/window-films" },
        { label: "Commercial Office Tinting", href: "/window-films#commercial" },
        { label: "Etched Glass Films", href: "/window-films#etched" },
      ],
    },
    { label: "Design", href: "/design" },
    { label: "Websites", href: "/websites" },
    { label: "Catalogues", href: "https://shop.hertssigns.co.uk/" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A] border-b border-white/10 select-none">
      <div className="w-[90%] mx-auto h-20 flex items-center justify-between">
        
        {/* LOGO IMAGE */}
        <a href="/" className="flex items-center gap-2">
          <img 
            src="/img/HS_Logo_white.png" 
            alt="Herts Signs Logo" 
            className="h-10 md:h-12 w-auto object-contain" 
          />
        </a>

        {/* Desktop Nav links */}
        <nav className="hidden xl:flex items-center gap-5 font-condensed text-[13.5px] font-bold tracking-wider uppercase text-white/80">
          {navItems.map((item, idx) => {
            if (item.dropdown) {
              const isOpen = activeDropdown === item.label;
              return (
                <div
                  key={idx}
                  className="relative group py-2 cursor-pointer"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span className="hover:text-hs-pink transition-colors flex items-center gap-1">
                    {item.label}
                    <ChevronDown size={14} className="text-white/40 group-hover:text-hs-pink transition-transform duration-200 group-hover:rotate-180" />
                  </span>

                  {/* Dropdown list */}
                  <div className={`absolute left-0 top-full pt-2 w-56 transition-all duration-200 ${
                    isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible pointer-events-none"
                  }`}>
                    <div className="bg-[#111111] border border-white/10 p-2 shadow-2xl flex flex-col gap-1">
                      {item.dropdown.map((sub, sIdx) => (
                        <a
                          key={sIdx}
                          href={sub.href}
                          className="px-4 py-2.5 text-xs text-white/70 hover:text-white hover:bg-hs-orange/10 border-l-2 border-transparent hover:border-hs-orange transition-all"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <a
                key={idx}
                href={item.href}
                target={item.href?.startsWith("http") ? "_blank" : undefined}
                rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="hover:text-hs-pink transition-colors py-2"
              >
                {item.label}
              </a>
            );
          })}
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
          className="xl:hidden p-2 text-white/80 hover:text-white"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0A0A0A] border-b border-white/10 px-6 py-6 flex flex-col gap-4 font-condensed text-base uppercase font-bold tracking-wider max-h-[80vh] overflow-y-auto">
          {navItems.map((item, idx) => {
            if (item.dropdown) {
              const isOpen = activeDropdown === item.label;
              return (
                <div key={idx} className="flex flex-col gap-2">
                  <button
                    onClick={() => setActiveDropdown(isOpen ? null : item.label)}
                    className="w-full text-left text-white hover:text-hs-pink flex justify-between items-center"
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={16} className={`transition-transform duration-250 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="pl-4 flex flex-col gap-2 border-l border-white/10 py-1">
                      {item.dropdown.map((sub, sIdx) => (
                        <a
                          key={sIdx}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="py-1 text-white/60 hover:text-white text-[14px]"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={idx}
                href={item.href}
                target={item.href?.startsWith("http") ? "_blank" : undefined}
                rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-hs-pink text-white"
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="tel:01707257575"
            className="bg-hs-orange px-4 py-2.5 text-center text-sm font-bold flex items-center justify-center gap-2 clip-slanted-sm mt-2"
          >
            <Phone size={14} />
            01707 257 575
          </a>
        </div>
      )}
    </header>
  );
}
