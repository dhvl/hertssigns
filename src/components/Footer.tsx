"use client";

import React from "react";

export function Footer() {
  return (
    <>
      {/* FOOTER SIGN-OFF BANNER */}
      <footer className="bg-white text-[#0A0A0A] py-16 px-4 md:px-8 text-center border-t border-black/10">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-none tracking-tight">
            Made in Hertfordshire.<br />
            <span className="text-hs-orange">Deployed Nationwide.</span>
          </h2>
          <p className="font-condensed font-semibold text-xs tracking-widest text-black/50 uppercase mt-4">
            © 1993 - {new Date().getFullYear()} Herts Signs Group Ltd. All rights reserved. | <a href="/privacy" className="hover:text-hs-pink underline">Privacy Policy</a> | <a href="/terms" className="hover:text-hs-pink underline">Terms &amp; Conditions</a>
          </p>
        </div>
      </footer>
    </>
  );
}
