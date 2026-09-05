import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Exhibition Stands & Display Graphics Hertfordshire | Herts Signs",
  description: "Modular exhibition stands, roller banners, pop-up backdrops, and promotional event displays designed and fabricated in Hertfordshire for trade shows across the UK.",
  keywords: ['exhibition stands hertfordshire', 'roller banners welwyn garden city', 'event display graphics', 'trade show pop up stands', 'exhibition printing london'],
  alternates: {
    canonical: "https://www.hertssigns.co.uk/exhibitions",
  },
  openGraph: {
    title: "Exhibition Stands & Display Graphics Hertfordshire | Herts Signs",
    description: "Modular exhibition stands, roller banners, pop-up backdrops, and promotional event displays designed and fabricated in Hertfordshire for trade shows across the UK.",
    url: "https://www.hertssigns.co.uk/exhibitions",
  },
};

export default function Page() {
  return (
    <main>
      
<section className="subhero">
<div className="wrap">
<span className="breadcrumb"><a href="/">Home</a> / <a href="#">Services</a> / Exhibitions &amp; Display Stands</span>
<div className="subhero-grid">
<div>
<span className="eyebrow">EX-05 — Exhibitions &amp; Display Stands</span>
<h1 style={{marginTop: "0.6rem"} as React.CSSProperties}>Built to pack down as well as it stands up.</h1>
<p className="lede" style={{marginTop: "1.2rem"} as React.CSSProperties}>Pop-up stands, modular displays and exhibition graphics, designed to survive being loaded, unloaded and rebuilt at every event on the calendar.</p>
<div className="hero-actions">
<a className="btn-primary" href="/contact-us">Get a quote →</a>
<a className="btn-ghost" href="/work">See our work</a>
</div>
</div>
<div className="subhero-image">

<img alt="Exhibition stand, placeholder image" src="/img/signage-cut-viny.png"/>
</div>
</div>
</div>
</section>
<section>
<div className="wrap">
<div className="section-head">
<span className="eyebrow">What's covered</span>
<h2>Display kit for events of any size.</h2>
</div>
<div className="subservice-list">
<div className="subservice-item">
<span className="code">EX-05.1</span>
<h3>Pop-Up Stands</h3>
<p>Curved or straight pop-up displays with full-colour graphics, packed in a wheeled case for easy transport.</p>
</div>
<div className="subservice-item">
<span className="code">EX-05.2</span>
<h3>Roller Banners</h3>
<p>Lightweight, quick to set up, ideal for reception areas and smaller stands.</p>
</div>
<div className="subservice-item">
<span className="code">EX-05.3</span>
<h3>Modular Stand Systems</h3>
<p>Reconfigurable framework stands that scale from a small shell scheme to a full exhibition footprint.</p>
</div>
<div className="subservice-item">
<span className="code">EX-05.4</span>
<h3>Counters &amp; Podiums</h3>
<p>Branded reception counters and podiums for trade shows, built to flat-pack and travel.</p>
</div>
</div>
</div>
</section>
<section className="page-cta">
<div className="wrap">
<h2>Got an event coming up?</h2>
<p className="lede">Tell us the venue, the dates and roughly what you need to display, and we'll put a stand together.</p>
<div className="hero-actions">
<a className="btn-primary" href="/contact-us">Get a quote →</a>
<a className="btn-ghost" href="tel:01707257575">Call 01707 257 575</a>
</div>
</div>
</section>

    </main>
  );
}
