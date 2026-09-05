import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Logo & Brand Design Studio Hertfordshire | Herts Signs",
  description: "Professional brand identity design, logo creation, vector redrawing, and 3D architectural sign visualisations in Hertfordshire. Crafted by experienced designers who understand fabrication.",
  keywords: ['logo design hertfordshire', 'branding agency welwyn garden city', 'graphic design hatfield', 'signage design studio', 'brand identity st albans'],
  alternates: {
    canonical: "https://www.hertssigns.co.uk/design",
  },
  openGraph: {
    title: "Logo & Brand Design Studio Hertfordshire | Herts Signs",
    description: "Professional brand identity design, logo creation, vector redrawing, and 3D architectural sign visualisations in Hertfordshire. Crafted by experienced designers who understand fabrication.",
    url: "https://www.hertssigns.co.uk/design",
  },
};

export default function Page() {
  return (
    <main>
      
<section className="subhero">
<div className="wrap">
<span className="breadcrumb"><a href="/">Home</a> / <a href="#">Services</a> / Design Studio</span>
<div className="subhero-grid">
<div>
<span className="eyebrow">DS-07 — Design Studio</span>
<h1 style={{marginTop: "0.6rem"} as React.CSSProperties}>Designed by the people who'll have to produce it.</h1>
<p className="lede" style={{marginTop: "1.2rem"} as React.CSSProperties}>Logos, brand systems and layout work, built by designers who already know what survives lamination, what reads at fifty feet, and what'll actually cut cleanly on a vinyl plotter.</p>
<div className="hero-actions">
<a className="btn-primary" href="/contact-us">Get a quote →</a>
<a className="btn-ghost" href="/work">See our work</a>
</div>
<p className="questionnaire-prompt">Not sure exactly what you want? <a href="/logo-design-questionnaire" rel="noopener" target="_blank">Try our logo questionnaire →</a></p>
</div>
<div className="subhero-image">

<img alt="Design studio work, placeholder image" src="/img/signage-cut-viny.png"/>
</div>
</div>
</div>
</section>
<section>
<div className="wrap">
<div className="section-head">
<span className="eyebrow">What's covered</span>
<h2>Design that already knows how it'll be made.</h2>
</div>
<div className="subservice-list">
<div className="subservice-item">
<span className="code">DS-07.1</span>
<h3>Logo &amp; Brand Identity</h3>
<p>Marks designed to work at sign scale and screen scale, not just on a slide in a deck.</p>
</div>
<div className="subservice-item">
<span className="code">DS-07.2</span>
<h3>Vehicle &amp; Signage Layout</h3>
<p>Artwork built against real panel dimensions and material constraints, so the proof matches the finished job.</p>
</div>
<div className="subservice-item">
<span className="code">DS-07.3</span>
<h3>Brand Guidelines</h3>
<p>A reference document covering colour, type and usage, so your branding stays consistent across every supplier.</p>
</div>
<div className="subservice-item">
<span className="code">DS-07.4</span>
<h3>Print &amp; Digital Artwork</h3>
<p>Stationery, brochures and digital assets designed to the same standard as the physical signage they sit alongside.</p>
</div>
</div>
</div>
</section>
<section>
<div className="wrap">
<div className="section-head reveal-up">
<span className="eyebrow">Plan your logo</span>
<h2>Start with a design brief.</h2>
</div>
<p className="lede reveal-up" style={{maxWidth: "720px", marginBottom: "1.6rem"} as React.CSSProperties}>Our logo and brand questionnaire walks you through the name, your business, the style you're after and where the logo needs to work. Only your business name is required, and you can download your answers as a PDF to send over with your enquiry.</p>
<div className="hero-actions reveal-up">
<a className="btn-primary" href="/logo-design-questionnaire" rel="noopener" target="_blank">Start the logo questionnaire →</a>
<a className="btn-ghost" href="/contact-us">Or just get a quote</a>
</div>
</div>
</section>
<section>
<div className="wrap">
<div className="section-head reveal-up">
<span className="eyebrow">Designing with AI</span>
<h2>Exploring logo ideas with AI?</h2>
</div>
<p className="lede reveal-up" style={{maxWidth: "720px", marginBottom: "1.6rem"} as React.CSSProperties}>AI tools like ChatGPT and Midjourney are a great way to picture a look before you commit. Our short guide shows you how to get useful results from them — and what we need to turn an AI concept into clean, print-ready artwork.</p>
<div className="hero-actions reveal-up">
<a className="btn-primary" href="/ai-design-guide">Read the AI design guide →</a>
</div>
</div>
</section>
<section className="page-cta">
<div className="wrap">
<h2>Starting from scratch, or already have a brand?</h2>
<p className="lede">Either way, send over what you've got — even if that's nothing yet — and we'll talk through where to start.</p>
<div className="hero-actions">
<a className="btn-primary" href="/contact-us">Get a quote →</a>
<a className="btn-ghost" href="/logo-design-questionnaire" rel="noopener" target="_blank">Fill in the logo questionnaire →</a>
<a className="btn-ghost" href="tel:01707257575">Call 01707 257 575</a>
</div>
</div>
</section>

    </main>
  );
}
