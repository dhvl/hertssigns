import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clothing & Merchandise | Herts Signs Group",
  description: "Corporate embroidery, screenprint and branded giftware for teams and trade events. Herts Signs Group, Hertfordshire.",
};

export default function Page() {
  return (
    <main>
      
<section className="subhero">
<div className="wrap">
<span className="breadcrumb"><a href="/">Home</a> / <a href="#">Services</a> / Clothing &amp; Merchandise</span>
<div className="subhero-grid">
<div>
<span className="eyebrow">CM-06 — Clothing &amp; Merchandise</span>
<h1 style={{marginTop: "0.6rem"} as React.CSSProperties}>Branding your team can actually wear.</h1>
<p className="lede" style={{marginTop: "1.2rem"} as React.CSSProperties}>Embroidery, screenprint and branded giftware, from a handful of polos to a full uniform order for the whole team.</p>
<div className="hero-actions">
<a className="btn-primary" href="/contact-us">Get a quote →</a>
<a className="btn-ghost" href="/work">See our work</a>
</div>
</div>
<div className="subhero-image">
{/*  PLACEHOLDER: replace with a real workwear/merchandise photo  */}
<img alt="Branded workwear, placeholder image" src="https://hertssigns.vercel.app/img/signage-cut-viny.png"/>
</div>
</div>
</div>
</section>
<section>
<div className="wrap">
<div className="section-head">
<span className="eyebrow">What's covered</span>
<h2>From a polo shirt to a full uniform order.</h2>
</div>
<div className="subservice-list">
<div className="subservice-item">
<span className="code">CM-06.1</span>
<h3>Corporate Workwear</h3>
<p>Embroidered polos, jackets and hi-vis, branded to a consistent standard across the whole team.</p>
</div>
<div className="subservice-item">
<span className="code">CM-06.2</span>
<h3>Screenprint</h3>
<p>High-grade vinyl and ink screenprinting for event t-shirts and bulk runs where embroidery isn't the right fit.</p>
</div>
<div className="subservice-item">
<span className="code">CM-06.3</span>
<h3>Embroidery</h3>
<p>Durable, professional-finish logo embroidery for uniforms, caps and bags.</p>
</div>
<div className="subservice-item">
<span className="code">CM-06.4</span>
<h3>Branded Giftware</h3>
<p>Mugs, pens, bags and trade show giveaways, printed to match your existing brand assets.</p>
</div>
</div>
</div>
</section>
<section className="page-cta">
<div className="wrap">
<h2>Outfitting a team, or stocking up for an event?</h2>
<p className="lede">Tell us the quantity and the garments you've got in mind, and we'll quote it properly.</p>
<div className="hero-actions">
<a className="btn-primary" href="/contact-us">Get a quote →</a>
<a className="btn-ghost" href="tel:01707257575">Call 01707 257 575</a>
</div>
</div>
</section>

    </main>
  );
}
