import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Large Format Printing & Banners Hertfordshire | Herts Signs",
  description: "High-resolution large format printing in Hertfordshire. PVC & mesh banners, exhibition graphics, site hoardings, posters, and corporate stationery printed in Welwyn Garden City with fast turnaround.",
  keywords: ['large format printing hertfordshire', 'banner printing welwyn garden city', 'poster printing hatfield', 'site hoardings hertfordshire', 'commercial print st albans'],
  alternates: {
    canonical: "https://www.hertssigns.co.uk/printing",
  },
  openGraph: {
    title: "Large Format Printing & Banners Hertfordshire | Herts Signs",
    description: "High-resolution large format printing in Hertfordshire. PVC & mesh banners, exhibition graphics, site hoardings, posters, and corporate stationery printed in Welwyn Garden City with fast turnaround.",
    url: "https://www.hertssigns.co.uk/printing",
  },
};

export default function Page() {
  return (
    <main>
      
<section className="subhero">
<div className="wrap">
<span className="breadcrumb"><a href="/">Home</a> / <a href="#">Services</a> / Large Format &amp; Printing</span>
<div className="subhero-grid">
<div>
<span className="eyebrow">LF-04 — Large Format &amp; Printing</span>
<h1 style={{marginTop: "0.6rem"} as React.CSSProperties}>If it needs to be seen from the road, we can print it.</h1>
<p className="lede" style={{marginTop: "1.2rem"} as React.CSSProperties}>Banners, mesh, posters and branded stationery, from single proofs to full print runs — printed in-house with eco-friendly inks, with large-format banners and stationery produced through trusted specialist printers.</p>
<div className="hero-actions">
<a className="btn-primary" href="/contact-us">Get a quote →</a>
<a className="btn-ghost" href="/work">See our work</a>
</div>
</div>
<div className="subhero-image">

<img alt="Large format print job, placeholder image" src="/img/signage-cut-viny.png"/>
</div>
</div>
</div>
</section>
<section>
<div className="wrap">
<div className="section-head">
<span className="eyebrow">What's covered</span>
<h2>From a single poster to a building wrap.</h2>
</div>
<div className="subservice-list">
<div className="subservice-item">
<span className="code">LF-04.1</span>
<h3>PVC Banners</h3>
<p>Hemmed and eyeletted banners for events, site hoarding and short-term promotions.</p>
</div>
<div className="subservice-item">
<span className="code">LF-04.2</span>
<h3>Architectural Mesh</h3>
<p>Wind-permeable mesh for scaffold and building wraps, printed full bleed at scale.</p>
</div>
<div className="subservice-item">
<span className="code">LF-04.3</span>
<h3>Posters &amp; Blueprints</h3>
<p>High-resolution prints for retail, exhibitions and technical drawings, on a range of stocks and finishes.</p>
</div>
<div className="subservice-item">
<span className="code">LF-04.4</span>
<h3>Stationery &amp; Branding</h3>
<p>Letterheads, business cards and branded packaging printed to match the rest of your signage and livery.</p>
</div>
</div>
</div>
</section>
<section className="page-cta">
<div className="wrap">
<h2>Got a print job, big or small?</h2>
<p className="lede">Send us the artwork and the size you need, and we'll come back with a price and turnaround.</p>
<div className="hero-actions">
<a className="btn-primary" href="/contact-us">Get a quote →</a>
<a className="btn-ghost" href="tel:01707257575">Call 01707 257 575</a>
</div>
</div>
</section>

    </main>
  );
}
