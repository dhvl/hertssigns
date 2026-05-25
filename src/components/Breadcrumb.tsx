"use client";

import React from "react";
import { motion } from "framer-motion";

interface BreadcrumbProps {
  title: string;
  parent?: string;
  parentUrl?: string;
}

export function Breadcrumb({ title, parent = "Home", parentUrl = "/" }: BreadcrumbProps) {
  return (
    <div className="relative overflow-hidden h-[40vh] min-h-[250px] flex items-center bg-[#0A0A0A] border-b border-white/10">
      
      {/* Background Banner image with opacity overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-15 filter blur-xs"
        style={{ backgroundImage: "url('/img/banner.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10" />

      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-3"
        >
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 bg-hs-orange" />
            <span className="font-condensed font-bold text-xs uppercase tracking-widest text-hs-orange">
              Herts Signs Group
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black uppercase text-white leading-none">
            {title}
          </h1>

          <nav className="flex items-center gap-2 font-condensed text-xs uppercase font-bold tracking-wider text-white/50 mt-2">
            <a href={parentUrl} className="hover:text-white transition-colors">{parent}</a>
            <span>/</span>
            <span className="text-white">{title}</span>
          </nav>
        </motion.div>
      </div>

    </div>
  );
}
