import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial & Shopfront Signage Hertfordshire | Herts Signs",
  description: "Bespoke commercial, shopfront, and architectural signage in Hertfordshire. Illuminated 3D letters, monolith totems, wayfinding and fascia signs made and installed in Welwyn Garden City, Hatfield & St Albans.",
  keywords: ['sign makers hertfordshire', 'shop signs hertfordshire', 'commercial signage welwyn garden city', 'illuminated signs hatfield', 'architectural signage st albans', 'fret cut letters'],
  alternates: {
    canonical: "https://www.hertssigns.co.uk/signage",
  },
  openGraph: {
    title: "Commercial & Shopfront Signage Hertfordshire | Herts Signs",
    description: "Bespoke commercial, shopfront, and architectural signage in Hertfordshire. Illuminated 3D letters, monolith totems, wayfinding and fascia signs made and installed in Welwyn Garden City, Hatfield & St Albans.",
    url: "https://www.hertssigns.co.uk/signage",
  },
};

export default function Page() {
  return (
    <main>
      
<section className="subhero">
<div className="wrap">
<span className="breadcrumb"><a href="/">Home</a> / <a href="#">Services</a> / Signage</span>
<div className="subhero-grid">
<div>
<span className="eyebrow">SG-02 — Signage</span>
<h1 style={{marginTop: "0.6rem"} as React.CSSProperties}>A shopfront people notice before they read it.</h1>
<p className="lede" style={{marginTop: "1.2rem"} as React.CSSProperties}>Illuminated fascias, architectural lettering and pavement signs, fabricated to survive Hertfordshire weather and installed by our own fitting team.</p>
<div className="hero-actions">
<a className="btn-primary" href="/contact-us">Get a quote →</a>
<a className="btn-ghost" href="/work">See fitted signage</a>
</div>
<p className="questionnaire-prompt">Not sure exactly what you want? <a href="/signage-questionnaire" rel="noopener" target="_blank">Try our signage questionnaire →</a></p>
</div>
<div className="subhero-image">

<img alt="Illuminated shopfront sign, supplied and installed by Herts Signs" src="/img/hertfordshire-combat-centre.jpg"/>
</div>
</div>
</div>
</section>
<section>
<div className="wrap">
<div className="section-head">
<span className="eyebrow">What's covered</span>
<h2>Signage for inside, outside, and everywhere between.</h2>
</div>
<div className="subservice-list">
<div className="subservice-item">
<span className="code">SG-02.1</span>
<h3>Illuminated Fascias</h3>
<p>LED-lit shopfront signs built to run for years without a callback, wired and certified to current regs.</p>
</div>
<div className="subservice-item">
<span className="code">SG-02.2</span>
<h3>Architectural Lettering</h3>
<p>Built-up letters and logos in metal or acrylic for receptions, office entrances and building exteriors.</p>
</div>
<div className="subservice-item">
<span className="code">SG-02.3</span>
<h3>Interior Signage</h3>
<p>Wayfinding, wall graphics and corporate branding that holds up to daily foot traffic.</p>
</div>
<div className="subservice-item">
<span className="code">SG-02.4</span>
<h3>Pavement &amp; A-Boards</h3>
<p>Durable outdoor boards for retail and hospitality, built to take the weather and still look sharp.</p>
</div>
</div>
</div>
</section>
<section>
<div className="wrap">
<div className="section-head">
<span className="eyebrow">How it works</span>
<h2>From spec to switched on.</h2>
</div>
<div className="process-timeline">
<div className="process-step">
<span className="step-num">01</span>
<h3>Site survey</h3>
<p>We measure on site, not from a photo, and check planning or landlord requirements before designing anything.</p>
</div>
<div className="process-step">
<span className="step-num">02</span>
<h3>Design &amp; spec</h3>
<p>Materials, lighting and fixings specced to the building, then signed off before fabrication starts.</p>
</div>
<div className="process-step">
<span className="step-num">03</span>
<h3>Manufacture</h3>
<p>Built in our own workshop, so changes mid-job don't mean waiting on a third-party supplier.</p>
</div>
<div className="process-step">
<span className="step-num">04</span>
<h3>Install</h3>
<p>Fitted by our own access-trained team, with electrics certified where the sign is illuminated.</p>
</div>
</div>
</div>
</section>
<section>
<div className="wrap">
<div className="section-head reveal-up">
<span className="eyebrow">Plan your signage</span>
<h2>Start with a project brief.</h2>
</div>
<p className="lede reveal-up" style={{maxWidth: "720px", marginBottom: "1.6rem"} as React.CSSProperties}>Our signage questionnaire walks you through the sign, the site and your branding. Only the signage type and site location are required, and you can download your answers as a PDF to send over with your enquiry.</p>
<div className="hero-actions reveal-up">
<a className="btn-primary" href="/signage-questionnaire" rel="noopener" target="_blank">Start the signage questionnaire →</a>
<a className="btn-ghost" href="/contact-us">Or just get a quote</a>
</div>
</div>
</section>
<section className="page-cta">
<div className="wrap">
<h2>Got a shopfront that needs sorting?</h2>
<p className="lede">Tell us what you've got in mind, or send a photo of the space and we'll talk you through what's possible.</p>
<div className="hero-actions">
<a className="btn-primary" href="/contact-us">Get a quote →</a>
<a className="btn-ghost" href="/signage-questionnaire" rel="noopener" target="_blank">Fill in the signage questionnaire →</a>
<a className="btn-ghost" href="tel:01707257575">Call 01707 257 575</a>
</div>
</div>
</section>

    </main>
  );
}
