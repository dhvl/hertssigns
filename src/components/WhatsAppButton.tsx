"use client";

import React from "react";
import { usePathname } from "next/navigation";

export function WhatsAppButton() {
  const pathname = usePathname();

  // Dynamic message template depending on page route
  const getWhatsAppMessage = () => {
    switch (pathname) {
      case "/about-us":
        return "Hi Herts Signs, I want to learn more about your company and safe compliance accreditations.";
      case "/contact-us":
        return "Hi Herts Signs, I would like to get in touch with a representative to request a quote.";
      case "/auto-detailing":
        return "Hi Herts Signs, I want to request a quote for vehicle auto detailing and scratch repair.";
      case "/clothing":
        return "Hi Herts Signs, I want to inquire about custom embroidery uniforms and corporate clothing.";
      case "/design":
        return "Hi Herts Signs, I want to request a design quote for a new logo or advanced 3D architectural rendering.";
      case "/exhibitions":
        return "Hi Herts Signs, I would like a quote for modular exhibition stands and event display signs.";
      case "/printing":
        return "Hi Herts Signs, I want to request a quote for large format banner printing or corporate stationery.";
      case "/shop-signage":
        return "Hi Herts Signs, I want to request a quote for custom shopfront fascias and dimensional lettering.";
      case "/vehicle-graphics":
        return "Hi Herts Signs, I want to request a quote for vehicle graphics or commercial van wrapping.";
      case "/websites":
        return "Hi Herts Signs, I want to learn more about your website development and SEO optimization services.";
      case "/window-films":
        return "Hi Herts Signs, I want to request a quote for commercial window tinting or etched frosted glass films.";
      default:
        return "Hi Herts Signs, I want to know more about your signage, wrapping, and printing services.";
    }
  };

  const message = encodeURIComponent(getWhatsAppMessage());
  const whatsappUrl = `https://wa.me/447459367473/?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Herts Signs on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
    >
      <svg
        className="w-7 h-7 fill-current"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
      </svg>
      
      {/* Tooltip on hover */}
      <span className="absolute right-16 bg-[#111] text-white text-xs font-condensed font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-xl border border-white/10">
        WhatsApp Chat
      </span>
    </a>
  );
}
