import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Work | Herts Signs Group",
  description: "Recent signage, vehicle wrapping and print projects from Herts Signs Group, Hertfordshire.",
};

export default function Page() {
  return (
    <main>
      
<section className="subhero" style={{borderBottom: "none"} as React.CSSProperties}>
<div className="wrap">
<span className="breadcrumb"><a href="/">Home</a> / Work</span>
<span className="eyebrow">Our work</span>
<h1 style={{marginTop: "0.6rem"} as React.CSSProperties}>A few jobs we're proud of.</h1>
<p className="lede" style={{marginTop: "1.2rem"} as React.CSSProperties}>Browse by type, or see everything we've worked on across signage, vehicle graphics and print.</p>
</div>
</section>
<section style={{paddingTop: "2rem"} as React.CSSProperties}>
<div className="wrap">
<div aria-label="Filter work by category" className="filter-tabs" role="tablist">
<button className="filter-tab active" data-filter="all">All</button>
<button className="filter-tab" data-filter="vehicle">Vehicle Graphics</button>
<button className="filter-tab" data-filter="signage">Signage</button>
<button className="filter-tab" data-filter="print">Large Format &amp; Print</button>
<button className="filter-tab" data-filter="window">Window Films</button>
<button className="filter-tab" data-filter="exhibitions">Exhibitions</button>
<button className="filter-tab" data-filter="clothing">Clothing &amp; Merch</button>
</div>

<div className="work-grid-full" id="work-grid">
<div className="work-card" data-category="signage">
<img alt="Sovereign Network Group signage installation" src="/img/signage-cut-viny.png"/>
<div className="tag">
<div className="client">Sovereign Network Group</div>
<div className="service">Signage, Cut Vinyl</div>
</div>
</div>
<div className="work-card" data-category="vehicle">
<img alt="T.J. Fire and Security van wrap" src="/img/t-j-fire-security.jpg"/>
<div className="tag">
<div className="client">T.J. Fire &amp; Security</div>
<div className="service">Car Wrapping</div>
</div>
</div>
<div className="work-card" data-category="signage">
<img alt="Hertfordshire Combat Centre signage" src="/img/hertfordshire-combat-centre.jpg"/>
<div className="tag">
<div className="client">Hertfordshire Combat Centre</div>
<div className="service">Signage Supplied &amp; Installed</div>
</div>
</div>
<div className="work-card" data-category="vehicle">
<img alt="Demo vehicle wrap, full colour tiger design" src="/img/van-side.png"/>
<div className="tag">
<div className="client">Studio Demo</div>
<div className="service">Full Vehicle Wrap</div>
</div>
</div>

<div className="work-card" data-category="signage">
<img alt="vinyl lettering, wooden board" src="/img/countyshow.jpg"/>
<div className="tag">
<div className="client">Hertfordshire County Show</div>
<div className="service">Vinyl names to award board</div>
</div>
</div>
<div className="work-card" data-category="signage">
<img alt="Signage, window graphics, fret cut letters" src="/img/obt.jpeg"/>
<div className="tag">
<div className="client">Off Broadway Travel</div>
<div className="service">Refreshed and replaced signage</div>
</div>
</div>
<div className="work-card" data-category="vehicle">
<img alt="Vehicle Wrap" src="/img/all4coffee.jpg"/>
<div className="tag">
<div className="client">All4Coffee</div>
<div className="service">Partial Vehicle Wrap</div>
</div>
</div>
<div className="work-card" data-category="window">
<img alt="Etched window floods" src="/img/etch.jpeg"/>
<div className="tag">
<div className="client">University of Hertfordshire</div>
<div className="service">Etched film floods to new windows</div>
</div>
</div>
</div>
</div>
</section>
<section className="page-cta">
<div className="wrap">
<h2>Want to see your job here next?</h2>
<p className="lede">Tell us what you're after and we'll get a quote together.</p>
<div className="hero-actions">
<a className="btn-primary" href="/contact-us">Get a quote →</a>
<a className="btn-ghost" href="tel:01707257575">Call 01707 257 575</a>
</div>
</div>
</section>

    </main>
  );
}
