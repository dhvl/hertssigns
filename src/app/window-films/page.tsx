import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Window Films | Herts Signs Group",
  description: "Frosting, manifestation, privacy and solar control window film for offices, retail and vehicles. Supplied and fitted by Herts Signs Group, Hertfordshire.",
};

export default function Page() {
  return (
    <main>
      
<section className="subhero">
<div className="wrap">
<span className="breadcrumb"><a href="/">Home</a> / <a href="#">Services</a> / Window Films</span>
<div className="subhero-grid">
<div>
<span className="eyebrow">WF-03 — Window Films</span>
<h1 style={{marginTop: "0.6rem"} as React.CSSProperties}>Privacy, branding, or both — without losing the light.</h1>
<p className="lede" style={{marginTop: "1.2rem"} as React.CSSProperties}>Frosted manifestation, solar control and branded privacy film for offices, retail glazing and vehicles, fitted bubble-free and cut precisely to the pane.</p>
<div className="hero-actions">
<a className="btn-primary" href="/contact-us">Get a quote →</a>
<a className="btn-ghost" href="/work">See our work</a>
</div>
</div>
<div className="subhero-image">
{/*  PLACEHOLDER: replace with a real window film installation photo  */}
<img alt="Frosted window film installation, placeholder image" src="https://hertssigns.vercel.app/img/signage-cut-viny.png"/>
</div>
</div>
</div>
</section>
<section>
<div className="wrap">
<div className="section-head">
<span className="eyebrow">What's covered</span>
<h2>Four films, four jobs.</h2>
</div>
<div className="subservice-list">
<div className="subservice-item">
<span className="code">WF-03.1</span>
<h3>Frosting &amp; Manifestation</h3>
<p>Etched-glass effect film for partitions and meeting rooms, with logo cut-outs where regs require manifestation bands.</p>
</div>
<div className="subservice-item">
<span className="code">WF-03.2</span>
<h3>Privacy Film</h3>
<p>One-way and blackout options for ground-floor glazing where you need the light but not the line of sight.</p>
</div>
<div className="subservice-item">
<span className="code">WF-03.3</span>
<h3>Solar Control</h3>
<p>Heat and glare reduction film that cuts down on aircon costs without darkening the room noticeably.</p>
</div>
<div className="subservice-item">
<span className="code">WF-03.4</span>
<h3>Vehicle Window Tinting</h3>
<p>Legal tint levels fitted clean, with no visible edge lift, finished to match the rest of the vehicle's graphics.</p>
</div>
</div>
</div>
</section>
<section className="page-cta">
<div className="wrap">
<h2>Not sure which film you need?</h2>
<p className="lede">Tell us what the glazing's for — privacy, branding, heat, or a vehicle — and we'll point you at the right option.</p>
<div className="hero-actions">
<a className="btn-primary" href="/contact-us">Get a quote →</a>
<a className="btn-ghost" href="tel:01707257575">Call 01707 257 575</a>
</div>
</div>
</section>

    </main>
  );
}
