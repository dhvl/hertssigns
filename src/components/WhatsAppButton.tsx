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
      {/* WhatsApp SVG Icon */}
      <svg
        className="w-7 h-7 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.453L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.59 1.98 14.12 .953 11.987.953c-5.442 0-9.87 4.372-9.874 9.8.001 1.902.535 3.754 1.547 5.378L2.57 20.47l4.077-1.316zm12.383-6.529c-.328-.164-1.94-.959-2.241-1.07-.302-.111-.521-.164-.74.164-.22.328-.85 1.07-1.04 1.289-.19.22-.38.246-.708.082-.328-.164-1.386-.51-2.64-1.627-.975-.87-1.633-1.946-1.824-2.274-.19-.328-.02-.505.144-.668.148-.146.328-.383.493-.575.164-.192.22-.328.328-.548.11-.22.055-.41-.027-.575-.082-.164-.74-1.78-.1013-2.438-.3-.722-.521-.795-.741-.795-.22-.001-.471-.001-.722-.001-.252 0-.663.095-.101.822-.349.795-1.109 2.242-1.109 5.467 0 3.224 2.348 6.34 2.676 6.78.328.44 4.619 7.053 11.192 9.89 1.564.675 2.785 1.077 3.738 1.38 1.57.499 3.001.427 4.13.259 1.258-.188 2.89-.78 3.298-1.536.408-.756.408-1.4.286-1.536-.122-.136-.44-.22-.767-.384z" />
      </svg>
      
      {/* Tooltip on hover */}
      <span className="absolute right-16 bg-[#111] text-white text-xs font-condensed font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-xl border border-white/10">
        WhatsApp Chat
      </span>
    </a>
  );
}
