import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Herts Signs Group",
  description: "Established 1993. Herts Signs Group designs, manufactures and installs signage, vehicle graphics and print for clients across the UK.",
};

export default function Page() {
  return (
    <main>
      
<section className="subhero" style={{borderBottom: "none"} as React.CSSProperties}>
<div className="wrap">
<span className="breadcrumb"><a href="/">Home</a> / About Us</span>
<span className="eyebrow">Who we are</span>
<h1 style={{marginTop: "0.6rem", maxWidth: "760px"} as React.CSSProperties}>Thirty years in, still doing it ourselves.</h1>
<p className="lede" style={{marginTop: "1.2rem", maxWidth: "640px"} as React.CSSProperties}>Herts Signs Group has been designing, manufacturing and installing signage, vehicle graphics and print since 1993 — staying involved from the first drawing to the final fix on every job.</p>
<div className="about-stats">
<div className="stat-block"><div className="num">1993</div><div className="label">Established</div></div>
<div className="stat-block"><div className="num count-up">30+</div><div className="label">Years in business</div></div>
<div className="stat-block"><div className="num count-up">29,848</div><div className="label">Projects completed</div></div>
</div>
</div>
</section>
<section>
<div className="wrap">
<div className="section-head">
<span className="eyebrow">Our story</span>
<h2>From a Welwyn Garden City workshop to clients across the country.</h2>
</div>
<p className="lede" style={{maxWidth: "720px", marginBottom: "1.2rem"} as React.CSSProperties}>We started as a local sign shop in 1993, and three decades later that's still the core of what we do, even though the client list has grown well beyond Hertfordshire. We've worked with small independent shops fitting out their first unit, and with established organisations running multi-site signage programmes — the job changes scale, but the standard doesn't.</p>
<p className="lede" style={{maxWidth: "720px"} as React.CSSProperties}>Sales, design and manufacture run through one workshop, with our own team handling most installations and trusted specialists brought in where a job calls for it. That's deliberate. Keeping the work close means we stay accountable for it from first drawing to final fix, rather than handing it over and hoping.</p>
</div>
</section>
<section>
<div className="wrap">
<div className="section-head">
<span className="eyebrow">Trusted by</span>
<h2>Preferred and contracted supplier status.</h2>
</div>
<p className="lede" style={{maxWidth: "640px", marginBottom: "2rem"} as React.CSSProperties}>We hold ongoing supplier relationships with organisations that need signage done reliably, not just once.</p>
<div className="logo-strip">
<span className="logo-credit" data-label="Preferred Supplier">
<img alt="The Galleria — preferred signage supplier" className="logo-strip-item" src="/img/galleria.png"/>
</span>
<span className="logo-credit" data-label="Contracted Supplier">
<img alt="Hertfordshire County Council — contracted supplier" className="logo-strip-item logo-strip-item--crest" src="/img/hcc.png"/>
</span>
<span className="logo-credit" data-label="Contracted Supplier">
<img alt="University of Hertfordshire — contracted supplier" className="logo-strip-item" src="/img/uh.png"/>
</span>
<span className="logo-credit" data-label="Contracted Supplier">
<img alt="Savills Property Management — contracted supplier" className="logo-strip-item logo-strip-item--crest" src="/img/savills.png"/>
</span>
<span className="logo-credit" data-label="Contracted Supplier">
<img alt="Hatfield Town Council — contracted supplier" className="logo-strip-item" src="/img/HTC2.png"/>
</span>
</div>
</div>
</section>
<section>
<div className="wrap">
<div className="section-head">
<span className="eyebrow">What makes us different</span>
<h2>Three things clients mention most.</h2>
</div>
<div className="value-grid">
<div className="value-card">
<span className="code">01</span>
<h3>One team, accountable throughout</h3>
<p>Every job is run and tracked through our own job management system, so the detail carries from quote through to fit — nothing lost between people who don't talk to each other.</p>
</div>
<div className="value-card">
<span className="code">02</span>
<h3>Installers who know signage</h3>
<p>Our fitting team is Avery approved and trained specifically on signage and vehicle graphics, not general building maintenance handling a sign as a side job.</p>
</div>
<div className="value-card">
<span className="code">03</span>
<h3>Built for the long term</h3>
<p>We design and specify for durability, not just the handover photo — materials and fixings chosen to survive years outdoors, not just the first winter.</p>
</div>
</div>
</div>
</section>
<section>
<div className="wrap">
<div className="section-head">
<span className="eyebrow">Compliance</span>
<h2>Properly insured, properly assessed.</h2>
</div>
<div className="trust-strip" style={{border: "none", padding: "0"} as React.CSSProperties}>
<span className="trust-item"><b>£10M</b> Public Liability</span>
<span className="trust-item"><b>£5M</b> Employers Liability</span>
<span className="trust-item">COSHH Assessment Compliant</span>
<span className="trust-item">Eco-Friendly Inks Policy</span>
<span className="trust-item"><b>IPAF, PASMA &amp; CSCS</b> Accredited</span>
</div>
</div>
</section>
<section className="page-cta">
<div className="wrap">
<h2>Want to talk through a project?</h2>
<p className="lede">Get in touch and we'll come back with a straight answer on what's possible and what it costs.</p>
<div className="hero-actions">
<a className="btn-primary" href="/contact-us">Contact us →</a>
<a className="btn-ghost" href="tel:01707257575">Call 01707 257 575</a>
</div>
</div>
</section>

    </main>
  );
}
